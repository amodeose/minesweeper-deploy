(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(3),i=n.n(c),o=(n(15),n(4)),l=n(5),r=n(7),u=n(6),d=n(8),f=n(1),m=(n(17),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).handleRestart=function(){window.location.reload()},n.state={progress:0,flags:0,bombs:0,lose:!1},n.handleClick=n.handleClick.bind(Object(f.a)(Object(f.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){var t=e.target;if(t.classList.contains("bomb")){var n=this;setTimeout(function(){for(var e=0,t=0,a=0,s=1;s<1601;s++){var c=document.getElementById(s);c.classList.contains("clicked")&&e++,c.classList.contains("bomb")&&a++,c.classList.contains("flag")&&c.classList.contains("bomb")&&t++,c.parentElement.removeChild(c)}n.setState({progress:Math.round(e/1600*100),flags:t,bombs:a,lose:!0})},1e3)}t.classList.contains("unclicked")&&function(){t.classList.remove("unclicked"),t.classList.add("clicked"),t.append(t.value);for(var e=1;e>=1;){e=0;for(var n=function(t){var n=document.getElementById(t);if(!n.classList.contains("bomb")){var a=[t-40,t+1,t-1,t+40];t<=40&&(a=a.filter(function(e){return e!==t-40})),t>=1561&&(a=a.filter(function(e){return e!==t+40})),1===t&&(a=a.filter(function(e){return e!==t-1})),(t-1)%40===0&&(a=a.filter(function(e){return e!==t-1})),t%40===0&&(a=a.filter(function(e){return e!==t+1})),a.forEach(function(t){var a=document.getElementById(t);a.classList.contains("clicked")&&n.classList.contains("unclicked")&&""==a.value&&(n.classList.add("clicked"),n.classList.remove("unclicked"),n.append(n.value),e++)})}},a=1;a<1601;a++)n(a)}}()}},{key:"componentDidMount",value:function(){for(var e=function(e){var t=0,n=document.getElementById(e);n.addEventListener("contextmenu",function(e){return e.preventDefault(),n.classList.contains("flag")?n.classList.remove("flag"):n.classList.add("flag"),!1},!1);var a=[e-40,e-39,e-41,e+1,e-1,e+40,e+39,e+41];switch(e<=40&&(a=a.filter(function(t){return t!==e-40&&t!==e-39&&t!==e-41})),e>=1561&&(a=a.filter(function(t){return t!==e+40&&t!==e+39&&t!==e+41})),1===e&&(a=a.filter(function(t){return t!==e-1})),(e-1)%40===0&&(a=a.filter(function(t){return t!==e-1&&t!==e-41&&t!==e+39})),e%40===0&&(a=a.filter(function(t){return t!==e+1&&t!==e-39&&t!==e+41})),a.forEach(function(e){document.getElementById(e).classList.contains("bomb")&&t++}),n.value=t,n.classList.contains("bomb")&&(n.value=""),t){case 0:n.value="";break;case 1:n.classList.add("blue");break;case 2:n.classList.add("green");break;case 3:n.classList.add("red")}},t=1;t<1601;t++)e(t)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"boundary"},function(){for(var t=[],n=1;n<1601;n++)Math.random()>.9?t.push(s.a.createElement("div",{className:"unclicked bomb cell",key:n,onClick:e.handleClick,id:n})):t.push(s.a.createElement("div",{className:"unclicked cell",key:n,onClick:e.handleClick,id:n}));return t}()),this.state.lose&&s.a.createElement("div",{id:"lose"},s.a.createElement("h1",null,"You hit a bomb! You completed ",this.state.progress,"% of the game and successfully flagged ",this.state.flags," out of ",this.state.bombs," bombs."),s.a.createElement("button",{onClick:this.handleRestart},"Play Again?")),s.a.createElement("h4",null,"Left click squares without bombs and right click to flag squares with bombs. The numbers indicate the number of bombs in the adjacent 8 squares."))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.afe0eecc.chunk.js.map