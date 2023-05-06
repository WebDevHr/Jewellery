<template>
  <div class="login-container fontFamilyPlayfairDisplay">
    <div class="card">
      <div class="card-header">
        <h4>Gİrİş</h4>
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
            <label for="password">Şifre</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
            />
          </div>
          <BaseButton
            @click.prevent="signIn"
            type="submit"
            :label="label"
            class="mt-3"
          />
        </form>
      </div>
      <div class="card-footer">
        <p>
          Hesabınız yok mu?
          <router-link :to="{ name: 'signup' }"> Hesap oluştur</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      label: "Gİrİş",
    };
  },
  methods: {
    signIn() {
      // Here you can add the logic to submit the form and authenticate the user
      console.log(
        `Signing in as ${this.username} with password ${this.password}`
      );
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  background-color: #f8f9fa;
}

.card {
  width: 450px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.card-header {
  padding: 20px;
  background-color: rgb(99, 132, 14);
  color: #fff;
}

.card-body {
  padding: 20px;
  letter-spacing: 2px;
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
  box-shadow: none;
}
</style>
