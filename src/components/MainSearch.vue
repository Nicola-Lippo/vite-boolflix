<script >
import axios from 'axios';
import { store } from '../store'
export default {
    name: 'MainSearch',
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
            /*Passo il primo argomento alla chiamata l'url, poi passo un secondo argomento(oggetto) PARAMS
            composto da chiave e valori key: valore */
            axios.get(url, {
                params: {
                    api_key: this.store.apiKey,
                    language: this.store.lenguageKey,
                    query: this.store.searchKey,
                }
            })
                //aggiungo le {} perchè devo fare più operazioni
                //l' operazione va fatta dentro il then perchè fuori non abbiamo quei dati
                .then((response) => {
                    console.log(response.data.results);
                    this.store.movies = response.data.results;
                })

        },
    }
};

</script>

<template>
    <!--campi di ricerca -->
    <div>
        <!--collegata al file store con v-model -->
        <input type="text" placeholder="cerca un film" v-model="store.searchKey">
        <button @click="searchResults">cerca</button>
    </div>
</template>

<style ></style>
