<template>
  <div class="text-center">
    <h3 class="mt-2"><Icon :name="icon" :size="50" /> {{ name }}</h3>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  props: {
    name: String,
    icon: String,
  },
  components: { Icon },
};
</script>

<style></style>
