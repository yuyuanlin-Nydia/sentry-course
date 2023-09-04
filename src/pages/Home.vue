<script setup>
function checkout(){
  // throw new Error('TEEE')
  alert('checkout items!')
}
</script>
<template>
  <div>
    <h1 class="text-4xl">Home</h1>
    <button @click="checkout">checkout</button>
  </div>
</template>
