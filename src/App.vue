<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group"> 
                  <label>Username</label> 
                  <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                  <label>Mail</label>
                  <input type="text" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <button class="btn btn-primary" @click="fetch">Load</button>
                <br><br>
                <ul class="list-group">
                  <li class="list-group-item" v-for="item in users">{{ item.username }} - {{ item.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          user: {
            username: '',
            email: ''
          },
          users: []
        }
      },

      methods: {
        submit() {
          this.$http.post('https://vuejs-http-8f333.firebaseio.com/data.json', this.user)
            .then(response => {
              console.log(response);
            }, error => {
              console.log(error);
            });
        },

        fetch() {
          this.$http.get('https://vuejs-http-8f333.firebaseio.com/data.json')
            .then(response => {
              return response.json();
            })
            .then(data => {
              const array = [];
              for (let key in data) {
                array.push(data[key]);
              }
              this.users = array;
            });
        }
      }
    }
</script>

<style>
</style>
