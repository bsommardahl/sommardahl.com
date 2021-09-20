<template>
  <div class="mb-5">
    <Hero
      class="landing-page-hero"
      :unsplashIds="['c1ZN57GfDB0', 'h6PDEdr9IZo', 'waxDxYM2XI4']"
      height="30vh"
      backgroundColor="rgba(25, 32, 71,0.7)"
    >
      <h1>The Driven Developer</h1>
      <h4>The Podcast for Aspiring Master Developers</h4>
    </Hero>

    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <h3>What is "The Driven Developer"?</h3>
          "The Driven Developer" is a podcast dedicated to shining a light on
          behaviors of great software developers so that the developer community
          can follow suite and grow as a result. Each week, we invite a new
          guest to discuss their failures, their successes and whatever wisdom
          they've picked up along the way.
        </div>
      </div>
      <div class="row mt-5">
        <div class="col">
          <h3>Subscribe Today</h3>
          "The Driven Developer" is available on most major podcasting
          platforms.
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <div class="col" v-for="p in platforms" :key="p.name">
          <a :href="p.url" target="_blank" :alt="p.name">{{ p.name }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
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
    Icon,
    Logo,
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
    platforms: [
      {
        name: "Spotify",
        url: "https://open.spotify.com/show/30a1ICNI3wX3ILszzmSKVd",
        image: "",
      },
      {
        name: "Anchor.fm",
        url: "https://anchor.fm/sommardahl",
        image: "",
      },
      {
        name: "Apple Podcasts",
        url:
          "https://podcasts.apple.com/us/podcast/the-driven-developer/id1584867029",
        image: "",
      },
      {
        name: "Google Podcasts",
        url:
          "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy82NWNmMGRjYy9wb2RjYXN0L3Jzcw==",
        image: "",
      },
      {
        name: "Breaker",
        url: "https://www.breaker.audio/the-driven-developer",
        image: "",
      },
      {
        name: "Radio Public",
        url: "https://radiopublic.com/the-driven-developer-GO7LZb",
        image: "",
      },
      {
        name: "Stitcher",
        url: "https://www.stitcher.com/podcast/the-driven-developer",
        image: "",
      },
    ],
  }),
  computed: {
    ...mapGetters([]),
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
