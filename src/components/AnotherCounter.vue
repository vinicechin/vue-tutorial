<template>
    <div>
        <button class="btn btn-primary" @click="increment({by: 50, duration: 500})">Increment</button>
        <button class="btn btn-primary" @click="decrement({by: 50, duration: 500})">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import * as types from '../store/types';
    export default {
        methods: {
            ...mapActions({
                increment: types.ACTION_INCREMENT_COUNTER_ASYNC,
                decrement: types.ACTION_DECREMENT_COUNTER_ASYNC
            }),

        }
    }
</script>
