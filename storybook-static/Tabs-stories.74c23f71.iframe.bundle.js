"use strict";(self.webpackChunk_arthur_docs=self.webpackChunk_arthur_docs||[]).push([[14],{"./stories/Tabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tabs_stories});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const TabsContext=(0,react.createContext)(void 0);var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const StyledRoot=styled_components_browser_esm.ZP.div`
    display: flex;
    flex-direction: row;
    border: 1px solid ${props=>props.theme.token.color.palette.gray[10]};
    border-radius: ${props=>props.theme.token.radius.border.basic};
`;function Tabs(props){const{children,defaultActiveItem,disabled}=props,[activeItem,setActiveItem]=(0,react.useState)(defaultActiveItem),handleChange=(0,react.useCallback)(((event,id)=>{setActiveItem(id)}),[]),tabsContext=(0,react.useMemo)((()=>({activeItem,onChange:handleChange,disabled})),[activeItem,disabled,handleChange]);return(0,jsx_runtime.jsx)(TabsContext.Provider,{value:tabsContext,children:(0,jsx_runtime.jsx)(StyledRoot,{className:"tab-menu",children})})}Tabs.displayName="Tabs";const Tabs_Tabs=Tabs;Tabs.displayName="Tabs";try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{defaultActiveItem:{defaultValue:null,description:"",name:"defaultActiveItem",required:!1,type:{name:"enum",value:[{value:"string"},{value:"number"}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/arthur-ui/src/Tabs/Tabs.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:"../../packages/arthur-ui/src/Tabs/Tabs.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}const Tabs_stories={title:"Components/Tabs",component:Tabs_Tabs,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);
//# sourceMappingURL=Tabs-stories.74c23f71.iframe.bundle.js.map