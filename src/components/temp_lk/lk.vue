<template>
    <div class="lk">
      <upper/>
      <img src="@/assets/icon2.png" class="imageicon3">
      <div class="right"><h1>Личный кабинет</h1></div>
      <div style="margin-left: 20px; width: 550px; margin-top: 100px; position:absolute;">
        <div class="downer">
          <div class="downer__column">
            <ul>
              <li>ИМЯ: {{name}}</li>
              <li>ФАМИЛИЯ: {{secondname}}</li>
              <li>КУРС: {{course}}</li>
              <li>ГРУППА: {{group}}</li>
              <li>СТАТУС: {{status}}</li>
              <li>СВЯЗАТЬСЯ ЧЕРЕЗ: {{email}}</li>
            </ul>
          </div>
          <div class="downer__column">
            <a class="nav__link" @click="">Добавить новый пост</a>
            <p>У вас активных постов: {{count_posts}}</p>
          </div>
        </div>
      </div>

      <div id="footer">
        <downer/>
      </div>
    </div>
</template>

<script>
    import upper from "@/components/temp_main/upper";
    import downer from "@/components/temp_main/downer";
    import Inputs from "./inputs";
    import Vue from "vue";
    import axios from "axios";

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
            count_posts: ''
          }
        },
        components: {
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
              console.log(resp.data)
              this.name = resp.data.firstname
              this.secondname = resp.data.secondname
              this.course = resp.data.course
              this.group = resp.data.usergroup
              if(resp.data.role == "STUDENT"){
                this.status = "СТУДЕНТ"
              }else{
                this.status = "МЕНТОР"
              }
              this.email = data.login
              this.count_posts = data.posts.length

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
        width: 500px;
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
