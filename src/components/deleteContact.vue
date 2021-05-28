<template>
  <div class="deleteContact">
    <h1>Remover Contato</h1>

    <input
      type="number"
      v-model="id"
      @keyup.enter="removeContact"
      placeholder="id"
    />

    <button @click="removeContact">Remover</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "deleteContact",
  data() {
    return {
      contacts: [],
      name: "",
      number: "",
      id: "",
    };
  },
  methods: {
    async removeContact() {
      const { data } = await axios.delete(
        "http://localhost:3000/contacts/" + this.id,
        {
          id: this.id,
        }
      );

      this.contacts = [...this.contacts, data];
    },
  },
  mounted() {},
};
</script>

<style scoped>
.deleteContact {
  display: flex;
  flex-direction: column;
}
input {
  height: 30px;
  display: block;
}
</style>

 