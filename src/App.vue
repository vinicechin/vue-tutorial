<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectComponent">
                  Load Blue Template
                </button>
                <button class="btn btn-success" @click="selectComponent">
                  Load Green Template
                </button>
                <button class="btn btn-danger" @click="selectComponent">
                  Load Red Template
                </button>
                <hr>
                <components :is="compSelected">
                  <p>{{ color }} component</p>
                </components>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
          return {
            compSelected: 'appBlue',
            color: 'Blue'
          }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        methods: {
          selectComponent(event) {
            if (event.target.classList.contains('btn-primary')) {
              this.compSelected = 'appBlue';
              this.color = 'Blue';              
            } else if (event.target.classList.contains('btn-success')) {
              this.compSelected = 'appGreen';
              this.color = 'Green';    
            } else {
              this.compSelected = 'appRed';
              this.color = 'Red';  
            }
          }
        }
    }
</script>

<style>
</style>
