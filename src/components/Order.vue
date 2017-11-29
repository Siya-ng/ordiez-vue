<template>
  <div class="order" >
    <div v-for="deliveryOrder in deliveryOrders" class="eachOrder" >
      <h5>Order Id: {{deliveryOrder.order_id}} </h5>
      <h5>Delivery date: {{deliveryOrder.delivery_date}} </h5>
      <h5>Delivery time: {{deliveryOrder.delivery_time}} </h5>
      <ul>
        <li v-for="order_item in deliveryOrder.order_items">meal: {{order_item.name}}</li>
      </ul>
      <div v-if="deliveryOrder.feedback_submitted">
        <h6>View feedback </h6>
      </div>
      <div v-else>
        <button>Submit Feedback</button>
        

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'order',
    data () {
      return {

      deliveryOrders: []

      }
    },
    methods: {

      getData: function() {
      this.$http.get("http://https://siya-ordiez.herokuapp.com/orders").then(
      response => {
       this.deliveryOrders = response.data.orders
       console.log(response.data.orders)
      },
      response => {
        console.log(response)
        })

      }
    },
    created: function () {
      this.$http.get("https://siya-ordiez.herokuapp.com/orders").then(
      response => {
        this.deliveryOrders = response.data.orders
      },
      response => {
        console.log(response)
      })
    }
  }
</script>

<style scoped>

</style>
