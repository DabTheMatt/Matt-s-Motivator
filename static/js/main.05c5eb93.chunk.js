(this.webpackJsonpactivator=this.webpackJsonpactivator||[]).push([[0],{26:function(e,t,a){},28:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var s=a(2),i=a.n(s),o=a(20),r=a.n(o),n=(a(26),a(8)),c=a(3),l=a(4),d=a(6),h=a(5),u=a(0),j=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={tabName:"",goal:"",serious:"true"},e.handleChange=function(t){e.setState({tabName:t.target.value})},e.handleSeriusChange=function(t){"true"===e.state.serious?e.setState({serious:"false"}):e.setState({serious:"true"}),console.log("serious",e.state.serious)},e.handleGoalChange=function(t){e.setState({goal:t.target.value})},e}return Object(l.a)(a,[{key:"handleSubmit",value:function(e,t,a,s){e.preventDefault(),console.log("sss"),this.props.addTask(t,a,s),this.setState({tabName:"",goal:""})}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"topWrapper",children:[Object(u.jsx)("h1",{children:"Matt's Motivator"}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{className:"about",children:"Probably each of us suffers (to a greater or lesser extent) from a condition called laziness. Laziness is not a bad thing if we are not preparing for a test or we have not promised ourselves that we will exercise every day. Matt's Motivator is designed to help you overcome laziness and get you to work. You can do it in a more or less serious way, accompanied by jokes about Chuck Norris, or serious quotes from other smart (but not so smart, of course) people."}),Object(u.jsxs)("form",{className:"topForm",onSubmit:function(t){return e.handleSubmit(t,t.target.nameInput.value,t.target.goalInput.value,e.state.serious)},children:[Object(u.jsx)("label",{children:"Activity name:"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"text",value:this.state.tabName,id:"nameInput",onChange:this.handleChange}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{children:"Weekly hourly goal:"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"number",value:this.state.goal,id:"goalInput",onChange:this.handleGoalChange}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"checkbox",value:"true",id:"seriusInput",onChange:this.handleSeriusChange}),Object(u.jsx)("div",{className:"serious",children:"Make it serious"}),Object(u.jsxs)("div",{className:"errorMsg",children:[this.props.errorMsgName,this.props.errorMsgGoal]}),Object(u.jsx)("button",{className:"mainBtn",children:"Add"})]})]})}}]),a}(i.a.Component);a(11);var b=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={time:""},e.handleChange=function(t){e.setState({time:t.target.value})},e.calcGoalL=function(){var t=e.props.totalTime/(e.props.goal/100);"conic-gradient(#6d4722 ".concat(t,"%, #ba7a3b ").concat(t,"% 100%)")},e}return Object(l.a)(a,[{key:"handleSubmit",value:function(e,t,a,s){e.preventDefault(),this.props.addTime(t,a,s),console.log("timeeee"),this.setState({time:""})}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"tabWrapper animate__animated animate__fadeIn",children:[Object(u.jsxs)("div",{className:" topTab",style:{background:"#".concat(this.props.bcgColor)},children:[Object(u.jsxs)("h2",{className:"tabTitle",children:[this.props.name,Object(u.jsx)("button",{onClick:function(){return e.props.toggleHide(e.props.id)},className:"hideBtn",children:"show"===this.props.visibility?Object(u.jsx)("div",{children:"hide"}):Object(u.jsx)("div",{children:"show"})})]}),Object(u.jsx)("div",{className:"topCircleWrapper",children:Object(u.jsx)("div",{id:"outerCircleS",style:{background:"conic-gradient(#f865b0 ".concat(this.props.totalTime/(this.props.goal/100),"%, #2d3740 ").concat(this.props.totalTime/(this.props.goal/100),"% 100%)")},children:Object(u.jsx)("div",{id:"innerCircleS"})})})]}),"show"===this.props.visibility?Object(u.jsxs)("div",{className:"tab tabBody ",style:{background:"#".concat(this.props.bcgColor)},children:[Object(u.jsx)("div",{className:"quote",children:"false"===this.props.seriuos?Object(u.jsxs)("div",{children:[Object(u.jsx)("i",{className:"quoteText",children:'"'.concat(this.props.quote,'"')}),Object(u.jsx)("p",{className:"sign",children:this.props.author})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)("i",{className:"quoteText",children:this.props.joke}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]})}),Object(u.jsxs)("div",{className:"info",children:[Object(u.jsxs)("div",{className:"full",children:[Object(u.jsxs)("form",{className:"topForm",onSubmit:function(t){return e.handleSubmit(t,t.target.timeInput.value,e.props.id)},children:[Object(u.jsxs)("label",{id:"todayLabel",children:["Today I was ",this.props.name," for:"]}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"number",value:this.state.time,id:"timeInput",onChange:this.handleChange}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{children:"Add"})]}),Object(u.jsxs)("div",{className:"ulWrapper",children:[Object(u.jsx)("p",{className:"lastWeek",children:"Last week:"}),Object(u.jsx)("ul",{className:"weekTimes",children:this.props.times.map((function(e){return Object(u.jsx)("li",{className:"timeLi",children:e},Math.random())}))})]}),Object(u.jsxs)("div",{className:"infoLine",children:[Object(u.jsx)("p",{children:"Week total: "}),Object(u.jsx)("span",{children:this.props.totalTime})]}),Object(u.jsxs)("div",{className:"infoLine",children:[Object(u.jsx)("p",{children:"Week average: "}),Object(u.jsx)("span",{children:this.props.avarageTime})]}),Object(u.jsxs)("div",{className:"infoLine",children:[Object(u.jsx)("p",{children:"Week high: "}),Object(u.jsx)("span",{children:this.props.max})]})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"rightWrapper",children:[Object(u.jsxs)("p",{className:"weekGoal",children:["Your weekly goal:"," ",Object(u.jsx)("br",{}),this.props.totalTime>=this.props.goal?"(".concat(this.props.totalTime," hours) is complete!"):"".concat(this.props.totalTime," / ").concat(this.props.goal),Object(u.jsx)("br",{})]}),Object(u.jsx)("div",{className:"progressCircleWrapper",children:Object(u.jsx)("div",{id:"outerCircle",style:{background:"conic-gradient(#f865b0 ".concat(this.props.totalTime/(this.props.goal/100),"%, #2d3740 ").concat(this.props.totalTime/(this.props.goal/100),"% 100%)")},children:Object(u.jsx)("div",{id:"innerCircle"})})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"delTab",onClick:function(){return e.props.delTab(e.props.id)},children:"delete activity"})})]})]})]}):Object(u.jsx)("div",{})]})}}]),a}(i.a.Component),p=(a(28),a(21)),m=a.n(p),g=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={startId:0,tasks:[],bcgColors:["b7e4c7","95d5b2","74c69d","52b788","40916c"],quote:"",author:"",dataF:[],errorMsgName:"",errorMsgGoal:"",wheater:{},joke:""},e.takeJoke=function(){m.a.get("https://api.chucknorris.io/jokes/random").then((function(t){var a=t.data;console.log("joke",a.value),e.setState({joke:a.value})}))},e.randomQuote=function(){var t=parseInt(Math.random()*e.state.dataF.length);console.log("random",t),e.setState({quote:e.state.dataF[t].text,author:e.state.dataF[t].author}),console.log(e.state.quote)},e.addTask=function(t,a,s){if(e.randomQuote(),e.takeJoke(),e.setState({errorMsgGoal:"",errorMsgName:""}),t)if(a){var i={id:e.state.startId,name:t,times:[],totalTime:0,avarageTime:0,goal:a,weekMax:0,bcgColor:e.state.bcgColors[parseInt(Math.random()*e.state.bcgColors.length)],quote:e.state.quote,author:e.state.author,visibility:"show",joke:e.state.joke,seriuos:s};console.log("ser",i.seriuos);var o=[].concat(Object(n.a)(e.state.tasks),[i]);o.reverse(),e.setState({tasks:o,startId:e.state.startId+1})}else e.setState({errorMsgGoal:"Set a goal"});else e.setState({errorMsgName:"Give activity a name"})},e.delTask=function(t){console.log("ddd");var a=e.state.tasks.filter((function(e){return t!==e.id}));e.setState({tasks:Object(n.a)(a)})},e.addTime=function(t,a){var s=Object(n.a)(e.state.tasks);s.map((function(e){a!==e.id||t||(t="",console.log("mniej niz 0"),e.totalTime=0,e.avarageTime=0,e.weekMax=0),e.times.length>6&&e.times.shift(),a===e.id&&(e.times.push(Number(t)),e.totalTime=e.times.reduce((function(e,t){return e+t})),e.avarageTime=(e.totalTime/e.times.length).toFixed(1),e.weekMax=Math.max.apply(Math,Object(n.a)(e.times)),console.log("total",e.totalTime),console.log("average",e.avarageTime),console.log("max",e.weekMax))})),e.setState({tasks:s}),console.log("time from tab",t),console.log("tasks after time",s)},e.toggleHide=function(t){var a=e.state.tasks;a.map((function(e){e.id===t&&("show"===e.visibility?e.visibility="hidden":e.visibility="show"),console.log(e.visibility)})),e.setState({tasks:a})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://type.fit/api/quotes").then((function(e){return e.json()})).then((function(e){return e})).then((function(t){e.setState({dataF:t});var a=parseInt(Math.random()*e.state.dataF.length);e.setState({quote:e.state.dataF[a].text,author:e.state.dataF[a].author})})),this.takeJoke()}},{key:"render",value:function(){var e=this,t=this.state.tasks.map((function(t){return Object(u.jsx)(b,{id:t.id,name:t.name,addTime:e.addTime,delTab:e.delTask,toggleHide:e.toggleHide,totalTime:t.totalTime,avarageTime:t.avarageTime,times:t.times,goal:t.goal,max:t.weekMax,bcgColor:t.bcgColor,quote:t.quote,author:t.author,visibility:t.visibility,seriuos:t.seriuos,joke:t.joke},t.id)}));return Object(u.jsxs)("div",{className:"animate__animated animate__fadeIn",children:[Object(u.jsx)(j,{addTask:this.addTask,errorMsgName:this.state.errorMsgName,errorMsgGoal:this.state.errorMsgGoal}),Object(u.jsx)("div",{className:"tabsWrapper",children:t}),Object(u.jsx)("div",{})]})}}]),a}(i.a.Component),v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),s(e),i(e),o(e),r(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),v()}},[[47,1,2]]]);
//# sourceMappingURL=main.05c5eb93.chunk.js.map