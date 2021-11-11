<template>
  <div class="logo">
    <inline-svg
      id="byron-icon"
      :src="src"
      :width="calcWidth"
      :height="calcHeight"
      :fill="true"
    ></inline-svg>
    <div class="logo-title" v-if="!hideText">Dev Amplifier</div>
  </div>
</template>

<script>
import InlineSvg from "vue-inline-svg";

export default {
  components: { InlineSvg },
  props: {
    width: Number,
    height: Number,
    orientation: String,
    hideText: Boolean,
  },
  computed: {
    calcHeight() {
      if (!this.height) return this.width;
      return this.height;
    },
    calcWidth() {
      if (!this.width) return this.height;
      return this.width;
    },
    src() {
      // if (this.hideText) {
      const svg = require(`./svg/logo/byron-icon.svg`);
      return svg;
      // }
      // if (this.orientation === "vertical")
      //   return "img/logo/logo_black_vertical.png";
      // return "./svgea/logo/Byron-Sommardahl-Logo-BLK.svg";
    },
  },
};
</script>

<style lang="scss" scoped>
div.logo {
  position: relative;

  a:hover {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
  .logo-title {
    display: inline-block;
    font-size: 1.8rem;
    padding-left: 10px;
    color: black;
    padding-left: 10px;
    // margin-top: 5px;
  }
  .white {
    filter: brightness(0) invert(1);
    //invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%)
    //contrast(103%);
  }
}
</style>
