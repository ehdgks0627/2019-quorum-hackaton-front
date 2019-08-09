<template>
  <div class="home">
    <v-parallax class="main-parallax" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" :height="$vuetify.breakpoint.mdAndUp ? 800 : 1200">
      <v-responsive>
        <v-container fill-height>
          <v-layout justify-center align-center>
            <v-flex>
              <h3 class="display-3 mb-4">Welcome to QELS</h3>
              <div>
                <v-btn to="/write" color="primary" large>
                  <span>Write Contract</span>
                </v-btn>
                <span class="mx-4">OR</span>
                <v-btn to="/join" flat large>
                  <span>Go to Join</span>
                </v-btn>
              </div>
              <!-- <h3 class="display-3" v-text="$t('helloBifrost')"></h3>
              <div class="text-xs-center">
                <v-btn to="/editor" class="mx-0" color="primary" large>
                  <span v-text="$t('goToEditor')"></span>
                </v-btn>
              </div> -->
            </v-flex>
          </v-layout>
        </v-container>
      </v-responsive>
    </v-parallax>

    <v-container>
      <v-layout align-center justify-center style="min-height: 500px;">
        <v-flex>
          <!-- <div class="text-xs-center">
            <v-btn to="/editor/tutorial" class="mx-0" color="primary" large>
              <span v-text="$t('goToLearn')"></span>
            </v-btn>
          </div> -->
        </v-flex>
      </v-layout>
    </v-container>

    <v-parallax class="main-parallax" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" height="700">
      <v-responsive>
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <!--  -->
            </v-flex>
          </v-layout>
        </v-container>
      </v-responsive>
    </v-parallax>

    <v-container>
      <v-layout align-center justify-center style="min-height: 500px;">
        <v-flex>
          <!--  -->
        </v-flex>
      </v-layout>
    </v-container>

    <v-parallax class="main-parallax" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" height="700">
      <v-responsive>
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <!--  -->
            </v-flex>
          </v-layout>
        </v-container>
      </v-responsive>
    </v-parallax>

    <v-container>
      <v-layout align-center justify-center style="min-height: 500px;">
        <v-flex>
          <!--  -->
        </v-flex>
      </v-layout>
    </v-container>
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
.main-parallax .v-parallax__image-container {
  background-color: black !important;
}

.main-parallax .v-parallax__image {
  opacity: 0.2 !important;
}
</style>
