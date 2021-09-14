<template>
  <div>
    <Hero
      class="landing-page-hero"
      :unsplashIds="['gTs2w7bu3Qo', '49UXHs41UPI', 'G1N9kDHqBrQ']"
      height="80vh"
      backgroundColor="rgba(25, 32, 71,0.7)"
    >
      <div class="container">
        <div class="row h-100">
          <div class="col my-auto big-message">
            <Logo color="white" :width="250" class="landing-logo mb-3" />
            <video-embed
              :params="{ autoplay: 0 }"
              src="https://youtu.be/az97HgkS-sk"
            ></video-embed>
          </div>

          <div class="col-4 d-none d-lg-block my-auto apply">
            <div class="start-application-form">
              <h2 class="card-title text-center">FREE Coaching Session</h2>
              <StartCoachingApplicationForm
                @submitted="startCoachingApplication"
                submitButtonLabel="Schedule 1st Session"
                source="CoachingLandingAug2021"
              />
            </div>
          </div>
        </div>
      </div>
    </Hero>

    <div class="container mt-5">
      <div class="row">
        <div class="col col-md-7">
          <h1 class="text-center">Dev Amplifier</h1>
          <p>
            The <strong>step-by-step</strong> coaching program that drives
            developers to become more effective, while providing them with all
            the necessary tools and education to grow into the next level in a
            fraction of the time.
          </p>
          <Unsplash
            imageId="FlPc9_VocJ4"
            align="left"
            description="Every software developer needs a coach."
            width="100%"
            imageClass="card-img-top"
            :thumbnail="false"
          />
        </div>
        <div class="col">
          <h3>Intentional Coaching Inspires Seniority!</h3>

          In the Dev Amplifier coaching program, you get:
          <ul>
            <li>Weekly accountability and coaching sessions</li>
            <li>Access to library of previous coaching sessions</li>
            <li>Weekly stretch assignments</li>
            <li>Annual seniority-gap assessment and career coaching</li>
            <li>
              Access to our community of like-minded aspiring senior developers
            </li>
            <li>Access to member-only enrichment events</li>
            <li>Access to invite-only Sommardahl Academy Fellowship</li>
          </ul>
          <div class="mt-5 text-center">
            <h3 class="">It's only $83/month!</h3>

            <a
              @click="goto('apply')"
              class="mt-3 btn btn-lg btn-primary text-center"
              >Schedule 1st Session</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col">
          <!-- <a
            href="https://buy.stripe.com/eVacNxejccdCbMQaEE"
            class="btn btn-primary"
          >
            Subscribe
          </a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import StartCoachingApplicationForm from "@/views/landing/StartCoachingApplicationForm";
import Thanks from "@/views/landing/Thanks";
import { mapGetters } from "vuex";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import Unsplash from "@/components/Unsplash";
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
    Unsplash,
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
    features: [
      {
        icon: "",
        title: "Weekly Coaching",
        description: "",
        galleryImageUrl: "",
      },
      {
        icon: "",
        title: "Video Library",
        description: "",
        galleryImageUrl: "",
      },
      {
        icon: "",
        title: "Stretch Assignments",
        description: "",
        galleryImageUrl: "",
      },
      {
        icon: "",
        title: "Gap Assessment",
        description: "",
        galleryImageUrl: "",
      },
      {
        icon: "",
        title: "Career Coaching",
        description: "",
        galleryImageUrl: "",
      },
      {
        icon: "",
        title: "Like-Minded Community",
        description: "",
        galleryImageUrl: "",
      },
      {
        icon: "",
        title: "Enrichment Events",
        description: "",
        galleryImageUrl: "",
      },
      {
        icon: "",
        title: "Fellowship Invite",
        description: "",
        galleryImageUrl: "",
      },
    ],
  }),
  computed: {
    ...mapGetters(["getApplicant", "getSource"]),
  },
  methods: {
    async startCoachingApplication(applicant) {
      this.hasApplied = true;
    },
    clearApplicant() {
      this.hasApplied = false;
    },
    async scheduleFellowshipCall() {
      const applicant = this.getApplicant || {};
      let url = `https://calendly.com/sommardahl-academy/fellowship-intro`;
      if (applicant) {
        url += `?name=${encodeURI(applicant.first)}%20${encodeURI(
          applicant.last
        )}&email=${encodeURI(applicant.email)}`;
      }
      window.location = url;
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
