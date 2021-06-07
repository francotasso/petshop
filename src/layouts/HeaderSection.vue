<template>
    <header class="site-header header-style-1">
        <navbar @overlay="setOverlay"/>
        <navbar sticky @overlay="setOverlay"/>
    </header>
</template>

<script>
import Navbar from './Navbar';

export default {
    name: 'HeaderSection',
    components: {
        Navbar
    },
    methods: {
        setOverlay(state) {
            this.$emit('overlay', state);
        }
    }
}
</script>