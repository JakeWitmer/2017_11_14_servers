var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var k=this;var l=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},m=function(a,b){return a<b?-1:a>b?1:0};var n;a:{var p=k.navigator;if(p){var r=p.userAgent;if(r){n=r;break a}}n=""};var ba=function(a,b){var c=aa;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))};var ca=-1!=n.indexOf("Opera"),v=-1!=n.indexOf("Trident")||-1!=n.indexOf("MSIE"),da=-1!=n.indexOf("Edge"),w=-1!=n.indexOf("Gecko")&&!(-1!=n.toLowerCase().indexOf("webkit")&&-1==n.indexOf("Edge"))&&!(-1!=n.indexOf("Trident")||-1!=n.indexOf("MSIE"))&&-1==n.indexOf("Edge"),ea=-1!=n.toLowerCase().indexOf("webkit")&&-1==n.indexOf("Edge"),y=function(){var a=k.document;return a?a.documentMode:void 0},z;
a:{var C="",D=function(){var a=n;if(w)return/rv\:([^\);]+)(\)|;)/.exec(a);if(da)return/Edge\/([\d\.]+)/.exec(a);if(v)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ea)return/WebKit\/(\S+)/.exec(a);if(ca)return/(?:Version)[ \/]?(\S+)/.exec(a)}();D&&(C=D?D[1]:"");if(v){var E=y();if(null!=E&&E>parseFloat(C)){z=String(E);break a}}z=C}
var F=z,aa={},H=function(a){ba(a,function(){for(var b=0,c=l(String(F)).split("."),d=l(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",g=d[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==h[0].length&&0==g[0].length)break;b=m(0==h[1].length?0:parseInt(h[1],10),0==g[1].length?0:parseInt(g[1],10))||m(0==h[2].length,0==g[2].length)||m(h[2],g[2]);h=h[3];g=g[3]}while(0==b)}return 0<=b})},fa;var ha=k.document;
fa=ha&&v?y()||("CSS1Compat"==ha.compatMode?parseInt(F,10):5):void 0;var I;if(!(I=!w&&!v)){var J;if(J=v)J=9<=Number(fa);I=J}I||w&&H("1.9.1");v&&H("9");/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var K=window,L=document,ia=K.location,ja=function(){},ka=/\[native code\]/,M=function(a,b,c){return a[b]=a[b]||c},la=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b},N=function(){var a;if((a=Object.create)&&ka.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a},O=M(K,"gapi",{});var P;P=M(K,"___jsl",N());M(P,"I",0);M(P,"hel",10);var ma=function(){var a=ia.href;if(P.dpo)var b=P.h;else{b=P.h;var c=/([#].*&|[#])jsh=([^&#]*)/g,d=/([?#].*&|[?#])jsh=([^&#]*)/g;if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b},na=function(a){var b=M(P,"PQ",[]);P.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)},Q=function(a){return M(M(P,"H",N()),a,N())};var R=M(P,"perf",N()),oa=M(R,"g",N()),pa=M(R,"i",N());M(R,"r",[]);N();N();var U=function(a,b,c){var d=R.r;"function"===typeof d?d(a,b,c):d.push([a,b,c])},V=function(a,b,c){b&&0<b.length&&(b=ra(b),c&&0<c.length&&(b+="___"+ra(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=M(pa,"_p",N()),M(b,c,N())[a]=(new Date).getTime(),U(a,"_p",c))},ra=function(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")};var sa=N(),W=[],X=function(a){throw Error("Bad hint"+(a?": "+a:""));};W.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?P[b]=M(P,b,[]).concat(c):M(P,b,c)}if(b=a.u)a=M(P,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);var ta=/^(\/[a-zA-Z0-9_\-]+)+$/,ua=[/\/amp\//,/\/amp$/,/^\/amp$/],va=/^[a-zA-Z0-9\-_\.,!]+$/,wa=/^gapi\.loaded_[0-9]+$/,xa=/^[a-zA-Z0-9,._-]+$/,Ba=function(a,b,c,d){var e=a.split(";"),f=e.shift(),h=sa[f],g=null;h?g=h(e,b,c,d):X("no hint processor for: "+f);g||X("failed to generate load url");b=g;c=b.match(ya);(d=b.match(za))&&1===d.length&&Aa.test(b)&&c&&1===c.length||X("failed sanity: "+a);return g},Ea=function(a,b,c,d){a=Ca(a);wa.test(c)||X("invalid_callback");b=Da(b);d=d&&d.length?Da(d):null;var e=
function(a){return encodeURIComponent(a).replace(/%2C/g,",")};return[encodeURIComponent(a.g).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.a?"/am="+e(a.a):"",a.c?"/rs="+e(a.c):"",a.f?"/t="+e(a.f):"","/cb=",e(c)].join("")},Ca=function(a){"/"!==a.charAt(0)&&X("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))X("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);
break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),h=decodeURIComponent(f[0]),g=decodeURIComponent(f[1]);2==f.length&&h&&g&&(a[h]=a[h]||g)}b="/"+c.join("/");ta.test(b)||X("invalid_prefix");c=0;for(d=ua.length;c<d;++c)ua[c].test(b)&&X("invalid_prefix");c=Y(a,"k",!0);d=Y(a,"am");e=Y(a,"rs");a=Y(a,"t");return{g:b,version:c,a:d,c:e,f:a}},Da=function(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");xa.test(e)&&b.push(e)}return b.join(",")},
Y=function(a,b,c){a=a[b];!a&&c&&X("missing: "+b);if(a){if(va.test(a))return a;X("invalid: "+b)}return null},Aa=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,za=/\/cb=/g,ya=/\/\//g,Fa=function(){var a=ma();if(!a)throw Error("Bad hint");return a};sa.m=function(a,b,c,d){(a=a[0])||X("missing_hint");return"https://apis.google.com"+Ea(a,b,c,d)};var Z=decodeURI("%73cript"),Ga=/^[-+_0-9\/A-Za-z]+={0,2}$/,Ha=function(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c},Ia=function(){var a=P.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(Ga)?a:P.nonce=null;var b=M(P,"us",[]);if(!b||!b.length)return P.nonce=null;for(var c=L.getElementsByTagName(Z),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.nonce||f.getAttribute("nonce")||"")||null)){for(var h=
0,g=b.length;h<g&&b[h]!==f.src;++h);if(h!==g&&a&&a===String(a)&&a.match(Ga))return P.nonce=a}}return null},Ka=function(a){if("loading"!=L.readyState)Ja(a);else{var b=Ia(),c="";null!==b&&(c=' nonce="'+b+'"');L.write("<"+Z+' src="'+encodeURI(a)+'"'+c+"></"+Z+">")}},Ja=function(a){var b=L.createElement(Z);b.setAttribute("src",a);a=Ia();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=L.getElementsByTagName(Z)[0])?a.parentNode.insertBefore(b,a):(L.head||L.body||L.documentElement).appendChild(b)},
La=function(a,b){var c=b&&b._c;if(c)for(var d=0;d<W.length;d++){var e=W[d][0],f=W[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}},Na=function(a,b,c){Ma(function(){var c=b===ma()?M(O,"_",N()):N();c=M(Q(b),"_",c);a(c)},c)},Pa=function(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);La(a,c);b=a?a.split(":"):[];var d=c.h||Fa(),e=M(P,"ah",N());if(e["::"]&&b.length){a=[];for(var f=null;f=b.shift();){var h=f.split(".");h=e[f]||e[h[1]&&"ns:"+h[0]||""]||d;var g=a.length&&a[a.length-
1]||null,x=g;g&&g.hint==h||(x={hint:h,b:[]},a.push(x));x.b.push(f)}var A=a.length;if(1<A){var B=c.callback;B&&(c.callback=function(){0==--A&&B()})}for(;b=a.shift();)Oa(b.b,c,b.hint)}else Oa(b||[],c,d)},Oa=function(a,b,c){a=la(a)||[];var d=b.callback,e=b.config,f=b.timeout,h=b.ontimeout,g=b.onerror,x=void 0;"function"==typeof g&&(x=g);var A=null,B=!1;if(f&&!h||!f&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";g=M(Q(c),"r",[]).sort();var S=M(Q(c),"L",[]).sort(),
G=[].concat(g),qa=function(a,b){if(B)return 0;K.clearTimeout(A);S.push.apply(S,q);var d=((O||{}).config||{}).update;d?d(e):e&&M(P,"cu",[]).push(e);if(b){V("me0",a,G);try{Na(b,c,x)}finally{V("me1",a,G)}}return 1};0<f&&(A=K.setTimeout(function(){B=!0;h()},f));var q=Ha(a,S);if(q.length){q=Ha(a,g);var t=M(P,"CP",[]),u=t.length;t[u]=function(a){if(!a)return 0;V("ml1",q,G);var b=function(b){t[u]=null;qa(q,a)&&na(function(){d&&d();b()})},c=function(){var a=t[u+1];a&&a()};0<u&&t[u-1]?t[u]=function(){b(c)}:
b(c)};if(q.length){var T="loaded_"+P.I++;O[T]=function(a){t[u](a);O[T]=null};a=Ba(c,q,"gapi."+T,g);g.push.apply(g,q);V("ml0",q,G);b.sync||K.___gapisync?Ka(a):Ja(a)}else t[u](ja)}else qa(q)&&d&&d()};var Ma=function(a,b){if(P.hee&&0<P.hel)try{return a()}catch(c){b&&b(c),P.hel--,Pa("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;}};O.load=function(a,b){return Ma(function(){return Pa(a,b)})};oa.bs0=window.gapi._bs||(new Date).getTime();U("bs0");oa.bs1=(new Date).getTime();U("bs1");delete window.gapi._bs;}).call(this);
gapi.load("client",{callback:window["gapi_onload"],_c:{"jsl":{"ci":{"deviceType":"desktop","oauth-flow":{"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay","disableOpt":true,"idpIframeUrl":"https://accounts.google.com/o/oauth2/iframe","usegapi":false},"debug":{"reportExceptionRate":0.05,"forceIm":false,"rethrowException":false,"host":"https://apis.google.com"},"enableMultilogin":true,"googleapis.config":{"auth":{"useFirstPartyAuthV2":true}},"isPlusUser":true,"inline":{"css":1},"disableRealtimeCallback":false,"drive_share":{"skipInitCommand":true},"csi":{"rate":0.01},"client":{"cors":false,"batchPath":{"translate":"batch/translate"},"perApiBatch":true},"isLoggedIn":true,"signInDeprecation":{"rate":0.0},"include_granted_scopes":true,"llang":"en","iframes":{"ytsubscribe":{"url":"https://www.youtube.com/subscribe_embed?usegapi\u003d1"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1"},":source:":"3p","playemm":{"url":"https://play.google.com/work/embedded/search?usegapi\u003d1\u0026usegapi\u003d1"},"partnersbadge":{"url":"https://www.gstatic.com/partners/badge/templates/badge.html?usegapi\u003d1"},"dataconnector":{"url":"https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi\u003d1"},"shortlists":{"url":""},"plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1"},"post":{"params":{"url":""},"url":":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi\u003d1"},"signin":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/signin?usegapi\u003d1","methods":["onauth"]},"donation":{"url":"https://onetoday.google.com/home/donationWidget?usegapi\u003d1"},"plusone":{"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi\u003d1"},":im_socialhost:":"https://plus.googleapis.com","backdrop":{"url":"https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi\u003d1"},"visibility":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/visibility?usegapi\u003d1"},"additnow":{"url":"https://apis.google.com/additnow/additnow.html?usegapi\u003d1","methods":["launchurl"]},":signuphost:":"https://plus.google.com","community":{"url":":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi\u003d1"},"plus":{"url":":socialhost:/:session_prefix:_/widget/render/badge?usegapi\u003d1"},"commentcount":{"url":":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1"},"zoomableimage":{"url":"https://ssl.gstatic.com/microscope/embed/"},"appfinder":{"url":"https://gsuite.google.com/:session_prefix:marketplace/appfinder?usegapi\u003d1"},"person":{"url":":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1"},"savetodrive":{"url":"https://drive.google.com/savetodrivebutton?usegapi\u003d1","methods":["save"]},"page":{"url":":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card"},"youtube":{"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/youtube?usegapi\u003d1","methods":["scroll","openwindow"]},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi\u003d1"},"rbr_s":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"},"udc_webconsentflow":{"params":{"url":""},"url":"https://myaccount.google.com/webconsent?usegapi\u003d1"},"savetoandroidpay":{"url":"https://androidpay.google.com/a/widget/save"},"blogger":{"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/blogger?usegapi\u003d1","methods":["scroll","openwindow"]},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?usegapi\u003d1"},"surveyoptin":{"url":"https://www.google.com/shopping/customerreviews/optin?usegapi\u003d1"},":socialhost:":"https://apis.google.com","hangout":{"url":"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"},":gplus_url:":"https://plus.google.com","rbr_i":{"params":{"url":""},"url":":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"},"share":{"url":":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi\u003d1"},"comments":{"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1","methods":["scroll","openwindow"]},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete"},"ratingbadge":{"url":"https://www.google.com/shopping/customerreviews/badge?usegapi\u003d1"},"appcirclepicker":{"url":":socialhost:/:session_prefix:_/widget/render/appcirclepicker"},"follow":{"url":":socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1"},"sharetoclassroom":{"url":"https://www.gstatic.com/classroom/sharewidget/widget_stable.html?usegapi\u003d1"},"ytshare":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi\u003d1"},"family_creation":{"params":{"url":""},"url":"https://families.google.com/webcreation?usegapi\u003d1\u0026usegapi\u003d1"},"configurator":{"url":":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi\u003d1"},"savetowallet":{"url":"https://androidpay.google.com/a/widget/save"}}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.en.SrFCg38vrHU.O/m\u003d__features__/am\u003dAQ/rt\u003dj/d\u003d1/rs\u003dAGLTcCNG24oLmPYHxuy-JDE9titXhq3dgQ","u":"https://apis.google.com/js/client.js","hee":true,"fp":"a0ff892455f0902b5ec8d1be46189e000c1d7e7b","dpo":false},"fp":"a0ff892455f0902b5ec8d1be46189e000c1d7e7b","annotation":["interactivepost","recobar","signin2","autocomplete","profile"],"bimodal":["signin","share"]}});