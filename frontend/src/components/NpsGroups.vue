<template>
  <StatsContainer :displayData="getData" title="NPS Groups" type="groups">
    <div v-if="data" class="nps-groups-container">
      <span
        >Promoters: <span class="promoters">{{ data.promoters }}</span></span
      >
      <span
        >Passives: <span class="passives">{{ data.passives }}</span></span
      >
      <span
        >Detractors: <span class="detractors">{{ data.detractors }}</span></span
      >
    </div>
    <span v-if="!data">No data yet</span>
  </StatsContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StatsContainer from "@/components/StatsContainer.vue";
import { NpsGroupsType } from "@/api";

function getData(this: any, data?: NpsGroupsType) {
  if (data) {
    this.data = data;
  }
}

export default defineComponent({
  name: "NpsGroups",
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

<style>
.nps-groups-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.promoters {
  color: green;
}

.passives {
  color: darkgoldenrod;
}

.detractors {
  color: red;
}
</style>
