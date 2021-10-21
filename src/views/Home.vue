<template>
  <div class="home">

    <div class="wrapper">
      <SignUp/>
    </div>

  </div>
</template>

<script>

import SignUp from '@/components/SignUp.vue'

export default {
  name: 'Home',
  components: {
    SignUp
  }
}
</script>

<style scoped lang="scss">
  .home {
    background-color: cornflowerblue;
    .wrapper {
      width: 460px;
      margin: 0px auto;
      padding-top: 50px;
      box-sizing: border-box;
      padding-bottom: 250px;
    }
  }
</style>
