<template>
    <router-link route :to="{path: '/detail/' + id}">
        <div class="Container">
            <div class="ImageContainer">
                <div class="Image" :style="{ 'background-image': 'url(https://image.tmdb.org/t/p/w300' + imageUrl + ')' }">
                </div>
                <span class="Rating">
                    <span role="img" aria-label="rating">
                        ⭐️
                    </span>
                    {{rating}}/10
                </span>
            </div>
            <span class="Title">
            {{title}}
            </span>
            <span class="Year">
            {{year}}
            </span>
        </div>
    </router-link>
</template>

<script>
    export default {
        props:["id", "imageUrl", "title", "rating", "year", "isMovie"],
        name: "Poster.vue"
    }
</script>

<style scoped>
    .Container{
        font-size: 12px;
    }
    .Image{
        height: 180px;
        background-size: cover;
        border-radius: 4px;
        background-position: center center;
        transition: opacity 0.1s linear;
    }
    .Rating{
        bottom: 5px;
        right: 5px;
        position: absolute;
        opacity: 0;
        transition: opacity 0.1s linear;
    }
    .ImageContainer{
        margin-bottom: 5px;
        position: relative;

    }
    .ImageContainer:hover > .Image{
        opacity: 0.3;
    }
    .ImageContainer:hover > .Rating{
        opacity: 1;
    }
    .Title{
        display: block;
        margin-bottom: 3px;
    }
    .Year {
        font-size: 10px;
        color: rgba(255, 255, 255, 0.5);
    }

</style>
