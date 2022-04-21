var un = {};

var gn=Object.create;var be=Object.defineProperty;var fn=Object.getOwnPropertyDescriptor;var hn=Object.getOwnPropertyNames;var Tn=Object.getPrototypeOf,Cn=Object.prototype.hasOwnProperty;var En=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);var In=(a,e,i,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of hn(e))!Cn.call(a,s)&&s!==i&&be(a,s,{get:()=>e[s],enumerable:!(n=fn(e,s))||n.enumerable});return a};var ve=(a,e,i)=>(i=a!=null?gn(Tn(a)):{},In(e||!a||!a.__esModule?be(i,"default",{value:a,enumerable:!0}):i,a));var he=En(F=>{Object.defineProperty(F,"__esModule",{value:!0});var K=class extends Error{},Ja=class extends K{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`);}},$a=class extends K{constructor(e){super(`Invalid Interval: ${e.toMessage()}`);}},Qa=class extends K{constructor(e){super(`Invalid Duration: ${e.toMessage()}`);}},$=class extends K{},ka=class extends K{constructor(e){super(`Invalid unit ${e}`);}},D=class extends K{},G=class extends K{constructor(){super("Zone is an abstract class");}},m="numeric",w="short",k="long",Xa={year:m,month:m,day:m},Je={year:m,month:w,day:m},Sn={year:m,month:w,day:m,weekday:w},$e={year:m,month:k,day:m},Qe={year:m,month:k,day:m,weekday:k},Xe={hour:m,minute:m},ai={hour:m,minute:m,second:m},ei={hour:m,minute:m,second:m,timeZoneName:w},ii={hour:m,minute:m,second:m,timeZoneName:k},ni={hour:m,minute:m,hourCycle:"h23"},si={hour:m,minute:m,second:m,hourCycle:"h23"},ti={hour:m,minute:m,second:m,hourCycle:"h23",timeZoneName:w},ui={hour:m,minute:m,second:m,hourCycle:"h23",timeZoneName:k},ri={year:m,month:m,day:m,hour:m,minute:m},oi={year:m,month:m,day:m,hour:m,minute:m,second:m},li={year:m,month:w,day:m,hour:m,minute:m},mi={year:m,month:w,day:m,hour:m,minute:m,second:m},pn={year:m,month:w,day:m,weekday:w,hour:m,minute:m},di={year:m,month:k,day:m,hour:m,minute:m,timeZoneName:w},ci={year:m,month:k,day:m,hour:m,minute:m,second:m,timeZoneName:w},Ai={year:m,month:k,day:m,weekday:k,hour:m,minute:m,timeZoneName:k},gi={year:m,month:k,day:m,weekday:k,hour:m,minute:m,second:m,timeZoneName:k};function f(a){return typeof a>"u"}function X(a){return typeof a=="number"}function za(a){return typeof a=="number"&&a%1===0}function yn(a){return typeof a=="string"}function bn(a){return Object.prototype.toString.call(a)==="[object Date]"}function fi(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return !1}}function vn(a){return Array.isArray(a)?a:[a]}function _e(a,e,i){if(a.length!==0)return a.reduce((n,s)=>{let t=[e(s),s];return n&&i(n[0],t[0])===n[0]?n:t},null)[1]}function _n(a,e){return e.reduce((i,n)=>(i[n]=a[n],i),{})}function ta(a,e){return Object.prototype.hasOwnProperty.call(a,e)}function x(a,e,i){return za(a)&&a>=e&&a<=i}function Bn(a,e){return a-e*Math.floor(a/e)}function y(a,e=2){let i=a<0,n;return i?n="-"+(""+-a).padStart(e,"0"):n=(""+a).padStart(e,"0"),n}function H(a){if(!(f(a)||a===null||a===""))return parseInt(a,10)}function j(a){if(!(f(a)||a===null||a===""))return parseFloat(a)}function le(a){if(!(f(a)||a===null||a==="")){let e=parseFloat("0."+a)*1e3;return Math.floor(e)}}function me(a,e,i=!1){let n=10**e;return (i?Math.trunc:Math.round)(a*n)/n}function Ia(a){return a%4===0&&(a%100!==0||a%400===0)}function Ea(a){return Ia(a)?366:365}function Fa(a,e){let i=Bn(e-1,12)+1,n=a+(e-i)/12;return i===2?Ia(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][i-1]}function de(a){let e=Date.UTC(a.year,a.month-1,a.day,a.hour,a.minute,a.second,a.millisecond);return a.year<100&&a.year>=0&&(e=new Date(e),e.setUTCFullYear(e.getUTCFullYear()-1900)),+e}function Ma(a){let e=(a+Math.floor(a/4)-Math.floor(a/100)+Math.floor(a/400))%7,i=a-1,n=(i+Math.floor(i/4)-Math.floor(i/100)+Math.floor(i/400))%7;return e===4||n===3?53:52}function ae(a){return a>99?a:a>60?1900+a:2e3+a}function hi(a,e,i,n=null){let s=new Date(a),t={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(t.timeZone=n);let u={timeZoneName:e,...t},r=new Intl.DateTimeFormat(i,u).formatToParts(s).find(o=>o.type.toLowerCase()==="timezonename");return r?r.value:null}function Ra(a,e){let i=parseInt(a,10);Number.isNaN(i)&&(i=0);let n=parseInt(e,10)||0,s=i<0||Object.is(i,-0)?-n:n;return i*60+s}function Ti(a){let e=Number(a);if(typeof a=="boolean"||a===""||Number.isNaN(e))throw new D(`Invalid unit value ${a}`);return e}function Ua(a,e){let i={};for(let n in a)if(ta(a,n)){let s=a[n];if(s==null)continue;i[e(n)]=Ti(s);}return i}function Pa(a,e){let i=Math.trunc(Math.abs(a/60)),n=Math.trunc(Math.abs(a%60)),s=a>=0?"+":"-";switch(e){case"short":return `${s}${y(i,2)}:${y(n,2)}`;case"narrow":return `${s}${i}${n>0?`:${n}`:""}`;case"techie":return `${s}${y(i,2)}${y(n,2)}`;default:throw new RangeError(`Value format ${e} is out of range for property format`)}}function Oa(a){return _n(a,["hour","minute","second","millisecond"])}var Dn=/[A-Za-z_+-]{1,256}(:?\/[A-Za-z0-9_+-]{1,256}(\/[A-Za-z0-9_+-]{1,256})?)?/,Nn=["January","February","March","April","May","June","July","August","September","October","November","December"],Ci=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],kn=["J","F","M","A","M","J","J","A","S","O","N","D"];function Ei(a){switch(a){case"narrow":return [...kn];case"short":return [...Ci];case"long":return [...Nn];case"numeric":return ["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return ["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}var Ii=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Si=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Fn=["M","T","W","T","F","S","S"];function pi(a){switch(a){case"narrow":return [...Fn];case"short":return [...Si];case"long":return [...Ii];case"numeric":return ["1","2","3","4","5","6","7"];default:return null}}var yi=["AM","PM"],Mn=["Before Christ","Anno Domini"],Un=["BC","AD"],Pn=["B","A"];function bi(a){switch(a){case"narrow":return [...Pn];case"short":return [...Un];case"long":return [...Mn];default:return null}}function Ln(a){return yi[a.hour<12?0:1]}function zn(a,e){return pi(e)[a.weekday-1]}function Rn(a,e){return Ei(e)[a.month-1]}function On(a,e){return bi(e)[a.year<0?0:1]}function wn(a,e,i="always",n=!1){let s={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},t=["hours","minutes","seconds"].indexOf(a)===-1;if(i==="auto"&&t){let T=a==="days";switch(e){case 1:return T?"tomorrow":`next ${s[a][0]}`;case-1:return T?"yesterday":`last ${s[a][0]}`;case 0:return T?"today":`this ${s[a][0]}`}}let u=Object.is(e,-0)||e<0,r=Math.abs(e),o=r===1,l=s[a],A=n?o?l[1]:l[2]||l[1]:o?s[a][0]:a;return u?`${r} ${A} ago`:`in ${r} ${A}`}function Be(a,e){let i="";for(let n of a)n.literal?i+=n.val:i+=e(n.val);return i}var qn={D:Xa,DD:Je,DDD:$e,DDDD:Qe,t:Xe,tt:ai,ttt:ei,tttt:ii,T:ni,TT:si,TTT:ti,TTTT:ui,f:ri,ff:li,fff:di,ffff:Ai,F:oi,FF:mi,FFF:ci,FFFF:gi},_=class{static create(e,i={}){return new _(e,i)}static parseFormat(e){let i=null,n="",s=!1,t=[];for(let u=0;u<e.length;u++){let r=e.charAt(u);r==="'"?(n.length>0&&t.push({literal:s,val:n}),i=null,n="",s=!s):s||r===i?n+=r:(n.length>0&&t.push({literal:!1,val:n}),n=r,i=r);}return n.length>0&&t.push({literal:s,val:n}),t}static macroTokenToFormatOpts(e){return qn[e]}constructor(e,i){this.opts=i,this.loc=e,this.systemLoc=null;}formatWithSystemDefault(e,i){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...i}).format()}formatDateTime(e,i={}){return this.loc.dtFormatter(e,{...this.opts,...i}).format()}formatDateTimeParts(e,i={}){return this.loc.dtFormatter(e,{...this.opts,...i}).formatToParts()}resolvedOptions(e,i={}){return this.loc.dtFormatter(e,{...this.opts,...i}).resolvedOptions()}num(e,i=0){if(this.opts.forceSimple)return y(e,i);let n={...this.opts};return i>0&&(n.padTo=i),this.loc.numberFormatter(n).format(e)}formatDateTimeFromString(e,i){let n=this.loc.listingMode()==="en",s=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",t=(d,I)=>this.loc.extract(e,d,I),u=d=>e.isOffsetFixed&&e.offset===0&&d.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,d.format):"",r=()=>n?Ln(e):t({hour:"numeric",hourCycle:"h12"},"dayperiod"),o=(d,I)=>n?Rn(e,d):t(I?{month:d}:{month:d,day:"numeric"},"month"),l=(d,I)=>n?zn(e,d):t(I?{weekday:d}:{weekday:d,month:"long",day:"numeric"},"weekday"),A=d=>{let I=_.macroTokenToFormatOpts(d);return I?this.formatWithSystemDefault(e,I):d},T=d=>n?On(e,d):t({era:d},"era"),S=d=>{switch(d){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12===0?12:e.hour%12);case"hh":return this.num(e.hour%12===0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return u({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return u({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return u({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return r();case"d":return s?t({day:"numeric"},"day"):this.num(e.day);case"dd":return s?t({day:"2-digit"},"day"):this.num(e.day,2);case"c":return this.num(e.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(e.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return s?t({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return s?t({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return o("short",!0);case"LLLL":return o("long",!0);case"LLLLL":return o("narrow",!0);case"M":return s?t({month:"numeric"},"month"):this.num(e.month);case"MM":return s?t({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return o("short",!1);case"MMMM":return o("long",!1);case"MMMMM":return o("narrow",!1);case"y":return s?t({year:"numeric"},"year"):this.num(e.year);case"yy":return s?t({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return s?t({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return s?t({year:"numeric"},"year"):this.num(e.year,6);case"G":return T("short");case"GG":return T("long");case"GGGGG":return T("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return A(d)}};return Be(_.parseFormat(i),S)}formatDurationFromString(e,i){let n=o=>{switch(o[0]){case"S":return "millisecond";case"s":return "second";case"m":return "minute";case"h":return "hour";case"d":return "day";case"w":return "week";case"M":return "month";case"y":return "year";default:return null}},s=o=>l=>{let A=n(l);return A?this.num(o.get(A),l.length):l},t=_.parseFormat(i),u=t.reduce((o,{literal:l,val:A})=>l?o:o.concat(A),[]),r=e.shiftTo(...u.map(n).filter(o=>o));return Be(t,s(r))}},N=class{constructor(e,i){this.reason=e,this.explanation=i;}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}},W=class{get type(){throw new G}get name(){throw new G}get isUniversal(){throw new G}offsetName(e,i){throw new G}formatOffset(e,i){throw new G}offset(e){throw new G}equals(e){throw new G}get isValid(){throw new G}},xa=null,ua=class extends W{static get instance(){return xa===null&&(xa=new ua),xa}get type(){return "system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return !1}offsetName(e,{format:i,locale:n}){return hi(e,i,n)}formatOffset(e,i){return Pa(this.offset(e),i)}offset(e){return -new Date(e).getTimezoneOffset()}equals(e){return e.type==="system"}get isValid(){return !0}},Da={};function Gn(a){return Da[a]||(Da[a]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:a,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Da[a]}var xn={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Kn(a,e){let i=a.format(e).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(i),[,s,t,u,r,o,l,A]=n;return [u,s,t,r,o,l,A]}function Hn(a,e){let i=a.formatToParts(e),n=[];for(let s=0;s<i.length;s++){let{type:t,value:u}=i[s],r=xn[t];t==="era"?n[r]=u:f(r)||(n[r]=parseInt(u,10));}return n}var ba={},P=class extends W{static create(e){return ba[e]||(ba[e]=new P(e)),ba[e]}static resetCache(){ba={},Da={};}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return !1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch{return !1}}constructor(e){super(),this.zoneName=e,this.valid=P.isValidZone(e);}get type(){return "iana"}get name(){return this.zoneName}get isUniversal(){return !1}offsetName(e,{format:i,locale:n}){return hi(e,i,n,this.name)}formatOffset(e,i){return Pa(this.offset(e),i)}offset(e){let i=new Date(e);if(isNaN(i))return NaN;let n=Gn(this.name),[s,t,u,r,o,l,A]=n.formatToParts?Hn(n,i):Kn(n,i);r==="BC"&&(s=-Math.abs(s)+1);let S=de({year:s,month:t,day:u,hour:o===24?0:o,minute:l,second:A,millisecond:0}),d=+i,I=d%1e3;return d-=I>=0?I:1e3+I,(S-d)/(60*1e3)}equals(e){return e.type==="iana"&&e.name===this.name}get isValid(){return this.valid}},Ka=null,v=class extends W{static get utcInstance(){return Ka===null&&(Ka=new v(0)),Ka}static instance(e){return e===0?v.utcInstance:new v(e)}static parseSpecifier(e){if(e){let i=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(i)return new v(Ra(i[1],i[2]))}return null}constructor(e){super(),this.fixed=e;}get type(){return "fixed"}get name(){return this.fixed===0?"UTC":`UTC${Pa(this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,i){return Pa(this.fixed,i)}get isUniversal(){return !0}offset(){return this.fixed}equals(e){return e.type==="fixed"&&e.fixed===this.fixed}get isValid(){return !0}},La=class extends W{constructor(e){super(),this.zoneName=e;}get type(){return "invalid"}get name(){return this.zoneName}get isUniversal(){return !1}offsetName(){return null}formatOffset(){return ""}offset(){return NaN}equals(){return !1}get isValid(){return !1}};function V(a,e){if(f(a)||a===null)return e;if(a instanceof W)return a;if(yn(a)){let i=a.toLowerCase();return i==="local"||i==="system"?e:i==="utc"||i==="gmt"?v.utcInstance:v.parseSpecifier(i)||P.create(a)}else return X(a)?v.instance(a):typeof a=="object"&&a.offset&&typeof a.offset=="number"?a:new La(a)}var De=()=>Date.now(),Ne="system",ke=null,Fe=null,Me=null,Ue,p=class{static get now(){return De}static set now(e){De=e;}static set defaultZone(e){Ne=e;}static get defaultZone(){return V(Ne,ua.instance)}static get defaultLocale(){return ke}static set defaultLocale(e){ke=e;}static get defaultNumberingSystem(){return Fe}static set defaultNumberingSystem(e){Fe=e;}static get defaultOutputCalendar(){return Me}static set defaultOutputCalendar(e){Me=e;}static get throwOnInvalid(){return Ue}static set throwOnInvalid(e){Ue=e;}static resetCaches(){E.resetCache(),P.resetCache();}},Pe={};function Vn(a,e={}){let i=JSON.stringify([a,e]),n=Pe[i];return n||(n=new Intl.ListFormat(a,e),Pe[i]=n),n}var ee={};function ie(a,e={}){let i=JSON.stringify([a,e]),n=ee[i];return n||(n=new Intl.DateTimeFormat(a,e),ee[i]=n),n}var ne={};function Wn(a,e={}){let i=JSON.stringify([a,e]),n=ne[i];return n||(n=new Intl.NumberFormat(a,e),ne[i]=n),n}var se={};function Zn(a,e={}){let{base:i,...n}=e,s=JSON.stringify([a,n]),t=se[s];return t||(t=new Intl.RelativeTimeFormat(a,e),se[s]=t),t}var Ca=null;function jn(){return Ca||(Ca=new Intl.DateTimeFormat().resolvedOptions().locale,Ca)}function Yn(a){let e=a.indexOf("-u-");if(e===-1)return [a];{let i,n=a.substring(0,e);try{i=ie(a).resolvedOptions();}catch{i=ie(n).resolvedOptions();}let{numberingSystem:s,calendar:t}=i;return [n,s,t]}}function Jn(a,e,i){return (i||e)&&(a+="-u",i&&(a+=`-ca-${i}`),e&&(a+=`-nu-${e}`)),a}function $n(a){let e=[];for(let i=1;i<=12;i++){let n=c.utc(2016,i,1);e.push(a(n));}return e}function Qn(a){let e=[];for(let i=1;i<=7;i++){let n=c.utc(2016,11,13+i);e.push(a(n));}return e}function va(a,e,i,n,s){let t=a.listingMode(i);return t==="error"?null:t==="en"?n(e):s(e)}function Xn(a){return a.numberingSystem&&a.numberingSystem!=="latn"?!1:a.numberingSystem==="latn"||!a.locale||a.locale.startsWith("en")||new Intl.DateTimeFormat(a.intl).resolvedOptions().numberingSystem==="latn"}var te=class{constructor(e,i,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;let{padTo:s,floor:t,...u}=n;if(!i||Object.keys(u).length>0){let r={useGrouping:!1,...n};n.padTo>0&&(r.minimumIntegerDigits=n.padTo),this.inf=Wn(e,r);}}format(e){if(this.inf){let i=this.floor?Math.floor(e):e;return this.inf.format(i)}else {let i=this.floor?Math.floor(e):me(e,3);return y(i,this.padTo)}}},ue=class{constructor(e,i,n){this.opts=n;let s;if(e.zone.isUniversal){let u=-1*(e.offset/60),r=u>=0?`Etc/GMT+${u}`:`Etc/GMT${u}`;e.offset!==0&&P.create(r).valid?(s=r,this.dt=e):(s="UTC",n.timeZoneName?this.dt=e:this.dt=e.offset===0?e:c.fromMillis(e.ts+e.offset*60*1e3));}else e.zone.type==="system"?this.dt=e:(this.dt=e,s=e.zone.name);let t={...this.opts};s&&(t.timeZone=s),this.dtf=ie(i,t);}format(){return this.dtf.format(this.dt.toJSDate())}formatToParts(){return this.dtf.formatToParts(this.dt.toJSDate())}resolvedOptions(){return this.dtf.resolvedOptions()}},re=class{constructor(e,i,n){this.opts={style:"long",...n},!i&&fi()&&(this.rtf=Zn(e,n));}format(e,i){return this.rtf?this.rtf.format(e,i):wn(i,e,this.opts.numeric,this.opts.style!=="long")}formatToParts(e,i){return this.rtf?this.rtf.formatToParts(e,i):[]}},E=class{static fromOpts(e){return E.create(e.locale,e.numberingSystem,e.outputCalendar,e.defaultToEN)}static create(e,i,n,s=!1){let t=e||p.defaultLocale,u=t||(s?"en-US":jn()),r=i||p.defaultNumberingSystem,o=n||p.defaultOutputCalendar;return new E(u,r,o,t)}static resetCache(){Ca=null,ee={},ne={},se={};}static fromObject({locale:e,numberingSystem:i,outputCalendar:n}={}){return E.create(e,i,n)}constructor(e,i,n,s){let[t,u,r]=Yn(e);this.locale=t,this.numberingSystem=i||u||null,this.outputCalendar=n||r||null,this.intl=Jn(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null;}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Xn(this)),this.fastNumbersCached}listingMode(){let e=this.isEnglish(),i=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return e&&i?"en":"intl"}clone(e){return !e||Object.getOwnPropertyNames(e).length===0?this:E.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,e.defaultToEN||!1)}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,i=!1,n=!0){return va(this,e,n,Ei,()=>{let s=i?{month:e,day:"numeric"}:{month:e},t=i?"format":"standalone";return this.monthsCache[t][e]||(this.monthsCache[t][e]=$n(u=>this.extract(u,s,"month"))),this.monthsCache[t][e]})}weekdays(e,i=!1,n=!0){return va(this,e,n,pi,()=>{let s=i?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},t=i?"format":"standalone";return this.weekdaysCache[t][e]||(this.weekdaysCache[t][e]=Qn(u=>this.extract(u,s,"weekday"))),this.weekdaysCache[t][e]})}meridiems(e=!0){return va(this,void 0,e,()=>yi,()=>{if(!this.meridiemCache){let i={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[c.utc(2016,11,13,9),c.utc(2016,11,13,19)].map(n=>this.extract(n,i,"dayperiod"));}return this.meridiemCache})}eras(e,i=!0){return va(this,e,i,bi,()=>{let n={era:e};return this.eraCache[e]||(this.eraCache[e]=[c.utc(-40,1,1),c.utc(2017,1,1)].map(s=>this.extract(s,n,"era"))),this.eraCache[e]})}extract(e,i,n){let s=this.dtFormatter(e,i),t=s.formatToParts(),u=t.find(r=>r.type.toLowerCase()===n);return u?u.value:null}numberFormatter(e={}){return new te(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,i={}){return new ue(e,this.intl,i)}relFormatter(e={}){return new re(this.intl,this.isEnglish(),e)}listFormatter(e={}){return Vn(this.intl,e)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}};function ra(...a){let e=a.reduce((i,n)=>i+n.source,"");return RegExp(`^${e}$`)}function aa(...a){return e=>a.reduce(([i,n,s],t)=>{let[u,r,o]=t(e,s);return [{...i,...u},n||r,o]},[{},null,1]).slice(0,2)}function oa(a,...e){if(a==null)return [null,null];for(let[i,n]of e){let s=i.exec(a);if(s)return n(s)}return [null,null]}function vi(...a){return (e,i)=>{let n={},s;for(s=0;s<a.length;s++)n[a[s]]=H(e[i+s]);return [n,null,i+s]}}var _i=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,ce=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Bi=RegExp(`${ce.source}${_i.source}?`),Ae=RegExp(`(?:T${Bi.source})?`),as=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,es=/(\d{4})-?W(\d\d)(?:-?(\d))?/,is=/(\d{4})-?(\d{3})/,ns=vi("weekYear","weekNumber","weekDay"),ss=vi("year","ordinal"),ts=/(\d{4})-(\d\d)-(\d\d)/,Di=RegExp(`${ce.source} ?(?:${_i.source}|(${Dn.source}))?`),us=RegExp(`(?: ${Di.source})?`);function sa(a,e,i){let n=a[e];return f(n)?i:H(n)}function Ni(a,e){return [{year:sa(a,e),month:sa(a,e+1,1),day:sa(a,e+2,1)},null,e+3]}function ea(a,e){return [{hours:sa(a,e,0),minutes:sa(a,e+1,0),seconds:sa(a,e+2,0),milliseconds:le(a[e+3])},null,e+4]}function la(a,e){let i=!a[e]&&!a[e+1],n=Ra(a[e+1],a[e+2]),s=i?null:v.instance(n);return [{},s,e+3]}function ki(a,e){let i=a[e]?P.create(a[e]):null;return [{},i,e+1]}var rs=RegExp(`^T?${ce.source}$`),os=/^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;function ls(a){let[e,i,n,s,t,u,r,o,l]=a,A=e[0]==="-",T=o&&o[0]==="-",S=(d,I=!1)=>d!==void 0&&(I||d&&A)?-d:d;return [{years:S(j(i)),months:S(j(n)),weeks:S(j(s)),days:S(j(t)),hours:S(j(u)),minutes:S(j(r)),seconds:S(j(o),o==="-0"),milliseconds:S(le(l),T)}]}var ms={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function ge(a,e,i,n,s,t,u){let r={year:e.length===2?ae(H(e)):H(e),month:Ci.indexOf(i)+1,day:H(n),hour:H(s),minute:H(t)};return u&&(r.second=H(u)),a&&(r.weekday=a.length>3?Ii.indexOf(a)+1:Si.indexOf(a)+1),r}var ds=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function cs(a){let[,e,i,n,s,t,u,r,o,l,A,T]=a,S=ge(e,s,n,i,t,u,r),d;return o?d=ms[o]:l?d=0:d=Ra(A,T),[S,new v(d)]}function As(a){return a.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}var gs=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,fs=/^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,hs=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Le(a){let[,e,i,n,s,t,u,r]=a;return [ge(e,s,n,i,t,u,r),v.utcInstance]}function Ts(a){let[,e,i,n,s,t,u,r]=a;return [ge(e,r,i,n,s,t,u),v.utcInstance]}var Cs=ra(as,Ae),Es=ra(es,Ae),Is=ra(is,Ae),Ss=ra(Bi),ps=aa(Ni,ea,la),ys=aa(ns,ea,la),bs=aa(ss,ea,la),vs=aa(ea,la);function _s(a){return oa(a,[Cs,ps],[Es,ys],[Is,bs],[Ss,vs])}function Bs(a){return oa(As(a),[ds,cs])}function Ds(a){return oa(a,[gs,Le],[fs,Le],[hs,Ts])}function Ns(a){return oa(a,[os,ls])}var ks=aa(ea);function Fs(a){return oa(a,[rs,ks])}var Ms=ra(ts,us),Us=ra(Di),Ps=aa(Ni,ea,la,ki),Ls=aa(ea,la,ki);function zs(a){return oa(a,[Ms,Ps],[Us,Ls])}var Rs="Invalid Duration",Fi={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Os={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...Fi},M=146097/400,na=146097/4800,ws={years:{quarters:4,months:12,weeks:M/7,days:M,hours:M*24,minutes:M*24*60,seconds:M*24*60*60,milliseconds:M*24*60*60*1e3},quarters:{months:3,weeks:M/28,days:M/4,hours:M*24/4,minutes:M*24*60/4,seconds:M*24*60*60/4,milliseconds:M*24*60*60*1e3/4},months:{weeks:na/7,days:na,hours:na*24,minutes:na*24*60,seconds:na*24*60*60,milliseconds:na*24*60*60*1e3},...Fi},J=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],qs=J.slice(0).reverse();function Y(a,e,i=!1){let n={values:i?e.values:{...a.values,...e.values||{}},loc:a.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||a.conversionAccuracy};return new g(n)}function Gs(a){return a<0?Math.floor(a):Math.ceil(a)}function Mi(a,e,i,n,s){let t=a[s][i],u=e[i]/t,r=Math.sign(u)===Math.sign(n[s]),o=!r&&n[s]!==0&&Math.abs(u)<=1?Gs(u):Math.trunc(u);n[s]+=o,e[i]-=o*t;}function xs(a,e){qs.reduce((i,n)=>f(e[n])?i:(i&&Mi(a,e,i,e,n),n),null);}var g=class{constructor(e){let i=e.conversionAccuracy==="longterm"||!1;this.values=e.values,this.loc=e.loc||E.create(),this.conversionAccuracy=i?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=i?ws:Os,this.isLuxonDuration=!0;}static fromMillis(e,i){return g.fromObject({milliseconds:e},i)}static fromObject(e,i={}){if(e==null||typeof e!="object")throw new D(`Duration.fromObject: argument expected to be an object, got ${e===null?"null":typeof e}`);return new g({values:Ua(e,g.normalizeUnit),loc:E.fromObject(i),conversionAccuracy:i.conversionAccuracy})}static fromDurationLike(e){if(X(e))return g.fromMillis(e);if(g.isDuration(e))return e;if(typeof e=="object")return g.fromObject(e);throw new D(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,i){let[n]=Ns(e);return n?g.fromObject(n,i):g.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,i){let[n]=Fs(e);return n?g.fromObject(n,i):g.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,i=null){if(!e)throw new D("need to specify a reason the Duration is invalid");let n=e instanceof N?e:new N(e,i);if(p.throwOnInvalid)throw new Qa(n);return new g({invalid:n})}static normalizeUnit(e){let i={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e&&e.toLowerCase()];if(!i)throw new ka(e);return i}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,i={}){let n={...i,floor:i.round!==!1&&i.floor!==!1};return this.isValid?_.create(this.loc,n).formatDurationFromString(this,e):Rs}toHuman(e={}){let i=J.map(n=>{let s=this.values[n];return f(s)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...e,unit:n.slice(0,-1)}).format(s)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:e.listStyle||"narrow",...e}).format(i)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e="P";return this.years!==0&&(e+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+"M"),this.weeks!==0&&(e+=this.weeks+"W"),this.days!==0&&(e+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+="T"),this.hours!==0&&(e+=this.hours+"H"),this.minutes!==0&&(e+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(e+=me(this.seconds+this.milliseconds/1e3,3)+"S"),e==="P"&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;let i=this.toMillis();if(i<0||i>=864e5)return null;e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...e};let n=this.shiftTo("hours","minutes","seconds","milliseconds"),s=e.format==="basic"?"hhmm":"hh:mm";(!e.suppressSeconds||n.seconds!==0||n.milliseconds!==0)&&(s+=e.format==="basic"?"ss":":ss",(!e.suppressMilliseconds||n.milliseconds!==0)&&(s+=".SSS"));let t=n.toFormat(s);return e.includePrefix&&(t="T"+t),t}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){return this.as("milliseconds")}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;let i=g.fromDurationLike(e),n={};for(let s of J)(ta(i.values,s)||ta(this.values,s))&&(n[s]=i.get(s)+this.get(s));return Y(this,{values:n},!0)}minus(e){if(!this.isValid)return this;let i=g.fromDurationLike(e);return this.plus(i.negate())}mapUnits(e){if(!this.isValid)return this;let i={};for(let n of Object.keys(this.values))i[n]=Ti(e(this.values[n],n));return Y(this,{values:i},!0)}get(e){return this[g.normalizeUnit(e)]}set(e){if(!this.isValid)return this;let i={...this.values,...Ua(e,g.normalizeUnit)};return Y(this,{values:i})}reconfigure({locale:e,numberingSystem:i,conversionAccuracy:n}={}){let s=this.loc.clone({locale:e,numberingSystem:i}),t={loc:s};return n&&(t.conversionAccuracy=n),Y(this,t)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;let e=this.toObject();return xs(this.matrix,e),Y(this,{values:e},!0)}shiftTo(...e){if(!this.isValid)return this;if(e.length===0)return this;e=e.map(u=>g.normalizeUnit(u));let i={},n={},s=this.toObject(),t;for(let u of J)if(e.indexOf(u)>=0){t=u;let r=0;for(let l in n)r+=this.matrix[l][u]*n[l],n[l]=0;X(s[u])&&(r+=s[u]);let o=Math.trunc(r);i[u]=o,n[u]=(r*1e3-o*1e3)/1e3;for(let l in s)J.indexOf(l)>J.indexOf(u)&&Mi(this.matrix,s,l,i,u);}else X(s[u])&&(n[u]=s[u]);for(let u in n)n[u]!==0&&(i[t]+=u===t?n[u]:n[u]/this.matrix[t][u]);return Y(this,{values:i},!0).normalize()}negate(){if(!this.isValid)return this;let e={};for(let i of Object.keys(this.values))e[i]=this.values[i]===0?0:-this.values[i];return Y(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return !1;function i(n,s){return n===void 0||n===0?s===void 0||s===0:n===s}for(let n of J)if(!i(this.values[n],e.values[n]))return !1;return !0}},ga="Invalid Interval";function Ks(a,e){return !a||!a.isValid?C.invalid("missing or invalid start"):!e||!e.isValid?C.invalid("missing or invalid end"):e<a?C.invalid("end before start",`The end of an interval must be after its start, but you had start=${a.toISO()} and end=${e.toISO()}`):null}var C=class{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0;}static invalid(e,i=null){if(!e)throw new D("need to specify a reason the Interval is invalid");let n=e instanceof N?e:new N(e,i);if(p.throwOnInvalid)throw new $a(n);return new C({invalid:n})}static fromDateTimes(e,i){let n=Ta(e),s=Ta(i),t=Ks(n,s);return t??new C({start:n,end:s})}static after(e,i){let n=g.fromDurationLike(i),s=Ta(e);return C.fromDateTimes(s,s.plus(n))}static before(e,i){let n=g.fromDurationLike(i),s=Ta(e);return C.fromDateTimes(s.minus(n),s)}static fromISO(e,i){let[n,s]=(e||"").split("/",2);if(n&&s){let t,u;try{t=c.fromISO(n,i),u=t.isValid;}catch{u=!1;}let r,o;try{r=c.fromISO(s,i),o=r.isValid;}catch{o=!1;}if(u&&o)return C.fromDateTimes(t,r);if(u){let l=g.fromISO(s,i);if(l.isValid)return C.after(t,l)}else if(o){let l=g.fromISO(n,i);if(l.isValid)return C.before(r,l)}}return C.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds"){if(!this.isValid)return NaN;let i=this.start.startOf(e),n=this.end.startOf(e);return Math.floor(n.diff(i,e).get(e))+1}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:e,end:i}={}){return this.isValid?C.fromDateTimes(e||this.s,i||this.e):this}splitAt(...e){if(!this.isValid)return [];let i=e.map(Ta).filter(u=>this.contains(u)).sort(),n=[],{s}=this,t=0;for(;s<this.e;){let u=i[t]||this.e,r=+u>+this.e?this.e:u;n.push(C.fromDateTimes(s,r)),s=r,t+=1;}return n}splitBy(e){let i=g.fromDurationLike(e);if(!this.isValid||!i.isValid||i.as("milliseconds")===0)return [];let{s:n}=this,s=1,t,u=[];for(;n<this.e;){let r=this.start.plus(i.mapUnits(o=>o*s));t=+r>+this.e?this.e:r,u.push(C.fromDateTimes(n,t)),n=t,s+=1;}return u}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return !this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;let i=this.s>e.s?this.s:e.s,n=this.e<e.e?this.e:e.e;return i>=n?null:C.fromDateTimes(i,n)}union(e){if(!this.isValid)return this;let i=this.s<e.s?this.s:e.s,n=this.e>e.e?this.e:e.e;return C.fromDateTimes(i,n)}static merge(e){let[i,n]=e.sort((s,t)=>s.s-t.s).reduce(([s,t],u)=>t?t.overlaps(u)||t.abutsStart(u)?[s,t.union(u)]:[s.concat([t]),u]:[s,u],[[],null]);return n&&i.push(n),i}static xor(e){let i=null,n=0,s=[],t=e.map(o=>[{time:o.s,type:"s"},{time:o.e,type:"e"}]),u=Array.prototype.concat(...t),r=u.sort((o,l)=>o.time-l.time);for(let o of r)n+=o.type==="s"?1:-1,n===1?i=o.time:(i&&+i!=+o.time&&s.push(C.fromDateTimes(i,o.time)),i=null);return C.merge(s)}difference(...e){return C.xor([this].concat(e)).map(i=>this.intersection(i)).filter(i=>i&&!i.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} \u2013 ${this.e.toISO()})`:ga}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:ga}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:ga}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:ga}toFormat(e,{separator:i=" \u2013 "}={}){return this.isValid?`${this.s.toFormat(e)}${i}${this.e.toFormat(e)}`:ga}toDuration(e,i){return this.isValid?this.e.diff(this.s,e,i):g.invalid(this.invalidReason)}mapEndpoints(e){return C.fromDateTimes(e(this.s),e(this.e))}},Q=class{static hasDST(e=p.defaultZone){let i=c.now().setZone(e).set({month:12});return !e.isUniversal&&i.offset!==i.set({month:6}).offset}static isValidIANAZone(e){return P.isValidZone(e)}static normalizeZone(e){return V(e,p.defaultZone)}static months(e="long",{locale:i=null,numberingSystem:n=null,locObj:s=null,outputCalendar:t="gregory"}={}){return (s||E.create(i,n,t)).months(e)}static monthsFormat(e="long",{locale:i=null,numberingSystem:n=null,locObj:s=null,outputCalendar:t="gregory"}={}){return (s||E.create(i,n,t)).months(e,!0)}static weekdays(e="long",{locale:i=null,numberingSystem:n=null,locObj:s=null}={}){return (s||E.create(i,n,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:i=null,numberingSystem:n=null,locObj:s=null}={}){return (s||E.create(i,n,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return E.create(e).meridiems()}static eras(e="short",{locale:i=null}={}){return E.create(i,null,"gregory").eras(e)}static features(){return {relative:fi()}}};function ze(a,e){let i=s=>s.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=i(e)-i(a);return Math.floor(g.fromMillis(n).as("days"))}function Hs(a,e,i){let n=[["years",(r,o)=>o.year-r.year],["quarters",(r,o)=>o.quarter-r.quarter],["months",(r,o)=>o.month-r.month+(o.year-r.year)*12],["weeks",(r,o)=>{let l=ze(r,o);return (l-l%7)/7}],["days",ze]],s={},t,u;for(let[r,o]of n)if(i.indexOf(r)>=0){t=r;let l=o(a,e);u=a.plus({[r]:l}),u>e?(a=a.plus({[r]:l-1}),l-=1):a=u,s[r]=l;}return [a,s,u,t]}function Vs(a,e,i,n){let[s,t,u,r]=Hs(a,e,i),o=e-s,l=i.filter(T=>["hours","minutes","seconds","milliseconds"].indexOf(T)>=0);l.length===0&&(u<e&&(u=s.plus({[r]:1})),u!==s&&(t[r]=(t[r]||0)+o/(u-s)));let A=g.fromObject(t,n);return l.length>0?g.fromMillis(o,n).shiftTo(...l).plus(A):A}var fe={arab:"[\u0660-\u0669]",arabext:"[\u06F0-\u06F9]",bali:"[\u1B50-\u1B59]",beng:"[\u09E6-\u09EF]",deva:"[\u0966-\u096F]",fullwide:"[\uFF10-\uFF19]",gujr:"[\u0AE6-\u0AEF]",hanidec:"[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",khmr:"[\u17E0-\u17E9]",knda:"[\u0CE6-\u0CEF]",laoo:"[\u0ED0-\u0ED9]",limb:"[\u1946-\u194F]",mlym:"[\u0D66-\u0D6F]",mong:"[\u1810-\u1819]",mymr:"[\u1040-\u1049]",orya:"[\u0B66-\u0B6F]",tamldec:"[\u0BE6-\u0BEF]",telu:"[\u0C66-\u0C6F]",thai:"[\u0E50-\u0E59]",tibt:"[\u0F20-\u0F29]",latn:"\\d"},Re={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Ws=fe.hanidec.replace(/[\[|\]]/g,"").split("");function Zs(a){let e=parseInt(a,10);if(isNaN(e)){e="";for(let i=0;i<a.length;i++){let n=a.charCodeAt(i);if(a[i].search(fe.hanidec)!==-1)e+=Ws.indexOf(a[i]);else for(let s in Re){let[t,u]=Re[s];n>=t&&n<=u&&(e+=n-t);}}return parseInt(e,10)}else return e}function R({numberingSystem:a},e=""){return new RegExp(`${fe[a||"latn"]}${e}`)}var js="missing Intl.DateTimeFormat.formatToParts support";function h(a,e=i=>i){return {regex:a,deser:([i])=>e(Zs(i))}}var Ys=String.fromCharCode(160),Ui=`( |${Ys})`,Pi=new RegExp(Ui,"g");function Js(a){return a.replace(/\./g,"\\.?").replace(Pi,Ui)}function Oe(a){return a.replace(/\./g,"").replace(Pi," ").toLowerCase()}function O(a,e){return a===null?null:{regex:RegExp(a.map(Js).join("|")),deser:([i])=>a.findIndex(n=>Oe(i)===Oe(n))+e}}function we(a,e){return {regex:a,deser:([,i,n])=>Ra(i,n),groups:e}}function Ha(a){return {regex:a,deser:([e])=>e}}function $s(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function Qs(a,e){let i=R(e),n=R(e,"{2}"),s=R(e,"{3}"),t=R(e,"{4}"),u=R(e,"{6}"),r=R(e,"{1,2}"),o=R(e,"{1,3}"),l=R(e,"{1,6}"),A=R(e,"{1,9}"),T=R(e,"{2,4}"),S=R(e,"{4,6}"),d=z=>({regex:RegExp($s(z.val)),deser:([ya])=>ya,literal:!0}),Z=(z=>{if(a.literal)return d(z);switch(z.val){case"G":return O(e.eras("short",!1),0);case"GG":return O(e.eras("long",!1),0);case"y":return h(l);case"yy":return h(T,ae);case"yyyy":return h(t);case"yyyyy":return h(S);case"yyyyyy":return h(u);case"M":return h(r);case"MM":return h(n);case"MMM":return O(e.months("short",!0,!1),1);case"MMMM":return O(e.months("long",!0,!1),1);case"L":return h(r);case"LL":return h(n);case"LLL":return O(e.months("short",!1,!1),1);case"LLLL":return O(e.months("long",!1,!1),1);case"d":return h(r);case"dd":return h(n);case"o":return h(o);case"ooo":return h(s);case"HH":return h(n);case"H":return h(r);case"hh":return h(n);case"h":return h(r);case"mm":return h(n);case"m":return h(r);case"q":return h(r);case"qq":return h(n);case"s":return h(r);case"ss":return h(n);case"S":return h(o);case"SSS":return h(s);case"u":return Ha(A);case"uu":return Ha(r);case"uuu":return h(i);case"a":return O(e.meridiems(),0);case"kkkk":return h(t);case"kk":return h(T,ae);case"W":return h(r);case"WW":return h(n);case"E":case"c":return h(i);case"EEE":return O(e.weekdays("short",!1,!1),1);case"EEEE":return O(e.weekdays("long",!1,!1),1);case"ccc":return O(e.weekdays("short",!0,!1),1);case"cccc":return O(e.weekdays("long",!0,!1),1);case"Z":case"ZZ":return we(new RegExp(`([+-]${r.source})(?::(${n.source}))?`),2);case"ZZZ":return we(new RegExp(`([+-]${r.source})(${n.source})?`),2);case"z":return Ha(/[a-z_+-/]{1,256}?/i);default:return d(z)}})(a)||{invalidReason:js};return Z.token=a,Z}var Xs={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour:{numeric:"h","2-digit":"hh"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"}};function at(a,e,i){let{type:n,value:s}=a;if(n==="literal")return {literal:!0,val:s};let t=i[n],u=Xs[n];if(typeof u=="object"&&(u=u[t]),u)return {literal:!1,val:u}}function et(a){return [`^${a.map(i=>i.regex).reduce((i,n)=>`${i}(${n.source})`,"")}$`,a]}function it(a,e,i){let n=a.match(e);if(n){let s={},t=1;for(let u in i)if(ta(i,u)){let r=i[u],o=r.groups?r.groups+1:1;!r.literal&&r.token&&(s[r.token.val[0]]=r.deser(n.slice(t,t+o))),t+=o;}return [n,s]}else return [n,{}]}function nt(a){let e=t=>{switch(t){case"S":return "millisecond";case"s":return "second";case"m":return "minute";case"h":case"H":return "hour";case"d":return "day";case"o":return "ordinal";case"L":case"M":return "month";case"y":return "year";case"E":case"c":return "weekday";case"W":return "weekNumber";case"k":return "weekYear";case"q":return "quarter";default:return null}},i=null,n;return f(a.z)||(i=P.create(a.z)),f(a.Z)||(i||(i=new v(a.Z)),n=a.Z),f(a.q)||(a.M=(a.q-1)*3+1),f(a.h)||(a.h<12&&a.a===1?a.h+=12:a.h===12&&a.a===0&&(a.h=0)),a.G===0&&a.y&&(a.y=-a.y),f(a.u)||(a.S=le(a.u)),[Object.keys(a).reduce((t,u)=>{let r=e(u);return r&&(t[r]=a[u]),t},{}),i,n]}var Va=null;function st(){return Va||(Va=c.fromMillis(1555555555555)),Va}function tt(a,e){if(a.literal)return a;let i=_.macroTokenToFormatOpts(a.val);if(!i)return a;let t=_.create(e,i).formatDateTimeParts(st()).map(u=>at(u,e,i));return t.includes(void 0)?a:t}function ut(a,e){return Array.prototype.concat(...a.map(i=>tt(i,e)))}function Li(a,e,i){let n=ut(_.parseFormat(i),a),s=n.map(u=>Qs(u,a)),t=s.find(u=>u.invalidReason);if(t)return {input:e,tokens:n,invalidReason:t.invalidReason};{let[u,r]=et(s),o=RegExp(u,"i"),[l,A]=it(e,o,r),[T,S,d]=A?nt(A):[null,null,void 0];if(ta(A,"a")&&ta(A,"H"))throw new $("Can't include meridiem when specifying 24-hour format");return {input:e,tokens:n,regex:o,rawMatches:l,matches:A,result:T,zone:S,specificOffset:d}}}function rt(a,e,i){let{result:n,zone:s,specificOffset:t,invalidReason:u}=Li(a,e,i);return [n,s,t,u]}var zi=[0,31,59,90,120,151,181,212,243,273,304,334],Ri=[0,31,60,91,121,152,182,213,244,274,305,335];function U(a,e){return new N("unit out of range",`you specified ${e} (of type ${typeof e}) as a ${a}, which is invalid`)}function Oi(a,e,i){let n=new Date(Date.UTC(a,e-1,i));a<100&&a>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);let s=n.getUTCDay();return s===0?7:s}function wi(a,e,i){return i+(Ia(a)?Ri:zi)[e-1]}function qi(a,e){let i=Ia(a)?Ri:zi,n=i.findIndex(t=>t<e),s=e-i[n];return {month:n+1,day:s}}function oe(a){let{year:e,month:i,day:n}=a,s=wi(e,i,n),t=Oi(e,i,n),u=Math.floor((s-t+10)/7),r;return u<1?(r=e-1,u=Ma(r)):u>Ma(e)?(r=e+1,u=1):r=e,{weekYear:r,weekNumber:u,weekday:t,...Oa(a)}}function qe(a){let{weekYear:e,weekNumber:i,weekday:n}=a,s=Oi(e,1,4),t=Ea(e),u=i*7+n-s-3,r;u<1?(r=e-1,u+=Ea(r)):u>t?(r=e+1,u-=Ea(e)):r=e;let{month:o,day:l}=qi(r,u);return {year:r,month:o,day:l,...Oa(a)}}function Wa(a){let{year:e,month:i,day:n}=a,s=wi(e,i,n);return {year:e,ordinal:s,...Oa(a)}}function Ge(a){let{year:e,ordinal:i}=a,{month:n,day:s}=qi(e,i);return {year:e,month:n,day:s,...Oa(a)}}function ot(a){let e=za(a.weekYear),i=x(a.weekNumber,1,Ma(a.weekYear)),n=x(a.weekday,1,7);return e?i?n?!1:U("weekday",a.weekday):U("week",a.week):U("weekYear",a.weekYear)}function lt(a){let e=za(a.year),i=x(a.ordinal,1,Ea(a.year));return e?i?!1:U("ordinal",a.ordinal):U("year",a.year)}function Gi(a){let e=za(a.year),i=x(a.month,1,12),n=x(a.day,1,Fa(a.year,a.month));return e?i?n?!1:U("day",a.day):U("month",a.month):U("year",a.year)}function xi(a){let{hour:e,minute:i,second:n,millisecond:s}=a,t=x(e,0,23)||e===24&&i===0&&n===0&&s===0,u=x(i,0,59),r=x(n,0,59),o=x(s,0,999);return t?u?r?o?!1:U("millisecond",s):U("second",n):U("minute",i):U("hour",e)}var Za="Invalid DateTime",xe=864e13;function _a(a){return new N("unsupported zone",`the zone "${a.name}" is not supported`)}function ja(a){return a.weekData===null&&(a.weekData=oe(a.c)),a.weekData}function fa(a,e){let i={ts:a.ts,zone:a.zone,c:a.c,o:a.o,loc:a.loc,invalid:a.invalid};return new c({...i,...e,old:i})}function Ki(a,e,i){let n=a-e*60*1e3,s=i.offset(n);if(e===s)return [n,e];n-=(s-e)*60*1e3;let t=i.offset(n);return s===t?[n,s]:[a-Math.min(s,t)*60*1e3,Math.max(s,t)]}function Ke(a,e){a+=e*60*1e3;let i=new Date(a);return {year:i.getUTCFullYear(),month:i.getUTCMonth()+1,day:i.getUTCDate(),hour:i.getUTCHours(),minute:i.getUTCMinutes(),second:i.getUTCSeconds(),millisecond:i.getUTCMilliseconds()}}function Na(a,e,i){return Ki(de(a),e,i)}function He(a,e){let i=a.o,n=a.c.year+Math.trunc(e.years),s=a.c.month+Math.trunc(e.months)+Math.trunc(e.quarters)*3,t={...a.c,year:n,month:s,day:Math.min(a.c.day,Fa(n,s))+Math.trunc(e.days)+Math.trunc(e.weeks)*7},u=g.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),r=de(t),[o,l]=Ki(r,i,a.zone);return u!==0&&(o+=u,l=a.zone.offset(o)),{ts:o,o:l}}function ha(a,e,i,n,s,t){let{setZone:u,zone:r}=i;if(a&&Object.keys(a).length!==0){let o=e||r,l=c.fromObject(a,{...i,zone:o,specificOffset:t});return u?l:l.setZone(r)}else return c.invalid(new N("unparsable",`the input "${s}" can't be parsed as ${n}`))}function Ba(a,e,i=!0){return a.isValid?_.create(E.create("en-US"),{allowZ:i,forceSimple:!0}).formatDateTimeFromString(a,e):null}function Ya(a,e){let i=a.c.year>9999||a.c.year<0,n="";return i&&a.c.year>=0&&(n+="+"),n+=y(a.c.year,i?6:4),e?(n+="-",n+=y(a.c.month),n+="-",n+=y(a.c.day)):(n+=y(a.c.month),n+=y(a.c.day)),n}function Ve(a,e,i,n,s){let t=y(a.c.hour);return e?(t+=":",t+=y(a.c.minute),(a.c.second!==0||!i)&&(t+=":")):t+=y(a.c.minute),(a.c.second!==0||!i)&&(t+=y(a.c.second),(a.c.millisecond!==0||!n)&&(t+=".",t+=y(a.c.millisecond,3))),s&&(a.isOffsetFixed&&a.offset===0?t+="Z":a.o<0?(t+="-",t+=y(Math.trunc(-a.o/60)),t+=":",t+=y(Math.trunc(-a.o%60))):(t+="+",t+=y(Math.trunc(a.o/60)),t+=":",t+=y(Math.trunc(a.o%60)))),t}var Hi={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},mt={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},dt={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Vi=["year","month","day","hour","minute","second","millisecond"],ct=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],At=["year","ordinal","hour","minute","second","millisecond"];function We(a){let e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[a.toLowerCase()];if(!e)throw new ka(a);return e}function Ze(a,e){let i=V(e.zone,p.defaultZone),n=E.fromObject(e),s=p.now(),t,u;if(f(a.year))t=s;else {for(let l of Vi)f(a[l])&&(a[l]=Hi[l]);let r=Gi(a)||xi(a);if(r)return c.invalid(r);let o=i.offset(s);[t,u]=Na(a,o,i);}return new c({ts:t,zone:i,loc:n,o:u})}function je(a,e,i){let n=f(i.round)?!0:i.round,s=(u,r)=>(u=me(u,n||i.calendary?0:2,!0),e.loc.clone(i).relFormatter(i).format(u,r)),t=u=>i.calendary?e.hasSame(a,u)?0:e.startOf(u).diff(a.startOf(u),u).get(u):e.diff(a,u).get(u);if(i.unit)return s(t(i.unit),i.unit);for(let u of i.units){let r=t(u);if(Math.abs(r)>=1)return s(r,u)}return s(a>e?-0:0,i.units[i.units.length-1])}function Ye(a){let e={},i;return a.length>0&&typeof a[a.length-1]=="object"?(e=a[a.length-1],i=Array.from(a).slice(0,a.length-1)):i=Array.from(a),[e,i]}var c=class{constructor(e){let i=e.zone||p.defaultZone,n=e.invalid||(Number.isNaN(e.ts)?new N("invalid input"):null)||(i.isValid?null:_a(i));this.ts=f(e.ts)?p.now():e.ts;let s=null,t=null;if(!n)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(i))[s,t]=[e.old.c,e.old.o];else {let r=i.offset(this.ts);s=Ke(this.ts,r),n=Number.isNaN(s.year)?new N("invalid input"):null,s=n?null:s,t=n?null:r;}this._zone=i,this.loc=e.loc||E.create(),this.invalid=n,this.weekData=null,this.c=s,this.o=t,this.isLuxonDateTime=!0;}static now(){return new c({})}static local(){let[e,i]=Ye(arguments),[n,s,t,u,r,o,l]=i;return Ze({year:n,month:s,day:t,hour:u,minute:r,second:o,millisecond:l},e)}static utc(){let[e,i]=Ye(arguments),[n,s,t,u,r,o,l]=i;return e.zone=v.utcInstance,Ze({year:n,month:s,day:t,hour:u,minute:r,second:o,millisecond:l},e)}static fromJSDate(e,i={}){let n=bn(e)?e.valueOf():NaN;if(Number.isNaN(n))return c.invalid("invalid input");let s=V(i.zone,p.defaultZone);return s.isValid?new c({ts:n,zone:s,loc:E.fromObject(i)}):c.invalid(_a(s))}static fromMillis(e,i={}){if(X(e))return e<-xe||e>xe?c.invalid("Timestamp out of range"):new c({ts:e,zone:V(i.zone,p.defaultZone),loc:E.fromObject(i)});throw new D(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,i={}){if(X(e))return new c({ts:e*1e3,zone:V(i.zone,p.defaultZone),loc:E.fromObject(i)});throw new D("fromSeconds requires a numerical input")}static fromObject(e,i={}){e=e||{};let n=V(i.zone,p.defaultZone);if(!n.isValid)return c.invalid(_a(n));let s=p.now(),t=f(i.specificOffset)?n.offset(s):i.specificOffset,u=Ua(e,We),r=!f(u.ordinal),o=!f(u.year),l=!f(u.month)||!f(u.day),A=o||l,T=u.weekYear||u.weekNumber,S=E.fromObject(i);if((A||r)&&T)throw new $("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&r)throw new $("Can't mix ordinal dates with month/day");let d=T||u.weekday&&!A,I,Z,z=Ke(s,t);d?(I=ct,Z=mt,z=oe(z)):r?(I=At,Z=dt,z=Wa(z)):(I=Vi,Z=Hi);let ya=!1;for(let Aa of I){let An=u[Aa];f(An)?ya?u[Aa]=Z[Aa]:u[Aa]=z[Aa]:ya=!0;}let ln=d?ot(u):r?lt(u):Gi(u),ye=ln||xi(u);if(ye)return c.invalid(ye);let mn=d?qe(u):r?Ge(u):u,[dn,cn]=Na(mn,t,n),Ga=new c({ts:dn,zone:n,o:cn,loc:S});return u.weekday&&A&&e.weekday!==Ga.weekday?c.invalid("mismatched weekday",`you can't specify both a weekday of ${u.weekday} and a date of ${Ga.toISO()}`):Ga}static fromISO(e,i={}){let[n,s]=_s(e);return ha(n,s,i,"ISO 8601",e)}static fromRFC2822(e,i={}){let[n,s]=Bs(e);return ha(n,s,i,"RFC 2822",e)}static fromHTTP(e,i={}){let[n,s]=Ds(e);return ha(n,s,i,"HTTP",i)}static fromFormat(e,i,n={}){if(f(e)||f(i))throw new D("fromFormat requires an input string and a format");let{locale:s=null,numberingSystem:t=null}=n,u=E.fromOpts({locale:s,numberingSystem:t,defaultToEN:!0}),[r,o,l,A]=rt(u,e,i);return A?c.invalid(A):ha(r,o,n,`format ${i}`,e,l)}static fromString(e,i,n={}){return c.fromFormat(e,i,n)}static fromSQL(e,i={}){let[n,s]=zs(e);return ha(n,s,i,"SQL",e)}static invalid(e,i=null){if(!e)throw new D("need to specify a reason the DateTime is invalid");let n=e instanceof N?e:new N(e,i);if(p.throwOnInvalid)throw new Ja(n);return new c({invalid:n})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?ja(this).weekYear:NaN}get weekNumber(){return this.isValid?ja(this).weekNumber:NaN}get weekday(){return this.isValid?ja(this).weekday:NaN}get ordinal(){return this.isValid?Wa(this.c).ordinal:NaN}get monthShort(){return this.isValid?Q.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Q.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Q.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Q.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1}).offset||this.offset>this.set({month:5}).offset}get isInLeapYear(){return Ia(this.year)}get daysInMonth(){return Fa(this.year,this.month)}get daysInYear(){return this.isValid?Ea(this.year):NaN}get weeksInWeekYear(){return this.isValid?Ma(this.weekYear):NaN}resolvedLocaleOptions(e={}){let{locale:i,numberingSystem:n,calendar:s}=_.create(this.loc.clone(e),e).resolvedOptions(this);return {locale:i,numberingSystem:n,outputCalendar:s}}toUTC(e=0,i={}){return this.setZone(v.instance(e),i)}toLocal(){return this.setZone(p.defaultZone)}setZone(e,{keepLocalTime:i=!1,keepCalendarTime:n=!1}={}){if(e=V(e,p.defaultZone),e.equals(this.zone))return this;if(e.isValid){let s=this.ts;if(i||n){let t=e.offset(this.ts),u=this.toObject();[s]=Na(u,t,e);}return fa(this,{ts:s,zone:e})}else return c.invalid(_a(e))}reconfigure({locale:e,numberingSystem:i,outputCalendar:n}={}){let s=this.loc.clone({locale:e,numberingSystem:i,outputCalendar:n});return fa(this,{loc:s})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;let i=Ua(e,We),n=!f(i.weekYear)||!f(i.weekNumber)||!f(i.weekday),s=!f(i.ordinal),t=!f(i.year),u=!f(i.month)||!f(i.day),r=t||u,o=i.weekYear||i.weekNumber;if((r||s)&&o)throw new $("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&s)throw new $("Can't mix ordinal dates with month/day");let l;n?l=qe({...oe(this.c),...i}):f(i.ordinal)?(l={...this.toObject(),...i},f(i.day)&&(l.day=Math.min(Fa(l.year,l.month),l.day))):l=Ge({...Wa(this.c),...i});let[A,T]=Na(l,this.o,this.zone);return fa(this,{ts:A,o:T})}plus(e){if(!this.isValid)return this;let i=g.fromDurationLike(e);return fa(this,He(this,i))}minus(e){if(!this.isValid)return this;let i=g.fromDurationLike(e).negate();return fa(this,He(this,i))}startOf(e){if(!this.isValid)return this;let i={},n=g.normalizeUnit(e);switch(n){case"years":i.month=1;case"quarters":case"months":i.day=1;case"weeks":case"days":i.hour=0;case"hours":i.minute=0;case"minutes":i.second=0;case"seconds":i.millisecond=0;break}if(n==="weeks"&&(i.weekday=1),n==="quarters"){let s=Math.ceil(this.month/3);i.month=(s-1)*3+1;}return this.set(i)}endOf(e){return this.isValid?this.plus({[e]:1}).startOf(e).minus(1):this}toFormat(e,i={}){return this.isValid?_.create(this.loc.redefaultToEN(i)).formatDateTimeFromString(this,e):Za}toLocaleString(e=Xa,i={}){return this.isValid?_.create(this.loc.clone(i),e).formatDateTime(this):Za}toLocaleParts(e={}){return this.isValid?_.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:i=!1,suppressMilliseconds:n=!1,includeOffset:s=!0}={}){if(!this.isValid)return null;let t=e==="extended",u=Ya(this,t);return u+="T",u+=Ve(this,t,i,n,s),u}toISODate({format:e="extended"}={}){return this.isValid?Ya(this,e==="extended"):null}toISOWeekDate(){return Ba(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:i=!1,includeOffset:n=!0,includePrefix:s=!1,format:t="extended"}={}){return this.isValid?(s?"T":"")+Ve(this,t==="extended",i,e,n):null}toRFC2822(){return Ba(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Ba(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Ya(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:i=!1,includeOffsetSpace:n=!0}={}){let s="HH:mm:ss.SSS";return (i||e)&&(n&&(s+=" "),i?s+="z":e&&(s+="ZZ")),Ba(this,s,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():Za}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return {};let i={...this.c};return e.includeConfig&&(i.outputCalendar=this.outputCalendar,i.numberingSystem=this.loc.numberingSystem,i.locale=this.loc.locale),i}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,i="milliseconds",n={}){if(!this.isValid||!e.isValid)return g.invalid("created by diffing an invalid DateTime");let s={locale:this.locale,numberingSystem:this.numberingSystem,...n},t=vn(i).map(g.normalizeUnit),u=e.valueOf()>this.valueOf(),r=u?this:e,o=u?e:this,l=Vs(r,o,t,s);return u?l.negate():l}diffNow(e="milliseconds",i={}){return this.diff(c.now(),e,i)}until(e){return this.isValid?C.fromDateTimes(this,e):this}hasSame(e,i){if(!this.isValid)return !1;let n=e.valueOf(),s=this.setZone(e.zone,{keepLocalTime:!0});return s.startOf(i)<=n&&n<=s.endOf(i)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;let i=e.base||c.fromObject({},{zone:this.zone}),n=e.padding?this<i?-e.padding:e.padding:0,s=["years","months","days","hours","minutes","seconds"],t=e.unit;return Array.isArray(e.unit)&&(s=e.unit,t=void 0),je(i,this.plus(n),{...e,numeric:"always",units:s,unit:t})}toRelativeCalendar(e={}){return this.isValid?je(e.base||c.fromObject({},{zone:this.zone}),this,{...e,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...e){if(!e.every(c.isDateTime))throw new D("min requires all arguments be DateTimes");return _e(e,i=>i.valueOf(),Math.min)}static max(...e){if(!e.every(c.isDateTime))throw new D("max requires all arguments be DateTimes");return _e(e,i=>i.valueOf(),Math.max)}static fromFormatExplain(e,i,n={}){let{locale:s=null,numberingSystem:t=null}=n,u=E.fromOpts({locale:s,numberingSystem:t,defaultToEN:!0});return Li(u,e,i)}static fromStringExplain(e,i,n={}){return c.fromFormatExplain(e,i,n)}static get DATE_SHORT(){return Xa}static get DATE_MED(){return Je}static get DATE_MED_WITH_WEEKDAY(){return Sn}static get DATE_FULL(){return $e}static get DATE_HUGE(){return Qe}static get TIME_SIMPLE(){return Xe}static get TIME_WITH_SECONDS(){return ai}static get TIME_WITH_SHORT_OFFSET(){return ei}static get TIME_WITH_LONG_OFFSET(){return ii}static get TIME_24_SIMPLE(){return ni}static get TIME_24_WITH_SECONDS(){return si}static get TIME_24_WITH_SHORT_OFFSET(){return ti}static get TIME_24_WITH_LONG_OFFSET(){return ui}static get DATETIME_SHORT(){return ri}static get DATETIME_SHORT_WITH_SECONDS(){return oi}static get DATETIME_MED(){return li}static get DATETIME_MED_WITH_SECONDS(){return mi}static get DATETIME_MED_WITH_WEEKDAY(){return pn}static get DATETIME_FULL(){return di}static get DATETIME_FULL_WITH_SECONDS(){return ci}static get DATETIME_HUGE(){return Ai}static get DATETIME_HUGE_WITH_SECONDS(){return gi}};function Ta(a){if(c.isDateTime(a))return a;if(a&&a.valueOf&&X(a.valueOf()))return c.fromJSDate(a);if(a&&typeof a=="object")return c.fromObject(a);throw new D(`Unknown datetime argument: ${a}, of type ${typeof a}`)}var gt="2.3.2";F.DateTime=c;F.Duration=g;F.FixedOffsetZone=v;F.IANAZone=P;F.Info=Q;F.Interval=C;F.InvalidZone=La;F.Settings=p;F.SystemZone=ua;F.VERSION=gt;F.Zone=W;});ve(he(),1);var Tt=(a=>(a.Comment="comment",a.Create="create",a.Delete="delete",a.Edit="edit",a.Invoice="invoice",a.Message="message",a.PageView="pageView",a.Paid="paid",a.Payment="payment",a.Purchase="purchase",a.Referral="referral",a.Renewal="renewal",a.Signup="signup",a.Subscription="subscription",a.Upgrade="upgrade",a))(Tt||{}),Ct=(a=>(a.RequiresPaymentMethod="requires_payment_method",a.RequiresConfirmation="requires_confirmation",a.RequiresAction="requires_action",a.Processing="processing",a.RequiresCapture="requires_capture",a.Canceled="canceled",a.Succeeded="succeeded",a))(Ct||{}),Et=(a=>(a.Incomplete="incomplete",a.IncompleteExpired="incomplete_expired",a.Trialing="trialing",a.Active="active",a.PastDue="past_due",a.Canceled="canceled",a.Unpaid="unpaid",a))(Et||{}),It=(a=>(a.Monthly="monthly",a.Quarterly="quarterly",a.Yearly="yearly",a.Lifetime="lifetime",a))(It||{}),St=(a=>(a.Delivered="delivered",a.Read="read",a.Sending="sending",a.Sent="sent",a))(St||{}),pt=(a=>(a.Audio="audio",a.File="file",a.Image="image",a.Text="text",a.Video="video",a))(pt||{}),yt=(a=>(a.Audio="audio",a.File="file",a.Image="image",a.Video="video",a))(yt||{}),bt=(a=>(a.Angry="angry",a.Laugh="laugh",a.Like="like",a.Love="love",a.Sad="sad",a.Wow="wow",a.Wink="wink",a.Yay="yay",a))(bt||{}),vt=(a=>(a.Email="email",a.PhoneNumber="phone_number",a))(vt||{}),Te=(a=>(a.Analytics="analytics",a.Critical="critical",a.Debug="debug",a.Exception="exception",a.Http="http",a.Info="info",a.Warning="warning",a))(Te||{}),_t=(a=>(a.Delete="delete",a.Get="get",a.Head="head",a.Patch="patch",a.Post="post",a.Put="put",a))(_t||{}),Bt=(a=>(a[a.CONTINUE=100]="CONTINUE",a[a.SWITCHING_PROTOCOLS=101]="SWITCHING_PROTOCOLS",a[a.PROCESSING=102]="PROCESSING",a[a.OK=200]="OK",a[a.CREATED=201]="CREATED",a[a.ACCEPTED=202]="ACCEPTED",a[a.NON_AUTHORITATIVE_INFORMATION=203]="NON_AUTHORITATIVE_INFORMATION",a[a.NO_CONTENT=204]="NO_CONTENT",a[a.RESET_CONTENT=205]="RESET_CONTENT",a[a.PARTIAL_CONTENT=206]="PARTIAL_CONTENT",a[a.MULTI_STATUS=207]="MULTI_STATUS",a[a.ALREADY_REPORTED=208]="ALREADY_REPORTED",a[a.IM_USED=226]="IM_USED",a[a.MULTIPLE_CHOICES=300]="MULTIPLE_CHOICES",a[a.MOVED_PERMANENTLY=301]="MOVED_PERMANENTLY",a[a.FOUND=302]="FOUND",a[a.SEE_OTHER=303]="SEE_OTHER",a[a.NOT_MODIFIED=304]="NOT_MODIFIED",a[a.USE_PROXY=305]="USE_PROXY",a[a.SWITCH_PROXY=306]="SWITCH_PROXY",a[a.TEMPORARY_REDIRECT=307]="TEMPORARY_REDIRECT",a[a.PERMANENT_REDIRECT=308]="PERMANENT_REDIRECT",a[a.BAD_REQUEST=400]="BAD_REQUEST",a[a.UNAUTHORIZED=401]="UNAUTHORIZED",a[a.PAYMENT_REQUIRED=402]="PAYMENT_REQUIRED",a[a.FORBIDDEN=403]="FORBIDDEN",a[a.NOT_FOUND=404]="NOT_FOUND",a[a.METHOD_NOT_ALLOWED=405]="METHOD_NOT_ALLOWED",a[a.NOT_ACCEPTABLE=406]="NOT_ACCEPTABLE",a[a.PROXY_AUTHENTICATION_REQUIRED=407]="PROXY_AUTHENTICATION_REQUIRED",a[a.REQUEST_TIMEOUT=408]="REQUEST_TIMEOUT",a[a.CONFLICT=409]="CONFLICT",a[a.GONE=410]="GONE",a[a.LENGTH_REQUIRED=411]="LENGTH_REQUIRED",a[a.PRECONDITION_FAILED=412]="PRECONDITION_FAILED",a[a.PAYLOAD_TOO_LARGE=413]="PAYLOAD_TOO_LARGE",a[a.URI_TOO_LONG=414]="URI_TOO_LONG",a[a.UNSUPPORTED_MEDIA_TYPE=415]="UNSUPPORTED_MEDIA_TYPE",a[a.RANGE_NOT_SATISFIABLE=416]="RANGE_NOT_SATISFIABLE",a[a.EXPECTATION_FAILED=417]="EXPECTATION_FAILED",a[a.I_AM_A_TEAPOT=418]="I_AM_A_TEAPOT",a[a.MISDIRECTED_REQUEST=421]="MISDIRECTED_REQUEST",a[a.UNPROCESSABLE_ENTITY=422]="UNPROCESSABLE_ENTITY",a[a.LOCKED=423]="LOCKED",a[a.FAILED_DEPENDENCY=424]="FAILED_DEPENDENCY",a[a.TOO_EARLY=425]="TOO_EARLY",a[a.UPGRADE_REQUIRED=426]="UPGRADE_REQUIRED",a[a.PRECONDITION_REQUIRED=428]="PRECONDITION_REQUIRED",a[a.TOO_MANY_REQUESTS=429]="TOO_MANY_REQUESTS",a[a.REQUEST_HEADER_FIELDS_TOO_LARGE=431]="REQUEST_HEADER_FIELDS_TOO_LARGE",a[a.UNAVAILABLE_FOR_LEGAL_REASONS=451]="UNAVAILABLE_FOR_LEGAL_REASONS",a[a.INTERNAL_SERVER_ERROR=500]="INTERNAL_SERVER_ERROR",a[a.NOT_IMPLEMENTED=501]="NOT_IMPLEMENTED",a[a.BAD_GATEWAY=502]="BAD_GATEWAY",a[a.SERVICE_UNAVAILABLE=503]="SERVICE_UNAVAILABLE",a[a.GATEWAY_TIMEOUT=504]="GATEWAY_TIMEOUT",a[a.HTTP_VERSION_NOT_SUPPORTED=505]="HTTP_VERSION_NOT_SUPPORTED",a[a.VARIANT_ALSO_NEGOTIATES=506]="VARIANT_ALSO_NEGOTIATES",a[a.INSUFFICIENT_STORAGE=507]="INSUFFICIENT_STORAGE",a[a.LOOP_DETECTED=508]="LOOP_DETECTED",a[a.BANDWIDTH_LIMIT_EXCEEDED=509]="BANDWIDTH_LIMIT_EXCEEDED",a[a.NOT_EXTENDED=510]="NOT_EXTENDED",a[a.NETWORK_AUTHENTICATION_REQUIRED=511]="NETWORK_AUTHENTICATION_REQUIRED",a))(Bt||{}),Dt=(a=>(a.Afghanistan="AF",a.Albania="AL",a.Algeria="DZ",a.AmericanSamoa="AS",a.Andorra="AD",a.Angola="AO",a.Anguilla="AI",a.Antarctica="AQ",a.AntiguaAndBarbuda="AG",a.Argentina="AR",a.Armenia="AM",a.Aruba="AW",a.Australia="AU",a.Austria="AT",a.Azerbaijan="AZ",a.Bahamas="BS",a.Bahrain="BH",a.Bangladesh="BD",a.Barbados="BB",a.Belarus="BY",a.Belgium="BE",a.Belize="BZ",a.Benin="BJ",a.Bermuda="BM",a.Bhutan="BT",a.Bolivia="BO",a.BosniaAndHerzegovina="BA",a.Botswana="BW",a.BouvetIsland="BV",a.Brazil="BR",a.BritishIndianOceanTerritory="IO",a.Brunei="BN",a.Bulgaria="BG",a.BurkinaFaso="BF",a.Burundi="BI",a.Cambodia="KH",a.Cameroon="CM",a.Canada="CA",a.CapeVerde="CV",a.CaymanIslands="KY",a.CentralAfricanRepublic="CF",a.Chad="TD",a.Chile="CL",a.China="CN",a.ChristmasIsland="CX",a.CocosKeelingIslands="CC",a.Colombia="CO",a.Comoros="KM",a.Congo="CG",a.CongoTheDemocraticRepublicOfThe="CD",a.CookIslands="CK",a.CostaRica="CR",a.CoteDIvoire="CI",a.Croatia="HR",a.Cuba="CU",a.Cyprus="CY",a.CzechRepublic="CZ",a.Denmark="DK",a.Djibouti="DJ",a.Dominica="DM",a.DominicanRepublic="DO",a.Ecuador="EC",a.Egypt="EG",a.ElSalvador="SV",a.EquatorialGuinea="GQ",a.Eritrea="ER",a.Estonia="EE",a.Ethiopia="ET",a.FalklandIslands="FK",a.FaroeIslands="FO",a.Fiji="FJ",a.Finland="FI",a.France="FR",a.FrenchGuiana="GF",a.FrenchPolynesia="PF",a.FrenchSouthernTerritories="TF",a.Gabon="GA",a.Gambia="GM",a.Georgia="GE",a.Germany="DE",a.Ghana="GH",a.Gibraltar="GI",a.Greece="GR",a.Greenland="GL",a.Grenada="GD",a.Guadeloupe="GP",a.Guam="GU",a.Guatemala="GT",a.Guernsey="GG",a.Guinea="GN",a.GuineaBissau="GW",a.Guyana="GY",a.Haiti="HT",a.HeardIslandMcdonaldIslands="HM",a.HolySeeVaticanCityState="VA",a.Honduras="HN",a.HongKong="HK",a.Hungary="HU",a.Iceland="IS",a.India="IN",a.Indonesia="ID",a.Iran="IR",a.Iraq="IQ",a.Ireland="IE",a.IsleOfMan="IM",a.Israel="IL",a.Italy="IT",a.Jamaica="JM",a.Japan="JP",a.Jersey="JE",a.Jordan="JO",a.Kazakhstan="KZ",a.Kenya="KE",a.Kiribati="KI",a.Kuwait="KW",a.Kyrgyzstan="KG",a.Laos="LA",a.Latvia="LV",a.Lebanon="LB",a.Lesotho="LS",a.Liberia="LR",a.Libya="LY",a.Liechtenstein="LI",a.Lithuania="LT",a.Luxembourg="LU",a.Macau="MO",a.Madagascar="MG",a.Malawi="MW",a.Malaysia="MY",a.Maldives="MV",a.Mali="ML",a.Malta="MT",a.MarshallIslands="MH",a.Martinique="MQ",a.Mauritania="MR",a.Mauritius="MU",a.Mayotte="YT",a.Mexico="MX",a.MicronesiaFederatedStatesOf="FM",a.Moldova="MD",a.Monaco="MC",a.Mongolia="MN",a.Montenegro="ME",a.Montserrat="MS",a.Morocco="MA",a.Mozambique="MZ",a.Myanmar="MM",a.Namibia="NA",a.Nauru="NR",a.Nepal="NP",a.Netherlands="NL",a.NetherlandsAntilles="AN",a.NewCaledonia="NC",a.NewZealand="NZ",a.NorthKorea="KP",a.Nicaragua="NI",a.Niger="NE",a.Nigeria="NG",a.Niue="NU",a.NorfolkIsland="NF",a.NorthMacedonia="MK",a.NorthernMarianaIslands="MP",a.Norway="NO",a.Oman="OM",a.Pakistan="PK",a.Palau="PW",a.PalestinianTerritoryOccupied="PS",a.Panama="PA",a.PapuaNewGuinea="PG",a.Paraguay="PY",a.Peru="PE",a.Philippines="PH",a.Pitcairn="PN",a.Poland="PL",a.Portugal="PT",a.PuertoRico="PR",a.Qatar="QA",a.Reunion="RE",a.Romania="RO",a.RussianFederation="RU",a.Rwanda="RW",a.SaintBarthelemy="BL",a.SaintHelena="SH",a.SaintKittsAndNevis="KN",a.SaintLucia="LC",a.SaintMartin="MF",a.SaintPierreAndMiquelon="PM",a.SaintVincentAndTheGrenadines="VC",a.Samoa="WS",a.SanMarino="SM",a.SaoTomeAndPrincipe="ST",a.SaudiArabia="SA",a.Senegal="SN",a.Serbia="RS",a.SerbiaAndMontenegro="CS",a.Seychelles="SC",a.SierraLeone="SL",a.Singapore="SG",a.Slovakia="SK",a.Slovenia="SI",a.SolomonIslands="SB",a.Somalia="SO",a.SouthAfrica="ZA",a.SouthGeorgiaAndTheSouthSandwichIslands="GS",a.SouthKorea="KR",a.Spain="ES",a.SriLanka="LK",a.Sudan="SD",a.Suriname="SR",a.SvalbardAndJanMayen="SJ",a.Swaziland="SZ",a.Sweden="SE",a.Switzerland="CH",a.Syria="SY",a.Taiwan="TW",a.Tajikistan="TJ",a.Tanzania="TZ",a.Thailand="TH",a.TimorLeste="TL",a.Togo="TG",a.Tokelau="TK",a.Tonga="TO",a.TrinidadAndTobago="TT",a.Tunisia="TN",a.Turkey="TR",a.Turkmenistan="TM",a.TurksAndCaicosIslands="TC",a.Tuvalu="TV",a.Uganda="UG",a.Ukraine="UA",a.UnitedArabEmirates="AE",a.UnitedKingdom="GB",a.UnitedStates="US",a.UnitedStatesMinorOutlyingIslands="UM",a.Uruguay="UY",a.Uzbekistan="UZ",a.Vanuatu="VU",a.Venezuela="VE",a.Vietnam="VN",a.VirginIslandsBritish="VG",a.VirginIslandsUS="VI",a.WallisAndFutuna="WF",a.WesternSahara="EH",a.Yemen="YE",a.Zambia="ZM",a.Zimbabwe="ZW",a))(Dt||{}),Nt=(a=>(a.AfghanistanAfghani="AFN",a.AlbaniaLek="ALL",a.ArmeniaDram="AMD",a.AlgeriaDinar="DZD",a.AmericanSamoaTala="WST",a.AngolaKwanza="AOA",a.ArgentinaPeso="ARS",a.AustraliaDollar="AUD",a.ArubaFlorin="AWG",a.AzerbaijanNewManat="AZN",a.BosniaAndHerzegovinaConvertibleMark="BAM",a.BahrainDinar="BHD",a.BarbadosDollar="BBD",a.BangladeshTaka="BDT",a.BelgiumFranc="BGN",a.BermudaDollar="BMD",a.BruneiDollar="BND",a.BoliviaBoliviano="BOB",a.BrazilReal="BRL",a.BahamasDollar="BSD",a.BhutanNgultrum="BTN",a.BotswanaPula="BWP",a.BelarusRuble="BYN",a.BelizeDollar="BZD",a.BulgariaLev="BGN",a.BurundiFranc="BIF",a.BritishPound="GBP",a.CanadaDollar="CAD",a.CambodiaRiel="KHR",a.ComorosFranc="KMF",a.CaymanIslandsDollar="KYD",a.ChilePeso="CLP",a.ChinaYuan="CNY",a.ColombiaPeso="COP",a.CostaRicaColon="CRC",a.CroatiaKuna="HRK",a.CubaConvertiblePeso="CUC",a.CubaPeso="CUP",a.CapeVerdeEscudo="CVE",a.CyprusPound="CYP",a.CzechRepublicKoruna="CZK",a.DjiboutiFranc="DJF",a.DenmarkKrone="DKK",a.DominicaDollar="XCD",a.DominicanRepublicPeso="DOP",a.EastCaribbeanDollar="XCD",a.EgyptPound="EGP",a.ElSalvadorColon="SVC",a.EquatorialGuineaEkwele="GQE",a.EritreaNakfa="ERN",a.EstoniaKroon="EEK",a.EthiopiaBirr="ETB",a.Euro="EUR",a.FijiDollar="FJD",a.FalklandIslandsPound="FKP",a.GambiaDalasi="GMD",a.GabonFranc="GMD",a.GeorgiaLari="GEL",a.GhanaCedi="GHS",a.GibraltarPound="GIP",a.GuatemalaQuetzal="GTQ",a.GuernseyPound="GGP",a.GuineaBissauPeso="GWP",a.GuyanaDollar="GYD",a.HongKongDollar="HKD",a.HondurasLempira="HNL",a.HaitiGourde="HTG",a.HungaryForint="HUF",a.IndonesiaRupiah="IDR",a.IsleOfManPound="IMP",a.IsraelNewShekel="ILS",a.IndiaRupee="INR",a.IraqDinar="IQD",a.IranRial="IRR",a.IcelandKrona="ISK",a.JamaicaDollar="JMD",a.JapanYen="JPY",a.JerseyPound="JEP",a.JordanDinar="JOD",a.KazakhstanTenge="KZT",a.KenyaShilling="KES",a.KyrgyzstanSom="KGS",a.NorthKoreaWon="KPW",a.SouthKoreaWon="KRW",a.KuwaitDinar="KWD",a.LaosKip="LAK",a.LebanonPound="LBP",a.LiberiaDollar="LRD",a.LesothoLoti="LSL",a.LibyanDinar="LYD",a.LithuaniaLitas="LTL",a.LatviaLats="LVL",a.LibyaDinar="LYD",a.MacauPataca="MOP",a.MaldivesRufiyaa="MVR",a.MalawiKwacha="MWK",a.MaltaLira="MTL",a.MauritiusRupee="MUR",a.MongoliaTughrik="MNT",a.MoroccoDirham="MAD",a.MoldovaLeu="MDL",a.MozambiqueMetical="MZN",a.MadagascarAriary="MGA",a.MacedoniaDenar="MKD",a.MexicoPeso="MXN",a.MalaysiaRinggit="MYR",a.MyanmarKyat="MMK",a.MicronesiaFederatedStatesDollar="USD",a.NicaraguaCordoba="NIO",a.NamibiaDollar="NAD",a.NetherlandsAntillesGuilder="ANG",a.NewCaledoniaFranc="XPF",a.NigeriaNaira="NGN",a.NicaraguaCordobaOro="NIO",a.NigerCFAFranc="XOF",a.NorwayKrone="NOK",a.NepalRupee="NPR",a.NewZealandDollar="NZD",a.OmanRial="OMR",a.PanamaBalboa="PAB",a.PeruNuevoSol="PEN",a.PapuaNewGuineaKina="PGK",a.PhilippinesPeso="PHP",a.PakistanRupee="PKR",a.PeruNuevo="PEN",a.PolandZloty="PLN",a.ParaguayGuarani="PYG",a.QatarRial="QAR",a.RomaniaNewLeu="RON",a.SerbiaDinar="RSD",a.SriLankaRupee="LKR",a.RussiaRuble="RUB",a.RwandaFranc="RWF",a.SaudiArabiaRiyal="SAR",a.SlovakiaKoruna="SKK",a.SloveniaTolar="SIT",a.SolomonIslandsDollar="SBD",a.SeychellesRupee="SCR",a.SudanPound="SDG",a.SwedenKrona="SEK",a.SingaporeDollar="SGD",a.SaintHelenaPound="SHP",a.SierraLeoneLeone="SLL",a.SomaliaShilling="SOS",a.SurinameDollar="SRD",a.SintMaartenPound="SXD",a.SyriaPound="SYP",a.SwazilandLilangeni="SZL",a.SwitzerlandFranc="CHF",a.ThailandBaht="THB",a.TajikistanSomoni="TJS",a.TurkmenistanManat="TMT",a.TunisiaDinar="TND",a.TongaPaanga="TOP",a.TurkeyLira="TRY",a.TrinidadAndTobagoDollar="TTD",a.TaiwanNewDollar="TWD",a.TanzaniaShilling="TZS",a.UnitedArabEmiratesDirham="AED",a.UkraineHryvnia="UAH",a.UgandaShilling="UGX",a.UnitedKingdomPound="GBP",a.UnitedStatesDollar="USD",a.UruguayPeso="UYU",a.UzbekistanSom="UZS",a.VenezuelaBolivar="VEF",a.VietnamDong="VND",a.VanuatuVatu="VUV",a.SamoaTala="WST",a.YemenRial="YER",a.SouthAfricaRand="ZAR",a.ZambiaKwacha="ZMW",a.ZimbabweDollar="ZWL",a))(Nt||{});var kt=(a=>(a.Bitcoin="BTC",a.Ethereum="ETH",a.Litecoin="LTC",a.Ripple="XRP",a.Dash="DASH",a.Zcash="ZEC",a.Dogecoin="DOGE",a.Monero="XMR",a.BitcoinCash="BCH",a.EOS="EOS",a.Binance="BNB",a.Stellar="XLM",a.Cardano="ADA",a.IOTA="IOTA",a.Tezos="XTZ",a.NEO="NEO",a.TRON="TRX",a.EOSClassic="EOSC",a.Ontology="ONT",a.VeChain="VEN",a.QTUM="QTUM",a.Lisk="LSK",a.Waves="WAVES",a.OmiseGO="OMG",a.Zilliqa="ZIL",a.BitcoinGold="BTG",a.Decred="DCR",a.Stratis="STRAT",a.Populous="PPT",a.Augur="REP",a.Golem="GNT",a.Siacoin="SC",a.BasicAttentionToken="BAT",a.ZCoin="XZC",a.StratisHedged="SNT",a.VeChainHedged="VEN",a.PowerLedger="POWR",a.WavesHedged="WAVE",a.ZilliqaHedged="ZRX",a.BitcoinDiamond="BCD",a.DigiByte="DGB",a.DigiByteHedged="DGB",a.Bytecoin="BCN",a.BytecoinHedged="BCN",a))(kt||{}),Ft=(a=>(a.Afrikaans="af",a.Albanian="sq",a.Amharic="am",a.Arabic="ar",a.Armenian="hy",a.Azerbaijani="az",a.Bashkir="ba",a.Basque="eu",a.Belarusian="be",a.Bengali="bn",a.Berber="ber",a.Bhutani="dz",a.Bihari="bh",a.Bislama="bi",a.Bosnian="bs",a.Breten="br",a.Bulgarian="bg",a.Burmese="my",a.Cantonese="yue",a.Catalan="ca",a.Chinese="zh",a.Chuvash="cv",a.Corsican="co",a.Croatian="hr",a.Czech="cs",a.Danish="da",a.Dari="prs",a.Divehi="dv",a.Dutch="nl",a.English="en",a.Esperanto="eo",a.Estonian="et",a.Faroese="fo",a.Farsi="fa",a.Filipino="fil",a.Finnish="fi",a.French="fr",a.Frisian="fy",a.Galician="gl",a.Georgian="ka",a.German="de",a.Greek="el",a.Greenlandic="kl",a.Gujarati="gu",a.Haitian="ht",a.Hausa="ha",a.Hebrew="he",a.Hindi="hi",a.Hungarian="hu",a.Icelandic="is",a.Igbo="ig",a.Indonesian="id",a.Irish="ga",a.Italian="it",a.Japanese="ja",a.Javanese="jv",a.Kannada="kn",a.Karelian="krl",a.Kazakh="kk",a.Khmer="km",a.Komi="kv",a.Konkani="kok",a.Korean="ko",a.Kurdish="ku",a.Kyrgyz="ky",a.Lao="lo",a.Latin="la",a.Latvian="lv",a.Lithuanian="lt",a.Luxembourgish="lb",a.Ossetian="os",a.Macedonian="mk",a.Malagasy="mg",a.Malay="ms",a.Malayalam="ml",a.Maltese="mt",a.Maori="mi",a.Marathi="mr",a.Mari="mhr",a.Mongolian="mn",a.Montenegrin="me",a.Nepali="ne",a.NorthernSotho="nso",a.Norwegian="no",a.NorwegianBokmal="nb",a.NorwegianNynorsk="nn",a.Oriya="or",a.Pashto="ps",a.Persian="fa",a.Polish="pl",a.Portuguese="pt",a.Punjabi="pa",a.Quechua="qu",a.Romanian="ro",a.Russian="ru",a.Sakha="sah",a.Sami="se",a.Samoan="sm",a.Sanskrit="sa",a.Scots="gd",a.Serbian="sr",a.SerbianCyrillic="sr-Cyrl",a.Sesotho="st",a.Shona="sn",a.Sindhi="sd",a.Sinhala="si",a.Slovak="sk",a.Slovenian="sl",a.Somali="so",a.Spanish="es",a.Sudanese="su",a.Sutu="sx",a.Swahili="sw",a.Swedish="sv",a.Syriac="syr",a.Tagalog="tl",a.Tajik="tg",a.Tamazight="tmh",a.Tamil="ta",a.Tatar="tt",a.Telugu="te",a.Thai="th",a.Tibetan="bo",a.Tsonga="ts",a.Tswana="tn",a.Turkish="tr",a.Turkmen="tk",a.Ukrainian="uk",a.Urdu="ur",a.Uzbek="uz",a.Vietnamese="vi",a.Welsh="cy",a.Xhosa="xh",a.Yiddish="yi",a.Yoruba="yo",a.Zulu="zu",a))(Ft||{}),Mt=(a=>(a.Afrikaans="af",a.AfrikaansSouthAfrica="af-ZA",a.Albanian="sq",a.AlbanianAlbania="sq-AL",a.Amharic="am",a.AmharicEthiopia="am-ET",a.Arabic="ar",a.ArabicAlgeria="ar-DZ",a.ArabicBahrain="ar-BH",a.ArabicEgypt="ar-EG",a.ArabicIraq="ar-IQ",a.ArabicJordan="ar-JO",a.ArabicKuwait="ar-KW",a.ArabicLebanon="ar-LB",a.ArabicLibya="ar-LY",a.ArabicMorocco="ar-MA",a.ArabicOman="ar-OM",a.ArabicQatar="ar-QA",a.ArabicSaudiArabia="ar-SA",a.ArabicSyria="ar-SY",a.ArabicTunisia="ar-TN",a.ArabicUnitedArabEmirates="ar-AE",a.ArabicYemen="ar-YE",a.Armenian="hy",a.ArmenianArmenia="hy-AM",a.Azerbaijani="az",a.AzerbaijaniAzerbaijan="az-AZ",a.AzerbaijaniCyrillicAzerbaijan="az-Cyrl-AZ",a.Bashkir="ba",a.Basque="eu",a.BasqueSpain="eu-ES",a.Belarusian="be",a.BelarusianBelarus="be-BY",a.Bengali="bn",a.BengaliBangladesh="bn-BD",a.BengaliIndia="bn-IN",a.Berber="ber",a.Bhutani="dz",a.BhutaniBhutan="dz-BT",a.Bosnian="bs",a.BosnianBosniaAndHerzegovina="bs-BA",a.Breton="br",a.Bulgarian="bg",a.BulgarianBosniaAndHerzegovina="bg-BG",a.BulgarianBulgaria="bg-BG",a.Burmese="my",a.BurmeseMyanmar="my-MM",a.Cantonese="yue",a.CantoneseHongKong="yue-HK",a.Catalan="ca",a.CatalanSpain="ca-ES",a.Chechen="ce",a.Cherokee="chr",a.Chinese="zh",a.ChineseSimplified="zh-Hans",a.ChineseSimplifiedChina="zh-Hans-CN",a.ChineseSimplifiedHongKong="zh-Hans-HK",a.ChineseSimplifiedMacau="zh-Hans-MO",a.ChineseSimplifiedSingapore="zh-Hans-SG",a.ChineseTraditional="zh-Hant",a.ChineseTraditionalHongKong="zh-Hant-HK",a.ChineseTraditionalMacau="zh-Hant-MO",a.ChineseTraditionalSingapore="zh-Hant-SG",a.ChineseTraditionalTaiwan="zh-Hant-TW",a.Chuvash="cv",a.CorsicanFrance="co-FR",a.Croatian="hr",a.CroatianBosniaAndHerzegovina="hr-BA",a.CroatianCroatia="hr-HR",a.Czech="cs",a.CzechCzechRepublic="cs-CZ",a.Danish="da",a.DanishDenmark="da-DK",a.Dari="prs",a.DariAfghanistan="prs-AF",a.Divehi="dv",a.DivehiMaldives="dv-MV",a.Dutch="nl",a.DutchBelgium="nl-BE",a.DutchNetherlands="nl-NL",a.English="en",a.EnglishAustralia="en-AU",a.EnglishBelgium="en-BE",a.EnglishBelize="en-BZ",a.EnglishCanada="en-CA",a.EnglishCaribbean="en-029",a.EnglishIreland="en-IE",a.EnglishJamaica="en-JM",a.EnglishNewZealand="en-NZ",a.EnglishPhilippines="en-PH",a.EnglishSingapore="en-SG",a.EnglishSouthAfrica="en-ZA",a.EnglishTrinidadAndTobago="en-TT",a.EnglishUnitedKingdom="en-GB",a.EnglishUnitedStates="en-US",a.EnglishZimbabwe="en-ZW",a.Esperanto="eo",a.Estonian="et",a.EstonianEstonia="et-EE",a.Faroese="fo",a.FaroeseFaroeIslands="fo-FO",a.Farsi="fa",a.FarsiIran="fa-IR",a.Filipino="fil",a.FilipinoPhilippines="fil-PH",a.Finnish="fi",a.FinnishFinland="fi-FI",a.French="fr",a.FrenchBelgium="fr-BE",a.FrenchCanada="fr-CA",a.FrenchFrance="fr-FR",a.FrenchLuxembourg="fr-LU",a.FrenchMonaco="fr-MC",a.FrenchReunion="fr-RE",a.FrenchSwitzerland="fr-CH",a.Frisian="fy",a.FrisianNetherlands="fy-NL",a.Galician="gl",a.GalicianSpain="gl-ES",a.Georgian="ka",a.GeorgianGeorgia="ka-GE",a.German="de",a.GermanAustria="de-AT",a.GermanBelgium="de-BE",a.GermanGermany="de-DE",a.GermanLiechtenstein="de-LI",a.GermanLuxembourg="de-LU",a.GermanSwitzerland="de-CH",a.Greenlandic="kl",a.GreenlandicGreenland="kl-GL",a.Greek="el",a.GreekGreece="el-GR",a.Gujarati="gu",a.GujaratiIndia="gu-IN",a.Haitian="ht",a.Hausa="ha",a.HausaGhana="ha-GH",a.HausaNiger="ha-NE",a.HausaNigeria="ha-NG",a.Hebrew="he",a.HebrewIsrael="he-IL",a.Hindi="hi",a.HindiIndia="hi-IN",a.Hungarian="hu",a.HungarianHungary="hu-HU",a.Icelandic="is",a.IcelandicIceland="is-IS",a.Igbo="ig",a.IgboNigeria="ig-NG",a.Indonesian="id",a.IndonesianIndonesia="id-ID",a.Irish="ga",a.IrishIreland="ga-IE",a.Italian="it",a.ItalianItaly="it-IT",a.ItalianSwitzerland="it-CH",a.Japanese="ja",a.JapaneseJapan="ja-JP",a.Javanese="jv",a.Kannada="kn",a.KannadaIndia="kn-IN",a.Karelian="krl",a.Kazakh="kk",a.KazakhKazakhstan="kk-KZ",a.Khmer="km",a.KhmerCambodia="km-KH",a.KinyarwandaRwanda="rw-RW",a.Komi="kv",a.Konkani="kok",a.KonkaniIndia="kok-IN",a.Korean="ko",a.KoreanSouthKorea="ko-KR",a.Kurdish="ku",a.KurdishIraq="ku-IQ",a.KurdishTurkey="ku-TR",a.Kyrgyz="ky",a.KyrgyzKyrgyzstan="ky-KG",a.Lao="lo",a.LaoLaos="lo-LA",a.Latin="la",a.Latvian="lv",a.LatvianLatvia="lv-LV",a.Lithuanian="lt",a.LithuanianLithuania="lt-LT",a.Luxembourgish="lb",a.LuxembourgishBelgium="lb-LU",a.LuxembourgishLuxembourg="lb-LU",a.Macedonian="mk",a.MacedonianNorthMacedonia="mk-MK",a.Malagasy="mg",a.Malay="ms",a.MalayBrunei="ms-BN",a.MalayIndia="ms-IN",a.MalayMalaysia="ms-MY",a.MalaySingapore="ms-SG",a.Malayalam="ml",a.MalayalamIndia="ml-IN",a.Maltese="mt",a.MalteseMalta="mt-MT",a.Maori="mi",a.MaoriNewZealand="mi-NZ",a.Marathi="mr",a.MarathiIndia="mr-IN",a.Mari="chm",a.Mongolian="mn",a.MongolianMongolia="mn-MN",a.Montenegrin="me",a.MontenegrinMontenegro="me-ME",a.Nepali="ne",a.NepaliNepal="ne-NP",a.NorthernSotho="ns",a.NorthernSothoSouthAfrica="ns-ZA",a.Norwegian="nb",a.NorwegianBokmalNorway="nb-NO",a.NorwegianNynorskNorway="nn-NO",a.Oriya="or",a.OriyaIndia="or-IN",a.Ossetian="os",a.Pashto="ps",a.PashtoAfghanistan="ps-AF",a.Persian="fa",a.PersianIran="fa-IR",a.Polish="pl",a.PolishPoland="pl-PL",a.Portuguese="pt",a.PortugueseBrazil="pt-BR",a.PortuguesePortugal="pt-PT",a.Punjabi="pa",a.PunjabiIndia="pa-IN",a.PunjabiPakistan="pa-PK",a.Quechua="qu",a.QuechuaBolivia="qu-BO",a.QuechuaEcuador="qu-EC",a.QuechuaPeru="qu-PE",a.Romanian="ro",a.RomanianRomania="ro-RO",a.Russian="ru",a.RussianKazakhstan="ru-KZ",a.RussianKyrgyzstan="ru-KG",a.RussianRussia="ru-RU",a.RussianUkraine="ru-UA",a.Sakha="sah",a.Sanskrit="sa",a.SanskritIndia="sa-IN",a.Sami="se",a.SamiNorway="se-NO",a.SamiSweden="se-SE",a.SamiFinland="se-FI",a.Samoan="sm",a.SamoanSamoa="sm-WS",a.Scots="gd",a.Serbian="sr",a.SerbianBosniaAndHerzegovina="sr-BA",a.SerbianSerbiaAndMontenegro="sr-SP",a.SerbianCyrillic="sr-SP-Cyrl",a.SerbianCyrillicBosniaAndHerzegovina="sr-Cyrl-BA",a.SerbianCyrillicSerbiaAndMontenegro="sr-Cyrl-SP",a.Sesotho="st",a.SesothoSouthAfrica="st-ZA",a.Shona="sn",a.ShonaZimbabwe="sn-ZW",a.Sindhi="sd",a.SindhiPakistan="sd-PK",a.Sinhala="si",a.SinhalaSriLanka="si-LK",a.Slovak="sk",a.SlovakSlovakia="sk-SK",a.Slovenian="sl",a.SlovenianSlovenia="sl-SI",a.Somali="so",a.SomaliSomalia="so-SO",a.Spanish="es",a.SpanishArgentina="es-AR",a.SpanishBolivia="es-BO",a.SpanishChile="es-CL",a.SpanishColombia="es-CO",a.SpanishCostaRica="es-CR",a.SpanishCuba="es-CU",a.SpanishDominicanRepublic="es-DO",a.SpanishEcuador="es-EC",a.SpanishEquatorialGuinea="es-GQ",a.SpanishElSalvador="es-SV",a.SpanishGuatemala="es-GT",a.SpanishHonduras="es-HN",a.SpanishMexico="es-MX",a.SpanishNicaragua="es-NI",a.SpanishPanama="es-PA",a.SpanishParaguay="es-PY",a.SpanishPeru="es-PE",a.SpanishPuertoRico="es-PR",a.SpanishSpain="es-ES",a.SpanishUnitedStates="es-US",a.SpanishUruguay="es-UY",a.SpanishVenezuela="es-VE",a.Sudanese="su",a.Sutu="st",a.SutuSouthAfrica="st-ZA",a.Swahili="sw",a.SwahiliKenya="sw-KE",a.Swedish="sv",a.SwedishFinland="sv-FI",a.SwedishSweden="sv-SE",a.Syriac="syr",a.SyriacSyria="syr-SY",a.Tajik="tg",a.TajikTajikistan="tg-TJ",a.Tagalog="tl",a.TagalogPhilippines="tl-PH",a.Tamazight="tmh",a.Tamil="ta",a.TamilIndia="ta-IN",a.Tatar="tt",a.Telugu="te",a.TeluguIndia="te-IN",a.Thai="th",a.ThaiThailand="th-TH",a.Tibetan="bo",a.TibetanBhutan="bo-BT",a.TibetanChina="bo-CN",a.TibetanIndia="bo-IN",a.Tsonga="ts",a.Tswana="tn",a.TswanaSouthAfrica="tn-ZA",a.Turkish="tr",a.TurkishTurkey="tr-TR",a.Turkmen="tk",a.Ukrainian="uk",a.UkrainianUkraine="uk-UA",a.Urdu="ur",a.UrduAfghanistan="ur-AF",a.UrduIndia="ur-IN",a.UrduPakistan="ur-PK",a.Uzbek="uz",a.UzbekCyrillic="uz-Cyrl-UZ",a.UzbekLatin="uz-Latn-UZ",a.UzbekUzbekistan="uz-UZ",a.Vietnamese="vi",a.VietnameseVietnam="vi-VN",a.Welsh="cy",a.WelshUnitedKingdom="cy-GB",a.Xhosa="xh",a.XhosaSouthAfrica="xh-ZA",a.Yiddish="yi",a.Yoruba="yo",a.YorubaNigeria="yo-NG",a.ZhuyinMandarinChina="yue-Hant-CN",a.Zulu="zu",a.ZuluSouthAfrica="zu-ZA",a))(Mt||{}),Ut=(a=>(a.AfricaAbidjan="Africa/Abidjan",a.AfricaAccra="Africa/Accra",a.AfricaAddisAbaba="Africa/Addis_Ababa",a.AfricaAlgiers="Africa/Algiers",a.AfricaAsmara="Africa/Asmara",a.AfricaBamako="Africa/Bamako",a.AfricaBangui="Africa/Bangui",a.AfricaBanjul="Africa/Banjul",a.AfricaBissau="Africa/Bissau",a.AfricaBlantyre="Africa/Blantyre",a.AfricaBrazzaville="Africa/Brazzaville",a.AfricaBujumbura="Africa/Bujumbura",a.AfricaCairo="Africa/Cairo",a.AfricaCasablanca="Africa/Casablanca",a.AfricaCeuta="Africa/Ceuta",a.AfricaConakry="Africa/Conakry",a.AfricaDakar="Africa/Dakar",a.AfricaDarEsSalaam="Africa/Dar_es_Salaam",a.AfricaDjibouti="Africa/Djibouti",a.AfricaDouala="Africa/Douala",a.AfricaElAaiun="Africa/El_Aaiun",a.AfricaFreetown="Africa/Freetown",a.AfricaGaborone="Africa/Gaborone",a.AfricaHarare="Africa/Harare",a.AfricaJohannesburg="Africa/Johannesburg",a.AfricaJuba="Africa/Juba",a.AfricaKampala="Africa/Kampala",a.AfricaKhartoum="Africa/Khartoum",a.AfricaKigali="Africa/Kigali",a.AfricaKinshasa="Africa/Kinshasa",a.AfricaLagos="Africa/Lagos",a.AfricaLibreville="Africa/Libreville",a.AfricaLome="Africa/Lome",a.AfricaLuanda="Africa/Luanda",a.AfricaLubumbashi="Africa/Lubumbashi",a.AfricaLusaka="Africa/Lusaka",a.AfricaMalabo="Africa/Malabo",a.AfricaMaputo="Africa/Maputo",a.AfricaMaseru="Africa/Maseru",a.AfricaMbabane="Africa/Mbabane",a.AfricaMogadishu="Africa/Mogadishu",a.AfricaMonrovia="Africa/Monrovia",a.AfricaNairobi="Africa/Nairobi",a.AfricaNdjamena="Africa/Ndjamena",a.AfricaNiamey="Africa/Niamey",a.AfricaNouakchott="Africa/Nouakchott",a.AfricaOuagadougou="Africa/Ouagadougou",a.AfricaPortoNovo="Africa/Porto-Novo",a.AfricaSaoTome="Africa/Sao_Tome",a.AfricaTripoli="Africa/Tripoli",a.AfricaTunis="Africa/Tunis",a.AfricaWindhoek="Africa/Windhoek",a.AmericaAdak="America/Adak",a.AmericaAnchorage="America/Anchorage",a.AmericaAnguilla="America/Anguilla",a.AmericaAntigua="America/Antigua",a.AmericaAraguaina="America/Araguaina",a.AmericaArgentinaBuenosAires="America/Argentina/Buenos_Aires",a.AmericaArgentinaCatamarca="America/Argentina/Catamarca",a.AmericaArgentinaCordoba="America/Argentina/Cordoba",a.AmericaArgentinaJujuy="America/Argentina/Jujuy",a.AmericaArgentinaLaRioja="America/Argentina/La_Rioja",a.AmericaArgentinaMendoza="America/Argentina/Mendoza",a.AmericaArgentinaRioGallegos="America/Argentina/Rio_Gallegos",a.AmericaArgentinaSalta="America/Argentina/Salta",a.AmericaArgentinaSanJuan="America/Argentina/San_Juan",a.AmericaArgentinaSanLuis="America/Argentina/San_Luis",a.AmericaArgentinaTucuman="America/Argentina/Tucuman",a.AmericaArgentinaUshuaia="America/Argentina/Ushuaia",a.AmericaAruba="America/Aruba",a.AmericaAsuncion="America/Asuncion",a.AmericaAtikokan="America/Atikokan",a.AmericaAtka="America/Atka",a.AmericaBahia="America/Bahia",a.AmericaBahiaBanderas="America/Bahia_Banderas",a.AmericaBarbados="America/Barbados",a.AmericaBelem="America/Belem",a.AmericaBelize="America/Belize",a.AmericaBlancSablon="America/Blanc-Sablon",a.AmericaBoaVista="America/Boa_Vista",a.AmericaBogota="America/Bogota",a.AmericaBoise="America/Boise",a.AmericaCambridgeBay="America/Cambridge_Bay",a.AmericaCampoGrande="America/Campo_Grande",a.AmericaCancun="America/Cancun",a.AmericaCaracas="America/Caracas",a.AmericaCayenne="America/Cayenne",a.AmericaCayman="America/Cayman",a.AmericaChicago="America/Chicago",a.AmericaChihuahua="America/Chihuahua",a.AmericaCoralHarbour="America/Coral_Harbour",a.AmericaCordoba="America/Cordoba",a.AmericaCostaRica="America/Costa_Rica",a.AmericaCreston="America/Creston",a.AmericaCuiaba="America/Cuiaba",a.AmericaCuracao="America/Curacao",a.AmericaDanmarkshavn="America/Danmarkshavn",a.AmericaDawson="America/Dawson",a.AmericaDawsonCreek="America/Dawson_Creek",a.AmericaDenver="America/Denver",a.AmericaDetroit="America/Detroit",a.AmericaDominica="America/Dominica",a.AmericaEdmonton="America/Edmonton",a.AmericaEirunepe="America/Eirunepe",a.AmericaElSalvador="America/El_Salvador",a.AmericaFortaleza="America/Fortaleza",a.AmericaGlaceBay="America/Glace_Bay",a.AmericaGodthab="America/Godthab",a.AmericaGooseBay="America/Goose_Bay",a.AmericaGrandTurk="America/Grand_Turk",a.AmericaGrenada="America/Grenada",a.AmericaGuadeloupe="America/Guadeloupe",a.AmericaGuatemala="America/Guatemala",a.AmericaGuayaquil="America/Guayaquil",a.AmericaGuyana="America/Guyana",a.AmericaHalifax="America/Halifax",a.AmericaHavana="America/Havana",a.AmericaHermosillo="America/Hermosillo",a.AmericaIndianaIndianapolis="America/Indiana/Indianapolis",a.AmericaIndianaKnox="America/Indiana/Knox",a.AmericaIndianaMarengo="America/Indiana/Marengo",a.AmericaIndianaPetersburg="America/Indiana/Petersburg",a.AmericaIndianaTellCity="America/Indiana/Tell_City",a.AmericaIndianaVevay="America/Indiana/Vevay",a.AmericaIndianaVincennes="America/Indiana/Vincennes",a.AmericaIndianaWinamac="America/Indiana/Winamac",a.AmericaInuvik="America/Inuvik",a.AmericaIqaluit="America/Iqaluit",a.AmericaJamaica="America/Jamaica",a.AmericaJuneau="America/Juneau",a.AmericaKentuckyLouisville="America/Kentucky/Louisville",a.AmericaKentuckyMonticello="America/Kentucky/Monticello",a.AmericaKralendijk="America/Kralendijk",a.AmericaLaPaz="America/La_Paz",a.AmericaLima="America/Lima",a.AmericaLosAngeles="America/Los_Angeles",a.AmericaLouisville="America/Louisville",a.AmericaLowerPrinces="America/Lower_Princes",a.AmericaMaceio="America/Maceio",a.AmericaManagua="America/Managua",a.AmericaManaus="America/Manaus",a.AmericaMarigot="America/Marigot",a.AmericaMartinique="America/Martinique",a.AmericaMatamoros="America/Matamoros",a.AmericaMazatlan="America/Mazatlan",a.AmericaMenominee="America/Menominee",a.AmericaMerida="America/Merida",a.AmericaMetlakatla="America/Metlakatla",a.AmericaMexicoCity="America/Mexico_City",a.AmericaMiquelon="America/Miquelon",a.AmericaMoncton="America/Moncton",a.AmericaMonterrey="America/Monterrey",a.AmericaMontevideo="America/Montevideo",a.AmericaMontserrat="America/Montserrat",a.AmericaMontreal="America/Montreal",a.AmericaNassau="America/Nassau",a.AmericaNewYork="America/New_York",a.AmericaNipigon="America/Nipigon",a.AmericaNome="America/Nome",a.AmericaNoronha="America/Noronha",a.AmericaNorthDakotaBeulah="America/North_Dakota/Beulah",a.AmericaNorthDakotaCenter="America/North_Dakota/Center",a.AmericaNorthDakotaNewSalem="America/North_Dakota/New_Salem",a.AmericaOjinaga="America/Ojinaga",a.AmericaPanama="America/Panama",a.AmericaPangnirtung="America/Pangnirtung",a.AmericaParamaribo="America/Paramaribo",a.AmericaPhoenix="America/Phoenix",a.AmericaPortAuPrince="America/Port-au-Prince",a.AmericaPortOfSpain="America/Port_of_Spain",a.AmericaPortoVelho="America/Porto_Velho",a.AmericaPuertoRico="America/Puerto_Rico",a.AmericaRainyRiver="America/Rainy_River",a.AmericaRankinInlet="America/Rankin_Inlet",a.AmericaRecife="America/Recife",a.AmericaRegina="America/Regina",a.AmericaResolute="America/Resolute",a.AmericaRioBranco="America/Rio_Branco",a.AmericaSantaIsabel="America/Santa_Isabel",a.AmericaSantarem="America/Santarem",a.AmericaSantiago="America/Santiago",a.AmericaSantoDomingo="America/Santo_Domingo",a.AmericaSaoPaulo="America/Sao_Paulo",a.AmericaScoresbysund="America/Scoresbysund",a.AmericaShiprock="America/Shiprock",a.AmericaSitka="America/Sitka",a.AmericaStBarthelemy="America/St_Barthelemy",a.AmericaStJohns="America/St_Johns",a.AmericaStKitts="America/St_Kitts",a.AmericaStLucia="America/St_Lucia",a.AmericaStThomas="America/St_Thomas",a.AmericaStVincent="America/St_Vincent",a.AmericaSwiftCurrent="America/Swift_Current",a.AmericaTegucigalpa="America/Tegucigalpa",a.AmericaThule="America/Thule",a.AmericaThunderBay="America/Thunder_Bay",a.AmericaTijuana="America/Tijuana",a.AmericaToronto="America/Toronto",a.AmericaTortola="America/Tortola",a.AmericaVancouver="America/Vancouver",a.AmericaWhitehorse="America/Whitehorse",a.AmericaWinnipeg="America/Winnipeg",a.AmericaYakutat="America/Yakutat",a.AmericaYellowknife="America/Yellowknife",a.AntarcticaCasey="Antarctica/Casey",a.AntarcticaDavis="Antarctica/Davis",a.AntarcticaDumontDUrville="Antarctica/DumontDUrville",a.AntarcticaMacquarie="Antarctica/Macquarie",a.AntarcticaMawson="Antarctica/Mawson",a.AntarcticaMcMurdo="Antarctica/McMurdo",a.AntarcticaPalmer="Antarctica/Palmer",a.AntarcticaRothera="Antarctica/Rothera",a.AntarcticaSyowa="Antarctica/Syowa",a.AntarcticaTroll="Antarctica/Troll",a.AntarcticaVostok="Antarctica/Vostok",a.ArcticLongyearbyen="Arctic/Longyearbyen",a.AsiaAden="Asia/Aden",a.AsiaAlmaty="Asia/Almaty",a.AsiaAmman="Asia/Amman",a.AsiaAnadyr="Asia/Anadyr",a.AsiaAqtau="Asia/Aqtau",a.AsiaAqtobe="Asia/Aqtobe",a.AsiaAshgabat="Asia/Ashgabat",a.AsiaBaghdad="Asia/Baghdad",a.AsiaBahrain="Asia/Bahrain",a.AsiaBaku="Asia/Baku",a.AsiaBangkok="Asia/Bangkok",a.AsiaBarnaul="Asia/Barnaul",a.AsiaBeirut="Asia/Beirut",a.AsiaBishkek="Asia/Bishkek",a.AsiaBrunei="Asia/Brunei",a.AsiaChita="Asia/Chita",a.AsiaChoibalsan="Asia/Choibalsan",a.AsiaColombo="Asia/Colombo",a.AsiaDamascus="Asia/Damascus",a.AsiaDhaka="Asia/Dhaka",a.AsiaDili="Asia/Dili",a.AsiaDubai="Asia/Dubai",a.AsiaDushanbe="Asia/Dushanbe",a.AsiaFamagusta="Asia/Famagusta",a.AsiaGaza="Asia/Gaza",a.AsiaHebron="Asia/Hebron",a.AsiaHoChiMinh="Asia/Ho_Chi_Minh",a.AsiaHongKong="Asia/Hong_Kong",a.AsiaHovd="Asia/Hovd",a.AsiaIrkutsk="Asia/Irkutsk",a.AsiaJakarta="Asia/Jakarta",a.AsiaJayapura="Asia/Jayapura",a.AsiaJerusalem="Asia/Jerusalem",a.AsiaKabul="Asia/Kabul",a.AsiaKamchatka="Asia/Kamchatka",a.AsiaKarachi="Asia/Karachi",a.AsiaKathmandu="Asia/Kathmandu",a.AsiaKhandyga="Asia/Khandyga",a.AsiaKolkata="Asia/Kolkata",a.AsiaKrasnoyarsk="Asia/Krasnoyarsk",a.AsiaKualaLumpur="Asia/Kuala_Lumpur",a.AsiaKuching="Asia/Kuching",a.AsiaKuwait="Asia/Kuwait",a.AsiaMacau="Asia/Macau",a.AsiaMagadan="Asia/Magadan",a.AsiaMakassar="Asia/Makassar",a.AsiaManila="Asia/Manila",a.AsiaMuscat="Asia/Muscat",a.AsiaNicosia="Asia/Nicosia",a.AsiaNovokuznetsk="Asia/Novokuznetsk",a.AsiaNovosibirsk="Asia/Novosibirsk",a.AsiaOmsk="Asia/Omsk",a.AsiaOral="Asia/Oral",a.AsiaPhnomPenh="Asia/Phnom_Penh",a.AsiaPontianak="Asia/Pontianak",a.AsiaPyongyang="Asia/Pyongyang",a.AsiaQatar="Asia/Qatar",a.AsiaQyzylorda="Asia/Qyzylorda",a.AsiaRangoon="Asia/Rangoon",a.AsiaRiyadh="Asia/Riyadh",a.AsiaSakhalin="Asia/Sakhalin",a.AsiaSamarkand="Asia/Samarkand",a.AsiaSeoul="Asia/Seoul",a.AsiaShanghai="Asia/Shanghai",a.AsiaSingapore="Asia/Singapore",a.AsiaSrednekolymsk="Asia/Srednekolymsk",a.AsiaTaipei="Asia/Taipei",a.AsiaTashkent="Asia/Tashkent",a.AsiaTbilisi="Asia/Tbilisi",a.AsiaTehran="Asia/Tehran",a.AsiaThimphu="Asia/Thimphu",a.AsiaTokyo="Asia/Tokyo",a.AsiaTomsk="Asia/Tomsk",a.AsiaUlaanbaatar="Asia/Ulaanbaatar",a.AsiaUrumqi="Asia/Urumqi",a.AsiaUstNera="Asia/Ust-Nera",a.AsiaVientiane="Asia/Vientiane",a.AsiaVladivostok="Asia/Vladivostok",a.AsiaYakutsk="Asia/Yakutsk",a.AsiaYekaterinburg="Asia/Yekaterinburg",a.AsiaYerevan="Asia/Yerevan",a.AtlanticAzores="Atlantic/Azores",a.AtlanticBermuda="Atlantic/Bermuda",a.AtlanticCanary="Atlantic/Canary",a.AtlanticCapeVerde="Atlantic/Cape_Verde",a.AtlanticFaroe="Atlantic/Faroe",a.AtlanticMadeira="Atlantic/Madeira",a.AtlanticReykjavik="Atlantic/Reykjavik",a.AtlanticSouthGeorgia="Atlantic/South_Georgia",a.AtlanticStHelena="Atlantic/St_Helena",a.AtlanticStanley="Atlantic/Stanley",a.AustraliaAdelaide="Australia/Adelaide",a.AustraliaBrisbane="Australia/Brisbane",a.AustraliaBrokenHill="Australia/Broken_Hill",a.AustraliaCanberra="Australia/Canberra",a.AustraliaCurrie="Australia/Currie",a.AustraliaDarwin="Australia/Darwin",a.AustraliaEucla="Australia/Eucla",a.AustraliaHobart="Australia/Hobart",a.AustraliaLindeman="Australia/Lindeman",a.AustraliaLordHowe="Australia/Lord_Howe",a.AustraliaMelbourne="Australia/Melbourne",a.AustraliaPerth="Australia/Perth",a.AustraliaSydney="Australia/Sydney",a.EuropeAmsterdam="Europe/Amsterdam",a.EuropeAndorra="Europe/Andorra",a.EuropeAthens="Europe/Athens",a.EuropeBelgrade="Europe/Belgrade",a.EuropeBerlin="Europe/Berlin",a.EuropeBratislava="Europe/Bratislava",a.EuropeBrussels="Europe/Brussels",a.EuropeBucharest="Europe/Bucharest",a.EuropeBudapest="Europe/Budapest",a.EuropeBusingen="Europe/Busingen",a.EuropeChisinau="Europe/Chisinau",a.EuropeCopenhagen="Europe/Copenhagen",a.EuropeDublin="Europe/Dublin",a.EuropeGibraltar="Europe/Gibraltar",a.EuropeGuernsey="Europe/Guernsey",a.EuropeHelsinki="Europe/Helsinki",a.EuropeIsleOfMan="Europe/Isle_of_Man",a.EuropeIstanbul="Europe/Istanbul",a.EuropeJersey="Europe/Jersey",a.EuropeKaliningrad="Europe/Kaliningrad",a.EuropeKiev="Europe/Kiev",a.EuropeKirov="Europe/Kirov",a.EuropeLisbon="Europe/Lisbon",a.EuropeLjubljana="Europe/Ljubljana",a.EuropeLondon="Europe/London",a.EuropeLuxembourg="Europe/Luxembourg",a.EuropeMadrid="Europe/Madrid",a.EuropeMalta="Europe/Malta",a.EuropeMariehamn="Europe/Mariehamn",a.EuropeMinsk="Europe/Minsk",a.EuropeMonaco="Europe/Monaco",a.EuropeMoscow="Europe/Moscow",a.EuropeOslo="Europe/Oslo",a.EuropeParis="Europe/Paris",a.EuropePodgorica="Europe/Podgorica",a.EuropePrague="Europe/Prague",a.EuropeRiga="Europe/Riga",a.EuropeRome="Europe/Rome",a.EuropeSamara="Europe/Samara",a.EuropeSanMarino="Europe/San_Marino",a.EuropeSarajevo="Europe/Sarajevo",a.EuropeSimferopol="Europe/Simferopol",a.EuropeSkopje="Europe/Skopje",a.EuropeSofia="Europe/Sofia",a.EuropeStockholm="Europe/Stockholm",a.EuropeTallinn="Europe/Tallinn",a.EuropeTirane="Europe/Tirane",a.EuropeUzhgorod="Europe/Uzhgorod",a.EuropeVaduz="Europe/Vaduz",a.EuropeVatican="Europe/Vatican",a.EuropeVienna="Europe/Vienna",a.EuropeVilnius="Europe/Vilnius",a.EuropeVolgograd="Europe/Volgograd",a.EuropeWarsaw="Europe/Warsaw",a.EuropeZagreb="Europe/Zagreb",a.EuropeZaporozhye="Europe/Zaporozhye",a.EuropeZurich="Europe/Zurich",a.GMT="GMT",a.IndianAntananarivo="Indian/Antananarivo",a.IndianChagos="Indian/Chagos",a.IndianChristmas="Indian/Christmas",a.IndianCocos="Indian/Cocos",a.IndianComoro="Indian/Comoro",a.IndianKerguelen="Indian/Kerguelen",a.IndianMahe="Indian/Mahe",a.IndianMaldives="Indian/Maldives",a.IndianMauritius="Indian/Mauritius",a.IndianMayotte="Indian/Mayotte",a.IndianReunion="Indian/Reunion",a.PacificApia="Pacific/Apia",a.PacificAuckland="Pacific/Auckland",a.PacificBougainville="Pacific/Bougainville",a.PacificChatham="Pacific/Chatham",a.PacificChuuk="Pacific/Chuuk",a.PacificEaster="Pacific/Easter",a.PacificEfate="Pacific/Efate",a.PacificEnderbury="Pacific/Enderbury",a.PacificFakaofo="Pacific/Fakaofo",a.PacificFiji="Pacific/Fiji",a.PacificFunafuti="Pacific/Funafuti",a.PacificGalapagos="Pacific/Galapagos",a.PacificGambier="Pacific/Gambier",a.PacificGuadalcanal="Pacific/Guadalcanal",a.PacificGuam="Pacific/Guam",a.PacificHonolulu="Pacific/Honolulu",a.PacificJohnston="Pacific/Johnston",a.PacificKiritimati="Pacific/Kiritimati",a.PacificKosrae="Pacific/Kosrae",a.PacificKwajalein="Pacific/Kwajalein",a.PacificMajuro="Pacific/Majuro",a.PacificMarquesas="Pacific/Marquesas",a.PacificMidway="Pacific/Midway",a.PacificNauru="Pacific/Nauru",a.PacificNiue="Pacific/Niue",a.PacificNorfolk="Pacific/Norfolk",a.PacificNoumea="Pacific/Noumea",a.PacificPagoPago="Pacific/Pago_Pago",a.PacificPalau="Pacific/Palau",a.PacificPitcairn="Pacific/Pitcairn",a.PacificPohnpei="Pacific/Pohnpei",a.PacificPonape="Pacific/Ponape",a.PacificPortMoresby="Pacific/Port_Moresby",a.PacificRarotonga="Pacific/Rarotonga",a.PacificSaipan="Pacific/Saipan",a.PacificSamoa="Pacific/Samoa",a.PacificTahiti="Pacific/Tahiti",a.PacificTarawa="Pacific/Tarawa",a.PacificTongatapu="Pacific/Tongatapu",a.PacificTruk="Pacific/Truk",a.PacificWake="Pacific/Wake",a.PacificWallis="Pacific/Wallis",a.PacificYap="Pacific/Yap",a))(Ut||{}),Pt=(a=>(a.UTC_MINUS_12="UTC-12",a.UTC_MINUS_11_30="UTC-11:30",a.UTC_MINUS_11="UTC-11",a.UTC_MINUS_10_30="UTC-10:30",a.UTC_MINUS_10="UTC-10",a.UTC_MINUS_9_30="UTC-9:30",a.UTC_MINUS_9="UTC-09",a.UTC_MINUS_8_45="UTC-8:45",a.UTC_MINUS_8="UTC-08",a.UTC_MINUS_7="UTC-07",a.UTC_MINUS_6_30="UTC-6:30",a.UTC_MINUS_6="UTC-06",a.UTC_MINUS_5_45="UTC-5:45",a.UTC_MINUS_5_30="UTC-5:30",a.UTC_MINUS_5="UTC-05",a.UTC_MINUS_4_30="UTC-4:30",a.UTC_MINUS_4="UTC-04",a.UTC_MINUS_3_30="UTC-3:30",a.UTC_MINUS_3="UTC-03",a.UTC_MINUS_2_30="UTC-2:30",a.UTC_MINUS_2="UTC-02",a.UTC_MINUS_1="UTC-01",a.UTC_0="UTC+00",a.UTC_PLUS_1="UTC+01",a.UTC_PLUS_2="UTC+02",a.UTC_PLUS_3="UTC+03",a.UTC_PLUS_3_30="UTC+3:30",a.UTC_PLUS_4="UTC+04",a.UTC_PLUS_4_30="UTC+4:30",a.UTC_PLUS_5="UTC+05",a.UTC_PLUS_5_30="UTC+5:30",a.UTC_PLUS_5_45="UTC+5:45",a.UTC_PLUS_6="UTC+06",a.UTC_PLUS_6_30="UTC+6:30",a.UTC_PLUS_7="UTC+07",a.UTC_PLUS_8="UTC+08",a.UTC_PLUS_8_45="UTC+8:45",a.UTC_PLUS_9="UTC+09",a.UTC_PLUS_9_30="UTC+9:30",a.UTC_PLUS_10="UTC+10",a.UTC_PLUS_10_30="UTC+10:30",a.UTC_PLUS_11="UTC+11",a.UTC_PLUS_11_30="UTC+11:30",a.UTC_PLUS_12="UTC+12",a.UTC_PLUS_12_45="UTC+12:45",a.UTC_PLUS_13="UTC+13",a.UTC_PLUS_13_45="UTC+13:45",a.UTC_PLUS_14="UTC+14",a))(Pt||{}),Lt=(a=>(a.AcreTime="ACT",a.AfghanistanTime="AFT",a.AIXCentralEuropeanTime="DFT",a.AlaskaDaylightTime="AKDT",a.AlaskaStandardTime="AKST",a.AlmaAtaTime="ALMT",a.AmazonSummerTime="AMST",a.AmazonTime="AMT",a.AnadyrTime="ANAT",a.AqtobeTime="AQTT",a.ArabiaStandardTime="AST",a.ArgentinaTime="ART",a.ArmeniaTime="AMT",a.ASEANCommonTime="ASEAN",a.AtlanticDaylightTime="ADT",a.AtlanticStandardTime="AST",a.AustralianCentralDaylightSavingTime="ACDT",a.AustralianCentralStandardTime="ACST",a.AustralianCentralWesternStandardTime="ACWST",a.AustralianEasternDaylightSavingTime="AEDT",a.AustralianEasternStandardTime="AEST",a.AustralianEasternTime="AET",a.AustralianWesternStandardTime="AWST",a.AzerbaijanTime="AZT",a.AzoresStandardTime="AZOT",a.AzoresSummerTime="AZOST",a.BakerIslandTime="BIT",a.BangladeshStandardTime="BST",a.BhutanTime="BTT",a.BoliviaTime="BOT",a.BougainvilleStandardTime="BST",a.BrasiliaSummerTime="BRST",a.BrasiliaTime="BRT",a.BritishIndianOceanTime="BIOT",a.BritishSummerTime="BST",a.BruneiTime="BNT",a.CapeVerdeTime="CVT",a.CentralAfricaTime="CAT",a.CentralDaylightTime="CDT",a.CentralEuropeanSummerTime="CEST",a.CentralEuropeanTime="CET",a.CentralIndonesiaTime="WITA",a.CentralStandardTime="CST",a.CentralTime="CT",a.CentralWesternStandardTime="CWST",a.ChamorroStandardTime="CHST",a.ChathamDaylightTime="CHADT",a.ChathamStandardTime="CHAST",a.ChileStandardTime="CLT",a.ChileSummerTime="CLST",a.ChinaStandardTime="CST",a.ChoibalsanStandardTime="CHOT",a.ChoibalsanSummerTime="CHOST",a.ChristmasIslandTime="CXT",a.ChuukTime="CHUT",a.ClipptertonIslandStandardTime="CIST",a.CocosIslandsTime="CCT",a.ColombiaSummerTime="COST",a.ColombiaTime="COT",a.CookIslandTime="CKT",a.CoordinatedUniversalTime="UTC",a.CubaDaylightTime="CDT",a.CubaStandardTime="CST",a.DavisTime="DAVT",a.DumontDUrvilleTime="DDUT",a.EastAfricaTime="EAT",a.EasterIslandStandardTime="EAST",a.EasterIslandSummerTime="EASST",a.EasternCaribbeanTime="ECT",a.EasternDaylightTime="EDT",a.EasternEuropeanSummerTime="EEST",a.EasternEuropeanTime="EET",a.EasternGreenlandSummerTime="EGST",a.EasternGreenlandTime="EGT",a.EasternIndonesianTime="WIT",a.EasternStandardTime="EST",a.EasternTime="ET",a.EcuadorTime="ECT",a.FalklandIslandsSummerTime="FKST",a.FalklandIslandsTime="FKT",a.FernandoDeNoronhaTime="FNT",a.FijiTime="FJT",a.FrenchGuianaTime="GFT",a.FrenchSouthernAndAntarcticTime="TFT",a.FurtherEasternEuropeanTime="FET",a.GalapagosTime="GALT",a.GambierIslandTime="GIT",a.GambierIslandsTime="GAMT",a.GeorgiaStandardTime="GET",a.GilbertIslandTime="GILT",a.GreenwichMeanTime="GMT",a.GulfStandardTime="GST",a.GuyanaTime="GYT",a.HawaiiAleutianDaylightTime="HDT",a.HawaiiAleutianStandardTime="HST",a.HeardAndMcDonaldIslandsTime="HMT",a.HeureAvanceeDEuropeCentraleTime="HAEC",a.HongKongTime="HKT",a.HovdSummerTime="HOVST",a.HovdTime="HOVT",a.IndianOceanTime="IOT",a.IndianStandardTime="IST",a.IndochinaTime="ICT",a.InternationalDayLineWestTime="IDLW",a.IranDaylightTime="IRDT",a.IranStandardTime="IRST",a.IrishStandardTime="IST",a.IrkutskSummerTime="IRKST",a.IrkutskTime="IRKT",a.IsraelDaylightTime="IDT",a.IsraelStandardTime="IST",a.JapanStandardTime="JST",a.KaliningradTime="KALT",a.KamchatkaTime="KAMT",a.KoreaStandardTime="KST",a.KosraeTime="KOST",a.KrasnoyarskSummerTime="KRAST",a.KrasnoyarskTime="KRAT",a.KyrgyzstanTime="KGT",a.LineIslandsTime="LINT",a.KazakhstanStandardTime="KAST",a.LordHoweStandardTime="LHST",a.LordHoweSummerTime="LHST",a.MacquarieIslandStationTime="MIST",a.MagadanTime="MAGT",a.MalaysiaStandardTime="MST",a.MalaysiaTime="MYT",a.MaldivesTime="MVT",a.MarquesasIslandsTime="MART",a.MarshallIslandsTime="MHT",a.MauritiusTime="MUT",a.MawsonStationTime="MAWT",a.MiddleEuropeanSummerTime="MEDT",a.MiddleEuropeanTime="MET",a.MoscowTime="MSK",a.MountainDaylightTime="MDT",a.MountainStandardTime="MST",a.MyanmarStandardTime="MMT",a.NepalTime="NCT",a.NauruTime="NRT",a.NewCaledoniaTime="NCT",a.NewZealandDaylightTime="NZDT",a.NewZealandStandardTime="NZST",a.NewfoundlandDaylightTime="NDT",a.NewfoundlandStandardTime="NST",a.NewfoundlandTime="NT",a.NiueTime="NUT",a.NorfolkIslandTime="NFT",a.NovosibirskTime="NOVT",a.OmskTime="OMST",a.OralTime="ORAT",a.PacificDaylightTime="PDT",a.PacificStandardTime="PST",a.PakistanStandardTime="PKT",a.PalauTime="PWT",a.PapuaNewGuineaTime="PGT",a.ParaguaySummerTime="PYST",a.ParaguayTime="PYT",a.PeruTime="PET",a.PhilippineStandardTime="PHST",a.PhilippineTime="PHT",a.PhoenixIslandTime="PHOT",a.PitcairnTime="PST",a.PohnpeiStandardTime="PONT",a.ReunionTime="RET",a.RotheraResearchStationTime="ROTT",a.SaintPierreAndMiquelonDaylightTime="PMDT",a.SaintPierreAndMiquelonStandardTime="PMST",a.SakhalinIslandTime="SAKT",a.SamaraTime="SAMT",a.SamoaDaylightTime="SDT",a.SamoaStandardTime="SST",a.SeychellesTime="SCT",a.ShowaStationTime="SYOT",a.SingaporeStandardTime="SST",a.SingaporeTime="SGT",a.SolomonIslandsTime="SBT",a.SouthAfricanStandardTime="SAST",a.SouthGeorgiaAndTheSouthSandwichIslandsTime="GST",a.SrednekolymskTime="SRET",a.SriLankaStandardTime="SLST",a.SurinameTime="SRT",a.TahitiTime="TAHT",a.TajikistanTime="TJT",a.ThailandStandardTime="THA",a.TimorLesteTime="TLT",a.TokelauTime="TKT",a.TongaTime="TOT",a.TurkeyTime="TRT",a.TurkmenistanTime="TMT",a.TuvaluTime="TVT",a.UlaanbaatarStandardTime="ULAT",a.UlaanbaatarSummerTime="ULAST",a.UruguayStandardTime="UYT",a.UruguaySummerTime="UYST",a.UzbekistanTime="UZT",a.VanuatuTime="VUT",a.VenezuelaStandardTime="VET",a.VladivostokTime="VLAT",a.VolgogradTime="VOLT",a.VostokStationTime="VOST",a.WakeIslandTime="WAKT",a.WestAfricaSummerTime="WAST",a.WestAfricaTime="WAT",a.WestGreenlandSummerTime="WGST",a.WestGreenlandTime="WGT",a.WestKazakhstanTime="WKT",a.WesternEuropeanSummerTime="WEDT",a.WesternEuropeanTime="WET",a.WesternIndonesianTime="WIT",a.WesternStandardTime="WST",a.YakutskTime="YAKT",a.YekaterinburgTime="YEKT",a))(Lt||{});var zt=(a=>(a.Africa="Africa",a.Americas="Americas",a.Asia="Asia",a.Europe="Europe",a.Oceania="Oceania",a.Polar="Polar",a))(zt||{}),Rt=(a=>(a.CentralAmerica="Central America",a.EasternAsia="Eastern Asia",a.EasternEurope="Eastern Europe",a.EasternAfrica="Eastern Africa",a.MiddleAfrica="Middle Africa",a.MiddleEast="Middle East",a.NorthernAfrica="Northern Africa",a.NorthernAmerica="Northern America",a.NorthernEurope="Northern Europe",a.Polynesia="Polynesia",a.SouthAmerica="South America",a.SouthernAfrica="Southern Africa",a.SouthernAsia="Southern Asia",a.SouthernEurope="Southern Europe",a.WesternAfrica="Western Africa",a.WesternAsia="Western Asia",a.WesternEurope="Western Europe",a.WesternAustralia="Western Australia",a))(Rt||{});var Ot=(a=>(a.Business="business",a.Engineering="engineering",a.Exception="exception",a.LogMessage="log-message",a.Marketing="marketing",a.PageLeave="page-leave",a.PageView="page-view",a.Product="product",a.QualityManagement="quality-management",a.UserAccess="user-access",a.UserLogin="user-login",a.UserLogout="user-logout",a.UserSignup="user-signup",a.UserPreferencesChanged="user-preferences-changed",a.WebsiteVisit="website-visit",a))(Ot||{}),wt=(a=>(a.CloseTab="close-tab",a.ExternalLink="external-link",a.NavigateAway="navigate-away",a.Unknown="unknown",a))(wt||{}),qt=(a=>(a.CJS="cjs",a.ESM="esm",a.IIFE="iife",a.UMD="umd",a))(qt||{}),Gt=(a=>(a.ES5="es5",a.ES6="es6",a.ES2015="es2015",a.ES2016="es2016",a.ES2017="es2017",a.ES2018="es2018",a.ES2019="es2019",a.ES2020="es2020",a.ES2021="es2021",a.ES2022="es2022",a.ESNext="esnext",a.Latest="latest",a))(Gt||{}),xt=(a=>(a.ESBuild="esbuild",a.Vite="vite",a))(xt||{}),Kt=(a=>(a.Browser="browser",a.Node="node",a))(Kt||{}),Ht=(a=>(a.AccountBalance="AccountBalance",a.UserAssets="UserAssets",a.UserCreditCardDebt="UserCreditCardDebt",a.UserCreditLimit="UserCreditLimit",a.UserCreditUtilization="UserCreditUtilization",a.UserDebt="UserDebt",a.UserInvestments="UserInvestments",a.UserRetirement="UserRetirement",a.UserSavings="UserSavings",a))(Ht||{}),Vt=(a=>(a.DateTime="date_time",a.True="true",a.False="false",a.UniqueId="unique_id",a))(Vt||{}),Wt=(a=>(a.DomainModel="domain_entity",a.GenericModel="generic_entity",a))(Wt||{}),Zt=(a=>(a.AirportCode="airport-code",a.BankIDCode="bank-id-code",a.BitcoinAddress="bitcoin-address",a.Boolean="boolean",a.City="city",a.Color="color",a.CountryCode="country-code",a.CreditCard="credit-card",a.CurrencyAmount="currency-amount",a.CurrencyCode="currency-code",a.DataURI="data-uri",a.Date="date",a.DateRange="date-range",a.DateTime="date-time",a.DayOfMonth="day-of-month",a.DomainName="domain-name",a.EmailAddress="email-address",a.EthereumAddress="ethereum-address",a.EAN="european-article-number",a.EIN="employer-identification-number",a.Float="float",a.GeographicCoordinate="geographic-coordinate",a.GeographicCoordinates="geographic-coordinates",a.GitRepositoryURL="git-repository-url",a.HSLColor="hsl-color",a.HexColor="hex-color",a.Hexadecimal="hexadecimal",a.IBAN="international-bank-account-number",a.IMEI="international-mobile-equipment-identifier",a.IPAddress="ip-address",a.IPAddressRange="ip-address-range",a.ISBN="international-standard-book-number",a.ISIN="international-stock-number",a.ISMN="international-standard-music-number",a.ISSN="international-standard-serial-number",a.ISO8601="iso-8601",a.ISO31661Alpha2="iso-31661-alpha-2",a.ISO31661Alpha3="iso-31661-alpha-3",a.ISO4217="iso-4217",a.Image="image",a.Integer="integer",a.JSON="json",a.LanguageCode="language-code",a.LicensePlateNumber="license-plate-number",a.LongText="long-text",a.MD5="md5",a.Markdown="markdown",a.Menu="menu",a.Number="number",a.MACAddress="mac-address",a.MagnetURI="magnet-uri",a.MimeType="mime-type",a.Month="month",a.Password="password",a.PassportNumber="passport-number",a.Percent="percent",a.PhoneNumber="phone-number",a.Port="port",a.PostalCode="postal-code",a.Province="province",a.RFC3339="rfc-3339",a.RGBColor="rgb-color",a.SemanticVersion="semantic-version",a.SSN="social-security-number",a.State="state",a.StreetAddress="street-address",a.String="string",a.Tags="tags",a.TaxIDNumber="tax-id-number",a.Time="time",a.TimeOfDay="time-of-day",a.TimeRange="time-range",a.TimezoneRegion="timezone-region",a.URL="url",a.URLPath="url-path",a.UUID="uuid",a.VATIDNumber="value-added-tax-id-number",a.VerificationCode="verification-code",a.Video="video",a.Weekday="weekday",a.Year="year",a))(Zt||{}),jt=(a=>(a.BlueGreen="blue-green",a.Canary="canary",a.Rolling="rolling",a))(jt||{}),Yt=(a=>(a.Development="Development",a.NonProduction="NonProduction",a.Production="Production",a))(Yt||{}),Jt=(a=>(a.AWS="aws",a))(Jt||{}),$t=(a=>(a.Smallest="smallest",a.Small="small",a.Medium="medium",a.Large="large",a.Largest="largest",a))($t||{}),Qt=(a=>(a.Completed="completed",a.Started="started",a.Uncompleted="uncompleted",a))(Qt||{}),Xt=(a=>(a.Canceled="Canceled",a.Completed="Completed",a.Failed="Failed",a.Running="Running",a.Queued="Queued",a.Waiting="Waiting",a))(Xt||{}),au=(a=>(a.Canceled="Canceled",a.Completed="Completed",a.Failed="Failed",a.Running="Running",a.Queued="Queued",a.Waiting="Waiting",a))(au||{}),eu=(a=>(a.Desktop="desktop",a.Mobile="mobile",a.NodeJS="nodejs",a.TV="tv",a.Watch="watch",a.Web="web",a))(eu||{}),iu=(a=>(a.Low="low",a.Medium="medium",a.High="high",a.Emergency="emergency",a))(iu||{}),nu=(a=>(a.Bug="bug",a))(nu||{}),su=(a=>(a.DesktopApplication="desktop-application",a.MobileApplication="mobile-application",a.WebApplication="web-application",a.CLIApplication="cli-application",a.Library="library",a.WebService="web-service",a))(su||{}),tu=(a=>(a.Canceled="Canceled",a.Completed="Completed",a.Created="Created",a.Faulted="Faulted",a.Queued="Queued",a.Running="Running",a.Waiting="Waiting",a))(tu||{}),uu=(a=>(a.ForgotPassword="forgot_password",a.Index="index",a.Login="login",a.PageNotFound="404",a.Signup="signup",a.VerifyCode="verify_code",a))(uu||{}),ru=(a=>(a.Contains="contains",a.HasCharacterCount="has-character-count",a.HasNumberCount="has-number-count",a.HasLetterCount="has-letter-count",a.HasLowercaseCount="has-lowercase-count",a.HasSpacesCount="has-spaces-count",a.HasSymbolCount="has-symbol-count",a.HasUppercaseCount="has-uppercase-count",a.IsAfter="is-after",a.IsAfterOrEqual="is-after-or-equal",a.IsAirport="is-airport",a.IsAlpha="is-alpha",a.IsAlphanumeric="is-alphanumeric",a.IsAlgorithmHash="is-algorithm-hash",a.IsAscii="is-ascii",a.IsBase64="is-base-64",a.IsBefore="is-before",a.IsBeforeOrAfter="is-before-or-after",a.IsBeforeOrEqual="is-before-or-equal",a.IsBetween="is-between",a.IsBIC="is-bic",a.IsBitcoinAddress="is-bitcoin-address",a.IsBoolean="is-boolean",a.IsColor="is-color",a.IsComplexEnough="is-complex-enough",a.IsCountry="is-country",a.IsCreditCard="is-credit-card",a.IsCurrency="is-currency",a.IsDataURI="is-data-uri",a.IsDate="is-date",a.IsDateRange="is-date-range",a.IsDateTime="is-date-time",a.IsDayOfMonth="is-day-of-month",a.IsDecimal="is-decimal",a.IsDivisibleBy="is-divisible-by",a.IsDomainName="is-domain-name",a.IsEmailAddress="is-email-address",a.IsEthereumAddress="is-ethereum-address",a.IsEAN="is-ean",a.IsEIN="is-ein",a.IsEqual="is-equal",a.IsEvenNumber="is-even-number",a.IsFloat="is-float",a.IsIBAN="is-iban",a.IsGreaterThan="greater-than",a.IsGreaterThanOrEqual="greater-than-or-equal",a.IsHSLColor="is-hsl-color",a.IsHexColor="is-hex-color",a.IsHexadecimal="is-hexadecimal",a.IsIdentityCardCode="is-identity-card-code",a.IsIMEI="is-imei",a.IsInIPAddressRange="is-in-ip-address-range",a.IsInList="is-in-list",a.IsInTheLast="is-in-the-last",a.IsInteger="is-integer",a.IsIPAddress="is-ip-address",a.IsIPAddressRange="is-ip-address-range",a.IsISBN="is-isbn",a.IsISIN="is-isin",a.IsISMN="is-ismn",a.IsISRC="is-isrc",a.IsISSN="is-issn",a.IsISO4217="is-iso-4217",a.IsISO8601="is-iso-8601",a.IsISO31661Alpha2="is-iso-31661-alpha-2",a.IsISO31661Alpha3="is-iso-31661-alpha-3",a.IsJSON="is-json",a.IsLanguage="is-language",a.IsLatitude="is-latitude",a.IsLongitude="is-longitude",a.IsLengthEqual="is-length-equal",a.IsLengthGreaterThan="is-length-greater-than",a.IsLengthGreaterThanOrEqual="is-length-great-than-or-equal",a.IsLengthLessThan="is-length-less-than",a.IsLengthLessThanOrEqual="is-length-less-than-or-equal",a.IsLessThan="less-than",a.IsLessThanOrEqual="less-than-or-equal",a.IsLicensePlateNumber="is-license-plate-number",a.IsLowercase="is-lowercase",a.IsOctal="is-octal",a.IsMACAddress="is-mac-address",a.IsMD5="is-md5",a.IsMagnetURI="is-magnet-uri",a.IsMarkdown="is-markdown",a.IsMimeType="is-mime-type",a.IsMonth="is-month",a.IsNegativeNumber="is-negative-number",a.IsNotDate="is-not-date",a.IsNotEqual="is-not-equal",a.IsNotInIPAddressRange="is-not-in-ip-address-range",a.IsNotInList="is-not-in-list",a.IsNotNull="is-not-null",a.IsNotRegexMatch="is-not-regex-match",a.IsNotToday="is-not-today",a.IsNumber="is-number",a.IsNumeric="is-numeric",a.IsOddNumber="is-odd-number",a.IsPassportNumber="is-passport-number",a.IsPhoneNumber="is-phone-number",a.IsPort="is-port",a.IsPositiveNumber="is-positive-number",a.IsPostalCode="is-postal-code",a.IsProvince="is-province",a.IsRGBColor="is-rgb-color",a.IsRegexMatch="is-regex-match",a.IsRequired="is-required",a.IsSemanticVersion="is-semantic-version",a.IsSlug="is-slug",a.IsSSN="is-ssn",a.IsState="is-state",a.IsStreetAddress="is-street-address",a.IsString="is-string",a.IsStrongPassword="is-strong-password",a.IsTags="is-tags",a.IsTaxIDNumber="is-tax-id-number",a.IsThisMonth="is-this-month",a.IsThisQuarter="is-this-quarter",a.IsThisWeek="is-this-week",a.IsThisWeekend="is-this-weekend",a.IsThisYear="is-this-year",a.IsTime="is-time",a.IsTimeOfDay="is-time-of-day",a.IsTimeRange="is-time-range",a.IsToday="is-today",a.IsURL="is-url",a.IsUUID="is-uuid",a.IsUppercase="is-uppercase",a.IsUsernameAvailable="is-username-available",a.IsValidStreetAddress="is-valid-street-address",a.IsVATIDNumber="is-vat-id-number",a.IsWeekday="is-weekday",a.IsWeekend="is-weekend",a.IsYear="is-year",a))(ru||{}),ou=(a=>(a.IsAuthenticated="is-authenticated",a.IsNotAuthenticated="is-not-authenticated",a.IsUsernameAvailable="is-username-available",a.PasswordMismatch="password-mismatch",a))(ou||{}),lu=(a=>(a[a.IsHSLColor="is-hsl-color"]="IsHSLColor",a[a.IsHexColor="is-hex-color"]="IsHexColor",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsRGBColor="is-rgb-color"]="IsRGBColor",a[a.IsString="is-string"]="IsString",a))(lu||{}),mu=(a=>(a[a.IsAlgorithmHash="is-algorithm-hash"]="IsAlgorithmHash",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a))(mu||{}),du=(a=>(a[a.IsEqual="is-equal"]="IsEqual",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsSemanticVersion="is-semantic-version"]="IsSemanticVersion",a[a.IsString="is-string"]="IsString",a))(du||{}),cu=(a=>(a[a.IsEqual="is-equal"]="IsEqual",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a[a.IsUUID="is-uuid"]="IsUUID",a))(cu||{}),Au=(a=>(a[a.IsEqual="is-equal"]="IsEqual",a[a.IsInList="is-in-list"]="IsInList",a[a.IsMD5="is-md5"]="IsMD5",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a))(Au||{}),gu=(a=>(a[a.IsBoolean="is-boolean"]="IsBoolean",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a))(gu||{}),fu=(a=>(a[a.IsAfter="is-after"]="IsAfter",a[a.IsAfterOrEqual="is-after-or-equal"]="IsAfterOrEqual",a[a.IsBefore="is-before"]="IsBefore",a[a.IsBeforeOrEqual="is-before-or-equal"]="IsBeforeOrEqual",a[a.IsBetween="is-between"]="IsBetween",a[a.IsDate="is-date"]="IsDate",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsNotDate="is-not-date"]="IsNotDate",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsNotToday="is-not-today"]="IsNotToday",a[a.IsThisWeek="is-this-week"]="IsThisWeek",a[a.IsThisMonth="is-this-month"]="IsThisMonth",a[a.IsThisQuarter="is-this-quarter"]="IsThisQuarter",a[a.IsThisYear="is-this-year"]="IsThisYear",a[a.IsToday="is-today"]="IsToday",a[a.IsWeekend="is-weekend"]="IsWeekend",a))(fu||{}),hu=(a=>(a[a.IsAfter="is-after"]="IsAfter",a[a.IsBefore="is-before"]="IsBefore",a[a.IsBeforeOrAfter="is-before-or-after"]="IsBeforeOrAfter",a[a.IsBetween="is-between"]="IsBetween",a[a.IsDate="is-date"]="IsDate",a[a.IsDateRange="is-date-range"]="IsDateRange",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a))(hu||{}),Tu=(a=>(a[a.IsAfter="is-after"]="IsAfter",a[a.IsAfterOrEqual="is-after-or-equal"]="IsAfterOrEqual",a[a.IsBefore="is-before"]="IsBefore",a[a.IsBeforeOrEqual="is-before-or-equal"]="IsBeforeOrEqual",a[a.IsBetween="is-between"]="IsBetween",a[a.IsDate="is-date"]="IsDate",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsNotDate="is-not-date"]="IsNotDate",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsNotToday="is-not-today"]="IsNotToday",a[a.IsThisWeek="is-this-week"]="IsThisWeek",a[a.IsThisMonth="is-this-month"]="IsThisMonth",a[a.IsThisQuarter="is-this-quarter"]="IsThisQuarter",a[a.IsThisYear="is-this-year"]="IsThisYear",a[a.IsToday="is-today"]="IsToday",a[a.IsWeekend="is-weekend"]="IsWeekend",a))(Tu||{}),Cu=(a=>(a[a.IsAfter="is-after"]="IsAfter",a[a.IsAfterOrEqual="is-after-or-equal"]="IsAfterOrEqual",a[a.IsBefore="is-before"]="IsBefore",a[a.IsBeforeOrEqual="is-before-or-equal"]="IsBeforeOrEqual",a[a.IsBetween="is-between"]="IsBetween",a[a.IsDayOfMonth="is-day-of-month"]="IsDayOfMonth",a[a.IsEvenNumber="is-even-number"]="IsEvenNumber",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsGreaterThan="greater-than"]="IsGreaterThan",a[a.IsGreaterThanOrEqual="greater-than-or-equal"]="IsGreaterThanOrEqual",a[a.IsInteger="is-integer"]="IsInteger",a[a.IsLessThan="less-than"]="IsLessThan",a[a.IsLessThanOrEqual="less-than-or-equal"]="IsLessThanOrEqual",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsNumber="is-number"]="IsNumber",a[a.IsOddNumber="is-odd-number"]="IsOddNumber",a[a.IsToday="is-today"]="IsToday",a[a.IsWeekday="is-weekday"]="IsWeekday",a[a.IsWeekend="is-weekend"]="IsWeekend",a))(Cu||{}),Eu=(a=>(a[a.IsAfter="is-after"]="IsAfter",a[a.IsAfterOrEqual="is-after-or-equal"]="IsAfterOrEqual",a[a.IsBefore="is-before"]="IsBefore",a[a.IsBeforeOrEqual="is-before-or-equal"]="IsBeforeOrEqual",a[a.IsBetween="is-between"]="IsBetween",a[a.IsEvenNumber="is-even-number"]="IsEvenNumber",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsGreaterThan="greater-than"]="IsGreaterThan",a[a.IsGreaterThanOrEqual="greater-than-or-equal"]="IsGreaterThanOrEqual",a[a.IsInteger="is-integer"]="IsInteger",a[a.IsLessThan="less-than"]="IsLessThan",a[a.IsLessThanOrEqual="less-than-or-equal"]="IsLessThanOrEqual",a[a.IsMonth="is-month"]="IsMonth",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsNumber="is-number"]="IsNumber",a[a.IsOddNumber="is-odd-number"]="IsOddNumber",a[a.IsThisMonth="is-this-month"]="IsThisMonth",a))(Eu||{}),Iu=(a=>(a[a.IsAfter="is-after"]="IsAfter",a[a.IsAfterOrEqual="is-after-or-equal"]="IsAfterOrEqual",a[a.IsBefore="is-before"]="IsBefore",a[a.IsBeforeOrEqual="is-before-or-equal"]="IsBeforeOrEqual",a[a.IsBetween="is-between"]="IsBetween",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsTime="is-time"]="IsTime",a))(Iu||{}),Su=(a=>(a[a.IsAfter="is-after"]="IsAfter",a[a.IsBefore="is-before"]="IsBefore",a[a.IsBeforeOrAfter="is-before-or-after"]="IsBeforeOrAfter",a[a.IsBetween="is-between"]="IsBetween",a[a.IsTime="is-time"]="IsTime",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsTimeRange="is-time-range"]="IsTimeRange",a))(Su||{}),pu=(a=>(a[a.IsAfter="is-after"]="IsAfter",a[a.IsBefore="is-before"]="IsBefore",a[a.IsBeforeOrAfter="is-before-or-after"]="IsBeforeOrAfter",a[a.IsBetween="is-between"]="IsBetween",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsTimeOfDay="is-time-of-day"]="IsTimeOfDay",a[a.IsTimeRange="is-time-range"]="IsTimeRange",a))(pu||{}),yu=(a=>(a[a.IsAfter="is-after"]="IsAfter",a[a.IsAfterOrEqual="is-after-or-equal"]="IsAfterOrEqual",a[a.IsBefore="is-before"]="IsBefore",a[a.IsBeforeOrEqual="is-before-or-equal"]="IsBeforeOrEqual",a[a.IsBetween="is-between"]="IsBetween",a[a.IsEvenNumber="is-even-number"]="IsEvenNumber",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsGreaterThan="greater-than"]="IsGreaterThan",a[a.IsGreaterThanOrEqual="greater-than-or-equal"]="IsGreaterThanOrEqual",a[a.IsLessThan="less-than"]="IsLessThan",a[a.IsLessThanOrEqual="less-than-or-equal"]="IsLessThanOrEqual",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsNumber="is-number"]="IsNumber",a[a.IsOddNumber="is-odd-number"]="IsOddNumber",a[a.IsWeekday="is-weekday"]="IsWeekday",a[a.IsWeekend="is-weekend"]="IsWeekend",a))(yu||{}),bu=(a=>(a[a.IsAfter="is-after"]="IsAfter",a[a.IsAfterOrEqual="is-after-or-equal"]="IsAfterOrEqual",a[a.IsBefore="is-before"]="IsBefore",a[a.IsBeforeOrEqual="is-before-or-equal"]="IsBeforeOrEqual",a[a.IsBetween="is-between"]="IsBetween",a[a.IsEvenNumber="is-even-number"]="IsEvenNumber",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsGreaterThan="greater-than"]="IsGreaterThan",a[a.IsGreaterThanOrEqual="greater-than-or-equal"]="IsGreaterThanOrEqual",a[a.IsInteger="is-integer"]="IsInteger",a[a.IsLessThan="less-than"]="IsLessThan",a[a.IsLessThanOrEqual="less-than-or-equal"]="IsLessThanOrEqual",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsNumber="is-number"]="IsNumber",a[a.IsOddNumber="is-odd-number"]="IsOddNumber",a[a.IsThisYear="is-this-year"]="IsThisYear",a[a.IsYear="is-year"]="IsYear",a))(bu||{}),vu=(a=>(a[a.IsEqual="is-equal"]="IsEqual",a[a.IsHexadecimal="is-hexadecimal"]="IsHexadecimal",a[a.IsLengthEqual="is-length-equal"]="IsLengthEqual",a[a.IsLengthGreaterThan="is-length-greater-than"]="IsLengthGreaterThan",a[a.IsLengthGreaterThanOrEqual="is-length-great-than-or-equal"]="IsLengthGreaterThanOrEqual",a[a.IsLengthLessThan="is-length-less-than"]="IsLengthLessThan",a[a.IsLengthLessThanOrEqual="is-length-less-than-or-equal"]="IsLengthLessThanOrEqual",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a))(vu||{}),_u=(a=>(a[a.IsEqual="is-equal"]="IsEqual",a[a.IsJSON="is-json"]="IsJSON",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a))(_u||{}),Bu=(a=>(a[a.IsEqual="is-equal"]="IsEqual",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsMarkdown="is-markdown"]="IsMarkdown",a[a.IsString="is-string"]="IsString",a))(Bu||{}),Du=(a=>(a[a.IsBetween="is-between"]="IsBetween",a[a.IsCurrency="is-currency"]="IsCurrency",a[a.IsDecimal="is-decimal"]="IsDecimal",a[a.IsDivisibleBy="is-divisible-by"]="IsDivisibleBy",a[a.IsEvenNumber="is-even-number"]="IsEvenNumber",a[a.IsFloat="is-float"]="IsFloat",a[a.IsGreaterThan="greater-than"]="IsGreaterThan",a[a.IsGreaterThanOrEqual="greater-than-or-equal"]="IsGreaterThanOrEqual",a[a.IsInteger="is-integer"]="IsInteger",a[a.IsISO8601="is-iso-8601"]="IsISO8601",a[a.IsLessThan="less-than"]="IsLessThan",a[a.IsLessThanOrEqual="less-than-or-equal"]="IsLessThanOrEqual",a[a.IsNegativeNumber="is-negative-number"]="IsNegativeNumber",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsNumber="is-number"]="IsNumber",a[a.IsOddNumber="is-odd-number"]="IsOddNumber",a[a.IsPositiveNumber="is-positive-number"]="IsPositiveNumber",a))(Du||{}),Nu=(a=>(a[a.IsBitcoinAddress="is-bitcoin-address"]="IsBitcoinAddress",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a))(Nu||{}),ku=(a=>(a[a.IsEthereumAddress="is-ethereum-address"]="IsEthereumAddress",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a))(ku||{}),Fu=(a=>(a[a.IsEqual="is-equal"]="IsEqual",a[a.IsJSON="is-json"]="IsJSON",a[a.IsLanguage="is-language"]="IsLanguage",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a))(Fu||{}),Mu=(a=>(a[a.IsAlpha="is-alpha"]="IsAlpha",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a))(Mu||{}),Uu=(a=>(a[a.IsAlpha="is-alpha"]="IsAlpha",a[a.IsCountry="is-country"]="IsCountry",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a))(Uu||{}),Pu=(a=>(a[a.IsEqual="is-equal"]="IsEqual",a[a.IsFloat="is-float"]="IsFloat",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsNumeric="is-numeric"]="IsNumeric",a))(Pu||{}),Lu=(a=>(a[a.IsEqual="is-equal"]="IsEqual",a[a.IsFloat="is-float"]="IsFloat",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsNumeric="is-numeric"]="IsNumeric",a))(Lu||{}),zu=(a=>(a[a.IsEqual="is-equal"]="IsEqual",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsPostalCode="is-postal-code"]="IsPostalCode",a[a.IsNotNull="is-not-null"]="IsNotNull",a))(zu||{}),Ru=(a=>(a[a.IsAlpha="is-alpha"]="IsAlpha",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsProvince="is-province"]="IsProvince",a[a.IsString="is-string"]="IsString",a))(Ru||{}),Ou=(a=>(a[a.IsAlpha="is-alpha"]="IsAlpha",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsState="is-state"]="IsState",a[a.IsString="is-string"]="IsString",a))(Ou||{}),wu=(a=>(a[a.IsAlphanumeric="is-alphanumeric"]="IsAlphanumeric",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a[a.IsStreetAddress="is-street-address"]="IsStreetAddress",a))(wu||{}),qu=(a=>(a[a.Contains="contains"]="Contains",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a))(qu||{}),Gu=(a=>(a[a.Contains="contains"]="Contains",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a))(Gu||{}),xu=(a=>(a[a.Contains="contains"]="Contains",a[a.IsDataURI="is-data-uri"]="IsDataURI",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a))(xu||{}),Ku=(a=>(a[a.Contains="contains"]="Contains",a[a.IsDomainName="is-domain-name"]="IsDomainName",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a))(Ku||{}),Hu=(a=>(a[a.Contains="contains"]="Contains",a[a.IsEmailAddress="is-email-address"]="IsEmailAddress",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a))(Hu||{}),Vu=(a=>(a[a.Contains="contains"]="Contains",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsIPAddress="is-ip-address"]="IsIPAddress",a[a.IsInIPAddressRange="is-in-ip-address-range"]="IsInIPAddressRange",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotInIPAddressRange="is-not-in-ip-address-range"]="IsNotInIPAddressRange",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a))(Vu||{}),Wu=(a=>(a[a.IsEqual="is-equal"]="IsEqual",a[a.IsIPAddressRange="is-ip-address-range"]="IsIPAddressRange",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotInIPAddressRange="is-not-in-ip-address-range"]="IsNotInIPAddressRange",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a))(Wu||{}),Zu=(a=>(a[a.IsEqual="is-equal"]="IsEqual",a[a.IsGreaterThan="greater-than"]="IsGreaterThan",a[a.IsGreaterThanOrEqual="greater-than-or-equal"]="IsGreaterThanOrEqual",a[a.IsInteger="is-integer"]="IsInteger",a[a.IsLessThan="less-than"]="IsLessThan",a[a.IsLessThanOrEqual="less-than-or-equal"]="IsLessThanOrEqual",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a))(Zu||{}),ju=(a=>(a[a.Contains="contains"]="Contains",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsInList="is-in-list"]="IsInList",a[a.IsMACAddress="is-mac-address"]="IsMACAddress",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a))(ju||{}),Yu=(a=>(a[a.Contains="contains"]="Contains",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsInList="is-in-list"]="IsInList",a[a.IsMagnetURI="is-magnet-uri"]="IsMagnetURI",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a))(Yu||{}),Ju=(a=>(a[a.Contains="contains"]="Contains",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsInList="is-in-list"]="IsInList",a[a.IsMimeType="is-mime-type"]="IsMimeType",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a))(Ju||{}),$u=(a=>(a[a.Contains="contains"]="Contains",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a[a.IsSlug="is-slug"]="IsSlug",a))($u||{}),Qu=(a=>(a[a.Contains="contains"]="Contains",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a[a.IsURL="is-url"]="IsURL",a))(Qu||{}),Xu=(a=>(a[a.IsAfter="is-after"]="IsAfter",a[a.IsAfterOrEqual="is-after-or-equal"]="IsAfterOrEqual",a[a.IsBefore="is-before"]="IsBefore",a[a.IsBeforeOrEqual="is-before-or-equal"]="IsBeforeOrEqual",a[a.IsBetween="is-between"]="IsBetween",a[a.IsDecimal="is-decimal"]="IsDecimal",a[a.IsDivisibleBy="is-divisible-by"]="IsDivisibleBy",a[a.IsEAN="is-ean"]="IsEAN",a[a.IsEIN="is-ein"]="IsEIN",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsEvenNumber="is-even-number"]="IsEvenNumber",a[a.IsFloat="is-float"]="IsFloat",a[a.IsGreaterThan="greater-than"]="IsGreaterThan",a[a.IsGreaterThanOrEqual="greater-than-or-equal"]="IsGreaterThanOrEqual",a[a.IsInt="is-integer"]="IsInt",a[a.IsISBN="is-isbn"]="IsISBN",a[a.IsISMN="is-ismn"]="IsISMN",a[a.IsISSN="is-issn"]="IsISSN",a[a.IsLatitude="is-latitude"]="IsLatitude",a[a.IsLongitude="is-longitude"]="IsLongitude",a[a.IsLessThan="less-than"]="IsLessThan",a[a.IsLessThanOrEqual="less-than-or-equal"]="IsLessThanOrEqual",a[a.IsMACAddress="is-mac-address"]="IsMACAddress",a[a.IsNumber="is-number"]="IsNumber",a[a.IsNegativeNumber="is-negative-number"]="IsNegativeNumber",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsOddNumber="is-odd-number"]="IsOddNumber",a[a.IsPassportNumber="is-passport-number"]="IsPassportNumber",a[a.IsPhoneNumber="is-phone-number"]="IsPhoneNumber",a[a.IsPort="is-port"]="IsPort",a[a.IsPositiveNumber="is-positive-number"]="IsPositiveNumber",a[a.IsPostalCode="is-postal-code"]="IsPostalCode",a[a.IsSemanticVersion="is-semantic-version"]="IsSemanticVersion",a[a.IsSSN="is-ssn"]="IsSSN",a[a.IsTaxIDNumber="is-tax-id-number"]="IsTaxIDNumber",a[a.IsUUID="is-uuid"]="IsUUID",a[a.IsVATIDNumber="is-vat-id-number"]="IsVATIDNumber",a))(Xu||{}),ar=(a=>(a[a.IsEqual="is-equal"]="IsEqual",a[a.IsFloat="is-float"]="IsFloat",a[a.IsGreaterThan="greater-than"]="IsGreaterThan",a[a.IsGreaterThanOrEqual="greater-than-or-equal"]="IsGreaterThanOrEqual",a[a.IsLessThan="less-than"]="IsLessThan",a[a.IsLessThanOrEqual="less-than-or-equal"]="IsLessThanOrEqual",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsNumber="is-number"]="IsNumber",a[a.IsNumeric="is-numeric"]="IsNumeric",a))(ar||{}),er=(a=>(a[a.IsEqual="is-equal"]="IsEqual",a[a.IsInteger="is-integer"]="IsInteger",a[a.IsGreaterThan="greater-than"]="IsGreaterThan",a[a.IsGreaterThanOrEqual="greater-than-or-equal"]="IsGreaterThanOrEqual",a[a.IsLessThan="less-than"]="IsLessThan",a[a.IsLessThanOrEqual="less-than-or-equal"]="IsLessThanOrEqual",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsNumber="is-number"]="IsNumber",a[a.IsNumeric="is-numeric"]="IsNumeric",a))(er||{}),ir=(a=>(a[a.IsCreditCard="is-credit-card"]="IsCreditCard",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsLengthEqual="is-length-equal"]="IsLengthEqual",a[a.IsLengthGreaterThan="is-length-greater-than"]="IsLengthGreaterThan",a[a.IsLengthGreaterThanOrEqual="is-length-great-than-or-equal"]="IsLengthGreaterThanOrEqual",a[a.IsLengthLessThan="is-length-less-than"]="IsLengthLessThan",a[a.IsLengthLessThanOrEqual="is-length-less-than-or-equal"]="IsLengthLessThanOrEqual",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsRegexMatch="is-regex-match"]="IsRegexMatch",a[a.IsNotRegexMatch="is-not-regex-match"]="IsNotRegexMatch",a))(ir||{}),nr=(a=>(a[a.isEmailAddress="is-email-address"]="isEmailAddress",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsInList="is-in-list"]="IsInList",a[a.IsLengthEqual="is-length-equal"]="IsLengthEqual",a[a.IsLengthGreaterThan="is-length-greater-than"]="IsLengthGreaterThan",a[a.IsLengthGreaterThanOrEqual="is-length-great-than-or-equal"]="IsLengthGreaterThanOrEqual",a[a.IsLengthLessThan="is-length-less-than"]="IsLengthLessThan",a[a.IsLengthLessThanOrEqual="is-length-less-than-or-equal"]="IsLengthLessThanOrEqual",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsRegexMatch="is-regex-match"]="IsRegexMatch",a[a.IsNotRegexMatch="is-not-regex-match"]="IsNotRegexMatch",a))(nr||{}),sr=(a=>(a[a.IsLicensePlateNumber="is-license-plate-number"]="IsLicensePlateNumber",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsNotRegexMatch="is-not-regex-match"]="IsNotRegexMatch",a[a.IsString="is-string"]="IsString",a[a.IsRegexMatch="is-regex-match"]="IsRegexMatch",a))(sr||{}),tr=(a=>(a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsPassportNumber="is-passport-number"]="IsPassportNumber",a[a.IsString="is-string"]="IsString",a[a.IsRegexMatch="is-regex-match"]="IsRegexMatch",a))(tr||{}),ur=(a=>(a[a.IsComplexEnough="is-complex-enough"]="IsComplexEnough",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsNotRegexMatch="is-not-regex-match"]="IsNotRegexMatch",a[a.IsLengthGreaterThan="is-length-greater-than"]="IsLengthGreaterThan",a[a.IsLengthGreaterThanOrEqual="is-length-great-than-or-equal"]="IsLengthGreaterThanOrEqual",a[a.IsLengthLessThan="is-length-less-than"]="IsLengthLessThan",a[a.IsLengthLessThanOrEqual="is-length-less-than-or-equal"]="IsLengthLessThanOrEqual",a[a.IsStrongPassword="is-strong-password"]="IsStrongPassword",a[a.IsString="is-string"]="IsString",a[a.IsRegexMatch="is-regex-match"]="IsRegexMatch",a))(ur||{}),rr=(a=>(a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsNotRegexMatch="is-not-regex-match"]="IsNotRegexMatch",a[a.IsNumber="is-number"]="IsNumber",a[a.IsPhoneNumber="is-phone-number"]="IsPhoneNumber",a[a.IsRegexMatch="is-regex-match"]="IsRegexMatch",a))(rr||{}),or=(a=>(a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsSSN="is-ssn"]="IsSSN",a[a.IsString="is-string"]="IsString",a[a.IsRegexMatch="is-regex-match"]="IsRegexMatch",a))(or||{}),lr=(a=>(a[a.IsAirport="is-airport"]="IsAirport",a[a.IsAlpha="is-alpha"]="IsAlpha",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a))(lr||{}),mr=(a=>(a[a.Contains="contains"]="Contains",a[a.IsBIC="is-bic"]="IsBIC",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a))(mr||{}),dr=(a=>(a[a.Contains="contains"]="Contains",a[a.IsEAN="is-ean"]="IsEAN",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a))(dr||{}),cr=(a=>(a[a.Contains="contains"]="Contains",a[a.IsEIN="is-ein"]="IsEIN",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a))(cr||{}),Ar=(a=>(a[a.Contains="contains"]="Contains",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsIBAN="is-iban"]="IsIBAN",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a))(Ar||{}),gr=(a=>(a[a.Contains="contains"]="Contains",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsISBN="is-isbn"]="IsISBN",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a))(gr||{}),fr=(a=>(a[a.Contains="contains"]="Contains",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsISIN="is-isin"]="IsISIN",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a))(fr||{}),hr=(a=>(a[a.Contains="contains"]="Contains",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsISMN="is-ismn"]="IsISMN",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a))(hr||{}),Tr=(a=>(a[a.Contains="contains"]="Contains",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsISSN="is-issn"]="IsISSN",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a))(Tr||{}),Cr=(a=>(a[a.Contains="contains"]="Contains",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a[a.IsTaxIDNumber="is-tax-id-number"]="IsTaxIDNumber",a))(Cr||{}),Er=(a=>(a[a.Contains="contains"]="Contains",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsInList="is-in-list"]="IsInList",a[a.IsNotEqual="is-not-equal"]="IsNotEqual",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsString="is-string"]="IsString",a[a.IsVATIDNumber="is-vat-id-number"]="IsVATIDNumber",a))(Er||{}),Ir=(a=>(a[a.Contains="contains"]="Contains",a[a.HasNumberCount="has-number-count"]="HasNumberCount",a[a.HasLowercaseCount="has-lowercase-count"]="HasLowercaseCount",a[a.HasLetterCount="has-letter-count"]="HasLetterCount",a[a.HasSpacesCount="has-spaces-count"]="HasSpacesCount",a[a.HasSymbolCount="has-symbol-count"]="HasSymbolCount",a[a.HasUppercaseCount="has-uppercase-count"]="HasUppercaseCount",a[a.IsAlpha="is-alpha"]="IsAlpha",a[a.IsAlphanumeric="is-alphanumeric"]="IsAlphanumeric",a[a.IsAscii="is-ascii"]="IsAscii",a[a.IsBase64="is-base-64"]="IsBase64",a[a.IsColor="is-color"]="IsColor",a[a.IsComplexEnough="is-complex-enough"]="IsComplexEnough",a[a.IsCreditCard="is-credit-card"]="IsCreditCard",a[a.IsDataURI="is-data-uri"]="IsDataURI",a[a.IsDomainName="is-domain-name"]="IsDomainName",a[a.IsEmailAddress="is-email-address"]="IsEmailAddress",a[a.IsEthereumAddress="is-ethereum-address"]="IsEthereumAddress",a[a.IsEAN="is-ean"]="IsEAN",a[a.IsEIN="is-ein"]="IsEIN",a[a.IsEqual="is-equal"]="IsEqual",a[a.IsIBAN="is-iban"]="IsIBAN",a[a.IsHSLColor="is-hsl-color"]="IsHSLColor",a[a.IsHexColor="is-hex-color"]="IsHexColor",a[a.IsHexadecimal="is-hexadecimal"]="IsHexadecimal",a[a.IsIdentityCardCode="is-identity-card-code"]="IsIdentityCardCode",a[a.IsIMEI="is-imei"]="IsIMEI",a[a.IsInList="is-in-list"]="IsInList",a[a.IsIPAddress="is-ip-address"]="IsIPAddress",a[a.IsInIPAddressRange="is-in-ip-address-range"]="IsInIPAddressRange",a[a.IsISBN="is-isbn"]="IsISBN",a[a.IsISIN="is-isin"]="IsISIN",a[a.IsISMN="is-ismn"]="IsISMN",a[a.IsISRC="is-isrc"]="IsISRC",a[a.IsISSN="is-issn"]="IsISSN",a[a.IsLanguage="is-language"]="IsLanguage",a[a.IsLatitude="is-latitude"]="IsLatitude",a[a.IsLongitude="is-longitude"]="IsLongitude",a[a.IsLengthEqual="is-length-equal"]="IsLengthEqual",a[a.IsLengthGreaterThan="is-length-greater-than"]="IsLengthGreaterThan",a[a.IsLengthGreaterThanOrEqual="is-length-great-than-or-equal"]="IsLengthGreaterThanOrEqual",a[a.IsLengthLessThan="is-length-less-than"]="IsLengthLessThan",a[a.IsLengthLessThanOrEqual="is-length-less-than-or-equal"]="IsLengthLessThanOrEqual",a[a.IsLicensePlateNumber="is-license-plate-number"]="IsLicensePlateNumber",a[a.IsLowercase="is-lowercase"]="IsLowercase",a[a.IsOctal="is-octal"]="IsOctal",a[a.IsMACAddress="is-mac-address"]="IsMACAddress",a[a.IsMD5="is-md5"]="IsMD5",a[a.IsMagnetURI="is-magnet-uri"]="IsMagnetURI",a[a.IsMarkdown="is-markdown"]="IsMarkdown",a[a.IsMimeType="is-mime-type"]="IsMimeType",a[a.IsMonth="is-month"]="IsMonth",a[a.IsNotInIPAddressRange="is-not-in-ip-address-range"]="IsNotInIPAddressRange",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNotNull="is-not-null"]="IsNotNull",a[a.IsNotRegexMatch="is-not-regex-match"]="IsNotRegexMatch",a[a.IsNumber="is-number"]="IsNumber",a[a.IsNumeric="is-numeric"]="IsNumeric",a[a.IsPassportNumber="is-passport-number"]="IsPassportNumber",a[a.IsPhoneNumber="is-phone-number"]="IsPhoneNumber",a[a.IsPort="is-port"]="IsPort",a[a.IsPostalCode="is-postal-code"]="IsPostalCode",a[a.IsProvince="is-province"]="IsProvince",a[a.IsRegexMatch="is-regex-match"]="IsRegexMatch",a[a.IsSemanticVersion="is-semantic-version"]="IsSemanticVersion",a[a.IsSlug="is-slug"]="IsSlug",a[a.IsSSN="is-ssn"]="IsSSN",a[a.IsState="is-state"]="IsState",a[a.IsStreetAddress="is-street-address"]="IsStreetAddress",a[a.IsString="is-string"]="IsString",a[a.IsTaxIDNumber="is-tax-id-number"]="IsTaxIDNumber",a[a.IsURL="is-url"]="IsURL",a[a.IsUUID="is-uuid"]="IsUUID",a[a.IsUppercase="is-uppercase"]="IsUppercase",a[a.IsVATIDNumber="is-vat-id-number"]="IsVATIDNumber",a[a.IsWeekday="is-weekday"]="IsWeekday",a[a.IsWeekend="is-weekend"]="IsWeekend",a[a.IsYear="is-year"]="IsYear",a))(Ir||{}),Sr=(a=>(a[a.Contains="contains"]="Contains",a[a.IsAlpha="is-alpha"]="IsAlpha",a[a.IsAlphanumeric="is-alphanumeric"]="IsAlphanumeric",a[a.IsInList="is-in-list"]="IsInList",a[a.IsMarkdown="is-markdown"]="IsMarkdown",a[a.IsNotInList="is-not-in-list"]="IsNotInList",a[a.IsNumeric="is-numeric"]="IsNumeric",a[a.IsLowercase="is-lowercase"]="IsLowercase",a[a.IsString="is-string"]="IsString",a[a.IsUppercase="is-uppercase"]="IsUppercase",a))(Sr||{}),pr=(a=>(a[a.Allowed=0]="Allowed",a[a.Blocked=1]="Blocked",a))(pr||{}),yr=(a=>(a.InvalidCharacters="invalid-characters",a.InvalidPattern="invalid-pattern",a.NotComplexEnough="not-complex-enough",a.NotUnique="not-unique",a.NotValidEmail="not-valid-email",a.TooLong="too-long",a.TooShort="too-short",a.Required="required",a))(yr||{}),br=(a=>(a.Archived="ARCHIVED",a.Compromised="COMPROMISED",a.Confirmed="CONFIRMED",a.ForcePasswordChange="FORCE_CHANGE_PASSWORD",a.ResetRequired="RESET_REQUIRED",a.Unconfirmed="UNCONFIRMED",a.Unknown="UNKNOWN",a))(br||{}),vr=(a=>(a.Owner="Owner",a.Admin="Admin",a.User="User",a.Visitor="Visitor",a))(vr||{});var Zi=(a=0)=>e=>`\x1B[${e+a}m`,ji=(a=0)=>e=>`\x1B[${38+a};5;${e}m`,Yi=(a=0)=>(e,i,n)=>`\x1B[${38+a};2;${e};${i};${n}m`;function _r(){let a=new Map,e={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],overline:[53,55],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};e.color.gray=e.color.blackBright,e.bgColor.bgGray=e.bgColor.bgBlackBright,e.color.grey=e.color.blackBright,e.bgColor.bgGrey=e.bgColor.bgBlackBright;for(let[i,n]of Object.entries(e)){for(let[s,t]of Object.entries(n))e[s]={open:`\x1B[${t[0]}m`,close:`\x1B[${t[1]}m`},n[s]=e[s],a.set(t[0],t[1]);Object.defineProperty(e,i,{value:n,enumerable:!1});}return Object.defineProperty(e,"codes",{value:a,enumerable:!1}),e.color.close="\x1B[39m",e.bgColor.close="\x1B[49m",e.color.ansi=Zi(),e.color.ansi256=ji(),e.color.ansi16m=Yi(),e.bgColor.ansi=Zi(10),e.bgColor.ansi256=ji(10),e.bgColor.ansi16m=Yi(10),Object.defineProperties(e,{rgbToAnsi256:{value:(i,n,s)=>i===n&&n===s?i<8?16:i>248?231:Math.round((i-8)/247*24)+232:16+36*Math.round(i/255*5)+6*Math.round(n/255*5)+Math.round(s/255*5),enumerable:!1},hexToRgb:{value:i=>{let n=/(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(i.toString(16));if(!n)return [0,0,0];let{colorString:s}=n.groups;s.length===3&&(s=[...s].map(u=>u+u).join(""));let t=Number.parseInt(s,16);return [t>>16&255,t>>8&255,t&255]},enumerable:!1},hexToAnsi256:{value:i=>e.rgbToAnsi256(...e.hexToRgb(i)),enumerable:!1},ansi256ToAnsi:{value:i=>{if(i<8)return 30+i;if(i<16)return 90+(i-8);let n,s,t;if(i>=232)n=((i-232)*10+8)/255,s=n,t=n;else {i-=16;let o=i%36;n=Math.floor(i/36)/5,s=Math.floor(o/6)/5,t=o%6/5;}let u=Math.max(n,s,t)*2;if(u===0)return 30;let r=30+(Math.round(t)<<2|Math.round(s)<<1|Math.round(n));return u===2&&(r+=60),r},enumerable:!1},rgbToAnsi:{value:(i,n,s)=>e.ansi256ToAnsi(e.rgbToAnsi256(i,n,s)),enumerable:!1},hexToAnsi:{value:i=>e.ansi256ToAnsi(e.hexToAnsi256(i)),enumerable:!1}}),e}var Br=_r(),q=Br;function L(a,e=un.argv){let i=a.startsWith("-")?"":a.length===1?"-":"--",n=e.indexOf(i+a),s=e.indexOf("--");return n!==-1&&(s===-1||n<s)}var{env:b}=un,wa;L("no-color")||L("no-colors")||L("color=false")||L("color=never")?wa=0:(L("color")||L("colors")||L("color=true")||L("color=always"))&&(wa=1);function Nr(){if("FORCE_COLOR"in b)return b.FORCE_COLOR==="true"?1:b.FORCE_COLOR==="false"?0:b.FORCE_COLOR.length===0?1:Math.min(Number.parseInt(b.FORCE_COLOR,10),3)}function kr(a){return a===0?!1:{level:a,hasBasic:!0,has256:a>=2,has16m:a>=3}}function Fr(a,{streamIsTTY:e,sniffFlags:i=!0}={}){let n=Nr();n!==void 0&&(wa=n);let s=i?wa:n;if(s===0)return 0;if(i){if(L("color=16m")||L("color=full")||L("color=truecolor"))return 3;if(L("color=256"))return 2}if(a&&!e&&s===void 0)return 0;let t=s||0;if(b.TERM==="dumb")return t;if(un.platform==="win32"){let u=un.release().split(".");return Number(u[0])>=10&&Number(u[2])>=10586?Number(u[2])>=14931?3:2:1}if("CI"in b)return ["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI","GITHUB_ACTIONS","BUILDKITE","DRONE"].some(u=>u in b)||b.CI_NAME==="codeship"?1:t;if("TEAMCITY_VERSION"in b)return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(b.TEAMCITY_VERSION)?1:0;if("TF_BUILD"in b&&"AGENT_NAME"in b)return 1;if(b.COLORTERM==="truecolor")return 3;if("TERM_PROGRAM"in b){let u=Number.parseInt((b.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(b.TERM_PROGRAM){case"iTerm.app":return u>=3?3:2;case"Apple_Terminal":return 2}}return /-256(color)?$/i.test(b.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(b.TERM)||"COLORTERM"in b?1:t}function $i(a,e={}){let i=Fr(a,{streamIsTTY:a&&a.isTTY,...e});return kr(i)}var Mr={stdout:$i({isTTY:un.isatty(1)}),stderr:$i({isTTY:un.isatty(2)})},Qi=Mr;function Xi(a,e,i){let n=a.indexOf(e);if(n===-1)return a;let s=e.length,t=0,u="";do u+=a.substr(t,n-t)+e+i,t=n+s,n=a.indexOf(e,t);while(n!==-1);return u+=a.slice(t),u}function an(a,e,i,n){let s=0,t="";do{let u=a[n-1]==="\r";t+=a.substr(s,(u?n-1:n)-s)+e+(u?`\r
`:`
`)+i,s=n+1,n=a.indexOf(`
`,s);}while(n!==-1);return t+=a.slice(s),t}var{stdout:en,stderr:nn}=Qi,Ee=Symbol("GENERATOR"),ma=Symbol("STYLER"),Sa=Symbol("IS_EMPTY"),sn=["ansi","ansi","ansi256","ansi16m"],da=Object.create(null),Ur=(a,e={})=>{if(e.level&&!(Number.isInteger(e.level)&&e.level>=0&&e.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");let i=en?en.level:0;a.level=e.level===void 0?i:e.level;};var Pr=a=>{let e=(...i)=>i.join(" ");return Ur(e,a),Object.setPrototypeOf(e,pa.prototype),e};function pa(a){return Pr(a)}Object.setPrototypeOf(pa.prototype,Function.prototype);for(let[a,e]of Object.entries(q))da[a]={get(){let i=qa(this,Se(e.open,e.close,this[ma]),this[Sa]);return Object.defineProperty(this,a,{value:i}),i}};da.visible={get(){let a=qa(this,this[ma],!0);return Object.defineProperty(this,"visible",{value:a}),a}};var Ie=(a,e,i,...n)=>a==="rgb"?e==="ansi16m"?q[i].ansi16m(...n):e==="ansi256"?q[i].ansi256(q.rgbToAnsi256(...n)):q[i].ansi(q.rgbToAnsi(...n)):a==="hex"?Ie("rgb",e,i,...q.hexToRgb(...n)):q[i][a](...n),Lr=["rgb","hex","ansi256"];for(let a of Lr){da[a]={get(){let{level:i}=this;return function(...n){let s=Se(Ie(a,sn[i],"color",...n),q.color.close,this[ma]);return qa(this,s,this[Sa])}}};let e="bg"+a[0].toUpperCase()+a.slice(1);da[e]={get(){let{level:i}=this;return function(...n){let s=Se(Ie(a,sn[i],"bgColor",...n),q.bgColor.close,this[ma]);return qa(this,s,this[Sa])}}};}var zr=Object.defineProperties(()=>{},{...da,level:{enumerable:!0,get(){return this[Ee].level},set(a){this[Ee].level=a;}}}),Se=(a,e,i)=>{let n,s;return i===void 0?(n=a,s=e):(n=i.openAll+a,s=e+i.closeAll),{open:a,close:e,openAll:n,closeAll:s,parent:i}},qa=(a,e,i)=>{let n=(...s)=>Rr(n,s.length===1?""+s[0]:s.join(" "));return Object.setPrototypeOf(n,zr),n[Ee]=a,n[ma]=e,n[Sa]=i,n},Rr=(a,e)=>{if(a.level<=0||!e)return a[Sa]?"":e;let i=a[ma];if(i===void 0)return e;let{openAll:n,closeAll:s}=i;if(e.includes("\x1B"))for(;i!==void 0;)e=Xi(e,i.close,i.open),i=i.parent;let t=e.indexOf(`
`);return t!==-1&&(e=an(e,s,n,t)),n+e+s};Object.defineProperties(pa.prototype,da);var Or=pa();pa({level:nn?nn.level:0});var B=Or;var on=ve(he(),1);var tn="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";var wr=128,ia,ca,qr=a=>{!ia||ia.length<a?(ia=Buffer.allocUnsafe(a*wr),un.randomFillSync(ia),ca=0):ca+a>ia.length&&(un.randomFillSync(ia),ca=0),ca+=a;};var rn=(a=21)=>{qr(a-=0);let e="";for(let i=ca-a;i<ca;i++)e+=tn[ia[i]&63];return e};var pe=class{level;environment;constructor(e){this.environment=e?.environment,this.level=e?.level??Te.Info;}analytics(e){let i={...e,...this.getCommonProps()};return console.info(i),i}critical({cause:e,id:i,message:n,...s}){let t=this.getCommonProps(),u={...t,...s,message:`[${B.blue(t.created)}]
      ${i}:${n} 
      ${B.bgRed.white(e)}`};return console.error(u.message),u}debug({data:e,message:i,...n}){let s=this.getCommonProps(),t={...s,...n,message:`[${B.blue(s.created)}]
      ${i} 
      ${B.white(e)}`,...this.getCommonProps()};return console.debug(t.message),t}exception({message:e,cause:i,id:n,...s}){let t=this.getCommonProps(),u={...t,...s,message:`[${B.blue(t.created)}]
      ${n}:${e} 
      ${B.red(i)}`};return console.error(u.message),u}http({request:e,response:i,...n}){let{method:s,resource:t,details:u}=e??{},{status:r,details:o}=i??{},l=this.getCommonProps(),A=B.hex("#00ccff")(`[${l.created}]`),T=B.bold.hex("#ffcc00")(`<${u?.id??"?"}>`),S=r?.code===200?B.hex("#2ECC40")(`${s?.toUpperCase()} ${r?.code}`):B.hex("#FF4136")(`${s?.toUpperCase()} ${r?.code}`),d=B.grey(`${o?.duration}ms`),I={...l,...n,message:`${A} ${T} ${S} ${t} ${d}`.replace(/\n\s+/g,"")};return console.info(I.message),I}info(e){let i=this.getCommonProps(),n={...i,message:`[${B.blue(i.created)}] ${e}`};return console.info(n.message),n}warning({cause:e,id:i,message:n,...s}){let t=this.getCommonProps(),u={...t,...s,message:`[${B.blue(t.created)}]
      ${i}:${n} 
      ${B.yellow(e)}`};return console.warn(u),u}getCommonProps(){return {created:on.DateTime.now().toFormat("yyyy-MM-dd HH:mm:ss"),environment:this.environment?.id,id:rn(),level:this.level}}};

var LogLevel = /* @__PURE__ */ ((LogLevel2) => {
  LogLevel2["Analytics"] = "analytics";
  LogLevel2["Critical"] = "critical";
  LogLevel2["Debug"] = "debug";
  LogLevel2["Exception"] = "exception";
  LogLevel2["Http"] = "http";
  LogLevel2["Info"] = "info";
  LogLevel2["Warning"] = "warning";
  return LogLevel2;
})(LogLevel || {});

var CountryCode = /* @__PURE__ */ ((CountryCode2) => {
  CountryCode2["Afghanistan"] = "AF";
  CountryCode2["Albania"] = "AL";
  CountryCode2["Algeria"] = "DZ";
  CountryCode2["AmericanSamoa"] = "AS";
  CountryCode2["Andorra"] = "AD";
  CountryCode2["Angola"] = "AO";
  CountryCode2["Anguilla"] = "AI";
  CountryCode2["Antarctica"] = "AQ";
  CountryCode2["AntiguaAndBarbuda"] = "AG";
  CountryCode2["Argentina"] = "AR";
  CountryCode2["Armenia"] = "AM";
  CountryCode2["Aruba"] = "AW";
  CountryCode2["Australia"] = "AU";
  CountryCode2["Austria"] = "AT";
  CountryCode2["Azerbaijan"] = "AZ";
  CountryCode2["Bahamas"] = "BS";
  CountryCode2["Bahrain"] = "BH";
  CountryCode2["Bangladesh"] = "BD";
  CountryCode2["Barbados"] = "BB";
  CountryCode2["Belarus"] = "BY";
  CountryCode2["Belgium"] = "BE";
  CountryCode2["Belize"] = "BZ";
  CountryCode2["Benin"] = "BJ";
  CountryCode2["Bermuda"] = "BM";
  CountryCode2["Bhutan"] = "BT";
  CountryCode2["Bolivia"] = "BO";
  CountryCode2["BosniaAndHerzegovina"] = "BA";
  CountryCode2["Botswana"] = "BW";
  CountryCode2["BouvetIsland"] = "BV";
  CountryCode2["Brazil"] = "BR";
  CountryCode2["BritishIndianOceanTerritory"] = "IO";
  CountryCode2["Brunei"] = "BN";
  CountryCode2["Bulgaria"] = "BG";
  CountryCode2["BurkinaFaso"] = "BF";
  CountryCode2["Burundi"] = "BI";
  CountryCode2["Cambodia"] = "KH";
  CountryCode2["Cameroon"] = "CM";
  CountryCode2["Canada"] = "CA";
  CountryCode2["CapeVerde"] = "CV";
  CountryCode2["CaymanIslands"] = "KY";
  CountryCode2["CentralAfricanRepublic"] = "CF";
  CountryCode2["Chad"] = "TD";
  CountryCode2["Chile"] = "CL";
  CountryCode2["China"] = "CN";
  CountryCode2["ChristmasIsland"] = "CX";
  CountryCode2["CocosKeelingIslands"] = "CC";
  CountryCode2["Colombia"] = "CO";
  CountryCode2["Comoros"] = "KM";
  CountryCode2["Congo"] = "CG";
  CountryCode2["CongoTheDemocraticRepublicOfThe"] = "CD";
  CountryCode2["CookIslands"] = "CK";
  CountryCode2["CostaRica"] = "CR";
  CountryCode2["CoteDIvoire"] = "CI";
  CountryCode2["Croatia"] = "HR";
  CountryCode2["Cuba"] = "CU";
  CountryCode2["Cyprus"] = "CY";
  CountryCode2["CzechRepublic"] = "CZ";
  CountryCode2["Denmark"] = "DK";
  CountryCode2["Djibouti"] = "DJ";
  CountryCode2["Dominica"] = "DM";
  CountryCode2["DominicanRepublic"] = "DO";
  CountryCode2["Ecuador"] = "EC";
  CountryCode2["Egypt"] = "EG";
  CountryCode2["ElSalvador"] = "SV";
  CountryCode2["EquatorialGuinea"] = "GQ";
  CountryCode2["Eritrea"] = "ER";
  CountryCode2["Estonia"] = "EE";
  CountryCode2["Ethiopia"] = "ET";
  CountryCode2["FalklandIslands"] = "FK";
  CountryCode2["FaroeIslands"] = "FO";
  CountryCode2["Fiji"] = "FJ";
  CountryCode2["Finland"] = "FI";
  CountryCode2["France"] = "FR";
  CountryCode2["FrenchGuiana"] = "GF";
  CountryCode2["FrenchPolynesia"] = "PF";
  CountryCode2["FrenchSouthernTerritories"] = "TF";
  CountryCode2["Gabon"] = "GA";
  CountryCode2["Gambia"] = "GM";
  CountryCode2["Georgia"] = "GE";
  CountryCode2["Germany"] = "DE";
  CountryCode2["Ghana"] = "GH";
  CountryCode2["Gibraltar"] = "GI";
  CountryCode2["Greece"] = "GR";
  CountryCode2["Greenland"] = "GL";
  CountryCode2["Grenada"] = "GD";
  CountryCode2["Guadeloupe"] = "GP";
  CountryCode2["Guam"] = "GU";
  CountryCode2["Guatemala"] = "GT";
  CountryCode2["Guernsey"] = "GG";
  CountryCode2["Guinea"] = "GN";
  CountryCode2["GuineaBissau"] = "GW";
  CountryCode2["Guyana"] = "GY";
  CountryCode2["Haiti"] = "HT";
  CountryCode2["HeardIslandMcdonaldIslands"] = "HM";
  CountryCode2["HolySeeVaticanCityState"] = "VA";
  CountryCode2["Honduras"] = "HN";
  CountryCode2["HongKong"] = "HK";
  CountryCode2["Hungary"] = "HU";
  CountryCode2["Iceland"] = "IS";
  CountryCode2["India"] = "IN";
  CountryCode2["Indonesia"] = "ID";
  CountryCode2["Iran"] = "IR";
  CountryCode2["Iraq"] = "IQ";
  CountryCode2["Ireland"] = "IE";
  CountryCode2["IsleOfMan"] = "IM";
  CountryCode2["Israel"] = "IL";
  CountryCode2["Italy"] = "IT";
  CountryCode2["Jamaica"] = "JM";
  CountryCode2["Japan"] = "JP";
  CountryCode2["Jersey"] = "JE";
  CountryCode2["Jordan"] = "JO";
  CountryCode2["Kazakhstan"] = "KZ";
  CountryCode2["Kenya"] = "KE";
  CountryCode2["Kiribati"] = "KI";
  CountryCode2["Kuwait"] = "KW";
  CountryCode2["Kyrgyzstan"] = "KG";
  CountryCode2["Laos"] = "LA";
  CountryCode2["Latvia"] = "LV";
  CountryCode2["Lebanon"] = "LB";
  CountryCode2["Lesotho"] = "LS";
  CountryCode2["Liberia"] = "LR";
  CountryCode2["Libya"] = "LY";
  CountryCode2["Liechtenstein"] = "LI";
  CountryCode2["Lithuania"] = "LT";
  CountryCode2["Luxembourg"] = "LU";
  CountryCode2["Macau"] = "MO";
  CountryCode2["Madagascar"] = "MG";
  CountryCode2["Malawi"] = "MW";
  CountryCode2["Malaysia"] = "MY";
  CountryCode2["Maldives"] = "MV";
  CountryCode2["Mali"] = "ML";
  CountryCode2["Malta"] = "MT";
  CountryCode2["MarshallIslands"] = "MH";
  CountryCode2["Martinique"] = "MQ";
  CountryCode2["Mauritania"] = "MR";
  CountryCode2["Mauritius"] = "MU";
  CountryCode2["Mayotte"] = "YT";
  CountryCode2["Mexico"] = "MX";
  CountryCode2["MicronesiaFederatedStatesOf"] = "FM";
  CountryCode2["Moldova"] = "MD";
  CountryCode2["Monaco"] = "MC";
  CountryCode2["Mongolia"] = "MN";
  CountryCode2["Montenegro"] = "ME";
  CountryCode2["Montserrat"] = "MS";
  CountryCode2["Morocco"] = "MA";
  CountryCode2["Mozambique"] = "MZ";
  CountryCode2["Myanmar"] = "MM";
  CountryCode2["Namibia"] = "NA";
  CountryCode2["Nauru"] = "NR";
  CountryCode2["Nepal"] = "NP";
  CountryCode2["Netherlands"] = "NL";
  CountryCode2["NetherlandsAntilles"] = "AN";
  CountryCode2["NewCaledonia"] = "NC";
  CountryCode2["NewZealand"] = "NZ";
  CountryCode2["NorthKorea"] = "KP";
  CountryCode2["Nicaragua"] = "NI";
  CountryCode2["Niger"] = "NE";
  CountryCode2["Nigeria"] = "NG";
  CountryCode2["Niue"] = "NU";
  CountryCode2["NorfolkIsland"] = "NF";
  CountryCode2["NorthMacedonia"] = "MK";
  CountryCode2["NorthernMarianaIslands"] = "MP";
  CountryCode2["Norway"] = "NO";
  CountryCode2["Oman"] = "OM";
  CountryCode2["Pakistan"] = "PK";
  CountryCode2["Palau"] = "PW";
  CountryCode2["PalestinianTerritoryOccupied"] = "PS";
  CountryCode2["Panama"] = "PA";
  CountryCode2["PapuaNewGuinea"] = "PG";
  CountryCode2["Paraguay"] = "PY";
  CountryCode2["Peru"] = "PE";
  CountryCode2["Philippines"] = "PH";
  CountryCode2["Pitcairn"] = "PN";
  CountryCode2["Poland"] = "PL";
  CountryCode2["Portugal"] = "PT";
  CountryCode2["PuertoRico"] = "PR";
  CountryCode2["Qatar"] = "QA";
  CountryCode2["Reunion"] = "RE";
  CountryCode2["Romania"] = "RO";
  CountryCode2["RussianFederation"] = "RU";
  CountryCode2["Rwanda"] = "RW";
  CountryCode2["SaintBarthelemy"] = "BL";
  CountryCode2["SaintHelena"] = "SH";
  CountryCode2["SaintKittsAndNevis"] = "KN";
  CountryCode2["SaintLucia"] = "LC";
  CountryCode2["SaintMartin"] = "MF";
  CountryCode2["SaintPierreAndMiquelon"] = "PM";
  CountryCode2["SaintVincentAndTheGrenadines"] = "VC";
  CountryCode2["Samoa"] = "WS";
  CountryCode2["SanMarino"] = "SM";
  CountryCode2["SaoTomeAndPrincipe"] = "ST";
  CountryCode2["SaudiArabia"] = "SA";
  CountryCode2["Senegal"] = "SN";
  CountryCode2["Serbia"] = "RS";
  CountryCode2["SerbiaAndMontenegro"] = "CS";
  CountryCode2["Seychelles"] = "SC";
  CountryCode2["SierraLeone"] = "SL";
  CountryCode2["Singapore"] = "SG";
  CountryCode2["Slovakia"] = "SK";
  CountryCode2["Slovenia"] = "SI";
  CountryCode2["SolomonIslands"] = "SB";
  CountryCode2["Somalia"] = "SO";
  CountryCode2["SouthAfrica"] = "ZA";
  CountryCode2["SouthGeorgiaAndTheSouthSandwichIslands"] = "GS";
  CountryCode2["SouthKorea"] = "KR";
  CountryCode2["Spain"] = "ES";
  CountryCode2["SriLanka"] = "LK";
  CountryCode2["Sudan"] = "SD";
  CountryCode2["Suriname"] = "SR";
  CountryCode2["SvalbardAndJanMayen"] = "SJ";
  CountryCode2["Swaziland"] = "SZ";
  CountryCode2["Sweden"] = "SE";
  CountryCode2["Switzerland"] = "CH";
  CountryCode2["Syria"] = "SY";
  CountryCode2["Taiwan"] = "TW";
  CountryCode2["Tajikistan"] = "TJ";
  CountryCode2["Tanzania"] = "TZ";
  CountryCode2["Thailand"] = "TH";
  CountryCode2["TimorLeste"] = "TL";
  CountryCode2["Togo"] = "TG";
  CountryCode2["Tokelau"] = "TK";
  CountryCode2["Tonga"] = "TO";
  CountryCode2["TrinidadAndTobago"] = "TT";
  CountryCode2["Tunisia"] = "TN";
  CountryCode2["Turkey"] = "TR";
  CountryCode2["Turkmenistan"] = "TM";
  CountryCode2["TurksAndCaicosIslands"] = "TC";
  CountryCode2["Tuvalu"] = "TV";
  CountryCode2["Uganda"] = "UG";
  CountryCode2["Ukraine"] = "UA";
  CountryCode2["UnitedArabEmirates"] = "AE";
  CountryCode2["UnitedKingdom"] = "GB";
  CountryCode2["UnitedStates"] = "US";
  CountryCode2["UnitedStatesMinorOutlyingIslands"] = "UM";
  CountryCode2["Uruguay"] = "UY";
  CountryCode2["Uzbekistan"] = "UZ";
  CountryCode2["Vanuatu"] = "VU";
  CountryCode2["Venezuela"] = "VE";
  CountryCode2["Vietnam"] = "VN";
  CountryCode2["VirginIslandsBritish"] = "VG";
  CountryCode2["VirginIslandsUS"] = "VI";
  CountryCode2["WallisAndFutuna"] = "WF";
  CountryCode2["WesternSahara"] = "EH";
  CountryCode2["Yemen"] = "YE";
  CountryCode2["Zambia"] = "ZM";
  CountryCode2["Zimbabwe"] = "ZW";
  return CountryCode2;
})(CountryCode || {});

var CurrencyCode = /* @__PURE__ */ ((CurrencyCode2) => {
  CurrencyCode2["AfghanistanAfghani"] = "AFN";
  CurrencyCode2["AlbaniaLek"] = "ALL";
  CurrencyCode2["ArmeniaDram"] = "AMD";
  CurrencyCode2["AlgeriaDinar"] = "DZD";
  CurrencyCode2["AmericanSamoaTala"] = "WST";
  CurrencyCode2["AngolaKwanza"] = "AOA";
  CurrencyCode2["ArgentinaPeso"] = "ARS";
  CurrencyCode2["AustraliaDollar"] = "AUD";
  CurrencyCode2["ArubaFlorin"] = "AWG";
  CurrencyCode2["AzerbaijanNewManat"] = "AZN";
  CurrencyCode2["BosniaAndHerzegovinaConvertibleMark"] = "BAM";
  CurrencyCode2["BahrainDinar"] = "BHD";
  CurrencyCode2["BarbadosDollar"] = "BBD";
  CurrencyCode2["BangladeshTaka"] = "BDT";
  CurrencyCode2["BelgiumFranc"] = "BGN";
  CurrencyCode2["BermudaDollar"] = "BMD";
  CurrencyCode2["BruneiDollar"] = "BND";
  CurrencyCode2["BoliviaBoliviano"] = "BOB";
  CurrencyCode2["BrazilReal"] = "BRL";
  CurrencyCode2["BahamasDollar"] = "BSD";
  CurrencyCode2["BhutanNgultrum"] = "BTN";
  CurrencyCode2["BotswanaPula"] = "BWP";
  CurrencyCode2["BelarusRuble"] = "BYN";
  CurrencyCode2["BelizeDollar"] = "BZD";
  CurrencyCode2["BulgariaLev"] = "BGN";
  CurrencyCode2["BurundiFranc"] = "BIF";
  CurrencyCode2["BritishPound"] = "GBP";
  CurrencyCode2["CanadaDollar"] = "CAD";
  CurrencyCode2["CambodiaRiel"] = "KHR";
  CurrencyCode2["ComorosFranc"] = "KMF";
  CurrencyCode2["CaymanIslandsDollar"] = "KYD";
  CurrencyCode2["ChilePeso"] = "CLP";
  CurrencyCode2["ChinaYuan"] = "CNY";
  CurrencyCode2["ColombiaPeso"] = "COP";
  CurrencyCode2["CostaRicaColon"] = "CRC";
  CurrencyCode2["CroatiaKuna"] = "HRK";
  CurrencyCode2["CubaConvertiblePeso"] = "CUC";
  CurrencyCode2["CubaPeso"] = "CUP";
  CurrencyCode2["CapeVerdeEscudo"] = "CVE";
  CurrencyCode2["CyprusPound"] = "CYP";
  CurrencyCode2["CzechRepublicKoruna"] = "CZK";
  CurrencyCode2["DjiboutiFranc"] = "DJF";
  CurrencyCode2["DenmarkKrone"] = "DKK";
  CurrencyCode2["DominicaDollar"] = "XCD";
  CurrencyCode2["DominicanRepublicPeso"] = "DOP";
  CurrencyCode2["EastCaribbeanDollar"] = "XCD";
  CurrencyCode2["EgyptPound"] = "EGP";
  CurrencyCode2["ElSalvadorColon"] = "SVC";
  CurrencyCode2["EquatorialGuineaEkwele"] = "GQE";
  CurrencyCode2["EritreaNakfa"] = "ERN";
  CurrencyCode2["EstoniaKroon"] = "EEK";
  CurrencyCode2["EthiopiaBirr"] = "ETB";
  CurrencyCode2["Euro"] = "EUR";
  CurrencyCode2["FijiDollar"] = "FJD";
  CurrencyCode2["FalklandIslandsPound"] = "FKP";
  CurrencyCode2["GambiaDalasi"] = "GMD";
  CurrencyCode2["GabonFranc"] = "GMD";
  CurrencyCode2["GeorgiaLari"] = "GEL";
  CurrencyCode2["GhanaCedi"] = "GHS";
  CurrencyCode2["GibraltarPound"] = "GIP";
  CurrencyCode2["GuatemalaQuetzal"] = "GTQ";
  CurrencyCode2["GuernseyPound"] = "GGP";
  CurrencyCode2["GuineaBissauPeso"] = "GWP";
  CurrencyCode2["GuyanaDollar"] = "GYD";
  CurrencyCode2["HongKongDollar"] = "HKD";
  CurrencyCode2["HondurasLempira"] = "HNL";
  CurrencyCode2["HaitiGourde"] = "HTG";
  CurrencyCode2["HungaryForint"] = "HUF";
  CurrencyCode2["IndonesiaRupiah"] = "IDR";
  CurrencyCode2["IsleOfManPound"] = "IMP";
  CurrencyCode2["IsraelNewShekel"] = "ILS";
  CurrencyCode2["IndiaRupee"] = "INR";
  CurrencyCode2["IraqDinar"] = "IQD";
  CurrencyCode2["IranRial"] = "IRR";
  CurrencyCode2["IcelandKrona"] = "ISK";
  CurrencyCode2["JamaicaDollar"] = "JMD";
  CurrencyCode2["JapanYen"] = "JPY";
  CurrencyCode2["JerseyPound"] = "JEP";
  CurrencyCode2["JordanDinar"] = "JOD";
  CurrencyCode2["KazakhstanTenge"] = "KZT";
  CurrencyCode2["KenyaShilling"] = "KES";
  CurrencyCode2["KyrgyzstanSom"] = "KGS";
  CurrencyCode2["NorthKoreaWon"] = "KPW";
  CurrencyCode2["SouthKoreaWon"] = "KRW";
  CurrencyCode2["KuwaitDinar"] = "KWD";
  CurrencyCode2["LaosKip"] = "LAK";
  CurrencyCode2["LebanonPound"] = "LBP";
  CurrencyCode2["LiberiaDollar"] = "LRD";
  CurrencyCode2["LesothoLoti"] = "LSL";
  CurrencyCode2["LibyanDinar"] = "LYD";
  CurrencyCode2["LithuaniaLitas"] = "LTL";
  CurrencyCode2["LatviaLats"] = "LVL";
  CurrencyCode2["LibyaDinar"] = "LYD";
  CurrencyCode2["MacauPataca"] = "MOP";
  CurrencyCode2["MaldivesRufiyaa"] = "MVR";
  CurrencyCode2["MalawiKwacha"] = "MWK";
  CurrencyCode2["MaltaLira"] = "MTL";
  CurrencyCode2["MauritiusRupee"] = "MUR";
  CurrencyCode2["MongoliaTughrik"] = "MNT";
  CurrencyCode2["MoroccoDirham"] = "MAD";
  CurrencyCode2["MoldovaLeu"] = "MDL";
  CurrencyCode2["MozambiqueMetical"] = "MZN";
  CurrencyCode2["MadagascarAriary"] = "MGA";
  CurrencyCode2["MacedoniaDenar"] = "MKD";
  CurrencyCode2["MexicoPeso"] = "MXN";
  CurrencyCode2["MalaysiaRinggit"] = "MYR";
  CurrencyCode2["MyanmarKyat"] = "MMK";
  CurrencyCode2["MicronesiaFederatedStatesDollar"] = "USD";
  CurrencyCode2["NicaraguaCordoba"] = "NIO";
  CurrencyCode2["NamibiaDollar"] = "NAD";
  CurrencyCode2["NetherlandsAntillesGuilder"] = "ANG";
  CurrencyCode2["NewCaledoniaFranc"] = "XPF";
  CurrencyCode2["NigeriaNaira"] = "NGN";
  CurrencyCode2["NicaraguaCordobaOro"] = "NIO";
  CurrencyCode2["NigerCFAFranc"] = "XOF";
  CurrencyCode2["NorwayKrone"] = "NOK";
  CurrencyCode2["NepalRupee"] = "NPR";
  CurrencyCode2["NewZealandDollar"] = "NZD";
  CurrencyCode2["OmanRial"] = "OMR";
  CurrencyCode2["PanamaBalboa"] = "PAB";
  CurrencyCode2["PeruNuevoSol"] = "PEN";
  CurrencyCode2["PapuaNewGuineaKina"] = "PGK";
  CurrencyCode2["PhilippinesPeso"] = "PHP";
  CurrencyCode2["PakistanRupee"] = "PKR";
  CurrencyCode2["PeruNuevo"] = "PEN";
  CurrencyCode2["PolandZloty"] = "PLN";
  CurrencyCode2["ParaguayGuarani"] = "PYG";
  CurrencyCode2["QatarRial"] = "QAR";
  CurrencyCode2["RomaniaNewLeu"] = "RON";
  CurrencyCode2["SerbiaDinar"] = "RSD";
  CurrencyCode2["SriLankaRupee"] = "LKR";
  CurrencyCode2["RussiaRuble"] = "RUB";
  CurrencyCode2["RwandaFranc"] = "RWF";
  CurrencyCode2["SaudiArabiaRiyal"] = "SAR";
  CurrencyCode2["SlovakiaKoruna"] = "SKK";
  CurrencyCode2["SloveniaTolar"] = "SIT";
  CurrencyCode2["SolomonIslandsDollar"] = "SBD";
  CurrencyCode2["SeychellesRupee"] = "SCR";
  CurrencyCode2["SudanPound"] = "SDG";
  CurrencyCode2["SwedenKrona"] = "SEK";
  CurrencyCode2["SingaporeDollar"] = "SGD";
  CurrencyCode2["SaintHelenaPound"] = "SHP";
  CurrencyCode2["SierraLeoneLeone"] = "SLL";
  CurrencyCode2["SomaliaShilling"] = "SOS";
  CurrencyCode2["SurinameDollar"] = "SRD";
  CurrencyCode2["SintMaartenPound"] = "SXD";
  CurrencyCode2["SyriaPound"] = "SYP";
  CurrencyCode2["SwazilandLilangeni"] = "SZL";
  CurrencyCode2["SwitzerlandFranc"] = "CHF";
  CurrencyCode2["ThailandBaht"] = "THB";
  CurrencyCode2["TajikistanSomoni"] = "TJS";
  CurrencyCode2["TurkmenistanManat"] = "TMT";
  CurrencyCode2["TunisiaDinar"] = "TND";
  CurrencyCode2["TongaPaanga"] = "TOP";
  CurrencyCode2["TurkeyLira"] = "TRY";
  CurrencyCode2["TrinidadAndTobagoDollar"] = "TTD";
  CurrencyCode2["TaiwanNewDollar"] = "TWD";
  CurrencyCode2["TanzaniaShilling"] = "TZS";
  CurrencyCode2["UnitedArabEmiratesDirham"] = "AED";
  CurrencyCode2["UkraineHryvnia"] = "UAH";
  CurrencyCode2["UgandaShilling"] = "UGX";
  CurrencyCode2["UnitedKingdomPound"] = "GBP";
  CurrencyCode2["UnitedStatesDollar"] = "USD";
  CurrencyCode2["UruguayPeso"] = "UYU";
  CurrencyCode2["UzbekistanSom"] = "UZS";
  CurrencyCode2["VenezuelaBolivar"] = "VEF";
  CurrencyCode2["VietnamDong"] = "VND";
  CurrencyCode2["VanuatuVatu"] = "VUV";
  CurrencyCode2["SamoaTala"] = "WST";
  CurrencyCode2["YemenRial"] = "YER";
  CurrencyCode2["SouthAfricaRand"] = "ZAR";
  CurrencyCode2["ZambiaKwacha"] = "ZMW";
  CurrencyCode2["ZimbabweDollar"] = "ZWL";
  return CurrencyCode2;
})(CurrencyCode || {});
({
  AfghanistanAfghani: {
    code: "AFN" /* AfghanistanAfghani */,
    countries: [CountryCode.Afghanistan],
    decimal_digits: 2,
    decimal_separator: ".",
    name: "Afghan Afghani",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u060B",
    symbol_native: "\u060B",
    symbol_placement: "before",
    thousands_separator: ","
  },
  AlbaniaLek: {
    code: "ALL" /* AlbaniaLek */,
    countries: [CountryCode.Albania],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Albanian Lek",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "Lek",
    symbol_native: "Lek",
    symbol_placement: "before",
    thousands_separator: "."
  },
  AlgeriaDinar: {
    code: "DZD" /* AlgeriaDinar */,
    countries: [CountryCode.Algeria],
    decimal_digits: 2,
    decimal_separator: ".",
    name: "Algerian Dinar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u062F.\u062C",
    symbol_native: "\u062F.\u062C",
    symbol_placement: "before",
    thousands_separator: ","
  },
  ArgentinaPeso: {
    code: "ARS" /* ArgentinaPeso */,
    countries: [CountryCode.Argentina],
    decimal_digits: 2,
    decimal_separator: ".",
    name: "Argentine Peso",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$",
    symbol_native: "$",
    symbol_placement: "before",
    thousands_separator: ","
  },
  ArmeniaDram: {
    code: "AMD" /* ArmeniaDram */,
    countries: [CountryCode.Armenia],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Armenian Dram",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u0564\u0580.",
    symbol_native: "\u0564\u0580.",
    symbol_placement: "before",
    thousands_separator: "."
  },
  ArubaFlorin: {
    code: "AWG" /* ArubaFlorin */,
    countries: [CountryCode.Aruba],
    decimal_digits: 2,
    decimal_separator: ".",
    name: "Aruban Florin",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u0192",
    symbol_native: "\u0192",
    symbol_placement: "before",
    thousands_separator: ","
  },
  AustraliaDollar: {
    code: "AUD" /* AustraliaDollar */,
    countries: [CountryCode.Australia],
    decimal_digits: 2,
    decimal_separator: ".",
    name: "Australian Dollar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$",
    symbol_native: "$",
    symbol_placement: "before",
    thousands_separator: ","
  },
  AzerbaijanManat: {
    code: "AZN" /* AzerbaijanNewManat */,
    countries: [CountryCode.Azerbaijan],
    decimal_digits: 2,
    decimal_separator: ".",
    name: "Azerbaijani Manat",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u043C\u0430\u043D",
    symbol_native: "\u043C\u0430\u043D",
    symbol_placement: "before",
    thousands_separator: ","
  },
  BahrainDinar: {
    code: "BHD" /* BahrainDinar */,
    countries: [CountryCode.Bahrain],
    decimal_digits: 3,
    decimal_separator: ".",
    name: "Bahraini Dinar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: ".\u062F.\u0628",
    symbol_native: ".\u062F.\u0628",
    symbol_placement: "before",
    thousands_separator: ","
  },
  BangladeshTaka: {
    code: "BDT" /* BangladeshTaka */,
    countries: [CountryCode.Bangladesh],
    decimal_digits: 2,
    decimal_separator: ".",
    name: "Bangladeshi Taka",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u09F3",
    symbol_native: "\u09F3",
    symbol_placement: "before",
    thousands_separator: ","
  },
  BarbadosDollar: {
    code: "BBD" /* BarbadosDollar */,
    countries: [CountryCode.Barbados],
    decimal_digits: 2,
    decimal_separator: ".",
    name: "Barbadian Dollar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$",
    symbol_native: "$",
    symbol_placement: "before",
    thousands_separator: ","
  },
  BelarusRuble: {
    code: "BYN" /* BelarusRuble */,
    countries: [CountryCode.Belarus],
    decimal_digits: 2,
    decimal_separator: ".",
    name: "Belarusian Ruble",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "Br",
    symbol_native: "Br",
    symbol_placement: "before",
    thousands_separator: "."
  },
  BelizeDollar: {
    code: "BZD" /* BelizeDollar */,
    countries: [CountryCode.Belize],
    decimal_digits: 2,
    decimal_separator: ".",
    name: "Belize Dollar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "BZ$",
    symbol_native: "BZ$",
    symbol_placement: "before",
    thousands_separator: ","
  },
  BermudaDollar: {
    code: "BMD" /* BermudaDollar */,
    countries: [CountryCode.Bermuda],
    decimal_digits: 2,
    decimal_separator: ".",
    name: "Bermudian Dollar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$",
    symbol_native: "$",
    symbol_placement: "before",
    thousands_separator: ","
  },
  BoliviaBoliviano: {
    code: "BOB" /* BoliviaBoliviano */,
    countries: [CountryCode.Bolivia],
    decimal_digits: 2,
    decimal_separator: ".",
    name: "Bolivian Boliviano",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$b",
    symbol_native: "$b",
    symbol_placement: "before",
    thousands_separator: ","
  },
  BosniaAndHerzegovinaConvertibleMarka: {
    code: "BAM" /* BosniaAndHerzegovinaConvertibleMark */,
    countries: [CountryCode.BosniaAndHerzegovina],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Bosnia and Herzegovina Convertible Marka",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "KM",
    symbol_native: "KM",
    symbol_placement: "before",
    thousands_separator: "."
  },
  BotswanaPula: {
    code: "BWP" /* BotswanaPula */,
    countries: [CountryCode.Botswana],
    decimal_digits: 2,
    decimal_separator: ".",
    name: "Botswana Pula",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "P",
    symbol_native: "P",
    symbol_placement: "before",
    thousands_separator: ","
  },
  BrazilReal: {
    code: "BRL" /* BrazilReal */,
    countries: [CountryCode.Brazil],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Brazilian Real",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "R$",
    symbol_native: "R$",
    symbol_placement: "before",
    thousands_separator: "."
  },
  BruneiDollar: {
    code: "BND" /* BruneiDollar */,
    countries: [CountryCode.Brunei],
    decimal_digits: 2,
    decimal_separator: ".",
    name: "Brunei Dollar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$",
    symbol_native: "$",
    symbol_placement: "before",
    thousands_separator: ","
  },
  BulgariaLev: {
    code: "BGN" /* BulgariaLev */,
    countries: [CountryCode.Bulgaria],
    decimal_digits: 2,
    decimal_separator: ".",
    name: "Bulgarian Lev",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u043B\u0432",
    symbol_native: "\u043B\u0432",
    symbol_placement: "before",
    thousands_separator: "."
  },
  BurundiFranc: {
    code: "BIF" /* BurundiFranc */,
    countries: [CountryCode.Burundi],
    decimal_digits: 0,
    decimal_separator: ".",
    name: "Burundian Franc",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "FBu",
    symbol_native: "FBu",
    symbol_placement: "before",
    thousands_separator: ","
  },
  CambodiaRiel: {
    code: "KHR" /* CambodiaRiel */,
    countries: [CountryCode.Cambodia],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Cambodian Riel",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u17DB",
    symbol_native: "\u17DB",
    symbol_placement: "before",
    thousands_separator: "."
  },
  CanadaDollar: {
    code: "CAD" /* CanadaDollar */,
    countries: [CountryCode.Canada],
    decimal_digits: 2,
    decimal_separator: ".",
    name: "Canadian Dollar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$",
    symbol_native: "$",
    symbol_placement: "before",
    thousands_separator: ","
  },
  CapeVerdeEscudo: {
    code: "CVE" /* CapeVerdeEscudo */,
    countries: [CountryCode.CapeVerde],
    decimal_digits: 2,
    decimal_separator: ".",
    name: "Cape Verde Escudo",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "Esc",
    symbol_native: "Esc",
    symbol_placement: "before",
    thousands_separator: ","
  },
  CaymanIslandsDollar: {
    code: "KYD" /* CaymanIslandsDollar */,
    countries: [CountryCode.CaymanIslands],
    decimal_digits: 2,
    decimal_separator: ".",
    name: "Cayman Islands Dollar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$",
    symbol_native: "$",
    symbol_placement: "before",
    thousands_separator: ","
  },
  ChilePeso: {
    code: "CLP" /* ChilePeso */,
    countries: [CountryCode.Chile],
    decimal_digits: 0,
    decimal_separator: ".",
    name: "Chilean Peso",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$",
    symbol_native: "$",
    symbol_placement: "before",
    thousands_separator: ","
  },
  ChinaYuanRenminbi: {
    code: "CNY" /* ChinaYuan */,
    countries: [CountryCode.China],
    decimal_digits: 2,
    decimal_separator: ".",
    name: "Chinese Yuan",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\xA5",
    symbol_native: "\xA5",
    symbol_placement: "before",
    thousands_separator: ","
  },
  ColombiaPeso: {
    code: "COP" /* ColombiaPeso */,
    countries: [CountryCode.Colombia],
    decimal_digits: 2,
    decimal_separator: ".",
    name: "Colombian Peso",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$",
    symbol_native: "$",
    symbol_placement: "before",
    thousands_separator: ","
  },
  ComorosFranc: {
    code: "KMF" /* ComorosFranc */,
    countries: [CountryCode.Comoros],
    decimal_digits: 0,
    decimal_separator: ".",
    name: "Comoros Franc",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "CF",
    symbol_native: "CF",
    symbol_placement: "before",
    thousands_separator: ","
  },
  CostaRicaColon: {
    code: "CRC" /* CostaRicaColon */,
    countries: [CountryCode.CostaRica],
    decimal_digits: 2,
    decimal_separator: ".",
    name: "Costa Rican Colon",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20A1",
    symbol_native: "\u20A1",
    symbol_placement: "before",
    thousands_separator: ","
  },
  CroatiaKuna: {
    code: "HRK" /* CroatiaKuna */,
    countries: [CountryCode.Croatia],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Croatian Kuna",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "kn",
    symbol_native: "kn",
    symbol_placement: "before",
    thousands_separator: "."
  },
  CubaConvertiblePeso: {
    code: "CUC" /* CubaConvertiblePeso */,
    countries: [CountryCode.Cuba],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Cuba Convertible Peso",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$",
    symbol_native: "$",
    symbol_placement: "before",
    thousands_separator: "."
  },
  CubaPeso: {
    code: "CUP" /* CubaPeso */,
    countries: [CountryCode.Cuba],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Cuba Peso",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$",
    symbol_native: "$",
    symbol_placement: "before",
    thousands_separator: "."
  },
  CyprusPound: {
    code: "CYP" /* CyprusPound */,
    countries: [CountryCode.Cyprus],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Cyprus Pound",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\xA3",
    symbol_native: "\xA3",
    symbol_placement: "before",
    thousands_separator: "."
  },
  CzechRepublicKoruna: {
    code: "CZK" /* CzechRepublicKoruna */,
    countries: [CountryCode.CzechRepublic],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Czech Republic Koruna",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "K\u010D",
    symbol_native: "K\u010D",
    symbol_placement: "before",
    thousands_separator: "."
  },
  DenmarkKrone: {
    code: "DKK" /* DenmarkKrone */,
    countries: [CountryCode.Denmark],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Denmark Krone",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "kr",
    symbol_native: "kr",
    symbol_placement: "before",
    thousands_separator: "."
  },
  DjiboutiFranc: {
    code: "DJF" /* DjiboutiFranc */,
    countries: [CountryCode.Djibouti],
    decimal_digits: 0,
    decimal_separator: ".",
    name: "Djibouti Franc",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "Fdj",
    symbol_native: "Fdj",
    symbol_placement: "before",
    thousands_separator: ","
  },
  DominicanRepublicPeso: {
    code: "DOP" /* DominicanRepublicPeso */,
    countries: [CountryCode.DominicanRepublic],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Dominican Republic Peso",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "RD$",
    symbol_native: "RD$",
    symbol_placement: "before",
    thousands_separator: "."
  },
  EastCaribbeanDollar: {
    code: "XCD" /* EastCaribbeanDollar */,
    countries: [
      CountryCode.AntiguaAndBarbuda,
      CountryCode.Dominica,
      CountryCode.Grenada,
      CountryCode.SaintKittsAndNevis,
      CountryCode.SaintLucia,
      CountryCode.SaintVincentAndTheGrenadines
    ],
    decimal_digits: 2,
    decimal_separator: ".",
    name: "East Caribbean Dollar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$",
    symbol_native: "$",
    symbol_placement: "before",
    thousands_separator: ","
  },
  EgyptPound: {
    code: "EGP" /* EgyptPound */,
    countries: [CountryCode.Egypt],
    decimal_digits: 2,
    decimal_separator: ".",
    name: "Egypt Pound",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\xA3",
    symbol_native: "\xA3",
    symbol_placement: "before",
    thousands_separator: ","
  },
  ElSalvadorColon: {
    code: "SVC" /* ElSalvadorColon */,
    countries: [CountryCode.ElSalvador],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "El Salvador Colon",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20A1",
    symbol_native: "\u20A1",
    symbol_placement: "before",
    thousands_separator: "."
  },
  EquatorialGuineaEkwele: {
    code: "GQE" /* EquatorialGuineaEkwele */,
    countries: [CountryCode.EquatorialGuinea],
    decimal_digits: 0,
    decimal_separator: ".",
    name: "Equatorial Guinea Ekwele",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "GQE",
    symbol_native: "GQE",
    symbol_placement: "before",
    thousands_separator: ","
  },
  EritreaNakfa: {
    code: "ERN" /* EritreaNakfa */,
    countries: [CountryCode.Eritrea],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Eritrea Nakfa",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "Nfk",
    symbol_native: "Nfk",
    symbol_placement: "before",
    thousands_separator: "."
  },
  EstoniaKroon: {
    code: "EEK" /* EstoniaKroon */,
    countries: [CountryCode.Estonia],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Estonia Kroon",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "kr",
    symbol_native: "kr",
    symbol_placement: "before",
    thousands_separator: "."
  },
  EthiopiaBirr: {
    code: "ETB" /* EthiopiaBirr */,
    countries: [CountryCode.Ethiopia],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Ethiopia Birr",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "Br",
    symbol_native: "Br",
    symbol_placement: "before",
    thousands_separator: "."
  },
  Euro: {
    code: "EUR" /* Euro */,
    countries: [
      CountryCode.Andorra,
      CountryCode.Austria,
      CountryCode.Belgium,
      CountryCode.Cyprus,
      CountryCode.Estonia,
      CountryCode.Finland,
      CountryCode.France,
      CountryCode.Germany,
      CountryCode.Greece,
      CountryCode.Ireland,
      CountryCode.Italy,
      CountryCode.Latvia,
      CountryCode.Lithuania,
      CountryCode.Luxembourg,
      CountryCode.Malta,
      CountryCode.Monaco,
      CountryCode.Netherlands,
      CountryCode.Portugal,
      CountryCode.Spain,
      CountryCode.Sweden,
      CountryCode.UnitedKingdom
    ],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Euro",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20AC",
    symbol_native: "\u20AC",
    symbol_placement: "before",
    thousands_separator: "."
  },
  FalklandIslandsPound: {
    code: "FKP" /* FalklandIslandsPound */,
    countries: [CountryCode.FalklandIslands],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Equatorial Guinea Ekwele",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\xA3",
    symbol_native: "\xA3",
    symbol_placement: "before",
    thousands_separator: "."
  },
  FijiDollar: {
    code: "FJD" /* FijiDollar */,
    countries: [CountryCode.Fiji],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Fiji Dollar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$",
    symbol_native: "$",
    symbol_placement: "before",
    thousands_separator: "."
  },
  GambiaDalasi: {
    code: "GMD" /* GambiaDalasi */,
    countries: [CountryCode.Gambia],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Gambia Dalasi",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "D",
    symbol_native: "D",
    symbol_placement: "before",
    thousands_separator: "."
  },
  GeorgiaLari: {
    code: "GEL" /* GeorgiaLari */,
    countries: [CountryCode.Georgia],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Georgia Lari",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20BE",
    symbol_native: "\u20BE",
    symbol_placement: "before",
    thousands_separator: "."
  },
  GhanaCedi: {
    code: "GHS" /* GhanaCedi */,
    countries: [CountryCode.Ghana],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Ghana Cedi",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20B5",
    symbol_native: "\u20B5",
    symbol_placement: "before",
    thousands_separator: "."
  },
  GibraltarPound: {
    code: "GIP" /* GibraltarPound */,
    countries: [CountryCode.Gibraltar],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Gibraltar Pound",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\xA3",
    symbol_native: "\xA3",
    symbol_placement: "before",
    thousands_separator: "."
  },
  GuatemalaQuetzal: {
    code: "GTQ" /* GuatemalaQuetzal */,
    countries: [CountryCode.Guatemala],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Guatemala Quetzal",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "Q",
    symbol_native: "Q",
    symbol_placement: "before",
    thousands_separator: "."
  },
  GuernseyPound: {
    code: "GGP" /* GuernseyPound */,
    countries: [CountryCode.Guernsey],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Guernsey Pound",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\xA3",
    symbol_native: "\xA3",
    symbol_placement: "before",
    thousands_separator: "."
  },
  GuineaBissauPeso: {
    code: "GWP" /* GuineaBissauPeso */,
    countries: [CountryCode.GuineaBissau],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Guinea-Bissau Peso",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20B5",
    symbol_native: "\u20B5",
    symbol_placement: "before",
    thousands_separator: "."
  },
  GuyanaDollar: {
    code: "GYD" /* GuyanaDollar */,
    countries: [CountryCode.Guyana],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Guyana Dollar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$",
    symbol_native: "$",
    symbol_placement: "before",
    thousands_separator: "."
  },
  HaitiGourde: {
    code: "HTG" /* HaitiGourde */,
    countries: [CountryCode.Haiti],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Haiti Gourde",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "G",
    symbol_native: "G",
    symbol_placement: "before",
    thousands_separator: "."
  },
  HondurasLempira: {
    code: "HNL" /* HondurasLempira */,
    countries: [CountryCode.Honduras],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Honduras Lempira",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "L",
    symbol_native: "L",
    symbol_placement: "before",
    thousands_separator: "."
  },
  HongKongDollar: {
    code: "HKD" /* HongKongDollar */,
    countries: [CountryCode.HongKong],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Hong Kong Dollar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$",
    symbol_native: "$",
    symbol_placement: "before",
    thousands_separator: "."
  },
  HungaryForint: {
    code: "HUF" /* HungaryForint */,
    countries: [CountryCode.Hungary],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Hungary Forint",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "Ft",
    symbol_native: "Ft",
    symbol_placement: "before",
    thousands_separator: "."
  },
  IcelandKrona: {
    code: "ISK" /* IcelandKrona */,
    countries: [CountryCode.Iceland],
    decimal_digits: 0,
    decimal_separator: ",",
    name: "Iceland Krona",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "kr",
    symbol_native: "kr",
    symbol_placement: "before",
    thousands_separator: "."
  },
  IndianRupee: {
    code: "INR" /* IndiaRupee */,
    countries: [CountryCode.India, CountryCode.Bhutan],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Indian Rupee",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20B9",
    symbol_native: "\u20B9",
    symbol_placement: "before",
    thousands_separator: "."
  },
  IndonesiaRupiah: {
    code: "IDR" /* IndonesiaRupiah */,
    countries: [CountryCode.Indonesia],
    decimal_digits: 0,
    decimal_separator: ",",
    name: "Indonesia Rupiah",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "Rp",
    symbol_native: "Rp",
    symbol_placement: "before",
    thousands_separator: "."
  },
  IranRial: {
    code: "IRR" /* IranRial */,
    countries: [CountryCode.Iran],
    decimal_digits: 0,
    decimal_separator: ",",
    name: "Iran Rial",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\uFDFC",
    symbol_native: "\uFDFC",
    symbol_placement: "before",
    thousands_separator: "."
  },
  IsleOfManPound: {
    code: "IMP" /* IsleOfManPound */,
    countries: [CountryCode.IsleOfMan],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Isle of Man Pound",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\uFDFC",
    symbol_native: "\uFDFC",
    symbol_placement: "before",
    thousands_separator: "."
  },
  IsraeliShekel: {
    code: "ILS" /* IsraelNewShekel */,
    countries: [CountryCode.Israel],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Israeli Shekel",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20AA",
    symbol_native: "\u20AA",
    symbol_placement: "before",
    thousands_separator: "."
  },
  JamaicaDollar: {
    code: "JMD" /* JamaicaDollar */,
    countries: [CountryCode.Jamaica],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Jamaica Dollar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "J$",
    symbol_native: "J$",
    symbol_placement: "before",
    thousands_separator: "."
  },
  JapanYen: {
    code: "JPY" /* JapanYen */,
    countries: [CountryCode.Japan],
    decimal_digits: 0,
    decimal_separator: ",",
    name: "Japan Yen",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\xA5",
    symbol_native: "\uFFE5",
    symbol_placement: "before",
    thousands_separator: "."
  },
  JerseyPound: {
    code: "JEP" /* JerseyPound */,
    countries: [CountryCode.Jersey],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Jersey Pound",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\xA3",
    symbol_native: "\xA3",
    symbol_placement: "before",
    thousands_separator: "."
  },
  JordanDinar: {
    code: "JOD" /* JordanDinar */,
    countries: [CountryCode.Jordan],
    decimal_digits: 3,
    decimal_separator: ",",
    name: "Jordan Dinar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "JD",
    symbol_native: "JD",
    symbol_placement: "before",
    thousands_separator: "."
  },
  KazakhstanTenge: {
    code: "KZT" /* KazakhstanTenge */,
    countries: [CountryCode.Kazakhstan],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Kazakhstan Tenge",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20B8",
    symbol_native: "\u20B8",
    symbol_placement: "before",
    thousands_separator: "."
  },
  KenyaShilling: {
    code: "KES" /* KenyaShilling */,
    countries: [CountryCode.Kenya],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Kenya Shilling",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "KSh",
    symbol_native: "KSh",
    symbol_placement: "before",
    thousands_separator: "."
  },
  KuwaitDinar: {
    code: "KWD" /* KuwaitDinar */,
    countries: [CountryCode.Kuwait],
    decimal_digits: 3,
    decimal_separator: ",",
    name: "Kuwait Dinar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "KD",
    symbol_native: "KD",
    symbol_placement: "before",
    thousands_separator: "."
  },
  KyrgyzstanSom: {
    code: "KGS" /* KyrgyzstanSom */,
    countries: [CountryCode.Kyrgyzstan],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Kyrgyzstan Som",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "KGS",
    symbol_native: "KGS",
    symbol_placement: "before",
    thousands_separator: "."
  },
  LaosKip: {
    code: "LAK" /* LaosKip */,
    countries: [CountryCode.Laos],
    decimal_digits: 0,
    decimal_separator: ",",
    name: "Laos Kip",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20AD",
    symbol_native: "\u20AD",
    symbol_placement: "before",
    thousands_separator: "."
  },
  LatviaLats: {
    code: "LVL" /* LatviaLats */,
    countries: [CountryCode.Latvia],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Latvia Lat",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "Ls",
    symbol_native: "Ls",
    symbol_placement: "before",
    thousands_separator: "."
  },
  LebanonPound: {
    code: "LBP" /* LebanonPound */,
    countries: [CountryCode.Lebanon],
    decimal_digits: 0,
    decimal_separator: ",",
    name: "Lebanon Pound",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\xA3",
    symbol_native: "\xA3",
    symbol_placement: "before",
    thousands_separator: "."
  },
  LesothoLoti: {
    code: "LSL" /* LesothoLoti */,
    countries: [CountryCode.Lesotho],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Lesotho Loti",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "M",
    symbol_native: "M",
    symbol_placement: "before",
    thousands_separator: "."
  },
  LiberiaDollar: {
    code: "LRD" /* LiberiaDollar */,
    countries: [CountryCode.Liberia],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Liberia Dollar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$",
    symbol_native: "$",
    symbol_placement: "before",
    thousands_separator: "."
  },
  LibyanDinar: {
    code: "LYD" /* LibyanDinar */,
    countries: [CountryCode.Libya],
    decimal_digits: 3,
    decimal_separator: ",",
    name: "Libyan Dinar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "LD",
    symbol_native: "LD",
    symbol_placement: "before",
    thousands_separator: "."
  },
  LithuaniaLitas: {
    code: "LTL" /* LithuaniaLitas */,
    countries: [CountryCode.Lithuania],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Lithuania Litas",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "Lt",
    symbol_native: "Lt",
    symbol_placement: "before",
    thousands_separator: "."
  },
  MacauPataca: {
    code: "MOP" /* MacauPataca */,
    countries: [CountryCode.Macau],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Macau Pataca",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "MOP$",
    symbol_native: "MOP$",
    symbol_placement: "before",
    thousands_separator: "."
  },
  MacedoniaDenar: {
    code: "MKD" /* MacedoniaDenar */,
    countries: [CountryCode.NorthMacedonia],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Macedonia Denar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u0434\u0435\u043D",
    symbol_native: "\u0434\u0435\u043D",
    symbol_placement: "before",
    thousands_separator: "."
  },
  MadagascarAriary: {
    code: "MGA" /* MadagascarAriary */,
    countries: [CountryCode.Madagascar],
    decimal_digits: 0,
    decimal_separator: ",",
    name: "Madagascar Ariary",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "Ar",
    symbol_native: "Ar",
    symbol_placement: "before",
    thousands_separator: "."
  },
  MalawiKwacha: {
    code: "MWK" /* MalawiKwacha */,
    countries: [CountryCode.Malawi],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Malawi Kwacha",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "MK",
    symbol_native: "MK",
    symbol_placement: "before",
    thousands_separator: "."
  },
  MalaysiaRinggit: {
    code: "MYR" /* MalaysiaRinggit */,
    countries: [CountryCode.Malaysia],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Malaysia Ringgit",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "RM",
    symbol_native: "RM",
    symbol_placement: "before",
    thousands_separator: "."
  },
  MaldivesRufiyaa: {
    code: "MVR" /* MaldivesRufiyaa */,
    countries: [CountryCode.Maldives],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Maldives Rufiyaa",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "Rf",
    symbol_native: "Rf",
    symbol_placement: "before",
    thousands_separator: "."
  },
  MaltaLira: {
    code: "MTL" /* MaltaLira */,
    countries: [CountryCode.Malta],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Malta Lira",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "Lm",
    symbol_native: "Lm",
    symbol_placement: "before",
    thousands_separator: "."
  },
  MauritiusRupee: {
    code: "MUR" /* MauritiusRupee */,
    countries: [CountryCode.Mauritius],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Mauritius Rupee",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20A8",
    symbol_native: "\u20A8",
    symbol_placement: "before",
    thousands_separator: "."
  },
  MexicoPeso: {
    code: "MXN" /* MexicoPeso */,
    countries: [CountryCode.Mexico],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Mexico Peso",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$",
    symbol_native: "$",
    symbol_placement: "before",
    thousands_separator: "."
  },
  MoldovaLeu: {
    code: "MDL" /* MoldovaLeu */,
    countries: [CountryCode.Moldova],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Moldova Leu",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "L",
    symbol_native: "L",
    symbol_placement: "before",
    thousands_separator: "."
  },
  MongoliaTughrik: {
    code: "MNT" /* MongoliaTughrik */,
    countries: [CountryCode.Mongolia],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Mongolia Tughrik",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20AE",
    symbol_native: "\u20AE",
    symbol_placement: "before",
    thousands_separator: "."
  },
  MoroccoDirham: {
    code: "MAD" /* MoroccoDirham */,
    countries: [CountryCode.Morocco],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Morocco Dirham",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "DH",
    symbol_native: "DH",
    symbol_placement: "before",
    thousands_separator: "."
  },
  MozambiqueMetical: {
    code: "MZN" /* MozambiqueMetical */,
    countries: [CountryCode.Mozambique],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Mozambique Metical",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "MT",
    symbol_native: "MT",
    symbol_placement: "before",
    thousands_separator: "."
  },
  MyanmarKyat: {
    code: "MMK" /* MyanmarKyat */,
    countries: [CountryCode.Myanmar],
    decimal_digits: 0,
    decimal_separator: ",",
    name: "Myanmar Kyat",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "K",
    symbol_native: "K",
    symbol_placement: "before",
    thousands_separator: "."
  },
  NamibiaDollar: {
    code: "NAD" /* NamibiaDollar */,
    countries: [CountryCode.Namibia],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Namibia Dollar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$",
    symbol_native: "$",
    symbol_placement: "before",
    thousands_separator: "."
  },
  NepalRupee: {
    code: "NPR" /* NepalRupee */,
    countries: [CountryCode.Nepal],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Nepal Rupee",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20A8",
    symbol_native: "\u20A8",
    symbol_placement: "before",
    thousands_separator: "."
  },
  NetherlandsAntillesGuilder: {
    code: "ANG" /* NetherlandsAntillesGuilder */,
    countries: [CountryCode.NetherlandsAntilles],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Netherlands Antilles Guilder",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u0192",
    symbol_native: "\u0192",
    symbol_placement: "before",
    thousands_separator: "."
  },
  NewCaledoniaFranc: {
    code: "XPF" /* NewCaledoniaFranc */,
    countries: [CountryCode.NewCaledonia],
    decimal_digits: 0,
    decimal_separator: ",",
    name: "New Caledonia Franc",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20A3",
    symbol_native: "\u20A3",
    symbol_placement: "before",
    thousands_separator: "."
  },
  NewZealandDollar: {
    code: "NZD" /* NewZealandDollar */,
    countries: [CountryCode.NewZealand],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "New Zealand Dollar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$",
    symbol_native: "$",
    symbol_placement: "before",
    thousands_separator: "."
  },
  NicaraguaCordoba: {
    code: "NIO" /* NicaraguaCordoba */,
    countries: [CountryCode.Nicaragua],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Nicaragua Cordoba",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "C$",
    symbol_native: "C$",
    symbol_placement: "before",
    thousands_separator: "."
  },
  NigerCFAFranc: {
    code: "XOF" /* NigerCFAFranc */,
    countries: [CountryCode.Niger],
    decimal_digits: 0,
    decimal_separator: ",",
    name: "Niger CFA Franc",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "CFA",
    symbol_native: "CFA",
    symbol_placement: "before",
    thousands_separator: "."
  },
  NigeriaNaira: {
    code: "NGN" /* NigeriaNaira */,
    countries: [CountryCode.Nigeria],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Nigeria Naira",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20A6",
    symbol_native: "\u20A6",
    symbol_placement: "before",
    thousands_separator: "."
  },
  NorthKoreaWon: {
    code: "KPW" /* NorthKoreaWon */,
    countries: [CountryCode.NorthKorea],
    decimal_digits: 0,
    decimal_separator: ",",
    name: "North Korea Won",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20A9",
    symbol_native: "\u20A9",
    symbol_placement: "before",
    thousands_separator: "."
  },
  NorwayKrone: {
    code: "NOK" /* NorwayKrone */,
    countries: [CountryCode.Norway],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Norway Krone",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "kr",
    symbol_native: "kr",
    symbol_placement: "before",
    thousands_separator: "."
  },
  OmanRial: {
    code: "OMR" /* OmanRial */,
    countries: [CountryCode.Oman],
    decimal_digits: 3,
    decimal_separator: ",",
    name: "Oman Rial",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\uFDFC",
    symbol_native: "\uFDFC",
    symbol_placement: "before",
    thousands_separator: "."
  },
  PakistanRupee: {
    code: "PKR" /* PakistanRupee */,
    countries: [CountryCode.Pakistan],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Pakistan Rupee",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20A8",
    symbol_native: "\u20A8",
    symbol_placement: "before",
    thousands_separator: "."
  },
  PanamaBalboa: {
    code: "PAB" /* PanamaBalboa */,
    countries: [CountryCode.Panama],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Panama Balboa",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "B/.",
    symbol_native: "B/.",
    symbol_placement: "before",
    thousands_separator: "."
  },
  ParaguayGuarani: {
    code: "PYG" /* ParaguayGuarani */,
    countries: [CountryCode.Paraguay],
    decimal_digits: 0,
    decimal_separator: ",",
    name: "Paraguay Guarani",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "Gs",
    symbol_native: "Gs",
    symbol_placement: "before",
    thousands_separator: "."
  },
  PeruvianNuevo: {
    code: "PEN" /* PeruNuevo */,
    countries: [CountryCode.Peru],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Peruvian Nuevo",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "S/.",
    symbol_native: "S/.",
    symbol_placement: "before",
    thousands_separator: "."
  },
  PhilippinesPeso: {
    code: "PHP" /* PhilippinesPeso */,
    countries: [CountryCode.Philippines],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Philippines Peso",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20B1",
    symbol_native: "\u20B1",
    symbol_placement: "before",
    thousands_separator: "."
  },
  PolandZloty: {
    code: "PLN" /* PolandZloty */,
    countries: [CountryCode.Poland],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Poland Zloty",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "z\u0142",
    symbol_native: "z\u0142",
    symbol_placement: "before",
    thousands_separator: "."
  },
  QatarRial: {
    code: "QAR" /* QatarRial */,
    countries: [CountryCode.Qatar],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Qatar Rial",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\uFDFC",
    symbol_native: "\uFDFC",
    symbol_placement: "before",
    thousands_separator: "."
  },
  RomaniaNewLeu: {
    code: "RON" /* RomaniaNewLeu */,
    countries: [CountryCode.Romania],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Romania New Leu",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "lei",
    symbol_native: "lei",
    symbol_placement: "before",
    thousands_separator: "."
  },
  RussiaRuble: {
    code: "RUB" /* RussiaRuble */,
    countries: [CountryCode.RussianFederation],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Russia Ruble",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20BD",
    symbol_native: "\u20BD",
    symbol_placement: "before",
    thousands_separator: "."
  },
  RwandaFranc: {
    code: "RWF" /* RwandaFranc */,
    countries: [CountryCode.Rwanda],
    decimal_digits: 0,
    decimal_separator: ",",
    name: "Rwanda Franc",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "RF",
    symbol_native: "RF",
    symbol_placement: "before",
    thousands_separator: "."
  },
  SaudiArabiaRiyal: {
    code: "SAR" /* SaudiArabiaRiyal */,
    countries: [CountryCode.SaudiArabia],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Saudi Arabia Riyal",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\uFDFC",
    symbol_native: "\uFDFC",
    symbol_placement: "before",
    thousands_separator: "."
  },
  SerbiaDinar: {
    code: "RSD" /* SerbiaDinar */,
    countries: [CountryCode.Serbia],
    decimal_digits: 0,
    decimal_separator: ",",
    name: "Serbia Dinar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u0414\u0438\u043D.",
    symbol_native: "\u0414\u0438\u043D.",
    symbol_placement: "before",
    thousands_separator: "."
  },
  SeychellesRupee: {
    code: "SCR" /* SeychellesRupee */,
    countries: [CountryCode.Seychelles],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Seychelles Rupee",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20A8",
    symbol_native: "\u20A8",
    symbol_placement: "before",
    thousands_separator: "."
  },
  SingaporeDollar: {
    code: "SGD" /* SingaporeDollar */,
    countries: [CountryCode.Singapore],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Singapore Dollar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$",
    symbol_native: "$",
    symbol_placement: "before",
    thousands_separator: "."
  },
  SlovakiaKoruna: {
    code: "SKK" /* SlovakiaKoruna */,
    countries: [CountryCode.Slovakia],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Slovakia Koruna",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "Sk",
    symbol_native: "Sk",
    symbol_placement: "before",
    thousands_separator: "."
  },
  SloveniaTolar: {
    code: "SIT" /* SloveniaTolar */,
    countries: [CountryCode.Slovenia],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Slovenia Tolar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "SIT",
    symbol_native: "SIT",
    symbol_placement: "before",
    thousands_separator: "."
  },
  SolomonIslandsDollar: {
    code: "SBD" /* SolomonIslandsDollar */,
    countries: [CountryCode.SolomonIslands],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Solomon Islands Dollar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$",
    symbol_native: "$",
    symbol_placement: "before",
    thousands_separator: "."
  },
  SomaliaShilling: {
    code: "SOS" /* SomaliaShilling */,
    countries: [CountryCode.Somalia],
    decimal_digits: 0,
    decimal_separator: ",",
    name: "Somalia Shilling",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "S",
    symbol_native: "S",
    symbol_placement: "before",
    thousands_separator: "."
  },
  SouthAfricaRand: {
    code: "ZAR" /* SouthAfricaRand */,
    countries: [CountryCode.SouthAfrica],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "South Africa Rand",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "R",
    symbol_native: "R",
    symbol_placement: "before",
    thousands_separator: "."
  },
  SouthKoreaWon: {
    code: "KRW" /* SouthKoreaWon */,
    countries: [CountryCode.SouthKorea],
    decimal_digits: 0,
    decimal_separator: ",",
    name: "South Korea Won",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20A9",
    symbol_native: "\u20A9",
    symbol_placement: "before",
    thousands_separator: "."
  },
  SriLankaRupee: {
    code: "LKR" /* SriLankaRupee */,
    countries: [CountryCode.SriLanka],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Sri Lanka Rupee",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20A8",
    symbol_native: "\u20A8",
    symbol_placement: "before",
    thousands_separator: "."
  },
  SudanPound: {
    code: "SDG" /* SudanPound */,
    countries: [CountryCode.Sudan],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Sudan Pound",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\xA3",
    symbol_native: "\xA3",
    symbol_placement: "before",
    thousands_separator: "."
  },
  SurinameDollar: {
    code: "SRD" /* SurinameDollar */,
    countries: [CountryCode.Suriname],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Suriname Dollar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$",
    symbol_native: "$",
    symbol_placement: "before",
    thousands_separator: "."
  },
  SwazilandLilangeni: {
    code: "SZL" /* SwazilandLilangeni */,
    countries: [CountryCode.Swaziland],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Swaziland Lilangeni",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "E",
    symbol_native: "E",
    symbol_placement: "before",
    thousands_separator: "."
  },
  SwedenKrona: {
    code: "SEK" /* SwedenKrona */,
    countries: [CountryCode.Sweden],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Sweden Krona",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "kr",
    symbol_native: "kr",
    symbol_placement: "before",
    thousands_separator: "."
  },
  SwitzerlandFranc: {
    code: "CHF" /* SwitzerlandFranc */,
    countries: [CountryCode.Switzerland],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Switzerland Franc",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "CHF",
    symbol_native: "CHF",
    symbol_placement: "before",
    thousands_separator: "."
  },
  SyriaPound: {
    code: "SYP" /* SyriaPound */,
    countries: [CountryCode.Syria],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Syria Pound",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\xA3",
    symbol_native: "\xA3",
    symbol_placement: "before",
    thousands_separator: "."
  },
  TaiwanNewDollar: {
    code: "TWD" /* TaiwanNewDollar */,
    countries: [CountryCode.Taiwan],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Taiwan New Dollar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "NT$",
    symbol_native: "NT$",
    symbol_placement: "before",
    thousands_separator: "."
  },
  TajikistanSomoni: {
    code: "TJS" /* TajikistanSomoni */,
    countries: [CountryCode.Tajikistan],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Tajikistan Somoni",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "TJS",
    symbol_native: "TJS",
    symbol_placement: "before",
    thousands_separator: "."
  },
  TanzaniaShilling: {
    code: "TZS" /* TanzaniaShilling */,
    countries: [CountryCode.Tanzania],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Tanzania Shilling",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "TSh",
    symbol_native: "TSh",
    symbol_placement: "before",
    thousands_separator: "."
  },
  ThailandBaht: {
    code: "THB" /* ThailandBaht */,
    countries: [CountryCode.Thailand],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Thailand Baht",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u0E3F",
    symbol_native: "\u0E3F",
    symbol_placement: "before",
    thousands_separator: "."
  },
  TunisiaDinar: {
    code: "TND" /* TunisiaDinar */,
    countries: [CountryCode.Tunisia],
    decimal_digits: 3,
    decimal_separator: ",",
    name: "Tunisia Dinar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u062F.\u062A",
    symbol_native: "\u062F.\u062A",
    symbol_placement: "before",
    thousands_separator: "."
  },
  TurkeyLira: {
    code: "TRY" /* TurkeyLira */,
    countries: [CountryCode.Turkey],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Turkey Lira",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20BA",
    symbol_native: "\u20BA",
    symbol_placement: "before",
    thousands_separator: "."
  },
  TurkmenistanManat: {
    code: "TMT" /* TurkmenistanManat */,
    countries: [CountryCode.Turkmenistan],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Turkmenistan Manat",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "m",
    symbol_native: "m",
    symbol_placement: "before",
    thousands_separator: "."
  },
  UgandaShilling: {
    code: "UGX" /* UgandaShilling */,
    countries: [CountryCode.Uganda],
    decimal_digits: 0,
    decimal_separator: ",",
    name: "Uganda Shilling",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "USh",
    symbol_native: "USh",
    symbol_placement: "before",
    thousands_separator: "."
  },
  UkraineHryvnia: {
    code: "UAH" /* UkraineHryvnia */,
    countries: [CountryCode.Ukraine],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Ukraine Hryvnia",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20B4",
    symbol_native: "\u20B4",
    symbol_placement: "before",
    thousands_separator: "."
  },
  UnitedArabEmiratesDirham: {
    code: "AED" /* UnitedArabEmiratesDirham */,
    countries: [CountryCode.UnitedArabEmirates],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "United Arab Emirates Dirham",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u062F.\u0625",
    symbol_native: "\u062F.\u0625",
    symbol_placement: "before",
    thousands_separator: "."
  },
  UnitedKingdomPound: {
    code: "GBP" /* UnitedKingdomPound */,
    countries: [CountryCode.UnitedKingdom],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "United Kingdom Pound",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\xA3",
    symbol_native: "\xA3",
    symbol_placement: "before",
    thousands_separator: "."
  },
  UnitedStatesDollar: {
    code: "USD" /* UnitedStatesDollar */,
    countries: [CountryCode.UnitedStates],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "United States Dollar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$",
    symbol_native: "$",
    symbol_placement: "before",
    thousands_separator: "."
  },
  UruguayPeso: {
    code: "UYU" /* UruguayPeso */,
    countries: [CountryCode.Uruguay],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Uruguay Peso",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "$U",
    symbol_native: "$U",
    symbol_placement: "before",
    thousands_separator: "."
  },
  UzbekistanSom: {
    code: "UZS" /* UzbekistanSom */,
    countries: [CountryCode.Uzbekistan],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Uzbekistan Som",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "UZS",
    symbol_native: "UZS",
    symbol_placement: "before",
    thousands_separator: "."
  },
  VanuatuVatu: {
    code: "VUV" /* VanuatuVatu */,
    countries: [CountryCode.Vanuatu],
    decimal_digits: 0,
    decimal_separator: ",",
    name: "Vanuatu Vatu",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "VT",
    symbol_native: "VT",
    symbol_placement: "before",
    thousands_separator: "."
  },
  VenezuelaBolivar: {
    code: "VEF" /* VenezuelaBolivar */,
    countries: [CountryCode.Venezuela],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Venezuela Bolivar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "Bs. F",
    symbol_native: "Bs. F",
    symbol_placement: "before",
    thousands_separator: "."
  },
  VietnamDong: {
    code: "VND" /* VietnamDong */,
    countries: [CountryCode.Vietnam],
    decimal_digits: 0,
    decimal_separator: ",",
    name: "Vietnam Dong",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20AB",
    symbol_native: "\u20AB",
    symbol_placement: "before",
    thousands_separator: "."
  },
  YemenRial: {
    code: "YER" /* YemenRial */,
    countries: [CountryCode.Yemen],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Yemen Rial",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\uFDFC",
    symbol_native: "\uFDFC",
    symbol_placement: "before",
    thousands_separator: "."
  },
  ZambiaKwacha: {
    code: "ZMW" /* ZambiaKwacha */,
    countries: [CountryCode.Zambia],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Zambia Kwacha",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "ZK",
    symbol_native: "ZK",
    symbol_placement: "before",
    thousands_separator: "."
  },
  ZimbabweDollar: {
    code: "ZWL" /* ZimbabweDollar */,
    countries: [CountryCode.Zimbabwe],
    decimal_digits: 2,
    decimal_separator: ",",
    name: "Zimbabwe Dollar",
    negative_sign: "-",
    positive_sign: "",
    rounding: 0,
    symbol: "\u20AB",
    symbol_native: "\u20AB",
    symbol_placement: "before",
    thousands_separator: "."
  }
});

var LanguageCode = /* @__PURE__ */ ((LanguageCode2) => {
  LanguageCode2["Afrikaans"] = "af";
  LanguageCode2["Albanian"] = "sq";
  LanguageCode2["Amharic"] = "am";
  LanguageCode2["Arabic"] = "ar";
  LanguageCode2["Armenian"] = "hy";
  LanguageCode2["Azerbaijani"] = "az";
  LanguageCode2["Bashkir"] = "ba";
  LanguageCode2["Basque"] = "eu";
  LanguageCode2["Belarusian"] = "be";
  LanguageCode2["Bengali"] = "bn";
  LanguageCode2["Berber"] = "ber";
  LanguageCode2["Bhutani"] = "dz";
  LanguageCode2["Bihari"] = "bh";
  LanguageCode2["Bislama"] = "bi";
  LanguageCode2["Bosnian"] = "bs";
  LanguageCode2["Breten"] = "br";
  LanguageCode2["Bulgarian"] = "bg";
  LanguageCode2["Burmese"] = "my";
  LanguageCode2["Cantonese"] = "yue";
  LanguageCode2["Catalan"] = "ca";
  LanguageCode2["Chinese"] = "zh";
  LanguageCode2["Chuvash"] = "cv";
  LanguageCode2["Corsican"] = "co";
  LanguageCode2["Croatian"] = "hr";
  LanguageCode2["Czech"] = "cs";
  LanguageCode2["Danish"] = "da";
  LanguageCode2["Dari"] = "prs";
  LanguageCode2["Divehi"] = "dv";
  LanguageCode2["Dutch"] = "nl";
  LanguageCode2["English"] = "en";
  LanguageCode2["Esperanto"] = "eo";
  LanguageCode2["Estonian"] = "et";
  LanguageCode2["Faroese"] = "fo";
  LanguageCode2["Farsi"] = "fa";
  LanguageCode2["Filipino"] = "fil";
  LanguageCode2["Finnish"] = "fi";
  LanguageCode2["French"] = "fr";
  LanguageCode2["Frisian"] = "fy";
  LanguageCode2["Galician"] = "gl";
  LanguageCode2["Georgian"] = "ka";
  LanguageCode2["German"] = "de";
  LanguageCode2["Greek"] = "el";
  LanguageCode2["Greenlandic"] = "kl";
  LanguageCode2["Gujarati"] = "gu";
  LanguageCode2["Haitian"] = "ht";
  LanguageCode2["Hausa"] = "ha";
  LanguageCode2["Hebrew"] = "he";
  LanguageCode2["Hindi"] = "hi";
  LanguageCode2["Hungarian"] = "hu";
  LanguageCode2["Icelandic"] = "is";
  LanguageCode2["Igbo"] = "ig";
  LanguageCode2["Indonesian"] = "id";
  LanguageCode2["Irish"] = "ga";
  LanguageCode2["Italian"] = "it";
  LanguageCode2["Japanese"] = "ja";
  LanguageCode2["Javanese"] = "jv";
  LanguageCode2["Kannada"] = "kn";
  LanguageCode2["Karelian"] = "krl";
  LanguageCode2["Kazakh"] = "kk";
  LanguageCode2["Khmer"] = "km";
  LanguageCode2["Komi"] = "kv";
  LanguageCode2["Konkani"] = "kok";
  LanguageCode2["Korean"] = "ko";
  LanguageCode2["Kurdish"] = "ku";
  LanguageCode2["Kyrgyz"] = "ky";
  LanguageCode2["Lao"] = "lo";
  LanguageCode2["Latin"] = "la";
  LanguageCode2["Latvian"] = "lv";
  LanguageCode2["Lithuanian"] = "lt";
  LanguageCode2["Luxembourgish"] = "lb";
  LanguageCode2["Ossetian"] = "os";
  LanguageCode2["Macedonian"] = "mk";
  LanguageCode2["Malagasy"] = "mg";
  LanguageCode2["Malay"] = "ms";
  LanguageCode2["Malayalam"] = "ml";
  LanguageCode2["Maltese"] = "mt";
  LanguageCode2["Maori"] = "mi";
  LanguageCode2["Marathi"] = "mr";
  LanguageCode2["Mari"] = "mhr";
  LanguageCode2["Mongolian"] = "mn";
  LanguageCode2["Montenegrin"] = "me";
  LanguageCode2["Nepali"] = "ne";
  LanguageCode2["NorthernSotho"] = "nso";
  LanguageCode2["Norwegian"] = "no";
  LanguageCode2["NorwegianBokmal"] = "nb";
  LanguageCode2["NorwegianNynorsk"] = "nn";
  LanguageCode2["Oriya"] = "or";
  LanguageCode2["Pashto"] = "ps";
  LanguageCode2["Persian"] = "fa";
  LanguageCode2["Polish"] = "pl";
  LanguageCode2["Portuguese"] = "pt";
  LanguageCode2["Punjabi"] = "pa";
  LanguageCode2["Quechua"] = "qu";
  LanguageCode2["Romanian"] = "ro";
  LanguageCode2["Russian"] = "ru";
  LanguageCode2["Sakha"] = "sah";
  LanguageCode2["Sami"] = "se";
  LanguageCode2["Samoan"] = "sm";
  LanguageCode2["Sanskrit"] = "sa";
  LanguageCode2["Scots"] = "gd";
  LanguageCode2["Serbian"] = "sr";
  LanguageCode2["SerbianCyrillic"] = "sr-Cyrl";
  LanguageCode2["Sesotho"] = "st";
  LanguageCode2["Shona"] = "sn";
  LanguageCode2["Sindhi"] = "sd";
  LanguageCode2["Sinhala"] = "si";
  LanguageCode2["Slovak"] = "sk";
  LanguageCode2["Slovenian"] = "sl";
  LanguageCode2["Somali"] = "so";
  LanguageCode2["Spanish"] = "es";
  LanguageCode2["Sudanese"] = "su";
  LanguageCode2["Sutu"] = "sx";
  LanguageCode2["Swahili"] = "sw";
  LanguageCode2["Swedish"] = "sv";
  LanguageCode2["Syriac"] = "syr";
  LanguageCode2["Tagalog"] = "tl";
  LanguageCode2["Tajik"] = "tg";
  LanguageCode2["Tamazight"] = "tmh";
  LanguageCode2["Tamil"] = "ta";
  LanguageCode2["Tatar"] = "tt";
  LanguageCode2["Telugu"] = "te";
  LanguageCode2["Thai"] = "th";
  LanguageCode2["Tibetan"] = "bo";
  LanguageCode2["Tsonga"] = "ts";
  LanguageCode2["Tswana"] = "tn";
  LanguageCode2["Turkish"] = "tr";
  LanguageCode2["Turkmen"] = "tk";
  LanguageCode2["Ukrainian"] = "uk";
  LanguageCode2["Urdu"] = "ur";
  LanguageCode2["Uzbek"] = "uz";
  LanguageCode2["Vietnamese"] = "vi";
  LanguageCode2["Welsh"] = "cy";
  LanguageCode2["Xhosa"] = "xh";
  LanguageCode2["Yiddish"] = "yi";
  LanguageCode2["Yoruba"] = "yo";
  LanguageCode2["Zulu"] = "zu";
  return LanguageCode2;
})(LanguageCode || {});

var LocaleCode = /* @__PURE__ */ ((LocaleCode2) => {
  LocaleCode2["Afrikaans"] = "af";
  LocaleCode2["AfrikaansSouthAfrica"] = "af-ZA";
  LocaleCode2["Albanian"] = "sq";
  LocaleCode2["AlbanianAlbania"] = "sq-AL";
  LocaleCode2["Amharic"] = "am";
  LocaleCode2["AmharicEthiopia"] = "am-ET";
  LocaleCode2["Arabic"] = "ar";
  LocaleCode2["ArabicAlgeria"] = "ar-DZ";
  LocaleCode2["ArabicBahrain"] = "ar-BH";
  LocaleCode2["ArabicEgypt"] = "ar-EG";
  LocaleCode2["ArabicIraq"] = "ar-IQ";
  LocaleCode2["ArabicJordan"] = "ar-JO";
  LocaleCode2["ArabicKuwait"] = "ar-KW";
  LocaleCode2["ArabicLebanon"] = "ar-LB";
  LocaleCode2["ArabicLibya"] = "ar-LY";
  LocaleCode2["ArabicMorocco"] = "ar-MA";
  LocaleCode2["ArabicOman"] = "ar-OM";
  LocaleCode2["ArabicQatar"] = "ar-QA";
  LocaleCode2["ArabicSaudiArabia"] = "ar-SA";
  LocaleCode2["ArabicSyria"] = "ar-SY";
  LocaleCode2["ArabicTunisia"] = "ar-TN";
  LocaleCode2["ArabicUnitedArabEmirates"] = "ar-AE";
  LocaleCode2["ArabicYemen"] = "ar-YE";
  LocaleCode2["Armenian"] = "hy";
  LocaleCode2["ArmenianArmenia"] = "hy-AM";
  LocaleCode2["Azerbaijani"] = "az";
  LocaleCode2["AzerbaijaniAzerbaijan"] = "az-AZ";
  LocaleCode2["AzerbaijaniCyrillicAzerbaijan"] = "az-Cyrl-AZ";
  LocaleCode2["Bashkir"] = "ba";
  LocaleCode2["Basque"] = "eu";
  LocaleCode2["BasqueSpain"] = "eu-ES";
  LocaleCode2["Belarusian"] = "be";
  LocaleCode2["BelarusianBelarus"] = "be-BY";
  LocaleCode2["Bengali"] = "bn";
  LocaleCode2["BengaliBangladesh"] = "bn-BD";
  LocaleCode2["BengaliIndia"] = "bn-IN";
  LocaleCode2["Berber"] = "ber";
  LocaleCode2["Bhutani"] = "dz";
  LocaleCode2["BhutaniBhutan"] = "dz-BT";
  LocaleCode2["Bosnian"] = "bs";
  LocaleCode2["BosnianBosniaAndHerzegovina"] = "bs-BA";
  LocaleCode2["Breton"] = "br";
  LocaleCode2["Bulgarian"] = "bg";
  LocaleCode2["BulgarianBosniaAndHerzegovina"] = "bg-BG";
  LocaleCode2["BulgarianBulgaria"] = "bg-BG";
  LocaleCode2["Burmese"] = "my";
  LocaleCode2["BurmeseMyanmar"] = "my-MM";
  LocaleCode2["Cantonese"] = "yue";
  LocaleCode2["CantoneseHongKong"] = "yue-HK";
  LocaleCode2["Catalan"] = "ca";
  LocaleCode2["CatalanSpain"] = "ca-ES";
  LocaleCode2["Chechen"] = "ce";
  LocaleCode2["Cherokee"] = "chr";
  LocaleCode2["Chinese"] = "zh";
  LocaleCode2["ChineseSimplified"] = "zh-Hans";
  LocaleCode2["ChineseSimplifiedChina"] = "zh-Hans-CN";
  LocaleCode2["ChineseSimplifiedHongKong"] = "zh-Hans-HK";
  LocaleCode2["ChineseSimplifiedMacau"] = "zh-Hans-MO";
  LocaleCode2["ChineseSimplifiedSingapore"] = "zh-Hans-SG";
  LocaleCode2["ChineseTraditional"] = "zh-Hant";
  LocaleCode2["ChineseTraditionalHongKong"] = "zh-Hant-HK";
  LocaleCode2["ChineseTraditionalMacau"] = "zh-Hant-MO";
  LocaleCode2["ChineseTraditionalSingapore"] = "zh-Hant-SG";
  LocaleCode2["ChineseTraditionalTaiwan"] = "zh-Hant-TW";
  LocaleCode2["Chuvash"] = "cv";
  LocaleCode2["CorsicanFrance"] = "co-FR";
  LocaleCode2["Croatian"] = "hr";
  LocaleCode2["CroatianBosniaAndHerzegovina"] = "hr-BA";
  LocaleCode2["CroatianCroatia"] = "hr-HR";
  LocaleCode2["Czech"] = "cs";
  LocaleCode2["CzechCzechRepublic"] = "cs-CZ";
  LocaleCode2["Danish"] = "da";
  LocaleCode2["DanishDenmark"] = "da-DK";
  LocaleCode2["Dari"] = "prs";
  LocaleCode2["DariAfghanistan"] = "prs-AF";
  LocaleCode2["Divehi"] = "dv";
  LocaleCode2["DivehiMaldives"] = "dv-MV";
  LocaleCode2["Dutch"] = "nl";
  LocaleCode2["DutchBelgium"] = "nl-BE";
  LocaleCode2["DutchNetherlands"] = "nl-NL";
  LocaleCode2["English"] = "en";
  LocaleCode2["EnglishAustralia"] = "en-AU";
  LocaleCode2["EnglishBelgium"] = "en-BE";
  LocaleCode2["EnglishBelize"] = "en-BZ";
  LocaleCode2["EnglishCanada"] = "en-CA";
  LocaleCode2["EnglishCaribbean"] = "en-029";
  LocaleCode2["EnglishIreland"] = "en-IE";
  LocaleCode2["EnglishJamaica"] = "en-JM";
  LocaleCode2["EnglishNewZealand"] = "en-NZ";
  LocaleCode2["EnglishPhilippines"] = "en-PH";
  LocaleCode2["EnglishSingapore"] = "en-SG";
  LocaleCode2["EnglishSouthAfrica"] = "en-ZA";
  LocaleCode2["EnglishTrinidadAndTobago"] = "en-TT";
  LocaleCode2["EnglishUnitedKingdom"] = "en-GB";
  LocaleCode2["EnglishUnitedStates"] = "en-US";
  LocaleCode2["EnglishZimbabwe"] = "en-ZW";
  LocaleCode2["Esperanto"] = "eo";
  LocaleCode2["Estonian"] = "et";
  LocaleCode2["EstonianEstonia"] = "et-EE";
  LocaleCode2["Faroese"] = "fo";
  LocaleCode2["FaroeseFaroeIslands"] = "fo-FO";
  LocaleCode2["Farsi"] = "fa";
  LocaleCode2["FarsiIran"] = "fa-IR";
  LocaleCode2["Filipino"] = "fil";
  LocaleCode2["FilipinoPhilippines"] = "fil-PH";
  LocaleCode2["Finnish"] = "fi";
  LocaleCode2["FinnishFinland"] = "fi-FI";
  LocaleCode2["French"] = "fr";
  LocaleCode2["FrenchBelgium"] = "fr-BE";
  LocaleCode2["FrenchCanada"] = "fr-CA";
  LocaleCode2["FrenchFrance"] = "fr-FR";
  LocaleCode2["FrenchLuxembourg"] = "fr-LU";
  LocaleCode2["FrenchMonaco"] = "fr-MC";
  LocaleCode2["FrenchReunion"] = "fr-RE";
  LocaleCode2["FrenchSwitzerland"] = "fr-CH";
  LocaleCode2["Frisian"] = "fy";
  LocaleCode2["FrisianNetherlands"] = "fy-NL";
  LocaleCode2["Galician"] = "gl";
  LocaleCode2["GalicianSpain"] = "gl-ES";
  LocaleCode2["Georgian"] = "ka";
  LocaleCode2["GeorgianGeorgia"] = "ka-GE";
  LocaleCode2["German"] = "de";
  LocaleCode2["GermanAustria"] = "de-AT";
  LocaleCode2["GermanBelgium"] = "de-BE";
  LocaleCode2["GermanGermany"] = "de-DE";
  LocaleCode2["GermanLiechtenstein"] = "de-LI";
  LocaleCode2["GermanLuxembourg"] = "de-LU";
  LocaleCode2["GermanSwitzerland"] = "de-CH";
  LocaleCode2["Greenlandic"] = "kl";
  LocaleCode2["GreenlandicGreenland"] = "kl-GL";
  LocaleCode2["Greek"] = "el";
  LocaleCode2["GreekGreece"] = "el-GR";
  LocaleCode2["Gujarati"] = "gu";
  LocaleCode2["GujaratiIndia"] = "gu-IN";
  LocaleCode2["Haitian"] = "ht";
  LocaleCode2["Hausa"] = "ha";
  LocaleCode2["HausaGhana"] = "ha-GH";
  LocaleCode2["HausaNiger"] = "ha-NE";
  LocaleCode2["HausaNigeria"] = "ha-NG";
  LocaleCode2["Hebrew"] = "he";
  LocaleCode2["HebrewIsrael"] = "he-IL";
  LocaleCode2["Hindi"] = "hi";
  LocaleCode2["HindiIndia"] = "hi-IN";
  LocaleCode2["Hungarian"] = "hu";
  LocaleCode2["HungarianHungary"] = "hu-HU";
  LocaleCode2["Icelandic"] = "is";
  LocaleCode2["IcelandicIceland"] = "is-IS";
  LocaleCode2["Igbo"] = "ig";
  LocaleCode2["IgboNigeria"] = "ig-NG";
  LocaleCode2["Indonesian"] = "id";
  LocaleCode2["IndonesianIndonesia"] = "id-ID";
  LocaleCode2["Irish"] = "ga";
  LocaleCode2["IrishIreland"] = "ga-IE";
  LocaleCode2["Italian"] = "it";
  LocaleCode2["ItalianItaly"] = "it-IT";
  LocaleCode2["ItalianSwitzerland"] = "it-CH";
  LocaleCode2["Japanese"] = "ja";
  LocaleCode2["JapaneseJapan"] = "ja-JP";
  LocaleCode2["Javanese"] = "jv";
  LocaleCode2["Kannada"] = "kn";
  LocaleCode2["KannadaIndia"] = "kn-IN";
  LocaleCode2["Karelian"] = "krl";
  LocaleCode2["Kazakh"] = "kk";
  LocaleCode2["KazakhKazakhstan"] = "kk-KZ";
  LocaleCode2["Khmer"] = "km";
  LocaleCode2["KhmerCambodia"] = "km-KH";
  LocaleCode2["KinyarwandaRwanda"] = "rw-RW";
  LocaleCode2["Komi"] = "kv";
  LocaleCode2["Konkani"] = "kok";
  LocaleCode2["KonkaniIndia"] = "kok-IN";
  LocaleCode2["Korean"] = "ko";
  LocaleCode2["KoreanSouthKorea"] = "ko-KR";
  LocaleCode2["Kurdish"] = "ku";
  LocaleCode2["KurdishIraq"] = "ku-IQ";
  LocaleCode2["KurdishTurkey"] = "ku-TR";
  LocaleCode2["Kyrgyz"] = "ky";
  LocaleCode2["KyrgyzKyrgyzstan"] = "ky-KG";
  LocaleCode2["Lao"] = "lo";
  LocaleCode2["LaoLaos"] = "lo-LA";
  LocaleCode2["Latin"] = "la";
  LocaleCode2["Latvian"] = "lv";
  LocaleCode2["LatvianLatvia"] = "lv-LV";
  LocaleCode2["Lithuanian"] = "lt";
  LocaleCode2["LithuanianLithuania"] = "lt-LT";
  LocaleCode2["Luxembourgish"] = "lb";
  LocaleCode2["LuxembourgishBelgium"] = "lb-LU";
  LocaleCode2["LuxembourgishLuxembourg"] = "lb-LU";
  LocaleCode2["Macedonian"] = "mk";
  LocaleCode2["MacedonianNorthMacedonia"] = "mk-MK";
  LocaleCode2["Malagasy"] = "mg";
  LocaleCode2["Malay"] = "ms";
  LocaleCode2["MalayBrunei"] = "ms-BN";
  LocaleCode2["MalayIndia"] = "ms-IN";
  LocaleCode2["MalayMalaysia"] = "ms-MY";
  LocaleCode2["MalaySingapore"] = "ms-SG";
  LocaleCode2["Malayalam"] = "ml";
  LocaleCode2["MalayalamIndia"] = "ml-IN";
  LocaleCode2["Maltese"] = "mt";
  LocaleCode2["MalteseMalta"] = "mt-MT";
  LocaleCode2["Maori"] = "mi";
  LocaleCode2["MaoriNewZealand"] = "mi-NZ";
  LocaleCode2["Marathi"] = "mr";
  LocaleCode2["MarathiIndia"] = "mr-IN";
  LocaleCode2["Mari"] = "chm";
  LocaleCode2["Mongolian"] = "mn";
  LocaleCode2["MongolianMongolia"] = "mn-MN";
  LocaleCode2["Montenegrin"] = "me";
  LocaleCode2["MontenegrinMontenegro"] = "me-ME";
  LocaleCode2["Nepali"] = "ne";
  LocaleCode2["NepaliNepal"] = "ne-NP";
  LocaleCode2["NorthernSotho"] = "ns";
  LocaleCode2["NorthernSothoSouthAfrica"] = "ns-ZA";
  LocaleCode2["Norwegian"] = "nb";
  LocaleCode2["NorwegianBokmalNorway"] = "nb-NO";
  LocaleCode2["NorwegianNynorskNorway"] = "nn-NO";
  LocaleCode2["Oriya"] = "or";
  LocaleCode2["OriyaIndia"] = "or-IN";
  LocaleCode2["Ossetian"] = "os";
  LocaleCode2["Pashto"] = "ps";
  LocaleCode2["PashtoAfghanistan"] = "ps-AF";
  LocaleCode2["Persian"] = "fa";
  LocaleCode2["PersianIran"] = "fa-IR";
  LocaleCode2["Polish"] = "pl";
  LocaleCode2["PolishPoland"] = "pl-PL";
  LocaleCode2["Portuguese"] = "pt";
  LocaleCode2["PortugueseBrazil"] = "pt-BR";
  LocaleCode2["PortuguesePortugal"] = "pt-PT";
  LocaleCode2["Punjabi"] = "pa";
  LocaleCode2["PunjabiIndia"] = "pa-IN";
  LocaleCode2["PunjabiPakistan"] = "pa-PK";
  LocaleCode2["Quechua"] = "qu";
  LocaleCode2["QuechuaBolivia"] = "qu-BO";
  LocaleCode2["QuechuaEcuador"] = "qu-EC";
  LocaleCode2["QuechuaPeru"] = "qu-PE";
  LocaleCode2["Romanian"] = "ro";
  LocaleCode2["RomanianRomania"] = "ro-RO";
  LocaleCode2["Russian"] = "ru";
  LocaleCode2["RussianKazakhstan"] = "ru-KZ";
  LocaleCode2["RussianKyrgyzstan"] = "ru-KG";
  LocaleCode2["RussianRussia"] = "ru-RU";
  LocaleCode2["RussianUkraine"] = "ru-UA";
  LocaleCode2["Sakha"] = "sah";
  LocaleCode2["Sanskrit"] = "sa";
  LocaleCode2["SanskritIndia"] = "sa-IN";
  LocaleCode2["Sami"] = "se";
  LocaleCode2["SamiNorway"] = "se-NO";
  LocaleCode2["SamiSweden"] = "se-SE";
  LocaleCode2["SamiFinland"] = "se-FI";
  LocaleCode2["Samoan"] = "sm";
  LocaleCode2["SamoanSamoa"] = "sm-WS";
  LocaleCode2["Scots"] = "gd";
  LocaleCode2["Serbian"] = "sr";
  LocaleCode2["SerbianBosniaAndHerzegovina"] = "sr-BA";
  LocaleCode2["SerbianSerbiaAndMontenegro"] = "sr-SP";
  LocaleCode2["SerbianCyrillic"] = "sr-SP-Cyrl";
  LocaleCode2["SerbianCyrillicBosniaAndHerzegovina"] = "sr-Cyrl-BA";
  LocaleCode2["SerbianCyrillicSerbiaAndMontenegro"] = "sr-Cyrl-SP";
  LocaleCode2["Sesotho"] = "st";
  LocaleCode2["SesothoSouthAfrica"] = "st-ZA";
  LocaleCode2["Shona"] = "sn";
  LocaleCode2["ShonaZimbabwe"] = "sn-ZW";
  LocaleCode2["Sindhi"] = "sd";
  LocaleCode2["SindhiPakistan"] = "sd-PK";
  LocaleCode2["Sinhala"] = "si";
  LocaleCode2["SinhalaSriLanka"] = "si-LK";
  LocaleCode2["Slovak"] = "sk";
  LocaleCode2["SlovakSlovakia"] = "sk-SK";
  LocaleCode2["Slovenian"] = "sl";
  LocaleCode2["SlovenianSlovenia"] = "sl-SI";
  LocaleCode2["Somali"] = "so";
  LocaleCode2["SomaliSomalia"] = "so-SO";
  LocaleCode2["Spanish"] = "es";
  LocaleCode2["SpanishArgentina"] = "es-AR";
  LocaleCode2["SpanishBolivia"] = "es-BO";
  LocaleCode2["SpanishChile"] = "es-CL";
  LocaleCode2["SpanishColombia"] = "es-CO";
  LocaleCode2["SpanishCostaRica"] = "es-CR";
  LocaleCode2["SpanishCuba"] = "es-CU";
  LocaleCode2["SpanishDominicanRepublic"] = "es-DO";
  LocaleCode2["SpanishEcuador"] = "es-EC";
  LocaleCode2["SpanishEquatorialGuinea"] = "es-GQ";
  LocaleCode2["SpanishElSalvador"] = "es-SV";
  LocaleCode2["SpanishGuatemala"] = "es-GT";
  LocaleCode2["SpanishHonduras"] = "es-HN";
  LocaleCode2["SpanishMexico"] = "es-MX";
  LocaleCode2["SpanishNicaragua"] = "es-NI";
  LocaleCode2["SpanishPanama"] = "es-PA";
  LocaleCode2["SpanishParaguay"] = "es-PY";
  LocaleCode2["SpanishPeru"] = "es-PE";
  LocaleCode2["SpanishPuertoRico"] = "es-PR";
  LocaleCode2["SpanishSpain"] = "es-ES";
  LocaleCode2["SpanishUnitedStates"] = "es-US";
  LocaleCode2["SpanishUruguay"] = "es-UY";
  LocaleCode2["SpanishVenezuela"] = "es-VE";
  LocaleCode2["Sudanese"] = "su";
  LocaleCode2["Sutu"] = "st";
  LocaleCode2["SutuSouthAfrica"] = "st-ZA";
  LocaleCode2["Swahili"] = "sw";
  LocaleCode2["SwahiliKenya"] = "sw-KE";
  LocaleCode2["Swedish"] = "sv";
  LocaleCode2["SwedishFinland"] = "sv-FI";
  LocaleCode2["SwedishSweden"] = "sv-SE";
  LocaleCode2["Syriac"] = "syr";
  LocaleCode2["SyriacSyria"] = "syr-SY";
  LocaleCode2["Tajik"] = "tg";
  LocaleCode2["TajikTajikistan"] = "tg-TJ";
  LocaleCode2["Tagalog"] = "tl";
  LocaleCode2["TagalogPhilippines"] = "tl-PH";
  LocaleCode2["Tamazight"] = "tmh";
  LocaleCode2["Tamil"] = "ta";
  LocaleCode2["TamilIndia"] = "ta-IN";
  LocaleCode2["Tatar"] = "tt";
  LocaleCode2["Telugu"] = "te";
  LocaleCode2["TeluguIndia"] = "te-IN";
  LocaleCode2["Thai"] = "th";
  LocaleCode2["ThaiThailand"] = "th-TH";
  LocaleCode2["Tibetan"] = "bo";
  LocaleCode2["TibetanBhutan"] = "bo-BT";
  LocaleCode2["TibetanChina"] = "bo-CN";
  LocaleCode2["TibetanIndia"] = "bo-IN";
  LocaleCode2["Tsonga"] = "ts";
  LocaleCode2["Tswana"] = "tn";
  LocaleCode2["TswanaSouthAfrica"] = "tn-ZA";
  LocaleCode2["Turkish"] = "tr";
  LocaleCode2["TurkishTurkey"] = "tr-TR";
  LocaleCode2["Turkmen"] = "tk";
  LocaleCode2["Ukrainian"] = "uk";
  LocaleCode2["UkrainianUkraine"] = "uk-UA";
  LocaleCode2["Urdu"] = "ur";
  LocaleCode2["UrduAfghanistan"] = "ur-AF";
  LocaleCode2["UrduIndia"] = "ur-IN";
  LocaleCode2["UrduPakistan"] = "ur-PK";
  LocaleCode2["Uzbek"] = "uz";
  LocaleCode2["UzbekCyrillic"] = "uz-Cyrl-UZ";
  LocaleCode2["UzbekLatin"] = "uz-Latn-UZ";
  LocaleCode2["UzbekUzbekistan"] = "uz-UZ";
  LocaleCode2["Vietnamese"] = "vi";
  LocaleCode2["VietnameseVietnam"] = "vi-VN";
  LocaleCode2["Welsh"] = "cy";
  LocaleCode2["WelshUnitedKingdom"] = "cy-GB";
  LocaleCode2["Xhosa"] = "xh";
  LocaleCode2["XhosaSouthAfrica"] = "xh-ZA";
  LocaleCode2["Yiddish"] = "yi";
  LocaleCode2["Yoruba"] = "yo";
  LocaleCode2["YorubaNigeria"] = "yo-NG";
  LocaleCode2["ZhuyinMandarinChina"] = "yue-Hant-CN";
  LocaleCode2["Zulu"] = "zu";
  LocaleCode2["ZuluSouthAfrica"] = "zu-ZA";
  return LocaleCode2;
})(LocaleCode || {});

var TimezoneRegions = /* @__PURE__ */ ((TimezoneRegions2) => {
  TimezoneRegions2["AfricaAbidjan"] = "Africa/Abidjan";
  TimezoneRegions2["AfricaAccra"] = "Africa/Accra";
  TimezoneRegions2["AfricaAddisAbaba"] = "Africa/Addis_Ababa";
  TimezoneRegions2["AfricaAlgiers"] = "Africa/Algiers";
  TimezoneRegions2["AfricaAsmara"] = "Africa/Asmara";
  TimezoneRegions2["AfricaBamako"] = "Africa/Bamako";
  TimezoneRegions2["AfricaBangui"] = "Africa/Bangui";
  TimezoneRegions2["AfricaBanjul"] = "Africa/Banjul";
  TimezoneRegions2["AfricaBissau"] = "Africa/Bissau";
  TimezoneRegions2["AfricaBlantyre"] = "Africa/Blantyre";
  TimezoneRegions2["AfricaBrazzaville"] = "Africa/Brazzaville";
  TimezoneRegions2["AfricaBujumbura"] = "Africa/Bujumbura";
  TimezoneRegions2["AfricaCairo"] = "Africa/Cairo";
  TimezoneRegions2["AfricaCasablanca"] = "Africa/Casablanca";
  TimezoneRegions2["AfricaCeuta"] = "Africa/Ceuta";
  TimezoneRegions2["AfricaConakry"] = "Africa/Conakry";
  TimezoneRegions2["AfricaDakar"] = "Africa/Dakar";
  TimezoneRegions2["AfricaDarEsSalaam"] = "Africa/Dar_es_Salaam";
  TimezoneRegions2["AfricaDjibouti"] = "Africa/Djibouti";
  TimezoneRegions2["AfricaDouala"] = "Africa/Douala";
  TimezoneRegions2["AfricaElAaiun"] = "Africa/El_Aaiun";
  TimezoneRegions2["AfricaFreetown"] = "Africa/Freetown";
  TimezoneRegions2["AfricaGaborone"] = "Africa/Gaborone";
  TimezoneRegions2["AfricaHarare"] = "Africa/Harare";
  TimezoneRegions2["AfricaJohannesburg"] = "Africa/Johannesburg";
  TimezoneRegions2["AfricaJuba"] = "Africa/Juba";
  TimezoneRegions2["AfricaKampala"] = "Africa/Kampala";
  TimezoneRegions2["AfricaKhartoum"] = "Africa/Khartoum";
  TimezoneRegions2["AfricaKigali"] = "Africa/Kigali";
  TimezoneRegions2["AfricaKinshasa"] = "Africa/Kinshasa";
  TimezoneRegions2["AfricaLagos"] = "Africa/Lagos";
  TimezoneRegions2["AfricaLibreville"] = "Africa/Libreville";
  TimezoneRegions2["AfricaLome"] = "Africa/Lome";
  TimezoneRegions2["AfricaLuanda"] = "Africa/Luanda";
  TimezoneRegions2["AfricaLubumbashi"] = "Africa/Lubumbashi";
  TimezoneRegions2["AfricaLusaka"] = "Africa/Lusaka";
  TimezoneRegions2["AfricaMalabo"] = "Africa/Malabo";
  TimezoneRegions2["AfricaMaputo"] = "Africa/Maputo";
  TimezoneRegions2["AfricaMaseru"] = "Africa/Maseru";
  TimezoneRegions2["AfricaMbabane"] = "Africa/Mbabane";
  TimezoneRegions2["AfricaMogadishu"] = "Africa/Mogadishu";
  TimezoneRegions2["AfricaMonrovia"] = "Africa/Monrovia";
  TimezoneRegions2["AfricaNairobi"] = "Africa/Nairobi";
  TimezoneRegions2["AfricaNdjamena"] = "Africa/Ndjamena";
  TimezoneRegions2["AfricaNiamey"] = "Africa/Niamey";
  TimezoneRegions2["AfricaNouakchott"] = "Africa/Nouakchott";
  TimezoneRegions2["AfricaOuagadougou"] = "Africa/Ouagadougou";
  TimezoneRegions2["AfricaPortoNovo"] = "Africa/Porto-Novo";
  TimezoneRegions2["AfricaSaoTome"] = "Africa/Sao_Tome";
  TimezoneRegions2["AfricaTripoli"] = "Africa/Tripoli";
  TimezoneRegions2["AfricaTunis"] = "Africa/Tunis";
  TimezoneRegions2["AfricaWindhoek"] = "Africa/Windhoek";
  TimezoneRegions2["AmericaAdak"] = "America/Adak";
  TimezoneRegions2["AmericaAnchorage"] = "America/Anchorage";
  TimezoneRegions2["AmericaAnguilla"] = "America/Anguilla";
  TimezoneRegions2["AmericaAntigua"] = "America/Antigua";
  TimezoneRegions2["AmericaAraguaina"] = "America/Araguaina";
  TimezoneRegions2["AmericaArgentinaBuenosAires"] = "America/Argentina/Buenos_Aires";
  TimezoneRegions2["AmericaArgentinaCatamarca"] = "America/Argentina/Catamarca";
  TimezoneRegions2["AmericaArgentinaCordoba"] = "America/Argentina/Cordoba";
  TimezoneRegions2["AmericaArgentinaJujuy"] = "America/Argentina/Jujuy";
  TimezoneRegions2["AmericaArgentinaLaRioja"] = "America/Argentina/La_Rioja";
  TimezoneRegions2["AmericaArgentinaMendoza"] = "America/Argentina/Mendoza";
  TimezoneRegions2["AmericaArgentinaRioGallegos"] = "America/Argentina/Rio_Gallegos";
  TimezoneRegions2["AmericaArgentinaSalta"] = "America/Argentina/Salta";
  TimezoneRegions2["AmericaArgentinaSanJuan"] = "America/Argentina/San_Juan";
  TimezoneRegions2["AmericaArgentinaSanLuis"] = "America/Argentina/San_Luis";
  TimezoneRegions2["AmericaArgentinaTucuman"] = "America/Argentina/Tucuman";
  TimezoneRegions2["AmericaArgentinaUshuaia"] = "America/Argentina/Ushuaia";
  TimezoneRegions2["AmericaAruba"] = "America/Aruba";
  TimezoneRegions2["AmericaAsuncion"] = "America/Asuncion";
  TimezoneRegions2["AmericaAtikokan"] = "America/Atikokan";
  TimezoneRegions2["AmericaAtka"] = "America/Atka";
  TimezoneRegions2["AmericaBahia"] = "America/Bahia";
  TimezoneRegions2["AmericaBahiaBanderas"] = "America/Bahia_Banderas";
  TimezoneRegions2["AmericaBarbados"] = "America/Barbados";
  TimezoneRegions2["AmericaBelem"] = "America/Belem";
  TimezoneRegions2["AmericaBelize"] = "America/Belize";
  TimezoneRegions2["AmericaBlancSablon"] = "America/Blanc-Sablon";
  TimezoneRegions2["AmericaBoaVista"] = "America/Boa_Vista";
  TimezoneRegions2["AmericaBogota"] = "America/Bogota";
  TimezoneRegions2["AmericaBoise"] = "America/Boise";
  TimezoneRegions2["AmericaCambridgeBay"] = "America/Cambridge_Bay";
  TimezoneRegions2["AmericaCampoGrande"] = "America/Campo_Grande";
  TimezoneRegions2["AmericaCancun"] = "America/Cancun";
  TimezoneRegions2["AmericaCaracas"] = "America/Caracas";
  TimezoneRegions2["AmericaCayenne"] = "America/Cayenne";
  TimezoneRegions2["AmericaCayman"] = "America/Cayman";
  TimezoneRegions2["AmericaChicago"] = "America/Chicago";
  TimezoneRegions2["AmericaChihuahua"] = "America/Chihuahua";
  TimezoneRegions2["AmericaCoralHarbour"] = "America/Coral_Harbour";
  TimezoneRegions2["AmericaCordoba"] = "America/Cordoba";
  TimezoneRegions2["AmericaCostaRica"] = "America/Costa_Rica";
  TimezoneRegions2["AmericaCreston"] = "America/Creston";
  TimezoneRegions2["AmericaCuiaba"] = "America/Cuiaba";
  TimezoneRegions2["AmericaCuracao"] = "America/Curacao";
  TimezoneRegions2["AmericaDanmarkshavn"] = "America/Danmarkshavn";
  TimezoneRegions2["AmericaDawson"] = "America/Dawson";
  TimezoneRegions2["AmericaDawsonCreek"] = "America/Dawson_Creek";
  TimezoneRegions2["AmericaDenver"] = "America/Denver";
  TimezoneRegions2["AmericaDetroit"] = "America/Detroit";
  TimezoneRegions2["AmericaDominica"] = "America/Dominica";
  TimezoneRegions2["AmericaEdmonton"] = "America/Edmonton";
  TimezoneRegions2["AmericaEirunepe"] = "America/Eirunepe";
  TimezoneRegions2["AmericaElSalvador"] = "America/El_Salvador";
  TimezoneRegions2["AmericaFortaleza"] = "America/Fortaleza";
  TimezoneRegions2["AmericaGlaceBay"] = "America/Glace_Bay";
  TimezoneRegions2["AmericaGodthab"] = "America/Godthab";
  TimezoneRegions2["AmericaGooseBay"] = "America/Goose_Bay";
  TimezoneRegions2["AmericaGrandTurk"] = "America/Grand_Turk";
  TimezoneRegions2["AmericaGrenada"] = "America/Grenada";
  TimezoneRegions2["AmericaGuadeloupe"] = "America/Guadeloupe";
  TimezoneRegions2["AmericaGuatemala"] = "America/Guatemala";
  TimezoneRegions2["AmericaGuayaquil"] = "America/Guayaquil";
  TimezoneRegions2["AmericaGuyana"] = "America/Guyana";
  TimezoneRegions2["AmericaHalifax"] = "America/Halifax";
  TimezoneRegions2["AmericaHavana"] = "America/Havana";
  TimezoneRegions2["AmericaHermosillo"] = "America/Hermosillo";
  TimezoneRegions2["AmericaIndianaIndianapolis"] = "America/Indiana/Indianapolis";
  TimezoneRegions2["AmericaIndianaKnox"] = "America/Indiana/Knox";
  TimezoneRegions2["AmericaIndianaMarengo"] = "America/Indiana/Marengo";
  TimezoneRegions2["AmericaIndianaPetersburg"] = "America/Indiana/Petersburg";
  TimezoneRegions2["AmericaIndianaTellCity"] = "America/Indiana/Tell_City";
  TimezoneRegions2["AmericaIndianaVevay"] = "America/Indiana/Vevay";
  TimezoneRegions2["AmericaIndianaVincennes"] = "America/Indiana/Vincennes";
  TimezoneRegions2["AmericaIndianaWinamac"] = "America/Indiana/Winamac";
  TimezoneRegions2["AmericaInuvik"] = "America/Inuvik";
  TimezoneRegions2["AmericaIqaluit"] = "America/Iqaluit";
  TimezoneRegions2["AmericaJamaica"] = "America/Jamaica";
  TimezoneRegions2["AmericaJuneau"] = "America/Juneau";
  TimezoneRegions2["AmericaKentuckyLouisville"] = "America/Kentucky/Louisville";
  TimezoneRegions2["AmericaKentuckyMonticello"] = "America/Kentucky/Monticello";
  TimezoneRegions2["AmericaKralendijk"] = "America/Kralendijk";
  TimezoneRegions2["AmericaLaPaz"] = "America/La_Paz";
  TimezoneRegions2["AmericaLima"] = "America/Lima";
  TimezoneRegions2["AmericaLosAngeles"] = "America/Los_Angeles";
  TimezoneRegions2["AmericaLouisville"] = "America/Louisville";
  TimezoneRegions2["AmericaLowerPrinces"] = "America/Lower_Princes";
  TimezoneRegions2["AmericaMaceio"] = "America/Maceio";
  TimezoneRegions2["AmericaManagua"] = "America/Managua";
  TimezoneRegions2["AmericaManaus"] = "America/Manaus";
  TimezoneRegions2["AmericaMarigot"] = "America/Marigot";
  TimezoneRegions2["AmericaMartinique"] = "America/Martinique";
  TimezoneRegions2["AmericaMatamoros"] = "America/Matamoros";
  TimezoneRegions2["AmericaMazatlan"] = "America/Mazatlan";
  TimezoneRegions2["AmericaMenominee"] = "America/Menominee";
  TimezoneRegions2["AmericaMerida"] = "America/Merida";
  TimezoneRegions2["AmericaMetlakatla"] = "America/Metlakatla";
  TimezoneRegions2["AmericaMexicoCity"] = "America/Mexico_City";
  TimezoneRegions2["AmericaMiquelon"] = "America/Miquelon";
  TimezoneRegions2["AmericaMoncton"] = "America/Moncton";
  TimezoneRegions2["AmericaMonterrey"] = "America/Monterrey";
  TimezoneRegions2["AmericaMontevideo"] = "America/Montevideo";
  TimezoneRegions2["AmericaMontserrat"] = "America/Montserrat";
  TimezoneRegions2["AmericaMontreal"] = "America/Montreal";
  TimezoneRegions2["AmericaNassau"] = "America/Nassau";
  TimezoneRegions2["AmericaNewYork"] = "America/New_York";
  TimezoneRegions2["AmericaNipigon"] = "America/Nipigon";
  TimezoneRegions2["AmericaNome"] = "America/Nome";
  TimezoneRegions2["AmericaNoronha"] = "America/Noronha";
  TimezoneRegions2["AmericaNorthDakotaBeulah"] = "America/North_Dakota/Beulah";
  TimezoneRegions2["AmericaNorthDakotaCenter"] = "America/North_Dakota/Center";
  TimezoneRegions2["AmericaNorthDakotaNewSalem"] = "America/North_Dakota/New_Salem";
  TimezoneRegions2["AmericaOjinaga"] = "America/Ojinaga";
  TimezoneRegions2["AmericaPanama"] = "America/Panama";
  TimezoneRegions2["AmericaPangnirtung"] = "America/Pangnirtung";
  TimezoneRegions2["AmericaParamaribo"] = "America/Paramaribo";
  TimezoneRegions2["AmericaPhoenix"] = "America/Phoenix";
  TimezoneRegions2["AmericaPortAuPrince"] = "America/Port-au-Prince";
  TimezoneRegions2["AmericaPortOfSpain"] = "America/Port_of_Spain";
  TimezoneRegions2["AmericaPortoVelho"] = "America/Porto_Velho";
  TimezoneRegions2["AmericaPuertoRico"] = "America/Puerto_Rico";
  TimezoneRegions2["AmericaRainyRiver"] = "America/Rainy_River";
  TimezoneRegions2["AmericaRankinInlet"] = "America/Rankin_Inlet";
  TimezoneRegions2["AmericaRecife"] = "America/Recife";
  TimezoneRegions2["AmericaRegina"] = "America/Regina";
  TimezoneRegions2["AmericaResolute"] = "America/Resolute";
  TimezoneRegions2["AmericaRioBranco"] = "America/Rio_Branco";
  TimezoneRegions2["AmericaSantaIsabel"] = "America/Santa_Isabel";
  TimezoneRegions2["AmericaSantarem"] = "America/Santarem";
  TimezoneRegions2["AmericaSantiago"] = "America/Santiago";
  TimezoneRegions2["AmericaSantoDomingo"] = "America/Santo_Domingo";
  TimezoneRegions2["AmericaSaoPaulo"] = "America/Sao_Paulo";
  TimezoneRegions2["AmericaScoresbysund"] = "America/Scoresbysund";
  TimezoneRegions2["AmericaShiprock"] = "America/Shiprock";
  TimezoneRegions2["AmericaSitka"] = "America/Sitka";
  TimezoneRegions2["AmericaStBarthelemy"] = "America/St_Barthelemy";
  TimezoneRegions2["AmericaStJohns"] = "America/St_Johns";
  TimezoneRegions2["AmericaStKitts"] = "America/St_Kitts";
  TimezoneRegions2["AmericaStLucia"] = "America/St_Lucia";
  TimezoneRegions2["AmericaStThomas"] = "America/St_Thomas";
  TimezoneRegions2["AmericaStVincent"] = "America/St_Vincent";
  TimezoneRegions2["AmericaSwiftCurrent"] = "America/Swift_Current";
  TimezoneRegions2["AmericaTegucigalpa"] = "America/Tegucigalpa";
  TimezoneRegions2["AmericaThule"] = "America/Thule";
  TimezoneRegions2["AmericaThunderBay"] = "America/Thunder_Bay";
  TimezoneRegions2["AmericaTijuana"] = "America/Tijuana";
  TimezoneRegions2["AmericaToronto"] = "America/Toronto";
  TimezoneRegions2["AmericaTortola"] = "America/Tortola";
  TimezoneRegions2["AmericaVancouver"] = "America/Vancouver";
  TimezoneRegions2["AmericaWhitehorse"] = "America/Whitehorse";
  TimezoneRegions2["AmericaWinnipeg"] = "America/Winnipeg";
  TimezoneRegions2["AmericaYakutat"] = "America/Yakutat";
  TimezoneRegions2["AmericaYellowknife"] = "America/Yellowknife";
  TimezoneRegions2["AntarcticaCasey"] = "Antarctica/Casey";
  TimezoneRegions2["AntarcticaDavis"] = "Antarctica/Davis";
  TimezoneRegions2["AntarcticaDumontDUrville"] = "Antarctica/DumontDUrville";
  TimezoneRegions2["AntarcticaMacquarie"] = "Antarctica/Macquarie";
  TimezoneRegions2["AntarcticaMawson"] = "Antarctica/Mawson";
  TimezoneRegions2["AntarcticaMcMurdo"] = "Antarctica/McMurdo";
  TimezoneRegions2["AntarcticaPalmer"] = "Antarctica/Palmer";
  TimezoneRegions2["AntarcticaRothera"] = "Antarctica/Rothera";
  TimezoneRegions2["AntarcticaSyowa"] = "Antarctica/Syowa";
  TimezoneRegions2["AntarcticaTroll"] = "Antarctica/Troll";
  TimezoneRegions2["AntarcticaVostok"] = "Antarctica/Vostok";
  TimezoneRegions2["ArcticLongyearbyen"] = "Arctic/Longyearbyen";
  TimezoneRegions2["AsiaAden"] = "Asia/Aden";
  TimezoneRegions2["AsiaAlmaty"] = "Asia/Almaty";
  TimezoneRegions2["AsiaAmman"] = "Asia/Amman";
  TimezoneRegions2["AsiaAnadyr"] = "Asia/Anadyr";
  TimezoneRegions2["AsiaAqtau"] = "Asia/Aqtau";
  TimezoneRegions2["AsiaAqtobe"] = "Asia/Aqtobe";
  TimezoneRegions2["AsiaAshgabat"] = "Asia/Ashgabat";
  TimezoneRegions2["AsiaBaghdad"] = "Asia/Baghdad";
  TimezoneRegions2["AsiaBahrain"] = "Asia/Bahrain";
  TimezoneRegions2["AsiaBaku"] = "Asia/Baku";
  TimezoneRegions2["AsiaBangkok"] = "Asia/Bangkok";
  TimezoneRegions2["AsiaBarnaul"] = "Asia/Barnaul";
  TimezoneRegions2["AsiaBeirut"] = "Asia/Beirut";
  TimezoneRegions2["AsiaBishkek"] = "Asia/Bishkek";
  TimezoneRegions2["AsiaBrunei"] = "Asia/Brunei";
  TimezoneRegions2["AsiaChita"] = "Asia/Chita";
  TimezoneRegions2["AsiaChoibalsan"] = "Asia/Choibalsan";
  TimezoneRegions2["AsiaColombo"] = "Asia/Colombo";
  TimezoneRegions2["AsiaDamascus"] = "Asia/Damascus";
  TimezoneRegions2["AsiaDhaka"] = "Asia/Dhaka";
  TimezoneRegions2["AsiaDili"] = "Asia/Dili";
  TimezoneRegions2["AsiaDubai"] = "Asia/Dubai";
  TimezoneRegions2["AsiaDushanbe"] = "Asia/Dushanbe";
  TimezoneRegions2["AsiaFamagusta"] = "Asia/Famagusta";
  TimezoneRegions2["AsiaGaza"] = "Asia/Gaza";
  TimezoneRegions2["AsiaHebron"] = "Asia/Hebron";
  TimezoneRegions2["AsiaHoChiMinh"] = "Asia/Ho_Chi_Minh";
  TimezoneRegions2["AsiaHongKong"] = "Asia/Hong_Kong";
  TimezoneRegions2["AsiaHovd"] = "Asia/Hovd";
  TimezoneRegions2["AsiaIrkutsk"] = "Asia/Irkutsk";
  TimezoneRegions2["AsiaJakarta"] = "Asia/Jakarta";
  TimezoneRegions2["AsiaJayapura"] = "Asia/Jayapura";
  TimezoneRegions2["AsiaJerusalem"] = "Asia/Jerusalem";
  TimezoneRegions2["AsiaKabul"] = "Asia/Kabul";
  TimezoneRegions2["AsiaKamchatka"] = "Asia/Kamchatka";
  TimezoneRegions2["AsiaKarachi"] = "Asia/Karachi";
  TimezoneRegions2["AsiaKathmandu"] = "Asia/Kathmandu";
  TimezoneRegions2["AsiaKhandyga"] = "Asia/Khandyga";
  TimezoneRegions2["AsiaKolkata"] = "Asia/Kolkata";
  TimezoneRegions2["AsiaKrasnoyarsk"] = "Asia/Krasnoyarsk";
  TimezoneRegions2["AsiaKualaLumpur"] = "Asia/Kuala_Lumpur";
  TimezoneRegions2["AsiaKuching"] = "Asia/Kuching";
  TimezoneRegions2["AsiaKuwait"] = "Asia/Kuwait";
  TimezoneRegions2["AsiaMacau"] = "Asia/Macau";
  TimezoneRegions2["AsiaMagadan"] = "Asia/Magadan";
  TimezoneRegions2["AsiaMakassar"] = "Asia/Makassar";
  TimezoneRegions2["AsiaManila"] = "Asia/Manila";
  TimezoneRegions2["AsiaMuscat"] = "Asia/Muscat";
  TimezoneRegions2["AsiaNicosia"] = "Asia/Nicosia";
  TimezoneRegions2["AsiaNovokuznetsk"] = "Asia/Novokuznetsk";
  TimezoneRegions2["AsiaNovosibirsk"] = "Asia/Novosibirsk";
  TimezoneRegions2["AsiaOmsk"] = "Asia/Omsk";
  TimezoneRegions2["AsiaOral"] = "Asia/Oral";
  TimezoneRegions2["AsiaPhnomPenh"] = "Asia/Phnom_Penh";
  TimezoneRegions2["AsiaPontianak"] = "Asia/Pontianak";
  TimezoneRegions2["AsiaPyongyang"] = "Asia/Pyongyang";
  TimezoneRegions2["AsiaQatar"] = "Asia/Qatar";
  TimezoneRegions2["AsiaQyzylorda"] = "Asia/Qyzylorda";
  TimezoneRegions2["AsiaRangoon"] = "Asia/Rangoon";
  TimezoneRegions2["AsiaRiyadh"] = "Asia/Riyadh";
  TimezoneRegions2["AsiaSakhalin"] = "Asia/Sakhalin";
  TimezoneRegions2["AsiaSamarkand"] = "Asia/Samarkand";
  TimezoneRegions2["AsiaSeoul"] = "Asia/Seoul";
  TimezoneRegions2["AsiaShanghai"] = "Asia/Shanghai";
  TimezoneRegions2["AsiaSingapore"] = "Asia/Singapore";
  TimezoneRegions2["AsiaSrednekolymsk"] = "Asia/Srednekolymsk";
  TimezoneRegions2["AsiaTaipei"] = "Asia/Taipei";
  TimezoneRegions2["AsiaTashkent"] = "Asia/Tashkent";
  TimezoneRegions2["AsiaTbilisi"] = "Asia/Tbilisi";
  TimezoneRegions2["AsiaTehran"] = "Asia/Tehran";
  TimezoneRegions2["AsiaThimphu"] = "Asia/Thimphu";
  TimezoneRegions2["AsiaTokyo"] = "Asia/Tokyo";
  TimezoneRegions2["AsiaTomsk"] = "Asia/Tomsk";
  TimezoneRegions2["AsiaUlaanbaatar"] = "Asia/Ulaanbaatar";
  TimezoneRegions2["AsiaUrumqi"] = "Asia/Urumqi";
  TimezoneRegions2["AsiaUstNera"] = "Asia/Ust-Nera";
  TimezoneRegions2["AsiaVientiane"] = "Asia/Vientiane";
  TimezoneRegions2["AsiaVladivostok"] = "Asia/Vladivostok";
  TimezoneRegions2["AsiaYakutsk"] = "Asia/Yakutsk";
  TimezoneRegions2["AsiaYekaterinburg"] = "Asia/Yekaterinburg";
  TimezoneRegions2["AsiaYerevan"] = "Asia/Yerevan";
  TimezoneRegions2["AtlanticAzores"] = "Atlantic/Azores";
  TimezoneRegions2["AtlanticBermuda"] = "Atlantic/Bermuda";
  TimezoneRegions2["AtlanticCanary"] = "Atlantic/Canary";
  TimezoneRegions2["AtlanticCapeVerde"] = "Atlantic/Cape_Verde";
  TimezoneRegions2["AtlanticFaroe"] = "Atlantic/Faroe";
  TimezoneRegions2["AtlanticMadeira"] = "Atlantic/Madeira";
  TimezoneRegions2["AtlanticReykjavik"] = "Atlantic/Reykjavik";
  TimezoneRegions2["AtlanticSouthGeorgia"] = "Atlantic/South_Georgia";
  TimezoneRegions2["AtlanticStHelena"] = "Atlantic/St_Helena";
  TimezoneRegions2["AtlanticStanley"] = "Atlantic/Stanley";
  TimezoneRegions2["AustraliaAdelaide"] = "Australia/Adelaide";
  TimezoneRegions2["AustraliaBrisbane"] = "Australia/Brisbane";
  TimezoneRegions2["AustraliaBrokenHill"] = "Australia/Broken_Hill";
  TimezoneRegions2["AustraliaCanberra"] = "Australia/Canberra";
  TimezoneRegions2["AustraliaCurrie"] = "Australia/Currie";
  TimezoneRegions2["AustraliaDarwin"] = "Australia/Darwin";
  TimezoneRegions2["AustraliaEucla"] = "Australia/Eucla";
  TimezoneRegions2["AustraliaHobart"] = "Australia/Hobart";
  TimezoneRegions2["AustraliaLindeman"] = "Australia/Lindeman";
  TimezoneRegions2["AustraliaLordHowe"] = "Australia/Lord_Howe";
  TimezoneRegions2["AustraliaMelbourne"] = "Australia/Melbourne";
  TimezoneRegions2["AustraliaPerth"] = "Australia/Perth";
  TimezoneRegions2["AustraliaSydney"] = "Australia/Sydney";
  TimezoneRegions2["EuropeAmsterdam"] = "Europe/Amsterdam";
  TimezoneRegions2["EuropeAndorra"] = "Europe/Andorra";
  TimezoneRegions2["EuropeAthens"] = "Europe/Athens";
  TimezoneRegions2["EuropeBelgrade"] = "Europe/Belgrade";
  TimezoneRegions2["EuropeBerlin"] = "Europe/Berlin";
  TimezoneRegions2["EuropeBratislava"] = "Europe/Bratislava";
  TimezoneRegions2["EuropeBrussels"] = "Europe/Brussels";
  TimezoneRegions2["EuropeBucharest"] = "Europe/Bucharest";
  TimezoneRegions2["EuropeBudapest"] = "Europe/Budapest";
  TimezoneRegions2["EuropeBusingen"] = "Europe/Busingen";
  TimezoneRegions2["EuropeChisinau"] = "Europe/Chisinau";
  TimezoneRegions2["EuropeCopenhagen"] = "Europe/Copenhagen";
  TimezoneRegions2["EuropeDublin"] = "Europe/Dublin";
  TimezoneRegions2["EuropeGibraltar"] = "Europe/Gibraltar";
  TimezoneRegions2["EuropeGuernsey"] = "Europe/Guernsey";
  TimezoneRegions2["EuropeHelsinki"] = "Europe/Helsinki";
  TimezoneRegions2["EuropeIsleOfMan"] = "Europe/Isle_of_Man";
  TimezoneRegions2["EuropeIstanbul"] = "Europe/Istanbul";
  TimezoneRegions2["EuropeJersey"] = "Europe/Jersey";
  TimezoneRegions2["EuropeKaliningrad"] = "Europe/Kaliningrad";
  TimezoneRegions2["EuropeKiev"] = "Europe/Kiev";
  TimezoneRegions2["EuropeKirov"] = "Europe/Kirov";
  TimezoneRegions2["EuropeLisbon"] = "Europe/Lisbon";
  TimezoneRegions2["EuropeLjubljana"] = "Europe/Ljubljana";
  TimezoneRegions2["EuropeLondon"] = "Europe/London";
  TimezoneRegions2["EuropeLuxembourg"] = "Europe/Luxembourg";
  TimezoneRegions2["EuropeMadrid"] = "Europe/Madrid";
  TimezoneRegions2["EuropeMalta"] = "Europe/Malta";
  TimezoneRegions2["EuropeMariehamn"] = "Europe/Mariehamn";
  TimezoneRegions2["EuropeMinsk"] = "Europe/Minsk";
  TimezoneRegions2["EuropeMonaco"] = "Europe/Monaco";
  TimezoneRegions2["EuropeMoscow"] = "Europe/Moscow";
  TimezoneRegions2["EuropeOslo"] = "Europe/Oslo";
  TimezoneRegions2["EuropeParis"] = "Europe/Paris";
  TimezoneRegions2["EuropePodgorica"] = "Europe/Podgorica";
  TimezoneRegions2["EuropePrague"] = "Europe/Prague";
  TimezoneRegions2["EuropeRiga"] = "Europe/Riga";
  TimezoneRegions2["EuropeRome"] = "Europe/Rome";
  TimezoneRegions2["EuropeSamara"] = "Europe/Samara";
  TimezoneRegions2["EuropeSanMarino"] = "Europe/San_Marino";
  TimezoneRegions2["EuropeSarajevo"] = "Europe/Sarajevo";
  TimezoneRegions2["EuropeSimferopol"] = "Europe/Simferopol";
  TimezoneRegions2["EuropeSkopje"] = "Europe/Skopje";
  TimezoneRegions2["EuropeSofia"] = "Europe/Sofia";
  TimezoneRegions2["EuropeStockholm"] = "Europe/Stockholm";
  TimezoneRegions2["EuropeTallinn"] = "Europe/Tallinn";
  TimezoneRegions2["EuropeTirane"] = "Europe/Tirane";
  TimezoneRegions2["EuropeUzhgorod"] = "Europe/Uzhgorod";
  TimezoneRegions2["EuropeVaduz"] = "Europe/Vaduz";
  TimezoneRegions2["EuropeVatican"] = "Europe/Vatican";
  TimezoneRegions2["EuropeVienna"] = "Europe/Vienna";
  TimezoneRegions2["EuropeVilnius"] = "Europe/Vilnius";
  TimezoneRegions2["EuropeVolgograd"] = "Europe/Volgograd";
  TimezoneRegions2["EuropeWarsaw"] = "Europe/Warsaw";
  TimezoneRegions2["EuropeZagreb"] = "Europe/Zagreb";
  TimezoneRegions2["EuropeZaporozhye"] = "Europe/Zaporozhye";
  TimezoneRegions2["EuropeZurich"] = "Europe/Zurich";
  TimezoneRegions2["GMT"] = "GMT";
  TimezoneRegions2["IndianAntananarivo"] = "Indian/Antananarivo";
  TimezoneRegions2["IndianChagos"] = "Indian/Chagos";
  TimezoneRegions2["IndianChristmas"] = "Indian/Christmas";
  TimezoneRegions2["IndianCocos"] = "Indian/Cocos";
  TimezoneRegions2["IndianComoro"] = "Indian/Comoro";
  TimezoneRegions2["IndianKerguelen"] = "Indian/Kerguelen";
  TimezoneRegions2["IndianMahe"] = "Indian/Mahe";
  TimezoneRegions2["IndianMaldives"] = "Indian/Maldives";
  TimezoneRegions2["IndianMauritius"] = "Indian/Mauritius";
  TimezoneRegions2["IndianMayotte"] = "Indian/Mayotte";
  TimezoneRegions2["IndianReunion"] = "Indian/Reunion";
  TimezoneRegions2["PacificApia"] = "Pacific/Apia";
  TimezoneRegions2["PacificAuckland"] = "Pacific/Auckland";
  TimezoneRegions2["PacificBougainville"] = "Pacific/Bougainville";
  TimezoneRegions2["PacificChatham"] = "Pacific/Chatham";
  TimezoneRegions2["PacificChuuk"] = "Pacific/Chuuk";
  TimezoneRegions2["PacificEaster"] = "Pacific/Easter";
  TimezoneRegions2["PacificEfate"] = "Pacific/Efate";
  TimezoneRegions2["PacificEnderbury"] = "Pacific/Enderbury";
  TimezoneRegions2["PacificFakaofo"] = "Pacific/Fakaofo";
  TimezoneRegions2["PacificFiji"] = "Pacific/Fiji";
  TimezoneRegions2["PacificFunafuti"] = "Pacific/Funafuti";
  TimezoneRegions2["PacificGalapagos"] = "Pacific/Galapagos";
  TimezoneRegions2["PacificGambier"] = "Pacific/Gambier";
  TimezoneRegions2["PacificGuadalcanal"] = "Pacific/Guadalcanal";
  TimezoneRegions2["PacificGuam"] = "Pacific/Guam";
  TimezoneRegions2["PacificHonolulu"] = "Pacific/Honolulu";
  TimezoneRegions2["PacificJohnston"] = "Pacific/Johnston";
  TimezoneRegions2["PacificKiritimati"] = "Pacific/Kiritimati";
  TimezoneRegions2["PacificKosrae"] = "Pacific/Kosrae";
  TimezoneRegions2["PacificKwajalein"] = "Pacific/Kwajalein";
  TimezoneRegions2["PacificMajuro"] = "Pacific/Majuro";
  TimezoneRegions2["PacificMarquesas"] = "Pacific/Marquesas";
  TimezoneRegions2["PacificMidway"] = "Pacific/Midway";
  TimezoneRegions2["PacificNauru"] = "Pacific/Nauru";
  TimezoneRegions2["PacificNiue"] = "Pacific/Niue";
  TimezoneRegions2["PacificNorfolk"] = "Pacific/Norfolk";
  TimezoneRegions2["PacificNoumea"] = "Pacific/Noumea";
  TimezoneRegions2["PacificPagoPago"] = "Pacific/Pago_Pago";
  TimezoneRegions2["PacificPalau"] = "Pacific/Palau";
  TimezoneRegions2["PacificPitcairn"] = "Pacific/Pitcairn";
  TimezoneRegions2["PacificPohnpei"] = "Pacific/Pohnpei";
  TimezoneRegions2["PacificPonape"] = "Pacific/Ponape";
  TimezoneRegions2["PacificPortMoresby"] = "Pacific/Port_Moresby";
  TimezoneRegions2["PacificRarotonga"] = "Pacific/Rarotonga";
  TimezoneRegions2["PacificSaipan"] = "Pacific/Saipan";
  TimezoneRegions2["PacificSamoa"] = "Pacific/Samoa";
  TimezoneRegions2["PacificTahiti"] = "Pacific/Tahiti";
  TimezoneRegions2["PacificTarawa"] = "Pacific/Tarawa";
  TimezoneRegions2["PacificTongatapu"] = "Pacific/Tongatapu";
  TimezoneRegions2["PacificTruk"] = "Pacific/Truk";
  TimezoneRegions2["PacificWake"] = "Pacific/Wake";
  TimezoneRegions2["PacificWallis"] = "Pacific/Wallis";
  TimezoneRegions2["PacificYap"] = "Pacific/Yap";
  return TimezoneRegions2;
})(TimezoneRegions || {});

var TimezoneOffset = /* @__PURE__ */ ((TimezoneOffset2) => {
  TimezoneOffset2["UTC_MINUS_12"] = "UTC-12";
  TimezoneOffset2["UTC_MINUS_11_30"] = "UTC-11:30";
  TimezoneOffset2["UTC_MINUS_11"] = "UTC-11";
  TimezoneOffset2["UTC_MINUS_10_30"] = "UTC-10:30";
  TimezoneOffset2["UTC_MINUS_10"] = "UTC-10";
  TimezoneOffset2["UTC_MINUS_9_30"] = "UTC-9:30";
  TimezoneOffset2["UTC_MINUS_9"] = "UTC-09";
  TimezoneOffset2["UTC_MINUS_8_45"] = "UTC-8:45";
  TimezoneOffset2["UTC_MINUS_8"] = "UTC-08";
  TimezoneOffset2["UTC_MINUS_7"] = "UTC-07";
  TimezoneOffset2["UTC_MINUS_6_30"] = "UTC-6:30";
  TimezoneOffset2["UTC_MINUS_6"] = "UTC-06";
  TimezoneOffset2["UTC_MINUS_5_45"] = "UTC-5:45";
  TimezoneOffset2["UTC_MINUS_5_30"] = "UTC-5:30";
  TimezoneOffset2["UTC_MINUS_5"] = "UTC-05";
  TimezoneOffset2["UTC_MINUS_4_30"] = "UTC-4:30";
  TimezoneOffset2["UTC_MINUS_4"] = "UTC-04";
  TimezoneOffset2["UTC_MINUS_3_30"] = "UTC-3:30";
  TimezoneOffset2["UTC_MINUS_3"] = "UTC-03";
  TimezoneOffset2["UTC_MINUS_2_30"] = "UTC-2:30";
  TimezoneOffset2["UTC_MINUS_2"] = "UTC-02";
  TimezoneOffset2["UTC_MINUS_1"] = "UTC-01";
  TimezoneOffset2["UTC_0"] = "UTC+00";
  TimezoneOffset2["UTC_PLUS_1"] = "UTC+01";
  TimezoneOffset2["UTC_PLUS_2"] = "UTC+02";
  TimezoneOffset2["UTC_PLUS_3"] = "UTC+03";
  TimezoneOffset2["UTC_PLUS_3_30"] = "UTC+3:30";
  TimezoneOffset2["UTC_PLUS_4"] = "UTC+04";
  TimezoneOffset2["UTC_PLUS_4_30"] = "UTC+4:30";
  TimezoneOffset2["UTC_PLUS_5"] = "UTC+05";
  TimezoneOffset2["UTC_PLUS_5_30"] = "UTC+5:30";
  TimezoneOffset2["UTC_PLUS_5_45"] = "UTC+5:45";
  TimezoneOffset2["UTC_PLUS_6"] = "UTC+06";
  TimezoneOffset2["UTC_PLUS_6_30"] = "UTC+6:30";
  TimezoneOffset2["UTC_PLUS_7"] = "UTC+07";
  TimezoneOffset2["UTC_PLUS_8"] = "UTC+08";
  TimezoneOffset2["UTC_PLUS_8_45"] = "UTC+8:45";
  TimezoneOffset2["UTC_PLUS_9"] = "UTC+09";
  TimezoneOffset2["UTC_PLUS_9_30"] = "UTC+9:30";
  TimezoneOffset2["UTC_PLUS_10"] = "UTC+10";
  TimezoneOffset2["UTC_PLUS_10_30"] = "UTC+10:30";
  TimezoneOffset2["UTC_PLUS_11"] = "UTC+11";
  TimezoneOffset2["UTC_PLUS_11_30"] = "UTC+11:30";
  TimezoneOffset2["UTC_PLUS_12"] = "UTC+12";
  TimezoneOffset2["UTC_PLUS_12_45"] = "UTC+12:45";
  TimezoneOffset2["UTC_PLUS_13"] = "UTC+13";
  TimezoneOffset2["UTC_PLUS_13_45"] = "UTC+13:45";
  TimezoneOffset2["UTC_PLUS_14"] = "UTC+14";
  return TimezoneOffset2;
})(TimezoneOffset || {});

var Timezones = /* @__PURE__ */ ((Timezones2) => {
  Timezones2["AcreTime"] = "ACT";
  Timezones2["AfghanistanTime"] = "AFT";
  Timezones2["AIXCentralEuropeanTime"] = "DFT";
  Timezones2["AlaskaDaylightTime"] = "AKDT";
  Timezones2["AlaskaStandardTime"] = "AKST";
  Timezones2["AlmaAtaTime"] = "ALMT";
  Timezones2["AmazonSummerTime"] = "AMST";
  Timezones2["AmazonTime"] = "AMT";
  Timezones2["AnadyrTime"] = "ANAT";
  Timezones2["AqtobeTime"] = "AQTT";
  Timezones2["ArabiaStandardTime"] = "AST";
  Timezones2["ArgentinaTime"] = "ART";
  Timezones2["ArmeniaTime"] = "AMT";
  Timezones2["ASEANCommonTime"] = "ASEAN";
  Timezones2["AtlanticDaylightTime"] = "ADT";
  Timezones2["AtlanticStandardTime"] = "AST";
  Timezones2["AustralianCentralDaylightSavingTime"] = "ACDT";
  Timezones2["AustralianCentralStandardTime"] = "ACST";
  Timezones2["AustralianCentralWesternStandardTime"] = "ACWST";
  Timezones2["AustralianEasternDaylightSavingTime"] = "AEDT";
  Timezones2["AustralianEasternStandardTime"] = "AEST";
  Timezones2["AustralianEasternTime"] = "AET";
  Timezones2["AustralianWesternStandardTime"] = "AWST";
  Timezones2["AzerbaijanTime"] = "AZT";
  Timezones2["AzoresStandardTime"] = "AZOT";
  Timezones2["AzoresSummerTime"] = "AZOST";
  Timezones2["BakerIslandTime"] = "BIT";
  Timezones2["BangladeshStandardTime"] = "BST";
  Timezones2["BhutanTime"] = "BTT";
  Timezones2["BoliviaTime"] = "BOT";
  Timezones2["BougainvilleStandardTime"] = "BST";
  Timezones2["BrasiliaSummerTime"] = "BRST";
  Timezones2["BrasiliaTime"] = "BRT";
  Timezones2["BritishIndianOceanTime"] = "BIOT";
  Timezones2["BritishSummerTime"] = "BST";
  Timezones2["BruneiTime"] = "BNT";
  Timezones2["CapeVerdeTime"] = "CVT";
  Timezones2["CentralAfricaTime"] = "CAT";
  Timezones2["CentralDaylightTime"] = "CDT";
  Timezones2["CentralEuropeanSummerTime"] = "CEST";
  Timezones2["CentralEuropeanTime"] = "CET";
  Timezones2["CentralIndonesiaTime"] = "WITA";
  Timezones2["CentralStandardTime"] = "CST";
  Timezones2["CentralTime"] = "CT";
  Timezones2["CentralWesternStandardTime"] = "CWST";
  Timezones2["ChamorroStandardTime"] = "CHST";
  Timezones2["ChathamDaylightTime"] = "CHADT";
  Timezones2["ChathamStandardTime"] = "CHAST";
  Timezones2["ChileStandardTime"] = "CLT";
  Timezones2["ChileSummerTime"] = "CLST";
  Timezones2["ChinaStandardTime"] = "CST";
  Timezones2["ChoibalsanStandardTime"] = "CHOT";
  Timezones2["ChoibalsanSummerTime"] = "CHOST";
  Timezones2["ChristmasIslandTime"] = "CXT";
  Timezones2["ChuukTime"] = "CHUT";
  Timezones2["ClipptertonIslandStandardTime"] = "CIST";
  Timezones2["CocosIslandsTime"] = "CCT";
  Timezones2["ColombiaSummerTime"] = "COST";
  Timezones2["ColombiaTime"] = "COT";
  Timezones2["CookIslandTime"] = "CKT";
  Timezones2["CoordinatedUniversalTime"] = "UTC";
  Timezones2["CubaDaylightTime"] = "CDT";
  Timezones2["CubaStandardTime"] = "CST";
  Timezones2["DavisTime"] = "DAVT";
  Timezones2["DumontDUrvilleTime"] = "DDUT";
  Timezones2["EastAfricaTime"] = "EAT";
  Timezones2["EasterIslandStandardTime"] = "EAST";
  Timezones2["EasterIslandSummerTime"] = "EASST";
  Timezones2["EasternCaribbeanTime"] = "ECT";
  Timezones2["EasternDaylightTime"] = "EDT";
  Timezones2["EasternEuropeanSummerTime"] = "EEST";
  Timezones2["EasternEuropeanTime"] = "EET";
  Timezones2["EasternGreenlandSummerTime"] = "EGST";
  Timezones2["EasternGreenlandTime"] = "EGT";
  Timezones2["EasternIndonesianTime"] = "WIT";
  Timezones2["EasternStandardTime"] = "EST";
  Timezones2["EasternTime"] = "ET";
  Timezones2["EcuadorTime"] = "ECT";
  Timezones2["FalklandIslandsSummerTime"] = "FKST";
  Timezones2["FalklandIslandsTime"] = "FKT";
  Timezones2["FernandoDeNoronhaTime"] = "FNT";
  Timezones2["FijiTime"] = "FJT";
  Timezones2["FrenchGuianaTime"] = "GFT";
  Timezones2["FrenchSouthernAndAntarcticTime"] = "TFT";
  Timezones2["FurtherEasternEuropeanTime"] = "FET";
  Timezones2["GalapagosTime"] = "GALT";
  Timezones2["GambierIslandTime"] = "GIT";
  Timezones2["GambierIslandsTime"] = "GAMT";
  Timezones2["GeorgiaStandardTime"] = "GET";
  Timezones2["GilbertIslandTime"] = "GILT";
  Timezones2["GreenwichMeanTime"] = "GMT";
  Timezones2["GulfStandardTime"] = "GST";
  Timezones2["GuyanaTime"] = "GYT";
  Timezones2["HawaiiAleutianDaylightTime"] = "HDT";
  Timezones2["HawaiiAleutianStandardTime"] = "HST";
  Timezones2["HeardAndMcDonaldIslandsTime"] = "HMT";
  Timezones2["HeureAvanceeDEuropeCentraleTime"] = "HAEC";
  Timezones2["HongKongTime"] = "HKT";
  Timezones2["HovdSummerTime"] = "HOVST";
  Timezones2["HovdTime"] = "HOVT";
  Timezones2["IndianOceanTime"] = "IOT";
  Timezones2["IndianStandardTime"] = "IST";
  Timezones2["IndochinaTime"] = "ICT";
  Timezones2["InternationalDayLineWestTime"] = "IDLW";
  Timezones2["IranDaylightTime"] = "IRDT";
  Timezones2["IranStandardTime"] = "IRST";
  Timezones2["IrishStandardTime"] = "IST";
  Timezones2["IrkutskSummerTime"] = "IRKST";
  Timezones2["IrkutskTime"] = "IRKT";
  Timezones2["IsraelDaylightTime"] = "IDT";
  Timezones2["IsraelStandardTime"] = "IST";
  Timezones2["JapanStandardTime"] = "JST";
  Timezones2["KaliningradTime"] = "KALT";
  Timezones2["KamchatkaTime"] = "KAMT";
  Timezones2["KoreaStandardTime"] = "KST";
  Timezones2["KosraeTime"] = "KOST";
  Timezones2["KrasnoyarskSummerTime"] = "KRAST";
  Timezones2["KrasnoyarskTime"] = "KRAT";
  Timezones2["KyrgyzstanTime"] = "KGT";
  Timezones2["LineIslandsTime"] = "LINT";
  Timezones2["KazakhstanStandardTime"] = "KAST";
  Timezones2["LordHoweStandardTime"] = "LHST";
  Timezones2["LordHoweSummerTime"] = "LHST";
  Timezones2["MacquarieIslandStationTime"] = "MIST";
  Timezones2["MagadanTime"] = "MAGT";
  Timezones2["MalaysiaStandardTime"] = "MST";
  Timezones2["MalaysiaTime"] = "MYT";
  Timezones2["MaldivesTime"] = "MVT";
  Timezones2["MarquesasIslandsTime"] = "MART";
  Timezones2["MarshallIslandsTime"] = "MHT";
  Timezones2["MauritiusTime"] = "MUT";
  Timezones2["MawsonStationTime"] = "MAWT";
  Timezones2["MiddleEuropeanSummerTime"] = "MEDT";
  Timezones2["MiddleEuropeanTime"] = "MET";
  Timezones2["MoscowTime"] = "MSK";
  Timezones2["MountainDaylightTime"] = "MDT";
  Timezones2["MountainStandardTime"] = "MST";
  Timezones2["MyanmarStandardTime"] = "MMT";
  Timezones2["NepalTime"] = "NCT";
  Timezones2["NauruTime"] = "NRT";
  Timezones2["NewCaledoniaTime"] = "NCT";
  Timezones2["NewZealandDaylightTime"] = "NZDT";
  Timezones2["NewZealandStandardTime"] = "NZST";
  Timezones2["NewfoundlandDaylightTime"] = "NDT";
  Timezones2["NewfoundlandStandardTime"] = "NST";
  Timezones2["NewfoundlandTime"] = "NT";
  Timezones2["NiueTime"] = "NUT";
  Timezones2["NorfolkIslandTime"] = "NFT";
  Timezones2["NovosibirskTime"] = "NOVT";
  Timezones2["OmskTime"] = "OMST";
  Timezones2["OralTime"] = "ORAT";
  Timezones2["PacificDaylightTime"] = "PDT";
  Timezones2["PacificStandardTime"] = "PST";
  Timezones2["PakistanStandardTime"] = "PKT";
  Timezones2["PalauTime"] = "PWT";
  Timezones2["PapuaNewGuineaTime"] = "PGT";
  Timezones2["ParaguaySummerTime"] = "PYST";
  Timezones2["ParaguayTime"] = "PYT";
  Timezones2["PeruTime"] = "PET";
  Timezones2["PhilippineStandardTime"] = "PHST";
  Timezones2["PhilippineTime"] = "PHT";
  Timezones2["PhoenixIslandTime"] = "PHOT";
  Timezones2["PitcairnTime"] = "PST";
  Timezones2["PohnpeiStandardTime"] = "PONT";
  Timezones2["ReunionTime"] = "RET";
  Timezones2["RotheraResearchStationTime"] = "ROTT";
  Timezones2["SaintPierreAndMiquelonDaylightTime"] = "PMDT";
  Timezones2["SaintPierreAndMiquelonStandardTime"] = "PMST";
  Timezones2["SakhalinIslandTime"] = "SAKT";
  Timezones2["SamaraTime"] = "SAMT";
  Timezones2["SamoaDaylightTime"] = "SDT";
  Timezones2["SamoaStandardTime"] = "SST";
  Timezones2["SeychellesTime"] = "SCT";
  Timezones2["ShowaStationTime"] = "SYOT";
  Timezones2["SingaporeStandardTime"] = "SST";
  Timezones2["SingaporeTime"] = "SGT";
  Timezones2["SolomonIslandsTime"] = "SBT";
  Timezones2["SouthAfricanStandardTime"] = "SAST";
  Timezones2["SouthGeorgiaAndTheSouthSandwichIslandsTime"] = "GST";
  Timezones2["SrednekolymskTime"] = "SRET";
  Timezones2["SriLankaStandardTime"] = "SLST";
  Timezones2["SurinameTime"] = "SRT";
  Timezones2["TahitiTime"] = "TAHT";
  Timezones2["TajikistanTime"] = "TJT";
  Timezones2["ThailandStandardTime"] = "THA";
  Timezones2["TimorLesteTime"] = "TLT";
  Timezones2["TokelauTime"] = "TKT";
  Timezones2["TongaTime"] = "TOT";
  Timezones2["TurkeyTime"] = "TRT";
  Timezones2["TurkmenistanTime"] = "TMT";
  Timezones2["TuvaluTime"] = "TVT";
  Timezones2["UlaanbaatarStandardTime"] = "ULAT";
  Timezones2["UlaanbaatarSummerTime"] = "ULAST";
  Timezones2["UruguayStandardTime"] = "UYT";
  Timezones2["UruguaySummerTime"] = "UYST";
  Timezones2["UzbekistanTime"] = "UZT";
  Timezones2["VanuatuTime"] = "VUT";
  Timezones2["VenezuelaStandardTime"] = "VET";
  Timezones2["VladivostokTime"] = "VLAT";
  Timezones2["VolgogradTime"] = "VOLT";
  Timezones2["VostokStationTime"] = "VOST";
  Timezones2["WakeIslandTime"] = "WAKT";
  Timezones2["WestAfricaSummerTime"] = "WAST";
  Timezones2["WestAfricaTime"] = "WAT";
  Timezones2["WestGreenlandSummerTime"] = "WGST";
  Timezones2["WestGreenlandTime"] = "WGT";
  Timezones2["WestKazakhstanTime"] = "WKT";
  Timezones2["WesternEuropeanSummerTime"] = "WEDT";
  Timezones2["WesternEuropeanTime"] = "WET";
  Timezones2["WesternIndonesianTime"] = "WIT";
  Timezones2["WesternStandardTime"] = "WST";
  Timezones2["YakutskTime"] = "YAKT";
  Timezones2["YekaterinburgTime"] = "YEKT";
  return Timezones2;
})(Timezones || {});
({
  dst: {
    is: false,
    uses: true
  },
  id: "ACT" /* AcreTime */,
  name: "Acre Time",
  offset: TimezoneOffset.UTC_MINUS_5
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "AFT" /* AfghanistanTime */,
  name: "Afghanistan Time",
  offset: TimezoneOffset.UTC_PLUS_4_30
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "DFT" /* AIXCentralEuropeanTime */,
  name: "AIX Central European Time",
  offset: TimezoneOffset.UTC_PLUS_1
});
({
  dst: {
    is: true,
    uses: true
  },
  id: "AKDT" /* AlaskaDaylightTime */,
  name: "Alaska Daylight Time",
  offset: TimezoneOffset.UTC_MINUS_8
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "AKST" /* AlaskaStandardTime */,
  name: "Alaska Standard Time",
  offset: TimezoneOffset.UTC_MINUS_9
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "ALMT" /* AlmaAtaTime */,
  name: "Alma-Ata Time",
  offset: TimezoneOffset.UTC_PLUS_6
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "AMST" /* AmazonSummerTime */,
  name: "Amazon Summer Time",
  offset: TimezoneOffset.UTC_MINUS_3
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "AMT" /* AmazonTime */,
  name: "Amazon Time",
  offset: TimezoneOffset.UTC_MINUS_4
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "ANAT" /* AnadyrTime */,
  name: "Anadyr Time",
  offset: TimezoneOffset.UTC_PLUS_12
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "AQTT" /* AqtobeTime */,
  name: "Aqtobe Time",
  offset: TimezoneOffset.UTC_PLUS_5
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "AST" /* ArabiaStandardTime */,
  name: "Arabia Standard Time",
  offset: TimezoneOffset.UTC_PLUS_3
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "ART" /* ArgentinaTime */,
  name: "Argentina Time",
  offset: TimezoneOffset.UTC_MINUS_3
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "AMT" /* ArmeniaTime */,
  name: "Armenia Time",
  offset: TimezoneOffset.UTC_PLUS_4
});
({
  dst: {
    is: true,
    uses: true
  },
  id: "ADT" /* AtlanticDaylightTime */,
  name: "Atlantic Daylight Time",
  offset: TimezoneOffset.UTC_MINUS_3
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "AST" /* AtlanticStandardTime */,
  name: "Atlantic Standard Time",
  offset: TimezoneOffset.UTC_MINUS_4
});
({
  dst: {
    is: true,
    uses: true
  },
  id: "ACDT" /* AustralianCentralDaylightSavingTime */,
  name: "Australian Central Daylight Saving Time",
  offset: TimezoneOffset.UTC_PLUS_10_30
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "ACST" /* AustralianCentralStandardTime */,
  name: "Australian Central Standard Time",
  offset: TimezoneOffset.UTC_PLUS_9_30
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "ACWST" /* AustralianCentralWesternStandardTime */,
  name: "Australian Central Western Standard Time",
  offset: TimezoneOffset.UTC_PLUS_8_45
});
({
  dst: {
    is: true,
    uses: true
  },
  id: "AEDT" /* AustralianEasternDaylightSavingTime */,
  name: "Australian Eastern Daylight Saving Time",
  offset: TimezoneOffset.UTC_PLUS_11
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "AEST" /* AustralianEasternStandardTime */,
  name: "Australian Eastern Standard Time",
  offset: TimezoneOffset.UTC_PLUS_10
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "AET" /* AustralianEasternTime */,
  name: "Australian Eastern Time",
  offset: TimezoneOffset.UTC_PLUS_10
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "AWST" /* AustralianWesternStandardTime */,
  name: "Australian Western Standard Time",
  offset: TimezoneOffset.UTC_PLUS_8
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "AZT" /* AzerbaijanTime */,
  name: "Azerbaijan Time",
  offset: TimezoneOffset.UTC_PLUS_4
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "AZOT" /* AzoresStandardTime */,
  name: "Azores Standard Time",
  offset: TimezoneOffset.UTC_MINUS_1
});
({
  dst: {
    is: true,
    uses: true
  },
  id: "AZOST" /* AzoresSummerTime */,
  name: "Azores Summer Time",
  offset: TimezoneOffset.UTC_0
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "BIT" /* BakerIslandTime */,
  name: "Baker Island Time",
  offset: TimezoneOffset.UTC_MINUS_12
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "BST" /* BangladeshStandardTime */,
  name: "Bangladesh Standard Time",
  offset: TimezoneOffset.UTC_PLUS_6
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "BTT" /* BhutanTime */,
  name: "Bhutan Time",
  offset: TimezoneOffset.UTC_PLUS_6
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "BOT" /* BoliviaTime */,
  name: "Bolivia Time",
  offset: TimezoneOffset.UTC_MINUS_4
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "BST" /* BougainvilleStandardTime */,
  name: "Bougainville Standard Time",
  offset: TimezoneOffset.UTC_PLUS_11
});
({
  dst: {
    is: true,
    uses: true
  },
  id: "BRST" /* BrasiliaSummerTime */,
  name: "Brasilia Summer Time",
  offset: TimezoneOffset.UTC_MINUS_2
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "BRT" /* BrasiliaTime */,
  name: "Brasilia Time",
  offset: TimezoneOffset.UTC_MINUS_3
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "BIOT" /* BritishIndianOceanTime */,
  name: "British Indian Ocean Time",
  offset: TimezoneOffset.UTC_PLUS_6
});
({
  dst: {
    is: true,
    uses: true
  },
  id: "BST" /* BritishSummerTime */,
  name: "British Summer Time",
  offset: TimezoneOffset.UTC_PLUS_1
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "BNT" /* BruneiTime */,
  name: "Brunei Time",
  offset: TimezoneOffset.UTC_PLUS_8
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "CVT" /* CapeVerdeTime */,
  name: "Cape Verde Time",
  offset: TimezoneOffset.UTC_MINUS_1
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "CAT" /* CentralAfricaTime */,
  name: "Central Africa Time",
  offset: TimezoneOffset.UTC_PLUS_2
});
({
  dst: {
    is: true,
    uses: true
  },
  id: "CDT" /* CentralDaylightTime */,
  name: "Central Daylight Time",
  offset: TimezoneOffset.UTC_MINUS_5
});
({
  dst: {
    is: true,
    uses: true
  },
  id: "CEST" /* CentralEuropeanSummerTime */,
  name: "Central European Summer Time",
  offset: TimezoneOffset.UTC_PLUS_2
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "CET" /* CentralEuropeanTime */,
  name: "Central European Time",
  offset: TimezoneOffset.UTC_PLUS_1
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "WITA" /* CentralIndonesiaTime */,
  name: "Central Indonesia Time",
  offset: TimezoneOffset.UTC_PLUS_8
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "CST" /* CentralStandardTime */,
  name: "Central Standard Time",
  offset: TimezoneOffset.UTC_MINUS_6
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "CT" /* CentralTime */,
  name: "Central Time",
  offset: TimezoneOffset.UTC_MINUS_5
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "CWST" /* CentralWesternStandardTime */,
  name: "Central Western Standard Time",
  offset: TimezoneOffset.UTC_PLUS_8_45
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "CHST" /* ChamorroStandardTime */,
  name: "Chamorro Standard Time",
  offset: TimezoneOffset.UTC_PLUS_10
});
({
  dst: {
    is: true,
    uses: true
  },
  id: "CHADT" /* ChathamDaylightTime */,
  name: "Chatham Daylight Time",
  offset: TimezoneOffset.UTC_PLUS_13_45
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "CHAST" /* ChathamStandardTime */,
  name: "Chatham Standard Time",
  offset: TimezoneOffset.UTC_PLUS_12_45
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "CLT" /* ChileStandardTime */,
  name: "Chile Standard Time",
  offset: TimezoneOffset.UTC_MINUS_4
});
({
  dst: {
    is: true,
    uses: true
  },
  id: "CLST" /* ChileSummerTime */,
  name: "Chile Summer Time",
  offset: TimezoneOffset.UTC_MINUS_3
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "CST" /* ChinaStandardTime */,
  name: "China Standard Time",
  offset: TimezoneOffset.UTC_PLUS_8
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "CHOT" /* ChoibalsanStandardTime */,
  name: "Choibalsan Standard Time",
  offset: TimezoneOffset.UTC_PLUS_8
});
({
  dst: {
    is: true,
    uses: true
  },
  id: "CHOST" /* ChoibalsanSummerTime */,
  name: "Choibalsan Summer Time",
  offset: TimezoneOffset.UTC_PLUS_9
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "CXT" /* ChristmasIslandTime */,
  name: "Christmas Island Time",
  offset: TimezoneOffset.UTC_PLUS_7
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "CHUT" /* ChuukTime */,
  name: "Chuuk Time",
  offset: TimezoneOffset.UTC_PLUS_10
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "CIST" /* ClipptertonIslandStandardTime */,
  name: "Clippterton Island Standard Time",
  offset: TimezoneOffset.UTC_MINUS_8
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "CCT" /* CocosIslandsTime */,
  name: "Cocos Standard Time",
  offset: TimezoneOffset.UTC_PLUS_6_30
});
({
  dst: {
    is: true,
    uses: true
  },
  id: "COST" /* ColombiaSummerTime */,
  name: "Colombia Summer Time",
  offset: TimezoneOffset.UTC_MINUS_4
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "COT" /* ColombiaTime */,
  name: "Colombia Time",
  offset: TimezoneOffset.UTC_MINUS_5
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "CKT" /* CookIslandTime */,
  name: "Cook Island Time",
  offset: TimezoneOffset.UTC_MINUS_10
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "UTC" /* CoordinatedUniversalTime */,
  name: "Coordinated Universal Time",
  offset: TimezoneOffset.UTC_0
});
({
  dst: {
    is: true,
    uses: true
  },
  id: "CDT" /* CubaDaylightTime */,
  name: "Cuba Daylight Time",
  offset: TimezoneOffset.UTC_MINUS_4
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "CST" /* CubaStandardTime */,
  name: "Cuba Standard Time",
  offset: TimezoneOffset.UTC_MINUS_5
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "DAVT" /* DavisTime */,
  name: "Davis Time",
  offset: TimezoneOffset.UTC_PLUS_7
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "DDUT" /* DumontDUrvilleTime */,
  name: "Dumont D'Urville Time",
  offset: TimezoneOffset.UTC_PLUS_10
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "EAT" /* EastAfricaTime */,
  name: "East Africa Time",
  offset: TimezoneOffset.UTC_PLUS_3
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "EAST" /* EasterIslandStandardTime */,
  name: "Easter Island Standard Time",
  offset: TimezoneOffset.UTC_MINUS_6
});
({
  dst: {
    is: true,
    uses: true
  },
  id: "EASST" /* EasterIslandSummerTime */,
  name: "Easter Island Summer Time",
  offset: TimezoneOffset.UTC_MINUS_5
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "ECT" /* EasternCaribbeanTime */,
  name: "Eastern Caribbean Time",
  offset: TimezoneOffset.UTC_MINUS_4
});
({
  dst: {
    is: true,
    uses: true
  },
  id: "EDT" /* EasternDaylightTime */,
  name: "Eastern Daylight Time",
  offset: TimezoneOffset.UTC_MINUS_4
});
({
  dst: {
    is: true,
    uses: true
  },
  id: "EEST" /* EasternEuropeanSummerTime */,
  name: "Eastern European Summer Time",
  offset: TimezoneOffset.UTC_PLUS_3
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "EET" /* EasternEuropeanTime */,
  name: "Eastern European Time",
  offset: TimezoneOffset.UTC_PLUS_2
});
({
  dst: {
    is: true,
    uses: true
  },
  id: "EGST" /* EasternGreenlandSummerTime */,
  name: "Eastern Greenland Summer Time",
  offset: TimezoneOffset.UTC_0
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "EGT" /* EasternGreenlandTime */,
  name: "Eastern Greenland Time",
  offset: TimezoneOffset.UTC_MINUS_1
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "WIT" /* EasternIndonesianTime */,
  name: "Eastern Indonesian Time",
  offset: TimezoneOffset.UTC_PLUS_9
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "EST" /* EasternStandardTime */,
  name: "Eastern Standard Time",
  offset: TimezoneOffset.UTC_MINUS_5
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "ET" /* EasternTime */,
  name: "Eastern Time",
  offset: TimezoneOffset.UTC_MINUS_5
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "ECT" /* EcuadorTime */,
  name: "Ecuador Time",
  offset: TimezoneOffset.UTC_MINUS_5
});
({
  dst: {
    is: true,
    uses: true
  },
  id: "FKST" /* FalklandIslandsSummerTime */,
  name: "Falkland Islands Summer Time",
  offset: TimezoneOffset.UTC_MINUS_3
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "FKT" /* FalklandIslandsTime */,
  name: "Falkland Islands Time",
  offset: TimezoneOffset.UTC_MINUS_4
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "FNT" /* FernandoDeNoronhaTime */,
  name: "Fernando de Noronha Time",
  offset: TimezoneOffset.UTC_MINUS_2
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "FJT" /* FijiTime */,
  name: "Fiji Time",
  offset: TimezoneOffset.UTC_PLUS_12
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "GFT" /* FrenchGuianaTime */,
  name: "French Guiana Time",
  offset: TimezoneOffset.UTC_MINUS_3
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "TFT" /* FrenchSouthernAndAntarcticTime */,
  name: "French Southern and Antarctic Time",
  offset: TimezoneOffset.UTC_PLUS_5
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "FET" /* FurtherEasternEuropeanTime */,
  name: "Further Eastern European Time",
  offset: TimezoneOffset.UTC_PLUS_3
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "GALT" /* GalapagosTime */,
  name: "Galapagos Time",
  offset: TimezoneOffset.UTC_MINUS_6
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "GIT" /* GambierIslandTime */,
  name: "Gambier Island Time",
  offset: TimezoneOffset.UTC_MINUS_9
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "GAMT" /* GambierIslandsTime */,
  name: "Gambier Islands Time",
  offset: TimezoneOffset.UTC_MINUS_9
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "GET" /* GeorgiaStandardTime */,
  name: "Georgia Standard Time",
  offset: TimezoneOffset.UTC_PLUS_4
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "GILT" /* GilbertIslandTime */,
  name: "Gilbert Island Time",
  offset: TimezoneOffset.UTC_PLUS_12
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "GMT" /* GreenwichMeanTime */,
  name: "Greenwich Mean Time",
  offset: TimezoneOffset.UTC_0
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "GST" /* GulfStandardTime */,
  name: "Gulf Standard Time",
  offset: TimezoneOffset.UTC_PLUS_4
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "GYT" /* GuyanaTime */,
  name: "Guyana Time",
  offset: TimezoneOffset.UTC_MINUS_4
});
({
  dst: {
    is: true,
    uses: true
  },
  id: "HDT" /* HawaiiAleutianDaylightTime */,
  name: "Hawaii-Aleutian Daylight Time",
  offset: TimezoneOffset.UTC_MINUS_9
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "HST" /* HawaiiAleutianStandardTime */,
  name: "Hawaii-Aleutian Standard Time",
  offset: TimezoneOffset.UTC_MINUS_10
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "HMT" /* HeardAndMcDonaldIslandsTime */,
  name: "Heard and McDonald Islands Time",
  offset: TimezoneOffset.UTC_PLUS_5
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "HKT" /* HongKongTime */,
  name: "Hong Kong Time",
  offset: TimezoneOffset.UTC_PLUS_8
});
({
  dst: {
    is: true,
    uses: true
  },
  id: "HOVST" /* HovdSummerTime */,
  name: "Hovd Summer Time",
  offset: TimezoneOffset.UTC_PLUS_8
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "HOVT" /* HovdTime */,
  name: "Hovd Time",
  offset: TimezoneOffset.UTC_PLUS_7
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "IOT" /* IndianOceanTime */,
  name: "Indian Ocean Time",
  offset: TimezoneOffset.UTC_PLUS_3
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "IST" /* IndianStandardTime */,
  name: "Indian Standard Time",
  offset: TimezoneOffset.UTC_PLUS_5_30
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "ICT" /* IndochinaTime */,
  name: "Indochina Time",
  offset: TimezoneOffset.UTC_PLUS_7
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "IDLW" /* InternationalDayLineWestTime */,
  name: "International Day Line West Time",
  offset: TimezoneOffset.UTC_MINUS_12
});
({
  dst: {
    is: true,
    uses: true
  },
  id: "IRDT" /* IranDaylightTime */,
  name: "Iran Daylight Time",
  offset: TimezoneOffset.UTC_PLUS_4_30
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "IRST" /* IranStandardTime */,
  name: "Iran Standard Time",
  offset: TimezoneOffset.UTC_PLUS_3_30
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "IST" /* IrishStandardTime */,
  name: "Irish Standard Time",
  offset: TimezoneOffset.UTC_PLUS_1
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "IRKT" /* IrkutskTime */,
  name: "Irkutsk Time",
  offset: TimezoneOffset.UTC_PLUS_8
});
({
  dst: {
    is: true,
    uses: true
  },
  id: "IDT" /* IsraelDaylightTime */,
  name: "Israel Daylight Time",
  offset: TimezoneOffset.UTC_PLUS_3
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "IST" /* IsraelStandardTime */,
  name: "Israel Standard Time",
  offset: TimezoneOffset.UTC_PLUS_2
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "JST" /* JapanStandardTime */,
  name: "Japan Standard Time",
  offset: TimezoneOffset.UTC_PLUS_9
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "KALT" /* KaliningradTime */,
  name: "Kaliningrad Time",
  offset: TimezoneOffset.UTC_PLUS_2
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "KAMT" /* KamchatkaTime */,
  name: "Kamchatka Time",
  offset: TimezoneOffset.UTC_PLUS_12
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "KST" /* KoreaStandardTime */,
  name: "Korea Standard Time",
  offset: TimezoneOffset.UTC_PLUS_9
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "KOST" /* KosraeTime */,
  name: "Kosrae Time",
  offset: TimezoneOffset.UTC_PLUS_11
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "KRAT" /* KrasnoyarskTime */,
  name: "Krasnoyarsk Time",
  offset: TimezoneOffset.UTC_PLUS_7
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "KGT" /* KyrgyzstanTime */,
  name: "Kyrgyzstan Time",
  offset: TimezoneOffset.UTC_PLUS_6
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "LINT" /* LineIslandsTime */,
  name: "Line Islands Time",
  offset: TimezoneOffset.UTC_PLUS_14
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "LHST" /* LordHoweStandardTime */,
  name: "Lord Howe Standard Time",
  offset: TimezoneOffset.UTC_PLUS_10_30
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "LHST" /* LordHoweSummerTime */,
  name: "Lord Howe Summer Time",
  offset: TimezoneOffset.UTC_PLUS_11
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "MIST" /* MacquarieIslandStationTime */,
  name: "Macquarie Island Station Time",
  offset: TimezoneOffset.UTC_PLUS_11
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "MAGT" /* MagadanTime */,
  name: "Magadan Time",
  offset: TimezoneOffset.UTC_PLUS_12
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "MST" /* MalaysiaStandardTime */,
  name: "Malaysia Standard Time",
  offset: TimezoneOffset.UTC_PLUS_8
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "MYT" /* MalaysiaTime */,
  name: "Malaysia Time",
  offset: TimezoneOffset.UTC_PLUS_8
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "MVT" /* MaldivesTime */,
  name: "Maldives Time",
  offset: TimezoneOffset.UTC_PLUS_5
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "MART" /* MarquesasIslandsTime */,
  name: "Marquesas Islands Time",
  offset: TimezoneOffset.UTC_PLUS_9_30
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "MHT" /* MarshallIslandsTime */,
  name: "Marshall Islands Time",
  offset: TimezoneOffset.UTC_PLUS_12
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "MUT" /* MauritiusTime */,
  name: "Mauritius Time",
  offset: TimezoneOffset.UTC_PLUS_4
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "MAWT" /* MawsonStationTime */,
  name: "Mawson Station Time",
  offset: TimezoneOffset.UTC_PLUS_5
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "MEDT" /* MiddleEuropeanSummerTime */,
  name: "Middle European Summer Time",
  offset: TimezoneOffset.UTC_PLUS_2
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "MET" /* MiddleEuropeanTime */,
  name: "Middle European Time",
  offset: TimezoneOffset.UTC_PLUS_1
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "MSK" /* MoscowTime */,
  name: "Moscow Time",
  offset: TimezoneOffset.UTC_PLUS_3
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "MDT" /* MountainDaylightTime */,
  name: "Mountain Daylight Time",
  offset: TimezoneOffset.UTC_MINUS_6
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "MST" /* MountainStandardTime */,
  name: "Mountain Standard Time",
  offset: TimezoneOffset.UTC_MINUS_7
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "MMT" /* MyanmarStandardTime */,
  name: "Myanmar Standard Time",
  offset: TimezoneOffset.UTC_PLUS_6_30
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "NCT" /* NepalTime */,
  name: "Nepal Time",
  offset: TimezoneOffset.UTC_PLUS_5_45
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "NRT" /* NauruTime */,
  name: "Nauru Time",
  offset: TimezoneOffset.UTC_PLUS_12
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "NCT" /* NewCaledoniaTime */,
  name: "New Caledonia Time",
  offset: TimezoneOffset.UTC_PLUS_11
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "NZDT" /* NewZealandDaylightTime */,
  name: "New Zealand Daylight Time",
  offset: TimezoneOffset.UTC_PLUS_13
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "NZST" /* NewZealandStandardTime */,
  name: "New Zealand Standard Time",
  offset: TimezoneOffset.UTC_PLUS_12
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "NDT" /* NewfoundlandDaylightTime */,
  name: "Newfoundland Daylight Time",
  offset: TimezoneOffset.UTC_MINUS_2_30
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "NT" /* NewfoundlandTime */,
  name: "Newfoundland Time",
  offset: TimezoneOffset.UTC_MINUS_3_30
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "NUT" /* NiueTime */,
  name: "Niue Time",
  offset: TimezoneOffset.UTC_MINUS_11
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "NFT" /* NorfolkIslandTime */,
  name: "Norfolk Island Time",
  offset: TimezoneOffset.UTC_PLUS_11
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "NOVT" /* NovosibirskTime */,
  name: "Novosibirsk Time",
  offset: TimezoneOffset.UTC_PLUS_7
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "OMST" /* OmskTime */,
  name: "Omsk Time",
  offset: TimezoneOffset.UTC_PLUS_6
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "ORAT" /* OralTime */,
  name: "Oral Time",
  offset: TimezoneOffset.UTC_PLUS_5
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "PDT" /* PacificDaylightTime */,
  name: "Pacific Daylight Time",
  offset: TimezoneOffset.UTC_MINUS_7
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "PST" /* PacificStandardTime */,
  name: "Pacific Standard Time",
  offset: TimezoneOffset.UTC_MINUS_8
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "PKT" /* PakistanStandardTime */,
  name: "Pakistan Standard Time",
  offset: TimezoneOffset.UTC_PLUS_5
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "PWT" /* PalauTime */,
  name: "Palau Time",
  offset: TimezoneOffset.UTC_PLUS_9
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "PGT" /* PapuaNewGuineaTime */,
  name: "Papua New Guinea Time",
  offset: TimezoneOffset.UTC_PLUS_10
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "PYST" /* ParaguaySummerTime */,
  name: "Paraguay Summer Time",
  offset: TimezoneOffset.UTC_MINUS_3
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "PYT" /* ParaguayTime */,
  name: "Paraguay Time",
  offset: TimezoneOffset.UTC_MINUS_4
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "PET" /* PeruTime */,
  name: "Peru Time",
  offset: TimezoneOffset.UTC_MINUS_5
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "PHST" /* PhilippineStandardTime */,
  name: "Philippine Standard Time",
  offset: TimezoneOffset.UTC_PLUS_8
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "PHT" /* PhilippineTime */,
  name: "Philippine Time",
  offset: TimezoneOffset.UTC_PLUS_8
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "PHOT" /* PhoenixIslandTime */,
  name: "Phoenix Island Time",
  offset: TimezoneOffset.UTC_PLUS_13
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "PST" /* PitcairnTime */,
  name: "Pitcairn Time",
  offset: TimezoneOffset.UTC_MINUS_8
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "PONT" /* PohnpeiStandardTime */,
  name: "Pohnpei Standard Time",
  offset: TimezoneOffset.UTC_PLUS_11
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "RET" /* ReunionTime */,
  name: "Reunion Time",
  offset: TimezoneOffset.UTC_PLUS_4
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "ROTT" /* RotheraResearchStationTime */,
  name: "Rothera Research Station Time",
  offset: TimezoneOffset.UTC_MINUS_3
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "PMDT" /* SaintPierreAndMiquelonDaylightTime */,
  name: "Saint Pierre and Miquelon Daylight Time",
  offset: TimezoneOffset.UTC_MINUS_2
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "PMST" /* SaintPierreAndMiquelonStandardTime */,
  name: "Saint Pierre and Miquelon Standard Time",
  offset: TimezoneOffset.UTC_MINUS_3
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "SAKT" /* SakhalinIslandTime */,
  name: "Sakhalin Island Time",
  offset: TimezoneOffset.UTC_PLUS_11
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "SAMT" /* SamaraTime */,
  name: "Samara Time",
  offset: TimezoneOffset.UTC_PLUS_4
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "SDT" /* SamoaDaylightTime */,
  name: "Samoa Daylight Time",
  offset: TimezoneOffset.UTC_MINUS_10
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "SST" /* SamoaStandardTime */,
  name: "Samoa Standard Time",
  offset: TimezoneOffset.UTC_MINUS_11
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "SCT" /* SeychellesTime */,
  name: "Seychelles Time",
  offset: TimezoneOffset.UTC_PLUS_4
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "SYOT" /* ShowaStationTime */,
  name: "Showa Station Time",
  offset: TimezoneOffset.UTC_PLUS_3
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "SST" /* SingaporeStandardTime */,
  name: "Singapore Standard Time",
  offset: TimezoneOffset.UTC_PLUS_8
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "SGT" /* SingaporeTime */,
  name: "Singapore Time",
  offset: TimezoneOffset.UTC_PLUS_8
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "SBT" /* SolomonIslandsTime */,
  name: "Solomon Islands Time",
  offset: TimezoneOffset.UTC_PLUS_11
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "SAST" /* SouthAfricanStandardTime */,
  name: "South African Standard Time",
  offset: TimezoneOffset.UTC_PLUS_2
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "GST" /* SouthGeorgiaAndTheSouthSandwichIslandsTime */,
  name: "South Georgia and the South Sandwich Islands Time",
  offset: TimezoneOffset.UTC_MINUS_2
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "SRET" /* SrednekolymskTime */,
  name: "Srednekolymsk Time",
  offset: TimezoneOffset.UTC_PLUS_11
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "SLST" /* SriLankaStandardTime */,
  name: "Sri Lanka Standard Time",
  offset: TimezoneOffset.UTC_PLUS_5_30
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "SRT" /* SurinameTime */,
  name: "Suriname Time",
  offset: TimezoneOffset.UTC_MINUS_3
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "TAHT" /* TahitiTime */,
  name: "Tahiti Time",
  offset: TimezoneOffset.UTC_MINUS_10
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "TJT" /* TajikistanTime */,
  name: "Tajikistan Time",
  offset: TimezoneOffset.UTC_PLUS_5
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "THA" /* ThailandStandardTime */,
  name: "Thailand Standard Time",
  offset: TimezoneOffset.UTC_PLUS_7
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "TLT" /* TimorLesteTime */,
  name: "Timor-Leste Time",
  offset: TimezoneOffset.UTC_PLUS_9
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "TKT" /* TokelauTime */,
  name: "Tokelau Time",
  offset: TimezoneOffset.UTC_PLUS_13
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "TOT" /* TongaTime */,
  name: "Tonga Time",
  offset: TimezoneOffset.UTC_PLUS_13
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "TRT" /* TurkeyTime */,
  name: "Turkey Time",
  offset: TimezoneOffset.UTC_PLUS_3
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "TMT" /* TurkmenistanTime */,
  name: "Turkmenistan Time",
  offset: TimezoneOffset.UTC_PLUS_5
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "TVT" /* TuvaluTime */,
  name: "Tuvalu Time",
  offset: TimezoneOffset.UTC_PLUS_12
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "ULAT" /* UlaanbaatarStandardTime */,
  name: "Ulaanbaatar Standard Time",
  offset: TimezoneOffset.UTC_PLUS_8
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "ULAST" /* UlaanbaatarSummerTime */,
  name: "Ulaanbaatar Summer Time",
  offset: TimezoneOffset.UTC_PLUS_9
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "UYT" /* UruguayStandardTime */,
  name: "Uruguay Standard Time",
  offset: TimezoneOffset.UTC_MINUS_3
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "UYST" /* UruguaySummerTime */,
  name: "Uruguay Summer Time",
  offset: TimezoneOffset.UTC_MINUS_2
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "UZT" /* UzbekistanTime */,
  name: "Uzbekistan Time",
  offset: TimezoneOffset.UTC_PLUS_5
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "VUT" /* VanuatuTime */,
  name: "Vanuatu Time",
  offset: TimezoneOffset.UTC_PLUS_11
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "VET" /* VenezuelaStandardTime */,
  name: "Venezuela Standard Time",
  offset: TimezoneOffset.UTC_MINUS_4
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "VLAT" /* VladivostokTime */,
  name: "Vladivostok Time",
  offset: TimezoneOffset.UTC_PLUS_10
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "VOLT" /* VolgogradTime */,
  name: "Volgograd Time",
  offset: TimezoneOffset.UTC_PLUS_4
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "VOST" /* VostokStationTime */,
  name: "Vostok Station Time",
  offset: TimezoneOffset.UTC_PLUS_6
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "WAKT" /* WakeIslandTime */,
  name: "Wake Island Time",
  offset: TimezoneOffset.UTC_PLUS_12
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "WAST" /* WestAfricaSummerTime */,
  name: "West Africa Summer Time",
  offset: TimezoneOffset.UTC_PLUS_2
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "WAT" /* WestAfricaTime */,
  name: "West Africa Time",
  offset: TimezoneOffset.UTC_PLUS_1
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "WGST" /* WestGreenlandSummerTime */,
  name: "West Greenland Summer Time",
  offset: TimezoneOffset.UTC_MINUS_2
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "WGT" /* WestGreenlandTime */,
  name: "West Greenland Time",
  offset: TimezoneOffset.UTC_MINUS_3
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "WKT" /* WestKazakhstanTime */,
  name: "West Kazakhstan Time",
  offset: TimezoneOffset.UTC_PLUS_5
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "WEDT" /* WesternEuropeanSummerTime */,
  name: "Western European Summer Time",
  offset: TimezoneOffset.UTC_PLUS_1
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "WET" /* WesternEuropeanTime */,
  name: "Western European Time",
  offset: TimezoneOffset.UTC_0
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "WIT" /* WesternIndonesianTime */,
  name: "Western Indonesian Time",
  offset: TimezoneOffset.UTC_PLUS_7
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "WST" /* WesternStandardTime */,
  name: "Western Standard Time",
  offset: TimezoneOffset.UTC_PLUS_8
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "YAKT" /* YakutskTime */,
  name: "Yakutsk Time",
  offset: TimezoneOffset.UTC_PLUS_9
});
({
  dst: {
    is: false,
    uses: true
  },
  id: "YEKT" /* YekaterinburgTime */,
  name: "Yekaterinburg Time",
  offset: TimezoneOffset.UTC_PLUS_5
});

var Region = /* @__PURE__ */ ((Region2) => {
  Region2["Africa"] = "Africa";
  Region2["Americas"] = "Americas";
  Region2["Asia"] = "Asia";
  Region2["Europe"] = "Europe";
  Region2["Oceania"] = "Oceania";
  Region2["Polar"] = "Polar";
  return Region2;
})(Region || {});
var SubRegion = /* @__PURE__ */ ((SubRegion2) => {
  SubRegion2["CentralAmerica"] = "Central America";
  SubRegion2["EasternAsia"] = "Eastern Asia";
  SubRegion2["EasternEurope"] = "Eastern Europe";
  SubRegion2["EasternAfrica"] = "Eastern Africa";
  SubRegion2["MiddleAfrica"] = "Middle Africa";
  SubRegion2["MiddleEast"] = "Middle East";
  SubRegion2["NorthernAfrica"] = "Northern Africa";
  SubRegion2["NorthernAmerica"] = "Northern America";
  SubRegion2["NorthernEurope"] = "Northern Europe";
  SubRegion2["Polynesia"] = "Polynesia";
  SubRegion2["SouthAmerica"] = "South America";
  SubRegion2["SouthernAfrica"] = "Southern Africa";
  SubRegion2["SouthernAsia"] = "Southern Asia";
  SubRegion2["SouthernEurope"] = "Southern Europe";
  SubRegion2["WesternAfrica"] = "Western Africa";
  SubRegion2["WesternAsia"] = "Western Asia";
  SubRegion2["WesternEurope"] = "Western Europe";
  SubRegion2["WesternAustralia"] = "Western Australia";
  return SubRegion2;
})(SubRegion || {});

({
  Afghanistan: {
    i18n: {
      calling_codes: [93],
      currencies: [CurrencyCode.AfghanistanAfghani],
      languages: [
        LocaleCode.Pashto,
        LocaleCode.Dari,
        LocaleCode.Turkmen,
        LocaleCode.Uzbek
      ],
      tz: {
        offsets: [TimezoneOffset.UTC_PLUS_4_30],
        regions: [TimezoneRegions.AsiaKabul],
        timezones: [Timezones.AfghanistanTime]
      }
    },
    id: CountryCode.Afghanistan,
    info: {
      flag: {
        emoji: "\u{1F1E6}\u{1F1EB}",
        emoji_unicode: "U+1F1E6 U+1F1EB",
        svg: "https://www.countryflags.io/af/flat/64.svg"
      },
      tld: [".af"]
    },
    iso: {
      alpha2: CountryCode.Afghanistan,
      alpha3: "AFG",
      numeric: "004"
    },
    name: {
      alt_spellings: ["AF", "Af\u0121\u0101nist\u0101n"],
      demonym: "Afghan",
      native: {
        endonym: "\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646"
      },
      official: "Islamic Republic of Afghanistan",
      short: "Afghanistan",
      translations: {
        [LocaleCode.Afrikaans]: "Afghanistan",
        [LocaleCode.Albanian]: "Shqip\xEBri",
        [LocaleCode.Amharic]: "\u12A0\u134D\u130B\u1295",
        [LocaleCode.Arabic]: "\u0623\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646",
        [LocaleCode.Armenian]: "\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576",
        [LocaleCode.Azerbaijani]: "Az\u0259rbaycan",
        [LocaleCode.Bashkir]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D",
        [LocaleCode.Basque]: "Afganist\xE1n",
        [LocaleCode.Belarusian]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D",
        [LocaleCode.Bengali]: "\u0986\u09AB\u0997\u09BE\u09A8\u09BF\u09B8\u09CD\u09A4\u09BE\u09A8",
        [LocaleCode.Berber]: "\u0623\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646",
        [LocaleCode.Bhutani]: "\u0F60\u0F56\u0FB2\u0F74\u0F42\u0F0B\u0F61\u0F74\u0F63\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F51\u0F7C\u0F53\u0F0B\u0F63\u0F7A\u0F0B\u0F66\u0F90\u0F51\u0F0B\u0F46\u0F0D",
        [LocaleCode.Bosnian]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D",
        [LocaleCode.Breton]: "Afganistan",
        [LocaleCode.Bulgarian]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D",
        [LocaleCode.Burmese]: "\u1021\u102C\u1019\u1001\u103B\u1004\u103A\u1010\u1031\u102C\u103A",
        [LocaleCode.Catalan]: "Afganistan",
        [LocaleCode.Chinese]: "\u963F\u5BCC\u6C57",
        [LocaleCode.Croatian]: "Afganistan",
        [LocaleCode.Czech]: "Afganistan",
        [LocaleCode.Danish]: "Afghanistan",
        [LocaleCode.Dutch]: "Afghanistan",
        [LocaleCode.English]: "Afghanistan",
        [LocaleCode.Esperanto]: "Afganistan",
        [LocaleCode.Estonian]: "Afganistan",
        [LocaleCode.Finnish]: "Afghanistan",
        [LocaleCode.French]: "Afghanistan",
        [LocaleCode.Frisian]: "Afghanistan",
        [LocaleCode.Galician]: "Afganist\xE1n",
        [LocaleCode.Georgian]: "\u10D0\u10D5\u10E6\u10D0\u10DC\u10D4\u10D7\u10D8",
        [LocaleCode.German]: "Afghanistan",
        [LocaleCode.Greenlandic]: "Afghanistan",
        [LocaleCode.Greek]: "\u0391\u03C6\u03B3\u03B1\u03BD\u03B9\u03C3\u03C4\u03AC\u03BD",
        [LocaleCode.Gujarati]: "\u0A85\u0AAB\u0A97\u0ABE\u0AA8\u0ABF\u0AB8\u0ACD\u0AA4\u0ABE\u0AA8",
        [LocaleCode.Haitian]: "Afghanistan",
        [LocaleCode.Hausa]: "Afghanistan",
        [LocaleCode.Hebrew]: "\u05D0\u05E4\u05D2\u05E0\u05D9\u05E1\u05D8\u05DF",
        [LocaleCode.Hindi]: "\u0905\u092B\u0917\u093E\u0928\u093F\u0938\u094D\u0924\u093E\u0928",
        [LocaleCode.Hungarian]: "Afganistan",
        [LocaleCode.Icelandic]: "Afghanistan",
        [LocaleCode.Igbo]: "Afghanistan",
        [LocaleCode.Indonesian]: "Afghanistan",
        [LocaleCode.Irish]: "Afghanistan",
        [LocaleCode.Italian]: "Afghanistan",
        [LocaleCode.Japanese]: "\u30A2\u30D5\u30AC\u30CB\u30B9\u30BF\u30F3",
        [LocaleCode.Javanese]: "Afghanistan",
        [LocaleCode.Kannada]: "\u0C85\u0CAB\u0C97\u0CBE\u0CA8\u0CBF\u0CB8\u0CCD\u0CA4\u0CBE\u0CA8",
        [LocaleCode.Kazakh]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D",
        [LocaleCode.Khmer]: "\u17A2\u17B6\u17A0\u17D2\u179C\u17D2\u179A\u17B7\u1780",
        [LocaleCode.Korean]: "\uC544\uD504\uAC00\uB2C8\uC2A4\uD0C4",
        [LocaleCode.Kurdish]: "Afghanistan",
        [LocaleCode.Kyrgyz]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D",
        [LocaleCode.Lao]: "\u0EAD\u0EB2\u0E9F\u0EB2\u0EA5\u0EBD\u0E99",
        [LocaleCode.Latin]: "Afghanistan",
        [LocaleCode.Latvian]: "Afghanistan",
        [LocaleCode.Lithuanian]: "Afganistanas",
        [LocaleCode.Luxembourgish]: "Afghanistan",
        [LocaleCode.Macedonian]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D",
        [LocaleCode.Malagasy]: "Afghanistan",
        [LocaleCode.Malay]: "Afghanistan",
        [LocaleCode.Malayalam]: "\u0D05\u0D2B\u0D17\u0D3E\u0D28\u0D3F\u0D38\u0D4D\u0D24\u0D3E\u0D28",
        [LocaleCode.Maltese]: "Afghanistan",
        [LocaleCode.Maori]: "Afghanistan",
        [LocaleCode.Marathi]: "\u0905\u092B\u0917\u093E\u0928\u093F\u0938\u094D\u0924\u093E\u0928",
        [LocaleCode.Mongolian]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D",
        [LocaleCode.Nepali]: "\u0905\u092B\u0917\u093E\u0928\u093F\u0938\u094D\u0924\u093E\u0928",
        [LocaleCode.Norwegian]: "Afghanistan",
        [LocaleCode.Pashto]: "\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646",
        [LocaleCode.Persian]: "\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646",
        [LocaleCode.Polish]: "Afganistan",
        [LocaleCode.Portuguese]: "Afghanistan",
        [LocaleCode.Punjabi]: "Afghanistan",
        [LocaleCode.Romanian]: "Afghanistan",
        [LocaleCode.Polish]: "Afganistan",
        [LocaleCode.Russian]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D",
        [LocaleCode.Samoan]: "Afghanistan",
        [LocaleCode.Sanskrit]: "\u0905\u092B\u0917\u093E\u0928\u093F\u0938\u094D\u0924\u093E\u0928",
        [LocaleCode.Scots]: "Afghanistan",
        [LocaleCode.Serbian]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D",
        [LocaleCode.Sesotho]: "Afghanistan",
        [LocaleCode.Shona]: "Afghanistan",
        [LocaleCode.Sindhi]: "Afghanistan",
        [LocaleCode.Sinhala]: "\u0D86\u0D9C\u0DCA\u200D\u0DBB\u0DDC\u0D9A\u0DCA\u0D9A\u0DD2\u0DBA\u0DCF\u0DC0",
        [LocaleCode.Slovak]: "Afganistan",
        [LocaleCode.Slovenian]: "Afganistan",
        [LocaleCode.Somali]: "Afghanistan",
        [LocaleCode.Spanish]: "Afganist\xE1n",
        [LocaleCode.Sudanese]: "Afghanistan",
        [LocaleCode.Swahili]: "Afghanistan",
        [LocaleCode.Swedish]: "Afghanistan",
        [LocaleCode.Tagalog]: "Afghanistan",
        [LocaleCode.Tajik]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D",
        [LocaleCode.Tatar]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D",
        [LocaleCode.Tamil]: "\u0B86\u0BAA\u0BCD\u0BAA\u0B95\u0BBE\u0BA9\u0BBF\u0BB8\u0BCD\u0BA4\u0BBE\u0BA9\u0BCD",
        [LocaleCode.Telugu]: "\u0C06\u0C2B\u0C4D\u0C18\u0C28\u0C3F\u0C38\u0C4D\u0C24\u0C3E\u0C28\u0C4D",
        [LocaleCode.Thai]: "\u0E2D\u0E31\u0E1F\u0E01\u0E32\u0E19\u0E34\u0E2A\u0E16\u0E32\u0E19",
        [LocaleCode.Tibetan]: "\u0F68\u0F55\u0F0B\u0F42\u0F7A\u0F0B\u0F53\u0F72\u0F66\u0F72\u0F0B\u0F4F\u0F7A\u0F53\u0F66\u0F72\u0F0D",
        [LocaleCode.Turkish]: "Afganistan",
        [LocaleCode.Ukrainian]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D",
        [LocaleCode.Urdu]: "\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646",
        [LocaleCode.Uzbek]: "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D",
        [LocaleCode.Vietnamese]: "Afghanistan",
        [LocaleCode.Welsh]: "Afghanistan",
        [LocaleCode.Xhosa]: "Afghanistan",
        [LocaleCode.Yiddish]: "Afghanistan",
        [LocaleCode.Yoruba]: "Afghanistan",
        [LocaleCode.Zulu]: "Afghanistan"
      }
    },
    statistics: {
      demographics: {
        age: {
          distribution: [
            { age: "0 to 14 years", percentage: 15.3 },
            { age: "15 to 64 years", percentage: 66.7 },
            { age: "65 years and over", percentage: 14.6 }
          ],
          median_age: 35.5
        },
        population: {
          largest_city: "Kabul",
          total: 341e5
        }
      },
      geography: {
        area: 652230,
        region: Region.Asia,
        sub_region: SubRegion.SouthernAsia
      },
      government: {
        capital: "Kabul",
        type: "Islamic Emirate"
      }
    }
  },
  Albania: {
    i18n: {
      calling_codes: [355],
      currencies: [CurrencyCode.AlbaniaLek],
      languages: [LocaleCode.Albanian, LocaleCode.Greek, LocaleCode.Turkish],
      tz: {
        offsets: [TimezoneOffset.UTC_PLUS_1],
        regions: [TimezoneRegions.EuropeBrussels],
        timezones: [Timezones.CentralEuropeanTime]
      }
    },
    id: CountryCode.Albania,
    info: {
      flag: {
        emoji: "\u{1F1E6}\u{1F1F1}",
        emoji_unicode: "U+1F1E6 U+1F1F1",
        svg: "https://www.countryflags.io/al/flat/64.svg"
      },
      tld: [".al"]
    },
    iso: {
      alpha2: CountryCode.Albania,
      alpha3: "ALB",
      numeric: "008"
    },
    name: {
      alt_spellings: ["AL", "Shqip\xEBri", "Shqip\xEBria", "Shqipnia"],
      demonym: "Albanian",
      native: {
        endonym: "Shqip\xEBri"
      },
      official: "Republic of Albania",
      short: "Albania",
      translations: {
        [LocaleCode.Afrikaans]: "Albania",
        [LocaleCode.Albanian]: "Albania",
        [LocaleCode.Amharic]: "\u12A0\u120D\u1263\u1295\u12EB",
        [LocaleCode.Arabic]: "\u0623\u0644\u0628\u0627\u0646\u064A\u0627",
        [LocaleCode.Armenian]: "\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576",
        [LocaleCode.Azerbaijani]: "Az\u0259rbaycan",
        [LocaleCode.Bashkir]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F",
        [LocaleCode.Basque]: "Albania",
        [LocaleCode.Belarusian]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F",
        [LocaleCode.Bengali]: "\u0986\u09B2\u09AC\u09BE\u09A8\u09BF\u09AF\u09BC\u09BE",
        [LocaleCode.Berber]: "\u0623\u0644\u0628\u0627\u0646\u064A\u0627",
        [LocaleCode.Bhutani]: "\u0F60\u0F56\u0FB2\u0F74\u0F42\u0F0B\u0F61\u0F74\u0F63\u0F0B",
        [LocaleCode.Bosnian]: "Albanija",
        [LocaleCode.Breton]: "Albania",
        [LocaleCode.Bulgarian]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F",
        [LocaleCode.Burmese]: "\u1021\u102C\u1019\u1001\u103B\u1004\u103A\u1010\u1031\u102C\u103A",
        [LocaleCode.Catalan]: "Alb\xE0nia",
        [LocaleCode.Chinese]: "\u963F\u5C14\u5DF4\u5C3C\u4E9A",
        [LocaleCode.Croatian]: "Albanija",
        [LocaleCode.Czech]: "Alb\xE1nie",
        [LocaleCode.Danish]: "Albanien",
        [LocaleCode.Dutch]: "Albani\xEB",
        [LocaleCode.English]: "Albania",
        [LocaleCode.Esperanto]: "Albanio",
        [LocaleCode.Estonian]: "Albaania",
        [LocaleCode.Finnish]: "Albania",
        [LocaleCode.French]: "Albanie",
        [LocaleCode.Frisian]: "Albani\xEB",
        [LocaleCode.Galician]: "Alb\xE2nia",
        [LocaleCode.Georgian]: "\u10D0\u10DA\u10D1\u10D0\u10DC\u10D8\u10D0",
        [LocaleCode.German]: "Albanien",
        [LocaleCode.Greenlandic]: "Albania",
        [LocaleCode.Greek]: "\u0391\u03BB\u03B2\u03B1\u03BD\u03AF\u03B1",
        [LocaleCode.Gujarati]: "\u0A85\u0AB2\u0AAC\u0AA8\u0ABF\u0AAF\u0ABE",
        [LocaleCode.Haitian]: "Albanais",
        [LocaleCode.Hausa]: "Albania",
        [LocaleCode.Hebrew]: "\u05D0\u05DC\u05D1\u05E0\u05D9\u05D4",
        [LocaleCode.Hindi]: "\u0905\u0932\u094D\u092C\u093E\u0928\u093F\u092F\u093E",
        [LocaleCode.Hungarian]: "Alb\xE1nia",
        [LocaleCode.Icelandic]: "Alb\xFAnir",
        [LocaleCode.Igbo]: "Albania",
        [LocaleCode.Indonesian]: "Albania",
        [LocaleCode.Irish]: "Alb\xE1in",
        [LocaleCode.Italian]: "Albania",
        [LocaleCode.Japanese]: "\u30A2\u30EB\u30D0\u30CB\u30A2",
        [LocaleCode.Javanese]: "Albania",
        [LocaleCode.Kannada]: "\u0C85\u0CB2\u0CCD\u0CAC\u0CBE\u0CA8\u0CBF\u0CAF\u0CBE",
        [LocaleCode.Kazakh]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F",
        [LocaleCode.Khmer]: "\u17A2\u17B6\u17A0\u17D2\u179C\u17D2\u179A\u17C1\u179F\u17CA\u17B8",
        [LocaleCode.Korean]: "\uC54C\uBC14\uB2C8\uC544",
        [LocaleCode.Kurdish]: "\u0622\u0644\u0628\u0627\u0646\u06CC\u0627",
        [LocaleCode.Kyrgyz]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F",
        [LocaleCode.Lao]: "\u0EAD\u0EB2\u0EA5\u0EB2\u0E99\u0EB5",
        [LocaleCode.Latin]: "Albania",
        [LocaleCode.Latvian]: "Alb\u0101nija",
        [LocaleCode.Lithuanian]: "Albanija",
        [LocaleCode.Luxembourgish]: "Albani\xEB",
        [LocaleCode.Macedonian]: "\u0410\u043B\u0431\u0430\u043D\u0438\u0458\u0430",
        [LocaleCode.Malagasy]: "Albania",
        [LocaleCode.Malay]: "Albania",
        [LocaleCode.Malayalam]: "\u0D05\u0D32\u0D4D\u0D2C\u0D3E\u0D28\u0D3F\u0D2F\u0D3E",
        [LocaleCode.Maltese]: "Albania",
        [LocaleCode.Maori]: "Albania",
        [LocaleCode.Marathi]: "\u0905\u0932\u094D\u092C\u093E\u0928\u093F\u092F\u093E",
        [LocaleCode.Mongolian]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F",
        [LocaleCode.Nepali]: "\u0905\u0932\u094D\u092C\u093E\u0928\u093F\u092F\u093E",
        [LocaleCode.Norwegian]: "Albania",
        [LocaleCode.Pashto]: "\u0627\u0627\u0644\u0628\u0627\u0646\u06CC",
        [LocaleCode.Persian]: "\u0622\u0644\u0628\u0627\u0646\u06CC",
        [LocaleCode.Polish]: "Albania",
        [LocaleCode.Portuguese]: "Alb\xE2nia",
        [LocaleCode.Punjabi]: "\u0A05\u0A32\u0A2C\u0A28\u0A40\u0A06",
        [LocaleCode.Romanian]: "Alb\u0103n",
        [LocaleCode.Russian]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F",
        [LocaleCode.Samoan]: "Albania",
        [LocaleCode.Sanskrit]: "Albani",
        [LocaleCode.Scots]: "Alb\xE0inia",
        [LocaleCode.Serbian]: "\u0410\u043B\u0431\u0430\u043D\u0438\u0458\u0430",
        [LocaleCode.Sesotho]: "Albania",
        [LocaleCode.Shona]: "Albania",
        [LocaleCode.Sindhi]: "Albania",
        [LocaleCode.Sinhala]: "\u0D87\u0DBD\u0DCA\u0DB6\u0DCF\u0DB1\u0DD2\u0DBA",
        [LocaleCode.Slovak]: "Alb\xE1nsko",
        [LocaleCode.Slovenian]: "Albanija",
        [LocaleCode.Somali]: "Albania",
        [LocaleCode.Spanish]: "Albania",
        [LocaleCode.Sudanese]: "Albania",
        [LocaleCode.Swahili]: "Albania",
        [LocaleCode.Swedish]: "Albanien",
        [LocaleCode.Tagalog]: "Albania",
        [LocaleCode.Tajik]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F",
        [LocaleCode.Tamil]: "\u0B85\u0BB2\u0BCD\u0BAA\u0BBE\u0BA9\u0BBF\u0BAF\u0BBE",
        [LocaleCode.Tatar]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F",
        [LocaleCode.Telugu]: "\u0C05\u0C32\u0C4D\u0C2C\u0C3E\u0C28\u0C3F\u0C2F\u0C3E",
        [LocaleCode.Thai]: "\u0E2D\u0E31\u0E25\u0E41\u0E1A\u0E19\u0E34\u0E19\u0E35",
        [LocaleCode.Tibetan]: "\u0F68\u0F63\u0F0B\u0F56\u0F72\u0F0B\u0F53\u0F72\u0F0B\u0F61\u0F72",
        [LocaleCode.Turkish]: "Albaniye",
        [LocaleCode.Ukrainian]: "\u0410\u043B\u0431\u0430\u043D\u0456\u044F",
        [LocaleCode.Urdu]: "\u0622\u0644\u0628\u0627\u0646\u06CC",
        [LocaleCode.Uzbek]: "\u0410\u043B\u0431\u0430\u043D\u0438\u044F",
        [LocaleCode.Vietnamese]: "Albanie",
        [LocaleCode.Welsh]: "Albania",
        [LocaleCode.Xhosa]: "Albania",
        [LocaleCode.Yiddish]: "\u05D0\u05DC\u05D1\u05E0\u05D9\u05E9",
        [LocaleCode.Yoruba]: "Albania",
        [LocaleCode.Zulu]: "Albania"
      }
    },
    statistics: {
      demographics: {
        age: {
          distribution: [
            { age: "0 to 14 years", percentage: 15.3 },
            { age: "15 to 64 years", percentage: 66.7 },
            { age: "65 years and over", percentage: 14.6 }
          ],
          median_age: 35.5
        },
        population: {
          largest_city: "Tirana",
          total: 2853e3
        }
      },
      geography: {
        area: 28748,
        region: Region.Europe,
        sub_region: SubRegion.SouthernEurope
      },
      government: {
        capital: "Tirana",
        type: "Republic"
      }
    }
  },
  Algeria: {
    i18n: {
      calling_codes: [213],
      currencies: [CurrencyCode.AlgeriaDinar],
      languages: [
        LocaleCode.Arabic,
        LocaleCode.French,
        LocaleCode.Berber,
        LocaleCode.Tamazight
      ],
      tz: {
        offsets: [TimezoneOffset.UTC_PLUS_1, TimezoneOffset.UTC_PLUS_2],
        regions: [TimezoneRegions.AfricaAlgiers],
        timezones: [Timezones.CentralEuropeanTime]
      }
    },
    id: CountryCode.Algeria,
    info: {
      flag: {
        emoji: "\u{1F1E9}\u{1F1FF}",
        emoji_unicode: "U+1F1E9 U+1F1FF",
        svg: "https://www.countryflags.io/dz/flat/64.svg"
      },
      tld: [".dz", ".\u062C\u0632\u0627\u0626\u0631"]
    },
    iso: {
      alpha2: CountryCode.Algeria,
      alpha3: "DZA",
      numeric: "012"
    },
    name: {
      alt_spellings: ["DZ", "Dzayer", "Alg\xE9rie"],
      demonym: "Algerian",
      native: {
        endonym: "\u0627\u0644\u062C\u0632\u0627\u0626\u0631"
      },
      official: "People's Democratic Republic of Algeria",
      short: "Algeria",
      translations: {
        [LocaleCode.Afrikaans]: "Algerije",
        [LocaleCode.Albanian]: "Algeria",
        [LocaleCode.Amharic]: "\u12A0\u120D\u1300\u122D\u1235",
        [LocaleCode.Arabic]: "\u0627\u0644\u062C\u0632\u0627\u0626\u0631",
        [LocaleCode.Armenian]: "\u0531\u056C\u0563\u0578\u0580\u056B\u0561",
        [LocaleCode.Azerbaijani]: "Az\u0259rbaycan",
        [LocaleCode.Bashkir]: "\u0410\u043B\u0436\u0438\u0440",
        [LocaleCode.Basque]: "Algeria",
        [LocaleCode.Belarusian]: "\u0410\u043B\u0436\u0438\u0440",
        [LocaleCode.Bengali]: "\u0986\u09B2\u099C\u09C7\u09B0",
        [LocaleCode.Berber]: "\u062C\u0632\u0627\u0626\u0631",
        [LocaleCode.Bhutani]: "\u0F62\u0FAB\u0F7C\u0F44\u0F0B\u0F41",
        [LocaleCode.Bosnian]: "Al\u017Eir",
        [LocaleCode.Breton]: "Algeria",
        [LocaleCode.Bulgarian]: "\u0410\u043B\u0436\u0438\u0440",
        [LocaleCode.Burmese]: "\u1021\u102C\u101B\u1015\u103A",
        [LocaleCode.Catalan]: "Alg\xE8ria",
        [LocaleCode.Chinese]: "\u963F\u5C14\u53CA\u5229\u4E9A",
        [LocaleCode.Croatian]: "Al\u017Eir",
        [LocaleCode.Czech]: "Al\u017E\xEDrsko",
        [LocaleCode.Danish]: "Algeriet",
        [LocaleCode.Dutch]: "Algerije",
        [LocaleCode.English]: "Algeria",
        [LocaleCode.Esperanto]: "Al\u011Derio",
        [LocaleCode.Estonian]: "Al\u017Eira",
        [LocaleCode.Finnish]: "Algeria",
        [LocaleCode.French]: "Alg\xE9rie",
        [LocaleCode.Frisian]: "Algeri\xEB",
        [LocaleCode.Galician]: "Alxeria",
        [LocaleCode.Georgian]: "\u10D0\u10DA\u10D2\u10D8\u10E3\u10E0\u10D8",
        [LocaleCode.German]: "Algerien",
        [LocaleCode.Greenlandic]: "Algeria",
        [LocaleCode.Greek]: "\u0391\u03BB\u03B3\u03B5\u03C1\u03AF\u03B1",
        [LocaleCode.Gujarati]: "\u0A86\u0AB2\u0AC7\u0A97\u0AB0\u0ABF\u0AAF\u0ABE",
        [LocaleCode.Haitian]: "Alg\xE9rie",
        [LocaleCode.Hausa]: "Algeria",
        [LocaleCode.Hebrew]: "\u05D0\u05DC\u05D2\u05F3\u05D9\u05E8\u05D9\u05D4",
        [LocaleCode.Hindi]: "\u0906\u0932\u094D\u0917\u0947\u0930\u093F\u092F\u093E",
        [LocaleCode.Hungarian]: "Alg\xE1r",
        [LocaleCode.Icelandic]: "Alg\xFAra",
        [LocaleCode.Igbo]: "Algeria",
        [LocaleCode.Indonesian]: "Aljir",
        [LocaleCode.Irish]: "Alg\xE9rie",
        [LocaleCode.Italian]: "Algeria",
        [LocaleCode.Japanese]: "\u30A2\u30EB\u30B8\u30A7\u30EA\u30A2",
        [LocaleCode.Javanese]: "Aljir",
        [LocaleCode.Kannada]: "\u0C86\u0CB2\u0CCD\u0C97\u0CC7\u0CB0\u0CBF\u0CAF\u0CA8\u0CCD",
        [LocaleCode.Kazakh]: "\u0410\u043B\u0436\u0438\u0440",
        [LocaleCode.Khmer]: "\u17A2\u17B6\u179B\u17CB\u1794\u17B6\u1793\u17B8",
        [LocaleCode.Korean]: "\uC54C\uC81C\uB9AC",
        [LocaleCode.Kurdish]: "\u062C\u0632\u0627\u06CC\u0631 \u0627\u0644\u062C\u0632\u0627\u06CC\u0631",
        [LocaleCode.Kyrgyz]: "\u0410\u043B\u0436\u0438\u0440",
        [LocaleCode.Lao]: "\u0EAD\u0EB2\u0EA5\u0EB2\u0E88\u0EB5\u0E99",
        [LocaleCode.Latin]: "Algeria",
        [LocaleCode.Latvian]: "Al\u017E\u012Brija",
        [LocaleCode.Lithuanian]: "Al\u017Eyras",
        [LocaleCode.Luxembourgish]: "Algeria",
        [LocaleCode.Macedonian]: "\u0410\u043B\u0436\u0438\u0440",
        [LocaleCode.Malagasy]: "Alg\xE9rie",
        [LocaleCode.Malay]: "Aljir",
        [LocaleCode.Malayalam]: "\u0D06\u0D32\u0D02\u0D17\u0D47\u0D30\u0D3F\u0D2F\u0D7B",
        [LocaleCode.Maltese]: "Alg\xE9rie",
        [LocaleCode.Maori]: "Algeria",
        [LocaleCode.Marathi]: "\u0906\u0932\u094D\u0917\u0947\u0930\u093F\u092F\u093E",
        [LocaleCode.Mongolian]: "\u0410\u043B\u0436\u0438\u0440",
        [LocaleCode.Nepali]: "\u0906\u0932\u094D\u0917\u0947\u0930\u093F\u092F\u093E",
        [LocaleCode.Norwegian]: "Algeria",
        [LocaleCode.Pashto]: "\u0627\u0644\u062C\u0632\u0627\u0626\u0631",
        [LocaleCode.Persian]: "\u062C\u0632\u0627\u06CC\u0631 \u0627\u0644\u0639\u0631\u0628",
        [LocaleCode.Polish]: "Algieria",
        [LocaleCode.Portuguese]: "Alg\xE9ria",
        [LocaleCode.Punjabi]: "\u0A06\u0A32\u0A47\u0A17\u0A40\u0A06",
        [LocaleCode.Romanian]: "Algeria",
        [LocaleCode.Russian]: "\u0410\u043B\u0436\u0438\u0440",
        [LocaleCode.Samoan]: "Algeria",
        [LocaleCode.Sanskrit]: "\u0906\u0932\u094D\u0917\u0947\u0930\u093F\u092F\u093E",
        [LocaleCode.Scots]: "Algeria",
        [LocaleCode.Serbian]: "\u0410\u043B\u0436\u0438\u0440",
        [LocaleCode.Sesotho]: "Algeria",
        [LocaleCode.Shona]: "Algeria",
        [LocaleCode.Sindhi]: "Algeria",
        [LocaleCode.Sinhala]: "\u0D86\u0DBD\u0DCA\u0DB6\u0DCF\u0DB1\u0DD2\u0DBA",
        [LocaleCode.Slovak]: "Al\u017E\xEDrsko",
        [LocaleCode.Slovenian]: "Al\u017Eir",
        [LocaleCode.Somali]: "Algeria",
        [LocaleCode.Spanish]: "Algeria",
        [LocaleCode.Sudanese]: "Aljir",
        [LocaleCode.Swahili]: "Aljir",
        [LocaleCode.Swedish]: "Algeriet",
        [LocaleCode.Tagalog]: "Algeria",
        [LocaleCode.Tajik]: "\u0410\u043B\u0436\u0438\u0440",
        [LocaleCode.Tamil]: "\u0B86\u0BB2\u0BCD\u0B95\u0BC7\u0BB0\u0BBF\u0BAF\u0BBE",
        [LocaleCode.Tatar]: "\u0410\u043B\u0436\u0438\u0440",
        [LocaleCode.Telugu]: "\u0C06\u0C32\u0C4D\u0C17\u0C47\u0C30\u0C3F\u0C2F\u0C3E",
        [LocaleCode.Thai]: "\u0E2D\u0E32\u0E23\u0E32\u0E01\u0E2D\u0E19",
        [LocaleCode.Tibetan]: "\u0F68\u0F63\u0F9F\u0F72\u0F0B\u0F62\u0F72\u0F0B\u0F61\u0F72",
        [LocaleCode.Turkish]: "Cezayir",
        [LocaleCode.Ukrainian]: "\u0410\u043B\u0436\u0438\u0440",
        [LocaleCode.Urdu]: "\u0622\u0644\u062C\u06CC\u0631",
        [LocaleCode.Uzbek]: "\u0410\u043B\u0436\u0438\u0440",
        [LocaleCode.Vietnamese]: "\u1EA2\u0301\u1EA1\u1EA3\u1EAD\u1EB5",
        [LocaleCode.Welsh]: "Algeria",
        [LocaleCode.Xhosa]: "Algeria",
        [LocaleCode.Yiddish]: "\u05D0\u05DC\u05D2\u05F3\u05D9\u05E8\u05D9\u05D4",
        [LocaleCode.Yoruba]: "Algeria",
        [LocaleCode.Zulu]: "Algeria"
      }
    },
    statistics: {
      demographics: {
        age: {
          distribution: [
            { age: "0 to 14 years", percentage: 15.3 },
            { age: "15 to 64 years", percentage: 66.7 },
            { age: "65 years and over", percentage: 14.6 }
          ],
          median_age: 35.5
        },
        population: {
          largest_city: "Oran",
          total: 371e5
        }
      },
      geography: {
        area: 2381740,
        region: Region.Africa,
        sub_region: SubRegion.NorthernAfrica
      },
      government: {
        capital: "Algiers",
        type: "Republic"
      }
    }
  },
  AmericanSamoa: {
    i18n: {
      calling_codes: [1684],
      currencies: [CurrencyCode.AmericanSamoaTala],
      languages: [LocaleCode.English, LocaleCode.Samoan],
      tz: {
        offsets: [TimezoneOffset.UTC_MINUS_11],
        regions: [TimezoneRegions.PacificSamoa],
        timezones: [Timezones.SamoaStandardTime]
      }
    },
    id: CountryCode.AmericanSamoa,
    info: {
      flag: {
        emoji: "\u{1F1E6}\u{1F1F8}",
        emoji_unicode: "U+1F1E6 U+1F1F8",
        svg: "https://www.countryflags.io/as/flat/64.svg"
      },
      tld: [".as"]
    },
    iso: {
      alpha2: CountryCode.AmericanSamoa,
      alpha3: "ASM",
      numeric: "016"
    },
    name: {
      alt_spellings: ["AS", "Amerika S\u0101moa", "Amelika S\u0101moa", "S\u0101moa Amelika"],
      demonym: "American Samoan",
      native: {
        endonym: "American Samoa"
      },
      official: "American Samoa",
      short: "American Samoa",
      translations: {
        [LocaleCode.Afrikaans]: "Amerikaans Samoa",
        [LocaleCode.Albanian]: "Samoa Amerikane",
        [LocaleCode.Amharic]: "\u1233\u121E\u12A0\u122D",
        [LocaleCode.Arabic]: "\u0633\u0627\u0645\u0648\u0627 \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629",
        [LocaleCode.Armenian]: "\u054D\u0561\u0570\u0561\u0574\u0561\u056C\u056B\u0561",
        [LocaleCode.Azerbaijani]: "Samoa Amerikana",
        [LocaleCode.Bashkir]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438 \u0421\u0430\u043C\u043E\u0430",
        [LocaleCode.Basque]: "Samoa Amerikana",
        [LocaleCode.Belarusian]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u0421\u0430\u043C\u043E\u0430",
        [LocaleCode.Bengali]: "\u0986\u09AE\u09C7\u09B0\u09BF\u0995\u09BE\u09A8 \u09B8\u09BE\u09AE\u09CB\u09AF\u09BC\u09BE",
        [LocaleCode.Berber]: "\u062C\u0632\u0631 \u0633\u0627\u0645\u0648\u0627 \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A\u0629",
        [LocaleCode.Bhutani]: "\u0F68\u0F62\u0F92\u0FB1\u0F0B\u0F58\u0F72\u0F0B\u0F51\u0F58\u0F44\u0F66\u0F0B\u0F66\u0FA4\u0FB2\u0F7C\u0F51\u0F0B\u0F40\u0FB1\u0F72\u0F0B\u0F66\u0F90\u0F56\u0F66\u0F0B\u0F62\u0F92\u0FB1\u0F74\u0F51\u0F0B\u0F46\u0F7A\u0F53\u0F0B\u0F54\u0F7C\u0F0D",
        [LocaleCode.Bosnian]: "Ameri\u010Dka Samoa",
        [LocaleCode.Breton]: "Samoa Amerikan",
        [LocaleCode.Bulgarian]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430 \u0421\u0430\u043C\u043E\u0430",
        [LocaleCode.Burmese]: "\u1021\u1019\u1039\u1038\u1019\u101B\u102D\u102F\u1018\u102C\u101E\u102C",
        [LocaleCode.Catalan]: "Samoa Americana",
        [LocaleCode.Chinese]: "\u7F8E\u5C5E\u8428\u6469\u4E9A",
        [LocaleCode.Croatian]: "Ameri\u010Dka Samoa",
        [LocaleCode.Czech]: "Americk\xE1 Samoa",
        [LocaleCode.Danish]: "Amerikansk Samoa",
        [LocaleCode.Dutch]: "Amerikaans Samoa",
        [LocaleCode.English]: "American Samoa",
        [LocaleCode.Esperanto]: "Samoa Amerika",
        [LocaleCode.Estonian]: "Ameerika Samoa",
        [LocaleCode.Finnish]: "Amerikka Samoa",
        [LocaleCode.French]: "American Samoa",
        [LocaleCode.Frisian]: "Amerikaans Samoa",
        [LocaleCode.Galician]: "Samoa Americana",
        [LocaleCode.Georgian]: "\u10D0\u10DB\u10D4\u10E0\u10D8\u10D9\u10D8\u10E1 \u10E1\u10D0\u10DB\u10DD\u10D0",
        [LocaleCode.German]: "Amerikanisch-Samoa",
        [LocaleCode.Greenlandic]: "Amerikaans Samoa",
        [LocaleCode.Greek]: "\u0391\u03BC\u03B5\u03C1\u03B9\u03BA\u03B1\u03BD\u03B9\u03BA\u03AE \u03A3\u03B1\u03BC\u03CC\u03B1",
        [LocaleCode.Gujarati]: "\u0A86\u0AAE\u0AC7\u0AB0\u0ABF\u0A95\u0AA8 \u0AB8\u0ABE\u0AAE\u0ACB\u0AAF\u0ABE",
        [LocaleCode.Haitian]: "Amerikaans Samoa",
        [LocaleCode.Hausa]: "Amerikaans Samoa",
        [LocaleCode.Hebrew]: "\u05D0\u05DE\u05E8\u05D9\u05E7\u05E0\u05D9\u05D4 \u05E1\u05DE\u05D5\u05D0\u05D4",
        [LocaleCode.Hindi]: "\u0905\u092E\u0947\u0930\u093F\u0915\u093E \u0938\u092E\u094B\u0906",
        [LocaleCode.Hungarian]: "Amerikai Szamoa",
        [LocaleCode.Icelandic]: "Amerikai Szamoa",
        [LocaleCode.Igbo]: "Ikina Amerika",
        [LocaleCode.Indonesian]: "Samoa Amerika",
        [LocaleCode.Irish]: "Samoa Amerikana",
        [LocaleCode.Italian]: "Samoa Americane",
        [LocaleCode.Japanese]: "\u30A2\u30E1\u30EA\u30AB\u9818\u30B5\u30E2\u30A2",
        [LocaleCode.Javanese]: "Samoa Amerika",
        [LocaleCode.Kannada]: "\u0C85\u0CAE\u0CC7\u0CB0\u0CBF\u0C95\u0CA8\u0CCD \u0CB8\u0CAE\u0CCB\u0C86",
        [LocaleCode.Kazakh]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u0421\u0430\u043C\u043E\u0430",
        [LocaleCode.Khmer]: "\u17A2\u17B6\u1798\u17C9\u17B6\u179A\u17B8\u179F\u17D2\u178F\u1784\u17CB",
        [LocaleCode.Korean]: "\uC544\uBA54\uB9AC\uCE74 \uC0AC\uBAA8\uC544",
        [LocaleCode.Kurdish]: "Amerikaans Samoa",
        [LocaleCode.Kyrgyz]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u0421\u0430\u043C\u043E\u0430",
        [LocaleCode.Lao]: "\u0EAD\u0EB2\u0EA1\u0EB2\u0E99\u0EB2\u0E94\u0EB2\u0EA1\u0EB2\u0E99\u0EB2\u0E94",
        [LocaleCode.Latin]: "Samoa Amerikana",
        [LocaleCode.Latvian]: "Amerikas Samoa",
        [LocaleCode.Lithuanian]: "Amerikos Samoa",
        [LocaleCode.Luxembourgish]: "Amerikaans Samoa",
        [LocaleCode.Macedonian]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430 \u0421\u0430\u043C\u043E\u0430",
        [LocaleCode.Malagasy]: "Samoa Amerika",
        [LocaleCode.Malay]: "Amerika Samo",
        [LocaleCode.Malayalam]: "\u0D05\u0D2E\u0D47\u0D30\u0D3F\u0D15\u0D4D\u0D15\u0D28\u0D4D\u0D31\u0D4D \u0D38\u0D2E\u0D4B\u0D06",
        [LocaleCode.Maltese]: "Samoa Amerika",
        [LocaleCode.Maori]: "Samoa Amerika",
        [LocaleCode.Marathi]: "\u0905\u092E\u0947\u0930\u093F\u0915\u093E \u0938\u092E\u094B\u0906",
        [LocaleCode.Mongolian]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u0421\u0430\u043C\u043E\u0430",
        [LocaleCode.Nepali]: "\u0905\u092E\u0947\u0930\u093F\u0915\u093E \u0938\u092E\u094B\u0906",
        [LocaleCode.Norwegian]: "Amerikansk Samoa",
        [LocaleCode.Pashto]: "\u0627\u0645\u0631\u06CC\u06A9\u0627\u06CC \u0633\u0645\u0648\u0627",
        [LocaleCode.Persian]: "\u0622\u0645\u0631\u06CC\u06A9\u0627\u06CC \u0633\u0645\u0648\u0627",
        [LocaleCode.Polish]: "Samoa Ameryka\u0144skie",
        [LocaleCode.Portuguese]: "Samoa Americana",
        [LocaleCode.Punjabi]: "\u0A05\u0A2E\u0A30\u0A40\u0A15\u0A40 \u0A38\u0A3E\u0A2E\u0A4B\u0A06",
        [LocaleCode.Romanian]: "Samoa americane",
        [LocaleCode.Russian]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u0421\u0430\u043C\u043E\u0430",
        [LocaleCode.Samoan]: "Samoa Amerika",
        [LocaleCode.Sanskrit]: "\u0905\u092E\u0947\u0930\u093F\u0915\u093E \u0938\u092E\u094B\u0906",
        [LocaleCode.Scots]: "Amerikaans Samoa",
        [LocaleCode.Serbian]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0430 \u0421\u0430\u043C\u043E\u0430",
        [LocaleCode.Sesotho]: "Amerikaans Samoa",
        [LocaleCode.Shona]: "Amerikaans Samoa",
        [LocaleCode.Sindhi]: "Amerikaans Samoa",
        [LocaleCode.Sinhala]: "\u0D86\u0DBB\u0DCA\u0DA2\u0DD2\u0DB1\u0DCF\u0DB1\u0DD4 \u0DC3\u0DD0\u0DB8\u0DD0\u0DBD\u0DCA\u0DC0",
        [LocaleCode.Slovak]: "Amerikaans Samoa",
        [LocaleCode.Slovenian]: "Amerikaans Samoa",
        [LocaleCode.Somali]: "Amerikaans Samoa",
        [LocaleCode.Spanish]: "Samoa Americana",
        [LocaleCode.Sudanese]: "Amerikaans Samoa",
        [LocaleCode.Swahili]: "Amerikaans Samoa",
        [LocaleCode.Swedish]: "Amerikansk Samoa",
        [LocaleCode.Tagalog]: "Amerikaans Samoa",
        [LocaleCode.Tajik]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438 \u0441\u0430\u043C\u043E\u0430",
        [LocaleCode.Tamil]: "\u0B85\u0BAE\u0BC6\u0BB0\u0BBF\u0B95\u0BCD \u0B9A\u0BAE\u0BCB\u0BB5\u0BBE",
        [LocaleCode.Tatar]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438 \u0441\u0430\u043C\u043E\u0430",
        [LocaleCode.Telugu]: "\u0C05\u0C2E\u0C46\u0C30\u0C3F\u0C15\u0C4D \u0C38\u0C2E\u0C4B\u0C35\u0C3E",
        [LocaleCode.Thai]: "\u0E2A\u0E2B\u0E23\u0E32\u0E0A\u0E2D\u0E32\u0E13\u0E32\u0E08\u0E31\u0E01\u0E23\u0E41\u0E2D\u0E1F\u0E23\u0E34\u0E01\u0E32",
        [LocaleCode.Tibetan]: "\u0F68\u0F7A\u0F0B\u0F62\u0F72\u0F0B\u0F40\u0F0B\u0F68\u0F7A\u0F0B\u0F58\u0F72\u0F0B\u0F51\u0F74\u0F0B\u0F61\u0F72\u0F0B\u0F62\u0F72\u0F0B\u0F40",
        [LocaleCode.Turkish]: "Amerikan Samoas\u0131",
        [LocaleCode.Ukrainian]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0430 \u0421\u0430\u043C\u043E\u0430",
        [LocaleCode.Urdu]: "\u0627\u0645\u0631\u06CC\u06A9\u06CC \u0633\u0645\u0648\u0627",
        [LocaleCode.Uzbek]: "\u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u0438 \u0441\u0430\u043C\u043E\u0430",
        [LocaleCode.Vietnamese]: "Amerikaans Samoa",
        [LocaleCode.Welsh]: "Amerikaans Samoa",
        [LocaleCode.Xhosa]: "Amerikaans Samoa",
        [LocaleCode.Yiddish]: "Amerikaans Samoa",
        [LocaleCode.Yoruba]: "Amerikaans Samoa",
        [LocaleCode.Zulu]: "Amerikaans Samoa"
      }
    },
    statistics: {
      demographics: {
        age: {
          distribution: [
            { age: "0 to 14 years", percentage: 15.3 },
            { age: "15 to 64 years", percentage: 66.7 },
            { age: "65 years and over", percentage: 14.6 }
          ],
          median_age: 35.5
        },
        population: {
          largest_city: "Pago Pago",
          total: 558e3
        }
      },
      geography: {
        area: 199,
        region: Region.Oceania,
        sub_region: SubRegion.Polynesia
      },
      government: {
        capital: "Pago Pago",
        type: "Nonmetropolitan Territory of the US"
      }
    }
  },
  Andorra: {
    i18n: {
      calling_codes: [376],
      currencies: [CurrencyCode.Euro],
      languages: [LocaleCode.Catalan, LocaleCode.Spanish],
      tz: {
        offsets: [TimezoneOffset.UTC_PLUS_1, TimezoneOffset.UTC_PLUS_2],
        regions: [TimezoneRegions.EuropeAndorra],
        timezones: [Timezones.CentralEuropeanTime]
      }
    },
    id: CountryCode.Andorra,
    info: {
      flag: {
        emoji: "\u{1F1E6}\u{1F1F4}",
        emoji_unicode: "U+1F1E6 U+1F1F4",
        svg: "https://www.countryflags.io/ad/flat/64.svg"
      },
      tld: [".ad"]
    },
    iso: {
      alpha2: CountryCode.Andorra,
      alpha3: "AND",
      numeric: "020"
    },
    name: {
      alt_spellings: ["AD", "Principality of Andorra", "Principat d'Andorra"],
      demonym: "Andorran",
      native: {
        endonym: "Andorra"
      },
      official: "Principality of Andorra",
      short: "Andorra",
      translations: {
        [LocaleCode.Afrikaans]: "Andorra",
        [LocaleCode.Albanian]: "Andorra",
        [LocaleCode.Amharic]: "\u12A0\u1295\u12F6\u122B",
        [LocaleCode.Arabic]: "\u0623\u0646\u062F\u0648\u0631\u0627",
        [LocaleCode.Armenian]: "\u0540\u0561\u0576\u0564\u0561\u0580\u0561\u057E\u0561\u0575\u0584",
        [LocaleCode.Azerbaijani]: "Andorra",
        [LocaleCode.Bashkir]: "\u0410\u043D\u0434\u043E\u0440\u0430",
        [LocaleCode.Basque]: "Andorra",
        [LocaleCode.Belarusian]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430",
        [LocaleCode.Bengali]: "\u0985\u09A8\u09CD\u09A1\u09CB\u09B0\u09BE",
        [LocaleCode.Berber]: "\u0623\u0646\u062F\u0648\u0631\u0627",
        [LocaleCode.Bhutani]: "\u0F68\u0F53\u0F0B\u0F4C\u0F7C\u0F0B",
        [LocaleCode.Bosnian]: "Andora",
        [LocaleCode.Breton]: "Andorra",
        [LocaleCode.Bulgarian]: "\u0410\u043D\u0434\u043E\u0440\u0430",
        [LocaleCode.Burmese]: "\u1021\u1014\u1039\u1010\u102C\u101B\u102D\u102F\u1038",
        [LocaleCode.Catalan]: "Andorra",
        [LocaleCode.Chinese]: "\u5B89\u9053\u5C14",
        [LocaleCode.Croatian]: "Andora",
        [LocaleCode.Czech]: "Andorra",
        [LocaleCode.Danish]: "Andorra",
        [LocaleCode.Dutch]: "Andorra",
        [LocaleCode.English]: "Andorra",
        [LocaleCode.Esperanto]: "Andora",
        [LocaleCode.Estonian]: "Andorra",
        [LocaleCode.Finnish]: "Andorra",
        [LocaleCode.French]: "Andorra",
        [LocaleCode.Frisian]: "Andorra",
        [LocaleCode.Galician]: "Andorra",
        [LocaleCode.Georgian]: "\u12A0\u1295\u12F6\u122B",
        [LocaleCode.German]: "Andorra",
        [LocaleCode.Greek]: "\u0391\u03BD\u03B4\u03CC\u03C1\u03B1",
        [LocaleCode.Hebrew]: "\u05D0\u05E0\u05D3\u05D5\u05E8\u05D4",
        [LocaleCode.Hindi]: "\u0905\u0902\u0921\u094B\u0930\u093E",
        [LocaleCode.Hungarian]: "Andorra",
        [LocaleCode.Icelandic]: "Andorra",
        [LocaleCode.Igbo]: "Andorra",
        [LocaleCode.Indonesian]: "Andorra",
        [LocaleCode.Irish]: "Andorra",
        [LocaleCode.Italian]: "Andorra",
        [LocaleCode.Japanese]: "\u30A2\u30F3\u30C9\u30E9",
        [LocaleCode.Javanese]: "Andorra",
        [LocaleCode.Kannada]: "\u0C85\u0C82\u0CA1\u0CCB\u0CB0\u0CBF\u0CAF\u0CA8\u0CCD",
        [LocaleCode.Kazakh]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430",
        [LocaleCode.Khmer]: "\u17A2\u1784\u17CB\u178A\u17B6\u179A\u17B6",
        [LocaleCode.Korean]: "\uC548\uB3C4\uB77C",
        [LocaleCode.Kurdish]: "Andorra",
        [LocaleCode.Kyrgyz]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430",
        [LocaleCode.Lao]: "\u0EAD\u0EB1\u0E99\u0EC2\u0E94\u0EA3\u0EB2",
        [LocaleCode.Latin]: "Andorra",
        [LocaleCode.Latvian]: "Andora",
        [LocaleCode.Lithuanian]: "Andora",
        [LocaleCode.Luxembourgish]: "Andorra",
        [LocaleCode.Macedonian]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430",
        [LocaleCode.Malagasy]: "Andorra",
        [LocaleCode.Malay]: "Andorra",
        [LocaleCode.Malayalam]: "\u0D05\u0D02\u0D21\u0D4B\u0D30\u0D3F\u0D2F\u0D28\u0D4D",
        [LocaleCode.Maltese]: "Andorra",
        [LocaleCode.Maori]: "Andorra",
        [LocaleCode.Marathi]: "\u0905\u0902\u0921\u094B\u0930\u093E",
        [LocaleCode.Mongolian]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430",
        [LocaleCode.Nepali]: "\u0905\u0902\u0921\u094B\u0930\u093E",
        [LocaleCode.Norwegian]: "Andorra",
        [LocaleCode.Pashto]: "\u0622\u0646\u062F\u0648\u0631\u0627",
        [LocaleCode.Persian]: "\u0622\u0646\u062F\u0648\u0631\u0627",
        [LocaleCode.Polish]: "Andora",
        [LocaleCode.Portuguese]: "Andorra",
        [LocaleCode.Punjabi]: "\u0A05\u0A70\u0A21\u0A4B\u0A30\u0A3E",
        [LocaleCode.Romanian]: "Andorra",
        [LocaleCode.Russian]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430",
        [LocaleCode.Samoan]: "Andorra",
        [LocaleCode.Sanskrit]: "\u0905\u0902\u0921\u094B\u0930\u093E",
        [LocaleCode.Scots]: "Andorra",
        [LocaleCode.Serbian]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430",
        [LocaleCode.Sesotho]: "Andorra",
        [LocaleCode.Shona]: "Andorra",
        [LocaleCode.Sindhi]: "\u0905\u0902\u0921\u094B\u0930\u093E",
        [LocaleCode.Sinhala]: "\u0D86\u0DB1\u0DCA\u0DAF\u0DDA",
        [LocaleCode.Slovak]: "Andorra",
        [LocaleCode.Slovenian]: "Andora",
        [LocaleCode.Somali]: "Andorra",
        [LocaleCode.Spanish]: "Andorra",
        [LocaleCode.Sudanese]: "Andorra",
        [LocaleCode.Swahili]: "Andorra",
        [LocaleCode.Swedish]: "Andorra",
        [LocaleCode.Tagalog]: "Andorra",
        [LocaleCode.Tajik]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430",
        [LocaleCode.Tamil]: "\u0B85\u0BA9\u0BCB\u0BB0\u0BCD\u0B9F\u0BBE",
        [LocaleCode.Tatar]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430",
        [LocaleCode.Telugu]: "\u0C05\u0C02\u0C21\u0C4B\u0C30\u0C4D\u0C30\u0C3E",
        [LocaleCode.Thai]: "\u0E2D\u0E31\u0E19\u0E14\u0E2D\u0E23\u0E4C\u0E23\u0E32",
        [LocaleCode.Tibetan]: "\u0F68\u0F53\u0F0B\u0F4C\u0F7C\u0F0B",
        [LocaleCode.Turkish]: "Andora",
        [LocaleCode.Ukrainian]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430",
        [LocaleCode.Urdu]: "\u0622\u0646\u062F\u0648\u0631\u0627",
        [LocaleCode.Uzbek]: "\u0410\u043D\u0434\u043E\u0440\u0440\u0430",
        [LocaleCode.Vietnamese]: "Andorra",
        [LocaleCode.Welsh]: "Andorra",
        [LocaleCode.Xhosa]: "Andorra",
        [LocaleCode.Yiddish]: "\u05D0\u05E0\u05D3\u05D5\u05E8\u05D4",
        [LocaleCode.Yoruba]: "Andorra",
        [LocaleCode.Zulu]: "Andorra"
      }
    },
    statistics: {
      demographics: {
        age: {
          distribution: [
            { age: "0 to 14 years", percentage: 15.3 },
            { age: "15 to 64 years", percentage: 66.7 },
            { age: "65 years and over", percentage: 14.6 }
          ],
          median_age: 35.5
        },
        population: {
          largest_city: "Andorra la Vella",
          total: 78e3
        }
      },
      geography: {
        area: 468,
        region: Region.Europe,
        sub_region: SubRegion.SouthernEurope
      },
      government: {
        capital: "Andorra la Vella",
        type: "Constitutional Monarchy"
      }
    }
  },
  Angola: {
    i18n: {
      calling_codes: [244],
      currencies: [CurrencyCode.AngolaKwanza],
      languages: [
        LocaleCode.Portuguese,
        LocaleCode.Spanish,
        LocaleCode.French,
        LocaleCode.Italian,
        LocaleCode.German,
        LocaleCode.English
      ],
      tz: {
        offsets: [
          TimezoneOffset.UTC_0,
          TimezoneOffset.UTC_PLUS_1,
          TimezoneOffset.UTC_PLUS_2
        ],
        regions: [TimezoneRegions.AfricaLuanda],
        timezones: [Timezones.WestAfricaTime]
      }
    },
    id: CountryCode.Angola,
    info: {
      flag: {
        emoji: "\u{1F1E6}\u{1F1EC}",
        emoji_unicode: "U+1F1E6 U+1F1EC",
        svg: "https://www.countryflags.io/ao/flat/64.svg"
      },
      tld: [".ao"]
    },
    iso: {
      alpha2: CountryCode.Angola,
      alpha3: "AGO",
      numeric: "024"
    },
    name: {
      alt_spellings: ["AO", "Rep\xFAblica de Angola", "\u0281\u025Bpublika de an"],
      demonym: "Angolan",
      native: {
        endonym: "Angola"
      },
      official: "Republic of Angola",
      short: "Angola",
      translations: {
        [LocaleCode.Afrikaans]: "Angola",
        [LocaleCode.Albanian]: "Ang\xF2la",
        [LocaleCode.Amharic]: "\u12A0\u1295\u130E\u120A\u12EB",
        [LocaleCode.Arabic]: "\u0623\u0646\u063A\u0648\u0644\u0627",
        [LocaleCode.Armenian]: "\u0540\u0561\u0576\u0563\u0561\u056C\u0561\u056F\u0561",
        [LocaleCode.Azerbaijani]: "Ang\u0259l",
        [LocaleCode.Bashkir]: "\u0410\u043D\u0433\u043E\u043B\u0430",
        [LocaleCode.Basque]: "Angola",
        [LocaleCode.Belarusian]: "\u0410\u043D\u0433\u043E\u043B\u0430",
        [LocaleCode.Bengali]: "\u0985\u0999\u09CD\u0997\u09B2\u09BE",
        [LocaleCode.Berber]: "Angola",
        [LocaleCode.Bhutani]: "\u0F60\u0F56\u0FB2\u0F74\u0F42",
        [LocaleCode.Bosnian]: "Angola",
        [LocaleCode.Breton]: "Angola",
        [LocaleCode.Bulgarian]: "\u0410\u043D\u0433\u043E\u043B\u0430",
        [LocaleCode.Burmese]: "\u1021\u1004\u103A\u1039\u1002\u101C\u102D\u1010\u103A",
        [LocaleCode.Catalan]: "Angola",
        [LocaleCode.Chinese]: "\u5B89\u54E5\u62C9",
        [LocaleCode.Croatian]: "Angola",
        [LocaleCode.Czech]: "Angola",
        [LocaleCode.Danish]: "Angola",
        [LocaleCode.Dutch]: "Angola",
        [LocaleCode.English]: "Angola",
        [LocaleCode.Esperanto]: "Angolo",
        [LocaleCode.Estonian]: "Angola",
        [LocaleCode.Finnish]: "Angola",
        [LocaleCode.French]: "Angola",
        [LocaleCode.Frisian]: "Angola",
        [LocaleCode.Galician]: "Angola",
        [LocaleCode.Georgian]: "\u10D0\u10DC\u10D2\u10DD\u10DA\u10D0",
        [LocaleCode.German]: "Angola",
        [LocaleCode.Greenlandic]: "Angola",
        [LocaleCode.Greek]: "\u0391\u03B3\u03BA\u03CC\u03BB\u03B1",
        [LocaleCode.Gujarati]: "\u0A85\u0A82\u0A97\u0ACB\u0AB2\u0ABE",
        [LocaleCode.Haitian]: "Angola",
        [LocaleCode.Hausa]: "Angola",
        [LocaleCode.Hebrew]: "\u05D0\u05E0\u05D2\u05D5\u05DC\u05D4",
        [LocaleCode.Hindi]: "\u0905\u0919\u094D\u0917\u094B\u0932\u093E",
        [LocaleCode.Hungarian]: "Angola",
        [LocaleCode.Icelandic]: "Angola",
        [LocaleCode.Igbo]: "Angola",
        [LocaleCode.Indonesian]: "Angola",
        [LocaleCode.Irish]: "Angola",
        [LocaleCode.Italian]: "Angola",
        [LocaleCode.Japanese]: "\u30A2\u30F3\u30B4\u30E9",
        [LocaleCode.Javanese]: "Anggol",
        [LocaleCode.Kannada]: "\u0C85\u0C82\u0C97\u0CCB\u0CB2\u0CBE",
        [LocaleCode.Kazakh]: "\u0410\u043D\u0433\u043E\u043B\u0430",
        [LocaleCode.Khmer]: "\u17A2\u1784\u17CB\u1780\u17B6\u179B\u17A2\u1784\u17CB\u1782\u17D2\u179B\u17C1\u179F",
        [LocaleCode.Korean]: "\uC559\uACE8\uB77C",
        [LocaleCode.Kurdish]: "Angola",
        [LocaleCode.Kyrgyz]: "\u0410\u043D\u0433\u043E\u043B\u0430",
        [LocaleCode.Lao]: "\u0EAD\u0EB0\u0E99\u0EB2\u0E94\u0EB2",
        [LocaleCode.Latin]: "Angola",
        [LocaleCode.Latvian]: "Angola",
        [LocaleCode.Lithuanian]: "Angola",
        [LocaleCode.Luxembourgish]: "Angola",
        [LocaleCode.Macedonian]: "\u0410\u043D\u0433\u043E\u043B\u0430",
        [LocaleCode.Malagasy]: "Angola",
        [LocaleCode.Malay]: "Angola",
        [LocaleCode.Malayalam]: "\u0D05\u0D02\u0D17\u0D4B\u0D33\u0D3E",
        [LocaleCode.Maltese]: "Angola",
        [LocaleCode.Maori]: "Angola",
        [LocaleCode.Marathi]: "\u0905\u0919\u094D\u0917\u094B\u0932\u093E",
        [LocaleCode.Mongolian]: "\u0410\u043D\u0433\u043E\u043B\u0430",
        [LocaleCode.Nepali]: "\u0905\u0919\u094D\u0917\u094B\u0932\u093E",
        [LocaleCode.Norwegian]: "Angola",
        [LocaleCode.Pashto]: "\u0627\u0646\u06AB\u0648\u0644\u0627",
        [LocaleCode.Persian]: "\u0622\u0646\u06AF\u0648\u0644\u0627",
        [LocaleCode.Polish]: "Angola",
        [LocaleCode.Portuguese]: "Angola",
        [LocaleCode.Punjabi]: "\u0A05\u0A19\u0A4D\u0A17\u0A4B\u0A32\u0A3E",
        [LocaleCode.Romanian]: "Angole",
        [LocaleCode.Russian]: "\u0410\u043D\u0433\u043E\u043B\u0430",
        [LocaleCode.Samoan]: "Angola",
        [LocaleCode.Sanskrit]: "\u0905\u0919\u094D\u0917\u094B\u0932\u093E",
        [LocaleCode.Scots]: "Angola",
        [LocaleCode.Serbian]: "\u0410\u043D\u0433\u043E\u043B\u0430",
        [LocaleCode.Sesotho]: "Angola",
        [LocaleCode.Shona]: "Angola",
        [LocaleCode.Sindhi]: "\u0905\u0919\u094D\u0917\u094B\u0932\u093E",
        [LocaleCode.Sinhala]: "\u0D86\u0D9C\u0DBD\u0DD2\u0DBA\u0DCF\u0DC0",
        [LocaleCode.Slovak]: "Angola",
        [LocaleCode.Slovenian]: "Angola",
        [LocaleCode.Somali]: "Angola",
        [LocaleCode.Spanish]: "Angola",
        [LocaleCode.Sudanese]: "Angola",
        [LocaleCode.Swahili]: "Angola",
        [LocaleCode.Swedish]: "Angola",
        [LocaleCode.Tagalog]: "Angola",
        [LocaleCode.Tajik]: "\u0410\u043D\u0433\u043E\u043B\u0430",
        [LocaleCode.Tamil]: "\u0B85\u0B99\u0BCD\u0B95\u0BCB\u0BB2\u0BBE",
        [LocaleCode.Tatar]: "\u0410\u043D\u0433\u043E\u043B\u0430",
        [LocaleCode.Telugu]: "\u0C05\u0C02\u0C17\u0C4B\u0C32\u0C3E",
        [LocaleCode.Thai]: "\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E32\u0E23\u0E2D\u0E32\u0E19\u0E32\u0E21\u0E34\u0E2A\u0E16\u0E32\u0E19",
        [LocaleCode.Tibetan]: "\u0F68\u0F44\u0F0B\u0F63\u0F7C\u0F0B",
        [LocaleCode.Turkish]: "Angola",
        [LocaleCode.Ukrainian]: "\u0410\u043D\u0433\u043E\u043B\u0430",
        [LocaleCode.Urdu]: "\u0627\u0646\u06AF\u0648\u0644\u0627",
        [LocaleCode.Uzbek]: "Angola",
        [LocaleCode.Vietnamese]: "Angola",
        [LocaleCode.Xhosa]: "Angola",
        [LocaleCode.Welsh]: "Angola",
        [LocaleCode.Yiddish]: "\u05D0\u05E0\u05D2\u05D5\u05DC\u05D4",
        [LocaleCode.Yoruba]: "Angola",
        [LocaleCode.Zulu]: "Angola"
      }
    }
  },
  Anguilla: {
    i18n: {
      calling_codes: [1264],
      currencies: [
        CurrencyCode.DominicaDollar,
        CurrencyCode.EastCaribbeanDollar,
        CurrencyCode.Euro,
        CurrencyCode.UnitedStatesDollar,
        CurrencyCode.BritishPound
      ],
      languages: [LocaleCode.English, LocaleCode.Spanish],
      tz: {
        offsets: [TimezoneOffset.UTC_MINUS_4],
        regions: [TimezoneRegions.AmericaAnguilla],
        timezones: [Timezones.AtlanticStandardTime]
      }
    },
    id: CountryCode.Anguilla,
    info: {
      flag: {
        emoji: "\u{1F1E6}\u{1F1EC}",
        emoji_unicode: "U+1F1E6 U+1F1EC",
        svg: "https://www.countryflags.io/ai/flat/64.svg"
      },
      tld: [".ai"]
    },
    iso: {
      alpha2: CountryCode.Anguilla,
      alpha3: "AIA",
      numeric: "660"
    },
    name: {
      alt_spellings: ["AI"],
      demonym: "Anguillian",
      native: {
        endonym: "Anguilla"
      },
      official: "Anguilla",
      short: "Anguilla",
      translations: {
        [LocaleCode.Afrikaans]: "Anguilla",
        [LocaleCode.Albanian]: "Anguilla",
        [LocaleCode.Amharic]: "\u12A0\u1295\u1309\u120B",
        [LocaleCode.Arabic]: "\u0623\u0646\u063A\u0648\u064A\u0644\u0627",
        [LocaleCode.Armenian]: "\u0531\u0576\u0563\u056B\u056C\u0561",
        [LocaleCode.Azerbaijani]: "Az\u0259rbaycan",
        [LocaleCode.Bashkir]: "\u0410\u043D\u0433\u0438\u043B\u0438",
        [LocaleCode.Basque]: "Angila",
        [LocaleCode.Belarusian]: "\u0410\u043D\u0433\u0438\u043B\u0438",
        [LocaleCode.Bengali]: "\u0985\u0999\u09CD\u0997\u09C0\u09B2\u09BE",
        [LocaleCode.Berber]: "\u0623\u0646\u063A\u0648\u064A\u0644\u0627",
        [LocaleCode.Bhutani]: "\u0F68\u0F44\u0F0B\u0F63\u0F7C\u0F0B",
        [LocaleCode.Bosnian]: "Angila",
        [LocaleCode.Breton]: "Angila",
        [LocaleCode.Bulgarian]: "\u0410\u043D\u0433\u0438\u043B\u0438",
        [LocaleCode.Burmese]: "\u1021\u1004\u103A\u1039\u1002\u101C\u102D\u1010\u103A",
        [LocaleCode.Catalan]: "Angilla",
        [LocaleCode.Chinese]: "\u5B89\u572D\u62C9",
        [LocaleCode.Croatian]: "Angila",
        [LocaleCode.Czech]: "Anguilla",
        [LocaleCode.Danish]: "Anguilla",
        [LocaleCode.Dutch]: "Anguilla",
        [LocaleCode.English]: "Anguilla",
        [LocaleCode.Esperanto]: "Angila",
        [LocaleCode.Estonian]: "Anguilla",
        [LocaleCode.Finnish]: "Anguilla",
        [LocaleCode.French]: "Anguilla",
        [LocaleCode.Frisian]: "Angila",
        [LocaleCode.Galician]: "Anguilla",
        [LocaleCode.Georgian]: "\u10D0\u10DC\u10D2\u10D8\u10DA\u10D0",
        [LocaleCode.German]: "Anguilla",
        [LocaleCode.Greenlandic]: "Anguilla",
        [LocaleCode.Greek]: "\u0391\u03BD\u03B3\u03BA\u03C5\u03BB\u03AC",
        [LocaleCode.Gujarati]: "\u0A85\u0A82\u0A97\u0ACD\u0AAF\u0ABE\u0AB2\u0ABE",
        [LocaleCode.Haitian]: "Anguilla",
        [LocaleCode.Hausa]: "Anguilla",
        [LocaleCode.Hebrew]: "\u05D0\u05E0\u05D2\u05D5\u05D9\u05D0\u05DC\u05D4",
        [LocaleCode.Hindi]: "\u0905\u0902\u0917\u094D\u0935\u0947\u0932\u093E",
        [LocaleCode.Hungarian]: "Anguilla",
        [LocaleCode.Icelandic]: "Anguilla",
        [LocaleCode.Igbo]: "Anguilla",
        [LocaleCode.Indonesian]: "Anguilla",
        [LocaleCode.Irish]: "Anguilla",
        [LocaleCode.Italian]: "Anguilla",
        [LocaleCode.Japanese]: "\u30A2\u30F3\u30AE\u30E9",
        [LocaleCode.Javanese]: "Anguilla",
        [LocaleCode.Kannada]: "\u0C85\u0C82\u0C97\u0CCD\u0CB5\u0CC7\u0CB2\u0CBE",
        [LocaleCode.Kazakh]: "\u0410\u043D\u0433\u0438\u043B\u0438",
        [LocaleCode.Khmer]: "\u17A2\u1784\u17CB\u1780\u17B6\u179A\u17A0\u17D2\u1782\u17B8\u1798",
        [LocaleCode.Korean]: "\uC575\uADC8\uB77C",
        [LocaleCode.Kurdish]: "Anguilla",
        [LocaleCode.Kyrgyz]: "\u0410\u043D\u0433\u0438\u043B\u0438",
        [LocaleCode.Lao]: "\u0EAD\u0EB0\u0E99\u0EB0\u0E88\u0EB3",
        [LocaleCode.Latin]: "Anguilla",
        [LocaleCode.Latvian]: "Anguilla",
        [LocaleCode.Lithuanian]: "Anguilla",
        [LocaleCode.Luxembourgish]: "Angilla",
        [LocaleCode.Macedonian]: "\u0410\u043D\u0433\u0438\u043B\u0438",
        [LocaleCode.Malagasy]: "Angila",
        [LocaleCode.Malay]: "Anguilla",
        [LocaleCode.Malayalam]: "\u0D05\u0D02\u0D17\u0D4D\u0D35\u0D47\u0D32\u0D3E",
        [LocaleCode.Maltese]: "Anguilla",
        [LocaleCode.Maori]: "Anguilla",
        [LocaleCode.Marathi]: "\u0905\u0902\u0917\u094D\u0935\u0947\u0932\u093E",
        [LocaleCode.Mongolian]: "\u0410\u043D\u0433\u0438\u043B\u0438",
        [LocaleCode.Nepali]: "\u0905\u0902\u0917\u094D\u0935\u0947\u0932\u093E",
        [LocaleCode.Norwegian]: "Anguilla",
        [LocaleCode.Pashto]: "\u0622\u0646\u06AF\u0648\u0644\u0627",
        [LocaleCode.Persian]: "\u0622\u0646\u06AF\u0648\u0644\u0627",
        [LocaleCode.Polish]: "Anguilla",
        [LocaleCode.Portuguese]: "Anguilla",
        [LocaleCode.Punjabi]: "\u0A05\u0A02\u0A17\u0A40\u0A32\u0A3E",
        [LocaleCode.Romanian]: "Anguilla",
        [LocaleCode.Russian]: "\u0410\u043D\u0433\u0438\u043B\u0438",
        [LocaleCode.Samoan]: "Anguilla",
        [LocaleCode.Sanskrit]: "\u0905\u0902\u0917\u094D\u0935\u0947\u0932\u093E",
        [LocaleCode.Scots]: "Anguilla",
        [LocaleCode.Serbian]: "\u0410\u043D\u0433\u0438\u043B\u0438",
        [LocaleCode.Sesotho]: "Anguilla",
        [LocaleCode.Shona]: "Anguilla",
        [LocaleCode.Sindhi]: "\u0905\u0902\u0917\u094D\u0935\u0947\u0932\u093E",
        [LocaleCode.Sinhala]: "\u0D86\u0D82\u0D9C\u0DD2\u0DBD\u0DCF\u0DC0",
        [LocaleCode.Slovak]: "Anguilla",
        [LocaleCode.Slovenian]: "Anguilla",
        [LocaleCode.Somali]: "Anguilla",
        [LocaleCode.Spanish]: "Anguilla",
        [LocaleCode.Sudanese]: "Anguilla",
        [LocaleCode.Swahili]: "Anguilla",
        [LocaleCode.Swedish]: "Anguilla",
        [LocaleCode.Tagalog]: "Anguilla",
        [LocaleCode.Tajik]: "\u0410\u043D\u0433\u0438\u043B\u0438",
        [LocaleCode.Tamil]: "\u0B85\u0B99\u0BCD\u0B95\u0BC8\u0BB2\u0BBE",
        [LocaleCode.Tatar]: "\u0410\u043D\u0433\u0438\u043B\u0438",
        [LocaleCode.Telugu]: "\u0C05\u0C02\u0C17\u0C4D\u0C35\u0C47\u0C32\u0C3E",
        [LocaleCode.Thai]: "\u0E2D\u0E31\u0E07\u0E01\u0E32\u0E25\u0E32",
        [LocaleCode.Tibetan]: "\u0F68\u0F44\u0F0B\u0F63\u0F72\u0F0B",
        [LocaleCode.Turkish]: "Anguilla",
        [LocaleCode.Ukrainian]: "\u0410\u043D\u0433\u0438\u043B\u0438",
        [LocaleCode.Urdu]: "\u0622\u0646\u06AF\u0648\u0644\u0627",
        [LocaleCode.Uzbek]: "\u0410\u043D\u0433\u0438\u043B\u0438",
        [LocaleCode.Vietnamese]: "Anguilla",
        [LocaleCode.Welsh]: "Anguilla",
        [LocaleCode.Xhosa]: "Anguilla",
        [LocaleCode.Yiddish]: "Anguilla",
        [LocaleCode.Yoruba]: "Anguilla",
        [LocaleCode.Zulu]: "Anguilla"
      }
    }
  },
  Antarctica: {
    i18n: {
      calling_codes: [672],
      currencies: [CurrencyCode.UnitedStatesDollar, CurrencyCode.Euro],
      languages: [
        LocaleCode.English,
        LocaleCode.Spanish,
        LocaleCode.French,
        LocaleCode.Portuguese,
        LocaleCode.Italian,
        LocaleCode.Dutch,
        LocaleCode.German,
        LocaleCode.Swedish,
        LocaleCode.Norwegian,
        LocaleCode.Danish,
        LocaleCode.Finnish
      ],
      tz: {
        offsets: [TimezoneOffset.UTC_PLUS_1, TimezoneOffset.UTC_PLUS_2],
        regions: [
          TimezoneRegions.AntarcticaCasey,
          TimezoneRegions.AntarcticaDavis,
          TimezoneRegions.AntarcticaMcMurdo,
          TimezoneRegions.AntarcticaPalmer,
          TimezoneRegions.AntarcticaRothera
        ],
        timezones: [
          Timezones.AtlanticStandardTime,
          Timezones.CentralTime,
          Timezones.EasternTime,
          Timezones.AtlanticStandardTime,
          Timezones.AzoresStandardTime,
          Timezones.NewfoundlandStandardTime
        ]
      }
    },
    id: CountryCode.Antarctica,
    info: {
      flag: {
        emoji: "\u{1F1E6}\u{1F1F6}",
        emoji_unicode: "U+1F1E6 U+1F1F6",
        svg: "https://www.countryflags.io/aq/flat/64.svg"
      },
      tld: [".aq"]
    },
    iso: {
      alpha2: CountryCode.Antarctica,
      alpha3: "ATA",
      numeric: "010"
    },
    name: {
      alt_spellings: ["AQ"],
      demonym: "Antarctican",
      native: {
        endonym: "Antarctica"
      },
      official: "Antarctica",
      short: "Antarctica",
      translations: {
        [LocaleCode.Afrikaans]: "Antarctica",
        [LocaleCode.Albanian]: "Antarktika",
        [LocaleCode.Amharic]: "\u12A0\u1295\u1272\u120D\u12AB\u1293",
        [LocaleCode.Arabic]: "\u0623\u0646\u062A\u0627\u0631\u0643\u062A\u064A\u0643\u0627",
        [LocaleCode.Armenian]: "\u0540\u0561\u0576\u0561\u0580\u0561\u057F\u056F\u0578",
        [LocaleCode.Azerbaijani]: "Az\u0259rbaycan",
        [LocaleCode.Bashkir]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430",
        [LocaleCode.Basque]: "Antarktika",
        [LocaleCode.Belarusian]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430",
        [LocaleCode.Bengali]: "\u0985\u09A8\u09CD\u09A4\u09B0\u09BE\u09B6\u09CD\u09AC\u09C0",
        [LocaleCode.Berber]: "\u0623\u0646\u062A\u0627\u0631\u0643\u062A\u064A\u0643\u0627",
        [LocaleCode.Bhutani]: "\u0F68\u0F44\u0F0B\u0F63\u0F72\u0F0B",
        [LocaleCode.Bosnian]: "Antarktika",
        [LocaleCode.Breton]: "Antarktika",
        [LocaleCode.Bulgarian]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430",
        [LocaleCode.Burmese]: "\u1021\u1014\u1039\u1010\u102C\u101B\u102E\u1038\u101A\u102C\u1038",
        [LocaleCode.Catalan]: "Ant\xE0rtida",
        [LocaleCode.Chinese]: "\u5357\u6781\u6D32",
        [LocaleCode.Croatian]: "Antarktika",
        [LocaleCode.Czech]: "Antarktida",
        [LocaleCode.Danish]: "Antarktis",
        [LocaleCode.Dutch]: "Antarctica",
        [LocaleCode.English]: "Antarctica",
        [LocaleCode.Esperanto]: "Antarktika",
        [LocaleCode.Estonian]: "Antarktika",
        [LocaleCode.Finnish]: "Antarktis",
        [LocaleCode.French]: "Antarctica",
        [LocaleCode.Frisian]: "Antarktis",
        [LocaleCode.Galician]: "Ant\xE1rtida",
        [LocaleCode.Georgian]: "\u10D0\u10DC\u10E2\u10D0\u10E0\u10E5\u10E2\u10D8\u10D9\u10D0",
        [LocaleCode.German]: "Antarktis",
        [LocaleCode.Greenlandic]: "Antarktis",
        [LocaleCode.Greek]: "\u0391\u03BD\u03C4\u03B1\u03C1\u03BA\u03C4\u03B9\u03BA\u03AE",
        [LocaleCode.Gujarati]: "\u0A85\u0AA8\u0ACD\u0AA4\u0AB0\u0ABE\u0AB6\u0ACD\u0AB5\u0AC0",
        [LocaleCode.Haitian]: "Antarctica",
        [LocaleCode.Hausa]: "Antarktika",
        [LocaleCode.Hebrew]: "\u05D0\u05E0\u05D8\u05E8\u05E7\u05D8\u05D9\u05E7\u05D4",
        [LocaleCode.Hindi]: "\u0905\u0928\u094D\u0924\u0930\u0915\u094D\u0937\u0947\u0924\u094D\u0930",
        [LocaleCode.Hungarian]: "Antarktika",
        [LocaleCode.Icelandic]: "Antarktis",
        [LocaleCode.Igbo]: "Antarktika",
        [LocaleCode.Indonesian]: "Antarktika",
        [LocaleCode.Irish]: "Antarktika",
        [LocaleCode.Italian]: "Antartide",
        [LocaleCode.Japanese]: "\u5357\u6975",
        [LocaleCode.Javanese]: "Antarktika",
        [LocaleCode.Kannada]: "\u0C85\u0CA8\u0CCD\u0CA4\u0CB0\u0CBE\u0CB6\u0CCD\u0CB5\u0CBF",
        [LocaleCode.Kazakh]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430",
        [LocaleCode.Khmer]: "\u17A2\u1784\u17CB\u179F\u17D2\u1780\u179A\u17A2\u17B6\u1798\u17C9\u17BB\u1799",
        [LocaleCode.Korean]: "\uC564\uD2F0\uCE74\uD1A0\uB2C9",
        [LocaleCode.Kurdish]: "Antarktika",
        [LocaleCode.Kyrgyz]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430",
        [LocaleCode.Lao]: "\u0EAD\u0EB0\u0E99\u0EAD\u0EA5\u0EB2\u0E81\u0EB4\u0EAA\u0EB0",
        [LocaleCode.Latin]: "Antarctica",
        [LocaleCode.Latvian]: "Antarktika",
        [LocaleCode.Lithuanian]: "Antarktis",
        [LocaleCode.Luxembourgish]: "Antarktis",
        [LocaleCode.Macedonian]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430",
        [LocaleCode.Malagasy]: "Antarctica",
        [LocaleCode.Malay]: "Antarktika",
        [LocaleCode.Malayalam]: "\u0D05\u0D28\u0D4D\u0D24\u0D30\u0D3E\u0D36\u0D4D\u0D35\u0D3F",
        [LocaleCode.Maltese]: "Antarktika",
        [LocaleCode.Maori]: "Antarktika",
        [LocaleCode.Marathi]: "\u0905\u0928\u094D\u0924\u0930\u093E\u0936\u094D\u0935\u093F\u0915\u093E",
        [LocaleCode.Mongolian]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430",
        [LocaleCode.Nepali]: "\u0905\u0928\u094D\u0924\u0930\u093E\u0936\u094D\u0935\u093F\u0915\u093E",
        [LocaleCode.Norwegian]: "Antarktis",
        [LocaleCode.Pashto]: "\u0627\u0646\u062A\u0627\u0631\u0643\u062A\u064A\u0643\u0627",
        [LocaleCode.Persian]: "\u0622\u0646\u062A\u0627\u0631\u06A9\u062A\u06CC\u06A9\u0627",
        [LocaleCode.Polish]: "Antarktyka",
        [LocaleCode.Portuguese]: "Ant\xE1rtida",
        [LocaleCode.Punjabi]: "\u0A05\u0A28\u0A4D\u0A24\u0A30\u0A3E\u0A36\u0A3F\u0A15\u0A3E",
        [LocaleCode.Romanian]: "Antarctica",
        [LocaleCode.Russian]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430",
        [LocaleCode.Samoan]: "Antarktika",
        [LocaleCode.Sanskrit]: "\u0905\u0928\u094D\u0924\u0930\u093E\u0936\u094D\u0935\u093F\u0915\u093E",
        [LocaleCode.Scots]: "Antarktika",
        [LocaleCode.Serbian]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430",
        [LocaleCode.Sesotho]: "Antarktika",
        [LocaleCode.Shona]: "Antarktika",
        [LocaleCode.Sindhi]: "Antarktika",
        [LocaleCode.Sinhala]: "\u0D86\u0DB1\u0DCA\u0DA7\u0DCA\u0DA7\u0DD2\u0D9A\u0DCF\u0DC0",
        [LocaleCode.Slovak]: "Antarktika",
        [LocaleCode.Slovenian]: "Antarktika",
        [LocaleCode.Somali]: "Antarktika",
        [LocaleCode.Spanish]: "Ant\xE1rtida",
        [LocaleCode.Sudanese]: "Antarktika",
        [LocaleCode.Swahili]: "Antarktika",
        [LocaleCode.Swedish]: "Antarktis",
        [LocaleCode.Tagalog]: "Antarktika",
        [LocaleCode.Tajik]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430",
        [LocaleCode.Tamil]: "\u0B85\u0BA9\u0BCD\u0BA4\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BBF\u0B95\u0BCD",
        [LocaleCode.Tatar]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430",
        [LocaleCode.Telugu]: "\u0C05\u0C28\u0C4D\u0C24\u0C30\u0C3E\u0C36\u0C4D\u0C35\u0C3F\u0C15\u0C3E",
        [LocaleCode.Thai]: "\u0E20\u0E39\u0E21\u0E34\u0E20\u0E32\u0E04\u0E2D\u0E32\u0E19\u0E31\u0E19\u0E15\u0E34\u0E01\u0E32",
        [LocaleCode.Tibetan]: "\u0F68\u0F7A\u0F53\u0F0B\u0F4A\u0F72\u0F4A\u0F7A\u0F53\u0F0B\u0F40\u0F72\u0F66\u0F72\u0F0B\u0F68\u0F7A\u0F53\u0F0B\u0F4A\u0F72\u0F4A\u0F7A\u0F53\u0F0B\u0F40\u0F72\u0F66\u0F72",
        [LocaleCode.Turkish]: "Antarktika",
        [LocaleCode.Ukrainian]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430",
        [LocaleCode.Urdu]: "\u0627\u0646\u062A\u0627\u0631\u06A9\u062A\u06CC\u06A9\u0627",
        [LocaleCode.Uzbek]: "\u0410\u043D\u0442\u0430\u0440\u043A\u0442\u0438\u043A\u0430",
        [LocaleCode.Vietnamese]: "\u0110\u1EA5t Antarktik",
        [LocaleCode.Welsh]: "Antarktika",
        [LocaleCode.Xhosa]: "Antarktika",
        [LocaleCode.Yiddish]: "Antarktika",
        [LocaleCode.Yoruba]: "Antarktika",
        [LocaleCode.Zulu]: "Antarktika"
      }
    }
  },
  Armenia: {
    i18n: {
      calling_codes: [374],
      currencies: [CurrencyCode.ArmeniaDram],
      languages: [LocaleCode.Armenian],
      tz: {
        offsets: [TimezoneOffset.UTC_PLUS_4],
        regions: [TimezoneRegions.AsiaJakarta],
        timezones: [Timezones.ArmeniaTime]
      }
    },
    id: CountryCode.Armenia,
    info: {
      flag: {
        emoji: "\u{1F1E6}\u{1F1F2}",
        emoji_unicode: "U+1F1E6 U+1F1F2",
        svg: "https://www.countryflags.io/am/flat/64.svg"
      },
      tld: [".am"]
    },
    iso: {
      alpha2: CountryCode.Armenia,
      alpha3: "ARM",
      numeric: "051"
    },
    name: {
      alt_spellings: ["AM", "Hayastan", "Republic of Armenia", "\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576"],
      demonym: "Armenian",
      native: {
        endonym: "\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576"
      },
      official: "Republic of Armenia",
      short: "Armenia",
      translations: {
        [LocaleCode.Afrikaans]: "Armeni\xEB",
        [LocaleCode.Albanian]: "Armenia",
        [LocaleCode.Amharic]: "\u12A0\u121B\u122D\u129B",
        [LocaleCode.Arabic]: "\u0623\u0631\u0645\u064A\u0646\u064A\u0627",
        [LocaleCode.Armenian]: "\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576",
        [LocaleCode.Azerbaijani]: "Az\u0259rbaycan",
        [LocaleCode.Bashkir]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F",
        [LocaleCode.Basque]: "Arm\xE9nia",
        [LocaleCode.Belarusian]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F",
        [LocaleCode.Bengali]: "\u0986\u09B0\u09CD\u09AE\u09C7\u09A8\u09BF",
        [LocaleCode.Berber]: "\u0623\u0631\u0645\u064A\u0646\u064A\u0627",
        [LocaleCode.Bhutani]: "\u0F62\u0F92\u0FB1\u0F0B\u0F53\u0F42",
        [LocaleCode.Bosnian]: "Armenija",
        [LocaleCode.Breton]: "Armeni\xEB",
        [LocaleCode.Bulgarian]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F",
        [LocaleCode.Burmese]: "\u1021\u102C\u1019\u1010\u102D\u1010\u1039",
        [LocaleCode.Catalan]: "Arm\xE8nia",
        [LocaleCode.Chinese]: "\u4E9A\u7F8E\u5C3C\u4E9A",
        [LocaleCode.Croatian]: "Armenija",
        [LocaleCode.Czech]: "Arm\xE9nie",
        [LocaleCode.Danish]: "Armenien",
        [LocaleCode.Dutch]: "Armeni\xEB",
        [LocaleCode.English]: "Armenia",
        [LocaleCode.Esperanto]: "Armenia",
        [LocaleCode.Estonian]: "Armeenia",
        [LocaleCode.Finnish]: "Armenia",
        [LocaleCode.French]: "Armenia",
        [LocaleCode.Frisian]: "Armeenia",
        [LocaleCode.Galician]: "Arm\xE9nia",
        [LocaleCode.Georgian]: "\u10D0\u10E0\u10DB\u10DD\u10DC\u10D8",
        [LocaleCode.German]: "Armenien",
        [LocaleCode.Greenlandic]: "Armenia",
        [LocaleCode.Greek]: "\u0391\u03C1\u03BC\u03B5\u03BD\u03AF\u03B1",
        [LocaleCode.Gujarati]: "\u0A85\u0AB0\u0ACD\u0AAE\u0AC7\u0AA8\u0ABF",
        [LocaleCode.Haitian]: "Armenia",
        [LocaleCode.Hausa]: "Armenia",
        [LocaleCode.Hebrew]: "\u05D0\u05E8\u05DE\u05E0\u05D9\u05D4",
        [LocaleCode.Hindi]: "\u0905\u05E8\u05DE\u05E0\u093F\u092F\u093E",
        [LocaleCode.Hungarian]: "\xD6rm\xE9nyorsz\xE1g",
        [LocaleCode.Icelandic]: "Armenia",
        [LocaleCode.Igbo]: "Armenia",
        [LocaleCode.Indonesian]: "Armenia",
        [LocaleCode.Irish]: "Armenia",
        [LocaleCode.Italian]: "Armenia",
        [LocaleCode.Japanese]: "\u30A2\u30EB\u30E1\u30CB\u30A2",
        [LocaleCode.Javanese]: "Armenia",
        [LocaleCode.Kannada]: "\u0C85\u0CB0\u0CCD\u0CAE\u0CC7\u0CA8\u0CBF",
        [LocaleCode.Kazakh]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F",
        [LocaleCode.Khmer]: "\u17A2\u17B6\u1798\u17C9\u17C1\u179A\u17B8",
        [LocaleCode.Korean]: "\uC544\uB974\uBA54\uB2C8\uC544",
        [LocaleCode.Kurdish]: "Armenia",
        [LocaleCode.Kyrgyz]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F",
        [LocaleCode.Lao]: "\u0EAD\u0EB2\u0EAB\u0EBC\u0E99\u0EB2",
        [LocaleCode.Latin]: "Armenia",
        [LocaleCode.Latvian]: "Armeenia",
        [LocaleCode.Lithuanian]: "Arm\u0117nija",
        [LocaleCode.Luxembourgish]: "Armenien",
        [LocaleCode.Macedonian]: "\u0410\u0440\u043C\u0435\u043D\u0438\u0458\u0430",
        [LocaleCode.Malagasy]: "Armenia",
        [LocaleCode.Malay]: "Armenia",
        [LocaleCode.Malayalam]: "\u0D05\u0D30\u0D4D\u200D\u0D2E\u0D47\u0D28\u0D3F",
        [LocaleCode.Maltese]: "Armenia",
        [LocaleCode.Maori]: "Armenia",
        [LocaleCode.Marathi]: "\u0905\u0930\u094D\u092E\u0947\u0928\u093F",
        [LocaleCode.Mongolian]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F",
        [LocaleCode.Nepali]: "\u0905\u0930\u094D\u092E\u0947\u0928\u093F",
        [LocaleCode.Norwegian]: "Armenia",
        [LocaleCode.Pashto]: "\u0622\u0631\u0645\u06CC\u0646\u06CC\u0627",
        [LocaleCode.Persian]: "\u0627\u0631\u0645\u0646\u0633\u062A\u0627\u0646",
        [LocaleCode.Polish]: "Armenia",
        [LocaleCode.Portuguese]: "Armenia",
        [LocaleCode.Punjabi]: "\u0A05\u0A30\u0A2E\u0A40\u0A28\u0A40",
        [LocaleCode.Romanian]: "Armenia",
        [LocaleCode.Russian]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F",
        [LocaleCode.Samoan]: "Armenia",
        [LocaleCode.Sanskrit]: "Armenia",
        [LocaleCode.Scots]: "Armenia",
        [LocaleCode.Serbian]: "\u0410\u0440\u043C\u0435\u043D\u0438\u0458\u0430",
        [LocaleCode.Sesotho]: "Armenia",
        [LocaleCode.Shona]: "Armenia",
        [LocaleCode.Sindhi]: "Armenia",
        [LocaleCode.Sinhala]: "\u0D86\u0DBB\u0DCA\u0DB8\u0DD3\u0DB1\u0DD2",
        [LocaleCode.Slovak]: "Armenia",
        [LocaleCode.Slovenian]: "Armenija",
        [LocaleCode.Somali]: "Armenia",
        [LocaleCode.Spanish]: "Armenia",
        [LocaleCode.Sudanese]: "Armenia",
        [LocaleCode.Swahili]: "Armenia",
        [LocaleCode.Swedish]: "Armenien",
        [LocaleCode.Tagalog]: "Armenia",
        [LocaleCode.Tajik]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F",
        [LocaleCode.Tamil]: "\u0B85\u0BB0\u0BCD\u0BAE\u0BC7\u0BA9\u0BBF\u0BAF\u0BA9\u0BCD",
        [LocaleCode.Tatar]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F",
        [LocaleCode.Telugu]: "\u0C05\u0C30\u0C4D\u0C2E\u0C47\u0C28\u0C3F",
        [LocaleCode.Thai]: "\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E21\u0E19\u0E34\u0E2A\u0E16\u0E32\u0E19",
        [LocaleCode.Tibetan]: "\u0F68\u0F62\u0F0B\u0F58\u0F7A\u0F0B\u0F53\u0F72\u0F0B\u0F61\u0F74\u0F0D",
        [LocaleCode.Turkish]: "Ermenistan",
        [LocaleCode.Ukrainian]: "\u0410\u0440\u043C\u0435\u043D\u0456\u044F",
        [LocaleCode.Urdu]: "\u0627\u0631\u0645\u0646\u0633\u062A\u0627\u0646",
        [LocaleCode.Uzbek]: "\u0410\u0440\u043C\u0435\u043D\u0438\u044F",
        [LocaleCode.Vietnamese]: "Armenia",
        [LocaleCode.Welsh]: "Armenia",
        [LocaleCode.Xhosa]: "Armenia",
        [LocaleCode.Yiddish]: "\u05D0\u05E8\u05DE\u05E0\u05D9\u05D4",
        [LocaleCode.Yoruba]: "Armenia",
        [LocaleCode.Zulu]: "Armenia"
      }
    }
  },
  SomeCountry: {
    i18n: {
      calling_codes: [],
      currencies: [],
      languages: [],
      tz: {
        offsets: [],
        regions: [],
        timezones: []
      }
    },
    id: CountryCode.AmericanSamoa,
    info: {
      flag: {
        emoji: "",
        emoji_unicode: "",
        svg: ""
      },
      tld: []
    },
    iso: {
      alpha2: CountryCode.AmericanSamoa,
      alpha3: "",
      numeric: ""
    },
    name: {
      alt_spellings: [],
      demonym: "",
      native: {
        endonym: ""
      },
      official: "",
      short: "",
      translations: {
        [LocaleCode.Afrikaans]: "",
        [LocaleCode.Albanian]: "",
        [LocaleCode.Amharic]: "",
        [LocaleCode.Arabic]: "",
        [LocaleCode.Armenian]: "",
        [LocaleCode.Azerbaijani]: "",
        [LocaleCode.Bashkir]: "",
        [LocaleCode.Basque]: "",
        [LocaleCode.Belarusian]: "",
        [LocaleCode.Bengali]: "",
        [LocaleCode.Berber]: "",
        [LocaleCode.Bhutani]: "",
        [LocaleCode.Bosnian]: "",
        [LocaleCode.Breton]: "",
        [LocaleCode.Bulgarian]: "",
        [LocaleCode.Burmese]: "",
        [LocaleCode.Catalan]: "",
        [LocaleCode.Chinese]: "",
        [LocaleCode.Croatian]: "",
        [LocaleCode.Czech]: "",
        [LocaleCode.Danish]: "",
        [LocaleCode.Dutch]: "",
        [LocaleCode.English]: "",
        [LocaleCode.Esperanto]: "",
        [LocaleCode.Estonian]: "",
        [LocaleCode.Finnish]: "",
        [LocaleCode.French]: "",
        [LocaleCode.Frisian]: "",
        [LocaleCode.Galician]: "",
        [LocaleCode.Georgian]: "",
        [LocaleCode.German]: "",
        [LocaleCode.Greenlandic]: "",
        [LocaleCode.Greek]: "",
        [LocaleCode.Gujarati]: "",
        [LocaleCode.Haitian]: "",
        [LocaleCode.Hausa]: "",
        [LocaleCode.Hebrew]: "",
        [LocaleCode.Hindi]: "",
        [LocaleCode.Hungarian]: "",
        [LocaleCode.Icelandic]: "",
        [LocaleCode.Igbo]: "",
        [LocaleCode.Indonesian]: "",
        [LocaleCode.Irish]: "",
        [LocaleCode.Italian]: "",
        [LocaleCode.Japanese]: "",
        [LocaleCode.Javanese]: "",
        [LocaleCode.Kannada]: "",
        [LocaleCode.Kazakh]: "",
        [LocaleCode.Khmer]: "",
        [LocaleCode.Korean]: "",
        [LocaleCode.Kurdish]: "",
        [LocaleCode.Kyrgyz]: "",
        [LocaleCode.Lao]: "",
        [LocaleCode.Latin]: "",
        [LocaleCode.Latvian]: "",
        [LocaleCode.Lithuanian]: "",
        [LocaleCode.Luxembourgish]: "",
        [LocaleCode.Macedonian]: "",
        [LocaleCode.Malagasy]: "",
        [LocaleCode.Malay]: "",
        [LocaleCode.Malayalam]: "",
        [LocaleCode.Maltese]: "",
        [LocaleCode.Maori]: "",
        [LocaleCode.Marathi]: "",
        [LocaleCode.Mongolian]: "",
        [LocaleCode.Nepali]: "",
        [LocaleCode.Norwegian]: "",
        [LocaleCode.Pashto]: "",
        [LocaleCode.Persian]: "",
        [LocaleCode.Polish]: "",
        [LocaleCode.Portuguese]: "",
        [LocaleCode.Punjabi]: "",
        [LocaleCode.Romanian]: "",
        [LocaleCode.Russian]: "",
        [LocaleCode.Samoan]: "",
        [LocaleCode.Sanskrit]: "",
        [LocaleCode.Scots]: "",
        [LocaleCode.Serbian]: "",
        [LocaleCode.Sesotho]: "",
        [LocaleCode.Shona]: "",
        [LocaleCode.Sindhi]: "",
        [LocaleCode.Sinhala]: "",
        [LocaleCode.Slovak]: "",
        [LocaleCode.Slovenian]: "",
        [LocaleCode.Somali]: "",
        [LocaleCode.Spanish]: "",
        [LocaleCode.Sudanese]: "",
        [LocaleCode.Swahili]: "",
        [LocaleCode.Swedish]: "",
        [LocaleCode.Tagalog]: "",
        [LocaleCode.Tajik]: "",
        [LocaleCode.Tamil]: "",
        [LocaleCode.Tatar]: "",
        [LocaleCode.Telugu]: "",
        [LocaleCode.Thai]: "",
        [LocaleCode.Tibetan]: "",
        [LocaleCode.Turkish]: "",
        [LocaleCode.Ukrainian]: "",
        [LocaleCode.Urdu]: "",
        [LocaleCode.Uzbek]: "",
        [LocaleCode.Vietnamese]: "",
        [LocaleCode.Welsh]: "",
        [LocaleCode.Xhosa]: "",
        [LocaleCode.Yiddish]: "",
        [LocaleCode.Yoruba]: "",
        [LocaleCode.Zulu]: ""
      }
    }
  }
});

({
  id: LocaleCode.Afrikaans,
  language: {
    code: LanguageCode.Afrikaans,
    name: "Afrikaans",
    native: "Afrikaans"
  },
  name: "Afrikaans",
  native_name: "Afrikaans",
  rtl: false
});
({
  country: {
    code: CountryCode.SouthAfrica,
    name: "South Africa",
    native: "South Africa"
  },
  id: LocaleCode.AfrikaansSouthAfrica,
  language: {
    code: LanguageCode.Afrikaans,
    name: "Afrikaans",
    native: "Afrikaans"
  },
  name: "Afrikaans (South Africa)",
  native_name: "Afrikaans (Suid-Afrika)",
  rtl: false
});
({
  id: LocaleCode.Albanian,
  language: {
    code: LanguageCode.Albanian,
    name: "Albanian",
    native: "Shqip"
  },
  name: "Albanian",
  native_name: "Shqip",
  rtl: false
});
({
  country: {
    code: CountryCode.Albania,
    name: "Albania",
    native: "Shqip\xEBria"
  },
  id: LocaleCode.AlbanianAlbania,
  language: {
    code: LanguageCode.Albanian,
    name: "Albanian",
    native: "Shqip"
  },
  name: "Albanian (Albania)",
  native_name: "Shqip (Shqip\xEBria)",
  rtl: false
});
({
  id: LocaleCode.Amharic,
  language: {
    code: LanguageCode.Amharic,
    name: "Amharic",
    native: "\u12A0\u121B\u122D\u129B"
  },
  name: "Amharic",
  native_name: "\u12A0\u121B\u122D\u129B",
  rtl: false
});
({
  country: {
    code: CountryCode.Ethiopia,
    name: "Ethiopia",
    native: "\u12A2\u1275\u12EE\u1335\u12EB"
  },
  id: LocaleCode.AmharicEthiopia,
  language: {
    code: LanguageCode.Amharic,
    name: "Amharic",
    native: "\u12A0\u121B\u122D\u129B"
  },
  name: "Amharic (Ethiopia)",
  native_name: "\u12A0\u121B\u122D\u129B (\u12A2\u1275\u12EE\u1335\u12EB)",
  rtl: false
});
({
  id: LocaleCode.Arabic,
  language: {
    code: LanguageCode.Arabic,
    name: "Arabic",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
  },
  name: "Arabic",
  native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
  rtl: true
});
({
  country: {
    code: CountryCode.Algeria,
    name: "Algeria",
    native: "\u0627\u0644\u062C\u0632\u0627\u0626\u0631"
  },
  id: LocaleCode.ArabicAlgeria,
  language: {
    code: LanguageCode.Arabic,
    name: "Arabic",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
  },
  name: "Arabic (Algeria)",
  native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u062C\u0632\u0627\u0626\u0631)",
  rtl: true
});
({
  country: {
    code: CountryCode.Bahrain,
    name: "Bahrain",
    native: "\u0627\u0644\u0628\u062D\u0631\u064A\u0646"
  },
  id: LocaleCode.ArabicBahrain,
  language: {
    code: LanguageCode.Arabic,
    name: "Arabic",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
  },
  name: "Arabic (Bahrain)",
  native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0628\u062D\u0631\u064A\u0646)",
  rtl: true
});
({
  country: {
    code: CountryCode.Egypt,
    name: "Egypt",
    native: "\u0645\u0635\u0631"
  },
  id: LocaleCode.ArabicEgypt,
  language: {
    code: LanguageCode.Arabic,
    name: "Arabic",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
  },
  name: "Arabic (Egypt)",
  native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0645\u0635\u0631)",
  rtl: true
});
({
  country: {
    code: CountryCode.Iraq,
    name: "Iraq",
    native: "\u0627\u0644\u0639\u0631\u0627\u0642"
  },
  id: LocaleCode.ArabicIraq,
  language: {
    code: LanguageCode.Arabic,
    name: "Arabic",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
  },
  name: "Arabic (Iraq)",
  native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0639\u0631\u0627\u0642)",
  rtl: true
});
({
  country: {
    code: CountryCode.Jordan,
    name: "Jordan",
    native: "\u0627\u0644\u0623\u0631\u062F\u0646"
  },
  id: LocaleCode.ArabicJordan,
  language: {
    code: LanguageCode.Arabic,
    name: "Arabic",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
  },
  name: "Arabic (Jordan)",
  native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0623\u0631\u062F\u0646)",
  rtl: true
});
({
  country: {
    code: CountryCode.Kuwait,
    name: "Kuwait",
    native: "\u0627\u0644\u0643\u0648\u064A\u062A"
  },
  id: LocaleCode.ArabicKuwait,
  language: {
    code: LanguageCode.Arabic,
    name: "Arabic",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
  },
  name: "Arabic (Kuwait)",
  native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0643\u0648\u064A\u062A)",
  rtl: true
});
({
  country: {
    code: CountryCode.Lebanon,
    name: "Lebanon",
    native: "\u0644\u0628\u0646\u0627\u0646"
  },
  id: LocaleCode.ArabicLebanon,
  language: {
    code: LanguageCode.Arabic,
    name: "Arabic",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
  },
  name: "Arabic (Lebanon)",
  native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0644\u0628\u0646\u0627\u0646)",
  rtl: true
});
({
  country: {
    code: CountryCode.Libya,
    name: "Libya",
    native: "\u0644\u064A\u0628\u064A\u0627"
  },
  id: LocaleCode.ArabicLibya,
  language: {
    code: LanguageCode.Arabic,
    name: "Arabic",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
  },
  name: "Arabic (Libya)",
  native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0644\u064A\u0628\u064A\u0627)",
  rtl: true
});
({
  country: {
    code: CountryCode.Morocco,
    name: "Morocco",
    native: "\u0627\u0644\u0645\u063A\u0631\u0628"
  },
  id: LocaleCode.ArabicMorocco,
  language: {
    code: LanguageCode.Arabic,
    name: "Arabic",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
  },
  name: "Arabic (Morocco)",
  native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0645\u063A\u0631\u0628)",
  rtl: true
});
({
  country: {
    code: CountryCode.Oman,
    name: "Oman",
    native: "\u0639\u0645\u0627\u0646"
  },
  id: LocaleCode.ArabicOman,
  language: {
    code: LanguageCode.Arabic,
    name: "Arabic",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
  },
  name: "Arabic (Oman)",
  native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0639\u0645\u0627\u0646)",
  rtl: true
});
({
  country: {
    code: CountryCode.Qatar,
    name: "Qatar",
    native: "\u0642\u0637\u0631"
  },
  id: LocaleCode.ArabicQatar,
  language: {
    code: LanguageCode.Arabic,
    name: "Arabic",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
  },
  name: "Arabic (Qatar)",
  native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0642\u0637\u0631)",
  rtl: true
});
({
  country: {
    code: CountryCode.SaudiArabia,
    name: "Saudi Arabia",
    native: "\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629"
  },
  id: LocaleCode.ArabicSaudiArabia,
  language: {
    code: LanguageCode.Arabic,
    name: "Arabic",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
  },
  name: "Arabic (Saudi Arabia)",
  native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629)",
  rtl: true
});
({
  country: {
    code: CountryCode.Tunisia,
    name: "Tunisia",
    native: "\u062A\u0648\u0646\u0633"
  },
  id: LocaleCode.ArabicTunisia,
  language: {
    code: LanguageCode.Arabic,
    name: "Arabic",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
  },
  name: "Arabic (Tunisia)",
  native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u062A\u0648\u0646\u0633)",
  rtl: true
});
({
  country: {
    code: CountryCode.UnitedArabEmirates,
    name: "United Arab Emirates",
    native: "\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629"
  },
  id: LocaleCode.ArabicUnitedArabEmirates,
  language: {
    code: LanguageCode.Arabic,
    name: "Arabic",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
  },
  name: "Arabic (United Arab Emirates)",
  native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629)",
  rtl: true
});
({
  country: {
    code: CountryCode.Yemen,
    name: "Yemen",
    native: "\u0627\u0644\u064A\u0645\u0646"
  },
  id: LocaleCode.ArabicYemen,
  language: {
    code: LanguageCode.Arabic,
    name: "Arabic",
    native: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629"
  },
  name: "Arabic (Yemen)",
  native_name: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 (\u0627\u0644\u064A\u0645\u0646)",
  rtl: true
});
({
  id: LocaleCode.Armenian,
  language: {
    code: LanguageCode.Armenian,
    name: "Armenian",
    native: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576"
  },
  name: "Armenian",
  native_name: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576",
  rtl: false
});
({
  country: { code: CountryCode.Armenia, name: "Armenia", native: "\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576" },
  id: LocaleCode.ArmenianArmenia,
  language: {
    code: LanguageCode.Armenian,
    name: "Armenian",
    native: "\u0570\u0561\u0575\u0565\u0580\u0565\u0576"
  },
  name: "Armenian (Armenia)",
  native_name: "\u0570\u0561\u0575\u0565\u0580\u0565\u0576 (\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576)",
  rtl: false
});
({
  id: LocaleCode.Azerbaijani,
  language: {
    code: LanguageCode.Azerbaijani,
    name: "Azeribaijani",
    native: "Az\u0259rbaycan"
  },
  name: "Azeri",
  native_name: "Az\u0259rbaycan",
  rtl: false
});
({
  country: {
    code: CountryCode.Azerbaijan,
    name: "Azerbaijan",
    native: "Az\u0259rbaycan"
  },
  id: LocaleCode.AzerbaijaniAzerbaijan,
  language: {
    code: LanguageCode.Azerbaijani,
    name: "Azerbaijani",
    native: "Az\u0259rbaycan"
  },
  name: "Azeri (Azerbaijan)",
  native_name: "Az\u0259rbaycan (Az\u0259rbaycan)",
  rtl: false
});
({
  id: LocaleCode.Basque,
  language: {
    code: LanguageCode.Basque,
    name: "Basque",
    native: "Euskara"
  },
  name: "Basque",
  native_name: "Euskara",
  rtl: false
});
({
  country: {
    code: CountryCode.Spain,
    name: "Spain",
    native: "Espa\xF1a"
  },
  id: LocaleCode.BasqueSpain,
  language: {
    code: LanguageCode.Basque,
    name: "Basque",
    native: "Euskara"
  },
  name: "Basque (Spain)",
  native_name: "Euskara (Espa\xF1a)",
  rtl: false
});
({
  id: LocaleCode.Belarusian,
  language: {
    code: LanguageCode.Belarusian,
    name: "Belarusian",
    native: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F"
  },
  name: "Belarusian",
  native_name: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F",
  rtl: false
});
({
  country: {
    code: CountryCode.Belarus,
    name: "Belarus",
    native: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C"
  },
  id: LocaleCode.BelarusianBelarus,
  language: {
    code: LanguageCode.Belarusian,
    name: "Belarusian",
    native: "\u0431\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F"
  },
  name: "Belarusian (Belarus)",
  native_name: "\u0431\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F (\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C)",
  rtl: false
});
({
  id: LocaleCode.Bengali,
  language: {
    code: LanguageCode.Bengali,
    name: "Bengali",
    native: "\u09AC\u09BE\u0982\u09B2\u09BE"
  },
  name: "Bengali",
  native_name: "\u09AC\u09BE\u0982\u09B2\u09BE",
  rtl: false
});
({
  country: {
    code: CountryCode.Bangladesh,
    name: "Bangladesh",
    native: "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6"
  },
  id: LocaleCode.BengaliBangladesh,
  language: {
    code: LanguageCode.Bengali,
    name: "Bengali",
    native: "\u09AC\u09BE\u0982\u09B2\u09BE"
  },
  name: "Bengali (Bangladesh)",
  native_name: "\u09AC\u09BE\u0982\u09B2\u09BE (\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6)",
  rtl: false
});
({
  id: LocaleCode.Bhutani,
  language: {
    code: LanguageCode.Bhutani,
    name: "Bhutani",
    native: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42"
  },
  name: "Bhutani",
  native_name: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42",
  rtl: false
});
({
  country: {
    code: CountryCode.Bhutan,
    name: "Bhutan",
    native: "\u0F60\u0F56\u0FB2\u0F74\u0F42"
  },
  id: LocaleCode.BhutaniBhutan,
  language: {
    code: LanguageCode.Bhutani,
    name: "Bhutani",
    native: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42"
  },
  name: "Bhutani (Bhutan)",
  native_name: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42 (\u0F60\u0F56\u0FB2\u0F74\u0F42)",
  rtl: false
});
({
  id: LocaleCode.Bulgarian,
  language: {
    code: LanguageCode.Bulgarian,
    name: "Bulgarian",
    native: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438"
  },
  name: "Bulgarian",
  native_name: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438",
  rtl: false
});
({
  country: {
    code: CountryCode.Bulgaria,
    name: "Bulgaria",
    native: "\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F"
  },
  id: LocaleCode.BulgarianBulgaria,
  language: {
    code: LanguageCode.Bulgarian,
    name: "Bulgarian",
    native: "\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438"
  },
  name: "Bulgarian (Bulgaria)",
  native_name: "\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 (\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F)",
  rtl: false
});
({
  id: LocaleCode.Burmese,
  language: {
    code: LanguageCode.Burmese,
    name: "Burmese",
    native: "\u1017\u1019\u102C\u1005\u102C"
  },
  name: "Burmese",
  native_name: "\u1017\u1019\u102C\u1005\u102C",
  rtl: false
});
({
  country: {
    code: CountryCode.Myanmar,
    name: "Myanmar",
    native: "\u1019\u103C\u1014\u103A\u1019\u102C"
  },
  id: LocaleCode.BurmeseMyanmar,
  language: {
    code: LanguageCode.Burmese,
    name: "Burmese",
    native: "\u1017\u1019\u102C\u1005\u102C"
  },
  name: "Burmese (Myanmar)",
  native_name: "\u1017\u1019\u102C\u1005\u102C (\u1019\u103C\u1014\u103A\u1019\u102C)",
  rtl: false
});
({
  id: LocaleCode.Cantonese,
  language: {
    code: LanguageCode.Cantonese,
    name: "Cantonese",
    native: "\u5EE3\u6771\u8A71"
  },
  name: "Cantonese",
  native_name: "\u5EE3\u6771\u8A71",
  rtl: false
});
({
  country: {
    code: CountryCode.HongKong,
    name: "Hong Kong",
    native: "\u9999\u6E2F"
  },
  id: LocaleCode.CantoneseHongKong,
  language: {
    code: LanguageCode.Cantonese,
    name: "Cantonese",
    native: "\u5EE3\u6771\u8A71"
  },
  name: "Cantonese (Hong Kong)",
  native_name: "\u5EE3\u6771\u8A71 (\u9999\u6E2F)",
  rtl: false
});
({
  id: LocaleCode.Catalan,
  language: {
    code: LanguageCode.Catalan,
    name: "Catalan",
    native: "Catal\xE0"
  },
  name: "Catalan",
  native_name: "Catal\xE0",
  rtl: false
});
({
  country: {
    code: CountryCode.Spain,
    name: "Spain",
    native: "Espa\xF1a"
  },
  id: LocaleCode.CatalanSpain,
  language: {
    code: LanguageCode.Catalan,
    name: "Catalan",
    native: "Catal\xE0"
  },
  name: "Catalan (Spain)",
  native_name: "Catal\xE0 (Espanya)",
  rtl: false
});
({
  id: LocaleCode.ChineseSimplified,
  language: {
    code: LanguageCode.Chinese,
    name: "Chinese",
    native: "\u4E2D\u6587"
  },
  name: "Chinese (Simplified)",
  native_name: "\u4E2D\u6587",
  rtl: false
});
({
  country: {
    code: CountryCode.China,
    name: "China",
    native: "\u4E2D\u56FD"
  },
  id: LocaleCode.ChineseSimplifiedChina,
  language: {
    code: LanguageCode.Chinese,
    name: "Chinese",
    native: "\u4E2D\u6587"
  },
  name: "Chinese (Simplified/China)",
  native_name: "\u4E2D\u6587 (\u4E2D\u56FD)",
  rtl: false
});
({
  country: {
    code: CountryCode.HongKong,
    name: "Hong Kong",
    native: "\u9999\u6E2F"
  },
  id: LocaleCode.ChineseSimplifiedHongKong,
  language: {
    code: LanguageCode.Chinese,
    name: "Chinese",
    native: "\u4E2D\u6587"
  },
  name: "Chinese (Simplified/Hong Kong)",
  native_name: "\u4E2D\u6587 (\u9999\u6E2F)",
  rtl: false
});
({
  country: {
    code: CountryCode.Macau,
    name: "Macau",
    native: "\u6FB3\u9580"
  },
  id: LocaleCode.ChineseSimplifiedMacau,
  language: {
    code: LanguageCode.Chinese,
    name: "Chinese",
    native: "\u4E2D\u6587"
  },
  name: "Chinese (Simplified/Macau)",
  native_name: "\u4E2D\u6587 (\u6FB3\u9580)",
  rtl: false
});
({
  country: {
    code: CountryCode.Singapore,
    name: "Singapore",
    native: "\u65B0\u52A0\u5761"
  },
  id: LocaleCode.ChineseSimplifiedSingapore,
  language: {
    code: LanguageCode.Chinese,
    name: "Chinese",
    native: "\u4E2D\u6587"
  },
  name: "Chinese (Simplified/Singapore)",
  native_name: "\u4E2D\u6587 (\u65B0\u52A0\u5761)",
  rtl: false
});
({
  id: LocaleCode.ChineseTraditional,
  language: {
    code: LanguageCode.Chinese,
    name: "Chinese",
    native: "\u4E2D\u6587"
  },
  name: "Chinese (Traditional)",
  native_name: "\u4E2D\u6587",
  rtl: false
});
({
  country: {
    code: CountryCode.HongKong,
    name: "Hong Kong",
    native: "\u9999\u6E2F"
  },
  id: LocaleCode.ChineseTraditionalHongKong,
  language: {
    code: LanguageCode.Chinese,
    name: "Chinese (Traditional/Hong Kong)",
    native: "\u4E2D\u6587"
  },
  name: "Chinese (Hong Kong)",
  native_name: "\u4E2D\u6587 (\u9999\u6E2F)",
  rtl: false
});
({
  country: {
    code: CountryCode.Macau,
    name: "Macau",
    native: "\u6FB3\u9580"
  },
  id: LocaleCode.ChineseTraditionalMacau,
  language: {
    code: LanguageCode.Chinese,
    name: "Chinese (Traditional/Macau)",
    native: "\u4E2D\u6587"
  },
  name: "Chinese (Macau)",
  native_name: "\u4E2D\u6587 (\u6FB3\u9580)",
  rtl: false
});
({
  country: {
    code: CountryCode.Singapore,
    name: "Singapore",
    native: "\u65B0\u52A0\u5761"
  },
  id: LocaleCode.ChineseTraditionalSingapore,
  language: {
    code: LanguageCode.Chinese,
    name: "Chinese (Traditional/Singapore)",
    native: "\u4E2D\u6587"
  },
  name: "Chinese (Singapore)",
  native_name: "\u4E2D\u6587 (\u65B0\u52A0\u5761)",
  rtl: false
});
({
  id: LocaleCode.Croatian,
  language: {
    code: LanguageCode.Croatian,
    name: "Croatian",
    native: "Hrvatski"
  },
  name: "Croatian",
  native_name: "Hrvatski",
  rtl: false
});
({
  country: {
    code: CountryCode.BosniaAndHerzegovina,
    name: "Bosnia and Herzegovina",
    native: "Bosna i Hercegovina"
  },
  id: LocaleCode.CroatianBosniaAndHerzegovina,
  language: {
    code: LanguageCode.Croatian,
    name: "Croatian",
    native: "Hrvatski"
  },
  name: "Croatian (Bosnia and Herzegovina)",
  native_name: "Hrvatski (Bosna i Hercegovina)",
  rtl: false
});
({
  country: {
    code: CountryCode.Croatia,
    name: "Croatia",
    native: "Hrvatska"
  },
  id: LocaleCode.CroatianCroatia,
  language: {
    code: LanguageCode.Croatian,
    name: "Croatian",
    native: "Hrvatski"
  },
  name: "Croatian (Croatia)",
  native_name: "Hrvatski (Hrvatska)",
  rtl: false
});
({
  id: LocaleCode.Czech,
  language: {
    code: LanguageCode.Czech,
    name: "Czech",
    native: "\u010Ce\u0161tina"
  },
  name: "Czech",
  native_name: "\u010Ce\u0161tina",
  rtl: false
});
({
  country: {
    code: CountryCode.CzechRepublic,
    name: "Czech Republic",
    native: "\u010Cesk\xE1 republika"
  },
  id: LocaleCode.CzechCzechRepublic,
  language: {
    code: LanguageCode.Czech,
    name: "Czech",
    native: "\u010Ce\u0161tina"
  },
  name: "Czech (Czech Republic)",
  native_name: "\u010Ce\u0161tina (\u010Cesk\xE1 republika)",
  rtl: false
});
({
  id: LocaleCode.Danish,
  language: {
    code: LanguageCode.Danish,
    name: "Danish",
    native: "Dansk"
  },
  name: "Danish",
  native_name: "Dansk",
  rtl: false
});
({
  country: {
    code: CountryCode.Denmark,
    name: "Denmark",
    native: "Danmark"
  },
  id: LocaleCode.DanishDenmark,
  language: {
    code: LanguageCode.Danish,
    name: "Danish",
    native: "Dansk"
  },
  name: "Danish (Denmark)",
  native_name: "Dansk (Danmark)",
  rtl: false
});
({
  id: LocaleCode.Divehi,
  language: {
    code: LanguageCode.Divehi,
    name: "Divehi",
    native: "\u078B\u07A8\u0788\u07AC\u0780\u07A8\u0784\u07A6\u0790\u07B0"
  },
  name: "Divehi",
  native_name: "\u078B\u07A8\u0788\u07AC\u0780\u07A8\u0784\u07A6\u0790\u07B0",
  rtl: true
});
({
  country: {
    code: CountryCode.Maldives,
    name: "Maldives",
    native: "\u078B\u07A8\u0788\u07AC\u0780\u07A8 \u0783\u07A7\u0787\u07B0\u0796\u07AC"
  },
  id: LocaleCode.DivehiMaldives,
  language: {
    code: LanguageCode.Divehi,
    name: "Divehi",
    native: "\u078B\u07A8\u0788\u07AC\u0780\u07A8\u0784\u07A6\u0790\u07B0"
  },
  name: "Divehi (Maldives)",
  native_name: "\u078B\u07A8\u0788\u07AC\u0780\u07A8\u0784\u07A6\u0790\u07B0 (\u078B\u07A8\u0788\u07AC\u0780\u07A8 \u0783\u07A7\u0787\u07B0\u0796\u07AC)",
  rtl: true
});
({
  id: LocaleCode.Dutch,
  language: {
    code: LanguageCode.Dutch,
    name: "Dutch",
    native: "Nederlands"
  },
  name: "Dutch",
  native_name: "Nederlands",
  rtl: false
});
({
  country: {
    code: CountryCode.Belgium,
    name: "Belgium",
    native: "Belgi\xEB"
  },
  id: LocaleCode.DutchBelgium,
  language: {
    code: LanguageCode.Dutch,
    name: "Dutch",
    native: "Nederlands"
  },
  name: "Dutch (Belgium)",
  native_name: "Nederlands (Belgi\xEB)",
  rtl: false
});
({
  country: {
    code: CountryCode.Netherlands,
    name: "Netherlands",
    native: "Nederland"
  },
  id: LocaleCode.DutchNetherlands,
  language: {
    code: LanguageCode.Dutch,
    name: "Dutch",
    native: "Nederlands"
  },
  name: "Dutch (Netherlands)",
  native_name: "Nederlands (Nederland)",
  rtl: false
});
({
  id: LocaleCode.English,
  language: {
    code: LanguageCode.English,
    name: "English",
    native: "English"
  },
  name: "English",
  native_name: "English",
  rtl: false
});
({
  country: {
    code: CountryCode.Australia,
    name: "Australia",
    native: "Australia"
  },
  id: LocaleCode.EnglishAustralia,
  language: {
    code: LanguageCode.English,
    name: "English",
    native: "English"
  },
  name: "English (Australia)",
  native_name: "English (Australia)",
  rtl: false
});
({
  country: {
    code: CountryCode.Belgium,
    name: "Belgium",
    native: "Belgi\xEB"
  },
  id: LocaleCode.EnglishBelgium,
  language: {
    code: LanguageCode.English,
    name: "English",
    native: "English"
  },
  name: "English (Belgium)",
  native_name: "English (Belgi\xEB)",
  rtl: false
});
({
  country: {
    code: CountryCode.Canada,
    name: "Canada",
    native: "Canada"
  },
  id: LocaleCode.EnglishCanada,
  language: {
    code: LanguageCode.English,
    name: "English",
    native: "English"
  },
  name: "English (Canada)",
  native_name: "English (Canada)",
  rtl: false
});
({
  country: {
    code: CountryCode.Ireland,
    name: "Ireland",
    native: "\xC9ire"
  },
  id: LocaleCode.EnglishIreland,
  language: {
    code: LanguageCode.English,
    name: "English",
    native: "English"
  },
  name: "English (Ireland)",
  native_name: "English (\xC9ire)",
  rtl: false
});
({
  country: {
    code: CountryCode.Jamaica,
    name: "Jamaica",
    native: "Jamaica"
  },
  id: LocaleCode.EnglishJamaica,
  language: {
    code: LanguageCode.English,
    name: "English",
    native: "English"
  },
  name: "English (Jamaica)",
  native_name: "English (Jamaica)",
  rtl: false
});
({
  country: {
    code: CountryCode.NewZealand,
    name: "New Zealand",
    native: "New Zealand"
  },
  id: LocaleCode.EnglishNewZealand,
  language: {
    code: LanguageCode.English,
    name: "English",
    native: "English"
  },
  name: "English (New Zealand)",
  native_name: "English (New Zealand)",
  rtl: false
});
({
  country: {
    code: CountryCode.Philippines,
    name: "Philippines",
    native: "Philippines"
  },
  id: LocaleCode.EnglishPhilippines,
  language: {
    code: LanguageCode.English,
    name: "English",
    native: "English"
  },
  name: "English (Philippines)",
  native_name: "English (Philippines)",
  rtl: false
});
({
  country: {
    code: CountryCode.Singapore,
    name: "Singapore",
    native: "Singapore"
  },
  id: LocaleCode.EnglishSingapore,
  language: {
    code: LanguageCode.English,
    name: "English",
    native: "English"
  },
  name: "English (Singapore)",
  native_name: "English (Singapore)",
  rtl: false
});
({
  country: {
    code: CountryCode.SouthAfrica,
    name: "South Africa",
    native: "South Africa"
  },
  id: LocaleCode.EnglishSouthAfrica,
  language: {
    code: LanguageCode.English,
    name: "English",
    native: "English"
  },
  name: "English (South Africa)",
  native_name: "English (South Africa)",
  rtl: false
});
({
  country: {
    code: CountryCode.TrinidadAndTobago,
    name: "Trinidad and Tobago",
    native: "Trinidad and Tobago"
  },
  id: LocaleCode.EnglishTrinidadAndTobago,
  language: {
    code: LanguageCode.English,
    name: "English",
    native: "English"
  },
  name: "English (Trinidad and Tobago)",
  native_name: "English (Trinidad and Tobago)",
  rtl: false
});
({
  country: {
    code: CountryCode.UnitedKingdom,
    name: "United Kingdom",
    native: "United Kingdom"
  },
  id: LocaleCode.EnglishUnitedKingdom,
  language: {
    code: LanguageCode.English,
    name: "English",
    native: "English"
  },
  name: "English (United Kingdom)",
  native_name: "English (United Kingdom)",
  rtl: false
});
({
  country: {
    code: CountryCode.UnitedStates,
    name: "United States",
    native: "United States"
  },
  id: LocaleCode.EnglishUnitedStates,
  language: {
    code: LanguageCode.English,
    name: "English",
    native: "English"
  },
  name: "English (United States)",
  native_name: "English (United States)",
  rtl: false
});
({
  country: {
    code: CountryCode.Zimbabwe,
    name: "Zimbabwe",
    native: "Zimbabwe"
  },
  id: LocaleCode.EnglishZimbabwe,
  language: {
    code: LanguageCode.English,
    name: "English",
    native: "English"
  },
  name: "English (Zimbabwe)",
  native_name: "English (Zimbabwe)",
  rtl: false
});
({
  id: LocaleCode.Esperanto,
  language: {
    code: LanguageCode.Esperanto,
    name: "Esperanto",
    native: "Esperanto"
  },
  name: "Esperanto",
  native_name: "Esperanto",
  rtl: false
});
({
  id: LocaleCode.Estonian,
  language: {
    code: LanguageCode.Estonian,
    name: "Estonian",
    native: "Eesti"
  },
  name: "Estonian",
  native_name: "Eesti",
  rtl: false
});
({
  country: {
    code: CountryCode.Estonia,
    name: "Estonia",
    native: "Eesti"
  },
  id: LocaleCode.EstonianEstonia,
  language: {
    code: LanguageCode.Estonian,
    name: "Estonian",
    native: "Eesti"
  },
  name: "Estonian (Estonia)",
  native_name: "Eesti (Eesti)",
  rtl: false
});
({
  id: LocaleCode.Faroese,
  language: {
    code: LanguageCode.Faroese,
    name: "Faroese",
    native: "F\xF8royskt"
  },
  name: "Faroese",
  native_name: "F\xF8royskt",
  rtl: false
});
({
  country: {
    code: CountryCode.FaroeIslands,
    name: "Faroe Islands",
    native: "F\xF8royar"
  },
  id: LocaleCode.FaroeseFaroeIslands,
  language: {
    code: LanguageCode.Faroese,
    name: "Faroese",
    native: "F\xF8royskt"
  },
  name: "Faroese (Faroe Islands)",
  native_name: "F\xF8royskt (F\xF8royar)",
  rtl: false
});
({
  id: LocaleCode.Farsi,
  language: {
    code: LanguageCode.Farsi,
    name: "Farsi",
    native: "\u0641\u0627\u0631\u0633\u06CC"
  },
  name: "Farsi",
  native_name: "\u0641\u0627\u0631\u0633\u06CC",
  rtl: true
});
({
  country: {
    code: CountryCode.Iran,
    name: "Iran",
    native: "\u0627\u06CC\u0631\u0627\u0646"
  },
  id: LocaleCode.FarsiIran,
  language: {
    code: LanguageCode.Farsi,
    name: "Farsi",
    native: "\u0641\u0627\u0631\u0633\u06CC"
  },
  name: "Farsi (Iran)",
  native_name: "\u0641\u0627\u0631\u0633\u06CC (\u0627\u06CC\u0631\u0627\u0646)",
  rtl: true
});
({
  id: LocaleCode.Filipino,
  language: {
    code: LanguageCode.Filipino,
    name: "Filipino",
    native: "Filipino"
  },
  name: "Filipino",
  native_name: "Filipino",
  rtl: false
});
({
  country: {
    code: CountryCode.Philippines,
    name: "Philippines",
    native: "Pilipinas"
  },
  id: LocaleCode.FilipinoPhilippines,
  language: {
    code: LanguageCode.Filipino,
    name: "Filipino",
    native: "Filipino"
  },
  name: "Filipino (Philippines)",
  native_name: "Filipino (Pilipinas)",
  rtl: false
});
({
  id: LocaleCode.Finnish,
  language: {
    code: LanguageCode.Finnish,
    name: "Finnish",
    native: "Suomi"
  },
  name: "Finnish",
  native_name: "Suomi",
  rtl: false
});
({
  country: {
    code: CountryCode.Finland,
    name: "Finland",
    native: "Suomi"
  },
  id: LocaleCode.FinnishFinland,
  language: {
    code: LanguageCode.Finnish,
    name: "Finnish",
    native: "Suomi"
  },
  name: "Finnish (Finland)",
  native_name: "Suomi (Suomi)",
  rtl: false
});
({
  id: LocaleCode.French,
  language: {
    code: LanguageCode.French,
    name: "French",
    native: "Fran\xE7ais"
  },
  name: "French",
  native_name: "Fran\xE7ais",
  rtl: false
});
({
  country: {
    code: CountryCode.Belgium,
    name: "Belgium",
    native: "Belgique"
  },
  id: LocaleCode.FrenchBelgium,
  language: {
    code: LanguageCode.French,
    name: "French",
    native: "Fran\xE7ais"
  },
  name: "French (Belgium)",
  native_name: "Fran\xE7ais (Belgique)",
  rtl: false
});
({
  country: {
    code: CountryCode.Canada,
    name: "Canada",
    native: "Canada"
  },
  id: LocaleCode.FrenchCanada,
  language: {
    code: LanguageCode.French,
    name: "French",
    native: "Fran\xE7ais"
  },
  name: "French (Canada)",
  native_name: "Fran\xE7ais (Canada)",
  rtl: false
});
({
  country: {
    code: CountryCode.France,
    name: "France",
    native: "France"
  },
  id: LocaleCode.FrenchFrance,
  language: {
    code: LanguageCode.French,
    name: "French",
    native: "Fran\xE7ais"
  },
  name: "French (France)",
  native_name: "Fran\xE7ais (France)",
  rtl: false
});
({
  country: {
    code: CountryCode.Luxembourg,
    name: "Luxembourg",
    native: "Luxembourg"
  },
  id: LocaleCode.FrenchLuxembourg,
  language: {
    code: LanguageCode.French,
    name: "French",
    native: "Fran\xE7ais"
  },
  name: "French (Luxembourg)",
  native_name: "Fran\xE7ais (Luxembourg)",
  rtl: false
});
({
  country: {
    code: CountryCode.Monaco,
    name: "Monaco",
    native: "Monaco"
  },
  id: LocaleCode.FrenchMonaco,
  language: {
    code: LanguageCode.French,
    name: "French",
    native: "Fran\xE7ais"
  },
  name: "French (Monaco)",
  native_name: "Fran\xE7ais (Monaco)",
  rtl: false
});
({
  country: {
    code: CountryCode.Reunion,
    name: "Reunion",
    native: "La R\xE9union"
  },
  id: LocaleCode.FrenchReunion,
  language: {
    code: LanguageCode.French,
    name: "French",
    native: "Fran\xE7ais"
  },
  name: "French (Reunion)",
  native_name: "Fran\xE7ais (La R\xE9union)",
  rtl: false
});
({
  country: {
    code: CountryCode.Switzerland,
    name: "Switzerland",
    native: "Suisse"
  },
  id: LocaleCode.FrenchSwitzerland,
  language: {
    code: LanguageCode.French,
    name: "French",
    native: "Fran\xE7ais"
  },
  name: "French (Switzerland)",
  native_name: "Fran\xE7ais (Suisse)",
  rtl: false
});
({
  id: LocaleCode.Frisian,
  language: {
    code: LanguageCode.Frisian,
    name: "Frisian",
    native: "Frysk"
  },
  name: "Frisian",
  native_name: "Frysk",
  rtl: false
});
({
  country: {
    code: CountryCode.Netherlands,
    name: "Netherlands",
    native: "Nederland"
  },
  id: LocaleCode.FrisianNetherlands,
  language: {
    code: LanguageCode.Frisian,
    name: "Frisian",
    native: "Frysk"
  },
  name: "Frisian (Netherlands)",
  native_name: "Frysk (Nederland)",
  rtl: false
});
({
  id: LocaleCode.Galician,
  language: {
    code: LanguageCode.Galician,
    name: "Galician",
    native: "Galego"
  },
  name: "Galician",
  native_name: "Galego",
  rtl: false
});
({
  country: {
    code: CountryCode.Spain,
    name: "Spain",
    native: "Espa\xF1a"
  },
  id: LocaleCode.GalicianSpain,
  language: {
    code: LanguageCode.Galician,
    name: "Galician",
    native: "Galego"
  },
  name: "Galician (Spain)",
  native_name: "Galego (Espa\xF1a)",
  rtl: false
});
({
  id: LocaleCode.Georgian,
  language: {
    code: LanguageCode.Georgian,
    name: "Georgian",
    native: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8"
  },
  name: "Georgian",
  native_name: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8",
  rtl: false
});
({
  country: {
    code: CountryCode.Georgia,
    name: "Georgia",
    native: "\u10E1\u10D0\u10E5\u10D0\u10E0\u10D7\u10D5\u10D4\u10DA\u10DD"
  },
  id: LocaleCode.GeorgianGeorgia,
  language: {
    code: LanguageCode.Georgian,
    name: "Georgian",
    native: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8"
  },
  name: "Georgian (Georgia)",
  native_name: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8 (\u10E1\u10D0\u10E5\u10D0\u10E0\u10D7\u10D5\u10D4\u10DA\u10DD)",
  rtl: false
});
({
  id: LocaleCode.German,
  language: {
    code: LanguageCode.German,
    name: "German",
    native: "Deutsch"
  },
  name: "German",
  native_name: "Deutsch",
  rtl: false
});
({
  country: {
    code: CountryCode.Austria,
    name: "Austria",
    native: "\xD6sterreich"
  },
  id: LocaleCode.GermanAustria,
  language: {
    code: LanguageCode.German,
    name: "German",
    native: "Deutsch"
  },
  name: "German (Austria)",
  native_name: "Deutsch (\xD6sterreich)",
  rtl: false
});
({
  country: {
    code: CountryCode.Belgium,
    name: "Belgium",
    native: "Belgi\xEB"
  },
  id: LocaleCode.GermanBelgium,
  language: {
    code: LanguageCode.German,
    name: "German",
    native: "Deutsch"
  },
  name: "German (Belgium)",
  native_name: "Deutsch (Belgi\xEB)",
  rtl: false
});
({
  country: {
    code: CountryCode.Switzerland,
    name: "Switzerland",
    native: "Suisse"
  },
  id: LocaleCode.GermanSwitzerland,
  language: {
    code: LanguageCode.German,
    name: "German",
    native: "Deutsch"
  },
  name: "German (Switzerland)",
  native_name: "Deutsch (Suisse)",
  rtl: false
});
({
  country: {
    code: CountryCode.Liechtenstein,
    name: "Liechtenstein",
    native: "Liechtenstein"
  },
  id: LocaleCode.GermanLiechtenstein,
  language: {
    code: LanguageCode.German,
    name: "German",
    native: "Deutsch"
  },
  name: "German (Liechtenstein)",
  native_name: "Deutsch (Liechtenstein)",
  rtl: false
});
({
  country: {
    code: CountryCode.Luxembourg,
    name: "Luxembourg",
    native: "Luxembourg"
  },
  id: LocaleCode.GermanLuxembourg,
  language: {
    code: LanguageCode.German,
    name: "German",
    native: "Deutsch"
  },
  name: "German (Luxembourg)",
  native_name: "Deutsch (Luxembourg)",
  rtl: false
});
({
  id: LocaleCode.Greek,
  language: {
    code: LanguageCode.Greek,
    name: "Greek",
    native: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"
  },
  name: "Greek",
  native_name: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",
  rtl: false
});
({
  country: {
    code: CountryCode.Greece,
    name: "Greece",
    native: "\u0395\u03BB\u03BB\u03AC\u03B4\u03B1"
  },
  id: LocaleCode.GreekGreece,
  language: {
    code: LanguageCode.Greek,
    name: "Greek",
    native: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"
  },
  name: "Greek (Greece)",
  native_name: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC (\u0395\u03BB\u03BB\u03AC\u03B4\u03B1)",
  rtl: false
});
({
  id: LocaleCode.Greenlandic,
  language: {
    code: LanguageCode.Greenlandic,
    name: "Greenlandic",
    native: "Kalaallisut"
  },
  name: "Greenlandic",
  native_name: "Kalaallisut",
  rtl: false
});
({
  country: {
    code: CountryCode.Greenland,
    name: "Greenland",
    native: "Kalaallit Nunaat"
  },
  id: LocaleCode.GreenlandicGreenland,
  language: {
    code: LanguageCode.Greenlandic,
    name: "Greenlandic",
    native: "Kalaallisut"
  },
  name: "Greenlandic (Greenland)",
  native_name: "Kalaallisut (Kalaallit Nunaat)",
  rtl: false
});
({
  id: LocaleCode.Gujarati,
  language: {
    code: LanguageCode.Gujarati,
    name: "Gujarati",
    native: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0"
  },
  name: "Gujarati",
  native_name: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0",
  rtl: false
});
({
  country: {
    code: CountryCode.India,
    name: "India",
    native: "\u092D\u093E\u0930\u0924"
  },
  id: LocaleCode.GujaratiIndia,
  language: {
    code: LanguageCode.Gujarati,
    name: "Gujarati",
    native: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0"
  },
  name: "Gujarati (India)",
  native_name: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0 (\u092D\u093E\u0930\u0924)",
  rtl: false
});
({
  id: LocaleCode.Hausa,
  language: {
    code: LanguageCode.Hausa,
    name: "Hausa",
    native: "\u0647\u064E\u0648\u064F\u0633\u064E"
  },
  name: "Hausa",
  native_name: "\u0647\u064E\u0648\u064F\u0633\u064E",
  rtl: false
});
({
  country: {
    code: CountryCode.Ghana,
    name: "Ghana",
    native: "Ghana"
  },
  id: LocaleCode.HausaGhana,
  language: {
    code: LanguageCode.Hausa,
    name: "Hausa",
    native: "\u0647\u064E\u0648\u064F\u0633\u064E"
  },
  name: "Hausa (Ghana)",
  native_name: "\u0647\u064E\u0648\u064F\u0633\u064E (Ghana)",
  rtl: false
});
({
  country: {
    code: CountryCode.Niger,
    name: "Niger",
    native: "Niger"
  },
  id: LocaleCode.HausaNiger,
  language: {
    code: LanguageCode.Hausa,
    name: "Hausa",
    native: "\u0647\u064E\u0648\u064F\u0633\u064E"
  },
  name: "Hausa (Niger)",
  native_name: "\u0647\u064E\u0648\u064F\u0633\u064E (Niger)",
  rtl: false
});
({
  country: {
    code: CountryCode.Nigeria,
    name: "Nigeria",
    native: "Nigeria"
  },
  id: LocaleCode.HausaNigeria,
  language: {
    code: LanguageCode.Hausa,
    name: "Hausa",
    native: "\u0647\u064E\u0648\u064F\u0633\u064E"
  },
  name: "Hausa (Nigeria)",
  native_name: "\u0647\u064E\u0648\u064F\u0633\u064E (Nigeria)",
  rtl: false
});
({
  id: LocaleCode.Hebrew,
  language: {
    code: LanguageCode.Hebrew,
    name: "Hebrew",
    native: "\u05E2\u05D1\u05E8\u05D9\u05EA"
  },
  name: "Hebrew",
  native_name: "\u05E2\u05D1\u05E8\u05D9\u05EA",
  rtl: true
});
({
  country: {
    code: CountryCode.Israel,
    name: "Hebrew",
    native: ""
  },
  id: LocaleCode.HebrewIsrael,
  language: {
    code: LanguageCode.Hebrew,
    name: "Hebrew",
    native: ""
  },
  name: "Hebrew (Israel)",
  native_name: "",
  rtl: true
});
({
  id: LocaleCode.Hindi,
  language: {
    code: LanguageCode.Hindi,
    name: "Hindi",
    native: "\u0939\u093F\u0928\u094D\u0926\u0940"
  },
  name: "Hindi",
  native_name: "\u0939\u093F\u0928\u094D\u0926\u0940",
  rtl: false
});
({
  country: {
    code: CountryCode.India,
    name: "India",
    native: "\u092D\u093E\u0930\u0924"
  },
  id: LocaleCode.HindiIndia,
  language: {
    code: LanguageCode.Hindi,
    name: "Hindi",
    native: "\u092D\u093E\u0930\u0924\u0940\u092F"
  },
  name: "Hindi (India)",
  native_name: "\u092D\u093E\u0930\u0924\u0940\u092F",
  rtl: false
});
({
  id: LocaleCode.Hungarian,
  language: {
    code: LanguageCode.Hungarian,
    name: "Hungarian",
    native: "Magyar"
  },
  name: "Hungarian",
  native_name: "Magyar",
  rtl: false
});
({
  country: {
    code: CountryCode.Hungary,
    name: "Hungary",
    native: "Magyarorsz\xE1g"
  },
  id: LocaleCode.HungarianHungary,
  language: {
    code: LanguageCode.Hungarian,
    name: "Hungarian",
    native: "Magyar"
  },
  name: "Hungarian (Hungary)",
  native_name: "Magyar (Magyarorsz\xE1g)",
  rtl: false
});
({
  id: LocaleCode.Icelandic,
  language: {
    code: LanguageCode.Icelandic,
    name: "Icelandic",
    native: "\xCDslenska"
  },
  name: "Icelandic",
  native_name: "\xCDslenska",
  rtl: false
});
({
  country: {
    code: CountryCode.Iceland,
    name: "Iceland",
    native: "\xCDsland"
  },
  id: LocaleCode.IcelandicIceland,
  language: {
    code: LanguageCode.Icelandic,
    name: "Icelandic",
    native: "\xCDslenska"
  },
  name: "Icelandic (Iceland)",
  native_name: "\xCDslenska (\xCDsland)",
  rtl: false
});
({
  id: LocaleCode.Igbo,
  language: {
    code: LanguageCode.Igbo,
    name: "Igbo",
    native: "Igbo"
  },
  name: "Igbo",
  native_name: "Igbo",
  rtl: false
});
({
  id: LocaleCode.Indonesian,
  language: {
    code: LanguageCode.Indonesian,
    name: "Indonesian",
    native: "Bahasa Indonesia"
  },
  name: "Indonesian",
  native_name: "Bahasa Indonesia",
  rtl: false
});
({
  country: {
    code: CountryCode.Indonesia,
    name: "Indonesia",
    native: "Indonesia"
  },
  id: LocaleCode.IndonesianIndonesia,
  language: {
    code: LanguageCode.Indonesian,
    name: "Indonesian",
    native: "Bahasa Indonesia"
  },
  name: "Indonesian (Indonesia)",
  native_name: "Bahasa Indonesia (Indonesia)",
  rtl: false
});
({
  id: LocaleCode.Irish,
  language: {
    code: LanguageCode.Irish,
    name: "Irish",
    native: "Gaeilge"
  },
  name: "Irish",
  native_name: "Gaeilge",
  rtl: false
});
({
  country: {
    code: CountryCode.Ireland,
    name: "Ireland",
    native: "\xC9ire"
  },
  id: LocaleCode.IrishIreland,
  language: {
    code: LanguageCode.Irish,
    name: "Irish",
    native: "Gaeilge"
  },
  name: "Irish (Ireland)",
  native_name: "Gaeilge (\xC9ire)",
  rtl: false
});
({
  id: LocaleCode.Italian,
  language: {
    code: LanguageCode.Italian,
    name: "Italian",
    native: "Italiano"
  },
  name: "Italian",
  native_name: "Italiano",
  rtl: false
});
({
  country: {
    code: CountryCode.Italy,
    name: "Italy",
    native: "Italia"
  },
  id: LocaleCode.ItalianItaly,
  language: {
    code: LanguageCode.Italian,
    name: "Italian",
    native: "Italiano"
  },
  name: "Italian (Italy)",
  native_name: "Italiano (Italia)",
  rtl: false
});
({
  country: {
    code: CountryCode.Switzerland,
    name: "Switzerland",
    native: "Schweiz"
  },
  id: LocaleCode.ItalianSwitzerland,
  language: {
    code: LanguageCode.Italian,
    name: "Italian",
    native: "Italiano"
  },
  name: "Italian (Switzerland)",
  native_name: "Italiano (Svizzera)",
  rtl: false
});
({
  id: LocaleCode.Japanese,
  language: {
    code: LanguageCode.Japanese,
    name: "Japanese",
    native: "\u65E5\u672C\u8A9E"
  },
  name: "Japanese",
  native_name: "\u65E5\u672C\u8A9E",
  rtl: false
});
({
  country: {
    code: CountryCode.Japan,
    name: "Japan",
    native: "\u65E5\u672C"
  },
  id: LocaleCode.JapaneseJapan,
  language: {
    code: LanguageCode.Japanese,
    name: "Japanese",
    native: "\u65E5\u672C\u8A9E"
  },
  name: "Japanese (Japan)",
  native_name: "\u65E5\u672C\u8A9E (\u65E5\u672C)",
  rtl: false
});
({
  id: LocaleCode.Kannada,
  language: {
    code: LanguageCode.Kannada,
    name: "Kannada",
    native: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1"
  },
  name: "Kannada",
  native_name: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1",
  rtl: false
});
({
  country: {
    code: CountryCode.India,
    name: "India",
    native: "\u0CAD\u0CBE\u0CB0\u0CA4"
  },
  id: LocaleCode.KannadaIndia,
  language: {
    code: LanguageCode.Kannada,
    name: "Kannada",
    native: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1"
  },
  name: "Kannada (India)",
  native_name: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1 (\u0CAD\u0CBE\u0CB0\u0CA4)",
  rtl: false
});
({
  id: LocaleCode.Kazakh,
  language: {
    code: LanguageCode.Kazakh,
    name: "Kazakh",
    native: "\u049A\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456"
  },
  name: "Kazakh",
  native_name: "\u049A\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456",
  rtl: false
});
({
  country: {
    code: CountryCode.Kazakhstan,
    name: "Kazakhstan",
    native: "\u049A\u0430\u0437\u0430\u049B\u0441\u0442\u0430\u043D"
  },
  id: LocaleCode.KazakhKazakhstan,
  language: {
    code: LanguageCode.Kazakh,
    name: "Kazakh",
    native: "\u049A\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456"
  },
  name: "Kazakh (Kazakhstan)",
  native_name: "\u049A\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456 (\u049A\u0430\u0437\u0430\u049B\u0441\u0442\u0430\u043D)",
  rtl: false
});
({
  id: LocaleCode.Khmer,
  language: {
    code: LanguageCode.Khmer,
    name: "Khmer",
    native: "\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A"
  },
  name: "Khmer",
  native_name: "\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A",
  rtl: false
});
({
  country: {
    code: CountryCode.Cambodia,
    name: "Cambodia",
    native: "\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6"
  },
  id: LocaleCode.KhmerCambodia,
  language: {
    code: LanguageCode.Khmer,
    name: "Khmer",
    native: "\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A"
  },
  name: "Khmer (Cambodia)",
  native_name: "\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A (\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6)",
  rtl: false
});
({
  id: LocaleCode.Konkani,
  language: {
    code: LanguageCode.Konkani,
    name: "Konkani",
    native: "\u0915\u094B\u0902\u0915\u0923\u0940"
  },
  name: "Konkani",
  native_name: "\u0915\u094B\u0902\u0915\u0923\u0940",
  rtl: false
});
({
  country: {
    code: CountryCode.India,
    name: "India",
    native: "\u092D\u093E\u0930\u0924"
  },
  id: LocaleCode.KonkaniIndia,
  language: {
    code: LanguageCode.Konkani,
    name: "Konkani",
    native: "\u0915\u094B\u0902\u0915\u0923\u0940"
  },
  name: "Konkani (India)",
  native_name: "\u0915\u094B\u0902\u0915\u0923\u0940 (\u092D\u093E\u0930\u0924)",
  rtl: false
});
({
  id: LocaleCode.Korean,
  language: {
    code: LanguageCode.Korean,
    name: "Korean",
    native: "\uD55C\uAD6D\uC5B4"
  },
  name: "Korean",
  native_name: "\uD55C\uAD6D\uC5B4",
  rtl: false
});
({
  country: {
    code: CountryCode.SouthKorea,
    name: "South Korea",
    native: "\uB300\uD55C\uBBFC\uAD6D"
  },
  id: LocaleCode.KoreanSouthKorea,
  language: {
    code: LanguageCode.Korean,
    name: "Korean",
    native: "\uD55C\uAD6D\uC5B4"
  },
  name: "Korean (South Korea)",
  native_name: "\uD55C\uAD6D\uC5B4 (\uB300\uD55C\uBBFC\uAD6D)",
  rtl: false
});
({
  id: LocaleCode.Kurdish,
  language: {
    code: LanguageCode.Kurdish,
    name: "Kurdish",
    native: "Kurd\xEE"
  },
  name: "Kurdish",
  native_name: "Kurd\xEE",
  rtl: false
});
({
  country: {
    code: CountryCode.Iraq,
    name: "Iraq",
    native: "\u0627\u0644\u0639\u0631\u0627\u0642"
  },
  id: LocaleCode.KurdishIraq,
  language: {
    code: LanguageCode.Kurdish,
    name: "Kurdish",
    native: "Kurd\xEE"
  },
  name: "Kurdish (Iraq)",
  native_name: "Kurd\xEE (\u0627\u0644\u0639\u0631\u0627\u0642)",
  rtl: false
});
({
  country: {
    code: CountryCode.Turkey,
    name: "Turkey",
    native: "T\xFCrkiye"
  },
  id: LocaleCode.KurdishTurkey,
  language: {
    code: LanguageCode.Kurdish,
    name: "Kurdish",
    native: "Kurd\xEE"
  },
  name: "Kurdish (Turkey)",
  native_name: "Kurd\xEE (T\xFCrkiye)",
  rtl: false
});
({
  id: LocaleCode.Kyrgyz,
  language: {
    code: LanguageCode.Kyrgyz,
    name: "Kyrgyz",
    native: "\u041A\u044B\u0440\u0433\u044B\u0437\u0447\u0430"
  },
  name: "Kyrgyz",
  native_name: "\u041A\u044B\u0440\u0433\u044B\u0437\u0447\u0430",
  rtl: false
});
({
  country: {
    code: CountryCode.Kyrgyzstan,
    name: "Kyrgyzstan",
    native: "\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u0442\u0430\u043D"
  },
  id: LocaleCode.KyrgyzKyrgyzstan,
  language: {
    code: LanguageCode.Kyrgyz,
    name: "Kyrgyz",
    native: "\u041A\u044B\u0440\u0433\u044B\u0437\u0447\u0430"
  },
  name: "Kyrgyz (Kyrgyzstan)",
  native_name: "\u041A\u044B\u0440\u0433\u044B\u0437\u0447\u0430 (\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u0442\u0430\u043D)",
  rtl: false
});
({
  id: LocaleCode.Lao,
  language: {
    code: LanguageCode.Lao,
    name: "Lao",
    native: "\u0EA5\u0EB2\u0EA7"
  },
  name: "Lao",
  native_name: "\u0EA5\u0EB2\u0EA7",
  rtl: false
});
({
  country: {
    code: CountryCode.Laos,
    name: "Laos",
    native: "\u0EAA.\u0E9B.\u0E9B\u0EB0\u0E8A\u0EB2\u0E97\u0EB4\u0E9B\u0EB0\u0EC4\u0E95"
  },
  id: LocaleCode.LaoLaos,
  language: {
    code: LanguageCode.Lao,
    name: "Lao",
    native: "\u0EA5\u0EB2\u0EA7"
  },
  name: "Lao (Laos)",
  native_name: "\u0EA5\u0EB2\u0EA7 (\u0EAA.\u0E9B.\u0E9B\u0EB0\u0E8A\u0EB2\u0E97\u0EB4\u0E9B\u0EB0\u0EC4\u0E95)",
  rtl: false
});
({
  id: LocaleCode.Latvian,
  language: {
    code: LanguageCode.Latvian,
    name: "Latvian",
    native: "Latvie\u0161u"
  },
  name: "Latvian",
  native_name: "Latvie\u0161u",
  rtl: false
});
({
  country: {
    code: CountryCode.Latvia,
    name: "Latvia",
    native: "Latvija"
  },
  id: LocaleCode.LatvianLatvia,
  language: {
    code: LanguageCode.Latvian,
    name: "Latvian",
    native: "Latvie\u0161u"
  },
  name: "Latvian (Latvia)",
  native_name: "Latvie\u0161u (Latvija)",
  rtl: false
});
({
  id: LocaleCode.Lithuanian,
  language: {
    code: LanguageCode.Lithuanian,
    name: "Lithuanian",
    native: "Lietuvi\u0173"
  },
  name: "Lithuanian",
  native_name: "Lietuvi\u0173",
  rtl: false
});
({
  country: {
    code: CountryCode.Lithuania,
    name: "Lithuania",
    native: "Lietuva"
  },
  id: LocaleCode.LithuanianLithuania,
  language: {
    code: LanguageCode.Lithuanian,
    name: "Lithuanian",
    native: "Lietuvi\u0173"
  },
  name: "Lithuanian (Lithuania)",
  native_name: "Lietuvi\u0173 (Lietuva)",
  rtl: false
});
({
  id: LocaleCode.Luxembourgish,
  language: {
    code: LanguageCode.Luxembourgish,
    name: "Luxembourgish",
    native: "L\xEBtzebuergesch"
  },
  name: "Luxembourgish",
  native_name: "L\xEBtzebuergesch",
  rtl: false
});
({
  country: {
    code: CountryCode.Belgium,
    name: "Belgium",
    native: "Belgi\xEB"
  },
  id: LocaleCode.LuxembourgishBelgium,
  language: {
    code: LanguageCode.Luxembourgish,
    name: "Luxembourgish",
    native: "L\xEBtzebuergesch"
  },
  name: "Luxembourgish (Belgium)",
  native_name: "L\xEBtzebuergesch (Belgi\xEB)",
  rtl: false
});
({
  country: {
    code: CountryCode.Luxembourg,
    name: "Luxembourg",
    native: "Luxembourg"
  },
  id: LocaleCode.LuxembourgishLuxembourg,
  language: {
    code: LanguageCode.Luxembourgish,
    name: "Luxembourgish",
    native: "L\xEBtzebuergesch"
  },
  name: "Luxembourgish (Luxembourg)",
  native_name: "L\xEBtzebuergesch (Luxembourg)",
  rtl: false
});
({
  id: LocaleCode.Macedonian,
  language: {
    code: LanguageCode.Macedonian,
    name: "Macedonian",
    native: "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438"
  },
  name: "Macedonian",
  native_name: "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438",
  rtl: false
});
({
  country: {
    code: CountryCode.NorthMacedonia,
    name: "Macedonia",
    native: "\u0421\u0435\u0432\u0435\u0440\u043D\u0430 \u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430"
  },
  id: LocaleCode.MacedonianNorthMacedonia,
  language: {
    code: LanguageCode.Macedonian,
    name: "Macedonian",
    native: "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438"
  },
  name: "Macedonian (North Macedonia)",
  native_name: "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438 (\u0421\u0435\u0432\u0435\u0440\u043D\u0430 \u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430)",
  rtl: false
});
({
  id: LocaleCode.Malay,
  language: {
    code: LanguageCode.Malay,
    name: "Malay",
    native: "Bahasa Melayu"
  },
  name: "Malay",
  native_name: "Bahasa Melayu",
  rtl: false
});
({
  country: {
    code: CountryCode.Brunei,
    name: "Brunei",
    native: "Negara Brunei Darussalam"
  },
  id: LocaleCode.MalayBrunei,
  language: {
    code: LanguageCode.Malay,
    name: "Malay",
    native: "Bahasa Melayu"
  },
  name: "Malay (Brunei)",
  native_name: "Bahasa Melayu (Negara Brunei Darussalam)",
  rtl: false
});
({
  country: {
    code: CountryCode.Malaysia,
    name: "Malaysia",
    native: "Malaysia"
  },
  id: LocaleCode.MalayMalaysia,
  language: {
    code: LanguageCode.Malay,
    name: "Malay",
    native: "Bahasa Melayu"
  },
  name: "Malay (Malaysia)",
  native_name: "Bahasa Melayu (Malaysia)",
  rtl: false
});
({
  country: {
    code: CountryCode.Singapore,
    name: "Singapore",
    native: "Singapore"
  },
  id: LocaleCode.MalaySingapore,
  language: {
    code: LanguageCode.Malay,
    name: "Malay",
    native: "Bahasa Melayu"
  },
  name: "Malay (Singapore)",
  native_name: "Bahasa Melayu (Singapore)",
  rtl: false
});
({
  country: {
    code: CountryCode.India,
    name: "India",
    native: "\u092D\u093E\u0930\u0924"
  },
  id: LocaleCode.MalayIndia,
  language: {
    code: LanguageCode.Malay,
    name: "Malay",
    native: "Bahasa Melayu"
  },
  name: "Malay (India)",
  native_name: "Bahasa Melayu (\u092D\u093E\u0930\u0924)",
  rtl: false
});
({
  id: LocaleCode.Maltese,
  language: {
    code: LanguageCode.Maltese,
    name: "Maltese",
    native: "Malti"
  },
  name: "Maltese",
  native_name: "Malti",
  rtl: false
});
({
  country: {
    code: CountryCode.Malta,
    name: "Malta",
    native: "Malta"
  },
  id: LocaleCode.MalteseMalta,
  language: {
    code: LanguageCode.Maltese,
    name: "Maltese",
    native: "Malti"
  },
  name: "Maltese (Malta)",
  native_name: "Malti (Malta)",
  rtl: false
});
({
  id: LocaleCode.Maori,
  language: {
    code: LanguageCode.Maori,
    name: "Maori",
    native: "M\u0101ori"
  },
  name: "Maori",
  native_name: "M\u0101ori",
  rtl: false
});
({
  country: {
    code: CountryCode.NewZealand,
    name: "New Zealand",
    native: "New Zealand"
  },
  id: LocaleCode.MaoriNewZealand,
  language: {
    code: LanguageCode.Maori,
    name: "Maori",
    native: "M\u0101ori"
  },
  name: "Maori (New Zealand)",
  native_name: "M\u0101ori (New Zealand)",
  rtl: false
});
({
  id: LocaleCode.Marathi,
  language: {
    code: LanguageCode.Marathi,
    name: "Marathi",
    native: "\u092E\u0930\u093E\u0920\u0940"
  },
  name: "Marathi",
  native_name: "\u092E\u0930\u093E\u0920\u0940",
  rtl: false
});
({
  country: {
    code: CountryCode.India,
    name: "India",
    native: "\u092D\u093E\u0930\u0924"
  },
  id: LocaleCode.MarathiIndia,
  language: {
    code: LanguageCode.Marathi,
    name: "Marathi",
    native: "\u092E\u0930\u093E\u0920\u0940"
  },
  name: "Marathi (India)",
  native_name: "\u092E\u0930\u093E\u0920\u0940 (\u092D\u093E\u0930\u0924)",
  rtl: false
});
({
  id: LocaleCode.Mongolian,
  language: {
    code: LanguageCode.Mongolian,
    name: "Mongolian",
    native: "\u041C\u043E\u043D\u0433\u043E\u043B"
  },
  name: "Mongolian",
  native_name: "\u041C\u043E\u043D\u0433\u043E\u043B",
  rtl: false
});
({
  country: {
    code: CountryCode.Mongolia,
    name: "Mongolia",
    native: "\u041C\u043E\u043D\u0433\u043E\u043B \u0443\u043B\u0441"
  },
  id: LocaleCode.MongolianMongolia,
  language: {
    code: LanguageCode.Mongolian,
    name: "Mongolian",
    native: "\u041C\u043E\u043D\u0433\u043E\u043B"
  },
  name: "Mongolian (Mongolia)",
  native_name: "\u041C\u043E\u043D\u0433\u043E\u043B (\u041C\u043E\u043D\u0433\u043E\u043B \u0443\u043B\u0441)",
  rtl: false
});
({
  id: LocaleCode.Montenegrin,
  language: {
    code: LanguageCode.Montenegrin,
    name: "Montenegrin",
    native: "\u0426\u0440\u043D\u0430 \u0413\u043E\u0440\u0430\u043A"
  },
  name: "Montenegrin",
  native_name: "\u0426\u0440\u043D\u0430 \u0413\u043E\u0440\u0430\u043A",
  rtl: false
});
({
  country: {
    code: CountryCode.Montenegro,
    name: "Montenegro",
    native: "\u0426\u0440\u043D\u0430 \u0413\u043E\u0440\u0430\u043A"
  },
  id: LocaleCode.MontenegrinMontenegro,
  language: {
    code: LanguageCode.Montenegrin,
    name: "Montenegrin",
    native: "\u0426\u0440\u043D\u0430 \u0413\u043E\u0440\u0430\u043A"
  },
  name: "Montenegrin (Montenegro)",
  native_name: "\u0426\u0440\u043D\u0430 \u0413\u043E\u0440\u0430\u043A (\u0426\u0440\u043D\u0430 \u0413\u043E\u0440\u0430\u043A)",
  rtl: false
});
({
  id: LocaleCode.Nepali,
  language: {
    code: LanguageCode.Nepali,
    name: "Nepali",
    native: "\u0928\u0947\u092A\u093E\u0932\u0940"
  },
  name: "Nepali",
  native_name: "\u0928\u0947\u092A\u093E\u0932\u0940",
  rtl: false
});
({
  country: {
    code: CountryCode.Nepal,
    name: "Nepal",
    native: "\u0928\u0947\u092A\u093E\u0932"
  },
  id: LocaleCode.NepaliNepal,
  language: {
    code: LanguageCode.Nepali,
    name: "Nepali",
    native: "\u0928\u0947\u092A\u093E\u0932\u0940"
  },
  name: "Nepali (Nepal)",
  native_name: "\u0928\u0947\u092A\u093E\u0932\u0940 (\u0928\u0947\u092A\u093E\u0932)",
  rtl: false
});
({
  id: LocaleCode.NorthernSotho,
  language: {
    code: LanguageCode.NorthernSotho,
    name: "Northern Sotho",
    native: "Sesotho sa Leboa"
  },
  name: "Northern Sotho",
  native_name: "Sesotho sa Leboa",
  rtl: false
});
({
  country: {
    code: CountryCode.SouthAfrica,
    name: "South Africa",
    native: "South Africa"
  },
  id: LocaleCode.NorthernSothoSouthAfrica,
  language: {
    code: LanguageCode.NorthernSotho,
    name: "Northern Sotho",
    native: "Sesotho sa Leboa"
  },
  name: "Northern Sotho (South Africa)",
  native_name: "Sesotho sa Leboa (South Africa)",
  rtl: false
});
({
  id: LocaleCode.Norwegian,
  language: {
    code: LanguageCode.Norwegian,
    name: "Norwegian",
    native: "Norsk"
  },
  name: "Norwegian",
  native_name: "Norsk",
  rtl: false
});
({
  country: {
    code: CountryCode.Norway,
    name: "Norway",
    native: "Norge"
  },
  id: LocaleCode.NorwegianBokmalNorway,
  language: {
    code: LanguageCode.NorwegianBokmal,
    name: "Norwegian",
    native: "Norsk"
  },
  name: "Norwegian (Bokmal)",
  native_name: "Norsk (Bokm\xE5l)",
  rtl: false
});
({
  country: {
    code: CountryCode.Norway,
    name: "Norway",
    native: "Norge"
  },
  id: LocaleCode.NorwegianNynorskNorway,
  language: {
    code: LanguageCode.NorwegianNynorsk,
    name: "Norwegian",
    native: "Norsk"
  },
  name: "Norwegian (Nynorsk)",
  native_name: "Norsk (Nynorsk)",
  rtl: false
});
({
  id: LocaleCode.Oriya,
  language: {
    code: LanguageCode.Oriya,
    name: "Oriya",
    native: "\u0B13\u0B21\u0B3C\u0B3F\u0B06"
  },
  name: "Oriya",
  native_name: "\u0B13\u0B21\u0B3C\u0B3F\u0B06",
  rtl: false
});
({
  country: {
    code: CountryCode.India,
    name: "India",
    native: "\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE"
  },
  id: LocaleCode.OriyaIndia,
  language: {
    code: LanguageCode.Oriya,
    name: "Oriya",
    native: "\u0B13\u0B21\u0B3C\u0B3F\u0B06"
  },
  name: "Oriya (India)",
  native_name: "\u0B13\u0B21\u0B3C\u0B3F\u0B06 (\u0B2D\u0B3E\u0B30\u0B24)",
  rtl: false
});
({
  id: LocaleCode.Pashto,
  language: {
    code: LanguageCode.Pashto,
    name: "Pashto",
    native: "\u067E\u069A\u062A\u0648"
  },
  name: "Pashto",
  native_name: "\u067E\u069A\u062A\u0648",
  rtl: true
});
({
  country: {
    code: CountryCode.Afghanistan,
    name: "Afghanistan",
    native: "\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646"
  },
  id: LocaleCode.PashtoAfghanistan,
  language: {
    code: LanguageCode.Pashto,
    name: "Pashto",
    native: "\u067E\u069A\u062A\u0648"
  },
  name: "Pashto (Afghanistan)",
  native_name: "\u067E\u069A\u062A\u0648 (\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646)",
  rtl: true
});
({
  id: LocaleCode.Persian,
  language: {
    code: LanguageCode.Persian,
    name: "Persian",
    native: "\u0641\u0627\u0631\u0633\u06CC"
  },
  name: "Persian",
  native_name: "\u0641\u0627\u0631\u0633\u06CC",
  rtl: true
});
({
  country: {
    code: CountryCode.Iran,
    name: "Iran",
    native: "\u0627\u06CC\u0631\u0627\u0646"
  },
  id: LocaleCode.PersianIran,
  language: {
    code: LanguageCode.Persian,
    name: "Persian",
    native: "\u0641\u0627\u0631\u0633\u06CC"
  },
  name: "Persian (Iran)",
  native_name: "\u0641\u0627\u0631\u0633\u06CC (\u0627\u06CC\u0631\u0627\u0646)",
  rtl: true
});
({
  id: LocaleCode.Polish,
  language: {
    code: LanguageCode.Polish,
    name: "Polish",
    native: "Polski"
  },
  name: "Polish",
  native_name: "Polski",
  rtl: false
});
({
  country: {
    code: CountryCode.Poland,
    name: "Poland",
    native: "Polska"
  },
  id: LocaleCode.PolishPoland,
  language: {
    code: LanguageCode.Polish,
    name: "Polish",
    native: "Polski"
  },
  name: "Polish (Poland)",
  native_name: "Polski (Polska)",
  rtl: false
});
({
  id: LocaleCode.Portuguese,
  language: {
    code: LanguageCode.Portuguese,
    name: "Portuguese",
    native: "Portugu\xEAs"
  },
  name: "Portuguese",
  native_name: "Portugu\xEAs",
  rtl: false
});
({
  country: {
    code: CountryCode.Brazil,
    name: "Brazil",
    native: "Brasil"
  },
  id: LocaleCode.PortugueseBrazil,
  language: {
    code: LanguageCode.Portuguese,
    name: "Portuguese",
    native: "Portugu\xEAs"
  },
  name: "Portuguese (Brazil)",
  native_name: "Portugu\xEAs (Brasil)",
  rtl: false
});
({
  country: {
    code: CountryCode.Portugal,
    name: "Portugal",
    native: "Portugal"
  },
  id: LocaleCode.PortuguesePortugal,
  language: {
    code: LanguageCode.Portuguese,
    name: "Portuguese",
    native: "Portugu\xEAs"
  },
  name: "Portuguese (Portugal)",
  native_name: "Portugu\xEAs (Portugal)",
  rtl: false
});
({
  id: LocaleCode.Punjabi,
  language: {
    code: LanguageCode.Punjabi,
    name: "Punjabi",
    native: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40"
  },
  name: "Punjabi",
  native_name: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40",
  rtl: true
});
({
  country: {
    code: CountryCode.Pakistan,
    name: "Pakistan",
    native: "\u067E\u0627\u06A9\u0633\u062A\u0627\u0646"
  },
  id: LocaleCode.PunjabiPakistan,
  language: {
    code: LanguageCode.Punjabi,
    name: "Punjabi",
    native: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40"
  },
  name: "Punjabi (Pakistan)",
  native_name: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40 (\u067E\u0627\u06A9\u0633\u062A\u0627\u0646)",
  rtl: true
});
({
  country: {
    code: CountryCode.India,
    name: "India",
    native: "\u0A2D\u0A3E\u0A30\u0A24"
  },
  id: LocaleCode.PunjabiIndia,
  language: {
    code: LanguageCode.Punjabi,
    name: "Punjabi",
    native: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40"
  },
  name: "Punjabi (India)",
  native_name: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40 (\u0A2D\u0A3E\u0A30\u0A24)",
  rtl: true
});
({
  id: LocaleCode.Quechua,
  language: {
    code: LanguageCode.Quechua,
    name: "Quechua",
    native: "Runa Simi"
  },
  name: "Quechua",
  native_name: "Runa Simi",
  rtl: false
});
({
  country: {
    code: CountryCode.Bolivia,
    name: "Bolivia",
    native: "Bolivia"
  },
  id: LocaleCode.QuechuaBolivia,
  language: {
    code: LanguageCode.Quechua,
    name: "Quechua",
    native: "Runa Simi"
  },
  name: "Quechua (Bolivia)",
  native_name: "Runa Simi (Bolivia)",
  rtl: false
});
({
  country: {
    code: CountryCode.Ecuador,
    name: "Ecuador",
    native: "Ecuador"
  },
  id: LocaleCode.QuechuaEcuador,
  language: {
    code: LanguageCode.Quechua,
    name: "Quechua",
    native: "Runa Simi"
  },
  name: "Quechua (Ecuador)",
  native_name: "Runa Simi (Ecuador)",
  rtl: false
});
({
  country: {
    code: CountryCode.Peru,
    name: "Peru",
    native: "Per\xFA"
  },
  id: LocaleCode.QuechuaPeru,
  language: {
    code: LanguageCode.Quechua,
    name: "Quechua",
    native: "Runa Simi"
  },
  name: "Quechua (Peru)",
  native_name: "Runa Simi (Per\xFA)",
  rtl: false
});
({
  id: LocaleCode.Romanian,
  language: {
    code: LanguageCode.Romanian,
    name: "Romanian",
    native: "Rom\xE2n\u0103"
  },
  name: "Romanian",
  native_name: "Rom\xE2n\u0103",
  rtl: false
});
({
  country: {
    code: CountryCode.Romania,
    name: "Romania",
    native: "Rom\xE2nia"
  },
  id: LocaleCode.RomanianRomania,
  language: {
    code: LanguageCode.Romanian,
    name: "Romanian",
    native: "Rom\xE2n\u0103"
  },
  name: "Romanian (Romania)",
  native_name: "Rom\xE2n\u0103 (Rom\xE2nia)",
  rtl: false
});
({
  id: LocaleCode.Russian,
  language: {
    code: LanguageCode.Russian,
    name: "Russian",
    native: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
  },
  name: "Russian",
  native_name: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
  rtl: false
});
({
  country: {
    code: CountryCode.RussianFederation,
    name: "Russian Federation",
    native: "\u0420\u043E\u0441\u0441\u0438\u044F"
  },
  id: LocaleCode.RussianRussia,
  language: {
    code: LanguageCode.Russian,
    name: "Russian",
    native: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
  },
  name: "Russian (Russia)",
  native_name: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 (\u0420\u043E\u0441\u0441\u0438\u044F)",
  rtl: false
});
({
  country: {
    code: CountryCode.Ukraine,
    name: "Ukraine",
    native: "\u0423\u043A\u0440\u0430\u0457\u043D\u0430"
  },
  id: LocaleCode.RussianUkraine,
  language: {
    code: LanguageCode.Russian,
    name: "Russian",
    native: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
  },
  name: "Russian (Ukraine)",
  native_name: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 (\u0423\u043A\u0440\u0430\u0457\u043D\u0430)",
  rtl: false
});
({
  country: {
    code: CountryCode.Kazakhstan,
    name: "Kazakhstan",
    native: "\u049A\u0430\u0437\u0430\u049B\u0441\u0442\u0430\u043D"
  },
  id: LocaleCode.RussianKazakhstan,
  language: {
    code: LanguageCode.Russian,
    name: "Russian",
    native: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
  },
  name: "Russian (Kazakhstan)",
  native_name: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 (\u049A\u0430\u0437\u0430\u049B\u0441\u0442\u0430\u043D)",
  rtl: false
});
({
  country: {
    code: CountryCode.Kyrgyzstan,
    name: "Kyrgyzstan",
    native: "\u041A\u044B\u0440\u0433\u044B\u0437\u0447\u0430"
  },
  id: LocaleCode.RussianKyrgyzstan,
  language: {
    code: LanguageCode.Russian,
    name: "Russian",
    native: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"
  },
  name: "Russian (Kyrgyzstan)",
  native_name: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 (\u041A\u044B\u0440\u0433\u044B\u0437\u0447\u0430)",
  rtl: false
});
({
  id: LocaleCode.Sanskrit,
  language: {
    code: LanguageCode.Sanskrit,
    name: "Sanskrit",
    native: "\u0938\u0902\u0938\u094D\u0915\u0943\u0924\u092E\u094D"
  },
  name: "Sanskrit",
  native_name: "\u0938\u0902\u0938\u094D\u0915\u0943\u0924\u092E\u094D",
  rtl: false
});
({
  country: {
    code: CountryCode.India,
    name: "India",
    native: "\u092D\u093E\u0930\u0924"
  },
  id: LocaleCode.SanskritIndia,
  language: {
    code: LanguageCode.Sanskrit,
    name: "Sanskrit",
    native: "\u0938\u0902\u0938\u094D\u0915\u0943\u0924\u092E\u094D"
  },
  name: "Sanskrit (India)",
  native_name: "\u0938\u0902\u0938\u094D\u0915\u0943\u0924\u092E\u094D (\u092D\u093E\u0930\u0924)",
  rtl: false
});
({
  id: LocaleCode.Sami,
  language: {
    code: LanguageCode.Sami,
    name: "Sami",
    native: "S\xE1megiella"
  },
  name: "Sami",
  native_name: "S\xE1megiella",
  rtl: false
});
({
  country: {
    code: CountryCode.Finland,
    name: "Finland",
    native: "Suomi"
  },
  id: LocaleCode.SamiFinland,
  language: {
    code: LanguageCode.Sami,
    name: "Sami",
    native: "S\xE1megiella"
  },
  name: "Sami (Finland)",
  native_name: "S\xE1megiella (Suomi)",
  rtl: false
});
({
  country: {
    code: CountryCode.Norway,
    name: "Norway",
    native: "Norge"
  },
  id: LocaleCode.SamiNorway,
  language: {
    code: LanguageCode.Sami,
    name: "Sami",
    native: "S\xE1megiella"
  },
  name: "Sami (Norway)",
  native_name: "S\xE1megiella (Norge)",
  rtl: false
});
({
  country: {
    code: CountryCode.Sweden,
    name: "Sweden",
    native: "Sverige"
  },
  id: LocaleCode.SamiSweden,
  language: {
    code: LanguageCode.Sami,
    name: "Sami",
    native: "S\xE1megiella"
  },
  name: "Sami (Sweden)",
  native_name: "S\xE1megiella (Sverige)",
  rtl: false
});
({
  id: LocaleCode.Samoan,
  language: {
    code: LanguageCode.Samoan,
    name: "Samoan",
    native: "Gagana fa\u2019a S\u0101moa"
  },
  name: "Samoan",
  native_name: "Gagana fa\u2019a S\u0101moa",
  rtl: false
});
({
  country: {
    code: CountryCode.Samoa,
    name: "Samoa",
    native: "Samoa"
  },
  id: LocaleCode.SamoanSamoa,
  language: {
    code: LanguageCode.Samoan,
    name: "Samoan",
    native: "Gagana fa\u2019a S\u0101moa"
  },
  name: "Samoan (Samoa)",
  native_name: "Gagana fa\u2019a S\u0101moa (Samoa)",
  rtl: false
});
({
  id: LocaleCode.Serbian,
  language: {
    code: LanguageCode.Serbian,
    name: "Serbian (Latin)",
    native: "Srpski (Latinica)"
  },
  name: "Serbian (Latin)",
  native_name: "Srpski (Latinica)",
  rtl: false
});
({
  country: {
    code: CountryCode.BosniaAndHerzegovina,
    name: "Bosnia and Herzegovina",
    native: "Bosna i Hercegovina"
  },
  id: LocaleCode.SerbianBosniaAndHerzegovina,
  language: {
    code: LanguageCode.Serbian,
    name: "Serbian (Latin)",
    native: "Srpski (Latinica)"
  },
  name: "Serbian (Latin) (Bosnia and Herzegovina)",
  native_name: "Srpski (Latinica) (Bosna i Hercegovina)",
  rtl: false
});
({
  country: {
    code: CountryCode.SerbiaAndMontenegro,
    name: "Serbia and Montenegro",
    native: "Srbija i Crna Gora"
  },
  id: LocaleCode.SerbianSerbiaAndMontenegro,
  language: {
    code: LanguageCode.Serbian,
    name: "Serbian (Latin)",
    native: "Srpski (Latinica)"
  },
  name: "Serbian (Latin) (Serbia and Montenegro)",
  native_name: "Srpski (Latinica) (Srbija i Crna Gora)",
  rtl: false
});
({
  id: LocaleCode.SerbianCyrillic,
  language: {
    code: LanguageCode.SerbianCyrillic,
    name: "Serbian",
    native: "\u0421\u0440\u043F\u0441\u043A\u0438"
  },
  name: "Serbian (Cyrillic)",
  native_name: "\u0421\u0440\u043F\u0441\u043A\u0438 (\u040B\u0438\u0440\u0438\u043B\u0438\u0446\u0430)",
  rtl: false
});
({
  country: {
    code: CountryCode.BosniaAndHerzegovina,
    name: "Bosnia and Herzegovina",
    native: "\u0411\u043E\u0441\u043D\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430"
  },
  id: LocaleCode.SerbianCyrillicBosniaAndHerzegovina,
  language: {
    code: LanguageCode.SerbianCyrillic,
    name: "Serbian",
    native: "\u0421\u0440\u043F\u0441\u043A\u0438"
  },
  name: "Serbian (Cyrillic, Bosnia and Herzegovina)",
  native_name: "\u0421\u0440\u043F\u0441\u043A\u0438 (\u040B\u0438\u0440\u0438\u043B\u0438\u0446\u0430, \u0411\u043E\u0441\u043D\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430)",
  rtl: false
});
({
  country: {
    code: CountryCode.SerbiaAndMontenegro,
    name: "Serbia and Montenegro",
    native: "\u0421\u0440\u0431\u0438\u0458\u0430 \u0438 \u0426\u0440\u043D\u0430 \u0413\u043E\u0440\u0430"
  },
  id: LocaleCode.SerbianCyrillicSerbiaAndMontenegro,
  language: {
    code: LanguageCode.SerbianCyrillic,
    name: "Serbian",
    native: "\u0421\u0440\u043F\u0441\u043A\u0438"
  },
  name: "Serbian (Cyrillic, Serbia and Montenegro)",
  native_name: "\u0421\u0440\u043F\u0441\u043A\u0438 (\u040B\u0438\u0440\u0438\u043B\u0438\u0446\u0430, \u0421\u0440\u0431\u0438\u0458\u0430 \u0438 \u0426\u0440\u043D\u0430 \u0413\u043E\u0440\u0430)",
  rtl: false
});
({
  id: LocaleCode.Slovak,
  language: {
    code: LanguageCode.Slovak,
    name: "Slovak",
    native: "Sloven\u010Dina"
  },
  name: "Slovak",
  native_name: "Sloven\u010Dina",
  rtl: false
});
({
  country: {
    code: CountryCode.Slovakia,
    name: "Slovakia",
    native: "Slovensko"
  },
  id: LocaleCode.SlovakSlovakia,
  language: {
    code: LanguageCode.Slovak,
    name: "Slovak",
    native: "Sloven\u010Dina"
  },
  name: "Slovak (Slovakia)",
  native_name: "Sloven\u010Dina (Slovensko)",
  rtl: false
});
({
  id: LocaleCode.Slovenian,
  language: {
    code: LanguageCode.Slovenian,
    name: "Slovenian",
    native: "Sloven\u0161\u010Dina"
  },
  name: "Slovenian",
  native_name: "Sloven\u0161\u010Dina",
  rtl: false
});
({
  country: {
    code: CountryCode.Slovenia,
    name: "Slovenia",
    native: "Slovenija"
  },
  id: LocaleCode.SlovenianSlovenia,
  language: {
    code: LanguageCode.Slovenian,
    name: "Slovenian",
    native: "Sloven\u0161\u010Dina"
  },
  name: "Slovenian (Slovenia)",
  native_name: "Sloven\u0161\u010Dina (Slovenija)",
  rtl: false
});
({
  id: LocaleCode.Somali,
  language: {
    code: LanguageCode.Somali,
    name: "Somali",
    native: "Soomaaliga"
  },
  name: "Somali",
  native_name: "Soomaaliga",
  rtl: true
});
({
  country: {
    code: CountryCode.Somalia,
    name: "Somalia",
    native: "Soomaaliya"
  },
  id: LocaleCode.SomaliSomalia,
  language: {
    code: LanguageCode.Somali,
    name: "Somali",
    native: "Soomaaliga"
  },
  name: "Somali (Somalia)",
  native_name: "Soomaaliga (Soomaaliya)",
  rtl: true
});
({
  id: LocaleCode.Spanish,
  language: {
    code: LanguageCode.Spanish,
    name: "Spanish",
    native: "Espa\xF1ol"
  },
  name: "Spanish",
  native_name: "Espa\xF1ol",
  rtl: false
});
({
  country: {
    code: CountryCode.Argentina,
    name: "Argentina",
    native: "Argentina"
  },
  id: LocaleCode.SpanishArgentina,
  language: {
    code: LanguageCode.Spanish,
    name: "Spanish",
    native: "Espa\xF1ol"
  },
  name: "Spanish (Argentina)",
  native_name: "Espa\xF1ol (Argentina)",
  rtl: false
});
({
  country: {
    code: CountryCode.Bolivia,
    name: "Bolivia",
    native: "Bolivia"
  },
  id: LocaleCode.SpanishBolivia,
  language: {
    code: LanguageCode.Spanish,
    name: "Spanish",
    native: "Espa\xF1ol"
  },
  name: "Spanish (Bolivia)",
  native_name: "Espa\xF1ol (Bolivia)",
  rtl: false
});
({
  country: {
    code: CountryCode.Chile,
    name: "Chile",
    native: "Chile"
  },
  id: LocaleCode.SpanishChile,
  language: {
    code: LanguageCode.Spanish,
    name: "Spanish",
    native: "Espa\xF1ol"
  },
  name: "Spanish (Chile)",
  native_name: "Espa\xF1ol (Chile)",
  rtl: false
});
({
  country: {
    code: CountryCode.Colombia,
    name: "Colombia",
    native: "Colombia"
  },
  id: LocaleCode.SpanishColombia,
  language: {
    code: LanguageCode.Spanish,
    name: "Spanish",
    native: "Espa\xF1ol"
  },
  name: "Spanish (Colombia)",
  native_name: "Espa\xF1ol (Colombia)",
  rtl: false
});
({
  country: {
    code: CountryCode.CostaRica,
    name: "Costa Rica",
    native: "Costa Rica"
  },
  id: LocaleCode.SpanishCostaRica,
  language: {
    code: LanguageCode.Spanish,
    name: "Spanish",
    native: "Espa\xF1ol"
  },
  name: "Spanish (Costa Rica)",
  native_name: "Espa\xF1ol (Costa Rica)",
  rtl: false
});
({
  country: {
    code: CountryCode.Cuba,
    name: "Cuba",
    native: "Cuba"
  },
  id: LocaleCode.SpanishCuba,
  language: {
    code: LanguageCode.Spanish,
    name: "Spanish",
    native: "Espa\xF1ol"
  },
  name: "Spanish (Cuba)",
  native_name: "Espa\xF1ol (Cuba)",
  rtl: false
});
({
  country: {
    code: CountryCode.DominicanRepublic,
    name: "Dominican Republic",
    native: "Rep\xFAblica Dominicana"
  },
  id: LocaleCode.SpanishDominicanRepublic,
  language: {
    code: LanguageCode.Spanish,
    name: "Spanish",
    native: "Espa\xF1ol"
  },
  name: "Spanish (Dominican Republic)",
  native_name: "Espa\xF1ol (Rep\xFAblica Dominicana)",
  rtl: false
});
({
  country: {
    code: CountryCode.Ecuador,
    name: "Ecuador",
    native: "Ecuador"
  },
  id: LocaleCode.SpanishEcuador,
  language: {
    code: LanguageCode.Spanish,
    name: "Spanish",
    native: "Espa\xF1ol"
  },
  name: "Spanish (Ecuador)",
  native_name: "Espa\xF1ol (Ecuador)",
  rtl: false
});
({
  country: {
    code: CountryCode.ElSalvador,
    name: "El Salvador",
    native: "El Salvador"
  },
  id: LocaleCode.SpanishElSalvador,
  language: {
    code: LanguageCode.Spanish,
    name: "Spanish",
    native: "Espa\xF1ol"
  },
  name: "Spanish (El Salvador)",
  native_name: "Espa\xF1ol (El Salvador)",
  rtl: false
});
({
  country: {
    code: CountryCode.EquatorialGuinea,
    name: "Equatorial Guinea",
    native: "Guinea Ecuatorial"
  },
  id: LocaleCode.SpanishEquatorialGuinea,
  language: {
    code: LanguageCode.Spanish,
    name: "Spanish",
    native: "Espa\xF1ol"
  },
  name: "Spanish (Equatorial Guinea)",
  native_name: "Espa\xF1ol (Guinea Ecuatorial)",
  rtl: false
});
({
  country: {
    code: CountryCode.Guatemala,
    name: "Guatemala",
    native: "Guatemala"
  },
  id: LocaleCode.SpanishGuatemala,
  language: {
    code: LanguageCode.Spanish,
    name: "Spanish",
    native: "Espa\xF1ol"
  },
  name: "Spanish (Guatemala)",
  native_name: "Espa\xF1ol (Guatemala)",
  rtl: false
});
({
  country: {
    code: CountryCode.Honduras,
    name: "Honduras",
    native: "Honduras"
  },
  id: LocaleCode.SpanishHonduras,
  language: {
    code: LanguageCode.Spanish,
    name: "Spanish",
    native: "Espa\xF1ol"
  },
  name: "Spanish (Honduras)",
  native_name: "Espa\xF1ol (Honduras)",
  rtl: false
});
({
  country: {
    code: CountryCode.Mexico,
    name: "Mexico",
    native: "M\xE9xico"
  },
  id: LocaleCode.SpanishMexico,
  language: {
    code: LanguageCode.Spanish,
    name: "Spanish",
    native: "Espa\xF1ol"
  },
  name: "Spanish (Mexico)",
  native_name: "Espa\xF1ol (M\xE9xico)",
  rtl: false
});
({
  country: {
    code: CountryCode.Nicaragua,
    name: "Nicaragua",
    native: "Nicaragua"
  },
  id: LocaleCode.SpanishNicaragua,
  language: {
    code: LanguageCode.Spanish,
    name: "Spanish",
    native: "Espa\xF1ol"
  },
  name: "Spanish (Nicaragua)",
  native_name: "Espa\xF1ol (Nicaragua)",
  rtl: false
});
({
  country: {
    code: CountryCode.Panama,
    name: "Panama",
    native: "Panam\xE1"
  },
  id: LocaleCode.SpanishPanama,
  language: {
    code: LanguageCode.Spanish,
    name: "Spanish",
    native: "Espa\xF1ol"
  },
  name: "Spanish (Panama)",
  native_name: "Espa\xF1ol (Panam\xE1)",
  rtl: false
});
({
  country: {
    code: CountryCode.Paraguay,
    name: "Paraguay",
    native: "Paraguay"
  },
  id: LocaleCode.SpanishParaguay,
  language: {
    code: LanguageCode.Spanish,
    name: "Spanish",
    native: "Espa\xF1ol"
  },
  name: "Spanish (Paraguay)",
  native_name: "Espa\xF1ol (Paraguay)",
  rtl: false
});
({
  country: {
    code: CountryCode.Peru,
    name: "Peru",
    native: "Per\xFA"
  },
  id: LocaleCode.SpanishPeru,
  language: {
    code: LanguageCode.Spanish,
    name: "Spanish",
    native: "Espa\xF1ol"
  },
  name: "Spanish (Peru)",
  native_name: "Espa\xF1ol (Per\xFA)",
  rtl: false
});
({
  country: {
    code: CountryCode.PuertoRico,
    name: "Puerto Rico",
    native: "Puerto Rico"
  },
  id: LocaleCode.SpanishPuertoRico,
  language: {
    code: LanguageCode.Spanish,
    name: "Spanish",
    native: "Espa\xF1ol"
  },
  name: "Spanish (Puerto Rico)",
  native_name: "Espa\xF1ol (Puerto Rico)",
  rtl: false
});
({
  country: {
    code: CountryCode.Uruguay,
    name: "Uruguay",
    native: "Uruguay"
  },
  id: LocaleCode.SpanishUruguay,
  language: {
    code: LanguageCode.Spanish,
    name: "Spanish",
    native: "Espa\xF1ol"
  },
  name: "Spanish (Uruguay)",
  native_name: "Espa\xF1ol (Uruguay)",
  rtl: false
});
({
  country: {
    code: CountryCode.Venezuela,
    name: "Venezuela",
    native: "Venezuela"
  },
  id: LocaleCode.SpanishVenezuela,
  language: {
    code: LanguageCode.Spanish,
    name: "Spanish",
    native: "Espa\xF1ol"
  },
  name: "Spanish (Venezuela)",
  native_name: "Espa\xF1ol (Venezuela)",
  rtl: false
});
({
  country: {
    code: CountryCode.SouthAfrica,
    name: "South Africa",
    native: "South Africa"
  },
  id: LocaleCode.SutuSouthAfrica,
  language: {
    code: LanguageCode.Sutu,
    name: "Sutu",
    native: "Sesotho"
  },
  name: "Sutu (South Africa)",
  native_name: "Sesotho (Afrika Borwa)",
  rtl: false
});
({
  id: LocaleCode.Swahili,
  language: {
    code: LanguageCode.Swahili,
    name: "Swahili",
    native: "Kiswahili"
  },
  name: "Swahili",
  native_name: "Kiswahili",
  rtl: false
});
({
  country: {
    code: CountryCode.Kenya,
    name: "Kenya",
    native: "Kenya"
  },
  id: LocaleCode.SwahiliKenya,
  language: {
    code: LanguageCode.Swahili,
    name: "Swahili",
    native: "Kiswahili"
  },
  name: "Swahili (Kenya)",
  native_name: "Kiswahili (Kenya)",
  rtl: false
});
({
  id: LocaleCode.Swedish,
  language: {
    code: LanguageCode.Swedish,
    name: "Swedish",
    native: "Svenska"
  },
  name: "Swedish",
  native_name: "Svenska",
  rtl: false
});
({
  country: {
    code: CountryCode.Finland,
    name: "Finland",
    native: "Suomi"
  },
  id: LocaleCode.SwedishFinland,
  language: {
    code: LanguageCode.Swedish,
    name: "Swedish",
    native: "Svenska"
  },
  name: "Swedish (Finland)",
  native_name: "Svenska (Finland)",
  rtl: false
});
({
  country: {
    code: CountryCode.Sweden,
    name: "Sweden",
    native: "Sverige"
  },
  id: LocaleCode.SwedishSweden,
  language: {
    code: LanguageCode.Swedish,
    name: "Swedish",
    native: "Svenska"
  },
  name: "Swedish (Sweden)",
  native_name: "Svenska (Sverige)",
  rtl: false
});
({
  id: LocaleCode.Syriac,
  language: {
    code: LanguageCode.Syriac,
    name: "Syriac",
    native: "\u0723\u0718\u072A\u071D\u071D\u0710"
  },
  name: "Syriac",
  native_name: "\u0723\u0718\u072A\u071D\u071D\u0710",
  rtl: true
});
({
  country: {
    code: CountryCode.Syria,
    name: "Syria",
    native: "\u0633\u0648\u0631\u064A\u0627"
  },
  id: LocaleCode.SyriacSyria,
  language: {
    code: LanguageCode.Syriac,
    name: "Syriac",
    native: "\u0723\u0718\u072A\u071D\u071D\u0710"
  },
  name: "Syriac (Syria)",
  native_name: "\u0723\u0718\u072A\u071D\u071D\u0710 (\u0633\u0648\u0631\u064A\u0627)",
  rtl: true
});
({
  id: LocaleCode.Tajik,
  language: {
    code: LanguageCode.Tajik,
    name: "Tajik",
    native: "\u0422\u043E\u04B7\u0438\u043A\u04E3"
  },
  name: "Tajik",
  native_name: "\u0422\u043E\u04B7\u0438\u043A\u04E3",
  rtl: false
});
({
  country: {
    code: CountryCode.Tajikistan,
    name: "Tajikistan",
    native: "\u0422\u043E\u04B7\u0438\u043A\u0438\u0441\u0442\u043E\u043D"
  },
  id: LocaleCode.TajikTajikistan,
  language: {
    code: LanguageCode.Tajik,
    name: "Tajik",
    native: "\u0422\u043E\u04B7\u0438\u043A\u04E3"
  },
  name: "Tajik (Tajikistan)",
  native_name: "\u0422\u043E\u04B7\u0438\u043A\u04E3 (\u0422\u043E\u04B7\u0438\u043A\u0438\u0441\u0442\u043E\u043D)",
  rtl: false
});
({
  id: LocaleCode.Tagalog,
  language: {
    code: LanguageCode.Tagalog,
    name: "Tagalog",
    native: "Tagalog"
  },
  name: "Tagalog",
  native_name: "Tagalog",
  rtl: false
});
({
  country: {
    code: CountryCode.Philippines,
    name: "Philippines",
    native: "Pilipinas"
  },
  id: LocaleCode.TagalogPhilippines,
  language: {
    code: LanguageCode.Tagalog,
    name: "Tagalog",
    native: "Tagalog"
  },
  name: "Tagalog (Philippines)",
  native_name: "Tagalog (Pilipinas)",
  rtl: false
});
({
  id: LocaleCode.Tamil,
  language: {
    code: LanguageCode.Tamil,
    name: "Tamil",
    native: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"
  },
  name: "Tamil",
  native_name: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD",
  rtl: false
});
({
  country: {
    code: CountryCode.India,
    name: "India",
    native: "\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE"
  },
  id: LocaleCode.TamilIndia,
  language: {
    code: LanguageCode.Tamil,
    name: "Tamil",
    native: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"
  },
  name: "Tamil (India)",
  native_name: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD (\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE)",
  rtl: false
});
({
  id: LocaleCode.Telugu,
  language: {
    code: LanguageCode.Telugu,
    name: "Telugu",
    native: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41"
  },
  name: "Telugu",
  native_name: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41",
  rtl: false
});
({
  country: {
    code: CountryCode.India,
    name: "India",
    native: "\u0C2D\u0C3E\u0C30\u0C24\u0C26\u0C47\u0C36\u0C02"
  },
  id: LocaleCode.TeluguIndia,
  language: {
    code: LanguageCode.Telugu,
    name: "Telugu",
    native: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41"
  },
  name: "Telugu (India)",
  native_name: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41 (\u0C2D\u0C3E\u0C30\u0C24\u0C26\u0C47\u0C36\u0C02)",
  rtl: false
});
({
  id: LocaleCode.Thai,
  language: {
    code: LanguageCode.Thai,
    name: "Thai",
    native: "\u0E44\u0E17\u0E22"
  },
  name: "Thai",
  native_name: "\u0E44\u0E17\u0E22",
  rtl: false
});
({
  country: {
    code: CountryCode.Thailand,
    name: "Thailand",
    native: "\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E44\u0E17\u0E22"
  },
  id: LocaleCode.ThaiThailand,
  language: {
    code: LanguageCode.Thai,
    name: "Thai",
    native: "\u0E44\u0E17\u0E22"
  },
  name: "Thai (Thailand)",
  native_name: "\u0E44\u0E17\u0E22 (\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E44\u0E17\u0E22)",
  rtl: false
});
({
  id: LocaleCode.Tibetan,
  language: {
    code: LanguageCode.Tibetan,
    name: "Tibetan",
    native: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42"
  },
  name: "Tibetan",
  native_name: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42",
  rtl: false
});
({
  country: {
    code: CountryCode.China,
    name: "China",
    native: "\u4E2D\u56FD"
  },
  id: LocaleCode.TibetanChina,
  language: {
    code: LanguageCode.Tibetan,
    name: "Tibetan",
    native: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42"
  },
  name: "Tibetan (China)",
  native_name: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42 (\u0F62\u0F92\u0FB1\u0F0B\u0F53\u0F42)",
  rtl: false
});
({
  country: {
    code: CountryCode.Bhutan,
    name: "Bhutan",
    native: "\u0F60\u0F56\u0FB2\u0F74\u0F42\u0F0B\u0F61\u0F74\u0F63\u0F0B\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F63\u0F7A\u0F53\u0F4C\u0F0D"
  },
  id: LocaleCode.TibetanBhutan,
  language: {
    code: LanguageCode.Tibetan,
    name: "Tibetan",
    native: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42"
  },
  name: "Tibetan (Bhutan)",
  native_name: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42 (\u0F60\u0F56\u0FB2\u0F74\u0F42\u0F0B\u0F61\u0F74\u0F63\u0F0B\u0F66\u0FA4\u0FB1\u0F72\u0F0B\u0F63\u0F7A\u0F53\u0F4C\u0F0D)",
  rtl: false
});
({
  country: {
    code: CountryCode.India,
    name: "India",
    native: "\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE"
  },
  id: LocaleCode.TibetanIndia,
  language: {
    code: LanguageCode.Tibetan,
    name: "Tibetan",
    native: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42"
  },
  name: "Tibetan (India)",
  native_name: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42 (\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE)",
  rtl: false
});
({
  id: LocaleCode.Tsonga,
  language: {
    code: LanguageCode.Tsonga,
    name: "Tsonga",
    native: "Xitsonga"
  },
  name: "Tsonga",
  native_name: "Xitsonga",
  rtl: false
});
({
  id: LocaleCode.Tswana,
  language: {
    code: LanguageCode.Tswana,
    name: "Tswana",
    native: "Setswana"
  },
  name: "Tswana",
  native_name: "Setswana",
  rtl: false
});
({
  country: {
    code: CountryCode.SouthAfrica,
    name: "South Africa",
    native: "South Africa"
  },
  id: LocaleCode.TswanaSouthAfrica,
  language: {
    code: LanguageCode.Tswana,
    name: "Tswana",
    native: "Setswana"
  },
  name: "Tswana (South Africa)",
  native_name: "Setswana (South Africa)",
  rtl: false
});
({
  id: LocaleCode.Turkish,
  language: {
    code: LanguageCode.Turkish,
    name: "Turkish",
    native: "T\xFCrk\xE7e"
  },
  name: "Turkish",
  native_name: "T\xFCrk\xE7e",
  rtl: false
});
({
  country: {
    code: CountryCode.Turkey,
    name: "Turkey",
    native: "T\xFCrkiye"
  },
  id: LocaleCode.TurkishTurkey,
  language: {
    code: LanguageCode.Turkish,
    name: "Turkish",
    native: "T\xFCrk\xE7e"
  },
  name: "Turkish (Turkey)",
  native_name: "T\xFCrk\xE7e (T\xFCrkiye)",
  rtl: false
});
({
  id: LocaleCode.Ukrainian,
  language: {
    code: LanguageCode.Ukrainian,
    name: "Ukrainian",
    native: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"
  },
  name: "Ukrainian",
  native_name: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
  rtl: false
});
({
  country: {
    code: CountryCode.Ukraine,
    name: "Ukraine",
    native: "\u0423\u043A\u0440\u0430\u0457\u043D\u0430"
  },
  id: LocaleCode.UkrainianUkraine,
  language: {
    code: LanguageCode.Ukrainian,
    name: "Ukrainian",
    native: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"
  },
  name: "Ukrainian (Ukraine)",
  native_name: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 (\u0423\u043A\u0440\u0430\u0457\u043D\u0430)",
  rtl: false
});
({
  id: LocaleCode.Urdu,
  language: {
    code: LanguageCode.Urdu,
    name: "Urdu",
    native: "\u0627\u0631\u062F\u0648"
  },
  name: "Urdu",
  native_name: "\u0627\u0631\u062F\u0648",
  rtl: true
});
({
  country: {
    code: CountryCode.Afghanistan,
    name: "Afghanistan",
    native: "\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646"
  },
  id: LocaleCode.UrduAfghanistan,
  language: {
    code: LanguageCode.Urdu,
    name: "Urdu",
    native: "\u0627\u0631\u062F\u0648"
  },
  name: "Urdu (Afghanistan)",
  native_name: "\u0627\u0631\u062F\u0648 (\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646)",
  rtl: true
});
({
  country: {
    code: CountryCode.India,
    name: "India",
    native: "\u092D\u093E\u0930\u0924"
  },
  id: LocaleCode.UrduIndia,
  language: {
    code: LanguageCode.Urdu,
    name: "Urdu",
    native: "\u0627\u0631\u062F\u0648"
  },
  name: "Urdu (India)",
  native_name: "\u0627\u0631\u062F\u0648 (\u092D\u093E\u0930\u0924)",
  rtl: true
});
({
  country: {
    code: CountryCode.Pakistan,
    name: "Pakistan",
    native: "\u067E\u0627\u06A9\u0633\u062A\u0627\u0646"
  },
  id: LocaleCode.UrduPakistan,
  language: {
    code: LanguageCode.Urdu,
    name: "Urdu",
    native: "\u0627\u0631\u062F\u0648"
  },
  name: "Urdu (Pakistan)",
  native_name: "\u0627\u0631\u062F\u0648 (\u067E\u0627\u06A9\u0633\u062A\u0627\u0646)",
  rtl: true
});
({
  id: LocaleCode.Uzbek,
  language: {
    code: LanguageCode.Uzbek,
    name: "Uzbek",
    native: "O\u02BBzbekcha"
  },
  name: "Uzbek",
  native_name: "O\u02BBzbekcha",
  rtl: false
});
({
  country: {
    code: CountryCode.Uzbekistan,
    name: "Uzbekistan",
    native: "O\u02BBzbekiston"
  },
  id: LocaleCode.UzbekUzbekistan,
  language: {
    code: LanguageCode.Uzbek,
    name: "Uzbek",
    native: "O\u02BBzbekcha"
  },
  name: "Uzbek (Latin, Uzbekistan)",
  native_name: "O\u02BBzbekcha (O\u02BBzbekiston)",
  rtl: false
});
({
  country: {
    code: CountryCode.Uzbekistan,
    name: "Uzbekistan",
    native: "\u040E\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u043E\u043D"
  },
  id: LocaleCode.UzbekCyrillic,
  language: {
    code: LanguageCode.Uzbek,
    name: "Uzbek",
    native: "\u040E\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u043E\u043D"
  },
  name: "Uzbek (Cyrillic)",
  native_name: "\u040E\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u043E\u043D (\u040E\u0437\u0431\u0435\u043A\u0438\u0441\u0442\u043E\u043D)",
  rtl: false
});
({
  id: LocaleCode.Vietnamese,
  language: {
    code: LanguageCode.Vietnamese,
    name: "Vietnamese",
    native: "Ti\u1EBFng Vi\u1EC7t"
  },
  name: "Vietnamese",
  native_name: "Ti\u1EBFng Vi\u1EC7t",
  rtl: false
});
({
  country: {
    code: CountryCode.Vietnam,
    name: "Vietnam",
    native: "Vi\u1EC7t Nam"
  },
  id: LocaleCode.VietnameseVietnam,
  language: {
    code: LanguageCode.Vietnamese,
    name: "Vietnamese",
    native: "Ti\u1EBFng Vi\u1EC7t"
  },
  name: "Vietnamese (Vietnam)",
  native_name: "Ti\u1EBFng Vi\u1EC7t (Vi\u1EC7t Nam)",
  rtl: false
});
({
  id: LocaleCode.Welsh,
  language: {
    code: LanguageCode.Welsh,
    name: "Welsh",
    native: "Cymraeg"
  },
  name: "Welsh",
  native_name: "Cymraeg",
  rtl: false
});
({
  country: {
    code: CountryCode.UnitedKingdom,
    name: "United Kingdom",
    native: "United Kingdom"
  },
  id: LocaleCode.WelshUnitedKingdom,
  language: {
    code: LanguageCode.Welsh,
    name: "Welsh",
    native: "Cymraeg"
  },
  name: "Welsh (United Kingdom)",
  native_name: "Cymraeg (United Kingdom)",
  rtl: false
});
({
  id: LocaleCode.Xhosa,
  language: {
    code: LanguageCode.Xhosa,
    name: "Xhosa",
    native: "isiXhosa"
  },
  name: "Xhosa",
  native_name: "isiXhosa",
  rtl: false
});
({
  country: {
    code: CountryCode.SouthAfrica,
    name: "South Africa",
    native: "South Africa"
  },
  id: LocaleCode.XhosaSouthAfrica,
  language: {
    code: LanguageCode.Xhosa,
    name: "Xhosa",
    native: "isiXhosa"
  },
  name: "Xhosa (South Africa)",
  native_name: "isiXhosa (South Africa)",
  rtl: false
});
({
  id: LocaleCode.Yiddish,
  language: {
    code: LanguageCode.Yiddish,
    name: "Yiddish",
    native: "\u05D9\u05D9\u05B4\u05D3\u05D9\u05E9"
  },
  name: "Yiddish",
  native_name: "\u05D9\u05D9\u05B4\u05D3\u05D9\u05E9",
  rtl: false
});
({
  id: LocaleCode.Yoruba,
  language: {
    code: LanguageCode.Yoruba,
    name: "Yoruba",
    native: "Yor\xF9b\xE1"
  },
  name: "Yoruba",
  native_name: "Yor\xF9b\xE1",
  rtl: false
});
({
  country: {
    code: CountryCode.Nigeria,
    name: "Nigeria",
    native: "Nigeria"
  },
  id: LocaleCode.YorubaNigeria,
  language: {
    code: LanguageCode.Yoruba,
    name: "Yoruba",
    native: "Yor\xF9b\xE1"
  },
  name: "Yoruba (Nigeria)",
  native_name: "Yor\xF9b\xE1 (Nigeria)",
  rtl: false
});
({
  id: LocaleCode.Zulu,
  language: {
    code: LanguageCode.Zulu,
    name: "Zulu",
    native: "isiZulu"
  },
  name: "Zulu",
  native_name: "isiZulu",
  rtl: false
});
({
  country: {
    code: CountryCode.SouthAfrica,
    name: "South Africa",
    native: "South Africa"
  },
  id: LocaleCode.ZuluSouthAfrica,
  language: {
    code: LanguageCode.Zulu,
    name: "Zulu",
    native: "isiZulu"
  },
  name: "Zulu (South Africa)",
  native_name: "isiZulu (South Africa)",
  rtl: false
});

({
  id: TimezoneRegions.AfricaAbidjan,
  name: "Africa/Abidjan",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.CoordinatedUniversalTime
});
({
  id: TimezoneRegions.AfricaAccra,
  name: "Africa/Accra",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.CoordinatedUniversalTime
});
({
  id: TimezoneRegions.AfricaAddisAbaba,
  name: "Africa/Addis_Ababa",
  offset: TimezoneOffset.UTC_PLUS_3,
  timezone: Timezones.EastAfricaTime
});
({
  id: TimezoneRegions.AfricaAlgiers,
  name: "Africa/Algiers",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.AfricaAsmara,
  name: "Africa/Asmara",
  offset: TimezoneOffset.UTC_PLUS_3,
  timezone: Timezones.EastAfricaTime
});
({
  id: TimezoneRegions.AfricaBamako,
  name: "Africa/Bamako",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.CoordinatedUniversalTime
});
({
  id: TimezoneRegions.AfricaBangui,
  name: "Africa/Bangui",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.WestAfricaTime
});
({
  id: TimezoneRegions.AfricaBanjul,
  name: "Africa/Banjul",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.CoordinatedUniversalTime
});
({
  id: TimezoneRegions.AfricaBissau,
  name: "Africa/Bissau",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.CoordinatedUniversalTime
});
({
  id: TimezoneRegions.AfricaBlantyre,
  name: "Africa/Blantyre",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.CentralAfricaTime
});
({
  id: TimezoneRegions.AfricaBrazzaville,
  name: "Africa/Brazzaville",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.WestAfricaTime
});
({
  id: TimezoneRegions.AfricaBujumbura,
  name: "Africa/Bujumbura",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.CentralAfricaTime
});
({
  id: TimezoneRegions.AfricaCairo,
  name: "Africa/Cairo",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.AfricaCasablanca,
  name: "Africa/Casablanca",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.WesternEuropeanTime
});
({
  id: TimezoneRegions.AfricaCeuta,
  name: "Africa/Ceuta",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.AfricaConakry,
  name: "Africa/Conakry",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.CoordinatedUniversalTime
});
({
  id: TimezoneRegions.AfricaDakar,
  name: "Africa/Dakar",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.CoordinatedUniversalTime
});
({
  id: TimezoneRegions.AfricaDarEsSalaam,
  name: "Africa/Dar_es_Salaam",
  offset: TimezoneOffset.UTC_PLUS_3,
  timezone: Timezones.EastAfricaTime
});
({
  id: TimezoneRegions.AfricaDjibouti,
  name: "Africa/Djibouti",
  offset: TimezoneOffset.UTC_PLUS_3,
  timezone: Timezones.EastAfricaTime
});
({
  id: TimezoneRegions.AfricaDouala,
  name: "Africa/Douala",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.WestAfricaTime
});
({
  id: TimezoneRegions.AfricaElAaiun,
  name: "Africa/El_Aaiun",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.WestAfricaTime
});
({
  id: TimezoneRegions.AfricaFreetown,
  name: "Africa/Freetown",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.CoordinatedUniversalTime
});
({
  id: TimezoneRegions.AfricaGaborone,
  name: "Africa/Gaborone",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.CentralAfricaTime
});
({
  id: TimezoneRegions.AfricaHarare,
  name: "Africa/Harare",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.CentralAfricaTime
});
({
  id: TimezoneRegions.AfricaJohannesburg,
  name: "Africa/Johannesburg",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.SouthAfricanStandardTime
});
({
  id: TimezoneRegions.AfricaJuba,
  name: "Africa/Juba",
  offset: TimezoneOffset.UTC_PLUS_3,
  timezone: Timezones.EastAfricaTime
});
({
  id: TimezoneRegions.AfricaKampala,
  name: "Africa/Kampala",
  offset: TimezoneOffset.UTC_PLUS_3,
  timezone: Timezones.EastAfricaTime
});
({
  id: TimezoneRegions.AfricaKhartoum,
  name: "Africa/Khartoum",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.EastAfricaTime
});
({
  id: TimezoneRegions.AfricaKigali,
  name: "Africa/Kigali",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.CentralAfricaTime
});
({
  id: TimezoneRegions.AfricaKinshasa,
  name: "Africa/Kinshasa",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.WestAfricaTime
});
({
  id: TimezoneRegions.AfricaLagos,
  name: "Africa/Lagos",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.WestAfricaTime
});
({
  id: TimezoneRegions.AfricaLibreville,
  name: "Africa/Libreville",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.WestAfricaTime
});
({
  id: TimezoneRegions.AfricaLome,
  name: "Africa/Lome",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.CoordinatedUniversalTime
});
({
  id: TimezoneRegions.AfricaLuanda,
  name: "Africa/Luanda",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.WestAfricaTime
});
({
  id: TimezoneRegions.AfricaLubumbashi,
  name: "Africa/Lubumbashi",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.CentralAfricaTime
});
({
  id: TimezoneRegions.AfricaLusaka,
  name: "Africa/Lusaka",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.CentralAfricaTime
});
({
  id: TimezoneRegions.AfricaMalabo,
  name: "Africa/Malabo",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.WestAfricaTime
});
({
  id: TimezoneRegions.AfricaMaputo,
  name: "Africa/Maputo",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.CentralAfricaTime
});
({
  id: TimezoneRegions.AfricaMaseru,
  name: "Africa/Maseru",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.SouthAfricanStandardTime
});
({
  id: TimezoneRegions.AfricaMbabane,
  name: "Africa/Mbabane",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.SouthAfricanStandardTime
});
({
  id: TimezoneRegions.AfricaMogadishu,
  name: "Africa/Mogadishu",
  offset: TimezoneOffset.UTC_PLUS_3,
  timezone: Timezones.EastAfricaTime
});
({
  id: TimezoneRegions.AfricaMonrovia,
  name: "Africa/Monrovia",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.CoordinatedUniversalTime
});
({
  id: TimezoneRegions.AfricaNairobi,
  name: "Africa/Nairobi",
  offset: TimezoneOffset.UTC_PLUS_3,
  timezone: Timezones.EastAfricaTime
});
({
  id: TimezoneRegions.AfricaNdjamena,
  name: "Africa/Ndjamena",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.WestAfricaTime
});
({
  id: TimezoneRegions.AfricaNiamey,
  name: "Africa/Niamey",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.WestAfricaTime
});
({
  id: TimezoneRegions.AfricaNouakchott,
  name: "Africa/Nouakchott",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.GreenwichMeanTime
});
({
  id: TimezoneRegions.AfricaOuagadougou,
  name: "Africa/Ouagadougou",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.CoordinatedUniversalTime
});
({
  id: TimezoneRegions.AfricaPortoNovo,
  name: "Africa/Porto-Novo",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.WestAfricaTime
});
({
  id: TimezoneRegions.AfricaSaoTome,
  name: "Africa/SaoTome",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.CoordinatedUniversalTime
});
({
  id: TimezoneRegions.AfricaTripoli,
  name: "Africa/Tripoli",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.CoordinatedUniversalTime
});
({
  id: TimezoneRegions.AfricaTunis,
  name: "Africa/Tunis",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.CoordinatedUniversalTime
});
({
  id: TimezoneRegions.AfricaWindhoek,
  name: "Africa/Windhoek",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.WestAfricaTime
});
({
  id: TimezoneRegions.AmericaAdak,
  name: "America/Adak",
  offset: TimezoneOffset.UTC_PLUS_10,
  timezone: Timezones.HawaiiAleutianStandardTime
});
({
  id: TimezoneRegions.AmericaAnchorage,
  name: "America/Anchorage",
  offset: TimezoneOffset.UTC_PLUS_9,
  timezone: Timezones.AlaskaStandardTime
});
({
  id: TimezoneRegions.AmericaAnguilla,
  name: "America/Anguilla",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaAntigua,
  name: "America/Antigua",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaAraguaina,
  name: "America/Araguaina",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.BrasiliaTime
});
({
  id: TimezoneRegions.AmericaArgentinaBuenosAires,
  name: "America/Argentina/Buenos_Aires",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.ArgentinaTime
});
({
  id: TimezoneRegions.AmericaArgentinaCatamarca,
  name: "America/Argentina/Catamarca",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.ArgentinaTime
});
({
  id: TimezoneRegions.AmericaArgentinaCordoba,
  name: "America/Argentina/Cordoba",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.ArgentinaTime
});
({
  id: TimezoneRegions.AmericaArgentinaJujuy,
  name: "America/Argentina/Jujuy",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.ArgentinaTime
});
({
  id: TimezoneRegions.AmericaArgentinaLaRioja,
  name: "America/Argentina/La_Rioja",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.ArgentinaTime
});
({
  id: TimezoneRegions.AmericaArgentinaMendoza,
  name: "America/Argentina/Mendoza",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.ArgentinaTime
});
({
  id: TimezoneRegions.AmericaArgentinaRioGallegos,
  name: "America/Argentina/Rio_Gallegos",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.ArgentinaTime
});
({
  id: TimezoneRegions.AmericaArgentinaSalta,
  name: "America/Argentina/Salta",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.ArgentinaTime
});
({
  id: TimezoneRegions.AmericaArgentinaSanJuan,
  name: "America/Argentina/San_Juan",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.ArgentinaTime
});
({
  id: TimezoneRegions.AmericaArgentinaSanLuis,
  name: "America/Argentina/San_Luis",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.ArgentinaTime
});
({
  id: TimezoneRegions.AmericaArgentinaTucuman,
  name: "America/Argentina/Tucuman",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.ArgentinaTime
});
({
  id: TimezoneRegions.AmericaArgentinaUshuaia,
  name: "America/Argentina/Ushuaia",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.ArgentinaTime
});
({
  id: TimezoneRegions.AmericaAruba,
  name: "America/Aruba",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaAsuncion,
  name: "America/Asuncion",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.ParaguayTime
});
({
  id: TimezoneRegions.AmericaAtikokan,
  name: "America/Atikokan",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.EasternStandardTime
});
({
  id: TimezoneRegions.AmericaAtka,
  name: "America/Atka",
  offset: TimezoneOffset.UTC_MINUS_10,
  timezone: Timezones.HawaiiAleutianStandardTime
});
({
  id: TimezoneRegions.AmericaBahia,
  name: "America/Bahia",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.BrasiliaTime
});
({
  id: TimezoneRegions.AmericaBahiaBanderas,
  name: "America/Bahia_Banderas",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AmericaBarbados,
  name: "America/Barbados",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaBelem,
  name: "America/Belem",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.BrasiliaTime
});
({
  id: TimezoneRegions.AmericaBelize,
  name: "America/Belize",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AmericaBlancSablon,
  name: "America/Blanc-Sablon",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaBoaVista,
  name: "America/Boa_Vista",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AmazonTime
});
({
  id: TimezoneRegions.AmericaBogota,
  name: "America/Bogota",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.ColombiaTime
});
({
  id: TimezoneRegions.AmericaBoise,
  name: "America/Boise",
  offset: TimezoneOffset.UTC_MINUS_7,
  timezone: Timezones.MountainStandardTime
});
({
  id: TimezoneRegions.AmericaCambridgeBay,
  name: "America/Cambridge_Bay",
  offset: TimezoneOffset.UTC_MINUS_7,
  timezone: Timezones.MountainStandardTime
});
({
  id: TimezoneRegions.AmericaCampoGrande,
  name: "America/Campo_Grande",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AmazonTime
});
({
  id: TimezoneRegions.AmericaCancun,
  name: "America/Cancun",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.EasternStandardTime
});
({
  id: TimezoneRegions.AmericaCaracas,
  name: "America/Caracas",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.VenezuelaStandardTime
});
({
  id: TimezoneRegions.AmericaCayenne,
  name: "America/Cayenne",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.FrenchGuianaTime
});
({
  id: TimezoneRegions.AmericaCayman,
  name: "America/Cayman",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaChicago,
  name: "America/Chicago",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AmericaChihuahua,
  name: "America/Chihuahua",
  offset: TimezoneOffset.UTC_MINUS_7,
  timezone: Timezones.MountainStandardTime
});
({
  id: TimezoneRegions.AmericaCoralHarbour,
  name: "America/Coral_Harbour",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.EasternStandardTime
});
({
  id: TimezoneRegions.AmericaCordoba,
  name: "America/Cordoba",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.ArgentinaTime
});
({
  id: TimezoneRegions.AmericaCostaRica,
  name: "America/Costa_Rica",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AmericaCreston,
  name: "America/Creston",
  offset: TimezoneOffset.UTC_MINUS_7,
  timezone: Timezones.MountainStandardTime
});
({
  id: TimezoneRegions.AmericaCuiaba,
  name: "America/Cuiaba",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AmazonTime
});
({
  id: TimezoneRegions.AmericaCuracao,
  name: "America/Curacao",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaDanmarkshavn,
  name: "America/Danmarkshavn",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.GreenwichMeanTime
});
({
  id: TimezoneRegions.AmericaDawson,
  name: "America/Dawson",
  offset: TimezoneOffset.UTC_MINUS_8,
  timezone: Timezones.PacificStandardTime
});
({
  id: TimezoneRegions.AmericaDawsonCreek,
  name: "America/Dawson_Creek",
  offset: TimezoneOffset.UTC_MINUS_8,
  timezone: Timezones.PacificStandardTime
});
({
  id: TimezoneRegions.AmericaDenver,
  name: "America/Denver",
  offset: TimezoneOffset.UTC_MINUS_7,
  timezone: Timezones.MountainStandardTime
});
({
  id: TimezoneRegions.AmericaDetroit,
  name: "America/Detroit",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.EasternStandardTime
});
({
  id: TimezoneRegions.AmericaDominica,
  name: "America/Dominica",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaEdmonton,
  name: "America/Edmonton",
  offset: TimezoneOffset.UTC_MINUS_7,
  timezone: Timezones.MountainStandardTime
});
({
  id: TimezoneRegions.AmericaEirunepe,
  name: "America/Eirunepe",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.AcreTime
});
({
  id: TimezoneRegions.AmericaElSalvador,
  name: "America/El_Salvador",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AmericaFortaleza,
  name: "America/Fortaleza",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.BrasiliaTime
});
({
  id: TimezoneRegions.AmericaGlaceBay,
  name: "America/Glace_Bay",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaGodthab,
  name: "America/Godthab",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.WestGreenlandTime
});
({
  id: TimezoneRegions.AmericaGooseBay,
  name: "America/Goose_Bay",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaGrandTurk,
  name: "America/Grand_Turk",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaGrenada,
  name: "America/Grenada",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaGuadeloupe,
  name: "America/Guadeloupe",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaGuatemala,
  name: "America/Guatemala",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AmericaGuayaquil,
  name: "America/Guayaquil",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.EcuadorTime
});
({
  id: TimezoneRegions.AmericaGuyana,
  name: "America/Guyana",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaHalifax,
  name: "America/Halifax",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaHavana,
  name: "America/Havana",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.CubaStandardTime
});
({
  id: TimezoneRegions.AmericaHermosillo,
  name: "America/Hermosillo",
  offset: TimezoneOffset.UTC_MINUS_7,
  timezone: Timezones.MountainStandardTime
});
({
  id: TimezoneRegions.AmericaIndianaIndianapolis,
  name: "America/Indiana/Indianapolis",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.EasternStandardTime
});
({
  id: TimezoneRegions.AmericaIndianaKnox,
  name: "America/Indiana/Knox",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AmericaIndianaMarengo,
  name: "America/Indiana/Marengo",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.EasternStandardTime
});
({
  id: TimezoneRegions.AmericaIndianaPetersburg,
  name: "America/Indiana/Petersburg",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.EasternStandardTime
});
({
  id: TimezoneRegions.AmericaIndianaTellCity,
  name: "America/Indiana/Tell_City",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AmericaIndianaVevay,
  name: "America/Indiana/Vevay",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.EasternStandardTime
});
({
  id: TimezoneRegions.AmericaIndianaVincennes,
  name: "America/Indiana/Vincennes",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.EasternStandardTime
});
({
  id: TimezoneRegions.AmericaIndianaWinamac,
  name: "America/Indiana/Winamac",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.EasternStandardTime
});
({
  id: TimezoneRegions.AmericaInuvik,
  name: "America/Inuvik",
  offset: TimezoneOffset.UTC_MINUS_7,
  timezone: Timezones.MountainStandardTime
});
({
  id: TimezoneRegions.AmericaIqaluit,
  name: "America/Iqaluit",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.EasternStandardTime
});
({
  id: TimezoneRegions.AmericaJamaica,
  name: "America/Jamaica",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaJuneau,
  name: "America/Juneau",
  offset: TimezoneOffset.UTC_MINUS_9,
  timezone: Timezones.AlaskaStandardTime
});
({
  id: TimezoneRegions.AmericaKentuckyLouisville,
  name: "America/Kentucky/Louisville",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.EasternStandardTime
});
({
  id: TimezoneRegions.AmericaKentuckyMonticello,
  name: "America/Kentucky/Monticello",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.EasternStandardTime
});
({
  id: TimezoneRegions.AmericaKralendijk,
  name: "America/Kralendijk",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaLaPaz,
  name: "America/La_Paz",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.BoliviaTime
});
({
  id: TimezoneRegions.AmericaLima,
  name: "America/Lima",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.PeruTime
});
({
  id: TimezoneRegions.AmericaLosAngeles,
  name: "America/Los_Angeles",
  offset: TimezoneOffset.UTC_MINUS_8,
  timezone: Timezones.PacificStandardTime
});
({
  id: TimezoneRegions.AmericaLouisville,
  name: "America/Louisville",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.EasternStandardTime
});
({
  id: TimezoneRegions.AmericaLowerPrinces,
  name: "America/Lower_Princes",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaMaceio,
  name: "America/Maceio",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.BrasiliaTime
});
({
  id: TimezoneRegions.AmericaManagua,
  name: "America/Managua",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AmericaManaus,
  name: "America/Manaus",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AmazonTime
});
({
  id: TimezoneRegions.AmericaMarigot,
  name: "America/Marigot",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaMartinique,
  name: "America/Martinique",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaMatamoros,
  name: "America/Matamoros",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AmericaMazatlan,
  name: "America/Mazatlan",
  offset: TimezoneOffset.UTC_MINUS_7,
  timezone: Timezones.MountainStandardTime
});
({
  id: TimezoneRegions.AmericaMenominee,
  name: "America/Menominee",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AmericaMerida,
  name: "America/Merida",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AmericaMetlakatla,
  name: "America/Metlakatla",
  offset: TimezoneOffset.UTC_MINUS_9,
  timezone: Timezones.AlaskaStandardTime
});
({
  id: TimezoneRegions.AmericaMexicoCity,
  name: "America/Mexico_City",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AmericaMiquelon,
  name: "America/Miquelon",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.SaintPierreAndMiquelonStandardTime
});
({
  id: TimezoneRegions.AmericaMoncton,
  name: "America/Moncton",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaMonterrey,
  name: "America/Monterrey",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AmericaMontevideo,
  name: "America/Montevideo",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.UruguayStandardTime
});
({
  id: TimezoneRegions.AmericaMontreal,
  name: "America/Montreal",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.EasternStandardTime
});
({
  id: TimezoneRegions.AmericaMontserrat,
  name: "America/Montserrat",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaNassau,
  name: "America/Nassau",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.EasternStandardTime
});
({
  id: TimezoneRegions.AmericaNewYork,
  name: "America/New_York",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.EasternStandardTime
});
({
  id: TimezoneRegions.AmericaNipigon,
  name: "America/Nipigon",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.EasternStandardTime
});
({
  id: TimezoneRegions.AmericaNome,
  name: "America/Nome",
  offset: TimezoneOffset.UTC_MINUS_9,
  timezone: Timezones.AlaskaStandardTime
});
({
  id: TimezoneRegions.AmericaNoronha,
  name: "America/Noronha",
  offset: TimezoneOffset.UTC_MINUS_2,
  timezone: Timezones.FernandoDeNoronhaTime
});
({
  id: TimezoneRegions.AmericaNorthDakotaBeulah,
  name: "America/North_Dakota/Beulah",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AmericaNorthDakotaCenter,
  name: "America/North_Dakota/Center",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AmericaNorthDakotaNewSalem,
  name: "America/North_Dakota/New_Salem",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AmericaOjinaga,
  name: "America/Ojinaga",
  offset: TimezoneOffset.UTC_MINUS_7,
  timezone: Timezones.MountainStandardTime
});
({
  id: TimezoneRegions.AmericaPanama,
  name: "America/Panama",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.EasternStandardTime
});
({
  id: TimezoneRegions.AmericaPangnirtung,
  name: "America/Pangnirtung",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.EasternStandardTime
});
({
  id: TimezoneRegions.AmericaParamaribo,
  name: "America/Paramaribo",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.SurinameTime
});
({
  id: TimezoneRegions.AmericaPhoenix,
  name: "America/Phoenix",
  offset: TimezoneOffset.UTC_MINUS_7,
  timezone: Timezones.MountainStandardTime
});
({
  id: TimezoneRegions.AmericaPortAuPrince,
  name: "America/Port-au-Prince",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.EasternStandardTime
});
({
  id: TimezoneRegions.AmericaPortOfSpain,
  name: "America/Port_of_Spain",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaPortoVelho,
  name: "America/Porto_Velho",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AmazonTime
});
({
  id: TimezoneRegions.AmericaPuertoRico,
  name: "America/Puerto_Rico",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaRainyRiver,
  name: "America/Rainy_River",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AmericaRankinInlet,
  name: "America/Rankin_Inlet",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AmericaRecife,
  name: "America/Recife",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.BrasiliaTime
});
({
  id: TimezoneRegions.AmericaRegina,
  name: "America/Regina",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AmericaResolute,
  name: "America/Resolute",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AmericaRioBranco,
  name: "America/Rio_Branco",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.AcreTime
});
({
  id: TimezoneRegions.AmericaSantaIsabel,
  name: "America/Santa_Isabel",
  offset: TimezoneOffset.UTC_MINUS_8,
  timezone: Timezones.PacificStandardTime
});
({
  id: TimezoneRegions.AmericaSantarem,
  name: "America/Santarem",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.BrasiliaTime
});
({
  id: TimezoneRegions.AmericaSantiago,
  name: "America/Santiago",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.ChileStandardTime
});
({
  id: TimezoneRegions.AmericaSantoDomingo,
  name: "America/Santo_Domingo",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaSaoPaulo,
  name: "America/Sao_Paulo",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.BrasiliaTime
});
({
  id: TimezoneRegions.AmericaScoresbysund,
  name: "America/Scoresbysund",
  offset: TimezoneOffset.UTC_MINUS_1,
  timezone: Timezones.EasternGreenlandTime
});
({
  id: TimezoneRegions.AmericaShiprock,
  name: "America/Shiprock",
  offset: TimezoneOffset.UTC_MINUS_7,
  timezone: Timezones.MountainStandardTime
});
({
  id: TimezoneRegions.AmericaSitka,
  name: "America/Sitka",
  offset: TimezoneOffset.UTC_MINUS_9,
  timezone: Timezones.AlaskaStandardTime
});
({
  id: TimezoneRegions.AmericaStBarthelemy,
  name: "America/St_Barthelemy",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaStJohns,
  name: "America/St_Johns",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.NewfoundlandStandardTime
});
({
  id: TimezoneRegions.AmericaStKitts,
  name: "America/St_Kitts",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaStLucia,
  name: "America/St_Lucia",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaStThomas,
  name: "America/St_Thomas",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaStVincent,
  name: "America/St_Vincent",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaSwiftCurrent,
  name: "America/Swift_Current",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AmericaTegucigalpa,
  name: "America/Tegucigalpa",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AmericaThule,
  name: "America/Thule",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaThunderBay,
  name: "America/Thunder_Bay",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.EasternStandardTime
});
({
  id: TimezoneRegions.AmericaTijuana,
  name: "America/Tijuana",
  offset: TimezoneOffset.UTC_MINUS_8,
  timezone: Timezones.PacificStandardTime
});
({
  id: TimezoneRegions.AmericaToronto,
  name: "America/Toronto",
  offset: TimezoneOffset.UTC_MINUS_5,
  timezone: Timezones.EasternStandardTime
});
({
  id: TimezoneRegions.AmericaTortola,
  name: "America/Tortola",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AmericaVancouver,
  name: "America/Vancouver",
  offset: TimezoneOffset.UTC_MINUS_8,
  timezone: Timezones.PacificStandardTime
});
({
  id: TimezoneRegions.AmericaWhitehorse,
  name: "America/Whitehorse",
  offset: TimezoneOffset.UTC_MINUS_8,
  timezone: Timezones.PacificStandardTime
});
({
  id: TimezoneRegions.AmericaWinnipeg,
  name: "America/Winnipeg",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AmericaYakutat,
  name: "America/Yakutat",
  offset: TimezoneOffset.UTC_MINUS_9,
  timezone: Timezones.AlaskaStandardTime
});
({
  id: TimezoneRegions.AmericaYellowknife,
  name: "America/Yellowknife",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.MountainStandardTime
});
({
  id: TimezoneRegions.AntarcticaCasey,
  name: "Antarctica/Casey",
  offset: TimezoneOffset.UTC_MINUS_8,
  timezone: Timezones.WesternStandardTime
});
({
  id: TimezoneRegions.AntarcticaDavis,
  name: "Antarctica/Davis",
  offset: TimezoneOffset.UTC_MINUS_7,
  timezone: Timezones.NewfoundlandStandardTime
});
({
  id: TimezoneRegions.AntarcticaDumontDUrville,
  name: "Antarctica/DumontDUrville",
  offset: TimezoneOffset.UTC_MINUS_10,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AntarcticaMacquarie,
  name: "Antarctica/Macquarie",
  offset: TimezoneOffset.UTC_MINUS_11,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AntarcticaMawson,
  name: "Antarctica/Mawson",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AntarcticaMcMurdo,
  name: "Antarctica/McMurdo",
  offset: TimezoneOffset.UTC_MINUS_12,
  timezone: Timezones.NewZealandStandardTime
});
({
  id: TimezoneRegions.AntarcticaPalmer,
  name: "Antarctica/Palmer",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.ChathamStandardTime
});
({
  id: TimezoneRegions.AntarcticaRothera,
  name: "Antarctica/Rothera",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.RotheraResearchStationTime
});
({
  id: TimezoneRegions.AntarcticaSyowa,
  name: "Antarctica/Syowa",
  offset: TimezoneOffset.UTC_MINUS_3,
  timezone: Timezones.ShowaStationTime
});
({
  id: TimezoneRegions.AntarcticaTroll,
  name: "Antarctica/Troll",
  offset: TimezoneOffset.UTC_MINUS_2,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.AntarcticaVostok,
  name: "Antarctica/Vostok",
  offset: TimezoneOffset.UTC_MINUS_6,
  timezone: Timezones.CentralStandardTime
});
({
  id: TimezoneRegions.ArcticLongyearbyen,
  name: "Arctic/Longyearbyen",
  offset: TimezoneOffset.UTC_MINUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.AsiaAden,
  name: "Asia/Aden",
  offset: TimezoneOffset.UTC_PLUS_3,
  timezone: Timezones.ArabiaStandardTime
});
({
  id: TimezoneRegions.AsiaAlmaty,
  name: "Asia/Almaty",
  offset: TimezoneOffset.UTC_PLUS_6,
  timezone: Timezones.AlmaAtaTime
});
({
  id: TimezoneRegions.AsiaAmman,
  name: "Asia/Amman",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.AsiaAnadyr,
  name: "Asia/Anadyr",
  offset: TimezoneOffset.UTC_PLUS_12,
  timezone: Timezones.NewCaledoniaTime
});
({
  id: TimezoneRegions.AsiaAqtau,
  name: "Asia/Aqtau",
  offset: TimezoneOffset.UTC_PLUS_5,
  timezone: Timezones.AqtobeTime
});
({
  id: TimezoneRegions.AsiaAqtobe,
  name: "Asia/Aqtobe",
  offset: TimezoneOffset.UTC_PLUS_5,
  timezone: Timezones.AqtobeTime
});
({
  id: TimezoneRegions.AsiaAshgabat,
  name: "Asia/Ashgabat",
  offset: TimezoneOffset.UTC_PLUS_5,
  timezone: Timezones.TurkmenistanTime
});
({
  id: TimezoneRegions.AsiaBaghdad,
  name: "Asia/Baghdad",
  offset: TimezoneOffset.UTC_PLUS_3,
  timezone: Timezones.ArabiaStandardTime
});
({
  id: TimezoneRegions.AsiaBahrain,
  name: "Asia/Bahrain",
  offset: TimezoneOffset.UTC_PLUS_3,
  timezone: Timezones.ArabiaStandardTime
});
({
  id: TimezoneRegions.AsiaBaku,
  name: "Asia/Baku",
  offset: TimezoneOffset.UTC_PLUS_4,
  timezone: Timezones.AzerbaijanTime
});
({
  id: TimezoneRegions.AsiaBangkok,
  name: "Asia/Bangkok",
  offset: TimezoneOffset.UTC_PLUS_7,
  timezone: Timezones.IndochinaTime
});
({
  id: TimezoneRegions.AsiaBarnaul,
  name: "Asia/Barnaul",
  offset: TimezoneOffset.UTC_PLUS_7,
  timezone: Timezones.KrasnoyarskTime
});
({
  id: TimezoneRegions.AsiaBeirut,
  name: "Asia/Beirut",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.AsiaBishkek,
  name: "Asia/Bishkek",
  offset: TimezoneOffset.UTC_PLUS_6,
  timezone: Timezones.KyrgyzstanTime
});
({
  id: TimezoneRegions.AsiaBrunei,
  name: "Asia/Brunei",
  offset: TimezoneOffset.UTC_PLUS_8,
  timezone: Timezones.BruneiTime
});
({
  id: TimezoneRegions.AsiaChita,
  name: "Asia/Chita",
  offset: TimezoneOffset.UTC_PLUS_9,
  timezone: Timezones.YakutskTime
});
({
  id: TimezoneRegions.AsiaChoibalsan,
  name: "Asia/Choibalsan",
  offset: TimezoneOffset.UTC_PLUS_8,
  timezone: Timezones.ChoibalsanStandardTime
});
({
  id: TimezoneRegions.AsiaColombo,
  name: "Asia/Colombo",
  offset: TimezoneOffset.UTC_PLUS_5,
  timezone: Timezones.IndianStandardTime
});
({
  id: TimezoneRegions.AsiaDamascus,
  name: "Asia/Damascus",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.AsiaDhaka,
  name: "Asia/Dhaka",
  offset: TimezoneOffset.UTC_PLUS_6,
  timezone: Timezones.BangladeshStandardTime
});
({
  id: TimezoneRegions.AsiaDili,
  name: "Asia/Dili",
  offset: TimezoneOffset.UTC_PLUS_9,
  timezone: Timezones.JapanStandardTime
});
({
  id: TimezoneRegions.AsiaDubai,
  name: "Asia/Dubai",
  offset: TimezoneOffset.UTC_PLUS_4,
  timezone: Timezones.GulfStandardTime
});
({
  id: TimezoneRegions.AsiaDushanbe,
  name: "Asia/Dushanbe",
  offset: TimezoneOffset.UTC_PLUS_5,
  timezone: Timezones.TajikistanTime
});
({
  id: TimezoneRegions.AsiaFamagusta,
  name: "Asia/Famagusta",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.AsiaGaza,
  name: "Asia/Gaza",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.AsiaHebron,
  name: "Asia/Hebron",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.AsiaHoChiMinh,
  name: "Asia/Ho_Chi_Minh",
  offset: TimezoneOffset.UTC_PLUS_7,
  timezone: Timezones.IndochinaTime
});
({
  id: TimezoneRegions.AsiaHongKong,
  name: "Asia/Hong_Kong",
  offset: TimezoneOffset.UTC_PLUS_8,
  timezone: Timezones.HongKongTime
});
({
  id: TimezoneRegions.AsiaHovd,
  name: "Asia/Hovd",
  offset: TimezoneOffset.UTC_PLUS_7,
  timezone: Timezones.HovdTime
});
({
  id: TimezoneRegions.AsiaIrkutsk,
  name: "Asia/Irkutsk",
  offset: TimezoneOffset.UTC_PLUS_8,
  timezone: Timezones.IrkutskTime
});
({
  id: TimezoneRegions.AsiaJakarta,
  name: "Asia/Jakarta",
  offset: TimezoneOffset.UTC_PLUS_7,
  timezone: Timezones.WesternIndonesianTime
});
({
  id: TimezoneRegions.AsiaJayapura,
  name: "Asia/Jayapura",
  offset: TimezoneOffset.UTC_PLUS_9,
  timezone: Timezones.JapanStandardTime
});
({
  id: TimezoneRegions.AsiaJerusalem,
  name: "Asia/Jerusalem",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.AsiaKabul,
  name: "Asia/Kabul",
  offset: TimezoneOffset.UTC_PLUS_4,
  timezone: Timezones.AfghanistanTime
});
({
  id: TimezoneRegions.AsiaKamchatka,
  name: "Asia/Kamchatka",
  offset: TimezoneOffset.UTC_PLUS_12,
  timezone: Timezones.KamchatkaTime
});
({
  id: TimezoneRegions.AsiaKarachi,
  name: "Asia/Karachi",
  offset: TimezoneOffset.UTC_PLUS_5,
  timezone: Timezones.PakistanStandardTime
});
({
  id: TimezoneRegions.AsiaKathmandu,
  name: "Asia/Kathmandu",
  offset: TimezoneOffset.UTC_PLUS_5,
  timezone: Timezones.NepalTime
});
({
  id: TimezoneRegions.AsiaKhandyga,
  name: "Asia/Khandyga",
  offset: TimezoneOffset.UTC_PLUS_9,
  timezone: Timezones.YakutskTime
});
({
  id: TimezoneRegions.AsiaKolkata,
  name: "Asia/Kolkata",
  offset: TimezoneOffset.UTC_PLUS_5,
  timezone: Timezones.IndianStandardTime
});
({
  id: TimezoneRegions.AsiaKrasnoyarsk,
  name: "Asia/Krasnoyarsk",
  offset: TimezoneOffset.UTC_PLUS_7,
  timezone: Timezones.KrasnoyarskTime
});
({
  id: TimezoneRegions.AsiaKualaLumpur,
  name: "Asia/Kuala_Lumpur",
  offset: TimezoneOffset.UTC_PLUS_8,
  timezone: Timezones.MalaysiaStandardTime
});
({
  id: TimezoneRegions.AsiaKuching,
  name: "Asia/Kuching",
  offset: TimezoneOffset.UTC_PLUS_8,
  timezone: Timezones.MalaysiaStandardTime
});
({
  id: TimezoneRegions.AsiaKuwait,
  name: "Asia/Kuwait",
  offset: TimezoneOffset.UTC_PLUS_3,
  timezone: Timezones.ArabiaStandardTime
});
({
  id: TimezoneRegions.AsiaMacau,
  name: "Asia/Macau",
  offset: TimezoneOffset.UTC_PLUS_8,
  timezone: Timezones.ChinaStandardTime
});
({
  id: TimezoneRegions.AsiaMagadan,
  name: "Asia/Magadan",
  offset: TimezoneOffset.UTC_PLUS_11,
  timezone: Timezones.MagadanTime
});
({
  id: TimezoneRegions.AsiaMakassar,
  name: "Asia/Makassar",
  offset: TimezoneOffset.UTC_PLUS_8,
  timezone: Timezones.MalaysiaTime
});
({
  id: TimezoneRegions.AsiaManila,
  name: "Asia/Manila",
  offset: TimezoneOffset.UTC_PLUS_8,
  timezone: Timezones.PhilippineTime
});
({
  id: TimezoneRegions.AsiaMuscat,
  name: "Asia/Muscat",
  offset: TimezoneOffset.UTC_PLUS_4,
  timezone: Timezones.GulfStandardTime
});
({
  id: TimezoneRegions.AsiaNovokuznetsk,
  name: "Asia/Novokuznetsk",
  offset: TimezoneOffset.UTC_PLUS_6,
  timezone: Timezones.NovosibirskTime
});
({
  id: TimezoneRegions.AsiaNovosibirsk,
  name: "Asia/Novosibirsk",
  offset: TimezoneOffset.UTC_PLUS_6,
  timezone: Timezones.NovosibirskTime
});
({
  id: TimezoneRegions.AsiaOmsk,
  name: "Asia/Omsk",
  offset: TimezoneOffset.UTC_PLUS_6,
  timezone: Timezones.OmskTime
});
({
  id: TimezoneRegions.AsiaOral,
  name: "Asia/Oral",
  offset: TimezoneOffset.UTC_PLUS_5,
  timezone: Timezones.OralTime
});
({
  id: TimezoneRegions.AsiaPhnomPenh,
  name: "Asia/Phnom_Penh",
  offset: TimezoneOffset.UTC_PLUS_7,
  timezone: Timezones.IndochinaTime
});
({
  id: TimezoneRegions.AsiaPontianak,
  name: "Asia/Pontianak",
  offset: TimezoneOffset.UTC_PLUS_7,
  timezone: Timezones.WesternIndonesianTime
});
({
  id: TimezoneRegions.AsiaPyongyang,
  name: "Asia/Pyongyang",
  offset: TimezoneOffset.UTC_PLUS_9,
  timezone: Timezones.KoreaStandardTime
});
({
  id: TimezoneRegions.AsiaQatar,
  name: "Asia/Qatar",
  offset: TimezoneOffset.UTC_PLUS_3,
  timezone: Timezones.ArabiaStandardTime
});
({
  id: TimezoneRegions.AsiaQyzylorda,
  name: "Asia/Qyzylorda",
  offset: TimezoneOffset.UTC_PLUS_5,
  timezone: Timezones.WestKazakhstanTime
});
({
  id: TimezoneRegions.AsiaRangoon,
  name: "Asia/Rangoon",
  offset: TimezoneOffset.UTC_PLUS_6,
  timezone: Timezones.MyanmarStandardTime
});
({
  id: TimezoneRegions.AsiaRiyadh,
  name: "Asia/Riyadh",
  offset: TimezoneOffset.UTC_PLUS_3,
  timezone: Timezones.ArabiaStandardTime
});
({
  id: TimezoneRegions.AsiaSakhalin,
  name: "Asia/Sakhalin",
  offset: TimezoneOffset.UTC_PLUS_11,
  timezone: Timezones.SakhalinIslandTime
});
({
  id: TimezoneRegions.AsiaSamarkand,
  name: "Asia/Samarkand",
  offset: TimezoneOffset.UTC_PLUS_5,
  timezone: Timezones.UzbekistanTime
});
({
  id: TimezoneRegions.AsiaSeoul,
  name: "Asia/Seoul",
  offset: TimezoneOffset.UTC_PLUS_9,
  timezone: Timezones.KoreaStandardTime
});
({
  id: TimezoneRegions.AsiaShanghai,
  name: "Asia/Shanghai",
  offset: TimezoneOffset.UTC_PLUS_8,
  timezone: Timezones.ChinaStandardTime
});
({
  id: TimezoneRegions.AsiaSingapore,
  name: "Asia/Singapore",
  offset: TimezoneOffset.UTC_PLUS_8,
  timezone: Timezones.SingaporeStandardTime
});
({
  id: TimezoneRegions.AsiaSrednekolymsk,
  name: "Asia/Srednekolymsk",
  offset: TimezoneOffset.UTC_PLUS_11,
  timezone: Timezones.SrednekolymskTime
});
({
  id: TimezoneRegions.AsiaTaipei,
  name: "Asia/Taipei",
  offset: TimezoneOffset.UTC_PLUS_8,
  timezone: Timezones.ChinaStandardTime
});
({
  id: TimezoneRegions.AsiaTashkent,
  name: "Asia/Tashkent",
  offset: TimezoneOffset.UTC_PLUS_5,
  timezone: Timezones.UzbekistanTime
});
({
  id: TimezoneRegions.AsiaTbilisi,
  name: "Asia/Tbilisi",
  offset: TimezoneOffset.UTC_PLUS_4,
  timezone: Timezones.GeorgiaStandardTime
});
({
  id: TimezoneRegions.AsiaTehran,
  name: "Asia/Tehran",
  offset: TimezoneOffset.UTC_PLUS_3,
  timezone: Timezones.IranStandardTime
});
({
  id: TimezoneRegions.AsiaThimphu,
  name: "Asia/Thimphu",
  offset: TimezoneOffset.UTC_PLUS_6,
  timezone: Timezones.BhutanTime
});
({
  id: TimezoneRegions.AsiaTokyo,
  name: "Asia/Tokyo",
  offset: TimezoneOffset.UTC_PLUS_9,
  timezone: Timezones.JapanStandardTime
});
({
  id: TimezoneRegions.AsiaTomsk,
  name: "Asia/Tomsk",
  offset: TimezoneOffset.UTC_PLUS_6,
  timezone: Timezones.KrasnoyarskTime
});
({
  id: TimezoneRegions.AsiaUlaanbaatar,
  name: "Asia/Ulaanbaatar",
  offset: TimezoneOffset.UTC_PLUS_8,
  timezone: Timezones.UlaanbaatarStandardTime
});
({
  id: TimezoneRegions.AsiaUrumqi,
  name: "Asia/Urumqi",
  offset: TimezoneOffset.UTC_PLUS_8,
  timezone: Timezones.ChinaStandardTime
});
({
  id: TimezoneRegions.AsiaUstNera,
  name: "Asia/Ust-Nera",
  offset: TimezoneOffset.UTC_PLUS_10,
  timezone: Timezones.VladivostokTime
});
({
  id: TimezoneRegions.AsiaVientiane,
  name: "Asia/Vientiane",
  offset: TimezoneOffset.UTC_PLUS_7,
  timezone: Timezones.IndochinaTime
});
({
  id: TimezoneRegions.AsiaVladivostok,
  name: "Asia/Vladivostok",
  offset: TimezoneOffset.UTC_PLUS_10,
  timezone: Timezones.VladivostokTime
});
({
  id: TimezoneRegions.AsiaYakutsk,
  name: "Asia/Yakutsk",
  offset: TimezoneOffset.UTC_PLUS_9,
  timezone: Timezones.YakutskTime
});
({
  id: TimezoneRegions.AsiaYekaterinburg,
  name: "Asia/Yekaterinburg",
  offset: TimezoneOffset.UTC_PLUS_5,
  timezone: Timezones.YekaterinburgTime
});
({
  id: TimezoneRegions.AsiaYerevan,
  name: "Asia/Yerevan",
  offset: TimezoneOffset.UTC_PLUS_4,
  timezone: Timezones.ArmeniaTime
});
({
  id: TimezoneRegions.AtlanticAzores,
  name: "Atlantic/Azores",
  offset: TimezoneOffset.UTC_MINUS_1,
  timezone: Timezones.AzoresStandardTime
});
({
  id: TimezoneRegions.AtlanticBermuda,
  name: "Atlantic/Bermuda",
  offset: TimezoneOffset.UTC_MINUS_4,
  timezone: Timezones.AtlanticStandardTime
});
({
  id: TimezoneRegions.AtlanticCanary,
  name: "Atlantic/Canary",
  offset: TimezoneOffset.UTC_MINUS_1,
  timezone: Timezones.WesternEuropeanTime
});
({
  id: TimezoneRegions.AtlanticCapeVerde,
  name: "Atlantic/Cape_Verde",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.CapeVerdeTime
});
({
  id: TimezoneRegions.AtlanticFaroe,
  name: "Atlantic/Faroe",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.GreenwichMeanTime
});
({
  id: TimezoneRegions.AtlanticMadeira,
  name: "Atlantic/Madeira",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.WesternEuropeanTime
});
({
  id: TimezoneRegions.AtlanticReykjavik,
  name: "Atlantic/Reykjavik",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.GreenwichMeanTime
});
({
  id: TimezoneRegions.AtlanticSouthGeorgia,
  name: "Atlantic/South_Georgia",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.CoordinatedUniversalTime
});
({
  id: TimezoneRegions.AtlanticStHelena,
  name: "Atlantic/St_Helena",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.GreenwichMeanTime
});
({
  id: TimezoneRegions.AtlanticStanley,
  name: "Atlantic/Stanley",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.FalklandIslandsTime
});
({
  id: TimezoneRegions.AustraliaAdelaide,
  name: "Australia/Adelaide",
  offset: TimezoneOffset.UTC_PLUS_9_30,
  timezone: Timezones.AustralianCentralStandardTime
});
({
  id: TimezoneRegions.AustraliaBrisbane,
  name: "Australia/Brisbane",
  offset: TimezoneOffset.UTC_PLUS_10,
  timezone: Timezones.AustralianEasternStandardTime
});
({
  id: TimezoneRegions.AustraliaBrokenHill,
  name: "Australia/Broken_Hill",
  offset: TimezoneOffset.UTC_PLUS_9_30,
  timezone: Timezones.AustralianCentralStandardTime
});
({
  id: TimezoneRegions.AustraliaCanberra,
  name: "Australia/Canberra",
  offset: TimezoneOffset.UTC_PLUS_10,
  timezone: Timezones.AustralianEasternStandardTime
});
({
  id: TimezoneRegions.AustraliaCurrie,
  name: "Australia/Currie",
  offset: TimezoneOffset.UTC_PLUS_10,
  timezone: Timezones.AustralianEasternStandardTime
});
({
  id: TimezoneRegions.AustraliaDarwin,
  name: "Australia/Darwin",
  offset: TimezoneOffset.UTC_PLUS_9_30,
  timezone: Timezones.AustralianCentralStandardTime
});
({
  id: TimezoneRegions.AustraliaEucla,
  name: "Australia/Eucla",
  offset: TimezoneOffset.UTC_PLUS_8_45,
  timezone: Timezones.AustralianCentralWesternStandardTime
});
({
  id: TimezoneRegions.AustraliaHobart,
  name: "Australia/Hobart",
  offset: TimezoneOffset.UTC_PLUS_10,
  timezone: Timezones.AustralianEasternStandardTime
});
({
  id: TimezoneRegions.AustraliaLindeman,
  name: "Australia/Lindeman",
  offset: TimezoneOffset.UTC_PLUS_10,
  timezone: Timezones.AustralianEasternStandardTime
});
({
  id: TimezoneRegions.AustraliaLordHowe,
  name: "Australia/Lord_Howe",
  offset: TimezoneOffset.UTC_PLUS_10_30,
  timezone: Timezones.LordHoweStandardTime
});
({
  id: TimezoneRegions.AustraliaMelbourne,
  name: "Australia/Melbourne",
  offset: TimezoneOffset.UTC_PLUS_10,
  timezone: Timezones.AustralianEasternStandardTime
});
({
  id: TimezoneRegions.AustraliaPerth,
  name: "Australia/Perth",
  offset: TimezoneOffset.UTC_PLUS_8,
  timezone: Timezones.AustralianWesternStandardTime
});
({
  id: TimezoneRegions.AustraliaSydney,
  name: "Australia/Sydney",
  offset: TimezoneOffset.UTC_PLUS_10,
  timezone: Timezones.AustralianEasternStandardTime
});
({
  id: TimezoneRegions.EuropeAmsterdam,
  name: "Europe/Amsterdam",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeAndorra,
  name: "Europe/Andorra",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeAthens,
  name: "Europe/Athens",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.EuropeBelgrade,
  name: "Europe/Belgrade",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeBerlin,
  name: "Europe/Berlin",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeBratislava,
  name: "Europe/Bratislava",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeBrussels,
  name: "Europe/Brussels",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeBucharest,
  name: "Europe/Bucharest",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.EuropeBudapest,
  name: "Europe/Budapest",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeBusingen,
  name: "Europe/Busingen",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeChisinau,
  name: "Europe/Chisinau",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.EuropeCopenhagen,
  name: "Europe/Copenhagen",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeDublin,
  name: "Europe/Dublin",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.GreenwichMeanTime
});
({
  id: TimezoneRegions.EuropeGibraltar,
  name: "Europe/Gibraltar",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeGuernsey,
  name: "Europe/Guernsey",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeHelsinki,
  name: "Europe/Helsinki",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.EuropeIsleOfMan,
  name: "Europe/Isle_of_Man",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.GreenwichMeanTime
});
({
  id: TimezoneRegions.EuropeIstanbul,
  name: "Europe/Istanbul",
  offset: TimezoneOffset.UTC_PLUS_3,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.EuropeJersey,
  name: "Europe/Jersey",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeKaliningrad,
  name: "Europe/Kaliningrad",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.EuropeKiev,
  name: "Europe/Kiev",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.EuropeLisbon,
  name: "Europe/Lisbon",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.GreenwichMeanTime
});
({
  id: TimezoneRegions.EuropeLjubljana,
  name: "Europe/Ljubljana",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeLondon,
  name: "Europe/London",
  offset: TimezoneOffset.UTC_0,
  timezone: Timezones.GreenwichMeanTime
});
({
  id: TimezoneRegions.EuropeLuxembourg,
  name: "Europe/Luxembourg",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeMadrid,
  name: "Europe/Madrid",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeMalta,
  name: "Europe/Malta",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeMariehamn,
  name: "Europe/Mariehamn",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.EuropeMinsk,
  name: "Europe/Minsk",
  offset: TimezoneOffset.UTC_PLUS_3,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.EuropeMonaco,
  name: "Europe/Monaco",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeMoscow,
  name: "Europe/Moscow",
  offset: TimezoneOffset.UTC_PLUS_3,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.EuropeOslo,
  name: "Europe/Oslo",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeParis,
  name: "Europe/Paris",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropePodgorica,
  name: "Europe/Podgorica",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropePrague,
  name: "Europe/Prague",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeRiga,
  name: "Europe/Riga",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.EuropeRome,
  name: "Europe/Rome",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeSamara,
  name: "Europe/Samara",
  offset: TimezoneOffset.UTC_PLUS_4,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.EuropeSanMarino,
  name: "Europe/San_Marino",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeSarajevo,
  name: "Europe/Sarajevo",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeSimferopol,
  name: "Europe/Simferopol",
  offset: TimezoneOffset.UTC_PLUS_3,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.EuropeSkopje,
  name: "Europe/Skopje",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeSofia,
  name: "Europe/Sofia",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.EuropeStockholm,
  name: "Europe/Stockholm",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeTallinn,
  name: "Europe/Tallinn",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.EuropeTirane,
  name: "Europe/Tirane",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeUzhgorod,
  name: "Europe/Uzhgorod",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.EuropeVaduz,
  name: "Europe/Vaduz",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeVatican,
  name: "Europe/Vatican",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeVienna,
  name: "Europe/Vienna",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeVilnius,
  name: "Europe/Vilnius",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.EuropeVolgograd,
  name: "Europe/Volgograd",
  offset: TimezoneOffset.UTC_PLUS_4,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.EuropeWarsaw,
  name: "Europe/Warsaw",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeZagreb,
  name: "Europe/Zagreb",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.EuropeZaporozhye,
  name: "Europe/Zaporozhye",
  offset: TimezoneOffset.UTC_PLUS_2,
  timezone: Timezones.EasternEuropeanTime
});
({
  id: TimezoneRegions.EuropeZurich,
  name: "Europe/Zurich",
  offset: TimezoneOffset.UTC_PLUS_1,
  timezone: Timezones.CentralEuropeanTime
});
({
  id: TimezoneRegions.IndianAntananarivo,
  name: "Indian/Antananarivo",
  offset: TimezoneOffset.UTC_PLUS_3,
  timezone: Timezones.EastAfricaTime
});
({
  id: TimezoneRegions.IndianChagos,
  name: "Indian/Chagos",
  offset: TimezoneOffset.UTC_PLUS_6,
  timezone: Timezones.IndianOceanTime
});
({
  id: TimezoneRegions.IndianChristmas,
  name: "Indian/Christmas",
  offset: TimezoneOffset.UTC_PLUS_7,
  timezone: Timezones.ChristmasIslandTime
});
({
  id: TimezoneRegions.IndianCocos,
  name: "Indian/Cocos",
  offset: TimezoneOffset.UTC_PLUS_6,
  timezone: Timezones.CocosIslandsTime
});
({
  id: TimezoneRegions.IndianComoro,
  name: "Indian/Comoro",
  offset: TimezoneOffset.UTC_PLUS_3,
  timezone: Timezones.EastAfricaTime
});
({
  id: TimezoneRegions.IndianKerguelen,
  name: "Indian/Kerguelen",
  offset: TimezoneOffset.UTC_PLUS_5,
  timezone: Timezones.FrenchSouthernAndAntarcticTime
});
({
  id: TimezoneRegions.IndianMahe,
  name: "Indian/Mahe",
  offset: TimezoneOffset.UTC_PLUS_4,
  timezone: Timezones.SeychellesTime
});
({
  id: TimezoneRegions.IndianMaldives,
  name: "Indian/Maldives",
  offset: TimezoneOffset.UTC_PLUS_5,
  timezone: Timezones.MaldivesTime
});
({
  id: TimezoneRegions.IndianMauritius,
  name: "Indian/Mauritius",
  offset: TimezoneOffset.UTC_PLUS_4,
  timezone: Timezones.MauritiusTime
});
({
  id: TimezoneRegions.IndianMayotte,
  name: "Indian/Mayotte",
  offset: TimezoneOffset.UTC_PLUS_3,
  timezone: Timezones.EastAfricaTime
});
({
  id: TimezoneRegions.IndianReunion,
  name: "Indian/Reunion",
  offset: TimezoneOffset.UTC_PLUS_4,
  timezone: Timezones.ReunionTime
});
({
  id: TimezoneRegions.PacificApia,
  name: "Pacific/Apia",
  offset: TimezoneOffset.UTC_PLUS_13,
  timezone: Timezones.SamoaStandardTime
});
({
  id: TimezoneRegions.PacificAuckland,
  name: "Pacific/Auckland",
  offset: TimezoneOffset.UTC_PLUS_13,
  timezone: Timezones.NewZealandStandardTime
});
({
  id: TimezoneRegions.PacificChatham,
  name: "Pacific/Chatham",
  offset: TimezoneOffset.UTC_PLUS_13,
  timezone: Timezones.ChathamStandardTime
});
({
  id: TimezoneRegions.PacificEaster,
  name: "Pacific/Easter",
  offset: TimezoneOffset.UTC_PLUS_6,
  timezone: Timezones.EasterIslandStandardTime
});
({
  id: TimezoneRegions.PacificEfate,
  name: "Pacific/Efate",
  offset: TimezoneOffset.UTC_PLUS_11,
  timezone: Timezones.VanuatuTime
});
({
  id: TimezoneRegions.PacificEnderbury,
  name: "Pacific/Enderbury",
  offset: TimezoneOffset.UTC_PLUS_13,
  timezone: Timezones.TongaTime
});
({
  id: TimezoneRegions.PacificFakaofo,
  name: "Pacific/Fakaofo",
  offset: TimezoneOffset.UTC_PLUS_13,
  timezone: Timezones.TongaTime
});
({
  id: TimezoneRegions.PacificFiji,
  name: "Pacific/Fiji",
  offset: TimezoneOffset.UTC_PLUS_12,
  timezone: Timezones.FijiTime
});
({
  id: TimezoneRegions.PacificFunafuti,
  name: "Pacific/Funafuti",
  offset: TimezoneOffset.UTC_PLUS_12,
  timezone: Timezones.TuvaluTime
});
({
  id: TimezoneRegions.PacificGalapagos,
  name: "Pacific/Galapagos",
  offset: TimezoneOffset.UTC_PLUS_6,
  timezone: Timezones.GalapagosTime
});
({
  id: TimezoneRegions.PacificGambier,
  name: "Pacific/Gambier",
  offset: TimezoneOffset.UTC_PLUS_9,
  timezone: Timezones.GambierIslandTime
});
({
  id: TimezoneRegions.PacificGuadalcanal,
  name: "Pacific/Guadalcanal",
  offset: TimezoneOffset.UTC_PLUS_11,
  timezone: Timezones.SolomonIslandsTime
});
({
  id: TimezoneRegions.PacificGuam,
  name: "Pacific/Guam",
  offset: TimezoneOffset.UTC_PLUS_10,
  timezone: Timezones.ChamorroStandardTime
});
({
  id: TimezoneRegions.PacificHonolulu,
  name: "Pacific/Honolulu",
  offset: TimezoneOffset.UTC_PLUS_10,
  timezone: Timezones.HawaiiAleutianStandardTime
});
({
  id: TimezoneRegions.PacificJohnston,
  name: "Pacific/Johnston",
  offset: TimezoneOffset.UTC_PLUS_10,
  timezone: Timezones.HawaiiAleutianStandardTime
});
({
  id: TimezoneRegions.PacificKiritimati,
  name: "Pacific/Kiritimati",
  offset: TimezoneOffset.UTC_PLUS_14,
  timezone: Timezones.LineIslandsTime
});
({
  id: TimezoneRegions.PacificKosrae,
  name: "Pacific/Kosrae",
  offset: TimezoneOffset.UTC_PLUS_11,
  timezone: Timezones.KosraeTime
});
({
  id: TimezoneRegions.PacificKwajalein,
  name: "Pacific/Kwajalein",
  offset: TimezoneOffset.UTC_PLUS_12,
  timezone: Timezones.MarshallIslandsTime
});
({
  id: TimezoneRegions.PacificMajuro,
  name: "Pacific/Majuro",
  offset: TimezoneOffset.UTC_PLUS_12,
  timezone: Timezones.MarshallIslandsTime
});
({
  id: TimezoneRegions.PacificMarquesas,
  name: "Pacific/Marquesas",
  offset: TimezoneOffset.UTC_PLUS_9,
  timezone: Timezones.MarquesasIslandsTime
});
({
  id: TimezoneRegions.PacificMidway,
  name: "Pacific/Midway",
  offset: TimezoneOffset.UTC_PLUS_11,
  timezone: Timezones.SamoaStandardTime
});
({
  id: TimezoneRegions.PacificNauru,
  name: "Pacific/Nauru",
  offset: TimezoneOffset.UTC_PLUS_12,
  timezone: Timezones.NauruTime
});
({
  id: TimezoneRegions.PacificNiue,
  name: "Pacific/Niue",
  offset: TimezoneOffset.UTC_PLUS_11,
  timezone: Timezones.NiueTime
});
({
  id: TimezoneRegions.PacificNorfolk,
  name: "Pacific/Norfolk",
  offset: TimezoneOffset.UTC_PLUS_11,
  timezone: Timezones.NorfolkIslandTime
});
({
  id: TimezoneRegions.PacificNoumea,
  name: "Pacific/Noumea",
  offset: TimezoneOffset.UTC_PLUS_11,
  timezone: Timezones.NewCaledoniaTime
});
({
  id: TimezoneRegions.PacificPagoPago,
  name: "Pacific/Pago_Pago",
  offset: TimezoneOffset.UTC_PLUS_11,
  timezone: Timezones.SamoaStandardTime
});
({
  id: TimezoneRegions.PacificPalau,
  name: "Pacific/Palau",
  offset: TimezoneOffset.UTC_PLUS_9,
  timezone: Timezones.PalauTime
});
({
  id: TimezoneRegions.PacificPitcairn,
  name: "Pacific/Pitcairn",
  offset: TimezoneOffset.UTC_PLUS_8,
  timezone: Timezones.PitcairnTime
});
({
  id: TimezoneRegions.PacificPonape,
  name: "Pacific/Ponape",
  offset: TimezoneOffset.UTC_PLUS_11,
  timezone: Timezones.PohnpeiStandardTime
});
({
  id: TimezoneRegions.PacificPortMoresby,
  name: "Pacific/Port_Moresby",
  offset: TimezoneOffset.UTC_PLUS_10,
  timezone: Timezones.PapuaNewGuineaTime
});
({
  id: TimezoneRegions.PacificRarotonga,
  name: "Pacific/Rarotonga",
  offset: TimezoneOffset.UTC_PLUS_10,
  timezone: Timezones.CookIslandTime
});
({
  id: TimezoneRegions.PacificSaipan,
  name: "Pacific/Saipan",
  offset: TimezoneOffset.UTC_PLUS_10,
  timezone: Timezones.ChamorroStandardTime
});
({
  id: TimezoneRegions.PacificTahiti,
  name: "Pacific/Tahiti",
  offset: TimezoneOffset.UTC_PLUS_10,
  timezone: Timezones.TahitiTime
});
({
  id: TimezoneRegions.PacificTarawa,
  name: "Pacific/Tarawa",
  offset: TimezoneOffset.UTC_PLUS_12,
  timezone: Timezones.GilbertIslandTime
});
({
  id: TimezoneRegions.PacificTongatapu,
  name: "Pacific/Tongatapu",
  offset: TimezoneOffset.UTC_PLUS_13,
  timezone: Timezones.TongaTime
});
({
  id: TimezoneRegions.PacificChuuk,
  name: "Pacific/Chuuk",
  offset: TimezoneOffset.UTC_PLUS_10,
  timezone: Timezones.ChuukTime
});
({
  id: TimezoneRegions.PacificPohnpei,
  name: "Pacific/Pohnpei",
  offset: TimezoneOffset.UTC_PLUS_11,
  timezone: Timezones.PohnpeiStandardTime
});
({
  id: TimezoneRegions.PacificYap,
  name: "Pacific/Yap",
  offset: TimezoneOffset.UTC_PLUS_10,
  timezone: Timezones.ChuukTime
});

var Condition = /* @__PURE__ */ ((Condition2) => {
  Condition2["Contains"] = "contains";
  Condition2["HasCharacterCount"] = "has-character-count";
  Condition2["HasNumberCount"] = "has-number-count";
  Condition2["HasLetterCount"] = "has-letter-count";
  Condition2["HasLowercaseCount"] = "has-lowercase-count";
  Condition2["HasSpacesCount"] = "has-spaces-count";
  Condition2["HasSymbolCount"] = "has-symbol-count";
  Condition2["HasUppercaseCount"] = "has-uppercase-count";
  Condition2["IsAfter"] = "is-after";
  Condition2["IsAfterOrEqual"] = "is-after-or-equal";
  Condition2["IsAirport"] = "is-airport";
  Condition2["IsAlpha"] = "is-alpha";
  Condition2["IsAlphanumeric"] = "is-alphanumeric";
  Condition2["IsAlgorithmHash"] = "is-algorithm-hash";
  Condition2["IsAscii"] = "is-ascii";
  Condition2["IsBase64"] = "is-base-64";
  Condition2["IsBefore"] = "is-before";
  Condition2["IsBeforeOrAfter"] = "is-before-or-after";
  Condition2["IsBeforeOrEqual"] = "is-before-or-equal";
  Condition2["IsBetween"] = "is-between";
  Condition2["IsBIC"] = "is-bic";
  Condition2["IsBitcoinAddress"] = "is-bitcoin-address";
  Condition2["IsBoolean"] = "is-boolean";
  Condition2["IsColor"] = "is-color";
  Condition2["IsComplexEnough"] = "is-complex-enough";
  Condition2["IsCountry"] = "is-country";
  Condition2["IsCreditCard"] = "is-credit-card";
  Condition2["IsCurrency"] = "is-currency";
  Condition2["IsDataURI"] = "is-data-uri";
  Condition2["IsDate"] = "is-date";
  Condition2["IsDateRange"] = "is-date-range";
  Condition2["IsDateTime"] = "is-date-time";
  Condition2["IsDayOfMonth"] = "is-day-of-month";
  Condition2["IsDecimal"] = "is-decimal";
  Condition2["IsDivisibleBy"] = "is-divisible-by";
  Condition2["IsDomainName"] = "is-domain-name";
  Condition2["IsEmailAddress"] = "is-email-address";
  Condition2["IsEthereumAddress"] = "is-ethereum-address";
  Condition2["IsEAN"] = "is-ean";
  Condition2["IsEIN"] = "is-ein";
  Condition2["IsEqual"] = "is-equal";
  Condition2["IsEvenNumber"] = "is-even-number";
  Condition2["IsFloat"] = "is-float";
  Condition2["IsIBAN"] = "is-iban";
  Condition2["IsGreaterThan"] = "greater-than";
  Condition2["IsGreaterThanOrEqual"] = "greater-than-or-equal";
  Condition2["IsHSLColor"] = "is-hsl-color";
  Condition2["IsHexColor"] = "is-hex-color";
  Condition2["IsHexadecimal"] = "is-hexadecimal";
  Condition2["IsIdentityCardCode"] = "is-identity-card-code";
  Condition2["IsIMEI"] = "is-imei";
  Condition2["IsInIPAddressRange"] = "is-in-ip-address-range";
  Condition2["IsInList"] = "is-in-list";
  Condition2["IsInTheLast"] = "is-in-the-last";
  Condition2["IsInteger"] = "is-integer";
  Condition2["IsIPAddress"] = "is-ip-address";
  Condition2["IsIPAddressRange"] = "is-ip-address-range";
  Condition2["IsISBN"] = "is-isbn";
  Condition2["IsISIN"] = "is-isin";
  Condition2["IsISMN"] = "is-ismn";
  Condition2["IsISRC"] = "is-isrc";
  Condition2["IsISSN"] = "is-issn";
  Condition2["IsISO4217"] = "is-iso-4217";
  Condition2["IsISO8601"] = "is-iso-8601";
  Condition2["IsISO31661Alpha2"] = "is-iso-31661-alpha-2";
  Condition2["IsISO31661Alpha3"] = "is-iso-31661-alpha-3";
  Condition2["IsJSON"] = "is-json";
  Condition2["IsLanguage"] = "is-language";
  Condition2["IsLatitude"] = "is-latitude";
  Condition2["IsLongitude"] = "is-longitude";
  Condition2["IsLengthEqual"] = "is-length-equal";
  Condition2["IsLengthGreaterThan"] = "is-length-greater-than";
  Condition2["IsLengthGreaterThanOrEqual"] = "is-length-great-than-or-equal";
  Condition2["IsLengthLessThan"] = "is-length-less-than";
  Condition2["IsLengthLessThanOrEqual"] = "is-length-less-than-or-equal";
  Condition2["IsLessThan"] = "less-than";
  Condition2["IsLessThanOrEqual"] = "less-than-or-equal";
  Condition2["IsLicensePlateNumber"] = "is-license-plate-number";
  Condition2["IsLowercase"] = "is-lowercase";
  Condition2["IsOctal"] = "is-octal";
  Condition2["IsMACAddress"] = "is-mac-address";
  Condition2["IsMD5"] = "is-md5";
  Condition2["IsMagnetURI"] = "is-magnet-uri";
  Condition2["IsMarkdown"] = "is-markdown";
  Condition2["IsMimeType"] = "is-mime-type";
  Condition2["IsMonth"] = "is-month";
  Condition2["IsNegativeNumber"] = "is-negative-number";
  Condition2["IsNotDate"] = "is-not-date";
  Condition2["IsNotEqual"] = "is-not-equal";
  Condition2["IsNotInIPAddressRange"] = "is-not-in-ip-address-range";
  Condition2["IsNotInList"] = "is-not-in-list";
  Condition2["IsNotNull"] = "is-not-null";
  Condition2["IsNotRegexMatch"] = "is-not-regex-match";
  Condition2["IsNotToday"] = "is-not-today";
  Condition2["IsNumber"] = "is-number";
  Condition2["IsNumeric"] = "is-numeric";
  Condition2["IsOddNumber"] = "is-odd-number";
  Condition2["IsPassportNumber"] = "is-passport-number";
  Condition2["IsPhoneNumber"] = "is-phone-number";
  Condition2["IsPort"] = "is-port";
  Condition2["IsPositiveNumber"] = "is-positive-number";
  Condition2["IsPostalCode"] = "is-postal-code";
  Condition2["IsProvince"] = "is-province";
  Condition2["IsRGBColor"] = "is-rgb-color";
  Condition2["IsRegexMatch"] = "is-regex-match";
  Condition2["IsRequired"] = "is-required";
  Condition2["IsSemanticVersion"] = "is-semantic-version";
  Condition2["IsSlug"] = "is-slug";
  Condition2["IsSSN"] = "is-ssn";
  Condition2["IsState"] = "is-state";
  Condition2["IsStreetAddress"] = "is-street-address";
  Condition2["IsString"] = "is-string";
  Condition2["IsStrongPassword"] = "is-strong-password";
  Condition2["IsTags"] = "is-tags";
  Condition2["IsTaxIDNumber"] = "is-tax-id-number";
  Condition2["IsThisMonth"] = "is-this-month";
  Condition2["IsThisQuarter"] = "is-this-quarter";
  Condition2["IsThisWeek"] = "is-this-week";
  Condition2["IsThisWeekend"] = "is-this-weekend";
  Condition2["IsThisYear"] = "is-this-year";
  Condition2["IsTime"] = "is-time";
  Condition2["IsTimeOfDay"] = "is-time-of-day";
  Condition2["IsTimeRange"] = "is-time-range";
  Condition2["IsToday"] = "is-today";
  Condition2["IsURL"] = "is-url";
  Condition2["IsUUID"] = "is-uuid";
  Condition2["IsUppercase"] = "is-uppercase";
  Condition2["IsUsernameAvailable"] = "is-username-available";
  Condition2["IsValidStreetAddress"] = "is-valid-street-address";
  Condition2["IsVATIDNumber"] = "is-vat-id-number";
  Condition2["IsWeekday"] = "is-weekday";
  Condition2["IsWeekend"] = "is-weekend";
  Condition2["IsYear"] = "is-year";
  return Condition2;
})(Condition || {});

var ColorCondition = ((ColorCondition2) => {
  ColorCondition2[ColorCondition2["IsHSLColor"] = Condition.IsHSLColor] = "IsHSLColor";
  ColorCondition2[ColorCondition2["IsHexColor"] = Condition.IsHexColor] = "IsHexColor";
  ColorCondition2[ColorCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  ColorCondition2[ColorCondition2["IsRGBColor"] = Condition.IsRGBColor] = "IsRGBColor";
  ColorCondition2[ColorCondition2["IsString"] = Condition.IsString] = "IsString";
  return ColorCondition2;
})(ColorCondition || {});

var AlgorithmHashCondition = ((AlgorithmHashCondition2) => {
  AlgorithmHashCondition2[AlgorithmHashCondition2["IsAlgorithmHash"] = Condition.IsAlgorithmHash] = "IsAlgorithmHash";
  AlgorithmHashCondition2[AlgorithmHashCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  AlgorithmHashCondition2[AlgorithmHashCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  AlgorithmHashCondition2[AlgorithmHashCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  AlgorithmHashCondition2[AlgorithmHashCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  AlgorithmHashCondition2[AlgorithmHashCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  AlgorithmHashCondition2[AlgorithmHashCondition2["IsString"] = Condition.IsString] = "IsString";
  return AlgorithmHashCondition2;
})(AlgorithmHashCondition || {});
var SemanticVersionCondition = ((SemanticVersionCondition2) => {
  SemanticVersionCondition2[SemanticVersionCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  SemanticVersionCondition2[SemanticVersionCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  SemanticVersionCondition2[SemanticVersionCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  SemanticVersionCondition2[SemanticVersionCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  SemanticVersionCondition2[SemanticVersionCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  SemanticVersionCondition2[SemanticVersionCondition2["IsSemanticVersion"] = Condition.IsSemanticVersion] = "IsSemanticVersion";
  SemanticVersionCondition2[SemanticVersionCondition2["IsString"] = Condition.IsString] = "IsString";
  return SemanticVersionCondition2;
})(SemanticVersionCondition || {});
var UUIDCondition = ((UUIDCondition2) => {
  UUIDCondition2[UUIDCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  UUIDCondition2[UUIDCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  UUIDCondition2[UUIDCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  UUIDCondition2[UUIDCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  UUIDCondition2[UUIDCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  UUIDCondition2[UUIDCondition2["IsString"] = Condition.IsString] = "IsString";
  UUIDCondition2[UUIDCondition2["IsUUID"] = Condition.IsUUID] = "IsUUID";
  return UUIDCondition2;
})(UUIDCondition || {});
var MD5Condition = ((MD5Condition2) => {
  MD5Condition2[MD5Condition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  MD5Condition2[MD5Condition2["IsInList"] = Condition.IsInList] = "IsInList";
  MD5Condition2[MD5Condition2["IsMD5"] = Condition.IsMD5] = "IsMD5";
  MD5Condition2[MD5Condition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  MD5Condition2[MD5Condition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  MD5Condition2[MD5Condition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  MD5Condition2[MD5Condition2["IsString"] = Condition.IsString] = "IsString";
  return MD5Condition2;
})(MD5Condition || {});

var BooleanCondition = ((BooleanCondition2) => {
  BooleanCondition2[BooleanCondition2["IsBoolean"] = Condition.IsBoolean] = "IsBoolean";
  BooleanCondition2[BooleanCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  BooleanCondition2[BooleanCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  BooleanCondition2[BooleanCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  return BooleanCondition2;
})(BooleanCondition || {});

var DateCondition = ((DateCondition2) => {
  DateCondition2[DateCondition2["IsAfter"] = Condition.IsAfter] = "IsAfter";
  DateCondition2[DateCondition2["IsAfterOrEqual"] = Condition.IsAfterOrEqual] = "IsAfterOrEqual";
  DateCondition2[DateCondition2["IsBefore"] = Condition.IsBefore] = "IsBefore";
  DateCondition2[DateCondition2["IsBeforeOrEqual"] = Condition.IsBeforeOrEqual] = "IsBeforeOrEqual";
  DateCondition2[DateCondition2["IsBetween"] = Condition.IsBetween] = "IsBetween";
  DateCondition2[DateCondition2["IsDate"] = Condition.IsDate] = "IsDate";
  DateCondition2[DateCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  DateCondition2[DateCondition2["IsNotDate"] = Condition.IsNotDate] = "IsNotDate";
  DateCondition2[DateCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  DateCondition2[DateCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  DateCondition2[DateCondition2["IsNotToday"] = Condition.IsNotToday] = "IsNotToday";
  DateCondition2[DateCondition2["IsThisWeek"] = Condition.IsThisWeek] = "IsThisWeek";
  DateCondition2[DateCondition2["IsThisMonth"] = Condition.IsThisMonth] = "IsThisMonth";
  DateCondition2[DateCondition2["IsThisQuarter"] = Condition.IsThisQuarter] = "IsThisQuarter";
  DateCondition2[DateCondition2["IsThisYear"] = Condition.IsThisYear] = "IsThisYear";
  DateCondition2[DateCondition2["IsToday"] = Condition.IsToday] = "IsToday";
  DateCondition2[DateCondition2["IsWeekend"] = Condition.IsWeekend] = "IsWeekend";
  return DateCondition2;
})(DateCondition || {});
var DateRangeCondition = ((DateRangeCondition2) => {
  DateRangeCondition2[DateRangeCondition2["IsAfter"] = Condition.IsAfter] = "IsAfter";
  DateRangeCondition2[DateRangeCondition2["IsBefore"] = Condition.IsBefore] = "IsBefore";
  DateRangeCondition2[DateRangeCondition2["IsBeforeOrAfter"] = Condition.IsBeforeOrAfter] = "IsBeforeOrAfter";
  DateRangeCondition2[DateRangeCondition2["IsBetween"] = Condition.IsBetween] = "IsBetween";
  DateRangeCondition2[DateRangeCondition2["IsDate"] = Condition.IsDate] = "IsDate";
  DateRangeCondition2[DateRangeCondition2["IsDateRange"] = Condition.IsDateRange] = "IsDateRange";
  DateRangeCondition2[DateRangeCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  DateRangeCondition2[DateRangeCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  DateRangeCondition2[DateRangeCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  return DateRangeCondition2;
})(DateRangeCondition || {});
var DateTimeCondition = ((DateTimeCondition2) => {
  DateTimeCondition2[DateTimeCondition2["IsAfter"] = Condition.IsAfter] = "IsAfter";
  DateTimeCondition2[DateTimeCondition2["IsAfterOrEqual"] = Condition.IsAfterOrEqual] = "IsAfterOrEqual";
  DateTimeCondition2[DateTimeCondition2["IsBefore"] = Condition.IsBefore] = "IsBefore";
  DateTimeCondition2[DateTimeCondition2["IsBeforeOrEqual"] = Condition.IsBeforeOrEqual] = "IsBeforeOrEqual";
  DateTimeCondition2[DateTimeCondition2["IsBetween"] = Condition.IsBetween] = "IsBetween";
  DateTimeCondition2[DateTimeCondition2["IsDate"] = Condition.IsDate] = "IsDate";
  DateTimeCondition2[DateTimeCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  DateTimeCondition2[DateTimeCondition2["IsNotDate"] = Condition.IsNotDate] = "IsNotDate";
  DateTimeCondition2[DateTimeCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  DateTimeCondition2[DateTimeCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  DateTimeCondition2[DateTimeCondition2["IsNotToday"] = Condition.IsNotToday] = "IsNotToday";
  DateTimeCondition2[DateTimeCondition2["IsThisWeek"] = Condition.IsThisWeek] = "IsThisWeek";
  DateTimeCondition2[DateTimeCondition2["IsThisMonth"] = Condition.IsThisMonth] = "IsThisMonth";
  DateTimeCondition2[DateTimeCondition2["IsThisQuarter"] = Condition.IsThisQuarter] = "IsThisQuarter";
  DateTimeCondition2[DateTimeCondition2["IsThisYear"] = Condition.IsThisYear] = "IsThisYear";
  DateTimeCondition2[DateTimeCondition2["IsToday"] = Condition.IsToday] = "IsToday";
  DateTimeCondition2[DateTimeCondition2["IsWeekend"] = Condition.IsWeekend] = "IsWeekend";
  return DateTimeCondition2;
})(DateTimeCondition || {});
var DayOfMonthCondition = ((DayOfMonthCondition2) => {
  DayOfMonthCondition2[DayOfMonthCondition2["IsAfter"] = Condition.IsAfter] = "IsAfter";
  DayOfMonthCondition2[DayOfMonthCondition2["IsAfterOrEqual"] = Condition.IsAfterOrEqual] = "IsAfterOrEqual";
  DayOfMonthCondition2[DayOfMonthCondition2["IsBefore"] = Condition.IsBefore] = "IsBefore";
  DayOfMonthCondition2[DayOfMonthCondition2["IsBeforeOrEqual"] = Condition.IsBeforeOrEqual] = "IsBeforeOrEqual";
  DayOfMonthCondition2[DayOfMonthCondition2["IsBetween"] = Condition.IsBetween] = "IsBetween";
  DayOfMonthCondition2[DayOfMonthCondition2["IsDayOfMonth"] = Condition.IsDayOfMonth] = "IsDayOfMonth";
  DayOfMonthCondition2[DayOfMonthCondition2["IsEvenNumber"] = Condition.IsEvenNumber] = "IsEvenNumber";
  DayOfMonthCondition2[DayOfMonthCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  DayOfMonthCondition2[DayOfMonthCondition2["IsGreaterThan"] = Condition.IsGreaterThan] = "IsGreaterThan";
  DayOfMonthCondition2[DayOfMonthCondition2["IsGreaterThanOrEqual"] = Condition.IsGreaterThanOrEqual] = "IsGreaterThanOrEqual";
  DayOfMonthCondition2[DayOfMonthCondition2["IsInteger"] = Condition.IsInteger] = "IsInteger";
  DayOfMonthCondition2[DayOfMonthCondition2["IsLessThan"] = Condition.IsLessThan] = "IsLessThan";
  DayOfMonthCondition2[DayOfMonthCondition2["IsLessThanOrEqual"] = Condition.IsLessThanOrEqual] = "IsLessThanOrEqual";
  DayOfMonthCondition2[DayOfMonthCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  DayOfMonthCondition2[DayOfMonthCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  DayOfMonthCondition2[DayOfMonthCondition2["IsNumber"] = Condition.IsNumber] = "IsNumber";
  DayOfMonthCondition2[DayOfMonthCondition2["IsOddNumber"] = Condition.IsOddNumber] = "IsOddNumber";
  DayOfMonthCondition2[DayOfMonthCondition2["IsToday"] = Condition.IsToday] = "IsToday";
  DayOfMonthCondition2[DayOfMonthCondition2["IsWeekday"] = Condition.IsWeekday] = "IsWeekday";
  DayOfMonthCondition2[DayOfMonthCondition2["IsWeekend"] = Condition.IsWeekend] = "IsWeekend";
  return DayOfMonthCondition2;
})(DayOfMonthCondition || {});
var MonthCondition = ((MonthCondition2) => {
  MonthCondition2[MonthCondition2["IsAfter"] = Condition.IsAfter] = "IsAfter";
  MonthCondition2[MonthCondition2["IsAfterOrEqual"] = Condition.IsAfterOrEqual] = "IsAfterOrEqual";
  MonthCondition2[MonthCondition2["IsBefore"] = Condition.IsBefore] = "IsBefore";
  MonthCondition2[MonthCondition2["IsBeforeOrEqual"] = Condition.IsBeforeOrEqual] = "IsBeforeOrEqual";
  MonthCondition2[MonthCondition2["IsBetween"] = Condition.IsBetween] = "IsBetween";
  MonthCondition2[MonthCondition2["IsEvenNumber"] = Condition.IsEvenNumber] = "IsEvenNumber";
  MonthCondition2[MonthCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  MonthCondition2[MonthCondition2["IsGreaterThan"] = Condition.IsGreaterThan] = "IsGreaterThan";
  MonthCondition2[MonthCondition2["IsGreaterThanOrEqual"] = Condition.IsGreaterThanOrEqual] = "IsGreaterThanOrEqual";
  MonthCondition2[MonthCondition2["IsInteger"] = Condition.IsInteger] = "IsInteger";
  MonthCondition2[MonthCondition2["IsLessThan"] = Condition.IsLessThan] = "IsLessThan";
  MonthCondition2[MonthCondition2["IsLessThanOrEqual"] = Condition.IsLessThanOrEqual] = "IsLessThanOrEqual";
  MonthCondition2[MonthCondition2["IsMonth"] = Condition.IsMonth] = "IsMonth";
  MonthCondition2[MonthCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  MonthCondition2[MonthCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  MonthCondition2[MonthCondition2["IsNumber"] = Condition.IsNumber] = "IsNumber";
  MonthCondition2[MonthCondition2["IsOddNumber"] = Condition.IsOddNumber] = "IsOddNumber";
  MonthCondition2[MonthCondition2["IsThisMonth"] = Condition.IsThisMonth] = "IsThisMonth";
  return MonthCondition2;
})(MonthCondition || {});
var TimeCondition = ((TimeCondition2) => {
  TimeCondition2[TimeCondition2["IsAfter"] = Condition.IsAfter] = "IsAfter";
  TimeCondition2[TimeCondition2["IsAfterOrEqual"] = Condition.IsAfterOrEqual] = "IsAfterOrEqual";
  TimeCondition2[TimeCondition2["IsBefore"] = Condition.IsBefore] = "IsBefore";
  TimeCondition2[TimeCondition2["IsBeforeOrEqual"] = Condition.IsBeforeOrEqual] = "IsBeforeOrEqual";
  TimeCondition2[TimeCondition2["IsBetween"] = Condition.IsBetween] = "IsBetween";
  TimeCondition2[TimeCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  TimeCondition2[TimeCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  TimeCondition2[TimeCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  TimeCondition2[TimeCondition2["IsTime"] = Condition.IsTime] = "IsTime";
  return TimeCondition2;
})(TimeCondition || {});
var TimeRangeCondition = ((TimeRangeCondition2) => {
  TimeRangeCondition2[TimeRangeCondition2["IsAfter"] = Condition.IsAfter] = "IsAfter";
  TimeRangeCondition2[TimeRangeCondition2["IsBefore"] = Condition.IsBefore] = "IsBefore";
  TimeRangeCondition2[TimeRangeCondition2["IsBeforeOrAfter"] = Condition.IsBeforeOrAfter] = "IsBeforeOrAfter";
  TimeRangeCondition2[TimeRangeCondition2["IsBetween"] = Condition.IsBetween] = "IsBetween";
  TimeRangeCondition2[TimeRangeCondition2["IsTime"] = Condition.IsTime] = "IsTime";
  TimeRangeCondition2[TimeRangeCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  TimeRangeCondition2[TimeRangeCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  TimeRangeCondition2[TimeRangeCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  TimeRangeCondition2[TimeRangeCondition2["IsTimeRange"] = Condition.IsTimeRange] = "IsTimeRange";
  return TimeRangeCondition2;
})(TimeRangeCondition || {});
var TimeOfDayCondition = ((TimeOfDayCondition2) => {
  TimeOfDayCondition2[TimeOfDayCondition2["IsAfter"] = Condition.IsAfter] = "IsAfter";
  TimeOfDayCondition2[TimeOfDayCondition2["IsBefore"] = Condition.IsBefore] = "IsBefore";
  TimeOfDayCondition2[TimeOfDayCondition2["IsBeforeOrAfter"] = Condition.IsBeforeOrAfter] = "IsBeforeOrAfter";
  TimeOfDayCondition2[TimeOfDayCondition2["IsBetween"] = Condition.IsBetween] = "IsBetween";
  TimeOfDayCondition2[TimeOfDayCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  TimeOfDayCondition2[TimeOfDayCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  TimeOfDayCondition2[TimeOfDayCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  TimeOfDayCondition2[TimeOfDayCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  TimeOfDayCondition2[TimeOfDayCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  TimeOfDayCondition2[TimeOfDayCondition2["IsTimeOfDay"] = Condition.IsTimeOfDay] = "IsTimeOfDay";
  TimeOfDayCondition2[TimeOfDayCondition2["IsTimeRange"] = Condition.IsTimeRange] = "IsTimeRange";
  return TimeOfDayCondition2;
})(TimeOfDayCondition || {});
var WeekdayCondition = ((WeekdayCondition2) => {
  WeekdayCondition2[WeekdayCondition2["IsAfter"] = Condition.IsAfter] = "IsAfter";
  WeekdayCondition2[WeekdayCondition2["IsAfterOrEqual"] = Condition.IsAfterOrEqual] = "IsAfterOrEqual";
  WeekdayCondition2[WeekdayCondition2["IsBefore"] = Condition.IsBefore] = "IsBefore";
  WeekdayCondition2[WeekdayCondition2["IsBeforeOrEqual"] = Condition.IsBeforeOrEqual] = "IsBeforeOrEqual";
  WeekdayCondition2[WeekdayCondition2["IsBetween"] = Condition.IsBetween] = "IsBetween";
  WeekdayCondition2[WeekdayCondition2["IsEvenNumber"] = Condition.IsEvenNumber] = "IsEvenNumber";
  WeekdayCondition2[WeekdayCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  WeekdayCondition2[WeekdayCondition2["IsGreaterThan"] = Condition.IsGreaterThan] = "IsGreaterThan";
  WeekdayCondition2[WeekdayCondition2["IsGreaterThanOrEqual"] = Condition.IsGreaterThanOrEqual] = "IsGreaterThanOrEqual";
  WeekdayCondition2[WeekdayCondition2["IsLessThan"] = Condition.IsLessThan] = "IsLessThan";
  WeekdayCondition2[WeekdayCondition2["IsLessThanOrEqual"] = Condition.IsLessThanOrEqual] = "IsLessThanOrEqual";
  WeekdayCondition2[WeekdayCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  WeekdayCondition2[WeekdayCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  WeekdayCondition2[WeekdayCondition2["IsNumber"] = Condition.IsNumber] = "IsNumber";
  WeekdayCondition2[WeekdayCondition2["IsOddNumber"] = Condition.IsOddNumber] = "IsOddNumber";
  WeekdayCondition2[WeekdayCondition2["IsWeekday"] = Condition.IsWeekday] = "IsWeekday";
  WeekdayCondition2[WeekdayCondition2["IsWeekend"] = Condition.IsWeekend] = "IsWeekend";
  return WeekdayCondition2;
})(WeekdayCondition || {});
var YearCondition = ((YearCondition2) => {
  YearCondition2[YearCondition2["IsAfter"] = Condition.IsAfter] = "IsAfter";
  YearCondition2[YearCondition2["IsAfterOrEqual"] = Condition.IsAfterOrEqual] = "IsAfterOrEqual";
  YearCondition2[YearCondition2["IsBefore"] = Condition.IsBefore] = "IsBefore";
  YearCondition2[YearCondition2["IsBeforeOrEqual"] = Condition.IsBeforeOrEqual] = "IsBeforeOrEqual";
  YearCondition2[YearCondition2["IsBetween"] = Condition.IsBetween] = "IsBetween";
  YearCondition2[YearCondition2["IsEvenNumber"] = Condition.IsEvenNumber] = "IsEvenNumber";
  YearCondition2[YearCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  YearCondition2[YearCondition2["IsGreaterThan"] = Condition.IsGreaterThan] = "IsGreaterThan";
  YearCondition2[YearCondition2["IsGreaterThanOrEqual"] = Condition.IsGreaterThanOrEqual] = "IsGreaterThanOrEqual";
  YearCondition2[YearCondition2["IsInteger"] = Condition.IsInteger] = "IsInteger";
  YearCondition2[YearCondition2["IsLessThan"] = Condition.IsLessThan] = "IsLessThan";
  YearCondition2[YearCondition2["IsLessThanOrEqual"] = Condition.IsLessThanOrEqual] = "IsLessThanOrEqual";
  YearCondition2[YearCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  YearCondition2[YearCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  YearCondition2[YearCondition2["IsNumber"] = Condition.IsNumber] = "IsNumber";
  YearCondition2[YearCondition2["IsOddNumber"] = Condition.IsOddNumber] = "IsOddNumber";
  YearCondition2[YearCondition2["IsThisYear"] = Condition.IsThisYear] = "IsThisYear";
  YearCondition2[YearCondition2["IsYear"] = Condition.IsYear] = "IsYear";
  return YearCondition2;
})(YearCondition || {});

var HexadecimalCondition = ((HexadecimalCondition2) => {
  HexadecimalCondition2[HexadecimalCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  HexadecimalCondition2[HexadecimalCondition2["IsHexadecimal"] = Condition.IsHexadecimal] = "IsHexadecimal";
  HexadecimalCondition2[HexadecimalCondition2["IsLengthEqual"] = Condition.IsLengthEqual] = "IsLengthEqual";
  HexadecimalCondition2[HexadecimalCondition2["IsLengthGreaterThan"] = Condition.IsLengthGreaterThan] = "IsLengthGreaterThan";
  HexadecimalCondition2[HexadecimalCondition2["IsLengthGreaterThanOrEqual"] = Condition.IsLengthGreaterThanOrEqual] = "IsLengthGreaterThanOrEqual";
  HexadecimalCondition2[HexadecimalCondition2["IsLengthLessThan"] = Condition.IsLengthLessThan] = "IsLengthLessThan";
  HexadecimalCondition2[HexadecimalCondition2["IsLengthLessThanOrEqual"] = Condition.IsLengthLessThanOrEqual] = "IsLengthLessThanOrEqual";
  HexadecimalCondition2[HexadecimalCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  HexadecimalCondition2[HexadecimalCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  HexadecimalCondition2[HexadecimalCondition2["IsString"] = Condition.IsString] = "IsString";
  return HexadecimalCondition2;
})(HexadecimalCondition || {});
var JSONCondition = ((JSONCondition2) => {
  JSONCondition2[JSONCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  JSONCondition2[JSONCondition2["IsJSON"] = Condition.IsJSON] = "IsJSON";
  JSONCondition2[JSONCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  JSONCondition2[JSONCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  return JSONCondition2;
})(JSONCondition || {});
var MarkdownCondition = ((MarkdownCondition2) => {
  MarkdownCondition2[MarkdownCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  MarkdownCondition2[MarkdownCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  MarkdownCondition2[MarkdownCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  MarkdownCondition2[MarkdownCondition2["IsMarkdown"] = Condition.IsMarkdown] = "IsMarkdown";
  MarkdownCondition2[MarkdownCondition2["IsString"] = Condition.IsString] = "IsString";
  return MarkdownCondition2;
})(MarkdownCondition || {});

var CurrencyCondition = ((CurrencyCondition2) => {
  CurrencyCondition2[CurrencyCondition2["IsBetween"] = Condition.IsBetween] = "IsBetween";
  CurrencyCondition2[CurrencyCondition2["IsCurrency"] = Condition.IsCurrency] = "IsCurrency";
  CurrencyCondition2[CurrencyCondition2["IsDecimal"] = Condition.IsDecimal] = "IsDecimal";
  CurrencyCondition2[CurrencyCondition2["IsDivisibleBy"] = Condition.IsDivisibleBy] = "IsDivisibleBy";
  CurrencyCondition2[CurrencyCondition2["IsEvenNumber"] = Condition.IsEvenNumber] = "IsEvenNumber";
  CurrencyCondition2[CurrencyCondition2["IsFloat"] = Condition.IsFloat] = "IsFloat";
  CurrencyCondition2[CurrencyCondition2["IsGreaterThan"] = Condition.IsGreaterThan] = "IsGreaterThan";
  CurrencyCondition2[CurrencyCondition2["IsGreaterThanOrEqual"] = Condition.IsGreaterThanOrEqual] = "IsGreaterThanOrEqual";
  CurrencyCondition2[CurrencyCondition2["IsInteger"] = Condition.IsInteger] = "IsInteger";
  CurrencyCondition2[CurrencyCondition2["IsISO8601"] = Condition.IsISO8601] = "IsISO8601";
  CurrencyCondition2[CurrencyCondition2["IsLessThan"] = Condition.IsLessThan] = "IsLessThan";
  CurrencyCondition2[CurrencyCondition2["IsLessThanOrEqual"] = Condition.IsLessThanOrEqual] = "IsLessThanOrEqual";
  CurrencyCondition2[CurrencyCondition2["IsNegativeNumber"] = Condition.IsNegativeNumber] = "IsNegativeNumber";
  CurrencyCondition2[CurrencyCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  CurrencyCondition2[CurrencyCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  CurrencyCondition2[CurrencyCondition2["IsNumber"] = Condition.IsNumber] = "IsNumber";
  CurrencyCondition2[CurrencyCondition2["IsOddNumber"] = Condition.IsOddNumber] = "IsOddNumber";
  CurrencyCondition2[CurrencyCondition2["IsPositiveNumber"] = Condition.IsPositiveNumber] = "IsPositiveNumber";
  return CurrencyCondition2;
})(CurrencyCondition || {});
var BitcoinAddressCondition = ((BitcoinAddressCondition2) => {
  BitcoinAddressCondition2[BitcoinAddressCondition2["IsBitcoinAddress"] = Condition.IsBitcoinAddress] = "IsBitcoinAddress";
  BitcoinAddressCondition2[BitcoinAddressCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  BitcoinAddressCondition2[BitcoinAddressCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  BitcoinAddressCondition2[BitcoinAddressCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  return BitcoinAddressCondition2;
})(BitcoinAddressCondition || {});
var EthereumAddressCondition = ((EthereumAddressCondition2) => {
  EthereumAddressCondition2[EthereumAddressCondition2["IsEthereumAddress"] = Condition.IsEthereumAddress] = "IsEthereumAddress";
  EthereumAddressCondition2[EthereumAddressCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  EthereumAddressCondition2[EthereumAddressCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  EthereumAddressCondition2[EthereumAddressCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  return EthereumAddressCondition2;
})(EthereumAddressCondition || {});

var LanguageCondition = ((LanguageCondition2) => {
  LanguageCondition2[LanguageCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  LanguageCondition2[LanguageCondition2["IsJSON"] = Condition.IsJSON] = "IsJSON";
  LanguageCondition2[LanguageCondition2["IsLanguage"] = Condition.IsLanguage] = "IsLanguage";
  LanguageCondition2[LanguageCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  LanguageCondition2[LanguageCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  return LanguageCondition2;
})(LanguageCondition || {});

var CityCondition = ((CityCondition2) => {
  CityCondition2[CityCondition2["IsAlpha"] = Condition.IsAlpha] = "IsAlpha";
  CityCondition2[CityCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  CityCondition2[CityCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  CityCondition2[CityCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  CityCondition2[CityCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  CityCondition2[CityCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  CityCondition2[CityCondition2["IsString"] = Condition.IsString] = "IsString";
  return CityCondition2;
})(CityCondition || {});
var CountryCondition = ((CountryCondition2) => {
  CountryCondition2[CountryCondition2["IsAlpha"] = Condition.IsAlpha] = "IsAlpha";
  CountryCondition2[CountryCondition2["IsCountry"] = Condition.IsCountry] = "IsCountry";
  CountryCondition2[CountryCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  CountryCondition2[CountryCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  CountryCondition2[CountryCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  CountryCondition2[CountryCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  CountryCondition2[CountryCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  CountryCondition2[CountryCondition2["IsString"] = Condition.IsString] = "IsString";
  return CountryCondition2;
})(CountryCondition || {});
var LatitudeCondition = ((LatitudeCondition2) => {
  LatitudeCondition2[LatitudeCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  LatitudeCondition2[LatitudeCondition2["IsFloat"] = Condition.IsFloat] = "IsFloat";
  LatitudeCondition2[LatitudeCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  LatitudeCondition2[LatitudeCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  LatitudeCondition2[LatitudeCondition2["IsNumeric"] = Condition.IsNumeric] = "IsNumeric";
  return LatitudeCondition2;
})(LatitudeCondition || {});
var LongitudeCondition = ((LongitudeCondition2) => {
  LongitudeCondition2[LongitudeCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  LongitudeCondition2[LongitudeCondition2["IsFloat"] = Condition.IsFloat] = "IsFloat";
  LongitudeCondition2[LongitudeCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  LongitudeCondition2[LongitudeCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  LongitudeCondition2[LongitudeCondition2["IsNumeric"] = Condition.IsNumeric] = "IsNumeric";
  return LongitudeCondition2;
})(LongitudeCondition || {});
var PostalCodeCondition = ((PostalCodeCondition2) => {
  PostalCodeCondition2[PostalCodeCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  PostalCodeCondition2[PostalCodeCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  PostalCodeCondition2[PostalCodeCondition2["IsPostalCode"] = Condition.IsPostalCode] = "IsPostalCode";
  PostalCodeCondition2[PostalCodeCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  return PostalCodeCondition2;
})(PostalCodeCondition || {});
var ProvinceCondition = ((ProvinceCondition2) => {
  ProvinceCondition2[ProvinceCondition2["IsAlpha"] = Condition.IsAlpha] = "IsAlpha";
  ProvinceCondition2[ProvinceCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  ProvinceCondition2[ProvinceCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  ProvinceCondition2[ProvinceCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  ProvinceCondition2[ProvinceCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  ProvinceCondition2[ProvinceCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  ProvinceCondition2[ProvinceCondition2["IsProvince"] = Condition.IsProvince] = "IsProvince";
  ProvinceCondition2[ProvinceCondition2["IsString"] = Condition.IsString] = "IsString";
  return ProvinceCondition2;
})(ProvinceCondition || {});
var StateCondition = ((StateCondition2) => {
  StateCondition2[StateCondition2["IsAlpha"] = Condition.IsAlpha] = "IsAlpha";
  StateCondition2[StateCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  StateCondition2[StateCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  StateCondition2[StateCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  StateCondition2[StateCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  StateCondition2[StateCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  StateCondition2[StateCondition2["IsState"] = Condition.IsState] = "IsState";
  StateCondition2[StateCondition2["IsString"] = Condition.IsString] = "IsString";
  return StateCondition2;
})(StateCondition || {});
var StreetAddressCondition = ((StreetAddressCondition2) => {
  StreetAddressCondition2[StreetAddressCondition2["IsAlphanumeric"] = Condition.IsAlphanumeric] = "IsAlphanumeric";
  StreetAddressCondition2[StreetAddressCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  StreetAddressCondition2[StreetAddressCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  StreetAddressCondition2[StreetAddressCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  StreetAddressCondition2[StreetAddressCondition2["IsString"] = Condition.IsString] = "IsString";
  StreetAddressCondition2[StreetAddressCondition2["IsStreetAddress"] = Condition.IsStreetAddress] = "IsStreetAddress";
  return StreetAddressCondition2;
})(StreetAddressCondition || {});

var MenuCondition = ((MenuCondition2) => {
  MenuCondition2[MenuCondition2["Contains"] = Condition.Contains] = "Contains";
  MenuCondition2[MenuCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  MenuCondition2[MenuCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  MenuCondition2[MenuCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  return MenuCondition2;
})(MenuCondition || {});
var TagsCondition = ((TagsCondition2) => {
  TagsCondition2[TagsCondition2["Contains"] = Condition.Contains] = "Contains";
  TagsCondition2[TagsCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  TagsCondition2[TagsCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  TagsCondition2[TagsCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  return TagsCondition2;
})(TagsCondition || {});

var DataURICondition = ((DataURICondition2) => {
  DataURICondition2[DataURICondition2["Contains"] = Condition.Contains] = "Contains";
  DataURICondition2[DataURICondition2["IsDataURI"] = Condition.IsDataURI] = "IsDataURI";
  DataURICondition2[DataURICondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  DataURICondition2[DataURICondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  DataURICondition2[DataURICondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  DataURICondition2[DataURICondition2["IsString"] = Condition.IsString] = "IsString";
  return DataURICondition2;
})(DataURICondition || {});
var DomainNameCondition = ((DomainNameCondition2) => {
  DomainNameCondition2[DomainNameCondition2["Contains"] = Condition.Contains] = "Contains";
  DomainNameCondition2[DomainNameCondition2["IsDomainName"] = Condition.IsDomainName] = "IsDomainName";
  DomainNameCondition2[DomainNameCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  DomainNameCondition2[DomainNameCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  DomainNameCondition2[DomainNameCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  DomainNameCondition2[DomainNameCondition2["IsString"] = Condition.IsString] = "IsString";
  return DomainNameCondition2;
})(DomainNameCondition || {});
var EmailCondition = ((EmailCondition2) => {
  EmailCondition2[EmailCondition2["Contains"] = Condition.Contains] = "Contains";
  EmailCondition2[EmailCondition2["IsEmailAddress"] = Condition.IsEmailAddress] = "IsEmailAddress";
  EmailCondition2[EmailCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  EmailCondition2[EmailCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  EmailCondition2[EmailCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  EmailCondition2[EmailCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  EmailCondition2[EmailCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  EmailCondition2[EmailCondition2["IsString"] = Condition.IsString] = "IsString";
  return EmailCondition2;
})(EmailCondition || {});
var IPAddressCondition = ((IPAddressCondition2) => {
  IPAddressCondition2[IPAddressCondition2["Contains"] = Condition.Contains] = "Contains";
  IPAddressCondition2[IPAddressCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  IPAddressCondition2[IPAddressCondition2["IsIPAddress"] = Condition.IsIPAddress] = "IsIPAddress";
  IPAddressCondition2[IPAddressCondition2["IsInIPAddressRange"] = Condition.IsInIPAddressRange] = "IsInIPAddressRange";
  IPAddressCondition2[IPAddressCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  IPAddressCondition2[IPAddressCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  IPAddressCondition2[IPAddressCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  IPAddressCondition2[IPAddressCondition2["IsNotInIPAddressRange"] = Condition.IsNotInIPAddressRange] = "IsNotInIPAddressRange";
  IPAddressCondition2[IPAddressCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  IPAddressCondition2[IPAddressCondition2["IsString"] = Condition.IsString] = "IsString";
  return IPAddressCondition2;
})(IPAddressCondition || {});
var IPAddressRangeCondition = ((IPAddressRangeCondition2) => {
  IPAddressRangeCondition2[IPAddressRangeCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  IPAddressRangeCondition2[IPAddressRangeCondition2["IsIPAddressRange"] = Condition.IsIPAddressRange] = "IsIPAddressRange";
  IPAddressRangeCondition2[IPAddressRangeCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  IPAddressRangeCondition2[IPAddressRangeCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  IPAddressRangeCondition2[IPAddressRangeCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  IPAddressRangeCondition2[IPAddressRangeCondition2["IsNotInIPAddressRange"] = Condition.IsNotInIPAddressRange] = "IsNotInIPAddressRange";
  IPAddressRangeCondition2[IPAddressRangeCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  IPAddressRangeCondition2[IPAddressRangeCondition2["IsString"] = Condition.IsString] = "IsString";
  return IPAddressRangeCondition2;
})(IPAddressRangeCondition || {});
var PortCondition = ((PortCondition2) => {
  PortCondition2[PortCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  PortCondition2[PortCondition2["IsGreaterThan"] = Condition.IsGreaterThan] = "IsGreaterThan";
  PortCondition2[PortCondition2["IsGreaterThanOrEqual"] = Condition.IsGreaterThanOrEqual] = "IsGreaterThanOrEqual";
  PortCondition2[PortCondition2["IsInteger"] = Condition.IsInteger] = "IsInteger";
  PortCondition2[PortCondition2["IsLessThan"] = Condition.IsLessThan] = "IsLessThan";
  PortCondition2[PortCondition2["IsLessThanOrEqual"] = Condition.IsLessThanOrEqual] = "IsLessThanOrEqual";
  PortCondition2[PortCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  PortCondition2[PortCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  return PortCondition2;
})(PortCondition || {});
var MACAddressCondition = ((MACAddressCondition2) => {
  MACAddressCondition2[MACAddressCondition2["Contains"] = Condition.Contains] = "Contains";
  MACAddressCondition2[MACAddressCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  MACAddressCondition2[MACAddressCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  MACAddressCondition2[MACAddressCondition2["IsMACAddress"] = Condition.IsMACAddress] = "IsMACAddress";
  MACAddressCondition2[MACAddressCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  MACAddressCondition2[MACAddressCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  MACAddressCondition2[MACAddressCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  MACAddressCondition2[MACAddressCondition2["IsString"] = Condition.IsString] = "IsString";
  return MACAddressCondition2;
})(MACAddressCondition || {});
var MagnetURICondition = ((MagnetURICondition2) => {
  MagnetURICondition2[MagnetURICondition2["Contains"] = Condition.Contains] = "Contains";
  MagnetURICondition2[MagnetURICondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  MagnetURICondition2[MagnetURICondition2["IsInList"] = Condition.IsInList] = "IsInList";
  MagnetURICondition2[MagnetURICondition2["IsMagnetURI"] = Condition.IsMagnetURI] = "IsMagnetURI";
  MagnetURICondition2[MagnetURICondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  MagnetURICondition2[MagnetURICondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  MagnetURICondition2[MagnetURICondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  MagnetURICondition2[MagnetURICondition2["IsString"] = Condition.IsString] = "IsString";
  return MagnetURICondition2;
})(MagnetURICondition || {});
var MimeTypeCondition = ((MimeTypeCondition2) => {
  MimeTypeCondition2[MimeTypeCondition2["Contains"] = Condition.Contains] = "Contains";
  MimeTypeCondition2[MimeTypeCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  MimeTypeCondition2[MimeTypeCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  MimeTypeCondition2[MimeTypeCondition2["IsMimeType"] = Condition.IsMimeType] = "IsMimeType";
  MimeTypeCondition2[MimeTypeCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  MimeTypeCondition2[MimeTypeCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  MimeTypeCondition2[MimeTypeCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  MimeTypeCondition2[MimeTypeCondition2["IsString"] = Condition.IsString] = "IsString";
  return MimeTypeCondition2;
})(MimeTypeCondition || {});
var SlugCondition = ((SlugCondition2) => {
  SlugCondition2[SlugCondition2["Contains"] = Condition.Contains] = "Contains";
  SlugCondition2[SlugCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  SlugCondition2[SlugCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  SlugCondition2[SlugCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  SlugCondition2[SlugCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  SlugCondition2[SlugCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  SlugCondition2[SlugCondition2["IsString"] = Condition.IsString] = "IsString";
  SlugCondition2[SlugCondition2["IsSlug"] = Condition.IsSlug] = "IsSlug";
  return SlugCondition2;
})(SlugCondition || {});
var URLCondition = ((URLCondition2) => {
  URLCondition2[URLCondition2["Contains"] = Condition.Contains] = "Contains";
  URLCondition2[URLCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  URLCondition2[URLCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  URLCondition2[URLCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  URLCondition2[URLCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  URLCondition2[URLCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  URLCondition2[URLCondition2["IsString"] = Condition.IsString] = "IsString";
  URLCondition2[URLCondition2["IsURL"] = Condition.IsURL] = "IsURL";
  return URLCondition2;
})(URLCondition || {});

var NumberCondition = ((NumberCondition2) => {
  NumberCondition2[NumberCondition2["IsAfter"] = Condition.IsAfter] = "IsAfter";
  NumberCondition2[NumberCondition2["IsAfterOrEqual"] = Condition.IsAfterOrEqual] = "IsAfterOrEqual";
  NumberCondition2[NumberCondition2["IsBefore"] = Condition.IsBefore] = "IsBefore";
  NumberCondition2[NumberCondition2["IsBeforeOrEqual"] = Condition.IsBeforeOrEqual] = "IsBeforeOrEqual";
  NumberCondition2[NumberCondition2["IsBetween"] = Condition.IsBetween] = "IsBetween";
  NumberCondition2[NumberCondition2["IsDecimal"] = Condition.IsDecimal] = "IsDecimal";
  NumberCondition2[NumberCondition2["IsDivisibleBy"] = Condition.IsDivisibleBy] = "IsDivisibleBy";
  NumberCondition2[NumberCondition2["IsEAN"] = Condition.IsEAN] = "IsEAN";
  NumberCondition2[NumberCondition2["IsEIN"] = Condition.IsEIN] = "IsEIN";
  NumberCondition2[NumberCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  NumberCondition2[NumberCondition2["IsEvenNumber"] = Condition.IsEvenNumber] = "IsEvenNumber";
  NumberCondition2[NumberCondition2["IsFloat"] = Condition.IsFloat] = "IsFloat";
  NumberCondition2[NumberCondition2["IsGreaterThan"] = Condition.IsGreaterThan] = "IsGreaterThan";
  NumberCondition2[NumberCondition2["IsGreaterThanOrEqual"] = Condition.IsGreaterThanOrEqual] = "IsGreaterThanOrEqual";
  NumberCondition2[NumberCondition2["IsInt"] = Condition.IsInteger] = "IsInt";
  NumberCondition2[NumberCondition2["IsISBN"] = Condition.IsISBN] = "IsISBN";
  NumberCondition2[NumberCondition2["IsISMN"] = Condition.IsISMN] = "IsISMN";
  NumberCondition2[NumberCondition2["IsISSN"] = Condition.IsISSN] = "IsISSN";
  NumberCondition2[NumberCondition2["IsLatitude"] = Condition.IsLatitude] = "IsLatitude";
  NumberCondition2[NumberCondition2["IsLongitude"] = Condition.IsLongitude] = "IsLongitude";
  NumberCondition2[NumberCondition2["IsLessThan"] = Condition.IsLessThan] = "IsLessThan";
  NumberCondition2[NumberCondition2["IsLessThanOrEqual"] = Condition.IsLessThanOrEqual] = "IsLessThanOrEqual";
  NumberCondition2[NumberCondition2["IsMACAddress"] = Condition.IsMACAddress] = "IsMACAddress";
  NumberCondition2[NumberCondition2["IsNumber"] = Condition.IsNumber] = "IsNumber";
  NumberCondition2[NumberCondition2["IsNegativeNumber"] = Condition.IsNegativeNumber] = "IsNegativeNumber";
  NumberCondition2[NumberCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  NumberCondition2[NumberCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  NumberCondition2[NumberCondition2["IsOddNumber"] = Condition.IsOddNumber] = "IsOddNumber";
  NumberCondition2[NumberCondition2["IsPassportNumber"] = Condition.IsPassportNumber] = "IsPassportNumber";
  NumberCondition2[NumberCondition2["IsPhoneNumber"] = Condition.IsPhoneNumber] = "IsPhoneNumber";
  NumberCondition2[NumberCondition2["IsPort"] = Condition.IsPort] = "IsPort";
  NumberCondition2[NumberCondition2["IsPositiveNumber"] = Condition.IsPositiveNumber] = "IsPositiveNumber";
  NumberCondition2[NumberCondition2["IsPostalCode"] = Condition.IsPostalCode] = "IsPostalCode";
  NumberCondition2[NumberCondition2["IsSemanticVersion"] = Condition.IsSemanticVersion] = "IsSemanticVersion";
  NumberCondition2[NumberCondition2["IsSSN"] = Condition.IsSSN] = "IsSSN";
  NumberCondition2[NumberCondition2["IsTaxIDNumber"] = Condition.IsTaxIDNumber] = "IsTaxIDNumber";
  NumberCondition2[NumberCondition2["IsUUID"] = Condition.IsUUID] = "IsUUID";
  NumberCondition2[NumberCondition2["IsVATIDNumber"] = Condition.IsVATIDNumber] = "IsVATIDNumber";
  return NumberCondition2;
})(NumberCondition || {});
var FloatCondition = ((FloatCondition2) => {
  FloatCondition2[FloatCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  FloatCondition2[FloatCondition2["IsFloat"] = Condition.IsFloat] = "IsFloat";
  FloatCondition2[FloatCondition2["IsGreaterThan"] = Condition.IsGreaterThan] = "IsGreaterThan";
  FloatCondition2[FloatCondition2["IsGreaterThanOrEqual"] = Condition.IsGreaterThanOrEqual] = "IsGreaterThanOrEqual";
  FloatCondition2[FloatCondition2["IsLessThan"] = Condition.IsLessThan] = "IsLessThan";
  FloatCondition2[FloatCondition2["IsLessThanOrEqual"] = Condition.IsLessThanOrEqual] = "IsLessThanOrEqual";
  FloatCondition2[FloatCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  FloatCondition2[FloatCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  FloatCondition2[FloatCondition2["IsNumber"] = Condition.IsNumber] = "IsNumber";
  FloatCondition2[FloatCondition2["IsNumeric"] = Condition.IsNumeric] = "IsNumeric";
  return FloatCondition2;
})(FloatCondition || {});
var IntegerCondition = ((IntegerCondition2) => {
  IntegerCondition2[IntegerCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  IntegerCondition2[IntegerCondition2["IsInteger"] = Condition.IsInteger] = "IsInteger";
  IntegerCondition2[IntegerCondition2["IsGreaterThan"] = Condition.IsGreaterThan] = "IsGreaterThan";
  IntegerCondition2[IntegerCondition2["IsGreaterThanOrEqual"] = Condition.IsGreaterThanOrEqual] = "IsGreaterThanOrEqual";
  IntegerCondition2[IntegerCondition2["IsLessThan"] = Condition.IsLessThan] = "IsLessThan";
  IntegerCondition2[IntegerCondition2["IsLessThanOrEqual"] = Condition.IsLessThanOrEqual] = "IsLessThanOrEqual";
  IntegerCondition2[IntegerCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  IntegerCondition2[IntegerCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  IntegerCondition2[IntegerCondition2["IsNumber"] = Condition.IsNumber] = "IsNumber";
  IntegerCondition2[IntegerCondition2["IsNumeric"] = Condition.IsNumeric] = "IsNumeric";
  return IntegerCondition2;
})(IntegerCondition || {});

var CreditCardCondition = ((CreditCardCondition2) => {
  CreditCardCondition2[CreditCardCondition2["IsCreditCard"] = Condition.IsCreditCard] = "IsCreditCard";
  CreditCardCondition2[CreditCardCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  CreditCardCondition2[CreditCardCondition2["IsLengthEqual"] = Condition.IsLengthEqual] = "IsLengthEqual";
  CreditCardCondition2[CreditCardCondition2["IsLengthGreaterThan"] = Condition.IsLengthGreaterThan] = "IsLengthGreaterThan";
  CreditCardCondition2[CreditCardCondition2["IsLengthGreaterThanOrEqual"] = Condition.IsLengthGreaterThanOrEqual] = "IsLengthGreaterThanOrEqual";
  CreditCardCondition2[CreditCardCondition2["IsLengthLessThan"] = Condition.IsLengthLessThan] = "IsLengthLessThan";
  CreditCardCondition2[CreditCardCondition2["IsLengthLessThanOrEqual"] = Condition.IsLengthLessThanOrEqual] = "IsLengthLessThanOrEqual";
  CreditCardCondition2[CreditCardCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  CreditCardCondition2[CreditCardCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  CreditCardCondition2[CreditCardCondition2["IsRegexMatch"] = Condition.IsRegexMatch] = "IsRegexMatch";
  CreditCardCondition2[CreditCardCondition2["IsNotRegexMatch"] = Condition.IsNotRegexMatch] = "IsNotRegexMatch";
  return CreditCardCondition2;
})(CreditCardCondition || {});
var EmailAddressCondition = ((EmailAddressCondition2) => {
  EmailAddressCondition2[EmailAddressCondition2["isEmailAddress"] = Condition.IsEmailAddress] = "isEmailAddress";
  EmailAddressCondition2[EmailAddressCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  EmailAddressCondition2[EmailAddressCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  EmailAddressCondition2[EmailAddressCondition2["IsLengthEqual"] = Condition.IsLengthEqual] = "IsLengthEqual";
  EmailAddressCondition2[EmailAddressCondition2["IsLengthGreaterThan"] = Condition.IsLengthGreaterThan] = "IsLengthGreaterThan";
  EmailAddressCondition2[EmailAddressCondition2["IsLengthGreaterThanOrEqual"] = Condition.IsLengthGreaterThanOrEqual] = "IsLengthGreaterThanOrEqual";
  EmailAddressCondition2[EmailAddressCondition2["IsLengthLessThan"] = Condition.IsLengthLessThan] = "IsLengthLessThan";
  EmailAddressCondition2[EmailAddressCondition2["IsLengthLessThanOrEqual"] = Condition.IsLengthLessThanOrEqual] = "IsLengthLessThanOrEqual";
  EmailAddressCondition2[EmailAddressCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  EmailAddressCondition2[EmailAddressCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  EmailAddressCondition2[EmailAddressCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  EmailAddressCondition2[EmailAddressCondition2["IsRegexMatch"] = Condition.IsRegexMatch] = "IsRegexMatch";
  EmailAddressCondition2[EmailAddressCondition2["IsNotRegexMatch"] = Condition.IsNotRegexMatch] = "IsNotRegexMatch";
  return EmailAddressCondition2;
})(EmailAddressCondition || {});
var LicensePlateNumber = ((LicensePlateNumber2) => {
  LicensePlateNumber2[LicensePlateNumber2["IsLicensePlateNumber"] = Condition.IsLicensePlateNumber] = "IsLicensePlateNumber";
  LicensePlateNumber2[LicensePlateNumber2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  LicensePlateNumber2[LicensePlateNumber2["IsNotRegexMatch"] = Condition.IsNotRegexMatch] = "IsNotRegexMatch";
  LicensePlateNumber2[LicensePlateNumber2["IsString"] = Condition.IsString] = "IsString";
  LicensePlateNumber2[LicensePlateNumber2["IsRegexMatch"] = Condition.IsRegexMatch] = "IsRegexMatch";
  return LicensePlateNumber2;
})(LicensePlateNumber || {});
var PassportNumberCondition = ((PassportNumberCondition2) => {
  PassportNumberCondition2[PassportNumberCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  PassportNumberCondition2[PassportNumberCondition2["IsPassportNumber"] = Condition.IsPassportNumber] = "IsPassportNumber";
  PassportNumberCondition2[PassportNumberCondition2["IsString"] = Condition.IsString] = "IsString";
  PassportNumberCondition2[PassportNumberCondition2["IsRegexMatch"] = Condition.IsRegexMatch] = "IsRegexMatch";
  return PassportNumberCondition2;
})(PassportNumberCondition || {});
var PasswordCondition = ((PasswordCondition2) => {
  PasswordCondition2[PasswordCondition2["IsComplexEnough"] = Condition.IsComplexEnough] = "IsComplexEnough";
  PasswordCondition2[PasswordCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  PasswordCondition2[PasswordCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  PasswordCondition2[PasswordCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  PasswordCondition2[PasswordCondition2["IsNotRegexMatch"] = Condition.IsNotRegexMatch] = "IsNotRegexMatch";
  PasswordCondition2[PasswordCondition2["IsLengthGreaterThan"] = Condition.IsLengthGreaterThan] = "IsLengthGreaterThan";
  PasswordCondition2[PasswordCondition2["IsLengthGreaterThanOrEqual"] = Condition.IsLengthGreaterThanOrEqual] = "IsLengthGreaterThanOrEqual";
  PasswordCondition2[PasswordCondition2["IsLengthLessThan"] = Condition.IsLengthLessThan] = "IsLengthLessThan";
  PasswordCondition2[PasswordCondition2["IsLengthLessThanOrEqual"] = Condition.IsLengthLessThanOrEqual] = "IsLengthLessThanOrEqual";
  PasswordCondition2[PasswordCondition2["IsStrongPassword"] = Condition.IsStrongPassword] = "IsStrongPassword";
  PasswordCondition2[PasswordCondition2["IsString"] = Condition.IsString] = "IsString";
  PasswordCondition2[PasswordCondition2["IsRegexMatch"] = Condition.IsRegexMatch] = "IsRegexMatch";
  return PasswordCondition2;
})(PasswordCondition || {});
var PhoneNumberCondition = ((PhoneNumberCondition2) => {
  PhoneNumberCondition2[PhoneNumberCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  PhoneNumberCondition2[PhoneNumberCondition2["IsNotRegexMatch"] = Condition.IsNotRegexMatch] = "IsNotRegexMatch";
  PhoneNumberCondition2[PhoneNumberCondition2["IsNumber"] = Condition.IsNumber] = "IsNumber";
  PhoneNumberCondition2[PhoneNumberCondition2["IsPhoneNumber"] = Condition.IsPhoneNumber] = "IsPhoneNumber";
  PhoneNumberCondition2[PhoneNumberCondition2["IsRegexMatch"] = Condition.IsRegexMatch] = "IsRegexMatch";
  return PhoneNumberCondition2;
})(PhoneNumberCondition || {});
var SocialSecurityNumberCondition = ((SocialSecurityNumberCondition2) => {
  SocialSecurityNumberCondition2[SocialSecurityNumberCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  SocialSecurityNumberCondition2[SocialSecurityNumberCondition2["IsSSN"] = Condition.IsSSN] = "IsSSN";
  SocialSecurityNumberCondition2[SocialSecurityNumberCondition2["IsString"] = Condition.IsString] = "IsString";
  SocialSecurityNumberCondition2[SocialSecurityNumberCondition2["IsRegexMatch"] = Condition.IsRegexMatch] = "IsRegexMatch";
  return SocialSecurityNumberCondition2;
})(SocialSecurityNumberCondition || {});

var AirportCondition = ((AirportCondition2) => {
  AirportCondition2[AirportCondition2["IsAirport"] = Condition.IsAirport] = "IsAirport";
  AirportCondition2[AirportCondition2["IsAlpha"] = Condition.IsAlpha] = "IsAlpha";
  AirportCondition2[AirportCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  AirportCondition2[AirportCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  AirportCondition2[AirportCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  AirportCondition2[AirportCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  AirportCondition2[AirportCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  AirportCondition2[AirportCondition2["IsString"] = Condition.IsString] = "IsString";
  return AirportCondition2;
})(AirportCondition || {});

var BICCondition = ((BICCondition2) => {
  BICCondition2[BICCondition2["Contains"] = Condition.Contains] = "Contains";
  BICCondition2[BICCondition2["IsBIC"] = Condition.IsBIC] = "IsBIC";
  BICCondition2[BICCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  BICCondition2[BICCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  BICCondition2[BICCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  BICCondition2[BICCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  BICCondition2[BICCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  BICCondition2[BICCondition2["IsString"] = Condition.IsString] = "IsString";
  return BICCondition2;
})(BICCondition || {});
var EANCondition = ((EANCondition2) => {
  EANCondition2[EANCondition2["Contains"] = Condition.Contains] = "Contains";
  EANCondition2[EANCondition2["IsEAN"] = Condition.IsEAN] = "IsEAN";
  EANCondition2[EANCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  EANCondition2[EANCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  EANCondition2[EANCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  EANCondition2[EANCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  EANCondition2[EANCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  EANCondition2[EANCondition2["IsString"] = Condition.IsString] = "IsString";
  return EANCondition2;
})(EANCondition || {});
var EINCondition = ((EINCondition2) => {
  EINCondition2[EINCondition2["Contains"] = Condition.Contains] = "Contains";
  EINCondition2[EINCondition2["IsEIN"] = Condition.IsEIN] = "IsEIN";
  EINCondition2[EINCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  EINCondition2[EINCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  EINCondition2[EINCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  EINCondition2[EINCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  EINCondition2[EINCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  EINCondition2[EINCondition2["IsString"] = Condition.IsString] = "IsString";
  return EINCondition2;
})(EINCondition || {});
var IBANCondition = ((IBANCondition2) => {
  IBANCondition2[IBANCondition2["Contains"] = Condition.Contains] = "Contains";
  IBANCondition2[IBANCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  IBANCondition2[IBANCondition2["IsIBAN"] = Condition.IsIBAN] = "IsIBAN";
  IBANCondition2[IBANCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  IBANCondition2[IBANCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  IBANCondition2[IBANCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  IBANCondition2[IBANCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  IBANCondition2[IBANCondition2["IsString"] = Condition.IsString] = "IsString";
  return IBANCondition2;
})(IBANCondition || {});
var ISBNCondition = ((ISBNCondition2) => {
  ISBNCondition2[ISBNCondition2["Contains"] = Condition.Contains] = "Contains";
  ISBNCondition2[ISBNCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  ISBNCondition2[ISBNCondition2["IsISBN"] = Condition.IsISBN] = "IsISBN";
  ISBNCondition2[ISBNCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  ISBNCondition2[ISBNCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  ISBNCondition2[ISBNCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  ISBNCondition2[ISBNCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  ISBNCondition2[ISBNCondition2["IsString"] = Condition.IsString] = "IsString";
  return ISBNCondition2;
})(ISBNCondition || {});
var ISINCondition = ((ISINCondition2) => {
  ISINCondition2[ISINCondition2["Contains"] = Condition.Contains] = "Contains";
  ISINCondition2[ISINCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  ISINCondition2[ISINCondition2["IsISIN"] = Condition.IsISIN] = "IsISIN";
  ISINCondition2[ISINCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  ISINCondition2[ISINCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  ISINCondition2[ISINCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  ISINCondition2[ISINCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  ISINCondition2[ISINCondition2["IsString"] = Condition.IsString] = "IsString";
  return ISINCondition2;
})(ISINCondition || {});
var ISMNCondition = ((ISMNCondition2) => {
  ISMNCondition2[ISMNCondition2["Contains"] = Condition.Contains] = "Contains";
  ISMNCondition2[ISMNCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  ISMNCondition2[ISMNCondition2["IsISMN"] = Condition.IsISMN] = "IsISMN";
  ISMNCondition2[ISMNCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  ISMNCondition2[ISMNCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  ISMNCondition2[ISMNCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  ISMNCondition2[ISMNCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  ISMNCondition2[ISMNCondition2["IsString"] = Condition.IsString] = "IsString";
  return ISMNCondition2;
})(ISMNCondition || {});
var ISSNCondition = ((ISSNCondition2) => {
  ISSNCondition2[ISSNCondition2["Contains"] = Condition.Contains] = "Contains";
  ISSNCondition2[ISSNCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  ISSNCondition2[ISSNCondition2["IsISSN"] = Condition.IsISSN] = "IsISSN";
  ISSNCondition2[ISSNCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  ISSNCondition2[ISSNCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  ISSNCondition2[ISSNCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  ISSNCondition2[ISSNCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  ISSNCondition2[ISSNCondition2["IsString"] = Condition.IsString] = "IsString";
  return ISSNCondition2;
})(ISSNCondition || {});
var TaxIDNumberCondition = ((TaxIDNumberCondition2) => {
  TaxIDNumberCondition2[TaxIDNumberCondition2["Contains"] = Condition.Contains] = "Contains";
  TaxIDNumberCondition2[TaxIDNumberCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  TaxIDNumberCondition2[TaxIDNumberCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  TaxIDNumberCondition2[TaxIDNumberCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  TaxIDNumberCondition2[TaxIDNumberCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  TaxIDNumberCondition2[TaxIDNumberCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  TaxIDNumberCondition2[TaxIDNumberCondition2["IsString"] = Condition.IsString] = "IsString";
  TaxIDNumberCondition2[TaxIDNumberCondition2["IsTaxIDNumber"] = Condition.IsTaxIDNumber] = "IsTaxIDNumber";
  return TaxIDNumberCondition2;
})(TaxIDNumberCondition || {});
var VATCondition = ((VATCondition2) => {
  VATCondition2[VATCondition2["Contains"] = Condition.Contains] = "Contains";
  VATCondition2[VATCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  VATCondition2[VATCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  VATCondition2[VATCondition2["IsNotEqual"] = Condition.IsNotEqual] = "IsNotEqual";
  VATCondition2[VATCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  VATCondition2[VATCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  VATCondition2[VATCondition2["IsString"] = Condition.IsString] = "IsString";
  VATCondition2[VATCondition2["IsVATIDNumber"] = Condition.IsVATIDNumber] = "IsVATIDNumber";
  return VATCondition2;
})(VATCondition || {});

var StringCondition = ((StringCondition2) => {
  StringCondition2[StringCondition2["Contains"] = Condition.Contains] = "Contains";
  StringCondition2[StringCondition2["HasNumberCount"] = Condition.HasNumberCount] = "HasNumberCount";
  StringCondition2[StringCondition2["HasLowercaseCount"] = Condition.HasLowercaseCount] = "HasLowercaseCount";
  StringCondition2[StringCondition2["HasLetterCount"] = Condition.HasLetterCount] = "HasLetterCount";
  StringCondition2[StringCondition2["HasSpacesCount"] = Condition.HasSpacesCount] = "HasSpacesCount";
  StringCondition2[StringCondition2["HasSymbolCount"] = Condition.HasSymbolCount] = "HasSymbolCount";
  StringCondition2[StringCondition2["HasUppercaseCount"] = Condition.HasUppercaseCount] = "HasUppercaseCount";
  StringCondition2[StringCondition2["IsAlpha"] = Condition.IsAlpha] = "IsAlpha";
  StringCondition2[StringCondition2["IsAlphanumeric"] = Condition.IsAlphanumeric] = "IsAlphanumeric";
  StringCondition2[StringCondition2["IsAscii"] = Condition.IsAscii] = "IsAscii";
  StringCondition2[StringCondition2["IsBase64"] = Condition.IsBase64] = "IsBase64";
  StringCondition2[StringCondition2["IsColor"] = Condition.IsColor] = "IsColor";
  StringCondition2[StringCondition2["IsComplexEnough"] = Condition.IsComplexEnough] = "IsComplexEnough";
  StringCondition2[StringCondition2["IsCreditCard"] = Condition.IsCreditCard] = "IsCreditCard";
  StringCondition2[StringCondition2["IsDataURI"] = Condition.IsDataURI] = "IsDataURI";
  StringCondition2[StringCondition2["IsDomainName"] = Condition.IsDomainName] = "IsDomainName";
  StringCondition2[StringCondition2["IsEmailAddress"] = Condition.IsEmailAddress] = "IsEmailAddress";
  StringCondition2[StringCondition2["IsEthereumAddress"] = Condition.IsEthereumAddress] = "IsEthereumAddress";
  StringCondition2[StringCondition2["IsEAN"] = Condition.IsEAN] = "IsEAN";
  StringCondition2[StringCondition2["IsEIN"] = Condition.IsEIN] = "IsEIN";
  StringCondition2[StringCondition2["IsEqual"] = Condition.IsEqual] = "IsEqual";
  StringCondition2[StringCondition2["IsIBAN"] = Condition.IsIBAN] = "IsIBAN";
  StringCondition2[StringCondition2["IsHSLColor"] = Condition.IsHSLColor] = "IsHSLColor";
  StringCondition2[StringCondition2["IsHexColor"] = Condition.IsHexColor] = "IsHexColor";
  StringCondition2[StringCondition2["IsHexadecimal"] = Condition.IsHexadecimal] = "IsHexadecimal";
  StringCondition2[StringCondition2["IsIdentityCardCode"] = Condition.IsIdentityCardCode] = "IsIdentityCardCode";
  StringCondition2[StringCondition2["IsIMEI"] = Condition.IsIMEI] = "IsIMEI";
  StringCondition2[StringCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  StringCondition2[StringCondition2["IsIPAddress"] = Condition.IsIPAddress] = "IsIPAddress";
  StringCondition2[StringCondition2["IsInIPAddressRange"] = Condition.IsInIPAddressRange] = "IsInIPAddressRange";
  StringCondition2[StringCondition2["IsISBN"] = Condition.IsISBN] = "IsISBN";
  StringCondition2[StringCondition2["IsISIN"] = Condition.IsISIN] = "IsISIN";
  StringCondition2[StringCondition2["IsISMN"] = Condition.IsISMN] = "IsISMN";
  StringCondition2[StringCondition2["IsISRC"] = Condition.IsISRC] = "IsISRC";
  StringCondition2[StringCondition2["IsISSN"] = Condition.IsISSN] = "IsISSN";
  StringCondition2[StringCondition2["IsLanguage"] = Condition.IsLanguage] = "IsLanguage";
  StringCondition2[StringCondition2["IsLatitude"] = Condition.IsLatitude] = "IsLatitude";
  StringCondition2[StringCondition2["IsLongitude"] = Condition.IsLongitude] = "IsLongitude";
  StringCondition2[StringCondition2["IsLengthEqual"] = Condition.IsLengthEqual] = "IsLengthEqual";
  StringCondition2[StringCondition2["IsLengthGreaterThan"] = Condition.IsLengthGreaterThan] = "IsLengthGreaterThan";
  StringCondition2[StringCondition2["IsLengthGreaterThanOrEqual"] = Condition.IsLengthGreaterThanOrEqual] = "IsLengthGreaterThanOrEqual";
  StringCondition2[StringCondition2["IsLengthLessThan"] = Condition.IsLengthLessThan] = "IsLengthLessThan";
  StringCondition2[StringCondition2["IsLengthLessThanOrEqual"] = Condition.IsLengthLessThanOrEqual] = "IsLengthLessThanOrEqual";
  StringCondition2[StringCondition2["IsLicensePlateNumber"] = Condition.IsLicensePlateNumber] = "IsLicensePlateNumber";
  StringCondition2[StringCondition2["IsLowercase"] = Condition.IsLowercase] = "IsLowercase";
  StringCondition2[StringCondition2["IsOctal"] = Condition.IsOctal] = "IsOctal";
  StringCondition2[StringCondition2["IsMACAddress"] = Condition.IsMACAddress] = "IsMACAddress";
  StringCondition2[StringCondition2["IsMD5"] = Condition.IsMD5] = "IsMD5";
  StringCondition2[StringCondition2["IsMagnetURI"] = Condition.IsMagnetURI] = "IsMagnetURI";
  StringCondition2[StringCondition2["IsMarkdown"] = Condition.IsMarkdown] = "IsMarkdown";
  StringCondition2[StringCondition2["IsMimeType"] = Condition.IsMimeType] = "IsMimeType";
  StringCondition2[StringCondition2["IsMonth"] = Condition.IsMonth] = "IsMonth";
  StringCondition2[StringCondition2["IsNotInIPAddressRange"] = Condition.IsNotInIPAddressRange] = "IsNotInIPAddressRange";
  StringCondition2[StringCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  StringCondition2[StringCondition2["IsNotNull"] = Condition.IsNotNull] = "IsNotNull";
  StringCondition2[StringCondition2["IsNotRegexMatch"] = Condition.IsNotRegexMatch] = "IsNotRegexMatch";
  StringCondition2[StringCondition2["IsNumber"] = Condition.IsNumber] = "IsNumber";
  StringCondition2[StringCondition2["IsNumeric"] = Condition.IsNumeric] = "IsNumeric";
  StringCondition2[StringCondition2["IsPassportNumber"] = Condition.IsPassportNumber] = "IsPassportNumber";
  StringCondition2[StringCondition2["IsPhoneNumber"] = Condition.IsPhoneNumber] = "IsPhoneNumber";
  StringCondition2[StringCondition2["IsPort"] = Condition.IsPort] = "IsPort";
  StringCondition2[StringCondition2["IsPostalCode"] = Condition.IsPostalCode] = "IsPostalCode";
  StringCondition2[StringCondition2["IsProvince"] = Condition.IsProvince] = "IsProvince";
  StringCondition2[StringCondition2["IsRegexMatch"] = Condition.IsRegexMatch] = "IsRegexMatch";
  StringCondition2[StringCondition2["IsSemanticVersion"] = Condition.IsSemanticVersion] = "IsSemanticVersion";
  StringCondition2[StringCondition2["IsSlug"] = Condition.IsSlug] = "IsSlug";
  StringCondition2[StringCondition2["IsSSN"] = Condition.IsSSN] = "IsSSN";
  StringCondition2[StringCondition2["IsState"] = Condition.IsState] = "IsState";
  StringCondition2[StringCondition2["IsStreetAddress"] = Condition.IsStreetAddress] = "IsStreetAddress";
  StringCondition2[StringCondition2["IsString"] = Condition.IsString] = "IsString";
  StringCondition2[StringCondition2["IsTaxIDNumber"] = Condition.IsTaxIDNumber] = "IsTaxIDNumber";
  StringCondition2[StringCondition2["IsURL"] = Condition.IsURL] = "IsURL";
  StringCondition2[StringCondition2["IsUUID"] = Condition.IsUUID] = "IsUUID";
  StringCondition2[StringCondition2["IsUppercase"] = Condition.IsUppercase] = "IsUppercase";
  StringCondition2[StringCondition2["IsVATIDNumber"] = Condition.IsVATIDNumber] = "IsVATIDNumber";
  StringCondition2[StringCondition2["IsWeekday"] = Condition.IsWeekday] = "IsWeekday";
  StringCondition2[StringCondition2["IsWeekend"] = Condition.IsWeekend] = "IsWeekend";
  StringCondition2[StringCondition2["IsYear"] = Condition.IsYear] = "IsYear";
  return StringCondition2;
})(StringCondition || {});
var LongTextCondition = ((LongTextCondition2) => {
  LongTextCondition2[LongTextCondition2["Contains"] = Condition.Contains] = "Contains";
  LongTextCondition2[LongTextCondition2["IsAlpha"] = Condition.IsAlpha] = "IsAlpha";
  LongTextCondition2[LongTextCondition2["IsAlphanumeric"] = Condition.IsAlphanumeric] = "IsAlphanumeric";
  LongTextCondition2[LongTextCondition2["IsInList"] = Condition.IsInList] = "IsInList";
  LongTextCondition2[LongTextCondition2["IsMarkdown"] = Condition.IsMarkdown] = "IsMarkdown";
  LongTextCondition2[LongTextCondition2["IsNotInList"] = Condition.IsNotInList] = "IsNotInList";
  LongTextCondition2[LongTextCondition2["IsNumeric"] = Condition.IsNumeric] = "IsNumeric";
  LongTextCondition2[LongTextCondition2["IsLowercase"] = Condition.IsLowercase] = "IsLowercase";
  LongTextCondition2[LongTextCondition2["IsString"] = Condition.IsString] = "IsString";
  LongTextCondition2[LongTextCondition2["IsUppercase"] = Condition.IsUppercase] = "IsUppercase";
  return LongTextCondition2;
})(LongTextCondition || {});

let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63;
    if (byte < 36) {
      id += byte.toString(36);
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase();
    } else if (byte > 62) {
      id += '-';
    } else {
      id += '_';
    }
    return id
  }, '');

const commonProperties = [
	{
		property: 'name',
		enumerable: false,
	},
	{
		property: 'message',
		enumerable: false,
	},
	{
		property: 'stack',
		enumerable: false,
	},
	{
		property: 'code',
		enumerable: true,
	},
];

const toJsonWasCalled = Symbol('.toJSON was called');

const toJSON = from => {
	from[toJsonWasCalled] = true;
	const json = from.toJSON();
	delete from[toJsonWasCalled];
	return json;
};

const destroyCircular = ({
	from,
	seen,
	to_,
	forceEnumerable,
	maxDepth,
	depth,
}) => {
	const to = to_ || (Array.isArray(from) ? [] : {});

	seen.push(from);

	if (depth >= maxDepth) {
		return to;
	}

	if (typeof from.toJSON === 'function' && from[toJsonWasCalled] !== true) {
		return toJSON(from);
	}

	for (const [key, value] of Object.entries(from)) {
		// eslint-disable-next-line node/prefer-global/buffer
		if (typeof Buffer === 'function' && Buffer.isBuffer(value)) {
			to[key] = '[object Buffer]';
			continue;
		}

		// TODO: Use `stream.isReadable()` when targeting Node.js 18.
		if (value !== null && typeof value === 'object' && typeof value.pipe === 'function') {
			to[key] = '[object Stream]';
			continue;
		}

		if (typeof value === 'function') {
			continue;
		}

		if (!value || typeof value !== 'object') {
			to[key] = value;
			continue;
		}

		if (!seen.includes(from[key])) {
			depth++;

			to[key] = destroyCircular({
				from: from[key],
				seen: [...seen],
				forceEnumerable,
				maxDepth,
				depth,
			});
			continue;
		}

		to[key] = '[Circular]';
	}

	for (const {property, enumerable} of commonProperties) {
		if (typeof from[property] === 'string') {
			Object.defineProperty(to, property, {
				value: from[property],
				enumerable: forceEnumerable ? true : enumerable,
				configurable: true,
				writable: true,
			});
		}
	}

	return to;
};

function serializeError(value, options = {}) {
	const {maxDepth = Number.POSITIVE_INFINITY} = options;

	if (typeof value === 'object' && value !== null) {
		return destroyCircular({
			from: value,
			seen: [],
			forceEnumerable: true,
			maxDepth,
			depth: 0,
		});
	}

	// People sometimes throw things besides Error objects…
	if (typeof value === 'function') {
		// `JSON.stringify()` discards functions. We do too, unless a function is thrown directly.
		return `[Function: ${(value.name || 'anonymous')}]`;
	}

	return value;
}

var ExceptionCode = /* @__PURE__ */ ((ExceptionCode2) => {
  ExceptionCode2[ExceptionCode2["Warning"] = 999] = "Warning";
  ExceptionCode2[ExceptionCode2["Exception"] = 1e3] = "Exception";
  ExceptionCode2[ExceptionCode2["UnmanagedException"] = 1001] = "UnmanagedException";
  ExceptionCode2[ExceptionCode2["CaughtException"] = 1002] = "CaughtException";
  ExceptionCode2[ExceptionCode2["UncaughtException"] = 1003] = "UncaughtException";
  ExceptionCode2[ExceptionCode2["UnhandledPromiseRejectionException"] = 1004] = "UnhandledPromiseRejectionException";
  ExceptionCode2[ExceptionCode2["AuthenticationException"] = 2e3] = "AuthenticationException";
  ExceptionCode2[ExceptionCode2["AuthenticationExpiredAccessTokenException"] = 2001] = "AuthenticationExpiredAccessTokenException";
  ExceptionCode2[ExceptionCode2["AuthenticationInvalidAccessTokenException"] = 2002] = "AuthenticationInvalidAccessTokenException";
  ExceptionCode2[ExceptionCode2["AuthenticationMissingAccessTokenException"] = 2003] = "AuthenticationMissingAccessTokenException";
  ExceptionCode2[ExceptionCode2["AuthenticationExpiredRefreshTokenException"] = 2004] = "AuthenticationExpiredRefreshTokenException";
  ExceptionCode2[ExceptionCode2["AuthenticationInvalidRefreshTokenException"] = 2005] = "AuthenticationInvalidRefreshTokenException";
  ExceptionCode2[ExceptionCode2["AuthenticationMissingRefreshTokenException"] = 2006] = "AuthenticationMissingRefreshTokenException";
  ExceptionCode2[ExceptionCode2["AuthenticationMissingDeviceKeyException"] = 2007] = "AuthenticationMissingDeviceKeyException";
  ExceptionCode2[ExceptionCode2["AuthenticationUnAuthorizedAccessException"] = 2008] = "AuthenticationUnAuthorizedAccessException";
  ExceptionCode2[ExceptionCode2["AuthenticationCodeMismatchException"] = 2009] = "AuthenticationCodeMismatchException";
  ExceptionCode2[ExceptionCode2["AuthenticationExpiredCodeException"] = 2010] = "AuthenticationExpiredCodeException";
  ExceptionCode2[ExceptionCode2["AuthenticationLoginException"] = 2011] = "AuthenticationLoginException";
  ExceptionCode2[ExceptionCode2["AuthenticationLoginInvalidCredentialsException"] = 2012] = "AuthenticationLoginInvalidCredentialsException";
  ExceptionCode2[ExceptionCode2["AuthenticationLoginTooManyFailedAttemptsException"] = 2013] = "AuthenticationLoginTooManyFailedAttemptsException";
  ExceptionCode2[ExceptionCode2["AuthenticationLimitExceededException"] = 2014] = "AuthenticationLimitExceededException";
  ExceptionCode2[ExceptionCode2["AuthenticationUnauthorizedAccessException"] = 2015] = "AuthenticationUnauthorizedAccessException";
  ExceptionCode2[ExceptionCode2["AuthenticationTooManyRequestsException"] = 2016] = "AuthenticationTooManyRequestsException";
  ExceptionCode2[ExceptionCode2["AuthenticationUserNotFoundException"] = 2017] = "AuthenticationUserNotFoundException";
  ExceptionCode2[ExceptionCode2["AuthenticationSignupException"] = 2018] = "AuthenticationSignupException";
  ExceptionCode2[ExceptionCode2["AuthenticationUsernameAvailabilityCheckException"] = 2019] = "AuthenticationUsernameAvailabilityCheckException";
  ExceptionCode2[ExceptionCode2["AuthenticationUsernameExistsException"] = 2020] = "AuthenticationUsernameExistsException";
  ExceptionCode2[ExceptionCode2["AuthenticationAliasExistException"] = 2021] = "AuthenticationAliasExistException";
  ExceptionCode2[ExceptionCode2["AuthenticationCodeDeliveryFailureException"] = 2022] = "AuthenticationCodeDeliveryFailureException";
  ExceptionCode2[ExceptionCode2["AuthenticationMFAMethodNotFoundException"] = 2023] = "AuthenticationMFAMethodNotFoundException";
  ExceptionCode2[ExceptionCode2["AuthenticationNotAuthorizedException"] = 2024] = "AuthenticationNotAuthorizedException";
  ExceptionCode2[ExceptionCode2["AuthenticationPasswordResetRequiredException"] = 2025] = "AuthenticationPasswordResetRequiredException";
  ExceptionCode2[ExceptionCode2["AuthenticationUserNotConfirmedException"] = 2026] = "AuthenticationUserNotConfirmedException";
  ExceptionCode2[ExceptionCode2["DatabaseException"] = 3e3] = "DatabaseException";
  ExceptionCode2[ExceptionCode2["SequelizeNotInitializedException"] = 3001] = "SequelizeNotInitializedException";
  ExceptionCode2[ExceptionCode2["ProcessException"] = 4e3] = "ProcessException";
  ExceptionCode2[ExceptionCode2["ProcessWarningException"] = 4001] = "ProcessWarningException";
  ExceptionCode2[ExceptionCode2["KillProcessException"] = 4002] = "KillProcessException";
  ExceptionCode2[ExceptionCode2["FatalException"] = 4003] = "FatalException";
  ExceptionCode2[ExceptionCode2["ProcessSigTermException"] = 4004] = "ProcessSigTermException";
  ExceptionCode2[ExceptionCode2["ProcessSigIntException"] = 4005] = "ProcessSigIntException";
  ExceptionCode2[ExceptionCode2["MissingEnvironmentVariable"] = 4006] = "MissingEnvironmentVariable";
  ExceptionCode2[ExceptionCode2["NetworkException"] = 5e3] = "NetworkException";
  ExceptionCode2[ExceptionCode2["HttpException"] = 5001] = "HttpException";
  ExceptionCode2[ExceptionCode2["HttpRequestException"] = 5002] = "HttpRequestException";
  ExceptionCode2[ExceptionCode2["HttpRequestResourceNotFoundException"] = 5003] = "HttpRequestResourceNotFoundException";
  ExceptionCode2[ExceptionCode2["HttpResponseException"] = 5004] = "HttpResponseException";
  ExceptionCode2[ExceptionCode2["ServiceProviderException"] = 6e3] = "ServiceProviderException";
  ExceptionCode2[ExceptionCode2["AWSException"] = 6001] = "AWSException";
  ExceptionCode2[ExceptionCode2["AWSMissingAccessKeyException"] = 6002] = "AWSMissingAccessKeyException";
  ExceptionCode2[ExceptionCode2["AWSMissingSecretKeyException"] = 6003] = "AWSMissingSecretKeyException";
  ExceptionCode2[ExceptionCode2["CognitoException"] = 6004] = "CognitoException";
  ExceptionCode2[ExceptionCode2["CognitoInternalErrorException"] = 6005] = "CognitoInternalErrorException";
  ExceptionCode2[ExceptionCode2["CognitoInvalidEmailRoleAccessPolicyException"] = 6006] = "CognitoInvalidEmailRoleAccessPolicyException";
  ExceptionCode2[ExceptionCode2["CognitoInvalidLambdaResponseException"] = 6007] = "CognitoInvalidLambdaResponseException";
  ExceptionCode2[ExceptionCode2["CognitoUserLambdaValidationException"] = 6008] = "CognitoUserLambdaValidationException";
  ExceptionCode2[ExceptionCode2["CognitoInvalidParameterException"] = 6009] = "CognitoInvalidParameterException";
  ExceptionCode2[ExceptionCode2["CognitoInvalidSmsRoleAccessPolicyException"] = 6010] = "CognitoInvalidSmsRoleAccessPolicyException";
  ExceptionCode2[ExceptionCode2["CognitoInvalidSmsRoleTrustRelationshipException"] = 6011] = "CognitoInvalidSmsRoleTrustRelationshipException";
  ExceptionCode2[ExceptionCode2["CognitoInvalidUserPoolConfigurationException"] = 6012] = "CognitoInvalidUserPoolConfigurationException";
  ExceptionCode2[ExceptionCode2["CognitoResourceNotFoundException"] = 6013] = "CognitoResourceNotFoundException";
  ExceptionCode2[ExceptionCode2["CognitoMissingUserPoolClientIdException"] = 6014] = "CognitoMissingUserPoolClientIdException";
  ExceptionCode2[ExceptionCode2["CognitoMissingUserPoolIdException"] = 6015] = "CognitoMissingUserPoolIdException";
  ExceptionCode2[ExceptionCode2["CognitoUnexpectedLambdaException"] = 6016] = "CognitoUnexpectedLambdaException";
  ExceptionCode2[ExceptionCode2["StripeException"] = 6017] = "StripeException";
  ExceptionCode2[ExceptionCode2["StripeMissingSecretKeyException"] = 6018] = "StripeMissingSecretKeyException";
  ExceptionCode2[ExceptionCode2["StripeSubscriptionCreationFailedException"] = 6019] = "StripeSubscriptionCreationFailedException";
  ExceptionCode2[ExceptionCode2["StripePaymentMethodRequiredException"] = 6020] = "StripePaymentMethodRequiredException";
  ExceptionCode2[ExceptionCode2["UserException"] = 7e3] = "UserException";
  ExceptionCode2[ExceptionCode2["NullUserException"] = 7001] = "NullUserException";
  ExceptionCode2[ExceptionCode2["UserStateConflictException"] = 7002] = "UserStateConflictException";
  ExceptionCode2[ExceptionCode2["NullAccountException"] = 7003] = "NullAccountException";
  ExceptionCode2[ExceptionCode2["ValidationException"] = 8e3] = "ValidationException";
  ExceptionCode2[ExceptionCode2["InvalidTypeException"] = 8001] = "InvalidTypeException";
  ExceptionCode2[ExceptionCode2["MissingArgumentException"] = 8002] = "MissingArgumentException";
  ExceptionCode2[ExceptionCode2["MissingPropertyException"] = 8003] = "MissingPropertyException";
  ExceptionCode2[ExceptionCode2["InvalidArgumentException"] = 8004] = "InvalidArgumentException";
  ExceptionCode2[ExceptionCode2["InvalidPropertyException"] = 8005] = "InvalidPropertyException";
  ExceptionCode2[ExceptionCode2["MissingRequestBodyPropertyException"] = 8006] = "MissingRequestBodyPropertyException";
  ExceptionCode2[ExceptionCode2["MissingRequestUrlParameterException"] = 8007] = "MissingRequestUrlParameterException";
  ExceptionCode2[ExceptionCode2["MissingCookieException"] = 8008] = "MissingCookieException";
  return ExceptionCode2;
})(ExceptionCode || {});

class Exception extends Error {
  constructor(message, details) {
    super(message);
    this.code = ExceptionCode.Exception;
    this.friendlyMessage = "An unknown error has occurred. :(";
    this.logLevel = LogLevel.Exception;
    const actualProto = new.target.prototype;
    this.__proto__ = actualProto;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(details?.cause ?? this, Exception);
    }
    this.id = nanoid();
    this.name = this.constructor.name;
    this.created = new Date().toString();
    this.description = details?.description ?? this.description;
    this.remediation = details?.remediation ?? this.remediation;
    this.scope = details?.scope ?? this.scope;
    if (details) {
      const {
        cause,
        context,
        data,
        model,
        form,
        origin,
        pii,
        request,
        response,
        tags,
        task,
        user
      } = details;
      this.cause = cause;
      this.context = context;
      this.data = data;
      this.model = model;
      this.form = form;
      this.origin = origin;
      this.pii = pii;
      this.request = request;
      this.response = response;
      this.task = task;
      this.tags = tags;
      this.user = user;
    }
  }
  toJSON() {
    return serializeError(this);
  }
}

const logger = new pe();
async function captureError(error, options) {
  try {
    if (error instanceof Exception) {
      logger.exception(error.toJSON());
    } else if (error instanceof Error) {
      const exception = new Exception(error.message, { cause: error });
      logger.exception(exception.toJSON());
    } else {
      throw new Exception("Invalid exception or error instance passed to capturer.");
    }
    return { success: true };
  } catch {
    const exception = new Exception(error.message, { cause: error });
    logger.exception(exception.toJSON());
    return { success: false };
  }
}

var RetryStrategy = /* @__PURE__ */ ((RetryStrategy2) => {
  RetryStrategy2["Simple"] = "simple";
  RetryStrategy2["ExponentialBackoff"] = "exponential";
  RetryStrategy2["CircuitBreaker"] = "circuit_breaker";
  return RetryStrategy2;
})(RetryStrategy || {});

class ProcessException extends Exception {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.ProcessException;
    this.description = "A exception was caught in a process.";
    this.logLevel = LogLevel.Exception;
  }
}
class ProcessWarningException extends ProcessException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.ProcessWarningException;
    this.description = "A warning was caught in a process.";
    this.logLevel = LogLevel.Warning;
  }
}
class KillProcessException extends ProcessException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.KillProcessException;
    this.description = 'Exception thrown to kill a Node.js "gracefully".';
    this.logLevel = LogLevel.Critical;
  }
}
class ProcessSigTermException extends ProcessException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.ProcessSigTermException;
    this.description = "Process received SIGTERM termination code.";
    this.logLevel = LogLevel.Critical;
  }
}
class ProcessSigIntException extends ProcessException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.ProcessSigIntException;
    this.description = "Process received SIGINT termination code.";
    this.logLevel = LogLevel.Critical;
  }
}
class FatalException extends ProcessException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.FatalException;
    this.description = "An fatal exception occurred which has crashed the server.";
    this.logLevel = LogLevel.Critical;
  }
}
class MissingEnvironmentVariable extends ProcessException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.MissingEnvironmentVariable;
    this.description = "An environment variable is not set or unavailable.";
    this.logLevel = LogLevel.Critical;
  }
}

class Warning extends Exception {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.Warning;
    this.description = "A warning exception has been thrown.";
    this.friendlyMessage = "An unknown warning has occurred.";
    this.remediation = {
      response: {
        code: 500
      },
      retry: {
        limit: 3
      }
    };
  }
}
class UnmanagedException extends Exception {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.UnmanagedException;
    this.description = `An "Error" object that isn't managed by AppLab`;
    this.friendlyMessage = "An unknown error has occurred.";
    this.remediation = {
      response: {
        code: 500
      },
      retry: {
        limit: 3
      }
    };
  }
}
class CaughtException extends Exception {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.CaughtException;
    this.description = "An exception was caught within a try block.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 500
      },
      retry: {
        limit: 3
      }
    };
  }
}
class UncaughtException extends Exception {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.UncaughtException;
    this.description = "An uncaught exception bubbled up and was caught automatically.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 500
      },
      retry: {
        limit: 3
      }
    };
  }
}
class UnhandledPromiseRejectionException extends Exception {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.UnhandledPromiseRejectionException;
    this.description = "An unhandled promise rejection was caught automatically.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 500
      },
      retry: {
        limit: 3
      }
    };
  }
}

function handleProcessInterupt(cb) {
  process.on("SIGINT", () => {
    const exception = new ProcessSigIntException("SIGINT signal received.", {});
    if (cb)
      cb(exception);
  });
}
function handleProcessTermination(cb) {
  process.on("SIGTERM", () => {
    const exception = new ProcessSigTermException("SIGTERM signal received", {});
    if (cb)
      cb(exception);
  });
}
function handleProcessExceptions(cb) {
  process.on("uncaughtException", async (err) => {
    if (err.name !== KillProcessException.name && cb)
      cb(err);
  });
  process.on("unhandledRejection", async (err) => {
    if (err.name !== KillProcessException.name) {
      const exception = new UnhandledPromiseRejectionException(`Unhandled Rejection: ${err.name}`, {
        cause: err
      });
      if (cb)
        cb(exception);
    }
  });
  process.on("warning", (err) => {
    if (cb)
      cb(err);
  });
}

class ExceptionsClient {
  constructor({ environment, platform, node }) {
    this.environment = environment;
    this.platform = platform;
    if (node) {
      if (node.exceptionsHandler)
        handleProcessExceptions(node.exceptionsHandler);
      if (node.interuptHandler)
        handleProcessInterupt(node.interuptHandler);
      if (node.terminationHandler)
        handleProcessTermination(node.terminationHandler);
    }
  }
}

class AuthenticationException extends Exception {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationException;
    this.description = "Generic or unknown exceptions associated with user authentication.";
    this.friendlyMessage = "An unknown error occurred.";
    this.logLevel = LogLevel.Warning;
    this.remediation = {
      response: {
        code: 401
      },
      retry: {
        limit: 3,
        strategy: RetryStrategy.CircuitBreaker
      }
    };
  }
}
class AuthenticationUnauthorizedAccessException extends AuthenticationException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationUnauthorizedAccessException;
    this.description = "User lacks permissions to access the requested resource.";
    this.logLevel = LogLevel.Warning;
    this.remediation = {
      response: {
        code: 403
      },
      retry: false
    };
  }
}
class AuthenticationLimitExceededException extends AuthenticationException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationLimitExceededException;
    this.description = "This exception is thrown when a user exceeds the limit for a requested AWS resource";
    this.friendlyMessage = "You are trying to access this resource too often.";
    this.logLevel = LogLevel.Warning;
    this.remediation = {
      response: {
        code: 429
      },
      retry: false
    };
  }
}
class AuthenticationNotAuthorizedException extends AuthenticationException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationNotAuthorizedException;
    this.description = "The Auth user does not have permission to perform this action.";
    this.friendlyMessage = "You need to be logged in or have proper permissions to access this resource.";
    this.logLevel = LogLevel.Warning;
    this.remediation = {
      response: {
        code: 403
      },
      retry: false
    };
  }
}
class AuthenticationTooManyRequestsException extends AuthenticationException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationTooManyRequestsException;
    this.description = "This exception is thrown when the user has made too many requests for a given operation.";
    this.friendlyMessage = "You are trying to access this resource too often.";
    this.logLevel = LogLevel.Warning;
    this.remediation = {
      response: {
        code: 429
      },
      retry: false
    };
  }
}
class AuthenticationUserNotFoundException extends AuthenticationException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationUserNotFoundException;
    this.description = "This exception is thrown when the Auth service cannot find a user with the provided username.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 500
      },
      retry: false
    };
  }
}

class AuthenticationPasswordResetRequiredException extends AuthenticationException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationPasswordResetRequiredException;
    this.description = "This exception is thrown when a password reset is required.";
    this.friendlyMessage = "A password reset is required in order to login.";
    this.logLevel = LogLevel.Warning;
    this.remediation = {
      response: {
        code: 403
      },
      retry: false
    };
  }
}

class AuthenticationLoginException extends AuthenticationException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationLoginException;
    this.description = "An exception occurred while logging a user in.";
    this.friendlyMessage = "An unknown error occurred.";
    this.logLevel = LogLevel.Critical;
    this.remediation = {
      response: {
        code: 500
      },
      retry: true
    };
  }
}
class AuthenticationLoginInvalidCredentialsException extends AuthenticationException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationLoginInvalidCredentialsException;
    this.description = "Incorrect username or password provided.";
    this.friendlyMessage = "Incorrect username or password.";
    this.logLevel = LogLevel.Info;
    this.remediation = {
      response: {
        code: 401
      },
      retry: false
    };
  }
}
class AuthenticationLoginTooManyFailedAttemptsException extends AuthenticationException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationLoginTooManyFailedAttemptsException;
    this.description = "This exception is thrown when the user has provided an incorrect username or password too many times.";
    this.friendlyMessage = "You've provided an incorrect username or password too many times.";
    this.logLevel = LogLevel.Warning;
    this.remediation = {
      response: {
        code: 429
      },
      retry: false
    };
  }
}

class AuthenticationMFAMethodNotFoundException extends AuthenticationException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationMFAMethodNotFoundException;
    this.description = "This exception is thrown when the Auth service cannot find a multi-factor authentication (MFA) method.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 403
      },
      retry: {
        limit: 3,
        strategy: RetryStrategy.Simple
      }
    };
  }
}

class AuthenticationSignupException extends AuthenticationException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationSignupException;
    this.description = "An exception occurred while signing up a user.";
    this.friendlyMessage = "An error occurred while signing up.";
    this.logLevel = LogLevel.Critical;
    this.remediation = {
      response: {
        code: 500
      },
      retry: true
    };
  }
}

class AuthenticationExpiredAccessTokenException extends AuthenticationException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationExpiredAccessTokenException;
    this.description = "The access token associated with a session has expired.";
    this.logLevel = LogLevel.Warning;
    this.remediation = {
      response: {
        code: 401
      },
      retry: false
    };
  }
}
class AuthenticationInvalidAccessTokenException extends AuthenticationException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationInvalidAccessTokenException;
    this.description = "The access token associated with a session is invalid.";
    this.logLevel = LogLevel.Warning;
    this.remediation = {
      response: {
        code: 401
      },
      retry: false
    };
  }
}
class AuthenticationMissingAccessTokenException extends AuthenticationException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationMissingAccessTokenException;
    this.description = "The access token associated with a session is missing.";
    this.logLevel = LogLevel.Warning;
    this.remediation = {
      response: {
        code: 401
      },
      retry: false
    };
  }
}
class AuthenticationExpiredRefreshTokenException extends AuthenticationException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationExpiredRefreshTokenException;
    this.description = "The refresh token associated with a session has expired.";
    this.logLevel = LogLevel.Warning;
    this.remediation = {
      response: {
        code: 401
      },
      retry: false
    };
  }
}
class AuthenticationInvalidRefreshTokenException extends AuthenticationException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationInvalidRefreshTokenException;
    this.description = "The refresh token associated with a session is invalid.";
    this.logLevel = LogLevel.Warning;
    this.remediation = {
      response: {
        code: 401
      },
      retry: false
    };
  }
}
class AuthenticationMissingRefreshTokenException extends AuthenticationException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationMissingRefreshTokenException;
    this.description = "The refresh token associated with a session is missing.";
    this.logLevel = LogLevel.Warning;
    this.remediation = {
      response: {
        code: 401
      },
      retry: false
    };
  }
}

class AuthenticationUsernameAvailabilityCheckException extends AuthenticationException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationUsernameAvailabilityCheckException;
    this.description = "An exception occurred while checking if a username is available.";
    this.friendlyMessage = "An error occurred while checking if a username is available.";
    this.logLevel = LogLevel.Critical;
    this.remediation = {
      response: {
        code: 500
      },
      retry: true
    };
  }
}
class AuthenticationUsernameExistsException extends AuthenticationUsernameAvailabilityCheckException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationUsernameExistsException;
    this.description = "User with email or phone number already exists.";
    this.friendlyMessage = "A user with that email already exists.";
    this.logLevel = LogLevel.Warning;
    this.remediation = {
      response: {
        code: 400
      },
      retry: false
    };
  }
}
class AuthenticationAliasExistException extends AuthenticationUsernameAvailabilityCheckException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationAliasExistException;
    this.description = "This exception is thrown when a user tries to confirm the account with an email or phone number that has already been supplied as an alias from a different account. This exception tells user that an account with this email or phone already exists";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 400
      },
      retry: false
    };
  }
}

class AuthenticationCodeDeliveryFailureException extends AuthenticationException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationCodeDeliveryFailureException;
    this.description = "This exception is thrown when a verification code fails to deliver successfully.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 500
      },
      retry: {
        limit: 3,
        strategy: RetryStrategy.Simple
      }
    };
  }
}
class AuthenticationCodeMismatchException extends AuthenticationException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationCodeMismatchException;
    this.description = "The verification code provided is incorrect";
    this.logLevel = LogLevel.Warning;
    this.remediation = {
      response: {
        code: 400
      },
      retry: false
    };
  }
}
class AuthenticationExpiredCodeException extends AuthenticationException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationExpiredCodeException;
    this.description = "The verification code provided has expired";
    this.logLevel = LogLevel.Warning;
    this.remediation = {
      response: {
        code: 403
      },
      retry: false
    };
  }
}
class AuthenticationUserNotConfirmedException extends AuthenticationException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationUserNotConfirmedException;
    this.description = "This exception is thrown when a user who is not confirmed attempts to login.";
    this.friendlyMessage = "You haven't verified your email address or telephone number yet";
    this.logLevel = LogLevel.Warning;
    this.remediation = {
      response: {
        code: 403
      },
      retry: false
    };
  }
}

class DatabaseException extends Exception {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.DatabaseException;
    this.description = "Generic or unknown database exceptions.";
    this.logLevel = LogLevel.Exception;
  }
}

class SequelizeNotInitializedException extends DatabaseException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.SequelizeNotInitializedException;
    this.description = "Generic or unknown database exceptions.";
    this.logLevel = LogLevel.Exception;
  }
}

class NetworkException extends Exception {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.NetworkException;
    this.description = "A network related issue has occurred.";
    this.logLevel = LogLevel.Exception;
  }
}

class HttpException extends NetworkException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.HttpException;
    this.description = "A generic or unknown exception occurred related to an HTTP request.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 500
      },
      retry: {
        limit: 3,
        strategy: RetryStrategy.CircuitBreaker
      }
    };
  }
}
class HttpRequestException extends HttpException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.HttpRequestException;
    this.description = "Base class for generic or unknown exceptions occuring during an HTTP request.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 500
      },
      retry: {
        limit: 3,
        strategy: RetryStrategy.CircuitBreaker
      }
    };
  }
}
class HttpRequestResourceNotFoundException extends HttpRequestException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.HttpRequestResourceNotFoundException;
    this.description = "The requested HTTP resource could not be found.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 404
      },
      retry: {
        limit: 3,
        strategy: RetryStrategy.CircuitBreaker
      }
    };
  }
}
class MissingRequestBodyPropertyException extends HttpRequestException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.MissingRequestBodyPropertyException;
    this.description = "HTTP request body is missing a required property.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 400
      },
      retry: false
    };
  }
}
class MissingRequestUrlParameterException extends HttpRequestException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.MissingRequestUrlParameterException;
    this.description = "HTTP request URL is missing a required parameter.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 400
      },
      retry: false
    };
  }
}
class MissingCookieException extends HttpRequestException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.MissingCookieException;
    this.description = "A required cookie is missing.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 500
      },
      retry: false
    };
  }
}
class HttpResponseException extends HttpException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.HttpRequestException;
    this.description = "Generic or unknown exceptions related to HTTP responses.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 500
      },
      retry: false
    };
  }
}

class ServiceProviderException extends Exception {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.ServiceProviderException;
    this.description = "An error originating from a third-party or service provider occurred.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 500
      },
      retry: {
        limit: 3,
        strategy: RetryStrategy.Simple
      }
    };
  }
}

class AWSException extends ServiceProviderException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AWSException;
    this.description = "An exception originating from the AWS integration occurred.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 500
      },
      retry: {
        limit: 3,
        strategy: RetryStrategy.Simple
      }
    };
  }
}
class AWSMissingAccessKeyException extends AWSException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.StripeMissingSecretKeyException;
    this.description = "Missing AWS access key token.";
    this.logLevel = LogLevel.Critical;
    this.remediation = {
      response: {
        code: 500
      },
      retry: false
    };
  }
}

class CognitoException extends AWSException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AWSException;
    this.description = "An exception originating from the AWS Cognito integration occurred.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 500
      },
      retry: {
        limit: 3,
        strategy: RetryStrategy.Simple
      }
    };
  }
}
class CognitoInternalErrorException extends CognitoException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.CognitoInternalErrorException;
    this.description = "An internal error occurred originating from AWS Cognito.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 500
      },
      retry: {
        limit: 3,
        strategy: RetryStrategy.Simple
      }
    };
  }
}
class CognitoInvalidUserPoolConfigurationException extends CognitoException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.CognitoInvalidUserPoolConfigurationException;
    this.description = "This exception is thrown when the user pool configuration is invalid.";
    this.logLevel = LogLevel.Critical;
    this.remediation = {
      response: {
        code: 500
      },
      retry: false
    };
  }
}
class CognitoInvalidEmailRoleAccessPolicyException extends CognitoException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.CognitoInvalidEmailRoleAccessPolicyException;
    this.description = "There is an access policy exception for the role provided for email configuration.";
    this.logLevel = LogLevel.Critical;
    this.remediation = {
      response: {
        code: 500
      },
      retry: false
    };
  }
}
class CognitoInvalidSmsRoleAccessPolicyException extends CognitoException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.CognitoInvalidSmsRoleAccessPolicyException;
    this.description = "This exception is returned when the role provided for SMS configuration does not have permission to publish using Amazon SNS.";
    this.logLevel = LogLevel.Critical;
    this.remediation = {
      response: {
        code: 500
      },
      retry: false
    };
  }
}
class CognitoInvalidSmsRoleTrustRelationshipException extends CognitoException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.CognitoInvalidSmsRoleTrustRelationshipException;
    this.description = "This exception is thrown when the trust relationship is invalid for the role provided for SMS configuration. This can happen if you do not trust -idp.amazonaws.com or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool.";
    this.logLevel = LogLevel.Critical;
    this.remediation = {
      response: {
        code: 500
      },
      retry: false
    };
  }
}
class CognitoMissingUserPoolClientIdException extends CognitoException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.CognitoMissingUserPoolClientIdException;
    this.description = "Cognito user pool client ID configuration is missing.";
    this.logLevel = LogLevel.Critical;
  }
}
class CognitoMissingUserPoolIdException extends CognitoException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.CognitoMissingUserPoolIdException;
    this.description = "Cognito user pool ID configuration is missing.";
    this.logLevel = LogLevel.Critical;
  }
}
class CognitoUnexpectedLambdaException extends CognitoException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.CognitoUnexpectedLambdaException;
    this.description = "This exception is thrown when the Auth service encounters an unexpected exception with the AWS Lambda service.";
    this.logLevel = LogLevel.Critical;
    this.remediation = {
      response: {
        code: 500
      },
      retry: {
        limit: 3,
        strategy: RetryStrategy.Simple
      }
    };
  }
}
class CognitoInvalidParameterException extends CognitoException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.CognitoInvalidParameterException;
    this.description = "This exception is thrown when the Cognito service encounters an invalid parameter.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 500
      },
      retry: {
        limit: 3,
        strategy: RetryStrategy.Simple
      }
    };
  }
}
class CognitoInvalidLambdaResponseException extends CognitoException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.CognitoInvalidLambdaResponseException;
    this.description = "This exception is thrown when the Amazon service encounters an invalid AWS Lambda response.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 500
      },
      retry: {
        limit: 3,
        strategy: RetryStrategy.Simple
      }
    };
  }
}
class CognitoResourceNotFoundException extends CognitoException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.CognitoResourceNotFoundException;
    this.description = "This exception is thrown when the Cognito service cannot find the requested resource.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 500
      },
      retry: {
        limit: 3,
        strategy: RetryStrategy.Simple
      }
    };
  }
}
class CognitoUserLambdaValidationException extends CognitoException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.CognitoUserLambdaValidationException;
    this.description = "This exception is thrown when the Cognito service encounters a user validation exception with the AWS Lambda service.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 500
      },
      retry: {
        limit: 3,
        strategy: RetryStrategy.Simple
      }
    };
  }
}

class StripeException extends ServiceProviderException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.StripeException;
    this.description = "An exception occurred relating to Stripe.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 500
      },
      retry: {
        limit: 3,
        strategy: RetryStrategy.Simple
      }
    };
  }
}
class StripeMissingSecretKeyException extends StripeException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.StripeMissingSecretKeyException;
    this.description = "The Stripe secret key token is missing.";
    this.logLevel = LogLevel.Critical;
    this.remediation = {
      response: {
        code: 500
      },
      retry: false
    };
  }
}
class StripeSubscriptionCreationFailedException extends StripeException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.StripeSubscriptionCreationFailedException;
    this.description = "Stripe subscription creation failed.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 500
      },
      retry: {
        limit: 3,
        strategy: RetryStrategy.Simple
      }
    };
  }
}
class StripePaymentMethodRequiredException extends StripeException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.StripePaymentMethodRequiredException;
    this.description = "An updated payment method is required.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 500
      },
      retry: {
        limit: 3,
        strategy: RetryStrategy.Simple
      }
    };
  }
}

class UserException extends Exception {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.UserException;
    this.description = "Generic or unknown exceptions related to a user.";
    this.logLevel = LogLevel.Exception;
  }
}
class NullUserException extends UserException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.NullUserException;
    this.description = "An operation was performed on behalf a user that cannot be found in the database.";
    this.logLevel = LogLevel.Critical;
  }
}
class UserStateConflictException extends UserException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.UserStateConflictException;
    this.description = "Exception used for user state that exists in one system or another and isn't being actively managed, or synced between all systems, or at least differences accounted for.";
    this.logLevel = LogLevel.Critical;
  }
}

class ValidationException extends Exception {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.ValidationException;
    this.description = "Generic or otherwise unknown input validation exception.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 400
      },
      retry: false
    };
  }
}
class InvalidTypeException extends Exception {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.InvalidTypeException;
    this.description = "Instance type is invalid.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 400
      },
      retry: false
    };
  }
}
class MissingArgumentException extends Exception {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.MissingArgumentException;
    this.description = "A required argument is missing.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 400
      },
      retry: false
    };
  }
}
class MissingPropertyException extends Exception {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.MissingPropertyException;
    this.description = "A required property is missing.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 400
      },
      retry: false
    };
  }
}
class InvalidArgumentException extends Exception {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.InvalidArgumentException;
    this.description = "An argument is invalid.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 400
      },
      retry: false
    };
  }
}
class InvalidPropertyException extends Exception {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.InvalidPropertyException;
    this.description = "An object property is invalid.";
    this.logLevel = LogLevel.Exception;
    this.remediation = {
      response: {
        code: 400
      },
      retry: false
    };
  }
}

const ExceptionMap = {
  [ExceptionCode.Exception]: Exception,
  [ExceptionCode.UnmanagedException]: UnmanagedException,
  [ExceptionCode.CaughtException]: CaughtException,
  [ExceptionCode.UncaughtException]: UncaughtException,
  [ExceptionCode.UnhandledPromiseRejectionException]: UnhandledPromiseRejectionException,
  [ExceptionCode.AuthenticationException]: AuthenticationException,
  [ExceptionCode.AuthenticationExpiredRefreshTokenException]: AuthenticationExpiredRefreshTokenException,
  [ExceptionCode.AuthenticationInvalidRefreshTokenException]: AuthenticationInvalidRefreshTokenException,
  [ExceptionCode.AuthenticationLoginException]: AuthenticationLoginException,
  [ExceptionCode.AuthenticationLoginInvalidCredentialsException]: AuthenticationLoginInvalidCredentialsException,
  [ExceptionCode.AuthenticationLoginTooManyFailedAttemptsException]: AuthenticationLoginTooManyFailedAttemptsException,
  [ExceptionCode.AuthenticationMissingDeviceKeyException]: AuthenticationMissingRefreshTokenException,
  [ExceptionCode.AuthenticationMissingRefreshTokenException]: AuthenticationMissingRefreshTokenException,
  [ExceptionCode.AuthenticationUnauthorizedAccessException]: AuthenticationUnauthorizedAccessException,
  [ExceptionCode.AuthenticationCodeMismatchException]: AuthenticationCodeMismatchException,
  [ExceptionCode.AuthenticationExpiredCodeException]: AuthenticationExpiredCodeException,
  [ExceptionCode.AuthenticationLimitExceededException]: AuthenticationLimitExceededException,
  [ExceptionCode.AuthenticationNotAuthorizedException]: AuthenticationNotAuthorizedException,
  [ExceptionCode.AuthenticationTooManyRequestsException]: AuthenticationTooManyRequestsException,
  [ExceptionCode.AuthenticationUserNotFoundException]: AuthenticationUserNotFoundException,
  [ExceptionCode.AuthenticationSignupException]: AuthenticationSignupException,
  [ExceptionCode.AuthenticationUsernameAvailabilityCheckException]: AuthenticationUsernameAvailabilityCheckException,
  [ExceptionCode.AuthenticationAliasExistException]: AuthenticationAliasExistException,
  [ExceptionCode.AuthenticationUsernameExistsException]: AuthenticationUsernameExistsException,
  [ExceptionCode.AuthenticationCodeDeliveryFailureException]: AuthenticationCodeDeliveryFailureException,
  [ExceptionCode.AuthenticationMFAMethodNotFoundException]: AuthenticationMFAMethodNotFoundException,
  [ExceptionCode.AuthenticationPasswordResetRequiredException]: AuthenticationPasswordResetRequiredException,
  [ExceptionCode.AuthenticationUserNotConfirmedException]: AuthenticationUserNotConfirmedException,
  [ExceptionCode.DatabaseException]: DatabaseException,
  [ExceptionCode.SequelizeNotInitializedException]: SequelizeNotInitializedException,
  [ExceptionCode.ServiceProviderException]: ServiceProviderException,
  [ExceptionCode.AWSException]: AWSException,
  [ExceptionCode.AWSMissingAccessKeyException]: AWSMissingAccessKeyException,
  [ExceptionCode.AWSMissingSecretKeyException]: AWSMissingAccessKeyException,
  [ExceptionCode.CognitoException]: CognitoException,
  [ExceptionCode.CognitoInternalErrorException]: CognitoInternalErrorException,
  [ExceptionCode.CognitoInvalidEmailRoleAccessPolicyException]: CognitoInvalidEmailRoleAccessPolicyException,
  [ExceptionCode.CognitoInvalidSmsRoleAccessPolicyException]: CognitoInvalidSmsRoleAccessPolicyException,
  [ExceptionCode.CognitoInvalidSmsRoleTrustRelationshipException]: CognitoInvalidSmsRoleTrustRelationshipException,
  [ExceptionCode.CognitoUnexpectedLambdaException]: CognitoUnexpectedLambdaException,
  [ExceptionCode.CognitoInvalidUserPoolConfigurationException]: CognitoInvalidUserPoolConfigurationException,
  [ExceptionCode.CognitoInvalidLambdaResponseException]: CognitoInvalidLambdaResponseException,
  [ExceptionCode.CognitoInvalidParameterException]: CognitoInvalidParameterException,
  [ExceptionCode.CognitoMissingUserPoolIdException]: CognitoMissingUserPoolIdException,
  [ExceptionCode.CognitoMissingUserPoolClientIdException]: CognitoMissingUserPoolClientIdException,
  [ExceptionCode.CognitoResourceNotFoundException]: CognitoResourceNotFoundException,
  [ExceptionCode.CognitoUserLambdaValidationException]: CognitoUserLambdaValidationException,
  [ExceptionCode.StripeException]: StripeException,
  [ExceptionCode.StripeSubscriptionCreationFailedException]: StripeSubscriptionCreationFailedException,
  [ExceptionCode.StripeMissingSecretKeyException]: StripeMissingSecretKeyException,
  [ExceptionCode.StripePaymentMethodRequiredException]: StripePaymentMethodRequiredException,
  [ExceptionCode.NetworkException]: NetworkException,
  [ExceptionCode.HttpException]: HttpException,
  [ExceptionCode.HttpRequestException]: HttpRequestException,
  [ExceptionCode.HttpRequestResourceNotFoundException]: HttpRequestResourceNotFoundException,
  [ExceptionCode.HttpResponseException]: HttpResponseException,
  [ExceptionCode.MissingRequestBodyPropertyException]: MissingRequestBodyPropertyException,
  [ExceptionCode.MissingRequestUrlParameterException]: MissingRequestUrlParameterException,
  [ExceptionCode.MissingCookieException]: MissingCookieException,
  [ExceptionCode.ValidationException]: ValidationException,
  [ExceptionCode.InvalidArgumentException]: InvalidArgumentException,
  [ExceptionCode.InvalidPropertyException]: InvalidPropertyException,
  [ExceptionCode.InvalidTypeException]: InvalidTypeException,
  [ExceptionCode.MissingArgumentException]: MissingArgumentException,
  [ExceptionCode.MissingPropertyException]: MissingPropertyException,
  [ExceptionCode.ProcessException]: ProcessException,
  [ExceptionCode.ProcessWarningException]: ProcessWarningException,
  [ExceptionCode.ProcessSigTermException]: ProcessSigTermException,
  [ExceptionCode.ProcessSigIntException]: ProcessSigIntException,
  [ExceptionCode.FatalException]: FatalException,
  [ExceptionCode.MissingEnvironmentVariable]: MissingEnvironmentVariable,
  [ExceptionCode.KillProcessException]: KillProcessException,
  [ExceptionCode.UserException]: UserException,
  [ExceptionCode.NullUserException]: NullUserException,
  [ExceptionCode.UserStateConflictException]: UserStateConflictException
};
function getExceptionInstance(code) {
  return ExceptionMap[code];
}

class AuthenticationMissingDeviceKeyException extends AuthenticationException {
  constructor() {
    super(...arguments);
    this.code = ExceptionCode.AuthenticationMissingDeviceKeyException;
    this.description = "The device key associated with the user's session is missing.";
    this.logLevel = LogLevel.Warning;
    this.remediation = {
      response: {
        code: 401
      },
      retry: false
    };
  }
}

const expressExceptionMiddleware = (err, logger, req, res, next) => {
  const log = logger ?? new pe();
  if (err instanceof Exception) {
    log.exception(err.toJSON());
  } else if (err instanceof Error) {
    const exception = new Exception(err.message, { cause: err });
    log.exception(exception.toJSON());
  }
  next();
};

class ExceptionRemediator {
  constructor() {
    this.exception = void 0;
  }
  handleException(err, { res }) {
    console.log("err in exceptionRemediator", err);
    this.exception = err instanceof Exception ? err : new UnmanagedException(err.name, {
      cause: err
    });
    const response = this.getExceptionResponse();
    if (response) {
      return res.status(response.code).json(response.body);
    }
    return res.status(500).json({
      code: 99999,
      description: "An unknown error occurred.",
      friendlyMessage: "An unknown error occurred."
    });
  }
  getExceptionResponse() {
    if (this.exception) {
      const { code, description, friendlyMessage, remediation } = this.exception;
      const responseCode = remediation?.response?.code ?? 500;
      return {
        body: {
          code,
          description,
          friendlyMessage
        },
        code: responseCode
      };
    }
    return null;
  }
}

export { AWSException, AWSMissingAccessKeyException, AuthenticationAliasExistException, AuthenticationCodeDeliveryFailureException, AuthenticationCodeMismatchException, AuthenticationException, AuthenticationExpiredAccessTokenException, AuthenticationExpiredCodeException, AuthenticationExpiredRefreshTokenException, AuthenticationInvalidAccessTokenException, AuthenticationInvalidRefreshTokenException, AuthenticationLimitExceededException, AuthenticationLoginException, AuthenticationLoginInvalidCredentialsException, AuthenticationLoginTooManyFailedAttemptsException, AuthenticationMFAMethodNotFoundException, AuthenticationMissingAccessTokenException, AuthenticationMissingDeviceKeyException, AuthenticationMissingRefreshTokenException, AuthenticationNotAuthorizedException, AuthenticationPasswordResetRequiredException, AuthenticationSignupException, AuthenticationTooManyRequestsException, AuthenticationUnauthorizedAccessException, AuthenticationUserNotConfirmedException, AuthenticationUserNotFoundException, AuthenticationUsernameAvailabilityCheckException, AuthenticationUsernameExistsException, CaughtException, CognitoException, CognitoInternalErrorException, CognitoInvalidEmailRoleAccessPolicyException, CognitoInvalidLambdaResponseException, CognitoInvalidParameterException, CognitoInvalidSmsRoleAccessPolicyException, CognitoInvalidSmsRoleTrustRelationshipException, CognitoInvalidUserPoolConfigurationException, CognitoMissingUserPoolClientIdException, CognitoMissingUserPoolIdException, CognitoResourceNotFoundException, CognitoUnexpectedLambdaException, CognitoUserLambdaValidationException, DatabaseException, Exception, ExceptionCode, ExceptionRemediator, ExceptionsClient, FatalException, HttpException, HttpRequestException, HttpRequestResourceNotFoundException, HttpResponseException, InvalidArgumentException, InvalidPropertyException, InvalidTypeException, KillProcessException, MissingArgumentException, MissingCookieException, MissingEnvironmentVariable, MissingPropertyException, MissingRequestBodyPropertyException, MissingRequestUrlParameterException, NetworkException, NullUserException, ProcessException, ProcessSigIntException, ProcessSigTermException, ProcessWarningException, RetryStrategy, SequelizeNotInitializedException, ServiceProviderException, StripeException, StripeMissingSecretKeyException, StripePaymentMethodRequiredException, StripeSubscriptionCreationFailedException, UncaughtException, UnhandledPromiseRejectionException, UnmanagedException, UserException, UserStateConflictException, ValidationException, Warning, captureError, expressExceptionMiddleware, getExceptionInstance, handleProcessExceptions, handleProcessInterupt, handleProcessTermination };
//# sourceMappingURL=index.mjs.map