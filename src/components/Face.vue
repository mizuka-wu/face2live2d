<template>
    <canvas ref="canvasElement" />
</template>
<script lang="ts" setup>
import { ref, onMounted, Ref } from 'vue'
import face, { canvas } from '@/utils/face'

const canvasElement: Ref<null | HTMLCanvasElement> = ref(null)
function draw () {
  if (canvasElement.value) {
    canvasElement.value.width = canvas.width
    canvasElement.value.height = canvas.height
    const context = canvasElement.value.getContext('2d')
    // eslint-disable-next-line no-unused-expressions
    context?.drawImage(canvas, 0, 0)
  }
  requestAnimationFrame(() => draw())
}

onMounted(() => {
  draw()
})
</script>
