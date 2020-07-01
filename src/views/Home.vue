<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="banner">
      <Banner />
    </div>
    <div class="divider">
      <img src="../assets/divider.png">
    </div>
    <div class="products">
      <div class="product">
        <div class="pro_img hovereffect">
          <img class="img-responsive" src="../assets/home/p01.png">
          <div class="overlay">
            <h2>原味本香&ensp;|&ensp;烟感十足</h2>
            <a class="info" @click="gotoPage"></a>
          </div>
        </div>
      </div>
      <div class="product">
        <div class="pro_img hovereffect">
          <img class="img-responsive" src="../assets/home/p02.png">
          <div class="overlay">
            <h2>超凉薄荷&ensp;|&ensp;冰霜劲爆</h2>
            <a class="info" @click="gotoPage"></a>
          </div>
        </div>
      </div>
      <div class="product">
        <div class="pro_img hovereffect">
          <img class="img-responsive" src="../assets/home/p03.png">
          <div class="overlay">
            <h2>清爽蓝莓&ensp;|&ensp;清新爽口</h2>
            <a class="info" @click="gotoPage"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="divider reversed">
      <img src="../assets/divider.png">
    </div>
    <div class="scene">
      场景抽吸图
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'

export default {
  name: 'Home',
  components: {
    Banner
  },
  methods: {
    gotoPage() {
      this.$router.push('/product')
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
.divider {
  height: 40px;
  padding-top: 50px;
  img {
    height: 100%;
  }
}
.reversed {
  padding-top: 0px;
  padding-bottom: 50px;
  img {
    height: 100%;
    transform: rotate(180deg);
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
    }
  }
  .hovereffect {
    width: 300px;
    float: left;
    overflow: hidden;
    position: relative;
    text-align: center;
    cursor: default;
    .overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      overflow: hidden;
      top: 0;
      left: 0;
      background-color: rgba(75,75,75,0.7);
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
      a {
        cursor: pointer;
      }
    }
    img {
      display: block;
      position: relative;
    }
    h2 {
      text-transform: uppercase;
      color: #fff;
      text-align: center;
      position: relative;
      font-size: 17px;
      padding: 10px;
      background: rgba(0, 0, 0, 0.6);
      -webkit-transform: translateY(45px);
      -ms-transform: translateY(45px);
      transform: translateY(45px);
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }
    .info {
      display: inline-block;
      text-decoration: none;
      padding: 7px 14px;
      text-transform: uppercase;
      color: #fff;
      border: 1px solid #fff;
      background-color: transparent;
      opacity: 0;
      filter: alpha(opacity=0);
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      transform: scale(0);
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
      font-weight: normal;
      margin: -55px 0 0 0;
      padding: 65px 130px;
      &:hover {
        box-shadow: 0 0 5px #fff;
      }
    }
    &:hover {
      .info {
        opacity: 1;
        filter: alpha(opacity=100);
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }
      .overlay {
        background-color: rgba(148, 152, 157, 0.4);
      }
      h2 {
        -webkit-transform: translateY(90px);
        -ms-transform: translateY(90px);
        transform: translateY(90px);
      }
    }
  }
}
.scene{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 380px;
  margin: 0 50px 50px 50px;
  border: 1px solid #fefefe;
  background-color: rgba(148, 152, 157, 0.4);
}
</style>