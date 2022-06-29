<template>
  <div>
    <b-container fluid>
      <div style="margin: 5rem"/>
      <Products />
      <div style="margin-top: 2rem"/>
      <Cart />
      <div style="margin-top: 2rem"/>
      <Checkout />
    </b-container>
  </div>
</template>
<script>
import Products from './components/Products.vue'
import Cart from './components/Cart.vue'
import Checkout from './components/Checkout.vue'
export default {
  name: 'app',
  components: {
    Products, Cart, Checkout
  }
}
</script>

<style lang="scss">
@import 'styles/global';
</style>