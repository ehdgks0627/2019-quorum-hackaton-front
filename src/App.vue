<template>
  <v-app id="app">
    <!-- <v-progress-linear v-if="$store.getters.progress.show" :indeterminate="true" class="main-progress" height="2"></v-progress-linear>
    <v-snackbar v-model="$store.getters.snackbar.show" :color="$store.getters.snackbar.color" :multi-line="$store.getters.snackbar.mode === 'multi-line'" :timeout="$store.getters.snackbar.timeout" :vertical="$store.getters.snackbar.mode === 'vertical'" top right>
      {{ $store.getters.snackbar.message }}
      <v-btn dark flat @click="$store.getters.snackbar.show = false">Close</v-btn>
    </v-snackbar>
    <v-expand-transition>
      <Header v-show="$store.getters.screen.header" />
    </v-expand-transition> -->
    <v-content>
      <router-view />
    </v-content>
    <!-- <v-speed-dial v-model="fab" fixed bottom right direction="left" transition="scale-transition">
      <template v-slot:activator>
        <v-btn v-model="fab" color="secondary" dark fab>
          <v-icon>menu</v-icon>
          <v-icon>close</v-icon>
        </v-btn>
      </template>
      <v-btn @click="$store.dispatch('switchFullScreen', {})" fab dark small color="secondary">
        <v-icon>{{ $store.getters.screen.header || $store.getters.screen.footer ? 'fullscreen' : 'fullscreen_exit' }}</v-icon>
      </v-btn>
      <v-btn v-if="$route.name === 'TutorialChapter'" @click="$store.dispatch('switchHint', {})" fab dark small color="secondary">
        <v-icon>{{ $store.getters.screen.hint ? 'visibility_off' : 'visibility' }}</v-icon>
      </v-btn>
    </v-speed-dial>
    <v-expand-transition>
      <Footer v-show="$store.getters.screen.footer" />
    </v-expand-transition>
    <v-alert class="main-alert" v-model="$store.getters.alert.show" :type="$store.getters.alert.type" dismissible transition="slide-x-reverse-transition">{{ $store.getters.alert.message }}</v-alert>
    <div class="hidden-dom-wrapper">
      <textarea ref="copyDom" class="copy-dom"></textarea>
      <input ref="importFileDom" class="import-file-dom" type="file" @change="onOpenSourceCodeFile" />
      <template v-for="(contract, contractIndex) in $store.getters.editor.dapp.contracts">
        <input :key="'a' + contractIndex" :ref="'importABIDom' + contractIndex" :id="'importABIDom' + contractIndex" class="import-file-dom" type="file" @change="onOpenABIFile" />
        <input :key="'b' + contractIndex" :ref="'importBytecodeDom' + contractIndex" :id="'importBytecodeDom' + contractIndex" class="import-file-dom" type="file" @change="onOpenBytecodeFile" />
      </template>
      <a ref="exportFileDom" class="export-file-dom" :href="exportFileHref" :download="exportFileName"></a>
    </div> -->
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
  },
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
