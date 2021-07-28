import * as faceapi from 'face-api.js'

let loaded = false

export async function init () {
  try {
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models')
    loaded = true
  } catch (e) {
    console.error(e)
  }
}

export async function getMask (input) {
  if (loaded) {
    const detectionWithLandmarks = await faceapi.detectSingleFace(input).withFaceLandmarks()
    return detectionWithLandmarks
  } else {
    return null
  }
}

export default init
