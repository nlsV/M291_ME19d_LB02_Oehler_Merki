<template>
  <div id="app">
    <b-container fluid>
        <h1>{{this.infocard(this.student2)}}</h1>
        <b-card-text>
          <b-row class="my-1" v-for="(subject,i) in moduleList" :key="i">
            <b-col sm="7">
              <label>{{ subject.title }}: </label>
            </b-col>
            <b-col sm="1">
              <label>{{ subject.mark}}</label>
            </b-col>
            <b-col sm="2">
              <b-form-input :id="`${subject.mid}`" v-model:value="subject.mark" ref="input"
                            @keyup.enter="setMark(subject.sid,subject.mid,subject.mark)"></b-form-input>
            </b-col>
            <b-col sm="2">
              <b-button variant="primary"
                        @click="setMark(subject.sid,subject.mid, subject.mark)">Update</b-button>
            </b-col>
          </b-row>
          <h5>Durchschnitt {{ this.avg }}</h5>
        </b-card-text>
      </b-card>

    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      student1: 100,
      student2: 101,
      moduleList: [],
      avg: 0
    }
  },
  beforeMount() {
    this.moduleList = this.$store.getters.getByStudentId(this.student2);
    this.avg = this.getAvg(this.student2);
    console.log(`beforeMount: ${this.avg}`);
  },
  methods: {
    getAvg(sid) {
      let sum = 0, count = 0;
      this.moduleList.forEach(mod => {
        if (mod.sid === sid) {
          if (mod.mark !== 'Pnab') {
            sum += Number(mod.mark);
            count++;
          }
        }
      });
      console.log(`${sum} ${count}`);
      //Auf ganze resp. halbe Noten gerundet:
      return Number((Math.round((sum / count) / .5) * .5).toFixed(2));
    },
    setMark(sid,mid,mark){
      console.log(`before if: ${sid} ${mid} ${mark}`);
      this.avg = this.getAvg(this.student2);
      if (mark){
        console.log(`in if: ${sid} ${mid} ${mark}`);
        this.$store.commit('updateMark',this.moduleList);
      }
    },
    infocard(sid){
      return `Module Student id=${sid}`
    }
  }
}
</script>
