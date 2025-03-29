// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import{ndarray as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dssum@v0.2.2-esm/index.mjs";function t(e,r,t,n,d){var i,a,m,o,f,l,u;if(l=e-r,e<=0||l<=0)return NaN;if(1===e||0===n)return 0;for(i=s(e,t,n,d)/e,a=d,m=0,o=0,u=0;u<e;u++)m+=(f=t[a]-i)*f,o+=f,a+=n;return m/l-o/e*(o/l)}function n(e,s,n,d){return t(e,s,n,d,r(e,d))}e(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
