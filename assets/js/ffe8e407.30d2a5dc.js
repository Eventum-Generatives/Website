"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9140],{2459:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=i(4848),t=i(8453);const r={},d="Linspace",c={id:"plugins/input_plugins/linspace/index",title:"Linspace",description:"Description",source:"@site/versioned_docs/version-1.1/plugins/input_plugins/linspace/index.md",sourceDirName:"plugins/input_plugins/linspace",slug:"/plugins/input_plugins/linspace/",permalink:"/Website/docs/plugins/input_plugins/linspace/",draft:!1,unlisted:!1,tags:[],version:"1.1",frontMatter:{},sidebar:"pluginsSidebar",previous:{title:"Cron",permalink:"/Website/docs/plugins/input_plugins/cron/"},next:{title:"Sample",permalink:"/Website/docs/plugins/input_plugins/sample/"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"linspace",children:"Linspace"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Input plugin for generating specified count of events linearly spaced in time interval."}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["Usage name: ",(0,s.jsx)(n.code,{children:"linspace"})]}),"\n",(0,s.jsxs)(n.p,{children:["Supported modes: ",(0,s.jsx)(n.code,{children:"sample"})]}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("th",{children:"Parameter"}),(0,s.jsx)("th",{children:"Expected value"}),(0,s.jsx)("th",{children:"Required"}),(0,s.jsx)("th",{children:"Description"}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"start"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.code,{children:"<datetime>"})," (see format ",(0,s.jsx)(n.a,{href:"https://docs.pydantic.dev/2.0/usage/types/datetime/#validation-of-datetime-types",children:"here"}),")"]}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"Start time of interval"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"end"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"<datetime>"})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"End time of interval"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"count"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"<int>"})}),(0,s.jsx)("td",{children:"Yes"}),(0,s.jsx)("td",{children:"Number of events within interval"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"endpoint"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"<bool>"})}),(0,s.jsxs)("td",{children:["No, default is ",(0,s.jsx)(n.code,{children:"True"})]}),(0,s.jsx)("td",{children:"Whether to include end point of interval"})]})]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'linspace:\n  start: "2024-01-01T00:00:00.000Z"\n  end: "2024-01-31T00:00:00.000Z"\n  count: 31\n  endpoint: true\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>c});var s=i(6540);const t={},r=s.createContext(t);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);