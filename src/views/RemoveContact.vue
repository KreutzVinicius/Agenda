<template>
  <div class="RemoveContacts">
    <deleteContact />
  </div>
</template>

<script>
// @ is an alias to /src
import deleteContact from "@/components/deleteContact.vue";

export default {
  name: "RemoveContacts",
  components: {
    deleteContact,
  },
};
</script>

<style scoped>
* {
  display: flex;
}
.RemoveContacts {
  width: 100%;
  height: 100%;

  background: #ccd6dd;
}
</style>