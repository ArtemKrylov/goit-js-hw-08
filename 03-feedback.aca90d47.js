function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,c=f||s||Function("return this")(),m=Object.prototype.toString,d=Math.max,g=Math.min,v=function(){return c.Date.now()};function y(e,t,n){var i,r,l,a,u,f,s=0,c=!1,m=!1,y=!0;if("function"!=typeof e)throw new TypeError(o);function w(t){var n=i,o=r;return i=r=void 0,s=t,a=e.apply(o,n)}function h(e){return s=e,u=setTimeout(S,t),c?w(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-s>=l}function S(){var e=v();if(j(e))return O(e);u=setTimeout(S,function(e){var n=t-(e-f);return m?g(n,l-(e-s)):n}(e))}function O(e){return u=void 0,y&&i?w(e):(i=r=void 0,a)}function T(){var e=v(),n=j(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return h(f);if(m)return u=setTimeout(S,t),w(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,l=(m="maxWait"in n)?d(b(n.maxWait)||0,t):l,y="trailing"in n?!!n.trailing:y),T.cancel=function(){void 0!==u&&clearTimeout(u),s=0,i=f=r=u=void 0},T.flush=function(){return void 0===u?a:O(v())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=l.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:i,maxWait:t,trailing:r})};const w=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g,h=/^\s*$/g,j=document.querySelector(".feedback-form");let S={};function O(e){e.style.outline="1px solid red"}!function(){let e;try{e=JSON.parse(localStorage.getItem("feedback-form-state"))}catch(e){console.error(e)}S=e||{}}(),[...j.elements].forEach((e=>{e.value=S[e.name]||""})),j.addEventListener("input",e(t)((function({target:{name:e,value:t}}){t&&(S[e]=t,localStorage.setItem("feedback-form-state",JSON.stringify(S)))}),500)),j.addEventListener("submit",(function(e){e.preventDefault(),function(){let e=!0;w.test(String(j.elements.email.value))?(O(j.elements.email),console.log("Invalid email"),e=!1):j.elements.email.style.outline="none";h.test(String(j.elements.message.value))?(O(j.elements.message),console.log("Invalid message. Message field must not be empty"),e=!1):j.elements.message.style.outline="none";return e}()?(console.log("Form data:"),console.table(S),S={},localStorage.removeItem("feedback-form-state"),j.elements.email.style.outline="none",j.elements.message.style.outline="none",j.reset()):console.log("Fill the form correctly!")}));
//# sourceMappingURL=03-feedback.aca90d47.js.map
