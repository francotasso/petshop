<template>
  <div id="app">
    <router-view></router-view>
    <div class="back-to-top" @click="scrollUp">
      <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.displayScrollButton();
  },
  methods: {
    displayScrollButton() {
      const scrollBtn = document.querySelector('.back-to-top');
      window.addEventListener('scroll', () => {
        if (window.scrollY < 900) scrollBtn.style.display = 'none';
        else scrollBtn.style.display = 'block';
      })
    },
    scrollUp() {
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
    }
  }
}
</script>
