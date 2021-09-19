<template>
  <div>
    <CoachingProgramCTAHero />

    <div class="container mt-5">
      <div class="row">
        <video-embed
          :params="{ autoplay: 0 }"
          src="https://youtu.be/az97HgkS-sk"
        ></video-embed>
      </div>
      <div class="text-center mt-5">
        <h1 class="text-uppercase">Find your drive</h1>
        <h4>at any commitment level</h4>
      </div>
      <div class="row mt-5 justify-content-center">
        <div class="col col-md-6 col-lg-4 mb-5">
          <PillarPrimary
            title="Podcast"
            subtitle="The Driven Developer"
            icon="podcast"
          >
            <div class="pillar-text">
              Weekly shows for your commute that keep you focused on the prize.
            </div>

            <div class="pillar-price"><h1 class="mt-3">FREE</h1></div>

            <div class="text-center mt-3">
              <a
                href="https://anchor.fm/sommardahl"
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
            subtitle="Dev Amplifier"
            icon="mentorscreen"
          >
            <StartCoachingApplicationForm
              @submitted="startCoachingApplication"
              submitButtonLabel="Start Growing"
              showFormButtonLabel="Request Coaching Session"
              source="CoachingLandingAug2021"
              title="Get a FREE Coaching Session"
              :hideFormOnLoad="true"
              :preventHorizontal="true"
            >
              <div class="pillar-text">
                Coaching and accountability program for those who are serious
                about amplifying their growth.
              </div>

              <div class="pillar-price">
                <h1 class="mt-3 mb-0">
                  <Money :amount="83" />
                </h1>
                <div>per month</div>
              </div>
            </StartCoachingApplicationForm>
            <div class="text-center mt-3">
              <!-- <a @click="goto('apply')" class="btn btn-lg btn-primary"
                  >Schedule 1st Session</a
                > -->
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
            subtitle="Sommardahl Fellowship"
            icon="hands"
          >
            <div class="pillar-text">
              Accellerated growth through mentorship and constant feedback.
            </div>

            <div class="pillar-price">
              <h2 class="text-uppercase mt-3">Let's Talk</h2>
            </div>

            <div class="text-center mt-3">
              <a
                @click="scheduleFellowshipCall()"
                class="btn btn-lg btn-primary"
                >Schedule a Call</a
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
import CoachingProgramCTAHero from "@/components/CoachingProgramCTAHero";
import Thanks from "@/views/landing/Thanks";
import StartCoachingApplicationForm from "@/views/landing/StartCoachingApplicationForm";
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
import Money from "@/components/Money";

export default {
  components: {
    Thanks,
    StartCoachingApplicationForm,
    CoachingProgramCTAHero,
    Icon,
    Logo,
    Thanks,
    Money,
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
    async startCoachingApplication(applicant) {
      this.hasApplied = true;
    },
    async scheduleFellowshipCall() {
      const applicant = this.getApplicant;
      let url = `https://calendly.com/sommardahl-academy/fellowship-intro`;
      if (applicant) {
        url += `?name=${encodeURI(applicant.first)}%20${encodeURI(
          applicant.last
        )}&email=${encodeURI(applicant.email)}`;
      }
      window.location = url;
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
