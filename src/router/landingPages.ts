import LandingContainer from "../views/landing/LandingContainer.vue";
import CoachingLandingAug2021 from "../views/landing/CoachingLandingAug2021.vue";
import PodcastLandingAug2021 from "../views/landing/PodcastLandingAug2021.vue";
import FellowshipLandingAug2021 from "../views/landing/FellowshipLandingAug2021.vue";
import EventsAug2021 from "../views/landing/EventsAug2021.vue";
import URL_Builder from "../views/url-builder.vue";
import Home from "../views/Home.vue";
import Loading from "../views/landing/Loading.vue";

const routes: Array<any> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/programs/coaching",
    name: "Coaching Program",
    component: CoachingLandingAug2021,
    // meta: {
    //   layout: "no-nav",
    // },
  },
  {
    path: "/programs/podcast",
    name: "Podcast",
    component: PodcastLandingAug2021,
    // meta: {
    //   layout: "no-nav",
    // },
  },
  {
    path: "/programs/fellowship",
    name: "Fellowship",
    component: FellowshipLandingAug2021,
    // meta: {
    //   layout: "no-nav",
    // },
  },
  {
    path: "/events",
    name: "Events",
    component: EventsAug2021,
    // meta: {
    //   layout: "no-nav",
    // },
  },
  {
    path: "/url",
    name: "url-builder",
    component: URL_Builder,
  },

  {
    path: "/nn",
    name: "No Navigation",
    component: Home,
    meta: {
      layout: "no-nav",
    },
  },
];
export default routes;
