// var app = getApp();
Page({
    data: {
        goodsInfoList: []
    },
    onLoad: function () {
        console.log("onLoad");
        var that = this;
        wx.request({
            url: 'http://open.114mall.com/router',
            data: Util.json2Form({
                tj_screen: '1080*1920',
                tj_appVersion: '4.1.7',
                method: 'search.list',
                keywords: '',
                format: 'json',
                sign: '73A1D2B17C3BBCE11BB41868CBB22AA476F1DA1E',
                source: '102',
                version: '1.0',
                tj_deviceId: '869841026662566',
                tj_installSource: 'ANZHI_MARKET',
                tj_appId: '0',
                tj_os: 'android6.0',
                appKey: '201408141552',
                shopId: '',
                tj_source: '102',
                tj_modelNumber: 'Letv X500',
                currentPage: '1',
                categoryId: '',
                tj_networkType: '1',
                order: ''
            }),
            method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: { 'content-type': 'application/x-www-form-urlencoded' }, // 设置请求的 header
            success: function (res) {
                // success
                that.setData({
                    goodsInfoList: res.data.result.goodsInfoList
                })
            },
            fail: function () {
                // fail
                console.log("request fail...");
            },
            complete: function () {
                // complete
                console.log("request complete...")
            }
        })
    },
})

var Util = require('../../utils/util.js');
// Page({
//     data: {
//         imgUrls: [
//             'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
//             'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
//             'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
//         ],
//         indicatorDots: false,
//         autoplay: false,
//         interval: 5000,
//         duration: 1000
//     },
//     changeIndicatorDots: function (e) {
//         this.setData({
//             indicatorDots: !this.data.indicatorDots
//         })
//     },
//     changeAutoplay: function (e) {
//         this.setData({
//             autoplay: !this.data.autoplay
//         })
//     },
//     intervalChange: function (e) {
//         this.setData({
//             interval: e.detail.value
//         })
//     },
//     durationChange: function (e) {
//         this.setData({
//             duration: e.detail.value
//         })
//     }
// })
// Page({
//     data: {
//         // text:"这是一个页面"
//         result: [],
//         indicatorDots: false,
//         autoplay: false,
//         interval: 5000,
//         duration: 1000
//     },

//     onLoad: function () {
//         var that = this;
//         wx.request({
//             url: 'http://gank.io/api/data/Android/30/1',
//             method: 'GET',
//             success: function (res) {
//                 that.setData({
//                     result: res.data.results
//                 })
//             }

//         })
//     },

//     listenerButton: function () {


//     }
// })