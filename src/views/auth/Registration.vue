<template>
  <div class="w-25 m-5">
    <input v-model="name" type="text" class="form-control m-1" placeholder="name">
    <input v-model="email" type="email" class="form-control m-1" placeholder="email">
    <input v-model="password" type="password" class="form-control m-1" placeholder="password">
    <input v-model="password_confirmation" type="password" class="form-control m-1" placeholder="confirm_password">
<!--    <input v-model="gender" type="text" class="form-control m-1" placeholder="gender">-->
    <input @click.prevent="store" type="submit" class="btn btn--primary m-1 text-dark">
    <div v-if="error" class="text-danger">{{ this.error }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Registration",

  data() {
    return {
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
      gender: null,
      error: null
    }
  },

  methods: {
    store() {
      this.axios.post('http://localhost:8876/api/users', {
        'name': this.name,
        'email': this.email,
        'password': this.password,
        'password_confirmation': this.password_confirmation,
        /*'gender': this.gender,*/
      })
          .then( res => {
            localStorage.setItem('access_token', res.data.access_token)
            this.$router.push({name: 'user.personal'})
          })
          .catch( error => {
            this.error = error.response.data.error;
          })

    }
  }
}
</script>

<style scoped>

</style>