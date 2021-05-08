<template>
  <form @submit.prevent="startRecov">
    <logo/>
    <div id="loging">
      <div id="login-form">
        <fieldset>
          <label id="main_title">ВОССТАНОВЛЕНИЕ ПАРОЛЯ</label>

          <input class="in_data" id="email" type="text" placeholder="ПОЧТА" title="Почта" v-model.trim="email"
                 v-bind:class="{'error_in_data': ($v.email.$dirty && !$v.email.required),
                 'in_data': true}">
          <div
              class="err_message"
              v-if="$v.email.$dirty && !$v.email.required || $v.email.$dirty && !$v.email.email ">
            Некорректные данные
          </div>
          <a class="trouble_link" @click="goTo('login')">ВЕРНУТЬСЯ КО ВХОДУ</a>
          <button title="Зайти в аккаунт" class="loging__btn" type="submit">
            <svg id="arrow" width="59" height="24" viewBox="0 0 59 24" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M58.0607 13.0607C58.6464 12.4749 58.6464 11.5251
                  58.0607 10.9393L48.5147 1.3934C47.9289 0.807611 46.9792
                  0.807611 46.3934 1.3934C45.8076 1.97919 45.8076 2.92893
                  46.3934 3.51472L54.8787 12L46.3934 20.4853C45.8076 21.0711
                  45.8076 22.0208 46.3934 22.6066C46.9792 23.1924 47.9289 23.1924
                  48.5147 22.6066L58.0607 13.0607ZM0 13.5H57V10.5H0V13.5Z"/>
            </svg>
          </button>
        </fieldset>
      </div>
    </div>
  </form>
</template>

<script>
import {email, required} from  'vuelidate/lib/validators'
import Logo from "../temp_startup/logo";
export default {
  name: "RecoveryPass",
  components: {Logo},
  data() {
    return {
      email: '',
    }
  },
  validations:{
    email: {email, required},
  },
  methods: {
    startRecov(){
      if(this.$v.$invalid){
        this.$v.$touch()
        return
      }

      const formDataReg = {
        email: this.email,
      }

      console.log(JSON.stringify(formDataReg))

      this.$router.push('/login')
    },
    goTo: function (path) {
      this.$router.push('/'+path);
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap%27');

.trouble_link {
  float: left;
  text-decoration: underline;
  margin: 0 0 0 30px;
}

#main_title {
  line-height: 65px;
  font-size: 170%;
  margin-right: auto;
  margin-top: 0;
}

#loging {
  background: #F6FBFF;
  display: block;
  width: 50%;
  margin: auto;
}

#login-form {
  background: #F6FBFF;
}

#login-form input{
  margin: auto;
}

#login-form input.in_data {
  outline: none;
  width: 90%;
  border: 1px solid #c6c9cc;
  border-radius: 15px;
  color: #555;
  display: block;
  padding: 1% 2%;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
}

#login-form input.error_in_data {
  outline: none;
  width: 90%;
  border: 3px solid #f30404;
  border-radius: 15px;
  color: #f30303;
  display: block;
  padding: 1% 2%;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
}

#login-form .selector {
  margin-top: 20px;
  margin-right: 25px;
  margin-left: 10px;
}


#login-form label.selector_label{
  margin-left: 20px;
  color: #3e606f;
  font-family: Satisfy, Lato, Open Sans, Roboto, sans-serif;
  text-transform: capitalize;
}

#login-form label {
  color: #3e606f;
  font-family: Satisfy, Lato, Open Sans, Roboto, sans-serif;
  text-transform: capitalize;
  font-size: 170%;
}


#login-form fieldset#back {
  text-align: left;
}

#login-form fieldset {
  padding: 4%;
  border: 1px solid #F6FBFF;
  border-radius: 5px;
  margin: 10% 10%;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
}

.err_message {
  font-size: 100%;
  font-style: italic;
  margin-left: auto;
  color: #cd1a21
}

.loging__btn {
  outline: 0 none !important;
  float: right;
  width: 95px;
  height: 46px;
  margin: 10px 25px 0px 0px;
  background: #F3F3F3;
  border: 2px solid #6FB2E6;
  box-sizing: border-box;
  border-radius: 30px;
  transition: all 500ms ease;
}


.loging__btn:hover {
  outline: none;
  background: #6FB2E6;
  color: #fff;
  box-shadow: inset 0 0 0 3px #6FB2E6;
  cursor: pointer;
}

#arrow {
  height: 95%;
  width: 95%;
}

.loging__btn:hover svg {
  fill: white;
  transition: all 500ms ease;
}


@media only all and (min-width: 882px) and (max-width: 1255px) {
  #login-form {
    display: block;
    height: 100%;
    width: 100%;
  }

  #login-form label {
    font-size: 160%;
  }

  #loging {
    width: 50%;
    margin-top: 0px;
    margin-bottom: 0px;
  }
}

@media only all and (max-width: 881px) {
  #loging {
    display: block;
    width: 90%;
  }
}
</style>
