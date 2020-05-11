<template>
  <div class="search-bar">
    <div class="search-content">
      <h1>
        <a href="#">美团</a>
      </h1>
      <div class="search-input">
        <input type="text" v-model="searchWorld" placeholder="搜索商家或地点" @focus="focus" @blur="blur" />
        <button>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconfangdajing" />
          </svg>
        </button>
        <dl class="hot-search" v-show="isHotSearch">
          <dt>热门搜索</dt>
        </dl>
        <dl class="relevant" v-show="isRelevant">
          <!-- /langding是用来测试 是否能正常跳转 -->
          <dd v-for="item in srelevantList" :key="item">
            <!-- 设置跳转的路由地址 -->
            <router-link :to="{params:{name:item}}">{{item}}</router-link>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      searchWorld: "",
      //   记录输入框聚焦状态 默认不聚焦
      isFocus: false,
      srelevantList: ["火锅", "火锅自助餐", "火锅 重庆"]
    };
  },
  computed: {
    isHotSearch() {
      // 当发生聚焦并且输入框没有内容时 显示热门搜索框
      return this.isFocus && this.searchWorld.length == 0;
    },
    isRelevant() {
      // 当发生聚焦并且输入框有内容时  显示xian'l'c框
      return this.isFocus && this.searchWorld.length >= 1;
    }
  },
  methods: {
    //   输入框聚焦的时候 将isFocus的值改成true
    //   本项目有个注意点 当你点击人热门列表或者是联想词列表的内容的时候
    //   是不会跳转的 因为你点击列表中的内容的时候 马上就触发触发了 focus事件
    //   而我们希望的是点击列表内容之后再触发focus事件
    //   那么就需要定时器了
    focus() {
      this.isFocus = true;
    },
    //   输入框失去聚焦的时候 将isFocus的值改成false
    blur() {
      let self = this;
      setTimeout(function() {
        self.isFocus = false;
      }, 200);
    }
  }
};
</script>

<style lang="less">
.search-bar {
  height: 122px;
  background-color: #fff;
  padding-top: 28px;
  box-sizing: border-box;
  box-shadow: 0 15px 15px -9px rgba(0, 0, 0, 0.1);

  .search-content {
    position: relative;
    width: 1190px;
    margin: 0 auto;
    h1 {
      float: left;
      text-indent: 9999px;
      white-space: nowrap;
      overflow: hidden;
      padding-right: 194px;
      a {
        width: 126px;
        height: 46px;
        display: block;
        background: url(https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png);
        background-size: 126px 46px;
      }
    }
  }
  .search-input {
    position: relative;
    top: -3px;
    input {
      width: 470px;
      height: 40px;
      box-sizing: border-box;
      border: 1px solid #e5e5e5;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border-right: none;
      padding-left: 15px;
      
      //   设置placeholder文字大小
      &::-webkit-input-placeholder {
        color: #999;
        font-size: 14px;
      }
    }
    button {
      position: relative;
      width: 80px;
      height: 40px;
      background-color: #ffc300;
      border: 0;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      top: 3px;
      svg {
        font-size: 20px;
      }
    }
    dl {
      position: absolute;
      top: 43px;
      left: 320px;
      width: 470px;
      border: 1px solid #e5e5e5;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-top: none;
      font-size: 12px;
      color: #999;
      background-color: #fff;
      box-sizing: border-box;
      z-index: 999;
      &.hot-search {
        padding: 10px 0 45px 10px;
      }
      dd {
        padding: 5px 0;
        color: rgba(51, 51, 51);
        padding-left: 10px;
        &:hover {
          background-color: rgb(248, 248, 248);
          color: #fe8c00;
        }
      }
    }
  }
}
</style>

