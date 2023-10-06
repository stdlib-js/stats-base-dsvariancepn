"use strict";var p=function(r,v){return function(){return v||r((v={exports:{}}).exports,v),v.exports}};var m=p(function(C,d){
var _=require('@stdlib/blas-ext-base-dssum/dist');function E(r,v,c,a){var o,s,t,n,e,i,u;if(i=r-v,r<=0||i<=0)return NaN;if(r===1||a===0)return 0;for(o=_(r,c,a)/r,a<0?s=(1-r)*a:s=0,t=0,n=0,u=0;u<r;u++)e=c[s]-o,t+=e*e,n+=e,s+=a;return t/i-n/r*(n/i)}d.exports=E
});var x=p(function(D,y){
var O=require('@stdlib/blas-ext-base-dssum/dist').ndarray;function b(r,v,c,a,o){var s,t,n,e,i,u,q;if(u=r-v,r<=0||u<=0)return NaN;if(r===1||a===0)return 0;for(s=O(r,c,a,o)/r,t=o,n=0,e=0,q=0;q<r;q++)i=c[t]-s,n+=i*i,e+=i,t+=a;return n/u-e/r*(e/u)}y.exports=b
});var l=p(function(F,j){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=m(),h=x();g(M,"ndarray",h);j.exports=M
});var k=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=l(),f,R=w(k(__dirname,"./native.js"));z(R)?f=A:f=R;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
