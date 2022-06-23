<template>
    <div class="container">
        <h3 class="p-3 text-center">TableList</h3>
        <table class="table table-striped table-bordered">
            <thead>
            <tr>
                <th @click="changeType('name')">Name
                    <span v-if="changeName">
                      <font-awesome-icon :icon="currentIcon"></font-awesome-icon>
                    </span>
                    <span v-if="!changeName">
                      <font-awesome-icon icon="sort" />
                    </span>
                </th>
                <th @click="changeType('email')">Email
                    <span v-if="changeEmail">
                      <font-awesome-icon :icon="currentIcon"></font-awesome-icon>
                    </span>
                    <span v-if="!changeEmail">
                      <font-awesome-icon icon="sort" />
                    </span>
                </th>
                <th @click="changeType('role')">Role
                    <span v-if="changeRole">
                      <font-awesome-icon :icon="currentIcon"></font-awesome-icon>
                    </span>
                    <span v-if="!changeRole">
                      <font-awesome-icon icon="sort" />
                    </span>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user, index) in sortData" :key="index">
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.role}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
    import {reactive, ref} from "vue";
    import { sort } from './utils/sortIcon.js';

            let changeName = ref(false);
            let changeEmail = ref(false);
            let changeRole = ref(false);
            let currentIcon = ref("sort");

    const users = reactive( [
        { name: 'Frank Murphy', email: 'frank.murphy@test.com', role: 'User' },
        { name: 'Vic Reynolds', email: 'vic.reynolds@test.com', role: 'Admin' },
        { name: 'Gina Jabowski', email: 'gina.jabowski@test.com', role: 'Admin' },
        { name: 'Jessi Glaser', email: 'jessi.glaser@test.com', role: 'User' },
        { name: 'Jay Bilzerian', email: 'jay.bilzerian@test.com', role: 'User' }
    ])

    let { sortData } = sort("", users);

    function changeType(type) {

        changeName.value = type == "name" ? true : false;
        changeEmail.value = type == "email" ? true : false;
        changeRole.value = type == "role" ? true : false;

        let { asc } = sort(type, users);
        if (asc.value) {
            currentIcon.value = "sort-up";
        } else {
            currentIcon.value = "sort-down";
        }
    }
</script>
<style>
    th {
        cursor: pointer;
    }
</style>