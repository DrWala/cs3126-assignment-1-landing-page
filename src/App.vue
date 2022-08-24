<template>
  <div>
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/layout/Header";

export default {
  name: "app",
  components: {
    Header,
  },
  data() {
    return {
      isLoading: true,
      currentUrl: "",
    };
  },
  watch: {
    $route(pathUrl) {
      this.currentUrl = pathUrl.path;
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
    },
  },
  mounted() {
    this.currentUrl = window.location.pathname;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
};
</script>
