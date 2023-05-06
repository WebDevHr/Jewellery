<template>
  <div class="comments fontFamilyLora">
    <h3>Yorumlar</h3>
    <ul class="comment-list">
      <li v-for="comment in comments" :key="comment.id" class="comment">
        <div class="comment-author">{{ comment.author }}</div>
        <div class="comment-text">{{ comment.text }}</div>
      </li>
    </ul>
    <form @submit.prevent="submitComment" class="comment-form">
      <h3>Yorum Ekle</h3>
      <div class="form-group">
        <label for="comment-author" class="ms-2">Ad</label>
        <input
          id="comment-author"
          v-model="newComment.author"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label for="comment-text" class="ms-2">Yorum</label>
        <textarea
          id="comment-text"
          v-model="newComment.text"
          class="form-control"
          required
        ></textarea>
      </div>
      <BaseButton
        type="submit"
        :label="commentLabel"
        class="commentButton ms-1"
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentLabel: "Kaydet",
      comments: [
        // Initialize with some dummy comments
        {
          id: 1,
          author: "Muhammed Eminoğlu",
          text: "Bu ürünü arkadaşıma aldım. Çok beğendi!",
        },
        {
          id: 2,
          author: "Kerem Mutlu",
          text: "Harika bir ürün!",
        },
      ],
      newComment: {
        author: "",
        text: "",
      },
    };
  },
  methods: {
    submitComment() {
      // Generate a new ID for the comment
      const newId = Math.max(...this.comments.map((comment) => comment.id)) + 1;
      // Add the new comment to the list
      this.comments.push({
        id: newId,
        author: this.newComment.author,
        text: this.newComment.text,
      });

      // Reset the form
      this.newComment.author = "";
      this.newComment.text = "";
    },
  },
};
</script>

<style scoped>
.comments {
  margin: 2rem 0;
}

.comment-list {
  margin: 1rem 0;
  padding: 0;
  list-style: none;
}

.comment {
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 5px;
}

.comment-author {
  font-weight: bold;
}

.comment-text {
  margin: 0;
}

.comment-form {
  margin-top: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  font-weight: bold;
}

.btn {
  margin-top: 1rem;
}

.commentButton {
  width: 200px;
}

input:focus,
textarea:focus {
  box-shadow: none;
}
</style>
