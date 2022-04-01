<template>
  <StatsContainer :displayData="getData" title="NPS Score" type="score">
    <h2 v-if="data">{{ data }}</h2>
    <span v-if="!data">No data yet</span>
  </StatsContainer>
</template>

<script lang="ts">
import { ComponentOptions, defineComponent } from "vue";
import StatsContainer from "@/components/StatsContainer.vue";
import { NpsScoreType } from "@/api";

function getData(this: any, data?: NpsScoreType) {
  if (data) {
    this.data = data.score;
  }
}

export default defineComponent({
  name: "NpsScore",
  components: {
    StatsContainer,
  },
  methods: {
    getData,
  },
  data() {
    return { data: null };
  },
});
</script>
