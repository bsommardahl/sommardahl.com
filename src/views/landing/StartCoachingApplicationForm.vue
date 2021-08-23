<template>
  <form @submit.prevent="submitForm">
    <div class="form-label-group">
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
    <div class="form-label-group">
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
    <div class="form-label-group">
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

    <!-- <div class="form-label-group">
      <label for="inputUserName">Phone Number</label>
      <input
        type="tel"
        name="phone"
        class="form-control"
        placeholder="Phone Number"
        v-model="phone"
        autofocus
      />
    </div>-->

    <!-- <div class="form-label-group" v-if="hasPromoCode">
      <label for="promoCode">Promo Code</label>
      <input class="form-control" v-model="promoCode" />
    </div> -->

    <!-- <div class="form-label-group">
      <label for="inputPassword">Desired Start Date</label>
      <input
        type="date"
        class="form-control"
        placeholder="yyyy-MM-dd"
        v-model="startDate"
      />
    </div>-->

    <!-- <div class="form-label-group" v-if="offerFinancialAid">
      <label for="inputPassword">Financial Aid</label>

      <div class="form-check financial-aid" v-if="offerFinancialAid">
        <input
          class="form-check-input"
          type="checkbox"
          v-model="financialAid"
          name="financialAidShort"
        />
        <label class="form-check-label" for="financialAidShort"
          >I want financial aid.</label
        >
      </div>
    </div> -->

    <div class="cta">
      <button
        class="btn btn-lg btn-cta btn-block text-uppercase"
        type="submit"
        :disabled="loading"
      >
        {{ submitButtonLabel || "Start Application" }}
      </button>
    </div>
    <div class="privacy text-center mt-3">
      <router-link to="/policy/privacy">Privacy Policy</router-link>
    </div>
  </form>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    hasPromoCode: String,
    offerFinancialAid: Boolean,
    submitButtonLabel: String,
    source: String,
  },
  data: () => ({
    first: "",
    last: "",
    email: "",
    loading: false,
  }),
  computed: {
    ...mapGetters([]),
  },
  mounted() {
    // this.promoCode = (this.hasPromoCode || "").toUpperCase();
  },
  methods: {
    track() {
      this.$gtag.event("conversion", {
        event_label: "Landing Page Form Filled",
        send_to: "AW-650985233/XLT-CKLD_8wBEJH-tLYC",
      });
    },
    async submitForm() {
      this.loading = true;

      const applicant = {
        first: this.first,
        last: this.last,
        email: this.email,
        source: this.source,
      };

      await this.$store.dispatch("startCoachingApplication", applicant);
      this.$emit("submitted", applicant);
      // this.track();

      const url = `https://calendly.com/sommardahl-academy/coaching-session-launch?name=${encodeURI(
        this.first
      )}%20${encodeURI(this.last)}&email=${encodeURI(this.email)}`;
      window.location = url;
    },
  },
};
</script>

<style lang="scss">
.start-application-form {
  .btn-cta {
    background-color: rgb(255, 82, 28);
    color: white;
    font-weight: 900;
  }
  .form-label-group {
    margin-bottom: 10px;
    label {
      font-size: 0.7em;
      margin-bottom: 0px;
    }
  }
  .cta {
    margin-top: 20px;
  }

  .financial-aid {
    label {
      font-size: 1.2em;
      padding-left: 10px;
      text-transform: inherit;
    }
    input {
      height: 20px;
      width: 20px;
    }
  }
}
</style>
