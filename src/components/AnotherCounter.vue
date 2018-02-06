<template>
    <div>
        <button class="btn btn-primary" @click="increment({by: 50, duration: 500})">Increment</button>
        <button class="btn btn-primary" @click="decrement({by: 50, duration: 500})">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions({
                increment: 'asyncIncrement',
                decrement: 'asyncDecrement'
            }),

        }
    }
</script>
