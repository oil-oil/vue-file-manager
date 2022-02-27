<template>
  <svg aria-hidden="true" :style="`width:${size};height:${size}`">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    size:{
      type:Number,
      default:20
    }
  })
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>