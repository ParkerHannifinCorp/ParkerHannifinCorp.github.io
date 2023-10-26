/*! For license information please see foundations-Spacing-Spacing-stories-mdx.686162ef.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_arthur_docs=self.webpackChunk_arthur_docs||[]).push([[103],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/foundations/Spacing/Spacing.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,color:()=>color,default:()=>Spacing_stories,gray:()=>gray,text_colors:()=>text_colors});__webpack_require__("../../node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),legacy_tokens=__webpack_require__("./stories/foundations/legacy-tokens.ts"),Card=__webpack_require__("./stories/foundations/Card.tsx"),utils=__webpack_require__("./stories/foundations/Colors/utils/index.ts"),theming_dist=__webpack_require__("../../node_modules/@storybook/theming/dist/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const{space}=legacy_tokens.default,StyledSpacingTable=theming_dist.zo.table((()=>({fontFamily:`${["Roboto","Arial","sans-serif"].join(" ")}`,fontSize:"1rem",margin:0,WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitOverflowScrolling:"touch"})),{margin:"16px 0"},(()=>({"&.sbdocs.sbdocs-table.swatch-table":{fontSize:"0.875rem",lineHeight:"24px",padding:0,margin:"30px 0",borderCollapse:"collapse",borderBottom:"1px solid #cccccc",boxSizing:"border-box","& tr":{backgroundColor:"white"},"& tr td":{margin:0,paddingTop:"20px",paddingBottom:"20px",lineHeight:1},"& thead":{borderBottom:`1px solid ${utils.Mn.gray20.baseHex}`,"& tr th":{padding:"0 0 20px",lineHeight:1,fontWeight:500,margin:0,color:`${utils.Mn.gray75.baseHex}`}},"& tbody":{"& tr":{borderBottom:`1px solid ${utils.Mn.gray20.baseHex}`,borderTop:`1px solid ${utils.Mn.gray20.baseHex}`,height:"auto","&:first-of-type":{borderTop:`1px solid ${utils.Mn.gray20.baseHex}`},"& td:first-of-type":{width:"200px",minWidth:"200px",paddingRight:"30px"},"& td:nth-of-type(2)":{width:"100%"},"& td:last-of-type":{whiteSpace:"nowrap",width:"264px",minWidth:"264px"},"&:last-of-type td":{paddingBottom:"20px"}}},"& tr th :first-of-type, & tr td :first-of-type":{},"& tr th :last-child, & tr td :last-child":{}}}))),StoryTableContainer=props=>(0,jsx_runtime.jsxs)(StyledSpacingTable,{className:"sbdocs sbdocs-table swatch-table",children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{align:"left",children:"Spacing examples"}),(0,jsx_runtime.jsx)("th",{align:"left",children:"name"}),(0,jsx_runtime.jsx)("th",{align:"left",children:props.rhTableHeading||"value"})]})}),(0,jsx_runtime.jsx)("tbody",{children:props.children})]});StoryTableContainer.displayName="StoryTableContainer";const StoryTable=props=>(0,jsx_runtime.jsx)(StoryTableContainer,{rhTableHeading:props.rhTableHeading,children:Object.entries(space).map((([k,v],i)=>(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)("div",{className:"sbdocs sbdocs-div",style:{backgroundColor:"#ffb91d",width:`${v}px`,height:`${v}px`}})}),(0,jsx_runtime.jsx)("td",{children:k}),(0,jsx_runtime.jsx)("td",{children:`${v}px`})]},`${i}`)))});StoryTable.displayName="StoryTable";try{StoryTableContainer.displayName="StoryTableContainer",StoryTableContainer.__docgenInfo={description:"",displayName:"StoryTableContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/foundations/Spacing/SpacingTable.tsx#StoryTableContainer"]={docgenInfo:StoryTableContainer.__docgenInfo,name:"StoryTableContainer",path:"stories/foundations/Spacing/SpacingTable.tsx#StoryTableContainer"})}catch(__react_docgen_typescript_loader_error){}try{StoryTable.displayName="StoryTable",StoryTable.__docgenInfo={description:"",displayName:"StoryTable",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/foundations/Spacing/SpacingTable.tsx#StoryTable"]={docgenInfo:StoryTable.__docgenInfo,name:"StoryTable",path:"stories/foundations/Spacing/SpacingTable.tsx#StoryTable"})}catch(__react_docgen_typescript_loader_error){}const{color,color:{gray}}=legacy_tokens.default,text_colors={gray75:utils.Mn.gray75.baseHex,gray70:utils.Mn.gray70.baseHex,white:utils.Mn.gray0.baseHex,gray20:utils.Mn.gray20.baseHex,blue:utils.Mn.blue.baseHex,red:utils.Mn.red.baseHex};function _createMdxContent(props){const _components=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Foundational/Spacing"}),"\n",(0,jsx_runtime.jsx)("h1",{className:"sbdocs-layout-h1",children:"Spacing"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Positioning UI should be with taught including the empty space between components. This is what creates relationships\nand hierarchy withing the visual controls."}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Spacing sizes"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Usage and Samples"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)("h2",{className:"sbdocs-layout-h2",children:"Spacing Sizes"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Using the right sizes will create consistency and hierarchy in user interface. Elements with more spacing around them\nperceived as more important because they get more focus on the page, while small spacing makes components look stacked\nand not stand out."}),"\n",(0,jsx_runtime.jsx)(StoryTable,{colorset:"text",color:text_colors,rhTableHeading:"Spacing size"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)("h2",{className:"sbdocs-layout-h2",children:"Usage and Examples"}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"You can double the sizes to create bigger spacings"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Stay consistent with paddings and sizes across different UI components"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Align all the elements to the same spacing within the components or a page"}),"\n"]}),"\n",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)("h4",{className:"sbdocs-layout-h4",children:"Dropdown"}),"\n",(0,jsx_runtime.jsx)(Card.Z,{variant:"story",children:(0,jsx_runtime.jsx)("img",{width:"100%",src:"./space_usage_dropdown.jpg",alt:"spacing usage example"})}),"\n",(0,jsx_runtime.jsx)("h4",{className:"sbdocs-layout-h4",children:"Input Field"}),"\n",(0,jsx_runtime.jsx)(Card.Z,{variant:"story",children:(0,jsx_runtime.jsx)("img",{width:"100%",src:"./space_usage_input_field.jpg",alt:"spacing usage example"})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Foundational/Spacing",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const Spacing_stories=componentMeta},"./stories/foundations/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const CARD_VARIANT={default:styled_components__WEBPACK_IMPORTED_MODULE_3__.iv`
    align-items: center;
    border-color: #cccccc;
    border-style: solid;
    height: 328px;
    justify-content: center;
    padding-top: 20px;

    & img {
      width: min-content;
    }
  `},StyledCard=styled_components__WEBPACK_IMPORTED_MODULE_3__.zo.div`
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  ${props=>CARD_VARIANT[props.variant]}
`;function Card(props){const{className,children,variant="default"}=props,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("card",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledCard,{className:classes,variant,children})}Card.displayName="Card";const __WEBPACK_DEFAULT_EXPORT__=Card;Card.displayName="Card";try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/foundations/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"stories/foundations/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"./stories/foundations/Colors/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{zy:()=>background_colors,aP:()=>border_colors,Sl:()=>brand_colors,OD:()=>gray_tones,Fy:()=>semantic_colors,Z6:()=>text_colors,Mn:()=>transformedColorObject,Pz:()=>variantColors,vl:()=>withMargin,YX:()=>withReset});var legacy_tokens=__webpack_require__("./stories/foundations/legacy-tokens.ts");const displayNameLookup={white:"White",black:"Black",gold:"Arthur Gold",gray75:"Arthur Black",brand_blue:"Brand Blue",blue:"Blue",red:"Red",orange:"Orange",green:"Green",teal:"Teal",purple:"Purple"},semanticNameLookup={red:"Signal Red(Danger)",green:"Signal Green(Success)",orange:"Signal Orange(Notice/Warning)",blue:"Signal Blue(Informative)",gray75:"Arthur Black",gray0:"White",gray100:"Black"},textColorsLookup={blue:"link text color",gray20:"disabled text color",gray70:"secondary text color",gray75:"primary text color",red:"error text color",white:"inverted text color"},backgroundColorsLookup={gold:"highlighted background color",gray5:"secondary background color",gray75:"inverted background color",white:"primary background color"},borderColorsLookup={gray10:"disabled border color",gray30:"UI border color",gray75:"layout border color"},{color:{common,gray,...colors}}=legacy_tokens.default,withReset=()=>({fontFamily:`${["Roboto","Arial","sans-serif"].join(" ")}`,fontSize:"1rem",margin:0,WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitOverflowScrolling:"touch"}),withMargin={margin:"16px 0"},transformedColorObject={};Object.entries(gray).forEach((([k,v])=>{const key=`gray${k}`,displayName="75"!==k?`Gray ${k}`:`Gray${k} (Arthur Black)`;transformedColorObject[key]={baseHex:v,variants:v,name:k,displayname:displayName,semanticName:semanticNameLookup[key],usage:{text:textColorsLookup[key],background:backgroundColorsLookup[key],border:borderColorsLookup[key]}}})),Object.entries(colors).forEach((([k,v])=>{transformedColorObject[k]={baseHex:v.base,variants:v,name:k,displayname:displayNameLookup[k],semanticName:semanticNameLookup[k],usage:{text:textColorsLookup[k],background:backgroundColorsLookup[k],border:borderColorsLookup[k]}}})),Object.entries(common).forEach((([k,v])=>{transformedColorObject[k]={baseHex:v,variants:v,name:k,displayname:displayNameLookup[k],semanticName:semanticNameLookup[k],usage:{text:textColorsLookup[k],background:backgroundColorsLookup[k],border:borderColorsLookup[k]}}}));const sortOrder=["gold","brand_blue","teal","blue","red","orange","green","purple"],variantColors=Object.entries(colors).sort(((a,b)=>sortOrder.indexOf(a[0])-sortOrder.indexOf(b[0]))).reduce(((acc,[k,v])=>(!/gray/.test(k)&&(acc[k]={name:k,variants:v,displayname:displayNameLookup[k]}),acc)),{}),semantic_colors={red:transformedColorObject.red,orange:transformedColorObject.orange,green:transformedColorObject.green,blue:transformedColorObject.blue},brand_colors={white:transformedColorObject.white,gold:transformedColorObject.gold,gray75:transformedColorObject.gray75},gray_tones=Object.entries(transformedColorObject).reduce(((acc,[k,v])=>(/gray/.test(k)&&(acc[k]=v),acc)),{}),background_colors={white:transformedColorObject.white,gray5:transformedColorObject.gray5,gray75:transformedColorObject.gray75,gold:transformedColorObject.gold},text_colors={gray75:transformedColorObject.gray75,gray70:transformedColorObject.gray70,white:transformedColorObject.white,gray20:transformedColorObject.gray20,blue:transformedColorObject.blue,red:transformedColorObject.red},border_colors={gray75:transformedColorObject.gray75,gray30:transformedColorObject.gray30,gray10:transformedColorObject.gray10}},"./stories/foundations/legacy-tokens.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={borders:{width:{small:"1px",medium:"2px"},radius:{pill:"50vh",circle:"50%"}},box:{shadow:{small:"0px 0px 5px 0px rgba(0,0,0,0.2015252813592657)",medium:"0px 0px 10px 0px rgba(0,0,0,0.25)",large:"0px 0px 15px 0px rgba(0,0,0,0.3)"}},color:{common:{white:"#ffffff",black:"#000000"},green:{lightest:"#88bb8a",lighter:"#60a563",base:"#388e3c",darker:"#2d7230",darkest:"#225524"},orange:{lightest:"#f9b066",lighter:"#f79633",base:"#f57c00",darker:"#c46300",darkest:"#934a00"},red:{lightest:"#e58282",lighter:"#dc5959",base:"#d32f2f",darker:"#a92626",darkest:"#7f1c1c"},blue:{lightest:"#66ade0",lighter:"#3391d6",base:"#0076cc",darker:"#005ea3",darkest:"#00477a"},gold:{lightest:"#ffd577",lighter:"#ffc74a",base:"#ffb91d",darker:"#cc9417",darkest:"#996f11"},purple:{lightest:"#b870db",lighter:"#a564c6",base:"#9933cc",darker:"#6b248f",darkest:"#4d1a66"},gray:{0:"#ffffff",5:"#f2f2f2",10:"#e6e6e6",20:"#cccccc",30:"#b3b3b3",40:"#999999",50:"#808080",60:"#666666",70:"#4d4d4d",75:"#424242",80:"#333333",90:"#191919",100:"#000000"},brand_blue:{lightest:"#66718e",lighter:"#334268",base:"#001342",darker:"#000f35",darkest:"#000b28"},teal:{lightest:"#66cccd",lighter:"#33bbbd",base:"#00aaac",darker:"#00888a",darkest:"#006667"}},font:{size:{xsmall:"0.694rem",small:"0.833rem",medium:"1rem",large:"1.2rem",xlarge:"1.44rem",xxlarge:"1.728rem",xxxlarge:"2.074rem",xxxxlarge:"2.488rem",xxxxxlarge:"2.986em",xxxxxxlarge:"3.583em"},lineHeight:{small:"1.1rem",medium:"1.618rem",large:"2.818rem"},weight:{regular:400,medium:500,bold:700},family:"\\“Roboto\\”, Arial, sans-serif"},size:{xsmall:16,small:24,mediium:32,large:48,xlarge:64,xxlarge:96},space:{xxsmall:4,xsmall:8,small:12,medium:16,large:24,xlarge:32,xxlarge:40,xxxlarge:48},breakpoint:{xsmall:374,small:767,medium:1023,large:1439,xlarge:1919}}},"../../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);
//# sourceMappingURL=foundations-Spacing-Spacing-stories-mdx.686162ef.iframe.bundle.js.map