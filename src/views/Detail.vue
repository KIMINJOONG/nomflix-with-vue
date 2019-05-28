<template>
    <div class="Container" v-if="loading">
        <div class="Backdrop" v-if="result.backdrop_path !== null" :style="{ 'background-image': 'url(https://image.tmdb.org/t/p/original' + result.backdrop_path + ')' }">
        </div>
        <div class="Content">
            <div class="Cover" v-if="result.poster_path" :style="{ 'background-image': 'url(https://image.tmdb.org/t/p/original' + result.poster_path + ')' }">
            </div>
            <div class="Data">
                <h3 class="Title">
                    {{result.title ? result.title : result.name}}
                </h3>
                <div class="ItemContainer">
                    <span class="Item">{{result.release_date ? result.release_date.substring(0,4) : result.first_air_date.substring(0,4)}}</span>
                    <span class="Divider">•</span>
                    <span class="Item">{{result.runtime || result.runtime === 0 ? result.runtime : result.episode_run_time[0]}} min</span>
                    <span class="Divider">•</span>
                    <span class="Item" :key="genre.id" v-for="(genre, index) in result.genres">{{index === result.genres.length -1 ? genre.name : genre.name + ' / '}}  </span>
                </div>
                <p class="Overview">{{result.overview}}</p>

            </div>
        </div>

    </div>
</template>

<script>
    import {mapState} from "vuex";
    export default {
        computed: {
            ...mapState(["result", "loading"])
        },
        data: () => ({
            data: null
        }),
        name: "Detail.vue",
        mounted() {
            this.data = {
                id: this.$route.params.id,
                isMovie: this.$route.query.isMovie
            }
            this.$store.dispatch("getDetail", this.data)
        }
    }
</script>

<style scoped>
    .Container{
        height: calc(100vh - 50px);
        width: 100%;
        position: relative;
        padding: 50px;
    }
    .Backdrop{
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        background-position: center center;
        background-size: cover;
        filter: blur(3px);
        opacity: 0.5;
        z-index: 0;
    }
    .Content{
        display: flex;
        width: 100%;
        position: relative;
        z-index: 1;
        height: 100%;
    }
    .Cover{
        width: 30%;
        background-position: center center;
        background-size: cover;
        height: 100%;
        border-radius: 5px;
    }
    .Data{
        width: 70%;
        margin-left: 10px;
    }
    .Title{
        font-size: 32px;
        margin-bottom: 10px;
    }
    .ItemContainer{
        margin: 20px 0;
    }
    .Item{

    }
    .Divider{
        margin: 0 10px;
    }

</style>
