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
                    api_key: this.store.apiKey,
                    query: this.store.searchKey,
                }
            })
                .then((response) => console.log(response))

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
    <!--lista elenchi risultati filtrati -->
    <div>
        <ul>
            <li id="qui faro il ciclo v-for">
                <div>titolo</div>
                <div>titolo originale</div>
                <div>lingua</div>
                <div>voto</div>
            </li>
        </ul>
    </div>
</template>

<style ></style>
