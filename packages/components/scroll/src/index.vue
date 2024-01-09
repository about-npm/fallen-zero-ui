<!--
 * @Author       : fallen_zero
 * @Date         : 2023-10-11 08:55:11
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2024-01-09 08:44:57
 * @FilePath     : /fallen-zero-ui/packages/components/scroll/src/index.vue
 * @FileName     : 自动滚动组件
-->

<script setup lang="ts" generic="T">
import {
  watch,
  nextTick,
  onBeforeUnmount,
  computed,
  ref,
  onMounted,
} from 'vue';
import { debounce } from '../../utils';

const props = withDefaults(
  defineProps<{
    list: T[];
    /** 滚动一次需要多久完成滚动 */
    step?: number;
    /** 是否允许滚动 */
    modelValue?: boolean;
    /** 是否允许鼠标滚轮滚动 */
    wheel?: boolean;
    /** 是否鼠标悬停时暂停滚动 */
    hover?: boolean;
    /** 延迟滚动时间 */
    delay?: number;
    /** 滚动停顿时间 */
    waitTime?: number;
  }>(),
  {
    step: 800,
    modelValue: true,
    wheel: true,
    hover: true,
    delay: 0,
    waitTime: 0,
  }
);

const emit = defineEmits<{
  'update:modelValue': [boolean];
}>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});

const listNumber = ref(1);

const dataList = computed(() => {
  return Array(listNumber.value)
    .fill(1)
    .map((el, index) => ({
      id: index + el,
      list: props.list,
    }));
});

let boxAnimation: Animation | undefined = void 0;

const ob = new IntersectionObserver((entries) => {
  entries.forEach((el) => {
    const dataName = el.target.getAttribute('data-name');
    if (dataName === 'box') {
      listNumber.value = el.intersectionRatio < 1 ? 2 : 1;
      nextTick(() => {
        setTimeout(startScroll, props.delay);
      });
    }
  });
  const list = entries.filter((el) => el.target.getAttribute('data-index'));
  const firstItem = list.find((el) => el.intersectionRatio === 1);
  if (firstItem) {
    scrollIndex.value = Number(firstItem.target.getAttribute('data-index'));
  }
  list.forEach((el) => {
    ob.unobserve(el.target);
  });
});

/** 盒子 */
const boxRef = ref<HTMLDivElement | null>(null);
/** 列表 */
const listRefs = ref<HTMLDivElement[]>([]);
/** 列表子项 */
const itemRefs = ref<HTMLDivElement[]>([]);

/** 滚动下标 */
const scrollIndex = ref(0);

/** 滚动高度数组 */
const heightList = computed(() => {
  return [
    0,
    ...itemRefs.value
      .slice(1, Math.floor(itemRefs.value.length / listNumber.value) + 1)
      .map((el) => el.offsetTop),
  ];
});

/** 重新监听盒子 */
const reWatchbox = debounce(() => {
  listNumber.value = 1;
  boxAnimation?.cancel();
  boxAnimation = void 0;
  nextTick(() => {
    if (boxRef.value) {
      ob.unobserve(boxRef.value);
      ob.observe(boxRef.value);
    }
  });
}, 200);

const inWheel = ref(false);
const inHover = ref(false);

/** 不间断滚动 */
const continuousRolling = () => {
  if (listRefs.value.length > 1) {
    if (inWheel.value) return;
    if (boxAnimation) {
      boxAnimation.play();
      return;
    }

    if (scrollIndex.value) {
      boxAnimation = boxRef.value?.animate(
        [
          {
            transform: `translateY(${
              -1 * heightList.value[scrollIndex.value]
            }px)`,
          },
          {
            transform: `translateY(-50%)`,
          },
        ],
        {
          duration: props.step * (props.list.length - scrollIndex.value),
          easing: 'linear ',
        }
      );
      const finish = () => {
        scrollIndex.value = 0;
        boxAnimation?.removeEventListener('finish', finish);
        boxAnimation = void 0;
        continuousRolling();
      };
      boxAnimation?.addEventListener('finish', finish);
      return;
    }

    boxAnimation = boxRef.value?.animate(
      [
        {
          transform: `translateY(0px)`,
        },
        {
          transform: `translateY(-50%)`,
        },
      ],
      {
        duration: props.step * props.list.length,
        iterations: Infinity,
        easing: 'linear ',
      }
    );
  }
};

