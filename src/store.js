import { reactive } from 'vue';

export const store = reactive({
    //array di risultati
    movies: [],
    //salvo url delll api per la chiamata
    apiUrl: 'https://api.themoviedb.org/3',
    //salvo la mia key che necessita il sito per la chiamata
    apiKey: 'e7b79990a7764cfac4f7e950e7117525',
    //chiave di ricerca collegata v-model
    searchKey: '',
    //chiave per la lingua
    lenguageKey: 'it-IT',
    //differente parte dell url per chiamre 2 cose diverse
    endpoints: {
        movie: '/search/movie',
        serie: '/search/tv',
    },
});