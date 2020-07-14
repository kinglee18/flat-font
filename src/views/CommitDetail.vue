<template>
  <div>
    <h1>Commit detail</h1>
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-6">Hash</div>
        <div class="col-md-6">{{data.hash}}</div>
      </div>
      <div class="row">
        <div class="col-md-6">Author</div>
        <div class="col-md-6">{{data.author}}</div>
      </div>
      <div class="row">
        <div class="col-md-6">Date</div>
        <div class="col-md-6">{{data.date}}</div>
      </div>
      <div class="row">
        <div class="col-md-6">Files changed</div>
        <div class="col-md-6">{{data.number_of_files}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  data() {
    return {
      data: {}
    };
  },
  mounted() {
    const params = this.$route.query;
    axios
      .get("http://127.0.0.1/commit-detail", {
        params: { "branch-name": params.branchName, "commit-hash": params.id }
      })
      .then(response => (this.data = response.data.commits));
  }
});
</script>
