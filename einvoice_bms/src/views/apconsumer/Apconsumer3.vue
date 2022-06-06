<template>
    <div>
        <h1 style="text-align: center"> 載具中獎通知設定</h1>
    </div>
    <div class="tdiv">
        <p>
            <span class="redstar">*</span>
            為必填(選)欄位，不能為空白
        </p>
    </div>
    <div class="cbox">
        <div>
            <label class="col-sm-3 control-label " style="text-align:right">
                <span class="redstar">*</span>
                載具類型
            </label>
            <select class="rdiv" v-model="apoption" id="apoption">
                <option>手機條碼</option>
                <option>自然人憑證條碼</option>
                <option>悠遊卡</option>
                <option>icash</option>
                <option>一卡通</option>
                <option>信用卡/簽帳金融卡</option>
            </select>
        </div>
        <!--    選擇手機條碼-->
        <div id="cphone1" v-if="apoption === '手機條碼'">
            <label class="col-sm-3 control-label" style="text-align:right">
                <span class="redstar">*</span>
                手機號碼
            </label>
            <input class="rdiv" v-model="phonen">
        </div>
        <div id="cphone2" v-if="apoption === '手機條碼'">
            <label class="col-sm-3 control-label" style="text-align:right">
                <span class="redstar">*</span>
                驗證碼(密碼)
            </label>
            <input class="rdiv" v-model="testn">
        </div>
        <!--    選擇自然人憑證條碼-->
        <div class="radio" v-if="apoption === '自然人憑證條碼'"><label for="cnaturer1">
            <input type="radio" name="cnaturer" id="cnaturer1" value="感應卡片" v-model="cnaturer">
            感應卡片
            <small> (需安裝使用晶片式讀卡機，以取得該票卡之卡號)</small>
        </label>
        </div>
        <div class="radio" v-if="apoption === '自然人憑證條碼'"><label for="cnaturer2">
            <input type="radio" name="cnaturer" id="cnaturer2" value="輸入自然人憑證卡號和自然人憑證條碼密碼" v-model="cnaturer">
            <span>輸入自然人憑證卡號和自然人憑證條碼密碼</span>
            <small> (請至超商多媒體機感應自然人憑證，以取得該票卡之自然人憑證卡號及自然人憑證條碼密碼)</small>
        </label>
        </div>
        <!--    選擇自然人憑證條碼 >> 感應卡片 -->
        <div v-if="cnaturer === '感應卡片' && apoption === '自然人憑證條碼'">
            <label class="col-sm-3 control-label" style="text-align:right">
                <span class="redstar">*</span>
                憑證PIN碼</label>
            <input class="rdiv" v-model="naturepin">

        </div>
        <div v-if="cnaturer === '感應卡片' && apoption === '自然人憑證條碼'">
            <label class="col-sm-3 control-label" style="text-align:right">
                <span class="redstar">*</span>
                自然人憑證卡號</label>
            <input disabled class="rdiv" v-model="naturenum" >

        </div>

        <!--    選擇自然人憑證條碼 >> 輸入卡號密碼 -->
        <div v-if="cnaturer === '輸入自然人憑證卡號和自然人憑證條碼密碼' && apoption === '自然人憑證條碼'">
            <label class="col-sm-3 control-label" style="text-align:right">
                <span class="redstar">*</span>
                自然人憑證卡號</label>
            <input class="rdiv" v-model="naturecard">

        </div>
        <div v-if="cnaturer === '輸入自然人憑證卡號和自然人憑證條碼密碼' && apoption === '自然人憑證條碼'">
            <label class="col-sm-3 control-label" style="text-align:right">
                <span class="redstar">*</span>
                自然人憑證條碼密碼</label>
            <input class="rdiv" v-model="naturepwd">

        </div>
        <!--    選擇悠遊卡-->
        <div class="radio" v-if="apoption === '悠遊卡'"><label for="easy1">
            <input type="radio" name="easyew" value="感應卡片" id="easy1" v-model="easyew">
            感應卡片
            <small> 讀卡元件僅能在Microsoft Internet Explorer上執行</small>
        </label>
        </div>
        <div class="radio" v-if="apoption === '悠遊卡'"><label for="easy2">
            <input type="radio" name="easyew" value="輸入卡片內碼和卡片驗證碼" id="easy2" v-model="easyew">
            輸入卡片內碼和卡片驗證碼
            <small> (請至超商多媒體機感應悠遊卡，以取得該票卡之卡片內碼及卡片驗證碼)</small>
        </label>
        </div>
        <!--    選擇悠遊卡 >> 感應卡片-->
        <div v-if="easyew === '感應卡片' && apoption === '悠遊卡'">
            <label class="col-sm-3 control-label" style="text-align:right">
                <span class="redstar">*</span>
                載具隱碼</label>
            <input disabled class="rdiv" v-model="easynum">
        </div>
        <!--    選擇悠遊卡 >> 輸入卡片內碼及驗證碼-->
        <div v-if="easyew === '輸入卡片內碼和卡片驗證碼' && apoption === '悠遊卡'">
            <label class="col-sm-3 control-label" style="text-align:right">
                <span class="redstar">*</span>
                卡片內碼</label>
            <input class="rdiv" v-model="easycard">
        </div>
        <div v-if="easyew === '輸入卡片內碼和卡片驗證碼' && apoption === '悠遊卡'">
            <label class="col-sm-3 control-label" style="text-align:right">
                <span class="redstar">*</span>
                卡片驗證碼</label>
            <input class="rdiv" v-model="easyvalid">
        </div>
        <!--    選擇icash  -->
        <div class="radio" v-if="apoption === 'icash'">
            <label for="icash">
                <input type="radio" value="感應卡片" name="icash" id="icash" v-model="icash" checked>
                感應卡片
                <small> 讀卡元件僅能在Microsoft Internet Explorer上執行</small>
            </label>
        </div>
        <div v-if="apoption === 'icash'">
            <label class="col-sm-3 control-label" style="text-align:right">
                <span class="redstar">*</span>
                載具隱碼</label>
            <input disabled class="rdiv" v-model="icashnum">
        </div>
        <!--    選擇一卡通-->
        <div class="radio" v-if="apoption === '一卡通'"><label for="ipass1">
            <input type="radio" name="ipass" value="感應卡片" id="ipass1" v-model="ipass">
            感應卡片
            <small> 讀卡元件僅能在Microsoft Internet Explorer上執行</small>
        </label>
        </div>
        <div class="radio" v-if="apoption === '一卡通'"><label for="ipass2">
            <input type="radio" name="ipass" value="輸入卡片內碼和卡片驗證碼" id="ipass2" v-model="ipass">
            輸入卡片內碼和卡片驗證碼
            <small> (請至超商多媒體機感應一卡通，以取得該票卡之卡片內碼及卡片驗證碼)</small>
        </label>
        </div>
        <!--    選擇一卡通 >> 感應卡片-->
        <div v-if="ipass === '感應卡片' && apoption === '一卡通'">
            <label class="col-sm-3 control-label" style="text-align:right">
                <span class="redstar">*</span>
                載具隱碼</label>
            <input disabled class="rdiv" v-model="ipassnum">
        </div>
        <!--    選擇一卡通 >> 輸入卡片內碼及驗證碼-->
        <div v-if="ipass === '輸入卡片內碼和卡片驗證碼' && apoption === '一卡通'">
            <label class="col-sm-3 control-label" style="text-align:right">
                <span class="redstar">*</span>
                卡片內碼</label>
            <input class="rdiv" v-model="ipasscard">
        </div>
        <div v-if="ipass === '輸入卡片內碼和卡片驗證碼' && apoption === '一卡通'">
            <label class="col-sm-3 control-label" style="text-align:right">
                <span class="redstar">*</span>
                卡片驗證碼</label>
            <input class="rdiv" v-model="ipassvalid">
        </div>
        <!--    選擇信用卡/簽帳金融卡  -->
        <div v-if="apoption === '信用卡/簽帳金融卡'">
            <label class="col-sm-3 control-label" style="text-align:right">
                <span class="redstar">*</span>
                銀行別</label>
            <select id="bankNumber"
                    class="rdiv" v-model="bankNumber">
                <option selected="selected">選擇銀行別</option>
                <option>004臺灣銀行</option>
                <option>005臺灣土地銀行</option>
                <option>006合作金庫商業銀行</option>
                <option>007第一商業銀行</option>
                <option>008華南商業銀行</option>
                <option>009彰化商業銀行</option>
                <option>011上海商業儲蓄銀行</option>
                <option>012台北富邦商業銀行</option>
                <option>013國泰世華商業銀行</option>
                <option>016高雄銀行</option>
                <option>017兆豐國際商業銀行</option>
                <option>050臺灣中小企業銀行</option>
                <option>053台中商業銀行總行</option>
                <option>102華泰商業銀行</option>
                <option>103臺灣新光商業銀行</option>
                <option>108陽信商業銀行</option>
                <option>147三信商業銀行</option>
                <option>700中華郵政股份有限公司</option>
                <option>803聯邦商業銀行</option>
                <option>805遠東國際商業銀行</option>
                <option>807永豐商業銀行</option>
                <option>808玉山商業銀行</option>
                <option>812台新國際商業銀行</option>
                <option>815日盛國際商業銀行</option>
                <option>822中國信託商業銀行</option>
            </select>
            <a class="btn btn-primary etooltip" target="_blank" title="信用卡存發票好康專區" copied="信用卡存發票好康專區"
               href="https://www.einvoice.nat.gov.tw/ein_upload/html/ESQ/ESQ501W.html#tab2" style="height: 29px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="27" fill="currentColor"
                     class="bi bi-info-circle" viewBox="0 0 16 16" style="padding-bottom: 50%;">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                <span class="glyphicon glyphicon-info-sign"></span>
            </a>
        </div>

        <div v-if="apoption === '信用卡/簽帳金融卡'">
            <label class="col-sm-3 control-label" style="text-align:right">
                <span class="redstar">*</span>
                卡號</label>
            <input class="rdiv" v-model="creditcard">
        </div>
        <div v-if="apoption === '信用卡/簽帳金融卡'">
            <label class="col-sm-3 control-label" style="text-align:right">
                <span class="redstar">*</span>
                身分證末4碼</label>
            <input class="rdiv" v-model="idcard">
        </div>
        <div v-if="apoption === '信用卡/簽帳金融卡'">
            <label class="col-sm-3 control-label" style="text-align:right">
                <span class="redstar">*</span>
                生日4碼</label>
            <input class="rdiv" v-model="birth">
        </div>

        <div>
            <label class="col-sm-3 control-label" style="text-align:right">
                <span class="redstar">*</span>
                圖形驗證碼
            </label>
            <input class="rdiv" v-model="pic">
            <image-code title="點擊切換驗證碼" :change="data.change_img_code" @click="changeImageCode" @getCode="backImageCode"
                        style="display: inline-block; cursor: pointer"></image-code>
        </div>
        <div style="margin-left: 18%; margin-top: 5%">
            <button class="cbutton" @click="checkValue()">查詢</button>
            <button class="cbutton" @click="empty()">清除</button>
        </div>
    </div>

