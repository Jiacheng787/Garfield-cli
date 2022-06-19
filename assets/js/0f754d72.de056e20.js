"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8986],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(t),u=r,k=m["".concat(p,".").concat(u)]||m[u]||s[u]||i;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7728:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var a=t(3117),r=t(102),i=(t(7294),t(3905)),o=["components"],l={sidebar_position:6},p="\u63d0\u5347\u7f16\u8bd1\u6027\u80fd",d={unversionedId:"Webpack\u4f18\u5316\u65b9\u6848/\u63d0\u5347\u7f16\u8bd1\u6027\u80fd",id:"Webpack\u4f18\u5316\u65b9\u6848/\u63d0\u5347\u7f16\u8bd1\u6027\u80fd",title:"\u63d0\u5347\u7f16\u8bd1\u6027\u80fd",description:"1. \u7f29\u5c0f\u8d44\u6e90\u641c\u7d22\u8303\u56f4",source:"@site/docs/Webpack\u4f18\u5316\u65b9\u6848/\u63d0\u5347\u7f16\u8bd1\u6027\u80fd.md",sourceDirName:"Webpack\u4f18\u5316\u65b9\u6848",slug:"/Webpack\u4f18\u5316\u65b9\u6848/\u63d0\u5347\u7f16\u8bd1\u6027\u80fd",permalink:"/Garfield-cli/docs/Webpack\u4f18\u5316\u65b9\u6848/\u63d0\u5347\u7f16\u8bd1\u6027\u80fd",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Webpack\u4f18\u5316\u65b9\u6848/\u63d0\u5347\u7f16\u8bd1\u6027\u80fd.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u591a\u8fdb\u7a0b\u6253\u5305",permalink:"/Garfield-cli/docs/Webpack\u4f18\u5316\u65b9\u6848/\u591a\u8fdb\u7a0b\u6253\u5305"},next:{title:"\u5206\u5305\u4f18\u5316\uff08Code Splitting\uff09",permalink:"/Garfield-cli/docs/Webpack\u4f18\u5316\u65b9\u6848/\u5206\u5305\u4f18\u5316"}},c={},s=[{value:"1. \u7f29\u5c0f\u8d44\u6e90\u641c\u7d22\u8303\u56f4",id:"1-\u7f29\u5c0f\u8d44\u6e90\u641c\u7d22\u8303\u56f4",level:2},{value:"2. \u8df3\u8fc7\u6587\u4ef6\u7f16\u8bd1",id:"2-\u8df3\u8fc7\u6587\u4ef6\u7f16\u8bd1",level:2},{value:"3. \u6700\u5c0f\u5316 Loader \u4f5c\u7528\u8303\u56f4",id:"3-\u6700\u5c0f\u5316-loader-\u4f5c\u7528\u8303\u56f4",level:2},{value:"4. \u6700\u5c0f\u5316 watch \u76d1\u63a7\u8303\u56f4",id:"4-\u6700\u5c0f\u5316-watch-\u76d1\u63a7\u8303\u56f4",level:2},{value:"5. \u8df3\u8fc7 TS \u7c7b\u578b\u68c0\u67e5",id:"5-\u8df3\u8fc7-ts-\u7c7b\u578b\u68c0\u67e5",level:2}],m={toc:s};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u63d0\u5347\u7f16\u8bd1\u6027\u80fd"},"\u63d0\u5347\u7f16\u8bd1\u6027\u80fd"),(0,i.kt)("h2",{id:"1-\u7f29\u5c0f\u8d44\u6e90\u641c\u7d22\u8303\u56f4"},"1. \u7f29\u5c0f\u8d44\u6e90\u641c\u7d22\u8303\u56f4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"enhanced-resolve")," \u7f29\u5c0f\u8d44\u6e90\u641c\u7d22\u8303\u56f4\uff1b"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/webpack/enhanced-resolve"},"https://github.com/webpack/enhanced-resolve")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"resolve.extensions")," \u51cf\u5c11\u5339\u914d\u6b21\u6570\uff0c\u4ee3\u7801\u4e2d\u5c3d\u91cf\u8865\u9f50\u6587\u4ef6\u540e\u7f00\u540d\uff1b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"resolve.modules")," \u914d\u7f6e"),(0,i.kt)("p",{parentName:"li"},"\u5f53 Webpack \u9047\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"import 'lodash'")," \u8fd9\u6837\u7684 npm \u5305\u5bfc\u5165\u8bed\u53e5\u65f6\uff0c\u4f1a\u5c1d\u8bd5\u5148\u5f53\u524d\u9879\u76ee\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," \u641c\u7d22\u8d44\u6e90\uff0c\u5982\u679c\u627e\u4e0d\u5230\u5219\u6309\u76ee\u5f55\u5c42\u7ea7\u5c1d\u8bd5\u9010\u7ea7\u5411\u4e0a\u67e5\u627e ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," \u76ee\u5f55\uff0c\u5982\u679c\u4f9d\u7136\u627e\u4e0d\u5230\u5219\u6700\u7ec8\u5c1d\u8bd5\u5728\u5168\u5c40 ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," \u4e2d\u641c\u7d22\u3002"),(0,i.kt)("p",{parentName:"li"},"\u5728\u4e00\u4e2a\u4f9d\u8d56\u7ba1\u7406\u6267\u884c\u7684\u6bd4\u8f83\u826f\u597d\u7684\u4e1a\u52a1\u7cfb\u7edf\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u4f1a\u5c3d\u91cf\u4fdd\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," \u8d44\u6e90\u7684\u9ad8\u5ea6\u5185\u805a\uff0c\u63a7\u5236\u5728\u6709\u9650\u7684\u4e00\u4e24\u4e2a\u5c42\u7ea7\u4e0a\uff0c\u56e0\u6b64 Webpack \u8fd9\u4e00\u9010\u5c42\u67e5\u627e\u7684\u903b\u8f91\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u5b9e\u7528\u6027\u5e76\u4e0d\u9ad8\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"resolve.modules")," \u914d\u7f6e\u9879\uff0c\u4e3b\u52a8\u5173\u95ed\u9010\u5c42\u641c\u7d22\u529f\u80fd\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  //...\n  resolve: {\n    modules: [path.resolve(__dirname, 'node_modules')],\n  },\n};\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"resolve.mainFiles")," \u914d\u7f6e"),(0,i.kt)("p",{parentName:"li"},"\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"resolve.extensions")," \u7c7b\u4f3c\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"resolve.mainFiles")," \u914d\u7f6e\u9879\u7528\u4e8e\u5b9a\u4e49\u6587\u4ef6\u5939\u9ed8\u8ba4\u6587\u4ef6\u540d\uff0c\u4f8b\u5982\u5bf9\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"import './dir'")," \u8bf7\u6c42\uff0c\u5047\u8bbe ",(0,i.kt)("inlineCode",{parentName:"p"},"resolve.mainFiles = ['index', 'home']")," \uff0cWebpack \u4f1a\u6309\u4f9d\u6b21\u6d4b\u8bd5 ",(0,i.kt)("inlineCode",{parentName:"p"},"./dir/index")," \u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"./dir/home")," \u6587\u4ef6\u662f\u5426\u5b58\u5728\u3002"),(0,i.kt)("p",{parentName:"li"},"\u56e0\u6b64\uff0c\u5b9e\u9645\u9879\u76ee\u4e2d\u5e94\u63a7\u5236 ",(0,i.kt)("inlineCode",{parentName:"p"},"resolve.mainFiles")," \u6570\u7ec4\u6570\u91cf\uff0c\u51cf\u5c11\u5339\u914d\u6b21\u6570\u3002"))),(0,i.kt)("h2",{id:"2-\u8df3\u8fc7\u6587\u4ef6\u7f16\u8bd1"},"2. \u8df3\u8fc7\u6587\u4ef6\u7f16\u8bd1"),(0,i.kt)("p",null,"\u6709\u4e0d\u5c11 npm \u5305\u9ed8\u8ba4\u63d0\u4f9b\u4e86\u63d0\u524d\u6253\u5305\u597d\uff0c\u4e0d\u9700\u8981\u505a\u4e8c\u6b21\u7f16\u8bd1\u7684\u8d44\u6e90\u7248\u672c\uff0c\u4f8b\u5982\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vue \u5305\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules/vue/dist/vue.runtime.esm.js")," \u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"React \u5305\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules/react/umd/react.production.min.js")," \u6587\u4ef6")),(0,i.kt)("p",null,"\u5bf9\u4f7f\u7528\u65b9\u6765\u8bf4\uff0c\u8fd9\u4e9b\u8d44\u6e90\u7248\u672c\u90fd\u662f\u9ad8\u5ea6\u72ec\u7acb\u3001\u5185\u805a\u7684\u4ee3\u7801\u7247\u6bb5\uff0c\u6ca1\u5fc5\u8981\u91cd\u590d\u505a\u4f9d\u8d56\u89e3\u6790\u3001\u4ee3\u7801\u8f6c\u8bd1\u64cd\u4f5c\uff0c\u6b64\u65f6\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"module.noParse")," \u914d\u7f6e\u9879\u8df3\u8fc7\u8fd9\u4e9b npm \u5305:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  //...\n  module: {\n    noParse: /vue|lodash|react/,\n  },\n};\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u914d\u7f6e\u8be5\u5c5e\u6027\u540e\uff0c\u4efb\u4f55\u5339\u914d\u8be5\u9009\u9879\u7684\u5305\u90fd\u4f1a\u8df3\u8fc7\u8017\u65f6\u7684\u5206\u6790\u8fc7\u7a0b\uff0c\u76f4\u63a5\u6253\u5305\u8fdb chunk\uff0c\u63d0\u5347\u7f16\u8bd1\u901f\u5ea6")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4e1a\u52a1\u9879\u76ee\u4f7f\u7528 Webpack \u6253\u5305\uff0c\u5bf9\u4e8e\u524d\u7aef\u6846\u67b6\u7b49\u57fa\u7840\u6027\u6a21\u5757\uff0c\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"noParse")," \u53ef\u4ee5\u63d0\u5347\u6784\u5efa\u901f\u5ea6\uff0c\u4f46\u662f\u6ce8\u610f\u4e0d\u662f\u6240\u6709\u7b2c\u4e09\u65b9\u5e93\u90fd\u53ef\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"noParse"),"\uff0c\u4f8b\u5982\u4e00\u4e9b\u7ec4\u4ef6\u5e93\uff0c\u5bf9\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"peerDependencies")," \u662f\u4e0d\u6253\u5305\u7684\uff0c\u5728\u6784\u5efa\u4ea7\u7269\u4e2d\u4f1a\u4fdd\u7559 ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," \u8bed\u53e5\uff0c\u4e5f\u5c31\u662f\u8bf4\u9700\u8981\u5728\u4e1a\u52a1\u9879\u76ee\u4e2d\u8fdb\u884c\u6253\u5305\u3002"),(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u7b2c\u4e09\u65b9\u5e93\u5c06\u81ea\u8eab ",(0,i.kt)("inlineCode",{parentName:"p"},"peerDependencies")," \u6253\u5305\u4f1a\u51fa\u73b0\u4ec0\u4e48\u95ee\u9898\uff1f\u4f8b\u5982\u5f00\u53d1\u4e00\u4e2a\u7ec4\u4ef6\u5e93\uff0c\u7528\u5230\u4e86 antd \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Table")," \u7ec4\u4ef6\uff0c\u5982\u679c\u8be5\u7ec4\u4ef6\u5e93\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"Table")," \u6253\u5305\u8fdb\u53bb\uff0c\u4e1a\u52a1\u9879\u76ee\u5f15\u5165\u8be5\u7ec4\u4ef6\u5e93\uff0c\u5982\u679c\u4e1a\u52a1\u9879\u76ee\u4e5f\u7528\u5230\u4e86 antd \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Table")," \u7ec4\u4ef6\uff0c\u5219\u4f1a\u5bfc\u81f4\u4e1a\u52a1\u9879\u76ee\u6700\u7ec8\u6784\u5efa\u4ea7\u7269\u4e2d\u5b58\u5728\u4e24\u4efd ",(0,i.kt)("inlineCode",{parentName:"p"},"Table")," \u7ec4\u4ef6\u7684\u4ee3\u7801\uff0c\u5bfc\u81f4\u51fa\u73b0\u6a21\u5757\u5197\u4f59\u95ee\u9898\u3002"))),(0,i.kt)("h2",{id:"3-\u6700\u5c0f\u5316-loader-\u4f5c\u7528\u8303\u56f4"},"3. \u6700\u5c0f\u5316 Loader \u4f5c\u7528\u8303\u56f4"),(0,i.kt)("p",null,"Loader \u7ec4\u4ef6\u7528\u4e8e\u5c06\u5404\u5f0f\u6587\u4ef6\u8d44\u6e90\u8f6c\u6362\u4e3a\u53ef\u88ab JavaScript \u7406\u89e3\u3001\u8fd0\u884c\u7684\u4ee3\u7801\u7247\u6bb5\uff0c\u6b63\u662f\u8fd9\u4e00\u7279\u6027\u652f\u6491\u8d77 Webpack \u5f3a\u5927\u7684\u8d44\u6e90\u5904\u7406\u80fd\u529b\u3002\u4e0d\u8fc7\uff0cLoader \u5728\u6267\u884c\u5185\u5bb9\u8f6c\u6362\u7684\u8fc7\u7a0b\u53ef\u80fd\u9700\u8981\u505a\u5927\u91cf\u7684 CPU \u8fd0\u7b97\u64cd\u4f5c\uff0c\u4f8b\u5982 babel-loader\u3001eslint-loader\u3001vue-loader \u7b49\uff0c\u56e0\u6b64\u5f00\u53d1\u8005\u6709\u5fc5\u8981\u6839\u636e\u5b9e\u9645\u9700\u6c42\uff0c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"module.rules.include"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"module.rules.exclude")," \u7b49\u914d\u7f6e\u9879\u9650\u5b9a Loader \u7684\u6267\u884c\u8303\u56f4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  // ...\n  module: {\n    rules: [{\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      // include: path.join(__dirname, './src'),\n      use: ['babel-loader', 'eslint-loader']\n    }]\n  }\n};\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u793a\u4f8b\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"exclude: /node_modules/")," \u5c5e\u6027\u540e\uff0cWebpack \u5728\u5904\u7406 ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," \u4e2d\u7684 js \u6587\u4ef6\u65f6\u4f1a\u76f4\u63a5\u8df3\u8fc7\u8fd9\u4e2a rule \u9879\uff0c\u4e0d\u4f1a\u4e3a\u8fd9\u4e9b\u6587\u4ef6\u6267\u884c\u540e\u7eed\u7684 Loader")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4e00\u822c\u6765\u8bf4\uff0c\u7b2c\u4e09\u65b9\u5e93\u5728\u53d1\u5305\u7684\u65f6\u5019\u90fd\u4f1a\u5bf9\u6e90\u7801\u8fdb\u884c\u6784\u5efa\uff0c\u4f8b\u5982\u5bf9 TS\u3001JSX \u8bed\u6cd5\u8fdb\u884c\u8bed\u6cd5\u8f6c\u6362\uff0c\u5bf9 ES2015+ \u8bed\u6cd5\u8fdb\u884c\u7f16\u8bd1\u517c\u5bb9\uff0c\u7136\u540e\u6574\u4f53\u518d\u6253\u5305\u4e3a\u4e00\u4e2a chunk\uff08\u9700\u8981\u6392\u9664\u6389 ",(0,i.kt)("inlineCode",{parentName:"p"},"peerDependencies"),"\uff09\uff0c\u8fd9\u6837\u4e1a\u52a1\u9879\u76ee\u5f15\u5165\u8be5\u5e93\uff0c\u5c31\u4e0d\u9700\u8981\u4f7f\u7528 Babel \u8fdb\u884c\u8017\u65f6\u7684\u7f16\u8bd1\u8f6c\u6362\u4e86\u3002"),(0,i.kt)("p",{parentName:"div"},"\u5173\u4e8e\u7f16\u8bd1\u517c\u5bb9\u8fd9\u5757\u9700\u8981\u6ce8\u610f\u4e00\u4e2a\u95ee\u9898\uff0c\u7b2c\u4e09\u65b9\u5e93\u53ea\u5efa\u8bae\u8fdb\u884c\u8bed\u6cd5\u8f6c\u6362\uff0c\u4f46\u4e0d\u5efa\u8bae\u5f15\u5165 polyfill\u3002\u5982\u7b2c\u4e09\u65b9\u5e93\u5355\u72ec\u5f15\u5165 polyfill\uff0c\u4e1a\u52a1\u9879\u76ee\u5f15\u5165\u8be5\u5e93\u6253\u5305\u7684\u65f6\u5019\uff0c\u5f88\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6a21\u5757\u5197\u4f59\u95ee\u9898\uff0c\u56e0\u6b64\u5efa\u8bae\u53ea\u5728\u4e1a\u52a1\u9879\u76ee\u4e2d\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},'useBuiltIns: "entry"'),"\uff0c\u5728\u5165\u53e3\u6587\u4ef6\u5168\u91cf\u5f15\u5165 polyfill\u3002"))),(0,i.kt)("h2",{id:"4-\u6700\u5c0f\u5316-watch-\u76d1\u63a7\u8303\u56f4"},"4. \u6700\u5c0f\u5316 watch \u76d1\u63a7\u8303\u56f4"),(0,i.kt)("p",null,"\u5728 watch \u6a21\u5f0f\u4e0b(\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"npx webpack --watch")," \u547d\u4ee4\u542f\u52a8)\uff0cWebpack \u4f1a\u6301\u7eed\u76d1\u542c\u9879\u76ee\u6240\u6709\u4ee3\u7801\u6587\u4ef6\uff0c\u53d1\u751f\u53d8\u5316\u65f6\u91cd\u65b0\u6784\u5efa\u6700\u65b0\u4ea7\u7269\u3002\u4e0d\u8fc7\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\u524d\u7aef\u9879\u76ee\u4e2d\u67d0\u4e9b\u8d44\u6e90\u5e76\u4e0d\u4f1a\u9891\u7e41\u66f4\u65b0\uff0c\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," \uff0c\u6b64\u65f6\u53ef\u4ee5\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"watchOptions.ignored")," \u5c5e\u6027\u5ffd\u7565\u8fd9\u4e9b\u6587\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  //...\n  watchOptions: {\n    ignored: /node_modules/\n  },\n};\n")),(0,i.kt)("h2",{id:"5-\u8df3\u8fc7-ts-\u7c7b\u578b\u68c0\u67e5"},"5. \u8df3\u8fc7 TS \u7c7b\u578b\u68c0\u67e5"),(0,i.kt)("p",null,"\u7c7b\u578b\u68c0\u67e5\u6d89\u53ca AST \u89e3\u6790\u3001\u904d\u5386\u4ee5\u53ca\u5176\u5b83\u975e\u5e38\u6d88\u8017 CPU \u7684\u64cd\u4f5c\uff0c\u4f1a\u7ed9\u5de5\u7a0b\u5316\u6d41\u7a0b\u5f15\u5165\u6027\u80fd\u8d1f\u62c5\uff0c\u5fc5\u8981\u65f6\u5f00\u53d1\u8005\u53ef\u9009\u62e9\u5173\u95ed\u7f16\u8bd1\u4e3b\u8fdb\u7a0b\u4e2d\u7684\u7c7b\u578b\u68c0\u67e5\u529f\u80fd\uff0c\u540c\u6b65\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," \u63d2\u4ef6\u5c06\u5176\u5265\u79bb\u5230\u5355\u72ec\u8fdb\u7a0b\u6267\u884c\uff0c\u4f8b\u5982\u5bf9\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-loader")," \uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');\n\nmodule.exports = {\n  // ...\n  module: {\n    rules: [{\n      test: /\\.ts$/,\n      use: [\n        {\n          loader: 'ts-loader',\n          options: {\n            // \u7981\u7528 `ts-loader` \u7684\u7c7b\u578b\u68c0\u67e5\n            transpileOnly: true\n          }\n        }\n      ],\n    }, ],\n  },\n  plugins:[\n    new ForkTsCheckerWebpackPlugin()\n  ]\n};\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8fd9\u6837\uff0c\u65e2\u53ef\u4ee5\u83b7\u5f97 Typescript \u9759\u6001\u7c7b\u578b\u68c0\u67e5\u80fd\u529b\uff0c\u53c8\u80fd\u63d0\u5347\u6574\u4f53\u7f16\u8bd1\u901f\u5ea6")))}u.isMDXComponent=!0}}]);