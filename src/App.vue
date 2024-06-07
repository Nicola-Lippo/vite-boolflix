<script >
import axios from 'axios';
import MainSearch from './components/MainSearch.vue';
import MainList from './components/MainList.vue';
import { store } from './store'

export default {
  name: 'MyApp',
  data() {
    return {
      store,
    };
  },
  components: {
    MainSearch,
    MainList
  },
};

</script>

<template>
  <MainSearch />
  <MainList />
</template>

<style ></style>
