import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Branches from "../views/Branches.vue";
import Commits from "../views/Commits.vue";
import CommitDetail from "../views/CommitDetail.vue";
import CreatePullRequest from "../views/CreatePullRequest.vue";
import PullRequest from "../views/PullRequest.vue";
import PullRequestDetail from "../views/PullRequestDetail.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Branches",
    component: Branches
  },
  {
    path: "/commits",
    name: "Commits",
    component: Commits
  },
  {
    path: "/commit",
    name: "CommitDetail",
    component: CommitDetail
  },
  {
    path: "/create-pull-request",
    name: "CreatePullRequest",
    component: CreatePullRequest
  },
  {
    path: "/pull-request",
    name: "PullRequest",
    component: PullRequest
  },
  {
    path: "/pull-request-detail",
    name: "PullRequestDetail",
    component: PullRequestDetail
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
