<template>
  <v-footer class="pa-3">
    <v-container class="header-container" py-0 fill-height>
      <v-spacer></v-spacer>
      <div v-html="$t('footer', {date: new Date().getFullYear()})"></div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
</style>
