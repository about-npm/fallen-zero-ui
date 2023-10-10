<!--
 * @Author       : fallen_zero
 * @Date         : 2023-10-10 10:13:25
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2023-10-10 15:38:55
 * @FilePath     : /fallen-zero-ui/play/src/App.vue
 * @FileName     : 
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { Button } from '@fallen-zero/components';
</script>

<template>
  <Button>12313</Button>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
