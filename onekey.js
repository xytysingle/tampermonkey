// ==UserScript==
// @name         onekey
// @namespace    com.single.onekey
// @version      0.1
// @description  一键托管
// @author       single
// @match        http://tool-sku-test.lingmou.ai:8090/sku/audit*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require    http://code.jquery.com/jquery-1.11.0.min.js
// var sleep = require('sleep');
// ==/UserScript==
function sleep(time){
 return new Promise(function(resolve){
 setTimeout(resolve, time);
 });
}
// function sleep(time){
//     var timeStamp = new Date().getTime();
//     var endTime = timeStamp + time;
//     while(true){
//         if (new Date().getTime() > endTime){
//             return;
//         }
//     }
// }

$(document).ready(function(){
    //var t=$('.el-button.el-button--primary.el-button--small').css({"background-color":"yellow"});
    $('input:first').css({"background-color":"yellow"});
    $('.is-link').css({"color":"yellow"});
    //alert($('.el-breadcrumb__inner.is-link').text());

    //添加一键托管按钮
    $('.el-card__body:eq(1) div:eq(1)').append('<button type="button" id="onekey" style="margin-left:1.25rem" class="el-button el-button--primary  el-button--small"><!----><!----><span>一&nbsp;键&nbsp;托&nbsp;管&nbsp;</span></button>');
    var remain_count_node=$('.ml25:contains(新增产品剩余) .red');
    var get_next_btn=$('button:contains(获取下一条)');
    get_next_btn.click();
    var audit_pass_btn=$('button:contains("审"):eq(1)');

    $('#onekey').click(function(){
        //audit_pass_btn.removeAttr("disabled");
        console.log('remain_count:'+remain_count_node.text());
        var tm=setInterval(function(){
            get_next_btn.click();
            audit_pass_btn.click();
            if(remain_count_node.text()<=730){
                clearInterval(tm);
            }
        },500);
        
    });
});


// (function(){
// })();






