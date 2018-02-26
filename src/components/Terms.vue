<template>
  <div class="home">
    <v-layout column>
      <v-flex xs12 md6 offset-md3 class="lxsmain lxslightgreen pa-5">
        <h1 class="display-1 font-weight-bolder white--text">Terms</h1>
        <div class="lxsdivider"></div>
        <p class="subheading my-4">Connect followers, fans, partners, friends and family in your own <strong>personal social network</strong> (<strong>blog</strong> included) available on iOS, Android and Web.</p>
        <v-btn large dark block color="lxspink">Get started</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lxshow {
  padding-bottom: 6px;
  border-bottom: 4px dashed white;
}
.subheading {
  font-size: 18px !important;
}
.lxsdivider {
  width: 30%;
  height: 8px;
  background: rgba(255, 255, 255, 1);
  margin: 16px 0;
}
.lxsmain {
  border-radius: 4px;
}
.note {
  background-color: #ffdddd;
  border-left: 6px solid #f44336;
  padding: 16px 16px 16px 24px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.price-btn {
  padding: 8px 32px !important;
  box-shadow: 0 5px 30px rgba(156, 160, 171, 0.25) !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  outline: none;
}
.price-btn .price {
  font-size: 54px !important;
}
.btn {
  font-size: 20px !important;
  margin: 0;
}
.home {
  margin-top: 10vh!important;
}
</style>
