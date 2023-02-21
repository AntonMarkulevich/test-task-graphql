<template>
  <div class="comment-wrapper">
    <h3>{{commentTitle}}</h3>
    <div class="comment-text">
        {{comment.node.bodyText}}
    </div>
    <div class="comment-created-at">
        {{comment.node.createdAt}}
    </div>
  </div>
</template>

<script>
export default {
    props: {
        comment: {
            required: true
        },
        number: Number
    },
    computed: {
        commentTitle() {
            return `Comment #${this.number}`;
        }
    }

}
</script>

<style>
.comment-wrapper {
    width: 400px;
    border: 1px solid rgb(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 10px;
}
.comment-text {
    display: flex;
    text-align: left;
    margin: -10px 20px 10px 5px;
}

.comment-created-at {
    display: flex;
    text-align: right;
    justify-content: flex-end;
}
</style>