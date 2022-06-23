<template>
    <div class="container">
        <h3 class="p-3 text-center">TableList</h3>
        <table class="table table-striped table-bordered">
            <thead>
            <tr>
                <th @click="changeType('name')">Name
                    <span v-if="name">
                      <font-awesome-icon :icon="currentIcon" />
                    </span>
                    <span v-if="!name">
                      <font-awesome-icon icon="sort" />
                    </span>
                </th>
                <th @click="changeType('email')">Email
                <span v-if="email">
                      <font-awesome-icon :icon="currentIcon" />
                    </span>
                <span v-if="!email">
                      <font-awesome-icon icon="sort" />
                    </span>
                </th>
                <th @click="changeType('role')">Role
                <span v-if="role">
                      <font-awesome-icon :icon="currentIcon" />
                    </span>
                <span v-if="!role">
                      <font-awesome-icon icon="sort" />
                    </span>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user, index) in users" :key="index">
                <td>{{user.firstName}} {{user.lastName}}</td>
                <td>{{user.email}}</td>
                <td>{{user.role}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
    import { ref,  } from "vue";
    import { sort } from './utils/sortIcon.js';

            let changeName = ref(false);
            let changeEmail = ref(false);
            let changeRole = ref(false);
            let currentIcon = ref("");

    const users  = ref( [
        {firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', role: 'User'},
        {firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', role: 'Admin'},
        {firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin'},
        {firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', role: 'User'},
        {firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', role: 'User'}
    ])

    // console.log(users)
    console.log(users.value)
    console.log(JSON.stringify(users))

    let { sortData } = sort("", users);
    console.log(sortData)
    console.log(sortData.value)

    function changeType(type) {
        changeName.value = type === "name";
        changeEmail.value = type === "email";
        changeRole.value = type === "role";

        let { asc } = sort(type, sortData);
        if (asc.value) {
            console.log("箭頭向上")
            currentIcon.value = "sort-up";
        } else {
            console.log("箭頭向下")
            currentIcon.value = "sort-down";
        }
    }


</script>
<style>
    th {
        cursor: pointer;
    }
</style>