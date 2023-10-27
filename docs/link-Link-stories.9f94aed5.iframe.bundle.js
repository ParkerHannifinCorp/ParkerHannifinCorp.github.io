/*! For license information please see link-Link-stories.9f94aed5.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_arthur_docs=self.webpackChunk_arthur_docs||[]).push([[686],{"./stories/link/Link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _arthur_ui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/arthur-ui/src/Link/Link.tsx"),_arthur_ui__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/arthur-ui/src/Icon/Icon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Link",component:_arthur_ui__WEBPACK_IMPORTED_MODULE_2__.Z,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Default={args:{variant:"default",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span",{children:["Link ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_arthur_ui__WEBPACK_IMPORTED_MODULE_3__.Z,{size:"small",value:"external-link"})]})}},Disabled={args:{variant:"default",children:"Link",disabled:!0}},Secondary={args:{variant:"secondary",children:"Secondary Link"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'default',\n    children: <span>\r\n        Link <Icon size='small' value='external-link' />\r\n      </span>\n  }\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'default',\n    children: 'Link',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'secondary',\n    children: 'Secondary Link'\n  }\n}",...Secondary.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Disabled","Secondary"]},"../../packages/arthur-ui/src/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Icon_Icon});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);let IconSizesEnum=function(IconSizesEnum){return IconSizesEnum[IconSizesEnum["small-1x"]=0]="small-1x",IconSizesEnum[IconSizesEnum.small=1]="small",IconSizesEnum[IconSizesEnum.medium=2]="medium",IconSizesEnum[IconSizesEnum.large=3]="large",IconSizesEnum}({});const ICON_VALUES={add:"fa-plus",calendar:"fa-calendar",catalog:"fa-book",check:"fa-check","chevron-down":"fa-chevron-down","chevron-left":"fa-chevron-left","chevron-right":"fa-chevron-right","chevron-up":"fa-chevron-up",close:"fa-x",disk:"fa-floppy-disk",document:"fa-file","dollar-sign":"fa-dollar-sign",download:"fa-download","external-link":"fa-arrow-up-right-from-square",feedback:"fa-bullhorn","file-upload":"fa-file-arrow-up",folder:"fa-folder-open",gear:"fa-gear",information:"fa-circle-info",keyboard:"fa-keyboard",list:"fa-list",move:"fa-arrows-up-down-left-right",notification:"fa-bell","pdf-document":"fa-file-pdf",print:"fa-print","quote-tags":"fa-tags",refresh:"fa-rotate-right",remove:"fa-x",reset:"fa-rotate-right",search:"fa-magnifying-glass",share:"fa-share","shopping-cart":"fa-shopping-cart",subtract:"fa-minus",user:"fa-user",video:"fa-video",warning:"fa-triangle-exclamation",zoom:"fa-magnifying-glass-plus",hyphen:"fa-hyphen","fa-image-slash":"fa-image-slash"};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const iconSizeStyles={"small-1x":styled_components_browser_esm.iv`
        font-size: ${props=>props.theme.token.size.font["small-1x"]};
    `,small:styled_components_browser_esm.iv`
        font-size: ${props=>props.theme.token.size.font.small};
    `,medium:styled_components_browser_esm.iv`
        font-size: ${props=>props.theme.token.size.font.medium};
    `,large:styled_components_browser_esm.iv`
        font-size: ${props=>props.theme.token.size.font.large};
    `},StyledRoot=styled_components_browser_esm.ZP.span`
    background-color: transparent;
    border: 0px none;
    outline: 0px none;
    padding: 0px;

    &:not(.arthur-icon--disabled) {
        &.arthur-icon--clickable {
            &:hover,
            &:focus,
            &:active {
                color: ${props=>props.theme.token.color.palette.gold.base};
                cursor: pointer;
                outline: 0px none;
            }
        }
    }

    &.arthur-icon--disabled {
        color: ${props=>props.theme.token.color.action.text.primary.disabled};
        cursor: default;
    }
`,StyledIcon=styled_components_browser_esm.ZP.i`
    ${props=>iconSizeStyles[props.size]}
`,Icon=(0,react.forwardRef)(((props,forwardedRef)=>{const{className,disabled,size="medium",value,onClick,...rest}=props,iconClass=ICON_VALUES[value];if(!IconSizesEnum[size])throw new Error(`icon: invalid size "${size}"`);const isClickable=!0===disabled||"function"==typeof onClick,handleClick=(0,react.useCallback)((event=>{disabled||onClick?.(event)}),[disabled,onClick]),classes={root:classnames_default()(className,"arthur-icon",`arthur-icon--size-${size}`,{"arthur-icon--clickable":isClickable,"arthur-icon--disabled":!0===disabled}),regular:classnames_default()("arthur-icon-regular","fa-regular",{"fa-foobar":Boolean(iconClass)&&Boolean(value),[iconClass]:Boolean(iconClass),[value]:Boolean(iconClass)&&Boolean(value)})};return(0,jsx_runtime.jsx)(StyledRoot,{as:isClickable?"button":"span",className:classes.root,disabled,onClick:handleClick,ref:forwardedRef,children:(0,jsx_runtime.jsx)(StyledIcon,{className:classes.regular,size,...rest})})})),Icon_Icon=Icon;Icon.displayName="Icon";try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"small-1x"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: React.MouseEvent<HTMLSpanElement>) => unknown"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"enum",value:[{value:'"search"'},{value:'"video"'},{value:'"document"'},{value:'"add"'},{value:'"calendar"'},{value:'"catalog"'},{value:'"check"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"close"'},{value:'"disk"'},{value:'"dollar-sign"'},{value:'"download"'},{value:'"external-link"'},{value:'"feedback"'},{value:'"file-upload"'},{value:'"folder"'},{value:'"gear"'},{value:'"information"'},{value:'"keyboard"'},{value:'"list"'},{value:'"move"'},{value:'"notification"'},{value:'"pdf-document"'},{value:'"print"'},{value:'"quote-tags"'},{value:'"refresh"'},{value:'"remove"'},{value:'"reset"'},{value:'"share"'},{value:'"shopping-cart"'},{value:'"subtract"'},{value:'"user"'},{value:'"warning"'},{value:'"zoom"'},{value:'"fa-image-slash"'},{value:'"hyphen"'}]}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: HTMLButtonElement | HTMLSpanElement) => void"},{value:"RefObject<HTMLButtonElement | HTMLSpanElement>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Icon/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"../../packages/arthur-ui/src/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/arthur-ui/src/Link/Link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Link_Link});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),hook=__webpack_require__("../../packages/arthur-ui/src/hook/index.ts");let LinkSizeEnum=function(LinkSizeEnum){return LinkSizeEnum.small="small",LinkSizeEnum.medium="medium",LinkSizeEnum.large="large",LinkSizeEnum}({}),LinkVariantEnum=function(LinkVariantEnum){return LinkVariantEnum.default="default",LinkVariantEnum.secondary="secondary",LinkVariantEnum}({});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const linkStyles={small:styled_components_browser_esm.iv`
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
//# sourceMappingURL=link-Link-stories.9f94aed5.iframe.bundle.js.map