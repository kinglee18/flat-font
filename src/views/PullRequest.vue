<template>
  <div>
    <router-link to="/create-pull-request">Create pr</router-link>
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-6">Title</div>
        <div class="col-md-6">Status</div>
      </div>
      <div class="row" v-for="request in requests" :key="request.id">
        <div class="col-md-6">
          <router-link
            :to="{ name: 'PullRequestDetail', query: { id: request.id }}"
          >{{ request.title }}</router-link>
        </div>
        <div class="col-md-6">{{ request.status }}</div>
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
      requests: []
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1/pull-request-list")
      .then(response => (this.requests = response.data));
  }
});
</script>
