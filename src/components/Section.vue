<template>
    <div class="Container">
        <span class="Title"></span>
        <div class="Grid"></div>
    </div>
</template>

<script>
    export default {
        name: "Section.vue"
    }
</script>

<style scoped>
.Container{
    margin-bottom: 50px;
}
    .Title{
        font-size: 14px;
        font-weight: 600;
    }
    .Grid{
        margin-top: 25px;
        display: grid;
        grid-template-columns: repeat(auto-fill, 125px);
        grid-gap: 25px;
    }
</style>
