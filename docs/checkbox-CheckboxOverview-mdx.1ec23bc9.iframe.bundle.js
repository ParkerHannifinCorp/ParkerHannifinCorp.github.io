"use strict";(self.webpackChunk_arthur_docs=self.webpackChunk_arthur_docs||[]).push([[474],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/checkbox/CheckboxOverview.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>CheckboxOverview});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),StoryPicture=__webpack_require__("./helpers/common/StoryPicture.tsx"),PictureBox=__webpack_require__("./helpers/common/PictureBox.tsx"),Checkbox_stories=__webpack_require__("./stories/checkbox/Checkbox.stories.tsx"),injectStylesIntoStyleTag=(__webpack_require__("./assets/styles/overview.css"),__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),checkbox_checkbox=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./stories/checkbox/checkbox.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(checkbox_checkbox.Z,options);checkbox_checkbox.Z&&checkbox_checkbox.Z.locals&&checkbox_checkbox.Z.locals;function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",h2:"h2",h4:"h4",strong:"strong",h6:"h6",em:"em",h5:"h5"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{name:"Overview",of:Checkbox_stories}),"\n",(0,jsx_runtime.jsxs)("section",{"data-arthur-section":"arthur-docs-title",children:[(0,jsx_runtime.jsx)(_components.h1,{id:"input-checkbox",children:"Input (Checkbox)"}),(0,jsx_runtime.jsx)(_components.p,{children:"The checkbox component is commonly used in forms, settings panels, and other scenarios where users need to make multiple\r\nselections or indicate their preferences. It provides a binary choice, where users can either select or deselect the\r\ncheckbox."}),(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#component-api",children:"Component API"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#usage-and-examples",children:"Usage & Examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#variations",children:"Variations"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#formatting",children:"Formatting"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#content",children:"Content"})}),"\n"]})]}),"\n",(0,jsx_runtime.jsxs)("section",{"data-arthur-section":"arthur-docs-overview",children:[(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),(0,jsx_runtime.jsx)(_components.p,{children:"A checkbox component is a user interface element that allows users to select or deselect an option. It consists of a\r\nsmall box and a label. When the checkbox is selected, a checkmark or a similar visual indicator is typically displayed\r\ninside the box."}),(0,jsx_runtime.jsx)(_components.h4,{id:"best-practices",children:"Best Practices"}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Forms"})," To allow users to select multiple options or indicate their agreement to specific terms and conditions. For\r\nexample, a registration form might include checkboxes for subscribing to a newsletter, selecting product preferences, or\r\nagreeing to the terms of service."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Filtering or Sorting"})," Checkbox components are often used in filtering or sorting interfaces where users can refine a\r\nlist of items based on specific criteria. Each checkbox represents a filter option, and users can select multiple\r\ncheckboxes to narrow down the results."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Settings or Preferences"})," Checkbox components are useful in settings panels or preference screens where users can\r\nenable or disable specific features or customize their experience. Each checkbox represents a configurable option that\r\nusers can toggle on or off based on their preferences."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Multi-Selection Actions"})," To facilitate bulk actions or operations on a list of items. Users can select multiple\r\ncheckboxes to perform actions like deleting, archiving, or marking items as complete."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Permission Management"})," Checkbox components are employed in user permission management systems, where administrators\r\ncan assign or revoke permissions for individual users or user groups. Each checkbox represents a specific permission\r\nthat can be granted or denied."]}),(0,jsx_runtime.jsx)(_components.p,{children:"Default"}),(0,jsx_runtime.jsx)(dist.Xz,{of:Checkbox_stories._Default}),(0,jsx_runtime.jsx)(_components.h2,{id:"component-api",children:"Component API"}),(0,jsx_runtime.jsx)(dist.Ed,{exclude:["ref","key","inputRef"]})]}),"\n",(0,jsx_runtime.jsxs)("section",{"data-arthur-section":"arthur-docs-example",children:[(0,jsx_runtime.jsx)(_components.h2,{id:"usage-and-examples",children:"Usage and examples"}),(0,jsx_runtime.jsx)(_components.h4,{id:"use-cases",children:"Use Cases"}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Selecting Items"})," Checkbox components are often used to select multiple items from a list. For example, in an email\r\nclient, checkboxes can be used to select multiple emails for actions such as archiving, marking as read, or deleting."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Filtering Options"})," Checkbox components are commonly used in filtering interfaces to allow users to refine search\r\nresults or narrow down options. For instance, in an e-commerce website, checkboxes can be used to filter products by\r\nsize, color, price range, or other attributes."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Configuration Settings"})," Checkbox components are used in configuration panels or settings screens to allow users to\r\nenable or disable specific features or functionalities. For instance, in a messaging app, checkboxes can be used to\r\nenable or disable notifications for different types of events (e.g., new messages, mentions, or group updates)."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Multiple Choice Surveys"})," Checkbox components are commonly employed in surveys or questionnaires where users can\r\nselect multiple options. Users can choose multiple checkboxes to indicate their responses to questions with multiple\r\nanswer choices."]}),(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Access Control"})," Checkbox components are used in permission management interfaces to assign or revoke permissions for\r\nusers or user groups. Each checkbox represents a specific permission, and administrators can select or deselect\r\ncheckboxes to manage user access."]})]}),"\n",(0,jsx_runtime.jsxs)("section",{"data-arthur-section":"arthur-docs-variants",children:[(0,jsx_runtime.jsx)(_components.h2,{id:"variations",children:"Variations"}),(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#variants",children:" Variants "})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#states---interactions",children:" States "})}),"\n"]}),(0,jsx_runtime.jsx)(_components.h4,{id:"variants",children:"Variants"}),(0,jsx_runtime.jsx)(_components.h6,{id:"default",children:"Default"}),(0,jsx_runtime.jsx)(StoryPicture.Z,{csx:{paddingTop:"80px",paddingBottom:"80px"},withBox:!0,assetPath:"/stories/Components/Checkbox/checkbox-variant-default.png",alt:"Default Variant"}),(0,jsx_runtime.jsx)(_components.h6,{id:"group-vertical",children:"Group Vertical"}),(0,jsx_runtime.jsx)(StoryPicture.Z,{csx:{paddingTop:"80px",paddingBottom:"80px"},withBox:!0,assetPath:"/stories/Components/Checkbox/checkbox-variant-vertical.png",alt:"Vertical Group Variant"}),(0,jsx_runtime.jsx)(_components.h6,{id:"group-horizontal",children:"Group Horizontal"}),(0,jsx_runtime.jsx)(StoryPicture.Z,{csx:{paddingTop:"80px",paddingBottom:"80px"},withBox:!0,assetPath:"/stories/Components/Checkbox/checkbox-variant-horizontal.png",alt:"Horizontal Group Variant"})]}),"\n",(0,jsx_runtime.jsxs)("section",{"data-arthur-section":"arthur-docs-state",children:[(0,jsx_runtime.jsxs)(_components.h4,{id:"states---interactions",children:["States - ",(0,jsx_runtime.jsx)("span",{style:{fontWeight:400,fontSize:"inherit"},children:(0,jsx_runtime.jsx)(_components.em,{children:"Interactions"})})]}),(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Unselected:"})}),(0,jsx_runtime.jsx)(_components.p,{children:"In the unselected state, the checkbox is unchecked, indicating that the corresponding option or action is inactive or\r\nnot selected. The checkbox icon is usually empty or devoid of a checkmark to represent the unselected state. The\r\nunselected state is visually different from the selected state to visually differentiate the two states."}),(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Selected:"})}),(0,jsx_runtime.jsx)(_components.p,{children:"In the selected state, the checkbox is checked, indicating that the corresponding option or action is active or\r\nselected. The checkbox icon may display a checkmark or a similar visual indicator to represent the selected state. The\r\nselected state is typically visually distinguished from the unselected state to provide clear feedback to users."}),(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Disabled:"})}),(0,jsx_runtime.jsx)(_components.p,{children:"In the disabled state, the checkbox is inactive and cannot be interacted with by the user. It is typically displayed\r\nwith a different appearance, such as a grayed-out or faded checkbox icon, to indicate its disabled status. Disabled\r\ncheckboxes are often used when certain conditions or permissions restrict the selection or interaction with the\r\ncheckbox."}),(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Indeterminate:"})}),(0,jsx_runtime.jsx)(_components.p,{children:"An indeterminate checkbox component is used to represent a checkbox state where its selection status is not fully\r\nchecked or unchecked, but rather in an indeterminate or partially selected state. This state is typically used when\r\ndealing with checkboxes that have nested or hierarchical relationships."}),(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Focus:"})}),(0,jsx_runtime.jsx)(_components.p,{children:"To indicate the focus state, checkboxes often have a visual indicator such as an outline, border, or change in color.\r\nThis visual indicator is typically applied to the checkbox icon or the entire checkbox element, making it distinct from\r\nother elements on the page."}),(0,jsx_runtime.jsxs)(PictureBox.Z,{children:[(0,jsx_runtime.jsx)(StoryPicture.Z,{csx:{paddingTop:"80px",paddingBottom:"80px",marginLeft:"100px"},assetPath:"/stories/Components/Checkbox/checkbox-state-unselected.png",alt:"Unselected Checkbox State"}),(0,jsx_runtime.jsx)("hr",{}),(0,jsx_runtime.jsx)(StoryPicture.Z,{csx:{paddingTop:"80px",paddingBottom:"80px",marginLeft:"100px"},assetPath:"/stories/Components/Checkbox/checkbox-state-selected.png",alt:"Selected Checkbox State"}),(0,jsx_runtime.jsx)("hr",{}),(0,jsx_runtime.jsx)(StoryPicture.Z,{csx:{paddingTop:"80px",paddingBottom:"80px",marginLeft:"100px"},assetPath:"/stories/Components/Checkbox/checkbox-state-disabled.png",alt:"Disabled Checkbox State"}),(0,jsx_runtime.jsx)("hr",{}),(0,jsx_runtime.jsx)(StoryPicture.Z,{csx:{paddingTop:"80px",paddingBottom:"80px",marginLeft:"100px"},assetPath:"/stories/Components/Checkbox/checkbox-state-indeterminate.png",alt:"Indeterminate Checkbox State"}),(0,jsx_runtime.jsx)("hr",{}),(0,jsx_runtime.jsx)(StoryPicture.Z,{csx:{paddingTop:"80px",paddingBottom:"80px",marginLeft:"100px"},assetPath:"/stories/Components/Checkbox/checkbox-state-focus.png",alt:"Focused Checkbox State"})]})]}),"\n",(0,jsx_runtime.jsxs)("section",{"data-arthur-section":"arthur-docs-formatting",children:[(0,jsx_runtime.jsx)(_components.h2,{id:"formatting",children:"Formatting"}),(0,jsx_runtime.jsx)(_components.p,{children:"- Determine the appropriate size for your checkboxes based on the surrounding elements and the overall layout. Ensure\r\nthat checkboxes have enough spacing between each other and any accompanying labels to prevent accidental clicks or\r\nconfusion."}),(0,jsx_runtime.jsx)(_components.p,{children:"- Choose a visual style for your checkboxes that aligns with your overall design language. You can opt for square or\r\nrounded checkboxes, and consider adding subtle gradients, borders, or shadows to enhance their appearance."}),(0,jsx_runtime.jsx)(_components.p,{children:"- Decide on the style of the checkmark icon or indicator that appears when the checkbox is selected. It can be a simple\r\ncheckmark symbol, a filled circle, or a custom icon that complements your design aesthetic."}),(0,jsx_runtime.jsx)(_components.p,{children:"- Select appropriate colors for the checkbox itself, the checkmark, and the label. Ensure that the selected and\r\nunselected states are visually distinguishable. Consider using color contrast guidelines to ensure accessibility."}),(0,jsx_runtime.jsx)(_components.p,{children:"- Define how the checkbox should appear when users hover over it or when it receives keyboard focus. This can include\r\nsubtle animations, color changes, or visual effects to provide feedback and improve usability."}),(0,jsx_runtime.jsx)(_components.p,{children:"- Determine how disabled checkboxes should appear to indicate that they cannot be interacted with. This often involves\r\nusing a different color, reducing opacity, or applying a disabled styling to convey their inactive state."}),(0,jsx_runtime.jsx)(_components.p,{children:"- Decide whether the checkbox label should be positioned to the right, left, or above the checkbox. Ensure that the\r\nlabel is visually connected to the checkbox and has sufficient contrast for readability."}),(0,jsx_runtime.jsx)(_components.p,{children:"- Maintain consistent alignment between checkboxes and their labels within a group to ensure a visually cohesive\r\npresentation. This helps users associate the label with the corresponding checkbox option accurately."}),(0,jsx_runtime.jsx)(_components.p,{children:"- Ensure that your checkbox formatting adapts to different screen sizes and devices. Consider how the checkboxes will\r\nscale or rearrange in smaller or larger viewports to maintain usability and readability."}),(0,jsx_runtime.jsx)(_components.h5,{id:"anatomy",children:"Anatomy"}),(0,jsx_runtime.jsx)(_components.h6,{id:"default-1",children:"Default"}),(0,jsx_runtime.jsx)(StoryPicture.Z,{csx:{paddingTop:"100px",paddingBottom:"100px"},assetPath:"/stories/Components/Checkbox/checkbox-anatomy-default.png",alt:"default checkbox anatomy"}),(0,jsx_runtime.jsx)(_components.h6,{id:"group-vertical-1",children:"Group Vertical"}),(0,jsx_runtime.jsx)(StoryPicture.Z,{csx:{paddingTop:"100px",paddingBottom:"100px"},assetPath:"/stories/Components/Checkbox/checkbox-anatomy-group-vertical.png",alt:"vertical checkbox group anatomy"}),(0,jsx_runtime.jsx)(_components.h6,{id:"group-horizontal-1",children:"Group Horizontal"}),(0,jsx_runtime.jsx)(StoryPicture.Z,{csx:{paddingTop:"100px",paddingBottom:"100px"},assetPath:"/stories/Components/Checkbox/checkbox-anatomy-group-horizontal.png",alt:"Horizontal checkbox group anatomy"})]}),"\n",(0,jsx_runtime.jsxs)("section",{"data-arthur-section":"arthur-story-content",children:[(0,jsx_runtime.jsx)(_components.h2,{id:"content",children:"Content"}),(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Checkmark Indicator"})}),(0,jsx_runtime.jsx)(_components.p,{children:"The checkmark indicator is a visual symbol that appears inside the checkbox icon when the checkbox is selected or\r\nchecked. It confirms to the user that the checkbox is active or that the corresponding option has been selected."}),(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Container"})}),(0,jsx_runtime.jsx)(_components.p,{children:"The container holds the checkbox icon and the label together, grouping them as a single unit. It provides a visual\r\nboundary and helps users understand that the checkbox and label are related and should be considered together."}),(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Label"})}),(0,jsx_runtime.jsx)(_components.p,{children:"The label is the text or description associated with the checkbox. It provides context or information about the option\r\nor action that the checkbox represents. The label is typically positioned next to the checkbox icon and may be clickable\r\nto toggle the checkbox state."}),(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Checkbox Icon"})}),(0,jsx_runtime.jsx)(_components.p,{children:"The checkbox icon is the visual representation of the checkbox itself. It is usually a small square or rectangle that\r\nusers can interact with to toggle the checkbox's state. When the checkbox is selected, the checkbox icon may display a\r\ncheckmark or another visual indicator to indicate its active state."}),(0,jsx_runtime.jsx)(StoryPicture.Z,{csx:{marginLeft:"100px"},withBox:!0,assetPath:"/stories/Components/Checkbox/checkbox-content.png",alt:"checkbox content anatomy"})]})]})}const CheckboxOverview=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./helpers/common/PictureBox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const StyledRoot=styled_components__WEBPACK_IMPORTED_MODULE_2__.zo.div`
  position: relative;
  overflow: hidden;
  margin: 25px 0 40px;
  border-radius: 4px;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;
  border: 1px solid hsla(203, 50%, 30%, 0.15);

  & .ardocs-picture {
    overflow: hidden;
    position: relative;

    & > div {
      display: block;
      position: relative;
      flex-wrap: wrap;
      overflow: auto;
      flex-direction: column;
      padding: 30px 20px;
      margin: -10px;
    }
  }
