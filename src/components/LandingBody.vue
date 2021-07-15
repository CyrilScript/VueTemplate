<template>
  <div class="min-h-screen flex items-center justify-center">
    <div>
      <button type="button" @click="state.count++" class="shadow p-3">
        count is: {{ state.count }}
      </button>
      <p class="py-2">
        Edit
        <code>components/HelloWorld.vue</code> to test hot module replacement.
      </p>
    </div>
    
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
</script>
