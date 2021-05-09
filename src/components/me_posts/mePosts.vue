<template>
  <div>
    <upper/>
    <h1>Мои посты:</h1>
    <div v-if="posts.length != 0">
    <post v-for="el in posts" :key="el.members"
          :post_title=el.title :post_text=el.text :post_members=el.members
          :post_type=el.type></post>
    </div>
    <div v-else>
      <h1>Постов не найдено</h1>
    </div>
    <div id="footer">
    <downer/>
    </div>
  </div>
</template>

<script>
import upper from '@/components/temp_main/upper'
import downer from "@/components/temp_main/downer";
import Post from "@/components/temp_main/post";
import FilterCard from "@/components/temp_main/filterCard";
import Vue from "vue";
import axios from "axios";

export default {
  name: "mePosts",
  components: {
    FilterCard,
    Post,
    upper,
    downer,
  },
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    checkLog(){
      if(Vue.$cookies.get('FlagLog') === "false")
        this.$router.push('/main')
    },
    getPosts() {
      let data = {
        login: Vue.$cookies.get('login'),
      }
      axios({
        method: 'post',
        url: 'https://ict-tagall.herokuapp.com/api/aunt/getinfo',
        data: data
      }).then(resp => {
        console.log(resp.data.posts)
        this.posts = resp.data.posts

        return
      }).catch(err => {
        return
      })
    },
  },
  mounted() {
    this.checkLog()
    this.getPosts();
  }

}
</script>

<style scoped>
#footer{

  width: 100%;
  margin-top: 35%;
}
</style>
