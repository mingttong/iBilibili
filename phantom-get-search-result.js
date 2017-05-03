/**
 * Created by lenovo on 2017/5/4.
 */
var page = require('webpage').create();
// var url = 'https://www.zhihu.com/';
// var url = 'http://search.bilibili.com/all?keyword=j.fla&page=2&order=totalrank';
// var url = 'http://search.bilibili.com/all?keyword=j.fla&from_source=banner_search';
var url = 'http://www.bilibili.com/video/av9152612/?from=search&seid=5164195743162848873';
var ua = 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36';

page.onResourceRequested = function (data) {
  "use strict";
  console.log('Request:', data.url);
}

// page.onConsoleMessage = function (mes) {
//   "use strict";
//   console.log(mes);
// }

page.onResourceReceived = function (data) {
  "use strict";
  // console.log('Receive:', data.url);
}

page.settings.userAgent = ua;
page.viewportSize = {
  width: 1920,
  height: 1080
}

page.open(url, function () {
  "use strict";

  // setTimeout(function () {
  //   var delay = 300;
  //   setTimeout(function timer() {
  //     document.body.scrollTop += 100;
  //     if (document.body.scrollTop < 2000) {
  //       setTimeout(timer, delay)
  //     }
  //   }, delay)
  // }, 500)

  setTimeout(function () {

    var src = page.evaluate(function () {
      var imgs = document.querySelectorAll('div.img img');
      var srcs = [];

      imgs = [].slice.call(imgs);
      imgs.forEach(function (img) {
        srcs.push({src: img.getAttribute('src')});
      })

      return srcs;
    })

    src = JSON.stringify(src, null, 2);

    console.log(src);

    page.render('./pics/bilibili.png');

    phantom.exit();
  }, 5000);
})