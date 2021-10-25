function time(){return Math.floor(new Date().getTime()/1000)};
function date(format,timestamp){var that=this;var jsdate,f;var txt_words=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur","January","February","March","April","May","June","July","August","September","October","November","December"];var formatChr=/\\?(.?)/gi;var formatChrCb=function(t,s){return f[t]?f[t]():s};var _pad=function(n,c){n=String(n);while(n.length<c){n="0"+n}return n};f={d:function(){return _pad(f.j(),2)},D:function(){return f.l().slice(0,3)},j:function(){return jsdate.getDate()},l:function(){return txt_words[f.w()]+"day"},N:function(){return f.w()||7},S:function(){var j=f.j();var i=j%10;if(i<=3&&parseInt((j%100)/10,10)==1){i=0}return["st","nd","rd"][i-1]||"th"},w:function(){return jsdate.getDay()},z:function(){var a=new Date(f.Y(),f.n()-1,f.j());var b=new Date(f.Y(),0,1);return Math.round((a-b)/86400000)},W:function(){var a=new Date(f.Y(),f.n()-1,f.j()-f.N()+3);var b=new Date(a.getFullYear(),0,4);return _pad(1+Math.round((a-b)/86400000/7),2)},F:function(){return txt_words[6+f.n()]},m:function(){return _pad(f.n(),2)},M:function(){return f.F().slice(0,3)},n:function(){return jsdate.getMonth()+1},t:function(){return(new Date(f.Y(),f.n(),0)).getDate()},L:function(){var j=f.Y();return j%4===0&j%100!==0|j%400===0},o:function(){var n=f.n();var W=f.W();var Y=f.Y();return Y+(n===12&&W<9?1:n===1&&W>9?-1:0)},Y:function(){return jsdate.getFullYear()},y:function(){return f.Y().toString().slice(-2)},a:function(){return jsdate.getHours()>11?"pm":"am"},A:function(){return f.a().toUpperCase()},B:function(){var H=jsdate.getUTCHours()*3600;var i=jsdate.getUTCMinutes()*60;var s=jsdate.getUTCSeconds();return _pad(Math.floor((H+i+s+3600)/86.4)%1000,3)},g:function(){return f.G()%12||12},G:function(){return jsdate.getHours()},h:function(){return _pad(f.g(),2)},H:function(){return _pad(f.G(),2)},i:function(){return _pad(jsdate.getMinutes(),2)},s:function(){return _pad(jsdate.getSeconds(),2)},u:function(){return _pad(jsdate.getMilliseconds()*1000,6)},e:function(){throw"Not supported (see source code of date() for timezone on how to add support)"},I:function(){var a=new Date(f.Y(),0);var c=Date.UTC(f.Y(),0);var b=new Date(f.Y(),6);var d=Date.UTC(f.Y(),6);return((a-c)!==(b-d))?1:0},O:function(){var tzo=jsdate.getTimezoneOffset();var a=Math.abs(tzo);return(tzo>0?"-":"+")+_pad(Math.floor(a/60)*100+a%60,4)},P:function(){var O=f.O();return(O.substr(0,3)+":"+O.substr(3,2))},T:function(){return"UTC"},Z:function(){return -jsdate.getTimezoneOffset()*60},c:function(){return"Y-m-d\\TH:i:sP".replace(formatChr,formatChrCb)},r:function(){return"D, d M Y H:i:s O".replace(formatChr,formatChrCb)},U:function(){return jsdate/1000|0}};this.date=function(format,timestamp){that=this;jsdate=(timestamp===undefined?new Date():(timestamp instanceof Date)?new Date(timestamp):new Date(timestamp*1000));return format.replace(formatChr,formatChrCb)};return this.date(format,timestamp)};
function microtime(get_as_float){if(typeof performance!=="undefined"&&performance.now){var now=(performance.now()+performance.timing.navigationStart)/1000;if(get_as_float){return now}var s=now|0;return(Math.round((now-s)*1000000)/1000000)+" "+s}else{var now=(Date.now?Date.now():new Date().getTime())/1000;if(get_as_float){return now}var s=now|0;return(Math.round((now-s)*1000)/1000)+" "+s}};
function strtotime(text,now){var parsed,match,today,year,date,days,ranges,len,times,regex,i,fail=false;if(!text){return fail}text=text.replace(/^\s+|\s+$/g,"").replace(/\s{2,}/g," ").replace(/[\t\r\n]/g,"").toLowerCase();match=text.match(/^(\d{1,4})([\-\.\/\:])(\d{1,2})([\-\.\/\:])(\d{1,4})(?:\s(\d{1,2}):(\d{2})?:?(\d{2})?)?(?:\s([A-Z]+)?)?$/);if(match&&match[2]===match[4]){if(match[1]>1901){switch(match[2]){case"-":if(match[3]>12||match[5]>31){return fail}return new Date(match[1],parseInt(match[3],10)-1,match[5],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1000;case".":return fail;case"/":if(match[3]>12||match[5]>31){return fail}return new Date(match[1],parseInt(match[3],10)-1,match[5],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1000}}else{if(match[5]>1901){switch(match[2]){case"-":if(match[3]>12||match[1]>31){return fail}return new Date(match[5],parseInt(match[3],10)-1,match[1],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1000;case".":if(match[3]>12||match[1]>31){return fail}return new Date(match[5],parseInt(match[3],10)-1,match[1],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1000;case"/":if(match[1]>12||match[3]>31){return fail}return new Date(match[5],parseInt(match[1],10)-1,match[3],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1000}}else{switch(match[2]){case"-":if(match[3]>12||match[5]>31||(match[1]<70&&match[1]>38)){return fail}year=match[1]>=0&&match[1]<=38?+match[1]+2000:match[1];return new Date(year,parseInt(match[3],10)-1,match[5],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1000;case".":if(match[5]>=70){if(match[3]>12||match[1]>31){return fail}return new Date(match[5],parseInt(match[3],10)-1,match[1],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1000}if(match[5]<60&&!match[6]){if(match[1]>23||match[3]>59){return fail}today=new Date();return new Date(today.getFullYear(),today.getMonth(),today.getDate(),match[1]||0,match[3]||0,match[5]||0,match[9]||0)/1000}return fail;case"/":if(match[1]>12||match[3]>31||(match[5]<70&&match[5]>38)){return fail}year=match[5]>=0&&match[5]<=38?+match[5]+2000:match[5];return new Date(year,parseInt(match[1],10)-1,match[3],match[6]||0,match[7]||0,match[8]||0,match[9]||0)/1000;case":":if(match[1]>23||match[3]>59||match[5]>59){return fail}today=new Date();return new Date(today.getFullYear(),today.getMonth(),today.getDate(),match[1]||0,match[3]||0,match[5]||0)/1000}}}}if(text==="now"){return now===null||isNaN(now)?new Date().getTime()/1000|0:now|0}if(!isNaN(parsed=Date.parse(text))){return parsed/1000|0}date=now?new Date(now*1000):new Date();days={"sun":0,"mon":1,"tue":2,"wed":3,"thu":4,"fri":5,"sat":6};ranges={"yea":"FullYear","mon":"Month","day":"Date","hou":"Hours","min":"Minutes","sec":"Seconds"};function lastNext(type,range,modifier){var diff,day=days[range];if(typeof day!=="undefined"){diff=day-date.getDay();if(diff===0){diff=7*modifier}else{if(diff>0&&type==="last"){diff-=7}else{if(diff<0&&type==="next"){diff+=7}}}date.setDate(date.getDate()+diff)}}function process(val){var splt=val.split(" "),type=splt[0],range=splt[1].substring(0,3),typeIsNumber=/\d+/.test(type),ago=splt[2]==="ago",num=(type==="last"?-1:1)*(ago?-1:1);if(typeIsNumber){num*=parseInt(type,10)}if(ranges.hasOwnProperty(range)&&!splt[1].match(/^mon(day|\.)?$/i)){return date["set"+ranges[range]](date["get"+ranges[range]]()+num)}if(range==="wee"){return date.setDate(date.getDate()+(num*7))}if(type==="next"||type==="last"){lastNext(type,range,num)}else{if(!typeIsNumber){return false}}return true}times="(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec"+"|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?"+"|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)";regex="([+-]?\\d+\\s"+times+"|"+"(last|next)\\s"+times+")(\\sago)?";match=text.match(new RegExp(regex,"gi"));if(!match){return fail}for(i=0,len=match.length;i<len;i++){if(!process(match[i])){return fail}}return(date.getTime()/1000)};
function htmlspecialchars_decode(e,E){var T=0,_=0,r=!1;"undefined"==typeof E&&(E=2),e=e.toString().replace(/&lt;/g,"<").replace(/&gt;/g,">");var t={ENT_NOQUOTES:0,ENT_HTML_QUOTE_SINGLE:1,ENT_HTML_QUOTE_DOUBLE:2,ENT_COMPAT:2,ENT_QUOTES:3,ENT_IGNORE:4};if(0===E&&(r=!0),"number"!=typeof E){for(E=[].concat(E),_=0;_<E.length;_++)0===t[E[_]]?r=!0:t[E[_]]&&(T|=t[E[_]]);E=T}return E&t.ENT_HTML_QUOTE_SINGLE&&(e=e.replace(/&#0*39;/g,"'")),r||(e=e.replace(/&quot;/g,'"')),e=e.replace(/&amp;/g,"&")}
function htmlspecialchars(e,E,T,_){var r=0,t=0,a=!1;("undefined"==typeof E||null===E)&&(E=2),e=e.toString(),_!==!1&&(e=e.replace(/&/g,"&amp;")),e=e.replace(/</g,"&lt;").replace(/>/g,"&gt;");var N={ENT_NOQUOTES:0,ENT_HTML_QUOTE_SINGLE:1,ENT_HTML_QUOTE_DOUBLE:2,ENT_COMPAT:2,ENT_QUOTES:3,ENT_IGNORE:4};if(0===E&&(a=!0),"number"!=typeof E){for(E=[].concat(E),t=0;t<E.length;t++)0===N[E[t]]?a=!0:N[E[t]]&&(r|=N[E[t]]);E=r}return E&N.ENT_HTML_QUOTE_SINGLE&&(e=e.replace(/'/g,"&#039;")),a||(e=e.replace(/"/g,"&quot;")),e};
function htmlencode(sStr){return htmlspecialchars(sStr);};
function htmldecode(sStr){return htmlspecialchars_decode(sStr)};
function isset(){var a=arguments,l=a.length,i=0,undef;if(l===0){throw new Error("Empty isset")}while(i!==l){if(a[i]===undef||a[i]===null){return false}i++}return true};
function empty(mixed_var){var undef,key,i,len;var emptyValues=[undef,null,false,0,"","0"];for(i=0,len=emptyValues.length;i<len;i++){if(mixed_var===emptyValues[i]){return true}}if(typeof mixed_var==="object"){for(key in mixed_var){return false}return true}return false};
function intval(mixed_var,base){var tmp;var type=typeof mixed_var;if(type==="boolean"){return +mixed_var}else{if(type==="string"){tmp=parseInt(mixed_var,base||10);return(isNaN(tmp)||!isFinite(tmp))?0:tmp}else{if(type==="number"&&isFinite(mixed_var)){return mixed_var|0}else{return 0}}}};
function function_exists(func_name){if(typeof func_name==="string"){func_name=this.window[func_name]}return typeof func_name==="function"};
function in_array(needle,haystack,argStrict){var key="",strict=!!argStrict;if(strict){for(key in haystack){if(haystack[key]===needle){return true}}}else{for(key in haystack){if(haystack[key]==needle){return true}}}return false};
function range(low,high,step){var matrix=[];var inival,endval,plus;var walker=step||1;var chars=false;if(!isNaN(low)&&!isNaN(high)){inival=low;endval=high}else{if(isNaN(low)&&isNaN(high)){chars=true;inival=low.charCodeAt(0);endval=high.charCodeAt(0)}else{inival=(isNaN(low)?0:low);endval=(isNaN(high)?0:high)}}plus=((inival>endval)?false:true);if(plus){while(inival<=endval){matrix.push(((chars)?String.fromCharCode(inival):inival));inival+=walker}}else{while(inival>=endval){matrix.push(((chars)?String.fromCharCode(inival):inival));inival-=walker}}return matrix};
function strip_tags(input,allowed){allowed=(((allowed||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join("");var tags=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,commentsAndPhpTags=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;return input.replace(commentsAndPhpTags,"").replace(tags,function($0,$1){return allowed.indexOf("<"+$1.toLowerCase()+">")>-1?$0:""})};
function rand(min,max){var argc=arguments.length;if(argc===0){min=0;max=2147483647}else{if(argc===1){throw new Error("Warning: rand() expects exactly 2 parameters, 1 given")}}return Math.floor(Math.random()*(max-min+1))+min};
function round(value,precision,mode){var m,f,isHalf,sgn;precision|=0;m=Math.pow(10,precision);value*=m;sgn=(value>0)|-(value<0);isHalf=value%1===0.5*sgn;f=Math.floor(value);if(isHalf){switch(mode){case"PHP_ROUND_HALF_DOWN":value=f+(sgn<0);break;case"PHP_ROUND_HALF_EVEN":value=f+(f%2*sgn);break;case"PHP_ROUND_HALF_ODD":value=f+!(f%2);break;default:value=f+(sgn>0)}}return(isHalf?value:Math.round(value))/m};
function strtolower(str){return(str+"").toLowerCase()};
function strtoupper(str){return(str+"").toUpperCase()};
function floatval(mixed_var){return(parseFloat(mixed_var)||0)};
function ucfirst(str){str+="";var f=str.charAt(0).toUpperCase();return f+str.substr(1)};
function base_convert(number,frombase,tobase){return parseInt(number+"",frombase|0).toString(tobase|0)};
function floor(value){return Math.floor(value)};
function ceil(value){return Math.ceil(value)}; 
function utf8_encode(argString){if(argString===null||typeof argString==="undefined"){return""}var string=(argString+"");var utftext="",start,end,stringl=0;start=end=0;stringl=string.length;for(var n=0;n<stringl;n++){var c1=string.charCodeAt(n);var enc=null;if(c1<128){end++}else{if(c1>127&&c1<2048){enc=String.fromCharCode((c1>>6)|192,(c1&63)|128)}else{if((c1&63488)!=55296){enc=String.fromCharCode((c1>>12)|224,((c1>>6)&63)|128,(c1&63)|128)}else{if((c1&64512)!=55296){throw new RangeError("Unmatched trail surrogate at "+n)}var c2=string.charCodeAt(++n);if((c2&64512)!=56320){throw new RangeError("Unmatched lead surrogate at "+(n-1))}c1=((c1&1023)<<10)+(c2&1023)+65536;enc=String.fromCharCode((c1>>18)|240,((c1>>12)&63)|128,((c1>>6)&63)|128,(c1&63)|128)}}}if(enc!==null){if(end>start){utftext+=string.slice(start,end)}utftext+=enc;start=end=n+1}}if(end>start){utftext+=string.slice(start,stringl)}return utftext};
function utf8_decode(str_data){var tmp_arr=[],i=0,c1=0,seqlen=0;str_data+="";while(i<str_data.length){c1=str_data.charCodeAt(i)&255;seqlen=0;if(c1<=191){c1=(c1&127);seqlen=1}else{if(c1<=223){c1=(c1&31);seqlen=2}else{if(c1<=239){c1=(c1&15);seqlen=3}else{c1=(c1&7);seqlen=4}}}for(var ai=1;ai<seqlen;++ai){c1=((c1<<6)|(str_data.charCodeAt(ai+i)&63))}if(seqlen==4){c1-=65536;tmp_arr.push(String.fromCharCode(55296|((c1>>10)&1023)),String.fromCharCode(56320|(c1&1023)))}else{tmp_arr.push(String.fromCharCode(c1))}i+=seqlen}return tmp_arr.join("")};
function urlencode(str){str=(str+"").toString();return encodeURIComponent(str).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+")};
function urldecode(str){return decodeURIComponent((str+"").replace(/%(?![\da-f]{2})/gi,function(){return"%25"}).replace(/\+/g,"%20"))};
function base64_encode(data){var b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var o1,o2,o3,h1,h2,h3,h4,bits,i=0,ac=0,enc="",tmp_arr=[];if(!data){return data}data=unescape(encodeURIComponent(data));do{o1=data.charCodeAt(i++);o2=data.charCodeAt(i++);o3=data.charCodeAt(i++);bits=o1<<16|o2<<8|o3;h1=bits>>18&63;h2=bits>>12&63;h3=bits>>6&63;h4=bits&63;tmp_arr[ac++]=b64.charAt(h1)+b64.charAt(h2)+b64.charAt(h3)+b64.charAt(h4)}while(i<data.length);enc=tmp_arr.join("");var r=data.length%3;return(r?enc.slice(0,r-3):enc)+"===".slice(r||3)};
function base64_decode(data){var b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var o1,o2,o3,h1,h2,h3,h4,bits,i=0,ac=0,dec="",tmp_arr=[];if(!data){return data}data+="";do{h1=b64.indexOf(data.charAt(i++));h2=b64.indexOf(data.charAt(i++));h3=b64.indexOf(data.charAt(i++));h4=b64.indexOf(data.charAt(i++));bits=h1<<18|h2<<12|h3<<6|h4;o1=bits>>16&255;o2=bits>>8&255;o3=bits&255;if(h3==64){tmp_arr[ac++]=String.fromCharCode(o1)}else{if(h4==64){tmp_arr[ac++]=String.fromCharCode(o1,o2)}else{tmp_arr[ac++]=String.fromCharCode(o1,o2,o3)}}}while(i<data.length);dec=tmp_arr.join("");return decodeURIComponent(escape(dec.replace(/\0+$/,"")))};
function preg_replace(pattern,replacement,subject,limit){if(typeof limit==='undefined')limit=-1;if(subject.match(eval(pattern))){if(limit==-1){return subject.replace(eval(pattern+'g'),replacement);}else{for(x=0;x<limit;x++){subject=subject.replace(eval(pattern),replacement);}return subject;}}else{return subject;}}
function strcut(str,iMaxBytes,sSuffix){if(isNaN(iMaxBytes)){return str}if(strlen(str)<=iMaxBytes){return str}var i=0,bytes=0;for(;i<str.length&&bytes<iMaxBytes;++i,++bytes){if(str.charCodeAt(i)>255){++bytes}}sSuffix=sSuffix||"";return(bytes-iMaxBytes==1?str.substr(0,i-1):str.substr(0,i))+sSuffix};
function strlen(str){var bytes=0,i=0;for(;i<str.length;++i,++bytes){if(str.charCodeAt(i)>255){++bytes}}return bytes};
function implode(c,a){return a.join(c);};
function explode(separator,str,limit){if(typeof limit=='undefined'){return str.split(separator);}return str.split(separator,limit);}
function json2str(oJson){if(typeof(oJson)==typeof(false)){return oJson}if(oJson==null){return"null"}if(typeof(oJson)==typeof(0)){return oJson.toString()}if(typeof(oJson)==typeof("")||oJson instanceof String){oJson=oJson.toString();oJson=oJson.replace(/\\r\\n/,"\\\\r\\\\n");oJson=oJson.replace(/\\n/,"\\\\n");oJson=oJson.replace(/\\"/,'\\\\"');return'"'+oJson+'"'}if(oJson instanceof Array){var strRet="[";for(var i=0;i<oJson.length;i++){if(strRet.length>1){strRet+=","}strRet+=json2str(oJson[i])}strRet+="]";return strRet}if(typeof(oJson)==typeof({})){var strRet="{";for(var p in oJson){if(strRet.length>1){strRet+=","}strRet+='"'+p.toString()+'":'+json2str(oJson[p])}strRet+="}";return strRet}};
function str2json(str){return JSON.stringify(str)};
var is_eq=function(str1,str2){if(str1==str2){return(true)}else{return(false)}};
var is_num=function(num){var reg=new RegExp("^[0-9]*$");return reg.test(num)};
var is_phone=function(num){var reg=/^1\d{10}$/;return reg.test(num)};
var is_qq=function(num){var reg=/^[1-9]{1}\d{4,11}$/;return reg.test(num)};
var is_email=function(num){var reg=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;return reg.test(num)};
var is_id=function(num){var reg=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/;return reg.test(num)};
var is_chinese=function(num){var reg=/[\u4e00-\u9fa5]/g;return reg.test(num)};
var is_reg=function(num){var reg=/^([a-zA-z_]{1})([\w]*)$/g;return reg.test(num)};
var is_tel=function(str){var reg=/^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;return reg.test(str)};
var is_ip=function(strIP){if(isNull(strIP)){return false}var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g;if(re.test(strIP)){if(RegExp.$1<256&&RegExp.$2<256&&RegExp.$3<256&&RegExp.$4<256){return true}}return false};
var is_zipcode=function(str){var reg=/^(\d){6}$/;return reg.test(str)};
var is_english=function(str){var reg=/^[A-Za-z]+$/;return reg.test(str)};
var is_url=function(str){var reg=/^http:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;return reg.test(str)};
var is_int=function(n,iMin,iMax){if(!isFinite(n)){return false}if(!/^[+-]?\d+$/.test(n)){return false}if(iMin!=undefined&&parseInt(n)<parseInt(iMin)){return false}if(iMax!=undefined&&parseInt(n)>parseInt(iMax)){return false}return true};
var is_float=function(n,fMin,fMax){if(!isFinite(n)){return false}if(fMin!=undefined&&parseFloat(n)<parseFloat(fMin)){return false}if(fMax!=undefined&&parseFloat(n)>parseFloat(fMax)){return false}return true};
var is_http=function(url){if(url.indexOf("http://")===-1&&url.indexOf("https://")===-1){return false}return true};
function strfind(string, find) {return !(string.indexOf(find)=== -1);};
function date_eq(strDate1,strDate2){var date1=new Date(strDate1.replace(/\-/g,"\/"));var date2=new Date(strDate2.replace(/\-/g,"\/"));if((date1-date2)>=0){return true;}else{return false;}}
function timeline(tt){var today=new Date();var d=new Date(tt);var m=today.getTime()-d.getTime();if(m<=0){m=1000}if(m<60*1000){return Math.floor(m/1000)+"秒前"}else{if(m<60*60*1000){return Math.floor(m/(1000*60))+"分钟前"}else{if(m<60*60*1000*24){return Math.floor(m/(1000*60*60))+"小时前"}else{if(m<60*60*1000*24*7){return Math.floor(m/(1000*60*60*24))+"天前"}else{if(m<60*60*1000*24*7*56){return Math.floor(m/(1000*60*60*24*7))+"周前"}else{return Math.floor(m/(1000*60*60*24*7*52))+"年前"}}}}}};
function strtrim(a){return a.replace(/\s+/g," ");};
function md5(C){var D;var w=function(b,a){return(b<<a)|(b>>>(32-a))};var H=function(k,b){var V,a,d,x,c;d=(k&2147483648);x=(b&2147483648);V=(k&1073741824);a=(b&1073741824);c=(k&1073741823)+(b&1073741823);if(V&a){return(c^2147483648^d^x)}if(V|a){if(c&1073741824){return(c^3221225472^d^x)}else{return(c^1073741824^d^x)}}else{return(c^d^x)}};var r=function(a,c,b){return(a&c)|((~a)&b)};var q=function(a,c,b){return(a&b)|(c&(~b))};var p=function(a,c,b){return(a^c^b)};var n=function(a,c,b){return(c^(a|(~b)))};var u=function(W,V,aa,Z,k,X,Y){W=H(W,H(H(r(V,aa,Z),k),Y));return H(w(W,X),V)};var f=function(W,V,aa,Z,k,X,Y){W=H(W,H(H(q(V,aa,Z),k),Y));return H(w(W,X),V)};var F=function(W,V,aa,Z,k,X,Y){W=H(W,H(H(p(V,aa,Z),k),Y));return H(w(W,X),V)};var t=function(W,V,aa,Z,k,X,Y){W=H(W,H(H(n(V,aa,Z),k),Y));return H(w(W,X),V)};var e=function(V){var W;var d=V.length;var c=d+8;var b=(c-(c%64))/64;var x=(b+1)*16;var X=new Array(x-1);var a=0;var k=0;while(k<d){W=(k-(k%4))/4;a=(k%4)*8;X[W]=(X[W]|(V.charCodeAt(k)<<a));k++}W=(k-(k%4))/4;a=(k%4)*8;X[W]=X[W]|(128<<a);X[x-2]=d<<3;X[x-1]=d>>>29;return X};var s=function(d){var a="",b="",k,c;for(c=0;c<=3;c++){k=(d>>>(c*8))&255;b="0"+k.toString(16);a=a+b.substr(b.length-2,2)}return a};var E=[],L,h,G,v,g,U,T,S,R,O=7,M=12,J=17,I=22,B=5,A=9,z=14,y=20,o=4,m=11,l=16,j=23,Q=6,P=10,N=15,K=21;C=this.utf8_encode(C);E=e(C);U=1732584193;T=4023233417;S=2562383102;R=271733878;D=E.length;for(L=0;L<D;L+=16){h=U;G=T;v=S;g=R;U=u(U,T,S,R,E[L+0],O,3614090360);R=u(R,U,T,S,E[L+1],M,3905402710);S=u(S,R,U,T,E[L+2],J,606105819);T=u(T,S,R,U,E[L+3],I,3250441966);U=u(U,T,S,R,E[L+4],O,4118548399);R=u(R,U,T,S,E[L+5],M,1200080426);S=u(S,R,U,T,E[L+6],J,2821735955);T=u(T,S,R,U,E[L+7],I,4249261313);U=u(U,T,S,R,E[L+8],O,1770035416);R=u(R,U,T,S,E[L+9],M,2336552879);S=u(S,R,U,T,E[L+10],J,4294925233);T=u(T,S,R,U,E[L+11],I,2304563134);U=u(U,T,S,R,E[L+12],O,1804603682);R=u(R,U,T,S,E[L+13],M,4254626195);S=u(S,R,U,T,E[L+14],J,2792965006);T=u(T,S,R,U,E[L+15],I,1236535329);U=f(U,T,S,R,E[L+1],B,4129170786);R=f(R,U,T,S,E[L+6],A,3225465664);S=f(S,R,U,T,E[L+11],z,643717713);T=f(T,S,R,U,E[L+0],y,3921069994);U=f(U,T,S,R,E[L+5],B,3593408605);R=f(R,U,T,S,E[L+10],A,38016083);S=f(S,R,U,T,E[L+15],z,3634488961);T=f(T,S,R,U,E[L+4],y,3889429448);U=f(U,T,S,R,E[L+9],B,568446438);R=f(R,U,T,S,E[L+14],A,3275163606);S=f(S,R,U,T,E[L+3],z,4107603335);T=f(T,S,R,U,E[L+8],y,1163531501);U=f(U,T,S,R,E[L+13],B,2850285829);R=f(R,U,T,S,E[L+2],A,4243563512);S=f(S,R,U,T,E[L+7],z,1735328473);T=f(T,S,R,U,E[L+12],y,2368359562);U=F(U,T,S,R,E[L+5],o,4294588738);R=F(R,U,T,S,E[L+8],m,2272392833);S=F(S,R,U,T,E[L+11],l,1839030562);T=F(T,S,R,U,E[L+14],j,4259657740);U=F(U,T,S,R,E[L+1],o,2763975236);R=F(R,U,T,S,E[L+4],m,1272893353);S=F(S,R,U,T,E[L+7],l,4139469664);T=F(T,S,R,U,E[L+10],j,3200236656);U=F(U,T,S,R,E[L+13],o,681279174);R=F(R,U,T,S,E[L+0],m,3936430074);S=F(S,R,U,T,E[L+3],l,3572445317);T=F(T,S,R,U,E[L+6],j,76029189);U=F(U,T,S,R,E[L+9],o,3654602809);R=F(R,U,T,S,E[L+12],m,3873151461);S=F(S,R,U,T,E[L+15],l,530742520);T=F(T,S,R,U,E[L+2],j,3299628645);U=t(U,T,S,R,E[L+0],Q,4096336452);R=t(R,U,T,S,E[L+7],P,1126891415);S=t(S,R,U,T,E[L+14],N,2878612391);T=t(T,S,R,U,E[L+5],K,4237533241);U=t(U,T,S,R,E[L+12],Q,1700485571);R=t(R,U,T,S,E[L+3],P,2399980690);S=t(S,R,U,T,E[L+10],N,4293915773);T=t(T,S,R,U,E[L+1],K,2240044497);U=t(U,T,S,R,E[L+8],Q,1873313359);R=t(R,U,T,S,E[L+15],P,4264355552);S=t(S,R,U,T,E[L+6],N,2734768916);T=t(T,S,R,U,E[L+13],K,1309151649);U=t(U,T,S,R,E[L+4],Q,4149444226);R=t(R,U,T,S,E[L+11],P,3174756917);S=t(S,R,U,T,E[L+2],N,718787259);T=t(T,S,R,U,E[L+9],K,3951481745);U=H(U,h);T=H(T,G);S=H(S,v);R=H(R,g)}var i=s(U)+s(T)+s(S)+s(R);return i.toLowerCase()};
function strcmp(b,a){return((b==a)?0:((b>a)?1:-1))};
function strnatcmp(g,f,d){var b=0;if(d==undefined){d=false}var e=function(p){var n=[];var o="";var r="";var q=0,m=0;var s=true;m=p.length;for(q=0;q<m;q++){r=p.substring(q,q+1);if(r.match(/\d/)){if(s){if(o.length>0){n[n.length]=o;o=""}s=false}o+=r}else{if((s==false)&&(r===".")&&(q<(p.length-1))&&(p.substring(q+1,q+2).match(/\d/))){n[n.length]=o;o=""}else{if(s==false){if(o.length>0){n[n.length]=parseInt(o,10);o=""}s=true}o+=r}}}if(o.length>0){if(s){n[n.length]=o}else{n[n.length]=parseInt(o,10)}}return n};var l=e(g+"");var j=e(f+"");var c=l.length;var h=true;var k=-1;var a=0;if(c>j.length){c=j.length;k=1}for(b=0;b<c;b++){if(isNaN(l[b])){if(isNaN(j[b])){h=true;if((a=strcmp(l[b],j[b]))!=0){return a}}else{if(h){return 1}else{return -1}}}else{if(isNaN(j[b])){if(h){return -1}else{return 1}}else{if(h||d){if((a=(l[b]-j[b]))!=0){return a}}else{if((a=strcmp(l[b].toString(),j[b].toString()))!=0){return a}}h=false}}}return k};
function sort(inputArr,sort_flags,strictForIn=true){var valArr=[],keyArr=[],k='',i=0,sorter=false,populateArr=[];switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return strnatcmp(a,b);};break;case'SORT_NUMERIC':sorter=function(a,b){return(a-b);};break;default:sorter=function(a,b){var aFloat=parseFloat(a),bFloat=parseFloat(b),aNumeric=aFloat+''===a,bNumeric=bFloat+''===b;if(aNumeric&&bNumeric){return aFloat>bFloat?1:aFloat<bFloat?-1:0;}else if(aNumeric&&!bNumeric){return 1;}else if(!aNumeric&&bNumeric){return-1;}return a>b?1:a<b?-1:0;};break;}populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push(inputArr[k]);if(strictForIn){delete inputArr[k];}}}valArr.sort(sorter);for(i=0;i<valArr.length;i++){populateArr[i]=valArr[i];}return strictForIn||populateArr;}
function sha1(r){var c=function(w,j){var i=(w<<j)|(w>>>(32-j));return i};var s=function(y){var x="";var w;var j;for(w=7;w>=0;w--){j=(y>>>(w*4))&15;x+=j.toString(16)}return x};var f;var u,t;var b=new Array(80);var l=1732584193;var h=4023233417;var g=2562383102;var e=271733878;var d=3285377520;var q,p,o,n,m;var v;r=unescape(encodeURIComponent(r));var a=r.length;var k=[];for(u=0;u<a-3;u+=4){t=r.charCodeAt(u)<<24|r.charCodeAt(u+1)<<16|r.charCodeAt(u+2)<<8|r.charCodeAt(u+3);k.push(t)}switch(a%4){case 0:u=2147483648;break;case 1:u=r.charCodeAt(a-1)<<24|8388608;break;case 2:u=r.charCodeAt(a-2)<<24|r.charCodeAt(a-1)<<16|32768;break;case 3:u=r.charCodeAt(a-3)<<24|r.charCodeAt(a-2)<<16|r.charCodeAt(a-1)<<8|128;break}k.push(u);while((k.length%16)!=14){k.push(0)}k.push(a>>>29);k.push((a<<3)&4294967295);for(f=0;f<k.length;f+=16){for(u=0;u<16;u++){b[u]=k[f+u]}for(u=16;u<=79;u++){b[u]=c(b[u-3]^b[u-8]^b[u-14]^b[u-16],1)}q=l;p=h;o=g;n=e;m=d;for(u=0;u<=19;u++){v=(c(q,5)+((p&o)|(~p&n))+m+b[u]+1518500249)&4294967295;m=n;n=o;o=c(p,30);p=q;q=v}for(u=20;u<=39;u++){v=(c(q,5)+(p^o^n)+m+b[u]+1859775393)&4294967295;m=n;n=o;o=c(p,30);p=q;q=v}for(u=40;u<=59;u++){v=(c(q,5)+((p&o)|(p&n)|(o&n))+m+b[u]+2400959708)&4294967295;m=n;n=o;o=c(p,30);p=q;q=v}for(u=60;u<=79;u++){v=(c(q,5)+(p^o^n)+m+b[u]+3395469782)&4294967295;m=n;n=o;o=c(p,30);p=q;q=v}l=(l+q)&4294967295;h=(h+p)&4294967295;g=(g+o)&4294967295;e=(e+n)&4294967295;d=(d+m)&4294967295}v=s(l)+s(h)+s(g)+s(e)+s(d);return v.toLowerCase()};
function ksort(inputArr,sort_flags){return sort(inputArr,sort_flags,false);};
function uniqid(d,c){if(typeof d==="undefined"){d=""}var b;var a=function(e,f){e=parseInt(e,10).toString(16);if(f<e.length){return e.slice(e.length-f)}if(f>e.length){return Array(1+(f-e.length)).join("0")+e}return e};if(!this.php_js){this.php_js={}}if(!this.php_js.uniqidSeed){this.php_js.uniqidSeed=Math.floor(Math.random()*123456789)}this.php_js.uniqidSeed++;b=d;b+=a(parseInt(new Date().getTime()/1000,10),8);b+=a(this.php_js.uniqidSeed,5);if(c){b+=(Math.random()*10).toFixed(8).toString()}return b};
function count(c,d){var b,a=0;if(c===null||typeof c==="undefined"){return 0}else{if(c.constructor!==Array&&c.constructor!==Object){return 1}}if(d==="COUNT_RECURSIVE"){d=1}if(d!=1){d=0}for(b in c){if(c.hasOwnProperty(b)){a++;if(d==1&&c[b]&&(c[b].constructor===Array||c[b].constructor===Object)){a+=this.count(c[b],1)}}}return a};
function mktime(){var f=new Date(),b=arguments,a=0,c=["Hours","Minutes","Seconds","Month","Date","FullYear"];for(a=0;a<c.length;a++){if(typeof b[a]==="undefined"){b[a]=f["get"+c[a]]();b[a]+=(a===3)}else{b[a]=parseInt(b[a],10);if(isNaN(b[a])){return false}}}b[5]+=(b[5]>=0?(b[5]<=69?2000:(b[5]<=100?1900:0)):0);f.setFullYear(b[5],b[3]-1,b[4]);f.setHours(b[0],b[1],b[2]);return(f.getTime()/1000>>0)-(f.getTime()<0)};
function foreach(a,d){var b,c,e;if(a&&typeof a==="object"&&a.change_key_case){return a.foreach(d)}if(typeof this.Iterator!=="undefined"){var c=this.Iterator(a);if(d.length===1){for(e in c){d(e[1])}}else{for(e in c){d(e[0],e[1])}}}else{if(d.length===1){for(b in a){if(a.hasOwnProperty(b)){d(a[b])}}}else{for(b in a){if(a.hasOwnProperty(b)){d(b,a[b])}}}}};
function unset(){var i=0,arg="",win="",winRef=/^(?:this)?window[.[]/,arr=[],accessor="",bracket=/\[['"]?(\d+)['"]?\]$/;for(i=0;i<arguments.length;i++){arg=arguments[i];winRef.lastIndex=0,bracket.lastIndex=0;win=winRef.test(arg)?"":"this.window.";if(bracket.test(arg)){accessor=arg.match(bracket)[1];arr=eval(win+arg.replace(bracket,""));arr.splice(accessor,1)}else{eval("delete "+win+arg)}}};
function array_merge(){var g=Array.prototype.slice.call(arguments),l=g.length,m,b={},a="",n=0,c=0,e=0,f=0,h=Object.prototype.toString,d=true;for(e=0;e<l;e++){if(h.call(g[e])!=="[object Array]"){d=false;break}}if(d){d=[];for(e=0;e<l;e++){d=d.concat(g[e])}return d}for(e=0,f=0;e<l;e++){m=g[e];if(h.call(m)==="[object Array]"){for(c=0,n=m.length;c<n;c++){b[f++]=m[c]}}else{for(a in m){if(m.hasOwnProperty(a)){if(parseInt(a,10)+""===a){b[f++]=m[a]}else{b[a]=m[a]}}}}}return b};
function array_search(f,e,d){var b=!!d,c="";if(e&&typeof e==="object"&&e.change_key_case){return e.search(f,d)}if(typeof f==="object"&&f.exec){if(!b){var a="i"+(f.global?"g":"")+(f.multiline?"m":"")+(f.sticky?"y":"");f=new RegExp(f.source,a)}for(c in e){if(e.hasOwnProperty(c)){if(f.test(e[c])){return c}}}return false}for(c in e){if(e.hasOwnProperty(c)){if((b&&e[c]===f)||(!b&&e[c]==f)){return c}}}return false};
function array_keys(c,e,h){var g=typeof e!=="undefined",d=[],b=!!h,a=true,f="";if(c&&typeof c==="object"&&c.change_key_case){return c.keys(e,h)}for(f in c){if(c.hasOwnProperty(f)){a=true;if(g){if(b&&c[f]!==e){a=false}else{if(c[f]!=e){a=false}}}if(a){d[d.length]=f}}}return d};
function array_values(a){var b=[],c="";if(a&&typeof a==="object"&&a.change_key_case){return a.values()}for(c in a){b[b.length]=a[c]}return b};
function array_slice(f,i,d,b){var j="";if(Object.prototype.toString.call(f)!=="[object Array]"||(b&&i!==0)){var g=0,k={};for(j in f){g+=1;k[j]=f[j]}f=k;i=(i<0)?g+i:i;d=d===undefined?g:(d<0)?g+d-i:d;var h={};var a=false,e=-1,l=0,c=0;for(j in f){++e;if(l>=d){break}if(e==i){a=true}if(!a){continue}++l;if(this.is_int(j)&&!b){h[c++]=f[j]}else{h[j]=f[j]}}return h}if(d===undefined){return f.slice(i)}else{if(d>=0){return f.slice(i,i+d)}else{return f.slice(i,d)}}};
function str_replace(t,c,m,l){var g=0,e=0,p="",k="",d=0,o=0,h=[].concat(t),a=[].concat(c),q=m,b=Object.prototype.toString.call(a)==="[object Array]",n=Object.prototype.toString.call(q)==="[object Array]";q=[].concat(q);if(typeof(t)==="object"&&typeof(c)==="string"){p=c;c=new Array();for(g=0;g<t.length;g+=1){c[g]=p}p="";a=[].concat(c);b=Object.prototype.toString.call(a)==="[object Array]"}if(l){this.window[l]=0}for(g=0,d=q.length;g<d;g++){if(q[g]===""){continue}for(e=0,o=h.length;e<o;e++){p=q[g]+"";k=b?(a[e]!==undefined?a[e]:""):a[0];q[g]=(p).split(h[e]).join(k);if(l){this.window[l]+=((p.split(h[e])).length-1)}}}return n?q:q[0]};
function log(arr){console.log(arr);}

export default {time,date,microtime,strtotime,htmlencode,htmldecode,isset,empty,intval,function_exists,in_array,range,strip_tags,rand,round,strtolower,strtoupper,floatval,ucfirst,base_convert,floor,ceil,utf8_decode,utf8_encode,urlencode,urldecode,base64_decode,base64_encode,preg_replace,strcut,implode,explode,json2str,str2json,
is_eq,is_num,is_phone,is_qq,is_email,is_id,is_chinese,is_reg,is_tel,is_zipcode,is_english,is_url,is_int,is_float,is_http,
strfind,date_eq,timeline,strtrim,md5,sort,ksort,sha1,uniqid,count,mktime,log,foreach,unset,array_merge,array_search,array_keys,array_values,array_slice,
	str_replace}