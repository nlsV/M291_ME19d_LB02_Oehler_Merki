<template>
  <div id="app">
    <div id="logo"><img class="logo" alt="Logo" src="./assets/logo.png"></div>
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/notes">Notendurchschnitt</router-link> |
      <router-link to="/informations">Informationen</router-link> |
      <router-link to="/warenkorb">Warenkorb</router-link>
    </div>
    <router-view/>
    <MyNavigation />
  </div>
</template>

<script>
import SimpleNav from './components/Navigation'

export default {
  components: {
    MyNavigation: SimpleNav,
  },
}
</script>

<style lang="scss">
@import 'styles/global';
</style>

