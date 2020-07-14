<template>
  <div>
    <h1>Commits from branch {{ branchName}}</h1>
    <div class="col-md-12">
      <div class="row" v-for="commit in commits" :key="commit.hash">
        <div class="col-md-6">
          <router-link
            :to="{ name: 'CommitDetail', query: { branchName, id: commit.hash } }"
          >{{ commit.hash }}</router-link>
        </div>
        <div class="col-md-6">
          {{ commit.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "Home" as string,
  data() {
    return {
      branchName: this.$route.query.branchName,
      commits: []
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1/branch-detail", {
        params: { name: this.$route.query.branchName }
      })
      .then(response => (this.commits = response.data.commits));
  }
});
</script>
