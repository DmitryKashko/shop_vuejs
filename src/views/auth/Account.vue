<template>
  <div class="card-body table-responsive p-0">
    <table class="table table-hover text-nowrap">
      <thead>
      <tr>
        <th>ID</th>
        <th>Наименование</th>
        <th>Цена</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="order in orders">
        <td>{{ order.id }}</td>
        <td v-for="product in order.product">
          <table class="table table-hover text-nowrap">
            <thead>
            <tr>
              <th>ID</th>
              <th>Наименование</th>
              <th>Количество</th>
              <th>Цена</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{{ product.id }}</td>
              <td>{{ product.title }}</td>
              <td>{{ product.qty }}</td>
              <td>{{ product.price }}</td>
            </tr>
            </tbody>
          </table>
        </td>
        <td>{{ order.total_price }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from "../../api";

export default {
  name: "account",
  data(){
    return {
      orders: null,
    }
  },

  mounted() {
    this.getOrder();
  },

  methods: {
    getOrder() {
      api.get('http://localhost:8876/api/auth/orders')
          .then( res => {
            this.orders = res.data.data
          })
    },
  }
}
</script>

<style scoped>

</style>