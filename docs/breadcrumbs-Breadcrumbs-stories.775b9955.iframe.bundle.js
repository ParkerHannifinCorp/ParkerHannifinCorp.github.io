/*! For license information please see breadcrumbs-Breadcrumbs-stories.775b9955.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_arthur_docs=self.webpackChunk_arthur_docs||[]).push([[504],{"./stories/breadcrumbs/Breadcrumbs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Breadcrumbs_stories});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);let BreadcrumbsSizeEnum=function(BreadcrumbsSizeEnum){return BreadcrumbsSizeEnum.small="small",BreadcrumbsSizeEnum.medium="medium",BreadcrumbsSizeEnum.large="large",BreadcrumbsSizeEnum}({}),BreadcrumbsVariantEnum=function(BreadcrumbsVariantEnum){return BreadcrumbsVariantEnum.default="default",BreadcrumbsVariantEnum.link="link",BreadcrumbsVariantEnum}({});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const sizeStyles={small:styled_components_browser_esm.iv`
    & .arthur-breadcrumbs-spacer {
      font-size: ${props=>props.theme.token.size.font.small};
      padding: 0px ${props=>props.theme.token.size.spacing["small-1x"]};
    }

    & .arthur-breadcrumbs-item {
      font-size: ${props=>props.theme.token.size.font.small};
    }
  `,medium:styled_components_browser_esm.iv`
    & .arthur-breadcrumbs-spacer {
      font-size: ${props=>props.theme.token.size.font.medium};
      padding: 0px ${props=>props.theme.token.size.spacing.small};
    }

    & .arthur-breadcrumbs-item {
      font-size: ${props=>props.theme.token.size.font.medium};
    }
  `,large:styled_components_browser_esm.iv`
    & .arthur-breadcrumbs-spacer {
      font-size: ${props=>props.theme.token.size.font.medium};
      padding: 0px ${props=>props.theme.token.size.spacing.small};
    }

    & .arthur-breadcrumbs-item {
      font-size: ${props=>props.theme.token.size.font.medium};
    }
  `},variantStyles={default:styled_components_browser_esm.iv`
    & .arthur-breadcrumbs-item {
      color: ${props=>props.theme.token.color.black};
      cursor: default;
    }
  `,link:styled_components_browser_esm.iv`
    & .arthur-breadcrumbs-item {
      color: ${props=>props.theme.token.color.palette.gray[50]};

      &:hover {
        text-decoration: none;
      }
    }

    & .arthur-breadcrumbs-items-right {
      & .arthur-breadcrumbs-item {
        color: ${props=>props.theme.token.color.black};
        text-decoration: underline;
      }
    }
  `},StyledRoot=styled_components_browser_esm.ZP.nav`
  display: flex;

  & .arthur-breadcrumbs-items {
    position: relative;

    &.arthur-breadcrumbs-items-left {
      display: flex;
      overflow: hidden;
    }

    &.arthur-breadcrumbs-items-right {
      display: flex;
      flex: 1;
    }
  }

  & .arthur-breadcrumbs-item {
    position: relative;
    white-space: nowrap;

    &.arthur-breadcrumbs-item--disabled {
      cursor: default;
    }

    &.arthur-breadcrumbs-item--collapsed {
      & .arthur-breadcrumbs-item-inner {
        opacity: 0;
      }
    }
  }

  & .arthur-breadcrumbs-spacer {
    &.arthur-breadcrumbs-spacer--collapsed {
      opacity: 0;
    }
  }

  & .arthur-breadcrumbs-toggle {
    position: absolute;
    top: calc(50% - 6px);
    width: 12px;
    z-index: 999;
  }

  ${props=>sizeStyles[props.size]}
  ${props=>variantStyles[props.variant]}
`,Breadcrumbs=(0,react.forwardRef)(((props,_forwardedRef)=>{const{className,disabled=!1,divider="/",children,size=BreadcrumbsSizeEnum.medium,variant=BreadcrumbsVariantEnum.default,...rest}=props,classes=classnames_default()(className,"arthur-breadcrumbs",`arthur-breadcrumbs--size-${size}`,`arthur-breadcrumbs--variant-${variant}`,{"arthur-breadcrumbs--disabled":disabled});return(0,jsx_runtime.jsx)(StyledRoot,{className:classes,size,variant,...rest,children:react.Children.map(children,((child,idx)=>{const dividerEl=idx>0?(0,jsx_runtime.jsx)("span",{className:"arthur-breadcrumbs-spacer",children:divider}):"";return(0,jsx_runtime.jsxs)("div",{children:[dividerEl,child]})}))})})),Breadcrumbs_Breadcrumbs=Breadcrumbs;Breadcrumbs.displayName="Breadcrumbs";try{Breadcrumbs.displayName="Breadcrumbs",Breadcrumbs.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{divider:{defaultValue:null,description:"",name:"divider",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"default"'}]}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: HTMLDivElement) => void"},{value:"RefObject<HTMLDivElement>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Breadcrumbs/Breadcrumbs.tsx#Breadcrumbs"]={docgenInfo:Breadcrumbs.__docgenInfo,name:"Breadcrumbs",path:"../../packages/arthur-ui/src/Breadcrumbs/Breadcrumbs.tsx#Breadcrumbs"})}catch(__react_docgen_typescript_loader_error){}var Link=__webpack_require__("../../packages/arthur-ui/src/Link/Link.tsx");const Breadcrumbs_stories={title:"Components/Breadcrumbs",component:Breadcrumbs_Breadcrumbs,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Default={args:{children:[(0,jsx_runtime.jsx)(Link.Z,{disabled:!0,children:"Breadcrumb 1"}),(0,jsx_runtime.jsx)(Link.Z,{disabled:!0,children:"Breadcrumb 2"}),(0,jsx_runtime.jsx)(Link.Z,{children:"Breadcrumb 3"})]}},Small={render:()=>(0,jsx_runtime.jsxs)(Breadcrumbs_Breadcrumbs,{size:"small",children:[(0,jsx_runtime.jsx)(Link.Z,{disabled:!0,children:"Breadcrumb 1"}),(0,jsx_runtime.jsx)(Link.Z,{disabled:!0,children:"Breadcrumb 2"}),(0,jsx_runtime.jsx)(Link.Z,{children:"Breadcrumb 3"})]})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    // eslint-disable-next-line react/jsx-key -- because i said so\n    children: [<Link disabled>Breadcrumb 1</Link>, <Link disabled>Breadcrumb 2</Link>, <Link>Breadcrumb 3</Link>]\n  }\n}",...Default.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    return <Breadcrumbs size='small'>\r\n        <Link disabled>Breadcrumb 1</Link>\r\n        <Link disabled>Breadcrumb 2</Link>\r\n        <Link>Breadcrumb 3</Link>\r\n      </Breadcrumbs>;\n  }\n}",...Small.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Small"]},"../../packages/arthur-ui/src/Link/Link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Link_Link});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),hook=__webpack_require__("../../packages/arthur-ui/src/hook/index.ts");let LinkSizeEnum=function(LinkSizeEnum){return LinkSizeEnum.small="small",LinkSizeEnum.medium="medium",LinkSizeEnum.large="large",LinkSizeEnum}({}),LinkVariantEnum=function(LinkVariantEnum){return LinkVariantEnum.default="default",LinkVariantEnum.secondary="secondary",LinkVariantEnum}({});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const linkStyles={small:styled_components_browser_esm.iv`
        font-size: ${props=>props.theme.token.size.font.small};
    `,medium:styled_components_browser_esm.iv`
        font-size: ${props=>props.theme.token.size.font.medium};
    `,large:styled_components_browser_esm.iv`
        font-size: ${props=>props.theme.token.size.font.large};
    `},variantStyles={default:styled_components_browser_esm.iv`
        &:active {
            color: ${props=>props.theme.token.color.black};
        }
    `,secondary:styled_components_browser_esm.iv`
        &:active {
            color: ${props=>props.theme.token.color.white};
        }
    `},StyledRoot=styled_components_browser_esm.ZP.a`
    color: ${props=>props.theme.token.color.palette.blue.base};
    text-decoration: none;

    &:active {
        text-decoration: underline;
    }

    &:hover {
        color: ${props=>props.theme.token.color.palette.blue.darker};
        text-decoration: underline;
    }

    &:visited {
        color: ${props=>props.theme.token.color.palette.purple.base};
    }

    &.arthur-link--disabled {
        color: ${props=>props.theme.token.color.palette.gray[20]};
    }

    &.arthur-link--inline {
        text-decoration: underline;
    }

    ${props=>linkStyles[props.size]}
    ${props=>variantStyles[props.variant]} {
        /* HACK: HANDLES TOKENS FOR CHILD ICONS */
    }
    & .arthur-icon {
        margin-left: ${props=>props.theme.token.size.spacing["large"===props.size?"small":"small-1x"]};
        margin-right: ${props=>props.theme.token.size.spacing["large"===props.size?"small":"small-1x"]};

        &:first-child {
            margin-left: 0px;
        }

        &:last-child {
            margin-right: 0px;
        }
    }
