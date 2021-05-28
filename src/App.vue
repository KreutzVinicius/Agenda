<template>
  <div id="app">
    <div id="nav">
      <Header />
      <router-view :key="$route.fullPath" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  width: 100vw;
  height: 100vh;
}

#nav {
  width: 100%;
  height: calc(100% - 65px);
}

#nav a {
  font-weight: bold;
  color: #010a13;
}

#nav a.router-link-exact-active {
  color: #1f163b;
}
</style>
