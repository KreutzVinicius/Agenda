<template>
  <div class="AddContacts">
    <newContact />
  </div>
</template>

<script>
// @ is an alias to /src
import newContact from "@/components/newContact.vue";

export default {
  name: "AddContacts",
  components: {
    newContact,
  },
};
</script>

<style scoped>
* {
  display: flex;
}
.AddContacts {
  width: 100%;
  height: 100%;

  background: #ccd6dd;
}
</style>

