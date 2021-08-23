<template>
  <div>
    <Hero
      class="landing-page-hero"
      :unsplashIds="['Yui5vfKHuzs', 'wMRIcT86SWU', 'xRlI-L-kvrw']"
      height="50vh"
      backgroundColor="rgba(25, 32, 71,0.7)"
    >
      <h1>Sommardahl Events</h1>
      <h4>Enrichment Events to Accellerate your Drive</h4>
    </Hero>

    <!-- <div class="mt-5 pt-3 bg-periwinkle">
      <div class="container">
        <QandASection />
      </div>
    </div> -->
  </div>
</template>

<script>
import Hero from "@/components/Hero";
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
    ...mapGetters(["getApplicant"]),
  },
  methods: {
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
