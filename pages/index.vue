<template>
  <div class="container">
    <h1>Hello, world!</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Index extends Vue {}
</script>

<style lang="scss">
.container {
  display: flex;
}
</style>
