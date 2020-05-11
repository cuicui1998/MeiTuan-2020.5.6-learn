<template>
  <div class="mt-home">
    <!-- 头部导航 -->
    <div class="home-top">
      <div class="home-nav">
        <div class="all-sort">全部分类</div>
        <ul class="title-link">
          <li class="link-1">美团外卖</li>
          <li class="link-2">猫眼电影</li>
          <li class="link-3">美团酒店</li>
          <li class="link-4">民宿／公寓</li>
          <li class="link-5">商家入驻</li>
          <li class="link-6">美团公益</li>
        </ul>
      </div>
    </div>
    <div class="home-banner">
      <!-- 左侧列表菜单 -->
      <ul class="left-menu">
        <li class="nice-food">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconmeishi" />
          </svg>
          <span>美食</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarr-right-blue" />
          </svg>
          <div class="menu-content food">
            <div class="title clearfix">
              <span>美食</span>
              <span>更多</span>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconarr-right-blue" />
              </svg>
            </div>
            <div class="class">
              <span v-for="item in niceFoods" :key="item">{{item}}</span>
            </div>
          </div>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconwaimai" />
          </svg>
          <span>外卖</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarr-right-blue" />
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconjiudian2" />
          </svg>
          <span>酒店</span>
          <span>HOT</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarr-right-blue" />
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconweibiaoti-" />
          </svg>
          <span>民宿</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarr-right-blue" />
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconmaoyandianying" />
          </svg>
          <span>猫眼电影</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarr-right-blue" />
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconjipiaohuochepiao" />
          </svg>
          <span>机票 / 火车票</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarr-right-blue" />
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconyule-copy" />
          </svg>
          <span>休闲娱乐 / KTV</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarr-right-blue" />
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconicon-yxj-life" />
          </svg>
          <span>生活服务</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarr-right-blue" />
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconliren" />
          </svg>
          <span>丽人 / 美发 / 医学美容</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarr-right-blue" />
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconzuanshi" />
          </svg>
          <span>结婚 / 婚纱摄影 / 婚宴</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarr-right-blue" />
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconqinzi3" />
          </svg>
          <span>亲子 / 儿童乐园 / 幼教</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarr-right-blue" />
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconyaling" />
          </svg>
          <span>运动健身 / 健身中心</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarr-right-blue" />
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconjiazhuang" />
          </svg>
          <span>家装 / 建材 / 家居</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarr-right-blue" />
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconfen-copy" />
          </svg>
          <span>学习培训 / 音乐培训</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarr-right-blue" />
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconyiliao" />
          </svg>
          <span>医疗健康 / 宠物 / 爱车</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarr-right-blue" />
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconjiuba" />
          </svg>
          <span>酒吧/密室逃脱</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarr-right-blue" />
          </svg>
        </li>
      </ul>
      <div class="center-content">
        <div class="rotation-chart">
          <div class="block">
            <el-carousel height="240px">
              <el-carousel-item v-for="item in carouselImgUrls" :key="item">
                <img :src="item" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
      <div class="right-user"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      niceFoods: [
        "代金券",
        "甜点饮品",
        "火锅",
        "自助餐",
        "小吃快餐",
        "日韩料理",
        "西餐",
        "聚餐宴请",
        "烧烤烤肉",
        "东北菜",
        "川湘菜",
        "江浙菜",
        "香锅烤鱼",
        "粤港菜",
        "中式烧烤/烤串",
        "西北菜",
        "咖啡酒吧茶馆",
        "云贵菜",
        "东南亚菜",
        "海鲜",
        "素食",
        "台湾/客家菜",
        "创意菜",
        "汤/粥/炖菜",
        "蒙餐",
        "新疆菜",
        "其他美食",
        "京菜鲁菜"
      ],
      carouselImgUrls:['http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg','http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg','http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg','http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg','https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png']
    };
  }
};
</script>

<style lang="less">
.mt-home {
  // 头部导航样式
  .home-top {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 35px;
    background-color: #fff;
    box-shadow: 0 14px 20px  rgba(0,0,0,0.10);
    .home-nav {
      width: 1190px;
      margin: 0 auto;
      .all-sort {
        position: absolute;
        top: -15px;
        box-sizing: border-box;
        width: 230px;
        height: 50px;
        line-height: 52px;
        padding-left: 15px;
        font-weight: bold;
        border: 1px solid #e5e5e5;
        border-bottom: none;
        color: #222;
      }
      .title-link {
        margin-left: 260px;
        li {
          float: left;
          padding: 0 20px;
          font-weight: bold;
          color: #222;
          cursor: pointer;
          &.link-1:hover {
            color: #fbc700;
          }
          &.link-2:hover {
            color: #ed1e24;
          }
          &.link-3:hover {
            color: #f04d4e;
          }
          &.link-4:hover {
            color: #fdc411;
          }
          &.link-5:hover {
            color: #fe8c00;
          }
          &.link-6:hover {
            color: #f04d4e;
          }
        }
      }
    }
  }
  .home-banner {
    position: relative;
    width: 228px;
    border: 1px solid #e5e5e5;
    border-top: none;
    padding-top: 35px;
    // 左侧列表菜单样式
    .left-menu {
      padding: 10px 0 8px;
      background-color: #fff;
      li {
        position: relative;
        padding: 2px 12px;
        font-size: 13px;
        line-height: 20px;
        height: 20px;
        color: #646464;
        cursor: pointer;
        .menu-content {
          position: absolute;
          width: 400px;
          height: 393px;
          background-color: #fff;
          top: 0px;
          right: -401px;
          font-weight: normal;
          background-color: #fff;
          padding: 30px 20px;
          box-sizing: border-box;
        }
        & svg:nth-of-type(1) {
          font-size: 16px;
        }
        span {
          margin-left: 11px;
        }
        & svg:nth-of-type(2) {
          float: right;
          font-size: 16px;
        }
        &:hover {
          background: rgba(255, 150, 0, 0.08);
          & > span {
            color: #222222;
            font-weight: bold;
          }
        }

        &.nice-food {
          .food {
            display: none;
            position: absolute;
            z-index: 999;
            .title {
              position: relative;
              width: 100%;
              padding-bottom: 10px;
              border-bottom: 1px solid #e5e5e5;
              & span:nth-of-type(1) {
                float: left;
                font-weight: bold;
                font-size: 16px;
                color: black;
              }
              svg {
                position: absolute;
                right: 0;
                top: 3px;
              }
              & span:nth-of-type(2) {
                position: absolute;
                right: 13px;
              }
            }
            .class {
              padding-top: 20px;
              & > span {
                float: left;
                padding-top: 4px;
                color: #a3a3a3;
              }
            }
          }
          &:hover {
            .food {
              display: block;
            }
          }
        }
      }
    }
    // 中间轮播图和下面的样式
    .center-content {
      position: absolute;
      top: 45px;
      left: 239px;
      .rotation-chart {
        .block {
          width: 550px;
            img{
              width: 550px;
              
            }
        }
      }
    }
  }
}
</style>