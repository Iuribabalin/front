<template>
    <div class="form" >

        <div class="head "  v-on:click="show = !show">
            <img class="icon"  src="@/assets/icon.png">
            <div class="aa"><a>{{post_title}}</a></div>
        </div>
        <transition name="fade">

        <div class="body" v-if="show">
            <h1 style="padding-bottom: 30px">{{post_text}}</h1>
            <button class="loging__btnn" @click="addToTeam">Присоединиться</button>

        </div>
        </transition>

        <div class="information">
            <a >Информация о создании </a>
            <a style="color: #3e606f">Имя: {{post_nameU}}   </a>
            <a style="color: #3e606f">Фамилия: {{post_SnameU}}   </a>
            <a style="color: #3e606f">time: {{post_time.split('T')[0] + " " + post_time.split('T')[1].split('.')[0]}} </a>
        </div>


<!--        <div class="demo">-->
<!--            <button v-on:click="show = !show">-->
<!--                Переключить-->
<!--            </button>-->
<!--            <transition name="fade">-->
<!--                <a v-if="show">привет</a>-->
<!--            </transition>-->
<!--        </div>-->


    </div>
</template>

<script>


    import axios from "axios";
    import Vue from "vue";

    export default {
        name: "post_mainpage",

        data(){
            return {
                show: false,
            }
        },

        props: {
            posts_team_name: String,
            post_title: String,
            post_text: String,
            post_members: Number,
            post_time: String,
            post_nameU: String,
            post_SnameU: String,
        },

        methods: {
            addToTeam() {
                let del_data = {
                    login: Vue.$cookies.get('login'),
                    name: this.posts_team_name
                }

                axios({
                    method: 'post',
                    url: 'https://ict-tagall.herokuapp.com/main/app/team/member',
                    data: del_data
                }).then(resp => {

                    return
                }).catch(err => {
                    return
                })
            },
        },
    }

</script>


<style scoped>


    .loging__btnn {
        position: static;
        outline: 0 none !important;
        color: black;
        font-weight: bold;
        width: 120px;
        height: 40px;
        margin-top: -40px;
        margin-right: -50px;
        margin-left: 20px;
        margin-bottom: 0px;
        background: #F3F3F3;
        border: 2px solid #686363;
float: right;
        border-radius: 10px;
        transition: all 500ms ease;
    }


    .loging__btnn:hover {
        outline: none;
        background: #6FB2E6;
        color: #fff;
        box-shadow: inset 0 0 0 3px #6FB2E6;
        cursor: pointer;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }

    h1{
        font-size: 15px;
        font-family: Arial;
    }
    a{
        color: black;
    }
    .aa{
        padding-top: 10px;
        margin-top: 30px;
        margin-left: 40px;
        font-weight: bold;
        font-size: 18px;
        position: static;

    }

    .icon{
        margin-top: 10px;
        width: 30px;
        display: block;
        float: left;
    }
    .scale {
        transition: 0.4s; /* Время эффекта */
    }
    .scale:hover {
        transform: scale(1.2); /* Увеличиваем масштаб */
    }
    .form{
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -300px;
        margin-bottom: 30px;
        max-width:600px ;
        max-height: 600px;
        min-width: 30px;

        background-color: white;
        border-radius: 10px;
        position: relative;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);

    }
    .head{
        margin-left: 10px;
        font-family: Roboto;
        font-size: 20px;
        color: #0e0e0e;
    }
    .body{
        width: 500px;
        margin-top: 20px;
        margin-left: 30px;
        font-family: Roboto;
        font-size: 15px;
        color: #0a0a0a;
    }
    .form:hover {
        opacity: 0.9;
        transition: opacity 0.1s;
        box-shadow: 0px 0px 10px rgb(7, 58, 241);
    }
    .information{

        margin-left: 200px;
        width: 400px;
        height: 50px;
        text-align: right;
        padding-right: 15px;
        padding-bottom: 10px;
        /*margin-left: 300px;*/
        font-weight: bold;
        font-family: Roboto;
        padding-bottom: 20px;
        font-size: 15px;
        font-style: inherit;
        color: rgba(36, 38, 40, 0.5);

    }.information:hover {
         opacity: 0.9;
        color: grey;
         transition: opacity 0.3s;
     }

</style>
