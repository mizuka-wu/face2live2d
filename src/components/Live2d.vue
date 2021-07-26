<template>
  <canvas ref="container" />
</template>

<script lang="ts" setup>
import { onMounted, defineProps, ref, Ref } from 'vue'
import * as PIXI from 'pixi.js'
import { Live2DModel } from 'pixi-live2d-display/dist/cubism4.min.js'

const props = defineProps({
  path: {
    required: true,
    type: String
  }
})

/**
 * 舞台搭建
 */
const container: Ref<HTMLCanvasElement | null> = ref(null)
const app: Ref<PIXI.Application | null> = ref(null)
const model: Ref<Live2DModel | null> = ref(null)
onMounted(async () => {
  app.value = new PIXI.Application({
    view: container.value as HTMLCanvasElement,
    autoStart: true
  })
  model.value = await Live2DModel.from(props.path)
  app.value.stage.addChild(model.value)
})

</script>

<style>
</style>
