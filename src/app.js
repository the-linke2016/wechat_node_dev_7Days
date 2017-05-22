
/**
 * 由于使用的 ngrok 代理工具不稳定，所以需要及时替换测试号的链接
 * @url: https://mp.weixin.qq.com/debug/cgi-bin/sandboxinfo?action=showinfo&t=sandbox/index
 * 进行接口信息的配置与修改。
 * @password: wechatdev1
 */
const weChat = require('./wechat/g')
const util = require('../libs/util')
const Koa = require('koa')
const path = require('path')
const wechat_file = path.join(__dirname,'../config/wechat_file.txt')
const config = {
  weChat: {
    appID: 'wxb250d9904e5fec3d',
    appSecret: '647e6c68f0c5f48803ba4c72b496311c',
    token: 'qwertyuiopraoul12345',
    getAccessToken() {
      return util.readFileSync(wechat_file)
    },
    saveAccessToken(data){
      data = JSON.stringify(data)
      return util.writeFileSync(wechat_file)
    }

  }
}
let app = new Koa()
app.use(weChat(config.weChat))
app.listen(2333)
console.log('Listing:2333')