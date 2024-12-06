<template lang="">
  <div>
    <PostList></PostList>
  </div>
</template>

<script setup>
import PostList from "./components/PostList.vue";
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: "Montserrat", sans-serif;
}

body {
  background-color: #e1f8ff;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

input[type="text"] {
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "Montserrat", sans-serif;
}

button:hover {
  background-color: #0056b3;
  font-family: "Montserrat", sans-serif;
}
</style>
