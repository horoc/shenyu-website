"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[86584],{3905:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>g});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),u=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},s=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(a),g=r,c=d["".concat(l,".").concat(g)]||d[g]||m[g]||o;return a?t.createElement(c,p(p({ref:n},s),{},{components:a})):t.createElement(c,p({ref:n},s))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var u=2;u<o;u++)p[u]=a[u];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},34648:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=a(87462),r=(a(67294),a(3905));const o={title:"Param-Mapping\u63d2\u4ef6\u6e90\u7801\u5206\u6790",author:"Kunshuai Zhu",author_title:"Apache ShenYu Contributor",author_url:"https://github.com/JooKS-me",author_image_url:"https://avatars1.githubusercontent.com/u/62384022?v=4",tags:["Param-Mapping","Apache ShenYu"]},p=void 0,i={permalink:"/zh/blog/Plugin-SourceCode-Analysis-Param-Mapping-Plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-blog/Plugin-SourceCode-Analysis-Param-Mapping-Plugin.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/Plugin-SourceCode-Analysis-Param-Mapping-Plugin.md",title:"Param-Mapping\u63d2\u4ef6\u6e90\u7801\u5206\u6790",description:"\u5f00\u59cb\u524d\uff0c\u53ef\u4ee5\u53c2\u8003 \u8fd9\u7bc7\u6587\u7ae0 \u8fd0\u884cshenyu\u7f51\u5173",date:"2022-08-17T07:56:07.506Z",formattedDate:"2022\u5e748\u670817\u65e5",tags:[{label:"Param-Mapping",permalink:"/zh/blog/tags/param-mapping"},{label:"Apache ShenYu",permalink:"/zh/blog/tags/apache-shen-yu"}],readingTime:5.59,truncated:!1,prevItem:{title:"Divide\u63d2\u4ef6\u6e90\u7801\u5206\u6790",permalink:"/zh/blog/Plugin-SourceCode-Analysis-Divide-Plugin"},nextItem:{title:"Dubbo\u63d2\u4ef6\u6e90\u7801\u5206\u6790",permalink:"/zh/blog/Plugin-SourceCode-Analysis-Dubbo-Plugin"}},l=[{value:"\u6b63\u6587",id:"\u6b63\u6587",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],u={toc:l};function s(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5f00\u59cb\u524d\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"./Start-SourceCode-Analysis-Start-Demo"},"\u8fd9\u7bc7\u6587\u7ae0")," \u8fd0\u884cshenyu\u7f51\u5173")),(0,r.kt)("h3",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,r.kt)("p",null,"\u5148\u770b\u4e00\u4e0b\u8fd9\u4e2a\u63d2\u4ef6\u7684\u7ed3\u6784\uff0c\u5982\u4e0b\u56fe\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"param-mapping-structure",src:a(75678).Z})),(0,r.kt)("p",null,"\u731c\u6d4b\uff1ahandler\u662f\u7528\u6765\u505a\u6570\u636e\u540c\u6b65\u7684\uff1bstrategy\u4e2d\u6587\u610f\u601d\u662f\u7b56\u7565\uff0c\u53ef\u80fd\u662f\u5bf9\u5404\u79cd\u8bf7\u6c42\u4f53\u505a\u4e86\u9002\u914d\uff0c\u5e94\u8be5\u662f\u8fd9\u4e2a\u63d2\u4ef6\u7684\u91cd\u70b9\uff1b",(0,r.kt)("inlineCode",{parentName:"p"},"ParamMappingPlugin")," \u5e94\u8be5\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"ShenyuPlugin")," \u7684\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u770b\u4e00\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"ParamMappingPlugin")," \uff0c\u91cc\u9762\u4e3b\u8981\u662f\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"doExecute")," \u65b9\u6cd5\u7684\u91cd\u5199\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public Mono<Void> doExecute(final ServerWebExchange exchange, final ShenyuPluginChain chain, final SelectorData selector, final RuleData rule) {\n    ... // paramMappingHandle\u5224\u65ad\u662f\u5426\u4e3a\u7a7a\n    // \u6839\u636e\u9996\u90e8\u884c\u4e2d\u7684contentType\u786e\u5b9a\u8bf7\u6c42\u4f53\u7c7b\u578b\n    HttpHeaders headers = exchange.getRequest().getHeaders();\n    MediaType contentType = headers.getContentType();\n    // *\n    return match(contentType).apply(exchange, chain, paramMappingHandle);\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"match\u65b9\u6cd5\u662f\u6839\u636econtentType\u8fd4\u56de\u5bf9\u5e94\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Operator")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private Operator match(final MediaType mediaType) {\n    if (MediaType.APPLICATION_JSON.isCompatibleWith(mediaType)) {\n        return operatorMap.get(MediaType.APPLICATION_JSON.toString());\n    } else if (MediaType.APPLICATION_FORM_URLENCODED.isCompatibleWith(mediaType)) {\n        return operatorMap.get(MediaType.APPLICATION_FORM_URLENCODED.toString());\n    } else {\n        return operatorMap.get(Constants.DEFAULT);\n    }\n}\n")),(0,r.kt)("p",{parentName:"li"},"\u4ecematch\u65b9\u6cd5\u7684\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\uff0c\u76ee\u524d\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultOperator"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"FormDataOperator"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"JsonOperator"),"\u4e09\u79cd\uff0c\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"x-www-form-urlencoded")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," \u4e24\u79cd\u683c\u5f0f\u7684\u8bf7\u6c42\u4f53\u3002"))),(0,r.kt)("p",null,"\u90a3\u4e48\u6211\u4eec\u5c31\u6765\u770b\u4e00\u4e0b\u4e0a\u9762\u4e09\u79cdOperator\u7a76\u7adf\u662f\u600e\u4e48\u6837\u7684\u5427\u3002"),(0,r.kt)("h4",{id:"\u4e00defaultoperator"},"\u4e00\u3001DefaultOperator"),(0,r.kt)("p",null,"\u865a\u6643\u4e00\u67aa\uff0c\u5b83\u7684apply\u65b9\u6cd5\u53ea\u662f\u7ee7\u7eed\u6267\u884c\u63d2\u4ef6\u94fe\uff0c\u5e76\u6ca1\u6709\u5b9e\u8d28\u529f\u80fd\u3002\u5f53\u8bf7\u6c42\u4f53\u6ca1\u6709\u5339\u914d\u5230Operator\u65f6\uff0c\u5c31\u4f1a\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultOperator")," \u8df3\u8fc7\u3002"),(0,r.kt)("h4",{id:"\u4e8cformdataoperator"},"\u4e8c\u3001FormDataOperator"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u7c7b\u662f\u7528\u6765\u5904\u7406 ",(0,r.kt)("inlineCode",{parentName:"p"},"x-www-form-urlencoded")," \u683c\u5f0f\u7684\u8bf7\u6c42\u4f53\u7684\u3002"),(0,r.kt)("p",null,"\u4e3b\u8981\u662f\u770bapply\u65b9\u6cd5\uff0c\u4f46\u662f\u8fd9\u4e2aapply\u65b9\u6cd5\u957f\u5f97\u6709\u70b9\u5947\u602a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public Mono<Void> apply(final ServerWebExchange exchange, final ShenyuPluginChain shenyuPluginChain, final ParamMappingHandle paramMappingHandle) {\n    return exchange.getFormData()\n            .switchIfEmpty(Mono.defer(() -> Mono.just(new LinkedMultiValueMap<>())))\n            .flatMap(multiValueMap -> {\n                ...\n            });\n}\n")),(0,r.kt)("p",null,"\u7701\u7565\u53f7\u4e2d\u7684\u4ee3\u7801\u662f\u5bf9\u8bf7\u6c42\u4f53\u7684\u5904\u7406\uff0c\u5982\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u5224\u7a7a\nif (Objects.isNull(multiValueMap) || multiValueMap.isEmpty()) {\n    return shenyuPluginChain.execute(exchange);\n}\n// \u5c06form-data\u8f6c\u5316\u6210json\nString original = GsonUtils.getInstance().toJson(multiValueMap);\nLOG.info("get from data success data:{}", original);\n// *\u4fee\u6539\u8bf7\u6c42\u4f53*\nString modify = operation(original, paramMappingHandle);\nif (StringUtils.isEmpty(modify)) {\n    return shenyuPluginChain.execute(exchange);\n}\n...\n// \u5c06\u4fee\u6539\u540e\u7684json\uff0c\u8f6c\u6362\u6210LinkedMultiValueMap\u3002\u6ce8\u610f\u4e00\u4e0b\u8fd9\u4e00\u884c\uff0c\u540e\u9762\u4f1a\u63d0\u5230\uff01\nLinkedMultiValueMap<String, String> modifyMap = GsonUtils.getInstance().toLinkedMultiValueMap(modify);\n...\nfinal BodyInserter bodyInserter = BodyInserters.fromValue(modifyMap);\n...\n// \u4fee\u6539exchange\u4e2d\u7684\u8bf7\u6c42\u4f53\uff0c\u7136\u540e\u7ee7\u7eed\u6267\u884c\u63d2\u4ef6\u94fe\nreturn bodyInserter.insert(cachedBodyOutputMessage, new BodyInserterContext())\n        .then(Mono.defer(() -> shenyuPluginChain.execute(exchange.mutate()\n                .request(new ModifyServerHttpRequestDecorator(httpHeaders, exchange.getRequest(), cachedBodyOutputMessage))\n                .build())\n        )).onErrorResume((Function<Throwable, Mono<Void>>) throwable -> release(cachedBodyOutputMessage, throwable));\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"PS: \u7701\u7565\u7684\u90e8\u5206\u662f\u8bbe\u7f6e\u8bf7\u6c42\u5934\u7b49\u64cd\u4f5c\u3002")),(0,r.kt)("p",null,"\u4e0a\u9762\u6bd4\u8f83\u91cd\u8981\u7684\u5e94\u8be5\u662f\u6253\u661f\u7684\u4fee\u6539\u8bf7\u6c42\u4f53\uff0c\u4e5f\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"operation")," \u65b9\u6cd5\u7684\u8c03\u7528\u3002\u8fd9\u91cc\u56e0\u4e3a\u53c2\u6570\u7c7b\u578b\u7684\u539f\u56e0\uff0c\u4f1a\u5148\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Operator")," \u63a5\u53e3\u7684\u9ed8\u8ba4\u65b9\u6cd5\uff08\u800c\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"FormDataOperator")," \u91cd\u5199\u7684\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"default String operation(final String jsonValue, final ParamMappingHandle paramMappingHandle) {\n    DocumentContext context = JsonPath.parse(jsonValue);\n    // \u8c03\u7528\u91cd\u5199\u7684operation\u65b9\u6cd5\uff0c\u6dfb\u52a0addParameterKey\n    operation(context, paramMappingHandle);\n    // \u5bf9\u8bbe\u7f6e\u7684replacedParameterKey\u8fdb\u884c\u66ff\u6362\n    if (!CollectionUtils.isEmpty(paramMappingHandle.getReplaceParameterKeys())) {\n        paramMappingHandle.getReplaceParameterKeys().forEach(info -> {\n            context.renameKey(info.getPath(), info.getKey(), info.getValue());\n        });\n    }\n    // \u5bf9\u8bbe\u7f6e\u7684removeParameterKey\u8fdb\u884c\u5220\u9664\n    if (!CollectionUtils.isEmpty(paramMappingHandle.getRemoveParameterKeys())) {\n        paramMappingHandle.getRemoveParameterKeys().forEach(info -> {\n            context.delete(info);\n        });\n    }\n    return context.jsonString();\n}\n")),(0,r.kt)("p",null,"\u68b3\u7406\u4e0b\u6765\u53ef\u4ee5\u53d1\u73b0\uff0c\u8fd9\u91cc\u5f15\u5165\u7684json\u5de5\u5177",(0,r.kt)("a",{parentName:"p",href:"https://github.com/json-path/JsonPath"},"JsonPath"),"\u4f7f\u5f97\u8bf7\u6c42\u4f53\u7684\u52a0\u5de5\u53d8\u5f97\u7b80\u5355\u3001\u6e05\u6670\u5f88\u591a\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53e6\u5916\uff0c\u6211\u4eec\u53ef\u4ee5\u6ce8\u610f\u5230 ",(0,r.kt)("inlineCode",{parentName:"strong"},"FormDataOperator")," \u91cd\u5199\u4e86 ",(0,r.kt)("inlineCode",{parentName:"strong"},"operation(DocumentContext, ParamMappingHandle)")," \u65b9\u6cd5\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e3a\u4ec0\u4e48\u8981\u91cd\u5199\u5462\uff1f")," \u63a5\u53e3\u4e2d\u6709\u5bf9\u5e94\u5904\u7406addParameterKey\u7684\u9ed8\u8ba4\u65b9\u6cd5\u554a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Operator\u63a5\u53e3\u4e2d\u7684\u9ed8\u8ba4\u65b9\u6cd5\ndefault void operation(final DocumentContext context, final ParamMappingHandle paramMappingHandle) {\n    if (!CollectionUtils.isEmpty(paramMappingHandle.getAddParameterKeys())) {\n        paramMappingHandle.getAddParameterKeys().forEach(info -> {\n            context.put(info.getPath(), info.getKey(), info.getValue()); //\u4e0d\u540c\u4e4b\u5904\n        });\n    }\n}\n\n// FormDataOperator\u91cd\u5199\u7684\u65b9\u6cd5\n@Override\npublic void operation(final DocumentContext context, final ParamMappingHandle paramMappingHandle) {\n    if (!CollectionUtils.isEmpty(paramMappingHandle.getAddParameterKeys())) {\n        paramMappingHandle.getAddParameterKeys().forEach(info -> {\n            context.put(info.getPath(), info.getKey(), Arrays.asList(info.getValue()));\n        });\n    }\n}\n")),(0,r.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"FormDataOperator#apply")," \u4e2d\u6709\u8fd9\u4e48\u4e00\u884c\uff08\u524d\u9762\u6709\u63d0\u5230\uff09\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"LinkedMultiValueMap<String, String> modifyMap = GsonUtils.getInstance().toLinkedMultiValueMap(modify);")),(0,r.kt)("p",null,"\u8fd9\u4e00\u884c\u662f\u5c06\u4fee\u6539\u540e\u7684json\u8f6c\u6362\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"LinkedMultiValueMap"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"GsonUtils#toLinkedMultiValueMap")," \u5982\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public LinkedMultiValueMap<String, String> toLinkedMultiValueMap(final String json) {\n    return GSON.fromJson(json, new TypeToken<LinkedMultiValueMap<String, String>>() {\n    }.getType());\n}\n")),(0,r.kt)("p",null,"\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"LinkedMultiValueMap")," \u7c7b\u4e2d\u7684\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"targetMap")," \u5b9a\u4e49\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"private final Map<K, List<V>> targetMap")),(0,r.kt)("p",null,"\u56e0\u6b64\uff0cjson\u5b57\u7b26\u4e32\u4e2d\u7684value\u5fc5\u987b\u662f\u5217\u8868\u5f62\u5f0f\u7684\uff0c\u4e0d\u7136Gson\u5c31\u4f1a\u629b\u51fa\u8f6c\u6362\u9519\u8bef\u7684\u5f02\u5e38\uff0c\u8fd9\u4e5f\u5c31\u662f\u4e3a\u4ec0\u4e48 ",(0,r.kt)("inlineCode",{parentName:"p"},"FormDataOperator")," \u8981\u91cd\u5199operator\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u90a3\u4e48\u4e3a\u4ec0\u4e48\u8981\u7528 ",(0,r.kt)("inlineCode",{parentName:"strong"},"LinkedMultiValueMap")," \u5462\uff1f")),(0,r.kt)("p",null,"\u56de\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"FormDataOperator#apply")," \u65b9\u6cd5\u7684\u7b2c\u4e00\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"exchange.getFormData")," \u3002\u800cSpringMVC\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultServerWebExchange#getFormData")," \u7684\u8fd4\u56de\u503c\u7c7b\u578b\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Mono<MultiValueMap<String, String>>")," \uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"LinkedMultiValueMap")," \u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"MultiValueMap")," \u7684\u5b50\u7c7b\u3002\u5e76\u4e14\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"getFormData")," \u65b9\u6cd5\u5c31\u662f\u9488\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"x-www-form-urlencoded")," \u683c\u5f0f\u7684\u8bf7\u6c42\u4f53\u7684\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"param-mapping-getFormData",src:a(60425).Z})),(0,r.kt)("h4",{id:"\u4e09jsonoperator"},"\u4e09\u3001JsonOperator"),(0,r.kt)("p",null,"\u663e\u7136\uff0c\u8fd9\u4e2a\u7c7b\u662f\u7528\u6765\u5904\u7406Json\u683c\u5f0f\u7684\u8bf7\u6c42\u4f53\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public Mono<Void> apply(final ServerWebExchange exchange, final ShenyuPluginChain shenyuPluginChain, final ParamMappingHandle paramMappingHandle) {\n    ServerRequest serverRequest = ServerRequest.create(exchange, MESSAGE_READERS);\n    Mono<String> mono = serverRequest.bodyToMono(String.class).switchIfEmpty(Mono.defer(() -> Mono.just(""))).flatMap(originalBody -> {\n        LOG.info("get body data success data:{}", originalBody);\n        // \u8c03\u7528\u9ed8\u8ba4\u7684operation\u65b9\u6cd5\u4fee\u6539\u8bf7\u6c42\u4f53\n        String modify = operation(originalBody, paramMappingHandle);\n        return Mono.just(modify);\n    });\n    BodyInserter bodyInserter = BodyInserters.fromPublisher(mono, String.class);\n    ... //\u5904\u7406\u9996\u90e8\u884c\n    CachedBodyOutputMessage outputMessage = new CachedBodyOutputMessage(exchange, headers);\n    // \u4fee\u6539exchange\u4e2d\u7684\u8bf7\u6c42\u4f53\uff0c\u7136\u540e\u7ee7\u7eed\u6267\u884c\u63d2\u4ef6\u94fe\n    return bodyInserter.insert(outputMessage, new BodyInserterContext())\n            .then(Mono.defer(() -> {\n                ServerHttpRequestDecorator decorator = new ModifyServerHttpRequestDecorator(headers, exchange.getRequest(), outputMessage);\n                return shenyuPluginChain.execute(exchange.mutate().request(decorator).build());\n            })).onErrorResume((Function<Throwable, Mono<Void>>) throwable -> release(outputMessage, throwable));\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"JsonOperator")," \u7684\u5904\u7406\u6d41\u7a0b\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"FormDataOperator")," \u5927\u81f4\u7c7b\u4f3c\u3002"),(0,r.kt)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u6700\u540e\uff0c\u7528\u4e00\u5f20\u56fe\u6765\u7b80\u5355\u603b\u7ed3\u4e00\u4e0b\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"param-mapping-summary",src:a(24534).Z})))}s.isMDXComponent=!0},60425:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/param-mapping-getFormData-04b664908cd5f52d149eb1098d5648c9.png"},75678:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/param-mapping-structure-1d2b4243e835eeff74fc6ea114dcbee7.png"},24534:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/param-mapping-summary-490cf9ee499bf9efc03d0c963b39118c.jpg"}}]);