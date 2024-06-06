<script >
import axios from 'axios';
import AppMain from './components/AppMain.vue';
import { store } from './store';

export default {
  name: 'MyApp',
  components: {
    AppMain
  },
  //richiamo il componente api dentro data
  data() {
    return {
      store,
    }
  },
  //chiamata api 
  created() {
    axios.get(this.store.apiUrl + this.store.apiKey).then((response) => {
      this.store.results = response.data.??;
      console.log(response.data.);
    });
  },
};

</script>

<template>
  <AppMain />
</template>

<style ></style>
