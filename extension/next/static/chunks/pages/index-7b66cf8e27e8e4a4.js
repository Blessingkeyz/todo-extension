(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8889)}])},8889:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r=t(797),o=t(5893),i=t(7294),l=t(639),c=t(4373),u=t(3234),d=t(979),s=t(7741),a=function(e){var n=e.item,t=e.handleDelete,r=n.id;return(0,o.jsx)(l.gC,{children:(0,o.jsxs)(l.kC,{gap:5,alignContent:"center",justifyItems:"center",children:[(0,o.jsx)(s.zx,{bgColor:"green",color:"white",children:n.todo}),(0,o.jsx)(s.zx,{onClick:function(){return t(r)},bgColor:"red",color:"white",children:"Delete"})]})})},h=function(){var e=(0,i.useState)(""),n=e[0],t=e[1],h=(0,i.useState)([]),f=h[0],g=h[1],x=function(e){t(e.target.value)},C=function(){var e={id:new Date().getMilliseconds(),todo:n};n?g(function(n){return(0,r.Z)(n).concat([e])}):alert("Please fill in a Todo"),t("")},j=function(e){g(f.filter(function(n){return n.id!==e}))},p=null==f?void 0:f.map(function(e,n){return(0,o.jsx)(a,{item:e,handleDelete:j},n)});return(0,o.jsxs)(l.gC,{height:"100vh",bgColor:"red.100",justify:"center",align:"center",padding:"200px 20px",children:[(0,o.jsxs)(l.X6,{children:["TODO HANDLER",(0,o.jsx)(c.Vp,{fontSize:{base:0,sm:"25%",md:"25%",lg:"50%"},bgColor:{base:"transparent",sm:"green",md:"green"},fontFamily:"cursive",color:"white",children:"designed by Blessingkeyz"})]}),(0,o.jsxs)(l.kC,{width:"80%",margin:"100px auto",children:[(0,o.jsx)(u.NI,{children:(0,o.jsx)(d.II,{bgColor:"white",placeholder:"Add Todo",value:n,onChange:function(e){return x(e)}})}),(0,o.jsx)(s.zx,{colorScheme:"facebook",_hover:{backgroundColor:"green"},onClick:C,children:"Add Todo"})]}),p]})}}},function(e){e.O(0,[384,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);