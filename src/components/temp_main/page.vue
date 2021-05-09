<template>
    <div class="lala">
        <upper/>
        <hello-card v-if="flag"></hello-card>
      <div class="form3">
        <websocket-greetings></websocket-greetings>
      </div>
        <post_mainpage  v-for="el in posts" :key="el.members"
                        :posts_team_name=el.teamname
                        :post_title=el.title :post_text=el.text :post_members=el.members
                        :post_time= el.time  :post_name-u="el.firstname" :post_-sname-u="el.secondname"></post_mainpage>

      <div id="footer">
            <downer/>
        </div>
    </div>
</template>



<script>
    import upper from '@/components/temp_main/upper'
    import downer from "@/components/temp_main/downer";
    import WebsocketGreetings from "@/components/me_posts/WebsocketGreetings.vue";
    import Post from "./post";
    import HelloCard from "./helloCard";
    import FilterCard from "./filterCard";
    import axios from "axios";
    import Post_mainpage from "./post_mainpage";
    import Vue from "vue";

    export default {
        name: 'page',
        components: {
            Post_mainpage,
            FilterCard,
            HelloCard,
            Post,
            upper,
            downer,
          WebsocketGreetings

        },
        data() {
            return {
                posts: []
            }
        },
        computed: {
            flag:  function () {
                return Vue.$cookies.get('FlagLog') === "true"
            }
        },
        methods:{
          getPosts(){
            axios({
              method: 'post',
              url: 'https://ict-tagall.herokuapp.com/main/app/all'
            }).then(resp => {
              this.posts = resp.data
              console.log(resp.data)
              return
            }).catch(err => {
              return
            })
          }
        },
        mounted() {
          this.getPosts()
        }
    }
</script>

<style>
    #footer{

        width: 100%;
        margin-top: 35%;
    }
    .lala {
        background-color: rgba(243, 243, 235, 0.4);
    }
    .form3{
      font-size: 15px;
      padding-left: 25px;
      position: fixed;
      margin-left: 1090px;
      float: right;
      margin-bottom: 20px;
      width:230px ;
      height: 400px;
      min-width: 50px;

      background-color: white;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);

    }
</style>
