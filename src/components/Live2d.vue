<template>
  <canvas class="width: 100%" ref="container" style="width: 100%;height: 100%" />
</template>

<script lang="ts" setup>
import { onMounted, defineProps, ref, Ref } from 'vue'
import { setParameterValue } from '../utils/model'
import * as PIXI from 'pixi.js'
import { Live2DModel } from 'pixi-live2d-display/dist/cubism4.min.js'
Live2DModel.registerTicker(PIXI.Ticker)

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
  model.value = await Live2DModel.from(props.path, {
    autoInteract: false
  })
  const { width, height } = model.value

  app.value = new PIXI.Application({
    transparent: true,
    view: container.value as HTMLCanvasElement,
    autoStart: true,
    width,
    height
  })
  app.value.stage.addChild(model.value)

  model.value.rotation = Math.PI
  model.value.skew.x = Math.PI
  model.value.x = width / 2
  model.value.y = height / 2

  model.value.scale.set(1, 1)
  model.value.anchor.set(0.5, 0.5)

  model.value.buttonMode = true

  const updateFn = model.value.internalModel.motionManager.update

  model.value.internalModel.motionManager.update = (modelConfig, now) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setParameterValue(modelConfig as any)

    return updateFn.call(
      model.value?.internalModel.motionManager,
      modelConfig,
      now)
  }
})

</script>

<style>
</style>
