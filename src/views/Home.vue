<template>
  <div>
    <!-- <LevelUpInternationalOct2020 v-if="levelup && international" />
    <InternationalMay2020 v-else-if="international" />
    <CollegeFSDMay2021 v-else-if="college && program == 'fsd'" />
    <CollegeFEMay2021 v-else-if="college" /> -->
    <LevelUpOct2020 />
  </div>
</template>

<script>
import LevelUpOct2020 from "../views/landing/LevelUpOct2020.vue";

export default {
  components: {
    LevelUpOct2020,
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
        this.$store.dispatch(
          "setProgramTitle",
          "Sommardahl Academy International"
        );
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
