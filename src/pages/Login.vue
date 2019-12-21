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
    export default {
        data: () => {
            return {
                showRegister: false,
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