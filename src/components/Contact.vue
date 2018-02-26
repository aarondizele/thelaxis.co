<template>
  <v-layout column>
    <v-btn icon @click="$router.back()" class="back_button hidden-sm-and-down">
      <v-icon large color="blue">arrow_back</v-icon>
    </v-btn>
    <v-flex xs12 md6 offset-md3>
      <h1 class="display-2 lxsmuted--text">Contact us</h1>
      <div class="my-divider pink mt-1 mb-3"></div>
      <p class="my-2 headline font-weight-lighter lxsmuted--text">Have any questions? Please leave your message below.</p>
      <v-form v-model="valid" @submit="onContact" v-if="!formIsSubmitted">
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
          label="Message"
          v-model.trim="message"
          multi-line
          required
          :rules="messageRules"
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
    loading: false,
    valid: false,
    lastname: '',
    firstname: '',
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    message: '',
    messageRules: [
      v => !!v || 'Message is required'
    ]
  }),
  methods: {
    onContact () {
      this.loading = true
      firebase.firestore().collection('messages').add({
        message: this.message,
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

