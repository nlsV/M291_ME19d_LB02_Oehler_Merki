<template>
  <div>
    <h1>Info</h1>
       <div class="info">{{content}}</div>
  </div>
</template>

<script>
export default {
  name: "SingleMessage",
  props: {
    content: {
      default: '',
      type: String
    }
  }
}
</script>
