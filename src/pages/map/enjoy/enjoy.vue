<template>
  <div class="analysis">
    <a-row style="margin-top: 0" :gutter="[24, 24]">
      <a-col :span="24">
        <a-card class="dflex">
          <viewer :images="images">
              <img src="../../../assets/img/xierweisite.jpg" class="map" alt="" srcset="">
              <div class="map-name">西尔维斯特</div>
          </viewer>

          <!-- <viewer :images="images">
              <img src="../../../assets/img/xierweisite.jpg" class="map" alt="" srcset="">
              <div class="map-name">西尔维斯特</div>
          </viewer>

          <viewer :images="images">
              <img src="../../../assets/img/xierweisite.jpg" class="map" alt="" srcset="">
              <div class="map-name">西尔维斯特</div>
          </viewer>

          <viewer :images="images">
              <img src="../../../assets/img/xierweisite.jpg" class="map" alt="" srcset="">
              <div class="map-name">西尔维斯特</div>
          </viewer>

          <viewer :images="images">
              <img src="../../../assets/img/xierweisite.jpg" class="map" alt="" srcset="">
              <div class="map-name">西尔维斯特</div>
          </viewer>

          <viewer :images="images">
              <img src="../../../assets/img/xierweisite.jpg" class="map" alt="" srcset="">
              <div class="map-name">西尔维斯特</div>
          </viewer>

          <viewer :images="images">
              <img src="../../../assets/img/xierweisite.jpg" class="map" alt="" srcset="">
              <div class="map-name">西尔维斯特</div>
          </viewer>

          <viewer :images="images">
              <img src="../../../assets/img/xierweisite.jpg" class="map" alt="" srcset="">
              <div class="map-name">西尔维斯特</div>
          </viewer>

          <viewer :images="images">
              <img src="../../../assets/img/xierweisite.jpg" class="map" alt="" srcset="">
              <div class="map-name">西尔维斯特</div>
          </viewer>

          <viewer :images="images">
              <img src="../../../assets/img/xierweisite.jpg" class="map" alt="" srcset="">
              <div class="map-name">西尔维斯特</div>
          </viewer> --> 
        </a-card>
        
      </a-col>
    </a-row>

  </div>
</template>

<script>

const rankList = []

for (let i = 0; i < 8; i++) {
  rankList.push({
    name: '桃源村' + i + '号店',
    total: 1234.56 - i * 100
  })
}

export default {
  name: 'enjoy',
  // i18n: require('./i18n'),
  data () {
    return {
      rankList,
      loading: true
    }
  },
  created() {
    setTimeout(() => this.loading = !this.loading, 1000)
  },
}
</script>

<style lang="less" scoped>
  .extra-wrap{
    .extra-item{
      display: inline-block;
      margin-right: 24px;
      a:not(:first-child){
        margin-left: 24px;
      }
    }
  }
  @media screen and (max-width: 992px){
    .extra-wrap .extra-item{
      display: none;
    }
  }
  @media screen and (max-width: 576px){
    .extra-wrap{
      display: none;
    }
  }
  .gra {
    background-color: transparent;
    border: none;
  }
  .fa {
    background-color: transparent;
    border: none;
  }
  .fa /deep/ .ant-collapse-header{
    padding: 0px 0px 0px 30px!important;
    background-color: transparent;
    border: none;
  }

  .dflex{
    display: flex;
  }

  .map {
    width: 130px;
    margin: 10px;
  }

  .map-name {
    width: 150px;
    text-align: center;
    margin-top: 5px;
  }

  ::v-deep .dflex .ant-card-body {
    display: flex;
    flex-wrap: wrap;
  }
</style>
