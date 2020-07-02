<template>
    <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
        <div class="slideshow">
            <transition-group tag="ul" name="image">
            <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
                <img :src='img.img'>
            </li>
            </transition-group>
        </div>
         <div class="bar">
            <span v-for="(item, index) in imgArray" :class="{'active':index===mark}"
              @click="change(index)" :key="index"></span>
        </div>    
    </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      timer: null, //定时器
      mark: 0,
      imgArray: [
        {img:require("../assets/banner1.jpg")},
        {img:require("../assets/banner2.jpg")},
      ]
    }
  },
  methods: {
    autoPlay:function () {
      this.mark++;
      if (this.mark === 2) {
        this.mark = 0
      }
    },
    play:function () {
      this.timer = setInterval(this.autoPlay, 4000)
    },
    change:function (i) {
      this.mark = i
    },
    stop:function () {
      clearInterval(this.timer)
    },
    move:function () {
      this.timer = setInterval(this.autoPlay, 4000)
    }
  },
  created () {
    this.play()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .slide {
    width: 100%;
    height: 500px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }
  .slideshow {
    width: 100%;
    height: 500px;
  }
  .slideshow li {
    position: absolute;
  }
  .slideshow img {
    width: 100%;
    height: 500px;
  }
  .bar {
    position: relative;
    width: 100%;
    top: -20px;
    margin: 0 auto;
    z-index: 10;
    text-align: center;
    margin-bottom: 50px;
  }
  .bar span {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: #fefefe;
    display: inline-block;
    margin-right: 10px;
    transition: all 1.5s ease;
  }
  .active {
    width: 80px !important;
    background: #fefefe !important;
  }
  .image-enter-active {
    transform: translateX(0);
    transition: all 2s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 2s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }
</style>