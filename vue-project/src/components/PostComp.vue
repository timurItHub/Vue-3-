<template lang="">
  <div class="post-wrapper">
    <h1>{{ title }}</h1>

    <div class="button-space">
      <button class="post-wrapper-button-comms" @click="openComments">
        Комментарии
      </button>
      <button class="post-wrapper-button-change" @click="openModal()">
        Изменить пост
      </button>
      <p class="counter-comment">
        Кол-во комментариев - {{ comments.length }}
      </p>
    </div>

    <div class="func-section" v-if="isShow">
      <div class="newComm-section">
        <input type="text" v-model="newComm" />
        <button @click="postStore.addComm(id, newComm)">Новый комментарий</button>
      </div>
      <div class="comment-section">
        <div class="comment" v-for="(comment, index) in comments" :key="index">
          <p>{{ comment.text }}</p>
          <button
            class="comment-button"
            @click="postStore.deleteComm(id, comment.id)"
          >
            Удалить комментарий
          </button>
        </div>
      </div>
    </div>

    <div v-if="isShowModal">
      <div class="modal-container">
        <div class="modal-content">
          <p>Напишите измененный текст:</p>
          <input type="text" v-model="newTitle" />
          <div class="button-space">
            <button @click="postStore.changePost(id, newTitle)">Изменить</button>
            <button @click="openModal">Закрыть</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from "@/stores/PostStore";
import { defineProps, ref } from "vue";

let newComm = ref("");
let newTitle = ref("");

let isShow = ref(false);
let isShowModal = ref(false);

defineProps({
  id: Number,
  title: String,
  comments: Object,
});

let openModal = () => {
  isShowModal.value = !isShowModal.value;
};

let openComments = () => {
  isShow.value = !isShow.value;
};

const postStore = usePostStore();
</script>

<style>
.post-wrapper {
  border: 2px solid #0094ff;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fcfbfb;
}

.post-wrapper-button-change {
  background-color: #ff218b;
}

.func-section {
  margin-top: 20px;
  border-top: 1px solid #ccc;
}

.comment-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.newComm-section {
  margin-top: 20px;
}

.comment {
  display: flex;
  justify-content: space-between;
}

.comment-button {
  background-color: #ff218b;
}

.comment-button:hover {
  background-color: #690f3b;
}

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
}

.modal-content button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.modal-content button:first-child {
  margin-right: 10px;
  background-color: #007bff;
  color: white;
}

.button-space {
  width: 40%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.modal-content button:first-child:hover {
  background-color: #0056b3;
}

.modal-content button:last-child {
  background-color: #dc3545;
  color: white;
}

.modal-content button:last-child:hover {
  background-color: #bd2130;
}
</style>
