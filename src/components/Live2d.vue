<template>
    <canvas ref="container"/>
</template>

<script lang="ts" setup>
import { onMounted, defineProps, ref, Ref } from 'vue'
import * as PIXI from 'pixi.js'
import { Live2DModel } from 'pixi-live2d-display/lib/cubism4'

const props = defineProps({
  path: {
    required: true,
    type: String
  }
})

/**
 * 舞台搭建
 */
const container: Ref<HTMLCanvasElement|null> = ref(null)
const app: Ref<PIXI.Application | null> = ref(null)
onMounted(async () => {
  app.value = new PIXI.Application({
    view: container.value as HTMLCanvasElement,
    autoStart: true
  })
  const model = await Live2DModel.from(props.path)
  app.value.stage.addChild(model)
})

</script>

<style>
</style>
