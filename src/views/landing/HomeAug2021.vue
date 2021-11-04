<template>
  <div>
    <CoachingProgramCTAHero />

    <Pillars />
    <TestimonialsSection />
  </div>
</template>

<script>
import CoachingProgramCTAHero from "@/components/CoachingProgramCTAHero";
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
import Pillars from "@/components/sections/Pillars";

export default {
  components: {
    Pillars,
    CoachingProgramCTAHero,
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
  },
  data: () => ({
    hasApplied: false,
  }),
  computed: {
    ...mapGetters(["getApplicant"]),
  },
  methods: {
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

.pillar-text {
  min-height: 80px;
}
.pillar-price {
  min-height: 80px;
}

.pillar-body {
  .cta-component {
    .privacy {
      font-size: 0.8em;
      text-shadow: none;
      a {
        color: $primary;
      }
    }
  }
}

.level-up-landing-hero {
  .thanks-box {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    padding: 1em;
  }
  .big-message {
    .action {
      color: $primary;
    }
  }

  .start-application-form {
    margin-top: 40px;
  }

  .checklist {
    font-size: 1.6rem;
    @media (max-width: 800px) {
      font-size: 1.4rem;
    }

    .title {
      text-align: left;
    }
    .item {
      padding-bottom: 5px;
      svg {
        fill: white;
        width: 20px;
        height: 20px;
      }
      span {
        padding-left: 15px;
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-size: 4.2em;
    margin: 0px;
  }
  h2 {
    font-size: 2em;
  }
  h3 {
    font-size: 1.5em;
  }
  h4 {
    font-size: 1.25rem;
  }
  h5 {
    font-size: 1.1rem;
  }
}
</style>
