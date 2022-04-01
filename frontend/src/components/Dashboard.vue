<template>
  <h1>Analytics dashboard</h1>
  <div class="stats-container">
    <NpsGroups />
    <NpsScore />
    <EmoticonAverage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EmoticonAverage from "@/components/EmoticonAvarage.vue";
import NpsGroups from "@/components/NpsGroups.vue";
import NpsScore from "@/components/NpsScore.vue";

export default defineComponent({
  name: "Dashboard",
  components: {
    NpsScore,
    EmoticonAverage,
    NpsGroups,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.stats-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
