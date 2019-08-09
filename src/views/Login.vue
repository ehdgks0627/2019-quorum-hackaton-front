<template>
  <div class="login">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" gradient="to top right, rgba(100,115,201,.63), rgba(25,32,72,.9)" class="justify-center align-center">
      <v-card class="mx-auto" max-width="1000">
        <v-layout row>
          <v-flex md6>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" aspect-ratio="1.7" height="100%"></v-img>
          </v-flex>
          <v-flex md6>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-layout fill-height column justify-center align-content-space-around class="pa-4">
                <h3 class="display-2 text-xs-center my-4">Welcome to QELS</h3>
                <v-text-field v-model="identity" label="Identity" :rules="identityRules"></v-text-field>
                <v-text-field v-model="password" label="Password" :rules="passwordRules"></v-text-field>
                <v-spacer />
                <v-layout row justify-space-between align-center class="mt-5">
                  <v-spacer />
                  <router-link to="/join">
                    <span>Join</span>
                  </router-link>
                </v-layout>
                <v-btn block large class="pa-2" color="primary">
                  <span>Login</span>
                </v-btn>
              </v-layout>
            </v-form>
          </v-flex>
        </v-layout>
      </v-card>
    </v-img>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {
  },
  data () {
    return {
      valid: true,
      identity: '',
      password: '',
      identityRules: [
        v => !!v || '를 입력하세요.'
      ],
      passwordRules: [
        v => !!v || '를 입력하세요.'
      ]
    };
  },
  mounted () {
  }
};
</script>

<style>
</style>
