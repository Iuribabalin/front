<template>
    <div class="form" >

        <div class="head">
            <img class="icon" v-on:click="show = !show" src="@/assets/icon.png">
            <div class="aa" v-on:click="show = !show"><a>{{post_title}}</a></div>
        </div>
        <transition name="fade">

        <div class="body "v-if="show">
            <h1>{{post_text}}</h1>
        </div>
        </transition>

        <div class="information">
            <a>time: {{post_time.split('T')[0] + " " + post_time.split('T')[1].split('.')[0]}} </a>
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
            post_title: String,
            post_text: String,
            post_members: Number,
            post_time: String,
        },

        methods: {
            close() {
                let del_data = {
                    login: Vue.$cookies.get('login'),
                    time: this.post_time
                }

                axios({
                    method: 'post',
                    url: 'https://ict-tagall.herokuapp.com/main/app/deletepost',
                    data: del_data
                }).then(resp => {
                    this.$destroy();
                    this.$el.parentNode.removeChild(this.$el);
                    window.location.reload()
                    return
                }).catch(err => {
                    return
                })
            },
        },
    }

</script>


<style scoped>


    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }

    h1{
        font-size: 15px;
        font-family: Arial;
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
    .icon2{
        position: absolute;
        margin-left: 550px;
        margin-top: -30px;
        width: 30px;
        display: block;
        float: left;
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
        color: #545457;
    }
    .body{
        margin-left: 10px;
        font-family: Roboto;
        font-size: 15px;
        color: #545457;
    }
    .form:hover {
        opacity: 0.9;
        transition: opacity 0.6s;
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
        color: rgba(44, 49, 52,0.5);

    }.information:hover {
         opacity: 0.4;
         transition: opacity 1s;
     }

</style>
