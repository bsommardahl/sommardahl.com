<template>
  <div>
    <Hero
      class="level-up-landing-hero"
      :unsplashIds="['gTs2w7bu3Qo', '49UXHs41UPI', 'G1N9kDHqBrQ']"
      height="65vh"
      backgroundColor="rgba(25, 32, 71,0.7)"
    >
      <div class="container">
        <div class="row h-100">
          <div class="col-12 col-md-7 my-auto big-message">
            <Logo color="white" :width="250" class="landing-logo mb-3" />
            <div class="mb-2">
              <h3 class="text-left action text-uppercase">Level Up with the</h3>
              <h1 class="text-left action text-uppercase">Dev Amplifier</h1>
              <!-- <h3 class="text-left action text-uppercase">Gain Seniority</h3> -->
            </div>

            <div class="checklist">
              <!-- <div class="title">
                Join the coaching program that can make it happen!
              </div> -->
              <div class="item">
                <Icon name="checkbox" />
                <span>Weekly Coaching Sessions</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Quests &amp; Assignments</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Growth Assessments</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Like-Minded Community</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Nights &amp; Weekends</span>
              </div>
            </div>
          </div>
          <div class="d-none d-md-block col-md-5 text-center">
            <StartCoachingApplicationForm
              submitButtonLabel="Schedule FREE Session"
              source="CoachingLandingAug2021"
              title="FREE Coaching Session"
              :hideFormOnLoad="true"
              :preventHorizontal="true"
              ><video-embed
                :params="{ autoplay: 0 }"
                src="https://youtu.be/j6HPJzYk-cc"
              ></video-embed>
            </StartCoachingApplicationForm>
          </div>
        </div>
      </div>
    </Hero>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col d-md-none text-center mt-5">
          <StartCoachingApplicationForm
            submitButtonLabel="Schedule FREE Session"
            source="CoachingLandingAug2021"
            title="FREE Coaching Session"
            :hideFormOnLoad="true"
            :preventHorizontal="true"
            ><video-embed
              :params="{ autoplay: 0 }"
              src="https://youtu.be/j6HPJzYk-cc"
            ></video-embed>
          </StartCoachingApplicationForm>
        </div>
      </div>
      <div class="row justify-content-center">
        <!-- <h1 class="uppercase text-center">The Dev Amplifier</h1>
        <h3 class="text-center">EVERY Developer Needs a Coach</h3> -->
        <div class="col mt-5">
          <h4 class="text-center">
            The Dev Amplifier is the <strong>step-by-step</strong> coaching
            program that drives developers to become more effective, while
            providing them with all the necessary tools and education to grow
            into the next level in a fraction of the time.
          </h4>
        </div>
      </div>
    </div>
    <div class="bg-orange-soft pb-5 mt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col col-sm-8 col-md-6 mt-5">
            <StartCoachingApplicationForm
              @submitted="startCoachingApplication"
              submitButtonLabel="Schedule 1st Session"
              source="CoachingLandingAug2021"
              :hideFormOnLoad="true"
              title="FREE Coaching Session"
              :buttonBlock="true"
              :preventHorizontal="true"
            >
              <div class="text-center">
                <h3 class="">It's only $83/month!</h3>
              </div>
            </StartCoachingApplicationForm>
          </div>
        </div>
      </div>
    </div>
    <TwelveDimensionsSection />
    <div class="bg-orange-soft pb-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col col-sm-8 col-md-6 mt-5">
            <StartCoachingApplicationForm
              @submitted="startCoachingApplication"
              submitButtonLabel="Schedule 1st Session"
              source="CoachingLandingAug2021"
              :hideFormOnLoad="true"
              title="FREE Coaching Session"
              :buttonBlock="true"
              :preventHorizontal="true"
            >
              <div class="text-center">
                <h3 class="">It's only $83/month!</h3>
              </div>
            </StartCoachingApplicationForm>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-primary-soft border pt-3 pb-5">
      <div class="container mt-5">
        <h3 class="text-center">Weekly Growth - Nights and Weekends</h3>
        <div class="row justify-content-center mt-5">
          <div
            class="col-4 col-md-3 text-center"
            v-for="f in features"
            :key="f.title"
          >
            <Icon :name="f.icon" :size="80" />
            <p class="mt-2">{{ f.title }}</p>
          </div>
        </div>
      </div>
    </div>
    <TestimonialsSection />

    <div class="bg-primary-soft border shadow pt-3 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 mt-5">
            <Unsplash
              imageId="FlPc9_VocJ4"
              align="left"
              description="Every software developer needs a coach."
              width="100%"
              imageClass="card-img-top"
              :thumbnail="false"
            />
          </div>
          <div class="col-12 col-md-6 mt-5">
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
                  will fill them (without coaching, that is).
                </li>
                <li class="mt-2">
                  Software developers can advance <strong>WAY</strong> faster
                  than they often do, but leave major efficiencies on the table.
                </li>

                <li class="mt-2">
                  <strong>EVERY</strong> software developer needs a coach!
                </li>
              </ul>
            </div>
          </div>
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
import TwelveDimensionsSection from "@/components/sections/TwelveDimensionsSection";
import QandASection from "@/components/sections/QandASection";
import PillarPrimary from "@/components/PillarPrimary";

export default {
  components: {
    Hero,
    Thanks,
    StartCoachingApplicationForm,
    TwelveDimensionsSection,
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
        icon: "meeting",
        title: "Weekly Coaching",
        description: "",
        galleryImageUrl: "",
      },
      {
        icon: "design",
        title: "Video Library",
        description: "",
        galleryImageUrl: "",
      },
      {
        icon: "running",
        title: "Weekly Quests",
        description: "",
        galleryImageUrl: "",
      },
      {
        icon: "test",
        title: "Gap Assessment",
        description: "",
        galleryImageUrl: "",
      },
      {
        icon: "mentorscreen",
        title: "Career Coaching",
        description: "",
        galleryImageUrl: "",
      },
      {
        icon: "chat",
        title: "Like-Minded Community",
        description: "",
        galleryImageUrl: "",
      },
      {
        icon: "class",
        title: "Enrichment Events",
        description: "",
        galleryImageUrl: "",
      },
      {
        icon: "huddle",
        title: "Invite-Only Fellowships",
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
