<template>
    <div class="container">
        <h1 class="text-primary">Board</h1>
        <div v-if="pid == 'default'">
            <table class="table table-collapse table-hover">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Creator</th>
                        <th>Board Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(data, i) in daftar_board" v-bind:key="data.id">
                        <td>{{ i+1 }}</td>
                        <td>{{ data.creator_id }}</td>
                        <td>{{ data.name }}</td>
                        <td>
                            <a @click="show('edit', data)" class="text-success"><i class="fa fa-pencil"></i> Edit</a>
                            <a @click="deleteBoard(data.id)" class="text-danger"><i class="fa fa-trash"></i> Hapus</a> 
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />
            
            <a @click="show('create')" class="text-info"><i class="fa fa-chevron-right"></i> Tambah </a>
        </div>

        <div v-if="pid == 'create'" >
            <form method="POST" @submit.prevent="saveData">
                <table class="table table-collapse table-hover">
                    <tr>
                        <td width="150">
                            Creator
                        </td>
                        <td>
                            <select v-model="form.creator_id" class="form-control">
                                <option value="" disabled selected>Choose Creator</option>
                                <option  v-for="item in daftar_creator" v-bind:key="item.id" :value="item.id">
                                    {{  item.name }}
                                </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Name
                        </td>
                        <td>
                            <input v-model="form.name" class="form-control">                                
                        </td>
                    </tr>
                </table>

                <button type="submit" class="btn btn-success btn-lg"><i class="fa fa-save"></i> Save</button>
                <button type="button" class="btn btn-danger btn-lg" @click="reset()"><i class="fa fa-trash"></i> Reset</button>
                
                <hr />

                <a @click="show('default')" class="text-warning"><i class="fa fa-chevron-left"></i> Kembali</a>
            </form>
        </div>

        <div v-if="pid == 'edit'" >
            <form method="POST" @submit.prevent="editData">
                <table class="table table-collapse table-hover">
                    <tr>
                        <td width="150">
                            Creator
                        </td>
                        <td>
                            <select v-model="form.creator_id" class="form-control">
                                <option value="" disabled selected>Choose Creator</option>
                                <option  v-for="item in daftar_creator" v-bind:key="item.id" :value="item.id">
                                    {{  item.name }}
                                </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Name
                        </td>
                        <td>
                            <input v-model="form.name" class="form-control">                                
                        </td>
                    </tr>
                </table>

                <button type="submit" class="btn btn-success btn-lg"><i class="fa fa-save"></i> Save</button>
                <button type="button" class="btn btn-danger btn-lg" @click="reset()"><i class="fa fa-trash"></i> Reset</button>
                
                <hr />

                <a @click="show('default')" class="text-warning"><i class="fa fa-chevron-left"></i> Kembali</a>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
// import BoardView from '../components/BoardView'

export default {
    mounted() {
        this.fetchBoards()
    },
    data: () => {
        return {
            pid: 'default',
            daftar_creator: [],
            daftar_board: [],
            form: {
                id: '',
                creator_id: '',
                name: ''
            }
        }
    },
    methods: {
        fetchBoards() {
            axios.get("http://backend.local/api/board")
            .then(res => {
                 this.daftar_board = res.data.result
            })
        },
        fetchCreator()
        {
            axios.get("http://backend.local/api/users")
            .then(res => {
                this.daftar_creator = res.data
            }).catch(err => window.console.log(err));
        },
        show(pid, item) {
            switch (pid) {
                case 'create' : this.pid = 'create';
                                this.fetchCreator();
                                break;

                case 'edit' :   this.pid = 'edit';
                                this.fetchCreator();
                                this.form.creator_id = item.creator_id;
                                this.form.name = item.name;
                                this.form.id = item.id;
                                break;

                default :       this.pid = 'default';
                                this.fetchBoards();
                                break;
            }
        },
        saveData() {
            axios.post("http://backend.local/api/board", {
                'creator_id': this.form.creator_id,
                'name': this.form.name
            }).then(res => {
                window.console.log(res.data.result)
                this.fetchBoards();
                this.show('default');
            }).catch(err => {
                window.console.log(err)
            })


            this.reset();

        },
        editData() {
            axios.put("http://backend.local/api/board/" + this.form.id, {
                'creator_id': this.form.creator_id,
                'name': this.form.name
            }).then(res => {
                window.console.log(res)
                this.fetchBoards();
                this.show('default');
    
                this.reset();
            }).catch(err => {
                window.console.log(err)
            });

        },
        reset()
        {
            this.form.creator_id = '',
            this.form.name       = ''
        },
        deleteBoard(id) {
            if (window.confirm('Yakin menghapus?')) {
                axios.delete("http://backend.local/api/board/" + id)
                .then(() => {

                    this.fetchBoards();
                    this.show('default');
                }).catch(err => {
                    window.console.log(err);
                    alert('Tidak dapat menghapus data')
                })
            }
        }
    }

}
</script>

<style scoped>
a {
    margin: 10px;
}
</style>
