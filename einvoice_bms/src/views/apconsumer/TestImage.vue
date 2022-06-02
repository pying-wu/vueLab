<template>
    <div class="s-canvas">
        <canvas id="s-canvas" :width="contentWidth" :height="contentHeight" style="margin-bottom: -10%"></canvas>
    </div>
</template>
<script>
    import md5 from 'js-md5'
    import {
        toRefs,
        onMounted,
        watch,
        defineComponent
    } from 'vue'

    export default defineComponent({
        name: 'imageCode',
        props: {
            change: { // 刷新驗證碼使用
                type: Boolean,
                default: false
            },
            contentWidth: { // 驗證碼圖片寬
                type: Number,
                default: 112
            },
            contentHeight: { // 驗證碼圖片高
                type: Number,
                default: 38
            }
        },
        emits: ["getCode"], // 返回驗證碼加密正確值的函數
        setup(props, context) {
            // 默認值
            const defaultData = {
                identifyCode: '', // 驗證碼值，未加密的
                identifyCodes: '1234567890', // 生成證碼值的元素，可以加入字母
                fontSizeMin: 20, // 圖片上驗證文字的最小值
                fontSizeMax: 40, // 圖片上驗證文字的最小值
                backgroundColorMin: 180, // 图片背景色值最小
                backgroundColorMax: 240, // 图片背景色值最大
                colorMin: 50, // 文字色值最小
                colorMax: 160, // 文字色值最大
                lineColorMin: 40, // 干擾線色值最小
                lineColorMax: 120, // 干擾線色值最大
                dotColorMin: 0, // 干擾點色值最小
                dotColorMax: 255, // 干擾點色值最大
                lineSum: 4, // 干擾線數量
                dotSum: 40, // 干擾點數量
            }
            // 父級傳遞
            const {
                contentWidth,
                contentHeight,
                change
            } = toRefs(props)

            // 生成一個隨機數
            const randomNum = (min, max) => {
                return Math.floor(Math.random() * (max - min) + min)
            }

            // 生成一個隨機的颜色
            const randomColor = (min, max) => {
                let r = randomNum(min, max)
                let g = randomNum(min, max)
                let b = randomNum(min, max)
                return 'rgb(' + r + ',' + g + ',' + b + ')'
            }

            // 創建圖形
            const drawPic = () => {
                let canvas = document.getElementById('s-canvas')
                let ctx = canvas.getContext('2d')
                ctx.textBaseline = 'bottom'
                // 繪製背景
                ctx.fillStyle = randomColor(defaultData.backgroundColorMin, defaultData.backgroundColorMax)
                ctx.fillRect(0, 0, contentWidth.value, contentHeight.value)
                // 繪製文字
                for (let i = 0; i < defaultData.identifyCode.length; i++) {
                    drawText(ctx, defaultData.identifyCode[i], i)
                }
                drawLine(ctx)
                drawDot(ctx)
            }

            // 繪製文字
            const drawText = (ctx, txt, i) => {
                ctx.fillStyle = randomColor(defaultData.colorMin, defaultData.colorMax)
                ctx.font = randomNum(defaultData.fontSizeMin, defaultData.fontSizeMax) + 'px SimHei'
                let x = (i + 1) * (contentWidth.value / (defaultData.identifyCode.length + 1))
                let y = randomNum(defaultData.fontSizeMax, contentHeight.value - 5)
                var deg = randomNum(-45, 45)
                // 修改座標原點和旋转角度
                ctx.translate(x, y)
                ctx.rotate(deg * Math.PI / 180)
                ctx.fillText(txt, 0, 0)
                // 恢復座標原點和旋轉角度
                ctx.rotate(-deg * Math.PI / 180)
                ctx.translate(-x, -y)
            }

            // 繪製干擾線
            const drawLine = (ctx) => {
                for (let i = 0; i < 4; i++) {
                    ctx.strokeStyle = randomColor(defaultData.lineColorMin, defaultData.lineColorMax)
                    ctx.beginPath()
                    ctx.moveTo(randomNum(0, contentWidth.value), randomNum(0, contentHeight.value))
                    ctx.lineTo(randomNum(0, contentWidth.value), randomNum(0, contentHeight.value))
                    ctx.stroke()
                }
            }
            // 繪製干擾點
            const drawDot = (ctx) => {
                for (let i = 0; i < 60; i++) {
                    ctx.fillStyle = randomColor(0, 255)
                    ctx.beginPath()
                    ctx.arc(randomNum(0, contentWidth.value), randomNum(0, contentHeight.value), 1, 0, 2 * Math
                        .PI)
                    ctx.fill()
                }
            }

            // 生成圖片
            const makeCode = () => {
                defaultData.identifyCode = "";
                for (let i = 0; i < 4; i++) {
                    defaultData.identifyCode += defaultData.identifyCodes[
                        randomNum(0, defaultData.identifyCodes.length)
                        ];
                }

                // 繪製圖片
                drawPic()
                // 返回加密後的圖片驗證碼值
                context.emit('getCode', md5(defaultData.identifyCode))
            }

            // 初識函數，生成圖片
            onMounted(() => {
                makeCode()
            })

            // 監聽change變化，重新生成圖片
            watch(change, () => {
                makeCode()
            })

        }
    })
</script>