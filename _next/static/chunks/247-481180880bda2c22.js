(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{8045:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,a=void 0!==r&&r,l=e.priority,f=void 0!==l&&l,p=e.loading,m=e.lazyBoundary,b=void 0===m?"200px":m,w=e.className,A=e.quality,S=e.width,j=e.height,k=e.objectFit,O=e.objectPosition,z=e.onLoadingComplete,L=e.loader,_=void 0===L?I:L,M=e.placeholder,R=void 0===M?"empty":M,C=e.blurDataURL,P=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),D=n?"responsive":"intrinsic";"layout"in P&&(P.layout&&(D=P.layout),delete P.layout);var q="";if(function(e){return"object"===typeof e&&(v(e)||function(e){return void 0!==e.src}(e))}(t)){var U=v(t)?t.default:t;if(!U.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(U)));if(C=C||U.blurDataURL,q=U.src,(!D||"fill"!==D)&&(j=j||U.height,S=S||U.width,!U.height||!U.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(U)))}t="string"===typeof t?t:q;var N=E(S),B=E(j),T=E(A),W=!f&&("lazy"===p||"undefined"===typeof p);(t.startsWith("data:")||t.startsWith("blob:"))&&(a=!0,W=!1);h.has(t)&&(W=!1);0;var H,K=o(d.useIntersection({rootMargin:b,disabled:!W}),2),F=K[0],V=K[1],$=!W||V,J={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},G={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Q=!1,X={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:k,objectPosition:O},Y="blur"===R?{filter:"blur(20px)",backgroundSize:k||"cover",backgroundImage:'url("'.concat(C,'")'),backgroundPosition:O||"0% 0%"}:{};if("fill"===D)J.display="block",J.position="absolute",J.top=0,J.left=0,J.bottom=0,J.right=0;else if("undefined"!==typeof N&&"undefined"!==typeof B){var Z=B/N,ee=isNaN(Z)?"100%":"".concat(100*Z,"%");"responsive"===D?(J.display="block",J.position="relative",Q=!0,G.paddingTop=ee):"intrinsic"===D?(J.display="inline-block",J.position="relative",J.maxWidth="100%",Q=!0,G.maxWidth="100%",H='<svg width="'.concat(N,'" height="').concat(B,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===D&&(J.display="inline-block",J.position="relative",J.width=N,J.height=B)}else 0;var te={src:g,srcSet:void 0,sizes:void 0};$&&(te=x({src:t,unoptimized:a,layout:D,width:N,quality:T,sizes:n,loader:_}));var ne=t;0;var re;0;var ie=(i(re={},"imagesrcset",te.srcSet),i(re,"imagesizes",te.sizes),re);return c.default.createElement("span",{style:J},Q?c.default.createElement("span",{style:G},H?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(s.toBase64(H))}):null):null,c.default.createElement("img",Object.assign({},P,te,{decoding:"async","data-nimg":D,className:w,ref:function(e){F(e),function(e,t,n,r,i){if(!e)return;var o=function(){e.src!==g&&("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===r&&(e.style.filter="",e.style.backgroundSize="",e.style.backgroundImage="",e.style.backgroundPosition=""),h.add(t),i){var n=e.naturalWidth,o=e.naturalHeight;i({naturalWidth:n,naturalHeight:o})}}))};e.complete?o():e.onload=o}(e,ne,0,R,z)},style:y({},X,Y)})),W&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},P,x({src:t,unoptimized:a,layout:D,width:N,quality:T,sizes:n,loader:_}),{decoding:"async","data-nimg":D,style:X,className:w,loading:p||"lazy"}))),f?c.default.createElement(u.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+te.src+te.srcSet+te.sizes,rel:"preload",as:"image",href:te.srcSet?void 0:te.src},ie))):null)};var c=m(n(7294)),u=m(n(5443)),s=n(6978),f=n(5809),d=n(7190);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){return e&&e.__esModule?e:{default:e}}function y(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){p(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}var h=new Set,g=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var b=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t).concat(z(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(z(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(z(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function v(e){return void 0!==e.default}var w={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai"}||f.imageConfigDefault,A=w.deviceSizes,S=w.imageSizes,j=w.loader,k=w.path,O=(w.domains,a(A).concat(a(S)));function x(e){var t=e.src,n=e.unoptimized,r=e.layout,i=e.width,o=e.quality,l=e.sizes,c=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var u=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,i=/(^|\s)(1?\d?\d)vw/g,o=[];r=i.exec(n);r)o.push(parseInt(r[2]));if(o.length){var l,c=.01*(l=Math).min.apply(l,a(o));return{widths:O.filter((function(e){return e>=A[0]*c})),kind:"w"}}return{widths:O,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:A,kind:"w"}:{widths:a(new Set([e,2*e].map((function(e){return O.find((function(t){return t>=e}))||O[O.length-1]})))),kind:"x"}}(i,r,l),s=u.widths,f=u.kind,d=s.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:s.map((function(e,n){return"".concat(c({src:t,quality:o,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:c({src:t,quality:o,width:s[d]})}}function E(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function I(e){var t=b.get(j);if(t)return t(y({root:k},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(j))}function z(e){return"/"===e[0]?e.slice(1):e}A.sort((function(e,t){return e-t})),O.sort((function(e,t){return e-t}))},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},l=n(6273),c=n(387),u=n(7190);var s={};function f(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(i?"%"+i:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=c.useRouter(),o=a.default.useMemo((function(){var t=i(l.resolveHref(r,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?l.resolveHref(r,e.as):o||n}}),[r,e.href,e.as]),d=o.href,p=o.as,m=e.children,y=e.replace,h=e.shallow,g=e.scroll,b=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var v=(t=a.default.Children.only(m))&&"object"===typeof t&&t.ref,w=i(u.useIntersection({rootMargin:"200px"}),2),A=w[0],S=w[1],j=a.default.useCallback((function(e){A(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,A]);a.default.useEffect((function(){var e=S&&n&&l.isLocalURL(d),t="undefined"!==typeof b?b:r&&r.locale,i=s[d+"%"+p+(t?"%"+t:"")];e&&!i&&f(r,d,p,{locale:t})}),[p,d,S,b,n,r]);var k={ref:j,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),t[i?"replace":"push"](n,r,{shallow:o,locale:c,scroll:a}))}(e,r,d,p,y,h,g,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var O="undefined"!==typeof b?b:r&&r.locale,x=r&&r.isLocaleDomain&&l.getDomainLocale(p,O,r&&r.locales,r&&r.domainLocales);k.href=x||l.addBasePath(l.addLocale(p,O,r&&r.defaultLocale))}return a.default.cloneElement(t,k)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!l,r=o.useRef(),u=i(o.useState(!1),2),s=u[0],f=u[1],d=o.useCallback((function(e){r.current&&(r.current(),r.current=void 0),n||s||e&&e.tagName&&(r.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,s]);return o.useEffect((function(){if(!l&&!s){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=n(7294),a=n(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map},6978:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)}}]);