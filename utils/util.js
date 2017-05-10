function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

function json2Form(json) {
  console.log("the json: " + json.toString());
  var str = [];
  for (var p in json) {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]));
  }
  return str.join("&");
}

function map2Form(strMap) {
  // console.log("the json: " + json.toString());
  var str = [];
  for (let [k, v] of strMap) {
    // console.log("the k: " + k);
    // console.log("the value: " + v);
    str.push(k + "=" + v);
  }
  return str.join("&");
}

module.exports = {
  json2Form: json2Form,
  map2Form: map2Form,
}
