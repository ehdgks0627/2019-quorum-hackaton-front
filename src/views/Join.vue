<template>
  <div class="join">
    <div class="main mini">
      <div class="circle c1"></div>
      <div class="circle c2"></div>
      <div class="circle c3"></div>
      <div class="circle c4"></div>
      <div class="circle c5"></div>
      <v-container fill-height>
      </v-container>
      <v-sparkline
        fill
        :gradient="['#192149']"
        :line-width="2"
        :padding="0"
        :smooth="13"
        :value="[0, 2, 5, 9, 5, 10, 3, 5, 0, 7, 5, 8, 2, 9, 0]"
      ></v-sparkline>
    </div>

    <v-container>
      <v-layout align-center justify-center style="min-height: 500px;">
        <v-flex>
          <v-card class="card mx-auto pa-0 my-5" max-width="1000" elevation="24">
            <v-layout row>
              <v-flex md6>
                <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" aspect-ratio="1.7" height="100%"></v-img>
              </v-flex>
              <v-flex md6>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-layout fill-height column justify-center align-content-space-around class="pa-5">
                    <h3 class="display-2 text-xs-center my-4">Join</h3>
                    <v-text-field v-model="identity" label="Identity" :rules="identityRules"></v-text-field>
                    <v-text-field v-model="password" label="Password" :rules="passwordRules"></v-text-field>
                    <v-spacer />
                    <v-layout row justify-space-between align-center class="mt-5">
                      <v-spacer />
                      <router-link to="/login">
                        <span class="subtitle-1">Login</span>
                      </router-link>
                    </v-layout>
                    <v-btn block large class="pa-2" color="primary" @click="join">
                      <span>Join</span>
                    </v-btn>
                  </v-layout>
                </v-form>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Join',
  components: {
  },
  data () {
    return {
      valid: true,
      identity: '',
      password: '',
      identityRules: [
        v => !!v || 'Please input your ID.'
      ],
      passwordRules: [
        v => !!v || 'Please input your PW.'
      ]
    };
  },
  methods: {
    join () {
      if (!this.$refs.form.validate()) {
        return;
      }

      var body = {
        user: this.identity,
        password: this.password
      };

      this.$http.post(this.$store.getters.server.hostname + this.$store.getters.server.path.join, body).then((response) => {
        console.log('then', response);
      }).catch((error) => {
        console.log('error', error);
      }).finally(() => {
        console.log('finally');
      });
    }
  },
  mounted () {
  }
};
</script>

<style>
</style>
