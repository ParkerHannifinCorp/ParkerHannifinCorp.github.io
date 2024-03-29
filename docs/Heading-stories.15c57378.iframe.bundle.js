/*! For license information please see Heading-stories.15c57378.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_arthur_docs=self.webpackChunk_arthur_docs||[]).push([[853],{"./stories/Heading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Heading_stories});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);let HeadingSizesEnum=function(HeadingSizesEnum){return HeadingSizesEnum.small="small",HeadingSizesEnum.medium="medium",HeadingSizesEnum.large="large",HeadingSizesEnum}({});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const sizeStyles={small:styled_components_browser_esm.iv`
        font-size: ${props=>props.theme.token.size.font["large-2x"]};
        padding: ${props=>props.theme.token.size.spacing.medium}
            ${props=>props.theme.token.size.spacing["large-2x"]};
    `,medium:styled_components_browser_esm.iv`
        font-size: ${props=>props.theme.token.size.font["large-3x"]};
        padding: ${props=>props.theme.token.size.spacing.medium}
            ${props=>props.theme.token.size.spacing["large-2x"]};
    `,large:styled_components_browser_esm.iv`
        font-size: ${props=>props.theme.token.size.font["large-3x"]};
        padding: ${props=>props.theme.token.size.spacing.large}
            ${props=>props.theme.token.size.spacing["large-2x"]};
    `},StyledRoot=styled_components_browser_esm.ZP.h1`
    margin: 0px;
    box-sizing: border-box;

    ${props=>sizeStyles[props.size]}
`,Heading=(0,react.forwardRef)(((props,forwardedRef)=>{const{children,className,size=HeadingSizesEnum.medium,...rest}=props,classes=classnames_default()(className,"arthur-heading",`arthur-heading--size-${size}`);return(0,jsx_runtime.jsx)(StyledRoot,{className:classes,ref:forwardedRef,size,...rest,children})})),Heading_Heading=Heading;Heading.displayName="Heading";try{Heading.displayName="Heading",Heading.__docgenInfo={description:"",displayName:"Heading",props:{size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: HTMLHeadingElement) => void"},{value:"RefObject<HTMLHeadingElement>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Heading/Heading.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"../../packages/arthur-ui/src/Heading/Heading.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}const Heading_stories={title:"Components/Heading",component:Heading_Heading,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{options:Object.keys(HeadingSizesEnum),control:{type:"select"}}}},Default={args:{size:HeadingSizesEnum.medium,children:"Heading"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: HeadingSizesEnum.medium,\n    children: 'Heading'\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);
//# sourceMappingURL=Heading-stories.15c57378.iframe.bundle.js.map