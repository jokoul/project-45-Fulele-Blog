<template>
  <div class="blog-wrapper">
    <div class="blog-content">
      <div>
        <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
        <h2 v-else>{{ post.title }}</h2>
        <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
        <p v-else class="content-preview">{{ post.blogHTML }}</p>
        <router-link v-if="post.welcomeScreen" to="#" class="link link-light">
          Login/Register <Arrow class="arrow arrow-light" />
        </router-link>
        <router-link v-else to="#" class="link link-light">
          View The Post <Arrow class="arrow" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/icons/arrow-right-light.svg";

export default {
  name: "blogPost",
  props: ["post"],
  components: { Arrow },
};
</script>

<style lang="scss" scoped></style>
