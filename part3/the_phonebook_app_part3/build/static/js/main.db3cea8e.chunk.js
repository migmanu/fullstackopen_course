(this.webpackJsonpthe_phonebook_app=this.webpackJsonpthe_phonebook_app||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var s=t(1),a=t(14),c=t.n(a),r=t(3),o=t(4),u=t.n(o),i="/api/persons",h={getAll:function(){return u.a.get(i).then((function(e){return e.data}))},create:function(e){return u.a.post(i,e).then((function(e){return e.data}))},update:function(e,n){return u.a.put("".concat(i,"/").concat(e),n).then((function(e){return e.data}))},erase:function(e){return u.a.delete("".concat(i,"/").concat(e)).then((function(e){return e.data}))}},b=t(0),d=function(e){return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:function(n){var t=e.persons.map((function(e){return e.name}));n.preventDefault();var s={name:e.newName,number:e.newNumber};if(t.some((function(n){return n===e.newName}))){var a=e.persons.filter((function(n){return n.name===e.newName}));if(!1===window.confirm('Hey, "'.concat(e.newName,'" is already in the Phonebook. Wanna update number?')))return window.alert("Ok, I guess... Then, please just use a different name");var c=e.persons.filter((function(n){return n.name!==e.newName}));h.update(a[0].id,s).then((function(n){e.setPersons(c.concat(n)),e.setNewName(""),e.setNewNumber(""),e.setToShow(c.concat(n)),e.setGUIMessage("Success: ".concat(s.name,"'s phone has been updated")),setTimeout((function(){e.setGUIMessage(null)}),5e3)})).catch((function(){e.setGUIMessage("Fail: ".concat(s.name,"'s info has already been removed from Phonebook")),setTimeout((function(){e.setGUIMessage(null)}),5e3)}))}else h.create(s).then((function(n){e.setPersons(e.persons.concat(n)),e.setNewName(""),e.setNewNumber(""),e.setToShow(e.toShow.concat(n)),e.setGUIMessage("Success: ".concat(s.name," has been added to the Phonebook")),setTimeout((function(){e.setGUIMessage(null)}),5e3)}))},children:[Object(b.jsxs)("div",{children:["Name: ",Object(b.jsx)("input",{value:e.newName,onChange:e.handleNewName})]}),Object(b.jsxs)("div",{children:["Number: ",Object(b.jsx)("input",{value:e.newNumber,onChange:e.handleNewNumber})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",children:"add"})})]})})},l=function(e){return Object(b.jsxs)("div",{children:["Filter contacts by name: ",Object(b.jsx)("input",{value:e.search,onChange:e.handleSearch})]})},j=function(e){return Object(b.jsx)("div",{children:Object(b.jsx)("ul",{children:e.toShow.map((function(n){return Object(b.jsxs)("li",{children:[n.name,"  ",n.number," \xa0",Object(b.jsx)("button",{onClick:function(){return function(n){window.confirm("U sure u never gonna call them?")&&h.erase(n.id).then((function(){e.setPersons(e.persons.filter((function(e){return e.id!==n.id}))),e.setToShow(e.toShow.filter((function(e){return e.id!==n.id})))}))}(n)},children:"erase"})]},n.name)}))})})},m=function(e){var n=e.message;return null===n?null:"S"===n.charAt(0)?Object(b.jsx)("div",{className:"success",children:n}):"F"===n.charAt(0)?Object(b.jsx)("div",{className:"error",children:n}):void 0},f=function(){var e=Object(s.useState)([]),n=Object(r.a)(e,2),t=n[0],a=n[1],c=Object(s.useState)(""),o=Object(r.a)(c,2),u=o[0],i=o[1],f=Object(s.useState)(""),w=Object(r.a)(f,2),O=w[0],p=w[1],N=Object(s.useState)(""),v=Object(r.a)(N,2),g=v[0],x=v[1],S=Object(s.useState)(t),k=Object(r.a)(S,2),I=k[0],P=k[1],T=Object(s.useState)(null),U=Object(r.a)(T,2),G=U[0],M=U[1];Object(s.useEffect)((function(){h.getAll().then((function(e){a(e),P(e)}))}),[]);var y=function(e,n){var t=[];n.forEach((function(n){n.name.substring(0,e.length).toLowerCase()===e.toLowerCase()&&t.push({name:n.name,number:n.number,id:n.id})})),P(t)};return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsx)(m,{message:G}),Object(b.jsx)(l,{search:g,handleSearch:function(e){x(e.target.value),y(e.target.value,t)}}),Object(b.jsx)("h3",{children:"Add new"}),Object(b.jsx)(d,{persons:t,setPersons:a,newName:u,setNewName:i,newNumber:O,setNewNumber:p,toShow:I,setToShow:P,handleNewName:function(e){i(e.target.value)},handleNewNumber:function(e){p(e.target.value)},setGUIMessage:M}),Object(b.jsx)("h3",{children:"Numbers"}),Object(b.jsx)(j,{toShow:I,setToShow:P,persons:t,setPersons:a,setGUIMessage:M})]})};t(38);c.a.render(Object(b.jsx)(f,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.db3cea8e.chunk.js.map