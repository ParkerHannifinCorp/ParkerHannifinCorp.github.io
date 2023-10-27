/*! For license information please see button-Button-stories.b67de844.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_arthur_docs=self.webpackChunk_arthur_docs||[]).push([[57],{"./stories/button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Primary:()=>Primary,Secondary:()=>Secondary,Tertiary:()=>Tertiary,WithIconAfter:()=>WithIconAfter,WithIconBefore:()=>WithIconBefore,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _arthur_ui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/arthur-ui/src/Button/Button.tsx"),_arthur_ui__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/arthur-ui/src/Icon/Icon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/react/jsx-runtime.js"));const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Button",component:_arthur_ui__WEBPACK_IMPORTED_MODULE_2__.Z,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Primary={args:{variant:"default",children:"Button"}},Secondary={args:{variant:"secondary",children:"Button"}},Tertiary={args:{variant:"tertiary",children:"Button"}},Danger={args:{variant:"danger",children:"Button"}},WithIconBefore={args:{variant:"danger",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_arthur_ui__WEBPACK_IMPORTED_MODULE_3__.Z,{value:"gear"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:"Text MUST be in an element for tokens to be applied correctly"})]})}},WithIconAfter={args:{variant:"danger",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:"Text MUST be in an element for tokens to be applied correctly"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_arthur_ui__WEBPACK_IMPORTED_MODULE_3__.Z,{value:"gear"})]})}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'default',\n    children: 'Button'\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'secondary',\n    children: 'Button'\n  }\n}",...Secondary.parameters?.docs?.source}}},Tertiary.parameters={...Tertiary.parameters,docs:{...Tertiary.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'tertiary',\n    children: 'Button'\n  }\n}",...Tertiary.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'danger',\n    children: 'Button'\n  }\n}",...Danger.parameters?.docs?.source}}},WithIconBefore.parameters={...WithIconBefore.parameters,docs:{...WithIconBefore.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'danger',\n    children: <>\r\n        <Icon value='gear' />\r\n        <span>Text MUST be in an element for tokens to be applied correctly</span>\r\n      </>\n  }\n}",...WithIconBefore.parameters?.docs?.source}}},WithIconAfter.parameters={...WithIconAfter.parameters,docs:{...WithIconAfter.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'danger',\n    children: <>\r\n        <span>Text MUST be in an element for tokens to be applied correctly</span>\r\n        <Icon value='gear' />\r\n      </>\n  }\n}",...WithIconAfter.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary","Tertiary","Danger","WithIconBefore","WithIconAfter"]},"../../packages/arthur-ui/src/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Button_Button});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);let ButtonSizesEnum=function(ButtonSizesEnum){return ButtonSizesEnum.small="small",ButtonSizesEnum.medium="medium",ButtonSizesEnum.large="large",ButtonSizesEnum}({}),ButtonVariantsEnum=function(ButtonVariantsEnum){return ButtonVariantsEnum.default="default",ButtonVariantsEnum.secondary="secondary",ButtonVariantsEnum.tertiary="tertiary",ButtonVariantsEnum.danger="danger",ButtonVariantsEnum}({}),ButtonTypesEnum=function(ButtonTypesEnum){return ButtonTypesEnum.button="button",ButtonTypesEnum.resetButton="resetButton",ButtonTypesEnum.submitButton="submitButton",ButtonTypesEnum}({});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const buttonSizeStyles={small:styled_components_browser_esm.iv`
    font-size: ${props=>props.theme.token.size.font.small};
    height: 30px;
    padding: 0px ${props=>props.theme.token.size.spacing.small};
  `,medium:styled_components_browser_esm.iv`
    font-size: ${props=>props.theme.token.size.font.medium};
    height: 40px;
    padding: 0px ${props=>props.theme.token.size.spacing.medium};
  `,large:styled_components_browser_esm.iv`
    font-size: ${props=>props.theme.token.size.font.large};
    height: 50px;
    padding: 0px ${props=>props.theme.token.size.spacing.medium};
  `},buttonVariantStyles={default:styled_components_browser_esm.iv`
    background-color: ${props=>props.theme.token.color.palette.gold.base};
    color: ${props=>props.theme.token.color.black};

    &:not(.arthur-button--disabled):hover {
      background-color: ${props=>props.theme.token.color.palette.gold.lighter};
    }

    &:not(.arthur-button--disabled):active {
      background-color: ${props=>props.theme.token.color.palette.gold.darker};
      box-shadow: inset 0 0 0 1px ${props=>props.theme.token.color.palette.gold.darker},
        inset 0 0 0 2px ${props=>props.theme.token.color.white};
    }
  `,secondary:styled_components_browser_esm.iv`
    background-color: ${props=>props.theme.token.color.palette.gray[80]};
    color: ${props=>props.theme.token.color.white};

    &:not(.arthur-button--disabled):hover {
      background-color: ${props=>props.theme.token.color.palette.gray[70]};
    }

    &:not(.arthur-button--disabled):active {
      background-color: ${props=>props.theme.token.color.palette.gray[60]};
      box-shadow: inset 0 0 0 1px ${props=>props.theme.token.color.palette.gray[60]},
        inset 0 0 0 2px ${props=>props.theme.token.color.white};
    }
  `,tertiary:styled_components_browser_esm.iv`
    background-color: transparent;
    box-shadow: inset 0 0 0 2px ${props=>props.theme.token.color.palette.gold.base};
    color: ${props=>props.theme.token.color.black};

    &:not(.arthur-button--disabled):hover {
      background-color: ${props=>props.theme.token.color.palette.gold.lighter};
      box-shadow: none;
    }

    &:not(.arthur-button--disabled):active {
      background-color: ${props=>props.theme.token.color.palette.gold.darker};
      box-shadow: inset 0 0 0 1px ${props=>props.theme.token.color.palette.gold.darker},
        inset 0 0 0 2px ${props=>props.theme.token.color.white};
    }

    &.arthur-button--disabled {
      background-color: transparent;
      box-shadow: inset 0 0 0 2px ${props=>props.theme.token.color.palette.gray[20]};
    }
  `,danger:styled_components_browser_esm.iv`
    background-color: ${props=>props.theme.token.color.palette.red.base};
    color: ${props=>props.theme.token.color.white};

    &:not(.arthur-button--disabled):hover {
      background-color: ${props=>props.theme.token.color.palette.red.darker};
    }

    &:not(.arthur-button--disabled):active {
      background-color: ${props=>props.theme.token.color.palette.red.darkest};
      box-shadow: inset 0 0 0 1px ${props=>props.theme.token.color.palette.red.darkest},
        inset 0 0 0 2px ${props=>props.theme.token.color.white};
    }
  `},StyledRoot=styled_components_browser_esm.ZP.button`
  border: none;
  border-radius: ${props=>props.theme.token.radius.border.pill};
  font-weight: ${props=>props.theme.token.weight.font.regular};
  min-width: 140px;
  outline: none;

  &.arthur-button--disabled {
    background-color: ${props=>props.theme.token.color.palette.gray[20]};
    color: ${props=>props.theme.token.color.palette.gray[40]};
  }

  ${props=>buttonSizeStyles[props.size]}
  ${props=>buttonVariantStyles[props.variant]} {
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
`,Button=(0,react.forwardRef)(((props,forwardedRef)=>{const{children,className,disabled=!1,size=ButtonSizesEnum.medium,type=ButtonTypesEnum.button,variant=ButtonVariantsEnum.default,onClick,...rest}=props,classes=classnames_default()(className,"arthur-button",`arthur-button--size-${size}`,`arthur-button--variant-${variant}`,{"arthur-button--disabled":disabled}),handleClick=(0,react.useCallback)((event=>{onClick?.(event)}),[onClick]);return(0,jsx_runtime.jsx)(StyledRoot,{className:classes,disabled,onClick:handleClick,ref:forwardedRef,role:"button",size,type,variant,...rest,children})})),Button_Button=Button;Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"danger"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: React.MouseEvent<HTMLButtonElement>) => void"}},formId:{defaultValue:null,description:"",name:"formId",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"resetButton"'},{value:'"submitButton"'}]}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: unknown) => void"},{value:"RefObject<unknown>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"../../packages/arthur-ui/src/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/arthur-ui/src/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Icon_Icon});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);let IconSizesEnum=function(IconSizesEnum){return IconSizesEnum[IconSizesEnum["small-1x"]=0]="small-1x",IconSizesEnum[IconSizesEnum.small=1]="small",IconSizesEnum[IconSizesEnum.medium=2]="medium",IconSizesEnum[IconSizesEnum.large=3]="large",IconSizesEnum}({});const ICON_VALUES={add:"fa-plus",calendar:"fa-calendar",catalog:"fa-book",check:"fa-check","chevron-down":"fa-chevron-down","chevron-left":"fa-chevron-left","chevron-right":"fa-chevron-right","chevron-up":"fa-chevron-up",close:"fa-x",disk:"fa-floppy-disk",document:"fa-file","dollar-sign":"fa-dollar-sign",download:"fa-download","external-link":"fa-arrow-up-right-from-square",feedback:"fa-bullhorn","file-upload":"fa-file-arrow-up",folder:"fa-folder-open",gear:"fa-gear",information:"fa-circle-info",keyboard:"fa-keyboard",list:"fa-list",move:"fa-arrows-up-down-left-right",notification:"fa-bell","pdf-document":"fa-file-pdf",print:"fa-print","quote-tags":"fa-tags",refresh:"fa-rotate-right",remove:"fa-x",reset:"fa-rotate-right",search:"fa-magnifying-glass",share:"fa-share","shopping-cart":"fa-shopping-cart",subtract:"fa-minus",user:"fa-user",video:"fa-video",warning:"fa-triangle-exclamation",zoom:"fa-magnifying-glass-plus",hyphen:"fa-hyphen","fa-image-slash":"fa-image-slash"};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const iconSizeStyles={"small-1x":styled_components_browser_esm.iv`
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
`,Icon=(0,react.forwardRef)(((props,forwardedRef)=>{const{className,disabled,size="medium",value,onClick,...rest}=props,iconClass=ICON_VALUES[value];if(!IconSizesEnum[size])throw new Error(`icon: invalid size "${size}"`);const isClickable=!0===disabled||"function"==typeof onClick,handleClick=(0,react.useCallback)((event=>{disabled||onClick?.(event)}),[disabled,onClick]),classes={root:classnames_default()(className,"arthur-icon",`arthur-icon--size-${size}`,{"arthur-icon--clickable":isClickable,"arthur-icon--disabled":!0===disabled}),regular:classnames_default()("arthur-icon-regular","fa-regular",{"fa-foobar":Boolean(iconClass)&&Boolean(value),[iconClass]:Boolean(iconClass),[value]:Boolean(iconClass)&&Boolean(value)})};return(0,jsx_runtime.jsx)(StyledRoot,{as:isClickable?"button":"span",className:classes.root,disabled,onClick:handleClick,ref:forwardedRef,children:(0,jsx_runtime.jsx)(StyledIcon,{className:classes.regular,size,...rest})})})),Icon_Icon=Icon;Icon.displayName="Icon";try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"small-1x"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: React.MouseEvent<HTMLSpanElement>) => unknown"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"enum",value:[{value:'"search"'},{value:'"video"'},{value:'"document"'},{value:'"add"'},{value:'"calendar"'},{value:'"catalog"'},{value:'"check"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"close"'},{value:'"disk"'},{value:'"dollar-sign"'},{value:'"download"'},{value:'"external-link"'},{value:'"feedback"'},{value:'"file-upload"'},{value:'"folder"'},{value:'"gear"'},{value:'"information"'},{value:'"keyboard"'},{value:'"list"'},{value:'"move"'},{value:'"notification"'},{value:'"pdf-document"'},{value:'"print"'},{value:'"quote-tags"'},{value:'"refresh"'},{value:'"remove"'},{value:'"reset"'},{value:'"share"'},{value:'"shopping-cart"'},{value:'"subtract"'},{value:'"user"'},{value:'"warning"'},{value:'"zoom"'},{value:'"fa-image-slash"'},{value:'"hyphen"'}]}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: HTMLButtonElement | HTMLSpanElement) => void"},{value:"RefObject<HTMLButtonElement | HTMLSpanElement>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Icon/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"../../packages/arthur-ui/src/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);
//# sourceMappingURL=button-Button-stories.b67de844.iframe.bundle.js.map