<template>
  <div class="login_place">
      <div class="login_area">
    <input type="text" ref="email_input" placeholder="email" />
    <input type="text" ref="password_input" placeholder="password" />
    <input @click="attempt_login" type="submit" ref="login_submit" value="Login" />
   </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "login-page",
  data() {
      return {
          email: '',
          password: '',
      }
  },
  methods: {
      attempt_login() {

          axios.request({
              url: "https://reqres.in/api/login"
          }).then((response) => {
              this.data = response.data;
          }).catch((error) => {
              error;
          });
        
      }
  },
  
};
</script>

<style scoped>
.login_place {
    display: grid;
    place-items: center;
    height: 200px;
    margin-top: 25%;

}
.login_area {
    width: 300px;
    display: grid;
    place-items: center;
    row-gap: 10px;
}
</style>