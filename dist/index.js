"use strict";var c=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var d=c(function(D,y){
var _=require('@stdlib/blas-ext-base-dssum/dist').ndarray;function E(r,e,i,a,p){var f,s,t,n,v,u,q;if(u=r-e,r<=0||u<=0)return NaN;if(r===1||a===0)return 0;for(f=_(r,i,a,p)/r,s=p,t=0,n=0,q=0;q<r;q++)v=i[s]-f,t+=v*v,n+=v,s+=a;return t/u-n/r*(n/u)}y.exports=E
});var x=c(function(F,m){
var O=require('@stdlib/strided-base-stride2offset/dist'),b=d();function g(r,e,i,a){return b(r,e,i,a,O(r,a))}m.exports=g
});var M=c(function(G,l){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=x(),k=d();h(j,"ndarray",k);l.exports=j
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=M(),o,R=z(w(__dirname,"./native.js"));A(R)?o=B:o=R;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
