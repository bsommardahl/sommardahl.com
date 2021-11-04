<template>
  <div class="container">
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
            <a @click="scheduleFellowshipCall()" class="btn btn-lg btn-primary"
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
</template>

<script>
import PillarPrimary from "@/components/PillarPrimary";
import StartCoachingApplicationForm from "@/views/landing/StartCoachingApplicationForm";
import Money from "@/components/Money";

export default {
  components: {
    PillarPrimary,
    Money,
    StartCoachingApplicationForm,
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
  },
};
</script>

<style></style>
