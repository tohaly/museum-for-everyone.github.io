!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0),n(1);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.section=t.section,this.buttonClass=t.buttonClass}var t,n,o;return t=e,(n=[{key:"scrolTo",value:function(e){var t=setInterval((function(){window.scrollBy(0,10)}),3);document.addEventListener("scroll",(function(){(pageYOffset>=e.offsetTop||Math.round(pageYOffset)===document.body.offsetHeight-document.documentElement.clientHeight)&&clearInterval(t)}))}},{key:"render",value:function(e,t){e.target.classList.contains(t)&&(e.preventDefault(),this.scrolTo(this.section))}},{key:"listeners",value:function(){var e=this;document.addEventListener("click",(function(t){e.render(t,e.buttonClass)}))}}])&&r(t.prototype,n),o&&r(t,o),e}(),i={lead:{section:document.querySelector(".lead"),buttonClass:"menu-item__link_stocks"},poster:{section:document.querySelector(".description"),buttonClass:"menu-item__link_poster"},projects:{section:document.querySelector(".projects"),buttonClass:"menu-item__link_projects"},organizers:{section:document.querySelector(".sponsors__title_org"),buttonClass:"menu-item__link_organizers"},partners:{section:document.querySelector(".sponsors__title_partners"),buttonClass:"menu-item__link_partners"}};function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=new o(i.lead),c=new o(i.poster),a=new o(i.projects),l=new o(i.organizers),f=new o(i.partners);u.listeners(),c.listeners(),a.listeners(),l.listeners(),f.listeners(),document.querySelector(".header__humburger").addEventListener("click",(function(){document.querySelector(".menu_drop-down").classList.toggle("menu_drop-down_is-opened")})),(new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.startDate="04/18/2020",this.counter=this.counter.bind(this),this.daysLeftElem=document.querySelector(".lead__days-left")}var t,n,r;return t=e,(n=[{key:"counter",value:function(){return-Math.floor((new Date-new Date(this.startDate))/864e5)}},{key:"render",value:function(){}},{key:"dateCheck",value:function(){this.counter()||(this.daysLeftElem.textContent="Акция стартовала!"),this.daysLeftElem.textContent="".concat(this.counter()," дней")}}])&&s(t.prototype,n),r&&s(t,r),e}())).dateCheck()}]);