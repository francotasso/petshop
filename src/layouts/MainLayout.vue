<template>
    <div class="page-wrapper" :class="{ 'body-overlay': overlay }">
        <header-section @overlay="setOverlay"/>
            <slot/>
        <footer-section/>
    </div>
</template>

<script>
import HeaderSection from './HeaderSection';
import FooterSection from './FooterSection';

export default {
    name: 'MainLayout',
    components: {
        HeaderSection,
        FooterSection
    },
    data() {
        return {
            overlay: false
        }
    },
    methods: {
        setOverlay(state) {
            this.overlay = state;
        }
    }
}
</script>