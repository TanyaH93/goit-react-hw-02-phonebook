(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports=n(19)},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),i=n(11),l=n(1),u=n(2),m=n(4),s=n(3),h=n(9),b=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),e.props.onAddContact(e.state.name,e.state.number),e.setState({name:"",number:""})},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(h.a)({},a,r))},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Name",r.a.createElement("input",{type:"text",value:this.state.name,onChange:this.handleChange,name:"name"})),r.a.createElement("label",null,"Phone Number",r.a.createElement("input",{type:"number",value:this.state.number,onChange:this.handleChange,name:"number"})),r.a.createElement("button",{type:"submit"}," Add contact"))}}]),n}(a.Component),d=function(e){var t=e.contacts,n=e.onRemove;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.name," : ",e.number),r.a.createElement("button",{type:"submit",onClick:function(){return n(e.id)}},"Remove"))})))},f=function(e){var t=e.value,n=e.filterChange;return r.a.createElement("div",null,r.a.createElement("h2",null,"Contacts "),r.a.createElement("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)}}))},v=n(10),p=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.onAddContacts=function(t,n){var a={id:Object(v.v4)(),name:t,number:n};if(e.state.contacts.find((function(e){return e.name===t})))return alert("\u0410 contact with the same name already exists"),a;e.setState((function(e){return{contacts:[].concat(Object(i.a)(e.contacts),[a])}}))},e.changeFilter=function(t){e.setState({filter:t})},e.removeContact=function(t){e.setState((function(e){return console.log(e),{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.visibleContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLocaleLowerCase())}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.visibleContacts();return console.log(this.state),r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{onAddContact:this.onAddContacts}),r.a.createElement(f,{value:e,filterChange:this.changeFilter}),r.a.createElement(d,{contacts:t,onRemove:this.removeContact}))}}]),n}(a.Component);o.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.fffc7c95.chunk.js.map