(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],m=0,d=[];m<o.length;m++)i=o[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},r={app:0},n=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),r=s.n(a);r.a},"0d48":function(t,e,s){},"0ed0":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"expression-window"},[s("div",{staticClass:"expression-text",class:t.alert&&"alert-text"},[t._v(t._s(t.expression)+" ")]),t.answer?s("div",{staticClass:"answer-text"},[t._v(t._s(" = "+t.answer))]):t._e()])},r=[],n=(s("a9e3"),{name:"Calculator",props:{expression:String,answer:Number,alert:Boolean}}),i=n,o=(s("31f0"),s("2877")),c=Object(o["a"])(i,a,r,!1,null,"33314732",null);e["a"]=c.exports},"31f0":function(t,e,s){"use strict";var a=s("eece"),r=s.n(a);r.a},3491:function(t,e,s){},"3b06":function(t,e,s){"use strict";var a=s("0d48"),r=s.n(a);r.a},"3c46":function(t,e,s){},"3d0a":function(t,e,s){"use strict";var a=s("4eb3"),r=s.n(a);r.a},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc10","./be.js":"1fc10","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=n(t);return s(e)}function n(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=n,t.exports=r,r.id="4678"},"4a72":function(t,e,s){"use strict";var a=s("8b14"),r=s.n(a);r.a},"4eb3":function(t,e,s){},5581:function(t,e,s){"use strict";var a=s("3c46"),r=s.n(a);r.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e623"),s("e379"),s("5dc8"),s("37e1");var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"content"}},[s("div",{staticClass:"space-all-row fixed-top"},[s("div",{attrs:{id:"time-display"}},[s("TimeDisplay",{attrs:{timeDate:t.timeDate,timeHours:t.timeHours,showTime:!0}})],1)]),s("div",{staticClass:"row",staticStyle:{"margin-top":"60px"}},[s("div",{staticClass:"col-sm-12 col-md-8"},[s("News")],1),s("div",{staticClass:"col-sm-12 col-md-4 shadow-card",attrs:{id:"tools"}},[s("span",{attrs:{id:"time-converter"}}),t._m(0),s("div",{staticClass:"left-all-row"},t._l(t.navButtons,(function(t,e){return s("ScrollButton",{key:e,attrs:{target:t.target,text:t.text,customClass:"btn-outline-secondary"}})})),1),s("div",{},[s("TimeConverter")],1),s("div",{},[s("Calculator",{attrs:{msg:"Calculator"}})],1)])])]),s("div",{staticClass:"center-all-row fixed-bottom scroll-to-top"},[s("ScrollButton",{attrs:{target:"#app",text:"back to top",customClass:"btn-secondary"}})],1)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticStyle:{margin:"10px 0"}},[s("strong",[t._v(" Your Dashboard Tools ")])])}],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"calculator-component"}},[s("h4",[t._v("Calculator")]),s("ExpressionWindow",{attrs:{expression:t.expressionDisplay,answer:t.currentAnswer,alert:t.alertSwitch}}),s("div",{staticClass:"calculator-buttons"},t._l(t.buttons,(function(e,a){return s("div",{key:a},t._l(e,(function(e,a){return s("button",{key:a,staticClass:"calculator-button btn",class:e.class?"btn-"+e.class:"btn-light",on:{click:function(s){return t.modifyExpression(e)}}},[t._v(" "+t._s(e.text)+" ")])})),0)})),0)],1)},o=[],c=s("a97d"),l=c["a"],u=(s("3b06"),s("2877")),m=Object(u["a"])(l,i,o,!1,null,"2c2d5de0",null),d=m.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"time-display-component"}},[s("div",{staticClass:"space-all-row",attrs:{id:"current-time"}},[t._m(0),s("div",[s("span",{staticClass:"time-date"},[t._v(" "+t._s(t.timeDate)+", "),s("span",{staticClass:"time-hours"},[t._v(t._s(t.timeHours))])])])])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-title left-all-row"},[a("img",{attrs:{src:s("61fa"),alt:"Vuejs icon",id:"vue-image"}}),a("strong",[t._v("uejs Dashboard")])])}],h={name:"TimeDisplay",props:{timeDate:String,timeHours:String}},v=h,b=(s("c9fe"),Object(u["a"])(v,f,p,!1,null,"61529c29",null)),g=b.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top-left-all-col",attrs:{id:"time-converter-component"}},[s("h4",[t._v("Time Converter")]),s("div",{staticClass:"space-all-row row",attrs:{id:"current-unix-time"}},[s("div",{staticClass:"left-all-col"},[t._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:t.unixTime,expression:"unixTime"}],staticClass:"unix-time-input",attrs:{type:"text"},domProps:{value:t.unixTime},on:{input:function(e){e.target.composing||(t.unixTime=e.target.value)}}}),s("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(e){return t.syncTime(1)}}},[t._v(" sync time & date ")])])]),s("hr"),s("div",{staticClass:"space-all-row row",attrs:{id:"current-verbal-time"}},[s("div",{staticClass:"left-all-col"},[t._m(1),s("div",{staticClass:"row",staticStyle:{"margin-right":"20px"}},t._l(this.regularTime,(function(e,a){return s("div",{key:a,staticClass:"time-input-holder col-xs-12 col-sm-4 col-md-6 col-lg-4"},[s("p",{staticStyle:{margin:"0","font-size":"10pt"}},[s("strong",[t._v(t._s(e.text))])]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"prop.val"}],staticClass:"regular-time-input",attrs:{type:"text",name:e.text},domProps:{value:e.val},on:{input:[function(s){s.target.composing||t.$set(e,"val",s.target.value)},function(s){return t.handleRegularTimeChange(e)}]}})])})),0),s("span",{attrs:{id:"calculator"}}),s("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(e){return t.syncTime(0)}}},[t._v(" sync unix timestamp ")])])])])},x=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticStyle:{margin:"0"}},[s("strong",[t._v("Unix Timestamp:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticStyle:{margin:"0"}},[s("strong",[t._v("Time & Date:")])])}],_=(s("4160"),s("a15b"),s("b64b"),s("ac1f"),s("1276"),s("159b"),{name:"TimeConverter",created:function(){var t=this,e=s("c1df");this.unixTime=e().unix(),this.regularTime=[{text:"Month",val:e().format("M")},{text:"Day",val:e().format("D")},{text:"Year",val:e().format("YYYY")},{text:"Hour",val:e().format("hh")},{text:"Minute",val:e().format("mm")},{text:"Second",val:e().format("ss")}],setInterval((function(){t.timeDate=e().format("MMMM Do YYYY"),t.timeHours=e().format("h:mm a")}),1e3)},data:function(){return{message:"This is a TimeConverter component for us to start with!",regularTime:[],unixTime:""}},computed:{reversedMessage:function(){return this.message.split("").reverse().join("")},regularTimeKeys:function(){return Object.keys(this.regularTime)}},methods:{greet:function(){this.message="Nice to meet you!"},handleRegularTimeChange:function(t){var e=this;this.regularTime.forEach((function(s,a){if(e.regularTime[a].text===t.text)return e.regularTime[a].val=t.val,console.log(e.regularTime)}))},syncTime:function(t){var e=s("c1df");if(t){var a=e(1e3*this.unixTime);this.regularTime=[{text:"Month",val:a.month()+1},{text:"Day",val:a.date()},{text:"Year",val:a.year()},{text:"Hour",val:a.hour()},{text:"Minute",val:a.minute()},{text:"Second",val:a.second()}]}else{var r=[this.regularTime[2].val,this.regularTime[0].val-1,this.regularTime[1].val,this.regularTime[3].val,this.regularTime[4].val,this.regularTime[5].val],n=e(r);this.unixTime=n.unix()}}}}),y=_,k=(s("f7b2"),Object(u["a"])(y,j,x,!1,null,"588aa186",null)),w=k.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"news-component"}},[null!=t.articles?s("div",{staticClass:"news-articles-holder left-all-col"},[s("div",{staticStyle:{width:"100%"}},[s("div",{staticClass:"left-all-row",staticStyle:{width:"100%"}},[s("p",{staticStyle:{margin:"0px 10px 0 0"}},[s("strong",[t._v("Top News since "),s("strong",{staticStyle:{color:"#007bff"}},[t._v(t._s(t.sorter))])])]),t._l(t.sorterButtons,(function(e,a){return s("SorterButton",{key:a,attrs:{sort:t.sortArticles,text:e.text,sorter:e.sorter}})}))],2),s("div",{staticClass:"left-all-row"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"search-input",attrs:{type:"text"},domProps:{value:t.searchQuery},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.fireSearch()},input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),s("button",{staticClass:"btn btn-sm btn-primary",on:{click:function(e){return t.fireSearch()}}},[t._v(" search ")]),t.loading?s("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}}):t._e()])]),t._l(t.articles,(function(t,e){return s("Article",{key:e,attrs:{article:t}})}))],2):t._e()])},T=[],S=(s("d3b7"),s("96cf"),s("1da1")),E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sorter-button-component"},[s("button",{staticClass:"btn btn-sm btn-outline-primary",on:{click:function(e){return t.sort(t.sorter)}}},[t._v(" "+t._s(t.text)+" ")])])},A=[],B={name:"SorterButton",props:{text:String,sorter:String,sort:Function}},O=B,M=(s("4a72"),Object(u["a"])(O,E,A,!1,null,"256237ca",null)),Y=M.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"article-component shadow-card"},[s("div",{staticClass:"space-all-row"},[s("div",{staticClass:"left-all-col"},[s("p",{staticClass:"article-title"},[t._v(t._s(t.article.title))]),s("p",[t._v(t._s(t.article.publishedAt.slice(0,10)))])]),s("img",{staticClass:"article-image",attrs:{src:t.article.urlToImage,alt:"article image"}})]),s("p",[t.article.author?s("span",{staticClass:"article-author"},[t._v(t._s(t.article.author)+", ")]):t._e(),t.article.source.name?s("span",[t._v(" from "+t._s(t.article.source.name))]):t._e()]),t.article.content?s("p",{staticClass:"article-description"},[s("span",[t._v(t._s(t.article.content.slice(0,-(t.article.content.length-t.article.content.indexOf("[")))))])]):t._e(),s("a",{attrs:{href:t.article.url,target:"_blank",alt:"article link"}},[t._v(" read full article")])])},F=[],I={name:"Article",props:{article:Object}},U=I,Q=(s("3d0a"),Object(u["a"])(U,D,F,!1,null,"253f196a",null)),z=Q.exports,P={name:"News",components:{SorterButton:Y,Article:z},data:function(){var t=s("c1df"),e=t().format("YYYY-MM-DD"),a=t().subtract(1,"d").format("YYYY-MM-DD"),r=t().subtract(7,"d").format("YYYY-MM-DD"),n=t().subtract(30,"d").format("YYYY-MM-DD");return{loading:!0,searchQuery:"covid-19",sorter:r,message:"This is a news component for us to start with!",articles:[],today:e,lastDay:a,lastWeek:r,lastMonth:n,sorterButtons:[{sorter:a,text:"last day"},{sorter:r,text:"last week"},{sorter:n,text:"last month"}]}},created:function(){this.getArticles(this.searchQuery,this.sorter)},computed:{},methods:{getArticles:function(){var t=Object(S["a"])(regeneratorRuntime.mark((function t(e,s){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!1===Boolean(s)&&(s=this.lastDay),a=void 0,r="https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q="+e+"&from="+s+"&to="+this.today,!0!==Boolean(localStorage.getItem(r))){t.next=9;break}return console.log("found news search for "+r+" in local storage"),a=JSON.parse(localStorage.getItem(r)),this.articles=a.articles,this.loading=!1,t.abrupt("return",a);case 9:return n={Authorization:"c78288d021a544c69abec55a4ce257cd","Access-Control-Allow-Origin":"*"},this.loading=!0,t.next=13,fetch(r,{method:"GET",headers:n}).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){return console.log(t)}));case 13:return a=t.sent,console.log(a),this.loading=!1,this.articles=a.articles,localStorage.setItem(r,JSON.stringify(a)),t.abrupt("return",a);case 19:case"end":return t.stop()}}),t,this)})));function e(e,s){return t.apply(this,arguments)}return e}(),sortArticles:function(){var t=Object(S["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(e),this.loading=!0,this.sorter=e,console.log("re-fetching articles since "+e),this.getArticles(this.searchQuery,e);case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),fireSearch:function(){this.loading=!0,console.log("searching for "+this.searchQuery),this.getArticles(this.searchQuery,this.sorter)}}},q=P,N=(s("b518"),Object(u["a"])(q,C,T,!1,null,"2cfebcfd",null)),R=N.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"scroll-button-component"},[s("a",{attrs:{href:t.target}},[s("button",{staticClass:"btn btn-sm",class:t.customClass?t.customClass:"btn-primary"},[t._v(" "+t._s(t.text)+" ")])])])},K=[],W={name:"ScrollButton",props:{target:String,text:String,customClass:String}},X=W,L=(s("5581"),Object(u["a"])(X,H,K,!1,null,"8567fa10",null)),J=L.exports,G={name:"App",components:{Calculator:d,TimeDisplay:g,TimeConverter:w,News:R,ScrollButton:J},created:function(){var t=this,e=s("c1df");this.timeDate=e().format("MMMM Do YYYY"),this.timeHours=e().format("h:mm a"),setInterval((function(){t.timeDate=e().format("MMMM Do YYYY"),t.timeHours=e().format("h:mm a")}),6e4)},data:function(){return{timeDate:"",timeHours:"",navButtons:[{text:"calculator",target:"#calculator"},{text:"time converter",target:"#time-converter"}]}}},V=G,Z=(s("034f"),Object(u["a"])(V,r,n,!1,null,null,null)),$=Z.exports,tt=s("5f5b");s("ea42"),s("f9e3"),s("2dd8");a["default"].use(tt["a"]),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t($)}}).$mount("#app")},"61fa":function(t,e){t.exports="data:image/png;base64,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"},"65ca":function(t,e,s){},"85ec":function(t,e,s){},"8b14":function(t,e,s){},a2f6:function(t,e,s){},a97d:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("a15b"),core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__),_ExpressionWindow__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("0ed0");__webpack_exports__["a"]={name:"Calculator",props:{msg:String},components:{ExpressionWindow:_ExpressionWindow__WEBPACK_IMPORTED_MODULE_1__["a"]},data:function(){return{currentExpressionText:[],currentExpressionMath:[],currentAnswer:null,alertSwitch:!1,buttons:[[{text:" (",math:" (",class:"secondary"},{text:") ",math:") ",class:"secondary"},{text:" % ",math:"/100",class:"secondary"},{text:"CE",class:"secondary"}],[{text:"7",math:"7"},{text:"8",math:"8"},{text:"9",math:"9"},{text:" / ",math:" / ",class:"secondary"}],[{text:"4",math:"4"},{text:"5",math:"5"},{text:"6",math:"6"},{text:" x ",math:" * ",class:"secondary"}],[{text:"1",math:"1"},{text:"2",math:"2"},{text:"3",math:"3"},{text:" - ",math:" - ",class:"secondary"}],[{text:"0",math:"0"},{text:".",math:"."},{text:"=",class:"primary"},{text:" + ",math:" + ",class:"secondary"}]]}},methods:{modifyExpression:function(t){"="===t.text?this.evaluateExpression():"CE"===t.text?(this.currentExpressionText.pop(),this.currentExpressionMath.pop(),this.currentAnswer=null):(this.currentExpressionText.push(t.text),this.currentExpressionMath.push(t.math),null!=this.currentAnswer&&(this.currentAnswer=null))},evaluateExpression:function evaluateExpression(){var _this=this;try{var expressionString=this.currentExpressionMath.join("");this.currentAnswer=eval(expressionString)}catch(e){console.log(e),this.alertSwitch=!0,setTimeout((function(){_this.alertSwitch=!1}),300)}}},computed:{expressionDisplay:function(){return 0===this.currentExpressionText.length?"0":this.currentExpressionText.join("")}}}},b518:function(t,e,s){"use strict";var a=s("3491"),r=s.n(a);r.a},c9fe:function(t,e,s){"use strict";var a=s("a2f6"),r=s.n(a);r.a},ea42:function(t,e,s){},eece:function(t,e,s){},f7b2:function(t,e,s){"use strict";var a=s("65ca"),r=s.n(a);r.a}});
//# sourceMappingURL=app.37fad92f.js.map