/*! For license information please see Modal-stories.168d76da.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_arthur_docs=self.webpackChunk_arthur_docs||[]).push([[32],{"./stories/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Acknowledgement:()=>Acknowledgement,Default:()=>Default,Disabled:()=>Disabled,Hidden:()=>Hidden,NoButtons:()=>NoButtons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});var react=__webpack_require__("../../node_modules/react/index.js"),react_dom=__webpack_require__("../../node_modules/react-dom/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Button=__webpack_require__("../../packages/arthur-ui/src/Button/Button.tsx"),Icon=__webpack_require__("../../packages/arthur-ui/src/Icon/Icon.tsx"),util=__webpack_require__("../../packages/arthur-ui/src/util/index.ts"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const StyledRoot=styled_components_browser_esm.ZP.div`
  border-bottom: 1px solid ${props=>props.theme.token.color.palette.gray[20]};
  display: flex;
  font-size: ${props=>props.theme.token.size.font.large};
  justify-content: center;
  position: relative;
  overflow-wrap: anywhere;
  padding: ${props=>`${props.theme.token.size.spacing.medium} 0`};
`;function ModalHeading(props){const{children}=props;return(0,jsx_runtime.jsx)(StyledRoot,{children})}ModalHeading.displayName="ModalHeading",ModalHeading.displayName="ModalHeading";try{ModalHeading.displayName="ModalHeading",ModalHeading.__docgenInfo={description:"",displayName:"ModalHeading",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Modal/ModalHeading.tsx#ModalHeading"]={docgenInfo:ModalHeading.__docgenInfo,name:"ModalHeading",path:"../../packages/arthur-ui/src/Modal/ModalHeading.tsx#ModalHeading"})}catch(__react_docgen_typescript_loader_error){}const ModalContent_StyledRoot=styled_components_browser_esm.ZP.div`
  position: relative;
  margin-bottom: ${props=>props.theme.token.size.spacing["large-2x"]};
  padding: ${props=>`${props.theme.token.size.spacing.medium} 0`};

  & .arthur-modal-close {
    background-color: transparent;
    border: 0px none;
    position: absolute;
    cursor: pointer;
  }
`;function ModalContent(props){const{children}=props;return(0,jsx_runtime.jsx)(ModalContent_StyledRoot,{children})}ModalContent.displayName="ModalContent",ModalContent.displayName="ModalContent";try{ModalContent.displayName="ModalContent",ModalContent.__docgenInfo={description:"",displayName:"ModalContent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Modal/ModalContent.tsx#ModalContent"]={docgenInfo:ModalContent.__docgenInfo,name:"ModalContent",path:"../../packages/arthur-ui/src/Modal/ModalContent.tsx#ModalContent"})}catch(__react_docgen_typescript_loader_error){}const ModalFooter_StyledRoot=styled_components_browser_esm.ZP.div`
  display: flex;
  justify-content: center;
  gap: ${props=>props.theme.token.size.spacing.medium};
`;function ModalFooter(props){const{children}=props;return(0,jsx_runtime.jsx)(ModalFooter_StyledRoot,{children})}ModalFooter.displayName="ModalFooter",ModalFooter.displayName="ModalFooter";try{ModalFooter.displayName="ModalFooter",ModalFooter.__docgenInfo={description:"",displayName:"ModalFooter",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Modal/ModalFooter.tsx#ModalFooter"]={docgenInfo:ModalFooter.__docgenInfo,name:"ModalFooter",path:"../../packages/arthur-ui/src/Modal/ModalFooter.tsx#ModalFooter"})}catch(__react_docgen_typescript_loader_error){}const noop=function(){},Modal_StyledRoot=styled_components_browser_esm.ZP.div`
  background-color: ${props=>props.theme.token.color.white};
  box-shadow: ${props=>props.theme.token.shadow.box.medium};
  top: 20vh;
  position: relative;

  & .arthur-modal-inner {
    position: relative;

    & .arthur-modal-close {
      background-color: transparent;
      border: 0px none;
      position: absolute;
      cursor: pointer;
    }
  }
`,StyledOverlay=styled_components_browser_esm.ZP.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  display: flex;
  align-items: baseline;
  justify-content: center;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 999;
`,Modal=(0,react.forwardRef)(((props,forwardedRef)=>{const{children,className,disabled,hidden=!0,onClose=noop,onButtonClick,header,primaryButtonText,secondaryButtonText,...rest}=props;(0,react.useEffect)((()=>{function onEscape(event){event.code===util.VD.Escape&&!0!==disabled&&onClose()}return document.addEventListener("keydown",onEscape),()=>{document.removeEventListener("keydown",onEscape)}}),[]);const classes=classnames_default()(className,"arthur-modal",{"arthur-modal--disabled":!0===disabled}),onOverlayClick=(0,react.useCallback)((event=>{event.target.dataset.modalOverlay&&!0!==disabled&&onClose()}),[disabled,onClose]),handleButtonClick=(0,react.useCallback)((type=>event=>{onButtonClick?.(event,type)}),[onButtonClick]);return hidden?null:react_dom.createPortal((0,jsx_runtime.jsx)(StyledOverlay,{className:"arthur-modal-overlay","data-modal-overlay":!0,onClick:onOverlayClick,ref:forwardedRef,children:(0,jsx_runtime.jsx)(Modal_StyledRoot,{className:classes,...rest,children:(0,jsx_runtime.jsxs)("div",{className:"arthur-modal-inner",children:[(0,jsx_runtime.jsx)(Icon.Z,{className:"arthur-modal-close",disabled,onClick:onClose,value:"close"}),(0,jsx_runtime.jsx)(ModalHeading,{children:header}),(0,jsx_runtime.jsx)(ModalContent,{children}),(0,jsx_runtime.jsxs)(ModalFooter,{children:[secondaryButtonText?(0,jsx_runtime.jsx)(Button.Z,{disabled,onClick:handleButtonClick("secondary"),variant:"secondary",children:secondaryButtonText}):null,primaryButtonText?(0,jsx_runtime.jsx)(Button.Z,{disabled,onClick:handleButtonClick("primary"),variant:"default",children:primaryButtonText}):null]})]})})}),document.body)})),Modal_Modal=Modal;Modal.displayName="Modal";try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},secondaryButtonText:{defaultValue:null,description:"Describes the button text for the cancellation button",name:"secondaryButtonText",required:!1,type:{name:"string"}},primaryButtonText:{defaultValue:null,description:"Describes the button text for the confirmation button",name:"primaryButtonText",required:!1,type:{name:"string"}},header:{defaultValue:{value:"undefined"},description:"Describes the header text of this component.",name:"header",required:!1,type:{name:"string"}},onClose:{defaultValue:{value:"undefined"},description:"Handles events that indicate that the component should hide itself.",name:"onClose",required:!1,type:{name:"() => void"}},onButtonClick:{defaultValue:{value:"undefined"},description:"Handles button events for supported variants.",name:"onButtonClick",required:!1,type:{name:'(event: React.MouseEvent<HTMLButtonElement>, type: "secondary" | "primary") => void'}},hidden:{defaultValue:{value:"false"},description:"Describes whether this component should be hidden.",name:"hidden",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: HTMLDivElement) => void"},{value:"RefObject<HTMLDivElement>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"../../packages/arthur-ui/src/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}const Modal_stories={title:"Components/Modal",component:Modal_Modal,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Default={args:{hidden:!1,disabled:!1,size:"medium",variant:"default",header:"Modal Header",primaryButtonText:"Ok",secondaryButtonText:"Cancel",children:"Laudem et voluptatem ipsam causam non emolumento aliquo, sed animo etiam ac ratione voluptatem ut ratione voluptatem appetere eaque ipsa, quae sine dubio praeclara sunt, explicabo nemo enim inter argumentum conclusionemque rationis et fortibus viris commemorandis eorumque factis non quo pertineant non existimant oportere nimium."}},Acknowledgement={args:{hidden:!1,disabled:!1,size:"medium",variant:"default",header:"Modal Header",primaryButtonText:"Acknowledgement",children:"Laudem et voluptatem ipsam causam non emolumento aliquo, sed animo etiam ac ratione voluptatem ut ratione voluptatem appetere eaque ipsa, quae sine dubio praeclara sunt, explicabo nemo enim inter argumentum conclusionemque rationis et fortibus viris commemorandis eorumque factis non quo pertineant non existimant oportere nimium."}},NoButtons={args:{hidden:!1,disabled:!1,size:"medium",variant:"default",header:"Modal Header",children:"Laudem et voluptatem ipsam causam non emolumento aliquo, sed animo etiam ac ratione voluptatem ut ratione voluptatem appetere eaque ipsa, quae sine dubio praeclara sunt, explicabo nemo enim inter argumentum conclusionemque rationis et fortibus viris commemorandis eorumque factis non quo pertineant non existimant oportere nimium."}},Disabled={args:{hidden:!1,disabled:!0,size:"medium",variant:"default",header:"Modal Header",primaryButtonText:"Ok",secondaryButtonText:"Cancel",children:"Laudem et voluptatem ipsam causam non emolumento aliquo, sed animo etiam ac ratione voluptatem ut ratione voluptatem appetere eaque ipsa, quae sine dubio praeclara sunt, explicabo nemo enim inter argumentum conclusionemque rationis et fortibus viris commemorandis eorumque factis non quo pertineant non existimant oportere nimium."}},Hidden={args:{hidden:!0,disabled:!0,size:"medium",variant:"default",header:"Modal Header",primaryButtonText:"Ok",secondaryButtonText:"Cancel",children:"Laudem et voluptatem ipsam causam non emolumento aliquo, sed animo etiam ac ratione voluptatem ut ratione voluptatem appetere eaque ipsa, quae sine dubio praeclara sunt, explicabo nemo enim inter argumentum conclusionemque rationis et fortibus viris commemorandis eorumque factis non quo pertineant non existimant oportere nimium."}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    hidden: false,\n    disabled: false,\n    size: 'medium',\n    variant: 'default',\n    header: 'Modal Header',\n    primaryButtonText: 'Ok',\n    secondaryButtonText: 'Cancel',\n    children: 'Laudem et voluptatem ipsam causam non emolumento aliquo, sed animo etiam ac ratione voluptatem ut ratione voluptatem appetere eaque ipsa, quae sine dubio praeclara sunt, explicabo nemo enim inter argumentum conclusionemque rationis et fortibus viris commemorandis eorumque factis non quo pertineant non existimant oportere nimium.'\n  }\n}",...Default.parameters?.docs?.source}}},Acknowledgement.parameters={...Acknowledgement.parameters,docs:{...Acknowledgement.parameters?.docs,source:{originalSource:"{\n  args: {\n    hidden: false,\n    disabled: false,\n    size: 'medium',\n    variant: 'default',\n    header: 'Modal Header',\n    primaryButtonText: 'Acknowledgement',\n    children: 'Laudem et voluptatem ipsam causam non emolumento aliquo, sed animo etiam ac ratione voluptatem ut ratione voluptatem appetere eaque ipsa, quae sine dubio praeclara sunt, explicabo nemo enim inter argumentum conclusionemque rationis et fortibus viris commemorandis eorumque factis non quo pertineant non existimant oportere nimium.'\n  }\n}",...Acknowledgement.parameters?.docs?.source}}},NoButtons.parameters={...NoButtons.parameters,docs:{...NoButtons.parameters?.docs,source:{originalSource:"{\n  args: {\n    hidden: false,\n    disabled: false,\n    size: 'medium',\n    variant: 'default',\n    header: 'Modal Header',\n    children: 'Laudem et voluptatem ipsam causam non emolumento aliquo, sed animo etiam ac ratione voluptatem ut ratione voluptatem appetere eaque ipsa, quae sine dubio praeclara sunt, explicabo nemo enim inter argumentum conclusionemque rationis et fortibus viris commemorandis eorumque factis non quo pertineant non existimant oportere nimium.'\n  }\n}",...NoButtons.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    hidden: false,\n    disabled: true,\n    size: 'medium',\n    variant: 'default',\n    header: 'Modal Header',\n    primaryButtonText: 'Ok',\n    secondaryButtonText: 'Cancel',\n    children: 'Laudem et voluptatem ipsam causam non emolumento aliquo, sed animo etiam ac ratione voluptatem ut ratione voluptatem appetere eaque ipsa, quae sine dubio praeclara sunt, explicabo nemo enim inter argumentum conclusionemque rationis et fortibus viris commemorandis eorumque factis non quo pertineant non existimant oportere nimium.'\n  }\n}",...Disabled.parameters?.docs?.source}}},Hidden.parameters={...Hidden.parameters,docs:{...Hidden.parameters?.docs,source:{originalSource:"{\n  args: {\n    hidden: true,\n    disabled: true,\n    size: 'medium',\n    variant: 'default',\n    header: 'Modal Header',\n    primaryButtonText: 'Ok',\n    secondaryButtonText: 'Cancel',\n    children: 'Laudem et voluptatem ipsam causam non emolumento aliquo, sed animo etiam ac ratione voluptatem ut ratione voluptatem appetere eaque ipsa, quae sine dubio praeclara sunt, explicabo nemo enim inter argumentum conclusionemque rationis et fortibus viris commemorandis eorumque factis non quo pertineant non existimant oportere nimium.'\n  }\n}",...Hidden.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Acknowledgement","NoButtons","Disabled","Hidden"]},"../../packages/arthur-ui/src/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Button_Button});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);let ButtonSizesEnum=function(ButtonSizesEnum){return ButtonSizesEnum.small="small",ButtonSizesEnum.medium="medium",ButtonSizesEnum.large="large",ButtonSizesEnum}({}),ButtonVariantsEnum=function(ButtonVariantsEnum){return ButtonVariantsEnum.default="default",ButtonVariantsEnum.secondary="secondary",ButtonVariantsEnum.tertiary="tertiary",ButtonVariantsEnum.danger="danger",ButtonVariantsEnum}({}),ButtonTypesEnum=function(ButtonTypesEnum){return ButtonTypesEnum.button="button",ButtonTypesEnum.resetButton="resetButton",ButtonTypesEnum.submitButton="submitButton",ButtonTypesEnum}({});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const buttonSizeStyles={small:styled_components_browser_esm.iv`
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
`,Icon=(0,react.forwardRef)(((props,forwardedRef)=>{const{className,disabled,size="medium",value,onClick,...rest}=props,iconClass=ICON_VALUES[value];if(!IconSizesEnum[size])throw new Error(`icon: invalid size "${size}"`);const isClickable=!0===disabled||"function"==typeof onClick,handleClick=(0,react.useCallback)((event=>{disabled||onClick?.(event)}),[disabled,onClick]),classes={root:classnames_default()(className,"arthur-icon",`arthur-icon--size-${size}`,{"arthur-icon--clickable":isClickable,"arthur-icon--disabled":!0===disabled}),regular:classnames_default()("arthur-icon-regular","fa-regular",{"fa-foobar":Boolean(iconClass)&&Boolean(value),[iconClass]:Boolean(iconClass),[value]:Boolean(iconClass)&&Boolean(value)})};return(0,jsx_runtime.jsx)(StyledRoot,{as:isClickable?"button":"span",className:classes.root,disabled,onClick:handleClick,ref:forwardedRef,children:(0,jsx_runtime.jsx)(StyledIcon,{className:classes.regular,size,...rest})})})),Icon_Icon=Icon;Icon.displayName="Icon";try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"small-1x"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: React.MouseEvent<HTMLSpanElement>) => unknown"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"enum",value:[{value:'"search"'},{value:'"video"'},{value:'"document"'},{value:'"add"'},{value:'"calendar"'},{value:'"catalog"'},{value:'"check"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"close"'},{value:'"disk"'},{value:'"dollar-sign"'},{value:'"download"'},{value:'"external-link"'},{value:'"feedback"'},{value:'"file-upload"'},{value:'"folder"'},{value:'"gear"'},{value:'"information"'},{value:'"keyboard"'},{value:'"list"'},{value:'"move"'},{value:'"notification"'},{value:'"pdf-document"'},{value:'"print"'},{value:'"quote-tags"'},{value:'"refresh"'},{value:'"remove"'},{value:'"reset"'},{value:'"share"'},{value:'"shopping-cart"'},{value:'"subtract"'},{value:'"user"'},{value:'"warning"'},{value:'"zoom"'},{value:'"fa-image-slash"'},{value:'"hyphen"'}]}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: HTMLButtonElement | HTMLSpanElement) => void"},{value:"RefObject<HTMLButtonElement | HTMLSpanElement>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Icon/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"../../packages/arthur-ui/src/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/arthur-ui/src/util/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{VD:()=>KeyCode,he:()=>useCombineRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");let KeyCode=function(KeyCode){return KeyCode.Enter="Enter",KeyCode.Escape="Escape",KeyCode.ArrowDown="ArrowDown",KeyCode.ArrowLeft="ArrowLeft",KeyCode.ArrowRight="ArrowRight",KeyCode.ArrowUp="ArrowUp",KeyCode}({});function useCombineRefs(refs){return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((el=>{refs.forEach((ref=>{"function"==typeof ref?ref(el):"object"==typeof ref&&null!==ref&&"current"in ref&&(ref.current=el)}))}),refs)}},"../../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);
//# sourceMappingURL=Modal-stories.168d76da.iframe.bundle.js.map