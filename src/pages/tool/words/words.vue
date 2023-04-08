<template>
  <div class="analysis">
  <a-spin tip="Loading..." :spinning="loading">
    <a-row style="margin-top: 0" :gutter="[24, 24]">
      <a-card>
        <a-input v-model="qq" class="qq" placeholder="输入你的qq号码" allow-clear />
        <div class="tips">注意事项：字数包含字符数，每个标点符号算半个字。查询时间较长，建议不要一口气点所有的查询，你的浏览器会崩掉。</div>
      </a-card>
      <a-col :span="24">
        <a-card>
          <div class="items">
            <div class="til">截止到20230408晚22点戏录</div>
            <a-button type="primary" @click="goSearch20230408" class="search">查询</a-button>
            <div class="result">总字数为：{{ num20230408 }}</div>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </a-spin>
  </div>
</template>

<script>
import txt20230408 from './20230408.txt';
// import txt2 from './2022-1+2.txt';
// import txt3 from './2022-3+4.txt';
// import txt4 from './2022-5+6.txt';
// import txt5 from './2022-7.txt';
// import txt6 from './2022-8.txt';
// import txt7 from './2022-9.txt';
// import txt8 from './2022-10.txt';

export default {
  name: 'words',
  data () {
    return {
      qq: null,
      record1: null,
      num2021: 0,
      num20220102: 0,
      num20220304: 0,
      num20220506: 0,
      num202207: 0,
      num202208: 0,
      num202209: 0,
      num202210: 0,
      loading: false,
      total: null,
      num20230408: 0,
    }
  },
  created() {
    // setTimeout(() => this.loading = !this.loading, 1000)
  },
  methods: {
    goSearch20230408 () {
      this.loading = true
      setTimeout(() => {
        if (this.loading == true) {
          if (this.qq != '' && this.qq != null ) {
            this.num20230408 = this.getWords(txt20230408)
          } else {
            this.$message.error('小笨蛋，没有输入QQ号哦^ ^')
          }
        } else {
          this.$message.error('小笨蛋，不要心急，等上一个查好了再查哦^ ^')
        }
      }, 1000)
    },
    sum () {
      this.total = this.num20230408
    },
    getWords (text, num) {
      let qq = this.qq
      let itemsJson = this.getItem(text)
      let newSum = []
      console.log('itemsJson', itemsJson)
      itemsJson.forEach((li,index) => {
          // debugger
          if(li.qqNumber == qq){
              newSum.push(li)
          }
      })
      var reg = new RegExp("<br/>", 'g');
      let strLens = 0
      newSum.forEach((li)=>{
          li.clear = li.play.replace(reg, '')
          strLens = strLens + this.lens(li.clear)
      })
      this.$nextTick(() => {
        this.loading = false
      })
      return strLens/2
    },
    getItem(text){
        let itemsJson = [] 
        var val = text
        var data = []
        for(var k = 0; k < val.length; k++) {
            var nane = val.indexOf("2023-",k); // 从0开始搜索
            if(nane === -1){ // 没有找到，退出循环
                // debugger
            break;
            } else {
                // debugger
                const txt = nane
                data.push(txt);
                k+=1;
            }
        }
        data = this.unique(data)
        for(var j = 0; j < data.length; j++) {
            let t
            if (j === data.length - 1){
                t = val.slice(data[j])
            } else {
                t = val.slice(data[j], data[j+1]-1)
            }
            // items.push(t)
            var tinfo = t.slice(0, t.indexOf("\n", 0))
            var time = tinfo.slice(0, tinfo.indexOf(" ", tinfo.indexOf(" ")+1))
            var person = tinfo.indexOf("(") !== -1 ? tinfo.slice(tinfo.indexOf(" ", tinfo.indexOf(" ")+1)+1, tinfo.indexOf("(")) : tinfo.slice(tinfo.indexOf(" ", tinfo.indexOf(" ")+1)+1, tinfo.indexOf("<"))
            var qqNumber = tinfo.indexOf("(") === -1 ? tinfo.slice(tinfo.indexOf("<") + 1, tinfo.indexOf(">")) : tinfo.slice(tinfo.indexOf("(") + 1, tinfo.indexOf(")"))
            var play = t.slice(t.indexOf("\n")+1)
            play = play.replace(/\n/g,'<br/>')
            itemsJson.push({
                time: time,
                person: person,
                qqNumber: qqNumber,
                play: play,
                color: '#000',
            })
            // people.push({
            //     person: person,
            //     color: '#000',
            // })
        }
        return itemsJson
    },
    // 数组去重
    unique (arr) {
        return Array.from(new Set(arr))
    },
    lens(str) {
        if (str == null) return 0;
        if (typeof str != "string"){
            str += "";
        }
        return str.replace(/[^\x00-\xff]/g,"ab").length;
    }
  },
}
</script>

<style lang="less" scoped>
  .tips {
    color: red;
    margin-top: 10px;
    font-weight: bold;
  }
  .qq {
    width: 300px;
    max-width: 100%;
  }
  .items {
    display: flex;
    line-height: 30px;
  }
  .til {
    margin-right: 10px;
  }
  .search {
    margin-right: 10px;
  }
</style>
