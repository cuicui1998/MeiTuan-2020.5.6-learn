module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          // alias:别名的意思
          // 在配置文件中已经设置了 --> "@": "src"
          assets: "@/assets",
          common: "@/common",
          components: "@/components",
          network: "@/network",
          views:"@/views",  
          page:"@/page" 
        }
      }
    }
  };