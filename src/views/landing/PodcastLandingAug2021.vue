<template>
  <div>
    <Hero
      class="landing-page-hero"
      :unsplashIds="['c1ZN57GfDB0', 'h6PDEdr9IZo', 'waxDxYM2XI4']"
      height="60vh"
      backgroundColor="rgba(25, 32, 71,0.7)"
    >
      <h1>The Driven Developer</h1>
      <h4>The Podcast for Aspiring Senior Developers</h4>
    </Hero>

    <!--     

    <div class="mt-5 pt-3 bg-periwinkle">
      <div class="container">
        <QandASection />
      </div>
    </div> -->
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
    async startApplication(applicant) {
      await this.$store.dispatch("startApplication", {
        applicant,
      });
      await this.$store.dispatch("setStartDate", applicant.startDate);
      this.hasApplied = true;
      this.$router.push("/findplan");
    },
    async startCoachingApplication(applicant) {
      // const price = getSku(this).price || this.certification.price;
      // await this.$store.dispatch("startApplication", {
      //   applicant: {
      //     ...applicant,
      //     program_name: "Front-End Developer",
      //     program_price: price,
      //   },
      // });
      // await this.$store.dispatch("setStartDate", applicant.startDate);
      this.hasApplied = true;

      const { email, firstName, lastName } = applicant;
      const url = `https://docs.google.com/forms/d/e/1FAIpQLSeEXPST7tmTuflfGVckpPpeVaSM4MzWQlWDqA56kZwWk_g3DQ/viewform?usp=pp_url&entry.879340931=${encodeURI(
        firstName
      )}&entry.1375086099=${encodeURI(lastName)}&entry.1204421148=${encodeURI(
        email
      )}`;
      location.href = url;
    },
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
