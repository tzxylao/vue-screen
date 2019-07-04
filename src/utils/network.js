import request from '@/utils/request'

var md5 = require("./md5.js");
// 签名
function getSign(report) {
  var json = JSON.stringify(report).toLowerCase();
  var jsonArray = json.split("");
  var jsonSorted = jsonArray.sort().join("");
  var sign = md5.md5(jsonSorted + md5.md5("zhiyis"));
  return sign;
}
function postData(url, traCode, body, func) {
  postDataWithPagination(url, traCode, body, func, "");
}
//分页查询
function postDataWithPagination(url, traCode, body, func, pagination) {
  var resultData;
  var report = {};
  var header = {};
  header.request_seq = "123";
  header.sys_id = "H5_001";
  header.tra_code = traCode;
  if (pagination != "") {
    header.curr_page = pagination.curr_page;
    header.page_size = pagination.page_size;
  }
  header.sign = "";
  report.header = header;
  report.body = body;
  header.sign = getSign(report);
  var jsonSigned = JSON.stringify(report);
  console.log("report is:" + jsonSigned);
  request({
    url: url,
    method: 'get',
    header: {
      "Content-Type": "application/json"
    },
    params:{report: jsonSigned}
  }).then(res => {
    func(JSON.parse(res));
  });
  // uni.request({
  //   url: url,
  //   data: {
  //     report: jsonSigned
  //   },
	// method:'GET',
  //
  //   success: function(res) {
  //
  //   }
  // });
}
module.exports = {
  postData: postData,
  postDataWithPagination: postDataWithPagination
}
