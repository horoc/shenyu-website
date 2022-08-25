"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[80003],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=d(a),g=r,k=m["".concat(o,".").concat(g)]||m[g]||c[g]||i;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},72834:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const i={title:"PredicateJudge-- \u57fa\u4e8eSPI\u7684\u8bbe\u8ba1\u5b9e\u73b0\u5206\u6790",author:"Huihui Yin",author_title:"Apache ShenYu Contributor",tags:["SPI","Apache ShenYu"]},l=void 0,p={permalink:"/zh/blog/SPI-SourceCode-Analysis-PredicateJudge-SPI",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-blog/SPI-SourceCode-Analysis-PredicateJudge-SPI.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/SPI-SourceCode-Analysis-PredicateJudge-SPI.md",title:"PredicateJudge-- \u57fa\u4e8eSPI\u7684\u8bbe\u8ba1\u5b9e\u73b0\u5206\u6790",description:"\u7075\u6d3b\u7684\u63d2\u4ef6\u548c\u89c4\u5219\u5b9a\u4e49\uff0c\u662fShenyu\u7f51\u5173\u7684\u4e00\u5927\u7279\u8272\u3002\u5b83\u4ee5\u63d2\u4ef6\u5f62\u5f0f\u652f\u6301\u591a\u79cd\u7f51\u7edc\u534f\u8bae\u548c\u591a\u79cd\u6d41\u884c\u7684\u5fae\u670d\u52a1\u6846\u67b6\uff0c\u5982Dubbo, gRPC\u548c Spring-Cloud \u7b49\u3002 \u4e3a\u4e86\u5b9e\u73b0\u5bf9\u5404\u79cd\u534f\u8bae\u53ca\u63d2\u4ef6\u7684\u914d\u7f6e\u89c4\u5219\u7684\u89e3\u6790\uff0c\u7f51\u5173\u5728\u89c4\u5219\u7b56\u7565\u89e3\u6790\u65b9\u9762\uff0c\u91c7\u7528\u4e86\u4f18\u96c5\u7684SPI(Service Provider Interface)\u5b9e\u73b0\uff0c\u5f53\u6dfb\u52a0\u65b0\u7684\u63d2\u4ef6\u65f6\uff0c\u89c4\u5219\u89e3\u6790\u90e8\u5206\u53ef\u4ee5\u6cbf\u7528\u73b0\u6709\u5b9e\u73b0\u6216\u91c7\u7528SPI\u673a\u5236\u5feb\u901f\u5b9e\u73b0\uff0c\u5177\u6709\u826f\u597d\u7684\u53ef\u6269\u5c55\u6027\u3002",date:"2022-08-25T11:36:03.440Z",formattedDate:"2022\u5e748\u670825\u65e5",tags:[{label:"SPI",permalink:"/zh/blog/tags/spi"},{label:"Apache ShenYu",permalink:"/zh/blog/tags/apache-shen-yu"}],readingTime:7.51,truncated:!1,prevItem:{title:"MatchStrategy--\u57fa\u4e8eSPI\u7684\u4ee3\u7801\u5206\u6790",permalink:"/zh/blog/SPI-SourceCode-Analysis-MatchStrategy-SPI"},nextItem:{title:"Apache ShenYu \u542f\u52a8\u793a\u4f8b",permalink:"/zh/blog/Start-SourceCode-Analysis-Start-Demo"}},o=[{value:"<code>SPI</code> \u7684\u9876\u5c42\u8bbe\u8ba1",id:"spi-\u7684\u9876\u5c42\u8bbe\u8ba1",children:[]},{value:"shenyu-plugin\u7684<code>SPI</code> \u5b9e\u73b0",id:"shenyu-plugin\u7684spi-\u5b9e\u73b0",children:[{value:"PredicateJudge <code>SPI</code> \u8bbe\u8ba1",id:"predicatejudge-spi-\u8bbe\u8ba1",children:[]},{value:"\u8c03\u7528\u65b9\u6cd5",id:"\u8c03\u7528\u65b9\u6cd5",children:[]},{value:"<code>SPI</code>\u914d\u7f6e\u6587\u4ef6",id:"spi\u914d\u7f6e\u6587\u4ef6",children:[]}]},{value:"PredicateJudge <code>SPI</code>\u5728\u7f51\u5173Plugin\u4e2d\u7684\u4f7f\u7528",id:"predicatejudge-spi\u5728\u7f51\u5173plugin\u4e2d\u7684\u4f7f\u7528",children:[]},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",children:[{value:"PredicateJudge  \u5224\u65ad\u7ed3\u679c\u4e3e\u4f8b",id:"predicatejudge--\u5224\u65ad\u7ed3\u679c\u4e3e\u4f8b",children:[]}]}],d={toc:o};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u7075\u6d3b\u7684\u63d2\u4ef6\u548c\u89c4\u5219\u5b9a\u4e49\uff0c\u662f",(0,r.kt)("a",{parentName:"p",href:"http://shenyu.apache.org/"},"Shenyu\u7f51\u5173"),"\u7684\u4e00\u5927\u7279\u8272\u3002\u5b83\u4ee5\u63d2\u4ef6\u5f62\u5f0f\u652f\u6301\u591a\u79cd\u7f51\u7edc\u534f\u8bae\u548c\u591a\u79cd\u6d41\u884c\u7684\u5fae\u670d\u52a1\u6846\u67b6\uff0c\u5982Dubbo, gRPC\u548c Spring-Cloud \u7b49\u3002 \u4e3a\u4e86\u5b9e\u73b0\u5bf9\u5404\u79cd\u534f\u8bae\u53ca\u63d2\u4ef6\u7684\u914d\u7f6e\u89c4\u5219\u7684\u89e3\u6790\uff0c\u7f51\u5173\u5728\u89c4\u5219\u7b56\u7565\u89e3\u6790\u65b9\u9762\uff0c\u91c7\u7528\u4e86\u4f18\u96c5\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"SPI"),"(Service Provider Interface)\u5b9e\u73b0\uff0c\u5f53\u6dfb\u52a0\u65b0\u7684\u63d2\u4ef6\u65f6\uff0c\u89c4\u5219\u89e3\u6790\u90e8\u5206\u53ef\u4ee5\u6cbf\u7528\u73b0\u6709\u5b9e\u73b0\u6216\u91c7\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"SPI"),"\u673a\u5236\u5feb\u901f\u5b9e\u73b0\uff0c\u5177\u6709\u826f\u597d\u7684\u53ef\u6269\u5c55\u6027\u3002"),(0,r.kt)("h2",{id:"spi-\u7684\u9876\u5c42\u8bbe\u8ba1"},(0,r.kt)("inlineCode",{parentName:"h2"},"SPI")," \u7684\u9876\u5c42\u8bbe\u8ba1"),(0,r.kt)("p",null,"Shenyu\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"SPI"),"\u91c7\u7528\u63a5\u53e3+ \u5de5\u5382\u6a21\u5f0f+\u914d\u7f6e\u6587\u4ef6\u7684\u65b9\u5f0f\uff0c\u6765\u5b9e\u73b0\u6a21\u7ec4\u7684\u52a8\u6001\u52a0\u8f7d\u3002\u5728\u5176",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"shen-",(0,r.kt)("inlineCode",{parentName:"em"},"SPI"))),"-\u6a21\u7ec4\uff0c\u505a\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"SPI"),"\u7684\u9876\u5c42\u8bbe\u8ba1\u3002\u5b9a\u4e49\u4e86@ Join \uff0c@",(0,r.kt)("inlineCode",{parentName:"p"},"SPI")," \u4e24\u4e2aannotation\u3002 \u5176\u4e2d@Join  \u4ee3\u8868\u6b64\u7c7b\u4f1a\u52a0\u5165\u6269\u5c55\u673a\u5236\uff0c\u76f8\u5f53\u4e8e\u662f\u505a\u7533\u8bf7\u6ce8\u518c\u3002 @",(0,r.kt)("inlineCode",{parentName:"p"},"SPI")," \u6807\u660e\u5f53\u524d\u7c7b\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"SPI"),"\u529f\u80fd\u6269\u5c55\u7c7b\u3002"),(0,r.kt)("p",null,"Fig 1 classes in the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"shenyu-spi"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"toplevel-SPI",src:a(73454).Z})),(0,r.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u65b9\u9762\uff0c\u5b9a\u4e49",(0,r.kt)("inlineCode",{parentName:"p"},"SPI"),"\u52a0\u8f7d\u7684\u76ee\u5f55\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"META-INF/shenyu/")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'SHENYU_DIRECTORY = "META-INF/shenyu/";\n')),(0,r.kt)("p",null,"\u7cfb\u7edf\u542f\u52a8\u65f6\uff0c\u4f1a\u626b\u63cf ",(0,r.kt)("inlineCode",{parentName:"p"},"SHENYU_DIRECTORY")," \u4e0b\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5e76\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"ExtensionLoader")," \u7c7b\u6765\u52a0\u8f7d\u6240\u914d\u7f6e\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"SPI"),"\u6269\u5c55\u7c7b\uff0c\u5e76cache\u5230\u5185\u5b58\u4e2d\u3002  \u914d\u7f6e\u6587\u4ef6\u5185\u5bb9\u4e3a key=class\u7684\u5f62\u5f0f\u3002 \u5728\u7cfb\u7edf\u6267\u884c\u671f\u95f4\uff0c \u7531",(0,r.kt)("inlineCode",{parentName:"p"},"ExtensionFactory"),"\u7684\u5b9e\u73b0\u7c7b\uff0c\u8fd4\u56dekey\u6240\u5bf9\u5e94\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"SPI"),"\u5b9e\u73b0\u7c7b\u3002 "),(0,r.kt)("h2",{id:"shenyu-plugin\u7684spi-\u5b9e\u73b0"},"shenyu-plugin\u7684",(0,r.kt)("inlineCode",{parentName:"h2"},"SPI")," \u5b9e\u73b0"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"shenyu-plugin")),"\u6a21\u7ec4\u4e2d\uff0c\u6309\u7167\u63d2\u4ef6\u673a\u5236\uff0c\u5b9e\u73b0\u4e86\u5404\u79cd\u8bf7\u6c42\u8f6c\u53d1\u529f\u80fd\uff0c\u5305\u62ec\u652f\u6301request, redirect, response, rewrite\u7b49http\u534f\u8bae\u529f\u80fd\uff0c\u53ca gRPC, dubbo, hystrix\u7b49\u5fae\u670d\u52a1\u6846\u67b6\uff0c \u5e76\u4e14\u63d2\u4ef6\u529f\u80fd\u8fd8\u5728\u4e0d\u65ad\u589e\u52a0\u4e2d\u3002\u5982\u679c\u5728\u5404\u81ea\u7684\u529f\u80fd\u63d2\u4ef6\u5b9e\u505a\u7c7b\u4e2d\uff0c\u8fd8\u8981\u505a\u5bf9routing \u53c2\u6570\u7684\u89e3\u6790\u7b49\u5904\u7406\uff0c\u4e0d\u4ec5\u4f1a\u9020\u6210\u7a0b\u5e8f\u7684\u5197\u4f59\uff0c\u800c\u4e14\u5f53\u8981\u652f\u6301\u5404\u81ea\u5339\u914d\u89c4\u5219\uff0c\u5982\u901a\u914d\u7b26\u3001\u6b63\u5219\u8868\u8fbe\u5f0f\u3001SpEL\u89e3\u6790\u7b49\uff0c\u4f1a\u9020\u6210\u9891\u7e41\u5bf9\u63d2\u4ef6\u6838\u5fc3\u4ee3\u7801\u7684\u4fee\u6539\u3002\u56e0\u6b64\uff0c\u5728",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"shenyu-plugin")),"\u6a21\u7ec4\u4e2d\uff0c\u5c06routing\u53c2\u6570\u89e3\u6790\u505a\u4e86\u66f4\u9ad8\u4e00\u5c42\u7684\u62bd\u8c61\uff0c\u5e76\u6309\u7167",(0,r.kt)("inlineCode",{parentName:"p"},"SPI"),"\u673a\u5236\u505a\u4e86\u89c4\u5219\u89e3\u6790\u7684\u5b9e\u73b0\u3002\u89e3\u6790\u7531\u4e09\u4e2a\u90e8\u5206\u7ec4\u6210\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ParameterData"),"-\u53c2\u6570\u8d44\u6599,  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"PredictJudge"),"-\u65ad\u8a00")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"MatchStrategy"),"-\u5339\u914d\u7b56\u7565\u4e09\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"SPI"),"\u5b9e\u73b0\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u4e9b\u6269\u5c55\u7c7b\u5b9a\u4e49\u5728 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"shenyu-plugin-base"))," module\u4e2d\uff0c\u7ecf\u8fc7\u8fd9\u6837\u62bd\u8c61\u540e\uff0c\u6bcf\u4e2a\u63d2\u4ef6\u5b9e\u73b0\u4e2d\uff0crouting \u53c2\u6570\u89e3\u6790\u7684\u529f\u80fd\u5168\u90e8\u7531AbstractShenyuPlugin \u6765\u8c03\u7528\u4e0a\u8ff0\u4e09\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"SPI"),"\u5de5\u5382\u7c7b\u6765\u5b9a\u4e49\u548c\u5b9e\u73b0\u3002\u505a\u5230\u4e86\u529f\u80fd\u7684\u4e13\u4e00\uff0c\u5e76\u6613\u4e8e\u6269\u5c55\uff0c\u7b26\u5408SOLID\u539f\u5219\u3002"))),(0,r.kt)("p",null,"\u672c\u8282\u5c31\u5176\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"PredictJudge"),"-\u65ad\u8a00\u505a\u8be6\u7ec6\u89e3\u6790\u3002\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2amodule\u4e2d\u7684pom\u6587\u4ef6\u4e2d\uff0c\u6dfb\u52a0\u4e86\u5bf9",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"shenyu-",(0,r.kt)("inlineCode",{parentName:"em"},"SPI"))),"\u7684\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spi</artifactId>\n    <version>${project.version}</version>\n</dependency>\n")),(0,r.kt)("h3",{id:"predicatejudge-spi-\u8bbe\u8ba1"},"PredicateJudge ",(0,r.kt)("inlineCode",{parentName:"h3"},"SPI")," \u8bbe\u8ba1"),(0,r.kt)("p",null,"PredicateJudge ",(0,r.kt)("inlineCode",{parentName:"p"},"SPI")," \u5b9e\u73b0\u7528\u6765\u89e3\u6790\u5224\u65ad\u5404\u7c7b\u89c4\u5219\uff0c\u5f53\u7f51\u5173\u4e2d\u914d\u7f6e\u7684\u3002\u8fd9\u4e2a\u7c7b\u547d\u540d\u548c\u529f\u80fd\u90fd\u7c7b\u4f3c\u4e8ejava \u7684",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/api/java/util/function/Predicate.html"},"Predicate"),"  \uff0c\u4f46\u5bf9\u63a5\u53d7\u884c\u4e3a\u505a\u4e86\u66f4\u8fdb\u4e00\u6b65\u7684\u62bd\u8c61\u3002\u8fd9\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"SPI"),"\u901a\u8fc7\u4e00\u4e2a\u5de5\u5382\u548c\u7b56\u7565\u6a21\u5f0f\u5b9e\u73b0\uff0c\u9996\u5148\u6765\u770b",(0,r.kt)("inlineCode",{parentName:"p"},"PredicateJudge")," ",(0,r.kt)("inlineCode",{parentName:"p"},"SPI"),"\u63a5\u53e3\u7684\u5b9a\u4e49\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@SPI\n@FunctionalInterface\npublic interface PredicateJudge {\n\n    /**\n     * judge conditionData and realData is match.\n     *\n     * @param conditionData {@linkplain ConditionData}\n     * @param realData       realData\n     * @return true is pass  false is not pass.\n     */\n    Boolean judge(ConditionData conditionData, String realData);\n}\n")),(0,r.kt)("p",null,"\u8fd9\u90e8\u5206\u7684\u7c7b\u56fe\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,"Fig 2-Predicate class diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"predicate-class-diagram",src:a(34751).Z})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PredicateJudgeFactory"),"\u7684\u91cd\u8981\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    public static PredicateJudge newInstance(final String operator) {\n        return ExtensionLoader.getExtensionLoader(PredicateJudge.class).getJoin(processSpecialOperator(operator));\n    }\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    public static Boolean judge(final ConditionData conditionData, final String realData) {\n        if (Objects.isNull(conditionData) || StringUtils.isBlank(realData)) {\n            return false;\n        }\n        return newInstance(conditionData.getOperator()).judge(conditionData, realData);\n    }\n")),(0,r.kt)("p",null,"\u8fd9\u91cc",(0,r.kt)("inlineCode",{parentName:"p"},"ConditionData"),"\u5b9a\u4e49\u5982\u4e0b\u5305\u542b\u5c5e\u6027\u56db\u4e2aString\u7c7b\u578b\u7684\u5c5e\u6027\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"paramType, operator,paramName,paramValue")),(0,r.kt)("h4",{id:"paramtypeenum"},"ParamTypeEnum"),(0,r.kt)("p",null,"\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"paramType"),"\u5fc5\u987b\u4e3a\u7cfb\u7edf\u4e2d\u679a\u4e3e\u7c7b\u578b ",(0,r.kt)("inlineCode",{parentName:"p"},"ParamTypeEnum"),"\uff0c\u9ed8\u8ba4\u652f\u6301\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"paramType"),"\u6709\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"post, uri,query, host, ip,header, cookie,req_method\n")),(0,r.kt)("h4",{id:"operatorenum"},"OperatorEnum"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"operator")," \u5fc5\u987b\u4e3a\u679a\u4e3e\u7c7b\u578b ",(0,r.kt)("inlineCode",{parentName:"p"},"OperatorEnum")," \uff0c\u76ee\u524d\u652f\u6301\u7684\u64cd\u4f5c\u7b26\u6709\uff1a\uff08\u6ce8\u610f\uff0c\u4e25\u683c\u533a\u5206\u5927\u5c0f\u5199)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"   match, =,regex, >,<, contains, SpEL,  Groovy, TimeBefore,TimeAfter\n")),(0,r.kt)("p",null,"\u57fa\u4e8e\u4ee5\u4e0a\u7684\u89c4\u5219, plugin \u6a21\u7ec4\u5b9e\u73b0\u4e86\u5982\u4e0b8\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"PredicateJudge")," \u5b9e\u73b0\u7c7b\uff0c\u5206\u522b\u5b9e\u73b0\u4e0a\u8ff0operator\u7684\u903b\u8f91\u5339\u914d\u89c4\u5219."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Implementation class"),(0,r.kt)("th",{parentName:"tr",align:null},"Rule denotes \u89c4\u5219\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"corespondece operator"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ContainsPredicateJudge")),(0,r.kt)("td",{parentName:"tr",align:null},'\u5305\u542b\u5173\u7cfb "contains"\uff0c \u5b9e\u9645\u7ed3\u679c\uff0c\u9700\u8981\u5305\u542b\u6240\u5b9a\u89c4\u5219\u7684\u503c'),(0,r.kt)("td",{parentName:"tr",align:null},"contains")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EqualsPredicateJudge")),(0,r.kt)("td",{parentName:"tr",align:null},'\u76f8\u7b49"="\uff0c'),(0,r.kt)("td",{parentName:"tr",align:null},"=")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MatchPredicateJudge")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8eURI \u8def\u5f84\u5339\u914d\u7684\u5904\u7406"),(0,r.kt)("td",{parentName:"tr",align:null},"match")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TimerAfterPredicateJudge")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524dlocal\u65f6\u95f4\u662f\u5426\u665a\u4e8e\u8bbe\u5b9a\u7684\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"TimeAfter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TimerBeforePredicateJudge")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524dlocal\u65f6\u95f4\u662f\u5426\u65e9\u4e8e\u8bbe\u5b9a\u7684\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"TimeBefore")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GroovyPredicateJudge")),(0,r.kt)("td",{parentName:"tr",align:null},"Groovy,\u8bbe\u5b9aParamName\u7684\u503c\uff0c\u4e0e\u8bbe\u5b9aParamValue\u76f8\u540c"),(0,r.kt)("td",{parentName:"tr",align:null},"Groovy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RegexPredicateJudge")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u8d44\u6599"),(0,r.kt)("td",{parentName:"tr",align:null},"regex")))),(0,r.kt)("h3",{id:"\u8c03\u7528\u65b9\u6cd5"},"\u8c03\u7528\u65b9\u6cd5"),(0,r.kt)("p",null,"\u5f53\u8981\u505a\u4e00\u7ec4\u53c2\u6570\u7684\u89e3\u6790\u65f6\uff0c\u53ea\u9700\u8981\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"PredicateJudgeFactory"),"\u7684judge\u65b9\u6cd5\u5373\u53ef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"PredicateJudgeFactory.judge(final ConditionData conditionData, final String realData);\n")),(0,r.kt)("h3",{id:"spi\u914d\u7f6e\u6587\u4ef6"},(0,r.kt)("inlineCode",{parentName:"h3"},"SPI"),"\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("p",null,"\u8fd9\u4e9b",(0,r.kt)("inlineCode",{parentName:"p"},"PredicateJudge"),"\u5b9e\u73b0\u7c7b\u5728  ",(0,r.kt)("inlineCode",{parentName:"p"},"SHENYU_DIRECTORY")," \u4e2d\u7684config\u6587\u4ef6\u4e2d\u505a\u4e86\u914d\u7f6e\uff0c\u5728\u542f\u52a8\u65f6\u4f1a\u52a0\u52a0\u8f7d\u5e76cache\u5230\u5185\u5b58\u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PredicateJudge"),"\u6587\u4ef6\u7684\u5185\u5bb9\u5982\u4e0b\uff0c\u4e3akey=class\u5f62\u5f0f\uff0c\u5de6\u8fb9\u7684operator\u8981\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"ParamEnum"),"\u4e2d\u7684\u5b9a\u4e49\u4e00\u81f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"equals=org.apache.shenyu.plugin.base.condition.judge.EqualsPredicateJudge\n\ncontains=org.apache.shenyu.plugin.base.condition.judge.ContainsPredicateJudge\nGroovy=org.apache.shenyu.plugin.base.condition.judge.GroovyPredicateJudge\nmatch=org.apache.shenyu.plugin.base.condition.judge.MatchPredicateJudge\nregex=org.apache.shenyu.plugin.base.condition.judge.RegexPredicateJudge\nSpEL=org.apache.shenyu.plugin.base.condition.judge.SpELPredicateJudge\nTimeAfter=org.apache.shenyu.plugin.base.condition.judge.TimerAfterPredicateJudge\nTimeBefore=org.apache.shenyu.plugin.base.condition.judge.TimerBeforePredicateJudge\n")),(0,r.kt)("h2",{id:"predicatejudge-spi\u5728\u7f51\u5173plugin\u4e2d\u7684\u4f7f\u7528"},"PredicateJudge ",(0,r.kt)("inlineCode",{parentName:"h2"},"SPI"),"\u5728\u7f51\u5173Plugin\u4e2d\u7684\u4f7f\u7528"),(0,r.kt)("p",null,"\u7f51\u5173\u7cfb\u7edf\u4e2d\uff0c\u5927\u90e8\u5206\u7684Plugin \u90fd\u7ee7\u627f\u81ea",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractShenyuPlugin"),"\uff0c\u8fd9\u4e2a\u62bd\u8c61\u7c7b\u4e2d\uff0c\u5728\u505a\u9009\u62e9\u548c\u89c4\u5219\u89e3\u6790\u65f6\uff0c\u8c03\u7528\u4e86\u4e0a\u8ff0",(0,r.kt)("inlineCode",{parentName:"p"},"SPI"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"MatchStrategy"),"\uff0c\u7ee7\u800c\u5728\u7b56\u7565\u5224\u65ad\u65f6\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"PredicateJudge")," \u7684\u5404\u4e2a\u65ad\u8a00\u7c7b\u6765\u5904\u7406\u3002"),(0,r.kt)("p",null,"Plugin\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"SPI")," \u7684\u7c7b\u56fe\u5982\u4e0b:"),(0,r.kt)("p",null,"Fig 3- class diagram of plugins with PredicateJudge and ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchStrategy")," ",(0,r.kt)("inlineCode",{parentName:"p"},"SPI")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"plugin-SPI-class-diagram",src:a(37554).Z})),(0,r.kt)("p",null,"\u4ece\u5ba2\u6237\u7aef\u53d1\u6765\u7684\u8bf7\u6c42\uff0c\u5728\u7cfb\u7edf\u4e2d\u8c03\u7528\u89c4\u5219\u90e8\u5206\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"SPI"),"\u7684\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,"Fig 4- flow chart for Shenyu gateway filter  with parameter processing"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SPI-flow-diagram",src:a(55138).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u542f\u52a8\u65f6\uff0c\u4f1a\u52a0\u8f7d\u76ee\u5f55\u4e0b\u914d\u7f6e\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"SPI"),"\u8d44\u6599\u5230\u5185\u5b58\u4e2d"),(0,r.kt)("li",{parentName:"ul"},"\u5f53client\u6709\u65b0\u7684\u8bf7\u6c42\u53d1\u5230Apache shenyu \u7f51\u5173\u7cfb\u7edf\u65f6\uff0c\u5728\u7f51\u5173\u5185\u90e8\uff0c\u4f1a\u8c03\u7528\u5bf9\u5e94\u7684plugin"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u5b9e\u9645\u8bf7\u6c42\u8d44\u6599\u505a\u89c4\u5219\u5339\u914d\u65f6\uff0c\u4f1a\u6839\u636e\u6240\u5305\u542b\u7684operator,\u8c03\u7528\u7684\u5bf9\u5e94\u7684PredicateJudge\u5b9e\u73b0\u7c7b")),(0,r.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,r.kt)("h3",{id:"predicatejudge--\u5224\u65ad\u7ed3\u679c\u4e3e\u4f8b"},"PredicateJudge  \u5224\u65ad\u7ed3\u679c\u4e3e\u4f8b"),(0,r.kt)("h4",{id:"containspredicatejudge---contains-rule"},'ContainsPredicateJudge- " contains\u201c rule'),(0,r.kt)("p",null,' \u4e3e\u4f8b\uff1a\u7ed9\u5b9a\u4e00\u7ec4\u53c2\u6570\uff08ConditionData \uff09\uff0c paramType="uri", paramValue \u662f "/http/**"'),(0,r.kt)("p",null,"\u5f53\u5e94\u7528 ContainsPredicateJudge\u5305\u542b\u5173\u7cfb\u65f6\uff0c\u5224\u65ad\u7ed3\u679c\u5982\u4e0b\u8868\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},'ConditionData  (operator="contains")'),(0,r.kt)("th",{parentName:"tr",align:null},"real data"),(0,r.kt)("th",{parentName:"tr",align:null},"judge result"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'paramType="uri",    "/http/**"'),(0,r.kt)("td",{parentName:"tr",align:null},'"/http/**/test"'),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'"/test/http/**/other"'),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'"/http1/**"'),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("p",null,"\u5176\u4ed6\u7684\u51e0\u4e2aPredicateJudge\u7684\u5177\u4f53\u529f\u80fd\u53ef\u53c2\u8003\u5176\u4ee3\u7801\u548c\u6d4b\u8bd5\u7c7b."))}u.isMDXComponent=!0},55138:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/SPI-flow-diagram-590f2cd298ae7655330a62a2010b006e.png"},37554:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/plugin-SPI-class-diagram-fa432591b833ff178cb662ce352f5b23.png"},34751:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/predicate-class-diagram-67a93b8c3e49800b23fe717c22027c54.png"},73454:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACeCAYAAABuIfz7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAABX0SURBVHhe7Z39kxXVmcf5l1L70/y2STbRaLTKJEQoeTFBBtYkG8iS2ggoiChCcBCFlEQriElF0RWoiplaYGCDMRiRXQEtglNmABdKN1izI+iaicBJP6fP6T4vz+nue29f7pnu78c65b3d5637nudzTx/udM8SAAAQMZAUACBqICkAQNRAUgCAqBmYpM5f/FCcfu+slcbPvi8uf/KpygEAAAOU1KvHTog9+3/npX0HjkhZge4ZHZ4lZg2Pqnc3hkG0GRvyHAyNiHH1HtQDK6kXXnhB7N69W0xMTKgtNpOTk2LPnj0yH6VuCElKpzN/Pqdygk6BpAbBuBgZgqT6ASspElRIVK6g+iWpKonqAD6QFGgSrKRITJyoXEG98cYbMnUDJNU/ICnQJIJrUq6oTp065Qnq+vXrMnVD3yU1PiKGZiWBYyQ3hmRgJdPz0ZGhNI85VR8dtsoOjYym0/nCQFRT/qzcsDBz6/bG3b55dRbXkzIqhs06jL5rYYzr4wrV4faj9FLFbtPsdj1tquMuqCc7h+q9Rm9/V/VxaMTOESqXU3JsVLbkcytvA3RD4cK5KSozaUH1giup3xx+TZy78IH4+Mon8v+vHP6DtZ9LQUkpwVhjSA0wc/DKQcUMNh0g3kBl8pqMjwyLvHp/jSKrwxzIeuAb9ZbVo4/PCsSknsSjEt1Ovl8FoFfHUHE7Fn7wj474x9Zbm+o9V48+P14dRJonzeL3k5D96/HYrPLM51bcBuiWQkkRrqjqEBThSuri/15Se1IufvgXaz+XeEnxg5RI5eN8K3vf9qHyKoAKJOUhA6qsPb9fHlY95f3ggsVuI63Dq0IGnisAhQrKULP1tKmOrUI91udjnZ8uJFXl2LL6c9jxBEnVTqmkCC2qugRFuJL6/OpVtSfl88+vWvu5xEqqaMA538LsoAqWL5cDkQ5oM1UYxMzsIFhPSUARsqyTwQooVYddf574utXxUx7mGOppkz/Hrgzk+6wPrrS6mUlVOLYKn1txG6BbKkmqH7iSmpz6WO1Joffmfi7FJak0OMxgStvL31cb7CX11CipojqCmLIxjqWeNqtJKq1LnS/ztaQbSSmKjq30c6vYBuiYaCQ19oc3xZVP/1/uo//Te3M/l1hJBQYp4Q52flCFyit5hKLMGbAE254ZbAqrH6X1hI9PI+srDPTyOkqR/cylU0+bFSWl8lFdcp/1GfJ18J91AO7Yyj435j2oh2gkpRMtoHPbucRLSg9q51vbGXhEaFClg9IWRbotSVkFjrTc+rNv5Xxw+3UkuOUq1BM6Pv1etmPt1GVK6qC2sg3O8SX7hu0TkpR3ZhE9t1lVUgnU/lByzEl+J3vaFzO/Oqf5Z93FsZn5CVWnvclsA9RFdJLqJIUkJdEDM0u2dIiiQZUNTJWGR90A8gNKB6FMVK/sQx4sur3sJw9Z3SqDoqweiXt8RiWyHadSLtCtdihZ58I/PvucMBLvQ5sEV0/SYioabzuh6tFtJPXpc5+21cWxVfjc7DZAXTRXUrXDB1AnYBDXSe+fR1XwuQ2WgUlq6vIn4tLk//WUqI4bhrrs6iUmMNhrRH4e/uy4H+BzGywDk1TM0OWFvcCrLi16HKgY7PUhz+UNmEUR+NwGCyQVQA5MY/2hjoDAYO+dbE3rBp5HfG6DBZICAEQNJAUAiBpICgAQNZAUACBqICkAQNRAUgCAqIGkAABRA0kBAKKmdZL627VpcXbqjDh64aA4dH6fTPSattE+AEBctEZS15P/3rn0pnj+9Hax6+0RNtE+ykN5AQBx0ApJTV/9q9g/8RIrJi5RXirTVCbunyWemjsiJtV7AGKm8ZKiWVEngtKJyhTNqCZ3Dokd/zDLS2NHVIZoGRfH5/ZPUjP3vIBYabyk6PKNk1CVRGVDUDD2FuijYuwLzQteeV6+MCz4B/TXQTPPGwjTaEnRQnhoDWrJ2rvEwhXflIlec3mobGgxHZLigaRA3TRaUmen3mXlQ2nL/gfEvGV3yESvuTyUqA6OIknRPv8SJw2up+4fzfab6aWdxo1Azo6Il5K8ep/djrpcc+rxxZC2p/ebfWHXpJw23TJV25XnpVBSaT2h8il233VfOz1vlFyZ6WOfUHXR65OBNTqs3cVBoyX1+sUxVjw63bt+gUzcPp2oDg4ZjAUD2B7geYDnBGYER4aTwB0Sx8+q994aUh7keYDmAjTfmwE8sTPvqxd8SZteQKuAz+uo0m65pCZ3DhccW4Lqiyuf41nfwuet/BjSY6d81mfhnXMi0A644TRaUofO7WPFo1MVSVEdHNy3uh2cuSj4wOWCIA1aLzBksOkgYgI7wWpDBWcowGxJ5f10sftdoV31vvi8OEhBOG1YMnfhzlvVY1DH7vUnbdcqb/ULDBJIqgdJuQHroWThf0sTTLCp/G6Q65Tm5QOZEwqV4fpoSapIaNYMo0q7/nsOPZvRKctfIteU8HkrPwZX0Dn258lICwwMXO6VSKrbyz1Jl5IqDtJqspCo+lxZDU5S6TFb+80ZS6Xj74+k0jpUPvM1GDitXTh//MCabOGcXnN5KHWzcJ6SfxvzeZlgU9uKv8E7kJQmCVQSlW7LDtRwm3adNUjKEQZh569y/J2dN7c/QUmVfl5gUDRaUoP8CYIdDFyA84FF9ZpCkdA3e1a2giyS/GNmvSWzCbZNR2x1ScqqU82A3PJcX/L3HZw37xiKJJVA52lu0lZynFY9YKA0WlJEP3/MSQHgJgpiGQju5YIOSDPIVRBRMoPOrdsOqmqyoD5k5Z2+sIFq9IUrU4ukEsxjk30gMbj53b44bYbOW/kxlEhKCbCo/+DG03hJ9evPYkAT4UUMBkvjJUXgD4xBJbBgHiWtkBRBsyK6fAutUVGifZQHM6h2Ii8FMYuKjtZISkML4bjpHTDR62ThtSowSFonKQDAzAKSAgBEDSQFAIgaSAoAEDWQFAAgaiApAEDUQFIAgKhpvKQuf/KpOHz0uNj18m/Fq8feUlsBADOFRkvqg798JJ7bMyp+/vw+mXa/clBMX7su/jQ1LQ5cuCL2nr8sE72mbbQPABAXjZUUzaBMQVHad/SE2HZ6Umx++yM20b5jlz7DH8UAEBGNlRRd4pmCembvfvHYiQ9ZObnpxYmPxWdXr6mamkfx7UpmMriLQRNprKR2vZzPop7Zs19s+a//EVv++OeORFU0ozLvi2Sm+G+WpgK5T5Iqu59Uf4GkmkhjJfXqsRNi9ytj8hKPxESC+vmLvxFPHvpvVkpcoku/EDIYewp07ja4Mx9ICtRNoxfOaSFcr0GRqEhQO/79P+Tr5b/eLxasf0LMXrFWfGfTDrHm8DuepKhsaDEdkuKBpEDdNFpSZ6amPfE89tYHYtFDj4ub5i8Wdz/6M7HkyV+KOSsfEbct/ZHYyFwKUh0cRZKiff6ln7o1bRJAer+ZrNvgqlsN6312O3kgmvX4Ykjb0/vNvrBrUk6bbpmq7crzUiap0raItL1QOxLvNsMjvKQKz2d+PsynGnf/5QPqptGSOnjxiiedZb8aFTcvXCLWH33P2r4pkZf5Xieqg0MGY8FgtkXAfcMHZlLynt/m3SFVWacuCqZcbLkAzfem+GJ5gnG1tqieak86Nuuh46Jt1nkuPZ+BciAaGi2pvecue9KZ/+AWOYNyt4cS1cFhziZ0soMzFwUfuJyk0gDyxCWDWAcaE7AJVhsq6L16FLakfKFp7H5XaJd5b1O1LQYpG70/VI/qYyabKudTnY+itsFAaaekNmz3todSkaTcgPVQsuCeWsJKSuV35adTmtcNxBROKFSG66MlqSKhWbOQKu2WyKZyWyl6hqNTVm+wHqePlc6nK20QG+283FswLNb9ftzavmbspPVep24v9yQqSDqVFBvEGdVkITGC1Oxr/JJKz41VjzmTCtbDS6r4fEJSsdO6hfPNpy6JOas2iJvm3SNoRjW8dZf4xvLV4ub5i8WGY+97+btZOE9JAya73PPyMpIKXsaYdCApTRLg4ZlDuE27zhokVbUtZlZl1xuqJ92e97HK+YSkYqfRkjJ/gmClRFQ0o5q3dkTMue9hsXjrs+Kh1+yZFaVefoJgD3wuwPkAonpNoUhoRpCVrSCLJH+UTzBOqNSW+17NiMx65TE4IqNtVM7sI9uedT4hqdhptKQI+kGmK5+qqezHnDT43UQBwgVQFmhmkKtgpGTKyq3bDqBqstABK8szwewFpdEXrkwnkjLryeoLHLfc57Vl1yP7mpRx5WceI6WxI+E+mvncY4ek4qbxkqJ5EP2JCyeholT2ZzEAgBtD4yVF0B8LdyKqpv+BMQAziVZIiqBZEV2+sWtUKtE+3KoFgLhojaQ0tBCOm94BMHNonaQAADMLSAoAEDWQFAAgaiApAEDUQFIAgKiBpAAAUQNJAQCiBpICAERN6yT1t2vT4uzUGXH0wkFx6Pw+meg1baN9AIC4aI2krif/vXPpTfH86e1i19sjbKJ9lIfyAgDioBWSmr76V7F/4iVWTFyivFSmn+D2IABUo/GSollRJ4LSicqUz6j4+xeVo8pBUgCU0nhJ0eWbKZ9nT42INc8tEwtWfEvcftc/iVvnfEl8e+nXxfKRe8TTxx618lLZYrqVFACgKo2WFC2Em2tQO08+JhatvFPMufc28dDuFeIXb22W27f9bp249+GFYvbiW8VTr2/I8lPZ4sV0SAqAftNoSZ2dejcTDqVVz3xfzF5yq3jmzY3JrGmjWL3zX8SKbUvEfTvuFTuOPiLuWT1X/GDj3VYZqiNMQFLqVsHmLWute2wn2GtSeT3WbXML7hUOQFtotKRevzhmCeeuZXdIUe1441HxzUVfE8s2f1ds2PMTccudXxI/fWWlfE3bzTJURxhGUu5DBAglLfM+5pykqFyex33yCQDtpNGSOnRunyWc2+d/VWz+7Sqx5rkfijv/+Ta5jS4Bb/n2F8XI/gfE4wfWSGGZZaiOMK6kwo9Qch9YwM6knIV0twwAbaRdkpr3FSmjnySXdwtXfEtu2/bqevG12f8onvjPdWLd8//qzaQ6kpSaMbmXdhL5tJP8qSihyz0TSAqAll3uzf3e7eL+XT+UM6avz/2yvPRbtGqOuH3BV8XSdfPE7OFbxY+fXGKVqXK5l82cICkAaqdVC+ckoHnL75A/Q6AZ1Y+3LxWPvPxvciF9ZSIs+hc/2meWKV44Ty/vcin1eLkHSQHg0WhJuT9BePr4JrkWtfj+uWLr4QflNlqTeiJ5TQvnOp9OZT9B4CRC27yFc2YxHZICoBqNlhTh/pjz6WTWtOyxRfIHnLQWdcudX5SXgat/8QMrHyX+x5ypUNKfCPhP3pUoKenE5YOkAKhG4yXV3z+LAQD0m8ZLiojxD4wBANVohaQImhXR5Zu5RuUm2kd5MIMCIB5aIykNLYTjpncAzBxaJykAwMwCkgIARA0kBQCIGkgKABA1kBQAIGogKQBA1EBSAICogaQAAFEDSQEAoqZ1ksIvzgGYWbRGUvjbPQBmJq2QFO6CAMDMpfGSollRJ4LSicqUzqjcm9tlN7FL0XfpLMpj3/wOAODSeEnR5Zspn7oes87eNTORlnl/c5nHEpC6A6exDZICoJhGS4oWws01qPoesx5+4IKJL6kE54kykBQAxTRaUv17zHq1pwuzknKeMANJAVBMoyXVz8esk1zkGlOBqMIzqdDz9wAALo2WVL8fs04SyhbEGVn5kvJnYJAUAMW0S1K1P2Y9JZtVOY+uMiWmk7uOBUkBUEyrLvfqf8y6ifqXO+Nf/Pg1KRtICoBiWrVwXv9j1h2ODENSANRMoyXl/gShvses09qS+1Ri/ynEkBQAvdNoSRHujzl7f8y6Jl0EL1pvgqQA6J3GS6qvfxYDAOg7jZcUgT8wBmDm0gpJETQross3c43KTbSP8mAGBUA8tEZSGloIx03vAJg5tE5SAICZBSQFAIgaSAoAEDWQFAAgaiApAEDUQFIAgKiBpAAAUQNJAQCipnWSmr52XfxpalocuHBF7D1/WSZ6TdtoHwAgLlojKdLPsUufiW2nJ8Xmtz9iE+2jPFAVAPHQCkl9dvWaeHHiY1ZMXKK8VOZG0aTbteDWM6BuGi8pmhV1IiidqEzpjKrkCcbV8B8Yyt0bnZJ+DFa8+MdSJzP3vIBeaLyk6PKNk1CVRGVDyBvalTzBuFuq3CyvGPvZfk2BPee10szzNtNptKRoITy0BrX81/vFgvVPiNkr1orvbNoh1hx+x8tDZakOn3Qw1yEkDkiKB5JqJ42W1JmpaU88m09dEnc98FNx0/zF4u5HfyaWPPlLMWflI+K2pT8SG0986OWnOnzSwVz2BONsfUY9Wl1fnrjl3HWcIknRPv8SJ++P3m8mS6ZuX6x28vu0m/X4Ykjb0/vNvrBrUk6bbpmq7crzUiiptJ5Q+RS777qvnZ43Sq7M9LFPqLro9cnAGh3W7qrTaEkdvHjFk86yX42KmxcuEeuPvmdt3/TWB9Z7nagODhpkciAWiCrLYw5GNdjNcu6AlcFYMIDt/HmA5wRmBPJpNuYDJNw1pDzI8wB1hZy+NwN4YmfeVy/41Lqd1Rd1DvI6qrRbLqnJncMFx5ag+uLK53jWt/B5Kz8G4/M2PwvvnBOBdgBLoyW199xlTzrzH9wiZ1Du9lCiOkJY3/qWJFJkwDJB5QYbJyldb1a/VU8uCj5wuSBIg9YLDBlsOoiYwE6w2lDBGQow+1jyfrrY/a7QrnpffF4cpCCcNpjPKYc7b1WPIfR5p+1a5a1+gTLaKakN273toVQkKU32Dep8Y7ryyXC+XTlJseVMlCz8b2mCCTaV3w1yndK8fCBzQqEyXB+tYykSmnUOqrTrv+fQn4VOWf4SuaaEz1v5MYQ/b/vzZKQFCmnn5d6CYbHu9+PW9jVjJ633OoUu93xUoBlBFKOkioO0miwkqj5XVoOTVHrM1n7Zhnpf6fj7I6m0DpXPfA0q0cqF8zmrNoib5t0jaEY1vHWX+Mby1eLm+YvFhmPve/n5hfMAZlAkyEHLBJU7mDuXVP5tzOdlgk1tK/4G70BSmuSYSVS6LftYwm3addYgKUcYhJ2/yvF3dt7c/gQlVfp5gSIaLangTxASUdGMat7aETHnvofF4q3Piodes2dWlIp/guB+G/qBRoNWzjTM4HOCmuhUUnZ+LsD5wKJ63bblN3tWtoIskvxjZr0lswm2Te8c1CMpq041A3LLc33J33dw3ip8jhZ0nuYmbSXHadUDSmm0pIh+/ZhTD2gaqDq5g1sPWv1P0jq5gzQU2G6iIJZ5XUHqgDSDXAURJbNfbt12UFWTBfUhK+/0hQ1Uoy9cmVoklWAem+wDicHN7/bFaTN03sqPoURSarwU9R/wNF5Sff2zmBKKBy1oF7yIQTmNlxQxqD8whqRABhbMu6YVkiJoVkSXb6E/k6FE+yhPrzMoDSQFNHIsYBbVFa2RlIYWwm/UTe8gKaDXyTAOuqd1kgIAzCwgKQBA1EBSAICogaQAAFEDSQEAogaSAgBEjBB/B3o1C04w+m2JAAAAAElFTkSuQmCC"}}]);