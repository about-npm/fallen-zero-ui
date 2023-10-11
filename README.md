# Fallen Zero UI

## 安装

```bash
# npm
npm install fallen-zero-ui

# yarn
yarn add fallen-zero-ui

#pnpm (推荐使用)
pnpm add fallen-zero-ui
```

## 快速开始

### 全局使用

> 在 `main.ts` 中引入注册, 全局注册没有代码提示

```typescript
// * main.ts

import { createApp } from 'vue';
import App from '@/App.vue';
// 引入组件
import FallenZeroUi from 'fallen-zero-ui';
// 引入样式
import 'fallen-zero-ui/dist/style.css';

const app = createApp(App);
app.use(FallenZeroUi);

app.mount('#app');
```

### 按需引入 (推荐使用)

> 建议全局样式全局引入

```typescript
// main.ts
import 'fallen-zero-ui/dist/style.css';
```

> 在页面中使用

```vue
<script lang="ts" setup>
import { EChartsOption } from 'echarts';
import { FzCountTo, FzECharts, FzScroll } from 'fallen-zero-ui';
import 'fallen-zero-ui/dist/index.css';

const echartsOptions: EChartsOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
};

const list = ref<number[]>([]);

for (let i = 0; i < 40; i++) {
  list.value.push(i);
}
</script>

<template>
  <div>
    <FzCountTo :end-val="100" />
    <div class="w-300px h-200px">
      <FzECharts :option="echartsOptions" />
    </div>
  </div>

  <div class="box">
    <FzScroll :list="list" :wait-time="2000">
      <template #default="{ data }">
        {{ data }}
      </template>
    </FzScroll>
  </div>
</template>

<style lang="scss">
.box {
  width: 500px;
  height: 60%;
  margin: 0 auto;
  background: rgb(255 255 255 / 0.2);
}
</style>

```

## 组件说明

| 组件      | 说明            |
| --------- | --------------- |
| FzCountTo | 数字滚动组件    |
| FzECharts | 生成ECharts组件 |
| FzScroll  | 列表滚动组件    |

### FzCountTo - 滚动数字组件

#### 参数说明

| 参数名    | 类型     | 说明                   | 默认值                             |
| --------- | -------- | ---------------------- | ---------------------------------- |
| startVal  | number   | 开始值                 | 0                                  |
| endVal    | number   | 结束值                 | 当前年份(new Date().getFullYear()) |
| duration  | number   | 持续时间, 以毫秒为单位 | 3000                               |
| autoplay  | boolean  | 自动播放               | true                               |
| decimals  | number   | 要显示的小数位数       | 0                                  |
| decimal   | string   | 十进制分割             | .                                  |
| separator | string   | 分隔符                 | ,                                  |
| prefix    | string   | 前缀                   | ''                                 |
| suffix    | string   | 后缀                   | ''                                 |
| useEasing | boolean  | 使用缓和功能           | true                               |
| easingFn  | Function | 缓和回调               | -                                  |

**注意: 当 autoplay: true 时, 它将在 startVal 或 endVal 更改时自动启动**

#### 回调函数说明

| 函数名称          | 参数 | 说明                                 |
| ----------------- | ---- | ------------------------------------ |
| @mounted-callback | -    | 组件挂载时执行的回调函数             |
| @callback         | -    | 数字滚动到结束值得时候执行的回调函数 |

#### 事件说明

| 事件名称    | 参数 | 说明                                                |
| ----------- | ---- | --------------------------------------------------- |
| start       | -    | 重新开始滚动                                        |
| pause       | -    | 暂停滚动                                            |
| resume      | -    | 继续滚动                                            |
| pasueResume | -    | 暂停时继续滚动, 滚动时暂停滚动                      |
| reset       | -    | 重置滚动的数字, 重置后只能调用 `start` 方法重新滚动 |

#### 案例

```vue
<script setup lang="ts">
import { FzCountTo } from 'fallen-zero-ui';
import { useCompRef } from '@fallen-zero/use';

// 组件实例
const countToRef = useCompRef(FzCountTo);
// 重新开始
const restart = () => {
  console.log('restart', countToRef.value);
  countToRef.value && countToRef.value.start();
};
// 暂停
const pause = () => {
  console.log('pause', countToRef.value);
  countToRef.value && countToRef.value.pause();
};
// 继续
const resume = () => {
  console.log('resume', countToRef.value);
  countToRef.value && countToRef.value.resume();
};
// 暂停或继续
const pasueResume = () => {
  console.log('pasueResume', countToRef.value);
  countToRef.value && countToRef.value.pauseResume();
};
// 重置数字
const reset = () => {
  console.log('reset', countToRef.value);
  countToRef.value && countToRef.value.reset();
};
// 挂载完成后回调
const mountedCallback = () => {
  console.log('组件挂载时执行的回调函数');
};
// 数字滚动完成后回调
const callback = () => {
  console.log('数字滚动到结束值得时候执行的回调函数');
};
</script>

<template>
  <FzCountTo
    ref="countToRef"
    :end-val="100"
    :duration="10000"
    @mounted-callback="mountedCallback"
    @callback="callback"
  />
  <el-button @click="restart">重新开始</el-button>
  <el-button @click="resume">继续</el-button>
  <el-button @click="pause">暂停</el-button>
  <el-button @click="pasueResume">继续或暂停</el-button>
  <el-button @click="reset">重置</el-button>
</template>
```

