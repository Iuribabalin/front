<template>
    <div class="lala">
        <upper/>
        <hello-card v-if="$cookies.get('FlagLog') == 'true'"/>
        <filter-card></filter-card>
        <post v-for="el in posts" :key="el.members"
              :post_title=el.title :post_text=el.text :post_members=el.numberOfMembers></post>

        <div id="footer">
            <downer/>
        </div>
    </div>
</template>



<script>
    import upper from '@/components/temp_main/upper'
    import downer from "@/components/temp_main/downer";
    import Post from "./post";
    import HelloCard from "./helloCard";
    import FilterCard from "./filterCard";
    import axios from "axios";

    export default {
        name: 'page',
        components: {
            FilterCard,
            HelloCard,
            Post,
            upper,
            downer,
        },
        data() {
            return {
                posts: []
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
</style>
