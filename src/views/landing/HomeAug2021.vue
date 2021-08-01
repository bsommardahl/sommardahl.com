<template>
  <div>
    <Hero
      class="level-up-landing-hero"
      :unsplashIds="['gTs2w7bu3Qo', '49UXHs41UPI', 'G1N9kDHqBrQ']"
      height="100vh"
      backgroundColor="rgba(25, 32, 71,0.7)"
    >
      <div class="container">
        <div class="row h-100">
          <div class="col my-auto big-message">
            <Logo color="white" :width="150" class="landing-logo mb-3" />
            <div class>
              <h3 class="text-left action">Level-up your game</h3>
              <h1 class="text-left action">Find your Drive</h1>
              <h3 class="text-left action">Earn Seniority</h3>
            </div>
            <div class="checklist">
              <div class="title">
                Join the coaching program and make it happen!
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Weekly Sessions</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Goals and Assessments</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Like-Minded Community</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Any Skill Level</span>
              </div>
            </div>
          </div>

          <div class="col-5 d-none d-lg-block my-auto apply">
            <div class="start-application-form" v-if="!hasApplied">
              <h5 class="card-title text-center">Developer Coaching Program</h5>
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
    </Hero>

    <div class="container d-block d-lg-none mt-5">
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
      <div class="text-center">
        <h1>Find your drive</h1>
        <h4>at any commitment level</h4>
      </div>
      <div class="row mt-5 justify-content-center">
        <div class="col col-md-6 col-lg-4 mb-5">
          <PillarPrimary
            title="Podcast"
            subtitle="The Driven Developer"
            icon="podcast"
          >
            <p class="pillar-text">
              Weekly shows for your commute that keep you focused on the prize.
            </p>
            <div class="text-center mt-5">
              <a
                href="https://anchor.fm/byron-sommardahl"
                target="_blank"
                class="btn btn-lg btn-primary"
                >Start Listening</a
              >
              <p class="mt-3">
                <router-link to="programs/podcast" class=""
                  >Learn More</router-link
                >
              </p>
            </div>
          </PillarPrimary>
        </div>
        <div class="col col-md-6 col-lg-4 mb-5">
          <PillarPrimary
            title="Coaching"
            subtitle="Coaching Program"
            icon="mentorscreen"
          >
            <p class="pillar-text">
              Coaching and accountability program for those who are serious
              about leveling up.
            </p>
            <div class="text-center mt-5">
              <a @click="goto('apply')" class="btn btn-lg btn-primary"
                >Start Membership</a
              >
              <p class="mt-3">
                <router-link to="programs/coaching" class=""
                  >Learn More</router-link
                >
              </p>
            </div>
          </PillarPrimary>
        </div>
        <div class="col col-md-6 col-lg-4 mb-5">
          <PillarPrimary
            title="Fellowship"
            subtitle="Mentorship Program"
            icon="hands"
          >
            <p class="pillar-text">
              Accellerated growth through mentorship and constant feedback.
            </p>
            <div class="text-center mt-5">
              <a @click="startAssessment()" class="btn btn-lg btn-primary"
                >Start Assessment</a
              >
              <p class="mt-3">
                <router-link to="programs/fellowship" class=""
                  >Learn More</router-link
                >
              </p>
            </div>
          </PillarPrimary>
        </div>
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

.pillar-text {
  min-height: 100px;
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

  .start-application-form {
    padding: 1em;
    background-color: rgba(255, 255, 255, 0.4);

    form {
      padding: 0px 1vw;
    }
    .btn-cta {
      background-color: rgb(255, 82, 28);
      color: white;
      font-weight: 900;
    }

    .form-label-group {
      margin-bottom: 10px;

      label {
        //font-size: 0.5em;
        //text-transform: capitalize;
        margin-bottom: 0px;
      }
    }
    .cta {
      margin-top: 20px;
    }
    .privacy {
      font-size: 0.8em;
      text-shadow: none;
      a {
        color: #eee;
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
