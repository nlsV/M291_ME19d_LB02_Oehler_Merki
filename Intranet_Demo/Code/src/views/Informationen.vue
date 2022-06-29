<template>
  <div>
    <h1>Informationen</h1>
    <div v-for="(m, i) in informations" :key="i" class="info">
      <router-link :to="{ name: 'info', params: {content: m}}">
        {{ m }}
      </router-link>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      informations: [
        'Hier geht es zum Stundenplan',
        'Ferienplanung',
        'Unsere neusten News',
        'Prüfungsdaten QV'
      ]
    }
  }
}
</script>
