<template>
  <v-container fluid>
    <v-flex xs12 sm5 md3>
    <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
      error-count="3"
    ></v-text-field>
    <v-text-field
      v-model="phone"
      :rules="phoneRules"
      label="Phone number"
      required
      mask="(###)###-####"
      prefix="+7"
      placeholder="(###)###-####"
    ></v-text-field>
    <v-textarea
      v-model="message"
      name="input-7-1"
      label="Message"
      :counter="250"
      :rules="messageRules"
    ></v-textarea>
    <v-btn
      :disabled="!valid"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
   <v-alert
      :value="alert"
      dismissible
      type="success"
    >
      {{ this.$store.state.response }}
    </v-alert>
    </v-flex>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    valid: true,
    name: "",
    defaultName: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length >= 3) || "Name must be greater than 3 characters"
    ],
    phone: "",
    phoneRules: [
      v => !!v || "Phone is required",
      v => (v && v.length == 10) || "Phone must be contain 11 characters"
    ],
    message: "",
    messageRules: [
      v => !!v || "Message is required",
      v =>
        (v && v.length < 250) ||
        "Message must contain no more than 250 characters"
    ]
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("sendForm", {
          name: this.name,
          phone: this.phone,
          message: this.message
        });
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  },
  computed: {
    alert() {
      if (this.$store.state.response != "") {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted: function() {
    this.name = this.$store.state.forma.name;
  }
};
</script>