(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(1),s=c.n(o),a=c(7),r=c.n(a),i=(c(14),c(6)),l=c(5),d=c(8),u=Object(o.createContext)(),j=function(e){var t=Object(o.useState)(j()),c=Object(d.a)(t,2),s=c[0],a=c[1];function r(e){localStorage.setItem("todos",JSON.stringify(e))}function j(){return localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]}return Object(n.jsx)(u.Provider,{value:{todos:s,DeleteTodo:function(e){var t=s.filter((function(t){if(t.id!==e)return t}));a(t),r(t)},ChangeTypeTodo:function(e){var t=s.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{type:!t.type}):t}));a(t),r(t)},DisplayTodos:function(e){var t=j();switch(e){case 0:a(t);break;case 1:t=t.filter((function(e){if(e.type)return e})),a(t);break;case 2:t=t.filter((function(e){if(!e.type)return e})),a(t)}},CreateTodo:function(e){var t={value:e,type:!1,id:(new Date).getTime().toString()};r([].concat(Object(l.a)(s),[t])),a([].concat(Object(l.a)(s),[t]))}},children:e.children})};var b=function(){var e=Object(o.useContext)(u),t=e.todos,c=e.DeleteTodo,s=e.ChangeTypeTodo;return Object(n.jsx)("div",{className:"todo-container",children:Object(n.jsx)("ul",{className:"todo-list",children:t.map((function(e){return Object(n.jsxs)("div",{className:e.type?"todo completed":"todo",children:[Object(n.jsx)("li",{className:"todo-item",children:e.value}),Object(n.jsx)("button",{className:"complete-btn",onClick:function(){s(e.id)},children:Object(n.jsx)("i",{className:"fas fa-check"})}),Object(n.jsx)("button",{className:"delete-btn",onClick:function(){c(e.id)},children:Object(n.jsx)("i",{className:"fas fa-trash"})})]},e.id)}))})})};var f=function(){var e=Object(o.useRef)(null),t=(Object(o.useRef)(null),Object(o.useContext)(u)),c=t.CreateTodo,s=t.DisplayTodos;return Object(o.useEffect)((function(){e.current.focus()}),[]),Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=e.current.value;c(n),e.current.value=""},children:[Object(n.jsx)("input",{type:"text",className:"todo-input",ref:e}),Object(n.jsx)("button",{className:"todo-button",type:"submit",children:Object(n.jsx)("i",{className:"fas fa-plus-square"})}),Object(n.jsx)("div",{className:"select",children:Object(n.jsxs)("select",{name:"todos",className:"filter-todo",onClick:function(e){console.log(e.target.selectedIndex),s(e.target.selectedIndex)},children:[Object(n.jsx)("option",{value:"All",children:"All"}),Object(n.jsx)("option",{value:"Completed",children:"Completed"}),Object(n.jsx)("option",{value:"Uncompleted",children:"Uncompleted"})]})})]})};var O=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("header",{children:Object(n.jsx)("h1",{children:"Ed's Todo List"})}),Object(n.jsx)(f,{}),Object(n.jsx)(b,{})]})};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(j,{children:Object(n.jsx)(O,{})})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8b77ba36.chunk.js.map