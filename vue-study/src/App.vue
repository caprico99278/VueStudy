<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import AlertBox from './components/AlertBox.vue'
import { ref } from 'vue'
const posts = ref([
  { id: 1, msg: 'My journey with Vue' },
  { id: 2, msg: 'Blogging with Vue' },
  { id: 3, msg: 'Why Vue is so fun' }
])
const postFontSize = ref(1)

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <div :style="{ fontSize: postFontSize + 'em' }">
        <HelloWorld
          v-for="post in posts"
          :key="post.id"
          :msg="post.msg"
          @enlarge-text="postFontSize += 0.1"
        ></HelloWorld>
        <br>
        <GrobalParts/>
      </div>
      <nav>
        <AlertBox>
          何らかのエラーが発生しました。
        </AlertBox>
      </nav>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/tab-demo">TabDemo</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
