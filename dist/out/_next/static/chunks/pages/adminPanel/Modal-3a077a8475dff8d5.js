(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[785],{2578:function(n,o,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/adminPanel/Modal",function(){return a(3452)}])},3452:function(n,o,a){"use strict";a.r(o),a.d(o,{default:function(){return c}});var t=a(5893),e=a(5336),l=a.n(e),i=a(7294),u=a(5617),r=a(8090),d=a(9669),_=a.n(d);function c(n){var o=n.show,a=(0,i.useState)(""),e=a[0],d=a[1],c=(0,u.I0)(),s=void 0;return(0,t.jsx)("div",{onClick:function(){return c((0,r.$J)())},className:l().modal,style:{display:o?"block":"none"},children:(0,t.jsxs)("div",{onClick:function(n){return n.stopPropagation()},className:l().modal_main,children:[(0,t.jsx)("input",{type:"text",onChange:function(n){return d(n.target.value)},value:e,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),(0,t.jsx)("input",{type:"file",onChange:function(n){return function(n){s=n.target.files[0],console.log(s)}(n)}}),(0,t.jsx)("select",{children:(0,t.jsx)("option",{})}),(0,t.jsx)("button",{onClick:function(){if(0===e.length)return console.log("Poshel naxyi"),1;var n=new FormData;n.append("name",e),n.append("image",s),_().post("/company/create",n).then((function(n){n.data._id})),c((0,r.$J)())},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})}},5336:function(n){n.exports={modal:"Modal_modal__zjFUT",modal_main:"Modal_modal_main__4VlQO",modal_header:"Modal_modal_header__GD1Eb",modal_input:"Modal_modal_input__EzhUh",modal_button:"Modal_modal_button__RLQr6"}}},function(n){n.O(0,[669,774,888,179],(function(){return o=2578,n(n.s=o);var o}));var o=n.O();_N_E=o}]);