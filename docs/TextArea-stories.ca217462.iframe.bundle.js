/*! For license information please see TextArea-stories.ca217462.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_arthur_docs=self.webpackChunk_arthur_docs||[]).push([[337],{"./stories/TextArea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Error:()=>Error,Info:()=>Info,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextArea_stories});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),FormField=__webpack_require__("../../packages/arthur-ui/src/FormField/FormField.tsx"),hook=__webpack_require__("../../packages/arthur-ui/src/hook/index.ts");let TextAreaAlignmentEnum=function(TextAreaAlignmentEnum){return TextAreaAlignmentEnum.left="left",TextAreaAlignmentEnum.center="center",TextAreaAlignmentEnum.right="right",TextAreaAlignmentEnum}({}),TextAreaSizeEnum=function(TextAreaSizeEnum){return TextAreaSizeEnum.small="small",TextAreaSizeEnum.medium="medium",TextAreaSizeEnum}({});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const alignmentStyles={left:styled_components_browser_esm.iv`
        & .arthur-textinput-input {
            text-align: ${props=>props.theme.token["text-align"].left};
        }
    `,center:styled_components_browser_esm.iv`
        & .arthur-textinput-input {
            text-align: ${props=>props.theme.token["text-align"].center};
        }
    `,right:styled_components_browser_esm.iv`
        & .arthur-textinput-input {
            text-align: ${props=>props.theme.token["text-align"].right};
        }
    `},sizeStyles={small:styled_components_browser_esm.iv`
        font-size: ${props=>props.theme.token.size.font.small};
        min-height: 80px;
        resize: none;
    `,medium:styled_components_browser_esm.iv`
        font-size: ${props=>props.theme.token.size.font.medium};
        min-height: 140px;
    `},StyledRoot=styled_components_browser_esm.ZP.textarea`
    background-color: ${props=>props.theme.token.color.white};
    border: 1px solid ${props=>props.theme.token.color.palette.gray[75]};
    border-radius: ${props=>props.theme.token.radius.border.basic};
    box-sizing: border-box;
    font-family: ${props=>props.theme.token.font.family["sans-serif"]};
    font-size: ${props=>props.theme.token.size.font.medium};
    margin: 0px;
    margin-bottom: -3px;
    min-width: 300px;
    padding: ${props=>props.theme.token.size.spacing["small-2x"]}
        ${props=>props.theme.token.size.spacing["small-1x"]};
    width: 100%;

    &::placeholder {
        color: ${props=>props.theme.token.color.palette.gray[20]};
    }

    &:focus {
        border: 1px solid transparent;
        outline: ${props=>props.theme.token.size.border.medium} solid
            ${props=>props.theme.token.color.palette.gold.base};
    }

    &.arthur-textarea--invalid {
        border: 1px solid ${props=>props.theme.token.color.feedback.error};

        &:focus {
            outline: ${props=>props.theme.token.size.border.medium} solid
                ${props=>props.theme.token.color.feedback.error};
        }
    }

    &.arthur-textarea--disabled {
        border: 1px solid ${props=>props.theme.token.color.palette.gray[20]};
        color: ${props=>props.theme.token.color.palette.gray[20]};

        &:focus {
            outline: none;
        }
    }

    ${props=>alignmentStyles[props.alignment]}
    ${props=>sizeStyles[props.size]}
`,TextArea=(0,react.forwardRef)(((props,forwardedRef)=>{const{alignment=TextAreaAlignmentEnum.left,className,disabled,errorText,id,infoText,label,invalid,required,size=TextAreaSizeEnum.medium,onChange}=props,classes=classnames_default()(className,"arthur-textarea",`arthur-textarea--alignment-${alignment}`,`arthur-textarea--size-${size}`,{"arthur-textarea--disabled":!0===disabled,"arthur-textarea--invalid":!0===invalid}),targetId=(0,hook.Yc)(id),handleChange=(0,react.useCallback)((event=>{onChange?.(event,event.target.value)}),[onChange]);return(0,jsx_runtime.jsx)(FormField.Z,{disabled,errorText,id:targetId,infoText,invalid,label,ref:forwardedRef,required,children:(0,jsx_runtime.jsx)(StyledRoot,{alignment,className:classes,disabled,id:targetId,onChange:handleChange,size})})})),TextArea_TextArea=TextArea;TextArea.displayName="TextArea";try{TextArea.displayName="TextArea",TextArea.__docgenInfo={description:"",displayName:"TextArea",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},infoText:{defaultValue:null,description:"",name:"infoText",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},required:{defaultValue:{value:"false"},description:"If true, this will add a red * to your label",name:"required",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},alignment:{defaultValue:{value:"left"},description:"",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},minLength:{defaultValue:null,description:"",name:"minLength",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: React.ChangeEvent<HTMLTextAreaElement>, value?: string) => void"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: HTMLDivElement) => void"},{value:"RefObject<HTMLDivElement>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/TextArea/TextArea.tsx#TextArea"]={docgenInfo:TextArea.__docgenInfo,name:"TextArea",path:"../../packages/arthur-ui/src/TextArea/TextArea.tsx#TextArea"})}catch(__react_docgen_typescript_loader_error){}const TextArea_stories={title:"Components/TextArea",component:TextArea_TextArea,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Default={args:{label:"Default"}},Info={args:{label:"Info",infoText:"This is info text"}},Error={args:{label:"Info",errorText:"This is error text"}},Disabled={args:{label:"Disabled",disabled:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Default'\n  }\n}",...Default.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Info',\n    infoText: 'This is info text'\n  }\n}",...Info.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Info',\n    errorText: 'This is error text'\n  }\n}",...Error.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Disabled',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Info","Error","Disabled"]},"../../packages/arthur-ui/src/FormField/FormField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>FormField_FormField});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),hook=__webpack_require__("../../packages/arthur-ui/src/hook/index.ts");let FormFieldSizeEnum=function(FormFieldSizeEnum){return FormFieldSizeEnum.small="small",FormFieldSizeEnum.medium="medium",FormFieldSizeEnum}({});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const sizeStyles={small:styled_components_browser_esm.iv`
        font-size: ${props=>props.theme.token.size.font.small};

        & .arthur-field-header-label {
            font-size: ${props=>props.theme.token.size.font.small};
        }

        & .arthur-field-footer {
            & .arthur-field-footer-info {
                font-size: ${props=>props.theme.token.size.font.small};
            }

            & .arthur-field-footer-error {
                font-size: ${props=>props.theme.token.size.font.small};
            }
        }
    `,medium:styled_components_browser_esm.iv`
        font-size: ${props=>props.theme.token.size.font.medium};

        & .arthur-field-header-label {
            font-size: ${props=>props.theme.token.size.font.medium};
        }

        & .arthur-field-footer {
            & .arthur-field-footer-info {
                font-size: ${props=>props.theme.token.size.font.medium};
            }

            & .arthur-field-footer-error {
                font-size: ${props=>props.theme.token.size.font.medium};
            }
        }
    `},StyledRoot=styled_components_browser_esm.ZP.div`
    font-family: ${props=>props.theme.token.font.family["sans-serif"]};
    color: ${props=>props.theme.token.color.black};

    & .arthur-field-header {
        margin-bottom: ${props=>props.theme.token.size.spacing["small-2x"]};
    }

    & .arthur-field-header-label {
        font-weight: ${props=>props.theme.token.weight.font.bold};
    }

    & .arthur-field-header-required {
        color: ${props=>props.theme.token.color.feedback.error};
        padding-left: ${props=>props.theme.token.size.spacing["small-2x"]};
    }

    & .arthur-field-footer {
        margin-top: ${props=>props.theme.token.size.spacing["small-2x"]};
        ${props=>props.$showInfoText&&`color: ${props.theme.token.color.feedback.info};`}
        ${props=>props.$showErrorText&&`color: ${props.theme.token.color.feedback.error};`}

    & .arthur-field-footer-info {
            padding-right: ${props=>props.theme.token.size.spacing["small-2x"]};
        }

        & .arthur-field-footer-error {
        }
    }

    &.arthur-field--disabled {
        color: ${props=>props.theme.token.color.palette.gray[20]};

        & .arthur-field-header-required {
            color: ${props=>props.theme.token.color.palette.gray[20]};
        }

        & .arthur-field-footer {
            color: ${props=>props.theme.token.color.palette.gray[20]};
        }
    }

    ${props=>sizeStyles[props.size]}
`,FormField=(0,react.forwardRef)(((props,forwardedRef)=>{const{className,id,children,disabled,errorText,label,infoText,size=FormFieldSizeEnum.medium,required,...rest}=props,targetId=(0,hook.Yc)(id),showHeader=Boolean(label),showErrorText=Boolean(errorText),showInfoText=Boolean(infoText),showFooter=showErrorText||showInfoText,classes=classnames_default()(className,"arthur-field",`arthur-field--size-${size}`,{"arthur-field--disabled":!0===disabled});return(0,jsx_runtime.jsxs)(StyledRoot,{$showErrorText:showErrorText,$showInfoText:showInfoText,className:classes,ref:forwardedRef,size,...rest,children:[showHeader?(0,jsx_runtime.jsxs)("div",{className:"arthur-field-header",children:[(0,jsx_runtime.jsx)("label",{className:"arthur-field-header-label",htmlFor:targetId,children:label}),!0===required&&(0,jsx_runtime.jsx)("span",{className:"arthur-field-header-required",children:"*"})]}):null,children,showFooter?(0,jsx_runtime.jsxs)("div",{className:"arthur-field-footer",children:[showInfoText?(0,jsx_runtime.jsx)("span",{className:"arthur-field-footer-info",children:infoText}):null,showErrorText?(0,jsx_runtime.jsx)("span",{className:"arthur-field-footer-error",children:errorText}):null]}):null]})})),FormField_FormField=FormField;FormField.displayName="FormField";try{FormField.displayName="FormField",FormField.__docgenInfo={description:"",displayName:"FormField",props:{errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},infoText:{defaultValue:null,description:"",name:"infoText",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},required:{defaultValue:{value:"false"},description:"If true, this will add a red * to your label",name:"required",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: HTMLDivElement) => void"},{value:"RefObject<HTMLDivElement>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/FormField/FormField.tsx#FormField"]={docgenInfo:FormField.__docgenInfo,name:"FormField",path:"../../packages/arthur-ui/src/FormField/FormField.tsx#FormField"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/arthur-ui/src/hook/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Fr:()=>useEnsureRef,Yc:()=>useEnsureId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function useEnsureRef(forwardedRef){const newRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);return forwardedRef??newRef}let useEnsureIdCounter=0;function useEnsureId(propId){const id=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(useEnsureIdCounter++,`arthur-${useEnsureIdCounter}`)),[]);return propId||id}},"../../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);
//# sourceMappingURL=TextArea-stories.ca217462.iframe.bundle.js.map