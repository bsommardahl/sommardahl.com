<template>
  <div>
    <Hero
      class="landing-page-hero"
      :unsplashIds="['gTs2w7bu3Qo', '49UXHs41UPI', 'G1N9kDHqBrQ']"
      height="50vh"
      backgroundColor="rgba(25, 32, 71,0.7)"
    >
      <h1>Developer Coaching Program</h1>
      <h4>A system for developing mastery</h4>
    </Hero>

    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-10 bg-periwinkle shadow border p-4">
          <div class="start-application-form" v-if="!hasApplied">
            <h2 class="card-title text-center">Developer Coaching Program</h2>
            <StartApplicationForm
              @submitted="startCoachingApplication"
              submitButtonLabel="Start Membership"
            />
          </div>
          <Thanks v-if="hasApplied" @startOver="clearApplicant" />
          <PartneringWith :partner="getSource" />
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <h3>What do I get?</h3>
      <p>
        In the developer coaching program, you get:
        <ul>
          <li>Weekly accountability and coaching sessions</li>
          <li>Access to library of previous coaching sessions</li>
          <li>Weekly stretch assignments</li>
          <li>Annual seniority-gap assessment and career coaching</li>
          <li>Access to our community of like-minded aspiring senior developers</li>
          <li>Access to member-only enrichment events</li>
          <li>Access to invite-only Sommardahl Academy Fellowship</li>
        </ul>
      </p>

      <div class="row">
        
      </div>
    </div>
    <!-- <div class="mt-5 pt-3 bg-periwinkle">
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
    features:[
      {
        icon: "",
        title: "Weekly Coaching",
        description: "",
        galleryImageUrl: ""
        
      },
      {
        icon: "",
        title: "Video Library",
        description: "",
        galleryImageUrl: ""
        
      },{
        icon: "",
        title: "Stretch Assignments",
        description: "",
        galleryImageUrl: ""
        
      }
      ,{
        icon: "",
        title: "Gap Assessment",
        description: "",
        galleryImageUrl: ""
        
      },{
        icon: "",
        title: "Career Coaching",
        description: "",
        galleryImageUrl: ""
        
      },{
        icon: "",
        title: "Like-Minded Community",
        description: "",
        galleryImageUrl: ""
        
      },{
        icon: "",
        title: "Enrichment Events",
        description: "",
        galleryImageUrl: ""
        
      },{
        icon: "",
        title: "Fellowship Invite",
        description: "",
        galleryImageUrl: ""
        
      }
    ]
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

.landing-page-hero {
  .big-message {
    .action {
      color: $primary;
    }
  }

  .checklist {
    font-size: 1.6rem;
    @media (max-width: 800px) {
      font-size: 1.4rem;
    }

    .title {
      text-align: left;
      padding-top: 30px;
      padding-bottom: 20px;
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
    margin: 0px auto;
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
