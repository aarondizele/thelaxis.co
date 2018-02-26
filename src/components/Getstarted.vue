<template>
  <v-layout column>
    <v-btn icon @click="$router.back()" class="back_button hidden-sm-and-down">
      <v-icon large color="blue">arrow_back</v-icon>
    </v-btn>
    <v-flex xs12 md6 offset-md3>
      <h1 class="display-2 lxsmuted--text">Start your project</h1>
      <div class="my-divider pink mt-2 mb-4"></div>
      <div class="my-2 my-headline font-weight-lighter lxsmuted--text text-xs-justify">
        <span class="blue--text">Thanks for your interest.</span> We build a personal social network (blog included) mobile apps iPhone, Android and website similar to Facebook, Instagram and Twitter combined.
        Our design process is subdivided to 5 steps:
        <ul class="px-5 my-2">
          <li>Signing contract</li>
          <li>Getting project feedback</li>
          <li>Create website and mobile apps</li>
          <li>Testing</li>
          <li>And finally payment.</li>
        </ul>
        <span>The price is <strong>$750</strong> that included mobile apps and website designs, domain name, hosting and deployments on AppStore, Playstore and Web.
        <br> <br>
        </span>
      </div>
      <v-form v-model="valid" @submit.prevent="onGetStarted" v-if="!formIsSubmitted" class="mt-2">
        <strong class="my-headline lxsmuted--text">Please, fill this form out to get started your project :</strong>
        <v-text-field
          label="Last name"
          v-model.trim="lastname"
        ></v-text-field>
        <v-text-field
          label="First name"
          v-model.trim="firstname"
        ></v-text-field>
        <v-text-field
          label="E-mail"
          v-model="email"
          :rules="emailRules"
          email
          required
        ></v-text-field>
        <v-text-field
          label="Comment"
          v-model.trim="comment"
          multi-line
        ></v-text-field>
        <v-btn large round dark depressed :loading="loading" type="submit" :ripple="false" class="price">
          <v-icon>play_arrow</v-icon>
          <span class="pl-1">Continue</span>
        </v-btn>
      </v-form>
      <v-card tile class="subheading font-weight-lighter lxsmuted--text" v-else>
        <v-card-text>Thanks for your request! We will contact you on your email as soon as possible.</v-card-text>
      </v-card> 
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from 'firebase'

export default {
  data: () => ({
    formIsSubmitted: false,
    valid: false,
    loading: false,
    lastname: '',
    firstname: '',
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    comment: ''
  }),
  methods: {
    onGetStarted () {
      this.loading = true
      firebase.firestore().collection('projects').add({
        comment: this.comment,
        email: this.email,
        lastname: this.lastname,
        firstname: this.firstname
      })
      .then(() => {
        this.formIsSubmitted = true
        this.loading = false
      })
      .catch(error => console.error(error))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.input-group--text-field.input-group--multi-line textarea {
  resize: none;
}
@media only screen and (max-width: 767px) {
  .back_button {
    top: 0%;
    left: 0%;
  }
}
</style>
