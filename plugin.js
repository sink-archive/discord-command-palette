(function(g,f,U,l,Ye,le,Je,Q,de,ue,he,Qe,Xe){"use strict";function pe(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var Ze=pe(g),N=pe(Ye),qe=()=>cumcord.patcher.injectCSS(".ysink_palette_modal{position:absolute;top:5rem;left:0;width:100vw;display:flex;align-items:center;background:none!important;box-shadow:none!important}.ysink_palette_modal.ysink_palette_textentrymodal{min-height:0}.ysink_palette_palette{width:50rem;background-color:var(--background-secondary);color:#fff;padding:.75rem 0 0;border-radius:0;overflow:unset!important}.ysink_palette_item{padding:.3rem 1rem .3rem .5rem;transition:background-color .15s;display:flex}.ysink_palette_icon{width:1.5rem;display:inline-block;text-align:center}.ysink_palette_icon_container{width:1.5rem;display:inline-flex;justify-content:center}.ysink_palette_icon_container>img{height:1rem}.ysink_palette_iconseparator{border:solid 1px #ffffff55;margin:-.3rem .5rem}.ysink_palette_item.ysink_palette_selected{background-color:#0005}.ysink_palette_input_wrapper{margin:0 .5rem 1rem;border:#ffffff33 solid 1px;display:flex;align-items:center;padding-left:.5rem}.ysink_palette_input{flex:1;margin-left:.5rem}.ysink_palette_input input{border:none!important;background:none!important;padding:0!important}.ysink_palette_source{text-transform:uppercase;font-style:italic;color:#aaa}.ysink_palette_scrollcontainer{overflow:hidden scroll;max-height:30rem;padding-bottom:.75rem}.ysink_palette_scrollcontainer::-webkit-scrollbar{width:1rem;background-color:#0003}.ysink_palette_scrollcontainer::-webkit-scrollbar-thumb{background-color:#fff3;min-height:40px}.ysink_palette_md{margin:0 .5rem 1rem;padding:.5rem;background-color:#fff1;border:1px solid #ffffff33}.ysink_palette_md>*>:last-child{margin-bottom:0}.ysink_palette_settings{font-size:2rem;display:grid;grid-template-columns:auto 1fr;gap:.75em 2em;align-items:center}.ysink_palette_settings .ysink_palette_slabel{grid-column:1;display:inline;font-size:.6em!important;text-align:right}.ysink_palette_settings .ysink_palette_sdesc{grid-column:1/span 2;display:inline;text-align:center;font-style:italic}.ysink_palette_settings .ysink_palette_sinput{grid-column:2;width:1.3em;height:1.3em}.ysink_palette_settings .ysink_palette_sbutton{width:6em}.ysink_palette_settings_container{display:flex;justify-content:center;margin-top:5em}.ysink_palette_aboutcontainer{display:flex;flex-flow:row nowrap;padding:3rem;height:24rem}.ysink_palette_aboutcontainer .ysink_palette_abouticon{margin-right:2rem;width:15rem;height:15rem}.ysink_palette_aboutcontainer .ysink_palette_right_pane{display:flex;flex-flow:column nowrap;flex:1;gap:1rem}.ysink_palette_aboutcontainer .ysink_palette_right_pane .ysink_palette_entrycount{font-size:1.2rem;line-height:1.2rem}.ysink_palette_aboutcontainer .ysink_palette_right_pane .ysink_palette_warntext{color:var(--text-danger);font-size:1.1rem}"),et=({entry:t,selected:e,id:n,icon:s,finish:i,hover:r})=>{s||(s="");let o=!1;try{new URL(s),o=!0}catch{}return l.React.createElement("div",{className:e?"ysink_palette_item ysink_palette_selected":"ysink_palette_item",id:n,onClick:i,onMouseOver:r},o?l.React.createElement("div",{className:"ysink_palette_icon_container"},l.React.createElement("img",{src:s})):l.React.createElement("span",{className:"ysink_palette_icon"},s),l.React.createElement("span",{className:"ysink_palette_iconseparator"}),t.label,l.React.createElement("div",{style:{flex:1}}),l.React.createElement("span",{className:"ysink_palette_source"},t.source))};const tt=f.findByProps("rules");var fe=({children:t})=>l.React.createElement("div",{class:"ysink_palette_md"},l.React.createElement(tt,null,t));function I(t){return Array.isArray?Array.isArray(t):me(t)==="[object Array]"}const nt=1/0;function st(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-nt?"-0":e}function it(t){return t==null?"":st(t)}function v(t){return typeof t=="string"}function ge(t){return typeof t=="number"}function rt(t){return t===!0||t===!1||ot(t)&&me(t)=="[object Boolean]"}function ye(t){return typeof t=="object"}function ot(t){return ye(t)&&t!==null}function M(t){return t!=null}function X(t){return!t.trim().length}function me(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Ln="Extended search is not available",at="Incorrect 'index' type",ct=t=>`Invalid value for key ${t}`,lt=t=>`Pattern length exceeds max of ${t}.`,dt=t=>`Missing ${t} property in key`,ut=t=>`Property 'weight' in key '${t}' must be a positive integer`,_e=Object.prototype.hasOwnProperty;class ht{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(s=>{let i=Ee(s);n+=i.weight,this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(s=>{s.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Ee(t){let e=null,n=null,s=null,i=1;if(v(t)||I(t))s=t,e=ke(t),n=Z(t);else{if(!_e.call(t,"name"))throw new Error(dt("name"));const r=t.name;if(s=r,_e.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(ut(r));e=ke(r),n=Z(r)}return{path:e,id:n,weight:i,src:s}}function ke(t){return I(t)?t:t.split(".")}function Z(t){return I(t)?t.join("."):t}function pt(t,e){let n=[],s=!1;const i=(r,o,a)=>{if(!!M(r))if(!o[a])n.push(r);else{let c=o[a];const d=r[c];if(!M(d))return;if(a===o.length-1&&(v(d)||ge(d)||rt(d)))n.push(it(d));else if(I(d)){s=!0;for(let u=0,h=d.length;u<h;u+=1)i(d[u],o,a+1)}else o.length&&i(d,o,a+1)}};return i(t,v(e)?e.split("."):e,0),s?n:n[0]}var p={...{isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},...{includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},...{location:0,threshold:.6,distance:100},...{useExtendedSearch:!1,getFn:pt,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1}};const ft=/[^ ]+/g;function gt(t=1,e=3){const n=new Map,s=Math.pow(10,e);return{get(i){const r=i.match(ft).length;if(n.has(r))return n.get(r);const o=1/Math.pow(r,.5*t),a=parseFloat(Math.round(o*s)/s);return n.set(r,a),a},clear(){n.clear()}}}class q{constructor({getFn:e=p.getFn,fieldNormWeight:n=p.fieldNormWeight}={}){this.norm=gt(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,s)=>{this._keysMap[n.id]=s})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,v(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();v(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,s=this.size();n<s;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!M(e)||X(e))return;let s={v:e,i:n,n:this.norm.get(e)};this.records.push(s)}_addObject(e,n){let s={i:n,$:{}};this.keys.forEach((i,r)=>{let o=this.getFn(e,i.path);if(!!M(o)){if(I(o)){let a=[];const c=[{nestedArrIndex:-1,value:o}];for(;c.length;){const{nestedArrIndex:d,value:u}=c.pop();if(!!M(u))if(v(u)&&!X(u)){let h={v:u,i:d,n:this.norm.get(u)};a.push(h)}else I(u)&&u.forEach((h,m)=>{c.push({nestedArrIndex:m,value:h})})}s.$[r]=a}else if(!X(o)){let a={v:o,n:this.norm.get(o)};s.$[r]=a}}}),this.records.push(s)}toJSON(){return{keys:this.keys,records:this.records}}}function xe(t,e,{getFn:n=p.getFn,fieldNormWeight:s=p.fieldNormWeight}={}){const i=new q({getFn:n,fieldNormWeight:s});return i.setKeys(t.map(Ee)),i.setSources(e),i.create(),i}function yt(t,{getFn:e=p.getFn,fieldNormWeight:n=p.fieldNormWeight}={}){const{keys:s,records:i}=t,r=new q({getFn:e,fieldNormWeight:n});return r.setKeys(s),r.setIndexRecords(i),r}function j(t,{errors:e=0,currentLocation:n=0,expectedLocation:s=0,distance:i=p.distance,ignoreLocation:r=p.ignoreLocation}={}){const o=e/t.length;if(r)return o;const a=Math.abs(s-n);return i?o+a/i:a?1:o}function mt(t=[],e=p.minMatchCharLength){let n=[],s=-1,i=-1,r=0;for(let o=t.length;r<o;r+=1){let a=t[r];a&&s===-1?s=r:!a&&s!==-1&&(i=r-1,i-s+1>=e&&n.push([s,i]),s=-1)}return t[r-1]&&r-s>=e&&n.push([s,r-1]),n}const A=32;function _t(t,e,n,{location:s=p.location,distance:i=p.distance,threshold:r=p.threshold,findAllMatches:o=p.findAllMatches,minMatchCharLength:a=p.minMatchCharLength,includeMatches:c=p.includeMatches,ignoreLocation:d=p.ignoreLocation}={}){if(e.length>A)throw new Error(lt(A));const u=e.length,h=t.length,m=Math.max(0,Math.min(s,h));let E=r,y=m;const _=a>1||c,k=_?Array(h):[];let S;for(;(S=t.indexOf(e,y))>-1;){let b=j(e,{currentLocation:S,expectedLocation:m,distance:i,ignoreLocation:d});if(E=Math.min(b,E),y=S+u,_){let P=0;for(;P<u;)k[S+P]=1,P+=1}}y=-1;let T=[],$=1,Y=u+h;const $n=1<<u-1;for(let b=0;b<u;b+=1){let P=0,B=Y;for(;P<B;)j(e,{errors:b,currentLocation:m+B,expectedLocation:m,distance:i,ignoreLocation:d})<=E?P=B:Y=B,B=Math.floor((Y-P)/2+P);Y=B;let He=Math.max(1,m-B+1),ce=o?h:Math.min(m+B,h)+u,O=Array(ce+2);O[ce+1]=(1<<b)-1;for(let R=ce;R>=He;R-=1){let J=R-1,Ve=n[t.charAt(J)];if(_&&(k[J]=+!!Ve),O[R]=(O[R+1]<<1|1)&Ve,b&&(O[R]|=(T[R+1]|T[R])<<1|1|T[R+1]),O[R]&$n&&($=j(e,{errors:b,currentLocation:J,expectedLocation:m,distance:i,ignoreLocation:d}),$<=E)){if(E=$,y=J,y<=m)break;He=Math.max(1,2*m-y)}}if(j(e,{errors:b+1,currentLocation:m,expectedLocation:m,distance:i,ignoreLocation:d})>E)break;T=O}const ae={isMatch:y>=0,score:Math.max(.001,$)};if(_){const b=mt(k,a);b.length?c&&(ae.indices=b):ae.isMatch=!1}return ae}function Et(t){let e={};for(let n=0,s=t.length;n<s;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<s-n-1}return e}class Me{constructor(e,{location:n=p.location,threshold:s=p.threshold,distance:i=p.distance,includeMatches:r=p.includeMatches,findAllMatches:o=p.findAllMatches,minMatchCharLength:a=p.minMatchCharLength,isCaseSensitive:c=p.isCaseSensitive,ignoreLocation:d=p.ignoreLocation}={}){if(this.options={location:n,threshold:s,distance:i,includeMatches:r,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:c,ignoreLocation:d},this.pattern=c?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(m,E)=>{this.chunks.push({pattern:m,alphabet:Et(m),startIndex:E})},h=this.pattern.length;if(h>A){let m=0;const E=h%A,y=h-E;for(;m<y;)u(this.pattern.substr(m,A),m),m+=A;if(E){const _=h-A;u(this.pattern.substr(_),_)}}else u(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:s}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let y={isMatch:!0,score:0};return s&&(y.indices=[[0,e.length-1]]),y}const{location:i,distance:r,threshold:o,findAllMatches:a,minMatchCharLength:c,ignoreLocation:d}=this.options;let u=[],h=0,m=!1;this.chunks.forEach(({pattern:y,alphabet:_,startIndex:k})=>{const{isMatch:S,score:T,indices:$}=_t(e,y,_,{location:i+k,distance:r,threshold:o,findAllMatches:a,minMatchCharLength:c,includeMatches:s,ignoreLocation:d});S&&(m=!0),h+=T,S&&$&&(u=[...u,...$])});let E={isMatch:m,score:m?h/this.chunks.length:1};return m&&s&&(E.indices=u),E}}class C{constructor(e){this.pattern=e}static isMultiMatch(e){return be(e,this.multiRegex)}static isSingleMatch(e){return be(e,this.singleRegex)}search(){}}function be(t,e){const n=t.match(e);return n?n[1]:null}class kt extends C{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class xt extends C{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const s=e.indexOf(this.pattern)===-1;return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class Mt extends C{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class bt extends C{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Rt extends C{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class wt extends C{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Re extends C{constructor(e,{location:n=p.location,threshold:s=p.threshold,distance:i=p.distance,includeMatches:r=p.includeMatches,findAllMatches:o=p.findAllMatches,minMatchCharLength:a=p.minMatchCharLength,isCaseSensitive:c=p.isCaseSensitive,ignoreLocation:d=p.ignoreLocation}={}){super(e);this._bitapSearch=new Me(e,{location:n,threshold:s,distance:i,includeMatches:r,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:c,ignoreLocation:d})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class we extends C{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,s;const i=[],r=this.pattern.length;for(;(s=e.indexOf(this.pattern,n))>-1;)n=s+r,i.push([s,n-1]);const o=!!i.length;return{isMatch:o,score:o?0:1,indices:i}}}const ee=[kt,we,Mt,bt,wt,Rt,xt,Re],Ie=ee.length,It=/ +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/,vt="|";function St(t,e={}){return t.split(vt).map(n=>{let s=n.trim().split(It).filter(r=>r&&!!r.trim()),i=[];for(let r=0,o=s.length;r<o;r+=1){const a=s[r];let c=!1,d=-1;for(;!c&&++d<Ie;){const u=ee[d];let h=u.isMultiMatch(a);h&&(i.push(new u(h,e)),c=!0)}if(!c)for(d=-1;++d<Ie;){const u=ee[d];let h=u.isSingleMatch(a);if(h){i.push(new u(h,e));break}}}return i})}const Ct=new Set([Re.type,we.type]);class Pt{constructor(e,{isCaseSensitive:n=p.isCaseSensitive,includeMatches:s=p.includeMatches,minMatchCharLength:i=p.minMatchCharLength,ignoreLocation:r=p.ignoreLocation,findAllMatches:o=p.findAllMatches,location:a=p.location,threshold:c=p.threshold,distance:d=p.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:s,minMatchCharLength:i,findAllMatches:o,ignoreLocation:r,location:a,threshold:c,distance:d},this.pattern=n?e:e.toLowerCase(),this.query=St(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:s,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let r=0,o=[],a=0;for(let c=0,d=n.length;c<d;c+=1){const u=n[c];o.length=0,r=0;for(let h=0,m=u.length;h<m;h+=1){const E=u[h],{isMatch:y,indices:_,score:k}=E.search(e);if(y){if(r+=1,a+=k,s){const S=E.constructor.type;Ct.has(S)?o=[...o,..._]:o.push(_)}}else{a=0,r=0,o.length=0;break}}if(r){let h={isMatch:!0,score:a/r};return s&&(h.indices=o),h}}return{isMatch:!1,score:1}}}const te=[];function Bt(...t){te.push(...t)}function ne(t,e){for(let n=0,s=te.length;n<s;n+=1){let i=te[n];if(i.condition(t,e))return new i(t,e)}return new Me(t,e)}const z={AND:"$and",OR:"$or"},se={PATH:"$path",PATTERN:"$val"},ie=t=>!!(t[z.AND]||t[z.OR]),Nt=t=>!!t[se.PATH],At=t=>!I(t)&&ye(t)&&!ie(t),ve=t=>({[z.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Se(t,e,{auto:n=!0}={}){const s=i=>{let r=Object.keys(i);const o=Nt(i);if(!o&&r.length>1&&!ie(i))return s(ve(i));if(At(i)){const c=o?i[se.PATH]:r[0],d=o?i[se.PATTERN]:i[c];if(!v(d))throw new Error(ct(c));const u={keyId:Z(c),pattern:d};return n&&(u.searcher=ne(d,e)),u}let a={children:[],operator:r[0]};return r.forEach(c=>{const d=i[c];I(d)&&d.forEach(u=>{a.children.push(s(u))})}),a};return ie(t)||(t=ve(t)),s(t)}function $t(t,{ignoreFieldNorm:e=p.ignoreFieldNorm}){t.forEach(n=>{let s=1;n.matches.forEach(({key:i,norm:r,score:o})=>{const a=i?i.weight:null;s*=Math.pow(o===0&&a?Number.EPSILON:o,(a||1)*(e?1:r))}),n.score=s})}function Lt(t,e){const n=t.matches;e.matches=[],!!M(n)&&n.forEach(s=>{if(!M(s.indices)||!s.indices.length)return;const{indices:i,value:r}=s;let o={indices:i,value:r};s.key&&(o.key=s.key.src),s.idx>-1&&(o.refIndex=s.idx),e.matches.push(o)})}function Tt(t,e){e.score=t.score}function Ot(t,e,{includeMatches:n=p.includeMatches,includeScore:s=p.includeScore}={}){const i=[];return n&&i.push(Lt),s&&i.push(Tt),t.map(r=>{const{idx:o}=r,a={item:e[o],refIndex:o};return i.length&&i.forEach(c=>{c(r,a)}),a})}class L{constructor(e,n={},s){this.options={...p,...n},this.options.useExtendedSearch,this._keyStore=new ht(this.options.keys),this.setCollection(e,s)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof q))throw new Error(at);this._myIndex=n||xe(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){!M(e)||(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let s=0,i=this._docs.length;s<i;s+=1){const r=this._docs[s];e(r,s)&&(this.removeAt(s),s-=1,i-=1,n.push(r))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:s,includeScore:i,shouldSort:r,sortFn:o,ignoreFieldNorm:a}=this.options;let c=v(e)?v(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return $t(c,{ignoreFieldNorm:a}),r&&c.sort(o),ge(n)&&n>-1&&(c=c.slice(0,n)),Ot(c,this._docs,{includeMatches:s,includeScore:i})}_searchStringList(e){const n=ne(e,this.options),{records:s}=this._myIndex,i=[];return s.forEach(({v:r,i:o,n:a})=>{if(!M(r))return;const{isMatch:c,score:d,indices:u}=n.searchIn(r);c&&i.push({item:r,idx:o,matches:[{score:d,value:r,norm:a,indices:u}]})}),i}_searchLogical(e){const n=Se(e,this.options),s=(a,c,d)=>{if(!a.children){const{keyId:h,searcher:m}=a,E=this._findMatches({key:this._keyStore.get(h),value:this._myIndex.getValueForItemAtKeyId(c,h),searcher:m});return E&&E.length?[{idx:d,item:c,matches:E}]:[]}const u=[];for(let h=0,m=a.children.length;h<m;h+=1){const E=a.children[h],y=s(E,c,d);if(y.length)u.push(...y);else if(a.operator===z.AND)return[]}return u},i=this._myIndex.records,r={},o=[];return i.forEach(({$:a,i:c})=>{if(M(a)){let d=s(n,a,c);d.length&&(r[c]||(r[c]={idx:c,item:a,matches:[]},o.push(r[c])),d.forEach(({matches:u})=>{r[c].matches.push(...u)}))}}),o}_searchObjectList(e){const n=ne(e,this.options),{keys:s,records:i}=this._myIndex,r=[];return i.forEach(({$:o,i:a})=>{if(!M(o))return;let c=[];s.forEach((d,u)=>{c.push(...this._findMatches({key:d,value:o[u],searcher:n}))}),c.length&&r.push({idx:a,item:o,matches:c})}),r}_findMatches({key:e,value:n,searcher:s}){if(!M(n))return[];let i=[];if(I(n))n.forEach(({v:r,i:o,n:a})=>{if(!M(r))return;const{isMatch:c,score:d,indices:u}=s.searchIn(r);c&&i.push({score:d,key:e,value:r,idx:o,norm:a,indices:u})});else{const{v:r,n:o}=n,{isMatch:a,score:c,indices:d}=s.searchIn(r);a&&i.push({score:c,key:e,value:r,norm:o,indices:d})}return i}}L.version="6.5.3",L.createIndex=xe,L.parseIndex=yt,L.config=p,L.parseQuery=Se,Bt(Pt);const Dt=t=>{let e=t.filter(i=>!i.id),[n,s]=e.reduce((i,r)=>(r.source!="Built In"?i[0].push(r):i[1].push(r),i),[[],[]]);if(s.length!=0)throw`One or more built-in entries had no ID. Please ping Yellowsink constantly with this:

\`\`\`
${s.map(i=>i.label).join(`
`)}
\`\`\``;if(n.length!=0)throw`One or more custom entries had no ID. Please disable the following entry sources:

\`\`\`
${n.map(i=>i.source).join(`
`)}
\`\`\`

The devs of those sources would likely appreciate this info too:

\`\`\`
${n.map(i=>i.label).join(`
`)}
\`\`\``},Ce=(t,e)=>{let n=t.slice(),s=[];return e.forEach((i,r)=>{let o=n.findIndex(a=>a.id==r);o!=-1&&(s.push([n[o],i]),n.splice(o,1))}),s=s.sort((i,r)=>r[1]-i[1]).map(i=>i[0]),s.concat(n)},Gt=(t,e)=>{Dt(t);const n={threshold:.5,useExtendedSearch:!0,keys:["label","id"]};return new L(t,n).search(e).map(s=>s.item)};var Ft=(t,e,n)=>{if(!n||n=="")return Ce(t,e);let s=Gt(t,n);return Ce(s,e)};const K=f.findByProps("ModalCloseButton"),Pe=f.findByProps("Sizes","Tags"),Be=f.findByDisplayName("Flex"),{openModal:Ut}=f.findByProps("openModalLazy"),jt=f.findByDisplayName("FormSection");f.findByProps("Sizes","Colors","Looks","DropdownSizes");const zt=f.findByProps("rules"),Kt=({err:t,e})=>l.React.createElement(U.ErrorBoundary,null,l.React.createElement(K.ModalRoot,{transitionState:e.transitionState,size:"small",className:"ysink_palette_errormodal"},l.React.createElement(K.ModalHeader,{separator:!1},l.React.createElement(Be.Child,{basis:"auto",grow:1,shrink:1,wrap:!1},l.React.createElement(Pe,{tag:"h2",size:Pe.Sizes.SIZE_20},"We screwed up!!!")),l.React.createElement(Be.Child,{basis:"auto",grow:0,shrink:1,wrap:!1},l.React.createElement(K.ModalCloseButton,{onClick:e.onClose}))),l.React.createElement(K.ModalContent,null,l.React.createElement(jt,null,l.React.createElement(zt,null,t)))));var Wt=t=>Ut(e=>l.React.createElement(Kt,{e,err:t}));const{root:Ht}=f.findByProps("innerPadding");var re=()=>l.React.createElement("style",null,`.ysink_palette_modal.${Ht}{background:none!important;}`);const{useState:Ne,useRef:Ae}=l.React,{openModal:Vt}=f.findByProps("openModalLazy"),$e=f.findByProps("ModalCloseButton"),Yt=f.findByDisplayName("TextInput"),Jt=({e:t,prompt:e,rawEntries:n,closeAction:s,markdown:i})=>{let[r,o]=Ne(""),[a,c]=Ne(0);const d=Ae(),u=Ae();let h=[];try{h=Ft(n,g.persist.ghost.usageCounts,r).filter(y=>y&&(y.condition?y.condition():!0))}catch(y){o(""),Wt(y)}h.length!==0&&(a<0?c(h.length-1):a>h.length-1&&c(0));const m=()=>{if(t.onClose(),r==="cum://cord"){const _=document.createElement("iframe");_.src="https://rentry.co/cumcord_manifesto",_.style.width="100%",_.style.height="100%",_.style.filter="invert(1)";const k=document.createElement("div");k.style.textAlign="center",k.style.color="white",k.style.padding="2rem",k.textContent="You have to reload your discord. lol.",document.body=document.createElement("body"),document.body.appendChild(k),document.body.appendChild(_);return}const y=h[a];if(y.id){const _=g.persist.ghost.usageCounts,k=_.get(y.id)??0;_.set(y.id,k+1),g.persist.store.usageCounts=_}y.action()},E=y=>{switch(y.code){case"ArrowUp":c(a-1);break;case"ArrowDown":c(a+1);break;case"Enter":m();break;default:u.current.firstElementChild.firstChild.focus();break}if(d.current.firstChild){const _=d.current.firstChild.clientHeight;d.current.scroll({behavior:"smooth",top:_*Math.max(0,a-3)})}};return t.transitionState==3&&s&&s(),l.React.createElement(U.ErrorBoundary,null,l.React.createElement(re,null),l.React.createElement($e.ModalRoot,{transitionState:t.transitionState,size:"small",className:"ysink_palette_modal",onKeyDown:E},l.React.createElement($e.ModalContent,{className:"ysink_palette_palette"},i?l.React.createElement(fe,null,i):[],l.React.createElement("div",{className:"ysink_palette_input_wrapper",ref:u},">",l.React.createElement(Yt,{className:"ysink_palette_input",placeholder:e??"Search Actions",type:"text",value:r,onChange:y=>o(y)})),l.React.createElement("div",{className:"ysink_palette_scrollcontainer",ref:d},h.map((y,_)=>l.React.createElement(et,{entry:y,id:`palette_item_${_}`,selected:_==a,icon:y.icon,hover:()=>c(_),finish:m}))))))};let w=(t,e,n,s)=>Vt(i=>l.React.createElement(Jt,{e:i,prompt:t,rawEntries:e,closeAction:s,markdown:n})),Qt=(t,e,n)=>new Promise((s,i)=>{w(t,e.map(r=>({id:r,label:r,action:()=>s(r)})),n,()=>i())});const Xt="\u{1F389} Welcome to **Command Palette**! \u{1F389} Start typing to pick an item from the list, or visit the API Docs to start building custom actions at https://yellowsink.github.io/discord-command-palette/docs";var Zt=t=>{let e=s=>{if(g.state.ghost.pickingBind)return;let i=g.persist.ghost.keyBind;if((s.ctrlKey||s.metaKey)==i.ctrlMeta&&s.shiftKey==i.shift&&s.code==i.code){let o=g.persist.ghost.firstRun!==!1?Xt:null;w(null,t.concat(g.state.ghost.customEntries),o),g.persist.store.firstRun=!1}},n=new AbortController;return document.addEventListener("keyup",e,{signal:n.signal}),()=>n.abort()};const{getGuildPermissions:qt}=f.findByProps("getGuildPermissions"),{getLastSelectedGuildId:x}=f.findByProps("getLastSelectedGuildId"),Le=(t,e)=>{let n=qt({id:t});return!!(n&&(n&e)!=0)},en=()=>Le(x(),BigInt(4)),tn=()=>Le(x(),BigInt(2)),nn=l.React.useState,{openModal:sn}=f.findByProps("openModalLazy"),Te=f.findByProps("ModalCloseButton"),rn=f.findByDisplayName("TextInput"),on=({e:t,prompt:e,finishAction:n,closeAction:s,markdown:i})=>{let[r,o]=nn("");return l.React.createElement(U.ErrorBoundary,null,l.React.createElement(re,null),l.React.createElement(Te.ModalRoot,{transitionState:t.transitionState,size:"small",className:"ysink_palette_modal ysink_palette_textentrymodal",onKeyDown:a=>{a.which==13&&(t.onClose(),n(r))}},l.React.createElement(Te.ModalContent,{className:"ysink_palette_palette"},i?l.React.createElement(fe,null,i):[],l.React.createElement("div",{className:"ysink_palette_input_wrapper"},">",l.React.createElement(rn,{className:"ysink_palette_input",placeholder:e,type:"text",value:r,onChange:a=>o(a),onBlur:()=>s()})))))},D=(t,e,n,s)=>sn(i=>l.React.createElement(on,{e:i,prompt:t,finishAction:e,markdown:n,closeAction:s})),Oe=(t,e)=>new Promise((n,s)=>{D(t,n,e,()=>s("user closed textentry"))}),{getMembers:De}=f.findByProps("getMembers"),{getUser:Ge}=f.findByProps("getUser"),{banUser:an,kickUser:cn}=f.findByProps("banUser"),Fe="\u{1F6E0}";var ln=[{icon:Fe,id:"moderation_banuser",label:"Ban user from current guild",condition:en,action:async()=>{w("Which user to ban?",await Promise.all(De(x()).map(async t=>{let e=await Ge(t.userId),n=t.nick?`[${t.nick}]`:"";return{id:t.userId,label:`${e.username}#${e.discriminator} ${n} (${t.userId})`,icon:`https://cdn.discordapp.com/avatars/${t.userId}/${e.avatar}.webp`,action:()=>D("Enter ban reason",s=>{an(x(),t.userId,null,s)})}})))}},{icon:Fe,id:"moderation_kickuser",label:"Kick user from current guild",condition:tn,action:async()=>{w("Which user to kick?",await Promise.all(De(x()).map(async t=>{let e=await Ge(t.userId),n=t.nick?`[${t.nick}]`:"";return{id:t.userId,label:`${e.username}#${e.discriminator} ${n} (${t.userId})`,icon:`https://cdn.discordapp.com/avatars/${t.userId}/${e.avatar}.webp`,action:()=>D("Enter kick reason",s=>{cn(x(),t.userId,s)})}})))}}];const G="\u{1F4A7}";var dn=[{icon:G,id:"cumcord_installplug",label:"Install plugin from URL",action:async()=>{try{let t=await Oe("Enter URL");await N.default.importPlugin(t),le.showToast({title:"Installed plugin",duration:3e3})}catch{}}},{icon:G,id:"cumcord_removeplug",label:"Remove plugin",action:()=>{let t=Object.keys(N.default.installed.ghost).map(e=>[e,N.default.installed.ghost[e]]);w("Choose plugin to remove",t.map(e=>({id:e[0],label:e[1].manifest.name,action:()=>N.default.removePlugin(e[0])})))}},{icon:G,id:"cumcord_toggleplug",label:"Toggle plugin",action:()=>{let t=Object.keys(N.default.installed.ghost).map(e=>[e,N.default.installed.ghost[e]]);w("Choose plugin to toggle",t.map(e=>({id:e[0],icon:e[1].enabled?"\u{1F7E2} ":"\u{1F534} ",label:e[1].manifest.name,action:()=>N.default.togglePlugin(e[0])})))}},{icon:G,id:"cumcord_uninject",label:"Uninject Cumcord",action:()=>setTimeout(async()=>{await Je.showConfirmationModal({header:"Really uninject Cumcord?",content:"This will disable all of your plugins, and Cumcord will be completely removed",type:"danger",confirmText:"Uninject",cancelText:"Actually, never mind"})&&Q.uninject()},500)},{icon:G,id:"cumcord_toggle_dev",label:"Toggle DevMode",condition:()=>Q.dev,action:Q.dev?.toggleDevMode}];const Ue="\u267B";var un=[{icon:Ue,id:"reboot_reload",label:"Reload Discord",action:()=>window.location.reload()},{icon:Ue,id:"reboot_relaunch",label:"Relaunch Discord to updater",condition:()=>window.DiscordNative,action:()=>window.DiscordNative.app.relaunch()}];const{getGuild:hn}=f.findByProps("getGuild"),{getGuildSettingsSections:pn}=f.findByDisplayName("ConnectedGuildSettings",!1),fn=f.findByProps("saveGuild").open,gn=t=>pn(hn(t)),{getMembers:yn}=f.findByProps("getMembers"),{getUser:mn}=f.findByProps("getUser"),{openUserProfileModal:je}=f.findByProps("openUserProfileModal"),_n=f.findByProps("submitComplete").open,{getUserSettingsSections:En}=f.findByProps("getUserSettingsSections"),W="\u{1F680}";var kn=[{icon:W,id:"navigate_user_profile_id",label:"Open user profile by ID",action:()=>{D("Enter user ID",t=>{setTimeout(()=>{try{je({userId:t})}catch{le.showToast({title:"Failed! - Is the user ID correct?",duration:3e3})}},200)})}},{icon:W,id:"navigate_user_profile_server",label:"Open user profile from current server",action:async()=>{w("Which profile to open?",await Promise.all(yn(x()).map(async t=>{let e=await mn(t.userId),n=t.nick?`[${t.nick}]`:"";return{id:t.userId,label:`${e.username}#${e.discriminator} ${n} (${t.userId})`,icon:`https://cdn.discordapp.com/avatars/${t.userId}/${e.avatar}.webp`,action:()=>setTimeout(()=>je({userId:t.userId}),200)}})))}},{icon:W,id:"navigate_user_settings",label:"Open user settings",action:()=>{w("Which section to open?",Object.values(En("")).map(t=>({id:t.section,label:t.label,action:()=>_n(t.section)})))}},{icon:W,id:"navigate_guild_settings",label:"Open guild settings",condition:x,action:()=>{w("Which section to open?",Object.values(gn(x())).map(t=>({id:t.section,label:t.ariaLabel??t.label,action:()=>setTimeout(()=>fn(x(),t.section))})))}}],xn="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' id='svg5' width='512' height='512' version='1.1' viewBox='0 0 512 512'%3e%3cdefs id='defs2'%3e%3clinearGradient id='linearGradient1270'%3e%3cstop style='stop-color:%230d8270%3bstop-opacity:.98823529' id='stop1266' offset='0'/%3e%3cstop style='stop-color:%23abf7e9%3bstop-opacity:1' id='stop1268' offset='1'/%3e%3c/linearGradient%3e%3clinearGradient id='linearGradient6948-5-6-2'%3e%3cstop style='stop-color:%23a5fab7%3bstop-opacity:1' id='stop6944' offset='0'/%3e%3cstop style='stop-color:%23439950%3bstop-opacity:1' id='stop6946' offset='1'/%3e%3c/linearGradient%3e%3clinearGradient id='linearGradient1129'%3e%3cstop style='stop-color:%23272032%3bstop-opacity:1' id='stop1125' offset='0'/%3e%3cstop style='stop-color:%23203e42%3bstop-opacity:1' id='stop1127' offset='1'/%3e%3c/linearGradient%3e%3clinearGradient id='linearGradient1131' x1='157.384' x2='365.81' y1='.578' y2='507.968' gradientUnits='userSpaceOnUse' xlink:href='%23linearGradient1129'/%3e%3clinearGradient id='linearGradient6950' x1='94.625' x2='213.174' y1='209.843' y2='109.338' gradientUnits='userSpaceOnUse' xlink:href='%23linearGradient6948-5-6-2'/%3e%3clinearGradient id='linearGradient7916' x1='94.625' x2='213.174' y1='209.843' y2='109.338' gradientTransform='translate(47.488839%2c70.468144)' gradientUnits='userSpaceOnUse' xlink:href='%23linearGradient6948-5-6-2'/%3e%3clinearGradient id='linearGradient11776' x1='189.855' x2='307.268' y1='460.425' y2='339.372' gradientUnits='userSpaceOnUse' xlink:href='%23linearGradient6948-5-6-2'/%3e%3clinearGradient id='linearGradient1272' x1='-25.924' x2='444.783' y1='249.29' y2='31.769' gradientUnits='userSpaceOnUse' xlink:href='%23linearGradient1270'/%3e%3c/defs%3e%3cg id='layer1'%3e%3cpath style='fill:url(%23linearGradient1131)%3bfill-opacity:1' id='rect31' width='512' height='512' x='0' y='0' d='m 50%2c0 h 412 a 50%2c50 45 0 1 50%2c50 v 412 a 50%2c50 135 0 1 -50%2c50 H 50 A 50%2c50 45 0 1 0%2c462 V 50 A 50%2c50 135 0 1 50%2c0 Z' rx='0' ry='0'/%3e%3cg id='text3967' aria-label='%26gt%3b' transform='matrix(1.052879%2c0%2c0%2c1.0643107%2c3.4096051%2c12.551612)' style='font-size:400px%3bline-height:1.25%3bfill:url(%23linearGradient6950)%3bfill-opacity:1'%3e%3cpath style='font-family:Calibri%3b-inkscape-font-specification:Calibri%3bfill:url(%23linearGradient7916)%3bfill-opacity:1' id='path6689' d='m 281.69467%2c223.30814 q 0%2c3.32031 -0.39063%2c6.05468 -0.39062%2c2.53907 -0.97656%2c4.49219 -0.58594%2c1.95313 -1.5625%2c3.125 -0.97656%2c0.97656 -2.14844%2c1.5625 l -153.32031%2c77.34375 q -2.14844%2c0.97656 -3.71094%2c1.17188 -1.5625%2c0 -2.53906%2c-1.36719 -0.78125%2c-1.36719 -1.17187%2c-4.10156 -0.39063%2c-2.92969 -0.39063%2c-7.42188 0%2c-5.46875 0.19531%2c-8.78906 0.19532%2c-3.32031 0.78125%2c-5.27344 0.78125%2c-2.14844 2.14844%2c-3.32031 1.36719%2c-1.17188 3.51563%2c-2.14844 L 248.10092%2c222.7222 122.90561%2c162.37064 q -2.53907%2c-1.17187 -4.10157%2c-2.14844 -1.36718%2c-1.17187 -2.14843%2c-3.32031 -0.78125%2c-2.14844 -0.97657%2c-5.46875 -0.19531%2c-3.51562 -0.19531%2c-9.17968 0%2c-5.07813 0.39063%2c-7.8125 0.39062%2c-2.92969 1.17187%2c-4.10157 0.97656%2c-1.36718 2.53906%2c-1.17187 1.5625%2c0.19531 3.71094%2c1.36719 l 153.90625%2c77.53905 q 1.95313%2c0.97656 3.125%2c4.88281 1.36719%2c3.71094 1.36719%2c10.35157 z'/%3e%3c/g%3e%3crect style='fill:url(%23linearGradient11776)%3bfill-opacity:1%3bstroke-width:.827387' id='rect7834' width='225' height='30' x='225' y='385' ry='0'/%3e%3cpath id='rect7940' d='m 50%2c50 c 0%2c154 0%2c308 0%2c462 H 80 V 80 H 512 V 50 C 358%2c50 204%2c50 50%2c50 Z' style='fill:url(%23linearGradient1272)%3bfill-opacity:1%3bstroke-width:.600482'/%3e%3c/g%3e%3c/svg%3e";const{openModal:Mn}=f.findByProps("openModalLazy"),ze=f.findByProps("ModalCloseButton"),Ke=f.findByProps("Sizes","Tags"),oe=f.findByDisplayName("FormText"),bn=({e:t})=>l.React.createElement(U.ErrorBoundary,null,l.React.createElement(re,null),l.React.createElement(ze.ModalRoot,{transitionState:t.transitionState,size:"small",className:"ysink_palette_modal"},l.React.createElement(ze.ModalContent,{className:"ysink_palette_palette"},l.React.createElement("div",{className:"ysink_palette_aboutcontainer"},l.React.createElement("img",{src:xn,className:"ysink_palette_abouticon"}),l.React.createElement("div",{className:"ysink_palette_right_pane"},l.React.createElement(Ke,{tag:"h2",size:Ke.Sizes.SIZE_20},"Discord Command Palette"),l.React.createElement(oe,{className:"ysink_palette_warntext"},"\u26A0 This is pre-release software, expect bugs! \u26A0"),l.React.createElement(oe,{className:"ysink_palette_entrycount"},H.length," built in entries loaded"),l.React.createElement(oe,{className:"ysink_palette_entrycount"},g.state.ghost.customEntries.length," custom entries registered"))))));var Rn=()=>Mn(t=>l.React.createElement(bn,{e:t}));const{updateChannelOverrideSettings:wn}=f.findByProps("updateChannelOverrideSettings"),{getCurrentChannelSettings:In}=f.findByProps("getCurrentChannelSettings"),{updateGuildNotificationSettings:vn}=f.findByProps("updateGuildNotificationSettings"),{isMuted:Sn}=f.findByProps("getMuteConfig");var Cn=[{icon:"\u{1F507}",id:"misc_toggle_channel_mute",label:"Toggle current channel mute",action:()=>{let t=In(x(),de.getChannelId()).channel_is_muted;wn(x(),de.getChannelId(),{muted:!t,suppress_everyone:!t,suppress_roles:!t})}},{icon:"\u{1F507}",id:"misc_toggle_guild_mute",label:"Toggle current guild mute",action:()=>{let t=Sn(x());vn(x(),{muted:!t,suppress_everyone:!t,suppress_roles:!t})}},{icon:"\u2139",id:"misc_show_about",label:"About Command Palette",action:()=>{Rn()}}];const We="Built In",H=ln.concat(dn).concat(un).concat(kn).concat(Cn).map(t=>({source:We,...t}));var Pn=()=>(window.commandPalette={openPalette:w,openPaletteAsync:Qt,openTextEntry:D,openTextEntryAsync:Oe,registerEntry({source:t,id:e,label:n,icon:s,action:i,condition:r}){if(!e||e=="")throw"Register failed: Please supply an ID (string) for your entry";if(!t||t=="")throw"Register failed: Please identify a source (string) for your entry";if(!n||n=="")throw"Register failed: Please supply a label (string) for your entry";if(!i)throw"Register failed: Please supply an action (JS function) for your entry";if(t==We)throw"Register failed: That source is reserved for built in entries";if(H.find(a=>a.id==e)!=null)throw"Register failed: Entry ID taken by a built in entry";let o=g.state.ghost.customEntries.findIndex(a=>a.id==e);if(o!=-1)throw`Register failed: Entry ID taken by entry from source ${g.state.ghost.customEntries[o].source}`;g.state.ghost.customEntries.push({id:e,source:t,label:n,action:i,icon:s,console})},unregisterEntry(t){if(!t||t=="")throw"Unregister failed: Please supply an ID (string) to deregister";let e=g.state.ghost.customEntries,n=e.findIndex(i=>i.id==t);if(n==-1)throw"Unregister failed: No entry with that ID could be found";let s=e[n];return e.splice(n,1),g.state.store.customEntries=e,s},unregisterSource(t){let e=g.state.ghost.customEntries,n=e.filter(s=>s.source!=t);if(n.length!=e.length)return g.state.store.customEntries=n,e.filter(s=>s.source==t)},getEntries:()=>H.concat(g.state.ghost.customEntries)},ue.log("|| COMMAND PALETTE || Initialised window.commandPalette API"),()=>{window.commandPalette=void 0,delete window.commandPalette,ue.log("|| COMMAND PALETTE || Disposed window.commandPalette API")});const V=f.findByDisplayName("FormText"),F=f.findByProps("Sizes","Colors","Looks","DropdownSizes");f.findByDisplayName("KeybindRecorder");const Bn=()=>{const t=e=>{g.persist.store.keyBind.code=e.code,g.state.store.pickingBind=!1};return document.addEventListener("keyup",t,{once:!0}),()=>document.removeEventListener("keyup",t,{once:!0})};var Nn=()=>{he.useNest(g.state),he.useNest(g.persist);let t=l.React.useRef();return t.current?.(),g.state.ghost.pickingBind&&(t.current=Bn()),l.React.createElement("div",{className:"ysink_palette_settings_container"},l.React.createElement("div",{className:"ysink_palette_settings"},l.React.createElement(V,{className:"ysink_palette_slabel"},"Keycode:"," ",g.persist.ghost.keyBind.code.startsWith("Key")?g.persist.ghost.keyBind.code.substring(3):g.persist.ghost.keyBind.code),l.React.createElement(F,{className:"ysink_palette_sbutton",size:F.Sizes.TINY,color:g.state.ghost.pickingBind?F.Colors.RED:F.Colors.GREEN,look:F.Looks.OUTLINED,onClick:()=>g.state.store.pickingBind=!g.state.ghost.pickingBind,onBlur:()=>g.state.store.pickingBind=!1},g.state.ghost.pickingBind?"Cancel":"Change"),l.React.createElement(V,{className:"ysink_palette_sdesc"},"This is the physical location of the key on your keyboard.",l.React.createElement("br",null),"If you use an alternate layout such as Dvorak, Colemak, Workman, etc, this will be wrong."),l.React.createElement(V,{className:"ysink_palette_slabel"},"Shift"),l.React.createElement("input",{className:"ysink_palette_sinput",type:"checkbox",onChange:e=>g.persist.store.keyBind.shift=e.target.checked,checked:g.persist.ghost.keyBind.shift,disabled:g.state.ghost.pickingBind}),l.React.createElement(V,{className:"ysink_palette_slabel"},"Ctrl / Meta / Cmd \u2318"),l.React.createElement("input",{className:"ysink_palette_sinput",type:"checkbox",onChange:e=>g.persist.store.keyBind.ctrlMeta=e.target.checked,checked:g.persist.ghost.keyBind.ctrlMeta,disabled:g.state.ghost.pickingBind})))},An=({persist:t,id:e})=>{t.ghost.keyBind||(t.store.keyBind={ctrlMeta:!0,shift:!0,code:"KeyP"}),t.ghost.usageCounts instanceof Map||(t.store.usageCounts=new Map),Ze.default.state=Xe.nests.make({pickingBind:!1,customEntries:[]});const n=[qe(),Zt(H),Pn()];return{onUnload:()=>n.forEach(s=>s()),settings:Qe.createElement(Nn)}};return An})(cumcord.pluginData,cumcord.modules.webpack,cumcord.ui.components,cumcord.modules.common,cumcord.plugins,cumcord.ui.toasts,cumcord.ui.modals,cumcord,cumcord.modules.common.channels,cumcord.utils.logger,cumcord.utils,cumcord.modules.common.React,cumcord.modules.internal);
