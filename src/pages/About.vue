<script setup>
const user = {}
</script>

<template>
  <div>
    <h1 class="text-4xl">About</h1>
    <button @click="user.email.send()">Send Email</button>
    <button @click="user.email.get()">Get Email</button>
  </div>
</template>
