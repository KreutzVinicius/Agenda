<template>
  <div class="Home">
    <Contacts />
  </div>
</template>

<script>
// @ is an alias to /src
import Contacts from "@/components/Contacts.vue";

export default {
  name: "Home",
  components: {
    Contacts,
  },
};
</script>

<style scoped>
* {
  display: flex;
}
.Home {
  width: 100%;
  height: 100%;

  background: #ccd6dd;
}
</style>

