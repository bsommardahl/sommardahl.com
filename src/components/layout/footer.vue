<template>
  <!-- Footer -->
  <footer class="py-5 bg-dark text-white">
    <div class="text-center mb-5">
      <Logo :width="80" :hideText="true" />
    </div>
    <div class="container">
      <div class="row justify-content-md-center text-center">
        <div class="col-12 col-md-2 mb-5">
          <h4>Dev Amplifier</h4>
          <p>
            <a href="#" @click.prevent="goHome">Home</a>
          </p>

          <!-- <p>
            <router-link to="/faqs">FAQs</router-link>
          </p> -->
          <p>
            <router-link to="/contact">Contact Us</router-link>
          </p>
        </div>

        <div class="col-12 col-md-2 mb-5">
          <h4>Programs</h4>
          <!-- <p>
            <router-link to="/programs">Overview</router-link>
          </p> -->
          <p>
            <router-link to="/programs/podcast" disabled>Podcast</router-link>
          </p>
          <p>
            <router-link to="/programs/coaching" disabled
              >Coaching Program</router-link
            >
          </p>
          <p>
            <router-link to="/programs/fellowship" disabled
              >Fellowship</router-link
            >
          </p>
        </div>

        <!-- <div class="col-12 col-md-2 mb-5">
          <h4>Financial Aid</h4>
          <p>
            <router-link to="/financing/sommardahl" class="nav-link"
              >Student Loans</router-link
            >
          </p>
          <p>
            <router-link to="/financial-aid">Deferred Payment</router-link>
          </p>
          <p>
            <router-link to="/isa">Income Sharing</router-link>
          </p>
        </div> -->
        <div class="col-12 col-md-2 mb-5">
          <h4>About Us</h4>
          <p>
            <router-link to="/byron">Byron's Story</router-link>
          </p>

          <!-- <p>
            <router-link to="/process">Process</router-link>
          </p>
          -->
          <p>
            <!-- <router-link to="/events" disabled>Events</router-link> --><a
              href="https://www.meetup.com/sommardahl-academy/events"
              target="_blank"
              >Events</a
            >
          </p>
          <!-- <p>
            <router-link to="/howitworks#timeline">Timeline</router-link>
          </p>
          <p>
            <router-link to="/howitworks#tech">Our Technologies</router-link>
          </p> -->
        </div>

        <div class="col col-md-2 mb-5">
          <h4>Legal</h4>
          <p>
            <router-link to="/policy/privacy">Privacy</router-link>
          </p>
          <!-- <p>
            <router-link to="/terms-of-use">Terms of Use</router-link>
          </p>-->
        </div>
      </div>
    </div>
    <hr />

    <div class="container">
      <div class="row justify-content-center text-center mt-5 mb-4">
        <div class="col-1">
          <a href="https://facebook.com/sommardahlacademy" target="_blank">
            <font-awesome-icon :icon="faFacebookSquare" class="fa-2x" />
          </a>
        </div>
        <div class="col-1">
          <a href="https://twitter.com/sommardahl" target="_blank">
            <font-awesome-icon :icon="faTwitterSquare" class="fa-2x" />
          </a>
        </div>
        <div class="col-1">
          <a
            href="https://www.instagram.com/sommardahlacademy/"
            target="_blank"
          >
            <font-awesome-icon :icon="faInstagram" class="fa-2x" />
          </a>
        </div>
        <div class="col-1">
          <a
            href="https://www.youtube.com/channel/UCUKP1GrIaI-dcuV1IlK7x8Q"
            target="_blank"
          >
            <font-awesome-icon :icon="faYoutubeSquare" class="fa-2x" />
          </a>
        </div>
      </div>
      <div class="text-center">
        <p>Dev Amplifier is Copyright &copy; Sommardahl Ventures LLC 2021</p>
      </div>
    </div>
    <!-- /.container -->
  </footer>
</template>

<script>
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/fontawesome-free-brands";
import { mapGetters } from "vuex";
import Logo from "@/components/Logo.vue";

export default {
  components: { Logo },
  data: () => ({
    faFacebookSquare,
    faInstagram,
    faTwitterSquare,
    faYoutubeSquare,
  }),
  computed: {
    ...mapGetters([""]),
  },
  methods: {
    goHome() {
      var home = "/";
      if (this.$router.currentRoute.fullPath === home) return;
      this.$router.push(home);
    },
  },
};
</script>
<style lang="scss" scoped>
.text-white {
  h4 {
    color: white;
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: bolder;
  }
  a {
    color: white;
  }
  a:hover {
    text-decoration: none;
    font-weight: bolder;
  }
  hr {
    border: 1px solid white;
  }
}
</style>