/** 不间断滚动暂停 */
const continuousRollingPause = () => {
  if (boxAnimation) {
    boxAnimation.pause();

    if (!inHover.value) {
      itemRefs.value.forEach((el) => {
        ob.observe(el);
      });
      inHover.value = true;
    }
  }
};

/** 不间断滚动开始 */
const continuousRollingPlay = () => {
  inWheel.value = false;
  inHover.value = false;
  continuousRolling();
};

/** 间隔滚动定时器 */
let intervalTimer: ReturnType<typeof setTimeout> | null = null;

/** 修改过渡动画时间 */
const changeTransition = (time?: number | string) => {
  if (!boxRef.value) return;
  if (typeof time === 'number' || typeof time === 'undefined') {
    boxRef.value.style.transition = `transform ${time ?? props.step}ms linear`;
    return;
  }
  boxRef.value.style.transition = time;
};

/** 间隔滚动 */
const intervalScrolling = () => {
  intervalTimer = setTimeout(() => {
    if (scrollIndex.value >= heightList.value.length - 1) {
      changeTransition(0);
      scrollIndex.value = -1;
      wheelScrollEvent(DIRECTION.DOWN, false);
    }
    setTimeout(() => {
      changeTransition();
      wheelScrollEvent(DIRECTION.DOWN, false);
    }, 100);
  }, props.waitTime);
};

/** 间隔滚动暂停 */
const intervalScrollingPause = () => {
  if (intervalTimer) {
    clearTimeout(intervalTimer);
    intervalTimer = null;
  }
  if (!boxRef.value) return;
  changeTransition(0);
  boxRef.value.removeEventListener('transitionend', intervalScrolling, true);
};

/** 间隔滚动开始 */
const intervalScrollingPlay = () => {
  if (!boxRef.value) return;
  changeTransition();
  intervalScrolling();
  boxRef.value.addEventListener('transitionend', intervalScrolling, true);
};

enum DIRECTION {
  UP = -1,
  DOWN = 1,
}

/** 滚轮滚动事件
 * @param direction 方向
 */
const wheelScrollEvent = (direction: DIRECTION, auto = true) => {
  if (!boxRef.value) return;
  scrollIndex.value += direction;

  if (direction === DIRECTION.UP && scrollIndex.value < 0) {
    scrollIndex.value = heightList.value.length - 2;
  }

  if (
    direction === DIRECTION.DOWN &&
    scrollIndex.value > heightList.value.length - (auto ? 2 : 1)
  ) {
    scrollIndex.value = 0;
  }
  boxRef.value.style.transform = `translateY(${
    -1 * heightList.value[scrollIndex.value]
  }px)`;
};

/** 滚轮滚动 */
const wheelScroll = (e: WheelEvent) => {
  if (listNumber.value === 1) return;
  inWheel.value = true;
  boxAnimation?.cancel();
  boxAnimation = void 0;
  if (e.deltaY > 0) {
    wheelScrollEvent(DIRECTION.DOWN);
  } else {
    wheelScrollEvent(DIRECTION.UP);
  }
};

/** 开始滚动 */
const startScroll = () => {
  if (!value.value || listNumber.value === 1) return;
  if (!props.waitTime) {
    continuousRollingPlay();
    return;
  }
  intervalScrollingPlay();
};

/** 停止滚动 */
const stopScroll = () => {
  if (!props.waitTime) {
    continuousRollingPause();
    return;
  }
  intervalScrollingPause();
};

onMounted(() => {
  reWatchbox();
  window.addEventListener('resize', reWatchbox);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', reWatchbox);
  intervalScrollingPause();
});

watch(
  () => props.list,
  () => {
    reWatchbox();
  }
);

watch(value, (val) => {
  if (val) {
    startScroll();
    return;
  }
  stopScroll();
});
</script>

<template>
  <div class="fz-scroll">
    <div class="fz-scroll-container">
      <div
        ref="boxRef"
        class="fz-scroll-container-box"
        data-name="box"
        @wheel="wheel && hover && wheelScroll($event)"
        @mouseover="hover && stopScroll()"
        @mouseleave="hover && startScroll()"
      >
        <div
          v-for="item in dataList"
          :key="item.id"
          ref="listRefs"
          class="fz-scroll-container-box__list"
        >
          <div
            v-for="(child, index) in item.list"
            :key="index"
            ref="itemRefs"
            :data-index="index"
            class="fz-scroll-container-box__list-item"
          >
            <slot :index="index" :data="child">
              <div>{{ child }}</div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
