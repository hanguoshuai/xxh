<template>
  <div class="content">
   <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'my-content',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.content {}
.header ~ .content { padding-top:45px;}
.sub-header ~ .content { padding-top:85px;}
.footer ~ .content { padding-bottom:50px;}
</style>
