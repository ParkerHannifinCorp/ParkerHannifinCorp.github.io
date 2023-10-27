/*! For license information please see checkbox-Checkbox-stories.56ac70b0.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_arthur_docs=self.webpackChunk_arthur_docs||[]).push([[553],{"./stories/checkbox/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,GroupControlled:()=>GroupControlled,GroupUncontrolled:()=>GroupUncontrolled,Uncontrolled:()=>Uncontrolled,_Default:()=>_Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Checkbox_stories});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Icon=__webpack_require__("../../packages/arthur-ui/src/Icon/Icon.tsx");const CheckboxGroupContext=(0,react.createContext)(void 0);var util=__webpack_require__("../../packages/arthur-ui/src/util/index.ts"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const StyledRoot=styled_components_browser_esm.zo.span`
  align-items: center;
  display: flex;
  padding: ${props=>props.theme.token.size.spacing["small-2x"]};

  position: relative;

  & .arthur-checkbox-input {
    appearance: none;
    box-sizing: border-box;
    height: 16.5px;
    margin: 0px;
    position: absolute;
    outline: 0px none;
    width: 16.5px;

    /*** THIS COMBATS LACK OF SPECIFICITY IN CONSUMING APPS' CSS ***/
    border: inherit;
    background-color: inherit;
  }

  & .arthur-checkbox-button {
    height: 16px;
    width: 16px;
    border-radius: 0px;
    background-color: transparent;
    border: 1px solid ${props=>props.theme.token.color.palette.gray[75]};
    border-radius: ${props=>props.theme.token.radius.border.basic};
    margin-right: ${props=>props.theme.token.size.spacing["small-1x"]};
    padding: 0px;

    &:focus,
    &:active {
      outline: ${props=>props.theme.token.size.border.medium} solid
        ${props=>props.theme.token.color.palette.gold.base};
    }
  }

  &.arthur-checkbox--checked,
  &.arthur-checkbox--indeterminate {
    & .arthur-checkbox-button {
      background-color: ${props=>props.theme.token.color.palette.gray[75]};

      & .arthur-icon {
        color: ${props=>props.theme.token.color.white};
        top: -1px;
        position: relative;
      }
    }
  }

  &:has(.arthur-checkbox-input:focus),
  &:has(.arthur-checkbox-input:active),
  &:has(.arthur-checkbox-label:focus),
  &:has(.arthur-checkbox-label:active) {
    & .arthur-checkbox-button {
      outline: ${props=>props.theme.token.size.border.medium} solid
        ${props=>props.theme.token.color.palette.gold.base};
    }
  }

  & .arthur-checkbox-label {
    color: ${props=>props.theme.token.color.palette.gray[75]};
    font-size: ${props=>props.theme.token.size.font.medium};
    user-select: none;
  }

  &.arthur-checkbox--disabled {
    & .arthur-checkbox-button {
      border-color: ${props=>props.theme.token.color.action.text.primary.disabled};
    }

    & .arthur-checkbox-label {
      color: ${props=>props.theme.token.color.action.text.primary.disabled};
    }

    &:has(.arthur-checkbox-input:focus),
    &:has(.arthur-checkbox-input:active),
    &:has(.arthur-checkbox-label:focus),
    &:has(.arthur-checkbox-label:active) {
      & .arthur-checkbox-button {
        outline: 0px none;
      }
    }
  }
