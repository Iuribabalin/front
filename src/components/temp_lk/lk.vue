<template>
    <div class="lk">
      <upper/>
      <img src="@/assets/icon2.png" class="imageicon3">
      <h1 style="margin-left: 550px">Личный кабинет</h1>
      <div class="right">

        <a class="nav__link two" @click="$router.push('addPosts')">✓ Добавить новый пост</a>
        <a class="nav__link two" @click="$router.push('/mePosts')">✓ Смотреть активные посты: {{count_posts}}</a>
      </div>
      <div style="margin-left: 90px; width: 550px; margin-top: 100px; position:absolute;">
        <div class="form" >
          <div class="in_form">
            <p id="first">ИМЯ: {{name}}</p>
            <p>ФАМИЛИЯ: {{secondname}}</p>
            <p>КУРС: {{course}}</p>
            <p>ГРУППА: {{group}}</p>
            <p>СТАТУС: {{status}}</p>
            <p>СВЯЗАТЬСЯ ЧЕРЕЗ: {{email}}</p>
          </div>
        </div>
      </div>
      <div style="margin-left: 500px; width: 550px; margin-top: 100px; position:static;">
        <div class="form2" >
          <div class="in_form">
            <me-posts_mini/>
          </div>
        </div>
      </div>
      <downer style="margin-top: 100px; position: relative"></downer>
    </div>
</template>

<script>
    import upper from "@/components/temp_main/upper";
    import downer from "@/components/temp_main/downer";
    import Inputs from "./inputs";
    import Vue from "vue";
    import axios from "axios";
    import MePosts_mini from "../me_posts/mePosts_mini";

    export default {
        name: "lk",
        data(){
          return{
            name: '',
            secondname: '',
            course: '',
            group: '',
            status: '',
            email: '',
            count_posts: '',
            teamname: ''
          }
        },
        components: {
          MePosts_mini,
            Inputs,
            upper,
            downer,
        },
        methods:{
          checkLog(){
            if(Vue.$cookies.get('FlagLog') === "false")
              this.$router.push('/main')
          },
          getInfoUser() {
            let data = {
              login: Vue.$cookies.get('login'),
            }
            axios({
              method: 'post',
              url: 'https://ict-tagall.herokuapp.com/api/aunt/getinfo',
              data: data
            }).then(resp => {
              this.name = resp.data.firstname
              this.secondname = resp.data.secondname
              this.course = resp.data.course
              if (resp.data.teamname != undefined && resp.data.teamname != null){
                this.teamname=resp.data.teamname
              }
              this.group = resp.data.usergroup
              if(resp.data.role == "STUDENT"){
                this.status = "СТУДЕНТ"
              }else{
                this.status = "МЕНТОР"
              }
              this.email = data.login
              this.count_posts = resp.data.posts.length

              return
            }).catch(err => {
              return
            })
          },
        },
        mounted() {
          this.checkLog()
          this.getInfoUser()
        }
    }
</script>

<style scoped>
#first{
  margin: auto;
}
.in_form{
  margin-left: 30px;
}
.form{
  position: absolute;
  top: 40%;
  left: 50%;
  margin-left: -250px;
  margin-bottom: 20px;
  max-width:400px ;
  max-height: 500px;
  min-width: 50px;

  background-color: white;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);

}
.form2{
  padding-bottom: 30px;
  position: absolute;
  top: 40%;
  left: 50%;
  margin-left: -250px;
  margin-bottom: 20px;
  max-width:900px ;
  max-height: 2000px;
  min-width: 50px;

  background-color: white;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);

}
#footer{

  width: 100%;
  margin-top: 32.5%;
}
    .clear {
        clear: left;
    }

    table {

        width: 100%; /* Ширина таблицы */
        background: white; /* Цвет фона таблицы */
        color: white; /* Цвет текста */
        border-spacing: 1px; /* Расстояние между ячейками */
    }
    td, th {
        background: #615d5d; /* Цвет фона ячеек */
        padding: 5px; /* Поля вокруг текста */
    }

    .imageicon3{
        width: 70px;
        display: block;
        float: left;
      margin-top: 150px;
      margin-left: 35px;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :root {
        --input-border: #8b8a8b;
        --input-focus-h: 245;
        --input-focus-s: 100%;
        --input-focus-l: 42%;
    }

    .input {
        margin-left: 10px;
        margin-right: 20px;
        margin-top: 20px;
        font-size: 16px;
        font-family: inherit;
        padding: 0.25em 0.5em;
        background-color: #fff;
        border: 2px solid var(--input-border);
        border-radius: 4px;
        transition: 180ms box-shadow ease-in-out;
    }

    .input:focus {
        border-color: hsl(
                var(--input-focus-h),
                var(--input-focus-s),
                var(--input-focus-l)
        );
        box-shadow: 0 0 0 3px
        hsla(
                var(--input-focus-h),
                var(--input-focus-s),
                calc(var(--input-focus-l) + 40%),
                0.8
        );
        outline: 3px solid transparent;
    }

    .input:not(textarea) {
        line-height: 1;
        height: 2.25rem;
    }

    input[type="file"] {
        font-size: 0.9em;
        padding-top: 0.35rem;
    }

    textarea.input {
        resize: vertical;
    }

    .input[readonly] {
        border-style: dotted;
        cursor: not-allowed;
        color: #777;
    }

    .input[disabled] {
        --input-border: #ccc;

        background-color: #eee;
        cursor: not-allowed;
    }

    label {
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 1;
    }

    .input + label {
        margin-top: 2rem;
    }


    .right {
        float: left; /* Обтекание по правому краю */
        width: 350px;
        margin-left: -7px;
    }

    .rightt {
        float: right; /* Обтекание по правому краю */

        margin-right: 0;

    }
.downer {
  clear: both;
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  display: table;
  z-index: 1;
  font-family: Roboto;
}
.downer__column {

  display: table-cell;
  text-align: left;
  margin-bottom: 10px;
}

.downer__column  h2{

  display: table-cell;
  text-align: left;
  margin-bottom: 10px;
}
</style>
