/**
 * JavaScript获取主机的域名主机;
 * @ url: 所要获取主机名的 url 字符串
 */
function getHost(url) {
    var host = "null";
    if (typeof url == "undefined" || null == url) {
        url = window.location.href;
    }
    var regex = /^\w+\:\/\/([^\/]*).*/;
    var match = url.match(regex);
    if (typeof match != "undefined" && null != match) {
        host = match[1];
    }
    return host;
}


/**
 * JavaScript清除空格
 */

String.prototype.trim = function () {
    var reExtraSpace = /^\s*(.*?)\s+$/;
    return this.replace(reExtraSpace, "$1")
}

/**
 * 原生JavaScript设置cookie值
 */

function setCookie(name, value, Hours) {
    var d = new Date();
    var offset = 8;
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = utc + (3600000 * offset);
    var exp = new Date(nd);
    exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString() + ";domain=360doc.com;"
    console.log(document.cookie);
}

/**
 * 原生JavaScript获取cookie值
 */
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]);
    return null
}
/**
 * 原生JavaScript实现checkbox全选与全不选
 */
function checkAll(selectall, allbox) {
    var selectall = document.getElementById(selectall);
    var allbox = document.getElementsByName(allbox);
    if (selectall.checked) {
        for (var i = 0; i < allbox.length; i++) {
            allbox[i].checked = true;
        }
    } else {
        for (var i = 0; i < allbox.length; i++) {
            allbox[i].checked = false;
        }
    }
}

/**
 * 原生JavaScript判断是否苹果移动设备访问
 */

function isAppleMobileDevice() {
    return (/iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase()));
}

/**
 * 原生JavaScript判断是否为邮箱
 */

function regMail() {
    var re = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if (re.test(str) != true) {
        return false;
    } else {
        return true;
    }
};

/**
 * 原生JavaScript判断字符串是否为小数
 */

function isValidDecimal(chars) {
    var re = /^\d*\.?\d{1,2}$/;
    if (chars.match(re) == null)
        return false;
    else {
        return true;
    }
}