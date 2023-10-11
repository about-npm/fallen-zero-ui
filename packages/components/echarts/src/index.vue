<!--
 * @Author       : fallen_zero
 * @Date         : 2023-10-11 08:33:17
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2023-10-11 08:56:14
 * @FilePath     : /fallen-zero-ui/packages/components/echarts/src/index.vue
 * @FileName     : 
-->
<script setup lang="ts">
import { shallowRef, watch, nextTick, onBeforeUnmount } from 'vue';
import { debounce } from '../../utils';
import { init } from 'echarts';
import type { EChartsOption, EChartsType } from 'echarts';
// 生成水滴图需要
import 'echarts-liquidfill';

defineOptions({
  name: 'FzECharts',
});

// echarts dom
const echartsRef = shallowRef<HTMLElement | null>(null);

/**
 * 父级传入值类型
 * @param {string} eid 标签id, 保持唯一
 * @param {EchartsOption} option echarts 配置
 */
interface PropsConfig {
  option: EChartsOption | undefined; // echarts 配置
}
// 获取父级传入的值
const props = defineProps<PropsConfig>();
/**
 * 父级传入的方法类型
 */
interface EmitsConfig {
  (_e: 'reload', _val: void): void; // 重新生成 二charts 配置
  (_e: 'getEcharts', _val: EChartsType): void; // 获取 echarts 进行操作控制
}
// 获取父级传入的方法
const emit = defineEmits<EmitsConfig>();
// 定义 echart
let echart: EChartsType;

/**
 * 创建 echarts 图
 */
const draw = (): void => {
  // 清除当前的 echarts 图内容
  echart.clear();
  // 判断 echarts 配置是否传入, 未传入直接跳出
  if (!props.option) return;
  // 生成 echarts 图
  echart.setOption(props.option);
  // 将 echarts 抛出, 在父级控制
  emit('getEcharts', echart);
};

/**
 * 初始化
 */
const initEchart = (): void => {
  // 判断 echarts 配置是否传入 或者  dom 元素不存在, 未传入直接跳出
  if (!props.option || !echartsRef.value) return;
  // 判断当前 echarts 图是否存在, 存在, 先销毁
  if (echart && !echart.isDisposed()) echart.dispose();
  // 初始化 echarts 图
  echart = init(echartsRef.value);
  // 生成 echarts 图
  draw();
};

/* 监听 echarts 参数的变化, 参数发生变化时, 初始化 */
watch(
  () => props.option,
  () => {
    nextTick(() => {
      initEchart();
    });
  },
  { immediate: true }
);

/* 监听窗口大小的变化, 窗口大小变化时, 重新生成配置, 调整 echarts 图大小 */
window.addEventListener(
  'resize',
  debounce(() => {
    emit('reload');
    echart.resize();
  }, 200)
);

onBeforeUnmount(() => {
  echart.dispose();
  window.removeEventListener(
    'resize',
    debounce(() => {
      emit('reload');
      echart.resize();
    }, 200)
  );
});
</script>

<template>
  <div class="fz-echarts">
    <div ref="echartsRef" class="fz-echarts-main"></div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
