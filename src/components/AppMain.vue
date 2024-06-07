<script >
import axios from 'axios';
import { store } from '../store'
export default {
    name: 'AppMain',
    //data è un metodo che restituisce un oggetto
    data() {
        return {
            store,
        };
    },
    methods: {
        searchResults() {
            console.log('ho premuto cerca')
            //chiamata api dentro la funzione
            //salvo il link chiamata in una variabile
            const url = this.store.apiUrl + this.store.endpoints.movie;
            console.log(url)
            axios.get(url, {
                params: {
                    api_key: this.store.apiKey
                }
            })
                .then((response) => console.log(response))

        },
    }
};

</script>

<template>
    <div>
        <input type="text" placeholder="cerca un film">
        <button @click="searchResults">cerca</button>
    </div>
</template>

<style ></style>
