<template>
  <div>
    <ul>
      <li v-for="(branch, index) in branches" :key="index">
        <router-link :to="{ name: 'Commits', query: { branchName: branch }}">{{branch}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  data() {
    return {
      branches: []
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1/branches")
      .then(response => (this.branches = response.data.branches));
  }
});
</script>
