(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(72)},36:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(11),i=n.n(l),o=n(12),c=n(5),u=(n(36),n(75)),s=n(73),d=n(74),m=n(29),h=n.n(m),f=function(e){var t=e.data,n=e.onClickNode,a=e.bgColor;return r.a.createElement("div",{id:"treeWrapper",style:{width:"100%",height:"100%"},className:a},a?r.a.createElement("span",{className:"blackFont"},"MindMap "):r.a.createElement("span",null,"Note: For best results, add nodes in the following order: F, C, I, B, D, G, J. "),r.a.createElement(h.a,{className:"nodeFont",styles:{nodes:{node:{circle:{fill:"#ffd303",name:{fontFamily:"'Roboto', sans-serif",fontSize:"2rem"}}},leafNode:{circle:{fill:"#90ee02",name:{fontFamily:"'Roboto', sans-serif",fontSize:"2rem"}}}}},collapsible:!1,orientation:"vertical",translate:{x:document.getElementById("treeWrapper")?document.getElementById("treeWrapper").clientWidth/2:window.innerWidth/2,y:document.getElementById("treeWrapper")?document.getElementById("treeWrapper").clientHeight/4:window.innerHeight/4},data:t,onClick:n}))},g=n(76),p=function(e){e.text,e.array;var t=e.current,n=e.setCurrent,a=e.insert;e.data;return r.a.createElement("div",{className:"blue-bg"},r.a.createElement(s.a,null,r.a.createElement(d.a,{md:"2"},r.a.createElement("input",{className:"next-node-input width-100",name:"current",value:t,onChange:function(e){return n(e.target.value)},placeholder:"Enter the value"})),r.a.createElement(d.a,{md:"10"},r.a.createElement(g.a,{variant:"warning",onClick:function(){a(t),n("")}},"Add Node"))))};function v(e){this.value=e,this.left=null,this.right=null}var b=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],l=t[1],i=Object(a.useState)([]),m=Object(c.a)(i,2),h=m[0],g=(m[1],Object(a.useState)({root:null})),b=Object(c.a)(g,2),E=b[0],w=b[1],N=Object(a.useState)(),y=Object(c.a)(N,2),j=y[0],k=(y[1],Object(a.useState)("")),O=Object(c.a)(k,2),C=O[0],S=O[1];function W(e){if(!e)return null;if(e.left&&W(e.left),e.value){var t=[];return e.left&&(t=[].concat(Object(o.a)(t),[W(e.left)])),e.right&&(t=[].concat(Object(o.a)(t),[W(e.right)])),{name:String(e.value),children:t.length&&[W(e.left)].length?t:[]}}e.right&&W(e.right)}return r.a.createElement("main",{className:"App"},r.a.createElement(u.a,{className:"container-fullSize"},r.a.createElement(s.a,null,r.a.createElement(p,{current:n,setCurrent:l,insert:function(e){var t=new v(e);if(E.root)for(var n=E.root;n;)if(t.value<n.value){if(!n.left){n.left=t;break}n=n.left}else{if(!(t.value>n.value))break;if(!n.right){n.right=t;break}n=n.right}else w({root:t});return E},data:E,array:h,text:j})),r.a.createElement(s.a,{className:"purple-bg nodeFont"},r.a.createElement(d.a,{className:"height-100 width-100 remove-padding"},r.a.createElement(f,{data:function(e){var t=Object.keys(e).map(function(t){return{name:e[t]&&e[t].value?String(e[t].value):t,children:W(e.root)?[W(e.root)]:null}});return t[0].children?t[0].children:t}(E),onClickNode:function(e){var t;if(e.parent){var n=[];e.children&&e.children.forEach(function(e){n.push({name:e.name})}),t={name:e.parent.name,children:[{name:e.name,children:n}]}}else{var a=[];e.children&&e.children.forEach(function(e){a.push({name:e.name})}),t={name:e.name,children:a}}S(t),console.log("Now, ",C)}})),r.a.createElement(d.a,{className:"height-100 width-100 remove-padding"},C?r.a.createElement(f,{data:C,bgColor:"teal-bg"}):null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.4df8188f.chunk.js.map