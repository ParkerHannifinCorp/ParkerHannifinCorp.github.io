"use strict";(self.webpackChunk_arthur_docs=self.webpackChunk_arthur_docs||[]).push([[739],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/Designers.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var D_AzureDevOps_Agents_A4_work_1552_s_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",h4:"h4",ul:"ul",li:"li"},(0,D_AzureDevOps_Agents_A4_work_1552_s_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{title:"Getting Started/Designers"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"getting-started-guide-for-designers",children:"Getting Started Guide for Designers"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The Arthur Design System is used to communicate Parker brand identity and user interface components. Parker user\r\ninterfaces are as varied as their uses, ranging from inspiring websites to applications for a particular service. The\r\naim is to create solutions that provide a well-balanced, system-wide user experience that seamlessly transitions from\r\nthe app to the vehicle using a core set of components, modules, and animations. The Arthur Design Kit acts as the\r\nfoundation, containing the core components that can be applied to all user interface designs created for Parker’s\r\ndigital suite of products. The Getting Started Guide outlined on this page provides instructions on how to install the\r\nArthur Design Kit and implement it within your project."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("section",{"data-arthur-section":"arthur-docs-designer-installation",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"installation",children:"Installation"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"To install the relevant fonts and applications necessary to access, view, and use the Parker Design Kit:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"1-install-the-arthur-type-font",children:"1. Install the Arthur Type Font"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:'Download the latest Parker Type font from the Typography page. Scroll to the "Assets" section and click the link under\r\nthe "Steps to use font" section.'}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"2-install-sketch",children:"2. Install Sketch"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Sketch is the chosen design platform for Audi. To access the Parker Design Kit, work within existing design files, or\r\ncreate new designs from scratch, designers and developers must install and use the latest version of Sketch."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"3-download-library--arthur-design-kits",children:"3. Download Library- Arthur Design Kits"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Libraries are Sketch documents with core components that can be shared across all teams and products. When updates are\r\nmade to components in a Library, other Sketch projects with that Library linked will be notified that changes have been\r\nmade. To ensure designers are using the most up-to-date components in their products, the Arthur Design Kit was created\r\nas a Library."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Parker UI Kit to get the latest Audi Component Library for Sketch"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Parker Icon Library to get the latest Audi Icon Library for Sketch"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Parker UI Styles to get the latest Audi Styles for Sketch"}),"\n"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Updates will be made to the Arthur Design Kit on a regular basis. The Design Operations team will communicate when new\r\nversions of the Library are available for download."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"4-add-library---parker-design-kit---in-sketch",children:"4. Add Library - Parker Design Kit - in Sketch"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:'With the Parker Design Kit downloaded, designers must then add this Library to their new or existing Sketch projects. To\r\ndo this, open Sketch’s Preferences by choosing Sketch > Preferences. From there, either drag the Arthur Design Kit into\r\nthe window, or use the "Add Library…" button to browse for the correct file.'}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"5-start-designing",children:"5. Start Designing"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"To support the designers with aligned and consistent layouts we provide the Arthur Layout System. It guides designers to\r\ncreate consistent user interfaces and to better communicate Parker’s brand identity. There is also an introduction on\r\nbreakpoints of Parker and how to design on them."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"For a better understanding of how to use colors in the Parker Design there is an overview of all colors with its\r\nsemantic usage."})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section",{"data-arthur-section":"arthur-docs-designer-learn-more",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"If you're new to Sketch, head to its Getting Started or Support to learn more."})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Getting Started/Designers",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,D_AzureDevOps_Agents_A4_work_1552_s_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);