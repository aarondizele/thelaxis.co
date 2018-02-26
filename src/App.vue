<template>
  <v-app class="white">
    <!-- <v-navigation-drawer app>

    </v-navigation-drawer> -->
    <v-toolbar app dense scroll-off-screen flat class="px-2">
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
          <span class="title font-weight-light lxspink--text">{{language}}</span>
          <v-icon dark>keyboard_arrow_down</v-icon>
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
            <img src="../../static/img/icons/thelaxis.svg" alt="" height="18px" class="px-1">
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

<style>
html {
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
}
.layout--footer {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
/* Get started button */
.price {
  background-image: linear-gradient(-180deg,#fd7054 0,#ff3b6a 100%);
  box-shadow: 0 7px 29px 0 rgba(254,89,105,.3);
  margin-right: 10px;
  color: #fff;
}
.get-started {
  border: none;
  color: #646467;
  background-color: #fff;
  box-shadow: 0 0 2px 0 rgba(44,47,51,.15), 0 3px 16px 0 #e9e9ea, inset 0 -4px 8px 0 rgba(0,0,0,.03);
  border-radius: 100px;
}
.theme--light .toolbar {
    background-color: transparent;
}
a {
  text-decoration: none;
}
.application.theme--light {
    background: #fff url(assets/shields--featured--enterprise.svg) repeat center center;
}
.input-group--select .input-group__selections {
    width: 4%;
}
.btn {
  text-transform: none;
  font-size: 16px!important;
  font-weight: 400 !important;
}
.my-card {
  background-color: transparent !important;
  border: 1px solid rgba(0,0,0,0.1) !important;
  border-radius: 3px !important;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.06) !important;
}

/* Custom generic CSS */
.display-flex {
  display: flex;
}
.row {
  flex-direction: row;
}
.wrap {
  flex-wrap: wrap;
}
.align-items-center {
  align-items: center;
}
.justify-content-start {
  justify-content: flex-start;
}
.text-uppercase {
  text-transform: uppercase !important
}
.pointer {
  cursor: pointer;
}
.font-weight-light {
  font-weight: 400 !important;
}
.font-weight-lighter {
  font-weight: 300 !important;
}
.font-weight-bold {
  font-weight: 500 !important;
}
.font-weight-bolder {
  font-weight: 700 !important;
}
@media only screen and (max-width: 767px) {
  .main--footer {
    order: 2;
    margin-top: 5px;
  }
  .questions--div {
    order: 1;
  }
  .layout--footer {
    flex-flow: column wrap;
    align-items: center;
  }
  .theme--light .toolbar {
    background-color: #ffffff;
  }
}
</style>
