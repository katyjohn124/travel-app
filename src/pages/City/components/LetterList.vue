<template>
  <ul class="list">
    <li class="item" v-for="item of letters" :key="item" :ref="item" @click="handleLetterClick"
      @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
      {{ item }}
    </li>
  </ul>
</template>
  
<script>
export default {
  name: 'LetterList',
  props: {
    cities: Object,
  },
  data() {
    return {
      touchStatus: false,
      timer: null,
      satrtY: 0
    }
  },
  updated() {
    this.startY = this.$refs['A'][0].offsetTop;
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  methods: {
    handleLetterClick(e) {
      //这个e.target.innerText是点击的那个字母，然后传给父组件
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(event) {
      if (this.touchStatus) {
        //设置节流提升代码优化
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = event.touches[0].clientY - 79;
          //console.log(touchY);
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index]);
          }
          //节流优化
        }, 8)
      }
    },
    handleTouchEnd() {
      this.touchStatus = false
    }

  }

}
</script>
  
<style lang="stylus" scoped>
  @import '~@/assets/styles/varibles.styl'
    .list
      display: flex
      flex-direction: column
      justify-content: center
      position: absolute
      top: 1.58rem
      right: 0
      bottom: 0
      width: .4rem
      .item
        line-height: .4rem
        text-align: center
        color: $bgColor
  </style>