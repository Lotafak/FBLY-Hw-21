<template>
  <StatsContainer
    :displayData="getData"
    title="Emoticon average"
    type="emoticon"
  >
    <h2 v-if="data">{{ data }}</h2>
    <span v-if="!data">No data yet</span>
  </StatsContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StatsContainer from "@/components/StatsContainer.vue";
import { EmoticonAverageType } from "@/api";

function getData(this: any, data: EmoticonAverageType) {
  if (data) {
    this.data = Math.round(data.average * 100) / 100;
  }
}

export default defineComponent({
  name: "EmoticonAverage",
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
