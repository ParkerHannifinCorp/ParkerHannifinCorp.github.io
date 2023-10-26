/*! For license information please see Toggle-stories.4023547c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_arthur_docs=self.webpackChunk_arthur_docs||[]).push([[169],{"./stories/Toggle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Toggle_stories});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);let ToggleSizeEnum=function(ToggleSizeEnum){return ToggleSizeEnum.small="small",ToggleSizeEnum.medium="medium",ToggleSizeEnum}({});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const sizeStyles={small:styled_components_browser_esm.iv`
        height: 12px;
        width: 28px;

        &::before {
            height: 10px;
            top: 1px;
            width: 10px;
        }

        &.arthur-toggle--active:focus {
            outline: 1px solid ${props=>props.theme.token.color.palette.gold.darker};
        }

        &.arthur-toggle--disabled:focus {
            outline: 0px none;
        }
    `,medium:styled_components_browser_esm.iv`
        height: 24px;
        width: 50px;

        &::before {
            height: 20px;
            top: 2px;
            width: 20px;
        }

        &.arthur-toggle--active:focus {
            outline: ${props=>props.theme.token.size.border.medium} solid
                ${props=>props.theme.token.color.palette.gold.darker};
        }

        &.arthur-toggle--disabled:focus {
            outline: 0px none;
        }
    `},StyledRoot=styled_components_browser_esm.ZP.button`
    background-color: #8d8d8d;
    border: 0px none;
    border-radius: ${props=>props.theme.token.radius.border.pill};
    padding: 0px;
    position: relative;

    &::before {
        background-color: ${props=>props.theme.token.color.white};
        border-radius: ${props=>props.theme.token.radius.border.circle};
        content: '';
        position: absolute;
    }

    &.arthur-toggle--active {
        background-color: ${props=>props.theme.token.color.palette.gold.base};

        &::before {
            right: 2px;
        }
    }

    &.arthur-toggle--inactive {
        background-color: ${props=>props.theme.token.color.palette.gray[30]};

        &::before {
            left: 2px;
        }
    }

    &.arthur-toggle--disabled {
        background-color: ${props=>props.theme.token.color.palette.gray[30]};

        &::before {
            background-color: ${props=>props.theme.token.color.palette.gray[75]};
        }
    }

    ${props=>sizeStyles[props.size]}
`,Toggle=(0,react.forwardRef)(((props,forwardedRef)=>{const{defaultActive=!1,className,disabled,size=ToggleSizeEnum.medium,onChange}=props,[active,setActive]=(0,react.useState)(defaultActive),classes=classnames_default()(className,"arthur-toggle",`arthur-toggle--size-${size}`,{"arthur-toggle--disabled":!0===disabled,"arthur-toggle--active":active,"arthur-toggle--inactive":!active}),handleClick=(0,react.useCallback)((event=>{disabled||(setActive(!active),onChange?.(event,!active))}),[onChange,disabled,active]);return(0,jsx_runtime.jsx)(StyledRoot,{className:classes,onClick:handleClick,ref:forwardedRef,size})})),Toggle_Toggle=Toggle;Toggle.displayName="Toggle";try{Toggle.displayName="Toggle",Toggle.__docgenInfo={description:"",displayName:"Toggle",props:{defaultActive:{defaultValue:{value:"false"},description:"Sets the initial state of the toggle",name:"defaultActive",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: React.MouseEvent<HTMLButtonElement>, active: boolean) => void"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: HTMLButtonElement) => void"},{value:"RefObject<HTMLButtonElement>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Toggle/Toggle.tsx#Toggle"]={docgenInfo:Toggle.__docgenInfo,name:"Toggle",path:"../../packages/arthur-ui/src/Toggle/Toggle.tsx#Toggle"})}catch(__react_docgen_typescript_loader_error){}const Toggle_stories={title:"Components/Toggle",component:Toggle_Toggle,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Default={args:{label:"Default"}},Disabled={args:{label:"Disabled",disabled:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Default'\n  }\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Disabled',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Disabled"]},"../../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);
//# sourceMappingURL=Toggle-stories.4023547c.iframe.bundle.js.map