(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(117)),i=n(120),c={id:"clone",title:"Clone Contest"},s={unversionedId:"clone",id:"clone",isDocsHomePage:!1,title:"Clone Contest",description:"cpbooster can clone a contest to your computer with the following command:",source:"@site/docs/clone.mdx",slug:"/clone",permalink:"/cpbooster/docs/clone",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/clone.mdx",version:"current",sidebar:"docs",previous:{title:"Configuration",permalink:"/cpbooster/docs/configuration"},next:{title:"Test",permalink:"/cpbooster/docs/test"}},l=[{value:"Demo",id:"demo",children:[]},{value:"File Structure",id:"file-structure",children:[]},{value:"Why Flat File Structure?",id:"why-flat-file-structure",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"cpbooster")," can clone a contest to your computer with the following command:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"cpb clone\n")),Object(a.b)("p",null,"This command does 5 things:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Waits for ",Object(a.b)("a",{parentName:"li",href:"https://github.com/jmerle/competitive-companion"},"competitive companion extension")," to send the data from the contest."),Object(a.b)("li",{parentName:"ol"},"Creates a folder inside your ",Object(a.b)("a",{parentName:"li",href:"/docs/configuration#contestsdirectory-string"},"contests directory")," with the same name as the contest that you are cloning."),Object(a.b)("li",{parentName:"ol"},"Creates source files for all the problems in the contest. Using the name of the corresponding problem as file name."),Object(a.b)("li",{parentName:"ol"},"Loads the template that corresponds to your ",Object(a.b)("a",{parentName:"li",href:"/docs/configuration#preferredlang-string"},"preferred language")," to each source file."),Object(a.b)("li",{parentName:"ol"},"Downloads test cases as ",Object(a.b)("inlineCode",{parentName:"li"},".in")," and ",Object(a.b)("inlineCode",{parentName:"li"},".ans")," files. Using the name of the corresponding problem as file name as well.")),Object(a.b)("h2",{id:"demo"},"Demo"),Object(a.b)("div",{class:"text--center"},Object(a.b)("img",{alt:"test",src:Object(i.a)("/img/demos/clone.gif")})),Object(a.b)("h2",{id:"file-structure"},"File Structure"),Object(a.b)("p",null,"Running ",Object(a.b)("inlineCode",{parentName:"p"},"ls")," in the contest directory will show you something like the following."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"Codeforces-CodeforcesRound665Div.2$ ls\nA_DistanceandAxis.ans1  C_MereArray.ans1               E_DivideSquare.cpp\nA_DistanceandAxis.cpp   C_MereArray.cpp                E_DivideSquare.in1\nA_DistanceandAxis.in1   C_MereArray.in1                F_ReverseandSwap.ans1\nA_DistanceandAxis.out1  D_MaximumDistributedTree.ans1  F_ReverseandSwap.ans2\nB_TernarySequence.ans1  D_MaximumDistributedTree.cpp   F_ReverseandSwap.cpp\nB_TernarySequence.cpp   D_MaximumDistributedTree.in1   F_ReverseandSwap.in1\nB_TernarySequence.in1   E_DivideSquare.ans1            F_ReverseandSwap.in2\n")),Object(a.b)("p",null,"The first thing to notice is that every file that corresponds to the ",Object(a.b)("inlineCode",{parentName:"p"},"X")," problem has the same name as ",Object(a.b)("inlineCode",{parentName:"p"},"X"),",\nexcept for the extension. This is how ",Object(a.b)("inlineCode",{parentName:"p"},"cpbooster")," identifies which testcases correspond to a certain source file.\nThis means that you could create a new test case attached to the problem ",Object(a.b)("inlineCode",{parentName:"p"},"A.DistanceandAxis"),"\njust by creating the corresponding ",Object(a.b)("inlineCode",{parentName:"p"},"A.DistanceandAxis.in2")," and ",Object(a.b)("inlineCode",{parentName:"p"},"A.DistanceandAxis.ans2"),"\nfiles, however, ",Object(a.b)("inlineCode",{parentName:"p"},"cpbooster")," has a way to automate this task. See ",Object(a.b)("a",{parentName:"p",href:"/docs/add-test-case"},"Add Test Case"),". The same applies for executable files,\nthey will use the same name except for the extension, which will be ",Object(a.b)("inlineCode",{parentName:"p"},".exe"),"."),Object(a.b)("p",null,"The second thing to notice is that there are ",Object(a.b)("strong",{parentName:"p"},"no subfolders"),"!, the file structure is ",Object(a.b)("strong",{parentName:"p"},"flat"),"!, which is just amazing for several\nreasons. See ",Object(a.b)("a",{parentName:"p",href:"#why-flat-file-structure"},"Why Flat File Structure?")," to know more."),Object(a.b)("h2",{id:"why-flat-file-structure"},"Why Flat File Structure?"),Object(a.b)("p",null,"There are several reasons why a flat file structure is preferred when it comes to competitive programming contests."),Object(a.b)("p",null,"But definitely the main reason, is because we want ",Object(a.b)("strong",{parentName:"p"},"speed!"),", being fast in a contest is crucial."),Object(a.b)("p",null,"For example, having to change the directory like this"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"$ cd ..\n$ cd ProblemB\n")),Object(a.b)("p",null,"each time you switch to another problem is just so annoying and slow."),Object(a.b)("p",null,"Having a flat file structure enables you to make every single file operation easier and faster,\nopening them, creating them, if you are a ",Object(a.b)("a",{parentName:"p",href:"https://www.vim.org/about.php"},"vim")," or ",Object(a.b)("a",{parentName:"p",href:"https://neovim.io/"},"neovim")," user you could just do"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"$ vim *.cpp\n")),Object(a.b)("p",null,"to open all your source files."),Object(a.b)("p",null,"or let's say you want to see or modify the contents of some test case, you could just do ",Object(a.b)("inlineCode",{parentName:"p"},":e ProblemName.in1"),"\nto open the file, without changing the directory or using long relative paths."),Object(a.b)("p",null,"or imagine the situation where for some reason you just want to run your code with any of the available test cases manually\n(without using ",Object(a.b)("inlineCode",{parentName:"p"},"cpbooster"),"), due to the fact that you will have a flat file structure you will be able to do it\nwithout changing the directory or using long relative paths. Just ",Object(a.b)("inlineCode",{parentName:"p"},"./Program.exe < Program.in1")," or ",Object(a.b)("inlineCode",{parentName:"p"},"python Program.py < Program.in1"),", etc.\nas usual."),Object(a.b)("p",null,"This simplicity will also allow you to use ",Object(a.b)("inlineCode",{parentName:"p"},"cpbooster")," with any source file you already have, not just for cloned contests."),Object(a.b)("p",null,"Also, do not forget that folders ",Object(a.b)("strong",{parentName:"p"},"do")," use space, even when they are empty, Why would you like to use more space just for a\ncompetitive programming contest ",Object(a.b)("strong",{parentName:"p"},"???")),Object(a.b)("h4",{id:"so-leave-folders-and-organization-for-more-complex-projects-here-you-definitely-dont-need-that-it-makes-you-slow"},"So, leave folders and organization for more complex projects! Here you definitely DON'T NEED that, it makes you slow."))}p.isMDXComponent=!0},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},120:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(16),o=n(123);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,s=a.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},123:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))}}]);