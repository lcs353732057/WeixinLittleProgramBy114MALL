var app = getApp();
Page({
    data: {
        goodsInfoList: [],
        hidden: false,
        page: 1,
        size: 20,
        hasMore: true,
        hasRefesh: false
    },

    onLoad: function () {
        console.log("onLoad");
        var that = this;

        let map = new Map();
        map.set("method", 'search.list');
        map.set("shopId", "");
        map.set("currentPage", "1");
        map.set("categoryId", "");
        map.set("order", "");
        map.set("keywords", "");

        network_util._post3(map, "1.0",
            function (res) {
                console.log(res);
                that.setData({
                    goodsInfoList: res.data.result.goodsInfoList,
                    hidden: true
                })
            }, function (res) {
                console.log(res);
            });
    },
    onReachBottom: function (e) {
        console.log("onReachBottom");
        var that = this;
        let map = new Map();
        that.setData({
            page: ++that.data.page
        });
        map.set("method", 'search.list');
        map.set("shopId", "");
        map.set("currentPage", that.data.page);
        map.set("categoryId", "");
        map.set("order", "");
        map.set("keywords", "");

        that.setData({
            hasRefesh: true,
            hidden: true
        });
        if (!this.data.hasMore) return

        network_util._post3(map, "1.0",
            function (res) {
                console.log(res);
                that.setData({
                    goodsInfoList: that.data.goodsInfoList.concat(res.data.result.goodsInfoList),
                    hidden: true,
                    hasRefesh: true,
                })
            }, function (res) {
                console.log(res);
            });
    },

    onPullDownRefresh: function (e) {
        console.log("refesh");
        that.setData({
            hasRefesh: true,
        });
        var that = this;
        let map = new Map();
        that.setData({
            page: 1
        });
        map.set("method", 'search.list');
        map.set("shopId", "");
        map.set("currentPage", that.data.page);
        map.set("categoryId", "");
        map.set("order", "");
        map.set("keywords", "");

        network_util._post3(map, "1.0",
            function (res) {
                that.setData({
                    goodsInfoList: res.data.result.goodsInfoList,
                    hidden: true,
                    hasRefesh: false,
                });
            }, function (res) {
                console.log(res);
            })
    },
    onReady: function () {
        // 页面渲染完成
    },
    onShow: function () {
        // 页面显示
    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        // 页面关闭
    },
    loadingChange: function () {
        console.log("loadingChange");
    },
    onShareAppMessage: function () {
        return {
            title: '自定义分享标题',
            path: '/page/user?id=123'
        }
    },
    refesh: function () {
        console.log("saassasasasasa");
    }

})

var network_util = require('../../utils/network_util.js');
var Util = require('../../utils/util.js');