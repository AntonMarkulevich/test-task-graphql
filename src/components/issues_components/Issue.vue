<template>
  <div class="issue-wrapper"
        @click="setCurrentIssue(issue)">
    <div class="issue-title">
        <h3>{{issue.title}}</h3>
    </div>
    <div class="issue-text">
        {{issue.body}}
    </div>
    <div class="issue-status">
        {{issue.state}}
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    props: {
        issue: {
            required: true
        }
    },
    methods: {
        ...mapMutations(['setCurrentIssue'])
    }

}
</script>

<style>
.issue-wrapper {
    max-width: 600px;
    cursor: pointer;
    border: 1px solid rgb(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 10px;
    margin-right: 100px;
}
.issue-title {
    display: flex;
    justify-content: flex-start;
}
.issue-text {
    display: flex;
    text-align: left;
        margin: -10px 20px 10px 5px;

}
.issue-status {
    border-radius: 10px;
    border: 1px solid rgb(0, 0, 0, 0.2);
    width: fit-content;
    padding: 3px 10px;
    font-size: 15px;
    font-weight: bold;
}
</style>