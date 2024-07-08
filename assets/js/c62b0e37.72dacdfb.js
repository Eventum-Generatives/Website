"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9347],{3208:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var i=s(4848),r=s(8453);const t={},c="Cron",d={id:"plugins/input_plugins/cron/index",title:"Cron",description:"Description",source:"@site/versioned_docs/version-1.1/plugins/input_plugins/cron/index.md",sourceDirName:"plugins/input_plugins/cron",slug:"/plugins/input_plugins/cron/",permalink:"/Website/docs/plugins/input_plugins/cron/",draft:!1,unlisted:!1,tags:[],version:"1.1",frontMatter:{},sidebar:"pluginsSidebar",previous:{title:"Plugins",permalink:"/Website/docs/plugins/"},next:{title:"Linspace",permalink:"/Website/docs/plugins/input_plugins/linspace/"}},o={},l=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"cron",children:"Cron"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Input plugin for generating events at moments defined by cron expression."}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:["Usage name: ",(0,i.jsx)(n.code,{children:"cron"})]}),"\n",(0,i.jsxs)(n.p,{children:["Supported modes: ",(0,i.jsx)(n.code,{children:"live"})]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("th",{children:"Parameter"}),(0,i.jsx)("th",{children:"Expected value"}),(0,i.jsx)("th",{children:"Required"}),(0,i.jsx)("th",{children:"Description"}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.code,{children:"expression"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.code,{children:"<str>"})," (e.g. ",(0,i.jsx)(n.code,{children:"*/5 12-23 * * *"}),")"]}),(0,i.jsx)("td",{children:"Yes"}),(0,i.jsx)("td",{children:"Valid cron expression"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.code,{children:"count"})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.code,{children:"<int>"})}),(0,i.jsx)("td",{children:"Yes"}),(0,i.jsx)("td",{children:"Number of events to generate each interval"})]})]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'cron:\n  expression: "*/5 * * * *"\n  count: 1\n'})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var i=s(6540);const r={},t=i.createContext(r);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);