`;function PictureBox(props){const{children}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledRoot,{className:"ardocs ardoc-picture-box",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"ardocs-picture",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children})})})}PictureBox.displayName="PictureBox";const __WEBPACK_DEFAULT_EXPORT__=PictureBox;PictureBox.displayName="ArthurCanvas";try{PictureBox.displayName="ArthurCanvas",PictureBox.__docgenInfo={description:"",displayName:"ArthurCanvas",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["helpers/common/PictureBox.tsx#ArthurCanvas"]={docgenInfo:ArthurCanvas.__docgenInfo,name:"ArthurCanvas",path:"helpers/common/PictureBox.tsx#ArthurCanvas"})}catch(__react_docgen_typescript_loader_error){}},"./helpers/common/StoryPicture.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_PictureBox__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./helpers/common/PictureBox.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const StyledPicture=styled_components__WEBPACK_IMPORTED_MODULE_3__.zo.picture`
  display: block;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;

  ${props=>({...props.csx})}
`;function StoryPicture(props){const{alt,assetPath,className,csx,densities=["2x"],withBox=!1,...rest}=props,sourcePath=function sourceResolution(assetPath,densities){const lowRes=assetPath,pathParts=assetPath.split("/"),dirname=pathParts.slice(0,pathParts.length-1).join("/"),basename=pathParts[pathParts.length-1],filename=basename.slice(0,basename.indexOf(".")),extension=basename.slice(basename.indexOf("."));return{default:`${lowRes}`,candidates:`${lowRes},${[...densities.map((density=>` ${dirname}/${filename}@${density}${extension} ${density}`))]}`}}(assetPath,densities);return withBox?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PictureBox__WEBPACK_IMPORTED_MODULE_1__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(StyledPicture,{className,csx,"data-arthur-block":rest.dataAttr,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("source",{srcSet:sourcePath.candidates}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:sourcePath.default,alt})]})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(StyledPicture,{className:"arthur-story-image","data-arthur-block":rest.dataAttr,csx,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("source",{srcSet:sourcePath.candidates}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{src:sourcePath.default,alt})]})}StoryPicture.displayName="StoryPicture";const __WEBPACK_DEFAULT_EXPORT__=StoryPicture;StoryPicture.displayName="StoryPicture",StoryPicture.defaultProps={};try{StoryPicture.displayName="StoryPicture",StoryPicture.__docgenInfo={description:"",displayName:"StoryPicture",props:{alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},assetDir:{defaultValue:null,description:"",name:"assetDir",required:!0,type:{name:"string"}},assetPath:{defaultValue:null,description:"",name:"assetPath",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}},csx:{defaultValue:null,description:"",name:"csx",required:!0,type:{name:"{ string: string | number; }"}},densities:{defaultValue:null,description:"",name:"densities",required:!0,type:{name:"string[]"}},sourceName:{defaultValue:null,description:"",name:"sourceName",required:!0,type:{name:"string"}},sourceSuffix:{defaultValue:null,description:"",name:"sourceSuffix",required:!0,type:{name:"string"}},withBox:{defaultValue:null,description:"",name:"withBox",required:!1,type:{name:"enum",value:[{value:"false"},{value:"true"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["helpers/common/StoryPicture.tsx#StoryPicture"]={docgenInfo:StoryPicture.__docgenInfo,name:"StoryPicture",path:"helpers/common/StoryPicture.tsx#StoryPicture"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./assets/styles/overview.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/* Global Overview Story docs(mdx) styles */\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\ntable tr th:first-of-type {\n  text-align: left;\n}\ntable tr td:not(:first-of-type) {\n  text-align: center;\n}\n:where(table:not(.docblock-argstable, .content-colors, .swatch-table)) tr td div {\n  margin-left: 16px;\n}\ntable tr th,\ntable tr td {\n  border-bottom: 1px solid #424242;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n[data-arthur-block='description-list'] {\n  padding: 0;\n  margin: 0;\n}\n[data-arthur-block='description-list'] dt {\n  font-weight: 500;\n}\n[data-arthur-block='description-list'] dd {\n  padding: 0;\n  margin: 0;\n}\n\n[data-arthur-block='description-list'] dd > p {\n  margin-top: 0;\n}\n\n[data-arthur-section] {\n  padding-bottom: 64px;\n}\n/* [data-arthur-block='description-list'] dd:before { */\n/*   content: '-'; */\n/*   display: inline; */\n/* } */\n","",{version:3,sources:["webpack://./assets/styles/overview.css"],names:[],mappings:"AAAA,2CAA2C;AAC3C;EACE,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,iBAAiB;AACnB;AACA;;EAEE,gCAAgC;EAChC,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,UAAU;EACV,SAAS;AACX;AACA;EACE,gBAAgB;AAClB;AACA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oBAAoB;AACtB;AACA,uDAAuD;AACvD,oBAAoB;AACpB,uBAAuB;AACvB,MAAM",sourcesContent:["/* Global Overview Story docs(mdx) styles */\r\ntable {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n}\r\n\r\ntable tr th:first-of-type {\r\n  text-align: left;\r\n}\r\ntable tr td:not(:first-of-type) {\r\n  text-align: center;\r\n}\r\n:where(table:not(.docblock-argstable, .content-colors, .swatch-table)) tr td div {\r\n  margin-left: 16px;\r\n}\r\ntable tr th,\r\ntable tr td {\r\n  border-bottom: 1px solid #424242;\r\n  padding-top: 16px;\r\n  padding-bottom: 16px;\r\n}\r\n\r\n[data-arthur-block='description-list'] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n[data-arthur-block='description-list'] dt {\r\n  font-weight: 500;\r\n}\r\n[data-arthur-block='description-list'] dd {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n[data-arthur-block='description-list'] dd > p {\r\n  margin-top: 0;\r\n}\r\n\r\n[data-arthur-section] {\r\n  padding-bottom: 64px;\r\n}\r\n/* [data-arthur-block='description-list'] dd:before { */\r\n/*   content: '-'; */\r\n/*   display: inline; */\r\n/* } */\r\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./stories/checkbox/checkbox.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./assets/styles/overview.css":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_overview_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./assets/styles/overview.css"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_overview_css__WEBPACK_IMPORTED_MODULE_6__.Z,options),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_overview_css__WEBPACK_IMPORTED_MODULE_6__.Z&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_overview_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_overview_css__WEBPACK_IMPORTED_MODULE_6__.Z.locals}}]);
//# sourceMappingURL=checkbox-CheckboxOverview-mdx.1ec23bc9.iframe.bundle.js.map