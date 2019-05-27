<template>
    <div>
        {{id}}
    </div>
</template>

<script>
    export default {
        name: "Detail.vue",
        computed: {
            id(){
                return this.$route.params.id
            }
        }
    }
</script>

<style scoped>

</style>
