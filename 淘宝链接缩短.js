// ==UserScript==
// @name         淘宝链接缩短
// @namespace    none
// @version      2017.05.15
// @description  淘宝链接缩短
// @author       HungH
// @match        *.taobao.com/*
// @match        *.tmall.com/*
// @grant        unsafeWindow
// ==/UserScript==

function addbutton(){
    var oD_box=document.createElement("div");
    oD_box.id="oD_box";
    oD_box.style="position:fixed;top:100px;left:30px;  width:150px; z-index:99999999;";
    var oD_button=document.createElement("button");
    oD_button.id="oD_button";
    oD_button.type="button";
    oD_button.textContent="链接转换";
    oD_button.style="padding:4px 0;  position: relative;  top:-1px; width:90px; ";
    oD_button.onclick=function (){
        function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return r[2];
        return null;
    }
    var site = window.location.href.match(/^http(s)?:\/\/[^?]*/);
    var id = getQueryString("id");
    var q = getQueryString("q");
    if (id != null) {
        var pureUrl = site[0] + "?id=" + id;
    } else if (q != null) {
        var pureUrl = site[0] + "?q=" + q;
    } else if (site[0].substr(site[0].length - 13) == "view_shop.htm") {
        var pureUrl = window.location.protocol + "//" + window.location.host;
    } else {
        var pureUrl = site[0];
    }
    var reload = prompt("净化后的网址是：",pureUrl);
    if(reload != null){
        window.location.href = pureUrl;
    }
};
    oD_box.appendChild(oD_button);
    document.body.appendChild(oD_box);
}

(function() {
    addbutton();
})();