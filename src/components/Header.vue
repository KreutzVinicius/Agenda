<template>
  <div class="header">
    <img @click="goBack()" src="../assets/voltar.png" alt="voltar" />

    <router-link to="/addContacts">
      <img src="../assets/adicionar-contato.png" alt="" /> New
      Contact</router-link
    >
    <router-link to="/">
      <img src="../assets/contatos.png" alt="" />Contacts
    </router-link>

    <router-link to="/removeContact">
      <img src="../assets/remove-user.png" alt="" />Remove Contacts</router-link
    >

    <img src="../assets/lupa-arredondada.png" alt="pesquisar" />
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  background-color: #292f33;
  justify-content: space-between;
  align-items: center;
  height: 65px;
}

.header img {
  max-width: 40px;
  max-height: 30px;
  width: auto;
  height: auto;
}
</style>
