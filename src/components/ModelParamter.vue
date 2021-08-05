<template>
    <NCard style="position: fixed;left: 0;top:0;width: 300px">
        <NForm :model="modelParamter">
            <!-- 身体 -->
            <template :key="value" v-for="{label, value} of formItems">
                <NFormItem :label="label">
                    <NSlider v-model:value="modelParamter[value]" :step="0.1" :max="1" :min="-1"></NSlider>
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
    label: 'MOUTH_FORM',
    value: PARAMETER_ID.MOUTH_FORM
  },
  {
    label: 'MOUTH_OPEN_Y',
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
    value: PARAMETER_ID.BODY_ANGLE_Z
  }
]

</script>
