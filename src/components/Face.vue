<template>
    <canvas ref="face" />
</template>
<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import * as faceapi from 'face-api.js'

onBeforeMount(async () => {
  try {
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models')
    console.log(faceapi)
  } catch (e) {
    console.error(e)
  }
})

</script>
