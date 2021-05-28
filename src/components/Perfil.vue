<template>
  <div class="perfil">
    <div class="profileIndentify">
      <img :src="contact.avatar" />
      <br />
      <strong>{{ contact.name }}</strong>
    </div>
    <p>Phone Number:{{ contact.number }}</p>
    <p>Email: {{ contact.email }}</p>
  </div>
</template>

<script>
export default {
  name: "perfil",

  methods: {},
};
</script>

<style scoped>
.perfil {
  border-style: solid;
  border-width: 1px;
  border-left: black;

  width: 60%;
  height: 100%;

  display: block;
  text-align: justify;
}

.profileIndentify {
  width: 100%;
  height: 35%;

  text-align: center;
}

.profileIndentify img {
  padding-top: 15px;
  border-radius: 30px;
}
</style>
