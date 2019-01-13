
<!-- This is the VUE compoment -->
<template>

    <div id="app">
        <h1>App.vue</h1>

        <p class="p1">This is a p (style from main app.scss)</p>
        <p class="p2">This is other p (style from vue style tag)</p>

        <br>


        <img :src="boat_src" alt="Boat" height="100" width="100">
        <img :src="circles_src" alt="Circles" height="100" width="100">



    </div>

</template>


<!-- The VUE script -->
<script>

export default {
    data () {
        return {
            boat_src: require('../imgs/boat.jpg'),
            circles_src: require('../imgs/circles.svg'),
        };
    },
}

</script>


<!-- The VUE style -->
<style lang="scss" scoped>
    .p2 {
        font-weight: bold;
        background-color: darkolivegreen;
    }
</style>
