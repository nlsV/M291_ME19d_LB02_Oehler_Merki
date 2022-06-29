import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const baseURL = "http://localhost:3000/";
export default new Vuex.Store({
  state: {
    products: [
      {"name": "ACER Nitro 5 5800H", "price": 2199.00},
      {"name": "ACER Nitro 5 12700H", "price": 2602.00},
      {"name": "ACER Nitro Mouse", "price": 45.00},
      {"name": "ACER Nitro NKW Keyboard", "price": 50.40},
      {"name": "ACER Ladegerät KP.13501.007", "price": 59.00},
      {"name": "BOSE Headphones 700 ANC", "price": 249.00}
    ],
    cart: []
  },
  getters: {
    /**
     * https://thecodebarbarian.com/javascript-reduce-in-5-examples.html
     * @param state
     * @returns {*}
     */
    cartTotal(state) {
      return state.cart.reduce((total, item) => {
        let product = state.products.find(p => p.name === item.name);
        return total + (product.price * item.quantity);
      }, 0);
    }
  },
  mutations: {
    //Daten vom Server werden dem state.products zugewiesen für Ausgabe
    setProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      let index = state.cart.findIndex(p => p.name === product.name);
      if (index !== -1) {
        state.cart[index].quantity++;
      } else {
        state.cart.push({name: product.name, quantity: 1});
      }
    },
    removeFromCart(state, product) {
      let index = state.cart.findIndex(p => p.name === product.name);
      if (index !== -1) {
        state.cart[index].quantity--;
        if (state.cart[index].quantity === 0) state.cart.splice(index, 1);
      }
    }
  },
  actions: {
    loadProducts(context) {
      fetch(baseURL + "v1/products")
          .then((res) => {
            //Daten von Server werden in .json umgewandelt
            return res.json();
          })
          .then((data) => {
            //Daten werden in Store abgelegt -> Mutation
            context.commit('setProducts', data);
          }).catch(error => {
        console.error(error);
      });
    }
  },

})
