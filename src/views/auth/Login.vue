<template>
  <div class="w-25 m-5">
    <input v-model="email" type="email" class="form-control m-1" placeholder="email">
    <input v-model="password" type="password" class="form-control m-1" placeholder="password">
    <input @click.prevent="login" type="submit" class="btn btn--primary m-1 text-dark">
    <div v-if="error" class="text-danger">{{ this.error }}</div>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      error: null,
    }
  },

  mounted() {

  },

  methods: {
    login() {
      this.axios.post('http://localhost:8876/api/auth/login', {email: this.email, password: this.password})
          .then(res => {
            localStorage.access_token = res.data.access_token;
            //localStorage.setItem('access_token', res.data.access_token);
            this.$router.push({ name: 'user.personal'})
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