<template>
    <div>
        <h1 class="tdiv">載具消費發票查詢查詢結果</h1>
    </div>
    <div class="rbox">
        <div v-if="apoption==='手機條碼'">
            載具類型: {{ apoption }}
            <br>
            手機號碼: {{ phonen }}
            <br>
            驗證碼(密碼): {{ testn }}
            <br>
            查詢發票日期起訖: {{ sdate }} ~ {{ edate }}
            <br>
            發票狀態: {{ invoices }}
            <br>
            品名關鍵字: {{ keyw }}
            <br>
            圖形驗證碼: {{ pic }}
        </div>

        <div v-if="cnaturer === '感應卡片' && apoption === '自然人憑證條碼'">
            載具類型: {{ apoption }}
            <br>
            輸入方式: {{ cnaturer }}
            <br>
            憑證PIN碼: {{ naturepin }}
            <br>
            自然人憑證卡號: {{ naturenum }}
            <br>
            查詢發票日期起訖: {{ sdate }} ~ {{ edate }}
            <br>
            發票狀態: {{ invoices }}
            <br>
            品名關鍵字: {{ keyw }}
            <br>
            圖形驗證碼: {{ pic }}
        </div>
        <div v-if="cnaturer === '輸入自然人憑證卡號和自然人憑證條碼密碼' && apoption === '自然人憑證條碼'">
            載具類型: {{ apoption }}
            <br>
            輸入方式: {{ cnaturer }}
            <br>
            自然人憑證卡號: {{ naturecard }}
            <br>
            自然人憑證條碼密碼: {{ naturepwd }}
            <br>
            查詢發票日期起訖: {{ sdate }} ~ {{ edate }}
            <br>
            發票狀態: {{ invoices }}
            <br>
            品名關鍵字: {{ keyw }}
            <br>
            圖形驗證碼: {{ pic }}
        </div>

        <div v-if="easyew === '感應卡片' && apoption === '悠遊卡'">
            載具類型: {{ apoption }}
            <br>
            輸入方式: {{ easyew }}
            <br>
            載具隱碼: {{ easynum }}
            <br>
            查詢發票日期起訖: {{ sdate }} ~ {{ edate }}
            <br>
            發票狀態: {{ invoices }}
            <br>
            品名關鍵字: {{ keyw }}
            <br>
            圖形驗證碼: {{ pic }}
        </div>
        <div v-if="easyew === '輸入卡片內碼和卡片驗證碼' && apoption === '悠遊卡'">
            載具類型: {{ apoption }}
            <br>
            輸入方式: {{ easyew }}
            <br>
            卡片內碼: {{ easycard }}
            <br>
            卡片驗證碼: {{ easyvalid }}
            <br>
            查詢發票日期起訖: {{ sdate }} ~ {{ edate }}
            <br>
            發票狀態: {{ invoices }}
            <br>
            品名關鍵字: {{ keyw }}
            <br>
            圖形驗證碼: {{ pic }}
        </div>

        <div v-if="apoption==='icash'">
            載具類型: {{ apoption }}
            <br>
            輸入方式: {{ icash }}
            <br>
            載具隱碼: {{ icashnum }}
            <br>
            查詢發票日期起訖: {{ sdate }} ~ {{ edate }}
            <br>
            發票狀態: {{ invoices }}
            <br>
            品名關鍵字: {{ keyw }}
            <br>
            圖形驗證碼: {{ pic }}
        </div>

        <div v-if="ipass === '感應卡片' && apoption==='一卡通'">
            載具類型: {{ apoption }}
            <br>
            輸入方式: {{ ipass }}
            <br>
            載具隱碼: {{ ipassnum }}
            <br>
            查詢發票日期起訖: {{ sdate }} ~ {{ edate }}
            <br>
            發票狀態: {{ invoices }}
            <br>
            品名關鍵字: {{ keyw }}
            <br>
            圖形驗證碼: {{ pic }}
        </div>
        <div v-if="ipass === '輸入卡片內碼和卡片驗證碼' && apoption==='一卡通'">
            載具類型: {{ apoption }}
            <br>
            輸入方式: {{ ipass }}
            <br>
            卡片內碼: {{ ipasscard }}
            <br>
            卡片驗證碼: {{ ipassvalid }}
            <br>
            查詢發票日期起訖: {{ sdate }} ~ {{ edate }}
            <br>
            發票狀態: {{ invoices }}
            <br>
            品名關鍵字: {{ keyw }}
            <br>
            圖形驗證碼: {{ pic }}
        </div>

        <div v-if="apoption==='信用卡/簽帳金融卡'">
            載具類型: {{ apoption }}
            <br>
            銀行別: {{ bankNumber }}
            <br>
            卡號: {{ creditcard }}
            <br>
            身分證末4碼: {{ idcard }}
            <br>
            生日4碼: {{ birth }}
            <br>
            查詢發票日期起訖: {{ sdate }} ~ {{ edate }}
            <br>
            發票狀態: {{ invoices }}
            <br>
            品名關鍵字: {{ keyw }}
            <br>
            圖形驗證碼: {{ pic }}
        </div>

        <div v-if="apoption==='註銷載具-悠遊卡'">
            載具類型: {{ apoption }}
            <br>
            卡片內碼: {{ ceasycard }}
            <br>
            卡片驗證碼: {{ ceasyvalid }}
            <br>
            查詢發票日期起訖: {{ sdate }} ~ {{ edate }}
            <br>
            發票狀態: {{ invoices }}
            <br>
            品名關鍵字: {{ keyw }}
            <br>
            圖形驗證碼: {{ pic }}
        </div>

        <div v-if="apoption==='註銷載具-iCash'">
            載具類型: {{ apoption }}
            <br>
            卡片內碼: {{ cicashcard }}
            <br>
            卡片驗證碼: {{ cicashvalid }}
            <br>
            查詢發票日期起訖: {{ sdate }} ~ {{ edate }}
            <br>
            發票狀態: {{ invoices }}
            <br>
            品名關鍵字: {{ keyw }}
            <br>
            圖形驗證碼: {{ pic }}
        </div>

        <div v-if="apoption==='註銷載具-一卡通'">
            載具類型: {{ apoption }}
            <br>
            卡片內碼: {{ cipasscard }}
            <br>
            卡片驗證碼: {{ cipassvalid }}
            <br>
            查詢發票日期起訖: {{ sdate }} ~ {{ edate }}
            <br>
            發票狀態: {{ invoices }}
            <br>
            品名關鍵字: {{ keyw }}
            <br>
            圖形驗證碼: {{ pic }}
        </div>

        <div v-if="apoption==='註銷載具-信用卡/簽帳金融卡'">
            載具類型: {{ apoption }}
            <br>
            卡號: {{ ccredit }}
            <br>
            卡片驗證碼: {{ ccreditvalid }}
            <br>
            查詢發票日期起訖: {{ sdate }} ~ {{ edate }}
            <br>
            發票狀態: {{ invoices }}
            <br>
            品名關鍵字: {{ keyw }}
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
        // onMounted
    } from "vue";

    const route = useRoute()
    let apoption = route.query.apoption
    let phonen = route.query.phonen
    let testn = route.query.testn
    let sdate = route.query.sdate
    let edate = route.query.edate
    let invoices = route.query.invoices
    let keyw = route.query.keyw
    let pic = route.query.pic
    let cnaturer = route.query.cnaturer
    let naturepin = route.query.naturepin
    let naturenum = route.query.naturenum
    let naturecard = route.query.naturecard
    let naturepwd = route.query.naturepwd
    let easyew = route.query.easyew
    let easynum = route.query.easynum
    let easycard = route.query.easycard
    let easyvalid = route.query.easyvalid
    let icash = route.query.icash
    let icashnum = route.query.icashnum
    let ipass = route.query.ipass
    let ipassnum = route.query.ipassnum
    let ipasscard = route.query.ipasscard
    let ipassvalid = route.query.ipassvalid
    let bankNumber = route.query.bankNumber
    let creditcard = route.query.creditcard
    let idcard = route.query.idcard
    let birth = route.query.birth
    let ceasycard = route.query.ceasycard
    let ceasyvalid = route.query.ceasyvalid
    let cicashcard = route.query.cicashcard
    let cicashvalid = route.query.cicashvalid
    let cipasscard = route.query.cipasscard
    let cipassvalid = route.query.cipassvalid
    let ccredit = route.query.ccredit
    let ccreditvalid = route.query.ccreditvalid


    // onMounted(() => {
    //     console.log(apoption)
    // })

</script>