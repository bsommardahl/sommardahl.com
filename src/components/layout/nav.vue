<template>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- <div class="container"> -->
    <a href="#" class="navbar-brand" @click.prevent="goHome">
      <img
        class="logo"
        src="img/logo/horizontal_logo.png"
        alt="Sommardahl Academy Logo"
      />
    </a>
    <button
      class="navbar-toggler navbar-toggler-right"
      type="button"
      @click="toggleMenu"
      data-toggle="collapse"
      data-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      :class="!isOpen ? 'navbar-closed' : ''"
      class="collapse navbar-collapse"
      id="navbarResponsive"
    >
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a href="#" @click.prevent="goHome" class="nav-link">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a
            href="#"
            class="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >Programs</a
          >
          <div class="dropdown-menu">
            <div class="nav-item">
              <router-link to="/programs/podcast" class="nav-link"
                >Podcast</router-link
              >
            </div>
            <div class="dropdown-divider"></div>
            <div class="nav-item">
              <router-link to="/programs/coaching" class="nav-link"
                >Coaching Program</router-link
              >
            </div>
            <div class="dropdown-divider"></div>
            <div class="nav-item">
              <router-link to="/programs/fellowship" class="nav-link"
                >Fellowship</router-link
              >
            </div>
          </div>
        </li>

        <li class="nav-item">
          <router-link to="/events" class="nav-link">Events</router-link>
        </li>

        <li class="nav-item dropdown">
          <a
            href="#"
            class="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >About</a
          >
          <div class="dropdown-menu">
            <div class="nav-item">
              <router-link :to="{ path: '/byron' }" class="nav-link"
                >Byron's Story</router-link
              >
            </div>
            <div class="dropdown-divider"></div>
            <div class="nav-item">
              <router-link :to="{ path: '/process' }" class="nav-link"
                >Process</router-link
              >
            </div>
            <!-- <div class="dropdown-divider"></div>
            <div class="nav-item">
              <router-link :to="{ path: '/contact' }" class="nav-link"
                >Contact</router-link
              >
            </div> -->
          </div>
        </li>

        <!-- <li class="nav-item">
          <SelectPlanButton
            text="Join Now"
            buttonClass="btn btn-primary btn-block nav-link"
          />
        </li> -->
      </ul>
    </div>
    <!-- </div> -->
  </nav>
</template>

<script>
import separator from "@/components/layout/separator";
import SelectPlanButton from "@/components/SelectPlanButton";
import { mapGetters } from "vuex";

export default {
  name: "NavBar",
  data: () => ({
    isOpen: false,
  }),
  computed: {
    ...mapGetters([]),
  },
  components: { SelectPlanButton, separator },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    goHome() {
      var home = "/";
      if (this.$router.currentRoute.fullPath === home) return;
      this.$router.push(home);
    },
  },
  watch: {
    $route() {
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/variables";

#nav {
  z-index: 200000;
  padding: 30px;

  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.navbar {
  height: 4.5rem;
}
.navbar img.logo {
  height: 3.1rem;
}

.navbar-nav {
  background-color: $lightGray;
}

@media (max-width: 991.98px) {
  .nav-link,
  .dropdown-toggle {
    font-weight: bold !important;
    margin-bottom: 5px !important;
    text-align: center !important;
  }

  .navbar-closed {
    display: none;
  }
}
</style>
