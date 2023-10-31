module.exports = {
  plugins: {
    "postcss-pxtorem": {
      // 设计稿 375:37.5
      // 设计稿：750:75
      // Vant 是基于 375
      // rootValue根据设计稿宽度除以10进行设置
      rootValue: 37.5, 
      propList: ["*"],
      selectorBlackList: ['van'] // 过滤掉VantUI组件
    }
  }
}