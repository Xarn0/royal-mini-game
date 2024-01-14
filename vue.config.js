const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:`/royal-mini-game/`,
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/__variables.scss";`
      },
    }
  }
})