`,Checkbox=(0,react.forwardRef)(((props,forwardedRef)=>{const{checked:checkedProp,defaultChecked,className,disabled:disabledProp,inputRef,label,indeterminate,value,onChange,required}=props,internalCheckboxRef=(0,react.useRef)(null),combinedCheckboxRef=(0,util.he)([inputRef,internalCheckboxRef]),groupContext=(0,react.useContext)(CheckboxGroupContext),contextOnChange=groupContext?.onChange,disabled=groupContext?.disabled||disabledProp,contextValue=groupContext?.value,isInGroup=Boolean(groupContext),isCheckedControlled=void 0!==checkedProp||isInGroup,[internalChecked,setInternalChecked]=(0,react.useState)(defaultChecked),checked=(isInGroup?"string"==typeof value&&Array.isArray(contextValue)&&contextValue.includes(value):checkedProp)??internalChecked,inputOnChange=(0,react.useCallback)((event=>{const newChecked=event.target.checked;isCheckedControlled||setInternalChecked(newChecked),onChange?.(event,newChecked),contextOnChange?.(event)}),[contextOnChange,isCheckedControlled,onChange]);(0,react.useEffect)((()=>{internalCheckboxRef.current&&void 0!==indeterminate&&(internalCheckboxRef.current.indeterminate=indeterminate)}),[indeterminate]);const classes=classnames_default()(className,"arthur-checkbox",{"arthur-checkbox--unchecked":!1===checked,"arthur-checkbox--checked":!0===checked,"arthur-checkbox--indeterminate":!0===indeterminate,"arthur-checkbox--disabled":!0===disabled});return(0,jsx_runtime.jsxs)(StyledRoot,{as:label?"label":"span",className:classes,ref:forwardedRef,children:[(0,jsx_runtime.jsx)("input",{"aria-checked":checked,checked,className:"arthur-checkbox-input",disabled,onChange:inputOnChange,ref:combinedCheckboxRef,required,type:"checkbox",value}),(0,jsx_runtime.jsxs)("button",{className:"arthur-checkbox-button",tabIndex:-1,type:"button",children:[checked?(0,jsx_runtime.jsx)(Icon.Z,{value:"check"}):null,indeterminate?(0,jsx_runtime.jsx)(Icon.Z,{value:"hyphen"}):null]}),label]})})),Checkbox_Checkbox=Checkbox;Checkbox.displayName="Checkbox";try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:{value:"false"},description:"Sets the value for a controlled checkbox",name:"checked",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},defaultChecked:{defaultValue:{value:"false"},description:"Sets the initial value for an uncontrolled checkbox",name:"defaultChecked",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"enum",value:[{value:"(instance: Element) => void"},{value:"RefObject<Element>"}]}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: any, checked?: boolean) => void"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: HTMLInputElement) => void"},{value:"RefObject<HTMLInputElement>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"../../packages/arthur-ui/src/Checkbox/Checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("../../packages/arthur-ui/src/Button/Button.tsx"),FormField=__webpack_require__("../../packages/arthur-ui/src/FormField/FormField.tsx");let CheckboxLayoutsEnum=function(CheckboxLayoutsEnum){return CheckboxLayoutsEnum.vertical="vertical",CheckboxLayoutsEnum.horizontal="horizontal",CheckboxLayoutsEnum}({});const layoutStyles={vertical:styled_components_browser_esm.iv`
        flex-direction: column;
    `,horizontal:styled_components_browser_esm.iv`
        flex-direction: row;
    `},CheckboxGroup_StyledRoot=styled_components_browser_esm.zo.div`
    display: flex;

    ${props=>layoutStyles[props.layout]}
