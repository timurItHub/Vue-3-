import { ref, watch } from "vue";
import { defineStore } from "pinia";

let data = [
  {
    id: 1,
    title:
      "Сегодня было замечательное предложение пойти поужинать этим вечером. Главное, чтобы погода была преимущественно теплой.",
    comments: [
      { id: 1, text: "Самый яркий комментарий в этом посте" },
      { id: 2, text: "Один из бессмысленный комментарий в этом посте" },
    ],
  },
  {
    id: 2,
    title:
      "Краткосрочное вымышленное преломление может выполнять особую роль в пространстве главной роли игрока ",
    comments: [{ id: 1, text: "Очень научно и непонятно" }],
  },
];

export const usePostStore = defineStore("posts", () => {
  let ls = JSON.parse(localStorage.getItem("posts"));
  let posts = ref(ls || data);

  let updatePosts = (post) => {
    let newPost = {
      id: Date.now(),
      title: post.title,
      comments: [],
    };

    posts.value.push(newPost);
  };

  let changePost = (id, newTitle) => {
    posts.value.filter((el) => el.id === id)[0].title = newTitle;
  };

  let addComm = (id, comm) => {
    const newComm = {
      id: Date.now(),
      text: comm,
    };
    posts.value.filter((el) => el.id === id)[0].comments.push(newComm);
  };

  let deleteComm = (postId, commentId) => {
    const post = posts.value.find((post) => post.id === postId);
    if (post) {
      post.comments = post.comments.filter((el) => el.id !== commentId);
    }
  };

  watch(
    () => posts.value,
    () => {
      localStorage.setItem("posts", JSON.stringify(posts.value));
      console.log("save: ready");
    },
    { deep: true }
  );

  return { posts, updatePosts, changePost, deleteComm, addComm };
});
