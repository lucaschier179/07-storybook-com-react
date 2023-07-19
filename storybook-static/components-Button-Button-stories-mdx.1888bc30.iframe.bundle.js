/*! For license information please see components-Button-Button-stories-mdx.1888bc30.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_07_storybook_com_react=self.webpackChunk_07_storybook_com_react||[]).push([[611],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./src/components/Button/Button.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{buttonExample:()=>buttonExample,buttonExample2:()=>buttonExample2,default:()=>Button_stories});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),blocks=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var _templateObject,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),_excluded=["children"],__jsx=react.createElement,StyledButton=styled_components_browser_esm.ZP.button(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  cursor: pointer;\n  border: 0;\n  padding: 8px 14px;\n  transition: 0.3;\n  ","\n"])),(function(_ref){var theme=_ref.theme,variant=_ref.variant;return console.log(theme),{backgroundColor:theme.colors[variant].main,color:theme.colors[variant].text,":hover":{backgroundColor:theme.colors[variant].light},":focus":{backgroundColor:theme.colors[variant].dark}}}));function Button(_ref2){var children=_ref2.children,props=_objectWithoutProperties(_ref2,_excluded);return __jsx(StyledButton,props,children)}Button.displayName="Button",Button.defaultProps={disabled:!1,variant:"primary"},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:""},variant:{defaultValue:{value:'"primary"',computed:!1},required:!1,tsType:{name:"union",raw:'"primary" | "accent"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"accent"'}]},description:"Essa prop é baseada nas opções de cor que temos no nosso tema, confira a página do tema para mais informações"},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"Essa prop é baseada nas opções de cor que temos no nosso tema, confira a página do tema para mais informações",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"accent"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(blocks.h_,{title:"Components/Button",component:Button}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"button",children:"Button"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Descrição do Botão"}),"\n",(0,jsx_runtime.jsx)(blocks.$4,{of:Button}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"button-example",children:"Button example"}),"\n",(0,jsx_runtime.jsx)(blocks.Xz,{children:(0,jsx_runtime.jsx)(blocks.oG,{name:"Button Example",args:{children:"Texto do Botão"},children:args=>(0,jsx_runtime.jsx)(Button,{...args})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"button-example-1",children:"Button example"}),"\n",(0,jsx_runtime.jsx)(blocks.Xz,{children:(0,jsx_runtime.jsx)(blocks.oG,{name:"Button Example 2",args:{children:"Texto do Botão 2"},children:args=>(0,jsx_runtime.jsx)(Button,{...args})})})]})}const buttonExample=args=>(0,jsx_runtime.jsx)(Button,{...args});buttonExample.storyName="Button Example",buttonExample.args={children:"Texto do Botão"},buttonExample.parameters={storySource:{source:"args => <Button {...args} />"}};const buttonExample2=args=>(0,jsx_runtime.jsx)(Button,{...args});buttonExample2.storyName="Button Example 2",buttonExample2.args={children:"Texto do Botão 2"},buttonExample2.parameters={storySource:{source:"args => <Button {...args} />"}};const componentMeta={title:"Components/Button",component:Button,tags:["stories-mdx"],includeStories:["buttonExample","buttonExample2"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const Button_stories=componentMeta},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);