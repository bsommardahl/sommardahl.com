import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { startNewApplication } from "./backend";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

Vue.use(Vuex);

const RESET = "RESET";
const SET_APPLICANT = "SET_APPLICANT";
const SET_SOURCE = "SET_SOURCE";

async function startNewApplicationWithTracking(payload: any, isTest: Boolean) {
  try {
    return await startNewApplication(payload, isTest);
  } catch (error) {
    const v: any = Vue;
    v.rollbar.error(error);
    throw error;
  }
}

export default new Vuex.Store({
  state: {
    testMode: false,
    applicant: undefined,
    source: "organic",
  },
  mutations: {
    [RESET](state: any) {
      state.applicant = null;
    },
    [SET_APPLICANT](state: any, applicant) {
      state.applicant = applicant;
    },
    [SET_SOURCE](state: any, source) {
      state.source = source;
    },
  },
  actions: {
    reset({ commit }) {
      commit(RESET);
    },
    setSource(context: any, { source }: any) {
      context.commit(SET_SOURCE, source);
    },
    async startCoachingApplication(context: any, applicant: any) {
      await startNewApplicationWithTracking(applicant, context.testMode);
      context.commit(SET_APPLICANT, applicant);
    },
  },
  getters: {
    getSource: (state) => {
      return state.source;
    },
    getApplicant: (state) => {
      return state.applicant;
    },
  },
  modules: {},
  plugins: [vuexLocal.plugin],
});
