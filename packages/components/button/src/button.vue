<!--
 * @Author       : fallen_zero
 * @Date         : 2023-10-10 10:08:15
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2023-10-10 10:09:14
 * @FilePath     : /fallen-zero-ui/packages/components/button/src/button.vue
 * @FileName     : 
-->
<script setup lang="ts">
defineOptions({
  name: 'FzButton',
});
</script>

<template>
  <button>
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped></style>
