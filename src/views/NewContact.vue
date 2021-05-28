<template>
  <div class="newContacts">
    <h1>New Contact</h1>
    <input
      type="text"
      v-model="name"
      @keyup.enter="addContact"
      placeholder="name"
    />
    <input
      type="number"
      v-model="number"
      @keyup.enter="addContact"
      placeholder="number"
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "newContacts",
  data() {
    return {
      contacts: [],
      name: "",
      number: "",
    };
  },
  methods: {
    async addContact() {
      const { data } = await axios.post("http://localhost:3000/contacts", {
        id: this.id,
        name: this.name,
        number: this.number,
      });

      this.contacts = [...this.contacts, data];
      this.name = "";
      this.number = "";
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
</style>

 