import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [
      {id: 0,date: "10-12-2019",name:"DRIVE",capacity: 50, category: "Workshop" , course: "Tsiw" ,poster: "",speaker: "Hugo Santos",creatorId: 1 ,participants: [2]},
      {id: 1,date: "10-12-2019",name:"UNLOCK",capacity: 50, category: "Seminario" , course: "Design" ,poster: "",speaker: "Tiago Santos",creatorId: 4 ,participants: []},
      {id: 2,date: "10-12-2019",name:"MAX",capacity: 30, category: "Seminario" , course: "Tsiw" ,poster: "",speaker: "Ricardo Queirós",creatorId: 7 ,participants: []}

    ],
    users: [
      {id: 1,name: "Jorge",email: "jorge@jorge.com",password: "jorge",course: "tsiw",xp: 2,challenges: [1,3]},
      {id: 2,name: "Mário",email: "mario@mario.com",password: "mario",course: "tsiw",xp: 0,challenges: [1,3]},
      {id: 3,name: "Zé",email: "ze@ze.com",password: "ze",course: "tsiw",xp: 1,challenges: [1,3]},

    ],
    categories: [
      {id: 0,name: "Workshop",},
      {id: 1,name: "Seminario",}
    ],
    courses: [
      {id: 0,name: "Tsiw",},
      {id: 0,name: "Design",}
    ],
    challenges:[{
      id: 1,
      name: "",
      xpQuantity: 0,
      goal: 0,
      completed: false
    }],
    notifications: [{
      id: 0,
      name: "",
      description: ""
    }],
    userId: localStorage.getItem("userLogged")
    
  },
  mutations: {},
  actions: {},
  getters:{
    login: (state) => (userLog) => {
      let confirm = false
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].email == userLog.email && state.users[i].password == userLog.pass) {
          confirm = true
          state.userId = state.users[i].id
          localStorage.setItem('userLogged', state.userId)
        }
        

      }
      return confirm
    },
    signUp: (state) => (createUser) => {
      let msg = ""
      //verificar se existe algum email
      for (let i = 0; i < state.users.length; i++) {
          if(state.users[i].email == createUser.email){
            msg += "Email já existente \n"
          }
      }
      //verificar se existe se as password coicidem
      if(createUser.password != createUser.confirmPass) {
         msg += "Passwords não coicidem \n"
      }
      if(msg == ""){
        let insertUser = {
          id: createUser.id,
          name: createUser.name,
          email: createUser.email,
          password: createUser.password,
          course: createUser.course,
          xp: createUser.xp,
          challenges: createUser.challenges
        }
        state.users.push(insertUser)
        console.log(state.users)
      }

      return msg

    },
    getCourses(state){
      return state.courses
    },
    getEvents(state){
      return state.events
    },
    getUserId(state){
      return state.userId
    },
    getLastId(state){
      let lastId = 0
        if (state.users.length > 0) {
          lastId = state.users[1].userId + 1
          console.log(lastId)
        }
      return lastId
    },
    subscribe: (state) => (subscribeInfo) => {
      let eventToSubscribe
      let result = true
      let alreadySub = false
      for (let i = 0; i < state.events.length; i++) {
        if (state.events[i].id == subscribeInfo.idEvent) {
          eventToSubscribe = i
        }
      }
      for (let i = 0; i < state.events[eventToSubscribe].participants.length; i++) {
        if (state.events[eventToSubscribe].participants[i] == subscribeInfo.idUser) {
          alreadySub = true
          result = false 
        }
      }
      if (!alreadySub) {
        for (let i = 0; i < state.events.length; i++) {
          if(i == eventToSubscribe &&alreadySub == false){
            state.events[i].participants.push(subscribeInfo.idUser)
            alert(state.events[i].participants)
          }
        }
      }
      return result
    },
    getRankingByXp: (state) => (top) => {
      let topTen = state.users.sort(
        function orderByLessAttempts(a, b) {
          if (a.xp > b.xp) return 1;
          if (a.xp < b.xp) return -1;
          else return 0;
        }
      )
      console.log(topTen)
      return topTen.reverse()
    }
    
  },
});
