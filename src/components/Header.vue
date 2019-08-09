
<template>
  <v-toolbar app class="header" fixed>
    <v-container class="header-container" fill-height :class="{'pa-0': $vuetify.breakpoint.smAndDown}">
      <v-toolbar-title class="header-logo">
        <router-link class="header-logo" to="/">
          <span v-if="$vuetify.breakpoint.mdAndUp">QELS</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn v-for="(element, index) in navigation" :key="index" :to="element.link" icon>
        <v-icon>{{ element.icon }}</v-icon>
      </v-btn>
      <v-select class="ml-3 language-select text-xs-center" v-model="language" :items="$store.getters.languages" item-text="short" return-object solo dense hide-details :menu-props="{transition: 'slide-y-transition', offsetY: true}" append-icon></v-select> -->
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
      // navigation: [
      //   {
      //     title: 'Home',
      //     icon: 'home',
      //     link: '/'
      //   }, {
      //     title: 'Editor',
      //     icon: 'code',
      //     link: '/editor/main'
      //   }, {
      //     title: 'Tutorial',
      //     icon: 'school',
      //     link: '/editor/tutorial'
      //   }
      // ]
    };
  }
};
</script>

<style scoped>
</style>

<style>
</style>
