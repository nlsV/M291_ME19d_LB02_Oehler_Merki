<template>
  <div>
    <h1>BZZ Intranet</h1>
    <p>Hallo, hier steht ein einfacher Platzhalter. Bei Fragen einfach bei Herrn Merki oder Oehler melden!</p>
    <div>
      <p>Zeit bis zu den Sommerferien: {{ timerCount }} Sekunden! :)</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timerCount: 1382400
    }
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }
      },
      immediate: true
    }
  }
}
</script>