<template>
  <div>
    <CoachingLandingAug2021 />
  </div>
</template>

<script>
import CoachingLandingAug2021 from "./landing/CoachingLandingAug2021.vue";

export default {
  components: {
    CoachingLandingAug2021,
  },
  data() {
    return {
      international: false,
      levelup: false,
      college: false,
      program: false,
      campaign: false,
      source: false,
      loaded: false,
    };
  },
  mounted() {
    const source = this.$route.query.utm_source;
    if (source) {
      this.source = source.toLowerCase();
      this.$store.dispatch("setSource", this.source);
    } else {
      this.source = this.$store.state.source;
    }

    const campaign = this.$route.query.utm_campaign;
    if (campaign) this.campaign = campaign.toLowerCase();
    const program = this.$route.query.program;
    if (program) this.program = program.toLowerCase();

    if (this.campaign) {
      this.international = this.campaign.indexOf("-int-") > -1;
      if (this.international) {
        this.$store.dispatch("setPriceClass", "international");
        this.$store.dispatch("setProgramTitle");
      }

      this.levelup = this.campaign.indexOf("-levelup-") > -1;
      if (this.levelup) {
        this.$store.dispatch("setAudience", "levelup");
      }

      this.college = this.campaign.indexOf("college") > -1;
      if (this.college) {
        this.$store.dispatch("setAudience", "college");
      }
    } else {
      this.levelup = this.$store.state.audience === "levelup";
      this.college = this.$store.state.audience === "college";
      this.international = this.$store.state.priceClass === "international";
    }
    this.loaded = true;
  },
};
</script>

<style></style>
