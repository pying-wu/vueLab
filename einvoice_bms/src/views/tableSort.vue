<template>
    <div id="app">
        <table class="table">
            <thead>
            <tr>
                <th>品名</th>
                <th class="click" @click="changeType('price')">價格
                    <!-- isReverse 為反轉 className -->
                    <span class="icon" :class="{'inverse': isReverse}" v-if="sortType == 'price'">
            <i class=" fas fa-angle-up text-success"></i>
          </span>
                </th>
                <th class="click" @click="changeType('expiryDate')">到期日
                    <span class="icon" :class="{'inverse': isReverse}" v-if="sortType == 'expiryDate'">
            <i class=" fas fa-angle-up text-success"></i>
          </span>
                </th>
            </tr>
            <tr v-for="item in sortData" :key="item.price">
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.expiryDate }}</td>
            </tr>
            </thead>
        </table>
    </div>
</template>
<script>
    import {createApp, } from 'vue'

    const app = createApp({
        // data:{
            data() {[
                {
                    name: "巧呼呼蘇打水",
                    price: 30,
                    expiryDate: 90
                },
                {
                    name: "心驚膽跳羊肉飯",
                    price: 65,
                    expiryDate: 2
                },
                {
                    name: "郭師傅武功麵包",
                    price: 32,
                    expiryDate: 1
                },
                {
                    name: "不太會過期的新鮮牛奶",
                    price: 75,
                    expiryDate: 600
                },
                {
                    name: "金殺 巧粒粒",
                    price: 120,
                    expiryDate: 200
                }
            ]},
        sortType:  "price",
        isReverse: false

    });
      app.mount('#app')

        // 請在此撰寫 JavaScript
             function changeType(type) {
                var vm = this;
                if (vm.sortType === type) {
                    vm.isReverse = !vm.isReverse;
                } else {
                    vm.isReverse = false;
                }
                vm.sortType = type;
                sortData();
            }


            function sortData() {
                var vm = this;
                var type = vm.sortType;
                return vm.data.sort(function (a, b) {
                    if (vm.isReverse) return b[type] - a[type];
                    else return a[type] - b[type];
                });
            }


</script>
<style>
    .click {
        cursor: pointer }
    .icon {
        font-size: 20px;
        color: green }
    .isReverse i {
        transform: rotate(180deg) }

</style>