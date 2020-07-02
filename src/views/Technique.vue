<template>
  <div class="about">
    <div class="banner">
      <img alt="Vue logo" src="../assets/tech-1.jpg">
    </div>
    <div class="company_intro">
      <el-row>
        <el-col :span="24">
          <div class="divider">
            <img src="../assets/divider3.png">
          </div>
          <div class="intro_c">
            <p>
              <b>{{t1}}</b> <br>
              {{intro_p1}}
            </p>
            <p>
              <b>{{t2}}</b> <br>
              {{intro_p2}}
            </p>
            <p>
              <b>{{t3}}</b> <br>
              {{intro_p3}}
            </p>
            <p>
              <b>{{t4}}</b> <br>
              {{intro_p4}}
            </p>
          </div>
          <div class="divider">
            <img src="../assets/divider3.png">
          </div>
          <div class="yellow">
            安全性检测报告
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
        t1: '第一步，原料筛选。',
        t2: '第二步，重组造粒。',
        t3: '第三步，香气塑造。',
        t4: '第四步，口味升级。',
        intro_p1: '公司技术研发团队通过对上百种草本植物进行烘烤技术评价，筛选出了11种香气醇净愉悦、口感舒适干净的原料。',
        intro_p2: '将筛选出的11种草本植物原料，破壁粉碎成细胞粒径为150μm~75μm的极细粉，以不同配比共形成58个配方，分别进行湿法重组造粒、微波膨化，通过感官评吸选出综合体验最佳的31#配方。',
        intro_p3: '形成草本颗粒载体后，需要对香（致香内容）和气（烟气状态）进行塑造。加热不燃烧器具的加热温度区间是270-350℃，因此香气塑造的技术核心在于该温度区间所能释放的致香物质的选择和雾化发烟技术的攻克。从数百种不同工艺萃取的天然香料中选香，千方百计从食品添加剂中寻找低温雾化发烟材料，最终成就了BAOS烟弹独有的“中式”香味特征和浓郁烟雾效果。',
        intro_p4: '为充分表达BAOS品牌“新一代的力量”的品牌形象，技术研发人员应用爆珠技术对产品进行口味升级，以满足新一代消费群体个性化、多元化的口味需求。'
      };
    },
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
  white-space: pre-wrap;
  .intro_t{
    font-size: 60px;
  }
  .intro_c {
    p {
      line-height: 28px;
    }
  }
  .yellow {
    color: #ffd04b;
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