<template>
  <div>
    <div class="">
      <div class="container">
        <h1 class="mt-5 text-center">The Driven Developer</h1>
        <h3 class="text-center">Byron Sommardahl</h3>

        <video-embed
          :params="{ autoplay: 0 }"
          src="https://youtu.be/az97HgkS-sk"
        ></video-embed>
      </div>
    </div>
    <div class="mt-5">
      <div class="container">
        <StartCoachingApplicationForm
          submitButtonLabel="Schedule FREE Session"
          source="ByronStoryAug2021"
          title="FREE Coaching Session"
          :hideFormOnLoad="false"
        >
        </StartCoachingApplicationForm>
      </div>
    </div>
  </div>
</template>

<script>
import Unsplash from "@/components/Unsplash";
import Hero from "@/components/Hero";
import { mapGetters } from "vuex";
import Icon from "@/components/Icon";
import Money from "@/components/Money";
import Logo from "@/components/Logo";
import StartCoachingApplicationForm from "@/views/landing/StartCoachingApplicationForm.vue";
import BaaSInterestForm from "@/components/sections/baas/BaaSInterestForm";
import QandASection from "@/components/sections/baas/BasS-qanda";
import BootcampFeatures from "@/components/sections/baas/BootcampFeatures";
import BaaSCalculator from "@/components/sections/baas/BaaSCalculator";
import AdditionalBootcampServices from "@/components/sections/baas/AdditionalBootcampFeatures";

export default {
  components: {
    Unsplash,
    Hero,
    Logo,
    AdditionalBootcampServices,
    StartCoachingApplicationForm,
    Icon,
    Money,
    BaaSInterestForm,
    BootcampFeatures,
    BaaSCalculator,
    QandASection,
  },
  computed: {
    ...mapGetters([]),
  },
  data: () => ({
    services: [
      {
        name: "1-on-1 Mentoring Sessions",
        icon: "mentorscreen",
        price: 20,
        maxAttendees: 1,
        defaultQuantity: 2,
      },
      {
        name: "Evaluations/Skills Assessments",
        icon: "test",
        price: 25,
        maxAttendees: 1,
        defaultQuantity: 2,
      },
      {
        name: "Daily Status Meetings",
        icon: "meeting",
        price: 20,
        maxAttendees: 10,
        defaultQuantity: 5,
      },
      {
        name: "Group Q&A Sessions",
        icon: "hands",
        price: 35,
        maxAttendees: 10,
        defaultQuantity: 3,
      },
      {
        name: "Live Online Classes",
        icon: "class",
        price: 35,
        maxAttendees: 20,
        defaultQuantity: 1,
      },
      {
        name: "Custom Curriculum Support",
        icon: "blueprints",
      },
    ],
  }),
  methods: {
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
  mounted() {},
};
</script>
