"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9160],{2971:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var n=r(4848),s=r(8453);const t={},d="Time Patterns",c={id:"plugins/input_plugins/time_patterns/index",title:"Time Patterns",description:"Description",source:"@site/docs/plugins/input_plugins/time_patterns/index.md",sourceDirName:"plugins/input_plugins/time_patterns",slug:"/plugins/input_plugins/time_patterns/",permalink:"/Website/docs/next/plugins/input_plugins/time_patterns/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"pluginsSidebar",previous:{title:"Sample",permalink:"/Website/docs/next/plugins/input_plugins/sample/"},next:{title:"Timer",permalink:"/Website/docs/next/plugins/input_plugins/timer/"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Time pattern configuration",id:"time-pattern-configuration",level:3},{value:"Spreader parameters for <code>Uniform</code> distribution:",id:"spreader-parameters-for-uniform-distribution",level:4},{value:"Spreader parameters for <code>Triangular</code> distribution",id:"spreader-parameters-for-triangular-distribution",level:4},{value:"Spreader parameters for <code>Beta</code> distribution:",id:"spreader-parameters-for-beta-distribution",level:4},{value:"Example",id:"example",level:2}];function a(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"time-patterns",children:"Time Patterns"}),"\n",(0,n.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(i.p,{children:"Input plugin for generating events with specific patterns of distribution in time."}),"\n",(0,n.jsx)(i.p,{children:"Time pattern is determined by four components:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Oscillator"})," - defines the base frequency of event generation"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Multiplier"})," - multiplies the number of events by the specified value"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Randomizer"})," - increases or decreases the number of events"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Spreader"})," - distribute events within one time interval"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:r(861).A+"",width:"4131",height:"994"})}),"\n",(0,n.jsx)(i.p,{children:"Several time patterns can be merged to achieve complex distribution."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:r(9989).A+"",width:"3313",height:"2165"})}),"\n",(0,n.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(i.p,{children:["Usage name: ",(0,n.jsx)(i.code,{children:"time_patterns"})]}),"\n",(0,n.jsxs)(i.p,{children:["Supported modes: ",(0,n.jsx)(i.code,{children:"live"}),", ",(0,n.jsx)(i.code,{children:"sample"})]}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("th",{children:"Parameter"}),(0,n.jsx)("th",{children:"Expected value"}),(0,n.jsx)("th",{children:"Required"}),(0,n.jsx)("th",{children:"Description"}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.code,{children:"configs"})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.code,{children:"<list[str]>"})}),(0,n.jsx)("td",{children:"Yes"}),(0,n.jsx)("td",{children:"List of paths to time pattern configurations (several distributions are merged to resulting one)"})]})]}),"\n",(0,n.jsx)(i.h3,{id:"time-pattern-configuration",children:"Time pattern configuration"}),"\n",(0,n.jsx)(i.p,{children:"Time pattern configuration is a yaml file that has following format:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-yaml",children:"label: <str>\n\noscillator:\n  start: <str>\n  end: <str>\n  period: <int>\n  unit: { seconds | minutes | hours | days }\n\nmultiplier:\n  ratio: <int>\n\nrandomizer:\n  deviation: <float>\n  direction: { Decrease | Increase | Mixed }\n\nspreader:\n  distribution: { Uniform | Triangular | Beta }\n  parameters:\n    <parameter name>: <parameter value>\n    ...\n"})}),"\n",(0,n.jsx)(i.p,{children:"Time pattern parameters description:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("th",{children:"Parameter"}),(0,n.jsx)("th",{children:"Expected value"}),(0,n.jsx)("th",{children:"Description"}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.code,{children:"oscillator.start"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(i.code,{children:"<time>"})," | ",(0,n.jsx)(i.code,{children:"<datetime>"})," | ",(0,n.jsx)(i.code,{children:"<relative time>"})," | ",(0,n.jsx)(i.code,{children:"now"})]}),(0,n.jsx)("td",{children:"Start time of distribution; If relative time is provided current time used as base point"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.code,{children:"oscillator.end"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(i.code,{children:"<time>"})," | ",(0,n.jsx)(i.code,{children:"<datetime>"})," | ",(0,n.jsx)(i.code,{children:"<relative time>"})," | ",(0,n.jsx)(i.code,{children:"now"})," | ",(0,n.jsx)(i.code,{children:"never"})]}),(0,n.jsxs)("td",{children:["End time of distribution; If relative time is provided ",(0,n.jsx)(i.code,{children:"oscillator.start"})," used as base point"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.code,{children:"oscillator.period"})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.code,{children:"<int>"})}),(0,n.jsx)("td",{children:"Duration of one period"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.code,{children:"oscillator.unit"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(i.code,{children:"seconds"})," | ",(0,n.jsx)(i.code,{children:"minutes"})," | ",(0,n.jsx)(i.code,{children:"hours"})," | ",(0,n.jsx)(i.code,{children:"days"})]}),(0,n.jsx)("td",{children:"Time unit of the period"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.code,{children:"multiplier.ratio"})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.code,{children:"<int>"})}),(0,n.jsx)("td",{children:"Multiplication ratio for number of events"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.code,{children:"randomizer.deviation"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(i.code,{children:"<float>"})," (in range [0.0; 1.0])"]}),(0,n.jsx)("td",{children:"Deviation ratio for number of events"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.code,{children:"randomizer.direction"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(i.code,{children:"Decrease"})," | ",(0,n.jsx)(i.code,{children:"Increase"})," | ",(0,n.jsx)(i.code,{children:"Mixed"})," "]}),(0,n.jsx)("td",{children:"Direction of deviation for number of events"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.code,{children:"spreader.distribution"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(i.code,{children:"Uniform"})," | ",(0,n.jsx)(i.code,{children:"Triangular"})," | ",(0,n.jsx)(i.code,{children:"Beta"})," "]}),(0,n.jsx)("td",{children:"Probability function for distribution event within interval"})]})]}),"\n",(0,n.jsxs)(i.admonition,{type:"info",children:[(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"<relative time>"})," - is expression in following format:"]}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"<expression> ::= [<sign>]<term>{<term>}...\n<sign>  ::= '+' | '-'\n<term>  ::= <value><unit>\n<value> ::= <int>\n<unit>  ::= 'd' | 'h' | 'm' | 's'\n"})}),(0,n.jsxs)(i.p,{children:["Examples: ",(0,n.jsx)(i.code,{children:"1m30s"}),", ",(0,n.jsx)(i.code,{children:"+2h"}),", ",(0,n.jsx)(i.code,{children:"-15m"}),", ",(0,n.jsx)(i.code,{children:"+1d12h30m5s"})]})]}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsxs)(i.p,{children:["Value ",(0,n.jsx)(i.code,{children:"never"})," cannot be used for ",(0,n.jsx)(i.code,{children:"oscillator.end"})," in ",(0,n.jsx)(i.code,{children:"sample"})," mode."]})}),"\n",(0,n.jsxs)(i.h4,{id:"spreader-parameters-for-uniform-distribution",children:["Spreader parameters for ",(0,n.jsx)(i.code,{children:"Uniform"})," distribution:"]}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("th",{children:"Parameter"}),(0,n.jsx)("th",{children:"Expected value"}),(0,n.jsx)("th",{children:"Description"}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.code,{children:"spreader.parameters.low"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(i.code,{children:"<float>"})," (in range [0.0; 1.0])"]}),(0,n.jsxs)("td",{children:["Start point of distribution within interval where ",(0,n.jsx)(i.code,{children:"0.0"})," is start and ",(0,n.jsx)(i.code,{children:"1.0"})," is end of interval"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.code,{children:"spreader.parameters.high"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(i.code,{children:"<float>"})," (in range [0.0; 1.0])"]}),(0,n.jsxs)("td",{children:["End point of distribution within interval where ",(0,n.jsx)(i.code,{children:"0.0"})," is start and ",(0,n.jsx)(i.code,{children:"1.0"})," is end of interval"]})]})]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:r(6057).A+"",width:"1708",height:"802"})}),"\n",(0,n.jsxs)(i.h4,{id:"spreader-parameters-for-triangular-distribution",children:["Spreader parameters for ",(0,n.jsx)(i.code,{children:"Triangular"})," distribution"]}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("th",{children:"Parameter"}),(0,n.jsx)("th",{children:"Expected value"}),(0,n.jsx)("th",{children:"Description"}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.code,{children:"spreader.parameters.left"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(i.code,{children:"<float>"})," (in range [0.0; 1.0))"]}),(0,n.jsxs)("td",{children:["Left point of distribution within interval where ",(0,n.jsx)(i.code,{children:"0.0"})," is start and ",(0,n.jsx)(i.code,{children:"1.0"})," is end of interval"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.code,{children:"spreader.parameters.mode"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(i.code,{children:"<float>"})," (in range [0.0; 1.0])"]}),(0,n.jsxs)("td",{children:["Mode point of distribution within interval where ",(0,n.jsx)(i.code,{children:"0.0"})," is start and ",(0,n.jsx)(i.code,{children:"1.0"})," is end of interval"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.code,{children:"spreader.parameters.right"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(i.code,{children:"<float>"})," (in range (0.0; 1.0])"]}),(0,n.jsxs)("td",{children:["Right point of distribution within interval where ",(0,n.jsx)(i.code,{children:"0.0"})," is start and ",(0,n.jsx)(i.code,{children:"1.0"})," is end of interval"]})]})]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:r(8908).A+"",width:"1714",height:"797"})}),"\n",(0,n.jsxs)(i.h4,{id:"spreader-parameters-for-beta-distribution",children:["Spreader parameters for ",(0,n.jsx)(i.code,{children:"Beta"})," distribution:"]}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("th",{children:"Parameter"}),(0,n.jsx)("th",{children:"Expected value"}),(0,n.jsx)("th",{children:"Description"}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.code,{children:"spreader.parameters.a"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(i.code,{children:"<float>"})," (in range [0.0; \u221e))"]}),(0,n.jsxs)("td",{children:["Parameter ",(0,n.jsx)(i.strong,{children:"\u03b1"})," of beta distribution"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.code,{children:"spreader.parameters.b"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(i.code,{children:"<float>"})," (in range [0.0; \u221e))"]}),(0,n.jsxs)("td",{children:["Parameter ",(0,n.jsx)(i.strong,{children:"\u03b2"})," of beta distribution"]})]})]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:r(9347).A+"",width:"1702",height:"792"})}),"\n",(0,n.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-yaml",children:'time_patterns:\n  configs:\n    - "distribution1.yaml"\n    - "distribution2.yaml"\n    - "distribution3.yaml"\n'})})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},9347:(e,i,r)=>{r.d(i,{A:()=>n});const n=r.p+"assets/images/distr_beta-38e41cc5e8d2812e54a5eda70aca0407.png"},8908:(e,i,r)=>{r.d(i,{A:()=>n});const n=r.p+"assets/images/distr_triang-5d9806ad2cac59dac293a037ed1bcafc.png"},6057:(e,i,r)=>{r.d(i,{A:()=>n});const n=r.p+"assets/images/distr_uniform-dd917cc5381d781418816f1d05bbd34b.png"},9989:(e,i,r)=>{r.d(i,{A:()=>n});const n=r.p+"assets/images/merging_time_patterns-2eb1798f3bed42deb8b407d7d6b8c5cd.png"},861:(e,i,r)=>{r.d(i,{A:()=>n});const n=r.p+"assets/images/time_patterns-6a90ceec5b2e769c182e9dc1183e0d86.png"},8453:(e,i,r)=>{r.d(i,{R:()=>d,x:()=>c});var n=r(6540);const s={},t=n.createContext(s);function d(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);