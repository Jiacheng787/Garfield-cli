"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5527],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return k}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(t),k=r,m=s["".concat(c,".").concat(k)]||s[k]||d[k]||o;return t?a.createElement(m,l(l({ref:n},u),{},{components:t})):a.createElement(m,l({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},3474:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var a=t(3117),r=t(102),o=(t(7294),t(3905)),l=["components"],i={sidebar_position:5},c="Golang \u9879\u76ee\u914d\u7f6e Docker",p={unversionedId:"\u90e8\u7f72/Golang\u9879\u76ee\u914d\u7f6eDocker",id:"\u90e8\u7f72/Golang\u9879\u76ee\u914d\u7f6eDocker",title:"Golang \u9879\u76ee\u914d\u7f6e Docker",description:"1. Dockerfile \u6700\u4f73\u5b9e\u8df5",source:"@site/docs/\u90e8\u7f72/Golang\u9879\u76ee\u914d\u7f6eDocker.md",sourceDirName:"\u90e8\u7f72",slug:"/\u90e8\u7f72/Golang\u9879\u76ee\u914d\u7f6eDocker",permalink:"/Garfield-cli/docs/\u90e8\u7f72/Golang\u9879\u76ee\u914d\u7f6eDocker",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/\u90e8\u7f72/Golang\u9879\u76ee\u914d\u7f6eDocker.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Docker \u90e8\u7f72\u540e\u7aef\u9879\u76ee",permalink:"/Garfield-cli/docs/\u90e8\u7f72/Docker\u90e8\u7f72\u540e\u7aef\u9879\u76ee"},next:{title:"Docker \u955c\u50cf\u6784\u5efa\u6700\u4f73\u5b9e\u8df5",permalink:"/Garfield-cli/docs/\u90e8\u7f72/Docker\u955c\u50cf\u6784\u5efa\u6700\u4f73\u5b9e\u8df5"}},u={},d=[{value:"1. Dockerfile \u6700\u4f73\u5b9e\u8df5",id:"1-dockerfile-\u6700\u4f73\u5b9e\u8df5",level:2},{value:"2. Docker \u5e38\u7528\u547d\u4ee4",id:"2-docker-\u5e38\u7528\u547d\u4ee4",level:2},{value:"1) \u5e38\u7528\u547d\u4ee4",id:"1-\u5e38\u7528\u547d\u4ee4",level:3},{value:"2) \u6784\u5efa\u955c\u50cf",id:"2-\u6784\u5efa\u955c\u50cf",level:3},{value:"3) \u4e0a\u4f20\u955c\u50cf",id:"3-\u4e0a\u4f20\u955c\u50cf",level:3},{value:"4) \u5bb9\u5668\u8fd0\u884c\u7684\u4e24\u79cd\u65b9\u5f0f",id:"4-\u5bb9\u5668\u8fd0\u884c\u7684\u4e24\u79cd\u65b9\u5f0f",level:3},{value:"5) \u67e5\u770b\u5bb9\u5668\u65e5\u5fd7",id:"5-\u67e5\u770b\u5bb9\u5668\u65e5\u5fd7",level:3},{value:"6) \u7528 docker-compose \u7ba1\u7406\u5bb9\u5668",id:"6-\u7528-docker-compose-\u7ba1\u7406\u5bb9\u5668",level:3},{value:"3. Golang \u4ea4\u53c9\u7f16\u8bd1",id:"3-golang-\u4ea4\u53c9\u7f16\u8bd1",level:2}],s={toc:d};function k(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"golang-\u9879\u76ee\u914d\u7f6e-docker"},"Golang \u9879\u76ee\u914d\u7f6e Docker"),(0,o.kt)("h2",{id:"1-dockerfile-\u6700\u4f73\u5b9e\u8df5"},"1. Dockerfile \u6700\u4f73\u5b9e\u8df5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},'# \u6307\u5b9a\u57fa\u7840\u955c\u50cf\u7684\u7248\u672c\uff0c\u786e\u4fdd\u6bcf\u6b21\u6784\u5efa\u90fd\u662f\u5e42\u7b49\u7684\nFROM golang:1.18-alpine3.15 AS builder\n\nWORKDIR /app\n\n# Copy go.mod and go.sum first, because of caching reasons.\nCOPY go.mod go.sum ./\nRUN go mod download\n\nCOPY . ./\n# Compile project\nRUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -o main .\n\n# \u4f7f\u7528\u4f53\u79ef\u66f4\u5c0f\u7684\u57fa\u7840\u955c\u50cf\n# FROM alpine:3.15 AS production\n# Golang \u9879\u76ee\u63a8\u8350 scratch \u955c\u50cf\u8fdb\u4e00\u6b65\u51cf\u5c0f\u4f53\u79ef\nFROM scratch as final\n\n# \u4e0d\u8981\u4f7f\u7528 root \u6743\u9650\u8fd0\u884c\u5e94\u7528\nRUN adduser -D -u 10000 florin\nUSER florin\n\n# \u8bbe\u7f6e\u65f6\u533a\n# \u5728\u4f7f\u7528 Docker \u5bb9\u5668\u65f6\uff0c\u7cfb\u7edf\u9ed8\u8ba4\u7684\u65f6\u533a\u5c31\u662f UTC \u65f6\u95f4\uff080 \u65f6\u533a\uff09\uff0c\u548c\u6211\u4eec\u5b9e\u9645\u9700\u8981\u7684\u5317\u4eac\u65f6\u95f4\u76f8\u5dee\u516b\u4e2a\u5c0f\u65f6\nENV LANG=en_US.UTF-8 LANGUAGE=en_US:en LC_ALL=en_US.UTF-8 TZ=Asia/Shanghai\nRUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone\n\nCOPY --from=builder /app/main .\n\n# \u9ed8\u8ba4\u66b4\u9732 80 \u7aef\u53e3\nEXPOSE 8080\n\nCMD ["./main"]\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"alpine")," \u662f\u4e13\u95e8\u4e3a\u5bb9\u5668\u8bbe\u8ba1\u7684\u5c0f\u578b ",(0,o.kt)("inlineCode",{parentName:"p"},"Linux")," \u53d1\u884c\u7248\u3002\u8fd9\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \u4e2d\u4f7f\u7528\u4e86\u4e24\u6b21 ",(0,o.kt)("inlineCode",{parentName:"p"},"FROM")," \u6307\u4ee4\uff0c\u7b2c\u4e8c\u6761 ",(0,o.kt)("inlineCode",{parentName:"p"},"FROM scratch")," \u884c\uff0c\u5b83\u544a\u8bc9 ",(0,o.kt)("inlineCode",{parentName:"p"},"Docker")," \u4ece\u4e00\u4e2a\u5168\u65b0\u7684\uff0c\u5b8c\u5168\u7a7a\u7684\u5bb9\u5668\u955c\u50cf\u91cd\u65b0\u5f00\u59cb\uff0c\u7136\u540e\u5c06\u4e0a\u4e2a\u9636\u6bb5\u7f16\u8bd1\u597d\u7684\u7a0b\u5e8f\u590d\u5236\u5230\u5176\u4e2d\u3002\u8fd9\u4e2a\u624d\u662f\u6211\u4eec\u968f\u540e\u5c06\u7528\u4e8e\u8fd0\u884c\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Go")," \u5e94\u7528\u7a0b\u5e8f\u7684\u5bb9\u5668\u955c\u50cf\u3002"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"scratch"),"\u955c\u50cf\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"Docker")," \u9879\u76ee\u9884\u5b9a\u4e49\u7684\u6700\u5c0f\u7684\u955c\u50cf\u3002\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"scratch")," \u955c\u50cf\u53ef\u4ee5\u8282\u7701\u5927\u91cf\u7a7a\u95f4\uff0c\u56e0\u4e3a\u6211\u4eec\u5b9e\u9645\u4e0a\u4e0d\u9700\u8981 ",(0,o.kt)("inlineCode",{parentName:"p"},"Go")," \u5de5\u5177\u6216\u5176\u4ed6\u4efb\u4f55\u4e1c\u897f\u6765\u8fd0\u884c\u6211\u4eec\u7684\u7f16\u8bd1\u597d\u7684\u7a0b\u5e8f\uff0c\u8fd9\u53ef\u80fd\u4e5f\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"Go")," \u5728\u5bb9\u5668\u65f6\u4ee3\u7684\u4e00\u4e2a\u4f18\u52bf\u5427\u3002"),(0,o.kt)("p",{parentName:"admonition"},"scratch \u662f\u4e00\u4e2a\u865a\u62df\u955c\u50cf\uff0c\u4e0d\u80fd\u88ab pull\uff0c\u4e5f\u4e0d\u80fd\u8fd0\u884c\uff0c\u56e0\u4e3a\u5b83\u8868\u793a\u7a7a\u3001nothing\uff01\u8fd9\u5c31\u610f\u5473\u7740\u65b0\u955c\u50cf\u7684\u6784\u5efa\u662f\u4ece\u96f6\u5f00\u59cb\uff0c\u4e0d\u5b58\u5728\u5176\u4ed6\u7684\u955c\u50cf\u5c42\u3002\u4f46\u662f\uff0c\u4f7f\u7528 scratch \u4f5c\u4e3a\u57fa\u7840\u955c\u50cf\u65f6\u4f1a\u5e26\u6765\u5f88\u591a\u7684\u4e0d\u4fbf\uff0c\u4f8b\u5982\u7f3a\u5c11 shell\u3001\u7f3a\u5c11\u8c03\u8bd5\u5de5\u5177\u3001\u7f3a\u5c11 libc\uff08C \u7684\u52a8\u6001\u94fe\u63a5\u5e93\uff0cGolang \u4e00\u822c\u4e0d\u5b58\u5728\u8fd0\u884c\u65f6\u4f9d\u8d56\u6ca1\u6709\u95ee\u9898\uff09\u7b49\u7b49\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u6709\u8c03\u8bd5\u9700\u6c42\uff0c\u6298\u4e2d\u4e00\u4e0b\u53ef\u4ee5\u9009\u62e9 busybox \u6216 alpine \u955c\u50cf\u6765\u66ff\u4ee3 scratch\uff0c\u867d\u7136\u5b83\u4eec\u591a\u4e86\u90a3\u4e48\u51e0 MB\uff0c\u4f46\u4ece\u6574\u4f53\u6765\u770b\uff0c\u8fd9\u53ea\u662f\u727a\u7272\u4e86\u5c11\u91cf\u7684\u7a7a\u95f4\u6765\u6362\u53d6\u8c03\u8bd5\u7684\u4fbf\u5229\u6027\uff0c\u8fd8\u662f\u5f88\u503c\u5f97\u7684\u3002")),(0,o.kt)("h2",{id:"2-docker-\u5e38\u7528\u547d\u4ee4"},"2. Docker \u5e38\u7528\u547d\u4ee4"),(0,o.kt)("h3",{id:"1-\u5e38\u7528\u547d\u4ee4"},"1) \u5e38\u7528\u547d\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u627e\u955c\u50cf\n$ docker search ubuntu\n\n# \u62c9\u53d6\u7279\u5b9a tag \u7248\u672c\u7684\u955c\u50cf\uff08\u5982\u679c\u4e0d\u6307\u5b9a tag \u9ed8\u8ba4\u662f latest\uff09\n$ docker pull golang:latest\n\n# \u67e5\u770b\u4e0b\u8f7d\u7684\u6240\u6709\u672c\u5730\u955c\u50cf\n$ docker images\n\n# \u5220\u9664\u955c\u50cf\n$ docker rmi ubuntu:18.0.4\n")),(0,o.kt)("h3",{id:"2-\u6784\u5efa\u955c\u50cf"},"2) \u6784\u5efa\u955c\u50cf"),(0,o.kt)("p",null,"\u6211\u4eec\u4e00\u822c\u90fd\u662f\u57fa\u4e8e\u57fa\u7840\u955c\u50cf\u6765\u6784\u5efa\u4e2a\u4eba\u955c\u50cf\u3002\u955c\u50cf\u662f Dockerfile \u7531\u4e00\u6761\u6761\u6307\u4ee4\u6784\u5efa\u51fa\u6765\u3002"),(0,o.kt)("p",null,"\u57fa\u4e8e\u8fd9\u4e2a Dockerfile \u521b\u5efa\u6211\u4eec\u81ea\u5df1\u7684\u955c\u50cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker build -t garfield/go-service:1.0 .\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u6700\u540e\u6709\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"."))),(0,o.kt)("p",null,"\u67e5\u770b\u521a\u624d\u6784\u5efa\u7684\u955c\u50cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker images\n\nREPOSITORY            TAG       IMAGE ID       CREATED          SIZE\ngarfield/go-service   1.0       ae23dd67996c   15 seconds ago   6.19MB\ngolang                latest    c5e98f0fcc5e   2 weeks ago      842MB\nnginx                 latest    fd3d31a07ae6   6 months ago     134MB\n")),(0,o.kt)("p",null,"\u8fd0\u884c\u5bb9\u5668\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4ea4\u4e92\u5f0f\u8fd0\u884c\n$ docker run --rm -it garfield/go-service:1.0 --name web_server -p 8080:8080 /bin/bash\n\n# \u5b88\u62a4\u5f0f\u8fd0\u884c\n$ docker run -d --name web_server -p 8080:8080 garfield/go-service:1.0\n")),(0,o.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-i"),"\uff1a\u5141\u8bb8\u4f60\u5bf9\u5bb9\u5668\u5185\u7684\u6807\u51c6\u8f93\u5165 (STDIN) \u8fdb\u884c\u4ea4\u4e92"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-t"),"\uff1a\u5728\u65b0\u5bb9\u5668\u5185\u6307\u5b9a\u4e00\u4e2a\u4f2a\u7ec8\u7aef\u6216\u7ec8\u7aef"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/bin/bash"),"\uff1a\u542f\u52a8\u5bb9\u5668\u540e\u7acb\u5373\u6267\u884c\u7684\u547d\u4ee4\uff08\u4ea4\u4e92\u5f0f\u8fd0\u884c\u4f20\u9012\uff0c\u5b88\u62a4\u5f0f\u8fd0\u884c\u4e0d\u9700\u8981\uff09")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-d"),"\uff1a\u5b88\u62a4\u5f0f\u8fd0\u884c")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-v"),"\uff1a\u5141\u8bb8\u6211\u4eec\u6302\u8f7d\u591a\u4e2a\u672c\u5730\u76ee\u5f55\u6216\u8005\u6570\u636e\u5377\u5230\u5bb9\u5668\u4e2d"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-p"),"\uff1a\u6307\u5b9a\u4e3b\u673a\u548c\u5bb9\u5668\u7684\u7aef\u53e3\u6620\u5c04\uff08\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"li"},"8888:80")," \u8868\u793a\u628a\u672c\u5730\u7684 8888 \u7aef\u53e3\u6620\u5c04\u5230\u5bb9\u5668\u7684 80 \u7aef\u53e3\uff09"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--rm"),"\uff1a\u6307\u5b9a\u5bb9\u5668\u9000\u51fa\u540e\u81ea\u52a8\u79fb\u9664\u5bb9\u5668"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--name"),"\uff1a\u5bb9\u5668\u7684\u540d\u5b57\uff0c\u9ed8\u8ba4\u662f\u968f\u673a\u7684\u540d\u5b57")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u505c\u6b62\u5bb9\u5668\n$ docker stop my-ubuntu\n\n# \u542f\u52a8\u5bb9\u5668\n$ docker start my-ubuntu\n\n# \u5220\u9664\u5bb9\u5668\n$ docker rm my-ubuntu\n\n# \u5220\u9664\u6240\u6709\u5bb9\u5668\n$ docker rm `docker ps -aq`\n\n# \u67e5\u770b\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\n$ docker ps\n\n# \u67e5\u770b\u6240\u6709\u521b\u5efa\u8fc7\u7684\u5bb9\u5668(\u8fd0\u884c\u6216\u8005\u5173\u95ed)\n$ docker ps -a\n")),(0,o.kt)("p",null,"\u8fdb\u5165\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker exec -it my-ubuntu /bin/bash\n")),(0,o.kt)("h3",{id:"3-\u4e0a\u4f20\u955c\u50cf"},"3) \u4e0a\u4f20\u955c\u50cf"),(0,o.kt)("p",null,"\u6211\u4eec\u672c\u5730\u6784\u5efa\u7684\u955c\u50cf\u5982\u679c\u5e0c\u671b\u53ef\u4ee5\u88ab\u5176\u4ed6\u4eba\u4f7f\u7528\uff0c\u5c31\u9700\u8981\u628a\u955c\u50cf\u4e0a\u4f20\u5230\u4ed3\u5e93\u3002\u767b\u5f55dockerhub\uff0c\u6ce8\u518c\u4e00\u4e2a\u8d26\u6237\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u767b\u5165\u8d26\u6237\uff0c\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801\n$ docker login\n\n# \u4e0a\u4f20\u955c\u50cf\n$ docker push garfield/go-service:1.0\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"garfield/go-service:1.0")," \u6539\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"[\u4f60\u7684\u7528\u6237\u540d]/go-service:[\u7248\u672c\u53f7]"),"\uff0c\u4f60\u9700\u8981\u91cd\u65b0\u6784\u5efa\u4e00\u4e2a\u955c\u50cf\uff0c\u7136\u540e\u624d\u80fd\u4e0a\u4f20\u5230 dockerhub")),(0,o.kt)("h3",{id:"4-\u5bb9\u5668\u8fd0\u884c\u7684\u4e24\u79cd\u65b9\u5f0f"},"4) \u5bb9\u5668\u8fd0\u884c\u7684\u4e24\u79cd\u65b9\u5f0f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4ea4\u4e92\u5f0f\u8fd0\u884c\uff08",(0,o.kt)("inlineCode",{parentName:"li"},"-it"),"\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u5b88\u62a4\u5f0f\u8fd0\u884c\uff08\u6ca1\u6709\u4ea4\u4e92\u5f0f\u4f1a\u8bdd\uff0c\u957f\u671f\u8fd0\u884c\uff0c\u9002\u5408\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u548c\u670d\u52a1\uff09\uff08",(0,o.kt)("inlineCode",{parentName:"li"},"-d"),"\uff09")),(0,o.kt)("p",null,"\u5927\u90e8\u5206\u60c5\u51b5\u90fd\u662f\u8fd0\u884c\u5b88\u62a4\u5f0f\u5bb9\u5668\uff08daemonized container\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# \u542f\u52a8\u4e86\u5bb9\u5668\uff0c\u7136\u540e\u5bb9\u5668\u7acb\u5373\u5173\u95ed\n$ docker run ubuntu /bin/bash\n\n# \u542f\u52a8\u4e86\u5bb9\u5668\uff0c\u5e76\u5f00\u542f\u4e86\u4ea4\u4e92\u5f0f\u7684\u7ec8\u7aef\uff0c\u53ea\u6709\u8f93\u5165exit\u624d\u9000\u51fa\u7ec8\u7aef\uff0c\u9000\u51fa\u7ec8\u7aef\u540e\uff0c\u5bb9\u5668\u4ecd\u7136\u5728\u540e\u53f0\u8fd0\u884c\n$ docker run -it ubuntu /bin/bash\n\n# \u542f\u52a8\u4e86\u5bb9\u5668\uff0c\u5e76\u4e14\u5728\u540e\u53f0\u4e00\u76f4\u8fd0\u884c\uff0c\u6bcf\u96941s\u8f93\u51fahello world\n$ docker run -d ubuntu /bin/sh -c "while true; do echo hello world; sleep 1; done"\n')),(0,o.kt)("h3",{id:"5-\u67e5\u770b\u5bb9\u5668\u65e5\u5fd7"},"5) \u67e5\u770b\u5bb9\u5668\u65e5\u5fd7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ docker run -d --name my_container ubuntu /bin/sh -c "while true; do echo hello world; sleep 1; done"\n\n# \u67e5\u770b\u540e\u53f0\u8fd0\u884c\u7684\u65e5\u5fd7\n$ docker logs my_container\n\n# \u5b9e\u65f6\u76d1\u63a7(\u7c7b\u4f3ctail -f)\n$ docker logs -f my_container\n\n# \u83b7\u53d6\u6700\u540e10\u884c\n$ docker logs --tail 10 my_container\n\n# \u5b9e\u65f6\u67e5\u770b\u6700\u8fd1\u7684\u65e5\u5fd7\n$ docker logs --tail 0 -f my_container\n\n# \u52a0\u4e0a\u65f6\u95f4\u6233\n$ docker logs -t my_container\n')),(0,o.kt)("h3",{id:"6-\u7528-docker-compose-\u7ba1\u7406\u5bb9\u5668"},"6) \u7528 docker-compose \u7ba1\u7406\u5bb9\u5668"),(0,o.kt)("p",null,"\u6bcf\u6b21\u90fd\u7528 docker \u547d\u4ee4\u542f\u52a8\u5bb9\u5668\u592a\u8d39\u4e8b\uff0c\u800c\u4e14\u5982\u679c\u6709\u591a\u4e2a\u5bb9\u5668\uff0c\u542f\u52a8\u5c31\u53d8\u5f97\u975e\u5e38\u590d\u6742\u4e86\uff01"),(0,o.kt)("p",null,"\u8fd9\u65f6\uff0c\u5c31\u9700\u8981docker compose\u51fa\u573a\u4e86\u3002"),(0,o.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u5efa\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: \'3.7\'\n\nservices:\n  db:\n    image: redis\n    restart: always\n    ports:\n      - 6389:6379\n    networks:\n      - app-test\n\n  web_server:\n    image: garfield/go-service:1.0\n    restart: always\n    depends_on:\n      - db\n    # \u914d\u7f6e\u6302\u8f7d\n    volumes:\n      - $PWD:/go/src/examplecom/http_demo\n    ports:\n      - "8080:8080"\n    # \u6307\u5b9a network\n    networks:\n      - app-test\n    # \u5bb9\u5668\u542f\u52a8\u9700\u8981\u6267\u884c\u7684\u547d\u4ee4\n    # command: /bin/bash\n\n  web_ui:\n    image: garfield/react-app:1.0\n    restart: always\n    depends_on:\n      - web_server\n    ports:\n      - "8066:8066"\n    # \u6307\u5b9a network\n    networks:\n      - app-test\n\nnetworks:\n  app-test:\n    driver: bridge\n')),(0,o.kt)("p",null,"\u542f\u52a8\u6240\u6709\u5bb9\u5668\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose up -d\n")),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u67e5\u770b\u4e00\u4e0b\u521a\u624d\u542f\u52a8\u5bb9\u5668\u7684\u65e5\u5fd7\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# \u67e5\u770b\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668 ID\n$ docker ps\n\nCONTAINER ID   IMAGE                     COMMAND    CREATED         STATUS         PORTS                    NAMES\n3c5bf9ed2bb3   garfield/go-service:1.0   "./main"   3 minutes ago   Up 3 minutes   0.0.0.0:8080->8080/tcp   go-service-demo_web_server_1\n\n# \u6839\u636e\u5bb9\u5668 ID \u5b9e\u65f6\u67e5\u770b\u5bb9\u5668\u65e5\u5fd7\n$ docker logs -f 3c5bf9ed2bb3\n\n2022/10/03 13:15:44 Starting server at :8080\n2022/10/03 13:16:31 Method: "GET" RequestURI: "/"\n2022/10/03 13:16:32 Method: "GET" RequestURI: "/favicon.ico"\n')),(0,o.kt)("p",null,"\u4ee3\u7801\u6709\u4fee\u6539\u540e\uff0c\u9700\u8981\u91cd\u65b0\u7f16\u8bd1\u9879\u76ee\uff0c\u9488\u5bf9\u6211\u4eec\u7684\u5bb9\u5668\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u5373\u53ef"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose restart\n")),(0,o.kt)("p",null,"\u60f3\u8981\u8fdb\u5165\u8fd0\u884c\u7684\u5bb9\u5668\u4e2d\u6267\u884c\u64cd\u4f5c\u4f7f\u7528\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker exec it <container name> bash\n")),(0,o.kt)("p",null,"\u7ed9\u6211\u4eec\u521b\u5efa\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," \u53d1\u9001 ",(0,o.kt)("inlineCode",{parentName:"p"},"go test")," \u547d\u4ee4\u8ba9\u5b83\u5728\u5bb9\u5668\u5185\u6267\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose exec app go test\n")),(0,o.kt)("p",null,"\u505c\u6b62\u6240\u6709\u5bb9\u5668\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose stop\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0cdocker-compose \u4ec5\u7528\u4e8e\u672c\u5730\u5f00\u53d1\u73af\u5883\uff0c\u7ebf\u4e0a\u9700\u8981\u90e8\u7f72\u5230 K8S \u96c6\u7fa4")),(0,o.kt)("h2",{id:"3-golang-\u4ea4\u53c9\u7f16\u8bd1"},"3. Golang \u4ea4\u53c9\u7f16\u8bd1"),(0,o.kt)("p",null,"Go \u63d0\u4f9b\u4e86\u7f16\u8bd1\u94fe\u5de5\u5177\uff0c\u53ef\u4ee5\u8ba9\u6211\u4eec\u5728\u4efb\u4f55\u4e00\u4e2a\u5f00\u53d1\u5e73\u53f0\u4e0a\uff0c\u7f16\u8bd1\u51fa\u5176\u4ed6\u5e73\u53f0\u7684\u53ef\u6267\u884c\u6587\u4ef6\uff08\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u90fd\u662f\u6839\u636e\u6211\u4eec\u5f53\u524d\u7684\u673a\u5668\u751f\u6210\u7684\u53ef\u6267\u884c\u6587\u4ef6\uff09\u3002"),(0,o.kt)("p",null,"\u7f16\u8bd1\u8de8\u5e73\u53f0\u7684\u53ea\u9700\u8981\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"GOOS"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"GOARCH"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"CGO_ENABLED")," \u4e09\u4e2a\u73af\u5883\u53d8\u91cf\u5373\u53ef\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GOOS\uff1a\u76ee\u6807\u5e73\u53f0\u7684\u64cd\u4f5c\u7cfb\u7edf(darwin\u3001freebsd\u3001linux\u3001windows)"),(0,o.kt)("li",{parentName:"ul"},"GOARCH\uff1a\u76ee\u6807\u5e73\u53f0\u7684\u4f53\u7cfb\u67b6\u678432\u4f4d\u8fd8\u662f64\u4f4d(386\u3001amd64\u3001arm)"),(0,o.kt)("li",{parentName:"ul"},"CGO_ENABLED\uff1a\u4ea4\u53c9\u7f16\u8bd1\u4e0d\u652f\u6301 CGO \u6240\u4ee5\u8981\u7981\u7528\u5b83")),(0,o.kt)("p",null,"Window\u73af\u5883\u4e0b\u7f16\u8bd1 Mac \u548c Linux 64\u4f4d\u53ef\u6267\u884c\u7a0b\u5e8f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build main.go\n$ CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build main.go\n")),(0,o.kt)("p",null,"Mac \u4e0b\u7f16\u8bd1 Linux \u548c Windows 64\u4f4d\u53ef\u6267\u884c\u7a0b\u5e8f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build main.go\n$ CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build main.go\n")),(0,o.kt)("p",null,"Linux \u4e0b\u7f16\u8bd1 Mac \u548c Windows 64\u4f4d\u53ef\u6267\u884c\u7a0b\u5e8f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build main.go\n$ CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build main.go\n")),(0,o.kt)("p",null,"\u53c2\u8003\uff1a"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dev.to/arshamalh/how-to-use-docker-multistage-to-make-tiny-images-ts-and-golang-g4j"},"https://dev.to/arshamalh/how-to-use-docker-multistage-to-make-tiny-images-ts-and-golang-g4j")))}k.isMDXComponent=!0}}]);