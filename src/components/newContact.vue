<template>
  <div class="newContacts">
    <h1>New Contact</h1>
    <div id="data">
      <input type="text" v-model="name" placeholder="name" />
      <input type="number" v-model="number" placeholder="number" />
      <input type="text" v-model="email" placeholder="email" />
      <input type="text" v-model="avatar" placeholder="avatar" />

      <button @click="addContact">Adicionar</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "newContacts",
  data() {
    return {
      contacts: [],
    };
  },
  methods: {
    async addContact() {
      const { data } = await axios.post(
        "https://localhost:44396/api/AgendaItems/",
        {
          name: this.name,
          number: this.number,
          email: this.email,
          avatar: this.avatar,
        }
      );

      this.contacts = [...this.contacts, data];
      this.name = "";
      this.number = "";
      this.email = "";
      this.avatar = "";
    },
  },
  mounted() {},
};
</script>

<style scoped>
.newContacts {
  display: flex;
  flex-direction: column;
}
input {
  height: 30px;
  display: block;
}
</style>

 