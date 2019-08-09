<template>
  <div class="home">
    <div class="main">
      <div class="circle c1"></div>
      <div class="circle c2"></div>
      <div class="circle c3"></div>
      <div class="circle c4"></div>
      <div class="circle c5"></div>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <v-flex>
            <h3 class="display-3 mb-4 text-xs-center text-uppercase">Quorum Equity Linked Securities</h3>
            <h3 class="display-1 mb-4 text-xs-center red-text">An equity-linked security is a debt instrument with variable payments linked to an equity market benchmark.</h3>
          </v-flex>
        </v-layout>
      </v-container>
      <v-sparkline
        fill
        :gradient="['#192149']"
        :line-width="2"
        :padding="0"
        :smooth="13"
        :value="[0, 2, 5, 9, 5, 10, 3, 5, 0, 7, 5, 8, 2, 9, 0]"
        auto-draw
      ></v-sparkline>
    </div>

    <v-container>
      <v-layout align-center justify-center style="min-height: 500px;">
        <v-flex>
          <v-card class="card my-5" elevation="24" v-ripple to="/login">
            <v-layout row align-center>
              <span class="headline red-text">Log in to experience QELS !</span>
              <v-spacer />
              <span class="headline">Go to Login</span>
              <v-icon dark class="ml-2">people</v-icon>
            </v-layout>
          </v-card>
          <v-card class="card my-5" elevation="24" v-ripple to="/login">
            <v-layout row align-center>
              <span class="headline" style="color: #ec2969;">If you do not have an account, would you like to Join ?</span>
              <v-spacer />
              <span class="headline">Go to Join</span>
              <v-icon dark class="ml-2">people</v-icon>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-parallax class="main-parallax" src="/static/main.jpg">
      <v-responsive>
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <span class="headline">Equity-linked securities are an alternative type of fixed-income investment. They are structured products most often created as bonds. Equity-linked securities are often used in private market corporate capital financings. They are offered to investors for the purpose of raising corporate capital. They are not traded on financial market exchanges.</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-responsive>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
    };
  },
  mounted () {
  }
};
</script>

<style>
</style>
