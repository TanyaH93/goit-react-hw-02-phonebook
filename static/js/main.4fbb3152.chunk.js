(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={inputForm:"ContactForm_inputForm__9Er8z"}},12:function(e,t,n){e.exports={shell:"App_shell__1kqEi"}},14:function(e,t,n){e.exports=n(21)},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),l=n(13),u=n(1),i=n(2),s=n(4),m=n(3),h=n(9),p=n(10),f=n(11),b=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleInputCange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(p.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onAddContact(e.state.name,e.state.number),e.setState({name:"",number:""})},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:f.inputForm,onSubmit:this.handleSubmit},r.a.createElement("label",null," ",r.a.createElement("p",null,"Name"),r.a.createElement("input",{required:!0,type:"text",value:this.state.name,onChange:this.handleInputCange,name:"name"})),r.a.createElement("label",null," ",r.a.createElement("p",null,"Number"),r.a.createElement("input",{required:!0,placeholder:"(097)111-11-11",pattern:"[0-9 + -/(/)]+",type:"text",value:this.state.number,onChange:this.handleInputCange,name:"number"})),r.a.createElement("section",null,r.a.createElement("button",{type:"submit"},"Add contact"))))}}]),n}(a.Component);function v(e){var t=e.value,n=e.onChangeFilter;return r.a.createElement("div",null,r.a.createElement("p",null,"Find contacts by name"),r.a.createElement("input",{type:"text",className:"TaskEditor-input",value:t,onChange:function(e){return n(e.target.value)}}))}var d=function(e){var t=e.name,n=e.number,a=e.onRemove;return r.a.createElement("li",null,r.a.createElement("p",null,t,": ",n," ",r.a.createElement("button",{type:"button",onClick:a},"Delete")))},E=function(e){var t=e.contacts,n=e.onRemoveContact;return r.a.createElement("ul",null,t.map((function(e){var t=e.id,a=e.name,c=e.number;return r.a.createElement(d,{key:t,name:a,number:c,onRemove:function(){return n(t)}})})))},C=n(12),g=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:""},e.addContact=function(t,n){var a={id:Object(h.v4)(),name:t,number:n},r=a.name;if(e.state.contacts.some((function(e){return e.name===r})))return alert("".concat(r," is alredy in contacts."));e.setState((function(e){return{contacts:[].concat(Object(l.a)(e.contacts),[a])}}))},e.changeFilter=function(t){e.setState({filter:t})},e.getVisibleContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e.removeContact=function(t){e.state.filter.length>0&&1===e.getVisibleContacts().length&&e.setState((function(){return{filter:""}})),e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getVisibleContacts();return r.a.createElement("div",{className:C.shell},r.a.createElement("h1",null,"Phonebook"),r.a.createElement(b,{onAddContact:this.addContact}),r.a.createElement("h2",null,"Contacts"),this.state.contacts.length>1&&r.a.createElement(v,{value:e,onChangeFilter:this.changeFilter}),t.length>0&&r.a.createElement(E,{contacts:t,onRemoveContact:this.removeContact}))}}]),n}(a.Component);o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4fbb3152.chunk.js.map