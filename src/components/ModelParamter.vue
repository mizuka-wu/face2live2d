<template>
    <NCard style="position: fixed;left: 0;top:0;width: 300px">
        <NForm :model="modelParamter">
            <!-- 身体 -->
            <template :key="value" v-for="{ label, value, step, max, min } of formItems">
                <NFormItem :label="label">
                    <NSlider
                        v-model:value="modelParamter[value]"
                        :step="step || 0.1"
                        :max="max || 1"
                        :min="min || -1"
                    ></NSlider>
                </NFormItem>
            </template>
        </NForm>
    </NCard>
</template>
<script setup lang="ts">
import { NForm, NFormItem, NSlider, NCard } from 'naive-ui'
import { modelParamter, PARAMETER_ID } from '../utils/model'

const formItems = [
  {
    label: 'LEFT_BROW_FORM',
    value: PARAMETER_ID.LEFT_BROW_FORM
  },
  {
    label: 'RIGHT_BROW_FORM',
    value: PARAMETER_ID.RIGHT_BROW_FORM
  },
  {
    label: '嘴巴弧度',
    value: PARAMETER_ID.MOUTH_FORM
  },
  {
    label: '嘴张开',
    value: PARAMETER_ID.MOUTH_OPEN_Y
  },
  {
    label: '角度X',
    value: PARAMETER_ID.ANGLE_X
  },
  {
    label: '角度Y',
    value: PARAMETER_ID.ANGLE_Y
  },
  {
    label: '角度Z',
    value: PARAMETER_ID.ANGLE_Z
  },
  {
    label: '身体X',
    value: PARAMETER_ID.BODY_ANGLE_X
  },
  {
    label: '身体Y',
    value: PARAMETER_ID.BODY_ANGLE_Y
  },
  {
    label: '身体Z',
    value: PARAMETER_ID.BODY_ANGLE_Z,
    min: -20,
    max: 20,
    step: 1
  }
]

</script>
