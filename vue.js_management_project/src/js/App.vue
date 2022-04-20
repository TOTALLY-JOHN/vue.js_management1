<template>
  <div>
    <nav>
      <template
        v-for="(routePath, routeName, index) of menuLinks" :key="index"
      >
        <preloadable-router-link
          :to="routePath"
        >{{ routeName }}</preloadable-router-link>
        <span class="separator" v-if="index < menuLinsAmount - 1"> | </span>
      </template>
    </nav>

    <main>
      <router-view/>
    </main>

    <footer>
      <p>
        Refer to this template!
      </p>
    </footer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        menuLinks: {
          'Home': '/',
          'Contact': '/contact',
          'Non-existent route': '/asd',
        },
      };
    },
    
    computed: {
      menuLinksAmount() {
        return Object.keys(this.menuLinks).length;
      },
    },
  };
</script>