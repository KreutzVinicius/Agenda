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
      const { data } = await axios.post("http://localhost:3000/contacts", {
        id: this.id,
        name: this.name,
        number: this.number,
        email: this.email,
        avatar: this.avatar,
      });

      this.contacts = [...this.contacts, data];
      this.name = "";
      this.number = "";
      this.email = "";
      this.avatar = "";
    },
    calculateID() {
      this.id++;
    },
  },
  mounted() {
    let id = 0;
    this.contacts.forEach(this.calculateID(id));
  },
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

 