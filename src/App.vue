<script >
import AppMain from './components/AppMain.vue';
import { store } from './store'

export default {
  name: 'MyApp',
  data() {
    return {
      store,
    };
  },
  components: {
    AppMain
  },
};

</script>

<template>
  <AppMain />
</template>

<style ></style>
