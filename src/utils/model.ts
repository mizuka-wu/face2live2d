import { reactive } from 'vue'
export const PARAMETER_ID = {
  /** 左眼开闭 */
  LEFT_EYE_OPEN: 'ParamEyeLOpen',
  /** 左眼弯曲 */
  LEFT_EYE_SMILE: 'ParamEyeLSmile',
  /** 右眼开闭 */
  RIGHT_EYE_OPEN: 'ParamEyeROpen',
  /** 右眼弯曲 */
  RIGHT_EYE_SMILE: 'ParamEyeRSmile',
  /** 眼球x轴 */
  EYE_BALL_X: 'ParamEyeBallX',
  /** 眼球Y轴 */
  EYE_BALL_Y: 'ParamEyeBallY',
  LEFT_BROW_Y: 'ParamBrowLY',
  RIGHT_BROW_Y: 'ParamBrowRY',
  LEFT_BROW_X: 'ParamBrowLX',
  RIGHT_BROW_X: 'ParamBrowRX',
  LEFT_BROW_ANGLE: 'ParamBrowLAngle',
  RIGHT_BROW_ANGLE: 'ParamBrowRAngle',
  LEFT_BROW_FORM: 'ParamBrowLForm',
  RIGHT_BROW_FORM: 'ParamBrowRForm',
  MOUTH_FORM: 'ParamMouthForm',
  MOUTH_OPEN_Y: 'ParamMouthOpenY',
  CHEEK: 'ParamCheek',
  BODY_ANGLE_X: 'ParamBodyAngleX',
  BODY_ANGLE_Y: 'ParamBodyAngleY',
  BODY_ANGLE_Z: 'ParamBodyAngleZ'
}

export const modelParamter = reactive({
  [PARAMETER_ID.BODY_ANGLE_X]: 0,
  [PARAMETER_ID.BODY_ANGLE_Y]: 0,
  [PARAMETER_ID.BODY_ANGLE_Z]: 0
})

const parameterIds = Object.values(PARAMETER_ID)
export function setParameterValue (model: { setParameterValueById(key: string, value: number): void }): void {
  parameterIds.forEach(parameterId => {
    if (parameterId in modelParamter) {
      model.setParameterValueById(parameterId, modelParamter[parameterId])
    }
  })
}
