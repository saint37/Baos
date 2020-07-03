<template>
  <div class="about">
    <div class="banner">
      <img alt="Vue logo" src="../../assets/brand.jpg">
    </div>
    <div class="company_intro">
      <el-row class="intro_wrap">
        <el-col :span="6">
          <div class="intro_t">
            品<br>牌<br>文<br>化
          </div>
        </el-col>
        <el-col :span="18">
          <div class="intro_c">
            <div class="intro_img" @mouseenter="changeActive($event)" @mouseleave="removeActive($event)">
              <img src="../../assets/brand.png">
            </div>
            <table>
              <tr><td><b>Better</b></td><td style="color: #ffd04b;">不断超越</td></tr>
              <tr><td><b>Advanced</b></td><td style="color: #ffd04b;">勇往直前</td></tr>
              <tr><td><b>Original</b></td><td style="color: #ffd04b;">不忘初心</td></tr>
              <tr><td><b>Surprise</b></td><td style="color: #ffd04b;">创造惊喜</td></tr>
            </table>
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

      };
    },
    methods: {
      changeActive($event){
        $event.currentTarget.className="intro_img animate__animated animate__pulse";
      },
      removeActive($event){
        $event.currentTarget.className="intro_img";
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
  .intro_t{
    font-size: 60px;
    color: #ffd04b;
  }
  .intro_c {
    .intro_img {
      width: 700px;
      img {
        width: 100%;
      }
    }
    p {
      line-height: 28px;
    }
    table {
      tr {
        line-height: 32px;
      }
      td {
        width: 140px;
      }
    }
  }
}
</style>