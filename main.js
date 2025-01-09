(()=>{"use strict";var t={365:(t,e,n)=>{n.d(e,{A:()=>i});var o=n(354),a=n.n(o),r=n(314),d=n.n(r)()(a());d.push([t.id,'* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --std-gap: 10px;\n  --std-padding: 10px;\n  --std-margin: 10px;\n  --std-border-radius: 10px;\n\n  /* colors */\n  --bg-color: hsl(194, 49%, 14%);\n  --primary: hsl(178, 17%, 58%);\n  --secondary: #224870;\n  --accent: hsl(349, 64%, 39%);\n  --text: #ffffff;\n\n  /* derived colors */\n  --bg-todo: hsl(194, 49%, 21%);\n  --bg-delete: hsl(349, 64%, 49%);\n  --bg-edit: hsl(178, 17%, 48%);\n  --bg-add: hsl(120, 20%, 48%);\n  --bg-dialog: hsl(194, 100%, 18%);\n}\n\nbody {\n  display: grid;\n  grid-auto-flow: row;\n  gap: 30px;\n  background: var(--bg-color);\n  color: var(--text);\n}\n\n.header {\n  display: grid;\n  place-items: center;\n}\n\n.header-text {\n  font-size: 3rem;\n}\n\n/* buttons */\nbutton {\n  border: 0;\n  border-radius: var(--std-border-radius);\n  padding: 2px 10px;\n}\n\nbutton.delete-button,\nbutton.delete-project-button,\nbutton#cancel {\n  background: var(--bg-delete);\n  color: var(--text);\n  font-weight: bold;\n}\n\nbutton.delete-button:active,\nbutton.delete-project-button:active,\nbutton#cancel:active {\n  background: hsl(349, 64%, 20%);\n}\n\nbutton.edit-button {\n  background: var(--bg-edit);\n  color: var(--text);\n  font-weight: bold;\n}\n\nbutton.edit-button:active {\n  background: hsl(178, 17%, 28%);\n}\n\n.add-task-btn > *,\nbutton.add-task-button,\nbutton#add {\n  background: var(--bg-add);\n  color: var(--text);\n  font-weight: bold;\n}\n\n.add-task-btn > *:focus,\nbutton.add-task-button:focus,\nbutton#add:focus {\n  background: hsl(120, 20%, 28%);\n}\n\n.add-project-btn > * {\n  background: var(--bg-add);\n  color: var(--text);\n  font-weight: bold;\n}\n\n.see-all-projects-btn > * {\n  background: var(--primary);\n  font-weight: bold;\n}\n\n.see-all-projects-btn > *:focus {\n  background: hsl(178, 17%, 48%);\n}\n\n.see-all-projects-btn > *:hover {\n  background: hsl(178, 17%, 68%);\n}\n\nbutton:hover {\n  color: #222;\n}\n\n/* inputs */\ninput[type="text"],\ninput[type="date"],\ninput[type="text-field"],\ntextarea {\n  outline: none;\n  border-radius: 5px;\n  padding: 1px 5px;\n  font-size: 0.9rem;\n}\n\n/* li */\nli {\n  list-style-type: none;\n}\n\n/* todos */\n.todo {\n  display: grid;\n  grid-auto-flow: column;\n  place-content: center;\n  gap: 20px;\n  background: var(--bg-todo);\n  padding: 8px 20px;\n  border-radius: var(--std-border-radius);\n}\n\n.todo > .buttons {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 8px;\n}\n\n.todo-completion-status > #complete {\n  width: 18px;\n}\n\n/* main page gets these stylings */\n.main {\n  display: grid;\n  place-content: center;\n  gap: 20px;\n  * {\n    display: grid;\n    place-content: center;\n  }\n\n  .today-tasks-container {\n    display: grid;\n    gap: var(--std-gap);\n  }\n\n  .today-tasks-header {\n    display: grid;\n    text-align: center;\n    font-size: 1.5rem;\n  }\n\n  ul.today-tasks {\n    display: grid;\n    gap: var(--std-gap);\n  }\n\n  .add-task-btn {\n    display: grid;\n    place-content: center;\n  }\n\n  .highest-priority-projects-container {\n    display: grid;\n    justify-content: stretch;\n    gap: var(--std-gap);\n    padding: 2px 0;\n  }\n\n  .highest-priority-projects-container-header {\n    text-align: center;\n    font-size: 1.5rem;\n  }\n\n  .high-priority-project-container {\n    display: grid;\n    grid-template-columns: 2fr 1fr 30px;\n    grid-auto-flow: column;\n  }\n\n  .project-dropdown-btn {\n    display: grid;\n    align-items: start;\n    justify-content: center;\n  }\n\n  .project-dropdown-btn > * {\n    position: relative;\n    bottom: 5px;\n  }\n\n  .highest-priority-projects {\n    display: grid;\n    gap: var(--std-gap);\n  }\n\n  ul {\n    list-style-type: none;\n  }\n\n  .see-all-projects-btn button {\n    display: grid;\n    height: 50px;\n    justify-items: center;\n  }\n}\n\n.projects {\n  display: grid;\n  gap: 10px;\n  grid-template-areas:\n    "return-button project-header seperator tasks-header"\n    "project-list project-list . project-tasks";\n  grid-template-columns: 40px 1fr 2px 8fr;\n  padding: var(--std-padding);\n\n  .return-button-container {\n    display: grid;\n    grid-area: return-button;\n    width: 20px;\n  }\n\n  .projects-header {\n    font-size: 1.5rem;\n    grid-area: project-header;\n    display: flex;\n    place-content: start;\n  }\n\n  .seperator {\n    background: var(--accent);\n  }\n\n  .tasks-header {\n    font-size: 1.5rem;\n    grid-area: tasks-header;\n  }\n\n  .projects-list {\n    grid-area: project-list;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .projects-list .project {\n    display: grid;\n    padding: var(--std-padding);\n    border-radius: var(--std-border-radius);\n    grid-template-areas:\n      "project-name"\n      "project-buttons";\n    gap: 4px;\n    grid-auto-columns: min(50px, 1fr) min(50px, 1fr);\n  }\n\n  .projects-list .project:hover {\n    background: var(--secondary);\n  }\n\n  .projects-list .project-name {\n    grid-area: project-name;\n    font-weight: bold;\n  }\n\n  .projects-list .project-buttons {\n    grid-area: project-buttons;\n    width: 70%;\n    display: grid;\n    grid-template-areas: "delete-project-bc add-task-bc";\n    gap: 2px;\n  }\n\n  .projects-list .delete-project-button-container {\n    grid-area: delete-project-bc;\n    display: grid;\n  }\n\n  .project-list .add-task-button-container {\n    grid-area: add-task-bc;\n    display: grid;\n  }\n\n  .project-tasks {\n    grid-area: project-tasks;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    gap: 4px;\n  }\n}\n\ndialog {\n  margin: auto;\n  border: 3px solid black;\n  border-radius: 10px;\n  padding: 10px;\n  border: 3px solid var(--accent);\n  background: var(--bg-dialog);\n  color: var(--text);\n}\n\n.add-task-dialog form {\n  display: grid;\n  gap: 5px;\n}\n\ndialog form > * {\n  display: grid;\n  gap: 2px;\n  padding: 2px;\n}\n\ndialog .to-bold {\n  font-weight: bold;\n}\n\n.add-task-dialog textarea {\n  height: 20vh;\n  width: 30vh;\n  padding: var(--std-padding);\n  resize: none;\n}\n\ndialog .dialog-buttons,\n.add-task-dialog .priority {\n  grid-auto-flow: column;\n}\n\ndialog .dialog-buttons {\n  grid-template-columns: repeat(2, 1fr);\n}\n\n::backdrop {\n  backdrop-filter: blur(2px);\n}\n',"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"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",sourcesContent:['* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --std-gap: 10px;\n  --std-padding: 10px;\n  --std-margin: 10px;\n  --std-border-radius: 10px;\n\n  /* colors */\n  --bg-color: hsl(194, 49%, 14%);\n  --primary: hsl(178, 17%, 58%);\n  --secondary: #224870;\n  --accent: hsl(349, 64%, 39%);\n  --text: #ffffff;\n\n  /* derived colors */\n  --bg-todo: hsl(194, 49%, 21%);\n  --bg-delete: hsl(349, 64%, 49%);\n  --bg-edit: hsl(178, 17%, 48%);\n  --bg-add: hsl(120, 20%, 48%);\n  --bg-dialog: hsl(194, 100%, 18%);\n}\n\nbody {\n  display: grid;\n  grid-auto-flow: row;\n  gap: 30px;\n  background: var(--bg-color);\n  color: var(--text);\n}\n\n.header {\n  display: grid;\n  place-items: center;\n}\n\n.header-text {\n  font-size: 3rem;\n}\n\n/* buttons */\nbutton {\n  border: 0;\n  border-radius: var(--std-border-radius);\n  padding: 2px 10px;\n}\n\nbutton.delete-button,\nbutton.delete-project-button,\nbutton#cancel {\n  background: var(--bg-delete);\n  color: var(--text);\n  font-weight: bold;\n}\n\nbutton.delete-button:active,\nbutton.delete-project-button:active,\nbutton#cancel:active {\n  background: hsl(349, 64%, 20%);\n}\n\nbutton.edit-button {\n  background: var(--bg-edit);\n  color: var(--text);\n  font-weight: bold;\n}\n\nbutton.edit-button:active {\n  background: hsl(178, 17%, 28%);\n}\n\n.add-task-btn > *,\nbutton.add-task-button,\nbutton#add {\n  background: var(--bg-add);\n  color: var(--text);\n  font-weight: bold;\n}\n\n.add-task-btn > *:focus,\nbutton.add-task-button:focus,\nbutton#add:focus {\n  background: hsl(120, 20%, 28%);\n}\n\n.add-project-btn > * {\n  background: var(--bg-add);\n  color: var(--text);\n  font-weight: bold;\n}\n\n.see-all-projects-btn > * {\n  background: var(--primary);\n  font-weight: bold;\n}\n\n.see-all-projects-btn > *:focus {\n  background: hsl(178, 17%, 48%);\n}\n\n.see-all-projects-btn > *:hover {\n  background: hsl(178, 17%, 68%);\n}\n\nbutton:hover {\n  color: #222;\n}\n\n/* inputs */\ninput[type="text"],\ninput[type="date"],\ninput[type="text-field"],\ntextarea {\n  outline: none;\n  border-radius: 5px;\n  padding: 1px 5px;\n  font-size: 0.9rem;\n}\n\n/* li */\nli {\n  list-style-type: none;\n}\n\n/* todos */\n.todo {\n  display: grid;\n  grid-auto-flow: column;\n  place-content: center;\n  gap: 20px;\n  background: var(--bg-todo);\n  padding: 8px 20px;\n  border-radius: var(--std-border-radius);\n}\n\n.todo > .buttons {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 8px;\n}\n\n.todo-completion-status > #complete {\n  width: 18px;\n}\n\n/* main page gets these stylings */\n.main {\n  display: grid;\n  place-content: center;\n  gap: 20px;\n  * {\n    display: grid;\n    place-content: center;\n  }\n\n  .today-tasks-container {\n    display: grid;\n    gap: var(--std-gap);\n  }\n\n  .today-tasks-header {\n    display: grid;\n    text-align: center;\n    font-size: 1.5rem;\n  }\n\n  ul.today-tasks {\n    display: grid;\n    gap: var(--std-gap);\n  }\n\n  .add-task-btn {\n    display: grid;\n    place-content: center;\n  }\n\n  .highest-priority-projects-container {\n    display: grid;\n    justify-content: stretch;\n    gap: var(--std-gap);\n    padding: 2px 0;\n  }\n\n  .highest-priority-projects-container-header {\n    text-align: center;\n    font-size: 1.5rem;\n  }\n\n  .high-priority-project-container {\n    display: grid;\n    grid-template-columns: 2fr 1fr 30px;\n    grid-auto-flow: column;\n  }\n\n  .project-dropdown-btn {\n    display: grid;\n    align-items: start;\n    justify-content: center;\n  }\n\n  .project-dropdown-btn > * {\n    position: relative;\n    bottom: 5px;\n  }\n\n  .highest-priority-projects {\n    display: grid;\n    gap: var(--std-gap);\n  }\n\n  ul {\n    list-style-type: none;\n  }\n\n  .see-all-projects-btn button {\n    display: grid;\n    height: 50px;\n    justify-items: center;\n  }\n}\n\n.projects {\n  display: grid;\n  gap: 10px;\n  grid-template-areas:\n    "return-button project-header seperator tasks-header"\n    "project-list project-list . project-tasks";\n  grid-template-columns: 40px 1fr 2px 8fr;\n  padding: var(--std-padding);\n\n  .return-button-container {\n    display: grid;\n    grid-area: return-button;\n    width: 20px;\n  }\n\n  .projects-header {\n    font-size: 1.5rem;\n    grid-area: project-header;\n    display: flex;\n    place-content: start;\n  }\n\n  .seperator {\n    background: var(--accent);\n  }\n\n  .tasks-header {\n    font-size: 1.5rem;\n    grid-area: tasks-header;\n  }\n\n  .projects-list {\n    grid-area: project-list;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .projects-list .project {\n    display: grid;\n    padding: var(--std-padding);\n    border-radius: var(--std-border-radius);\n    grid-template-areas:\n      "project-name"\n      "project-buttons";\n    gap: 4px;\n    grid-auto-columns: min(50px, 1fr) min(50px, 1fr);\n  }\n\n  .projects-list .project:hover {\n    background: var(--secondary);\n  }\n\n  .projects-list .project-name {\n    grid-area: project-name;\n    font-weight: bold;\n  }\n\n  .projects-list .project-buttons {\n    grid-area: project-buttons;\n    width: 70%;\n    display: grid;\n    grid-template-areas: "delete-project-bc add-task-bc";\n    gap: 2px;\n  }\n\n  .projects-list .delete-project-button-container {\n    grid-area: delete-project-bc;\n    display: grid;\n  }\n\n  .project-list .add-task-button-container {\n    grid-area: add-task-bc;\n    display: grid;\n  }\n\n  .project-tasks {\n    grid-area: project-tasks;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    gap: 4px;\n  }\n}\n\ndialog {\n  margin: auto;\n  border: 3px solid black;\n  border-radius: 10px;\n  padding: 10px;\n  border: 3px solid var(--accent);\n  background: var(--bg-dialog);\n  color: var(--text);\n}\n\n.add-task-dialog form {\n  display: grid;\n  gap: 5px;\n}\n\ndialog form > * {\n  display: grid;\n  gap: 2px;\n  padding: 2px;\n}\n\ndialog .to-bold {\n  font-weight: bold;\n}\n\n.add-task-dialog textarea {\n  height: 20vh;\n  width: 30vh;\n  padding: var(--std-padding);\n  resize: none;\n}\n\ndialog .dialog-buttons,\n.add-task-dialog .priority {\n  grid-auto-flow: column;\n}\n\ndialog .dialog-buttons {\n  grid-template-columns: repeat(2, 1fr);\n}\n\n::backdrop {\n  backdrop-filter: blur(2px);\n}\n'],sourceRoot:""}]);const i=d},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,a,r){"string"==typeof t&&(t=[[null,t,void 0]]);var d={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(d[s]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);o&&d[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),e.push(c))}},e}},354:t=>{t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),r="/*# ".concat(a," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},72:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var r={},d=[],i=0;i<t.length;i++){var s=t[i],l=o.base?s[0]+o.base:s[0],c=r[l]||0,A="".concat(l," ").concat(c);r[l]=c+1;var p=n(A),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var g=a(u,o);o.byIndex=i,e.splice(i,0,{identifier:A,updater:g,references:1})}d.push(A)}return d}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var r=o(t=t||[],a=a||{});return function(t){t=t||[];for(var d=0;d<r.length;d++){var i=n(r[d]);e[i].references--}for(var s=o(t,a),l=0;l<r.length;l++){var c=n(r[l]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}r=s}}},659:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return t[o](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var o=n(72),a=n.n(o),r=n(825),d=n.n(r),i=n(659),s=n.n(i),l=n(56),c=n.n(l),A=n(540),p=n.n(A),u=n(113),g=n.n(u),b=n(365),E={};E.styleTagTransform=g(),E.setAttributes=c(),E.insert=s().bind(null,"head"),E.domAPI=d(),E.insertStyleElement=p(),a()(b.A,E),b.A&&b.A.locals&&b.A.locals;const h=class{constructor(t,e,n,o,a,r){this.id=t,this.title=e||`${t}`,this.description=n||"No description",this.duedate=o?new Date(o):new Date,this.priority=3|+a,this.notes=r||"No notes",this.status=!1}toggleStatus(){this.status=!this.status}edit(t,e,n,o,a){this.title=t||this.title,this.description=e||this.description,this.duedate=n?new Date(n):new Date,this.priority=o||this.priority,this.notes=a||this.notes}},C=class{constructor(t,e){this.id=t,this.name=e,this.todoList=[]}addTodo(t,e,n,o,a){let r=this.todoList.length;const d=new h(r,t,e,n,o,a);this.todoList.push(d)}editTodo(t,e,n,o,a,r){let d=t;this.todoList.at(d).edit(e,n,o,a,r)}getTodos(){return this.todoList}deleteTodo(t){let e=t;this.todoList.splice(e,1),this.todoList.forEach(((t,e)=>{t.id=e}))}getId(){return this.id}getName(){return this.name}},m=window.localStorage;function v(t){let e;try{e=window[t];const n="__storage_test__";return e.setItem(n,n),e.removeItem(n),!0}catch(t){return t instanceof DOMException&&"QuotaExceededError"===t.name&&e&&0!==e.length}}function B(){v("localStorage")?m.setItem("todayTodos",JSON.stringify(k.getTodayTodos().getTodos())):console.log("LocalStorage Not available!")}function f(){v("localStorage")?m.setItem("projects",JSON.stringify(k.getProjects())):console.log("LocalStorage Not available!")}const y={storeLocally:f,setProjects:function(){const t=JSON.parse(m.getItem("projects"));if(t){let e=[];t.forEach(((t,n)=>{const o=new C(n,t.name);t.todoList.forEach((t=>{o.addTodo(t.title,t.description,t.dueDate,t.priority,t.notes)})),e=e.concat(o)})),k.setProjects(e)}else f()},setTodayTodos:function(){const t=JSON.parse(m.getItem("todayTodos"));if(t){const e=new C("999","todayTodos");t.forEach((t=>{e.addTodo(t.title,t.description,t.dueDate,t.priority,t.notes)})),k.setTodayTodos(e)}else B()},storeTodayTodos:B},x=function(){let t=[],e=new C(999,"todayTodo");return{addProject:function(e){let n=t.length,o=new C(n,e);t.push(o)},getProjects:function(){return t},getProject:function(e){return t.at(e)},addTodayTodos:(t,n,o,a,r)=>e.addTodo(t,n,o,a,r),getTodayTodos:()=>e,deleteProject:function(e){let n=e;t.splice(n,1),t.forEach(((t,e)=>{t.id=e}))},setProjects:function(e){t=t.concat(e)},storeProjects:function(){y.storeLocally()},setTodayTodos:function(t){e=t},storeTodayTodos:function(){y.storeTodayTodos()}}}(),k=x;let j=document.createElement("div");j.classList.toggle("projects"),j.innerHTML='\n    <div class="return-button-container">\n        <button class="return-button"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg></button>\n    </div>\n    <div class="seperator"></div>\n    <div class="projects-header">\n        Projects\n    </div>\n    <div class="tasks-header">\n        Tasks\n    </div>\n',j.querySelector(".return-button").addEventListener("click",(()=>{ot.renderMain()}));let T=document.createElement("ul");function w(){Array.from(j.querySelectorAll("li.project")).forEach((t=>{T.removeChild(t)}));let t=k.getProjects(),e=T.querySelector(".no-projects");if(e&&T.removeChild(e),0===t.length){let t=j.querySelector(".project-tasks");Array.from(j.querySelectorAll(".project-tasks li.todo")).forEach((e=>{t.removeChild(e)}));let e=document.createElement("li");e.classList.toggle("no-projects"),e.textContent="No Projects Created",T.appendChild(e)}t.forEach((t=>{let e=document.createElement("li");e.classList.toggle("project"),e.id=`project-${t.id}`;let n=document.createElement("div");n.classList.toggle("project-name"),n.textContent=`${t.name}`,e.appendChild(n);let o=document.createElement("div");o.classList.toggle("delete-project-button-container"),o.hidden=!0;let a=document.createElement("button");a.classList.toggle("delete-project-button"),a.textContent="Delete project",o.appendChild(a);let r=document.createElement("div");r.classList.toggle("add-task-button-container");let d=document.createElement("button");d.classList.toggle("add-task-button"),d.textContent="Add Task",r.hidden=!0,r.appendChild(d);let i=document.createElement("div");var s;i.classList.toggle("project-buttons"),i.appendChild(r),i.appendChild(o),e.appendChild(i),a.addEventListener("click",(t=>{k.deleteProject(e.id.split("-").at(1)),w(),t.stopPropagation()})),d.addEventListener("click",(t=>{Y.changeTaskDialogFor(e.id.split("-").at(1)),Y.addTaskDialog.show(),t.stopPropagation()})),T.appendChild(e),(s=e).addEventListener("click",(()=>{!function(){let t=Array.from(T.querySelectorAll(".delete-project-button-container")),e=Array.from(T.querySelectorAll(".add-task-button-container"));t.forEach((t=>{t.hasAttribute("hidden")||(t.hidden=!0)})),e.forEach((t=>{t.hasAttribute("hidden")||(t.hidden=!0)}))}();let t=s.querySelector(".delete-project-button-container"),e=s.querySelector(".add-task-button-container");t.hasAttribute("hidden")&&(t.hidden=!1),e.hasAttribute("hidden")&&(e.hidden=!1)}))})),function(){let t=j.querySelector(".project-name"),e=j.querySelector(".project");if(t){let n=new Event("click",{bubbles:!0});t.dispatchEvent(n),I(e.id.split("-").at(1),j)}}(),j.addEventListener("click",(t=>{if(t.target.parentNode.classList.contains("buttons"))if(t.target.classList.contains("delete-button")){let e=t.target.closest(".todo"),n=e.id.split("-").at(1),o=e.id.split("-").at(0);k.getProject(o).deleteTodo(n),I(o,j)}else if(t.target.classList.contains("edit-button")){let e=t.target.closest(".todo").id.split("-").at(1);Y.changeTaskDialogFor(e),Y.editTaskDialog.showModal()}}))}function I(t,e){let n=k.getProject(t).getTodos(),o="";n.forEach((e=>{let n=`\n            <li class="todo" id="${t}-${e.id}">\n                <div class="todo-completion-status">\n                    <input type="checkbox" id="complete" name="completed"  ${e.status?"checked":"unchecked"}>\n                </div>\n                <div class="todo-title">${e.title}</div>\n                <div class="todo-desc">${e.description}</div>\n                <div class="todo-duedate">${e.duedate.toDateString()}</div>\n                <div class="buttons">\n                    <button class="delete-button">Delete</button>\n                    <button class="edit-button">Edit</button>\n                </div>\n            </li>\n            `;o+=n}));let a=document.createElement("ul");a.classList.toggle("project-tasks"),a.innerHTML=o;let r=e.querySelector(".project-tasks");r&&e.removeChild(r),e.appendChild(a)}T.classList.toggle("projects-list"),j.appendChild(T);const L={renderProjectPage:function(){let t,e=document.querySelector("body"),n=document.querySelector(".main");return n&&(t=e.removeChild(n)),w(),T.addEventListener("click",(t=>{let e=t.target.closest("li.project");if(e){let t=e.id.split("-").at(1);I(t,j),Y.changeTaskDialogFor(t)}})),j.addEventListener("click",(t=>{if((t.target.classList.contains("delete-button")||t.target.classList.contains("edit-button"))&&t.target.closest("todo")){let e=t.target.closest("todo").id.split("-"),n=e.at(0),o=e.at(1);Y.changeTaskDialogFor(n,o)}})),e.appendChild(j),t},renderProjectTasks:I};let S=document.createElement("form");S.setAttribute("action","/index.html"),S.setAttribute("method","get");let q=['\n    <div>\n    <label class="to-bold" for="title">Title</label>\n    <input type="text" id="title" placeholder="Title">\n    </div>\n    ',`\n    <div>\n    <label class="to-bold" for="duedate">Due-Date</label>\n    <input type="date" id="duedate" placeholder=${new Date}>\n    </div>\n    `,'\n    <div>\n    <label class="to-bold" for="notes">Notes</label>\n    <input type="text" id="notes" placeholder="notes">\n    </div>\n    ','\n    <div>\n    <label class="to-bold" for="description">Description</label>\n    <textarea id="description" placeholder="Todo description"></textarea>\n    </div>\n    ','\n    <fieldset class="priority">\n    <legend class="to-bold">Priority</legend>\n    <div>\n    <input type="radio" id="high" name="priority" value="1">\n    <label for="high">High</label>\n    </div>\n    <div>\n    <input type="radio" id="medium" name="priority" value="2">\n    <label for="medium">Medium</label>\n    </div>\n    <div>\n    <input type="radio" id="low" name="priority" value="3">\n    <label for="low">Low</label>\n    </div>\n    </fieldset>\n    ','\n    <div class="dialog-buttons">\n    <button type="submit" id="add">Add Todo</button>\n    <button type="button" id="cancel">Cancel</button>\n    </div>\n    '],D="";q.forEach((t=>{D+=t})),S.innerHTML=D;let P=document.createElement("dialog");function M(t){let e=Array.from(t.querySelectorAll("input")),n=Array.from(t.querySelectorAll("textarea"));e.concat(n).forEach((t=>{t.value=""}))}P.classList.toggle("add-task-dialog"),P.classList.toggle("dialog"),P.appendChild(S),P.querySelector(".dialog-buttons #cancel").addEventListener("click",(()=>{P.hasAttribute("open")&&P.close()})),P.querySelector(".dialog-buttons #add").addEventListener("click",(t=>{if(P.hasAttribute("open")){let e=P.querySelector("input#title").value,n=P.querySelector("textarea#description").value,o=P.querySelector("input#duedate").value,a=P.querySelector("[name='priority']"),r=P.querySelector("input#notes").value,d=P.id.split("-").at(0);if("999"===d)k.getTodayTodos().addTodo(e,n,o,a,r),et.renderTasks();else{k.getProject(d).addTodo(e,n,o,a,r);let t=document.querySelector(".projects");L.renderProjectTasks(d,t)}k.storeProjects(),k.storeTodayTodos(),t.preventDefault(),P.hasAttribute("open")&&(M(S),P.close())}}));let z=document.createElement("form");z.setAttribute("action","/index.html"),z.setAttribute("method","get");let N="";['\n    <div>\n    <label class="to-bold" for="name">Name</label>\n    <input type="text" id="name" placeholder="Project Name">\n    </div>\n    ','\n    <div class="dialog-buttons">\n    <button type="submit" id="add">Add Project</button>\n    <button type="button" id="cancel">Cancel</button>\n    </div>\n    '].forEach((t=>{N+=t})),z.innerHTML=N;let $=document.createElement("dialog");$.classList.toggle("add-project-dialog"),$.classList.toggle("dialog"),$.appendChild(z),$.querySelector(".dialog-buttons #cancel").addEventListener("click",(()=>{$.hasAttribute("open")&&(M(z),$.close())})),$.querySelector(".dialog-buttons #add").addEventListener("click",(t=>{if($.hasAttribute("open")){let e=$.querySelector("#name").value;k.addProject(e),k.storeProjects(),k.storeTodayTodos(),t.preventDefault(),$.hasAttribute("open")&&(M(z),$.close())}}));let H=document.createElement("form");H.setAttribute("action","/index.html"),H.setAttribute("method","get");let O=['\n    <div>\n    <label class="to-bold" for="title">Title</label>\n    <input type="text" id="title" placeholder="Title">\n    </div>\n    ',`\n    <div>\n    <label class="to-bold" for="duedate">Due-Date</label>\n    <input type="date" id="duedate" placeholder=${new Date}>\n    </div>\n    `,'\n    <div>\n    <label class="to-bold" for="notes">Notes</label>\n    <input type="text" id="notes" placeholder="notes">\n    </div>\n    ','\n    <div>\n    <label class="to-bold" for="description">Description</label>\n    <textarea id="description" placeholder="Todo description"></textarea>\n    </div>\n    ','\n    <fieldset class="priority">\n    <legend class="to-bold">Priority</legend>\n    <div>\n    <input type="radio" id="high" name="priority" value="1">\n    <label for="high">High</label>\n    </div>\n    <div>\n    <input type="radio" id="medium" name="priority" value="2">\n    <label for="medium">Medium</label>\n    </div>\n    <div>\n    <input type="radio" id="low" name="priority" value="3">\n    <label for="low">Low</label>\n    </div>\n    </fieldset>\n    ','\n    <div class="dialog-buttons">\n    <button type="submit" id="edit">Edit</button>\n    <button type="button" id="cancel">Cancel</button>\n    </div>\n    '],W="";O.forEach((t=>{W+=t})),H.innerHTML=W;let Q=document.createElement("dialog");Q.classList.toggle("edit-task-dialog"),Q.classList.toggle("dialog"),Q.appendChild(H),Q.querySelector(".dialog-buttons #cancel").addEventListener("click",(()=>{Q.hasAttribute("open")&&Q.close()})),Q.querySelector(".dialog-buttons #edit").addEventListener("click",(t=>{if(Q.hasAttribute("open")){let e=Q.querySelector("input#title").value,n=Q.querySelector("textarea#description").value,o=Q.querySelector("input#duedate").value,a=Q.querySelector("[name='priority']"),r=Q.querySelector("input#notes").value,d=Q.id.split("-").at(0),i=Q.id.split("-").at(1);if("999"===d)k.getTodayTodos().editTodo(i,e,n,o,a,r),et.renderTasks();else{k.getProject(d).editTodo(i,e,n,o,a,r);let t=document.querySelector(".projects");L.renderProjectTasks(d,t)}k.storeProjects(),k.storeTodayTodos(),t.preventDefault(),Q.hasAttribute("open")&&(M(H),Q.close())}}));const Y={addTaskDialog:P,changeTaskDialogFor:function(t,e){P.id=t,e&&(Q.id=`${t}-${e}`)},addProjectDialog:$,editTaskDialog:Q};let F=document.createElement("div");F.classList.toggle("main");let U=document.createElement("div");U.classList.toggle("today-tasks-container"),U.innerHTML='\n    <div class="today-tasks-header">\n        Today\'s Tasks\n    </div>\n    ';let R=document.createElement("ul");function V(){let t=k.getTodayTodos().getTodos();R.innerHTML="";let e="";t.forEach((t=>{let n=`\n            <li class="todo" id="${k.getTodayTodos().id}-${t.id}">\n                <div class="todo-completion-status">\n                    <input type="checkbox" id="complete" name="completed"  ${t.status?"checked":"unchecked"}>\n                </div>\n                <div class="todo-title">${t.title}</div>\n                <div class="todo-desc">${t.description}</div>\n                <div class="todo-duedate">${t.duedate.toDateString()}</div>\n                <div class="buttons">\n                    <button class="delete-button">Delete</button>\n                    <button class="edit-button">Edit</button>\n                </div>\n            </li>\n            `;e+=n})),R.innerHTML=e}R.classList.toggle("today-tasks"),U.appendChild(R);let _=document.createElement("div");_.classList.toggle("add-task-btn");let J=document.createElement("button");J.textContent="Add Task",_.appendChild(J),U.appendChild(_);let Z=document.createElement("div");Z.classList.toggle("highest-priority-projects-container");let G=document.createElement("button");G.textContent="Add New Project";let X=document.createElement("div");X.classList.toggle("add-project-btn"),X.appendChild(G);let K=document.createElement("div");K.classList.toggle("see-all-projects-btn");let tt=document.createElement("button");tt.innerHTML='\n    <div class="text">See All Projects</div>\n    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"></path></svg>\n',K.appendChild(tt),F.appendChild(U),F.appendChild(Z),F.appendChild(X),F.appendChild(K),J.addEventListener("click",(()=>{Y.changeTaskDialogFor("999"),Y.addTaskDialog.showModal()})),G.addEventListener("click",(()=>{Y.addProjectDialog.showModal()})),tt.addEventListener("click",(()=>{ot.renderProjects()})),R.addEventListener("click",(t=>{if("complete"===t.target.id){let e,n=t.target.closest(".todo").id.split("-")[1];e=k.getTodayTodos().getTodos().at(n),e.status=!e.status,V()}})),R.addEventListener("click",(t=>{if(t.target.parentNode.classList.contains("buttons")){if(t.target.classList.contains("delete-button")){let e=t.target.closest(".todo").id.split("-").at(1);k.getTodayTodos().deleteTodo(e),V()}else if(t.target.classList.contains("edit-button")){let e=t.target.closest(".todo").id.split("-").at(1);Y.changeTaskDialogFor("999",e),Y.editTaskDialog.showModal()}k.storeTodayTodos()}}));const et={renderMain:function(){let t,e=document.querySelector("body"),n=e.querySelector(".projects");return n&&(t=e.removeChild(n)),e.appendChild(F),e.appendChild(Y.addTaskDialog),e.appendChild(Y.editTaskDialog),e.appendChild(Y.addProjectDialog),V(),t},renderTasks:V},nt=function(t){let e=document.createElement("div");e.classList.toggle("header"),e.innerHTML='\n        <div class="header-text">\n            TODO\n        </div>\n    ',t.appendChild(e)},ot=function(){let t,e=document.querySelector("body");return y.setProjects(),y.setTodayTodos(),nt(e),{renderMain:function(){et.renderMain()},renderProjects:function(){t=L.renderProjectPage()}}}();ot.renderMain()})();
//# sourceMappingURL=main.js.map