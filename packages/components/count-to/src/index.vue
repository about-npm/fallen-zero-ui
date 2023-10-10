<!--
 * @Author       : fallen_zero
 * @Date         : 2023-10-10 16:00:00
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2023-10-10 17:44:48
 * @FilePath     : /fallen-zero-ui/packages/components/count-to/src/index.vue
 * @FileName     : 
-->

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

defineOptions({
  name: 'FzCountTo',
});

/**
 * 父级传入的值类型
 * @param { number } startVal 起始数字
 * @param { number } endVal 结束数字
 * @param { number } duration 滚动持续时间
 * @param { boolean } autoplay 是否
 * @param { number } decimals 要显示的小数点位数
 * @param { string } decimal 十进制分割
 * @param { string } separator 分隔符
 * @param { string } prefix 前缀
 * @param { string } suffix 后缀
 * @param { boolean } useEasing 使用缓和功能
 * @param { Function } easingFn 缓和回调
 */
interface PropsConfig {
  startVal?: number;
  endVal?: number;
  duration?: number;
  autoplay?: boolean;
  decimals?: number;
  decimal?: string;
  separator?: string;
  prefix?: string;
  suffix?: string;
  useEasing?: boolean;
  easingFn?: (_t: number, _b: number, _c: number, _d: number) => number;
}
const props = withDefaults(defineProps<PropsConfig>(), {
  startVal: 0,
  endVal: new Date().getFullYear(),
  duration: 3000,
  autoplay: true,
  decimals: 0,
  decimal: '.',
  separator: ',',
  prefix: '',
  suffix: '',
  useEasing: true,
  easingFn: (t, b, c, d) => {
    return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b;
  },
});
/**
 * 父级传入的方法接口
 */
interface EmitsConfig {
  (_e: 'callback', _val: void): void;
  (_e: 'mountedCallback', _val: void): void;
}
const emit = defineEmits<EmitsConfig>();

/**
 * 判断是否为数字
 * @param { string } val
 * @returns { boolean }
 */
const isNumber = (val: string): boolean => {
  return !isNaN(parseFloat(val));
};

/**
 * 数字格式化
 * @param { number } num 数字
 * @returns { string }
 */
const formatNumber = (num: number): string => {
  let tempnum = num.toFixed(Math.abs(props.decimals));
  tempnum += '';
  const x = tempnum.split('.');
  let x1 = x[0];
  const x2 = x.length > 1 ? props.decimal + x[1] : '';
  const rgx = /(\d+)(\d{3})/;
  if (props.separator && !isNumber(props.separator)) {
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + props.separator + '$2');
    }
  }
  return props.prefix + x1 + x2 + props.suffix;
};

const localStartVal = ref<number>(props.startVal);
const displayValue = ref<string>(formatNumber(props.startVal));
const printVal = ref<number | null>(null);
const paused = ref<boolean>(false);
const localDuration = ref<number>(props.duration);
const startTime = ref<number | null>(null);
const timestamp = ref<number | null>(null);
const remaining = ref<number | null>(null);
const rAF = ref<number | null>(null);

const countDown = computed<boolean>(() => props.startVal > props.endVal);

/**
 * 计算
 */
const count = (times: number) => {
  if (!startTime.value) startTime.value = times;
  timestamp.value = times;
  const progress = times - startTime.value;
  remaining.value = localDuration.value - progress;

  if (props.useEasing) {
    if (countDown.value) {
      printVal.value =
        localStartVal.value -
        props.easingFn(
          progress,
          0,
          localStartVal.value - props.endVal,
          localDuration.value
        );
    } else {
      printVal.value = props.easingFn(
        progress,
        localStartVal.value,
        props.endVal - localStartVal.value,
        localDuration.value
      );
    }
  } else {
    if (countDown.value) {
      printVal.value =
        localStartVal.value -
        (localStartVal.value - props.endVal) * (progress / localDuration.value);
    } else {
      printVal.value =
        localStartVal.value +
        (props.endVal - localStartVal.value) * (progress / localDuration.value);
    }
  }
  if (countDown.value) {
    printVal.value =
      printVal.value < props.endVal ? props.endVal : printVal.value;
  } else {
    printVal.value =
      printVal.value > props.endVal ? props.endVal : printVal.value;
  }
  displayValue.value = formatNumber(printVal.value);
  if (progress < localDuration.value) {
    rAF.value !== null && cancelAnimationFrame(rAF.value);
    rAF.value = requestAnimationFrame(count);
  } else {
    rAF.value !== null && cancelAnimationFrame(rAF.value);
    emit('callback');
  }
};

/**
 * 开始
 */
const start = () => {
  localStartVal.value = props.startVal;
  startTime.value = null;
  localDuration.value = props.duration;
  paused.value = false;
  rAF.value !== null && cancelAnimationFrame(rAF.value);
  rAF.value = requestAnimationFrame(count);
};

/**
 * 启动
 */
const resume = () => {
  startTime.value = null;
  localDuration.value = +(remaining.value || 0);
  localStartVal.value = +(printVal.value || 0);
  rAF.value !== null && cancelAnimationFrame(rAF.value);
  rAF.value = requestAnimationFrame(count);
  paused.value = false;
};

/**
 * 暂停
 */
const pause = () => {
  rAF.value !== null && cancelAnimationFrame(rAF.value);
  paused.value = true;
};

/**
 * 暂停/启动
 */
const pauseResume = () => {
  if (paused.value) {
    resume();
  } else {
    pause();
  }
};

/**
 * 重置
 */
const reset = () => {
  startTime.value = null;
  rAF.value !== null && cancelAnimationFrame(rAF.value);
  displayValue.value = formatNumber(props.startVal);
};

/* 监听起始数字和结束数字的变化 */
watch(
  () => [props.startVal, props.endVal],
  () => {
    if (props.autoplay) {
      start();
    }
  }
);

onMounted(() => {
  if (props.autoplay) {
    start();
  }
  emit('mountedCallback');
});

onBeforeUnmount(() => {
  rAF.value !== null && cancelAnimationFrame(rAF.value);
});

defineExpose({ pauseResume, pause, reset, resume, start });
</script>

<template>
  <span>{{ displayValue }}</span>
</template>

<style lang="scss" scoped></style>
