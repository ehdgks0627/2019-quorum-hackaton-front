<template>
  <div class="login">
    <!-- <v-img class="justify-center align-center"> -->
    <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" gradient="to top right, rgba(100,115,201,.63), rgba(25,32,72,.9)" class="justify-center align-center">
      <v-card class="mx-auto" max-width="800">
        <v-layout row>
          <v-flex md6>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>
          </v-flex>
          <v-flex md6>
            <v-layout fill-height column justify-center align-content-space-around class="pa-4">
              <span class="title text-xs-center mb-4">Login to QELS</span>
              <v-text-field hide-details v-model="identity" label="Identity"></v-text-field>
              <v-text-field hide-details v-model="password" label="Password"></v-text-field>
              <v-spacer />
              <v-layout row justify-space-between align-center>
                <v-spacer />
                <router-link to="">
                  <span>Join</span>
                </router-link>
              </v-layout>
              <v-btn block color="primary">
                <span>Login</span>
              </v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
    </v-img>
    <!-- <v-card class="mx-auto" max-width="400">
    </v-card> -->
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {
  },
  data () {
    return {
      identity: '',
      password: ''
    };
  },
  mounted () {
  }
};
</script>

<style>
</style>
