<template lang="">
  <div>
    <div class="header">
      <h1>Создайте новый пост!</h1>
      <div class="func-bar">
        <input type="text" v-model="title" />
        <button type="submit" @click="handleSend">Отправить</button>
      </div>
    </div>

    <PostComp
      v-for="(item, index) in postStore.posts"
      :key="index"
      :title="item.title"
      :comments="item.comments"
      :id="item.id"
    ></PostComp>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PostComp from "./PostComp.vue";
import { usePostStore } from "@/stores/PostStore";

let title = ref("");

const handleSend = () => {
  postStore.updatePosts({ title: title.value });

  title.value = "";
};

const postStore = usePostStore();
</script>

<style>
.header {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border: 2px solid #95b9d3;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fcfbfb;
}

.func-bar {
  display: flex;
}

.func-bar input {
  width: 100%;
  outline: 1px solid black;
}

.post-container {
  margin-top: 20px;
}
</style>