</template>

<script setup>
    import {
        ref,
        reactive,
    } from 'vue';

    import imageCode from './TestImage.vue';
    import {useRouter} from "vue-router";

    const apoption = ref('手機條碼');
    const phonen = ref();
    const testn = ref();

    const cnaturer = ref('輸入自然人憑證卡號和自然人憑證條碼密碼');
    const naturepin = ref();
    const naturenum = ref();
    const naturecard = ref();
    const naturepwd = ref();

    const easyew = ref('輸入卡片內碼和卡片驗證碼');
    const easynum = ref();
    const easycard = ref();
    const easyvalid = ref();

    const icash = ref('感應卡片');
    const icashnum = ref();

    const ipass = ref('輸入卡片內碼和卡片驗證碼');
    const ipassnum = ref();
    const ipasscard = ref();
    const ipassvalid = ref();

    const bankNumber = ref('選擇銀行別');
    const creditcard = ref();
    const idcard = ref();
    const birth = ref();

    const pic = ref();
    const router = useRouter()

    function checkValue() {
        var numReg = /^[0-9]{10}$/
        var checkNum = new RegExp(numReg)
        // 檢核手機條碼欄位
        if (apoption.value === '手機條碼') {
            console.log("檢查到選擇手機條碼")
            if (checkNum.test(phonen.value)) {
                if (testn.value !== undefined && testn.value !== '') {
                    if (pic.value === data.img_code) {
                        router.push({
                            path: '/apresult/3',
                            query: {
                                apoption: apoption.value,
                                phonen: phonen.value,
                                testn: testn.value,
                                pic: pic.value
                            }
                        })
                    } else {
                        alert("圖形驗證碼錯誤!")
                    }
                } else {
                    alert("驗證碼不得為空!")
                }
            } else {
                alert("手機號碼不得為空且須為10位數字!")
            }
        }
        // 檢核自然人憑證條碼欄位--感應卡片
        if (apoption.value === '自然人憑證條碼' && cnaturer.value === '感應卡片') {
            console.log("檢查到選擇自然人憑證條碼+感應卡片")
            if (naturepin.value !== undefined && naturepin.value !== '') {
                // if (naturenum.value !== undefined && naturenum.value !== '') {
                if (pic.value === data.img_code) {
                    router.push({
                        path: '/apresult/3',
                        query: {
                            apoption: apoption.value,
                            cnaturer: cnaturer.value,
                            naturepin: naturepin.value,
                            naturenum: naturenum.value,
                            pic: pic.value
                        }
                    })
                } else {
                    alert("圖形驗證碼錯誤!")
                }
                // } else {
                //     alert("自然人憑證卡號不得為空!")
                // }
            } else {
                alert("憑證PIN碼不得為空!")
            }
        }
        // 檢核自然人憑證條碼欄位--輸入卡號密碼
        if (apoption.value === '自然人憑證條碼' && cnaturer.value === '輸入自然人憑證卡號和自然人憑證條碼密碼') {
            console.log("檢查到選擇自然人憑證條碼+輸入自然人憑證卡號和自然人憑證條碼密碼")
            if (naturecard.value !== undefined && naturecard.value !== '') {
                if (naturepwd.value !== undefined && naturepwd.value !== '') {
                    if (pic.value === data.img_code) {
                        router.push({
                            path: '/apresult/3',
                            query: {
                                apoption: apoption.value,
                                cnaturer: cnaturer.value,
                                naturecard: naturecard.value,
                                naturepwd: naturepwd.value,
                                pic: pic.value
                            }
                        })
                    } else {
                        alert("圖形驗證碼錯誤!")
                    }
                } else {
                    alert("自然人憑證條碼密碼不得為空!")
                }
            } else {
                alert("自然人憑證卡號不得為空!")
            }
        }
        // 檢核悠遊卡--感應卡片
        if (apoption.value === '悠遊卡' && easyew.value === '感應卡片') {
            console.log("檢查到悠遊卡+感應卡片")
            // if (easynum.value !== '') {
            if (pic.value === data.img_code) {
                router.push({
                    path: '/apresult/3',
                    query: {
                        apoption: apoption.value,
                        easyew: easyew.value,
                        easynum: easynum.value,
                        pic: pic.value
                    }
                })
            } else {
                alert("圖形驗證碼錯誤!")
            }
            // } else {
            //     alert("載具隱碼不得為空!")
            // }
        }
        // 檢核悠遊卡--輸入卡片內碼和卡片驗證碼
        if (apoption.value === '悠遊卡' && easyew.value === '輸入卡片內碼和卡片驗證碼') {
            console.log("檢查到選擇悠遊卡+輸入卡片內碼和卡片驗證碼")
            if (easycard.value !== undefined && easycard.value !== '') {
                if (easyvalid.value !== undefined && easyvalid.value !== '') {
                    if (pic.value === data.img_code) {
                        router.push({
                            path: '/apresult/3',
                            query: {
                                apoption: apoption.value,
                                easyew: easyew.value,
                                easycard: easycard.value,
                                easyvalid: easyvalid.value,
                                pic: pic.value
                            }
                        })
                    } else {
                        alert("圖形驗證碼錯誤!")
                    }
                } else {
                    alert("卡片驗證碼不得為空!")
                }
            } else {
                alert("卡片內碼不得為空!")
            }
        }
        // 檢核icash
        if (apoption.value === 'icash') {
            console.log("檢查到icash")
            // if (icashnum.value !== '') {
            if (pic.value === data.img_code) {
                router.push({
                    path: '/apresult/3',
                    query: {
                        apoption: apoption.value,
                        icash: icash.value,
                        icashnum: icashnum.value,
                        pic: pic.value
                    }
                })
            } else {
                alert("圖形驗證碼錯誤!")
            }
            // } else {
            //     alert("載具隱碼不得為空!")
            // }
        }
        // 檢核一卡通--感應卡片
        if (apoption.value === '一卡通' && ipass.value === '感應卡片') {
            console.log("檢查到一卡通+感應卡片")
            // if (ipassnum.value !== '') {
            if (pic.value === data.img_code) {
                router.push({
                    path: '/apresult/3',
                    query: {
                        apoption: apoption.value,
                        ipass: ipass.value,
                        ipassnum: ipassnum.value,
                        pic: pic.value
                    }
                })
            } else {
                alert("圖形驗證碼錯誤!")
            }
            // } else {
            //     alert("載具隱碼不得為空!")
            // }
        }
        // 檢核一卡通--輸入卡片內碼和卡片驗證碼
        if (apoption.value === '一卡通' && ipass.value === '輸入卡片內碼和卡片驗證碼') {
            console.log("檢查到選擇一卡通+輸入卡片內碼和卡片驗證碼")
            if (ipasscard.value !== undefined && easycard.value !== '') {
                if (ipassvalid.value !== undefined && easyvalid.value !== '') {
                    if (pic.value === data.img_code) {
                        router.push({
                            path: '/apresult/3',
                            query: {
                                apoption: apoption.value,
                                ipass: ipass.value,
                                ipasscard: ipasscard.value,
                                ipassvalid: ipassvalid.value,
                                pic: pic.value
                            }
                        })
                    } else {
                        alert("圖形驗證碼錯誤!")
                    }
                } else {
                    alert("卡片驗證碼不得為空!")
                }
            } else {
                alert("卡片內碼不得為空!")
            }
        }
        var numRegc = /^[0-9]{4}$/
        var checkNumc = new RegExp(numRegc)

        // 檢核信用卡/簽帳金融卡
        if (apoption.value === '信用卡/簽帳金融卡') {
            console.log("檢查到選擇信用卡/簽帳金融卡")
            if (bankNumber.value !== '選擇銀行別') {
                if (creditcard.value !== undefined && creditcard.value !== '') {
                    if (idcard.value !== undefined && idcard.value !== '' && checkNumc.test(idcard.value)) {
                        if (birth.value !== undefined && birth.value !== '' && checkNumc.test(birth.value)) {
                            if (pic.value === data.img_code) {
                                router.push({
                                    path: '/apresult/3',
                                    query: {
                                        apoption: apoption.value,
                                        bankNumber: bankNumber.value,
                                        creditcard: creditcard.value,
                                        idcard: idcard.value,
                                        birth: birth.value,
                                        pic: pic.value
                                    }
                                })
                            } else {
                                alert("圖形驗證碼錯誤!")
                            }
                        } else {
                            alert("生日4碼不得為空且須為4位數字!")
                        }
                    } else {
                        alert("身分證末4碼不得為空且須為4位數字!")
                    }
                } else {
                    alert("卡號不得為空!")
                }
            } else {
                alert("請選擇銀行別!")
            }
        }
    }

    function empty() {
        this.apoption = '手機條碼';
        this.phonen = '';
        this.testn = '';
        this.cnaturer = '輸入自然人憑證卡號和自然人憑證條碼密碼';
        this.naturepin = '';
        this.naturenum = '';
        this.naturecard = '';
        this.naturepwd = '';
        this.easyew = '輸入卡片內碼和卡片驗證碼';
        this.easynum = '';
        this.easycard = '';
        this.easyvalid = '';
        this.icash = ref('感應卡片');
        this.icashnum = '';
        this.ipass = '輸入卡片內碼和卡片驗證碼';
        this.ipassnum = '';
        this.ipasscard = '';
        this.ipassvalid = '';
        this.bankNumber = '選擇銀行別';
        this.creditcard = '';
        this.idcard = '';
        this.birth = '';

        this.pic = '';
    }

    const data = reactive({
        change_img_code: false, // 刷新驗證碼
        img_code: '',// 加密後的驗證碼值
    })

    // 刷新驗證碼操作
    const changeImageCode = () => {
        data.change_img_code = !data.change_img_code
    }

    // 接收组件返回加密後驗證碼值
    const backImageCode = (code) => {
        data.img_code = code
        console.log('圖形驗證碼:', data.img_code)
    }

</script>
<style scoped>
</style>