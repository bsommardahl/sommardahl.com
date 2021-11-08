<template>
  <div role="button" @click="$bvModal.show(`modal-${name}`)">
    <Icon :name="icon" :size="80" />
    <p class="mt-2">{{ name }}</p>
    <b-modal
      size="xl"
      :id="`modal-${name}`"
      :title="`${name}`"
      content-class="shadow"
      ok-only
    >
      <div class="row">
        <div class="col col-sm-9 col-lg-8">
          <p>{{ description }}</p>
          <ul>
            <li v-for="b in bullets" :key="b">{{ b }}</li>
          </ul>
        </div>
        <div class="d-none d-sm-block d-lg-none col-sm-3 text-right">
          <Icon :name="icon" :size="100" />
        </div>
        <div class="d-none d-lg-block col-lg-4 text-right">
          <Icon :name="icon" :size="200" />
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  props: {
    name: String,
    icon: String,
    description: String,
    bullets: Array,
  },
  components: { Icon },
};
</script>

<style></style>
