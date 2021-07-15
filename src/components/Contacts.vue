<template>
  <div class="contacts">
    <div class="body">
      <div
        class="item"
        v-bind:contact="contact"
        @click="selectPerfil(contact)"
        v-for="contact in pageOfItems"
        :key="contact.id"
      >
        <img :src="contact.avatar" alt="" />
        {{ contact.name }}
      </div>
    </div>

    <div class="footer">
      <jw-pagination
        :items="contacts"
        @changePage="onChangePage"
        :labels="customLabels"
      ></jw-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const customLabels = {
  first: "<<",
  last: ">>",
  previous: "<",
  next: ">",
};

export default {
  name: "Contacts",

  data() {
    return {
      contacts: [],
      pageOfItems: [],
      customLabels,
    };
  },
  async created() {
    let { data } = await axios.get("http://localhost:3000/contacts");
    this.contacts = data;
  },
  methods: {
    mounted() {
      this.created();
    },
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
    selectPerfil(contact) {
      alert(contact.name); //aqui é enviar a informaçao pro outro componente
    },
  },
};
</script>

<style scoped>
.contacts {
  border-style: solid;
  border-width: 1px;
  border-left: black;

  width: 40%;
  height: 100%;

  padding-left: 5px;
}

.item img {
  max-width: 50px;
  max-height: 50px;
}
.contacts {
  height: 100%;
  display: block;
}

.body {
  height: calc(100% - 40px);
}
</style>