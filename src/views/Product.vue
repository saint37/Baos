<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="banner">
      <BannerPro />
    </div>
    <div class="products">
      <div class="product">
        <div class="pro_img">
          <img src="../assets/products/p3.png">
        </div>
        <div class="info" @mouseenter="changeActive($event)" @mouseleave="removeActive($event)">原味本香&ensp;|&ensp;烟感十足</div>
      </div>
      <div class="product">
        <div class="pro_img">
          <img src="../assets/products/p1.png">
        </div>
        <div class="info" @mouseenter="changeActive($event)" @mouseleave="removeActive($event)">超凉薄荷&ensp;|&ensp;冰霜劲爆</div>
      </div>
      <div class="product">
        <div class="pro_img">
          <img src="../assets/products/p2.png">
        </div>
        <div class="info" @mouseenter="changeActive($event)" @mouseleave="removeActive($event)">清爽蓝莓&ensp;|&ensp;清新爽口</div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerPro from '@/components/BannerPro.vue'

export default {
  components: {
    BannerPro
  },
  methods: {
    changeActive($event){
      $event.currentTarget.className="info animate__animated animate__swing yellow";
    },
    removeActive($event){
      $event.currentTarget.className="info";
    }
  }
}
</script>

<style lang="less" scoped>
.banner {
  line-height: 0;
  height: 500px;
  img {
    width: 100%;
    height: 100%;
  }
}
.products {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 60px 120px;
  .pro_img {
    width: 300px;
    img {
      width: 100%;
      transition-property: all;
      transition-duration: 1s;
      transition-delay: 0s, 1s, 0s;
      border-radius: 0px;
      &:hover {
        border-radius: 90px;
        transform: scale(1.1);
      }
    }
  }
  .info{
    margin-top: 20px;
  }
  .yellow {
    color: #ffd04b;
  }
}
</style>