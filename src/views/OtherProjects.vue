<template>
  <div>
    <h1>Graphics &amp; Virtual Production</h1>

    <div style="margin-bottom: 30px;">
      Real-time graphics work, simulation and networking projects, and two years of live virtual
      production in Unreal Engine 5.
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  },
});
</script>
