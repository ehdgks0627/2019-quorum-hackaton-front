
<template>
  <v-toolbar app class="header" fixed dark>
    <v-container class="header-container" fill-height fluid>
      <v-toolbar-title class="header-logo">
        <router-link class="header-logo" to="/">
          <span>QELS</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="(element, index) in navigation" :key="index" :to="element.link" icon>
        <v-icon>{{ element.icon }}</v-icon>
      </v-btn>
    </v-container>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  computed: {
  },
  watch: {
  },
  data () {
    return {
      navigation: [
        {
          title: 'Stock',
          icon: 'trending_up',
          link: '/stock'
        }, {
          title: 'Write',
          icon: 'assignment',
          link: '/write'
        }, {
          title: 'Login',
          icon: 'account_circle',
          link: '/login'
        }
      ]
    };
  }
};
</script>

<style scoped>
.header {
  /* background-color: rgba(0, 0, 0, 0.3); */
}
</style>

<style>
</style>
