<template>
    <div>
        <form @submit.prevent="login()">
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
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>