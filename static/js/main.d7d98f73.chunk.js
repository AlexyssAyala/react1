(this.webpackJsonptarea_react=this.webpackJsonptarea_react||[]).push([[0],{12:function(e,t,a){e.exports=a(19)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(8),r=a.n(l),c=(a(17),a(11)),s=a(2),i=a(3),d=a(5),m=a(4),u=a(1),h=a(6),p=(a(18),a(9)),b=a(10),v=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={carne:"",horario:"",llegotarde:""},e.handleInputChange=e.handleInputChange.bind(Object(u.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onAddTodo(this.state),this.setState({carne:"",horario:"",llegotarde:""})}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;console.log(a,n),this.setState(Object(b.a)({},n,a))}},{key:"render",value:function(){return o.a.createElement("div",{className:"card"},o.a.createElement("form",{onSubmit:this.handleSubmit,className:"card-body"},o.a.createElement("p",null,"Ingrese su Carnet"),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",name:"carne",className:"form-control",value:this.state.carne,onChange:this.handleInputChange,placeholder:""})),o.a.createElement("div",{className:"form-group"},o.a.createElement("p",null,"Ingrese su horario de Laboratorio"),o.a.createElement("select",{name:"horario",className:"form-control",value:this.state.horario,onChange:this.handleInputChange},o.a.createElement("option",null,"Lunes de 9:00 a 11.00"),o.a.createElement("option",null,"Martes de 13:30 a 15:30"),o.a.createElement("option",null,"Mi\xe9rcoles de 9:00 a 11.00"),o.a.createElement("option",null,"Jueves de 13:30 a 15:30"),o.a.createElement("option",null,"Viernes de 9:00 a 11.00"),o.a.createElement("option",null,"Viernes de 15:30 a 17:30"))),o.a.createElement("div",{className:"form-group"},o.a.createElement("p",null,"Llego Tarde?"),o.a.createElement("div",{class:"custom-control custom-switch"},o.a.createElement("input",{type:"checkbox",class:"custom-control-input",id:"late_switch"}),o.a.createElement("label",{class:"custom-control-label",for:"late_switch"},"Lleg\xf3 tarde?"))),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Ingresar")))}}]),t}(n.Component),E=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={todos:p.a},e.handleAddTodo=e.handleAddTodo.bind(Object(u.a)(e)),e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"removeTodo",value:function(e){this.setState({todos:this.state.todos.filter((function(t,a){return a!==e}))})}},{key:"handleAddTodo",value:function(e){this.setState({todos:[].concat(Object(c.a)(this.state.todos),[e])})}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t,a){return o.a.createElement("div",{className:"col-md-4",key:a},o.a.createElement("div",{className:"card mt-4"},o.a.createElement("div",{className:"card-title text-center"},o.a.createElement("h3",null,t.carne),o.a.createElement("span",{className:"badge badge-pill badge-danger ml-2"},t.horario)),o.a.createElement("div",{className:"card-body"},o.a.createElement("p",null,"Llego Tarde?"),t.llegotarde),o.a.createElement("div",{className:"card-footer"},o.a.createElement("button",{className:"btn btn-danger",onClick:e.removeTodo.bind(e,a)},"Delete"))))}));return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row mt-4"},o.a.createElement("div",{className:"col-md-4 text-center"},o.a.createElement(v,{onAddTodo:this.handleAddTodo})),o.a.createElement("div",{className:"col-md-8"},o.a.createElement("div",{className:"column"},t)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e){e.exports=JSON.parse('{"a":[{}]}')}},[[12,1,2]]]);
//# sourceMappingURL=main.d7d98f73.chunk.js.map