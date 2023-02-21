<template>
  <div>
    <div v-for="issue in issues"
         :key="issue.number">
         <issue :issue="issue"/>
    </div>
  </div>
</template>

<script>
import Issue from '@/components/issues_components/Issue.vue';
import { mapState } from 'vuex';

export default {
components: {
    Issue
},
computed: {
    ...mapState(['issues', 'currentIssue']),
}
}
</script>

<style>

</style>