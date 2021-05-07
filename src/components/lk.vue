<template>
    <div class="lk" v-if="isAvailable=true">
        <upper/>
        <div class="right"><h1>Личный кабинет сотрудника</h1></div>
        <div class="rightt">
            <input type="tel" placeholder="ПОИСК ПОЛЬЗОВАТЕЛЕЙ" title="номер" class="input__more">
        </div>
        <user/>
        <inputs style="margin-left: 30px;"/>
        <textarea class="lk__textarea">Краткое описание деятельности: Пишу сайты,
            Стек моих технологий: - Блаблабла - Блаблабла - Блаблабла степени Спасибо, что посетили мою страницу. Если у вас есть ко мне вопросы, напишите в персональный чат.</textarea>


        <div class="clear"></div>
        <button title="Данные" class="btn__more">"Эта кнопка что то делает"</button>
        <button title="Удалить пользователя" class="btn__more two">Удалить аккаунт</button>
        <downer/>
    </div>
  <div v-else>
    <upper/>
    <br v-for="i in 9"/>
    <h1>
      Вы не зарегестрированный пользователь! Вернитесь на главную страницу!
    </h1>
    <br v-for="i in 9"/>
    <downer/>
  </div>
</template>

<script>
    import user from "@/components/temp_lk/user";
    import upper from "@/components/temp_main/upper";
    import downer from "@/components/temp_main/downer";
    import Inputs from "./temp_sklad/inputs";

    export default {
        name: "lk",
        components: {
            Inputs,
            user,
            upper,
            downer,

        },
      computed: {
        isAvailable: function () {
          return (localStorage.getItem('login') !== null) && (localStorage.getItem('login') !== undefined) && (localStorage.getItem('login') !== '');
        },
      },
      }
</script>

<style scoped>
    .clear {
        clear: left;
    }
    .btn__more {
        width: 430px;
        height: 40px;
        font-size: 18px;
        text-align: center;
        margin: 20px 0 10px 50px;
        background: rgba(0,0,0,.0);
        border: 2px solid rgba(0, 0, 0, 0.4);
        border-radius: 30px;
        color: rgba(0, 0, 0, 0.4);
        transition: all 500ms ease;
        outline: 0 none !important;
    }
    .two{
        width: 230px;
        height: 40px;
        margin-left: 140px;
        background: beige;
    }

    .btn__more:hover {
        background: white;
        color: dodgerblue;
        font-size: 23px;
        box-shadow: inset 0 0 0 3px dodgerblue;
        cursor: pointer;
    }
   .two:hover {
        background: rgba(194, 67, 67, 0.3);;
       color: rgba(0, 0, 0, 0.4);
        font-size: 19px;
        box-shadow: inset 0 0 0 3px #ffffff;
        cursor: pointer;
    }
    .lk__textarea {
        float: left;
        margin-left: 50px;
        width: 800px;
        height: 280px;
        border-radius: 15px;
        background: #F6FBFF;
        border: 1px solid rgba(0, 0, 0, 0.4);
        outline: 0 none !important;
        font-size: 20px;
    }

    .lk__textarea2 {
        margin-top: 20px;
        float: left;
        margin-left: 50px;
        width: 800px;
        height: 250px;
        border-radius: 15px;
        background: #F6FBFF;
        border: 1px solid rgba(0, 0, 0, 0.4);
        outline: 0 none !important;
        font-size: 20px;
    }

    .input__more {
        width: 250px;
        height: 30px;
        font-size: 18px;
        text-align: center;
        background: white;
        border: 2px solid dodgerblue;
        box-sizing: border-box;
        border-radius: 30px;
        color: black;
        transition: all 500ms ease;
        margin-right: 50px;
        outline: 0 none !important;
    }

    .right {
        float: left; /* Обтекание по правому краю */
        width: 500px;
    }

    .rightt {
        float: right; /* Обтекание по правому краю */

        margin-right: 0;

    }
</style>
