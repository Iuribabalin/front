<template>
    <div class="form">
        <div class="head">
            <img class="icon" src="@/assets/icon.png">
            <div class="aa"><a> Заголовок head</a></div>
            <img class="icon2 scale" src="@/assets/Cross-lines (1).png">
        </div>

        <div class="body">
            <h1>post</h1>
            <h1>*post</h1>
            <h1>*post</h1>
            <h1>*post</h1>

        </div>

        <div class="information">
            <a>members:  4/4</a>
            <a>type: Programming</a>
        </div>

    </div>
</template>

<script>
    import Sending from "./sending";
    export default {
        name: "post",
        components: {Sending}
    }
</script>


<style scoped>
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
    box-shadow: 0px 0px 10px rgb(241, 175, 7);
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
