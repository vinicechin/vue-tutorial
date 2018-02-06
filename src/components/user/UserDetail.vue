<template>
    <div>
      <h3>Some User Details</h3>
      <p>User loaded has ID: {{ $route.params.id }}</p>
      <router-link 
        tag="button" 
        :to="link" 
        class="btn btn-primary">
        Edit User
      </router-link>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        link: {
          name: 'userEdit',
          params: {
            id: this.$route.params.id
          },
          query: {
            locale: 'en',
            q: 100
          },
          hash: '#data'
        }
      }
    },
    beforeRouteEnter(to, from, next) {
      // here we can verify any needed information and load route or stay in the same
      // for example: verify if logged user can access this page
      // cant access 'this' properties because its not been created yet
      // set hardcoded for tests
      if (true) {
        next();
      } else {
        next(false);
      }
    }
  }
</script>
