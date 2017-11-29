<template>
  <div id="app">
    <order></order>
  </div>
</template>

<script>
  import Order from './components/order'


  export default {
    name: 'app',
    components: {
      Order
    }
  }
  methods: {
    getData: () => {
      this.$http.get("http://https://siya-ordiez.herokuapp.com/orders").then(
        response => {
          this.DeliveryOrders = response.data.orders
          console.log(response.data.orders)
        },
        response => {
          console.log(response)
        })
      }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.order {
  display: flex;
}
.eachOrder {
 width: 500px;

 background-color: white;
 ;
}
</style>
