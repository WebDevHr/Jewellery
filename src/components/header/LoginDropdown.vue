<template>
  <div>
    <div class="dropdown">
      <button
        class="btn dropdown-toggle dropdown-toggle-no-caret focusStyle border-0"
        type="button"
        id="dropdownMenuButton2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <slot name="buttonText"></slot>
      </button>
      <ul
        class="dropdown-menu text-center dropdown-menu-end"
        aria-labelledby="dropdownMenuButton2"
      >
        <li class="">
          <a
            class="dropdown-item liWidth border rounded mx-auto"
            href="#"
            @click.prevent="signIn"
            >Sign In</a
          >
        </li>
        <li>
          <a
            class="dropdown-item liWidth border rounded mx-auto mt-1"
            href="#"
            @click.prevent="signUp"
            >Sign Up</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonText: "Sign In or Sign Up",
    };
  },
  methods: {
    signIn() {
      this.$router.push({ name: "login" });
    },
    signUp() {
      this.$router.push({ name: "signup" });
    },
  },
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.dropdown-menu {
  border-radius: 10px;
}

.dropdown-toggle-no-caret::after {
  display: none !important;
}

.focusStyle:focus {
  border: none;
}

.liWidth {
  width: 140px;
}

.liWidth:hover {
  background-color: rgb(99, 132, 14);
}
</style>
