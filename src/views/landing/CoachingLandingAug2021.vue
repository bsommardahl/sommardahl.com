<template>
  <div>
    <Hero
      class="landing-page-hero"
      :unsplashIds="['gTs2w7bu3Qo', '49UXHs41UPI', 'G1N9kDHqBrQ']"
      height="50vh"
      backgroundColor="rgba(25, 32, 71,0.7)"
    >
      <h1>Dev Amplifier</h1>
      <h4>The mastery growth system for software developers</h4>
    </Hero>

    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-10 bg-periwinkle shadow border p-4">
          <div class="start-application-form" >
            <h2 class="card-title text-center">FREE Coaching Session</h2>
            <StartCoachingApplicationForm
              @submitted="startCoachingApplication"
              submitButtonLabel="Schedule Session"
              source="CoachingLandingAug2021"
            />
          </div>
          
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
        <div class="col"><a href = "https://buy.stripe.com/eVacNxejccdCbMQaEE" class="btn btn-primary"> Subscribe </a></div>
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
import StartCoachingApplicationForm from "@/views/landing/StartCoachingApplicationForm";
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
    StartCoachingApplicationForm,
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
      "getApplicant",
      "getSource",
    ]),
  },
  methods: {
    async startCoachingApplication(applicant) {
      this.hasApplied = true;

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