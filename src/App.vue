<template>
  <div id="app">
    <!-- <Face></Face> -->
    <Live2d :path="path"></Live2d>
    <ModelParamter></ModelParamter>
  </div>
</template>

<script lang="ts" setup>
import Live2d from './components/Live2d.vue'
import ModelParamter from './components/ModelParamter.vue'
const path = '/live2d/kueshishui.model3.json'

</script>
