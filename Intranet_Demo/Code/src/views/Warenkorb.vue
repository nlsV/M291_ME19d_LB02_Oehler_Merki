<template>
  <div class="container" id="warenkorb">
    <h1>Warenkorb Schulsachen</h1>
    <h3>Warenkorb: (Artikel: {{ totalItems }}) {{ formatPrize("CHF",totalCost) }}</h3>
    <div class="even-columns" v-for="item in products" :key="item">
      <div class="col">Lehrmittel: {{ item.title }}</div>
      <div class="col"><a href="#" @click="addToCart(item.prize)">In den Warenkorb {{ formatPrize(item.currency, item.prize) }}</a></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalItems: 0,
      totalCost: 0,
      products: [
        {title:"BM Wirschaft und Recht Ordner Kap. 1-30", currency: "CHF", prize: 108.90},
        {title:"BM Fokus Sprache Deutschbuch", currency: "CHF", prize: 27.50},
        {title:"Gestaltung und Design; Die Grundlagen", currency: "CHF", prize: 45.50},
        {title:"Cambridge English for Students", currency: "CHF", prize: 35.90},
        {title:"BM Mathematik Kap. 1-20", currency: "CHF", prize: 68.90},
        {title:"BM Finanz- und Rechnugswesen im Detail", currency: "CHF", prize: 40.70},
      ],
    }
  },
  methods: {
    addToCart(n) {
      this.totalItems = this.totalItems + 1
      this.totalCost = this.totalCost + n
    },
    formatPrize(currency, val) {
      return `${currency} ${val.toFixed(2)}`
    },
  },
}
</script>

<style lang="scss" scoped>
.even-columns {
  display: flex;
  //gap: 0.1em;
  padding: 0.2em;
}

.even-columns > * {
  flex: 1;
}

.card {
  padding: 2em;
  background: var(--clr-gradient);
  color: white;
  border-radius: 0.25rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --clr-primary: #ee6352;
  --clr-secondary: #d16e8d;
  --clr-accent: #f7f7ff;
  --clr-gradient: linear-gradient(
          -90deg,
          var(--clr-primary),
          var(--clr-secondary)
  );
  --ff-title: bungee, sans-serif;
  --ff-body: canada-type-gibson, sans-serif;
  --fw-body: 300;
  --fw-bold: 800;
  --fw-title: 400;
  --fw-number: 800;
}

body {
  padding: 2rem;
  min-height: 80vh;
  font-family: var(--ff-body);
  font-weight: var(--fw-body);
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
}

a {
  display: inline-block;
  background: rgb(150, 150, 150);
  border-radius: 10px;
  font-size: 10px;
  color: white;
  padding: 5px 10px;
  text-decoration: none;
}
.container {
  width: min(95%, 30rem);
  margin: 0 auto;
}
</style>
