import{r as _}from"./index.LFf77hJu.js";var f={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=_,c=Symbol.for("react.element"),a=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,m=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function u(t,e,i){var r,o={},l=null,p=null;i!==void 0&&(l=""+i),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(p=e.ref);for(r in e)x.call(e,r)&&!y.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:c,type:t,key:l,ref:p,props:o,_owner:m.current}}n.Fragment=a;n.jsx=u;n.jsxs=u;f.exports=n;var s=f.exports;const j=()=>s.jsxs("div",{children:[s.jsx("span",{className:"text-red-900",children:"Hello World!"}),s.jsx("button",{type:"button",onClick:()=>alert("Button Clicked"),children:"Click Me"})]});export{j as default};
