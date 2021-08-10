(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{110:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var o=t(3),i=t(7),a=(t(0),t(116)),r={id:"installation",title:"Installation"},c={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"You can install cpbooster with a single comand, either using npm or yarn.",source:"@site/docs/installation.mdx",slug:"/installation",permalink:"/cpbooster/docs/installation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/installation.mdx",version:"current",sidebar:"docs",previous:{title:"Cheatsheet",permalink:"/cpbooster/docs/cheatsheet"},next:{title:"Configuration",permalink:"/cpbooster/docs/configuration"}},l=[{value:"Requirements",id:"requirements",children:[]},{value:"Install using <code>npm</code>",id:"install-using-npm",children:[]},{value:"Install using <code>yarn</code>",id:"install-using-yarn",children:[]},{value:"Verify Installation",id:"verify-installation",children:[{value:"The next step is to create your configuration file. Continue to the next section, to see how to do this.",id:"the-next-step-is-to-create-your-configuration-file-continue-to-the-next-section-to-see-how-to-do-this",children:[]}]}],s={toc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can install ",Object(a.b)("inlineCode",{parentName:"p"},"cpbooster")," with a ",Object(a.b)("strong",{parentName:"p"},"single")," comand, either using ",Object(a.b)("inlineCode",{parentName:"p"},"npm")," or ",Object(a.b)("inlineCode",{parentName:"p"},"yarn"),"."),Object(a.b)("h2",{id:"requirements"},"Requirements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm")," (optional, but recommended)."),Object(a.b)("li",{parentName:"ul"},"Node.js >= v12.18.2"),Object(a.b)("li",{parentName:"ul"},"npm"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/jmerle/competitive-companion"},"Competitive Companion Extension (Chrome or Firefox)"))),Object(a.b)("h2",{id:"install-using-npm"},"Install using ",Object(a.b)("inlineCode",{parentName:"h2"},"npm")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"npm install cpbooster -g\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," In some cases you may need to run above command with ",Object(a.b)("inlineCode",{parentName:"p"},"sudo"),". However, it is recommended to\ninstall ",Object(a.b)("inlineCode",{parentName:"p"},"node")," and ",Object(a.b)("inlineCode",{parentName:"p"},"npm")," with ",Object(a.b)("inlineCode",{parentName:"p"},"nvm")," to avoid this."),Object(a.b)("h2",{id:"install-using-yarn"},"Install using ",Object(a.b)("inlineCode",{parentName:"h2"},"yarn")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"yarn install cpbooster -g\n")),Object(a.b)("h2",{id:"verify-installation"},"Verify Installation"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"cpbooster --help\n")),Object(a.b)("p",null,"You should see the description of each of the available commands. Read it to know what you can do with each of them."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-txt"},'\nUsage: cpb <command> [options]\n\nRun `cpb <command> --help` to show help for an specific command.\n\nCommands:\n  cpb clone              Run cpbooster as server for competitive companion\n                         plugin.\n  cpb test <filePath>    Test your code against one or all (default) available\n                         test cases. Run `cpb test --help` to see more usage\n                         options                                    [aliases: t]\n  cpb create <filePath>  Create a new source code file with the corresponding\n                         template loaded or multiple source files if a sequence\n                         is given as file name. Run `cpb create --help` to see\n                         usage options and examples                 [aliases: c]\n  cpb init               Create a new configuration file with default values in\n                         $HOME directory or if --configPath is specified, it\n                         writes it in the given path.               [aliases: i]\n  cpb login <url>        Log in to the specified Online Judge (i.e. Codeforces,\n                         AtCoder, ...).                             [aliases: l]\n  cpb submit <filePath>  Submit a source code file as a solution to a problem in\n                         an Online Judge (i.e. Codeforces, AtCoder, ...).\n                                                                    [aliases: s]\n\nOptions:\n  --version, -v  Show version number                                   [boolean]\n  --help, -h     Show help                                             [boolean]\n  --configPath   Path to JSON configuration file\n                 [default: "/home/san/cpbooster-config.json"]           [string]\n')),Object(a.b)("h3",{id:"the-next-step-is-to-create-your-configuration-file-continue-to-the-next-section-to-see-how-to-do-this"},"The next step is to create your configuration file. Continue to the ",Object(a.b)("a",{parentName:"h3",href:"/docs/configuration"},"next")," section, to see how to do this."))}p.isMDXComponent=!0},116:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var o=t(0),i=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,d=u["".concat(r,".").concat(m)]||u[m]||b[m]||a;return t?i.a.createElement(d,c(c({ref:n},s),{},{components:t})):i.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var s=2;s<a;s++)r[s]=t[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);