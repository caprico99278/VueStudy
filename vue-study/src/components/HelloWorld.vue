<script setup lang="ts">
defineProps<{
  msg: string
}>()
defineEmits(['enlarge-text'])
</script>

<template>
  <div class="greetings">
    <h4 class="green">{{ msg }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
