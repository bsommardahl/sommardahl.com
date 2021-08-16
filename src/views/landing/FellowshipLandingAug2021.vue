<template>
  <div>
    <Hero
      class="landing-page-hero"
      :unsplashIds="['Hb6uWq0i4MI', '5fNmWej4tAA', 'XZkk5xT8Xrk']"
      height="50vh"
      backgroundColor="rgba(25, 32, 71,0.7)"
    >
      <h1>Sommardahl Fellowship</h1>
      <h4>Immersive Mentorship Program for Driven Developers</h4>
    </Hero>
    <div class="container mt-5">
      <h3>What is a Fellowship?</h3>
      <p>
        A fellowship at Sommardahl Academy is an immersive mentorship program
        with daily touch points as participants address their seniority gaps
        with targetted learning and guidance.
      </p>
    </div>
    <div class="container mt-5 text-center">
      <a @click="startAssessment()" class="btn btn-lg btn-primary"
        >Start Assessment</a
      >
    </div>

    <div class="mt-5 pt-3 ">
      <div class="container">
        <QandASection />
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import StartApplicationForm from "@/views/landing/StartApplicationForm";
import Thanks from "@/views/landing/Thanks";
import { mapGetters } from "vuex";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import PartneringWith from "@/components/PartneringWith";
import DesignedByByron from "@/components/DesignedByByron";
import PromoAppFeeWaived from "@/components/PromoAppFeeWaived";
import TechSection from "@/components/sections/tech";
import CommercialSection from "@/components/sections/CommercialSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import QandASection from "@/components/sections/QandASection";
import PillarPrimary from "@/components/PillarPrimary";

export default {
  components: {
    Hero,
    Thanks,
    StartApplicationForm,
    Icon,
    Logo,
    Thanks,
    PromoAppFeeWaived,
    PartneringWith,
    TechSection,
    StatsSection,
    TestimonialsSection,
    CommercialSection,
    DesignedByByron,
    QandASection,
    PillarPrimary,
  },
  data: () => ({
    hasApplied: false,
  }),
  computed: {
    ...mapGetters([
      "getMethods",
      "getSource",
      "getApplicant",
      "getPromoCodesDisplay",
    ]),
  },
  methods: {
    async startAssessment() {
      const url = `https://docs.google.com/forms/d/e/1FAIpQLScP1A4OFO1Wv1C6ja23-w9vnpDO8dxt9nPI98VsPgbOS4fyDw/viewform?usp=sf_link`;
      location.href = url;
    },
    clearApplicant() {
      this.hasApplied = false;
    },
    goto(el) {
      function isHidden(el) {
        return el.offsetParent === null;
      }

      let element = document.getElementsByClassName(el);
      element.forEach((e) => {
        if (!isHidden(e))
          e.scrollIntoView({ behavior: "smooth", block: "end" });
      });
    },
  },
  mounted() {
    const applicant = this.getApplicant;
    this.hasApplied = applicant;
  },
};
</script>

<style lang="scss">
@import "@/variables";
</style>
