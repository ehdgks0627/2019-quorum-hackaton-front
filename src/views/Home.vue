<template>
  <div class="home">
    <!-- <v-parallax class="main-parallax" src="/static/main.jpg" :height="$vuetify.breakpoint.mdAndUp ? 800 : 1200">
      <v-responsive>
        <v-container fill-height>
          <v-layout justify-center align-center>
            <v-flex>
              <h3 class="display-3" v-text="$t('helloBifrost')"></h3>
              <component :is="$md('home.mdmain')" class="my-4"></component>
              <div class="text-xs-center">
                <v-btn to="/editor" class="mx-0" color="primary" large>
                  <span v-text="$t('goToEditor')"></span>
                </v-btn>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-responsive>
    </v-parallax>

    <v-container>
      <v-layout align-center justify-center style="min-height: 500px;">
        <v-flex>
          <component :is="$md('home.mdgoal')" class="my-4"></component>
          <div class="text-xs-center">
            <v-btn to="/editor/tutorial" class="mx-0" color="primary" large>
              <span v-text="$t('goToLearn')"></span>
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>

    <v-parallax class="main-parallax" src="/static/main.jpg" height="700">
      <v-responsive>
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <component :is="$md('home.mdfunction')"></component>
            </v-flex>
          </v-layout>
        </v-container>
      </v-responsive>
    </v-parallax>

    <v-container>
      <v-layout align-center justify-center style="min-height: 500px;">
        <v-flex>
          <component :is="$md('home.mdtutorialFlow')"></component>
        </v-flex>
      </v-layout>
    </v-container>

    <v-parallax class="main-parallax" src="/static/main.jpg" height="700">
      <v-responsive>
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <component :is="$md('home.mddiscussion')"></component>
            </v-flex>
          </v-layout>
        </v-container>
      </v-responsive>
    </v-parallax>

    <v-container>
      <v-layout align-center justify-center style="min-height: 500px;">
        <v-flex>
          <component :is="$md('home.mdreference')"></component>
        </v-flex>
      </v-layout>
    </v-container> -->
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
