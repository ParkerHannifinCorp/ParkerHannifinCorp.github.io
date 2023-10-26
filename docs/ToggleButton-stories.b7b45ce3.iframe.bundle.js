/*! For license information please see ToggleButton-stories.b7b45ce3.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_arthur_docs=self.webpackChunk_arthur_docs||[]).push([[379],{"./stories/ToggleButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ToggleButton_stories});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Button=__webpack_require__("../../packages/arthur-ui/src/Button/Button.tsx");let ToggleButtonSizeEnum=function(ToggleButtonSizeEnum){return ToggleButtonSizeEnum.small="small",ToggleButtonSizeEnum.medium="medium",ToggleButtonSizeEnum}({});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const StyledRoot=styled_components_browser_esm.ZP.span`
    & .arthur-togglebutton-button-active {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        position: relative;
        right: 1px;
    }

    & .arthur-togglebutton-button-inactive {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        position: relative;
        left: 1px;
    }

    & button:focus {
        z-index: 999;
    }
`,ToggleButton=(0,react.forwardRef)(((props,forwardedRef)=>{const{defaultActive,activeLabel,className,disabled,inactiveLabel,size=ToggleButtonSizeEnum.medium,onChange,...rest}=props,[active,setActive]=(0,react.useState)(defaultActive),classes=classnames_default()(className,"arthur-togglebutton",{"arthur-togglebutton--active":!0===active,"arthur-togglebutton--disabled":!0===disabled,"arthur-togglebutton--inactive":!0!==active}),handleClick=(0,react.useCallback)((isActiveButton=>event=>{disabled||(setActive(isActiveButton),onChange?.(event,isActiveButton))}),[onChange,disabled]);return(0,jsx_runtime.jsxs)(StyledRoot,{className:classes,ref:forwardedRef,...rest,children:[(0,jsx_runtime.jsx)(Button.Z,{className:"arthur-togglebutton-button-inactive",disabled,onClick:handleClick(!1),size,variant:active?"tertiary":"default",children:inactiveLabel}),(0,jsx_runtime.jsx)(Button.Z,{className:"arthur-togglebutton-button-active",disabled,onClick:handleClick(!0),size,variant:active?"default":"tertiary",children:activeLabel})]})})),ToggleButton_ToggleButton=ToggleButton;ToggleButton.displayName="ToggleButton";try{ToggleButton.displayName="ToggleButton",ToggleButton.__docgenInfo={description:"",displayName:"ToggleButton",props:{defaultActive:{defaultValue:{value:"false"},description:"Sets the initial state of the toggle",name:"defaultActive",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: React.MouseEvent<HTMLButtonElement>, active: boolean) => void"}},activeLabel:{defaultValue:null,description:"Sets the contents of the active button",name:"activeLabel",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"false"},{value:"true"},{value:"ReactElement<any, string | JSXElementConstructor<any>>"},{value:"Iterable<ReactNode>"},{value:"ReactPortal"}]}},inactiveLabel:{defaultValue:null,description:"Sets the contents of the inactive button",name:"inactiveLabel",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"false"},{value:"true"},{value:"ReactElement<any, string | JSXElementConstructor<any>>"},{value:"Iterable<ReactNode>"},{value:"ReactPortal"}]}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: HTMLSpanElement) => void"},{value:"RefObject<HTMLSpanElement>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/ToggleButton/ToggleButton.tsx#ToggleButton"]={docgenInfo:ToggleButton.__docgenInfo,name:"ToggleButton",path:"../../packages/arthur-ui/src/ToggleButton/ToggleButton.tsx#ToggleButton"})}catch(__react_docgen_typescript_loader_error){}const ToggleButton_stories={title:"Components/ToggleButton",component:ToggleButton_ToggleButton,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Default={args:{label:"Default",activeLabel:"Toggle Active",inactiveLabel:"Toggle"}},Disabled={args:{label:"Disabled",disabled:!0,activeLabel:"Toggle Active",inactiveLabel:"Toggle"}},Small={args:{label:"Disabled",size:"small",activeLabel:"Toggle Active",inactiveLabel:"Toggle"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Default',\n    activeLabel: 'Toggle Active',\n    inactiveLabel: 'Toggle'\n  }\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Disabled',\n    disabled: true,\n    activeLabel: 'Toggle Active',\n    inactiveLabel: 'Toggle'\n  }\n}",...Disabled.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Disabled',\n    size: 'small',\n    activeLabel: 'Toggle Active',\n    inactiveLabel: 'Toggle'\n  }\n}",...Small.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Disabled","Small"]},"../../packages/arthur-ui/src/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Button_Button});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);let ButtonSizesEnum=function(ButtonSizesEnum){return ButtonSizesEnum.small="small",ButtonSizesEnum.medium="medium",ButtonSizesEnum.large="large",ButtonSizesEnum}({}),ButtonVariantsEnum=function(ButtonVariantsEnum){return ButtonVariantsEnum.default="default",ButtonVariantsEnum.secondary="secondary",ButtonVariantsEnum.tertiary="tertiary",ButtonVariantsEnum.danger="danger",ButtonVariantsEnum}({}),ButtonTypesEnum=function(ButtonTypesEnum){return ButtonTypesEnum.button="button",ButtonTypesEnum.resetButton="resetButton",ButtonTypesEnum.submitButton="submitButton",ButtonTypesEnum}({});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const buttonSizeStyles={small:styled_components_browser_esm.iv`
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
`,Button=(0,react.forwardRef)(((props,forwardedRef)=>{const{children,className,disabled=!1,size=ButtonSizesEnum.medium,type=ButtonTypesEnum.button,variant=ButtonVariantsEnum.default,onClick,...rest}=props,classes=classnames_default()(className,"arthur-button",`arthur-button--size-${size}`,`arthur-button--variant-${variant}`,{"arthur-button--disabled":disabled}),handleClick=(0,react.useCallback)((event=>{onClick?.(event)}),[onClick]);return(0,jsx_runtime.jsx)(StyledRoot,{className:classes,disabled,onClick:handleClick,ref:forwardedRef,role:"button",size,type,variant,...rest,children})})),Button_Button=Button;Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"danger"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: React.MouseEvent<HTMLButtonElement>) => void"}},formId:{defaultValue:null,description:"",name:"formId",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"resetButton"'},{value:'"submitButton"'}]}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: unknown) => void"},{value:"RefObject<unknown>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"../../packages/arthur-ui/src/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);
//# sourceMappingURL=ToggleButton-stories.b7b45ce3.iframe.bundle.js.map