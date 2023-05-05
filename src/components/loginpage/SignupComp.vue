<template>
  <div class="signup-container fontFamilyPlayfairDisplay">
    <div class="card">
      <div class="card-header">
        <h4>Kayıt ol</h4>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="username">Kullancı adı</label>
            <input
              type="text"
              class="form-control"
              id="username"
              v-model="username"
            />
          </div>
          <div class="form-group">
            <label for="username">E-mail addresınız</label>
            <input
              type="email"
              class="form-control"
              id="username"
              v-model="email"
            />
          </div>
          <div class="form-group">
            <label for="username">Telefon numaranız</label>
            <input
              type="tel"
              class="form-control"
              id="username"
              v-model="phone"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
            />
          </div>
          <div class="form-group">
            <label for="confirmPassword">Confirm password</label>
            <input
              type="password"
              class="form-control"
              id="confirmPassword"
              v-model="confirmPassword"
            />
          </div>
          <BaseButton
            @click.prevent="signUp"
            type="submit"
            :label="label"
            class="mt-3"
          />
        </form>
      </div>
      <div class="card-footer">
        <p>
          Hesabınız var mı? <router-link to="/login">Giriş yapın</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      label: "Kayıt ol",
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    signUp() {
      // Here you can add the logic to submit the form and create a new user
      console.log(
        `Signing up as ${this.username} with password ${this.password}`
      );
    },
  },
};
</script>

<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 742px;
  background-color: #f8f9fa;
}

.card {
  width: 450px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border: none;
}

.card-header {
  padding: 20px;
  background-color: rgb(99, 132, 14);
  color: #fff;
}

.card-body {
  padding: 20px;
}

.card-footer {
  padding: 20px;
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}
input:focus {
  outline: none;
  box-shadow: none;
}
</style>
