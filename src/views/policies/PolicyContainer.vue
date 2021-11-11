<template>
  <div>
    <Hero unsplashId="bAQH53VquTc" height="30vh">
      <h3>Dev Amplifier Policies</h3>
    </Hero>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
export default {
  components: { Hero },
};
</script>

<style></style>
