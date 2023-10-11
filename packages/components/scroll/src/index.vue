<!--
 * @Author       : fallen_zero
 * @Date         : 2023-10-11 08:55:11
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2023-10-11 09:00:00
 * @FilePath     : /fallen-zero-ui/packages/components/scroll/src/index.vue
 * @FileName     : 
-->

<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
  nextTick,
  onBeforeUnmount,
  watch,
} from 'vue';
import { debounce } from '../../utils';

interface Props {
  /** 是否允许滚动 */
  modelValue?: boolean;
  /** 列表数据 */
  list: any[];
  /** 是否允许鼠标滚轮滚动 */
  wheel?: boolean;
  /** 是否鼠标悬停时暂停滚动 */
  hover?: boolean;
  /** 延迟滚动时间 */
  delay?: number;
  /** 滚动停顿时间 */
  waitTime?: number;
  /** 滚动一次需要多久完成滚动 */
  step?: number;
}

// 父级传入的值
const props = withDefaults(defineProps<Props>(), {
  modelValue: true,
  wheel: true,
  hover: true,
  delay: 0,
  waitTime: 0,
  step: 800,
});

// 父级传入的方法
interface Emits {
  (_e: 'update:modelValue', _val: boolean): void;
}
// const emit =
defineEmits<Emits>();

// 最外层容器
const scrollRef = ref<HTMLDivElement | null>(null);
// 实时数据容器
const scrollBoxRef = ref<HTMLDivElement | null>(null);
// 用于存储复制数据
const scrollListRefs = ref<HTMLDivElement[]>([]);
// 实时数据
const dataList = ref<any[][]>([]);
// 传入的数据长度
const len = computed<number>(() => props.list.length);
// 允许滚动
const ableScroll = ref<boolean>(false);
// 视口监听器
let observer: IntersectionObserver | null = null;
// 定时器
let timer: ReturnType<typeof setTimeout> | null = null;
// 方向
enum DIRECTION {
  UP = 1,
  DOWN = -1,
}

/** 清除定时器 */
const clearTimer = () => {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
};

/** 复制数据 */
const copyData = () => {
  if (dataList.value.length >= 2) return;
  dataList.value.push(props.list);
  ableScroll.value = true;
};

/** 清除数据 */
const clearData = () => {
  dataList.value.splice(1, dataList.value.length);
  ableScroll.value = false;
};

/** 监听页面大小变化 */
const listenerResize = debounce(() => {
  scrollBoxRef.value && observer?.observe(scrollBoxRef.value);
}, 200);

onMounted(() => {
  copyData();
  nextTick(() => {
    if (!scrollRef.value) return;
    observer = new IntersectionObserver(
      (entries, _observer) => {
        entries.forEach(({ intersectionRatio, target }) => {
          if ((target as HTMLDivElement).dataset.type === 'box') {
            if (intersectionRatio >= 0.5) {
              clearData();
            }
            _observer.unobserve(target);
            return;
          }
          // 判断元素是否完整的显示在视口, 超出视口则复制一份
          if (
            intersectionRatio > 0 &&
            intersectionRatio < 1 &&
            dataList.value.length < 2
          ) {
            copyData();
            return;
          }
          // 判断元素是否完整的显示在视口, 完整显示则不复制
          if (intersectionRatio === 1) {
            clearData();
          }
        });
      },
      {
        threshold: 1.0,
        root: scrollRef.value,
      }
    );
    scrollListRefs.value[0] && observer.observe(scrollListRefs.value[0]);
    window.addEventListener('resize', listenerResize);
    scrollBoxRef.value?.addEventListener('transitionend', listenerResetScroll);
  });
});

onBeforeUnmount(() => {
  scrollListRefs.value[0] && observer?.unobserve(scrollListRefs.value[0]);
  window.removeEventListener('resize', listenerResize);
  clearTimer();
  clearScrollTimer();
  scrollBoxRef.value?.removeEventListener('transitionend', listenerResetScroll);
});

// 持续滚动
const animation = computed<Animation | null>(() => {
  if (!scrollBoxRef.value) return null;
  return scrollBoxRef.value.animate(
    [
      {
        transform: 'translateY(0)',
      },
      {
        transform: 'translateY(-50%)',
      },
    ],
    {
      iterations: Infinity,
      easing: 'linear ',
      duration: len.value * props.step,
      delay: props.delay,
    }
  );
});

// 滚动定时
let scrollTimer: ReturnType<typeof setTimeout> | null = null;

/** 清除滚动定时 */
const clearScrollTimer = () => {
  if (scrollTimer) {
    clearTimeout(scrollTimer);
    scrollTimer = null;
  }
};

