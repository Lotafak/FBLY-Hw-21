<template>
  <button @click="fetchData" :disabled="loading || dataLoaded">
    {{ loading ? "Loading..." : dataLoaded ? "Data loaded!" : buttonText }}
  </button>
</template>

<script lang="ts">
import { ComponentOptions, defineComponent, PropType } from "vue";
import { getEmoticonAverage, getNpsGroups, getNpsScore } from "@/api";

async function returnData<T>(this: any, fn: () => Promise<T | null>) {
  const data = await fn();
  if (data) {
    this.dataLoaded = true;
  }
  this.$emit("data", data);
}

async function fetchData(this: ComponentOptions): Promise<void> {
  this.loading = true;
  switch (this.type) {
    case "emoticon":
      await returnData.bind(this)(getEmoticonAverage);
      break;
    case "groups":
      await returnData.bind(this)(getNpsGroups);
      break;
    case "score":
      await returnData.bind(this)(getNpsScore);
      break;
    default:
  }
  this.loading = false;
}

type DataType = "emoticon" | "groups" | "score";
export default defineComponent({
  name: "FetchDataButton",
  props: {
    type: String as PropType<DataType>,
    buttonText: String,
  },
  methods: {
    fetchData,
  },
  data() {
    return {
      loading: false,
      dataLoaded: false,
    };
  },
});
</script>

<style>
button {
  width: min-content;
  white-space: nowrap;
  padding: 10px;
  align-self: center;
  border: none;
  background-color: darkslateblue;
  color: white;
  border-radius: 6px;
}

button:disabled {
  background-color: grey;
}
</style>
