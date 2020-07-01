<template>
  <div class="about">
    <div class="banner">
      <img alt="Vue logo" src="../../assets/banner1.jpg">
    </div>
    <div class="company_intro">
      <el-row class="intro_wrap">
        <el-col :span="6">
          <div class="intro_t">
            公<br>司<br>介<br>绍
          </div>
        </el-col>
        <el-col :span="18">
          <div class="intro_c">
            <div class="divider">
              <img src="../../assets/divider3.png">
            </div>
            <p>
              {{intro_p1}}
            </p>
            <p>
              {{intro_p2}}
            </p>
            <p class="txt" @mouseenter="changeActive($event)" @mouseleave="removeActive($event)">
              {{intro_p3}}
            </p>
            <p class="txt" @mouseenter="changeActive($event)" @mouseleave="removeActive($event)">
              {{intro_p4}}
            </p>
            <div class="divider">
              <img src="../../assets/divider3.png">
            </div>
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
        intro_p1: '云南氪莱铂科技有限公司（YUNNAN KLB SCIENCE&TECHNOLOGY CO.,LTD）成立于2018年9月，是一家以卷烟新材料及新型烟草延伸产品为核心发展方向，面向市场服务的研产销一体化的科技型企业，技术和产品主要涉及烟用爆珠、植物颗粒、凝胶颗粒、香精香料、新型发烟剂、草本烟弹等。',
        intro_p2: '氪莱铂公司一期投资1000万元，建设拥有200㎡技术研发实验室、800㎡办公场地、1000㎡标准化食品级洁净生产车间。公司核心团队成员毕业于北京大学、中国制浆造纸研究院、Adelphi University等国内外知名高校，且具有多年烟草行业从业经历，在产品技术研发方面经验丰富。BAOS（Best Alternative Of Smoking，中文译为“宝石”）是由云南氪莱铂科技有限公司自主研发推出的“非烟”加热不燃烧烟弹品牌，产品定位为“草本弹，本草香”。产品研发坚持“绿色、原生、本味”的配方之道，追求“轻松、舒适、满足”的消费体验。目前在技术和产品上，已获得4项国家发明专利授权。',
        intro_p3: '氪莱铂，Climb！攀登永无止境。',
        intro_p4: 'BAOS，新一代的力量，谁都无法想象！'
      };
    },
    methods: {
      changeActive($event){
        $event.currentTarget.className="txt animate__animated animate__headShake";
      },
      removeActive($event){
        $event.currentTarget.className="txt";
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
  .intro_wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .intro_t {
    font-size: 60px;
    color: #ffd04b;
  }
  .intro_c {
    p {
      line-height: 28px;
    }
    .txt{
      color: #ffd04b;
    }
  }
}
.divider {
  width: 330px;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
</style>