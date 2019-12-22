<template>
    <div>
        <form @submit.prevent="login()" v-if="showRegister==false">
            <table width="100">
                <tr>
                    <td width="150">Username</td>
                    <td>
                        <input 
                            type="text"
                            v-model="form.username"
                        />
                    </td>
                </tr>
                <tr>
                    <td width="150">Password</td>
                    <td>
                        <input 
                            type="password"
                            v-model="form.userpassword"
                        />
                    </td>
                </tr>
                <tr>
                    <td width="150"></td>
                    <td>
                        <button 
                            type="submit"
                        >
                            Login
                        </button>

                        {{ message }}
                    </td>
                </tr>
            </table>
        </form>

        <form @submit.prevent="register()" v-else>
            Daftar Pengguna
            <!-- Things to do later -->
        </form>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        mounted() {
            axios.get('http://backend.local/api/board').then(res => {
                window.console.log(res.data)
                this.message = res.data.result;
            }).catch(err => {
                window.console.log(err)
            });
        },
        data: () => {
            return {
                showRegister: false,
                message: '',
                form: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            login () {
                window.console.log('username', this.form.username)
                window.console.log('userpassword', this.form.userpassword)
            }
        }
    }
</script>

<style scoped>

</style>