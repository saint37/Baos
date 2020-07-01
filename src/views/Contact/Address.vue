<template>
  <div class="about">
    <div class="banner">
      <img alt="Vue logo" src="../../assets/banner1.jpg">
    </div>
    <div class="company_intro">
      <el-row>
        <el-col :span="12">
          <div class="add_img" @mouseenter="changeActive($event)" @mouseleave="removeActive($event)">
            <img src="../../assets/address.jpeg">
          </div>
        </el-col>
        <el-col :span="12">
          <div class="intro_c">
            <p class="tel">
              欢迎致电：
            </p>
            <p class="tel_num">
              {{intro_p1}}
            </p>
            <p>
              {{intro_p2}}
            </p>
            <p>
              {{intro_p3}}
            </p>
            <p>
              {{intro_p4}}
            </p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
    data() {
      return {
        intro_p1: '400-9698526',
        intro_p2: '地址：中国•云南•昆明市经开区小商品加工基地一期产业项目A5幢第一层、第二层',
        intro_p3: '传真：0871-67418963',
        intro_p4: '邮编：650000'
      };
    },
    methods: {
      changeActive($event){
        $event.currentTarget.className="add_img animate__animated animate__swing";
      },
      removeActive($event){
        $event.currentTarget.className="add_img";
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
.company_intro {
  padding: 60px 120px;
  text-align: left;
  .add_img{
    margin: 0 50px;
    img {
      width: 100%;
    }
  }
  .intro_c {
    p {
      line-height: 28px;
    }
    .tel {
      font-size: 30px;
      color: #ffd04b;
    }
    .tel_num {
      font-size: 22px;
      color: #ffd04b;
    }
  }
}
</style>