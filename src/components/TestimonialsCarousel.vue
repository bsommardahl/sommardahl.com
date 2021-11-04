<template>
  <div class="row">
    <div
      class="col col-12 col-md-4 mb-5"
      v-for="t in get3Testimonials"
      :key="t.name"
    >
      <video-embed
        :params="{ autoplay: 0 }"
        :src="`https://youtu.be/${t.videoId}`"
      ></video-embed>
    </div>
  </div>
</template>

<script>
import testimonial from "@/components/testimonial";

export default {
  data: () => ({
    testimonials: [
      {
        videoId: "uCHpowaqfBk",
        name: "Adam Chen",
      },
      {
        videoId: "86B8y9rPvDk",
        name: "Richard Siwady",
      },
      { videoId: "DOJ1RDYzG84", name: "Viktor Zavala" },
      { videoId: "6fEcAWUIaz4", name: "Yamil Gonzales" },
      { videoId: "lW6EtNj72EA", name: "Camilo Aguilar" },
      { videoId: "A9w9po-GG20", name: "Carlos Solorzano" },
      { videoId: "U2deZW6J7m4", name: "Rene Rosa" },
      { videoId: "x6ZNo-_bNX4", name: "Richard Deslonde" },
    ],
  }),
  components: {
    testimonial,
  },
  computed: {
    get3Testimonials() {
      const shuffled = _.shuffle(this.testimonials);
      return shuffled.slice(0, 3);
    },
  },
};
</script>
