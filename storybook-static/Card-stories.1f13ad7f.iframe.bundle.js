/*! For license information please see Card-stories.1f13ad7f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_arthur_docs=self.webpackChunk_arthur_docs||[]).push([[478],{"./stories/Card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Card_stories});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Button=__webpack_require__("../../packages/arthur-ui/src/Button/Button.tsx"),Image=__webpack_require__("../../packages/arthur-ui/src/Image/Image.tsx"),Icon=__webpack_require__("../../packages/arthur-ui/src/Icon/Icon.tsx"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const variantStyles={default:styled_components_browser_esm.iv`
    background-color: ${props=>props.theme.token.color.white};
  `,blog:styled_components_browser_esm.iv`
    & .arthur-card-headerbreak {
      display: none;
    }
  `},StyledRoot=styled_components_browser_esm.ZP.section`
  color: ${props=>props.theme.token.color.black};
  margin: 0px 0px 12px 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;

  & .arthur-card-icon {
    color: ${props=>props.theme.token.color.palette.gold.base};
    display: block;
  }

  & .arthur-card-subheader {
    color: ${props=>props.theme.token.color.black};
    font-weight: ${props=>props.theme.token.weight.font.medium};
    margin: 0px;
    padding: 0px;
    text-transform: uppercase;
    font-size: ${props=>props.theme.token.size.font.small};
  }

  & .arthur-card-header {
    color: ${props=>props.theme.token.color.black};
    margin: 0px;
    padding: 8px 0px;
    font-size: ${props=>props.theme.token.size.font["large-2x"]};
  }

  & .arthur-card-headerbreak {
    background: ${props=>props.theme.token.color.palette.gold.base};
    height: 3px;
  }

  & .arthur-card-icon {
    margin-bottom: ${props=>props.theme.token.size.spacing["large-1x"]};

    & svg {
      font-size: ${props=>props.theme.token.size.font["large-1x"]};
    }
  }

  & .arthur-card-metadata {
    font-size: ${props=>props.theme.token.size.font["small-1x"]};
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${props=>props.theme.token.size.spacing.small};
  }

  ${props=>variantStyles[props.variant]}
`;function CardHeading(props){const{subheader,header,icon,variant,primaryMetadata,secondaryMetadata}=props,hasMetadata=Boolean(primaryMetadata)||Boolean(secondaryMetadata);return(0,jsx_runtime.jsxs)(StyledRoot,{className:"arthur-card-heading",variant,children:[Boolean(hasMetadata)&&(0,jsx_runtime.jsxs)("div",{className:"arthur-card-metadata",children:[Boolean(primaryMetadata)&&(0,jsx_runtime.jsx)("div",{className:"arthur-card-metadata-primary",children:primaryMetadata}),Boolean(secondaryMetadata)&&(0,jsx_runtime.jsx)("div",{className:"arthur-card-metadata-secondary",children:secondaryMetadata})]}),Boolean(icon)&&(0,jsx_runtime.jsx)(Icon.Z,{className:"arthur-card-icon",size:"large",value:icon}),Boolean(subheader)&&(0,jsx_runtime.jsx)("h2",{className:"arthur-card-subheader",children:subheader}),(0,jsx_runtime.jsx)("h1",{className:"arthur-card-header",children:header}),(0,jsx_runtime.jsx)("div",{className:"arthur-card-headerbreak"})]})}CardHeading.displayName="CardHeading",CardHeading.displayName="CardHeading";try{CardHeading.displayName="CardHeading",CardHeading.__docgenInfo={description:"",displayName:"CardHeading",props:{subheader:{defaultValue:null,description:"",name:"subheader",required:!1,type:{name:"string"}},header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"video"'},{value:'"document"'},{value:'"add"'},{value:'"calendar"'},{value:'"catalog"'},{value:'"check"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"close"'},{value:'"disk"'},{value:'"dollar-sign"'},{value:'"download"'},{value:'"external-link"'},{value:'"feedback"'},{value:'"file-upload"'},{value:'"folder"'},{value:'"gear"'},{value:'"information"'},{value:'"keyboard"'},{value:'"list"'},{value:'"move"'},{value:'"notification"'},{value:'"pdf-document"'},{value:'"print"'},{value:'"quote-tags"'},{value:'"refresh"'},{value:'"remove"'},{value:'"reset"'},{value:'"share"'},{value:'"shopping-cart"'},{value:'"subtract"'},{value:'"user"'},{value:'"warning"'},{value:'"zoom"'},{value:'"fa-image-slash"'},{value:'"hyphen"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"blog"'}]}},primaryMetadata:{defaultValue:null,description:"",name:"primaryMetadata",required:!1,type:{name:"string"}},secondaryMetadata:{defaultValue:null,description:"",name:"secondaryMetadata",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Card/CardHeading.tsx#CardHeading"]={docgenInfo:CardHeading.__docgenInfo,name:"CardHeading",path:"../../packages/arthur-ui/src/Card/CardHeading.tsx#CardHeading"})}catch(__react_docgen_typescript_loader_error){}const CardFooter_StyledRoot=styled_components_browser_esm.ZP.footer`
  display: flex;
  justify-content: end;
  margin-top: ${props=>props.theme.token.size[7]};
`;function CardFooter(props){const{children}=props;return(0,jsx_runtime.jsx)(CardFooter_StyledRoot,{className:"arthur-card-footer",children})}CardFooter.displayName="CardFooter",CardFooter.displayName="CardFooter";try{CardFooter.displayName="CardFooter",CardFooter.__docgenInfo={description:"",displayName:"CardFooter",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Card/CardFooter.tsx#CardFooter"]={docgenInfo:CardFooter.__docgenInfo,name:"CardFooter",path:"../../packages/arthur-ui/src/Card/CardFooter.tsx#CardFooter"})}catch(__react_docgen_typescript_loader_error){}const CardContent_StyledRoot=styled_components_browser_esm.ZP.div`
  color: ${props=>props.theme.token.color.black};
  box-sizing: border-box;
  margin-top: ${props=>props.theme.token.size[5]};
`;function CardContent(props){const{children}=props;return(0,jsx_runtime.jsx)(CardContent_StyledRoot,{children})}CardContent.displayName="CardContent",CardContent.displayName="CardContent";try{CardContent.displayName="CardContent",CardContent.__docgenInfo={description:"",displayName:"CardContent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Card/CardContent.tsx#CardContent"]={docgenInfo:CardContent.__docgenInfo,name:"CardContent",path:"../../packages/arthur-ui/src/Card/CardContent.tsx#CardContent"})}catch(__react_docgen_typescript_loader_error){}let CardVariantEnum=function(CardVariantEnum){return CardVariantEnum.default="default",CardVariantEnum.blog="blog",CardVariantEnum}({}),CardImagePositionEnum=function(CardImagePositionEnum){return CardImagePositionEnum.top="top",CardImagePositionEnum.left="left",CardImagePositionEnum}({});const Card_StyledRoot=styled_components_browser_esm.ZP.div`
  box-sizing: border-box;
  padding: ${props=>props.theme.token.size[8]} ${props=>props.theme.token.size.spacing["large-1x"]};
  padding-bottom: ${props=>props.theme.token.size[5]};
  display: flex;
  box-shadow: ${props=>props.theme.token.shadow.box.small};
  flex-direction: ${props=>"left"===props.$imagePosition?"row":"column"};

  &.arthur-card--headerless {
    padding-top: 0px !important;
  }

  & .arthur-card-body {
    color: ${props=>props.theme.token.color.black};
  }

  & .arthur-card-image {
    box-sizing: border-box;
    margin-right: ${props=>props.theme.token.size.spacing["large-2x"]};
    flex-shrink: 0;
  }
`,Card=(0,react.forwardRef)(((props,forwardedRef)=>{const{body,className,header,icon,imagePosition=CardImagePositionEnum.top,imageSrc,onAction,subheader,variant=CardVariantEnum.default,primaryMetadata,secondaryMetadata,buttonText,...rest}=props,classes=classnames_default()(className,"arthur-card",`arthur-card--variant-${variant}`),isImageFirst="blog"!==variant,hasImage=Boolean(imageSrc);return(0,jsx_runtime.jsxs)(Card_StyledRoot,{$imagePosition:imagePosition,className:classes,ref:forwardedRef,...rest,children:[Boolean(isImageFirst&&hasImage)&&(0,jsx_runtime.jsx)(Image.Z,{className:"arthur-card-image",maxWidth:"left"===imagePosition?"40%":"100%",src:imageSrc}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(CardHeading,{header,icon,primaryMetadata,secondaryMetadata,subheader,variant}),Boolean(!isImageFirst&&hasImage)&&(0,jsx_runtime.jsx)(Image.Z,{className:"arthur-card-image",maxWidth:"left"===imagePosition?"40%":"100%",src:imageSrc}),Boolean(body)&&(0,jsx_runtime.jsx)(CardContent,{children:body}),Boolean(buttonText)&&(0,jsx_runtime.jsx)(CardFooter,{children:(0,jsx_runtime.jsx)(Button.Z,{onClick:onAction,children:buttonText})})]})]})})),Card_Card=Card;Card.displayName="Card";try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},body:{defaultValue:{value:"undefined"},description:"Describes the optional body of this component.",name:"body",required:!1,type:{name:"string"}},header:{defaultValue:{value:"undefined"},description:"Describes the optional header of this component.",name:"header",required:!0,type:{name:"string"}},icon:{defaultValue:{value:"undefined"},description:"Describes the optional icon alias of this component.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"video"'},{value:'"document"'},{value:'"add"'},{value:'"calendar"'},{value:'"catalog"'},{value:'"check"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"close"'},{value:'"disk"'},{value:'"dollar-sign"'},{value:'"download"'},{value:'"external-link"'},{value:'"feedback"'},{value:'"file-upload"'},{value:'"folder"'},{value:'"gear"'},{value:'"information"'},{value:'"keyboard"'},{value:'"list"'},{value:'"move"'},{value:'"notification"'},{value:'"pdf-document"'},{value:'"print"'},{value:'"quote-tags"'},{value:'"refresh"'},{value:'"remove"'},{value:'"reset"'},{value:'"share"'},{value:'"shopping-cart"'},{value:'"subtract"'},{value:'"user"'},{value:'"warning"'},{value:'"zoom"'},{value:'"fa-image-slash"'},{value:'"hyphen"'}]}},imagePosition:{defaultValue:{value:"top"},description:"Controls how the image is rendered.",name:"imagePosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"left"'}]}},imageProps:{defaultValue:{value:"{}"},description:"Allows for full image component customization.",name:"imageProps",required:!1,type:{name:"ImageProps"}},imageSrc:{defaultValue:{value:"undefined"},description:"Describes the optional image source of this component.",name:"imageSrc",required:!1,type:{name:"string"}},onAction:{defaultValue:{value:"undefined"},description:"Button click hander",name:"onAction",required:!1,type:{name:"(event: React.MouseEvent<HTMLButtonElement>) => void"}},subheader:{defaultValue:{value:"undefined"},description:"Describes the optional sub-header of this component.",name:"subheader",required:!1,type:{name:"string"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"blog"'}]}},primaryMetadata:{defaultValue:null,description:"",name:"primaryMetadata",required:!1,type:{name:"string"}},secondaryMetadata:{defaultValue:null,description:"",name:"secondaryMetadata",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: HTMLDivElement) => void"},{value:"RefObject<HTMLDivElement>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"../../packages/arthur-ui/src/Card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}const Card_stories={title:"Components/Card",component:Card_Card,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Default={args:{body:"Laudem et voluptatem ipsam causam non emolumento aliquo, sed animo etiam ac ratione voluptatem ut ratione voluptatem appetere eaque ipsa, quae sine dubio praeclara sunt, explicabo nemo enim inter argumentum conclusionemque rationis et fortibus viris commemorandis eorumque factis non quo pertineant non existimant oportere nimium.",buttonText:"click me",header:"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Headline. Lorem ipsum dolor sit amet",subheader:"subheading",imagePosition:"left",icon:"catalog",imageSrc:"https://placekitten.com/600/600",primaryMetadata:"BY: AUTHOR | 3 MIN READ",secondaryMetadata:"MAY, 20 2023",variant:"blog"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    body: 'Laudem et voluptatem ipsam causam non emolumento aliquo, sed animo etiam ac ratione voluptatem ut ratione voluptatem appetere eaque ipsa, quae sine dubio praeclara sunt, explicabo nemo enim inter argumentum conclusionemque rationis et fortibus viris commemorandis eorumque factis non quo pertineant non existimant oportere nimium.',\n    buttonText: 'click me',\n    header: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Headline. Lorem ipsum dolor sit amet',\n    subheader: 'subheading',\n    imagePosition: 'left',\n    icon: 'catalog',\n    imageSrc: 'https://placekitten.com/600/600',\n    primaryMetadata: 'BY: AUTHOR | 3 MIN READ',\n    secondaryMetadata: 'MAY, 20 2023',\n    variant: 'blog'\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../packages/arthur-ui/src/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Button_Button});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);let ButtonSizesEnum=function(ButtonSizesEnum){return ButtonSizesEnum.small="small",ButtonSizesEnum.medium="medium",ButtonSizesEnum.large="large",ButtonSizesEnum}({}),ButtonVariantsEnum=function(ButtonVariantsEnum){return ButtonVariantsEnum.default="default",ButtonVariantsEnum.secondary="secondary",ButtonVariantsEnum.tertiary="tertiary",ButtonVariantsEnum.danger="danger",ButtonVariantsEnum}({}),ButtonTypesEnum=function(ButtonTypesEnum){return ButtonTypesEnum.button="button",ButtonTypesEnum.resetButton="resetButton",ButtonTypesEnum.submitButton="submitButton",ButtonTypesEnum}({});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const buttonSizeStyles={small:styled_components_browser_esm.iv`
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
`,Icon=(0,react.forwardRef)(((props,forwardedRef)=>{const{className,disabled,size="medium",value,onClick,...rest}=props,iconClass=ICON_VALUES[value];if(!IconSizesEnum[size])throw new Error(`icon: invalid size "${size}"`);const isClickable=!0===disabled||"function"==typeof onClick,handleClick=(0,react.useCallback)((event=>{disabled||onClick?.(event)}),[disabled,onClick]),classes={root:classnames_default()(className,"arthur-icon",`arthur-icon--size-${size}`,{"arthur-icon--clickable":isClickable,"arthur-icon--disabled":!0===disabled}),regular:classnames_default()("arthur-icon-regular","fa-regular",{"fa-foobar":Boolean(iconClass)&&Boolean(value),[iconClass]:Boolean(iconClass),[value]:Boolean(iconClass)&&Boolean(value)})};return(0,jsx_runtime.jsx)(StyledRoot,{as:isClickable?"button":"span",className:classes.root,disabled,onClick:handleClick,ref:forwardedRef,children:(0,jsx_runtime.jsx)(StyledIcon,{className:classes.regular,size,...rest})})})),Icon_Icon=Icon;Icon.displayName="Icon";try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"small-1x"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: React.MouseEvent<HTMLSpanElement>) => unknown"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"enum",value:[{value:'"search"'},{value:'"video"'},{value:'"document"'},{value:'"add"'},{value:'"calendar"'},{value:'"catalog"'},{value:'"check"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"close"'},{value:'"disk"'},{value:'"dollar-sign"'},{value:'"download"'},{value:'"external-link"'},{value:'"feedback"'},{value:'"file-upload"'},{value:'"folder"'},{value:'"gear"'},{value:'"information"'},{value:'"keyboard"'},{value:'"list"'},{value:'"move"'},{value:'"notification"'},{value:'"pdf-document"'},{value:'"print"'},{value:'"quote-tags"'},{value:'"refresh"'},{value:'"remove"'},{value:'"reset"'},{value:'"share"'},{value:'"shopping-cart"'},{value:'"subtract"'},{value:'"user"'},{value:'"warning"'},{value:'"zoom"'},{value:'"fa-image-slash"'},{value:'"hyphen"'}]}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: HTMLButtonElement | HTMLSpanElement) => void"},{value:"RefObject<HTMLButtonElement | HTMLSpanElement>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Icon/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"../../packages/arthur-ui/src/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/arthur-ui/src/Image/Image.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/arthur-ui/src/Icon/Icon.tsx"),_hook__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/arthur-ui/src/hook/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const StyledRoot=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.span`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  overflow: hidden;

  &.arthur-image--failure {
    & .arthur-image-icon {
      &::after {
        ${props=>(props.$errorText||props.$alt)&&`margin-left: ${props.theme.token.size.spacing["small-2x"]};`}
        content: "${props=>props.$errorText||props.$alt||""}";
      }
    }
  }
`,Image=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{alt,autoLayout,className,errorText,height,maxHeight,maxWidth,minHeight,minWidth,src,style,width,onError,onLoad,...rest}=props,rootRef=(0,_hook__WEBPACK_IMPORTED_MODULE_4__.Fr)(forwardedRef),[loaded,setLoaded]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{let timeoutId;function onResize(){clearTimeout(timeoutId),timeoutId=setTimeout((()=>{rootRef.current&&doLayout(rootRef.current)}),150)}return!0===autoLayout&&rootRef.current&&window.addEventListener("resize",onResize),()=>{clearTimeout(timeoutId),window.removeEventListener("resize",onResize)}}),[autoLayout,rootRef]);const classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()(className,"arthur-image",{"arthur-image--success":loaded,"arthur-image--failure":!loaded}),styles=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({height:formatSize(height),maxHeight:formatSize(maxHeight),maxWidth:formatSize(maxWidth),minHeight:formatSize(minHeight),minWidth:formatSize(minWidth),width:formatSize(width),...style})),[height,maxHeight,maxWidth,minHeight,minWidth,style,width]),handleOnError=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event=>{setLoaded(!1),onError?.(event)}),[onError]),handleOnLoad=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event=>{!0===autoLayout&&rootRef.current&&doLayout(rootRef.current),setLoaded(!0),onLoad?.(event)}),[autoLayout,onLoad,rootRef]);return console.log("%c loaded","color: magenta;",loaded),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(StyledRoot,{$alt:alt,$errorText:errorText,className:classes,ref:rootRef,style:styles,children:[!loaded&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_5__.Z,{className:"arthur-image-icon",size:"large",value:"fa-image-slash"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{alt,className:"arthur-image-img",onError:handleOnError,onLoad:handleOnLoad,src:src||"",...rest})]})})),__WEBPACK_DEFAULT_EXPORT__=Image;function formatSize(value){return"number"==typeof value?`${value}px`:Boolean(value)&&"string"==typeof value?value:void 0}function doLayout(root){const{offsetHeight:rootH,offsetWidth:rootW}=root,img=root.querySelector(".arthur-image-img");if(!img)return;const{naturalHeight:imgH,naturalWidth:imgW}=img;if(imgH<=0||imgW<=0)return;let newW,newH;imgW>imgH?rootW>rootH&&imgW>=rootW?newW=rootW:newH=rootH:imgW<imgH?rootW<rootH&&imgH>=rootH?newH=rootH:newW=rootW:rootW<rootH?newH=rootH:newW=rootW,newW&&(img.style.width=`${newW}px`),newH&&(img.style.height=`${newH}px`),newH&&root.offsetWidth>img.offsetWidth?img.style.width=`${root.offsetWidth}px`:newW&&root.offsetHeight>img.offsetHeight&&(img.style.height=`${root.offsetHeight}px`)}Image.displayName="Image";try{Image.displayName="Image",Image.__docgenInfo={description:"",displayName:"Image",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},alt:{defaultValue:{value:"undefined"},description:'Describes the [standard "alt" attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt) on img elements.',name:"alt",required:!1,type:{name:"string"}},autoLayout:{defaultValue:{value:"true"},description:"Controls whether or not the inner image should center and proportion itself to its parent element.",name:"autoLayout",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}},errorText:{defaultValue:{value:"undefined"},description:"Describes the text to be displayed after the ImageProps#onError event fires.",name:"errorText",required:!1,type:{name:"string"}},height:{defaultValue:{value:"undefined"},description:"Describes the height style of the root element. When provided as a number, it is treated as pixels.",name:"height",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"}]}},maxHeight:{defaultValue:{value:"undefined"},description:"Describes the max-height style of the root element. When provided as a number, it is treated as pixels.",name:"maxHeight",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"}]}},maxWidth:{defaultValue:{value:"undefined"},description:"Describes the max-width style of the root element. When provided as a number, it is treated as pixels.",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"}]}},minHeight:{defaultValue:{value:"undefined"},description:"Describes the min-height style of the root element. When provided as a number, it is treated as pixels.",name:"minHeight",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"}]}},minWidth:{defaultValue:{value:"undefined"},description:"Describes the min-width style of the root element. When provided as a number, it is treated as pixels.",name:"minWidth",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"}]}},src:{defaultValue:{value:'""'},description:'Describes the [standard "src" attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#src) on img elements.',name:"src",required:!1,type:{name:"string"}},width:{defaultValue:{value:"undefined"},description:"Describes the width style of the root element. When provided as a number, it is treated as pixels.",name:"width",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"}]}},onError:{defaultValue:{value:"undefined"},description:'Handles the [standard "onerror" event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/error_event) on HTML elements.',name:"onError",required:!1,type:{name:"(event: SyntheticEvent<HTMLImageElement, Event>) => void"}},onLoad:{defaultValue:{value:"undefined"},description:'Handles the [standard "onload" event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/load_event) on HTML elements.',name:"onLoad",required:!1,type:{name:"(event: SyntheticEvent<HTMLImageElement, Event>) => void"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"enum",value:[{value:"(instance: HTMLSpanElement) => void"},{value:"RefObject<HTMLSpanElement>"}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"},{value:"bigint"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Image/Image.tsx#Image"]={docgenInfo:Image.__docgenInfo,name:"Image",path:"../../packages/arthur-ui/src/Image/Image.tsx#Image"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/arthur-ui/src/hook/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Fr:()=>useEnsureRef,Yc:()=>useEnsureId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function useEnsureRef(forwardedRef){const newRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);return forwardedRef??newRef}let useEnsureIdCounter=0;function useEnsureId(propId){const id=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(useEnsureIdCounter++,`arthur-${useEnsureIdCounter}`)),[]);return propId||id}},"../../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);
//# sourceMappingURL=Card-stories.1f13ad7f.iframe.bundle.js.map