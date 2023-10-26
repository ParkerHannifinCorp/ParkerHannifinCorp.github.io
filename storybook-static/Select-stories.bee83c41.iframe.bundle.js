/*! For license information please see Select-stories.bee83c41.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_arthur_docs=self.webpackChunk_arthur_docs||[]).push([[779],{"./stories/Select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Select_stories});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),TextInput=__webpack_require__("../../packages/arthur-ui/src/TextInput/TextInput.tsx"),Icon=__webpack_require__("../../packages/arthur-ui/src/Icon/Icon.tsx"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const StyledRoot=styled_components_browser_esm.ZP.div`
    font-size: ${props=>props.theme.token.size.font.medium};
    padding: ${props=>props.theme.token.size.spacing.small};
    border-bottom: ${props=>`1px solid ${props.theme.token.color.palette.gray[20]}`};
`;function SelectOption(props){const{label,onClick,idx}=props,handleClick=(0,react.useCallback)((()=>{onClick(idx)}),[idx,onClick]);return(0,jsx_runtime.jsx)(StyledRoot,{onClick:handleClick,children:label})}SelectOption.displayName="SelectOption";const Select_SelectOption=SelectOption;try{SelectOption.displayName="SelectOption",SelectOption.__docgenInfo={description:"",displayName:"SelectOption",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},idx:{defaultValue:null,description:"",name:"idx",required:!0,type:{name:"number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(idx: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Select/SelectOption.tsx#SelectOption"]={docgenInfo:SelectOption.__docgenInfo,name:"SelectOption",path:"../../packages/arthur-ui/src/Select/SelectOption.tsx#SelectOption"})}catch(__react_docgen_typescript_loader_error){}const SelectBody_StyledRoot=styled_components_browser_esm.ZP.div`
    border: 1px solid transparent;
    max-height: ${props=>props.open?"500px":0};
    transition: max-height 500ms ease;
    overflow: hidden;
    position: absolute;
    width: 100%;
`;function SelectBody(props){const{children,open}=props;return(0,jsx_runtime.jsx)(SelectBody_StyledRoot,{open,children})}SelectBody.displayName="SelectBody";const Select_SelectBody=SelectBody;SelectBody.displayName="SelectBody";try{SelectBody.displayName="SelectBody",SelectBody.__docgenInfo={description:"",displayName:"SelectBody",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"enum",value:[{value:"false"},{value:"true"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Select/SelectBody.tsx#SelectBody"]={docgenInfo:SelectBody.__docgenInfo,name:"SelectBody",path:"../../packages/arthur-ui/src/Select/SelectBody.tsx#SelectBody"})}catch(__react_docgen_typescript_loader_error){}const Select_StyledRoot=styled_components_browser_esm.ZP.div`
  border: 1px solid transparent;
  position: relative;
`,Select=(0,react.forwardRef)(((props,_forwardedRef)=>{const{options,value}=props,[showBody,_setShowBody]=(0,react.useState)(!1),[selectedItemIdx,setSelectedItemIdx]=(0,react.useState)(options.findIndex((o=>o.value===value))),selectedItemText=void 0!==selectedItemIdx&&selectedItemIdx>=0?options[selectedItemIdx].label:void 0,handleOptionClick=(0,react.useCallback)((idx=>{setSelectedItemIdx(idx)}),[]);return(0,jsx_runtime.jsxs)(Select_StyledRoot,{children:[(0,jsx_runtime.jsx)(TextInput.Z,{className:"arthur-select-input",placeholder:"Select an option",suffix:(0,jsx_runtime.jsx)(Icon.Z,{size:"small",value:"chevron-down"}),value:selectedItemText}),(0,jsx_runtime.jsx)(Select_SelectBody,{open:showBody,children:options.map(((option,idx)=>(0,jsx_runtime.jsx)(Select_SelectOption,{...option,idx,onClick:handleOptionClick},option.value)))})]})})),Select_Select=Select;Select.displayName="Select";try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"enum",value:[{value:"string"},{value:"number"}]}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectOptionProps[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: React.ChangeEvent<SelectOptionProps>, value: (string | number)[]) => void"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: HTMLDivElement) => void"},{value:"RefObject<HTMLDivElement>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Select/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"../../packages/arthur-ui/src/Select/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}const Select_stories={title:"Components/Select",component:Select_Select,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Primary={args:{options:[{label:"Option One",value:1},{label:"Option Two",value:2},{label:"Option Three",value:3},{label:"Option Four",value:4},{label:"Lorem Ipsum",value:5},{label:"Parker Ipsum",value:6},{label:"Foo Bar",value:7},{label:"Testy McTester",value:8}],value:2}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    options,\n    value: 2\n  }\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"../../packages/arthur-ui/src/FormField/FormField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>FormField_FormField});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),hook=__webpack_require__("../../packages/arthur-ui/src/hook/index.ts");let FormFieldSizeEnum=function(FormFieldSizeEnum){return FormFieldSizeEnum.small="small",FormFieldSizeEnum.medium="medium",FormFieldSizeEnum}({});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const sizeStyles={small:styled_components_browser_esm.iv`
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
`,Icon=(0,react.forwardRef)(((props,forwardedRef)=>{const{className,disabled,size="medium",value,onClick,...rest}=props,iconClass=ICON_VALUES[value];if(!IconSizesEnum[size])throw new Error(`icon: invalid size "${size}"`);const isClickable=!0===disabled||"function"==typeof onClick,handleClick=(0,react.useCallback)((event=>{disabled||onClick?.(event)}),[disabled,onClick]),classes={root:classnames_default()(className,"arthur-icon",`arthur-icon--size-${size}`,{"arthur-icon--clickable":isClickable,"arthur-icon--disabled":!0===disabled}),regular:classnames_default()("arthur-icon-regular","fa-regular",{"fa-foobar":Boolean(iconClass)&&Boolean(value),[iconClass]:Boolean(iconClass),[value]:Boolean(iconClass)&&Boolean(value)})};return(0,jsx_runtime.jsx)(StyledRoot,{as:isClickable?"button":"span",className:classes.root,disabled,onClick:handleClick,ref:forwardedRef,children:(0,jsx_runtime.jsx)(StyledIcon,{className:classes.regular,size,...rest})})})),Icon_Icon=Icon;Icon.displayName="Icon";try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"small-1x"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: React.MouseEvent<HTMLSpanElement>) => unknown"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"enum",value:[{value:'"search"'},{value:'"video"'},{value:'"document"'},{value:'"add"'},{value:'"calendar"'},{value:'"catalog"'},{value:'"check"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"close"'},{value:'"disk"'},{value:'"dollar-sign"'},{value:'"download"'},{value:'"external-link"'},{value:'"feedback"'},{value:'"file-upload"'},{value:'"folder"'},{value:'"gear"'},{value:'"information"'},{value:'"keyboard"'},{value:'"list"'},{value:'"move"'},{value:'"notification"'},{value:'"pdf-document"'},{value:'"print"'},{value:'"quote-tags"'},{value:'"refresh"'},{value:'"remove"'},{value:'"reset"'},{value:'"share"'},{value:'"shopping-cart"'},{value:'"subtract"'},{value:'"user"'},{value:'"warning"'},{value:'"zoom"'},{value:'"fa-image-slash"'},{value:'"hyphen"'}]}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: HTMLButtonElement | HTMLSpanElement) => void"},{value:"RefObject<HTMLButtonElement | HTMLSpanElement>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Icon/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"../../packages/arthur-ui/src/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/arthur-ui/src/TextInput/TextInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>TextInput_TextInput});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),hook=__webpack_require__("../../packages/arthur-ui/src/hook/index.ts"),FormField=__webpack_require__("../../packages/arthur-ui/src/FormField/FormField.tsx");let TextInputSizeEnum=function(TextInputSizeEnum){return TextInputSizeEnum.small="small",TextInputSizeEnum.medium="medium",TextInputSizeEnum}({}),TextInputAlignmentEnum=function(TextInputAlignmentEnum){return TextInputAlignmentEnum.left="left",TextInputAlignmentEnum.center="center",TextInputAlignmentEnum.right="right",TextInputAlignmentEnum}({});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const alignmentStyles={left:styled_components_browser_esm.iv`
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
    min-height: 32px;

    & .arthur-textinput-input {
      font-size: ${props=>props.theme.token.size.font.small};
      min-height: 32px;
    }
  `,medium:styled_components_browser_esm.iv`
    font-size: ${props=>props.theme.token.size.font.medium};
    min-height: 40px;

    & .arthur-textinput-input {
      font-size: ${props=>props.theme.token.size.font.medium};
      min-height: 40px;
    }
  `},StyledRoot=styled_components_browser_esm.ZP.span`
  align-items: center;
  border: 1px solid ${props=>props.theme.token.color.palette.gray[75]};
  border-radius: ${props=>props.theme.token.radius.border.basic};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  min-width: 300px;
  overflow: hidden;
  position: relative;

  & .arthur-textinput-prefix {
    font-family: ${props=>props.theme.token.font.family["sans-serif"]};
    padding-left: ${props=>props.theme.token.size.spacing["small-1x"]};
    user-select: none;
  }

  & .arthur-textinput-suffix {
    font-family: ${props=>props.theme.token.font.family["sans-serif"]};
    padding-right: ${props=>props.theme.token.size.spacing["small-1x"]};
    user-select: none;
  }

  & .arthur-textinput-input {
    background-color: ${props=>props.theme.token.color.white};
    border: 0px none;
    box-sizing: border-box;
    font-family: ${props=>props.theme.token.font.family["sans-serif"]};
    padding: 0px ${props=>props.theme.token.size.spacing[1]};
    width: 100%;

    &::placeholder {
      color: ${props=>props.theme.token.color.palette.gray[20]};
    }

    &:focus {
      outline: none;
    }
  }

  &:has(.arthur-textinput-input:focus) {
    border: 1px solid transparent;
    outline: ${props=>props.theme.token.size.border.medium} solid
      ${props=>props.theme.token.color.palette.gold.base};
  }

  &.arthur-textinput--invalid {
    border-color: ${props=>props.theme.token.color.feedback.error};

    &:has(.arthur-textinput-input:focus) {
      outline: ${props=>props.theme.token.size.border.medium} solid
        ${props=>props.theme.token.color.feedback.error};
    }
  }

  &.arthur-textinput--disabled {
    border: 1px solid ${props=>props.theme.token.color.palette.gray[20]};
    color: ${props=>props.theme.token.color.palette.gray[20]};

    & .arthur-textinput-input {
      color: ${props=>props.theme.token.color.palette.gray[20]};
    }
  }

  &.arthur-textinput--readonly {
    & .arthur-textinput-input {
      cursor: pointer;
    }
  }

  ${props=>alignmentStyles[props.alignment]}
  ${props=>sizeStyles[props.size]}
`,TextInput=(0,react.forwardRef)(((props,forwardedRef)=>{const{alignment=TextInputAlignmentEnum.left,autoComplete,className,disabled,errorText,id,infoText,label,prefix,readOnly,required,size=TextInputSizeEnum.medium,suffix,onChange,placeholder,value,defaultValue}=props,isControlled=Boolean(Boolean(value)&&!defaultValue&&Boolean(onChange)),classes=classnames_default()(className,"arthur-textinput",`arthur-textinput--alignment-${alignment}`,`arthur-textinput--size-${size}`,{"arthur-textinput--disabled":!0===disabled,"arthur-textinput--readonly":!0===readOnly}),[uncontrolledValue,setUncontrolledValue]=(0,react.useState)(defaultValue),internalValue=isControlled?value:uncontrolledValue,targetId=(0,hook.Yc)(id),handleChange=(0,react.useCallback)((event=>{const nextValue=event.target.value;isControlled?onChange?.(nextValue):setUncontrolledValue(nextValue)}),[isControlled,onChange]);return(0,react.useEffect)((()=>{onChange?.(internalValue)}),[internalValue,onChange]),(0,jsx_runtime.jsx)(FormField.Z,{className,disabled,errorText,id:targetId,infoText,label,ref:forwardedRef,required,size,children:(0,jsx_runtime.jsxs)(StyledRoot,{alignment,className:classes,size,children:[prefix?(0,jsx_runtime.jsx)("span",{className:"arthur-textinput-prefix",children:prefix}):null,(0,jsx_runtime.jsx)("input",{autoComplete:!0===autoComplete?"on":"off",className:"arthur-textinput-input",disabled,id:targetId,onChange:handleChange,placeholder,readOnly,type:"text",value:internalValue||""}),suffix?(0,jsx_runtime.jsx)("span",{className:"arthur-textinput-suffix",children:suffix}):null]})})})),TextInput_TextInput=TextInput;TextInput.displayName="TextInput";try{TextInput.displayName="TextInput",TextInput.__docgenInfo={description:"",displayName:"TextInput",props:{alignment:{defaultValue:{value:"left"},description:"",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},minLength:{defaultValue:null,description:"",name:"minLength",required:!1,type:{name:"number"}},required:{defaultValue:{value:"false"},description:"If true, this will add a red * to your label",name:"required",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"false"},{value:"true"},{value:"ReactElement<any, string | JSXElementConstructor<any>>"},{value:"Iterable<ReactNode>"},{value:"ReactPortal"}]}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}},infoText:{defaultValue:null,description:"",name:"infoText",required:!1,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"false"},{value:"true"},{value:"ReactElement<any, string | JSXElementConstructor<any>>"},{value:"Iterable<ReactNode>"},{value:"ReactPortal"}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value?: string) => void"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: HTMLDivElement) => void"},{value:"RefObject<HTMLDivElement>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/TextInput/TextInput.tsx#TextInput"]={docgenInfo:TextInput.__docgenInfo,name:"TextInput",path:"../../packages/arthur-ui/src/TextInput/TextInput.tsx#TextInput"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/arthur-ui/src/hook/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Fr:()=>useEnsureRef,Yc:()=>useEnsureId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function useEnsureRef(forwardedRef){const newRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);return forwardedRef??newRef}let useEnsureIdCounter=0;function useEnsureId(propId){const id=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(useEnsureIdCounter++,`arthur-${useEnsureIdCounter}`)),[]);return propId||id}},"../../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);
//# sourceMappingURL=Select-stories.bee83c41.iframe.bundle.js.map