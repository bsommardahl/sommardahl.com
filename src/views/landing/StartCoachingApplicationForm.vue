<template>
  <div class="cta-component">
    <div v-if="!started && hideFormOnLoad">
      <slot />
      <div class="cta">
        <button
          class="btn btn-lg btn-cta text-uppercase"
          :class="{ 'btn-block': buttonBlock }"
          type="submit"
          :disabled="finished"
          @click="startForm"
        >
          {{ submitButtonLabel || "Start Application" }}
        </button>
      </div>
    </div>
    <div v-if="finished" class="start-application-form mt-3">
      <div v-if="hideFormOnLoad" @click="close" class="close"></div>
      <div class="thanks-message">
        <div class="thanks-title">THANKS!</div>
        <p>
          We received your information. Please check your email for next steps.
        </p>
        <p>
          <button class="btn btn-lg btn-primary" @click="close">
            Continue >>
          </button>
        </p>
      </div>
    </div>
    <form @submit.prevent="submitForm" v-if="!finished && showForm">
      <div v-if="hideFormOnLoad" @click="close" class="close"></div>
      <div class="start-application-form container">
        <h2 class="card-title text-center">{{ title }}</h2>
        <div class="mt-3" :class="{ row: !preventHorizontal }">
          <div
            class="form-label-group"
            :class="{
              'col-sm-12': !preventHorizontal,
              'col-md-4': !preventHorizontal,
            }"
          >
            <label for="inputUserName">First Name</label>
            <input
              type="text"
              autocomplete="first"
              class="form-control"
              placeholder="First Name"
              v-model="first"
              required
            />
          </div>
          <div
            class="form-label-group"
            :class="{
              'col-sm-12': !preventHorizontal,
              'col-md-4': !preventHorizontal,
            }"
          >
            <label for="inputUserName">Last Name</label>
            <input
              type="text"
              autocomplete="last"
              class="form-control"
              placeholder="Last Name"
              v-model="last"
              required
            />
          </div>
          <div
            class="form-label-group"
            :class="{
              'col-sm-12': !preventHorizontal,
              'col-md-4': !preventHorizontal,
            }"
          >
            <label for="inputEmail">Email address</label>
            <input
              type="email"
              class="form-control"
              placeholder="Email address"
              name="email"
              v-model="email"
              required
              autofocus
            />
          </div>
        </div>
        <div class="cta">
          <button
            class="btn btn-lg btn-cta btn-block text-uppercase"
            type="submit"
            :disabled="finished"
          >
            {{
              showFormButtonLabel || submitButtonLabel || "Start Application"
            }}
          </button>
        </div>

        <div class="privacy text-center mt-3">
          <router-link to="/policy/privacy">Privacy Policy</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    hasPromoCode: String,
    offerFinancialAid: Boolean,
    showFormButtonLabel: String,
    submitButtonLabel: String,
    source: String,
    hideFormOnLoad: Boolean,
    title: String,
    buttonBlock: Boolean,
    preventHorizontal: Boolean,
  },
  data: () => ({
    first: "",
    last: "",
    email: "",
    started: false,
    finished: false,
  }),
  computed: {
    ...mapGetters([]),
    showForm() {
      return this.started || !this.hideFormOnLoad;
    },
  },
  mounted() {
    // this.promoCode = (this.hasPromoCode || "").toUpperCase();
  },
  methods: {
    close() {
      this.started = false;
      this.finished = false;
    },
    startForm() {
      this.started = true;
    },
    track() {
      this.$gtag.event("conversion", {
        event_label: "Landing Page Form Filled",
        send_to: "AW-650985233/XLT-CKLD_8wBEJH-tLYC",
      });
    },
    async submitForm() {
      this.finished = true;

      const applicant = {
        first: this.first,
        last: this.last,
        email: this.email,
        source: this.source,
      };

      await this.$store.dispatch("startCoachingApplication", applicant);
      this.$emit("submitted", applicant);
      // this.track();

      // const url = `https://calendly.com/sommardahl-academy/coaching-session-launch?name=${encodeURI(
      //   this.first
      // )}%20${encodeURI(this.last)}&email=${encodeURI(this.email)}`;
      // window.location = url;
    },
  },
};
</script>

<style lang="scss">
.cta-component {
  position: relative;

  .thanks-message {
    font-size: 1.8rem;
    text-align: center;

    .thanks-title {
      font-size: 1.8rem;
      font-weight: bold;
    }
  }
  .close {
    position: absolute;
    right: 12px;
    top: 12px;
    width: 22px;
    height: 22px;
    opacity: 0.3;
  }
  .close:hover {
    opacity: 1;
  }
  .close:before,
  .close:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 23px;
    width: 2px;
    background-color: #333;
  }
  .close:before {
    transform: rotate(45deg);
  }
  .close:after {
    transform: rotate(-45deg);
  }

  .btn-cta {
    background-color: rgb(255, 82, 28);
    color: white;
    font-weight: 900;
  }

  .cta {
    margin-top: 20px;
  }

  .start-application-form {
    padding: 1em;
    background-color: rgba(255, 255, 255, 0.4);

    form {
      padding: 0px 1vw;
    }

    .form-label-group {
      margin-bottom: 10px;

      label {
        //font-size: 0.5em;
        //text-transform: capitalize;
        margin-bottom: 0px;
        text-align: left;
        display: block;
      }
    }
    .privacy {
      font-size: 0.8em;
      text-shadow: none;
      a {
        color: #eee;
      }
    }
  }
}
</style>