定时滚动案例:

```vue
<script setup lang="ts">
import { FzCountTo } from 'fallen-zero-ui';
import { useCompRef } from '@fallen-zero/use';

const value = ref<number>(2023);

const countRef = useCompRef(FzCountTo);

let timer: NodeJS.Timeout | null = null;

const clearTimer = () => {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
};

const callback = () => {
  if (!props.speed) return;
  clearTimer();
  timer = setTimeout(() => {
    countRef.value?.start();
  }, 3000);
};

onBeforeUnmount(clearTimer);
</script>

<template>
  <FzCountTo ref="countRef" :end-val="value" @callback="callback" />
</template>
```

### FzECharts - Echarts 组件

#### 参数说明

| 参数   | 类型                       | 说明                                                         |
| ------ | -------------------------- | ------------------------------------------------------------ |
| option | EchartsOption \| undefined | echarts 配置, <font color="red">必传</font>, 可以为 undefined |

#### 回调函数说明

| 函数名      | 参数类型    | 说明                                                                                                                                      |
| ----------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| @reload     | -           | 给 echarts 配置 `option` 赋值的方法, 为了解决浏览器窗口变化时, 重新渲染 echarts 图时, 动态字体大小失效问题, <font color="red">必传</font> |
| @getEcharts | EChartsType | 给 echarts 图添加事件                                                                                                                     |

#### 在 `html` 中使用

> 必须以具有宽高的容器进行包裹
>
> <font color="red">控制  **`外部容器`** 显隐时使用 `v-if`  进行控制, `v-show`  会丢失容器宽高导致样式冲突</font>

```vue
<template>
  <!-- 外部容器, 类名自定义, 必须要有宽高 -->
  <div class="echarts">
    <!-- 该组件已全局注册, 直接使用即可 -->
    <plugins-echarts
      eid="test_echarts_id"
      :option="option"
      @reload="getOption"
      @get-echarts="getEcharts"
    ></plugins-echarts>
  </div>
  ...
</template>

<style lang="scss" scoped>
.echarts {
  width: 300px;
  height: 300px;
}
</style>
```

#### `typescript` 中使用

```vue
<script setup lang="ts">
// 引入 echarts 的类型
import type { EchartsType, EchartsOption } from 'echarts';
// 引入配置方法,  如: 柱状图
import bar from '@echarts/bar';
// 定义存放 echarts 配置的变量
const option = ref<EchartsOption>();
/**
 * 定义变量赋值的方法
 */
const getOption = () => {
  // option.value = 获取配置的方法(...参数);
  option.value = bar.getBar();
};
/**
 * 获取 echarts 的方法, 用于对 echarts 添加事件
 */
const getEcharts = (echarts: EchartsType) => {
  // 添加点击事件
  echarts.on('click', function (params) {
    console.log(params);
  });
};

// 在没有给默认值的情况下, 变量赋值的方法一定要在父组件中先执行一次, 否则无法生成 echarts 图
getOptions();

// 如果是对接了接口, 可在接口数据返回后, 执行
const getData = async () => {
  try {
    const res = await 接口方法(...参数);
    if (判断接口是否请求成功) {
      执行数据处理;
      // 执行变量赋值的方法
      getOptions();
      return;
    }
    message.error(接口请求失败, 错误提示);
  } catch (error) {
    message.error(方法出现异常, 错误提示);
  }
};
</script>
```

### FzScroll - 列表滚动组件

#### 参数说明

| 参数       | 类型    | 说明                         | 是否必填 | 默认值 |
| ---------- | ------- | ---------------------------- | -------- | ------ |
| list       | any[]   | 列表数据                     | 是       | -      |
| modelValue | boolean | 是否允许滚动                 | 否       | true   |
| wheel      | boolean | 是否允许鼠标滚轮滚动         | 否       | true   |
| hover      | boolean | 是否鼠标悬停时暂停滚动       | 否       | true   |
| delay      | number  | 延迟滚动时间(ms)             | 否       | 0      |
| waitTime   | number  | 滚动停顿时间(ms)             | 否       | 0      |
| step       | number  | 滚动一次需要多久完成滚动(ms) | 否       | 800    |

#### 案例

```vue
<script setup lang="ts">
import {FzScroll } from 'fallen-zero-ui';
import 'fallen-zero-ui/dist/index.css';
    
const list = ref<number[]>([]);

for (let i = 0; i < 40; i++) {
  list.value.push(i);
}
</script>

<template>
  <div class="box">
    <FzScroll :list="list" :wait-time="2000">
      <template #default="{ data }">
        {{ data }}
      </template>
    </FzScroll>
  </div>
</template>


<style lang="scss" scoped>
.box {
  width: 500px;
  height: 60%;
  margin: 0 auto;
  background: rgb(255 255 255 / 0.2);
}
</style>
```

