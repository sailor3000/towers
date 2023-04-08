<template>
  <div class="analysis">
    <a-row style="margin-top: 0" :gutter="[24, 24]">
      <a-col>
        <!-- <viewer :images="images">
            <img src="../../../assets/img/starMap.png" class="map" alt="" srcset="">
        </viewer> -->
        <!-- <div class="my-component" ref="preview">
          <input type="file" @change="preview" ref="file">
        </div> -->
      </a-col>
    </a-row>

  </div>
</template>

<script>
const docx = require('docx-preview');
window.JSZip = require('jszip')

const rankList = []

for (let i = 0; i < 8; i++) {
  rankList.push({
    name: '桃源村' + i + '号店',
    total: 1234.56 - i * 100
  })
}

export default {
  name: 'starMap',
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
  methods: {
    preview(e){
      console.log(e)
      debugger;
      docx.renderAsync(this.$refs.file.files[0],this.$refs.preview) // 渲染到页面预览
    }
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

  .map {
    width: 100%;
  }

</style>
