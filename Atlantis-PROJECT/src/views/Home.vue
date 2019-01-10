<template>
  <div class="home">
    <div class="container">
    <h1>Bem Vindo ao Atlantis</h1>
    <h4>Gestor de eventos</h4>
    <br>
        <div class="row">
            <div class="col-sm-4" v-for="(event, index) in events" :key="index">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{event.name}}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{event.course}}</h6>
                        <p class="card-text">{{event.category}} com a capacidade de {{event.capacity}} participantes, O orador de este evento é {{event.speaker}}</p>
                        <a href="#" class="card-link" v-if="userLogged != 0" v-on:click="subscribe(event.id)">Inscrever-me</a>
                        <a href="#" class="card-link">Mais Informações</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button type="button" class="btn btn-dark btn-lg" v-on:click="test()">Inscrever</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data: function() {
    return {
        events: "",
        userLogged: localStorage.getItem('userLogged'),
    };
  },
  created() {
    this.events = this.$store.getters.getEvents
  },
  methods: {
    test() {
      localStorage.setItem('userLogged', 0)
      this.$router.push({name: "login"})
    },
    subscribe(id){
        let subscribeInfo = {
          idUser: this.userLogged,
          idEvent : id
        }
        var confirmation = confirm("Tem a certeza que quer se inscrever neste evento?");
        if (confirmation) {
           let result = this.$store.getters.subscribe(subscribeInfo)
           if(result){
              alert("subscribe")
           }
           else{
              alert("Já está inscrito")
           }
        } 

    }
  },

};
</script>
<style>
  .card{
      margin-left:auto;
      margin-right:auto;
      display:block;
  }
  .card-title{
    color:#025E73;
  }
</style>
