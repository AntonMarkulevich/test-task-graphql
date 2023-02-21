<template>
  <div>
    <div v-for="(comment, idx) in comments"
             :key="idx">
        <comment :comment="comment"
                 :number="idx"/>
    </div>
  </div>
</template>

<script>
import Comment from '@/components/comments_components/Comment.vue'
import { mapState } from 'vuex'

export default {
components: {
    Comment
},
computed: {
    ...mapState(['comments'])
}
}
</script>

<style>

</style>