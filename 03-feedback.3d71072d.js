!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,m=Math.max,v=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var i,r,a,f,u,l,c=0,s=!1,d=!1,y=!0;if("function"!=typeof e)throw new TypeError(o);function h(t){var n=i,o=r;return i=r=void 0,c=t,f=e.apply(o,n)}function j(e){return c=e,u=setTimeout(O,t),s?h(e):f}function w(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function O(){var e=p();if(w(e))return T(e);u=setTimeout(O,function(e){var n=t-(e-l);return d?v(n,a-(e-c)):n}(e))}function T(e){return u=void 0,y&&i?h(e):(i=r=void 0,f)}function S(){var e=p(),n=w(e);if(i=arguments,r=this,l=e,n){if(void 0===u)return j(l);if(d)return u=setTimeout(O,t),h(l)}return void 0===u&&(u=setTimeout(O,t)),f}return t=g(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(g(n.maxWait)||0,t):a,y="trailing"in n?!!n.trailing:y),S.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=l=r=u=void 0},S.flush=function(){return void 0===u?f:T(p())},S}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:i,maxWait:t,trailing:r})};const h=document.querySelector(".feedback-form");let j={};!function(){let e;try{e=JSON.parse(localStorage.getItem("feedback-form-state"))}catch(e){console.error(e)}j=e||{}}(),[...h.elements].forEach((e=>{e.value=j[e.name]||""})),h.addEventListener("input",e(t)((function({target:{name:e,value:t}}){t&&(j[e]=t,localStorage.setItem("feedback-form-state",JSON.stringify(j)))}),500)),h.addEventListener("submit",(function(e){e.preventDefault(),console.log("Form data:"),console.table(j),j={},localStorage.removeItem("feedback-form-state"),h.elements.email.style.outline="none",h.elements.message.style.outline="none",h.reset()}))}();
//# sourceMappingURL=03-feedback.3d71072d.js.map
