(this["webpackJsonprdlink-admin-dashboard"]=this["webpackJsonprdlink-admin-dashboard"]||[]).push([[119],{1044:function(t,e,s){"use strict";var a=s(13),r=s(1),c=s(83),i=s.n(c),o=s(885),n=s(6);e.a=function(t){var e=t.warning,s=Object(r.useState)(null),c=Object(a.a)(s,2),l=c[0],d=c[1];Object(r.useEffect)((function(){i.a.get("/card/card-statistics/orders-bar-chart").then((function(t){return d(t.data)}))}),[]);var b={chart:{stacked:!0,toolbar:{show:!1}},grid:{show:!1,padding:{left:0,right:0,top:-15,bottom:-15}},plotOptions:{bar:{horizontal:!1,columnWidth:"20%",startingShape:"rounded",colors:{backgroundBarColors:["#f3f3f3","#f3f3f3","#f3f3f3","#f3f3f3","#f3f3f3"],backgroundBarRadius:5}}},legend:{show:!1},dataLabels:{enabled:!1},colors:[e],xaxis:{labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},tooltip:{x:{show:!1}}};return null!==l?Object(n.jsx)(o.a,{height:70,type:"bar",options:b,title:l.title,stats:l.statistics,series:l.series}):null}},1045:function(t,e,s){"use strict";var a=s(13),r=s(1),c=s(83),i=s.n(c),o=s(885),n=s(6);e.a=function(t){var e=t.info,s=Object(r.useState)(null),c=Object(a.a)(s,2),l=c[0],d=c[1];Object(r.useEffect)((function(){i.a.get("/card/card-statistics/profit-line-chart").then((function(t){return d(t.data)}))}),[]);var b={chart:{toolbar:{show:!1},zoom:{enabled:!1}},grid:{borderColor:"#EBEBEB",strokeDashArray:5,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}},padding:{top:-30,bottom:-10}},stroke:{width:3},colors:[e],series:[{data:[0,20,5,30,15,45]}],markers:{size:2,colors:e,strokeColors:e,strokeWidth:2,strokeOpacity:1,strokeDashArray:0,fillOpacity:1,discrete:[{seriesIndex:0,dataPointIndex:5,fillColor:"#ffffff",strokeColor:e,size:5}],shape:"circle",radius:2,hover:{size:3}},xaxis:{labels:{show:!0,style:{fontSize:"0px"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},tooltip:{x:{show:!1}}};return null!==l?Object(n.jsx)(o.a,{height:70,type:"line",options:b,title:l.title,stats:l.statistics,series:l.series}):null}},1908:function(t,e,s){"use strict";s.r(e);var a=s(1),r=s(452),c=s(453),i=s(470),o=s(450),n=s(877),l=s(1044),d=s(1045),b=s(13),j=s(83),h=s.n(j),u=s(1228),O=s(0),x=s(22),p=s(121),m=s(451),f=s(59),g=s.n(f),y=s(480),w=s.n(y),v=s(454),N=s(455),T=s(6),k=function(t){var e=t.icon,s=t.color,a=t.stats,r=t.statTitle,c=t.series,i=t.options,o=t.type,n=t.height,l=t.className,d=Object(p.a)(t,["icon","color","stats","statTitle","series","options","type","height","className"]);return Object(T.jsxs)(v.a,Object(O.a)(Object(O.a)({},d),{},{children:[Object(T.jsxs)(N.a,{className:g()("pb-0",Object(x.a)({},l,l)),children:[Object(T.jsx)(m.a,{className:"avatar-stats p-50 m-0",color:"light-".concat(s),icon:e}),Object(T.jsx)("h2",{className:"font-weight-bolder mt-1",children:a}),Object(T.jsx)("p",{className:"card-text",children:r})]}),Object(T.jsx)(w.a,{options:i,series:c,type:o,height:n||100})]}))},z=k;k.defaultProps={options:{chart:{toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:["#7367F0"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}},color:"primary"};var C=function(t){var e=t.kFormatter,s=Object(a.useState)(null),r=Object(b.a)(s,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){h.a.get("/card/card-statistics/subscribers").then((function(t){return i(t.data)}))}),[]),null!==c?Object(T.jsx)(z,{icon:Object(T.jsx)(u.a,{size:21}),color:"primary",stats:e(c.analyticsData.subscribers),statTitle:"Subscribers Gained",series:c.series,type:"area"}):null},S=s(1137),P=function(t){var e=t.kFormatter,s=t.success,r=Object(a.useState)(null),c=Object(b.a)(r,2),i=c[0],o=c[1],n={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:[s],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return Object(a.useEffect)((function(){h.a.get("/card/card-statistics/revenue").then((function(t){return o(t.data)}))}),[]),null!==i?Object(T.jsx)(z,{icon:Object(T.jsx)(S.a,{size:21}),color:"success",stats:e(i.analyticsData.revenue),statTitle:"Revenue Generated",options:n,series:i.series,type:"area"}):null},E=s(1208),B=function(t){var e=t.danger,s=Object(a.useState)(null),r=Object(b.a)(s,2),c=r[0],i=r[1],o={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:[e],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return Object(a.useEffect)((function(){h.a.get("/card/card-statistics/sales").then((function(t){return i(t.data)}))}),[]),null!==c?Object(T.jsx)(z,{icon:Object(T.jsx)(E.a,{size:21}),color:"danger",stats:c.analyticsData.sales,statTitle:"Quarterly Sales",options:o,series:c.series,type:"area"}):null},F=s(1185),D=function(t){var e=t.kFormatter,s=t.warning,r=Object(a.useState)(null),c=Object(b.a)(r,2),i=c[0],o=c[1],n={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:[s],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return Object(a.useEffect)((function(){h.a.get("/card/card-statistics/orders").then((function(t){return o(t.data)}))}),[]),null!==i?Object(T.jsx)(z,{icon:Object(T.jsx)(F.a,{size:21}),color:"warning",stats:e(i.analyticsData.orders),statTitle:"Orders Received",options:n,series:i.series,type:"area"}):null},M=s(1181),A=s(459),I=s(457),L=function(t){var e=t.icon,s=t.color,a=t.stats,r=t.statTitle,c=t.series,i=t.options,o=t.type,n=t.height,l=Object(p.a)(t,["icon","color","stats","statTitle","series","options","type","height"]);return Object(T.jsxs)(v.a,Object(O.a)(Object(O.a)({},l),{},{children:[Object(T.jsxs)(A.a,{className:"align-items-start pb-0",children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("h2",{className:"font-weight-bolder",children:a}),Object(T.jsx)(I.a,{children:r})]}),Object(T.jsx)(m.a,{className:"avatar-stats p-50 m-0",color:"light-".concat(s),icon:e})]}),Object(T.jsx)(w.a,{options:i,series:c,type:o,height:n||100})]}))},R=L;L.defaultProps={options:{chart:{toolbar:{show:!1},sparkline:{enabled:!0},dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1}},grid:{show:!1},colors:["#7367F0"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:5},fill:{type:"gradient",gradient:{shadeIntensity:1,gradientToColors:["#A9A2F6"],opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}},color:"primary"};var H=function(){var t=Object(a.useState)(null),e=Object(b.a)(t,2),s=e[0],r=e[1];return Object(a.useEffect)((function(){h.a.get("/card/card-statistics/site-traffic").then((function(t){return r(t.data)}))}),[]),null!==s?Object(T.jsx)(R,{icon:Object(T.jsx)(M.a,{size:21}),color:"primary",stats:"78.9k",statTitle:"Site Traffic",series:s.series,type:"line"}):null},U=s(1225),G=function(t){var e=t.success,s=Object(a.useState)(null),r=Object(b.a)(s,2),c=r[0],i=r[1];Object(a.useEffect)((function(){h.a.get("/card/card-statistics/active-users").then((function(t){return i(t.data)}))}),[]);var o={chart:{id:"activeUsers",toolbar:{show:!1},sparkline:{enabled:!0},dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1}},grid:{show:!1},colors:[e],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:5},fill:{type:"gradient",gradient:{shadeIntensity:1,gradientToColors:["#55DD92"],opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return null!==c?Object(T.jsx)(R,{icon:Object(T.jsx)(U.a,{size:21}),color:"success",stats:"659.8k",statTitle:"Active Users",series:c.series,options:o,type:"line"}):null},q=s(1173),J=function(t){var e=t.warning,s=Object(a.useState)(null),r=Object(b.a)(s,2),c=r[0],i=r[1];Object(a.useEffect)((function(){h.a.get("/card/card-statistics/newsletter").then((function(t){return i(t.data)}))}),[]);var o={chart:{id:"newsletter",toolbar:{show:!1},sparkline:{enabled:!0},dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1}},grid:{show:!1},colors:[e],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:5},fill:{type:"gradient",gradient:{shadeIntensity:1,gradientToColors:["#ffc085"],opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return null!==c?Object(T.jsx)(R,{icon:Object(T.jsx)(q.a,{size:21}),color:"warning",stats:"28.7k",statTitle:"Newsletter",series:c.series,type:"line",options:o}):null},Q=function(t){var e=t.icon,s=t.color,a=t.stats,r=t.statTitle,c=t.className;Object(p.a)(t,["icon","color","stats","statTitle","className"]);return Object(T.jsx)(v.a,{className:"text-center",children:Object(T.jsxs)(N.a,{className:c,children:[Object(T.jsx)("div",{className:"avatar p-50 m-0 mb-1 ".concat(s?"bg-light-".concat(s):"bg-light-primary"),children:Object(T.jsx)("div",{className:"avatar-content",children:e})}),Object(T.jsx)("h2",{className:"font-weight-bolder",children:a}),Object(T.jsx)("p",{className:"card-text line-ellipsis",children:r})]})})},W=function(t){var e=t.icon,s=t.color,a=t.stats,r=t.statTitle,c=t.className;Object(p.a)(t,["icon","color","stats","statTitle","className"]);return Object(T.jsx)(v.a,{children:Object(T.jsx)(N.a,{className:c,children:Object(T.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("h2",{className:"font-weight-bolder mb-0",children:a}),Object(T.jsx)("p",{className:"card-text",children:r})]}),Object(T.jsx)("div",{className:"avatar avatar-stats p-50 m-0 ".concat(s?"bg-light-".concat(s):"bg-light-primary"),children:Object(T.jsx)("div",{className:"avatar-content",children:e})})]})})})},V=s(1147),Y=s(1178),$=s(1207),K=s(1158),X=s(1104),Z=s(1221),_=s(1136),tt=s(1203),et=s(1094),st=s(1095),at=s(128);e.default=function(){var t=Object(a.useContext)(at.a);return Object(T.jsxs)(a.Fragment,{children:[Object(T.jsx)(o.a,{breadCrumbTitle:"Statistics Cards",breadCrumbParent:"Card",breadCrumbActive:"Statistics Cards"}),Object(T.jsxs)(r.a,{children:[Object(T.jsx)(c.a,{lg:"2",xs:"6",children:Object(T.jsx)(l.a,{warning:t.colors.warning.main})}),Object(T.jsx)(c.a,{lg:"2",xs:"6",children:Object(T.jsx)(d.a,{info:t.colors.info.main})}),Object(T.jsx)(c.a,{lg:"8",sm:"12",children:Object(T.jsx)(n.a,{cols:{md:"3",sm:"6"}})})]}),Object(T.jsxs)(r.a,{children:[Object(T.jsx)(c.a,{xl:"2",md:"4",sm:"6",children:Object(T.jsx)(Q,{icon:Object(T.jsx)(V.a,{size:21}),color:"info",stats:"36.9k",statTitle:"Views"})}),Object(T.jsx)(c.a,{xl:"2",md:"4",sm:"6",children:Object(T.jsx)(Q,{icon:Object(T.jsx)(Y.a,{size:21}),color:"warning",stats:"12k",statTitle:"Comments"})}),Object(T.jsx)(c.a,{xl:"2",md:"4",sm:"6",children:Object(T.jsx)(Q,{icon:Object(T.jsx)($.a,{size:21}),color:"danger",stats:"97.8k",statTitle:"Orders"})}),Object(T.jsx)(c.a,{xl:"2",md:"4",sm:"6",children:Object(T.jsx)(Q,{icon:Object(T.jsx)(K.a,{size:21}),color:"primary",stats:"26.8",statTitle:"Bookmarks"})}),Object(T.jsx)(c.a,{xl:"2",md:"4",sm:"6",children:Object(T.jsx)(Q,{icon:Object(T.jsx)(X.a,{size:21}),color:"success",stats:"689",statTitle:"Reviews"})}),Object(T.jsx)(c.a,{xl:"2",md:"4",sm:"6",children:Object(T.jsx)(Q,{icon:Object(T.jsx)(Z.a,{size:21}),color:"danger",stats:"2.1k",statTitle:"Returns"})})]}),Object(T.jsxs)(r.a,{children:[Object(T.jsx)(c.a,{lg:"3",sm:"6",children:Object(T.jsx)(W,{icon:Object(T.jsx)(_.a,{size:21}),color:"primary",stats:"86%",statTitle:"CPU Usage"})}),Object(T.jsx)(c.a,{lg:"3",sm:"6",children:Object(T.jsx)(W,{icon:Object(T.jsx)(tt.a,{size:21}),color:"success",stats:"1.2gb",statTitle:"Memory Usage"})}),Object(T.jsx)(c.a,{lg:"3",sm:"6",children:Object(T.jsx)(W,{icon:Object(T.jsx)(et.a,{size:21}),color:"danger",stats:"0.1%",statTitle:"Downtime Ratio"})}),Object(T.jsx)(c.a,{lg:"3",sm:"6",children:Object(T.jsx)(W,{icon:Object(T.jsx)(st.a,{size:21}),color:"warning",stats:"13",statTitle:"Issues Found"})})]}),Object(T.jsxs)(r.a,{children:[Object(T.jsx)(c.a,{lg:"3",sm:"6",children:Object(T.jsx)(C,{kFormatter:i.g})}),Object(T.jsx)(c.a,{lg:"3",sm:"6",children:Object(T.jsx)(P,{kFormatter:i.g,success:t.colors.success.main})}),Object(T.jsx)(c.a,{lg:"3",sm:"6",children:Object(T.jsx)(B,{danger:t.colors.danger.main})}),Object(T.jsx)(c.a,{lg:"3",sm:"6",children:Object(T.jsx)(D,{kFormatter:i.g,warning:t.colors.warning.main})})]}),Object(T.jsxs)(r.a,{children:[Object(T.jsx)(c.a,{lg:"4",sm:"6",children:Object(T.jsx)(H,{})}),Object(T.jsx)(c.a,{lg:"4",sm:"6",children:Object(T.jsx)(G,{success:t.colors.success.main})}),Object(T.jsx)(c.a,{lg:"4",sm:"6",children:Object(T.jsx)(J,{warning:t.colors.warning.main})})]})]})}},450:function(t,e,s){"use strict";var a=s(449),r=s(462),c=s(463),i=s(6);e.a=function(t){var e=t.breadCrumbTitle,s=t.breadCrumbParent,o=t.breadCrumbParent2,n=t.breadCrumbParent3,l=t.breadCrumbActive;return Object(i.jsx)("div",{className:"content-header row",children:Object(i.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(i.jsx)("div",{className:"row breadcrumbs-top",children:Object(i.jsxs)("div",{className:"col-12",children:[e?Object(i.jsx)("h2",{className:"content-header-title float-left mb-0",children:e}):"",Object(i.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(i.jsxs)(r.a,{children:[Object(i.jsx)(c.a,{tag:"li",children:Object(i.jsx)(a.b,{to:"/",children:"Home"})}),Object(i.jsx)(c.a,{tag:"li",className:"text-primary",children:s}),o?Object(i.jsx)(c.a,{tag:"li",className:"text-primary",children:o}):"",n?Object(i.jsx)(c.a,{tag:"li",className:"text-primary",children:n}):"",Object(i.jsx)(c.a,{tag:"li",active:!0,children:l})]})})]})})})})}},452:function(t,e,s){"use strict";var a=s(17),r=s(21),c=s(1),i=s.n(c),o=s(5),n=s.n(o),l=s(59),d=s.n(l),b=s(82),j=n.a.oneOfType([n.a.number,n.a.string]),h={tag:b.tagPropType,noGutters:n.a.bool,className:n.a.string,cssModule:n.a.object,form:n.a.bool,xs:j,sm:j,md:j,lg:j,xl:j},u={tag:"div",widths:["xs","sm","md","lg","xl"]},O=function(t){var e=t.className,s=t.cssModule,c=t.noGutters,o=t.tag,n=t.form,l=t.widths,j=Object(r.a)(t,["className","cssModule","noGutters","tag","form","widths"]),h=[];l.forEach((function(e,s){var a=t[e];if(delete j[e],a){var r=!s;h.push(r?"row-cols-"+a:"row-cols-"+e+"-"+a)}}));var u=Object(b.mapToCssModules)(d()(e,c?"no-gutters":null,n?"form-row":"row",h),s);return i.a.createElement(o,Object(a.a)({},j,{className:u}))};O.propTypes=h,O.defaultProps=u,e.a=O},453:function(t,e,s){"use strict";var a=s(17),r=s(21),c=s(1),i=s.n(c),o=s(5),n=s.n(o),l=s(59),d=s.n(l),b=s(82),j=n.a.oneOfType([n.a.number,n.a.string]),h=n.a.oneOfType([n.a.bool,n.a.number,n.a.string,n.a.shape({size:n.a.oneOfType([n.a.bool,n.a.number,n.a.string]),order:j,offset:j})]),u={tag:b.tagPropType,xs:h,sm:h,md:h,lg:h,xl:h,className:n.a.string,cssModule:n.a.object,widths:n.a.array},O={tag:"div",widths:["xs","sm","md","lg","xl"]},x=function(t,e,s){return!0===s||""===s?t?"col":"col-"+e:"auto"===s?t?"col-auto":"col-"+e+"-auto":t?"col-"+s:"col-"+e+"-"+s},p=function(t){var e=t.className,s=t.cssModule,c=t.widths,o=t.tag,n=Object(r.a)(t,["className","cssModule","widths","tag"]),l=[];c.forEach((function(e,a){var r=t[e];if(delete n[e],r||""===r){var c=!a;if(Object(b.isObject)(r)){var i,o=c?"-":"-"+e+"-",j=x(c,e,r.size);l.push(Object(b.mapToCssModules)(d()(((i={})[j]=r.size||""===r.size,i["order"+o+r.order]=r.order||0===r.order,i["offset"+o+r.offset]=r.offset||0===r.offset,i)),s))}else{var h=x(c,e,r);l.push(h)}}})),l.length||l.push("col");var j=Object(b.mapToCssModules)(d()(e,l),s);return i.a.createElement(o,Object(a.a)({},n,{className:j}))};p.propTypes=u,p.defaultProps=O,e.a=p},457:function(t,e,s){"use strict";var a=s(17),r=s(21),c=s(1),i=s.n(c),o=s(5),n=s.n(o),l=s(59),d=s.n(l),b=s(82),j={tag:b.tagPropType,className:n.a.string,cssModule:n.a.object},h=function(t){var e=t.className,s=t.cssModule,c=t.tag,o=Object(r.a)(t,["className","cssModule","tag"]),n=Object(b.mapToCssModules)(d()(e,"card-text"),s);return i.a.createElement(c,Object(a.a)({},o,{className:n}))};h.propTypes=j,h.defaultProps={tag:"p"},e.a=h},492:function(t,e,s){"use strict";var a=s(17),r=s(1),c=s.n(r),i=s(5),o=s.n(i),n=s(520),l={children:o.a.node},d=function(t){return c.a.createElement(n.a,Object(a.a)({group:!0},t))};d.propTypes=l,e.a=d},543:function(t,e,s){"use strict";s.d(e,"a",(function(){return O}));var a=s(464),r=s(17),c=s(118),i=s(117),o=s(1),n=s.n(o),l=s(5),d=s.n(l),b=s(492),j=s(82);function h(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}var u=["defaultOpen"],O=function(t){function e(e){var s;return(s=t.call(this,e)||this).state={isOpen:e.defaultOpen||!1},s.toggle=s.toggle.bind(Object(c.a)(s)),s}Object(i.a)(e,t);var s=e.prototype;return s.toggle=function(){this.setState({isOpen:!this.state.isOpen})},s.render=function(){return n.a.createElement(b.a,Object(r.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(j.omit)(this.props,u)))},e}(o.Component);O.propTypes=function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?h(Object(s),!0).forEach((function(e){Object(a.a)(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):h(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}({defaultOpen:d.a.bool},b.a.propTypes)},877:function(t,e,s){"use strict";var a=s(0),r=s(22),c=s(451),i=s(59),o=s.n(i),n=s(1220),l=s(1227),d=s(1140),b=s(1109),j=s(453),h=s(1238),u=s(1239),O=s(457),x=s(454),p=s(459),m=s(456),f=s(543),g=s(1363),y=s(1079),w=s(1089),v=s(455),N=s(452),T=s(6);e.a=function(t){var e=t.cols,s=[{title:"4239",id:970,subtitle:"All Brands",subtitleHover:"paid vs. free",color:"light-primary",icon:Object(T.jsx)(n.a,{size:31})},{title:"5409",id:971,subtitle:"All RD's",color:"light-info",icon:Object(T.jsx)(l.a,{size:31})},{title:"5409",id:972,subtitle:"Open Brand Campaigns",color:"light-info",icon:Object(T.jsx)(l.a,{size:31})},{title:"5409",id:973,subtitle:"Available RD Opportunities",color:"light-info",icon:Object(T.jsx)(l.a,{size:31})},{title:"4239",id:974,subtitle:"Partnerships Secured",subtitleHover:"total vs monthly vs quarterly",color:"light-primary",icon:Object(T.jsx)(n.a,{size:31})},{title:"4239",id:975,subtitle:"Unique Monthly Logins",color:"light-primary",icon:Object(T.jsx)(n.a,{size:31})},{title:"$9,745",id:976,subtitle:"Total Revenue",subtitleHover:"Subscription and Comission",color:"light-success",icon:Object(T.jsx)(d.a,{size:31})},{title:"29",id:977,subtitle:"Brands Churned",color:"light-danger",icon:Object(T.jsx)(b.a,{size:31})}];return Object(T.jsxs)(x.a,{className:"card-statistics",children:[Object(T.jsxs)(p.a,{children:[Object(T.jsx)(m.a,{style:{paddingLeft:"auto"},children:Object(T.jsx)("h4",{className:"subconcardtitle subconcardtitle-gray",children:"Statistics"})}),Object(T.jsx)(O.a,{className:"card-text font-small-2 mr-25 mb-0",children:Object(T.jsxs)(f.a,{className:"statsDropdownBrands",children:[Object(T.jsx)(g.a,{color:"flat-primary",className:"dropdown-button",children:"..."}),Object(T.jsxs)(y.a,{children:[Object(T.jsx)(w.a,{href:"/",tag:"a",children:"Month"}),Object(T.jsx)(w.a,{href:"/",tag:"a",children:"Quarter"}),Object(T.jsx)(w.a,{href:"/",tag:"a",children:"Year"})]})]})})]}),Object(T.jsx)(v.a,{className:"statistics-body",children:Object(T.jsx)(N.a,{children:s.map((function(t,i){return Object.keys(e),Object(T.jsx)(j.a,Object(a.a)(Object(a.a)({},e),{},{className:o()(Object(r.a)({},"mb-3",i!==s.length-1)),children:Object(T.jsxs)(h.a,{children:[Object(T.jsx)(c.a,{id:"av-tooltip-".concat(t.id),color:t.color,icon:t.icon,className:"mr-1"}),t.subtitleHover&&Object(T.jsx)(u.a,{placement:"top",target:"av-tooltip-".concat(t.id),children:t.subtitleHover}),Object(T.jsxs)(h.a,{className:"media-avatar m-auto",body:!0,children:[Object(T.jsx)("h4",{className:"font-weight-bolder mb-0",style:{fontSize:"26px"},children:t.title}),Object(T.jsx)(O.a,{className:"total-partnership",children:t.subtitle})]})]})}),i)}))})})]})}},885:function(t,e,s){"use strict";var a=s(480),r=s.n(a),c=s(454),i=s(455),o=s(6),n=function(t){var e=t.title,s=t.stats,a=t.options,n=t.series,l=t.type,d=t.height;return Object(o.jsx)(c.a,{className:"card-tiny-line-stats",children:Object(o.jsxs)(i.a,{className:"pb-50",children:[Object(o.jsx)("h6",{children:e}),Object(o.jsx)("h2",{className:"font-weight-bolder mb-1",children:s}),Object(o.jsx)(r.a,{options:a,series:n,type:l,height:d})]})})};e.a=n,n.defaultProps={height:100}}}]);
//# sourceMappingURL=119.900575c5.chunk.js.map