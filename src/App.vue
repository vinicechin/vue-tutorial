<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br><br>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <transition name="slide" type="animation">
                    <div class="alert alert-info" v-show="show">This is some info</div>
                </transition>
                <transition appear enter-active-class="animated bounce" leave-active-class="animated shake">
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">This is some info</div>
                    <div class="alert alert-warning" v-else key="warning">This is some warning</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load = !load">Load / Remove</button>
                <br><br>
                <transition 
                    @before-enter="beforeEnter" 
                    @enter="enter" 
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"

                    @before-leave="beforeLeave" 
                    @leave="leave" 
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false">
                    <div style="width: 100px; height: 100px; background-color: lightgreen" v-if="load">
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                load: true,
                alertAnimation: 'fade'
            }
        },
        methods: {
            beforeEnter(el) {
                console.log('before-enter');
            },
            enter(el, done) {
                console.log('enter');
                done();
            },
            afterEnter(el) {
                console.log('after-enter');
            },
            enterCancelled(el) {
                console.log('enter-cancelled');
            },
            beforeLeave(el) {
                console.log('before-leave');
            },
            leave(el, done) {
                console.log('leave');
                done();
            },
            afterLeave(el) {
                console.log('after-leave');
            },
            leaveCancelled(el) {
                console.log('leave-cancelled');
            }
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave {
        /*opacity: 1; // default value already*/
    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
        /*transform: translateY(20px); // not necessary*/
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity 2s;
    }

    .slide-leave {
        /*not necessary*/
    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 2s;
        opacity: 0;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        } 
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        } 
        to {
            transform: translateY(20px);
        }
    }
</style>
