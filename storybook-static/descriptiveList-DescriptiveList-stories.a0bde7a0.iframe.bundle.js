/*! For license information please see descriptiveList-DescriptiveList-stories.a0bde7a0.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_arthur_docs=self.webpackChunk_arthur_docs||[]).push([[660],{"./stories/descriptiveList/DescriptiveList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DescriptiveList_stories});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const variantStyles={default:styled_components_browser_esm.iv``,striped:styled_components_browser_esm.iv`
    & dt:nth-of-type(odd),
    dd:nth-of-type(odd) {
      background-color: ${props=>props.theme.token.color.gray[5]};
    }
  `},StyledRoot=styled_components_browser_esm.zo.dl`
  color: ${props=>props.theme.token.color.gray[75]};
  font-size: ${props=>props.theme.token.size.font.medium};
  margin: 0px;
  overflow: visible;
  padding: 0px;

  & dt {
    box-sizing: border-box;
    font-weight: ${props=>props.theme.token.weight.font.medium};
    flex: 0 0 40%;
    line-height: 1;
    padding: 2px 0;
    padding-left: ${props=>props.theme.token.size.spacing["small-1x"]};
    padding-right: ${props=>props.theme.token.size.spacing["small-1x"]};
  }

  & dd {
    box-sizing: border-box;
    flex: 0 0 60%;
    font-weight: ${props=>props.theme.token.weight.font.regular};
    line-height: 1;
    margin-left: auto;
    padding: 2px 0;
    padding-left: ${props=>props.theme.token.size.spacing["small-1x"]};
    padding-right: ${props=>props.theme.token.size.spacing["small-1x"]};
    text-align: left;
  }

  ${props=>variantStyles[props.variant]}

  @media (min-width: ${props=>props.theme.token.size.breakpoint["small-1x"]}) {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;

    & dd {
      padding-left: ${props=>props.theme.token.size.spacing.medium};
    }
  }
`,DescriptiveList=(0,react.forwardRef)(((props,forwardedRef)=>{const{className,items,variant="default",...rest}=props,classes=classnames_default()(className,"arthur-descriptivelist",`arthur-descriptivelist--variant-${variant}`);return(0,jsx_runtime.jsx)(StyledRoot,{className:classes,ref:forwardedRef,variant,...rest,children:items.map(((item,index)=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("dt",{className:"arthur-descriptivelist-item-label",children:item.label}),(0,jsx_runtime.jsx)("dd",{className:"arthur-descriptivelist-item-value",children:item.value})]},index)))})})),DescriptiveList_DescriptiveList=DescriptiveList;DescriptiveList.displayName="DescriptiveList";try{DescriptiveList.displayName="DescriptiveList",DescriptiveList.__docgenInfo={description:"",displayName:"DescriptiveList",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DescriptiveListItem[]"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"striped"'}]}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: HTMLUListElement) => void"},{value:"RefObject<HTMLUListElement>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/DescriptiveList/DescriptiveList.tsx#DescriptiveList"]={docgenInfo:DescriptiveList.__docgenInfo,name:"DescriptiveList",path:"../../packages/arthur-ui/src/DescriptiveList/DescriptiveList.tsx#DescriptiveList"})}catch(__react_docgen_typescript_loader_error){}const DescriptiveList_stories={title:"Components/DescriptiveList",component:DescriptiveList_DescriptiveList,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Default={args:{variant:"default",items:[{label:"Item One",value:1},{label:"Item Two",value:2},{label:"Item Three",value:3},{label:"Item Four",value:4}]}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'default',\n    items: [{\n      label: 'Item One',\n      value: 1\n    }, {\n      label: 'Item Two',\n      value: 2\n    }, {\n      label: 'Item Three',\n      value: 3\n    }, {\n      label: 'Item Four',\n      value: 4\n    }]\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);
//# sourceMappingURL=descriptiveList-DescriptiveList-stories.a0bde7a0.iframe.bundle.js.map