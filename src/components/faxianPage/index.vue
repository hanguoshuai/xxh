<template>
    <div>
        <router-link :to="'/faxian/'+$route.params.id+'/profile'" active-class>profile</router-link>
        <router-link :to="'/faxian/'+$route.params.id+'/posts'" active-class>posts</router-link>
        <h2>User {{ $route.params.id }}</h2>
        <button @click='fn($route.params.id)'>w </button>
        <router-view>
          
        </router-view>
    </div>
</template>

<script>
export default {
  name: 'my-faxian',
  data () {
    return {
      hgspostData:[]
    }
  },
  methods:{
    fn(id){
      console.log(id)
      this.hgspostData = id
    }
  },
  mounted(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .router-link-exact-active{
      background:red;
    }
</style>