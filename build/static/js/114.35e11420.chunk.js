(this["webpackJsonprdlink-admin-dashboard"]=this["webpackJsonprdlink-admin-dashboard"]||[]).push([[114],{1861:function(e,a,s){"use strict";s.r(a);var t=s(15),c=s(532),n=s(449),r=s(1169),o=s(1243),l=s(1194),i=s(1175),d=s(522),u=s(456),p=s(457),b=s(459),m=s(461),f=s(491),j=s(1086),g=s(477),h=s(475),O=s(1083),x=s(447),v=(s(526),s(6));a.default=function(){var e=Object(c.a)(),a=Object(t.a)(e,2),N=a[0],y=(a[1],"dark"===N?"login-v2-dark.svg":"login-v2.svg"),T=s(614)("./".concat(y)).default;return Object(v.jsx)("div",{className:"auth-wrapper auth-v2",children:Object(v.jsxs)(u.a,{className:"auth-inner m-0",children:[Object(v.jsx)(n.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:Object(v.jsx)("h2",{className:"brand-text text-primary ml-1",children:"RD LINK"})}),Object(v.jsx)(p.a,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:Object(v.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:Object(v.jsx)("img",{className:"img-fluid",src:T,alt:"Login V2"})})}),Object(v.jsx)(p.a,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:Object(v.jsxs)(p.a,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[Object(v.jsx)(b.a,{tag:"h2",className:"font-weight-bold mb-1",children:"Welcome to RD LINK! \ud83d\udc4b"}),Object(v.jsx)(m.a,{className:"mb-2",children:"Please sign-in to your account and start the adventure"}),Object(v.jsxs)(f.a,{className:"auth-login-form mt-2",onSubmit:function(e){return e.preventDefault()},children:[Object(v.jsxs)(j.a,{children:[Object(v.jsx)(g.a,{className:"form-label",for:"login-email",children:"Email"}),Object(v.jsx)(h.a,{type:"email",id:"login-email",placeholder:"john@example.com",autoFocus:!0})]}),Object(v.jsxs)(j.a,{children:[Object(v.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(v.jsx)(g.a,{className:"form-label",for:"login-password",children:"Password"}),Object(v.jsx)(n.b,{to:"/pages/forgot-password-v2",children:Object(v.jsx)("small",{children:"Forgot Password?"})})]}),Object(v.jsx)(d.a,{className:"input-group-merge",id:"login-password"})]}),Object(v.jsx)(j.a,{children:Object(v.jsx)(O.a,{type:"checkbox",className:"custom-control-Primary",id:"remember-me",label:"Remember Me"})}),Object(v.jsx)(x.a.Ripple,{color:"primary",block:!0,children:"Sign in"})]}),Object(v.jsxs)("p",{className:"text-center mt-2",children:[Object(v.jsx)("span",{className:"mr-25",children:"New on our platform?"}),Object(v.jsx)(n.b,{to:"/pages/register-v2",children:Object(v.jsx)("span",{children:"Create an account"})})]}),Object(v.jsx)("div",{className:"divider my-2",children:Object(v.jsx)("div",{className:"divider-text",children:"or"})}),Object(v.jsxs)("div",{className:"auth-footer-btn d-flex justify-content-center",children:[Object(v.jsx)(x.a.Ripple,{color:"facebook",children:Object(v.jsx)(r.a,{size:14})}),Object(v.jsx)(x.a.Ripple,{color:"twitter",children:Object(v.jsx)(o.a,{size:14})}),Object(v.jsx)(x.a.Ripple,{color:"google",children:Object(v.jsx)(l.a,{size:14})}),Object(v.jsx)(x.a.Ripple,{className:"mr-0",color:"github",children:Object(v.jsx)(i.a,{size:14})})]})]})})]})})}},456:function(e,a,s){"use strict";var t=s(14),c=s(20),n=s(0),r=s.n(n),o=s(5),l=s.n(o),i=s(56),d=s.n(i),u=s(78),p=l.a.oneOfType([l.a.number,l.a.string]),b={tag:u.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},m={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e){var a=e.className,s=e.cssModule,n=e.noGutters,o=e.tag,l=e.form,i=e.widths,p=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];i.forEach((function(a,s){var t=e[a];if(delete p[a],t){var c=!s;b.push(c?"row-cols-"+t:"row-cols-"+a+"-"+t)}}));var m=Object(u.mapToCssModules)(d()(a,n?"no-gutters":null,l?"form-row":"row",b),s);return r.a.createElement(o,Object(t.a)({},p,{className:m}))};f.propTypes=b,f.defaultProps=m,a.a=f},457:function(e,a,s){"use strict";var t=s(14),c=s(20),n=s(0),r=s.n(n),o=s(5),l=s.n(o),i=s(56),d=s.n(i),u=s(78),p=l.a.oneOfType([l.a.number,l.a.string]),b=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:p,offset:p})]),m={tag:u.tagPropType,xs:b,sm:b,md:b,lg:b,xl:b,className:l.a.string,cssModule:l.a.object,widths:l.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e,a,s){return!0===s||""===s?e?"col":"col-"+a:"auto"===s?e?"col-auto":"col-"+a+"-auto":e?"col-"+s:"col-"+a+"-"+s},g=function(e){var a=e.className,s=e.cssModule,n=e.widths,o=e.tag,l=Object(c.a)(e,["className","cssModule","widths","tag"]),i=[];n.forEach((function(a,t){var c=e[a];if(delete l[a],c||""===c){var n=!t;if(Object(u.isObject)(c)){var r,o=n?"-":"-"+a+"-",p=j(n,a,c.size);i.push(Object(u.mapToCssModules)(d()(((r={})[p]=c.size||""===c.size,r["order"+o+c.order]=c.order||0===c.order,r["offset"+o+c.offset]=c.offset||0===c.offset,r)),s))}else{var b=j(n,a,c);i.push(b)}}})),i.length||i.push("col");var p=Object(u.mapToCssModules)(d()(a,i),s);return r.a.createElement(o,Object(t.a)({},l,{className:p}))};g.propTypes=m,g.defaultProps=f,a.a=g},459:function(e,a,s){"use strict";var t=s(14),c=s(20),n=s(0),r=s.n(n),o=s(5),l=s.n(o),i=s(56),d=s.n(i),u=s(78),p={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},b=function(e){var a=e.className,s=e.cssModule,n=e.tag,o=Object(c.a)(e,["className","cssModule","tag"]),l=Object(u.mapToCssModules)(d()(a,"card-title"),s);return r.a.createElement(n,Object(t.a)({},o,{className:l}))};b.propTypes=p,b.defaultProps={tag:"div"},a.a=b},461:function(e,a,s){"use strict";var t=s(14),c=s(20),n=s(0),r=s.n(n),o=s(5),l=s.n(o),i=s(56),d=s.n(i),u=s(78),p={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},b=function(e){var a=e.className,s=e.cssModule,n=e.tag,o=Object(c.a)(e,["className","cssModule","tag"]),l=Object(u.mapToCssModules)(d()(a,"card-text"),s);return r.a.createElement(n,Object(t.a)({},o,{className:l}))};b.propTypes=p,b.defaultProps={tag:"p"},a.a=b},470:function(e,a,s){"use strict";var t=s(14),c=s(20),n=s(0),r=s.n(n),o=s(5),l=s.n(o),i=s(56),d=s.n(i),u=s(78),p={tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},b=function(e){var a=e.className,s=e.cssModule,n=e.tag,o=Object(c.a)(e,["className","cssModule","tag"]),l=Object(u.mapToCssModules)(d()(a,"input-group-text"),s);return r.a.createElement(n,Object(t.a)({},o,{className:l}))};b.propTypes=p,b.defaultProps={tag:"span"},a.a=b},475:function(e,a,s){"use strict";var t=s(14),c=s(20),n=s(116),r=s(115),o=s(0),l=s.n(o),i=s(5),d=s.n(i),u=s(56),p=s.n(u),b=s(78),m={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:b.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},f=function(e){function a(a){var s;return(s=e.call(this,a)||this).getRef=s.getRef.bind(Object(n.a)(s)),s.focus=s.focus.bind(Object(n.a)(s)),s}Object(r.a)(a,e);var s=a.prototype;return s.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},s.focus=function(){this.ref&&this.ref.focus()},s.render=function(){var e=this.props,a=e.className,s=e.cssModule,n=e.type,r=e.bsSize,o=e.valid,i=e.invalid,d=e.tag,u=e.addon,m=e.plaintext,f=e.innerRef,j=Object(c.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(n)>-1,h=new RegExp("\\D","g"),O=d||("select"===n||"textarea"===n?n:"input"),x="form-control";m?(x+="-plaintext",O=d||"input"):"file"===n?x+="-file":"range"===n?x+="-range":g&&(x=u?null:"form-check-input"),j.size&&h.test(j.size)&&(Object(b.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=j.size,delete j.size);var v=Object(b.mapToCssModules)(p()(a,i&&"is-invalid",o&&"is-valid",!!r&&"form-control-"+r,x),s);return("input"===O||d&&"function"===typeof d)&&(j.type=n),j.children&&!m&&"select"!==n&&"string"===typeof O&&"select"!==O&&(Object(b.warnOnce)('Input with a type of "'+n+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete j.children),l.a.createElement(O,Object(t.a)({},j,{ref:f,className:v,"aria-invalid":i}))},a}(l.a.Component);f.propTypes=m,f.defaultProps={type:"text"},a.a=f},477:function(e,a,s){"use strict";var t=s(14),c=s(20),n=s(0),r=s.n(n),o=s(5),l=s.n(o),i=s(56),d=s.n(i),u=s(78),p=l.a.oneOfType([l.a.number,l.a.string]),b=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:p,order:p,offset:p})]),m={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:u.tagPropType,className:l.a.string,cssModule:l.a.object,xs:b,sm:b,md:b,lg:b,xl:b,widths:l.a.array},f={tag:"label",widths:["xs","sm","md","lg","xl"]},j=function(e,a,s){return!0===s||""===s?e?"col":"col-"+a:"auto"===s?e?"col-auto":"col-"+a+"-auto":e?"col-"+s:"col-"+a+"-"+s},g=function(e){var a=e.className,s=e.cssModule,n=e.hidden,o=e.widths,l=e.tag,i=e.check,p=e.size,b=e.for,m=Object(c.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),f=[];o.forEach((function(a,t){var c=e[a];if(delete m[a],c||""===c){var n,r=!t;if(Object(u.isObject)(c)){var o,l=r?"-":"-"+a+"-";n=j(r,a,c.size),f.push(Object(u.mapToCssModules)(d()(((o={})[n]=c.size||""===c.size,o["order"+l+c.order]=c.order||0===c.order,o["offset"+l+c.offset]=c.offset||0===c.offset,o))),s)}else n=j(r,a,c),f.push(n)}}));var g=Object(u.mapToCssModules)(d()(a,!!n&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,f,!!f.length&&"col-form-label"),s);return r.a.createElement(l,Object(t.a)({htmlFor:b},m,{className:g}))};g.propTypes=m,g.defaultProps=f,a.a=g},491:function(e,a,s){"use strict";var t=s(14),c=s(20),n=s(116),r=s(115),o=s(0),l=s.n(o),i=s(5),d=s.n(i),u=s(56),p=s.n(u),b=s(78),m={children:d.a.node,inline:d.a.bool,tag:b.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},f=function(e){function a(a){var s;return(s=e.call(this,a)||this).getRef=s.getRef.bind(Object(n.a)(s)),s.submit=s.submit.bind(Object(n.a)(s)),s}Object(r.a)(a,e);var s=a.prototype;return s.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},s.submit=function(){this.ref&&this.ref.submit()},s.render=function(){var e=this.props,a=e.className,s=e.cssModule,n=e.inline,r=e.tag,o=e.innerRef,i=Object(c.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(b.mapToCssModules)(p()(a,!!n&&"form-inline"),s);return l.a.createElement(r,Object(t.a)({},i,{ref:o,className:d}))},a}(o.Component);f.propTypes=m,f.defaultProps={tag:"form"},a.a=f},494:function(e,a,s){"use strict";var t=s(14),c=s(20),n=s(0),r=s.n(n),o=s(5),l=s.n(o),i=s(56),d=s.n(i),u=s(78),p={tag:u.tagPropType,size:l.a.string,className:l.a.string,cssModule:l.a.object},b=function(e){var a=e.className,s=e.cssModule,n=e.tag,o=e.size,l=Object(c.a)(e,["className","cssModule","tag","size"]),i=Object(u.mapToCssModules)(d()(a,"input-group",o?"input-group-"+o:null),s);return r.a.createElement(n,Object(t.a)({},l,{className:i}))};b.propTypes=p,b.defaultProps={tag:"div"},a.a=b},495:function(e,a,s){"use strict";var t=s(14),c=s(20),n=s(0),r=s.n(n),o=s(5),l=s.n(o),i=s(56),d=s.n(i),u=s(78),p=s(470),b={tag:u.tagPropType,addonType:l.a.oneOf(["prepend","append"]).isRequired,children:l.a.node,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,s=e.cssModule,n=e.tag,o=e.addonType,l=e.children,i=Object(c.a)(e,["className","cssModule","tag","addonType","children"]),b=Object(u.mapToCssModules)(d()(a,"input-group-"+o),s);return"string"===typeof l?r.a.createElement(n,Object(t.a)({},i,{className:b}),r.a.createElement(p.a,{children:l})):r.a.createElement(n,Object(t.a)({},i,{className:b,children:l}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},522:function(e,a,s){"use strict";var t=s(1),c=s(21),n=s(15),r=s(119),o=s(0),l=s(56),i=s.n(l),d=s(1168),u=s(1167),p=s(477),b=s(494),m=s(475),f=s(495),j=s(470),g=s(6),h=function(e){var a=e.label,s=e.hideIcon,l=e.showIcon,h=e.visible,O=e.className,x=e.htmlFor,v=e.placeholder,N=e.iconSize,y=e.inputClassName,T=Object(r.a)(e,["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName"]),M=Object(o.useState)(h),w=Object(n.a)(M,2),z=w[0],P=w[1];return Object(g.jsxs)(o.Fragment,{children:[a?Object(g.jsx)(p.a,{for:x,children:a}):null,Object(g.jsxs)(b.a,{className:i()(Object(c.a)({},O,O)),children:[Object(g.jsx)(m.a,Object(t.a)(Object(t.a)({type:!1===z?"password":"text",placeholder:v||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:i()(Object(c.a)({},y,y))},a&&x?{id:x}:{}),T)),Object(g.jsx)(f.a,{addonType:"append",onClick:function(){return P(!z)},children:Object(g.jsx)(j.a,{className:"cursor-pointer",children:function(){var e=N||14;return!1===z?s||Object(g.jsx)(d.a,{size:e}):l||Object(g.jsx)(u.a,{size:e})}()})})]})]})};a.a=h,h.defaultProps={visible:!1}}}]);
//# sourceMappingURL=114.35e11420.chunk.js.map