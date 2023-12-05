<template>
    <div>
        <router-link class="header-abs" to="/" v-show="headerShow">
            <div class="iconfont header-abs-back">&#xe6ff;</div>
        </router-link>
        <router-link to="/">
            <div class="header-fixed" v-show="!headerShow" :style="opacityStyle">
                <div class="iconfont header-fixed-back">&#xe6ff;
                </div>
                景点详情
            </div>
        </router-link>

    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data() {
        return {
            headerShow: true,
            //透明度
            opacityStyle: {
                opacity: 0
            }

        }
    },
    methods: {
        handleSrcoll() {
            console.log('scroll');
            const top = document.documentElement.scrollTop;//获取滚动条滚动的距离
            if (top > 60) {
                let opacity = top / 140;//计算透明度
                opacity = opacity > 1 ? 1 : opacity;//透明度最大为1
                //设置透明度
                this.opacityStyle = {
                    opacity
                }
                //显示固定头部
                this.headerShow = false;

            } else {
                //隐藏固定头部
                this.headerShow = true;

            }
        }
    },
    activated() {

        window.addEventListener('scroll', this.handleSrcoll)
    },
    deactivated() {
        //对全局事件进行解绑滚动事件,防止内存泄漏等问题
        window.removeEventListener('scroll', this.handleSrcoll)
    }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .8)
    .header-abs-back
      color: #fff
      font-size: .4rem
  .header-fixed
    z-index:2//设置层级
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>