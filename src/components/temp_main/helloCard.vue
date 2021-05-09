<template>
    <div>
        <div class="hellocard" >
            <img src="@/assets/icon2.png" class="imageicon">
            <p class="name">ИМЯ: {{name}}</p>
            <p class="sate" >СТАТУС: {{status}}</p>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import axios from "axios";

    export default {
        name: "helloCard",
      data(){
          return{
            name: '',
            status: '',
          }
      },methods:{
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
            this.group = resp.data.usergroup
            if(resp.data.role == "STUDENT"){
              this.status = "СТУДЕНТ"
            }else{
              this.status = "МЕНТОР"
            }
            return
          }).catch(err => {
            return
          })
        },
      },
      mounted() {
        this.getInfoUser()
      }
    }
</script>

<style>
.name{
  margin-top: 65px;
  margin-left: 10px;
}
.sate{
  margin-left: 10px;
}
    .hellocard{
        font-weight: bold;
        margin-top: 5px;
        width: 210px;
        height: 180px;
        margin-left: 50px;
        background-color: white;

        margin-bottom:100px;
        padding: 10px 10px 10px;
        box-shadow: 0 0 5px rgba(0,0,0,0.5);
        position: fixed;
        left: 5px ;
        border-radius: 10px;
        transition: opacity 0.6s;
    }
    .imageicon{
        width: 50px;
        display: block;
        float: left;
      margin-left: 5px;
    }
    .hellocard:hover {
        opacity: 0.9;
        transition: opacity 0.6s;
        box-shadow: 4px 4px 5px rgba(7, 66, 241,0.4);
    }
</style>
