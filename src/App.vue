<script >
import MainInput from './components/MainInput.vue';
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
    MainInput,
    MainList
  },
};

</script>

<template>
  <MainInput />
  <MainList />
</template>

<style ></style>
