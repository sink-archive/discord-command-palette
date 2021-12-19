(function(g,m,W,h,ze,oe,Ke,He,Ge,ce,ae,We,Ve){"use strict";function le(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var Ye=le(g),B=le(ze),Je=()=>cumcord.patcher.injectCSS(".ysink_palette_modal{position:absolute;top:5rem;left:0;width:100vw;display:flex;align-items:center;background:none!important;box-shadow:none!important}.ysink_palette_modal.ysink_palette_textentrymodal{min-height:0}.ysink_palette_palette{width:50rem;background-color:var(--background-secondary);color:#fff;padding:.75rem 0 0;border-radius:0;overflow:unset!important}.ysink_palette_item{padding:.3rem 1rem .3rem .5rem;transition:background-color .15s;display:flex}.ysink_palette_icon{width:1.5rem;display:inline-block;text-align:center}.ysink_palette_icon_container{width:1.5rem;display:inline-flex;justify-content:center}.ysink_palette_icon_container>img{height:1rem}.ysink_palette_iconseparator{border:solid 1px #ffffff55;margin:-.3rem .5rem}.ysink_palette_item.ysink_palette_selected{background-color:#0005}.ysink_palette_input_wrapper{margin:0 .5rem 1rem;border:#ffffff33 solid 1px;display:flex;align-items:center;padding-left:.5rem}.ysink_palette_input{flex:1;margin-left:.5rem}.ysink_palette_input input{border:none!important;background:none!important;padding:0!important}.ysink_palette_source{text-transform:uppercase;font-style:italic;color:#aaa}.ysink_palette_scrollcontainer{overflow:hidden scroll;max-height:30rem;padding-bottom:.75rem}.ysink_palette_scrollcontainer::-webkit-scrollbar{width:1rem;background-color:#0003}.ysink_palette_scrollcontainer::-webkit-scrollbar-thumb{background-color:#fff3;min-height:40px}.ysink_palette_md{margin:0 .5rem 1rem;padding:.5rem;background-color:#fff1;border:1px solid #ffffff33}.ysink_palette_md>*>:last-child{margin-bottom:0}.ysink_palette_settings{font-size:2rem;display:grid;grid-template-columns:auto 1fr;gap:.75em 2em;align-items:center}.ysink_palette_settings .ysink_palette_slabel{grid-column:1;display:inline;font-size:.6em!important;text-align:right}.ysink_palette_settings .ysink_palette_sinput{grid-column:2;width:1.3em;height:1.3em}.ysink_palette_settings .ysink_palette_sbutton{width:6em}.ysink_palette_settings_container{display:flex;justify-content:center;margin-top:5em}"),Qe=({entry:t,selected:e,id:s,icon:n,finish:r,hover:i})=>{n||(n="");let o=!1;try{new URL(n),o=!0}catch{}return h.React.createElement("div",{className:e?"ysink_palette_item ysink_palette_selected":"ysink_palette_item",id:s,onClick:r,onMouseOver:i},o?h.React.createElement("div",{className:"ysink_palette_icon_container"},h.React.createElement("img",{src:n})):h.React.createElement("span",{className:"ysink_palette_icon"},n),h.React.createElement("span",{className:"ysink_palette_iconseparator"}),t.label,h.React.createElement("div",{style:{flex:1}}),h.React.createElement("span",{className:"ysink_palette_source"},t.source))};const Xe=m.findByProps("rules");var ue=({children:t})=>h.React.createElement("div",{class:"ysink_palette_md"},h.React.createElement(Xe,null,t));function R(t){return Array.isArray?Array.isArray(t):fe(t)==="[object Array]"}const Ze=1/0;function qe(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-Ze?"-0":e}function et(t){return t==null?"":qe(t)}function w(t){return typeof t=="string"}function de(t){return typeof t=="number"}function tt(t){return t===!0||t===!1||st(t)&&fe(t)=="[object Boolean]"}function he(t){return typeof t=="object"}function st(t){return he(t)&&t!==null}function E(t){return t!=null}function V(t){return!t.trim().length}function fe(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const ks="Extended search is not available",nt="Incorrect 'index' type",rt=t=>`Invalid value for key ${t}`,it=t=>`Pattern length exceeds max of ${t}.`,ot=t=>`Missing ${t} property in key`,ct=t=>`Property 'weight' in key '${t}' must be a positive integer`,pe=Object.prototype.hasOwnProperty;class at{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(n=>{let r=ge(n);s+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,s+=r.weight}),this._keys.forEach(n=>{n.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function ge(t){let e=null,s=null,n=null,r=1;if(w(t)||R(t))n=t,e=me(t),s=Y(t);else{if(!pe.call(t,"name"))throw new Error(ot("name"));const i=t.name;if(n=i,pe.call(t,"weight")&&(r=t.weight,r<=0))throw new Error(ct(i));e=me(i),s=Y(i)}return{path:e,id:s,weight:r,src:n}}function me(t){return R(t)?t:t.split(".")}function Y(t){return R(t)?t.join("."):t}function lt(t,e){let s=[],n=!1;const r=(i,o,c)=>{if(!!E(i))if(!o[c])s.push(i);else{let a=o[c];const l=i[a];if(!E(l))return;if(c===o.length-1&&(w(l)||de(l)||tt(l)))s.push(et(l));else if(R(l)){n=!0;for(let u=0,f=l.length;u<f;u+=1)r(l[u],o,c+1)}else o.length&&r(l,o,c+1)}};return r(t,w(e)?e.split("."):e,0),n?s:s[0]}var p={...{isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},...{includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},...{location:0,threshold:.6,distance:100},...{useExtendedSearch:!1,getFn:lt,ignoreLocation:!1,ignoreFieldNorm:!1}};const ut=/[^ ]+/g;function dt(t=3){const e=new Map,s=Math.pow(10,t);return{get(n){const r=n.match(ut).length;if(e.has(r))return e.get(r);const i=1/Math.sqrt(r),o=parseFloat(Math.round(i*s)/s);return e.set(r,o),o},clear(){e.clear()}}}class J{constructor({getFn:e=p.getFn}={}){this.norm=dt(3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,w(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();w(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!E(e)||V(e))return;let n={v:e,i:s,n:this.norm.get(e)};this.records.push(n)}_addObject(e,s){let n={i:s,$:{}};this.keys.forEach((r,i)=>{let o=this.getFn(e,r.path);if(!!E(o)){if(R(o)){let c=[];const a=[{nestedArrIndex:-1,value:o}];for(;a.length;){const{nestedArrIndex:l,value:u}=a.pop();if(!!E(u))if(w(u)&&!V(u)){let f={v:u,i:l,n:this.norm.get(u)};c.push(f)}else R(u)&&u.forEach((f,d)=>{a.push({nestedArrIndex:d,value:f})})}n.$[i]=c}else if(!V(o)){let c={v:o,n:this.norm.get(o)};n.$[i]=c}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function ye(t,e,{getFn:s=p.getFn}={}){const n=new J({getFn:s});return n.setKeys(t.map(ge)),n.setSources(e),n.create(),n}function ht(t,{getFn:e=p.getFn}={}){const{keys:s,records:n}=t,r=new J({getFn:e});return r.setKeys(s),r.setIndexRecords(n),r}function z(t,{errors:e=0,currentLocation:s=0,expectedLocation:n=0,distance:r=p.distance,ignoreLocation:i=p.ignoreLocation}={}){const o=e/t.length;if(i)return o;const c=Math.abs(n-s);return r?o+c/r:c?1:o}function ft(t=[],e=p.minMatchCharLength){let s=[],n=-1,r=-1,i=0;for(let o=t.length;i<o;i+=1){let c=t[i];c&&n===-1?n=i:!c&&n!==-1&&(r=i-1,r-n+1>=e&&s.push([n,r]),n=-1)}return t[i-1]&&i-n>=e&&s.push([n,i-1]),s}const $=32;function pt(t,e,s,{location:n=p.location,distance:r=p.distance,threshold:i=p.threshold,findAllMatches:o=p.findAllMatches,minMatchCharLength:c=p.minMatchCharLength,includeMatches:a=p.includeMatches,ignoreLocation:l=p.ignoreLocation}={}){if(e.length>$)throw new Error(it($));const u=e.length,f=t.length,d=Math.max(0,Math.min(n,f));let y=i,_=d;const k=c>1||a,A=k?Array(f):[];let b;for(;(b=t.indexOf(e,_))>-1;){let M=z(e,{currentLocation:b,expectedLocation:d,distance:r,ignoreLocation:l});if(y=Math.min(M,y),_=b+u,k){let C=0;for(;C<u;)A[b+C]=1,C+=1}}_=-1;let O=[],N=1,H=u+f;const Es=1<<u-1;for(let M=0;M<u;M+=1){let C=0,P=H;for(;C<P;)z(e,{errors:M,currentLocation:d+P,expectedLocation:d,distance:r,ignoreLocation:l})<=y?C=P:H=P,P=Math.floor((H-C)/2+C);H=P;let je=Math.max(1,d-P+1),ie=o?f:Math.min(d+P,f)+u,T=Array(ie+2);T[ie+1]=(1<<M)-1;for(let x=ie;x>=je;x-=1){let G=x-1,Ue=s[t.charAt(G)];if(k&&(A[G]=+!!Ue),T[x]=(T[x+1]<<1|1)&Ue,M&&(T[x]|=(O[x+1]|O[x])<<1|1|O[x+1]),T[x]&Es&&(N=z(e,{errors:M,currentLocation:G,expectedLocation:d,distance:r,ignoreLocation:l}),N<=y)){if(y=N,_=G,_<=d)break;je=Math.max(1,2*d-_)}}if(z(e,{errors:M+1,currentLocation:d,expectedLocation:d,distance:r,ignoreLocation:l})>y)break;O=T}const re={isMatch:_>=0,score:Math.max(.001,N)};if(k){const M=ft(A,c);M.length?a&&(re.indices=M):re.isMatch=!1}return re}function gt(t){let e={};for(let s=0,n=t.length;s<n;s+=1){const r=t.charAt(s);e[r]=(e[r]||0)|1<<n-s-1}return e}class _e{constructor(e,{location:s=p.location,threshold:n=p.threshold,distance:r=p.distance,includeMatches:i=p.includeMatches,findAllMatches:o=p.findAllMatches,minMatchCharLength:c=p.minMatchCharLength,isCaseSensitive:a=p.isCaseSensitive,ignoreLocation:l=p.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:a,ignoreLocation:l},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(d,y)=>{this.chunks.push({pattern:d,alphabet:gt(d),startIndex:y})},f=this.pattern.length;if(f>$){let d=0;const y=f%$,_=f-y;for(;d<_;)u(this.pattern.substr(d,$),d),d+=$;if(y){const k=f-$;u(this.pattern.substr(k),k)}}else u(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let _={isMatch:!0,score:0};return n&&(_.indices=[[0,e.length-1]]),_}const{location:r,distance:i,threshold:o,findAllMatches:c,minMatchCharLength:a,ignoreLocation:l}=this.options;let u=[],f=0,d=!1;this.chunks.forEach(({pattern:_,alphabet:k,startIndex:A})=>{const{isMatch:b,score:O,indices:N}=pt(e,_,k,{location:r+A,distance:i,threshold:o,findAllMatches:c,minMatchCharLength:a,includeMatches:n,ignoreLocation:l});b&&(d=!0),f+=O,b&&N&&(u=[...u,...N])});let y={isMatch:d,score:d?f/this.chunks.length:1};return d&&n&&(y.indices=u),y}}class v{constructor(e){this.pattern=e}static isMultiMatch(e){return Ee(e,this.multiRegex)}static isSingleMatch(e){return Ee(e,this.singleRegex)}search(){}}function Ee(t,e){const s=t.match(e);return s?s[1]:null}class mt extends v{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class yt extends v{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class _t extends v{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Et extends v{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class kt extends v{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Mt extends v{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class ke extends v{constructor(e,{location:s=p.location,threshold:n=p.threshold,distance:r=p.distance,includeMatches:i=p.includeMatches,findAllMatches:o=p.findAllMatches,minMatchCharLength:c=p.minMatchCharLength,isCaseSensitive:a=p.isCaseSensitive,ignoreLocation:l=p.ignoreLocation}={}){super(e);this._bitapSearch=new _e(e,{location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:a,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Me extends v{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,n;const r=[],i=this.pattern.length;for(;(n=e.indexOf(this.pattern,s))>-1;)s=n+i,r.push([n,s-1]);const o=!!r.length;return{isMatch:o,score:o?0:1,indices:r}}}const Q=[mt,Me,_t,Et,Mt,kt,yt,ke],Ie=Q.length,It=/ +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/,xt="|";function Rt(t,e={}){return t.split(xt).map(s=>{let n=s.trim().split(It).filter(i=>i&&!!i.trim()),r=[];for(let i=0,o=n.length;i<o;i+=1){const c=n[i];let a=!1,l=-1;for(;!a&&++l<Ie;){const u=Q[l];let f=u.isMultiMatch(c);f&&(r.push(new u(f,e)),a=!0)}if(!a)for(l=-1;++l<Ie;){const u=Q[l];let f=u.isSingleMatch(c);if(f){r.push(new u(f,e));break}}}return r})}const wt=new Set([ke.type,Me.type]);class St{constructor(e,{isCaseSensitive:s=p.isCaseSensitive,includeMatches:n=p.includeMatches,minMatchCharLength:r=p.minMatchCharLength,ignoreLocation:i=p.ignoreLocation,findAllMatches:o=p.findAllMatches,location:c=p.location,threshold:a=p.threshold,distance:l=p.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:r,findAllMatches:o,ignoreLocation:i,location:c,threshold:a,distance:l},this.pattern=s?e:e.toLowerCase(),this.query=Rt(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let i=0,o=[],c=0;for(let a=0,l=s.length;a<l;a+=1){const u=s[a];o.length=0,i=0;for(let f=0,d=u.length;f<d;f+=1){const y=u[f],{isMatch:_,indices:k,score:A}=y.search(e);if(_){if(i+=1,c+=A,n){const b=y.constructor.type;wt.has(b)?o=[...o,...k]:o.push(k)}}else{c=0,i=0,o.length=0;break}}if(i){let f={isMatch:!0,score:c/i};return n&&(f.indices=o),f}}return{isMatch:!1,score:1}}}const X=[];function bt(...t){X.push(...t)}function Z(t,e){for(let s=0,n=X.length;s<n;s+=1){let r=X[s];if(r.condition(t,e))return new r(t,e)}return new _e(t,e)}const D={AND:"$and",OR:"$or"},q={PATH:"$path",PATTERN:"$val"},ee=t=>!!(t[D.AND]||t[D.OR]),vt=t=>!!t[q.PATH],Ct=t=>!R(t)&&he(t)&&!ee(t),xe=t=>({[D.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Re(t,e,{auto:s=!0}={}){const n=r=>{let i=Object.keys(r);const o=vt(r);if(!o&&i.length>1&&!ee(r))return n(xe(r));if(Ct(r)){const a=o?r[q.PATH]:i[0],l=o?r[q.PATTERN]:r[a];if(!w(l))throw new Error(rt(a));const u={keyId:Y(a),pattern:l};return s&&(u.searcher=Z(l,e)),u}let c={children:[],operator:i[0]};return i.forEach(a=>{const l=r[a];R(l)&&l.forEach(u=>{c.children.push(n(u))})}),c};return ee(t)||(t=xe(t)),n(t)}function Pt(t,{ignoreFieldNorm:e=p.ignoreFieldNorm}){t.forEach(s=>{let n=1;s.matches.forEach(({key:r,norm:i,score:o})=>{const c=r?r.weight:null;n*=Math.pow(o===0&&c?Number.EPSILON:o,(c||1)*(e?1:i))}),s.score=n})}function Bt(t,e){const s=t.matches;e.matches=[],!!E(s)&&s.forEach(n=>{if(!E(n.indices)||!n.indices.length)return;const{indices:r,value:i}=n;let o={indices:r,value:i};n.key&&(o.key=n.key.src),n.idx>-1&&(o.refIndex=n.idx),e.matches.push(o)})}function $t(t,e){e.score=t.score}function At(t,e,{includeMatches:s=p.includeMatches,includeScore:n=p.includeScore}={}){const r=[];return s&&r.push(Bt),n&&r.push($t),t.map(i=>{const{idx:o}=i,c={item:e[o],refIndex:o};return r.length&&r.forEach(a=>{a(i,c)}),c})}class L{constructor(e,s={},n){this.options={...p,...s},this.options.useExtendedSearch,this._keyStore=new at(this.options.keys),this.setCollection(e,n)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof J))throw new Error(nt);this._myIndex=s||ye(this.options.keys,this._docs,{getFn:this.options.getFn})}add(e){!E(e)||(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let n=0,r=this._docs.length;n<r;n+=1){const i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,r-=1,s.push(i))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:i,sortFn:o,ignoreFieldNorm:c}=this.options;let a=w(e)?w(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Pt(a,{ignoreFieldNorm:c}),i&&a.sort(o),de(s)&&s>-1&&(a=a.slice(0,s)),At(a,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(e){const s=Z(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:i,i:o,n:c})=>{if(!E(i))return;const{isMatch:a,score:l,indices:u}=s.searchIn(i);a&&r.push({item:i,idx:o,matches:[{score:l,value:i,norm:c,indices:u}]})}),r}_searchLogical(e){const s=Re(e,this.options),n=(c,a,l)=>{if(!c.children){const{keyId:u,searcher:f}=c,d=this._findMatches({key:this._keyStore.get(u),value:this._myIndex.getValueForItemAtKeyId(a,u),searcher:f});return d&&d.length?[{idx:l,item:a,matches:d}]:[]}switch(c.operator){case D.AND:{const u=[];for(let f=0,d=c.children.length;f<d;f+=1){const y=c.children[f],_=n(y,a,l);if(_.length)u.push(..._);else return[]}return u}case D.OR:{const u=[];for(let f=0,d=c.children.length;f<d;f+=1){const y=c.children[f],_=n(y,a,l);if(_.length){u.push(..._);break}}return u}}},r=this._myIndex.records,i={},o=[];return r.forEach(({$:c,i:a})=>{if(E(c)){let l=n(s,c,a);l.length&&(i[a]||(i[a]={idx:a,item:c,matches:[]},o.push(i[a])),l.forEach(({matches:u})=>{i[a].matches.push(...u)}))}}),o}_searchObjectList(e){const s=Z(e,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach(({$:o,i:c})=>{if(!E(o))return;let a=[];n.forEach((l,u)=>{a.push(...this._findMatches({key:l,value:o[u],searcher:s}))}),a.length&&i.push({idx:c,item:o,matches:a})}),i}_findMatches({key:e,value:s,searcher:n}){if(!E(s))return[];let r=[];if(R(s))s.forEach(({v:i,i:o,n:c})=>{if(!E(i))return;const{isMatch:a,score:l,indices:u}=n.searchIn(i);a&&r.push({score:l,key:e,value:i,idx:o,norm:c,indices:u})});else{const{v:i,n:o}=s,{isMatch:c,score:a,indices:l}=n.searchIn(i);c&&r.push({score:a,key:e,value:i,norm:o,indices:l})}return r}}L.version="6.4.6",L.createIndex=ye,L.parseIndex=ht,L.config=p,L.parseQuery=Re,bt(St);const Nt=t=>{let e=t.filter(r=>!r.id),[s,n]=e.reduce((r,i)=>(i.source!="Built In"?r[0].push(i):r[1].push(i),r),[[],[]]);if(n.length!=0)throw`One or more built-in entries had no ID. Please ping Yellowsink constantly with this:

\`\`\`
${n.map(r=>r.label).join(`
`)}
\`\`\``;if(s.length!=0)throw`One or more custom entries had no ID. Please disable the following entry sources:

\`\`\`
${s.map(r=>r.source).join(`
`)}
\`\`\`

The devs of those sources would likely appreciate this info too:

\`\`\`
${s.map(r=>r.label).join(`
`)}
\`\`\``},we=(t,e)=>{let s=t.slice(),n=[];return e.forEach((r,i)=>{let o=s.findIndex(c=>c.id==i);o!=-1&&(n.push([s[o],r]),s.splice(o,1))}),n=n.sort((r,i)=>i[1]-r[1]).map(r=>r[0]),n.concat(s)},Lt=(t,e)=>{Nt(t);const s={threshold:.5,useExtendedSearch:!0,keys:["label","id"]};return new L(t,s).search(e).map(n=>n.item)};var Ot=(t,e,s)=>{if(!s||s=="")return we(t,e);let n=Lt(t,s);return we(n,e)};const K=m.findByProps("ModalCloseButton"),Se=m.findByProps("Sizes","Tags"),be=m.findByDisplayName("Flex"),{openModal:Tt}=m.findByProps("openModalLazy"),Dt=m.findByDisplayName("FormSection");m.findByProps("Sizes","Colors","Looks","DropdownSizes");const Ft=m.findByProps("rules"),jt=({err:t,e})=>h.React.createElement(W.ErrorBoundary,null,h.React.createElement(K.ModalRoot,{transitionState:e.transitionState,size:"small",className:"ysink_palette_errormodal"},h.React.createElement(K.ModalHeader,{separator:!1},h.React.createElement(be.Child,{basis:"auto",grow:1,shrink:1,wrap:!1},h.React.createElement(Se,{tag:"h2",size:Se.Sizes.SIZE_20},"We screwed up!!!")),h.React.createElement(be.Child,{basis:"auto",grow:0,shrink:1,wrap:!1},h.React.createElement(K.ModalCloseButton,{onClick:e.onClose}))),h.React.createElement(K.ModalContent,null,h.React.createElement(Dt,null,h.React.createElement(Ft,null,t)))));var Ut=t=>Tt(e=>h.React.createElement(jt,{e,err:t}));const ve=h.React.useState,{openModal:zt}=m.findByProps("openModalLazy"),Ce=m.findByProps("ModalCloseButton"),Kt=m.findByDisplayName("TextInput"),Ht=({e:t,prompt:e,rawEntries:s,closeAction:n,markdown:r})=>{let[i,o]=ve(""),[c,a]=ve(0),l=[];try{l=Ot(s,g.persist.ghost.usageCounts,i).filter(d=>d&&(d.condition?.()??!0))}catch(d){o(""),Ut(d)}const u=()=>{t.onClose();let d=l[c];if(d.id){let y=g.persist.ghost.usageCounts,_=y.get(d.id)??0;y.set(d.id,_+1),g.persist.store.usageCounts=y}d.action()},f=d=>{switch(d.code){case"ArrowUp":c>0?a(c-1):a(l.length-1);break;case"ArrowDown":c<l.length-1?a(c+1):a(0);break;case"Enter":u();break;default:document.getElementsByClassName("ysink_palette_input")[0].children[0].focus();break}document.getElementById(`palette_item_${c}`)?.scrollIntoView(!1)};return t.transitionState==3&&n&&n(),h.React.createElement(W.ErrorBoundary,null,h.React.createElement(Ce.ModalRoot,{transitionState:t.transitionState,size:"small",className:"ysink_palette_modal",onKeyDown:f},h.React.createElement(Ce.ModalContent,{className:"ysink_palette_palette"},r?h.React.createElement(ue,null,r):[],h.React.createElement("div",{className:"ysink_palette_input_wrapper"},">",h.React.createElement(Kt,{className:"ysink_palette_input",placeholder:e??"Search Actions",type:"text",value:i,onChange:d=>o(d)})),h.React.createElement("div",{className:"ysink_palette_scrollcontainer"},l.map((d,y)=>h.React.createElement(Qe,{entry:d,id:`palette_item_${y}`,selected:y==c,icon:d.icon,hover:()=>a(y),finish:u}))))))};let S=(t,e,s,n)=>zt(r=>h.React.createElement(Ht,{e:r,prompt:t,rawEntries:e,closeAction:n,markdown:s})),Gt=(t,e,s)=>new Promise((n,r)=>{S(t,e.map(i=>({id:i,label:i,action:()=>n(i)})),s,()=>r())});const Wt="\u{1F389} Welcome to **Command Palette**! \u{1F389} Start typing to pick an item from the list, or visit the API Docs to start building custom actions at https://yellowsink.github.io/discord-command-palette/docs";var Vt=t=>{let e=n=>{if(g.state.ghost.pickingBind)return;let r=g.persist.ghost.keyBind;if((n.ctrlKey||n.metaKey)==r.ctrlMeta&&n.shiftKey==r.shift&&n.which==r.code){let o=g.persist.ghost.firstRun!==!1?Wt:null;S(null,t.concat(g.state.ghost.customEntries),o),g.persist.store.firstRun=!1}},s=new AbortController;return document.addEventListener("keyup",e,{signal:s.signal}),()=>s.abort()};const{getGuildPermissions:Yt}=m.findByProps("getGuildPermissions"),{getLastSelectedGuildId:I}=m.findByProps("getLastSelectedGuildId"),Pe=(t,e)=>{let s=Yt({id:t});return!!(s&&(s&e)!=0)},Jt=()=>Pe(I(),BigInt(4)),Qt=()=>Pe(I(),BigInt(2)),Xt=h.React.useState,{openModal:Zt}=m.findByProps("openModalLazy"),Be=m.findByProps("ModalCloseButton"),qt=m.findByDisplayName("TextInput"),es=({e:t,prompt:e,finishAction:s,closeAction:n,markdown:r})=>{let[i,o]=Xt("");return h.React.createElement(W.ErrorBoundary,null,h.React.createElement(Be.ModalRoot,{transitionState:t.transitionState,size:"small",className:"ysink_palette_modal ysink_palette_textentrymodal",onKeyDown:c=>{c.which==13&&(t.onClose(),s(i))}},h.React.createElement(Be.ModalContent,{className:"ysink_palette_palette"},r?h.React.createElement(ue,null,r):[],h.React.createElement("div",{className:"ysink_palette_input_wrapper"},">",h.React.createElement(qt,{className:"ysink_palette_input",placeholder:e,type:"text",value:i,onChange:c=>o(c),onBlur:()=>n()})))))},F=(t,e,s,n)=>Zt(r=>h.React.createElement(es,{e:r,prompt:t,finishAction:e,markdown:s,closeAction:n})),$e=(t,e)=>new Promise((s,n)=>{F(t,s,e,()=>n("user closed textentry"))}),{getMembers:Ae}=m.findByProps("getMembers"),{getUser:Ne}=m.findByProps("getUser"),{banUser:ts,kickUser:ss}=m.findByProps("banUser"),Le="\u{1F6E0}";var ns=[{icon:Le,id:"moderation_banuser",label:"Ban user from current guild",condition:Jt,action:async()=>{S("Which user to ban?",await Promise.all(Ae(I()).map(async t=>{let e=await Ne(t.userId),s=t.nick?`[${t.nick}]`:"";return{id:t.userId,label:`${e.username}#${e.discriminator} ${s} (${t.userId})`,icon:`https://cdn.discordapp.com/avatars/${t.userId}/${e.avatar}.webp`,action:()=>F("Enter ban reason",n=>{ts(I(),t.userId,null,n)})}})))}},{icon:Le,id:"moderation_kickuser",label:"Kick user from current guild",condition:Qt,action:async()=>{S("Which user to kick?",await Promise.all(Ae(I()).map(async t=>{let e=await Ne(t.userId),s=t.nick?`[${t.nick}]`:"";return{id:t.userId,label:`${e.username}#${e.discriminator} ${s} (${t.userId})`,icon:`https://cdn.discordapp.com/avatars/${t.userId}/${e.avatar}.webp`,action:()=>F("Enter kick reason",n=>{ss(I(),t.userId,n)})}})))}}];const j="\u{1F4A7}";var rs=[{icon:j,id:"cumcord_installplug",label:"Install plugin from URL",action:async()=>{try{let t=await $e("Enter URL");await B.default.importPlugin(t),oe.showToast({title:"Installed plugin",duration:3e3})}catch{}}},{icon:j,id:"cumcord_removeplug",label:"Remove plugin",action:()=>{let t=Object.keys(B.default.installed.ghost).map(e=>[e,B.default.installed.ghost[e]]);S("Choose plugin to remove",t.map(e=>({id:e[0],label:e[1].manifest.name,action:()=>B.default.removePlugin(e[0])})))}},{icon:j,id:"cumcord_toggleplug",label:"Toggle plugin",action:()=>{let t=Object.keys(B.default.installed.ghost).map(e=>[e,B.default.installed.ghost[e]]);S("Choose plugin to toggle",t.map(e=>({id:e[0],label:(e[1].enabled?"\u{1F7E2} ":"\u{1F534} ")+e[1].manifest.name,action:()=>B.default.togglePlugin(e[0])})))}},{icon:j,id:"cumcord_uninject",label:"Uninject Cumcord",action:()=>setTimeout(async()=>{await Ke.showConfirmationModal({header:"Really uninject Cumcord?",content:"This will disable all of your plugins, and Cumcord will be completely removed",type:"danger",confirmText:"Uninject",cancelText:"Actually, never mind"})&&He.uninject()},500)},{icon:j,id:"cumcord_toggle_dev",label:"Toggle DevMode",action:Ge.toggleDevMode}];const Oe="\u267B";var is=[{icon:Oe,id:"reboot_reload",label:"Reload Discord",action:()=>window.location.reload()},{icon:Oe,id:"reboot_relaunch",label:"Relaunch Discord to updater",condition:()=>window.DiscordNative,action:()=>window.DiscordNative.app.relaunch()}];const{getMembers:os}=m.findByProps("getMembers"),{getUser:cs}=m.findByProps("getUser"),{openUserProfileModal:Te}=m.findByProps("openUserProfileModal"),as=m.findByProps("submitComplete").open,{getUserSettingsSections:ls}=m.findByProps("getUserSettingsSections"),te="\u{1F680}";var us=[{icon:te,id:"navigate_user_profile_id",label:"Open user profile by ID",action:()=>{F("Enter user ID",t=>{setTimeout(()=>{try{Te({userId:t})}catch{oe.showToast({title:"Failed! - Is the user ID correct?",duration:3e3})}},200)})}},{icon:te,id:"navigate_user_profile_server",label:"Open user profile from current server",action:async()=>{S("Which profile to open?",await Promise.all(os(I()).map(async t=>{let e=await cs(t.userId),s=t.nick?`[${t.nick}]`:"";return{id:t.userId,label:`${e.username}#${e.discriminator} ${s} (${t.userId})`,icon:`https://cdn.discordapp.com/avatars/${t.userId}/${e.avatar}.webp`,action:()=>setTimeout(()=>Te({userId:t.userId}),200)}})))}},{icon:te,id:"navigate_user_settings",label:"Open user settings",action:()=>{S("Which section to open?",Object.values(ls("")).map(t=>({id:t.section,label:t.label,action:()=>as(t.section)})))}}];const{updateChannelOverrideSettings:ds}=m.findByProps("updateChannelOverrideSettings"),{getCurrentChannelSettings:hs}=m.findByProps("getCurrentChannelSettings"),{getChannelId:De}=m.findByProps("getChannelId","getVoiceChannelId"),{updateGuildNotificationSettings:fs}=m.findByProps("updateGuildNotificationSettings"),{isMuted:ps}=m.findByProps("getMuteConfig");var gs=[{icon:"\u{1F507}",id:"misc_toggle_channel_mute",label:"Toggle current channel mute",action:()=>{let t=hs(I(),De()).channel_is_muted;ds(I(),De(),{muted:!t,suppress_everyone:!t,suppress_roles:!t})}},{icon:"\u{1F507}",id:"misc_toggle_guild_mute",label:"Toggle current guild mute",action:()=>{let t=ps(I());fs(I(),{muted:!t,suppress_everyone:!t,suppress_roles:!t})}}];const Fe="Built In",se=ns.concat(rs).concat(is).concat(us).concat(gs).map(t=>({source:Fe,...t}));var ms=()=>(window.commandPalette={openPalette:S,openPaletteAsync:Gt,openTextEntry:F,openTextEntryAsync:$e,registerEntry({source:t,id:e,label:s,icon:n,action:r,condition:i}){if(!e||e=="")throw"Register failed: Please supply an ID (string) for your entry";if(!t||t=="")throw"Register failed: Please identify a source (string) for your entry";if(!s||s=="")throw"Register failed: Please supply a label (string) for your entry";if(!r)throw"Register failed: Please supply an action (JS function) for your entry";if(t==Fe)throw"Register failed: That source is reserved for built in entries";if(se.find(c=>c.id==e)!=null)throw"Register failed: Entry ID taken by a built in entry";let o=g.state.ghost.customEntries.findIndex(c=>c.id==e);if(o!=-1)throw`Register failed: Entry ID taken by entry from source ${g.state.ghost.customEntries[o].source}`;g.state.ghost.customEntries.push({id:e,source:t,label:s,action:r,icon:n,console})},unregisterEntry(t){if(!t||t=="")throw"Unregister failed: Please supply an ID (string) to deregister";let e=g.state.ghost.customEntries,s=e.findIndex(r=>r.id==t);if(s==-1)throw"Unregister failed: No entry with that ID could be found";let n=e[s];return e.splice(s,1),g.state.store.customEntries=e,n},unregisterSource(t){let e=g.state.ghost.customEntries,s=e.filter(n=>n.source!=t);if(s.length!=e.length)return g.state.store.customEntries=s,e.filter(n=>n.source==t)},getEntries:()=>se.concat(g.state.ghost.customEntries)},ce.log("|| COMMAND PALETTE || Initialised window.commandPalette API"),()=>{window.commandPalette=void 0,delete window.commandPalette,ce.log("|| COMMAND PALETTE || Disposed window.commandPalette API")});const ne=m.findByDisplayName("FormText"),U=m.findByProps("Sizes","Colors","Looks","DropdownSizes");var ys=()=>{if(ae.useNest(g.state),ae.useNest(g.persist),g.state.ghost.pickingBind){const t=e=>{g.persist.store.keyBind.code=e.which,g.state.store.pickingBind=!1};document.addEventListener("keyup",t,{once:!0})}return h.React.createElement("div",{className:"ysink_palette_settings_container"},h.React.createElement("div",{className:"ysink_palette_settings"},h.React.createElement(ne,{className:"ysink_palette_slabel"},"Keycode: ",String.fromCharCode(g.persist.ghost.keyBind.code)),h.React.createElement(U,{className:"ysink_palette_sbutton",size:U.Sizes.TINY,color:g.state.ghost.pickingBind?U.Colors.RED:U.Colors.GREEN,look:U.Looks.OUTLINED,onClick:()=>g.state.store.pickingBind=!g.state.ghost.pickingBind,onBlur:()=>g.state.store.pickingBind=!1},g.state.ghost.pickingBind?"Cancel":"Change"),h.React.createElement(ne,{className:"ysink_palette_slabel"},"Shift"),h.React.createElement("input",{className:"ysink_palette_sinput",type:"checkbox",onChange:t=>g.persist.store.keyBind.shift=t.target.checked,checked:g.persist.ghost.keyBind.shift,disabled:g.state.ghost.pickingBind}),h.React.createElement(ne,{className:"ysink_palette_slabel"},"Ctrl / Meta / Cmd \u2318"),h.React.createElement("input",{className:"ysink_palette_sinput",type:"checkbox",onChange:t=>g.persist.store.keyBind.ctrlMeta=t.target.checked,checked:g.persist.ghost.keyBind.ctrlMeta,disabled:g.state.ghost.pickingBind})))},_s=({persist:t,id:e})=>{t.ghost.keyBind||(t.store.keyBind={ctrlMeta:!0,shift:!0,code:80}),t.ghost.usageCounts||(t.store.usageCounts=new Map),Ye.default.state=Ve.nests.make({pickingBind:!1,customEntries:[]});const s=[Je(),Vt(se),ms()];return{onUnload:()=>s.forEach(n=>n()),settings:We.createElement(ys)}};return _s})(cumcord.pluginData,cumcord.modules.webpack,cumcord.ui.components,cumcord.modules.common,cumcord.plugins,cumcord.ui.toasts,cumcord.ui.modals,cumcord,cumcord.dev,cumcord.utils.logger,cumcord.utils,cumcord.modules.common.React,cumcord.modules.internal);