/** 滚动高度数组 */
const getScrollHeights = (): number[] => {
  const heights: number[] = [];
  if (!scrollListRefs.value[0]) return heights;
  const childLen = scrollListRefs.value[0].children.length;
  for (let i = 0; i < childLen; i++) {
    heights.push(
      (scrollListRefs.value[0].children[i] as HTMLDivElement).offsetTop
    );
  }
  if (scrollListRefs.value[1]) {
    heights.push(scrollListRefs.value[1].offsetTop);
  }
  return heights;
};

// 当前滚动下标
const scrollIndex = ref<number>(-1);

/** 获取滚动的高度 */
const getScrollHeight = () => {
  const height = getScrollHeights()[scrollIndex.value];
  return height;
};

/** 重置滚动 */
const listenerResetScroll = () => {
  if (!scrollBoxRef.value) return;
  if (scrollIndex.value >= getScrollHeights().length - 1) {
    scrollIndex.value = 0;
    scrollBoxRef.value.style.transition = `none`;
    scrollBoxRef.value.style.transform = `translateY(0px)`;
  }
};

/** 逐条滚动
 * @param {DIRECTION} _dir 滚动方向
 * @returns {void}
 */
const detailedScroll = (
  _dir: DIRECTION = DIRECTION.DOWN,
  transition = true
): void => {
  if (!scrollBoxRef.value) return;
  scrollIndex.value -= _dir;
  const height = getScrollHeight();
  const y = height * -1;
  scrollBoxRef.value.style.transition = transition
    ? `transform ${props.step}ms linear`
    : 'none';
  scrollBoxRef.value.style.transform = `translateY(${y}px)`;
  if (!transition) {
    const scrollLen = getScrollHeights().length;
    if (scrollIndex.value >= scrollLen - 1) {
      scrollIndex.value = 0;
      scrollBoxRef.value.style.transform = `translateY(0px)`;
    }
    if (scrollIndex.value < 0) {
      scrollIndex.value = scrollLen - 1;
      detailedScroll(_dir, transition);
    }
  }
};

/** 鼠标滚轮滚动 */
const wheelScroll = (payload: WheelEvent) => {
  if (payload.deltaY) {
    detailedScroll(payload.deltaY > 0 ? DIRECTION.DOWN : DIRECTION.UP, false);
  }
};

/** 间歇滚动
 * @param {DIRECTION} _dir 滚动方向
 * @returns {void}
 */
const intermittentScroll = (_dir: DIRECTION = DIRECTION.DOWN): void => {
  detailedScroll(_dir);
  clearScrollTimer();
  scrollTimer = setTimeout(() => {
    intermittentScroll(_dir);
  }, props.waitTime);
};

/** 开启滚动 */
const playScroll = (): void => {
  if (!props.modelValue) return;
  nextTick(() => {
    clearTimer();
    timer = setTimeout(() => {
      if (props.waitTime <= 0) {
        // 开始持续滚动
        animation.value?.play();
        return;
      }
      intermittentScroll();
    }, props.delay);
  });
};

/** 重置滚动 */
const resetScroll = (): void => {
  if (!scrollBoxRef.value) return;
  clearScrollTimer();
  clearTimer();
  scrollBoxRef.value.style.transition = 'none';
  scrollBoxRef.value.style.transform = 'translateY(0px)';
  scrollIndex.value = -1;
};

/** 结束滚动 */
const endScroll = (): void => {
  clearTimer();
  nextTick(() => {
    // 结束逐条滚动
    clearScrollTimer();
    // 结束持续滚动
    animation.value?.cancel();
  });
};

/** 停止滚动 */
const stopScroll = () => {
  nextTick(() => {
    if (props.waitTime <= 0) {
      // 停止持续滚动
      animation.value?.pause();
      return;
    }
    // 停止逐条滚动
    clearScrollTimer();
  });
};

watch(
  dataList,
  (val) => {
    resetScroll();
    if (val.length >= 2) {
      playScroll();
      return;
    }
    endScroll();
  },
  { deep: true }
);

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      playScroll();
      return;
    }
    stopScroll();
  }
);

watch(
  () => props.list,
  () => {
    dataList.value = [];
    copyData();
  },
  { deep: true }
);
</script>

<template>
  <div
    ref="scrollRef"
    class="fz-scroll"
    @wheel="wheel && hover && ableScroll && wheelScroll($event)"
    @mouseover="hover && ableScroll && stopScroll()"
    @mouseleave="hover && ableScroll && playScroll()"
  >
    <div ref="scrollBoxRef" data-type="box" class="fz-scroll-box">
      <div
        v-for="(_list, index) in dataList"
        ref="scrollListRefs"
        :key="index"
        data-type="list"
        class="fz-scroll-box__list"
      >
        <div
          v-for="(item, i) in _list"
          :key="i"
          class="fz-scroll-box__list-item"
        >
          <slot :index="i" :data="item">
            <div class="fz-scroll-box__list-item-info">
              {{ item }}
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
