import { reactive } from 'vue';

export const store = reactive({
    results: {},
    //salvo url delll api per la chiamata
    apiUrl: 'https://developers.themoviedb.org/3/search/movie',
    //salvo la mia key che necessita il sito per la chiamata
    apiKey: '?api_key=e7b79990a7764cfac4f7e950e7117525'
});