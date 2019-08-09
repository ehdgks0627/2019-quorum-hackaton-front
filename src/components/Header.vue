
<template>
  <v-toolbar app class="header" fixed dark>
    <v-container class="header-container" fill-height fluid>
      <v-toolbar-title class="header-logo">
        <router-link class="header-logo" to="/">
          <span>QELS</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link v-for="(element, index) in navigation" :key="index" class="navigation" :to="element.link">
        <v-layout row justify-center>
          <span class="title">{{ element.title }}</span>
          <v-icon class="ml-1">{{ element.icon }}</v-icon>
        </v-layout>
      </router-link>
    </v-container>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    navigation () {
      var result = [
        {
          title: 'List',
          icon: 'list',
          link: '/list'
        }, {
          title: 'Stock',
          icon: 'trending_up',
          link: '/stock'
        }, {
          title: 'Contract',
          icon: 'assignment',
          link: '/write'
        }
      ];

      if (this.$store.getters.account.identity) {
        result.push({
          title: 'My Page',
          icon: 'account_circle',
          link: '/myPage'
        });
      } else {
        result.push({
          title: 'Login',
          icon: 'people',
          link: '/login'
        });
      }

      return result;
    }
  },
  watch: {
  },
  data () {
    return {
    };
  }
};
</script>

<style scoped>
.header {
  background-color: rgba(0, 0, 0, 0.3);
}

.navigation {
  margin: 0px 8px;
  opacity: 0.5;
}

.navigation:hover,
.navigation.router-link-active {
  opacity: 1;
}
</style>

<style>
</style>
