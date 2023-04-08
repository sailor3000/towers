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
            <div class="til">2021年所有戏录</div>
            <a-button type="primary" @click="goSearch2021" class="search">查询</a-button>
            <div class="result">总字数为：{{ num2021 }}</div>
          </div>
        </a-card>
      </a-col>
      <a-col :span="24">
        <a-card>
          <div class="items">
            <div class="til">2022年1+2月</div>
            <a-button type="primary" @click="goSearch20220102" class="search">查询</a-button>
            <div class="result">总字数为：{{ num20220102 }}</div>
          </div>
        </a-card>
      </a-col>
      <a-col :span="24">
        <a-card>
          <div class="items">
            <div class="til">2022年3+4月</div>
            <a-button type="primary" @click="goSearch20220304" class="search">查询</a-button>
            <div class="result">总字数为：{{ num20220304 }}</div>
          </div>
        </a-card>
      </a-col>
      <a-col :span="24">
        <a-card>
          <div class="items">
            <div class="til">2022年5+6月</div>
            <a-button type="primary" @click="goSearch20220506" class="search">查询</a-button>
            <div class="result">总字数为：{{ num20220506 }}</div>
          </div>
        </a-card>
      </a-col>
      <a-col :span="24">
        <a-card>
          <div class="items">
            <div class="til">2022年7月</div>
            <a-button type="primary" @click="goSearch202207" class="search">查询</a-button>
            <div class="result">总字数为：{{ num202207 }}</div>
          </div>
        </a-card>
      </a-col>
      <a-col :span="24">
        <a-card>
          <div class="items">
            <div class="til">2022年8月</div>
            <a-button type="primary" @click="goSearch202208" class="search">查询</a-button>
            <div class="result">总字数为：{{ num202208 }}</div>
          </div>
        </a-card>
      </a-col>
      <a-col :span="24">
        <a-card>
          <div class="items">
            <div class="til">2022年9月</div>
            <a-button type="primary" @click="goSearch202209" class="search">查询</a-button>
            <div class="result">总字数为：{{ num202209 }}</div>
          </div>
        </a-card>
      </a-col>
      <a-col :span="24">
        <a-card>
          <div class="items">
            <div class="til">2022年10月【至10.17  15:30:00】</div>
            <a-button type="primary" @click="goSearch202210" class="search">查询</a-button>
            <div class="result">总字数为：{{ num202210 }}</div>
          </div>
        </a-card>
      </a-col>
      <a-col :span="24">
        <a-card>
          <div class="items">
            <div class="til">计算所有在页面查询的总字数</div>
            <a-button type="primary" @click="sum" class="search">计算</a-button>
            <div class="result">总字数为：{{ total }}</div>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </a-spin>
  </div>
</template>

<script>
import txt1 from './2021.txt';
import txt2 from './2022-1+2.txt';
import txt3 from './2022-3+4.txt';
import txt4 from './2022-5+6.txt';
import txt5 from './2022-7.txt';
import txt6 from './2022-8.txt';
import txt7 from './2022-9.txt';
import txt8 from './2022-10.txt';

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
    }
  },
  created() {
    // setTimeout(() => this.loading = !this.loading, 1000)
  },
  methods: {
    goSearch2021 () {
      this.loading = true
      setTimeout(() => {
        if (this.loading == true) {
          if (this.qq != '' && this.qq != null ) {
            this.num2021 = this.getWords(txt1)
          } else {
            this.$message.error('小笨蛋，没有输入QQ号哦^ ^')
          }
        } else {
          this.$message.error('小笨蛋，不要心急，等上一个查好了再查哦^ ^')
        }
      }, 1000)
    },
    goSearch20220102 () {
      this.loading = true
      setTimeout(() => {
        if (this.loading == true) {
          if (this.qq != '' && this.qq != null ) {
            this.num20220102 = this.getWords(txt2)
          } else {
            this.$message.error('小笨蛋，没有输入QQ号哦^ ^')
          }
        } else {
          this.$message.error('小笨蛋，不要心急，等上一个查好了再查哦^ ^')
        }
      },1000)
    },
    goSearch20220304 () {
      this.loading = true
      setTimeout(() => {
       if (this.loading == true) {
          if (this.qq != '' && this.qq != null ) {
            this.num20220304 = this.getWords(txt3)
          } else {
            this.$message.error('小笨蛋，没有输入QQ号哦^ ^')
          }
        } else {
          this.$message.error('小笨蛋，不要心急，等上一个查好了再查哦^ ^')
        } 
      },1000)
    },
    goSearch20220506 () {
      this.loading = true
      setTimeout(() => {
        if (this.loading == true) {
          if (this.qq != '' && this.qq != null ) {
            this.num20220506 = this.getWords(txt4)
          } else {
            this.$message.error('小笨蛋，没有输入QQ号哦^ ^')
          }
        } else {
          this.$message.error('小笨蛋，不要心急，等上一个查好了再查哦^ ^')
        }
      },1000)
    },
    goSearch202207 () {
      this.loading = true
      setTimeout(() => {
        if (this.loading == true) {
          if (this.qq != '' && this.qq != null ) {
            this.num202207 = this.getWords(txt5)
          } else {
            this.$message.error('小笨蛋，没有输入QQ号哦^ ^')
          }
        } else {
          this.$message.error('小笨蛋，不要心急，等上一个查好了再查哦^ ^')
        }
      },1000)
    },
    goSearch202208 () {
      this.loading = true
      setTimeout(() => {
        if (this.loading == true) {
          if (this.qq != '' && this.qq != null ) {
            this.num202208 = this.getWords(txt6)
          } else {
            this.$message.error('小笨蛋，没有输入QQ号哦^ ^')
          }
        } else {
          this.$message.error('小笨蛋，不要心急，等上一个查好了再查哦^ ^')
        }
      },1000)
    },
    goSearch202209 () {
      this.loading = true
      setTimeout(() => {
        if (this.loading == true) {
          if (this.qq != '' && this.qq != null ) {
            this.num202209 = this.getWords(txt7)
          } else {
            this.$message.error('小笨蛋，没有输入QQ号哦^ ^')
          }
        } else {
          this.$message.error('小笨蛋，不要心急，等上一个查好了再查哦^ ^')
        }
      },1000)
    },
    goSearch202210 () {
      this.loading = true
      setTimeout(() => {
        if (this.loading == true) {
          if (this.qq != '' && this.qq != null ) {
            this.num202210 = this.getWords(txt8)
          } else {
            this.$message.error('小笨蛋，没有输入QQ号哦^ ^')
          }
        } else {
          this.$message.error('小笨蛋，不要心急，等上一个查好了再查哦^ ^')
        }
      },1000)
    },
    sum () {
      this.total = this.num2021 + this.num20220102 + this.num20220304 + this.num20220506 + this.num202207 + this.num202208 + this.num202209 + this.num202210
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
            var nane2020 = val.indexOf("2020-",k); // 从0开始搜索
            var nane = val.indexOf("2021-",k); // 从0开始搜索
            var nane2022 = val.indexOf("2022-",k); // 从0开始搜索
            if(nane === -1 && nane2022 === -1 && nane2020){ // 没有找到，退出循环
                // debugger
            break;
            } else {
                // debugger
                const txt = nane === -1 ? (nane2020 === -1 ? nane2022 : nane2020) : nane
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
