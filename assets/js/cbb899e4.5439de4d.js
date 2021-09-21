(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),i=n(7),o=(n(0),n(117)),r={id:"configuration",title:"Configuration"},c={unversionedId:"configuration",id:"configuration",isDocsHomePage:!1,title:"Configuration",description:"Creating Your First Configuration File",source:"@site/docs/configuration.mdx",slug:"/configuration",permalink:"/cpbooster/docs/configuration",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/configuration.mdx",version:"current",sidebar:"docs",previous:{title:"Installation",permalink:"/cpbooster/docs/installation"},next:{title:"Clone Contest",permalink:"/cpbooster/docs/clone"}},l=[{value:"Creating Your First Configuration File",id:"creating-your-first-configuration-file",children:[]},{value:"Configuration File Example",id:"configuration-file-example",children:[]},{value:"Fields Description",id:"fields-description",children:[{value:"<code>contestsDirectory: string</code>",id:"contestsdirectory-string",children:[]},{value:"<code>port: number</code>",id:"port-number",children:[]},{value:"<code>editor: string</code>",id:"editor-string",children:[]},{value:"<code>closeAfterClone: boolean</code>",id:"closeafterclone-boolean",children:[]},{value:"<code>showStatusPageOnSubmit: boolean</code>",id:"showstatuspageonsubmit-boolean",children:[]},{value:"<code>useUserDefaultBrowser: boolean</code>",id:"useuserdefaultbrowser-boolean",children:[]},{value:"<code>preferredLang: string</code>",id:"preferredlang-string",children:[]},{value:"<code>hideTestCaseInput: boolean</code>",id:"hidetestcaseinput-boolean",children:[]},{value:"<code>cloneInCurrentDir: boolean</code>",id:"cloneincurrentdir-boolean",children:[]},{value:"<code>languages: Record&lt;LangExtension, LangConfig&gt;</code>",id:"languages-recordlangextension-langconfig",children:[]},{value:"<code>languages.&lt;lang&gt;.template: string</code>",id:"languageslangtemplate-string",children:[]},{value:"<code>languages.&lt;lang&gt;.command: string</code>",id:"languageslangcommand-string",children:[]},{value:"<code>languages.&lt;lang&gt;.debugCommand: string</code>",id:"languageslangdebugcommand-string",children:[]},{value:"<code>languages.&lt;lang&gt;.runCommand: string</code>",id:"languageslangruncommand-string",children:[]},{value:"<code>languages.&lt;lang&gt;.aliases: Object&lt;OnlineJudgeName, string&gt;</code>",id:"languageslangaliases-objectonlinejudgename-string",children:[]},{value:"<code>languages.&lt;lang&gt;.type: &quot;compiled&quot; | &quot;interpreted&quot; | &quot;mixed&quot;</code>",id:"languageslangtype-compiled--interpreted--mixed",children:[]},{value:"<code>languages.&lt;lang&gt;.commentString: string</code>",id:"languageslangcommentstring-string",children:[]}]}],b={toc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"creating-your-first-configuration-file"},"Creating Your First Configuration File"),Object(o.b)("p",null,"Execute the following command to create a configuration file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cpbooster init\n")),Object(o.b)("p",null,"This command will create a file called ",Object(o.b)("inlineCode",{parentName:"p"},"cpbooster-config.json")," in your ",Object(o.b)("strong",{parentName:"p"},"$HOME")," directory with default values.\nIf you wish to create your configuration file somewhere else you can specify the path using ",Object(o.b)("inlineCode",{parentName:"p"},"--configPath")," flag\neach time you run a command."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"By default ",Object(o.b)("inlineCode",{parentName:"p"},"cpbooster")," looks for the configuration file in any of the following directories"),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"$HOME/cpbooster-config.json")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"$HOME/.cpbooster/cpbooster-config.json")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"$HOME/.config/cpbooster/cpbooster-config.json"))),Object(o.b)("p",{parentName:"div"},"Take a look at ",Object(o.b)("a",{parentName:"p",href:"https://github.com/searleser97/cpbooster/issues/7"},Object(o.b)("strong",{parentName:"a"},"this issue")),"\nfor context."))),Object(o.b)("h2",{id:"configuration-file-example"},"Configuration File Example"),Object(o.b)("h4",{id:"cpbooster-configjson"},Object(o.b)("inlineCode",{parentName:"h4"},"cpbooster-config.json")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "contestsDirectory": "/home/user/Contests",\n  "port": 1327,\n  "editor": "konsole",\n  "closeAfterClone": false,\n  "showStatusPageOnSubmit": true,\n  "useUserDefaultBrowser": true,\n  "preferredLang": "cpp",\n  "hideTestCaseInput": false,\n  "cloneInCurrentDir": false,\n  "languages": {\n    "cpp": {\n      "template": "template.cpp",\n      "command": "g++ -std=gnu++17 -O2",\n      "debugCommand": "g++ -std=gnu++17 -DDEBUG -Wshadow -Wall",\n      "aliases": {\n        "codeforces": "54",\n        "atcoder": "4003",\n        "omegaup": "cpp17-gcc"\n      },\n      "type": "compiled",\n      "commentString": "//"\n    },\n    "py": {\n      "template": "template.py",\n      "command": "python3",\n      "debugCommand": "python3 -O",\n      "aliases": {\n        "codeforces": "31",\n        "atcoder": "4006",\n        "omegaup": "py3"\n      },\n      "type": "interpreted",\n      "commentString": "#"\n    },\n    "java": {\n      "template": "",\n      "command": "javac",\n      "debugCommand": "javac",\n      "runCommand": "java",\n      "aliases": {\n        "codeforces": "36",\n        "atcoder": "4005",\n        "omegaup": "java"\n      },\n      "type": "mixed",\n      "commentString": "//"\n    }\n  }\n}\n')),Object(o.b)("h2",{id:"fields-description"},"Fields Description"),Object(o.b)("h3",{id:"contestsdirectory-string"},Object(o.b)("inlineCode",{parentName:"h3"},"contestsDirectory: string")),Object(o.b)("p",null,"The path to the directory where contests folders will be created when you run ",Object(o.b)("inlineCode",{parentName:"p"},"cpb clone"),"."),Object(o.b)("p",null,"The directory of a user that has cloned 3 contests would look like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-txt"},"$ cd path/to/contests/directory\n$ tree -L 1\n.\n\u251c\u2500\u2500 AtCoder-AtCoderBeginnerContest194\n\u251c\u2500\u2500 AtCoder-AtCoderRegularContest113\n\u2514\u2500\u2500 Codeforces-CodeforcesRound665Div.2\n")),Object(o.b)("h3",{id:"port-number"},Object(o.b)("inlineCode",{parentName:"h3"},"port: number")),Object(o.b)("p",null,"Specifies the ",Object(o.b)("strong",{parentName:"p"},"port")," where ",Object(o.b)("a",{parentName:"p",href:"https://github.com/jmerle/competitive-companion"},"competitive companion extension")," will send problem's data.\n",Object(o.b)("strong",{parentName:"p"},"1327")," is the default port for ",Object(o.b)("inlineCode",{parentName:"p"},"cpbooster")," in competitive companion so, if you don't change\nthe port, it will just work as expected. If you must change it, then be sure that you also\nchange it in competitive companion extension settings."),Object(o.b)("h3",{id:"editor-string"},Object(o.b)("inlineCode",{parentName:"h3"},"editor: string")),Object(o.b)("p",null,"Name of the ",Object(o.b)("strong",{parentName:"p"},"editor")," that will be opened after running ",Object(o.b)("inlineCode",{parentName:"p"},"cpb clone"),".\nThe ",Object(o.b)("strong",{parentName:"p"},"editor")," value should match with the terminal command you use to launch it. See ",Object(o.b)("a",{parentName:"p",href:"#editor-requirements"},"Editor Requirements")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"An ",Object(o.b)("strong",{parentName:"p"},"editor")," can be a ",Object(o.b)("a",{parentName:"p",href:"#list-of-supported-terminals"},"terminal emulator")," also."))),Object(o.b)("h4",{id:"editor-requirements"},"Editor Requirements"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"You must be able to open your ",Object(o.b)("strong",{parentName:"li"},"editor")," using a terminal command."),Object(o.b)("li",{parentName:"ol"},"If the ",Object(o.b)("strong",{parentName:"li"},"editor")," is a ",Object(o.b)("strong",{parentName:"li"},"terminal emulator")," it should be in the ",Object(o.b)("a",{parentName:"li",href:"#list-of-supported-terminals"},"list of supported terminals"),"."),Object(o.b)("li",{parentName:"ol"},"If the ",Object(o.b)("strong",{parentName:"li"},"editor")," is NOT a ",Object(o.b)("strong",{parentName:"li"},"terminal emulator"),". The ",Object(o.b)("strong",{parentName:"li"},"editor command")," should support the following format to open a directory:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ editor [directory]\n")),Object(o.b)("p",null,'If your editor does not support this format but has another way to open a directory, you could take a look at\n"',Object(o.b)("a",{parentName:"p",href:"/docs/add-editor-support"},"How to add an editor"),'"'),Object(o.b)("h4",{id:"examples"},"Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Using ",Object(o.b)("strong",{parentName:"li"},"regular editor")," ( ",Object(o.b)("em",{parentName:"li"},"VSCode")," ):")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "editor": "code"\n}\n')),Object(o.b)("p",null,"since ",Object(o.b)("inlineCode",{parentName:"p"},"code")," is the command that is used to execute ",Object(o.b)("em",{parentName:"p"},"vscode")," from the terminal."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Using ",Object(o.b)("strong",{parentName:"li"},"terminal emulator")," ( ",Object(o.b)("em",{parentName:"li"},"konsole")," ):")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "editor": "konsole"\n}\n')),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"Terminal Emulator")," support is currently limited to this ",Object(o.b)("a",{parentName:"p",href:"#list-of-supported-terminals"},"List of supported terminals"),'.\nVisit the section "',Object(o.b)("a",{parentName:"p",href:"/docs/add-editor-support"},"How to add an editor"),'" if you wish to contribute and add support\nfor other terminal emulators.'))),Object(o.b)("h4",{id:"list-of-supported-terminals"},"List of supported terminals"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"konsole"')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"xterm"')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"gnome-terminal"')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"deepin-terminal"')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"kitty"')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"alacritty"')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"terminal"')," (MacOS)")),Object(o.b)("h3",{id:"closeafterclone-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"closeAfterClone: boolean")),Object(o.b)("p",null,"Whether to close the terminal after the execution of ",Object(o.b)("inlineCode",{parentName:"p"},"cpb clone")," or not."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"When using this option as ",Object(o.b)("inlineCode",{parentName:"p"},"true")," verify that your ",Object(o.b)("a",{parentName:"p",href:"#editor-string"},Object(o.b)("strong",{parentName:"a"},"editor"))," satisfies the ",Object(o.b)("a",{parentName:"p",href:"#editor-requirements"},"Editor Requirements"),", otherwise,\nyou might end up with your terminal closed and no editor opened."))),Object(o.b)("h3",{id:"showstatuspageonsubmit-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"showStatusPageOnSubmit: boolean")),Object(o.b)("p",null,"Whether to open a browser window in the submission status page or not, after running ",Object(o.b)("inlineCode",{parentName:"p"},"cpb submit")),Object(o.b)("h3",{id:"useuserdefaultbrowser-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"useUserDefaultBrowser: boolean")),Object(o.b)("p",null,"Whether to open the status page using default browser or the one bundled with ",Object(o.b)("inlineCode",{parentName:"p"},"cpbooster"),".\nSee ",Object(o.b)("a",{parentName:"p",href:"/docs/submit#requirements"},"Submit Requirements")),Object(o.b)("h3",{id:"preferredlang-string"},Object(o.b)("inlineCode",{parentName:"h3"},"preferredLang: string")),Object(o.b)("p",null,"The extension name in lowercase of your preferred language. ( i.e. ",Object(o.b)("inlineCode",{parentName:"p"},'"cpp"'),", ",Object(o.b)("inlineCode",{parentName:"p"},'"py"'),", ",Object(o.b)("inlineCode",{parentName:"p"},'"java"'),", ... ),\n",Object(o.b)("inlineCode",{parentName:"p"},"cpb clone")," uses this value to create corresponding source files with the template of your\npreferred language."),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This value must match exactly (case-sensitive) with the extension used in the source files."))),Object(o.b)("h3",{id:"hidetestcaseinput-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"hideTestCaseInput: boolean")),Object(o.b)("p",null,"Whether or not to show the test case input when testing"),Object(o.b)("h3",{id:"cloneincurrentdir-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"cloneInCurrentDir: boolean")),Object(o.b)("p",null,"When true it clones contests or single problems in current directory instead\nof the global ",Object(o.b)("a",{parentName:"p",href:"#contestsdirectory-string"},"contest directory"),"."),Object(o.b)("h3",{id:"languages-recordlangextension-langconfig"},Object(o.b)("inlineCode",{parentName:"h3"},"languages: Record<LangExtension, LangConfig>")),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"languages")," you can configure the settings of each programming language."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"cpbooster")," officially supports the following languages:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"c")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"c++")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"rust")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"go")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"python")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"javascript")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ruby")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"java")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"kotlin")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"scala"))),Object(o.b)("p",{parentName:"div"},"officially supporting these languages means that they were tested exhaustively, however,\n",Object(o.b)("strong",{parentName:"p"},"other languages might be supported as well")," due to the generality of the algorithm used to parse the commands\nto compile or run. In case ",Object(o.b)("inlineCode",{parentName:"p"},"cpbooster")," can't work correctly with the language you wish to use,\nvisit the section \"",Object(o.b)("a",{parentName:"p",href:"/docs/add-language-support"},"How to add a language"),'" which will guide you on how to contribute\nto the project.'))),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The keys (",Object(o.b)("inlineCode",{parentName:"p"},"<lang>"),") must match exactly (case-sensitive) with the extension used in the source files.\ni.e. if you use ",Object(o.b)("inlineCode",{parentName:"p"},"cpp")," extension for your ",Object(o.b)("inlineCode",{parentName:"p"},"c++")," programs then you must use ",Object(o.b)("inlineCode",{parentName:"p"},"cpp")," as key\nof the json object, ",Object(o.b)("inlineCode",{parentName:"p"},"CPP")," won't work, neither ",Object(o.b)("inlineCode",{parentName:"p"},"Cpp")," nor ",Object(o.b)("inlineCode",{parentName:"p"},"cPP"),", ... and the same applies\nfor the languages"))),Object(o.b)("h3",{id:"languageslangtemplate-string"},Object(o.b)("inlineCode",{parentName:"h3"},"languages.<lang>.template: string")),Object(o.b)("p",null,"Path to your competitive programming template for the corresponding ",Object(o.b)("inlineCode",{parentName:"p"},"<lang>"),"."),Object(o.b)("p",null,"Here are some examples of competitive programming templates (if you wish, you can download them and use them):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://gitlab.com/searleser97/competitive-programming-reference/-/blob/master/Reference/Coding%20Resources/C++/Competitive%20Programming%20Template.cpp"},"CompetitiveProgrammingTemplate.cpp"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This template allows you to print anything like in python with a ",Object(o.b)("inlineCode",{parentName:"li"},"debug")," function that just works when ",Object(o.b)("inlineCode",{parentName:"li"},"debugCommand")," is used. See ",Object(o.b)("a",{parentName:"li",href:"/docs/debug"},"Debug")," section."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://gitlab.com/searleser97/competitive-programming-reference/-/blob/master/Reference/Coding%20Resources/Python/Competitive%20Programming%20Template.py"},"CompetitiveProgrammingTemplate.py"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This template includes Fast IO operations for python")))),Object(o.b)("h3",{id:"languageslangcommand-string"},Object(o.b)("inlineCode",{parentName:"h3"},"languages.<lang>.command: string")),Object(o.b)("p",null,"The command that will be used to compile\n(",Object(o.b)("a",{parentName:"p",href:"#languageslangtype-compiled--interpreted--mixed"},Object(o.b)("inlineCode",{parentName:"a"},"compiled")," or ",Object(o.b)("inlineCode",{parentName:"a"},"mixed")," languages"),")\nor run (",Object(o.b)("a",{parentName:"p",href:"#languageslangtype-compiled--interpreted--mixed"},Object(o.b)("inlineCode",{parentName:"a"},"interpreted")," languages"),") your program for testing purposes."),Object(o.b)("p",null,"For example: If you use codeforces it is convenient that you use the same command they use for each language"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "languages": {\n    "cpp": {\n      "command": "g++ -std=gnu++17 -O2"\n    },\n    "py": {\n      "command": "python3"\n    }\n  }\n}\n')),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If you specify the name of the executable file in this command, it will\nbe used instead of the default name (same as source file). See ",Object(o.b)("a",{parentName:"p",href:"/docs/test"},Object(o.b)("strong",{parentName:"a"},"Test"))," section."),Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"Example:")," In ",Object(o.b)("inlineCode",{parentName:"p"},"C++")," you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"-o")," flag to specify the name of the executable file that will be created after compilation."),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "languages": {\n    "cpp": {\n      "command": "g++ -std=gnu++17 -o executableName.exe"\n    }\n  }\n}\n')))),Object(o.b)("h3",{id:"languageslangdebugcommand-string"},Object(o.b)("inlineCode",{parentName:"h3"},"languages.<lang>.debugCommand: string")),Object(o.b)("p",null,"The command that will be used to compile\n(",Object(o.b)("a",{parentName:"p",href:"#languageslangtype-compiled--interpreted--mixed"},Object(o.b)("inlineCode",{parentName:"a"},"compiled")," or ",Object(o.b)("inlineCode",{parentName:"a"},"mixed")," languages"),") or run\n(",Object(o.b)("a",{parentName:"p",href:"#languageslangtype-compiled--interpreted--mixed"},Object(o.b)("inlineCode",{parentName:"a"},"interpreted")," languages"),") your program for debugging purposes.\nUsually ",Object(o.b)("inlineCode",{parentName:"p"},"debugCommand")," has more flags than ",Object(o.b)("inlineCode",{parentName:"p"},"command"),"."),Object(o.b)("p",null,"Some debug command examples for ",Object(o.b)("inlineCode",{parentName:"p"},"cpp")," and ",Object(o.b)("inlineCode",{parentName:"p"},"py"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "languages": {\n    "cpp": {\n      "command": "g++ -std=gnu++17 -O2",\n      "debugCommand": "g++ -std=gnu++17 -O3 -DDEBUG -Wshadow -Wall"\n    },\n    "py": {\n      "command": "python3",\n      "debugCommand": "python3 -O"\n    }\n  }\n}\n')),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You can specify the name of the executable file in the same way you would do it\nin ",Object(o.b)("a",{href:"#languageslangcommand-string",style:{color:"white"}},Object(o.b)("inlineCode",{parentName:"p"},"languages.<lang>.command")),"."),Object(o.b)("p",{parentName:"div"},"Visit the ",Object(o.b)("a",{parentName:"p",href:"/docs/debug"},Object(o.b)("strong",{parentName:"a"},"Debug"))," section to see usage examples of this feature."))),Object(o.b)("h3",{id:"languageslangruncommand-string"},Object(o.b)("inlineCode",{parentName:"h3"},"languages.<lang>.runCommand: string")),Object(o.b)("p",null,"The command that will be used to run ",Object(o.b)("a",{parentName:"p",href:"#languageslangtype-compiled--interpreted--mixed"},Object(o.b)("inlineCode",{parentName:"a"},"mixed")),"\ntype languages like (java, kotlin, scala, ...)."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This type of languages are compiled with some command (i.e. javac, kotlinc, scalac, ...) but\nthey get run with a different one (java, kotlin, scala, ...)"))),Object(o.b)("h3",{id:"languageslangaliases-objectonlinejudgename-string"},Object(o.b)("inlineCode",{parentName:"h3"},"languages.<lang>.aliases: Object<OnlineJudgeName, string>")),Object(o.b)("p",null,'Language "aliases" for each OnlineJudge. See ',Object(o.b)("a",{parentName:"p",href:"/docs/submit#how-to-configure-language-aliases"},"How To Configure Language Aliases"),"."),Object(o.b)("p",null,"For example: the alias for ",Object(o.b)("inlineCode",{parentName:"p"},"C++")," in Codeforces and AtCoder is ",Object(o.b)("inlineCode",{parentName:"p"},'"54"')," and ",Object(o.b)("inlineCode",{parentName:"p"},'"4006"')," respectively"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "languages": {\n    "cpp": {\n      "aliases": {\n        "codeforces": "54",\n        "atcoder": "4006"\n      }\n    }\n  }\n}\n')),Object(o.b)("h3",{id:"languageslangtype-compiled--interpreted--mixed"},Object(o.b)("inlineCode",{parentName:"h3"},'languages.<lang>.type: "compiled" | "interpreted" | "mixed"')),Object(o.b)("p",null,"Specifies whether the language is ",Object(o.b)("inlineCode",{parentName:"p"},'"compiled"')," (",Object(o.b)("inlineCode",{parentName:"p"},"C++"),", ",Object(o.b)("inlineCode",{parentName:"p"},"go"),", ",Object(o.b)("inlineCode",{parentName:"p"},"rust"),", ",Object(o.b)("inlineCode",{parentName:"p"},"C#"),"),\n",Object(o.b)("inlineCode",{parentName:"p"},'"interpreted"')," (",Object(o.b)("inlineCode",{parentName:"p"},"python"),", ",Object(o.b)("inlineCode",{parentName:"p"},"javascript"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ruby"),", ...) or ",Object(o.b)("inlineCode",{parentName:"p"},'"mixed"')," (",Object(o.b)("inlineCode",{parentName:"p"},"java"),", ",Object(o.b)("inlineCode",{parentName:"p"},"kotlin"),", ",Object(o.b)("inlineCode",{parentName:"p"},"scala"),", ...).\n",Object(o.b)("inlineCode",{parentName:"p"},"cpbooster")," is aware that some languages can be ",Object(o.b)("inlineCode",{parentName:"p"},"interpreted")," as well as ",Object(o.b)("inlineCode",{parentName:"p"},"compiled"),",\nlike ",Object(o.b)("inlineCode",{parentName:"p"},"python")," which can be compiled with ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Nuitka/Nuitka"},"nuitka")," or ",Object(o.b)("inlineCode",{parentName:"p"},"javascript")," which\ncan be compiled with ",Object(o.b)("a",{parentName:"p",href:"https://github.com/NectarJS/nectarjs"},"nectarjs"),".\nWith this option you have the chance to tell ",Object(o.b)("inlineCode",{parentName:"p"},"cpbooster")," how to work with\nthe language you provide. For a definition of ",Object(o.b)("inlineCode",{parentName:"p"},"mixed")," languages, See ",Object(o.b)("a",{parentName:"p",href:"add-language-support#mixed"},"Mixed Languages")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"In case this option is not provided, then ",Object(o.b)("inlineCode",{parentName:"p"},"cpbooster")," will try to infer the type\ndepending on the language. But consider that ",Object(o.b)("inlineCode",{parentName:"p"},"cpbooster")," is not aware of all the languages\nit actually support, specifying this option reduces the risk of unexpected errors.\nSee ",Object(o.b)("a",{parentName:"p",href:"#languages-recordlangextension-langconfig"},"Languages Support")))),Object(o.b)("h3",{id:"languageslangcommentstring-string"},Object(o.b)("inlineCode",{parentName:"h3"},"languages.<lang>.commentString: string")),Object(o.b)("p",null,"Tells ",Object(o.b)("inlineCode",{parentName:"p"},"cpbooster")," which comment string to use depending on the language.\n",Object(o.b)("inlineCode",{parentName:"p"},"cpbooster")," uses a generic algorithm to support a great variety of languages,\nsome of them are know by ",Object(o.b)("inlineCode",{parentName:"p"},"cpbooster")," but some others are unknown for it,\ntherefore ",Object(o.b)("inlineCode",{parentName:"p"},"cpbooster")," might not know how to write comments in that language."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Comments are used to write information in the source code file such as:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"time-limit"),Object(o.b)("li",{parentName:"ul"},"problem-url")))))}s.isMDXComponent=!0},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,u=p["".concat(r,".").concat(d)]||p[d]||m[d]||o;return n?i.a.createElement(u,c(c({ref:t},b),{},{components:n})):i.a.createElement(u,c({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var b=2;b<o;b++)r[b]=n[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);