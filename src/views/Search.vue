<template>
    <div class="Container">
        <form class="Form" v-on:submit="handleSubmit">
            <input class="Input"
                placeholder="Search Movies or TV shows..."
                v-model="searchTerm"
            />
        </form>
        <div v-if="loading === true && results && results.length > 0">
            <div class="Grid">
                <Poster
                        v-for="(movie, index) in results"
                        v-bind:key="index"
                        :title="movie.title"
                        :rating="movie.vote_average"
                        :year="movie.release_date && movie.release_date.substring(0,4)"
                        :isMovie="true"
                        :imageUrl="movie.poster_path"
                        :id="movie.id"
                />
            </div>
        </div>
        <div v-if="loading === true && tvResults && tvResults.length > 0">
            <div class="Grid">
                <Poster
                        v-for="(tv, index) in tvResults"
                        v-bind:key="index"
                        :title="tv.title"
                        :rating="tv.vote_average"
                        :year="tv.first_air_date && tv.first_air_date.substring(0,4)"
                        :isMovie="true"
                        :imageUrl="tv.poster_path"
                        :id="tv.id"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import Poster from "../components/Poster";
    export default {
        components: {
          Poster
        },
        data: () => ({
            search: "Hello Search",
            searchTerm : "",
        }),
        methods: {
            handleSubmit(event){
                event.preventDefault();
                this.$store.dispatch("searchByTerm", this.searchTerm);
            },
        },
        computed: {
            ...mapState(["results", "tvResults", "loading"])
        },
    }
</script>

<style scoped>
    .Container{
        padding: 0px 20px;
    }
    .Form{
        margin-bottom: 50px;
        width: 100%;
    }
    .Input{
        all: unset;
        font-size: 28px;
        width: 100%;
    }
    .Grid {
        margin-top: 25px;
        display: grid;
        grid-template-columns: repeat(auto-fill, 125px);
        grid-gap: 25px;
    }


</style>
