<template>
  <div>
    <div id="main-content">
      <form >
<!--        <label for="connect">Подключиться к чату:</label>-->
<!--        <button id="connect" class="btn btn-default" type="submit" :disabled="connected == true"-->
<!--                @click.prevent="connect">Connect-->
<!--        </button>-->
<!--        <button id="disconnect" class="btn btn-default" type="submit" :disabled="connected == false"-->
<!--                @click.prevent="disconnect">Disconnect-->
<!--        </button>-->
      </form>
      <form class="form-inline">
        <label for="name">Введите сообщение:</label>
        <input type="text" id="name" class="form-control" v-model="send_message" placeholder="Сообщение...">
        <button id="send" class="btn btn-default" type="submit" @click.prevent="send">Отправить</button>
      </form>
      <table id="conversation" >
        <thead>
        <tr>
          <th>Общий чат!</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in received_messages" :key="item">
          <td>{{ item }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";

export default {
  name: "websocketdemo",
  data() {
    return {
      received_messages: [],
      send_message: null,
      connected: false
    };
  },
  methods: {
    send() {
      console.log("Отправить сообщение:" + this.send_message);
      if (this.stompClient && this.stompClient.connected) {
        const msg = {name: this.send_message};
        console.log(JSON.stringify(msg));
        this.stompClient.send("/app/hello", JSON.stringify(msg), {});
      }
    },
    connect() {
      this.socket = new SockJS("https://ict-tagall.herokuapp.com/gs-guide-websocket");
      this.stompClient = Stomp.over(this.socket);
      this.stompClient.connect(
          {},
          frame => {
            this.connected = true;
            console.log(frame);
            this.stompClient.subscribe("/topic/greetings", tick => {
              console.log(tick);
              this.received_messages.push(JSON.parse(tick.body).content);
            });
          },
          error => {
            console.log(error);
            this.connected = false;
          }
      );
    },
    disconnect() {
      if (this.stompClient) {
        this.stompClient.disconnect();
      }
      this.connected = false;
    },
    tickleConnection() {
      this.connected ? this.disconnect() : this.connect();
    }
  },
  mounted() {
    this.connect();
  }
};
</script>

<style scoped="">
</style>
