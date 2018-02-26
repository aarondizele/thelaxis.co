<template>
  <v-app class="white">
    <!-- <v-navigation-drawer app>

    </v-navigation-drawer> -->
    <v-toolbar app dense scroll-off-screen flat class="px-2">
      <v-btn icon @click="$router.back()"></v-btn>
      <v-spacer></v-spacer>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        icon
        class="mx-1 grey--text text--darken-4"
      >
        <v-icon size="24px" color="lxsmuted">{{ icon }}</v-icon>
      </v-btn>
      <v-menu :nudge-width="100">
        <v-toolbar-title slot="activator" >
          <i class="em em-flag-um pr-1" style="font-size: 16px"></i>
          <span class="title font-weight-light lxspink--text">{{language}}</span>
          <v-icon color="pink">keyboard_arrow_down</v-icon>
        </v-toolbar-title>
        <v-list>
          <v-list-tile v-for="lang in languages" :key="lang" @click="onSelectLanguage(lang)">
            <v-list-tile-title v-text="lang"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <v-container grid-list-lg>
        <v-slide-x-transition mode="out-in">
          <router-view/>
        </v-slide-x-transition>
      </v-container>
    </v-content>
    <v-footer app absolute height="auto" class="px-2" color="transparent">
      <v-container fluid>
        <v-layout class="layout--footer">
          <div class="subheading lxsmuted--text display-flex row align-items-center main--footer">
            <span>&copy; {{ new Date().getFullYear() }}.</span>
            <img src="../static/img/thelaxis.svg" alt="" height="18px" class="px-1">
            <router-link tag="strong" to="/" class="pointer">TheLaxis</router-link>
          </div>
          <div class="subheading lxsmuted--text questions--div">Have any questions? <router-link to="/contact-us" tag="a">Contact us</router-link></div>
        </v-layout>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    languages: ['En', 'Fr'],
    language: 'En',
    icons: ['fa-facebook-official', 'fa-twitter', 'fa-instagram', 'fa-snapchat']
  }),
  methods: {
    onSelectLanguage (val) {
      switch (val) {
        case 'Fr':
          this.language = 'Fr'
          break;
        case 'En':
          this.language = 'En'
          break;
        default:
          this.language = 'En'
          break;
      }
    }
  },
  created () {
    // this.onSelectLanguage(this.language)
  }
}
</script>
