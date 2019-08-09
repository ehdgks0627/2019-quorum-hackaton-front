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
            <h3 class="display-3 mb-4 text-xs-center text-uppercase font-weight-bold">Quorum Equity Linked Securities</h3>
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
              <span class="title" style="color: #ec2969;">로그인을 통해 QELS를 사용해보세요 !</span>
              <v-spacer />
              <span class="title">로그인하러 이동</span>
              <v-icon dark class="ml-2">people</v-icon>
            </v-layout>
          </v-card>
          <v-card class="card my-5" elevation="24" v-ripple to="/login">
            <v-layout row align-center>
              <span class="title" style="color: #ec2969;">로그인을 통해 QELS를 사용해보세요 !</span>
              <v-spacer />
              <span class="title">로그인하러 이동</span>
              <v-icon dark class="ml-2">people</v-icon>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-parallax class="main-parallax" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
      <v-responsive>
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
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
