<template>
  <v-layout row wrap>
    <v-flex md6 class="hidden-sm-and-down">
      <v-layout d-flex row wrap justify-center class="mt-5 px-3">
        <v-flex xs4 class="box box--transparent"></v-flex>
        <v-flex xs4 class="box box--dark">
          <v-icon dark class="box--icon">android</v-icon>
        </v-flex>
        <v-flex xs4 class="box box--green">
          <v-icon dark class="box--icon">phone_android</v-icon>
        </v-flex>
        <v-flex xs4 class="box box--dark">
          <v-icon dark class="box--icon">fa-apple</v-icon>
        </v-flex>
        <v-flex xs4 class="box box--green">
          <v-icon dark class="box--icon">phone_iphone</v-icon>
        </v-flex>
        <v-flex xs4 class="box box--dark">
          <v-icon dark class="box--icon">laptop_mac</v-icon>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 sm12 md6>
      <h2 class="display-2 text-xs-left mt-5 mb-1 lxsmuted--text font-weight-bolder">Get your own personal social network mobile apps &amp; website<span class="pink--text" style="font-size: 74px !important; line-height: 16px;">.</span></h2>
      <p class="headline font-weight-lighter lxsmuted--text text-xs-justify pt-4 pb-3">We build for you a custom personal social network (blog included) with <strong>iPhone</strong>, <strong>Android</strong> apps and <strong>Website</strong> to connect your followers, fans, partners, friends and family.</p>
      <div row justify-center>
        <v-btn large round dark depressed class="my-btn price">for $750</v-btn>
        <v-btn large round depressed to="get-started" color="white" :ripple="false" class="my-btn get-started lxsmuted--text">
          <v-icon>play_arrow</v-icon>
          <span class="pl-1">Get started now</span>
        </v-btn>
      </div>
      <div class="px-3 pt-4 disclaimer text-xs-justify">
        <v-icon color="blue">verified_user</v-icon>
        <p class="body-2 font-weight-lighter lxsmuted--text pl-2">We design for <strong class="">free</strong>, if you're <strong class="">satisfied</strong>, then you <strong class="">pay</strong>! <strong>$750</strong> fee includes mobile apps and website designs, domain name, hosting and deployments on AppStore, Playstore and Web.
        </p>        
      </div>
    </v-flex>
  </v-layout>
</template>
