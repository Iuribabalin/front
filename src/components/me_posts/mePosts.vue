<template>
  <div>
    <upper/>
    <filter-card></filter-card>
    <h1>Мои посты:</h1>
    <post v-for="el in posts" :key="el.members"
          :post_title=el.title :post_text=el.text :post_members=el.members
          :post_type=el.type></post>
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
