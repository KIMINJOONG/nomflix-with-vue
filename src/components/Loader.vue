<template>
    <div class="Container">
        <span role="img" aria-label="Loading">⏰</span>
    </div>
</template>

<script>
    export default {
        name: "Loader.vue"
    }
</script>

<style scoped>
    .Container{
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        font-size: 28px;
        margin-top: 20px;
    }
</style>
