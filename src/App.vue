<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 v-con:@click="setClicked">Directives Exercise</h1>
                <p>{{ text }}</p>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: 'Not clicked',
                cont: 0
            }
        },

        directives: {
            'con': {
                bind(el, binding, vnode) {
                    if (binding.arg == "@click") {
                        el.addEventListener('click', function() {
                            binding.value();
                        });
                    }
                }
            }
        },

        methods: {
            setClicked() {
                this.cont++;
                this.text = "Clicked " + this.cont + " times";
            }
        }
    }
</script>

<style>
</style>
