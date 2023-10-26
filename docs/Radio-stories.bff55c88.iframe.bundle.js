/*! For license information please see Radio-stories.bff55c88.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_arthur_docs=self.webpackChunk_arthur_docs||[]).push([[249],{"./stories/Radio.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,Group:()=>Group,Uncontrolled:()=>Uncontrolled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Radio_stories});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),hook=__webpack_require__("../../packages/arthur-ui/src/hook/index.ts");const RadioGroupContext=(0,react.createContext)(void 0);var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const StyledRoot=styled_components_browser_esm.ZP.span`
    align-items: center;
    display: flex;
    padding: ${props=>props.theme.token.size.spacing["small-2x"]};
    position: relative;

    & .arthur-radio-input {
        accent-color: ${props=>props.theme.token.color.black};
        appearance: none;
        height: 16px;
        width: 16px;
        position: relative;
        border-radius: 50%;
        outline: ${props=>`1px solid ${props.theme.token.color.palette.gray[75]}`};
        outline-offset: 0px;
        cursor: 'pointer';
        margin: 0;
        flex-shrink: 0;

        &:checked {
            height: 14px;
            width: 14px;
            margin: 1px;
            outline: 1px solid black;
            outline-offset: 2px;
            background-color: ${props=>props.theme.token.color.black};
        }

        &:focus-visible {
            outline: 0px none;
        }

        &:focus {
            outline: ${props=>props.theme.token.size.border.medium} solid
                ${props=>props.theme.token.color.palette.gold.base};
            outline-offset: 0px;
            background-color: transparent;
        }
    }

    & .arthur-radio-label {
        color: ${props=>props.theme.token.color.palette.gray[75]};
        font-size: ${props=>props.theme.token.size.font.medium};
        margin-left: ${props=>props.theme.token.size.spacing["small-1x"]};
        user-select: none;
        display: flex;
        align-items: center;
        gap: ${props=>props.theme.token.size.spacing["small-1x"]};
    }

    &.arthur-radio--disabled {
        & .arthur-radio-input {
            border: 1px solid ${props=>props.theme.token.color.action.text.primary.disabled};
            outline-color: ${props=>props.theme.token.color.action.text.primary.disabled};
        }

        & .arthur-radio-label {
            color: ${props=>props.theme.token.color.action.text.primary.disabled};
        }
    }
`;function isString(value){return"string"==typeof value||value instanceof String}const Radio=(0,react.forwardRef)(((props,forwardedRef)=>{const{checked,defaultChecked,children,className,disabled,label,name,value,id,onChange}=props,isControlled=void 0!==checked&&void 0!==onChange,groupContext=(0,react.useContext)(RadioGroupContext),contextName=groupContext?.name,contextOnChange=groupContext?.handleChange,contextValue=groupContext?.value,isInGroup=Boolean(groupContext),inputRef=(0,react.useRef)(null),targetId=(0,hook.Yc)(id),classes=classnames_default()(className,"arthur-radio",{"arthur-radio--checked":isControlled?checked:inputRef.current?.checked,"arthur-radio--disabled":!0===disabled}),handleChange=(0,react.useCallback)((ev=>{onChange?.(ev,ev.target.checked),contextOnChange?.(ev)}),[contextOnChange,onChange]);return(0,jsx_runtime.jsxs)(StyledRoot,{as:label?"label":"span",className:classes,ref:forwardedRef,children:[(0,jsx_runtime.jsx)("input",{checked:isInGroup?isString(value)&&contextValue===value:checked,className:"arthur-radio-input",defaultChecked,disabled,id:targetId,name:name??contextName,onChange:handleChange,ref:inputRef,type:"radio",value}),label?(0,jsx_runtime.jsx)("span",{className:"arthur-radio-label",children:label||children}):null]})})),Radio_Radio=Radio;Radio.displayName="Radio";try{Radio.displayName="Radio",Radio.__docgenInfo={description:"",displayName:"Radio",props:{checked:{defaultValue:{value:"false"},description:"Sets the value for a controlled radio",name:"checked",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},defaultChecked:{defaultValue:{value:"false"},description:"Sets the value for a uncontrolled radio",name:"defaultChecked",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: HTMLSpanElement) => void"},{value:"RefObject<HTMLSpanElement>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Radio/Radio.tsx#Radio"]={docgenInfo:Radio.__docgenInfo,name:"Radio",path:"../../packages/arthur-ui/src/Radio/Radio.tsx#Radio"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("../../packages/arthur-ui/src/Button/Button.tsx"),FormField=__webpack_require__("../../packages/arthur-ui/src/FormField/FormField.tsx");let RadioLayoutTypesEnum=function(RadioLayoutTypesEnum){return RadioLayoutTypesEnum.vertical="vertical",RadioLayoutTypesEnum.horizontal="horizontal",RadioLayoutTypesEnum}({});const layoutStyles={vertical:styled_components_browser_esm.iv`
        flex-direction: column;
    `,horizontal:styled_components_browser_esm.iv`
        flex-direction: row;
    `},RadioGroup_StyledRoot=styled_components_browser_esm.ZP.div`
    display: flex;

    ${props=>layoutStyles[props.layout]}
`,RadioGroup=(0,react.forwardRef)(((props,forwardedRef)=>{const{children,className,disabled,label,layout=RadioLayoutTypesEnum.vertical,onChange,value:valueProp,defaultValue,name}=props,isValueControlled=void 0!==valueProp,[internalValue,setInternalValue]=(0,react.useState)(void 0===defaultValue?defaultValue:String(defaultValue)),value=isValueControlled?String(valueProp):internalValue,handleChange=(0,react.useCallback)((event=>{const newValue=event.target.value;isValueControlled||setInternalValue(newValue),onChange?.(event,newValue)}),[isValueControlled,onChange]),groupContext=(0,react.useMemo)((()=>({disabled,name,handleChange,value})),[disabled,name,handleChange,value]),classes=classnames_default()(className,"arthur-radiogroup",`arthur-radiogroup--layout-${layout}`,{"arthur-radiogroup--disabled":!0===disabled});return(0,jsx_runtime.jsx)(FormField.Z,{disabled,label,ref:forwardedRef,children:(0,jsx_runtime.jsx)(RadioGroupContext.Provider,{value:groupContext,children:(0,jsx_runtime.jsx)(RadioGroup_StyledRoot,{className:classes,layout,children})})})})),RadioGroup_RadioGroup=RadioGroup;RadioGroup.displayName="RadioGroup";try{RadioGroup.displayName="RadioGroup",RadioGroup.__docgenInfo={description:"",displayName:"RadioGroup",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},label:{defaultValue:{value:"vertical"},description:"Determines the visual layout",name:"label",required:!1,type:{name:"string"}},layout:{defaultValue:null,description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: React.ChangeEvent<HTMLInputElement>, value: string) => void"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},defaultValue:{defaultValue:{value:"false"},description:"Sets the value for a uncontrolled radio group",name:"defaultValue",required:!1,type:{name:"string"}},value:{defaultValue:{value:"false"},description:"Sets the value for a controlled radio group",name:"value",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"If true, this will add a red * to your label",name:"required",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: HTMLDivElement) => void"},{value:"RefObject<HTMLDivElement>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/RadioGroup/RadioGroup.tsx#RadioGroup"]={docgenInfo:RadioGroup.__docgenInfo,name:"RadioGroup",path:"../../packages/arthur-ui/src/RadioGroup/RadioGroup.tsx#RadioGroup"})}catch(__react_docgen_typescript_loader_error){}const Radio_stories={title:"Components/Radio",component:Radio_Radio,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Uncontrolled={render:args=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Radio_Radio,{defaultChecked:!0,label:"Uncontrolled Item A",name:"Radiogroup",value:"a"}),(0,jsx_runtime.jsx)(Radio_Radio,{label:"Uncontrolled Item B",name:"Radiogroup",value:"b"})]})},Controlled={render:args=>{const[checked,setChecked]=(0,react.useState)(!0);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>{setChecked((prev=>!prev))},children:"Toggle Selection"}),(0,jsx_runtime.jsx)(Radio_Radio,{checked,label:"Controlled",onChange:(ev,checked)=>{setChecked(checked)},value:"a"})]})}},Group={render:args=>(0,jsx_runtime.jsxs)(RadioGroup_RadioGroup,{label:"Radio Group",name:"Radio group disabled example",children:[(0,jsx_runtime.jsx)(Radio_Radio,{label:"Group Item A",value:"a"}),(0,jsx_runtime.jsx)(Radio_Radio,{label:"Group Item B",value:"b"}),(0,jsx_runtime.jsx)(Radio_Radio,{label:"Group Item C",value:"c"}),(0,jsx_runtime.jsx)(Radio_Radio,{label:"Group Item D",value:"d"})]})};Uncontrolled.parameters={...Uncontrolled.parameters,docs:{...Uncontrolled.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    return <div>\n        <Radio defaultChecked label='Uncontrolled Item A' name='Radiogroup' value='a' />\n        <Radio label='Uncontrolled Item B' name='Radiogroup' value='b' />\n      </div>;\n  }\n}",...Uncontrolled.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    const [checked, setChecked] = useState(true);\n    return <>\n        <Button onClick={() => {\n        setChecked(prev => !prev);\n      }}>\n          Toggle Selection\n        </Button>\n\n        <Radio checked={checked} label='Controlled' onChange={(ev, checked) => {\n        setChecked(checked);\n      }} value='a' />\n      </>;\n  }\n}",...Controlled.parameters?.docs?.source}}},Group.parameters={...Group.parameters,docs:{...Group.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    return <RadioGroup label='Radio Group' name='Radio group disabled example'>\n        <Radio label='Group Item A' value='a' />\n        <Radio label='Group Item B' value='b' />\n        <Radio label='Group Item C' value='c' />\n        <Radio label='Group Item D' value='d' />\n      </RadioGroup>;\n  }\n}",...Group.parameters?.docs?.source}}};const __namedExportsOrder=["Uncontrolled","Controlled","Group"]},"../../packages/arthur-ui/src/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Button_Button});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);let ButtonSizesEnum=function(ButtonSizesEnum){return ButtonSizesEnum.small="small",ButtonSizesEnum.medium="medium",ButtonSizesEnum.large="large",ButtonSizesEnum}({}),ButtonVariantsEnum=function(ButtonVariantsEnum){return ButtonVariantsEnum.default="default",ButtonVariantsEnum.secondary="secondary",ButtonVariantsEnum.tertiary="tertiary",ButtonVariantsEnum.danger="danger",ButtonVariantsEnum}({}),ButtonTypesEnum=function(ButtonTypesEnum){return ButtonTypesEnum.button="button",ButtonTypesEnum.resetButton="resetButton",ButtonTypesEnum.submitButton="submitButton",ButtonTypesEnum}({});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const buttonSizeStyles={small:styled_components_browser_esm.iv`
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
`,Button=(0,react.forwardRef)(((props,forwardedRef)=>{const{children,className,disabled=!1,size=ButtonSizesEnum.medium,type=ButtonTypesEnum.button,variant=ButtonVariantsEnum.default,onClick,...rest}=props,classes=classnames_default()(className,"arthur-button",`arthur-button--size-${size}`,`arthur-button--variant-${variant}`,{"arthur-button--disabled":disabled}),handleClick=(0,react.useCallback)((event=>{onClick?.(event)}),[onClick]);return(0,jsx_runtime.jsx)(StyledRoot,{className:classes,disabled,onClick:handleClick,ref:forwardedRef,role:"button",size,type,variant,...rest,children})})),Button_Button=Button;Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"danger"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: React.MouseEvent<HTMLButtonElement>) => void"}},formId:{defaultValue:null,description:"",name:"formId",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"resetButton"'},{value:'"submitButton"'}]}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: unknown) => void"},{value:"RefObject<unknown>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"../../packages/arthur-ui/src/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/arthur-ui/src/FormField/FormField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>FormField_FormField});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),hook=__webpack_require__("../../packages/arthur-ui/src/hook/index.ts");let FormFieldSizeEnum=function(FormFieldSizeEnum){return FormFieldSizeEnum.small="small",FormFieldSizeEnum.medium="medium",FormFieldSizeEnum}({});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const sizeStyles={small:styled_components_browser_esm.iv`
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
//# sourceMappingURL=Radio-stories.bff55c88.iframe.bundle.js.map