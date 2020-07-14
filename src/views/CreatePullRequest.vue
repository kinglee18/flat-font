<template>
  <div>
    <form>
      <select v-model="form.base">
        <option :value="null" disabled>Base branch</option>
        <option v-for="branch in branches" :key="branch" v-bind:value="branch">{{branch}}</option>
      </select>
      =>
      <select v-model="form.compare">
        <option :value="null" disabled>Compare branch</option>
        <option v-for="branch in branches" :key="branch" v-bind:value="branch">{{ branch}}</option>
      </select>

      <input type="text" placeholder="Title" v-model="form.title" />
      <input type="text" placeholder="Description" v-model="form.description" />
      <button type="button" @click="save">Save</button>
      <button type="button" @click="merge">Merge</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  data() {
    return {
      form: {
        base: null,
        compare: null,
        title: null,
        author: null,
        description: null
      },
      branches: []
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1/branches")
      .then(response => (this.branches = response.data.branches));
  },
  methods: {
    validateForm() {
      if (!this.form["title"] || !this.form["description"]) {
        return false;
      }
      if (this.form["base"] === this.form["compare"]) return false;
      return true;
    },
    save() {
      if (this.validateForm()) {
        axios
          .post("http://127.0.0.1/pull-request-list/", this.form)
          .then(response => {
            alert("pull request has been created");
            this.$router.push({ path: "pull-request" });
          });
      } else {
        alert(
          "Please complete the form, and make sure the branches are different"
        );
      }
    },
    merge() {
      if (this.validateForm()) {
        axios
          .post("http://127.0.0.1/pull-request/merge", this.form)
          .then(response => {
            alert("Successful merge ");
            this.$router.push({ path: "pull-request" });
          })
          .catch(err => alert(err.response.data.error));
      } else {
        alert(
          "Please complete the form, and make sure the branches are different"
        );
      }
    }
  }
});
</script>
