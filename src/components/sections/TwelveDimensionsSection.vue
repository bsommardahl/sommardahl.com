<template>
  <div class>
    <div class="container">
      <div class="pt-5 text-center">
        <h1>Each Month a New Dimension</h1>
        <h5>Hard Skills, Soft Skills and Mindset</h5>
        <div class="mt-5 row" v-for="a in wholePerson" :key="a.name">
          <div class="col col-md-3">
            <WholePersonArea :name="a.name" :icon="a.icon" />
          </div>
          <div class="col col-md-3" v-for="d in a.dimensions" :key="d.name">
            <Dimension
              :name="d.name"
              :icon="d.icon"
              :bullets="d.bullets"
              :description="d.description"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WholePersonArea from "@/components/WholePersonArea";
import Dimension from "@/components/Dimension";

export default {
  components: {
    Dimension,
    WholePersonArea,
  },
  data: () => ({
    wholePerson: [
      {
        name: "Mind",
        icon: "brain",
        dimensions: [
          {
            name: "Discipline",
            icon: "workout",
            description:
              "While unpacking this dimension, we will likely touch on the following:", // videoUrl: "",
            bullets: [
              "Technical, professional and life discipline, seek balance",
              "Practice intentionally - Kata",
              "Routine/Regiment - Time Management",
              "Clear direction - goals, big picture",
              "Slow Down - Okay to Pause and Survey",
              "Aware of and documenting technical debt",
              "Speed is not a virtue",
              "An ounce of prevention worth a pound of cure",
              "Willing to remove unhealthy/unproductive stuff ",
            ],
          },
          {
            name: "Mastery",
            icon: "karate",
            description:
              "While unpacking this dimension, we will likely touch on the following:", // videoUrl: "",
            bullets: [
              "See Mastery as “true north”, not a destination",
              "Shu Ha Ri",
              "Seeks real mastery, not happy with shallow awareness",
              "Go deep in your domain",
              "Beyond Default - Know your tools",
              "Aware of what’s coming",
              "Knows what’s available to leverage",
            ],
          },
          {
            name: "Growth",
            icon: "growth",
            description:
              "While unpacking this dimension, we will likely touch on the following:", // videoUrl: "",
            bullets: [
              "Intentional Growth",
              "Mentors need mentors",
              "Books!!",
              "Methods for Growth",
              "Tracking Growth",
              "Problems are opportunities",
              "Learn how to learn",
            ],
          },
        ],
      },
      {
        name: "Body",
        icon: "standing",
        dimensions: [
          {
            name: "Capability",
            icon: "blueprints",
            description:
              "While unpacking this dimension, we will likely touch on the following:", // videoUrl: "",
            bullets: [
              "Know your stuff",
              "Shape (t-shaped)",
              "Close to the Metal - Beyond boilerplate tools",
              "Efficient Ramp Up",
              "Estimates",
            ],
          },
          {
            name: "Experience",
            icon: "experience",
            description:
              "While unpacking this dimension, we will likely touch on the following:", // videoUrl: "",
            bullets: [
              "Troubleshooting",
              "Exceptions",
              "Open source work",
              "Side Projects",
              "Make the most of all experience",
            ],
          },
          {
            name: "Maturity",
            icon: "handshake",
            description:
              "While unpacking this dimension, we will likely touch on the following:", // videoUrl: "",
            bullets: [
              "Humility comes with Maturity",
              "Expecting The big picture",
              "Active Listening",
              "Emotional intelligence",
              "Adapt and be Compatible with Surroundings",
              "Own Success and Failure",
              "Keep Pride in Check",
            ],
          },
        ],
      },
      {
        name: "Heart",
        icon: "heart",
        dimensions: [
          {
            name: "Passion",
            icon: "driven",
            description:
              "While unpacking this dimension, we will likely touch on the following:", // videoUrl: "",
            bullets: [
              "Passion is our fuel",
              "Love solving problems",
              "Persistent, fight to the end",
              "Passion makes jobs (boring things) a joy ",
              "Well-Placed Urgency",
              "Fighting burn-out and complacency",
              "Pride in what we build",
            ],
          },
          {
            name: "Grit",
            icon: "recover",
            description:
              "While unpacking this dimension, we will likely touch on the following:", // videoUrl: "",
            bullets: [
              "Defend team and technical decisions",
              "Imposter Syndrome",
              "Calm, Cool and Collected",
              "Assertions (human) - Waiting for the right moment, Asserting yourself with authority",
              "Being Wrong with Grace",
              "Fail Fast, Fail Well, Learn, Keep Moving",
              "Change/Risk Management",
              "Embrace Process - processes CAN enhance our work",
            ],
          },
          {
            name: "Communication",
            icon: "mentor",
            description:
              "While unpacking this dimension, we will likely touch on the following:", // videoUrl: "",
            bullets: [
              "Kicking Shyness",
              "Understanding the Black box",
              "Expectation Management",
              "Tech communication vs business",
              "Active Listening",
              "Audience Empathy",
              "Generating Buy-in Through Business Value",
            ],
          },
        ],
      },
      {
        name: "Spirit",
        icon: "fire",
        dimensions: [
          {
            area: "Spirit",
            name: "Purpose",
            icon: "purpose",
            description:
              "While unpacking this dimension, we will likely touch on the following:", // videoUrl: "",
            bullets: [
              "Purpose-Driven",
              "Finding Purpose - Purpose can be found in company, team, product, or even code",
              "Craftsmanship",
              "Purpose in Team",
            ],
          },
          {
            area: "Spirit",
            name: "Service",
            icon: "serve",
            description:
              "While unpacking this dimension, we will likely touch on the following:", // videoUrl: "",
            bullets: [
              "Servant Leadership",
              "Responsibility/Ownership",
              "We are Elevators - Seniors elevate others (rising tide raises all boats)",
              "Not about me - We’re here to serve, Others first",
              "The Needs of the Company - Team and code adapt to what the company needs",
              "Community Minded",
            ],
          },
          {
            area: "Spirit",
            name: "Multiplier",
            icon: "orgtree",
            description:
              "While unpacking this dimension, we will likely touch on the following:", // videoUrl: "",
            bullets: [
              "Seek opportunities to mentor others",
              "Multiplier Code - Making it easier for everyone else to be  successful",
              "Code Reviews are a chance to help others grow",
              "Amplify the Smarts of others - Defend against diminishers",
              "Inspire others - Inspire Light Bulb Moments",
            ],
          },
        ],
      },
    ],
  }),
};
</script>

<style></style>
