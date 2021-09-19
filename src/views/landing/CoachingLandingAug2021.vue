<template>
  <div>
    <CoachingProgramCTAHero />

    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="">
          <h3 class="text-center">EVERY Developer Needs a Coach</h3>

          <p class="">
            Dev Amplifier is the <strong>step-by-step</strong> coaching program
            that drives developers to become more effective, while providing
            them with all the necessary tools and education to grow into the
            next level in a fraction of the time.
          </p>
          <!-- <div class="d-block d-md-none">
            <Unsplash
              imageId="FlPc9_VocJ4"
              align="left"
              description="Every software developer needs a coach."
              width="100%"
              imageClass="card-img-top"
              :thumbnail="false"
            />
          </div> -->
        </div>
        <div class="col-1 d-block d-md-none"></div>
        <div class="col-12 col-md-6">
          <div class="">
            <div class="big-text">
              <h2 class="text-uppercase">We believe...</h2>
              <ul class="mt-4">
                <li class="mt-2">
                  <strong>Most</strong> software developers leave their growth
                  up to chance.
                </li>
                <li class="mt-2">
                  <strong>Everyone</strong> has skill gaps.
                  <strong>Most</strong> are good at hiding them.
                  <strong>Few</strong>
                  will fill them.
                </li>
                <li class="mt-2">
                  Software developers can advance <strong>WAY</strong> faster
                  than they often do.
                </li>

                <li class="mt-2">
                  <strong>EVERY</strong> software developer needs a coach!
                </li>
              </ul>
              <!-- <h4 class="mt-4">Sign up today for a free coaching session!</h4> -->
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <h2 class="text-uppercase">In this program, you get:</h2>
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
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-8 col-md-5">
          <StartCoachingApplicationForm
            @submitted="startCoachingApplication"
            submitButtonLabel="Schedule 1st Session"
            source="CoachingLandingAug2021"
            :hideFormOnLoad="true"
            title="FREE Coaching Session"
            :buttonBlock="true"
          >
            <div class="mt-5 text-center">
              <h3 class="">It's only $83/month!</h3>
            </div>
          </StartCoachingApplicationForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CoachingProgramCTAHero from "@/components/CoachingProgramCTAHero";
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
    CoachingProgramCTAHero,
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

  .start-application-form {
    margin-top: 40px;
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