`,Link=(0,react.forwardRef)(((props,forwardedRef)=>{const{children,className,disabled,href,inline=!1,size=LinkSizeEnum.medium,target,variant=LinkVariantEnum.default,onClick,...rest}=props,targetRef=(0,hook.Fr)(forwardedRef),classes=classnames_default()(className,"arthur-link",`arthur-link--size-${size}`,`arthur-link--variant-${variant}`,{"arthur-link--disabled":!0===disabled,"arthur-link--inline":inline}),handleClick=(0,react.useCallback)((event=>{!0!==disabled&&void 0!==href||(event.preventDefault(),event.stopPropagation()),!0!==disabled&&onClick?.(event)}),[disabled,onClick]);return(0,jsx_runtime.jsx)(StyledRoot,{className:classes,href:href||"#",onClick:handleClick,ref:targetRef,rel:"_blank"===target?"noopener noreferrer":void 0,role:"link",size,target,variant,...rest,children})})),Link_Link=Link;Link.displayName="Link";try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{href:{defaultValue:{value:"#"},description:"",name:"href",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},inline:{defaultValue:{value:"false"},description:"",name:"inline",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'},{value:'"_parent"'},{value:'"_top"'}]}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"secondary"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: React.MouseEvent<HTMLAnchorElement>) => void"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: HTMLAnchorElement) => void"},{value:"RefObject<HTMLAnchorElement>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Link/Link.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"../../packages/arthur-ui/src/Link/Link.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/arthur-ui/src/hook/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Fr:()=>useEnsureRef,Yc:()=>useEnsureId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function useEnsureRef(forwardedRef){const newRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);return forwardedRef??newRef}let useEnsureIdCounter=0;function useEnsureId(propId){const id=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(useEnsureIdCounter++,`arthur-${useEnsureIdCounter}`)),[]);return propId||id}},"../../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);
//# sourceMappingURL=breadcrumbs-Breadcrumbs-stories.775b9955.iframe.bundle.js.map