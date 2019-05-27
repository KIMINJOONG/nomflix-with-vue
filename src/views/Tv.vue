<template>
    <div>
        <h1>{{tv}}</h1>
        <p>
            {{topRated}}
        </p>
        <p>
            {{popular}}
        </p>
        <p>
            {{airingToday}}
        </p>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    export default {
    name: "tv",
    data : () => ({
        tv: "Hello Tv"
    }),
    computed:{
        ...mapState(["topRated", "popular", "airingToday"])
    },
    mounted(){
        this.$store.dispatch("getTv");
    }

}
</script>

