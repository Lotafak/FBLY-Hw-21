<template>
  <div class="container">
    <h2>{{ title }}</h2>
    <slot>No data yet</slot>
    <FetchDataButton
      @data="displayData"
      buttonText="Get emoticon average"
      :type="type"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FetchDataButton from "@/components/FetchDataButton.vue";

export default defineComponent({
  name: "EmoticonAverage",
  components: {
    FetchDataButton,
  },
  data() {
    return {
      average: 0,
      loading: false,
    };
  },
  props: {
    displayData: { type: Function },
    title: String,
    type: String,
  },
});
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
}

button {
  margin-top: auto;
}
</style>
