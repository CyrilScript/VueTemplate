<template>
   <div class="flex w-full justify-between bg-white py-5 px-12 shadow">
    <div class="text-primary font-medium">Logo</div>
    <div class="flex gap-3">
      <div>Login</div>
      <div>Signup</div>
    </div>
  </div>

</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

