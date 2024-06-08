"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2333],{9609:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=i(4848),o=i(8453);const s={},r="Eventum Compose",c={id:"configuring/compose/index",title:"Eventum Compose",description:"Eventum CLI has a powerful feature with its compose files, enabling you to start multiple event generators at once, each with its own template, parameters and settings.",source:"@site/docs/configuring/compose/index.md",sourceDirName:"configuring/compose",slug:"/configuring/compose/",permalink:"/Website/docs/configuring/compose/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"configuringSidebar",previous:{title:"Keyring",permalink:"/Website/docs/configuring/keyring/"}},a={},l=[{value:"Usage",id:"usage",level:2},{value:"Configuration structure",id:"configuration-structure",level:2},{value:"Example",id:"example",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"eventum-compose",children:"Eventum Compose"}),"\n",(0,t.jsx)(n.p,{children:"Eventum CLI has a powerful feature with its compose files, enabling you to start multiple event generators at once, each with its own template, parameters and settings."}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:"In command line you can run multiple generators like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"eventum-compose -c winlog-generators.yml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Where ",(0,t.jsx)(n.code,{children:"winlog-generators.yml"})," is an example compose file."]}),"\n",(0,t.jsx)(n.h2,{id:"configuration-structure",children:"Configuration structure"}),"\n",(0,t.jsxs)(n.p,{children:["A compose configuration is structured as individual generator definitions in ",(0,t.jsx)(n.code,{children:"generators"})," top-level section."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"generators:\n  <generator alias>:\n    config: <configuration path>\n    time_mode: <time mode>\n    params: <configuration params>\n    settings: <core settings>\n  ...\n"})}),"\n",(0,t.jsx)(n.p,{children:"Each generator configuration includes next parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["config - specifies the path to the generator's ",(0,t.jsx)(n.a,{href:"../config_file/",children:"configuration file"})]}),"\n",(0,t.jsxs)(n.li,{children:["time_mode - defines the time mode for the generator (",(0,t.jsx)(n.code,{children:"sample"})," or ",(0,t.jsx)(n.code,{children:"live"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["params - dictionary of ",(0,t.jsx)(n.a,{href:"../config_file/#tokens",children:"configuration parameters"})," specific to the generator"]}),"\n",(0,t.jsxs)(n.li,{children:["settings: - dictionary of ",(0,t.jsx)(n.a,{href:"../arguments_and_settings/#core-settings",children:"core settings"})," specific to the generator"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Example compose configuration file look like the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'generators:\n  winlog_auth:\n    config: winlog_auth.yml\n    time_mode: live\n    params: { "success_ratio": 0.92 }\n    settings: { "timezone": "Europe/Moscow" }\n\n  winlog_iam:\n    config: winlog_auth.yml\n    time_mode: live\n    params: { "new_accounts_count": 7 }\n    settings: { }\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This compose configuration defines two independent generators ",(0,t.jsx)(n.code,{children:"winlog_auth"})," and ",(0,t.jsx)(n.code,{children:"winlog_iam"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var t=i(6540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);