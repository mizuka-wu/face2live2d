import * as faceapi from 'face-api.js'
import mitt from 'mitt'
const emitter = mitt<{
  data: faceapi.WithFaceLandmarks<{
    detection: faceapi.FaceDetection;
}, faceapi.FaceLandmarks68>,
  error: Error
}>()
export const canvas = document.createElement('canvas')

Promise.resolve()
  // 加载模型
  .then(() => faceapi.nets.faceLandmark68Net.loadFromUri('/models'))
  // 加载模型
  .then(() => faceapi.nets.ssdMobilenetv1.loadFromUri('/models'))
  // 获取视频
  .then(() => new Promise((resolve, reject) => {
    navigator.getUserMedia({
      video: true
    }, resolve, reject)
  }))
  // 视频输入并播放
  .then(stream => {
    const video = document.createElement('video')
    return new Promise((resolve, reject) => {
      if (stream) {
        video.srcObject = (stream as MediaProvider)
        video.oncanplay = () => {
          video.play()
          resolve(video)
        }
      } else {
        reject(new Error('未允许视频'))
      }
    })
  })
  .then((video) => getMask(video as HTMLVideoElement))
  .catch(e => {
    emitter.emit('error', e)
  })

/**
 * 生成面部数据
 * @param video
 */
export async function getMask (video: HTMLVideoElement): Promise<void> {
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

  if (data) {
    faceapi.draw.drawFaceLandmarks(canvas, data) // 画点
    emitter.emit('data', data)
  }

  requestAnimationFrame(() => getMask(video))
}

export default emitter
