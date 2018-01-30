<template>
    <div class="container">
        <form>
            <div class="row" v-show="!isSubmitted">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->


                    <h2>
                        Registration Form
                    </h2>
                    <!-- <div class="form-group">
                        <label for="fisrtname">First Name</label>
                        <input type="text" id="firstname" class="form-control" v-model="userData.firstname">
                    </div>
                    <div class="form-group">
                        <label for="lastname">Last Name</label>
                        <input type="text" id="lastname" class="form-control" v-model="userData.lastname">
                    </div> -->
                    <fullname v-model="userData.fullName"></fullname>
                    <div class="form-group">
                        <label for="mail">Mail</label>
                        <input type="text" id="mail" class="form-control" v-model="userData.mail">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" class="form-control" v-model="userData.password">
                    </div>
                    <div class="form-group">
                        <label>Store in Database?</label>
                        <br>
                        <label for="storeYes">
                            <input type="radio" id="storeYes" value=true v-model="isStore">
                            Yes
                        </label>
                        <label for="storeNo">
                            <input type="radio" id="storeNo" value=false v-model="isStore">
                            No
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary" @click.prevent="submitForm">Submit</button>
                </div>
            </div>
        </form>
        <div class="row" v-show="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.fullName }}</p>
                        <p>Mail: {{ userData.mail }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ isStore }}</p>
                    </div>
                </div>
                <button class="btn btn-primary" @click.prevent="backToForm">Back</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Fullname from './Fullname.vue';

    export default {
        data() {
            return {
                userData: {
                    fullName: '',
                    mail: '',
                    password: ''
                },
                isStore: false,
                isSubmitted: false
            }
        },

        methods: {
            submitForm() {
                this.isSubmitted = true;
            },
            backToForm() {
                this.isSubmitted = false;
            }
        },

        components: {
            'fullname': Fullname
        }
    }
</script>

<style>
</style>
