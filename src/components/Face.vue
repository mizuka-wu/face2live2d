<template>
    <canvas ref="face" />
    <video style="position: fixed; left: 0; top: 0;" ref="video"></video>
</template>
<script lang="ts" setup>
import { ref, Ref, onMounted } from 'vue'
import { init, getMask } from '@/utils/face'

const video:Ref<null|HTMLVideoElement> = ref(null)

async function getAll () {
  if (video.value) {
    console.log()
    const data = await getMask(video.value)
    console.log(data)
    requestAnimationFrame(() => getAll())
  }
}

onMounted(async () => {
  await init()
  navigator.getUserMedia({
    video: true
  }, (mediaStream) => {
    if (video.value) {
      video.value.srcObject = mediaStream
      video.value.oncanplay = function () {
        if (video.value) {
          video.value.play()
          getAll()
        }
      }
    }
  }, () => {
    console.log('error')
  })
})

</script>