`,CheckboxGroup=(0,react.forwardRef)(((props,forwardedRef)=>{const{children,className,disabled,defaultValue=[],label,layout=CheckboxLayoutsEnum.vertical,onChange:onChangeProp,value:valueProp,required}=props,isValueControlled=void 0!==valueProp,[internalValue,setInternalValue]=(0,react.useState)(defaultValue),value=valueProp||internalValue,onChange=(0,react.useCallback)((ev=>{const newValue=value.filter((v=>v!==ev.target.value));ev.target.checked&&newValue.push(ev.target.value),isValueControlled||setInternalValue(newValue),onChangeProp?.(newValue)}),[isValueControlled,onChangeProp,value]),groupContext=(0,react.useMemo)((()=>({disabled,onChange,value})),[disabled,onChange,value]),classes=classnames_default()(className,"arthur-checkboxgroup",`arthur-checkboxgroup--layout-${layout}`,{"arthur-checkboxgroup--disabled":!0===disabled});return(0,jsx_runtime.jsx)(FormField.Z,{disabled,label,ref:forwardedRef,required,children:(0,jsx_runtime.jsx)(CheckboxGroupContext.Provider,{value:groupContext,children:(0,jsx_runtime.jsx)(CheckboxGroup_StyledRoot,{className:classes,layout,ref:forwardedRef,children})})})})),CheckboxGroup_CheckboxGroup=CheckboxGroup;CheckboxGroup.displayName="CheckboxGroup";try{CheckboxGroup.displayName="CheckboxGroup",CheckboxGroup.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{layout:{defaultValue:{value:"vertical"},description:"Determines the visual layout",name:"layout",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(newValue: string[]) => void"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},value:{defaultValue:{value:"[]"},description:"Sets the value for a controlled checkbox group",name:"value",required:!1,type:{name:"string[]"}},defaultValue:{defaultValue:{value:"[]"},description:"Sets the initial value for an uncontrolled checkbox",name:"defaultValue",required:!1,type:{name:"string[]"}},required:{defaultValue:{value:"false"},description:"If true, this will add a red * to your label",name:"required",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: HTMLDivElement) => void"},{value:"RefObject<HTMLDivElement>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"]={docgenInfo:CheckboxGroup.__docgenInfo,name:"CheckboxGroup",path:"../../packages/arthur-ui/src/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"})}catch(__react_docgen_typescript_loader_error){}const Checkbox_stories={component:Checkbox_Checkbox,title:"Components/Checkbox",parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},_Default={render:args=>(0,jsx_runtime.jsx)(Checkbox_Checkbox,{...args,defaultChecked:!0,id:"tester42",label:"Checkbox",value:"Checkbox"})},Uncontrolled={render:args=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Checkbox_Checkbox,{...args,defaultChecked:!0,id:"tester42",label:"Uncontrolled Item A",value:"a"}),(0,jsx_runtime.jsx)(Checkbox_Checkbox,{id:"tester43",label:"Uncontrolled Item B",value:"b"}),(0,jsx_runtime.jsx)(Checkbox_Checkbox,{disabled:!0,id:"tester44",label:"Uncontrolled Item C",value:"c"})]})},Controlled={render:()=>{const[checked,setChecked]=(0,react.useState)(!0);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>{setChecked((prev=>!prev))},children:"Toggle Selection"}),(0,jsx_runtime.jsx)(Checkbox_Checkbox,{checked,label:"Controlled",onChange:(ev,checked)=>{setChecked(checked)},value:"a"})]})}},GroupUncontrolled={render:args=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(CheckboxGroup_CheckboxGroup,{children:[(0,jsx_runtime.jsx)(Checkbox_Checkbox,{label:"A",value:"a"}),(0,jsx_runtime.jsx)(Checkbox_Checkbox,{disabled:!0,label:"B",value:"b"}),(0,jsx_runtime.jsx)(Checkbox_Checkbox,{label:"C",value:"c"}),(0,jsx_runtime.jsx)(Checkbox_Checkbox,{label:"D",value:"d"})]})}),(0,jsx_runtime.jsxs)(CheckboxGroup_CheckboxGroup,{disabled:!0,label:"Disabled",children:[(0,jsx_runtime.jsx)(Checkbox_Checkbox,{label:"A",value:"a"}),(0,jsx_runtime.jsx)(Checkbox_Checkbox,{label:"B",value:"b"}),(0,jsx_runtime.jsx)(Checkbox_Checkbox,{label:"C",value:"c"}),(0,jsx_runtime.jsx)(Checkbox_Checkbox,{label:"D",value:"d"})]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(CheckboxGroup_CheckboxGroup,{label:"Horizontal",layout:"horizontal",children:[(0,jsx_runtime.jsx)(Checkbox_Checkbox,{label:"A",value:"a"}),(0,jsx_runtime.jsx)(Checkbox_Checkbox,{label:"B",value:"b"}),(0,jsx_runtime.jsx)(Checkbox_Checkbox,{label:"C",value:"c"}),(0,jsx_runtime.jsx)(Checkbox_Checkbox,{label:"D",value:"d"})]})})]})},GroupControlled={render:()=>{const[value,setValue]=(0,react.useState)(["a","d"]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(CheckboxGroup_CheckboxGroup,{defaultValue:["c","d"],label:"defaultValue",children:[(0,jsx_runtime.jsx)(Checkbox_Checkbox,{label:"A",value:"a"}),(0,jsx_runtime.jsx)(Checkbox_Checkbox,{disabled:!0,label:"B",value:"b"}),(0,jsx_runtime.jsx)(Checkbox_Checkbox,{label:"C",value:"c"}),(0,jsx_runtime.jsx)(Checkbox_Checkbox,{label:"D",value:"d"})]}),(0,jsx_runtime.jsxs)(CheckboxGroup_CheckboxGroup,{label:"Controlled",onChange:newValue=>{console.log(newValue),setValue(newValue)},value,children:[(0,jsx_runtime.jsx)(Checkbox_Checkbox,{label:"A",value:"a"}),(0,jsx_runtime.jsx)(Checkbox_Checkbox,{indeterminate:!0,label:"B",value:"b"}),(0,jsx_runtime.jsx)(Checkbox_Checkbox,{disabled:!0,label:"C",value:"c"}),(0,jsx_runtime.jsx)(Checkbox_Checkbox,{label:"D",value:"d"})]})]})}};_Default.parameters={..._Default.parameters,docs:{..._Default.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    return <Checkbox {...args} defaultChecked id='tester42' label='Checkbox' value='Checkbox' />;\n  }\n}",..._Default.parameters?.docs?.source}}},Uncontrolled.parameters={...Uncontrolled.parameters,docs:{...Uncontrolled.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    return <div>\r\n        <Checkbox {...args} defaultChecked id='tester42' label='Uncontrolled Item A' value='a' />\r\n        <Checkbox id='tester43' label='Uncontrolled Item B' value='b' />\r\n        <Checkbox disabled id='tester44' label='Uncontrolled Item C' value='c' />\r\n      </div>;\n  }\n}",...Uncontrolled.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const [checked, setChecked] = useState(true);\n    return <>\r\n        <Button onClick={() => {\n        setChecked(prev => !prev);\n      }}>\r\n          Toggle Selection\r\n        </Button>\r\n\r\n        <Checkbox checked={checked} label='Controlled' onChange={(ev, checked) => {\n        setChecked(checked);\n      }} value='a' />\r\n      </>;\n  }\n}",...Controlled.parameters?.docs?.source}}},GroupUncontrolled.parameters={...GroupUncontrolled.parameters,docs:{...GroupUncontrolled.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    return <>\r\n        <div>\r\n          <CheckboxGroup>\r\n            <Checkbox label='A' value='a' />\r\n            <Checkbox disabled label='B' value='b' />\r\n            <Checkbox label='C' value='c' />\r\n            <Checkbox label='D' value='d' />\r\n          </CheckboxGroup>\r\n        </div>\r\n\r\n        <CheckboxGroup disabled label='Disabled'>\r\n          <Checkbox label='A' value='a' />\r\n          <Checkbox label='B' value='b' />\r\n          <Checkbox label='C' value='c' />\r\n          <Checkbox label='D' value='d' />\r\n        </CheckboxGroup>\r\n\r\n        <div>\r\n          <CheckboxGroup label='Horizontal' layout='horizontal'>\r\n            <Checkbox label='A' value='a' />\r\n            <Checkbox label='B' value='b' />\r\n            <Checkbox label='C' value='c' />\r\n            <Checkbox label='D' value='d' />\r\n          </CheckboxGroup>\r\n        </div>\r\n      </>;\n  }\n}",...GroupUncontrolled.parameters?.docs?.source}}},GroupControlled.parameters={...GroupControlled.parameters,docs:{...GroupControlled.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    const [value, setValue] = useState(['a', 'd']);\n    return <>\r\n        <CheckboxGroup defaultValue={['c', 'd']} label='defaultValue'>\r\n          <Checkbox label='A' value='a' />\r\n          <Checkbox disabled label='B' value='b' />\r\n          <Checkbox label='C' value='c' />\r\n          <Checkbox label='D' value='d' />\r\n        </CheckboxGroup>\r\n\r\n        <CheckboxGroup label='Controlled' onChange={newValue => {\n        console.log(newValue);\n        setValue(newValue);\n      }} value={value}>\r\n          <Checkbox label='A' value='a' />\r\n          <Checkbox indeterminate label='B' value='b' />\r\n          <Checkbox disabled label='C' value='c' />\r\n          <Checkbox label='D' value='d' />\r\n        </CheckboxGroup>\r\n      </>;\n  }\n}",...GroupControlled.parameters?.docs?.source}}};const __namedExportsOrder=["_Default","Uncontrolled","Controlled","GroupUncontrolled","GroupControlled"]},"../../packages/arthur-ui/src/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Button_Button});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);let ButtonSizesEnum=function(ButtonSizesEnum){return ButtonSizesEnum.small="small",ButtonSizesEnum.medium="medium",ButtonSizesEnum.large="large",ButtonSizesEnum}({}),ButtonVariantsEnum=function(ButtonVariantsEnum){return ButtonVariantsEnum.default="default",ButtonVariantsEnum.secondary="secondary",ButtonVariantsEnum.tertiary="tertiary",ButtonVariantsEnum.danger="danger",ButtonVariantsEnum}({}),ButtonTypesEnum=function(ButtonTypesEnum){return ButtonTypesEnum.button="button",ButtonTypesEnum.resetButton="resetButton",ButtonTypesEnum.submitButton="submitButton",ButtonTypesEnum}({});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const buttonSizeStyles={small:styled_components_browser_esm.iv`
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
`,FormField=(0,react.forwardRef)(((props,forwardedRef)=>{const{className,id,children,disabled,errorText,label,infoText,size=FormFieldSizeEnum.medium,required,...rest}=props,targetId=(0,hook.Yc)(id),showHeader=Boolean(label),showErrorText=Boolean(errorText),showInfoText=Boolean(infoText),showFooter=showErrorText||showInfoText,classes=classnames_default()(className,"arthur-field",`arthur-field--size-${size}`,{"arthur-field--disabled":!0===disabled});return(0,jsx_runtime.jsxs)(StyledRoot,{$showErrorText:showErrorText,$showInfoText:showInfoText,className:classes,ref:forwardedRef,size,...rest,children:[showHeader?(0,jsx_runtime.jsxs)("div",{className:"arthur-field-header",children:[(0,jsx_runtime.jsx)("label",{className:"arthur-field-header-label",htmlFor:targetId,children:label}),!0===required&&(0,jsx_runtime.jsx)("span",{className:"arthur-field-header-required",children:"*"})]}):null,children,showFooter?(0,jsx_runtime.jsxs)("div",{className:"arthur-field-footer",children:[showInfoText?(0,jsx_runtime.jsx)("span",{className:"arthur-field-footer-info",children:infoText}):null,showErrorText?(0,jsx_runtime.jsx)("span",{className:"arthur-field-footer-error",children:errorText}):null]}):null]})})),FormField_FormField=FormField;FormField.displayName="FormField";try{FormField.displayName="FormField",FormField.__docgenInfo={description:"",displayName:"FormField",props:{errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},infoText:{defaultValue:null,description:"",name:"infoText",required:!1,type:{name:"string"}},invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},required:{defaultValue:{value:"false"},description:"If true, this will add a red * to your label",name:"required",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: HTMLDivElement) => void"},{value:"RefObject<HTMLDivElement>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/FormField/FormField.tsx#FormField"]={docgenInfo:FormField.__docgenInfo,name:"FormField",path:"../../packages/arthur-ui/src/FormField/FormField.tsx#FormField"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/arthur-ui/src/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Icon_Icon});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);let IconSizesEnum=function(IconSizesEnum){return IconSizesEnum[IconSizesEnum["small-1x"]=0]="small-1x",IconSizesEnum[IconSizesEnum.small=1]="small",IconSizesEnum[IconSizesEnum.medium=2]="medium",IconSizesEnum[IconSizesEnum.large=3]="large",IconSizesEnum}({});const ICON_VALUES={add:"fa-plus",calendar:"fa-calendar",catalog:"fa-book",check:"fa-check","chevron-down":"fa-chevron-down","chevron-left":"fa-chevron-left","chevron-right":"fa-chevron-right","chevron-up":"fa-chevron-up",close:"fa-x",disk:"fa-floppy-disk",document:"fa-file","dollar-sign":"fa-dollar-sign",download:"fa-download","external-link":"fa-arrow-up-right-from-square",feedback:"fa-bullhorn","file-upload":"fa-file-arrow-up",folder:"fa-folder-open",gear:"fa-gear",information:"fa-circle-info",keyboard:"fa-keyboard",list:"fa-list",move:"fa-arrows-up-down-left-right",notification:"fa-bell","pdf-document":"fa-file-pdf",print:"fa-print","quote-tags":"fa-tags",refresh:"fa-rotate-right",remove:"fa-x",reset:"fa-rotate-right",search:"fa-magnifying-glass",share:"fa-share","shopping-cart":"fa-shopping-cart",subtract:"fa-minus",user:"fa-user",video:"fa-video",warning:"fa-triangle-exclamation",zoom:"fa-magnifying-glass-plus",hyphen:"fa-hyphen","fa-image-slash":"fa-image-slash"};var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const iconSizeStyles={"small-1x":styled_components_browser_esm.iv`
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
`,Icon=(0,react.forwardRef)(((props,forwardedRef)=>{const{className,disabled,size="medium",value,onClick,...rest}=props,iconClass=ICON_VALUES[value];if(!IconSizesEnum[size])throw new Error(`icon: invalid size "${size}"`);const isClickable=!0===disabled||"function"==typeof onClick,handleClick=(0,react.useCallback)((event=>{disabled||onClick?.(event)}),[disabled,onClick]),classes={root:classnames_default()(className,"arthur-icon",`arthur-icon--size-${size}`,{"arthur-icon--clickable":isClickable,"arthur-icon--disabled":!0===disabled}),regular:classnames_default()("arthur-icon-regular","fa-regular",{"fa-foobar":Boolean(iconClass)&&Boolean(value),[iconClass]:Boolean(iconClass),[value]:Boolean(iconClass)&&Boolean(value)})};return(0,jsx_runtime.jsx)(StyledRoot,{as:isClickable?"button":"span",className:classes.root,disabled,onClick:handleClick,ref:forwardedRef,children:(0,jsx_runtime.jsx)(StyledIcon,{className:classes.regular,size,...rest})})})),Icon_Icon=Icon;Icon.displayName="Icon";try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"small-1x"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: React.MouseEvent<HTMLSpanElement>) => unknown"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"enum",value:[{value:'"search"'},{value:'"video"'},{value:'"document"'},{value:'"add"'},{value:'"calendar"'},{value:'"catalog"'},{value:'"check"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"close"'},{value:'"disk"'},{value:'"dollar-sign"'},{value:'"download"'},{value:'"external-link"'},{value:'"feedback"'},{value:'"file-upload"'},{value:'"folder"'},{value:'"gear"'},{value:'"information"'},{value:'"keyboard"'},{value:'"list"'},{value:'"move"'},{value:'"notification"'},{value:'"pdf-document"'},{value:'"print"'},{value:'"quote-tags"'},{value:'"refresh"'},{value:'"remove"'},{value:'"reset"'},{value:'"share"'},{value:'"shopping-cart"'},{value:'"subtract"'},{value:'"user"'},{value:'"warning"'},{value:'"zoom"'},{value:'"fa-image-slash"'},{value:'"hyphen"'}]}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: HTMLButtonElement | HTMLSpanElement) => void"},{value:"RefObject<HTMLButtonElement | HTMLSpanElement>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Icon/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"../../packages/arthur-ui/src/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/arthur-ui/src/hook/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Fr:()=>useEnsureRef,Yc:()=>useEnsureId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function useEnsureRef(forwardedRef){const newRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);return forwardedRef??newRef}let useEnsureIdCounter=0;function useEnsureId(propId){const id=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(useEnsureIdCounter++,`arthur-${useEnsureIdCounter}`)),[]);return propId||id}},"../../packages/arthur-ui/src/util/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{VD:()=>KeyCode,he:()=>useCombineRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");let KeyCode=function(KeyCode){return KeyCode.Enter="Enter",KeyCode.Escape="Escape",KeyCode.ArrowDown="ArrowDown",KeyCode.ArrowLeft="ArrowLeft",KeyCode.ArrowRight="ArrowRight",KeyCode.ArrowUp="ArrowUp",KeyCode}({});function useCombineRefs(refs){return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((el=>{refs.forEach((ref=>{"function"==typeof ref?ref(el):"object"==typeof ref&&null!==ref&&"current"in ref&&(ref.current=el)}))}),refs)}},"../../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);
//# sourceMappingURL=checkbox-Checkbox-stories.56ac70b0.iframe.bundle.js.map