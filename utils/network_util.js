import util from 'util.js';
import util_sign from 'util_sign.js';
import json_util from 'json_util';
/**
 * url 请求地址
 * success 成功的回调
 * fail 失败的回调
 */
function _get(url, success, fail) {

    console.log("------start---_get----");
    wx.request({
        url: url,
        header: {
            // 'Content-Type': 'application/json'
        },
        success: function (res) {
            success(res);
        },
        fail: function (res) {
            fail(res);
        }
    });

    console.log("----end-----_get----");
}

/**
 * url 请求地址
 * success 成功的回调
 * fail 失败的回调
 */
function _post(url, data, success, fail) {
    console.log("----_post--start-------");
    wx.request({
        url: url,
        header: {
            'content-type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        data: { data: data },
        success: function (res) {
            success(res);
        },
        fail: function (res) {
            fail(res);
        }
    });
    console.log("----end-----_get----");
}


/**
 * url 请求地址
 * success 成功的回调
 * fail 失败的回调
 */
function _post1(url, data, success, fail) {
    console.log("----_post--start-------"+data);
    wx.request({
        url: url,
        header: {
            'content-type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        data: data,
        success: function (res) {
            success(res);
        },
        fail: function (res) {
            fail(res);
        }
    });
    console.log("----end-----_get----");
}

/**
 * url 请求地址
 * success 成功的回调
 * fail 失败的回调
 */
function _post2(url, success, fail) {
    console.log("----_post--start-------");
    wx.request({
        url: url,
        header: {
            'content-type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        data: data,
        success: function (res) {
            success(res);
        },
        fail: function (res) {
            fail(res);
        }
    });
    console.log("----end-----_get----");
}

function _post3(map, version, success, fail) {
    map.set("tj_modelNumber", "Letv X500");//设备生产商
    map.set("tj_appId", "0");//用户版
    map.set("tj_appVersion", "4.1.7");//应用版本号
    map.set("tj_screen", "1080*1920");//分辨率
    map.set("tj_os", "android6.0");
    map.set("tj_source", "102");
    map.set("tj_deviceId", "869841026662566");

    map.set("tj_networkType", "1");//网络类型
    map.set("tj_installSource", "ANZHI_MARKET");
    // 设备类型
    map.set("version", version);
    map.set("format", "json");
    map.set("source", "102");
    map.set("appKey", "201408141552");
    let signStr = util_sign.sign(map, "6c86e24cc97b446b8da8fb2da870114a");
    console.log("the signStr is: " + signStr);
    map.set("sign", signStr);

    // let json = json_util.mapToJson(map);
    // console.log("the http params: " + json);
    let d = util.map2Form(map);

    console.log("the data: "+d);

    let url = "http://open.114mall.com/router";
    wx.request({
        url: url,
        header: {
            'content-type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        data: d,
        success: function (res) {
            success(res);
        },
        fail: function (res) {
            fail(res);
        }
    });
}





/**
* url 请求地址
* success 成功的回调
* fail 失败的回调
*/
function _post_json(url, data, success, fail) {
    console.log("----_post--start-------");
    wx.request({
        url: url,
        // header: {
        //     'content-type': 'application/json',
        // },
        method: 'POST',
        data: data,
        success: function (res) {
            success(res);
        },
        fail: function (res) {
            fail(res);
        }
    });
    console.log("----end----_post-----");
}


module.exports = {
    _get: _get,
    _post: _post,
    _post1: _post1,
    _post_json: _post_json,
    _post3: _post3
}