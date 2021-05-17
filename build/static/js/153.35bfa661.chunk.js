(this["webpackJsonprdlink-admin-dashboard"]=this["webpackJsonprdlink-admin-dashboard"]||[]).push([[153],{1918:function(e,c,t){"use strict";t.r(c);var n=t(0),a=t(456),s=t(457),r=t(450),j=t(597),i=t(458),d=t(463),l=t(459),b=t(460),m=t(461),h=t(477),o=t(6),x=function(){return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(d.a,{children:Object(o.jsx)(l.a,{tag:"h4",children:"Step"})}),Object(o.jsxs)(b.a,{children:[Object(o.jsxs)(m.a,{children:["The default step increment is ",Object(o.jsx)("code",{children:"1"}),", and can be changed via the ",Object(o.jsx)("code",{children:"step"})," prop (decimal values allowed). When ",Object(o.jsx)("code",{children:"step"})," is set, the value will always be a multiple of the step size plus the minimum value."]}),Object(o.jsx)(h.a,{for:"step-number-input",children:"Number Input with step of 0.25"}),Object(o.jsx)(j.a,{id:"step-number-input",max:10,step:.25})]})]})},O=function(){return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(d.a,{children:Object(o.jsx)(l.a,{tag:"h4",children:"Number Wrapping"})}),Object(o.jsxs)(b.a,{children:[Object(o.jsxs)(m.a,{children:["To allow the Number Input to wrap from max to min when incrementing (or min to max when decrementing), set the",Object(o.jsx)("code",{children:"wrap"})," prop to ",Object(o.jsx)("code",{children:"true"}),"."]}),Object(o.jsx)(h.a,{for:"wrap-number-input",children:"Wrapping value Number Input"}),Object(o.jsx)(j.a,{id:"wrap-number-input",max:10,wrap:!0})]})]})},u=t(15),p=t(520),f=function(){var e=Object(n.useState)(0),c=Object(u.a)(e,2),t=c[0],a=c[1];return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(d.a,{children:Object(o.jsx)(l.a,{tag:"h4",children:"Basic"})}),Object(o.jsxs)(b.a,{children:[Object(o.jsx)(m.a,{children:"Number Input is used for incrementing or decrementing a numerical value within a range of a minimum and maximum number, with optional step value."}),Object(o.jsxs)("div",{className:"mt-2",children:[Object(o.jsx)(h.a,{for:"basic-number-input",children:"Number Input"}),Object(o.jsx)(j.a,{id:"basic-number-input",value:t,onChange:function(e){return a(e)}}),Object(o.jsxs)(m.a,{className:"mt-1",children:["Value: ",t]}),Object(o.jsx)(p.a,{className:"mb-0",color:"success",children:Object(o.jsx)("div",{className:"alert-body",children:Object(o.jsx)("span",{children:"The ArrowUp and ArrowDown keys can be used to increment or decrement the value. "})})})]})]})]})},g=t(1086),N=function(){return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(d.a,{children:Object(o.jsx)(l.a,{tag:"h4",children:"Sizes"})}),Object(o.jsxs)(b.a,{children:[Object(o.jsxs)(m.a,{children:["Just like other Bootstrap Components, ",Object(o.jsx)("code",{children:"<NumberInput />"})," supports small and large sizing via setting the ",Object(o.jsx)("code",{children:"size"})," prop to either ",Object(o.jsx)("code",{children:"'sm'"})," or ",Object(o.jsx)("code",{children:"'lg'"}),", respectively."]}),Object(o.jsxs)(g.a,{children:[Object(o.jsx)(h.a,{for:"lg-number-input",children:"Large Number Input"}),Object(o.jsx)(j.a,{id:"lg-number-input",size:"lg"})]}),Object(o.jsxs)(g.a,{children:[Object(o.jsx)(h.a,{for:"default-number-input",children:"Default Number Input"}),Object(o.jsx)(j.a,{id:"default-number-input"})]}),Object(o.jsxs)(g.a,{children:[Object(o.jsx)(h.a,{for:"sm-number-input",children:"Small Number Input"}),Object(o.jsx)(j.a,{id:"sm-number-input",size:"sm"})]})]})]})},w=function(){return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(d.a,{children:Object(o.jsx)(l.a,{tag:"h4",children:"Width"})}),Object(o.jsxs)(b.a,{children:[Object(o.jsxs)(m.a,{children:["You can control width via utility classes with prop ",Object(o.jsx)("code",{children:"className"})," such as ",Object(o.jsx)("code",{children:"w-50"}),","," ",Object(o.jsx)("code",{children:"w-75"}),", ",Object(o.jsx)("code",{children:"w-100"}),", or use ",Object(o.jsx)("code",{children:"style"})," prop to set the width."]}),Object(o.jsx)(g.a,{children:Object(o.jsx)(j.a,{style:{width:"200px"}})}),Object(o.jsx)(g.a,{children:Object(o.jsx)(j.a,{className:"w-50"})}),Object(o.jsx)(g.a,{children:Object(o.jsx)(j.a,{className:"w-75"})}),Object(o.jsx)(g.a,{children:Object(o.jsx)(j.a,{className:"w-100"})})]})]})},v=function(){return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(d.a,{children:Object(o.jsx)(l.a,{tag:"h4",children:"Inline"})}),Object(o.jsxs)(b.a,{children:[Object(o.jsxs)(m.a,{children:["Use ",Object(o.jsx)("code",{children:"flex"})," as wrapper to show Number Input as inline component"]}),Object(o.jsxs)(g.a,{className:"d-flex align-items-center",children:[Object(o.jsx)(h.a,{for:"inline-number-input",children:"Inline Number Input"}),Object(o.jsx)(j.a,{className:"w-auto ml-1",id:"inline-number-input"})]})]})]})},y=function(){return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(d.a,{children:Object(o.jsx)(l.a,{tag:"h4",children:"Min & Max"})}),Object(o.jsxs)(b.a,{children:[Object(o.jsxs)(m.a,{children:["Number Input have a default range from ",Object(o.jsx)("code",{children:"1"})," to ",Object(o.jsx)("code",{children:"100"}),", which can be changed by setting the",Object(o.jsx)("code",{children:"min"})," and ",Object(o.jsx)("code",{children:"max"})," props."]}),Object(o.jsx)(h.a,{for:"min-max-number-input",children:"Number Input with min 0 and max 10"}),Object(o.jsx)(j.a,{id:"min-max-number-input",min:0,max:10})]})]})},I=function(){return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(d.a,{children:Object(o.jsx)(l.a,{tag:"h4",children:"Disabled & Readonly states"})}),Object(o.jsxs)(b.a,{children:[Object(o.jsxs)(m.a,{children:["Setting the prop ",Object(o.jsx)("code",{children:"disabled"})," places the component in a disabled, non-interactive state. The"," ",Object(o.jsx)("code",{children:"readonly"}),"prop places the component in a readonly state (focusable, but the value cannot be changed by the user)."]}),Object(o.jsxs)(a.a,{children:[Object(o.jsxs)(s.a,{md:"6",className:"mb-md-0 mb-2",children:[Object(o.jsx)(h.a,{for:"disabled-number-input",children:"Disabled Number Input"}),Object(o.jsx)(j.a,{disabled:!0,id:"disabled-number-input"})]}),Object(o.jsxs)(s.a,{md:"6",children:[Object(o.jsx)(h.a,{for:"readonly-number-input",children:"Readonly Number Input"}),Object(o.jsx)(j.a,{readonly:!0,id:"readonly-number-input"})]})]})]})]})},z=function(){return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(d.a,{children:Object(o.jsx)(l.a,{tag:"h4",children:"Vertical"})}),Object(o.jsxs)(b.a,{children:[Object(o.jsxs)(m.a,{children:["Use prop ",Object(o.jsx)("code",{children:"vertical"})," for a vertical Number Input."]}),Object(o.jsxs)("div",{className:"d-flex justify-content-between flex-wrap",children:[Object(o.jsx)(j.a,{id:"wrap-number-input",vertical:!0,min:1,max:10,size:"lg"}),Object(o.jsx)(j.a,{id:"wrap-number-input",vertical:!0,min:1,max:10}),Object(o.jsx)(j.a,{id:"wrap-number-input",vertical:!0,min:1,max:10,size:"sm"})]})]})]})},C=t(1137),k=t(1140),T=t(1138),D=t(1139),S=function(){return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(d.a,{children:Object(o.jsx)(l.a,{tag:"h4",children:"Custom Icons"})}),Object(o.jsxs)(b.a,{children:[Object(o.jsxs)(m.a,{children:["Use props ",Object(o.jsx)("code",{children:"upIcon"})," or ",Object(o.jsx)("code",{children:"downIcon"})," to change ",Object(o.jsx)("code",{children:"increment"})," and"," ",Object(o.jsx)("code",{children:"decrement"})," icons."]}),Object(o.jsxs)(a.a,{children:[Object(o.jsx)(s.a,{md:"6",className:"mb-md-0 mb-2",children:Object(o.jsx)(j.a,{downIcon:Object(o.jsx)(C.a,{size:14}),upIcon:Object(o.jsx)(k.a,{size:14})})}),Object(o.jsx)(s.a,{md:"6",children:Object(o.jsx)(j.a,{downIcon:Object(o.jsx)(T.a,{size:14}),upIcon:Object(o.jsx)(D.a,{size:14})})})]})]})]})};c.default=function(){return Object(o.jsxs)(n.Fragment,{children:[Object(o.jsx)(r.a,{breadCrumbTitle:"Number Input",breadCrumbParent:"Form Elements",breadCrumbActive:"Number Input"}),Object(o.jsxs)(a.a,{className:"match-height",children:[Object(o.jsx)(s.a,{md:"6",sm:"12",children:Object(o.jsx)(f,{})}),Object(o.jsx)(s.a,{md:"6",sm:"12",children:Object(o.jsx)(N,{})}),Object(o.jsx)(s.a,{md:"6",sm:"12",children:Object(o.jsx)(y,{})}),Object(o.jsx)(s.a,{md:"6",sm:"12",children:Object(o.jsx)(x,{})}),Object(o.jsx)(s.a,{md:"6",sm:"12",children:Object(o.jsx)(O,{})}),Object(o.jsx)(s.a,{md:"6",sm:"12",children:Object(o.jsx)(z,{})}),Object(o.jsx)(s.a,{lg:"6",sm:"12",children:Object(o.jsx)(v,{})}),Object(o.jsx)(s.a,{lg:"6",sm:"12",children:Object(o.jsx)(I,{})}),Object(o.jsx)(s.a,{sm:"12",children:Object(o.jsx)(S,{})}),Object(o.jsx)(s.a,{sm:"12",children:Object(o.jsx)(w,{})})]})]})}},450:function(e,c,t){"use strict";var n=t(449),a=t(1177),s=t(1135),r=t(1199),j=t(1194),i=t(1132),d=t(467),l=t(468),b=t(466),m=t(1370),h=t(1100),o=t(1110),x=t(6);c.a=function(e){var c=e.breadCrumbTitle,t=e.breadCrumbParent,O=e.breadCrumbParent2,u=e.breadCrumbParent3,p=e.breadCrumbActive;return Object(x.jsxs)("div",{className:"content-header row",children:[Object(x.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(x.jsx)("div",{className:"row breadcrumbs-top",children:Object(x.jsxs)("div",{className:"col-12",children:[c?Object(x.jsx)("h2",{className:"content-header-title float-left mb-0",children:c}):"",Object(x.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(x.jsxs)(d.a,{children:[Object(x.jsx)(l.a,{tag:"li",children:Object(x.jsx)(n.b,{to:"/",children:"Home"})}),Object(x.jsx)(l.a,{tag:"li",className:"text-primary",children:t}),O?Object(x.jsx)(l.a,{tag:"li",className:"text-primary",children:O}):"",u?Object(x.jsx)(l.a,{tag:"li",className:"text-primary",children:u}):"",Object(x.jsx)(l.a,{tag:"li",active:!0,children:p})]})})]})})}),Object(x.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(x.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(x.jsxs)(b.a,{children:[Object(x.jsx)(m.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(x.jsx)(a.a,{size:14})}),Object(x.jsxs)(h.a,{tag:"ul",right:!0,children:[Object(x.jsxs)(o.a,{tag:n.b,to:"/apps/chat",children:[Object(x.jsx)(s.a,{className:"mr-1",size:14}),Object(x.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(x.jsxs)(o.a,{tag:n.b,to:"/apps/chat",children:[Object(x.jsx)(r.a,{className:"mr-1",size:14}),Object(x.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(x.jsxs)(o.a,{tag:n.b,to:"/apps/email",children:[Object(x.jsx)(j.a,{className:"mr-1",size:14}),Object(x.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(x.jsxs)(o.a,{tag:n.b,to:"/apps/calendar",children:[Object(x.jsx)(i.a,{className:"mr-1",size:14}),Object(x.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},597:function(e,c,t){"use strict";var n=t(1),a=t(21),s=t(15),r=t(119),j=t(56),i=t.n(j),d=t(1201),l=t(1215),b=t(0),m=t(494),h=t(495),o=t(447),x=t(475),O=(t(976),t(6)),u=function(e){var c,t=e.min,j=e.max,d=e.step,l=e.size,u=e.wrap,p=e.value,f=e.style,g=e.upIcon,N=e.disabled,w=e.readonly,v=e.onChange,y=e.downIcon,I=e.vertical,z=e.className,C=e.onDecrement,k=e.onIncrement,T=e.inputClassName,D=Object(r.a)(e,["min","max","step","size","wrap","value","style","upIcon","disabled","readonly","onChange","downIcon","vertical","className","onDecrement","onIncrement","inputClassName"]),S=Object(b.useState)(p||t),P=Object(s.a)(S,2),A=P[0],U=P[1],W=function(){if(!N&&!w){if(!u&&A<=t)return;U(A-d<t?u?j:t:A-d),C&&k(A)}},E=function(){if(!N&&!w){if(!u&&A>=j)return;U(A+d>j?u?t:j:A+d),k&&k(A)}};return Object(b.useEffect)((function(){v&&v(A)}),[A]),Object(O.jsxs)(m.a,Object(n.a)(Object(n.a)({className:i()("number-input",(c={disabled:N,readonly:w},Object(a.a)(c,z,z),Object(a.a)(c,"vertical-number-input",I),Object(a.a)(c,"vertical-number-input-".concat(l),I&&l),c))},f?{style:f}:{}),{},{children:[Object(O.jsx)(h.a,{addonType:"prepend",onClick:W,children:Object(O.jsx)(o.a,Object(n.a)(Object(n.a)({className:"btn-icon",color:"transparent"},l?{size:l}:{}),{},{disabled:!u&&A<=t||N||w,children:y}))}),Object(O.jsx)(x.a,Object(n.a)(Object(n.a)({},D),{},{type:"number",value:A,disabled:N,readOnly:w,onKeyDown:function(e){e.preventDefault(),w||(38===e.keyCode&&E(),40===e.keyCode&&W())},onChange:function(e){U(Number(e.target.value))},className:i()(Object(a.a)({},T,T))},l?{bsSize:l}:{})),Object(O.jsx)(h.a,{addonType:"append",onClick:E,children:Object(O.jsx)(o.a,Object(n.a)(Object(n.a)({className:"btn-icon",color:"transparent"},l?{size:l}:{}),{},{disabled:!u&&A>=j||N||w,children:g}))})]}))};c.a=u,u.defaultProps={min:1,step:1,wrap:!1,max:1/0,disabled:!1,readonly:!1,downIcon:Object(O.jsx)(d.a,{size:14}),upIcon:Object(O.jsx)(l.a,{size:14})}},976:function(e,c,t){}}]);
//# sourceMappingURL=153.35bfa661.chunk.js.map