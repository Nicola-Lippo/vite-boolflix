<script >
import axios from 'axios';
import { store } from '../store'
export default {
    name: 'MainList',
    //data è un metodo che restituisce un oggetto
    data() {
        return {
            store,
        };
    },
};

</script>

<template>
    <!--lista elenchi risultati filtrati -->
    <div>
        <ul>
            <li v-for="film in store.movies">
                <div>{{ film.title }}</div>
                <div>{{ film.original_title }}</div>
                <div>{{ film.original_language }}</div>
                <div>{{ film.vote_average }}</div>
                <hr>
            </li>
        </ul>
    </div>
</template>

<style ></style>