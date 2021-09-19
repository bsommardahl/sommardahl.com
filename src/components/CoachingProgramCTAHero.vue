<template>
  <Hero
    class="level-up-landing-hero"
    :unsplashIds="['gTs2w7bu3Qo', '49UXHs41UPI', 'G1N9kDHqBrQ']"
    height="100vh"
    backgroundColor="rgba(25, 32, 71,0.7)"
  >
    <div class="container">
      <div class="row h-100">
        <div class="col my-auto big-message">
          <Logo color="white" :width="250" class="landing-logo mb-3" />
          <div class="mb-2">
            <h3 class="text-left action text-uppercase">
              Level-up your game
            </h3>
            <h1 class="text-left action text-uppercase">Find Your Drive</h1>
            <h3 class="text-left action text-uppercase">Gain Seniority</h3>
          </div>
          <StartCoachingApplicationForm
            submitButtonLabel="Schedule FREE Session"
            source="CoachingLandingAug2021"
            title="FREE Coaching Session"
            :hideFormOnLoad="true"
          >
            <div class="checklist">
              <div class="title">
                Join the coaching program that can make it happen!
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Weekly Coaching</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Stretch Assignments</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Growth Assessments</span>
              </div>
              <div class="item">
                <Icon name="checkbox" />
                <span>Like-Minded Community</span>
              </div>
            </div>
          </StartCoachingApplicationForm>
        </div>
      </div>
    </div>
  </Hero>
</template>

<script>
import Hero from "@/components/Hero";
import Icon from "@/components/Icon";
import Logo from "@/components/Icon";
import StartCoachingApplicationForm from "@/views/landing/StartCoachingApplicationForm";

export default {
  components: {
    Hero,
    Icon,
    Logo,
    StartCoachingApplicationForm,
  },
};
</script>

<style></style>
