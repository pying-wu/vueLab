<template>
    <div>
        <h1 class="tdiv">載具中獎發票查詢結果</h1>
    </div>
    <div class="rbox">
        <div v-if="apoption==='手機條碼'" style="margin-left: 35%">
            載具類型: {{ apoption }}
            <br>
            手機號碼: {{ phonen }}
            <br>
            驗證碼(密碼): {{ testn }}
            <br>
            發票期別: {{ invoice }}
            <br>
            圖形驗證碼: {{ pic }}
        </div>

        <div v-if="apoption==='自然人憑證條碼'" style="margin-left: 35%">
            載具類型: {{ apoption }}
            <br>
            手機號碼: {{ phonen }}
            <br>
            驗證碼(密碼): {{ testn }}
            <br>
            發票期別: {{ invoice }}
            <br>
            圖形驗證碼: {{ pic }}
        </div>

        <div v-if="apoption==='悠遊卡'" style="margin-left: 35%">
            載具類型: {{ apoption }}
            <br>
            手機號碼: {{ phonen }}
            <br>
            驗證碼(密碼): {{ testn }}
            <br>
            發票期別: {{ invoice }}
            <br>
            圖形驗證碼: {{ pic }}
        </div>

        <div v-if="apoption==='icash'" style="margin-left: 35%">
            載具類型: {{ apoption }}
            <br>
            手機號碼: {{ phonen }}
            <br>
            驗證碼(密碼): {{ testn }}
            <br>
            發票期別: {{ invoice }}
            <br>
            圖形驗證碼: {{ pic }}
        </div>

        <div v-if="apoption==='一卡通'" style="margin-left: 35%">
            載具類型: {{ apoption }}
            <br>
            手機號碼: {{ phonen }}
            <br>
            驗證碼(密碼): {{ testn }}
            <br>
            發票期別: {{ invoice }}
            <br>
            圖形驗證碼: {{ pic }}
        </div>

        <div v-if="apoption==='信用卡/簽帳金融卡'" style="margin-left: 35%">
            載具類型: {{ apoption }}
            <br>
            手機號碼: {{ phonen }}
            <br>
            驗證碼(密碼): {{ testn }}
            <br>
            發票期別: {{ invoice }}
            <br>
            圖形驗證碼: {{ pic }}
        </div>

        <div v-if="apoption==='註銷載具-悠遊卡'" style="margin-left: 35%">
            載具類型: {{ apoption }}
            <br>
            手機號碼: {{ phonen }}
            <br>
            驗證碼(密碼): {{ testn }}
            <br>
            發票期別: {{ invoice }}
            <br>
            圖形驗證碼: {{ pic }}
        </div>

        <div v-if="apoption==='註銷載具-icash'" style="margin-left: 35%">
            載具類型: {{ apoption }}
            <br>
            手機號碼: {{ phonen }}
            <br>
            驗證碼(密碼): {{ testn }}
            <br>
            發票期別: {{ invoice }}
            <br>
            圖形驗證碼: {{ pic }}
        </div>

        <div v-if="apoption==='註銷載具-一卡通'" style="margin-left: 35%">
            載具類型: {{ apoption }}
            <br>
            手機號碼: {{ phonen }}
            <br>
            驗證碼(密碼): {{ testn }}
            <br>
            發票期別: {{ invoice }}
            <br>
            圖形驗證碼: {{ pic }}
        </div>

        <div v-if="apoption==='註銷載具-信用卡/簽帳金融卡'" style="margin-left: 35%">
            載具類型: {{ apoption }}
            <br>
            手機號碼: {{ phonen }}
            <br>
            驗證碼(密碼): {{ testn }}
            <br>
            發票期別: {{ invoice }}
            <br>
            圖形驗證碼: {{ pic }}
        </div>


    </div>
</template>

<script setup>
    import {
        useRoute
    } from 'vue-router';
    import {
        onMounted
    } from "vue";

    const route = useRoute()
    let apoption = route.query.apoption
    let phonen = route.query.phonen
    let testn = route.query.testn
    let invoice = route.query.invoice
    let pic = route.query.pic
    // let cnaturer = route.query.cnaturer
    // let naturepin = route.query.naturepin
    // let naturenum = route.query.naturenum
    // let naturecard  = route.query.naturecard
    // let naturepwd  = route.query.naturepwd
    // let easyew  = route.query.easyew
    // let easynum  = route.query.easynum
    // let easycard  = route.query.easycard
    // let easyvalid  = route.query.easyvalid

    //2022/06/02進度做到悠遊卡


    onMounted(() => {
        console.log(apoption)
    })

</script>