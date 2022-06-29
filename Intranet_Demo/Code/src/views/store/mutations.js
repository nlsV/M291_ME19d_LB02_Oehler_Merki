import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
    key: 'mutations',
    storage: window.localStorage
});

export default new Vuex.Store({
    state: {
        ausbildung: [
            {sid: 100, mid: 1, title: 'Mathematik', mark: 4.0},
            {sid: 100, mid: 2, title: 'Deutsch', mark: 3.5,},
            {sid: 100, mid: 3, title: 'Finanz- und Rechnungswesen', mark: 5.5},
            {sid: 100, mid: 4, title: 'Englisch', mark: 5.5},
            {sid: 100, mid: 5, title: 'Wirtschaft und Recht', mark: 3.5,},
            {sid: 100, mid: 6, title: 'Französisch', mark: 'Pnab',},
            {sid: 101, mid: 1, title: 'Mathematik', mark: 5},
            {sid: 101, mid: 2, title: 'Deutsch', mark: 5.0 },
            {sid: 101, mid: 3, title: 'Finanz- und Rechnungswesen', mark: 5},
            {sid: 101, mid: 4, title: 'Englisch', mark: 6},
            {sid: 101, mid: 5, title: 'Wirtschaft und Recht', mark: 6.0},
            {sid: 101, mid: 6, title: 'Französisch', mark: 4,}
        ]
    },
    getters: {
        getByStudentId(state) {
            return function (sid) {
                return state.ausbildung.filter(mod => {
                    if (mod.sid === sid) {
                        //console.log(mod);
                        return mod;
                    }
                });
            };
        }
    },
    mutations: {
        updateMark(state,modList){
            state.ausbildung = modList;
        }
    },
    actions: {},
    modules: {},
    plugins: [vuexLocal.plugin]
})
