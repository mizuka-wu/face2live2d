import * as faceapi from 'face-api.js'

let loaded = false

export async function init (): Promise<null> {
  try {
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models')
    await faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
    loaded = true
  } catch (e) {
    console.error(e)
  }
  return null
}

export async function getMask (video: HTMLVideoElement): Promise<any> {
  if (loaded) {
    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    const context = canvas.getContext('2d')
    // eslint-disable-next-line no-unused-expressions
    context?.drawImage(video, 0, 0)
    canvas.toDataURL()

    const data = await faceapi
      .detectSingleFace(canvas)
      .withFaceLandmarks()
      .run()
    console.log(data)
  } else {
    return null
  }
}

export default init
