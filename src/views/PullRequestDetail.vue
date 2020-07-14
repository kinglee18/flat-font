<template>
  <div>
    <h1>Pull request details</h1>
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-6">Base branch:</div>
        <div class="col-md-6">{{ pullRequest.base }}</div>
      </div>
      <div class="row">
        <div class="col-md-6">Compare branch:</div>
        <div class="col-md-6">{{ pullRequest.compare }}</div>
      </div>
      <div class="row">
        <div class="col-md-6">Title:</div>
        <div class="col-md-6">{{ pullRequest.title }}</div>
      </div>
      <div class="row">
        <div class="col-md-6">Description:</div>
        <div class="col-md-6">{{ pullRequest.description }}</div>
      </div>
      <div class="row">
        <div class="col-md-6">Status:</div>
        <div class="col-md-6">{{ pullRequest.status }}</div>
      </div>
    </div>
    <div v-if="pullRequest.status == 'Open'">
      <button @click="merge">Merge</button>
      <button @click="close">Close</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  data() {
    return {
      pullRequest: {}
    };
  },
  mounted() {
    const status = {
      M: "Merged",
      O: "Open",
      C: "Closed"
    };
    axios
      .get(`http://127.0.0.1/pull-request/${this.$route.query.id}`)
      .then(response => {
        this.pullRequest = response.data;
        this.pullRequest["status"] = status[this.pullRequest.status];
      });
  },
  methods: {
    merge() {
      this.pullRequest["status"] = "M";
      axios
        .put(
          `http://127.0.0.1/pull-request/update/${this.$route.query.id}`,
          this.pullRequest
        )
        .then(response => {
          alert("Successful merge ");
          this.$router.push({ path: "pull-request" });
        })
        .catch(err => alert(err.response.data.error));
    },
    close() {
      this.pullRequest["status"] = "C";

      axios
        .put(
          `http://127.0.0.1/pull-request/update/${this.$route.query.id}`,
          this.pullRequest
        )
        .then(response => {
          alert("Merge closed");
          this.$router.push({ path: "pull-request" });
        })
        .catch(err => alert(err.response.data.error));
    }
  }
});
</script>
