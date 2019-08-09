<template>
  <v-app id="app" dark>
    <v-snackbar v-model="$store.getters.snackbar.show" :color="$store.getters.snackbar.color" :multi-line="$store.getters.snackbar.mode === 'multi-line'" :timeout="$store.getters.snackbar.timeout" :vertical="$store.getters.snackbar.mode === 'vertical'" top right>
      {{ $store.getters.snackbar.message }}
      <v-btn dark flat @click="$store.getters.snackbar.show = false">Close</v-btn>
    </v-snackbar>
    <Header />
    <v-content>
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>

<style>
@font-face {
  font-family: "DarkerGrotesque Light";
  src: url("assets/fonts/DarkerGrotesque-Light.ttf");
}
@font-face {
  font-family: "DarkerGrotesque";
  src: url("assets/fonts/DarkerGrotesque-Regular.ttf");
}
@font-face {
  font-family: "DarkerGrotesque Medium";
  src: url("assets/fonts/DarkerGrotesque-Medium.ttf");
}
@font-face {
  font-family: "DarkerGrotesque SemiBold";
  src: url("assets/fonts/DarkerGrotesque-SemiBold.ttf");
}
@font-face {
  font-family: "DarkerGrotesque Bold";
  src: url("assets/fonts/DarkerGrotesque-Bold.ttf");
}
@font-face {
  font-family: "DarkerGrotesque ExtraBold";
  src: url("assets/fonts/DarkerGrotesque-ExtraBold.ttf");
}
@font-face {
  font-family: "DarkerGrotesque Black";
  src: url("assets/fonts/DarkerGrotesque-Black.ttf");
}

* {
  outline: none;
  vertical-align: middle;
  scroll-behavior: smooth;
  user-select: none;
  transition: .3s cubic-bezier(.25,.8,.5,1);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* *:not(i) {
  font-family: 'DarkerGrotesque Bold', sans-serif !important;
  font-weight: 900;
} */

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(124, 124, 124, 0.5);
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(124, 124, 124, 0.5);
}

html, body {
  margin: 0px;
  background: black;
  color: white;
  /* font-family: 'DarkerGrotesque', sans-serif; */
  /* font-weight: 500; */
}

a {
  color: inherit !important;
  text-decoration: none !important;
}

p {
  margin: 0px;
}

.v-content {
  padding-top: 0px !important;
  background-color: rgb(25, 33, 73);
}

.main-parallax .v-parallax__image-container {
  background-color: black !important;
}

.main-parallax .v-parallax__image {
  opacity: 0.2 !important;
}

.main {
  position: relative;
  padding: 256px 0px 0px;
  background-color: rgb(18, 24, 54);
  color: white;
}

.main.mini {
  padding: 128px 0px 0px;
}

.main.mini .container {
  margin-bottom: -96px;
}

.main .circle {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: rgba(53, 61, 107, 0.4);
  animation-name: anim-circle;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.main .circle.c1 {
  top: 130px;
  right: 87px;
  width: 200px;
  height: 200px;
  animation-duration: 20s;
}

.main .circle.c2 {
  bottom: 32px;
  left: 67px;
  width: 200px;
  height: 200px;
  animation-duration: 140s;
}

.main .circle.c3 {
  top: 5px;
  left: 10px;
  width: 200px;
  height: 200px;
  animation-duration: 150s;
}

.main .circle.c4 {
  bottom: 119px;
  right: 96px;
  width: 200px;
  height: 200px;
  animation-duration: 90s;
}

.main .circle.c5 {
  bottom: 10px;
  right: 10px;
  width: 200px;
  height: 200px;
  animation-duration: 70s;
}

.card {
  padding: 32px;
  background-color: rgb(36, 45, 85) !important;
  border-radius: 24px !important;
  color: white !important;
  overflow: hidden;
}

.card.white-back {
  background-color: white !important;
  color: black !important;
}

table {
  border-collapse: collapse;
  text-align: center;
}

table thead tr td {
  padding: 12px 4px;
}

table tbody tr td {
  padding: 0px 4px;
  border-top: 1px groove white;
}

table tr td {
  border-right: 1px groove rgba(255, 255, 255, 0.1);
}

table tr td:last-child {
  border-right: none;
}

.red-text {
  color: #ec2969;
}

@keyframes anim-circle {
  0% {
    transform: translateX(20px) translateY(5px);
  }
  20% {
    transform: translateX(5px) translateY(0px);
  }
  40% {
    transform: translateX(-20px) translateY(-15px);
  }
  60% {
    transform: translateX(-8px) translateY(-10px);
  }
  80% {
    transform: translateX(-1px) translateY(-9px);
  }
  100% {
    transform: translateX(-10px) translateY(0px);
  }
}
</style>
