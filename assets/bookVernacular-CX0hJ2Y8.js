import{j as Se,ax as Re,k as _e,m as L,a4 as ce,ay as Ue,X as Ve,N as ie,l as J,az as Ye,aA as Ke,aB as We,aC as Ge,f as b,aD as Qe,V as se,J as ue,aE as Xe,L as M,I as Je,d as ye,z as W,R as D,B as Ze,ak as et,aF as tt,aG as st,aH as de,aI as at,aJ as rt,M as nt,G as ct,U as ge,y as lt,aK as pt,W as me,o as U,c as ae,b as Z,n as P,a2 as p,t as ot,w as q,g as le,a1 as it,aL as ut,aa as yt,a as pe,q as ze,$ as xt,am as vt,aM as fe,aN as dt,an as gt,aO as mt,T as ft,O as ht,a6 as bt,aP as wt,aQ as he}from"./index-BpokR4Dd.js";import{u as kt}from"./el-button-CibWaqyi.js";import{F as Ct,f as Et}from"./SheetField-C7Ep_vse.js";import{U as Te,b as be}from"./use-form-item-S_lAlXY7.js";import{c as we,g as It}from"./SheetSelect-CPrHpGEP.js";const St=(e,t,s,l)=>{const a={offsetX:0,offsetY:0},r=L(!1),c=(x,v)=>{if(e.value){const{offsetX:E,offsetY:I}=a,f=e.value.getBoundingClientRect(),h=Math.max(f.left,0),w=Math.max(f.top,0),S=f.width,F=f.height,R=document.documentElement.clientWidth,_=document.documentElement.clientHeight,Y=-h+E,N=-w+I,H=R-h-S+E,$=_-w-(F<_?F:0)+I;l!=null&&l.value||(x=we(x,Y,H),v=we(v,N,$)),a.offsetX=x,a.offsetY=v,e.value.style.transform=`translate(${ce(x)}, ${ce(v)})`}},i=x=>{const v=x.clientX,E=x.clientY,{offsetX:I,offsetY:f}=a,h=S=>{r.value||(r.value=!0),c(I+S.clientX-v,f+S.clientY-E)},w=()=>{r.value=!1,document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",h),document.addEventListener("mouseup",w)},o=()=>{t.value&&e.value&&(t.value.addEventListener("mousedown",i),window.addEventListener("resize",d))},g=()=>{t.value&&e.value&&(t.value.removeEventListener("mousedown",i),window.removeEventListener("resize",d))},m=()=>{a.offsetX=0,a.offsetY=0,e.value&&(e.value.style.transform="")},d=()=>{const{offsetX:x,offsetY:v}=a;c(x,v)};return Se(()=>{Re(()=>{s.value?o():g()})}),_e(()=>{g()}),{isDragging:r,resetPosition:m,updatePosition:d}},zt=(e,t={})=>{Ue(e)||Ve("[useLockscreen]","You need to pass a ref param to this function");const s=t.ns||ie("popup"),l=b(()=>s.bm("parent","hidden"));let a=0,r=!1,c="0",i=!1;const o=()=>{i||(i=!0,setTimeout(()=>{typeof document>"u"||r&&document&&(document.body.style.width=c,Qe(document.body,l.value))},200))};J(e,g=>{if(!g){o();return}i=!1,r=!Ke(document.body,l.value),r&&(c=document.body.style.width,We(document.body,l.value)),a=It(s.namespace.value);const m=document.documentElement.clientHeight<document.body.scrollHeight,d=Ge(document.body,"overflowY");a>0&&(m||d==="scroll")&&r&&(document.body.style.width=`calc(100% - ${a}px)`)}),Ye(()=>o())},Ae=e=>{if(!e)return{onClick:se,onMousedown:se,onMouseup:se};let t=!1,s=!1;return{onClick:c=>{t&&s&&e(c),t=s=!1},onMousedown:c=>{t=c.target===c.currentTarget},onMouseup:c=>{s=c.target===c.currentTarget}}},je=ue({center:Boolean,alignCenter:{type:Boolean,default:void 0},closeIcon:{type:Xe},draggable:{type:Boolean,default:void 0},overflow:{type:Boolean,default:void 0},fullscreen:Boolean,headerClass:{type:M([String,Array,Object,Boolean]),default:void 0},bodyClass:{type:M([String,Array,Object,Boolean]),default:void 0},footerClass:{type:M([String,Array,Object,Boolean]),default:void 0},showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),Tt={close:()=>!0},At=ue({...je,appendToBody:Boolean,appendTo:{type:M([String,Object]),default:"body"},beforeClose:{type:M(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},modalPenetrable:Boolean,openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:{type:M([String,Array,Object,Boolean]),default:void 0},width:{type:[String,Number]},zIndex:{type:Number},trapFocus:Boolean,headerAriaLevel:{type:String,default:"2"},transition:{type:M([String,Object]),default:void 0}}),jt={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[Te]:e=>Je(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Bt=ue({mask:{type:Boolean,default:!0},customMaskEvent:Boolean,overlayClass:{type:M([String,Array,Object,Boolean]),default:void 0},zIndex:{type:M([String,Number])}}),Ot={click:e=>e instanceof MouseEvent},Lt="overlay";var Mt=ye({name:"ElOverlay",props:Bt,emits:Ot,setup(e,{slots:t,emit:s}){const l=ie(Lt),a=o=>{s("click",o)},{onClick:r,onMousedown:c,onMouseup:i}=Ae(e.customMaskEvent?void 0:a);return()=>e.mask?W("div",{class:[l.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:r,onMousedown:c,onMouseup:i},[D(t,"default")],14,["onClick","onMouseup","onMousedown"]):Ze("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[D(t,"default")])}});const Dt=Mt,Be=Symbol("dialogInjectionKey"),ke="dialog-fade",Ft="ElDialog",Pt=(e,t)=>{const s=et().emit,{nextZIndex:l}=tt();let a="";const r=be(),c=be(),i=L(!1),o=L(!1),g=L(!1),m=L(e.zIndex??l()),d=L(!1);let x,v;const E=st(),I=b(()=>{var y;return((y=E.value)==null?void 0:y.namespace)??"el"}),f=b(()=>{var y;return(y=E.value)==null?void 0:y.dialog}),h=b(()=>{const y={},j=`--${I.value}-dialog`;if(!e.fullscreen){e.top&&(y[`${j}-margin-top`]=e.top);const K=ce(e.width);K&&(y[`${j}-width`]=K)}return y}),w=b(()=>{var y;return(e.draggable??((y=f.value)==null?void 0:y.draggable)??!1)&&!e.fullscreen}),S=b(()=>{var y;return e.alignCenter??((y=f.value)==null?void 0:y.alignCenter)??!1}),F=b(()=>{var y;return e.overflow??((y=f.value)==null?void 0:y.overflow)??!1}),R=b(()=>e.modalPenetrable&&!e.modal&&!e.fullscreen),_=b(()=>S.value?{display:"flex"}:{}),Y=b(()=>{var K;const y=e.transition??((K=f.value)==null?void 0:K.transition)??"dialog-fade",j={name:y,onAfterEnter:N,onBeforeLeave:$,onAfterLeave:H};if(rt(y)){const B={...y},te=(X,qe)=>xe=>{ct(X)?X.forEach(ve=>{ge(ve)&&ve(xe)}):ge(X)&&X(xe),qe()};return B.onAfterEnter=te(B.onAfterEnter,N),B.onBeforeLeave=te(B.onBeforeLeave,$),B.onAfterLeave=te(B.onAfterLeave,H),B.name||(B.name=ke,nt(Ft,`transition.name is missing when using object syntax, fallback to '${ke}'`)),B}return j});function N(){s("opened")}function H(){s("closed"),s(Te,!1),e.destroyOnClose&&(g.value=!1),d.value=!1}function $(){d.value=!0,s("close")}function G(){v==null||v(),x==null||x(),e.openDelay&&e.openDelay>0?{stop:x}=de(()=>T(),e.openDelay):T()}function z(){x==null||x(),v==null||v(),e.closeDelay&&e.closeDelay>0?{stop:v}=de(()=>A(),e.closeDelay):A()}function Q(){function y(j){j||(o.value=!0,i.value=!1)}e.beforeClose?e.beforeClose(y):z()}function k(){e.closeOnClickModal&&Q()}function T(){at&&(i.value=!0)}function A(){i.value=!1}function Fe(){s("openAutoFocus")}function Pe(){s("closeAutoFocus")}function Ne(y){var j;((j=y.detail)==null?void 0:j.focusReason)==="pointer"&&y.preventDefault()}e.lockScroll&&zt(i);function He(){e.closeOnPressEscape&&Q()}function $e(){!i.value||!R.value||e.zIndex!==void 0||(m.value=l())}return J(()=>e.zIndex,()=>{m.value=e.zIndex??l()}),J(()=>e.modelValue,y=>{y?(o.value=!1,d.value=!1,G(),g.value=!0,m.value=e.zIndex??l(),lt(()=>{s("open"),t.value&&(t.value.parentElement.scrollTop=0,t.value.parentElement.scrollLeft=0,t.value.scrollTop=0)})):i.value&&z()}),J(()=>e.fullscreen,y=>{t.value&&(y?(a=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=a)}),Se(()=>{e.modelValue&&(i.value=!0,g.value=!0,G())}),{afterEnter:N,afterLeave:H,beforeLeave:$,handleClose:Q,onModalClick:k,close:z,doClose:A,onOpenAutoFocus:Fe,onCloseAutoFocus:Pe,onCloseRequested:He,onFocusoutPrevented:Ne,bringToFront:$e,titleId:r,bodyId:c,closed:o,style:h,overlayDialogStyle:_,rendered:g,visible:i,zIndex:m,transitionConfig:Y,_draggable:w,_alignCenter:S,_overflow:F,closing:d,penetrable:R}},Nt=(...e)=>t=>{e.forEach(s=>{s.value=t})},Ht=["aria-level"],$t=["aria-label"],qt=["id"];var Rt=ye({name:"ElDialogContent",__name:"dialog-content",props:je,emits:Tt,setup(e,{expose:t}){const{t:s}=pt(),{Close:l}=ut,a=e,{dialogRef:r,headerRef:c,bodyId:i,ns:o,style:g}=me(Be),{focusTrapRef:m}=me(Ct),d=Nt(m,r),x=b(()=>!!a.draggable),{resetPosition:v,updatePosition:E,isDragging:I}=St(r,c,x,b(()=>!!a.overflow)),f=b(()=>[o.b(),o.is("fullscreen",a.fullscreen),o.is("draggable",x.value),o.is("dragging",I.value),o.is("align-center",!!a.alignCenter),{[o.m("center")]:a.center}]);return t({resetPosition:v,updatePosition:E}),(h,w)=>(U(),ae("div",{ref:p(d),class:P(f.value),style:ze(p(g)),tabindex:"-1"},[Z("header",{ref_key:"headerRef",ref:c,class:P([p(o).e("header"),e.headerClass,{"show-close":e.showClose}])},[D(h.$slots,"header",{},()=>[Z("span",{role:"heading","aria-level":e.ariaLevel,class:P(p(o).e("title"))},ot(e.title),11,Ht)]),e.showClose?(U(),ae("button",{key:0,"aria-label":p(s)("el.dialog.close"),class:P(p(o).e("headerbtn")),type:"button",onClick:w[0]||(w[0]=S=>h.$emit("close"))},[W(p(yt),{class:P(p(o).e("close"))},{default:q(()=>[(U(),le(it(e.closeIcon||p(l))))]),_:1},8,["class"])],10,$t)):pe("v-if",!0)],2),Z("div",{id:p(i),class:P([p(o).e("body"),e.bodyClass])},[D(h.$slots,"default")],10,qt),h.$slots.footer?(U(),ae("footer",{key:0,class:P([p(o).e("footer"),e.footerClass])},[D(h.$slots,"footer")],2)):pe("v-if",!0)],6))}}),_t=Rt;const Ut=["aria-label","aria-labelledby","aria-describedby"];var Vt=ye({name:"ElDialog",inheritAttrs:!1,__name:"dialog",props:At,emits:jt,setup(e,{expose:t}){const s=e,l=xt();kt({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},b(()=>!!l.title));const a=ie("dialog"),r=L(),c=L(),i=L(),{visible:o,titleId:g,bodyId:m,style:d,overlayDialogStyle:x,rendered:v,transitionConfig:E,zIndex:I,_draggable:f,_alignCenter:h,_overflow:w,penetrable:S,handleClose:F,onModalClick:R,onOpenAutoFocus:_,onCloseAutoFocus:Y,onCloseRequested:N,onFocusoutPrevented:H,bringToFront:$,closing:G}=Pt(s,r);ht(Be,{dialogRef:r,headerRef:c,bodyId:m,ns:a,rendered:v,style:d});const z=Ae(R);return t({visible:o,dialogContentRef:i,resetPosition:()=>{var k;(k=i.value)==null||k.resetPosition()},handleClose:F}),(k,T)=>(U(),le(ft,{to:e.appendTo,disabled:e.appendTo!=="body"?!1:!e.appendToBody},[W(mt,fe(p(E),{persisted:""}),{default:q(()=>[vt(W(p(Dt),{"custom-mask-event":"",mask:e.modal,"overlay-class":[e.modalClass??"",`${p(a).namespace.value}-modal-dialog`,p(a).is("penetrable",p(S))],"z-index":p(I)},{default:q(()=>[Z("div",{role:"dialog","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:p(g),"aria-describedby":p(m),class:P([`${p(a).namespace.value}-overlay-dialog`,p(a).is("closing",p(G))]),style:ze(p(x)),onClick:T[0]||(T[0]=(...A)=>p(z).onClick&&p(z).onClick(...A)),onMousedown:T[1]||(T[1]=(...A)=>p(z).onMousedown&&p(z).onMousedown(...A)),onMouseup:T[2]||(T[2]=(...A)=>p(z).onMouseup&&p(z).onMouseup(...A))},[W(p(Et),{loop:"",trapped:p(o),"focus-start-el":"container",onFocusAfterTrapped:p(_),onFocusAfterReleased:p(Y),onFocusoutPrevented:p(H),onReleaseRequested:p(N)},{default:q(()=>[p(v)?(U(),le(_t,fe({key:0,ref_key:"dialogContentRef",ref:i},k.$attrs,{center:e.center,"align-center":p(h),"close-icon":e.closeIcon,draggable:p(f),overflow:p(w),fullscreen:e.fullscreen,"header-class":e.headerClass,"body-class":e.bodyClass,"footer-class":e.footerClass,"show-close":e.showClose,title:e.title,"aria-level":e.headerAriaLevel,onClose:p(F),onMousedown:p($)}),dt({header:q(()=>[k.$slots.title?D(k.$slots,"title",{key:1}):D(k.$slots,"header",{key:0,close:p(F),titleId:p(g),titleClass:p(a).e("title")})]),default:q(()=>[D(k.$slots,"default")]),_:2},[k.$slots.footer?{name:"footer",fn:q(()=>[D(k.$slots,"footer")]),key:"0"}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","header-class","body-class","footer-class","show-close","title","aria-level","onClose","onMousedown"])):pe("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Ut)]),_:3},8,["mask","overlay-class","z-index"]),[[gt,p(o)]])]),_:3},16)],8,["to","disabled"]))}}),Yt=Vt;const ks=bt(Yt),Kt="zw-chart-session",Cs=wt("chartSession",()=>{try{sessionStorage.removeItem(Kt)}catch{}let e=null,t=0,s=!1;function l(d){e={form:{...d.form},targetDate:d.targetDate,trueSolarNote:d.trueSolarNote}}function a(){t=window.scrollY}function r(){s=!0,a()}function c(){s=!1}function i(){e=null,t=0}function o(){return e}function g(){return t}function m(){return s}return{saveSnapshot:l,saveScroll:a,markFromChart:r,clearFromChart:c,clearSnapshot:i,getSnapshot:o,getScrollY:g,isFromChart:m}}),Oe=[{id:"taiwei-fu",title:"太微賦",volume:1,blocks:[{type:"prose",text:"太微賦"},{type:"prose",text:" 斗數至玄至微，理旨難明，雖設問於各篇之中，猶有言而未盡，至如星之分野，各有所屬，壽夭賢愚，富貴貧賤，不可一概論議。"},{type:"prose",text:" 其星分佈一十二垣（yuan園），數定乎三十六位，入廟為奇，失度為虛，大抵以身命為福德之本，加以根源為窮通之資。"},{type:"prose",text:" 星有同躔（chan纏），數有分定，須明其生克之要，必詳乎得垣失度之分。"},{type:"prose",text:" 觀乎紫微舍躔，司一天儀之象，率列宿而成垣，土星茍居其垣，若可移動，金星專司財庫，最怕空亡。"},{type:"prose",text:" 帝星動則列宿奔馳，貪守空而財源不聚。"},{type:"prose",text:" 各司其職，不可參差。"},{type:"prose",text:" 茍或不察其機，更忘其變，則數之造化遠矣。"},{type:"prose",text:" 例曰"},{type:"prose",text:" 祿逢衝破，吉處藏兇。馬遇空亡，終身奔走。"},{type:"prose",text:" 生逢敗地，發也虛花。絕處逢生，生花不敗。"},{type:"prose",text:" 星臨廟旺，再觀生克之機。命坐強宮，細察制化之理。"},{type:"prose",text:" 日月最嫌反背，祿馬最喜交馳。"},{type:"prose",text:" 倘居空亡，得失最為要緊。若逢敗地，扶持大有奇功。"},{type:"prose",text:" 紫微天府全依輔弼之功，七殺破軍專依羊鈴之虐。"},{type:"prose",text:" 諸星吉，逢兇也吉。諸星兇，逢兇也兇。"},{type:"prose",text:" 輔弼夾帝為上品，桃花犯主為至淫。"},{type:"prose",text:" 君臣慶會，材善經邦。"},{type:"prose",text:" 魁鉞同行，位居臺輔。"},{type:"prose",text:" 祿文拱命，貴而且賢。"},{type:"prose",text:" 日月夾財，不權則富。"},{type:"prose",text:" 馬頭帶劍，鎮衛邊疆。"},{type:"prose",text:" 刑囚夾印，刑杖惟司。"},{type:"prose",text:" 善蔭朝綱，仁慈之長。"},{type:"prose",text:" 貴入貴鄉，逢之富貴。"},{type:"prose",text:" 財居財位，遇者富奢。"},{type:"prose",text:" 太陽居午，謂之日麗中天，有專權之貴，敵國之富。"},{type:"prose",text:" 太陰居子，號曰水澄桂萼，得清要之職，忠諫之材。"},{type:"prose",text:" 紫微輔弼同宮，一呼百諾居上品。文耗居寅卯，謂之眾水朝東。"},{type:"prose",text:" 日月守不如照合，蔭福聚不怕兇危。"},{type:"prose",text:" 貪居亥子，名為犯水桃花。刑遇貪狼，號曰風流彩杖。"},{type:"prose",text:" 七殺廉貞同位，路上埋屍。破軍暗曜同鄉，水中作冢。"},{type:"prose",text:" 祿居奴僕縱有官也奔馳，帝遇兇徒雖獲吉而無道。"},{type:"prose",text:" 帝坐金車則曰金輿捧櫛，福安文曜謂之玉袖天香。"},{type:"prose",text:" 太陽會文昌於官祿，皇殿朝班，富貴全美。"},{type:"prose",text:" 太陰會文曲於妻宮，蟾宮折桂，文章全盛。"},{type:"prose",text:" 祿存守于田財，堆金積玉。財蔭坐於遷移，鉅商高賈。"},{type:"prose",text:" 耗居祿位，沿途乞食。貪會旺宮，終身鼠竊。"},{type:"prose",text:" 殺居絕地，天年夭似顏回。貪坐生鄉，壽考永如彭祖。"},{type:"prose",text:" 忌暗同居身命疾厄，沉困尪（wang汪）贏，兇星會於父母遷移，刑傷破祖。"},{type:"prose",text:" 刑殺同廉貞於官祿，枷扭難逃，官符加刑殺於遷移，離鄉遭配。"},{type:"prose",text:" 善福居於空位，天竺生涯。輔弼單守命宮，離宗庶出。"},{type:"prose",text:" 七殺臨於身命加惡殺，必定死亡。鈴羊合於命宮遇白虎，須當刑戮。"},{type:"prose",text:" 官府發於吉曜，流殺怕逢破軍。羊陀憑太歲以引行，病符官符皆作禍。"},{type:"prose",text:" 奏書博士與流祿，盡作吉祥。力士將軍同青龍，顯其權勢。"},{type:"prose",text:" 童子限如水上泡漚，老人限似風中燃燭。遇殺無制乃流年最忌，"},{type:"prose",text:" 人生榮辱限元必有休咎，處世孤貧數中逢乎駁雜，學至此誠玄微矣。"}],raw:`太微賦  
 斗數至玄至微，理旨難明，雖設問於各篇之中，猶有言而未盡，至如星之分野，各有所屬，壽夭賢愚，富貴貧賤，不可一概論議。  
 其星分佈一十二垣（yuan園），數定乎三十六位，入廟為奇，失度為虛，大抵以身命為福德之本，加以根源為窮通之資。  
 星有同躔（chan纏），數有分定，須明其生克之要，必詳乎得垣失度之分。  
 觀乎紫微舍躔，司一天儀之象，率列宿而成垣，土星茍居其垣，若可移動，金星專司財庫，最怕空亡。  
 帝星動則列宿奔馳，貪守空而財源不聚。  
 各司其職，不可參差。  
 茍或不察其機，更忘其變，則數之造化遠矣。  
 例曰  
 祿逢衝破，吉處藏兇。馬遇空亡，終身奔走。  
 生逢敗地，發也虛花。絕處逢生，生花不敗。  
 星臨廟旺，再觀生克之機。命坐強宮，細察制化之理。  
 日月最嫌反背，祿馬最喜交馳。  
 倘居空亡，得失最為要緊。若逢敗地，扶持大有奇功。  
 紫微天府全依輔弼之功，七殺破軍專依羊鈴之虐。  
 諸星吉，逢兇也吉。諸星兇，逢兇也兇。  
 輔弼夾帝為上品，桃花犯主為至淫。  
 君臣慶會，材善經邦。  
 魁鉞同行，位居臺輔。  
 祿文拱命，貴而且賢。  
 日月夾財，不權則富。  
 馬頭帶劍，鎮衛邊疆。  
 刑囚夾印，刑杖惟司。  
 善蔭朝綱，仁慈之長。  
 貴入貴鄉，逢之富貴。  
 財居財位，遇者富奢。  
 太陽居午，謂之日麗中天，有專權之貴，敵國之富。  
 太陰居子，號曰水澄桂萼，得清要之職，忠諫之材。  
 紫微輔弼同宮，一呼百諾居上品。文耗居寅卯，謂之眾水朝東。  
 日月守不如照合，蔭福聚不怕兇危。  
 貪居亥子，名為犯水桃花。刑遇貪狼，號曰風流彩杖。  
 七殺廉貞同位，路上埋屍。破軍暗曜同鄉，水中作冢。  
 祿居奴僕縱有官也奔馳，帝遇兇徒雖獲吉而無道。  
 帝坐金車則曰金輿捧櫛，福安文曜謂之玉袖天香。  
 太陽會文昌於官祿，皇殿朝班，富貴全美。  
 太陰會文曲於妻宮，蟾宮折桂，文章全盛。  
 祿存守于田財，堆金積玉。財蔭坐於遷移，鉅商高賈。  
 耗居祿位，沿途乞食。貪會旺宮，終身鼠竊。  
 殺居絕地，天年夭似顏回。貪坐生鄉，壽考永如彭祖。  
 忌暗同居身命疾厄，沉困尪（wang汪）贏，兇星會於父母遷移，刑傷破祖。  
 刑殺同廉貞於官祿，枷扭難逃，官符加刑殺於遷移，離鄉遭配。  
 善福居於空位，天竺生涯。輔弼單守命宮，離宗庶出。  
 七殺臨於身命加惡殺，必定死亡。鈴羊合於命宮遇白虎，須當刑戮。  
 官府發於吉曜，流殺怕逢破軍。羊陀憑太歲以引行，病符官符皆作禍。  
 奏書博士與流祿，盡作吉祥。力士將軍同青龍，顯其權勢。  
 童子限如水上泡漚，老人限似風中燃燭。遇殺無制乃流年最忌，  
 人生榮辱限元必有休咎，處世孤貧數中逢乎駁雜，學至此誠玄微矣。`},{id:"xingxing-fu",title:"形性賦",volume:1,blocks:[{type:"prose",text:"形性賦"},{type:"prose",text:" 原夫紫微帝座，生為厚重之容。天府尊星，也作純和之體。"},{type:"prose",text:" 金烏圓滿，玉兔清奇。"},{type:"prose",text:" 天機為不長不短之姿，情懷好善。武曲乃至要至緊之操，心性果決。"},{type:"prose",text:" 天同肥滿，目秀清奇。廉貞眉寬，口闊面橫，為人性暴，好忿好爭。"},{type:"prose",text:" 貪狼為善惡之星，入廟必應長聳，出垣必定頑囂。"},{type:"prose",text:" 巨門乃是非之曜，在廟敦厚溫良。天相精神，天梁穩重，心事玉潔冰清。"},{type:"prose",text:" 七殺如子路暴虎馮河，火鈴似豫讓吞炭裝啞。"},{type:"prose",text:" 暴虎馮河兮目太兇狠，吞炭裝啞兮暗狼聲沉。"},{type:"prose",text:" 俊雅文昌眉清目秀，磊落文曲口舌便佞，在廟定生異痣，失陷必有班痕。"},{type:"prose",text:" 左輔右弼溫良規模，端莊高士。天魁天鉞具足威儀，重合三臺則十全模範。"},{type:"prose",text:" 擎羊陀羅，形丑貌粗，有矯詐體態。"},{type:"prose",text:" 破軍不仁，背重眉寬，行坐腰斜奸詐好行驚險。"},{type:"prose",text:" 性貌如春和藹，乃是祿存之情德。情懷似火鋒衝，此誠破耗之威權。"},{type:"prose",text:" 星論廟旺最怕空亡，殺落空亡竟無威力。"},{type:"prose",text:" 權祿乃九竅之奇，耗積散平生之福。"},{type:"prose",text:" 祿逢梁蔭抱私財益與他人，耗遇貪狼浽淫情於井底。"},{type:"prose",text:" 貪星入於馬垣易善易惡，惡曜扶同善曜稟性不常。"},{type:"prose",text:" 財居空亡巴三覽四，文曲旺宮聞一知十。暗合廉貞為貪濫之曹吏。"},{type:"prose",text:" 身命司數實奸盜之技兒，豬屠之流。善祿定是奇高之藝細巧，伶俐之人。"},{type:"prose",text:" 男居生旺最要得地，女居死絕專看福德。"},{type:"prose",text:" 命最嫌立於敗位，財源卻怕逢空亡。"},{type:"prose",text:" 機刑殺蔭孤星論嗣續之宮加惡星忌耗，不為奇特。"},{type:"prose",text:" 陀耗囚之星守父母之纏，決然破祖刑傷。"},{type:"prose",text:" 兼之童格宜相，根基要察。"},{type:"prose",text:" 紫微肥滿，天府精神。祿存祿主，也應厚重。"},{type:"prose",text:" 日月曲相同梁機昌皆為美俊之姿，乃是清奇之格，上長下短目秀眉清。"},{type:"prose",text:" 貪狼同武曲形小聲高而量大，天同如陀忌肥滿而目渺。"},{type:"prose",text:" 擎羊身體遭傷，若遇火鈴巨暗必生異痣。又值耗殺定主形丑貌粗。"},{type:"prose",text:" 若居死絕之限，童子乳哺徒勞其力，老者亦然壽終。"},{type:"prose",text:" 此數中之綱領，乃為星緯之機關。玩味專精，以參玄妙。"},{type:"prose",text:" 限有高低星尋喜怒，假如運限駁雜終有浮沉。"},{type:"prose",text:" 如逢殺地更要推詳倘，遇空亡必須細察。精研於此不患不神。"}],raw:`形性賦  
 原夫紫微帝座，生為厚重之容。天府尊星，也作純和之體。  
 金烏圓滿，玉兔清奇。  
 天機為不長不短之姿，情懷好善。武曲乃至要至緊之操，心性果決。  
 天同肥滿，目秀清奇。廉貞眉寬，口闊面橫，為人性暴，好忿好爭。  
 貪狼為善惡之星，入廟必應長聳，出垣必定頑囂。  
 巨門乃是非之曜，在廟敦厚溫良。天相精神，天梁穩重，心事玉潔冰清。  
 七殺如子路暴虎馮河，火鈴似豫讓吞炭裝啞。  
 暴虎馮河兮目太兇狠，吞炭裝啞兮暗狼聲沉。  
 俊雅文昌眉清目秀，磊落文曲口舌便佞，在廟定生異痣，失陷必有班痕。  
 左輔右弼溫良規模，端莊高士。天魁天鉞具足威儀，重合三臺則十全模範。  
 擎羊陀羅，形丑貌粗，有矯詐體態。  
 破軍不仁，背重眉寬，行坐腰斜奸詐好行驚險。  
 性貌如春和藹，乃是祿存之情德。情懷似火鋒衝，此誠破耗之威權。  
 星論廟旺最怕空亡，殺落空亡竟無威力。  
 權祿乃九竅之奇，耗積散平生之福。  
 祿逢梁蔭抱私財益與他人，耗遇貪狼浽淫情於井底。  
 貪星入於馬垣易善易惡，惡曜扶同善曜稟性不常。  
 財居空亡巴三覽四，文曲旺宮聞一知十。暗合廉貞為貪濫之曹吏。  
 身命司數實奸盜之技兒，豬屠之流。善祿定是奇高之藝細巧，伶俐之人。  
 男居生旺最要得地，女居死絕專看福德。  
 命最嫌立於敗位，財源卻怕逢空亡。  
 機刑殺蔭孤星論嗣續之宮加惡星忌耗，不為奇特。  
 陀耗囚之星守父母之纏，決然破祖刑傷。  
 兼之童格宜相，根基要察。  
 紫微肥滿，天府精神。祿存祿主，也應厚重。  
 日月曲相同梁機昌皆為美俊之姿，乃是清奇之格，上長下短目秀眉清。  
 貪狼同武曲形小聲高而量大，天同如陀忌肥滿而目渺。  
 擎羊身體遭傷，若遇火鈴巨暗必生異痣。又值耗殺定主形丑貌粗。  
 若居死絕之限，童子乳哺徒勞其力，老者亦然壽終。  
 此數中之綱領，乃為星緯之機關。玩味專精，以參玄妙。  
 限有高低星尋喜怒，假如運限駁雜終有浮沉。  
 如逢殺地更要推詳倘，遇空亡必須細察。精研於此不患不神。`},{id:"xingyuan-lun",title:"星垣論",volume:1,blocks:[{type:"prose",text:"星垣論"},{type:"prose",text:" 紫微帝座以輔弼為佐貳，作數中之主星乃有用之源流。是以南北二斗集而成數，為萬物之靈。"},{type:"prose",text:" 蓋以水淘溶，則陰陽既濟，水盛陽傷，火盛陰滅，二者不可偏廢，故知其中者，斯為美矣。"},{type:"prose",text:" 寅乃木之垣，乃三陽交泰之時，草木萌芽之所，至於卯位，其木至旺矣。貪狼天機是廟樂，故得天相水到寅為之旺相、巨門水得卯為之疏通，木乃土栽培，加以水之澆灌，三方更得文曲水破軍水相會尤妙，又加祿存土極美矣。"},{type:"prose",text:" 巨門水到丑，天梁土到未，陀羅金到於四墓之所，苟或得擎羊金相會，以土為金墓，則金通不凝。加以天府土天同金以生之，是為金趁土肥，順其德以生成。"},{type:"prose",text:" 已午乃火位，巳為水土所絕之地，更午垣之火，餘氣流於巳，水則倒流，火氣逆焰，必歸於巳。午屬火德，能生於已絕之土，所以廉貞火居焉。至於午火，旺照離明洞徹表裡，而文曲水入廟。若會紫府，則魁星拱斗，加以天機木貪狼木，謂之變景，愈加奇特。"},{type:"prose",text:" 申酉金乃西方太白之氣，武曲居申而好生，擎羊在酉而用殺，加以巨門祿存陀羅而助之愈急，須得逆行逢善化惡是為妙用。"},{type:"prose",text:" 亥水屬文曲破軍之要地，乃文明清高之士，萬里派源之潔，如大川之澤不為焦枯。居於亥位將入天河，是故為妙。破軍水於子旺之鄉，如巨海之浪淜洶湧，可遠觀而不可近倚，破軍是以居焉，若四墓之克，充其瀰漫，必得武曲之金使其源流不絕方為妙矣。"},{type:"prose",text:" 其餘諸星以身命推之，無施不可至玄至妙者矣。"}],raw:`星垣論  
 紫微帝座以輔弼為佐貳，作數中之主星乃有用之源流。是以南北二斗集而成數，為萬物之靈。  
 蓋以水淘溶，則陰陽既濟，水盛陽傷，火盛陰滅，二者不可偏廢，故知其中者，斯為美矣。  
 寅乃木之垣，乃三陽交泰之時，草木萌芽之所，至於卯位，其木至旺矣。貪狼天機是廟樂，故得天相水到寅為之旺相、巨門水得卯為之疏通，木乃土栽培，加以水之澆灌，三方更得文曲水破軍水相會尤妙，又加祿存土極美矣。  
 巨門水到丑，天梁土到未，陀羅金到於四墓之所，苟或得擎羊金相會，以土為金墓，則金通不凝。加以天府土天同金以生之，是為金趁土肥，順其德以生成。  
 已午乃火位，巳為水土所絕之地，更午垣之火，餘氣流於巳，水則倒流，火氣逆焰，必歸於巳。午屬火德，能生於已絕之土，所以廉貞火居焉。至於午火，旺照離明洞徹表裡，而文曲水入廟。若會紫府，則魁星拱斗，加以天機木貪狼木，謂之變景，愈加奇特。  
 申酉金乃西方太白之氣，武曲居申而好生，擎羊在酉而用殺，加以巨門祿存陀羅而助之愈急，須得逆行逢善化惡是為妙用。  
 亥水屬文曲破軍之要地，乃文明清高之士，萬里派源之潔，如大川之澤不為焦枯。居於亥位將入天河，是故為妙。破軍水於子旺之鄉，如巨海之浪淜洶湧，可遠觀而不可近倚，破軍是以居焉，若四墓之克，充其瀰漫，必得武曲之金使其源流不絕方為妙矣。  
 其餘諸星以身命推之，無施不可至玄至妙者矣。`},{id:"dou-shu-zhun-sheng",title:"斗數準繩",volume:1,blocks:[{type:"prose",text:"斗數準繩"},{type:"prose",text:" 命居生旺定富貴，各有所宜。身坐空亡論榮枯，專求其要。"},{type:"prose",text:" 紫微帝座在南極不能施功，天府令星在南地專能為福。"},{type:"prose",text:" 天機七殺同宮也善三分，太陰火鈴同位反成十惡。"},{type:"prose",text:" 貪狼為善宿入廟不兇，巨門為惡曜得垣尤美。"},{type:"prose",text:" 諸兇在緊要之鄉最宜制克，若在身命之位卻受孤單。"},{type:"prose",text:" 若見殺星倒限最兇，福廕臨之庶幾可解。"},{type:"prose",text:" 大抵在人之機變，更加作意之推詳。"},{type:"prose",text:" 辨生剋制化以定窮通，看好惡正偏以言禍福。"},{type:"prose",text:" 官星居於福地近貴榮財，福星居於官宮卻成無用。"},{type:"prose",text:" 身命得星為要，限度遇吉為榮。"},{type:"prose",text:" 若言子媳有無，專在擎羊耗殺。逢之則害妻妾亦然。"},{type:"prose",text:" 相貌逢兇必帶破相，疾厄逢忌定有尪贏。"},{type:"prose",text:" 須言定數以求玄，更在同年之相合，總為綱領用作準繩。"}],raw:`斗數準繩  
 命居生旺定富貴，各有所宜。身坐空亡論榮枯，專求其要。  
 紫微帝座在南極不能施功，天府令星在南地專能為福。  
 天機七殺同宮也善三分，太陰火鈴同位反成十惡。  
 貪狼為善宿入廟不兇，巨門為惡曜得垣尤美。  
 諸兇在緊要之鄉最宜制克，若在身命之位卻受孤單。  
 若見殺星倒限最兇，福廕臨之庶幾可解。  
 大抵在人之機變，更加作意之推詳。  
 辨生剋制化以定窮通，看好惡正偏以言禍福。  
 官星居於福地近貴榮財，福星居於官宮卻成無用。  
 身命得星為要，限度遇吉為榮。  
 若言子媳有無，專在擎羊耗殺。逢之則害妻妾亦然。  
 相貌逢兇必帶破相，疾厄逢忌定有尪贏。  
 須言定數以求玄，更在同年之相合，總為綱領用作準繩。`},{id:"dou-shu-fawei-lun",title:"斗數發微論",volume:1,blocks:[{type:"prose",text:"斗數發微論"},{type:"prose",text:" 白玉蟾先生曰觀天斗數與五星不同，按此星辰與諸術大異。"},{type:"prose",text:" 四正吉星定為貴，三方殺拱少為奇。"},{type:"prose",text:" 對照兮詳兇詳吉，合照兮觀賤觀榮。"},{type:"prose",text:" 吉星入垣則為吉，兇星失地則為兇。"},{type:"prose",text:" 命逢紫微非特壽而且榮，身遇殺星不但貧而且賤。"},{type:"prose",text:" 左右會於紫府極品之尊，科權陷於兇鄉功名蹭蹬。"},{type:"prose",text:" 行限逢乎弱地未必為災，立命會在強宮必能降福。"},{type:"prose",text:" 羊陀七殺限運莫逢，逢之定有刑傷。(劫空傷使在內合斷)"},{type:"prose",text:" 天哭喪門流年莫遇，遇之實防破害。"},{type:"prose",text:" 南斗主限必生男，北斗加臨先得女。"},{type:"prose",text:" 科星居於陷地，燈火辛勤。昌曲在於兇鄉，林泉冷淡。"},{type:"prose",text:" 奸謀頻設，紫微愧遇破軍。淫奔大行，紅鸞差逢貪宿。"},{type:"prose",text:" 命身相剋，則心亂而不閒。玄媼三宮，則邪淫而耽酒。(即天姚星)"},{type:"prose",text:" 殺臨三位，定然妻子不和。巨到二宮，必是兄弟無義。"},{type:"prose",text:" 刑殺守子，宮子難奉老。諸兇照財，帛聚散無常。"},{type:"prose",text:" 羊陀守疾厄，眼目昏盲。火鈴到遷移，長途寂寞。"},{type:"prose",text:" 尊星列賤位，主人多勞。惡星應八宮，奴僕無助。"},{type:"prose",text:" 官祿遇紫府，富而且貴。田宅遇破軍，先破後成。"},{type:"prose",text:" 福德遇空劫，奔走無力。相貌加刑殺，刑剋難免。"},{type:"prose",text:" 後學者執此推詳，萬無一失。"}],raw:`斗數發微論  
 白玉蟾先生曰觀天斗數與五星不同，按此星辰與諸術大異。  
 四正吉星定為貴，三方殺拱少為奇。  
 對照兮詳兇詳吉，合照兮觀賤觀榮。  
 吉星入垣則為吉，兇星失地則為兇。  
 命逢紫微非特壽而且榮，身遇殺星不但貧而且賤。  
 左右會於紫府極品之尊，科權陷於兇鄉功名蹭蹬。  
 行限逢乎弱地未必為災，立命會在強宮必能降福。  
 羊陀七殺限運莫逢，逢之定有刑傷。(劫空傷使在內合斷)  
 天哭喪門流年莫遇，遇之實防破害。  
 南斗主限必生男，北斗加臨先得女。  
 科星居於陷地，燈火辛勤。昌曲在於兇鄉，林泉冷淡。  
 奸謀頻設，紫微愧遇破軍。淫奔大行，紅鸞差逢貪宿。  
 命身相剋，則心亂而不閒。玄媼三宮，則邪淫而耽酒。(即天姚星)  
 殺臨三位，定然妻子不和。巨到二宮，必是兄弟無義。  
 刑殺守子，宮子難奉老。諸兇照財，帛聚散無常。  
 羊陀守疾厄，眼目昏盲。火鈴到遷移，長途寂寞。  
 尊星列賤位，主人多勞。惡星應八宮，奴僕無助。  
 官祿遇紫府，富而且貴。田宅遇破軍，先破後成。  
 福德遇空劫，奔走無力。相貌加刑殺，刑剋難免。  
 後學者執此推詳，萬無一失。`},{id:"chongbu-goulv",title:"重補斗數彀率",volume:1,blocks:[{type:"prose",text:"重補斗數彀率"},{type:"prose",text:" 諸星吉多逢兇也吉，諸星惡多逢吉也兇。"},{type:"prose",text:" 星更纏度，數分定局。"},{type:"prose",text:" 重在看星得垣受制，方可論人禍福窮通。"},{type:"prose",text:" 大概以身命為禍福之柄，以根源為窮通之機。"},{type:"prose",text:" 紫微在命輔弼同垣，其貴必矣，財印夾命日月夾財，其富何疑。"},{type:"prose",text:" 蔭福臨不怕兇衝，日月會不如合照。"},{type:"prose",text:" 貪狼居子乃為泛水桃花，天刑遭貪必主風流刑杖。"},{type:"prose",text:" 紫微坐命庫則曰金轝捧櫛輦，臨官安文曜號為衣錦惹天香。"},{type:"prose",text:" 太陰合文曲於妻宮翰林清異，太陽會文昌於官祿金殿傳臚。"},{type:"prose",text:" 祿合守田財為爛谷堆金，財蔭居遷移為高商豪客。"},{type:"prose",text:" 耗居敗地沿途丐求，貪會旺宮終身鼠竊。"},{type:"prose",text:" 殺居絕地生成三十二之顏回，日在旺宮可學八百年之彭祖。"},{type:"prose",text:" 巨暗同垣於身命疾厄贏瘦其軀，兇星交會於相貌遷移傷刑其面。"},{type:"prose",text:" 大耗會廉貞於官祿枷杻囚徒，官符會刑殺於遷移離鄉遠配。"},{type:"prose",text:" 七殺臨於陷地流年必見死亡，耗殺忌逢破軍火鈴嫌逢太歲。"},{type:"prose",text:" 奏書博士並流祿以盡乎吉祥，力士將軍與青龍以顯其威福。"},{type:"prose",text:" 童子限弱水上浮泡，老人限衰風中燃燭。"},{type:"prose",text:" 遇殺必驚，流年最緊。"},{type:"prose",text:" 人生髮達限元最怕浮沉，一世迍邅命限逢乎駁雜。"},{type:"prose",text:" 論而至此允矣玄微。"}],raw:`重補斗數彀率  
 諸星吉多逢兇也吉，諸星惡多逢吉也兇。  
 星更纏度，數分定局。  
 重在看星得垣受制，方可論人禍福窮通。  
 大概以身命為禍福之柄，以根源為窮通之機。  
 紫微在命輔弼同垣，其貴必矣，財印夾命日月夾財，其富何疑。  
 蔭福臨不怕兇衝，日月會不如合照。  
 貪狼居子乃為泛水桃花，天刑遭貪必主風流刑杖。  
 紫微坐命庫則曰金轝捧櫛輦，臨官安文曜號為衣錦惹天香。  
 太陰合文曲於妻宮翰林清異，太陽會文昌於官祿金殿傳臚。  
 祿合守田財為爛谷堆金，財蔭居遷移為高商豪客。  
 耗居敗地沿途丐求，貪會旺宮終身鼠竊。  
 殺居絕地生成三十二之顏回，日在旺宮可學八百年之彭祖。  
 巨暗同垣於身命疾厄贏瘦其軀，兇星交會於相貌遷移傷刑其面。  
 大耗會廉貞於官祿枷杻囚徒，官符會刑殺於遷移離鄉遠配。  
 七殺臨於陷地流年必見死亡，耗殺忌逢破軍火鈴嫌逢太歲。  
 奏書博士並流祿以盡乎吉祥，力士將軍與青龍以顯其威福。  
 童子限弱水上浮泡，老人限衰風中燃燭。  
 遇殺必驚，流年最緊。  
 人生髮達限元最怕浮沉，一世迍邅命限逢乎駁雜。  
 論而至此允矣玄微。`},{id:"zengbu-taiwei-fu",title:"增補太微賦",volume:1,blocks:[{type:"prose",text:"增補太微賦"},{type:"prose",text:" 前後兩凶神為兩鄰，加會尚可撐持，同室與謀最難堤防。"},{type:"prose",text:" 片火焚天馬，重羊逐祿存。"},{type:"prose",text:" 劫空親戚無常，權祿行藏靡定。"},{type:"prose",text:" 君子哉魁鉞，小人哉羊鈴。"},{type:"prose",text:" 兇不皆兇，吉無純吉。"},{type:"prose",text:" 主強賓弱可保無虞，主弱賓強兇危立見。"},{type:"prose",text:" 主賓得失兩相宜，運限命身當互見。"},{type:"prose",text:" 身命最嫌羊陀七殺，遇之未免為兇。"},{type:"prose",text:" 二限甚忌貪破巨廉，逢之定然作禍。"},{type:"prose",text:" 命運魁昌常得貴，限逢紫府定財多。"},{type:"prose",text:" 凡觀女人之命，先觀夫子二宮。"},{type:"prose",text:" 若值殺星定三嫁而心不足，或逢羊孛雖啼哭而淚不幹。"},{type:"prose",text:" 若觀男命始以福財為主，再審遷移何如。"},{type:"prose",text:" 二限相因，吉凶同斷。"},{type:"prose",text:" 限逢吉曜平生動用和諧，命坐兇鄉一世求謀齟齬。"},{type:"prose",text:" 廉祿臨身女得純陰貞潔之德，同梁守命男得陽純中正之心。"},{type:"prose",text:" 君子命中亦有羊陀火鈴，小人命內豈無科祿權星。"},{type:"prose",text:" 要看得垣失垣，專論入廟失廟。"},{type:"prose",text:" 若論小兒，詳推童限。"},{type:"prose",text:" 小兒命坐兇鄉，二五歲必然殀折，更有限逢惡殺，五七歲必主災亡。"},{type:"prose",text:" 文昌文曲天魁秀，不讀詩書也可人。"},{type:"prose",text:" 多學少成只為擎羊逢劫殺，為人好訟蓋因太歲遇官符。"},{type:"prose",text:" 命之理微熟察星辰之變化，數之理遠細詳格局之興衰。"},{type:"prose",text:" 北極加兇殺為道為僧，羊陀遇惡星為奴為僕。"},{type:"prose",text:" 如武破廉貪固深謀而貴顯，加羊陀空劫反小志以孤寒。"},{type:"prose",text:" 限輔星旺限雖弱而不弱，命臨吉地命雖兇而不兇。"},{type:"prose",text:" 斷橋截路大小難行，卯酉二空聰明發福。"},{type:"prose",text:" 命身遇紫府迭積金銀，二主逢劫空衣食不足。"},{type:"prose",text:" 謀而不遂，命限遇入擎羊，東作西成，限身遭逢輔相"},{type:"prose",text:" 科權祿拱，定為扳桂之高人，空劫羊鈴，作九流之術士。"},{type:"prose",text:" 情懷暢舒昌曲命身，詭詐浮虛羊陀陷地。"},{type:"prose",text:" 天機天梁擎羊會，早有刑而晚見孤。"},{type:"prose",text:" 貪狼武曲廉貞逢，少受貧而後享福。"},{type:"prose",text:" 此皆斗數之奧妙，學者宜熟思之。"}],raw:`增補太微賦  
 前後兩凶神為兩鄰，加會尚可撐持，同室與謀最難堤防。  
 片火焚天馬，重羊逐祿存。  
 劫空親戚無常，權祿行藏靡定。  
 君子哉魁鉞，小人哉羊鈴。  
 兇不皆兇，吉無純吉。  
 主強賓弱可保無虞，主弱賓強兇危立見。  
 主賓得失兩相宜，運限命身當互見。  
 身命最嫌羊陀七殺，遇之未免為兇。  
 二限甚忌貪破巨廉，逢之定然作禍。  
 命運魁昌常得貴，限逢紫府定財多。  
 凡觀女人之命，先觀夫子二宮。  
 若值殺星定三嫁而心不足，或逢羊孛雖啼哭而淚不幹。  
 若觀男命始以福財為主，再審遷移何如。  
 二限相因，吉凶同斷。  
 限逢吉曜平生動用和諧，命坐兇鄉一世求謀齟齬。  
 廉祿臨身女得純陰貞潔之德，同梁守命男得陽純中正之心。  
 君子命中亦有羊陀火鈴，小人命內豈無科祿權星。  
 要看得垣失垣，專論入廟失廟。  
 若論小兒，詳推童限。  
 小兒命坐兇鄉，二五歲必然殀折，更有限逢惡殺，五七歲必主災亡。  
 文昌文曲天魁秀，不讀詩書也可人。  
 多學少成只為擎羊逢劫殺，為人好訟蓋因太歲遇官符。  
 命之理微熟察星辰之變化，數之理遠細詳格局之興衰。  
 北極加兇殺為道為僧，羊陀遇惡星為奴為僕。  
 如武破廉貪固深謀而貴顯，加羊陀空劫反小志以孤寒。  
 限輔星旺限雖弱而不弱，命臨吉地命雖兇而不兇。  
 斷橋截路大小難行，卯酉二空聰明發福。  
 命身遇紫府迭積金銀，二主逢劫空衣食不足。  
 謀而不遂，命限遇入擎羊，東作西成，限身遭逢輔相  
 科權祿拱，定為扳桂之高人，空劫羊鈴，作九流之術士。  
 情懷暢舒昌曲命身，詭詐浮虛羊陀陷地。  
 天機天梁擎羊會，早有刑而晚見孤。  
 貪狼武曲廉貞逢，少受貧而後享福。  
 此皆斗數之奧妙，學者宜熟思之。`},{id:"zhuxing-wenda",title:"諸星問答論",volume:1,blocks:[{type:"prose",text:"諸星問答論"},{type:"prose",text:" 問紫微所主若何？"},{type:"prose",text:" 答曰：紫微屬土，乃中天之尊星為帝座，主掌造化樞機，人生主宰。仗五行育萬物，以人命為之立定數。安星纏各根所司，處年數常掌爵祿。諸宮降福能消百惡。須看三臺，蓋紫微守命是中臺，前一位是上臺，後一位是下臺。俱看在廟旺之鄉否，有何吉凶之守照。如廟旺化吉甚妙，陷又化兇甚兇。吉限不為美，兇限則兇也。人之身命若值祿存同宮，日月三合相照，貴不可言。無輔弼同行則為孤君，雖美玉不足。更與諸殺同宮，或諸兇合照，君子在野，小人在位。主人奸詐假善，平生惡積。與囚同居，無左右相佐，定為胥吏。如落疾厄、兄弟、奴僕、相貌、四陷宮，主人勞碌作事無成，雖得助亦不為福。更宜詳細宮度，應究星纏之論。若居官祿身命，三宮最要左右守衛。天相祿馬交馳，不落空亡，更坐生鄉，可為貴論。如魁鉞三臺星會吉星。則三臺八座矣。帝會文昌拱照，又得美限扶，必文選之職。帝降七殺為權，有吉同位，則帝相有氣。諸吉鹹集，作武官之職。財帛田宅有左右守衛，又與武曲太陰同度，不見惡星，必為財賦之官。更與武曲祿存同宮，身命中尤為奇特。男女宮得祥佐吉星，主生貴子。若獨守無相佐，則子息孤單。妻宮會吉，得貴美夫婦諧老，亦要無破殺。遷移雖是強宮，更要相佐，有吉星照命，則因人之貴。福德在男為陷地，女為廟樂，逢吉則吉，逢兇則兇。"},{type:"prose",text:" 希夷先生曰：紫微為帝座，在諸宮能降福消災，解諸星之惡虛。能制火鈴為善，能降七殺為權。若得府相左右昌曲吉集，無有不貴。不然亦主鉅富。縱有四殺衝破亦作中局。若遇破軍辰戌丑未，主為臣不忠，為子不孝之論。女命逢之作貴婦斷。加殺衝破，亦作平常不為下賤。"},{type:"song-label",text:"歌曰："},{type:"prose",text:" 紫微原屬土，官祿宮主星，有相為有用，無相為孤君，諸宮皆降福，逢兇福自申，"},{type:"prose",text:" 文昌發科甲，文曲受皇恩，僧道有師號，快樂度春秋，吉星皆拱照，為吏協公平，"},{type:"prose",text:" 女人會帝座，遇吉事貴人，若與桃花會，飄蕩落風塵，擎羊火鈴聚，鼠竊狗偷群，"},{type:"prose",text:" 三方有吉拱，方作貴人評，若還無輔弼，諸惡共飲凌，帝為無道主，考究要知因，"},{type:"prose",text:" 二限若遇帝，喜氣自然新。"},{type:"prose",text:" 玉蟾先生曰：紫微乃中天星主，為眾星之樞紐，為造化也。大抵為人命之主宰，掌五行育萬物，各有所司。以左輔右弼為相，以天相昌曲為從，以魁鉞為傳令，以日月為分司，以祿馬為掌爵之司，以天府為帑藏之主，身命逢之，不勝其吉。如遇四殺（羊陀火鈴）、劫空衝破，定是僧道。此星在命，為人厚重，面紫色，專作吉斷。"},{type:"prose",text:" 問天機所主如何？"},{type:"prose",text:" 答曰：天機屬木，南斗第三益算之善星也。後化氣曰善，又得地合之行事，解諸星之順逆。定數於人命，逢諸吉鹹集，則萬事皆善。勤於禮佛，敬乎六親，利於林泉，宜於僧道。無惡虐不仁之心，有靈機應變之志。淵魚察見，作事有方。女命遇之為福，逢吉為吉，遇兇為兇。或守於身，更逢天梁，必有高藝隨身。習者宜詳玩之。"},{type:"prose",text:" 希夷先生曰：天機益壽之星，若守身命，主人異常。與天梁、左右、昌曲交會，文為清顯，武為忠良。若居陷地，四殺衝破，是為下局，當為僧道之清閒。凡入二限逢之，興家創業更改。女人吉星拱照，主旺夫益子。有權祿則為貴婦。落局羊陀火忌衝破，主下賤殘疾刑剋。"},{type:"song-label",text:"歌曰："},{type:"prose",text:" 天機兄弟主，南斗正曜星，作事有操略，稟性最高明，所為最好尚，亦可作群英"},{type:"prose",text:" 會吉主享福，入格居翰林，巨門同一位，武職壓邊庭，亦要權逢殺，方可立功名"},{type:"prose",text:" 天梁星同位，定作道與僧，女人若逢此，性巧必淫奔，天同與昌曲，聚拱主華榮"},{type:"prose",text:" 辰戌子午地，入廟有功名，若在寅卯位，四殺並破軍，羊陀及火玲，若與諸殺會，"},{type:"prose",text:" 災患有虛驚，武暗廉破會，兩目少光明，二限臨此宿，事必有變更。"},{type:"prose",text:" 玉蟾先生曰：天機南斗善星，故化氣曰善。佐帝令以行事，解諸兇之逆節。定數於人命之中，若逢吉聚則為富貴，若逢衝殺亦必好善。孝義六親，勤於禮佛，無不仁不義之為，有靈通變達之志。女命逢之，多主福壽。其在廟旺有力，陷地無力。"},{type:"prose",text:" 問太陽所主若何？"},{type:"prose",text:" 答曰：太陽星屬火，日之精也。乃造化之表儀，在數主人有貴氣，能為文為武。諸吉集則降禎祥，處黑星則勞心費力。若隨身命之中，居於廟樂之地。為數中之至曜，乃官祿之樞機。後化貴化祿，最宜在官祿宮。男作父星，女為夫主。命逢諸吉守照，更得太陰同照，富貴全美。若身居之，逢吉聚，則可在貴人門下客，否則公卿走卒。夫妻亦為強宮，男為諸吉聚，可因妻得貴。陷地加殺，傷妻不吉。男女宮得八座，加吉星在廟旺地，主生貴子，權柄不小。若財帛宮於旺地，會吉相助，不怕巨門纏，其富貴綿遠矣！若旺相無空劫，一生主富。居田宅，得祖父蔭澤。若左右諸吉星皆至，大小二限俱到，必有驟興之喜。若限不扶，不可以三合論議，恐應小差。女命逢之，限旺亦可共享。與鈴刑忌集限，目下有憂，或生克父母。刑殺聚限，有傷官之憂，常人有官非之撓。與羊陀聚則有疾病，與火鈴合其苦楚不少。推而至此，禍福瞭然。遷移宮其福與身命不同，難招祖業，移根換葉，出祖為家。限步逢之，決要動移。女命逢之不吉，若福德宮有相佐，招賢明之夫。父母宮男子單作父星，有輝則吉，無輝克父。希夷先生曰：太陽星周天歷度輸轉無窮。喜輔弼而佐君象，以祿存而助福。所忌者，巨暗遭逢。所樂者，太陰相旺。諸宮會吉則吉、黑道遇之則勞。守人身命，主人忠鯁，不較是非。若居廟旺，化祿化權，允為貴論。若得左右、昌曲、魁鉞三合拱照財官二宮，富貴極品。加四殺，亦主飽暖，僧道有師號。女人廟旺，主旺夫益子，加權祿封贈，加殺主平常。"},{type:"song-label",text:"歌曰："},{type:"prose",text:" 太陽原屬火，正主官祿星，若居身命位，稟性最聰明，慈愛量寬大，福壽享遐齡，"},{type:"prose",text:" 若與太陰會，驟發貴無倫，有輝照身命，平步入金門，巨門不相犯，升殿承君恩，"},{type:"prose",text:" 偏垣逢暗度，貧賤不可言，男人必克父，女命夫不全，火鈴逢若定，羊陀眼目昏，"},{type:"prose",text:" 二限若值此，必定賣田園。"},{type:"prose",text:" 玉蟾先生曰：太陽司權貴為文，遇天刑為武。在寅卯為初升，在辰巳為升殿。在午為日麗中天，主大富貴。在未申為偏垣，作事先勤後惰。在酉為西沒，貴而不顯，秀而不實。在戌亥子為失輝，更逢巨暗一生勞碌貧忙。更主眼目有傷，與人寡合招非。女命逢之，夫星不美，遇耗則非禮成婚。若與祿存同宮，雖主財帛，亦辛苦不閒。若與左右同宮則為貴論。又嫌火鈴、刑忌，未免先克其父。此星男得之為父星，女得之為夫星。"},{type:"prose",text:" 問武曲星所主為何？"},{type:"prose",text:" 答曰：武曲北斗第六星，屬金，乃財帛宮主。與天府同宮有壽，其施權於十二宮分，其臨地有廟、旺、陷宮。主於人，性剛果決，有喜有怒，可福可災。若陷囚會於震宮必為破，主淹留之舉。與祿馬交馳，發財於遠郡。若貪狼同度，慳吝之人。破軍同財鄉，財到手而成空。諸兇聚而作禍，吉集以成祥。希夷先生曰：武曲屬金，在天司壽，在數司財。怕受制入陷，喜祿存而同政。與太陰以互權，天府、天相為佐貳之星，財帛田宅為專司之所。惡殺耗囚會於震宮，必見木壓雷震。破軍貪狼會於坎宮，必主投河溺水。會祿馬則發財遠郡。貪狼會則少年不利。所謂武曲守命福非輕，貪狼不發少年郎是也。廟樂桃花同宮，利己損人。七殺火星同宮，因財被劫。遇羊陀則孤克，遇破軍難顯貴。若與破軍同位，更臨二限之中，定主是非之撓。蓋武曲守命，主人剛強果斷，甲己生人福厚，出將入相。更得貪火衝破，定為貴格。喜西北生人，東南生人平常，不守祖業。四殺衝破孤貧不一，破相延年。女人吉多為貴婦，加殺衝破孤克。"},{type:"prose",text:" 問天同星所主若何？"},{type:"prose",text:" 答曰：天同星屬水，乃南方第四星也，為福德宮之主宰。復雲：化福最喜遇吉曜，助福添祥，為人廉潔，貌稟清奇。有機樞無亢激，不怕七殺相侵，不怕諸殺同纏。限若逢之，一生得地，十二宮中皆曰福，無破定為祥。"},{type:"prose",text:" 希夷先生曰：天同南斗益算保生之星，化祿為善，逢吉為祥，身命值之，主為人謙遜，稟性溫和。必慈鯁直，文墨精通，有奇志無兇激。不忌七殺相侵，不畏諸兇同度，十二宮中皆為福論。遇左右昌梁貴顯，喜壬乙丙生人，巳亥得地。不宜六庚生人居酉地，終身不守。會四殺居巳亥為陷，殘疾孤克。女人逢殺衝破，刑夫克子。梁月衝破，合作偏房，僧道宜之，主享福。"},{type:"prose",text:" 問廉貞所主若何？"},{type:"prose",text:" 答曰：廉貞屬火，北斗第五星也。在斗司品秩，在數司權令。不臨廟旺，更犯官符，故曰化囚為殺。觸之不可解其禍，逢之不可測其祥。主人心狠性狂，不習禮義。逢帝座執威權，遇祿存主富貴，遇文昌好禮樂，遇殺曜顯武職，在官祿有威權，在身命為次桃花。若居旺宮，則賭博迷花而致訟。限逢巨門於陷地，則是非起於官司。逢財星耗合祖業必破，遇刑忌則膿血不免。遇白虎則刑杖難逃，遇武曲於受制之鄉，恐木壓蛇傷。同火曜於陷空之地，主投河自縊。破軍與日月以濟行，目疾而不免。限逢至此，災不可攘。只宜官祿身命之位，遇吉福映，逢兇則不慈。若在他宮，禍福宜詳。"},{type:"song-label",text:"歌曰："},{type:"prose",text:" 廉貪巳亥宮，遇吉福盈豐，應過三旬後，須防不善終。"},{type:"prose",text:" 問天府所主若何？"},{type:"prose",text:" 答曰：天府屬土，南斗主令第一星也。為財帛之主宰，在斗司福權之宿，會吉皆為富貴之基，定作文昌之論。"},{type:"prose",text:" 希夷先生曰：天府乃南斗延壽解厄之星，又曰司命。上相鎮國之星，在斗司權，在數則職掌財帛、田宅、衣祿之神。為帝之佐貳，能制羊陀為從，能化火鈴為福。主人相貌清奇，稟性溫良端雅。與昌曲會，必登首選。逢祿存武曲，必有鉅萬之富。秘雲：天府為祿庫，命逢終是富是也。不喜四殺衝破，雖無官貴，亦主財田富足。以田宅財帛為廟樂，以奴僕相貌為陷弱。以兄弟為平常，命逢之得相佐，主夫妻子女不缺。若值空亡是為孤立，不可一例而推斷，大抵此星多主吉。又曰：此星不論諸宮皆吉，女命得之清正機巧，旺夫益子，雖見衝破，亦以善論，僧道宜之有師號。"},{type:"song-label",text:"歌曰："},{type:"prose",text:" 天府為祿庫，入命終是富，萬傾置田莊，家資無論數，女命坐香閨，男人食天祿，"},{type:"prose",text:" 此是福吉星，四外無不足。"},{type:"prose",text:" 問太陰星所主若何？"},{type:"prose",text:" 答曰：太陰乃水之精，為田宅主，化富，與日為配。天儀表有上弦下弦之用，黃到黑到分勢尚好，虧數定廟樂。其為人也聰明俊秀，其稟性也端雅純祥。上弦為要之機，下弦減威之論。所值不以所見無妨，若相生坐於太陽，日在卯，月在酉，俱為旺地，為富貴之基。命坐銀輝之宮，諸吉鹹集，為享福之論。若居陷地，則落弱之名。若上弦下弦，仍以不逢巨門為佳。身若居之，則有隨娘繼拜，或離祖過房。身命若見惡殺交衝，必作傷殘之論。除非僧道，反獲禎祥。決禍福最為要緊，不可參差。又或與文曲同居身命，定是九流術士。男為妻宿，又作母星。"},{type:"prose",text:" 希夷先生曰：太陰化祿與日為配，以卯辰巳午未為陷地，以酉戌亥子丑為得垣。酉為西山之門，為東潛之所。嫌巨曜以來纏，怕羊陀以同度，廉囚相犯，七殺相沖，恐非得意之垣，定作傷殘之論。此星屬水，為田宅宮主，有輝為福，失陷必兇。男女得之，皆為母星，又作妻宿。若在身命廟樂，吉集主富貴。在疾厄遇陀暗為目疾，遇火鈴為災，值貪殺損目。在父母，如陷地失輝，遇流年白虎太歲，主母有災。此雖純和之星，但失輝受制則不吉。若逢白虎、喪門、弔客，妻亦慎之。"},{type:"prose",text:" 問貪狼所主若何？"},{type:"prose",text:" 答曰：貪狼北斗解厄之神，第一星也。屬水，化氣為桃花，為標準，乃主禍福之神。受善惡定奸詐瞞人，授學神仙之術。又好高吟浮蕩，作巧成拙。入廟樂之宮，可為祥可為禍。會破軍迷花戀酒而喪命，同祿存可吉。遇耗因以虛花，遇廉貞也不潔，見七殺或配以遭刑。遇羊陀主痔疾，逢刑忌有斑痕，二限為禍非輕。與七殺同守身命，男有穿窬之體，女有偷香之態。諸吉壓不能為福，眾兇聚愈藏其奸。以事藏機，虛花無實。與人交厚者薄，而薄者又厚。故云：七殺守身終是夭，貪狼入廟必為娼。若身命與破軍同居，更居三合之鄉生旺之地，男好飲而賭博遊蕩，好女無媒而自嫁，淫奔私竊，輕則隨客奔馳，重則遊於歌妓。喜見空亡，返主端正。若與武曲同度，為人諂佞奸貪，每存肥己之心，並無濟人之意。與貞同，公庭必定遭刑。四殺同，定為屠宰。羊陀交併，必作風流之鬼。昌曲同度，必多虛而少實。與七殺同纏，男女淫邪虛花。巨門交戰，口舌是非常有。若犯帝座，無制便為無益之人。得輔弼昌曲夾制，則無此論。陷地逢生又生祥瑞，雖家顛也發一時之財。惟會火鈴能富貴，美在財帛與武曲太陰同，終非所自發，則為淫佚。在兄弟子息，俱為陷地。在田宅則破蕩祖業，先富後貧。奴僕居於廟旺，必因奴僕所破。夫妻宮男女俱不得美，疾厄與羊陀暗殺交併，酒色之病。遷移若坐火鄉，破軍暗殺並，流年歲殺迭並，則主遭兵火賊盜相侵。總而言之，男女非得地之星，不見尤妙。"},{type:"prose",text:" 希夷先生曰：貪狼為北斗解厄之神，陟明之星，其氣屬木，體屬水，故化氣為桃花。乃主禍福之神，在數則樂為放蕩之事。遇吉則主富貴，遇兇則主虛浮。主人矮小，性剛猛威，機深謀遠，隨波逐浪，愛憎難定。居廟旺遇火星武職權貴，戊己生人合局。遇天相延壽，會廉武巧藝，得祿存僧道宜之。破殺相沖，飄蓬度日。女人刑剋不潔，遇太陰則主淫佚。"},{type:"prose",text:" 問巨門所主若何？"},{type:"prose",text:" 答曰：巨門屬水、金。北斗第二星也，為陰精之星，化氣為暗。在身命一生招口舌之非；在兄弟則骨肉參商；在夫妻主於隔角，生離死別，縱夫妻有對，不免汙名失節；在子息損後方招，雖有而無；在財帛有爭競之意；在疾厄遇刑忌，眼目之災，殺臨主殘疾；在遷移則招是非；在奴僕則多怨逆；在官祿主招刑杖；在田宅則破蕩祖業；在福德其禍稍輕；在父母則遭棄擲。"},{type:"prose",text:" 希夷先生曰：巨門在天，司品萬物。在數則掌執是非，主於闇昧，疑是多非，欺瞞天地，進退兩難。其性則面是背非，六親寡合，交人初善終惡。十二宮中若無廟樂照臨，到處為災，奔波勞碌。至亥寅巳申，雖富貴亦不耐久。會太陽則吉凶相半，逢七殺則主殺傷。貪耗同行，因好徒配。遇帝座則制其強。逢祿存則解其厄，值羊陀男盜女娼。對宮遇火鈴、白虎，無帝壓制，決配千里。三合殺湊，必遭火厄，此乃孤獨之數，刻剝之神。除為僧道九流，方免勞神偃蹇，限逢兇曜災難不輕。"},{type:"prose",text:" 問天相星所主若何？"},{type:"prose",text:" 答曰：天相屬水，南斗第五星也。為司爵之宿，為福善，化氣曰印，是為官祿文星，佐帝之位。若人命逢之，言語誠實，事不虛偽。見人難，有惻隱之心；見人惡，抱不平之氣。官祿得之則顯榮，帝座合之則爭權。佐日月之光，兼化廉貞之惡。身命得之而榮耀；子息得之而嗣續昌，十二宮中皆為祥福，不隨惡而變志，不因殺而改移。限步逢之，富不可量。此星若臨生旺之鄉，雖不逢帝座，若得左右，則職掌威權。或居閒弱之地，也作吉利，二限逢之主富貴。"},{type:"prose",text:" 希夷先生曰：天相南斗司爵之星，化氣為印。主人衣食豐足，昌曲左右相會，位至公卿。陷地貪廉武破羊陀殺湊，巧藝安身。火鈴衝破殘疾，女人主聰明端莊，志過丈夫。三方吉拱封贈論，若昌曲衝破侍妾，在僧道主清高。"},{type:"song-label",text:"歌曰："},{type:"prose",text:" 天相原屬水，化印主官祿，身命二宮逢，定主多財福，形體又肥滿，語言不輕瀆，"},{type:"prose",text:" 出仕主飛騰，居家主財谷，二限若逢之，百事看充足。"},{type:"prose",text:" 問天梁星所主若何？"},{type:"prose",text:" 答曰：天梁屬土，南斗第二星也。司壽化氣為蔭為福壽，乃父母之主命化暴戾為祥和。於人命則性情磊落，於相貌則厚重溫謙，循直無私。臨事果決，蔭於身福及子孫。遇昌曲於財宮，逢太陽於福德三合，乃萬全聲名。顯於王室職位，臨於風憲。若逢耗曜，更逢天機及殺，宜僧道，亦受王家制誥。逢貪巨同度而亂禮亂家。居奴僕、疾厄、相貌作豐餘之論。見廉貞刑忌，必無災厄克激之虞；遇火鈴刑暗，亦無征戰之撓。太歲衝而為福，白虎臨而無殃。論而至此，數決窮通之論也。命或對宮有天梁主有壽，乃極吉之星。"},{type:"prose",text:" 希夷先生又曰：天梁南斗司壽之星，化氣為蔭為壽。佐上帝威權，為父母主，生人清秀溫和，形神穩重，性情磊落，善識兵法。得昌曲左右加會，位至臺省。在父母宮則厚重威嚴，會太陽於福德，極品之貴。戊己生人合局，若四殺衝破則苗而不秀，逢天機耗曜，僧道清閒。於貪巨同度，則敗倫亂俗。在奴僕疾厄作豐餘之論。廉貞刑忌見之，必無克敵之虞。火鈴刑暗遇之，亦無征戰之撓。太歲衝而為福，白虎會而無災。奏書會則有意外之榮，青龍動則有文書之喜。小耗大耗交遇所幹無成，病符官符相侵不為災論。女人吉星入廟，旺夫益子，昌曲左右扶持封贈，羊陀火忌衝破，刑剋招非不潔，僧道宜之。"},{type:"song-label",text:"歌曰："},{type:"prose",text:" 天梁原屬土，南斗最吉星，化蔭名延壽，父母宮主星，田宅兄弟內，得之福自生，"},{type:"prose",text:" 形神自持重，心性更和平，生來無災患，文章有聲名，六親更和睦，仕宦居王庭，"},{type:"prose",text:" 巨門若相會，勞碌歷艱辛，若逢天機照，僧道享山林，二星在辰戌，福壽不須論。"},{type:"prose",text:" 問七殺星所主若何？"},{type:"prose",text:" 答曰：七殺南斗第六星也，屬火、金。乃斗中之上將，實成敗之孤辰。在斗司斗柄，主於風憲。其威作金之靈，其性若清涼之狀。主於數則宜僧道，主於身定歷艱辛。在命宮若限不扶夭折，在官祿得地，化禍為祥。在子息，而子息孤單；居夫婦而鴛衾半冷。會刑囚于田宅、父母，刑傷父母，產業難留。逢刑忌殺於遷移、疾厄，終身殘疾，縱使一身孤獨，也應壽年不長。與囚於身命，折肱傷股，又主癆傷。會囚耗於遷移，死於道路。若臨陷弱之宮，為殘較減。若值正陰之宮，作禍憂深。流年殺曜莫教逢，身殺星辰戌迭並，身殺逢惡曜於要地，命逢殺曜於三方，流殺又迭並，二限之中又逢，主陣亡掠死。合太陽巨門會帝旺之鄉則吉，處空亡犯刑殺遭禍不輕。大小二限合身命逢殺，雖帝制也無功。三合對沖，雖祿亦無力。蓋世英雄為殺制，此時一夢南柯。此乃倒限之地，所主務要仔細推詳，乃數中之惡曜，實非善星也。"},{type:"prose",text:" 希夷先生曰：七殺斗中上將，遇紫微則化權降福，遇火鈴則長其殺威。遇兇曜於生鄉定為屠宰，會昌曲於要地，情性頑囂。秘經雲：七殺居陷地，沉吟福不生是也。身命二宮逢之定歷艱辛，二限逢之遭殃破敗。遇帝祿而可解，遭流殺而逢兇。守身命作事進退，喜怒不常。左右昌曲入廟拱照，掌生殺之權，富貴出眾。若四殺忌星衝破，巧藝平常之人，陷地殘疾。女命旺地，財權服眾，志過丈夫。四殺衝破刑剋不潔，僧道宜之，若殺湊飄蕩，流移還俗。"},{type:"song-label",text:"歌曰："},{type:"prose",text:" 七殺寅申子午宮，四夷拱手服英雄，魁鉞左右文昌會，權祿名高食萬鍾，"},{type:"prose",text:" 殺居陷地不堪言，兇禍猶如抱虎眠，若是殺強無制伏，少年惡死到黃泉。"},{type:"prose",text:" 問破軍所主若何？"},{type:"prose",text:" 答曰：破軍屬水，北斗第七星也，司夫妻、子息、奴僕之神。居子午入廟，在天為殺氣，在數為耗星，故化氣曰耗。主人暴兇狡詐，其性奸猾，與人寡合，動輒損人。不成人之善，善助人之惡。虐視六親如寇讎，處骨肉無仁義，惟六癸六甲生人合格主富貴。陷地加殺衝破，巧藝殘疾，不守祖業，僧道宜之。女人衝破淫蕩無恥。此星居紫微則失威權；逢天府則作奸偽；會紫貪則鼠竊狗盜。與廉貞火鈴同度則決起官非；與巨門同度則口舌爭斗；與刑忌同度，則終身殘疾。與武曲入財位則東傾西敗；與文星守命一生貧士。遇諸兇結黨破敗，遇陷地其禍不輕。惟天梁可制其惡，天祿可解其狂。若逢流殺交併，家業蕩空。與文曲入於水域，殘疾、離鄉。遇文昌於震宮，遇吉可貴。若女命逢之，無媒自嫁，喪節飄流。凡坐人身命居子午，貪狼七殺相拱則威震華夷。或與武曲同居巳宮，貪狼拱亦居臺閣。但看惡星何如？甲癸生人入格，到老亦不全美也。在身命陷地，棄祖離宗；在兄弟骨肉參商；在夫妻不正，主婚姻進退；在子息先損後成；在財帛如湯澆雪；在疾厄致尪贏之疾；在遷移奔走無力；在奴僕謗怨逃走；在官祿主清貧；在田宅陷度，祖基破蕩；在福德多災；在父母破相刑剋。"},{type:"prose",text:" 問文昌星所主若何？"},{type:"prose",text:" 答曰：文昌主科甲，守身命主人幽閒儒雅，清秀魁梧，博文廣記，機變異常，一舉成名，披緋衣紫，福壽雙全。縱四殺衝破不為下賤。女人加吉得地，衣祿充足。四殺衝破，偏房下賤，僧道宜之。加權祿厚重有師號。"},{type:"song-label",text:"歌曰："},{type:"prose",text:" 文昌主科甲，辰巳是旺地，利午嫌卯酉，火生人不利，眉目定分明，相貌極俊麗，"},{type:"prose",text:" 喜於金生人，富貴雙全美，先難而後易，中晚有聲名，太陽蔭福集，傳臚第一名。"},{type:"prose",text:" 問文曲星所主若何？"},{type:"prose",text:" 答曰：文曲屬水，北斗第四星也，主科甲文車之宿。其象屬水，與文昌同協，吉數最為祥，臨身命中作科第之客。桃花浪暖，入仕無疑。於官祿面君顏而執政。單居身命，吏逢兇曜，亦作無名舌辯之徒。與廉貞共處必作公吏官。身與太陰同行，定系九流術士。怕逢破軍恐臨水以生災；嫌遇貪狼蒞政事而顛倒。逢七殺刑忌囚及諸惡曜，詐偽莫逃。逢巨門共其度，和而喪志。女命不宜於逢，水性楊花。忌入土宮，限臨蹭蹬。若祿存、化祿來纏，不可以為兇論。"},{type:"prose",text:" 希夷先生曰：文曲守身命，居巳酉丑宮居侯伯。武貪三合同垣，將相之格，文昌遇合亦然。若陷宮"},{type:"prose",text:" 午戌之地，巨門羊陀衝破，喪命夭折，水大驚險。若亥卯未旺地，與天梁天相會主聰明博學，殺衝破只宜僧道。若女命值之清秀聰明主貴，若陷地衝破淫而且賤。"},{type:"prose",text:" 問流年昌曲若何？"},{type:"prose",text:" 答曰：命逢流年昌曲，為科名科甲。大小二限逢之，三合拱照太陽，又照流年祿；小限太歲逢魁鉞、左右、臺座、日月、科權祿馬三方拱照，決然高中無疑。然亦此數星俱全方為大吉，但以流年科甲為主。如命限值之，其餘吉曜，若得二三拱照，亦必高中。但二星在巳酉得地，不富即貴，只是不能耐久。"},{type:"song-label",text:"歌曰："},{type:"prose",text:" 南北昌曲星，數中推第一，身命最為佳，諸吉恐非吉，得居人命上，桃花浪三汲，"},{type:"prose",text:" 入仕更無虛，從容要輔弼，只恐惡殺臨，火鈴羊陀激，若還逢陷地，苗而不秀實，"},{type:"prose",text:" 不是公吏輩，九流工數術，無破宰職權，女人多淫佚，樂居亥子宮，空亡官無益。"},{type:"prose",text:" 問左輔所主若何？"},{type:"prose",text:" 希夷先生答曰：左輔帝極主宰之星，守身命諸宮降福。主人形貌敦厚慷慨風流。紫府祿權若得三合衝照，主文武大貴。火忌衝破，雖富貴不久。僧道清閒，所以溫重賢曉，旺地封贈。火忌衝破，以中局斷之。"},{type:"prose",text:" 問右弼所主若何？"},{type:"prose",text:" 希夷先生答曰：右弼帝極主宰之星，守身命文墨精通。紫府吉星同垣，財官雙美，文武雙全。羊陀火忌衝破，下局斷之。女人賢良有志，縱四殺衝破，不為下賤，僧道清閒。"},{type:"song-label",text:"歌曰："},{type:"prose",text:" 左輔原屬土，右弼水為根，失君為無用，三合宜見君，若在紫微位，爵祿不須論，"},{type:"prose",text:" 若在夫妻位，主人定二婚，若與廉貞並，惡賤遭鉗髡，輔弼為上相，輔佐紫微星，"},{type:"prose",text:" 喜居日月側，文人遇禹門，倘居閒位上，無爵更無名，妻宮遇此宿，決定兩妻成，"},{type:"prose",text:" 若與刑囚處，遭傷作盜賊。"},{type:"prose",text:" 問天魁天鉞星所主若何？"},{type:"prose",text:" 希夷先生答曰：魁鉞斗中司科之星，入命坐貴向貴，或得左右吉聚無不富貴。況二星又為上界和合之神，若魁臨命，鉞守身，更迭相守。更遇紫微府、日月、昌曲、左右、權祿相湊，少年必聚美妻。若遇大難，必得貴人成就扶助，小人不一，亦不為兇。限步巡逢必主女子添喜，生男則俊雅，入學功名有成。生女則容貌端莊，出眾超群；若四十以後逢墓庫，不依此斷。有兇不以為災，居官者賢而威武，聲名遠播。僧道享福，與人和睦，不為下賤。女人吉多宰輔之妻，命婦之論。若加惡殺亦為富貴，但不免私情淫佚。"},{type:"song-label",text:"歌曰："},{type:"prose",text:" 天乙貴人眾所欽，命逢金帶福彌深，飛騰名譽人爭慕，博雅皆通古與今，"},{type:"prose",text:" 魁鉞二星限中強，人人遇此廣錢糧，官吏逢之發財福，當年必定見君王。"},{type:"prose",text:" 問祿存星所主若何？"},{type:"prose",text:" 希夷先生答曰：祿存北斗第三星，真人之宿，主人貴爵，掌人壽基。帝相扶之施權，日月得之增輝。天府武曲為厥職，天梁天同共其祥。十二宮中惟身命、田宅、財帛為要，主富。居遷移則佳，與帝星守官祿宜子孫爵秩。若獨守命而無吉化，乃看財奴耳。逢吉逞其權，遇惡敗其跡。最嫌落於陷空不能為福，更湊火鈴空劫，巧藝安身。蓋祿爵當得勢而享之，守身命主人慈厚信直，通文濟楚。女人清淑機巧能幹能為，有君子之志。紫府廉同會合，作祿存上局。大抵此星諸宮降福消災。"},{type:"song-label",text:"歌曰："},{type:"prose",text:" 斗北祿存星，數中為上局，守值身命內，不貴多金玉，此為迪吉星，亦可登仕路，"},{type:"prose",text:" 文人有聲名，武人有厚祿，常庶發橫財，僧道亦主福，官吏若逢之，斷然食天祿。"},{type:"song-label",text:"又曰"},{type:"prose",text:" 夾祿拱貴並化祿，金裡重逢金滿屋，不惟方丈比諸侯，一食萬鍾猶未足，"},{type:"prose",text:" 祿存對向守遷移，三合逢之利祿宜，得逢遐邇人欽敬，的然白手起家基。"},{type:"prose",text:" 問天馬星所主若何？"},{type:"prose",text:" 希夷先生答曰：諸宮各有制化，如身命臨之謂之驛馬。喜祿存、紫府、昌曲，守照為吉。如大小二限臨之，更遇祿存紫府，流昌必利。如與祿存同宮，謂之祿馬交馳，又曰折鞭馬；紫府同宮謂之扶轝馬；刑殺同宮謂之負屍馬；火星同宮謂之戰馬；日月同宮謂雌雄馬；逢空亡謂之死馬、亡馬；居絕死謂之死馬；遇陀羅謂之折足馬。以上犯此數者，俱主災病，流年值之依此斷。"},{type:"prose",text:" 問化祿星所主若何？"},{type:"prose",text:" 希夷先生答曰：祿為福德之神。守身命官祿之位，科權相逢必作大臣之職。小限逢之主進財入仕之喜。大限十年吉慶無疑，惡曜來臨並羊陀火忌衝照，亦不為害。女人吉湊作命婦，二限逢之，內外威嚴，殺湊平常。"},{type:"prose",text:" 問化權星所主若何？"},{type:"prose",text:" 希夷先生答曰：權星掌判生殺之神。守身命科祿相逢出將入相。科權相逢必定文章冠世，人皆欽仰。小限相逢，無有不吉。大限十年，必然遂志。如逢羊陀耗使劫空，聽讒貽累，官災貶謫。女人得之內外稱志，可作命婦。僧道掌山林有師號。"},{type:"prose",text:" 問化科星所主若何？"},{type:"prose",text:" 希夷先生答曰：科星上界應試，主掌文墨之星。守身命權祿相逢宰臣之貴。如逢惡曜亦為文章秀士，可作群英師範。女命吉拱，主貴封贈。雖四殺衝破，亦為富貴。與科星拱照衝同論。"},{type:"prose",text:" 問化忌星所主若何？"},{type:"prose",text:" 希夷先生答曰：忌為多管之神。守身命一生不順，小限逢之一年不足，大限十年悔吝。二限太歲交臨，斷然蹭蹬。文人不耐久，武人縱有官災，口舌不防。雖商賈技藝人，皆不宜利。"},{type:"prose",text:" 如會紫府、昌曲、左右、科權祿，與忌同宮又兼四殺共處，即發財亦不佳，功名亦不成就。如單逢四殺、耗使、劫空，主奔波帶疾。僧道流移還俗。處事只求七分。"},{type:"prose",text:" 問擎羊星所主若何？"},{type:"prose",text:" 希夷先生答曰：擎羊北斗之助星。守身命性粗行暴，孤單，視親為疏，翻恩為怨。入廟性剛果決，機謀好勇，主權貴。北方生人為福，四墓生人不忌。居卯酉作禍興殃，刑剋極甚。六甲六庚生人，必有兇禍。縱富貴不久亦不善終，若九流工藝人辛勤。加火忌劫空衝破，殘疾離祖刑剋六親。女人入廟加吉上局，殺耗衝破多主刑剋下局。"},{type:"prose",text:" 問陀羅星所主若何？"},{type:"prose",text:" 希夷先生答曰：陀羅北斗之助星。守身命心行不正，暗淚長流，性剛威猛，作事進退。橫成橫破，飄蕩不定。與貪狼同度因酒色以成癆，與火鈴同處，疥疫不死。居疾厄，暗疾纏綿。辰戌丑未生人為福，在廟財官論，文人不耐久，武人橫發高遷。若陷地加殺刑剋招兇，二姓延生，女人刑剋下賤。"},{type:"prose",text:" 羊陀二星總論"},{type:"prose",text:" 玉蟾先生曰：擎羊陀羅二星屬火金，乃北斗浮星，在斗司奏，在數兇厄。羊化氣曰刑，陀化氣曰忌。怕臨兄弟、田宅、父母三宮。忌三合臨身命，合昌曲、左右有暗痣、眼痣。見日月女剋夫，而夫克婦，為諸宮之凶神。忌同日月則傷親損目；刑並桃花則風流惹禍；忌貪狼合因花酒以忘身；刑與暗同行招暗疾而壞目；忌與殺暗同度招凌辱而生暗疾；與火鈴為兇伴只宜僧道；權刑合殺疾病官厄不免；貪耗流年面上刺痕。二限更遇此，災害不時而生也。"},{type:"song-label",text:"歌曰："},{type:"prose",text:" 刑與暗同行，暗疾刑六親，火鈴遇兇伴，只宜道與僧，權刑囚合殺，疾病災厄侵，"},{type:"prose",text:" 貪耗流年聚，面上刺痕新，限運若逢此，橫禍血刃生。"},{type:"prose",text:" 羊陀夭壽殺，人遇為掃星，君子防恐懼，小人遭凌刑，遇耗決乞求，只宜林泉人，"},{type:"prose",text:" 二限倘來犯，不時災禍侵。"},{type:"prose",text:" 問火星所主若何？"},{type:"prose",text:" 答曰：火星乃南斗浮星也。"},{type:"prose",text:" 希夷先生歌曰"},{type:"prose",text:" 火星大殺將，南斗號殺神，若主身命位，諸宮不可臨，性氣亦沉毒，剛強出眾人，"},{type:"prose",text:" 毛髮多異類，唇齒有傷痕，更與羊陀會，襁褓必災迍，過房出外養，二姓可延生，"},{type:"prose",text:" 此星東南利，不利西北生，若得貪狼會，旺地貴無倫，封侯居上將，勳業著邊庭，"},{type:"prose",text:" 三方無殺破，中年後始興，僧道多飄蕩，不守規戒心，女人旺地潔，陷地主邪淫，"},{type:"prose",text:" 刑夫又克子，下賤勞碌人。"},{type:"prose",text:" 問鈴星所主若何？"},{type:"prose",text:" 答曰：鈴星乃南斗助星也。"},{type:"prose",text:" 希夷先生歌曰"},{type:"prose",text:" 大殺鈴星將，南斗為從神，值人身命者，性格亦沉吟，形貌多異類，威勢有聲名，"},{type:"prose",text:" 若與貪狼會，指日立邊庭，廟地財官貴，陷地主孤貧，羊陀若湊合，其刑大不清，"},{type:"prose",text:" 孤單並棄祖，殘傷帶疾人，僧道多飄蕩，還俗定無疑，女人無吉曜，刑剋少六親，"},{type:"prose",text:" 終身不貞潔，壽夭仍困貧，此星大殺將，其惡不可禁，一生有兇禍，聚實為虛情，"},{type:"prose",text:" 七殺主陣亡，破軍財屋傾，廉宿羊刑會，劫空主刀兵，或遇貪狼宿，官祿亦不寧，"},{type:"prose",text:" 若逢居旺地，富貴不可論。"},{type:"prose",text:" 羊陀火鈴四星總論"},{type:"prose",text:" 玉蟾先生曰"},{type:"prose",text:" 火鈴陀羅金，擎羊刑忌訣，一名馬掃星，又名短壽殺，君子失其權，小人犯刑法，"},{type:"prose",text:" 孤獨克六親，災禍常不歇，腰足唇齒傷，勞碌多蹇剝，破相又勞心，乞丐填溝壑，"},{type:"prose",text:" 武曲並貪狼，一世招兇惡，疾厄若逢之，四時不離著，只宜山寺僧，金谷常安樂。"},{type:"prose",text:" 問天空地劫所主若何？"},{type:"prose",text:" 希夷先生曰：二星守身命，遇吉則吉，遇兇則兇。如四殺衝照，輕者下賤，重者六畜之命。僧道不正，女子婢妾，刑剋孤獨。大抵二星俱不宜見，定主破財，二限逢之必兇。"},{type:"song-label",text:"歌曰："},{type:"prose",text:" 劫空為害最愁人，才智英雄誤一身，只好為僧並學術，堆金積玉也須貧。"},{type:"prose",text:" 問天傷天使所主若何？"},{type:"prose",text:" 希夷先生答曰：天傷乃上天虛耗之神，天使乃上天傳使之神。太歲二限逢之不問得地否？只要吉多為福其禍稍輕，如無吉，值巨門、羊陀、火鈴、忌、天機，其年必主官災，喪亡破敗。"},{type:"prose",text:" 限至大耗號天傷，夫子在陳也絕糧，天使限臨人共忌，石崇鉅富破家亡。"},{type:"prose",text:" 問天刑星所主若何？"},{type:"prose",text:" 希夷先生答曰：天刑守命身，不為僧道定主孤刑，不夭則貧。父母兄弟不得全，二限逢之主出家，官事牢獄失財，入廟則吉。"},{type:"song-label",text:"歌曰："},{type:"prose",text:" 天刑未必是兇星，入廟名為天喜神，昌曲吉星來湊合，定然獻策到王庭，"},{type:"prose",text:" 刑居寅上並酉戌，更臨卯位自光明，必遇文星成大業，掌握邊疆百萬兵，"},{type:"prose",text:" 三不子兮號天刑，為僧為道是孤身，天哭二星皆同到，終是難逃有疾人。"},{type:"prose",text:" 問天姚星所主若何？"},{type:"prose",text:" 希夷先生答曰：天姚守身命，心性陰毒，多疑恐、善顏色、風流多婢、主淫。入廟旺主富貴多奴，居亥有學識。會惡星破家敗產，因色犯刑。六合重逢，少年夭折。若臨限不用媒妁，招手成婚。或紫微吉星加，剛柔相濟，主風騷，加紅鸞愈淫，加刑刃主夭。"},{type:"song-label",text:"歌曰："},{type:"prose",text:" 天姚居戌卯酉遊，更入雙魚一併求，福厚生成耽酒色，無災無禍度春秋，"},{type:"prose",text:" 天姚星與敗星同，號曰人間掃氣囂，辛苦平生過一世，不曾安跡在客中，"},{type:"prose",text:" 人身偶爾值天姚，戀色貪花性帚兇，此曜若居生旺地，位登極品亦風騷。"},{type:"prose",text:" 問天哭天虛二星所主若何？"},{type:"prose",text:" 希夷先生答曰：哭虛為惡曜，臨命最非常。加臨父母內，破蕩賣田莊。若教身命陷，窮獨帶刑傷。六親多不足，煩惱過時光。東謀西不就，心事匆忙忙。丑卯申宮吉，遇祿名顯揚。二限若逢之，哀哀哭斷腸"}],raw:`諸星問答論  
 問紫微所主若何？  
 答曰：紫微屬土，乃中天之尊星為帝座，主掌造化樞機，人生主宰。仗五行育萬物，以人命為之立定數。安星纏各根所司，處年數常掌爵祿。諸宮降福能消百惡。須看三臺，蓋紫微守命是中臺，前一位是上臺，後一位是下臺。俱看在廟旺之鄉否，有何吉凶之守照。如廟旺化吉甚妙，陷又化兇甚兇。吉限不為美，兇限則兇也。人之身命若值祿存同宮，日月三合相照，貴不可言。無輔弼同行則為孤君，雖美玉不足。更與諸殺同宮，或諸兇合照，君子在野，小人在位。主人奸詐假善，平生惡積。與囚同居，無左右相佐，定為胥吏。如落疾厄、兄弟、奴僕、相貌、四陷宮，主人勞碌作事無成，雖得助亦不為福。更宜詳細宮度，應究星纏之論。若居官祿身命，三宮最要左右守衛。天相祿馬交馳，不落空亡，更坐生鄉，可為貴論。如魁鉞三臺星會吉星。則三臺八座矣。帝會文昌拱照，又得美限扶，必文選之職。帝降七殺為權，有吉同位，則帝相有氣。諸吉鹹集，作武官之職。財帛田宅有左右守衛，又與武曲太陰同度，不見惡星，必為財賦之官。更與武曲祿存同宮，身命中尤為奇特。男女宮得祥佐吉星，主生貴子。若獨守無相佐，則子息孤單。妻宮會吉，得貴美夫婦諧老，亦要無破殺。遷移雖是強宮，更要相佐，有吉星照命，則因人之貴。福德在男為陷地，女為廟樂，逢吉則吉，逢兇則兇。  
 希夷先生曰：紫微為帝座，在諸宮能降福消災，解諸星之惡虛。能制火鈴為善，能降七殺為權。若得府相左右昌曲吉集，無有不貴。不然亦主鉅富。縱有四殺衝破亦作中局。若遇破軍辰戌丑未，主為臣不忠，為子不孝之論。女命逢之作貴婦斷。加殺衝破，亦作平常不為下賤。  
 歌曰  
 紫微原屬土，官祿宮主星，有相為有用，無相為孤君，諸宮皆降福，逢兇福自申，  
 文昌發科甲，文曲受皇恩，僧道有師號，快樂度春秋，吉星皆拱照，為吏協公平，  
 女人會帝座，遇吉事貴人，若與桃花會，飄蕩落風塵，擎羊火鈴聚，鼠竊狗偷群，  
 三方有吉拱，方作貴人評，若還無輔弼，諸惡共飲凌，帝為無道主，考究要知因，  
 二限若遇帝，喜氣自然新。  
 玉蟾先生曰：紫微乃中天星主，為眾星之樞紐，為造化也。大抵為人命之主宰，掌五行育萬物，各有所司。以左輔右弼為相，以天相昌曲為從，以魁鉞為傳令，以日月為分司，以祿馬為掌爵之司，以天府為帑藏之主，身命逢之，不勝其吉。如遇四殺（羊陀火鈴）、劫空衝破，定是僧道。此星在命，為人厚重，面紫色，專作吉斷。  
 問天機所主如何？  
 答曰：天機屬木，南斗第三益算之善星也。後化氣曰善，又得地合之行事，解諸星之順逆。定數於人命，逢諸吉鹹集，則萬事皆善。勤於禮佛，敬乎六親，利於林泉，宜於僧道。無惡虐不仁之心，有靈機應變之志。淵魚察見，作事有方。女命遇之為福，逢吉為吉，遇兇為兇。或守於身，更逢天梁，必有高藝隨身。習者宜詳玩之。  
 希夷先生曰：天機益壽之星，若守身命，主人異常。與天梁、左右、昌曲交會，文為清顯，武為忠良。若居陷地，四殺衝破，是為下局，當為僧道之清閒。凡入二限逢之，興家創業更改。女人吉星拱照，主旺夫益子。有權祿則為貴婦。落局羊陀火忌衝破，主下賤殘疾刑剋。  
 歌曰  
 天機兄弟主，南斗正曜星，作事有操略，稟性最高明，所為最好尚，亦可作群英  
 會吉主享福，入格居翰林，巨門同一位，武職壓邊庭，亦要權逢殺，方可立功名  
 天梁星同位，定作道與僧，女人若逢此，性巧必淫奔，天同與昌曲，聚拱主華榮  
 辰戌子午地，入廟有功名，若在寅卯位，四殺並破軍，羊陀及火玲，若與諸殺會，  
 災患有虛驚，武暗廉破會，兩目少光明，二限臨此宿，事必有變更。  
 玉蟾先生曰：天機南斗善星，故化氣曰善。佐帝令以行事，解諸兇之逆節。定數於人命之中，若逢吉聚則為富貴，若逢衝殺亦必好善。孝義六親，勤於禮佛，無不仁不義之為，有靈通變達之志。女命逢之，多主福壽。其在廟旺有力，陷地無力。  
 問太陽所主若何？  
 答曰：太陽星屬火，日之精也。乃造化之表儀，在數主人有貴氣，能為文為武。諸吉集則降禎祥，處黑星則勞心費力。若隨身命之中，居於廟樂之地。為數中之至曜，乃官祿之樞機。後化貴化祿，最宜在官祿宮。男作父星，女為夫主。命逢諸吉守照，更得太陰同照，富貴全美。若身居之，逢吉聚，則可在貴人門下客，否則公卿走卒。夫妻亦為強宮，男為諸吉聚，可因妻得貴。陷地加殺，傷妻不吉。男女宮得八座，加吉星在廟旺地，主生貴子，權柄不小。若財帛宮於旺地，會吉相助，不怕巨門纏，其富貴綿遠矣！若旺相無空劫，一生主富。居田宅，得祖父蔭澤。若左右諸吉星皆至，大小二限俱到，必有驟興之喜。若限不扶，不可以三合論議，恐應小差。女命逢之，限旺亦可共享。與鈴刑忌集限，目下有憂，或生克父母。刑殺聚限，有傷官之憂，常人有官非之撓。與羊陀聚則有疾病，與火鈴合其苦楚不少。推而至此，禍福瞭然。遷移宮其福與身命不同，難招祖業，移根換葉，出祖為家。限步逢之，決要動移。女命逢之不吉，若福德宮有相佐，招賢明之夫。父母宮男子單作父星，有輝則吉，無輝克父。希夷先生曰：太陽星周天歷度輸轉無窮。喜輔弼而佐君象，以祿存而助福。所忌者，巨暗遭逢。所樂者，太陰相旺。諸宮會吉則吉、黑道遇之則勞。守人身命，主人忠鯁，不較是非。若居廟旺，化祿化權，允為貴論。若得左右、昌曲、魁鉞三合拱照財官二宮，富貴極品。加四殺，亦主飽暖，僧道有師號。女人廟旺，主旺夫益子，加權祿封贈，加殺主平常。  
 歌曰  
 太陽原屬火，正主官祿星，若居身命位，稟性最聰明，慈愛量寬大，福壽享遐齡，  
 若與太陰會，驟發貴無倫，有輝照身命，平步入金門，巨門不相犯，升殿承君恩，  
 偏垣逢暗度，貧賤不可言，男人必克父，女命夫不全，火鈴逢若定，羊陀眼目昏，  
 二限若值此，必定賣田園。  
 玉蟾先生曰：太陽司權貴為文，遇天刑為武。在寅卯為初升，在辰巳為升殿。在午為日麗中天，主大富貴。在未申為偏垣，作事先勤後惰。在酉為西沒，貴而不顯，秀而不實。在戌亥子為失輝，更逢巨暗一生勞碌貧忙。更主眼目有傷，與人寡合招非。女命逢之，夫星不美，遇耗則非禮成婚。若與祿存同宮，雖主財帛，亦辛苦不閒。若與左右同宮則為貴論。又嫌火鈴、刑忌，未免先克其父。此星男得之為父星，女得之為夫星。  
 問武曲星所主為何？  
 答曰：武曲北斗第六星，屬金，乃財帛宮主。與天府同宮有壽，其施權於十二宮分，其臨地有廟、旺、陷宮。主於人，性剛果決，有喜有怒，可福可災。若陷囚會於震宮必為破，主淹留之舉。與祿馬交馳，發財於遠郡。若貪狼同度，慳吝之人。破軍同財鄉，財到手而成空。諸兇聚而作禍，吉集以成祥。希夷先生曰：武曲屬金，在天司壽，在數司財。怕受制入陷，喜祿存而同政。與太陰以互權，天府、天相為佐貳之星，財帛田宅為專司之所。惡殺耗囚會於震宮，必見木壓雷震。破軍貪狼會於坎宮，必主投河溺水。會祿馬則發財遠郡。貪狼會則少年不利。所謂武曲守命福非輕，貪狼不發少年郎是也。廟樂桃花同宮，利己損人。七殺火星同宮，因財被劫。遇羊陀則孤克，遇破軍難顯貴。若與破軍同位，更臨二限之中，定主是非之撓。蓋武曲守命，主人剛強果斷，甲己生人福厚，出將入相。更得貪火衝破，定為貴格。喜西北生人，東南生人平常，不守祖業。四殺衝破孤貧不一，破相延年。女人吉多為貴婦，加殺衝破孤克。  
 問天同星所主若何？  
 答曰：天同星屬水，乃南方第四星也，為福德宮之主宰。復雲：化福最喜遇吉曜，助福添祥，為人廉潔，貌稟清奇。有機樞無亢激，不怕七殺相侵，不怕諸殺同纏。限若逢之，一生得地，十二宮中皆曰福，無破定為祥。  
 希夷先生曰：天同南斗益算保生之星，化祿為善，逢吉為祥，身命值之，主為人謙遜，稟性溫和。必慈鯁直，文墨精通，有奇志無兇激。不忌七殺相侵，不畏諸兇同度，十二宮中皆為福論。遇左右昌梁貴顯，喜壬乙丙生人，巳亥得地。不宜六庚生人居酉地，終身不守。會四殺居巳亥為陷，殘疾孤克。女人逢殺衝破，刑夫克子。梁月衝破，合作偏房，僧道宜之，主享福。  
 問廉貞所主若何？  
 答曰：廉貞屬火，北斗第五星也。在斗司品秩，在數司權令。不臨廟旺，更犯官符，故曰化囚為殺。觸之不可解其禍，逢之不可測其祥。主人心狠性狂，不習禮義。逢帝座執威權，遇祿存主富貴，遇文昌好禮樂，遇殺曜顯武職，在官祿有威權，在身命為次桃花。若居旺宮，則賭博迷花而致訟。限逢巨門於陷地，則是非起於官司。逢財星耗合祖業必破，遇刑忌則膿血不免。遇白虎則刑杖難逃，遇武曲於受制之鄉，恐木壓蛇傷。同火曜於陷空之地，主投河自縊。破軍與日月以濟行，目疾而不免。限逢至此，災不可攘。只宜官祿身命之位，遇吉福映，逢兇則不慈。若在他宮，禍福宜詳。  
 歌曰  
 廉貪巳亥宮，遇吉福盈豐，應過三旬後，須防不善終。  
 問天府所主若何？  
 答曰：天府屬土，南斗主令第一星也。為財帛之主宰，在斗司福權之宿，會吉皆為富貴之基，定作文昌之論。  
 希夷先生曰：天府乃南斗延壽解厄之星，又曰司命。上相鎮國之星，在斗司權，在數則職掌財帛、田宅、衣祿之神。為帝之佐貳，能制羊陀為從，能化火鈴為福。主人相貌清奇，稟性溫良端雅。與昌曲會，必登首選。逢祿存武曲，必有鉅萬之富。秘雲：天府為祿庫，命逢終是富是也。不喜四殺衝破，雖無官貴，亦主財田富足。以田宅財帛為廟樂，以奴僕相貌為陷弱。以兄弟為平常，命逢之得相佐，主夫妻子女不缺。若值空亡是為孤立，不可一例而推斷，大抵此星多主吉。又曰：此星不論諸宮皆吉，女命得之清正機巧，旺夫益子，雖見衝破，亦以善論，僧道宜之有師號。  
 歌曰  
 天府為祿庫，入命終是富，萬傾置田莊，家資無論數，女命坐香閨，男人食天祿，  
 此是福吉星，四外無不足。  
 問太陰星所主若何？  
 答曰：太陰乃水之精，為田宅主，化富，與日為配。天儀表有上弦下弦之用，黃到黑到分勢尚好，虧數定廟樂。其為人也聰明俊秀，其稟性也端雅純祥。上弦為要之機，下弦減威之論。所值不以所見無妨，若相生坐於太陽，日在卯，月在酉，俱為旺地，為富貴之基。命坐銀輝之宮，諸吉鹹集，為享福之論。若居陷地，則落弱之名。若上弦下弦，仍以不逢巨門為佳。身若居之，則有隨娘繼拜，或離祖過房。身命若見惡殺交衝，必作傷殘之論。除非僧道，反獲禎祥。決禍福最為要緊，不可參差。又或與文曲同居身命，定是九流術士。男為妻宿，又作母星。  
 希夷先生曰：太陰化祿與日為配，以卯辰巳午未為陷地，以酉戌亥子丑為得垣。酉為西山之門，為東潛之所。嫌巨曜以來纏，怕羊陀以同度，廉囚相犯，七殺相沖，恐非得意之垣，定作傷殘之論。此星屬水，為田宅宮主，有輝為福，失陷必兇。男女得之，皆為母星，又作妻宿。若在身命廟樂，吉集主富貴。在疾厄遇陀暗為目疾，遇火鈴為災，值貪殺損目。在父母，如陷地失輝，遇流年白虎太歲，主母有災。此雖純和之星，但失輝受制則不吉。若逢白虎、喪門、弔客，妻亦慎之。  
 問貪狼所主若何？  
 答曰：貪狼北斗解厄之神，第一星也。屬水，化氣為桃花，為標準，乃主禍福之神。受善惡定奸詐瞞人，授學神仙之術。又好高吟浮蕩，作巧成拙。入廟樂之宮，可為祥可為禍。會破軍迷花戀酒而喪命，同祿存可吉。遇耗因以虛花，遇廉貞也不潔，見七殺或配以遭刑。遇羊陀主痔疾，逢刑忌有斑痕，二限為禍非輕。與七殺同守身命，男有穿窬之體，女有偷香之態。諸吉壓不能為福，眾兇聚愈藏其奸。以事藏機，虛花無實。與人交厚者薄，而薄者又厚。故云：七殺守身終是夭，貪狼入廟必為娼。若身命與破軍同居，更居三合之鄉生旺之地，男好飲而賭博遊蕩，好女無媒而自嫁，淫奔私竊，輕則隨客奔馳，重則遊於歌妓。喜見空亡，返主端正。若與武曲同度，為人諂佞奸貪，每存肥己之心，並無濟人之意。與貞同，公庭必定遭刑。四殺同，定為屠宰。羊陀交併，必作風流之鬼。昌曲同度，必多虛而少實。與七殺同纏，男女淫邪虛花。巨門交戰，口舌是非常有。若犯帝座，無制便為無益之人。得輔弼昌曲夾制，則無此論。陷地逢生又生祥瑞，雖家顛也發一時之財。惟會火鈴能富貴，美在財帛與武曲太陰同，終非所自發，則為淫佚。在兄弟子息，俱為陷地。在田宅則破蕩祖業，先富後貧。奴僕居於廟旺，必因奴僕所破。夫妻宮男女俱不得美，疾厄與羊陀暗殺交併，酒色之病。遷移若坐火鄉，破軍暗殺並，流年歲殺迭並，則主遭兵火賊盜相侵。總而言之，男女非得地之星，不見尤妙。  
 希夷先生曰：貪狼為北斗解厄之神，陟明之星，其氣屬木，體屬水，故化氣為桃花。乃主禍福之神，在數則樂為放蕩之事。遇吉則主富貴，遇兇則主虛浮。主人矮小，性剛猛威，機深謀遠，隨波逐浪，愛憎難定。居廟旺遇火星武職權貴，戊己生人合局。遇天相延壽，會廉武巧藝，得祿存僧道宜之。破殺相沖，飄蓬度日。女人刑剋不潔，遇太陰則主淫佚。  
 問巨門所主若何？  
 答曰：巨門屬水、金。北斗第二星也，為陰精之星，化氣為暗。在身命一生招口舌之非；在兄弟則骨肉參商；在夫妻主於隔角，生離死別，縱夫妻有對，不免汙名失節；在子息損後方招，雖有而無；在財帛有爭競之意；在疾厄遇刑忌，眼目之災，殺臨主殘疾；在遷移則招是非；在奴僕則多怨逆；在官祿主招刑杖；在田宅則破蕩祖業；在福德其禍稍輕；在父母則遭棄擲。  
 希夷先生曰：巨門在天，司品萬物。在數則掌執是非，主於闇昧，疑是多非，欺瞞天地，進退兩難。其性則面是背非，六親寡合，交人初善終惡。十二宮中若無廟樂照臨，到處為災，奔波勞碌。至亥寅巳申，雖富貴亦不耐久。會太陽則吉凶相半，逢七殺則主殺傷。貪耗同行，因好徒配。遇帝座則制其強。逢祿存則解其厄，值羊陀男盜女娼。對宮遇火鈴、白虎，無帝壓制，決配千里。三合殺湊，必遭火厄，此乃孤獨之數，刻剝之神。除為僧道九流，方免勞神偃蹇，限逢兇曜災難不輕。  
 問天相星所主若何？  
 答曰：天相屬水，南斗第五星也。為司爵之宿，為福善，化氣曰印，是為官祿文星，佐帝之位。若人命逢之，言語誠實，事不虛偽。見人難，有惻隱之心；見人惡，抱不平之氣。官祿得之則顯榮，帝座合之則爭權。佐日月之光，兼化廉貞之惡。身命得之而榮耀；子息得之而嗣續昌，十二宮中皆為祥福，不隨惡而變志，不因殺而改移。限步逢之，富不可量。此星若臨生旺之鄉，雖不逢帝座，若得左右，則職掌威權。或居閒弱之地，也作吉利，二限逢之主富貴。  
 希夷先生曰：天相南斗司爵之星，化氣為印。主人衣食豐足，昌曲左右相會，位至公卿。陷地貪廉武破羊陀殺湊，巧藝安身。火鈴衝破殘疾，女人主聰明端莊，志過丈夫。三方吉拱封贈論，若昌曲衝破侍妾，在僧道主清高。  
 歌曰  
 天相原屬水，化印主官祿，身命二宮逢，定主多財福，形體又肥滿，語言不輕瀆，  
 出仕主飛騰，居家主財谷，二限若逢之，百事看充足。  
 問天梁星所主若何？  
 答曰：天梁屬土，南斗第二星也。司壽化氣為蔭為福壽，乃父母之主命化暴戾為祥和。於人命則性情磊落，於相貌則厚重溫謙，循直無私。臨事果決，蔭於身福及子孫。遇昌曲於財宮，逢太陽於福德三合，乃萬全聲名。顯於王室職位，臨於風憲。若逢耗曜，更逢天機及殺，宜僧道，亦受王家制誥。逢貪巨同度而亂禮亂家。居奴僕、疾厄、相貌作豐餘之論。見廉貞刑忌，必無災厄克激之虞；遇火鈴刑暗，亦無征戰之撓。太歲衝而為福，白虎臨而無殃。論而至此，數決窮通之論也。命或對宮有天梁主有壽，乃極吉之星。  
 希夷先生又曰：天梁南斗司壽之星，化氣為蔭為壽。佐上帝威權，為父母主，生人清秀溫和，形神穩重，性情磊落，善識兵法。得昌曲左右加會，位至臺省。在父母宮則厚重威嚴，會太陽於福德，極品之貴。戊己生人合局，若四殺衝破則苗而不秀，逢天機耗曜，僧道清閒。於貪巨同度，則敗倫亂俗。在奴僕疾厄作豐餘之論。廉貞刑忌見之，必無克敵之虞。火鈴刑暗遇之，亦無征戰之撓。太歲衝而為福，白虎會而無災。奏書會則有意外之榮，青龍動則有文書之喜。小耗大耗交遇所幹無成，病符官符相侵不為災論。女人吉星入廟，旺夫益子，昌曲左右扶持封贈，羊陀火忌衝破，刑剋招非不潔，僧道宜之。  
 歌曰  
 天梁原屬土，南斗最吉星，化蔭名延壽，父母宮主星，田宅兄弟內，得之福自生，  
 形神自持重，心性更和平，生來無災患，文章有聲名，六親更和睦，仕宦居王庭，  
 巨門若相會，勞碌歷艱辛，若逢天機照，僧道享山林，二星在辰戌，福壽不須論。  
 問七殺星所主若何？  
 答曰：七殺南斗第六星也，屬火、金。乃斗中之上將，實成敗之孤辰。在斗司斗柄，主於風憲。其威作金之靈，其性若清涼之狀。主於數則宜僧道，主於身定歷艱辛。在命宮若限不扶夭折，在官祿得地，化禍為祥。在子息，而子息孤單；居夫婦而鴛衾半冷。會刑囚于田宅、父母，刑傷父母，產業難留。逢刑忌殺於遷移、疾厄，終身殘疾，縱使一身孤獨，也應壽年不長。與囚於身命，折肱傷股，又主癆傷。會囚耗於遷移，死於道路。若臨陷弱之宮，為殘較減。若值正陰之宮，作禍憂深。流年殺曜莫教逢，身殺星辰戌迭並，身殺逢惡曜於要地，命逢殺曜於三方，流殺又迭並，二限之中又逢，主陣亡掠死。合太陽巨門會帝旺之鄉則吉，處空亡犯刑殺遭禍不輕。大小二限合身命逢殺，雖帝制也無功。三合對沖，雖祿亦無力。蓋世英雄為殺制，此時一夢南柯。此乃倒限之地，所主務要仔細推詳，乃數中之惡曜，實非善星也。  
 希夷先生曰：七殺斗中上將，遇紫微則化權降福，遇火鈴則長其殺威。遇兇曜於生鄉定為屠宰，會昌曲於要地，情性頑囂。秘經雲：七殺居陷地，沉吟福不生是也。身命二宮逢之定歷艱辛，二限逢之遭殃破敗。遇帝祿而可解，遭流殺而逢兇。守身命作事進退，喜怒不常。左右昌曲入廟拱照，掌生殺之權，富貴出眾。若四殺忌星衝破，巧藝平常之人，陷地殘疾。女命旺地，財權服眾，志過丈夫。四殺衝破刑剋不潔，僧道宜之，若殺湊飄蕩，流移還俗。  
 歌曰  
 七殺寅申子午宮，四夷拱手服英雄，魁鉞左右文昌會，權祿名高食萬鍾，  
 殺居陷地不堪言，兇禍猶如抱虎眠，若是殺強無制伏，少年惡死到黃泉。  
 問破軍所主若何？  
 答曰：破軍屬水，北斗第七星也，司夫妻、子息、奴僕之神。居子午入廟，在天為殺氣，在數為耗星，故化氣曰耗。主人暴兇狡詐，其性奸猾，與人寡合，動輒損人。不成人之善，善助人之惡。虐視六親如寇讎，處骨肉無仁義，惟六癸六甲生人合格主富貴。陷地加殺衝破，巧藝殘疾，不守祖業，僧道宜之。女人衝破淫蕩無恥。此星居紫微則失威權；逢天府則作奸偽；會紫貪則鼠竊狗盜。與廉貞火鈴同度則決起官非；與巨門同度則口舌爭斗；與刑忌同度，則終身殘疾。與武曲入財位則東傾西敗；與文星守命一生貧士。遇諸兇結黨破敗，遇陷地其禍不輕。惟天梁可制其惡，天祿可解其狂。若逢流殺交併，家業蕩空。與文曲入於水域，殘疾、離鄉。遇文昌於震宮，遇吉可貴。若女命逢之，無媒自嫁，喪節飄流。凡坐人身命居子午，貪狼七殺相拱則威震華夷。或與武曲同居巳宮，貪狼拱亦居臺閣。但看惡星何如？甲癸生人入格，到老亦不全美也。在身命陷地，棄祖離宗；在兄弟骨肉參商；在夫妻不正，主婚姻進退；在子息先損後成；在財帛如湯澆雪；在疾厄致尪贏之疾；在遷移奔走無力；在奴僕謗怨逃走；在官祿主清貧；在田宅陷度，祖基破蕩；在福德多災；在父母破相刑剋。  
 問文昌星所主若何？  
 答曰：文昌主科甲，守身命主人幽閒儒雅，清秀魁梧，博文廣記，機變異常，一舉成名，披緋衣紫，福壽雙全。縱四殺衝破不為下賤。女人加吉得地，衣祿充足。四殺衝破，偏房下賤，僧道宜之。加權祿厚重有師號。  
 歌曰  
 文昌主科甲，辰巳是旺地，利午嫌卯酉，火生人不利，眉目定分明，相貌極俊麗，  
 喜於金生人，富貴雙全美，先難而後易，中晚有聲名，太陽蔭福集，傳臚第一名。  
 問文曲星所主若何？  
 答曰：文曲屬水，北斗第四星也，主科甲文車之宿。其象屬水，與文昌同協，吉數最為祥，臨身命中作科第之客。桃花浪暖，入仕無疑。於官祿面君顏而執政。單居身命，吏逢兇曜，亦作無名舌辯之徒。與廉貞共處必作公吏官。身與太陰同行，定系九流術士。怕逢破軍恐臨水以生災；嫌遇貪狼蒞政事而顛倒。逢七殺刑忌囚及諸惡曜，詐偽莫逃。逢巨門共其度，和而喪志。女命不宜於逢，水性楊花。忌入土宮，限臨蹭蹬。若祿存、化祿來纏，不可以為兇論。  
 希夷先生曰：文曲守身命，居巳酉丑宮居侯伯。武貪三合同垣，將相之格，文昌遇合亦然。若陷宮  
 午戌之地，巨門羊陀衝破，喪命夭折，水大驚險。若亥卯未旺地，與天梁天相會主聰明博學，殺衝破只宜僧道。若女命值之清秀聰明主貴，若陷地衝破淫而且賤。  
 問流年昌曲若何？  
 答曰：命逢流年昌曲，為科名科甲。大小二限逢之，三合拱照太陽，又照流年祿；小限太歲逢魁鉞、左右、臺座、日月、科權祿馬三方拱照，決然高中無疑。然亦此數星俱全方為大吉，但以流年科甲為主。如命限值之，其餘吉曜，若得二三拱照，亦必高中。但二星在巳酉得地，不富即貴，只是不能耐久。  
 歌曰  
 南北昌曲星，數中推第一，身命最為佳，諸吉恐非吉，得居人命上，桃花浪三汲，  
 入仕更無虛，從容要輔弼，只恐惡殺臨，火鈴羊陀激，若還逢陷地，苗而不秀實，  
 不是公吏輩，九流工數術，無破宰職權，女人多淫佚，樂居亥子宮，空亡官無益。  
 問左輔所主若何？  
 希夷先生答曰：左輔帝極主宰之星，守身命諸宮降福。主人形貌敦厚慷慨風流。紫府祿權若得三合衝照，主文武大貴。火忌衝破，雖富貴不久。僧道清閒，所以溫重賢曉，旺地封贈。火忌衝破，以中局斷之。  
 問右弼所主若何？  
 希夷先生答曰：右弼帝極主宰之星，守身命文墨精通。紫府吉星同垣，財官雙美，文武雙全。羊陀火忌衝破，下局斷之。女人賢良有志，縱四殺衝破，不為下賤，僧道清閒。  
 歌曰  
 左輔原屬土，右弼水為根，失君為無用，三合宜見君，若在紫微位，爵祿不須論，  
 若在夫妻位，主人定二婚，若與廉貞並，惡賤遭鉗髡，輔弼為上相，輔佐紫微星，  
 喜居日月側，文人遇禹門，倘居閒位上，無爵更無名，妻宮遇此宿，決定兩妻成，  
 若與刑囚處，遭傷作盜賊。  
 問天魁天鉞星所主若何？  
 希夷先生答曰：魁鉞斗中司科之星，入命坐貴向貴，或得左右吉聚無不富貴。況二星又為上界和合之神，若魁臨命，鉞守身，更迭相守。更遇紫微府、日月、昌曲、左右、權祿相湊，少年必聚美妻。若遇大難，必得貴人成就扶助，小人不一，亦不為兇。限步巡逢必主女子添喜，生男則俊雅，入學功名有成。生女則容貌端莊，出眾超群；若四十以後逢墓庫，不依此斷。有兇不以為災，居官者賢而威武，聲名遠播。僧道享福，與人和睦，不為下賤。女人吉多宰輔之妻，命婦之論。若加惡殺亦為富貴，但不免私情淫佚。  
 歌曰  
 天乙貴人眾所欽，命逢金帶福彌深，飛騰名譽人爭慕，博雅皆通古與今，  
 魁鉞二星限中強，人人遇此廣錢糧，官吏逢之發財福，當年必定見君王。  
 問祿存星所主若何？  
 希夷先生答曰：祿存北斗第三星，真人之宿，主人貴爵，掌人壽基。帝相扶之施權，日月得之增輝。天府武曲為厥職，天梁天同共其祥。十二宮中惟身命、田宅、財帛為要，主富。居遷移則佳，與帝星守官祿宜子孫爵秩。若獨守命而無吉化，乃看財奴耳。逢吉逞其權，遇惡敗其跡。最嫌落於陷空不能為福，更湊火鈴空劫，巧藝安身。蓋祿爵當得勢而享之，守身命主人慈厚信直，通文濟楚。女人清淑機巧能幹能為，有君子之志。紫府廉同會合，作祿存上局。大抵此星諸宮降福消災。  
 歌曰  
 斗北祿存星，數中為上局，守值身命內，不貴多金玉，此為迪吉星，亦可登仕路，  
 文人有聲名，武人有厚祿，常庶發橫財，僧道亦主福，官吏若逢之，斷然食天祿。  
 又曰  
 夾祿拱貴並化祿，金裡重逢金滿屋，不惟方丈比諸侯，一食萬鍾猶未足，  
 祿存對向守遷移，三合逢之利祿宜，得逢遐邇人欽敬，的然白手起家基。  
 問天馬星所主若何？  
 希夷先生答曰：諸宮各有制化，如身命臨之謂之驛馬。喜祿存、紫府、昌曲，守照為吉。如大小二限臨之，更遇祿存紫府，流昌必利。如與祿存同宮，謂之祿馬交馳，又曰折鞭馬；紫府同宮謂之扶轝馬；刑殺同宮謂之負屍馬；火星同宮謂之戰馬；日月同宮謂雌雄馬；逢空亡謂之死馬、亡馬；居絕死謂之死馬；遇陀羅謂之折足馬。以上犯此數者，俱主災病，流年值之依此斷。  
 問化祿星所主若何？  
 希夷先生答曰：祿為福德之神。守身命官祿之位，科權相逢必作大臣之職。小限逢之主進財入仕之喜。大限十年吉慶無疑，惡曜來臨並羊陀火忌衝照，亦不為害。女人吉湊作命婦，二限逢之，內外威嚴，殺湊平常。  
 問化權星所主若何？  
 希夷先生答曰：權星掌判生殺之神。守身命科祿相逢出將入相。科權相逢必定文章冠世，人皆欽仰。小限相逢，無有不吉。大限十年，必然遂志。如逢羊陀耗使劫空，聽讒貽累，官災貶謫。女人得之內外稱志，可作命婦。僧道掌山林有師號。  
 問化科星所主若何？  
 希夷先生答曰：科星上界應試，主掌文墨之星。守身命權祿相逢宰臣之貴。如逢惡曜亦為文章秀士，可作群英師範。女命吉拱，主貴封贈。雖四殺衝破，亦為富貴。與科星拱照衝同論。  
 問化忌星所主若何？  
 希夷先生答曰：忌為多管之神。守身命一生不順，小限逢之一年不足，大限十年悔吝。二限太歲交臨，斷然蹭蹬。文人不耐久，武人縱有官災，口舌不防。雖商賈技藝人，皆不宜利。  
 如會紫府、昌曲、左右、科權祿，與忌同宮又兼四殺共處，即發財亦不佳，功名亦不成就。如單逢四殺、耗使、劫空，主奔波帶疾。僧道流移還俗。處事只求七分。  
 問擎羊星所主若何？  
 希夷先生答曰：擎羊北斗之助星。守身命性粗行暴，孤單，視親為疏，翻恩為怨。入廟性剛果決，機謀好勇，主權貴。北方生人為福，四墓生人不忌。居卯酉作禍興殃，刑剋極甚。六甲六庚生人，必有兇禍。縱富貴不久亦不善終，若九流工藝人辛勤。加火忌劫空衝破，殘疾離祖刑剋六親。女人入廟加吉上局，殺耗衝破多主刑剋下局。  
 問陀羅星所主若何？  
 希夷先生答曰：陀羅北斗之助星。守身命心行不正，暗淚長流，性剛威猛，作事進退。橫成橫破，飄蕩不定。與貪狼同度因酒色以成癆，與火鈴同處，疥疫不死。居疾厄，暗疾纏綿。辰戌丑未生人為福，在廟財官論，文人不耐久，武人橫發高遷。若陷地加殺刑剋招兇，二姓延生，女人刑剋下賤。  
 羊陀二星總論  
 玉蟾先生曰：擎羊陀羅二星屬火金，乃北斗浮星，在斗司奏，在數兇厄。羊化氣曰刑，陀化氣曰忌。怕臨兄弟、田宅、父母三宮。忌三合臨身命，合昌曲、左右有暗痣、眼痣。見日月女剋夫，而夫克婦，為諸宮之凶神。忌同日月則傷親損目；刑並桃花則風流惹禍；忌貪狼合因花酒以忘身；刑與暗同行招暗疾而壞目；忌與殺暗同度招凌辱而生暗疾；與火鈴為兇伴只宜僧道；權刑合殺疾病官厄不免；貪耗流年面上刺痕。二限更遇此，災害不時而生也。  
 歌曰  
 刑與暗同行，暗疾刑六親，火鈴遇兇伴，只宜道與僧，權刑囚合殺，疾病災厄侵，  
 貪耗流年聚，面上刺痕新，限運若逢此，橫禍血刃生。  
 羊陀夭壽殺，人遇為掃星，君子防恐懼，小人遭凌刑，遇耗決乞求，只宜林泉人，  
 二限倘來犯，不時災禍侵。  
 問火星所主若何？  
 答曰：火星乃南斗浮星也。  
 希夷先生歌曰  
 火星大殺將，南斗號殺神，若主身命位，諸宮不可臨，性氣亦沉毒，剛強出眾人，  
 毛髮多異類，唇齒有傷痕，更與羊陀會，襁褓必災迍，過房出外養，二姓可延生，  
 此星東南利，不利西北生，若得貪狼會，旺地貴無倫，封侯居上將，勳業著邊庭，  
 三方無殺破，中年後始興，僧道多飄蕩，不守規戒心，女人旺地潔，陷地主邪淫，  
 刑夫又克子，下賤勞碌人。  
 問鈴星所主若何？  
 答曰：鈴星乃南斗助星也。  
 希夷先生歌曰  
 大殺鈴星將，南斗為從神，值人身命者，性格亦沉吟，形貌多異類，威勢有聲名，  
 若與貪狼會，指日立邊庭，廟地財官貴，陷地主孤貧，羊陀若湊合，其刑大不清，  
 孤單並棄祖，殘傷帶疾人，僧道多飄蕩，還俗定無疑，女人無吉曜，刑剋少六親，  
 終身不貞潔，壽夭仍困貧，此星大殺將，其惡不可禁，一生有兇禍，聚實為虛情，  
 七殺主陣亡，破軍財屋傾，廉宿羊刑會，劫空主刀兵，或遇貪狼宿，官祿亦不寧，  
 若逢居旺地，富貴不可論。  
 羊陀火鈴四星總論  
 玉蟾先生曰  
 火鈴陀羅金，擎羊刑忌訣，一名馬掃星，又名短壽殺，君子失其權，小人犯刑法，  
 孤獨克六親，災禍常不歇，腰足唇齒傷，勞碌多蹇剝，破相又勞心，乞丐填溝壑，  
 武曲並貪狼，一世招兇惡，疾厄若逢之，四時不離著，只宜山寺僧，金谷常安樂。  
 問天空地劫所主若何？  
 希夷先生曰：二星守身命，遇吉則吉，遇兇則兇。如四殺衝照，輕者下賤，重者六畜之命。僧道不正，女子婢妾，刑剋孤獨。大抵二星俱不宜見，定主破財，二限逢之必兇。  
 歌曰  
 劫空為害最愁人，才智英雄誤一身，只好為僧並學術，堆金積玉也須貧。  
 問天傷天使所主若何？  
 希夷先生答曰：天傷乃上天虛耗之神，天使乃上天傳使之神。太歲二限逢之不問得地否？只要吉多為福其禍稍輕，如無吉，值巨門、羊陀、火鈴、忌、天機，其年必主官災，喪亡破敗。  
 限至大耗號天傷，夫子在陳也絕糧，天使限臨人共忌，石崇鉅富破家亡。  
 問天刑星所主若何？  
 希夷先生答曰：天刑守命身，不為僧道定主孤刑，不夭則貧。父母兄弟不得全，二限逢之主出家，官事牢獄失財，入廟則吉。  
 歌曰  
 天刑未必是兇星，入廟名為天喜神，昌曲吉星來湊合，定然獻策到王庭，  
 刑居寅上並酉戌，更臨卯位自光明，必遇文星成大業，掌握邊疆百萬兵，  
 三不子兮號天刑，為僧為道是孤身，天哭二星皆同到，終是難逃有疾人。  
 問天姚星所主若何？  
 希夷先生答曰：天姚守身命，心性陰毒，多疑恐、善顏色、風流多婢、主淫。入廟旺主富貴多奴，居亥有學識。會惡星破家敗產，因色犯刑。六合重逢，少年夭折。若臨限不用媒妁，招手成婚。或紫微吉星加，剛柔相濟，主風騷，加紅鸞愈淫，加刑刃主夭。  
 歌曰  
 天姚居戌卯酉遊，更入雙魚一併求，福厚生成耽酒色，無災無禍度春秋，  
 天姚星與敗星同，號曰人間掃氣囂，辛苦平生過一世，不曾安跡在客中，  
 人身偶爾值天姚，戀色貪花性帚兇，此曜若居生旺地，位登極品亦風騷。  
 問天哭天虛二星所主若何？  
 希夷先生答曰：哭虛為惡曜，臨命最非常。加臨父母內，破蕩賣田莊。若教身命陷，窮獨帶刑傷。六親多不足，煩惱過時光。東謀西不就，心事匆忙忙。丑卯申宮吉，遇祿名顯揚。二限若逢之，哀哀哭斷腸`},{id:"gumu-fu",title:"斗數骨隨賦",volume:1,blocks:[{type:"prose",text:"斗數骨隨賦"},{type:"prose",text:" 太極星纏，乃群宿眾星之主，天門運限，即扶身助命之源，在天則運用無常，在人則命有格局。"},{type:"prose",text:" 先明格局，次看眾星。或有同年同月同日同時而生，則有貧賤富貴壽夭之異。"},{type:"prose",text:" 或在惡限，積百萬之金銀。或在旺鄉，遭連年之困苦。禍福不可一途而惟，吉凶不可一例而斷。"},{type:"prose",text:" 要知一世之榮枯，定看五行之宮位。立命可知貴賤，安身便曉根基。"},{type:"prose",text:" 第一先看福德，再三細考遷移，分對宮之體用，定三合之源流。"},{type:"prose",text:" 命無正曜，夭折孤貧。吉有兇星，美玉瑕玷。"},{type:"prose",text:" 既得根源堅固，須知合局相生，堅固則富貴延壽，相生則財官昭著。"},{type:"prose",text:" 命好身好限好到老榮昌。命衰身衰限衰終身乞丐。"},{type:"prose",text:" 夾貴夾祿少人知，夾權夾科世所宜。"},{type:"prose",text:" 夾日夾月誰能遇，夾昌夾曲主貴兮。"},{type:"prose",text:" 夾空夾劫主貧賤，夾羊夾陀為乞丐。"},{type:"prose",text:" 廉貞七殺反為積富之人，天梁太陰卻作飄蓬之客。"},{type:"prose",text:" 廉貞主下賤孤寒，太陰主一生快樂。"},{type:"prose",text:" 先貧後富武貪同身命之宮，先富後貧只為運限逢劫殺。"},{type:"prose",text:" 出世榮華權祿守財官之位，生來貧賤劫空臨財福之鄉。"},{type:"prose",text:" 文曲武曲為人多學多能，左輔右弼稟性克寬克厚。"},{type:"prose",text:" 天府天相乃為衣祿之神，為仕為官定主亨通之兆。"},{type:"prose",text:" 苗而不秀科名陷於凶神，發不主財祿主躔於弱地。"},{type:"prose",text:" 七殺朝斗爵祿榮昌，紫府同宮終身福厚。"},{type:"prose",text:" 紫微居午無殺湊位至三公，天府臨戌有星扶腰金衣紫。"},{type:"prose",text:" 科權祿拱名譽昭彰，武曲廟垣威名赫奕。"},{type:"prose",text:" 科明祿暗位列三臺，日月同臨官居侯伯。"},{type:"prose",text:" 巨機同宮公卿之位，貪鈴並守將相之名。"},{type:"prose",text:" 天魁天鉞蓋世文章，天祿天馬驚人甲第。"},{type:"prose",text:" 左輔文昌會吉星尊居八座，貪狼火星居廟旺名鎮諸邦。"},{type:"prose",text:" 巨日同宮官封三代，紫府朝垣食祿萬鍾。"},{type:"prose",text:" 科權對拱躍三汲於禹門，日月並明佐九重於堯殿。"},{type:"prose",text:" 府相同來會命宮全家食祿，三合明珠生旺地穩步蟾宮。"},{type:"prose",text:" 七殺破軍宜出外，機月同梁作吏人。"},{type:"prose",text:" 紫府日月居旺地斷定公侯器，日月科祿丑宮中定是方伯公。"},{type:"prose",text:" 天梁天馬陷飄蕩無疑，廉貞殺不加聲名遠播。"},{type:"prose",text:" 日照雷門富貴榮華，月朗天門進爵封侯。"},{type:"prose",text:" 寅逢府相位登一品之榮，墓逢左右尊居八座之貴。"},{type:"prose",text:" 梁居午位官資清顯，曲遇梁星位至臺綱。"},{type:"prose",text:" 科祿巡逢周勃欣然入相，文星暗拱賈誼允矣登科。"},{type:"prose",text:" 擎羊火星威權出眾，貪武同行威鎮邊夷。"},{type:"prose",text:" 李廣不封擎羊逢於力士，顏回夭折文昌陷於天傷。"},{type:"prose",text:" 仲由威猛廉貞入廟遇將軍，子羽才能巨宿同梁衝且合。"},{type:"prose",text:" 寅申最喜同梁會，辰戌應嫌陷巨門。"},{type:"prose",text:" 祿倒馬倒忌太歲之合劫空，運衰限衰喜紫微之解兇厄。"},{type:"prose",text:" 孤貧多有壽，富貴即夭亡。"},{type:"prose",text:" 弔客喪門綠珠有墮樓之厄，官符太歲公冶有縲紲之憂。"},{type:"prose",text:" 限至天羅地網屈原溺水而身亡，運遇地劫天空阮籍有貧窮之苦。"},{type:"prose",text:" 文昌文曲會廉貞喪命天年，命空限空無吉湊功名蹭蹬。"},{type:"prose",text:" 生逢天空猶如半天折翅，命中遇劫恰如浪裡行船。"},{type:"prose",text:" 項羽英雄限至天空而喪國，石崇豪富限行劫地以亡家。"},{type:"prose",text:" 呂后專權兩重天祿天馬，楊妃好色三合文曲文昌。"},{type:"prose",text:" 天梁遇馬女命賤而且淫，昌曲夾墀男命貴而且顯。"},{type:"prose",text:" 極居卯酉多為脫俗僧人，貞居卯酉定是公胥吏輩。"},{type:"prose",text:" 左府同宮尊居萬乘，廉貞七殺流蕩天涯。"},{type:"prose",text:" 鄧通餓死運逢大耗之鄉，夫子絕糧限到天傷之內。"},{type:"prose",text:" 鈴昌羅武限至投河，巨火擎羊終身縊死。"},{type:"prose",text:" 命裡逢空不飄流即主疾苦，馬頭帶劍非夭折則主刑傷。"},{type:"prose",text:" 子午破軍加官進祿，昌貪居命粉骨碎屍。"},{type:"prose",text:" 朝斗仰斗爵祿榮昌，文桂文華九重貴顯。"},{type:"prose",text:" 丹墀桂墀早遂青雲之志，合祿拱祿定為巨擘之臣。"},{type:"prose",text:" 陰陽會昌曲出世榮華，輔弼遇財官衣緋著紫。"},{type:"prose",text:" 巨梁相會廉貞並，合祿鴛鴦一世榮。"},{type:"prose",text:" 武曲閒宮多手藝，貪狼陷地作屠人。"},{type:"prose",text:" 天祿朝垣身榮貴顯，魁星臨命位列三臺。"},{type:"prose",text:" 武曲居幹戌亥上，最怕太陰逢貪狼。"},{type:"prose",text:" 化祿還為好，休向墓中藏。"},{type:"prose",text:" 子午巨門石中隱玉，明祿暗祿錦上添花。"},{type:"prose",text:" 紫微辰戌遇破軍，富而不貴有虛名。"},{type:"prose",text:" 昌曲破軍逢刑剋多勞碌，貪武墓中居三十才發福。"},{type:"prose",text:" 天同戌宮為反背，丁人化吉主大貴。"},{type:"prose",text:" 巨門辰戌為陷地，辛人化吉祿崢嶸。"},{type:"prose",text:" 機梁酉上化吉者，縱遇財官也不榮。"},{type:"prose",text:" 日月最嫌反背乃為失輝，命身定要精求恐差分數。"},{type:"prose",text:" 陰騭延年增百福，至於陷地不遭傷。"},{type:"prose",text:" 命實運堅稿田得雨，命衰限弱嫩草遭霜。"},{type:"prose",text:" 論命必推星善惡，巨破擎羊性必剛。"},{type:"prose",text:" 府相同梁性必好，火劫空貪性不常。"},{type:"prose",text:" 昌曲祿機清秀巧，陰陽左右最慈祥。"},{type:"prose",text:" 武破貞貪衝合曲全固貴，羊陀七殺相雜互見則傷。"},{type:"prose",text:" 貪狼廉貞破軍惡，七殺擎羊陀羅兇。"},{type:"prose",text:" 火星鈴星專作禍，劫空傷使禍重重。"},{type:"prose",text:" 巨門忌星皆不吉，運身命限忌相逢。"},{type:"prose",text:" 更兼太歲官符至，官非口舌決不空。"},{type:"prose",text:" 弔客喪門又相遇，管教災病兩相攻。"},{type:"prose",text:" 七殺守身終是夭，貪狼入命必為娼。"},{type:"prose",text:" 心好命微亦主壽，心毒命固亦夭亡。"},{type:"prose",text:" 今人命有千金貴，運去之時豈久長。"},{type:"prose",text:" 數內包藏多少理，學者須當仔細詳。"}],raw:`斗數骨隨賦  
 太極星纏，乃群宿眾星之主，天門運限，即扶身助命之源，在天則運用無常，在人則命有格局。  
 先明格局，次看眾星。或有同年同月同日同時而生，則有貧賤富貴壽夭之異。  
 或在惡限，積百萬之金銀。或在旺鄉，遭連年之困苦。禍福不可一途而惟，吉凶不可一例而斷。  
 要知一世之榮枯，定看五行之宮位。立命可知貴賤，安身便曉根基。  
 第一先看福德，再三細考遷移，分對宮之體用，定三合之源流。  
 命無正曜，夭折孤貧。吉有兇星，美玉瑕玷。  
 既得根源堅固，須知合局相生，堅固則富貴延壽，相生則財官昭著。  
 命好身好限好到老榮昌。命衰身衰限衰終身乞丐。  
 夾貴夾祿少人知，夾權夾科世所宜。  
 夾日夾月誰能遇，夾昌夾曲主貴兮。  
 夾空夾劫主貧賤，夾羊夾陀為乞丐。  
 廉貞七殺反為積富之人，天梁太陰卻作飄蓬之客。  
 廉貞主下賤孤寒，太陰主一生快樂。  
 先貧後富武貪同身命之宮，先富後貧只為運限逢劫殺。  
 出世榮華權祿守財官之位，生來貧賤劫空臨財福之鄉。  
 文曲武曲為人多學多能，左輔右弼稟性克寬克厚。  
 天府天相乃為衣祿之神，為仕為官定主亨通之兆。  
 苗而不秀科名陷於凶神，發不主財祿主躔於弱地。  
 七殺朝斗爵祿榮昌，紫府同宮終身福厚。  
 紫微居午無殺湊位至三公，天府臨戌有星扶腰金衣紫。  
 科權祿拱名譽昭彰，武曲廟垣威名赫奕。  
 科明祿暗位列三臺，日月同臨官居侯伯。  
 巨機同宮公卿之位，貪鈴並守將相之名。  
 天魁天鉞蓋世文章，天祿天馬驚人甲第。  
 左輔文昌會吉星尊居八座，貪狼火星居廟旺名鎮諸邦。  
 巨日同宮官封三代，紫府朝垣食祿萬鍾。  
 科權對拱躍三汲於禹門，日月並明佐九重於堯殿。  
 府相同來會命宮全家食祿，三合明珠生旺地穩步蟾宮。  
 七殺破軍宜出外，機月同梁作吏人。  
 紫府日月居旺地斷定公侯器，日月科祿丑宮中定是方伯公。  
 天梁天馬陷飄蕩無疑，廉貞殺不加聲名遠播。  
 日照雷門富貴榮華，月朗天門進爵封侯。  
 寅逢府相位登一品之榮，墓逢左右尊居八座之貴。  
 梁居午位官資清顯，曲遇梁星位至臺綱。  
 科祿巡逢周勃欣然入相，文星暗拱賈誼允矣登科。  
 擎羊火星威權出眾，貪武同行威鎮邊夷。  
 李廣不封擎羊逢於力士，顏回夭折文昌陷於天傷。  
 仲由威猛廉貞入廟遇將軍，子羽才能巨宿同梁衝且合。  
 寅申最喜同梁會，辰戌應嫌陷巨門。  
 祿倒馬倒忌太歲之合劫空，運衰限衰喜紫微之解兇厄。  
 孤貧多有壽，富貴即夭亡。  
 弔客喪門綠珠有墮樓之厄，官符太歲公冶有縲紲之憂。  
 限至天羅地網屈原溺水而身亡，運遇地劫天空阮籍有貧窮之苦。  
 文昌文曲會廉貞喪命天年，命空限空無吉湊功名蹭蹬。  
 生逢天空猶如半天折翅，命中遇劫恰如浪裡行船。  
 項羽英雄限至天空而喪國，石崇豪富限行劫地以亡家。  
 呂后專權兩重天祿天馬，楊妃好色三合文曲文昌。  
 天梁遇馬女命賤而且淫，昌曲夾墀男命貴而且顯。  
 極居卯酉多為脫俗僧人，貞居卯酉定是公胥吏輩。  
 左府同宮尊居萬乘，廉貞七殺流蕩天涯。  
 鄧通餓死運逢大耗之鄉，夫子絕糧限到天傷之內。  
 鈴昌羅武限至投河，巨火擎羊終身縊死。  
 命裡逢空不飄流即主疾苦，馬頭帶劍非夭折則主刑傷。  
 子午破軍加官進祿，昌貪居命粉骨碎屍。  
 朝斗仰斗爵祿榮昌，文桂文華九重貴顯。  
 丹墀桂墀早遂青雲之志，合祿拱祿定為巨擘之臣。  
 陰陽會昌曲出世榮華，輔弼遇財官衣緋著紫。  
 巨梁相會廉貞並，合祿鴛鴦一世榮。  
 武曲閒宮多手藝，貪狼陷地作屠人。  
 天祿朝垣身榮貴顯，魁星臨命位列三臺。  
 武曲居幹戌亥上，最怕太陰逢貪狼。  
 化祿還為好，休向墓中藏。  
 子午巨門石中隱玉，明祿暗祿錦上添花。  
 紫微辰戌遇破軍，富而不貴有虛名。  
 昌曲破軍逢刑剋多勞碌，貪武墓中居三十才發福。  
 天同戌宮為反背，丁人化吉主大貴。  
 巨門辰戌為陷地，辛人化吉祿崢嶸。  
 機梁酉上化吉者，縱遇財官也不榮。  
 日月最嫌反背乃為失輝，命身定要精求恐差分數。  
 陰騭延年增百福，至於陷地不遭傷。  
 命實運堅稿田得雨，命衰限弱嫩草遭霜。  
 論命必推星善惡，巨破擎羊性必剛。  
 府相同梁性必好，火劫空貪性不常。  
 昌曲祿機清秀巧，陰陽左右最慈祥。  
 武破貞貪衝合曲全固貴，羊陀七殺相雜互見則傷。  
 貪狼廉貞破軍惡，七殺擎羊陀羅兇。  
 火星鈴星專作禍，劫空傷使禍重重。  
 巨門忌星皆不吉，運身命限忌相逢。  
 更兼太歲官符至，官非口舌決不空。  
 弔客喪門又相遇，管教災病兩相攻。  
 七殺守身終是夭，貪狼入命必為娼。  
 心好命微亦主壽，心毒命固亦夭亡。  
 今人命有千金貴，運去之時豈久長。  
 數內包藏多少理，學者須當仔細詳。`},{id:"nvming-gumu-fu",title:"女命骨髓賦",volume:1,blocks:[{type:"prose",text:"女命骨髓賦"},{type:"prose",text:" 府相之星女命躔，必當子貴與夫賢。"},{type:"prose",text:" 廉貞清白能相守，更有天同理亦然。"},{type:"prose",text:" 端正紫微太陽星，早遇賢夫性可憑。"},{type:"prose",text:" 太陽寅到午，遇吉終是福。"},{type:"prose",text:" 左輔天魁為福壽，左弼天相福相臨。"},{type:"prose",text:" 祿存厚重多衣食，府相朝垣命必榮。"},{type:"prose",text:" 紫府巳亥相互輔，左右扶持福必生。"},{type:"prose",text:" 巨門天機為破蕩。天梁月曜女命貧。"},{type:"prose",text:" 擎羊火星為下賤。文昌文曲福不全。"},{type:"prose",text:" 武曲之宿為寡宿。破軍一曜性難明。"},{type:"prose",text:" 貪狼內狠多淫佚。七殺沉吟福不榮。"},{type:"prose",text:" 十干化祿最榮昌，女命逢之大吉昌。"},{type:"prose",text:" 更得祿存相湊合，旺夫益子受恩光。"},{type:"prose",text:" 火鈴羊陀及巨門，天空地劫又相臨。"},{type:"prose",text:" 貪狼七殺廉貞宿，武曲加臨克害侵。"},{type:"prose",text:" 三方四正嫌逢殺，更在夫宮禍患深。"},{type:"prose",text:" 若是本宮無正曜，必主生離克害真。"},{type:"prose",text:" 已前論賦俱系看命要訣，學者宜熟玩之，乃得原委也。"},{type:"prose",text:" 論對面朝斗格 子午宮逢祿存是也"},{type:"song-label",text:"詩曰："},{type:"song",text:"祿有對面在遷移，子午逢之利祿宜，德合吉壤人敬重，雙全富貴福稀奇。"},{type:"prose",text:" 論科權祿主格"},{type:"song-label",text:"詩曰："},{type:"song",text:"祿權周勃命中逢，入相王朝贊聖功，迎合權星兼吉曜，巍巍富貴列三公。"},{type:"prose",text:" 論左右朝垣格"},{type:"song-label",text:"詩曰："},{type:"song",text:"天星左右最高明，若在三方祿位興，武職高登應顯佐，文人名譽列公卿。"},{type:"prose",text:" 論兼文武格 文曲武曲在身命是也"},{type:"song-label",text:"詩曰："},{type:"song",text:"格名文武少人知，遇此須教百事通，更值命宮無殺破，滔滔榮顯是英雄。"},{type:"prose",text:" 論文星朝命格"},{type:"song-label",text:"詩曰："},{type:"song",text:"文昌文曲最榮華，值此鬚生富貴家，更得三方祥曜拱，卻如錦上又添花。"},{type:"prose",text:" 論石中隱玉格 命在子午逢巨門是也"},{type:"song-label",text:"詩曰："},{type:"song",text:"巨門子午二宮逢，身命逢之必貴榮，更得三方科祿照，石中隱玉是豐隆。"},{type:"prose",text:" 論貪狼遇火名為火貴格 三合照身命是也"},{type:"song-label",text:"詩曰："},{type:"song",text:"火遇貪狼照命宮，封侯食祿是英雄，三方倘若無兇殺，到老應知福壽隆。"},{type:"prose",text:" 論人有無商賈之命"},{type:"prose",text:" 如人命有巨日紫府守照，為人安分，有仁德耿直之心，作事無私，不行邪僻，不肯妄求，為士為官主有廉潔：如值月貪同殺忌，心多機關，貪財無厭，暮夜求利之輩。"},{type:"song-label",text:"詩曰："},{type:"song",text:"貪月同殺會機梁，因財計利作經商，須知暮夜無眠睡，潮海營營自走忙。"},{type:"song-label",text:"又曰 經商紫府遇擎羊，武曲遷移利市場，殺破廉貞同左右，羊鈴火宿遠傳揚。"},{type:"prose",text:" 論人命有無藝術者"},{type:"prose",text:" 寅申巳亥安命或丑未辰戌遇有貪狼武曲在命化忌、加殺，必作細巧藝術之人也。"},{type:"song-label",text:"詩曰："},{type:"song",text:"閒宮貪狼何生業，不是屠人須打鐵，諸般巧藝更能精，性好遊畋並捕獵。"},{type:"song-label",text:"又曰 破武未宮多巧藝，巳亥安命正相宜，破軍廉貞居卯酉，細巧之人定藝奇。"},{type:"song-label",text:"又曰 天機天相命身中，帝令財星入墓中，天府若居遷動位，平生定是作奇工。"},{type:"prose",text:" 論出家僧道之命"},{type:"prose",text:" 紫微居卯酉遇劫空者，看命無正曜又兼羊火劫空化忌者，更看父母妻子三宮有殺者方可斷。及寅年申月巳日亥時四正殺湊化忌，男僧道，女尼姑。"},{type:"song-label",text:"詩曰："},{type:"song",text:"極居卯酉遇劫空，十人之命九人僧，道釋巖泉皆有分，清閒幽靜度平生。"},{type:"song-label",text:"又曰 命坐空鄉定出家，文星相會實堪誇，若還文曲臨身命，受蔭清閒福可嘉。"},{type:"song-label",text:"又曰 天機七殺破梁同，羽客僧流命所逢，更若太陽兼帝座，伶仃孤克命方終。"},{type:"prose",text:" 論人命內犯孤克者"},{type:"prose",text:" 如克妻克子克父母內犯一二不為僧道亦作貧賤之人，第一看父母在廟旺地有無吉凶星辰，如在陷地加殺化忌必主刑剋，第二又看妻妾宮，三看子女宮廟陷之地，有無吉凶星辰，如在陷加殺化忌必鰥寡孤獨論斷。"},{type:"prose",text:" 論壽夭淫蕩"},{type:"song-label",text:"詩曰："},{type:"song",text:"貪狼入廟最高強，南極星同壽命長，北斗帝星無惡殺，綿綿老耋衍禎祥。"},{type:"song-label",text:"詩曰："},{type:"song",text:"七殺臨身終是夭，貪狼入廟定為娼，前示三合相臨照，也學韓君去竊香。"},{type:"song-label",text:"詩曰："},{type:"song",text:"身命兩宮俱有殺，貪花戀酒禍猶深，平生二限來符會，得意之中卻又沈。"},{type:"prose",text:" 論定人殘疾"},{type:"prose",text:" 先看命宮星落陷，加羊陀火鈴劫空忌宿，又看疾厄宮星廟陷吉凶而斷可也。"},{type:"song-label",text:"詩曰："},{type:"song",text:"命中羊陀殺守身，火鈴坐照禍非輕，平生若不常年臥，也作陀腰曲背人。"},{type:"prose",text:" 論定人破相"},{type:"song-label",text:"詩曰："},{type:"song",text:"相貌之中逢殺曜，更加三合又逢刑，疾厄擎羊逢耗使，折傷肢體不和平。"},{type:"prose",text:" 論定人聰明"},{type:"song-label",text:"詩曰："},{type:"song",text:"文曲天相破軍星，計策偏多性更靈，更若三方昌曲會，一生巧藝有聲名。"},{type:"prose",text:" 論定人富足"},{type:"song-label",text:"詩曰："},{type:"song",text:"太陰入廟有光輝，財入財鄉分外奇，破耗兇星皆不犯，堆金積玉富豪兒。"},{type:"prose",text:" 論定人貧賤"},{type:"song-label",text:"詩曰："},{type:"song",text:"命中吉曜不來臨，火忌羊陀四正侵，武曲廉貞巨破會，一生暴怒又身貧。"},{type:"prose",text:" 論定人作盜賊"},{type:"song-label",text:"詩曰："},{type:"song",text:"命逢破耗與貪廉，七殺三方照及身，武曲更居遷動位，一生面背刺痕新。"},{type:"prose",text:" 論定人一身駁雜"},{type:"song-label",text:"詩曰："},{type:"song",text:"吉曜相扶兇曜臨，百般巧藝不亨通，若逢身命遇惡曜，只做屠牛宰馬人。"}],raw:`女命骨髓賦  
 府相之星女命躔，必當子貴與夫賢。  
 廉貞清白能相守，更有天同理亦然。  
 端正紫微太陽星，早遇賢夫性可憑。  
 太陽寅到午，遇吉終是福。  
 左輔天魁為福壽，左弼天相福相臨。  
 祿存厚重多衣食，府相朝垣命必榮。  
 紫府巳亥相互輔，左右扶持福必生。  
 巨門天機為破蕩。天梁月曜女命貧。  
 擎羊火星為下賤。文昌文曲福不全。  
 武曲之宿為寡宿。破軍一曜性難明。  
 貪狼內狠多淫佚。七殺沉吟福不榮。  
 十干化祿最榮昌，女命逢之大吉昌。  
 更得祿存相湊合，旺夫益子受恩光。  
 火鈴羊陀及巨門，天空地劫又相臨。  
 貪狼七殺廉貞宿，武曲加臨克害侵。  
 三方四正嫌逢殺，更在夫宮禍患深。  
 若是本宮無正曜，必主生離克害真。  
 已前論賦俱系看命要訣，學者宜熟玩之，乃得原委也。  
 論對面朝斗格 子午宮逢祿存是也  
 詩曰 祿有對面在遷移，子午逢之利祿宜，德合吉壤人敬重，雙全富貴福稀奇。  
 論科權祿主格  
 詩曰 祿權周勃命中逢，入相王朝贊聖功，迎合權星兼吉曜，巍巍富貴列三公。  
 論左右朝垣格  
 詩曰 天星左右最高明，若在三方祿位興，武職高登應顯佐，文人名譽列公卿。  
 論兼文武格 文曲武曲在身命是也  
 詩曰 格名文武少人知，遇此須教百事通，更值命宮無殺破，滔滔榮顯是英雄。  
 論文星朝命格  
 詩曰 文昌文曲最榮華，值此鬚生富貴家，更得三方祥曜拱，卻如錦上又添花。  
 論石中隱玉格 命在子午逢巨門是也  
 詩曰 巨門子午二宮逢，身命逢之必貴榮，更得三方科祿照，石中隱玉是豐隆。  
 論貪狼遇火名為火貴格 三合照身命是也  
 詩曰 火遇貪狼照命宮，封侯食祿是英雄，三方倘若無兇殺，到老應知福壽隆。  
 論人有無商賈之命  
 如人命有巨日紫府守照，為人安分，有仁德耿直之心，作事無私，不行邪僻，不肯妄求，為士為官主有廉潔：如值月貪同殺忌，心多機關，貪財無厭，暮夜求利之輩。  
 詩曰 貪月同殺會機梁，因財計利作經商，須知暮夜無眠睡，潮海營營自走忙。  
 又曰 經商紫府遇擎羊，武曲遷移利市場，殺破廉貞同左右，羊鈴火宿遠傳揚。  
 論人命有無藝術者  
 寅申巳亥安命或丑未辰戌遇有貪狼武曲在命化忌、加殺，必作細巧藝術之人也。  
 詩曰 閒宮貪狼何生業，不是屠人須打鐵，諸般巧藝更能精，性好遊畋並捕獵。  
 又曰 破武未宮多巧藝，巳亥安命正相宜，破軍廉貞居卯酉，細巧之人定藝奇。  
 又曰 天機天相命身中，帝令財星入墓中，天府若居遷動位，平生定是作奇工。  
 論出家僧道之命  
 紫微居卯酉遇劫空者，看命無正曜又兼羊火劫空化忌者，更看父母妻子三宮有殺者方可斷。及寅年申月巳日亥時四正殺湊化忌，男僧道，女尼姑。  
 詩曰 極居卯酉遇劫空，十人之命九人僧，道釋巖泉皆有分，清閒幽靜度平生。  
 又曰 命坐空鄉定出家，文星相會實堪誇，若還文曲臨身命，受蔭清閒福可嘉。  
 又曰 天機七殺破梁同，羽客僧流命所逢，更若太陽兼帝座，伶仃孤克命方終。  
 論人命內犯孤克者  
 如克妻克子克父母內犯一二不為僧道亦作貧賤之人，第一看父母在廟旺地有無吉凶星辰，如在陷地加殺化忌必主刑剋，第二又看妻妾宮，三看子女宮廟陷之地，有無吉凶星辰，如在陷加殺化忌必鰥寡孤獨論斷。  
 論壽夭淫蕩  
 詩曰 貪狼入廟最高強，南極星同壽命長，北斗帝星無惡殺，綿綿老耋衍禎祥。  
 詩曰 七殺臨身終是夭，貪狼入廟定為娼，前示三合相臨照，也學韓君去竊香。  
 詩曰 身命兩宮俱有殺，貪花戀酒禍猶深，平生二限來符會，得意之中卻又沈。  
 論定人殘疾  
 先看命宮星落陷，加羊陀火鈴劫空忌宿，又看疾厄宮星廟陷吉凶而斷可也。  
 詩曰 命中羊陀殺守身，火鈴坐照禍非輕，平生若不常年臥，也作陀腰曲背人。  
 論定人破相  
 詩曰 相貌之中逢殺曜，更加三合又逢刑，疾厄擎羊逢耗使，折傷肢體不和平。  
 論定人聰明  
 詩曰 文曲天相破軍星，計策偏多性更靈，更若三方昌曲會，一生巧藝有聲名。  
 論定人富足  
 詩曰 太陰入廟有光輝，財入財鄉分外奇，破耗兇星皆不犯，堆金積玉富豪兒。  
 論定人貧賤  
 詩曰 命中吉曜不來臨，火忌羊陀四正侵，武曲廉貞巨破會，一生暴怒又身貧。  
 論定人作盜賊  
 詩曰 命逢破耗與貪廉，七殺三方照及身，武曲更居遷動位，一生面背刺痕新。  
 論定人一身駁雜  
 詩曰 吉曜相扶兇曜臨，百般巧藝不亨通，若逢身命遇惡曜，只做屠牛宰馬人。`},{id:"shi-deng-lun",title:"定富貴貧賤十等論",volume:1,blocks:[{type:"prose",text:"定富貴貧賤十等論"},{type:"prose",text:" 福壽論 如南人天同天梁坐命廟旺主福壽雙全如北人紫微武曲破軍貪狼坐命旺宮主福壽"},{type:"prose",text:" 聰明論 如文昌文曲天相天府武曲破軍三臺八座左輔右弼三合拱照主人極聰明"},{type:"prose",text:" 威勇論 如武曲文昌擎羊七殺坐命宮得權祿三方又得紫微天府左右拱照主人威勇"},{type:"prose",text:" 文職論 如文昌文曲左輔右弼天魁天鉞坐命旺宮又得三方四正科權祿拱主為文官"},{type:"prose",text:" 武職論 如武曲七殺坐命廟旺宮又得三臺八座加化權祿及天魁天鉞並拱主為武職"},{type:"prose",text:" 刑名論 如擎羊陀羅火鈴星武曲破軍帶殺上吉湊合三方四正無兇不陷主刑名"},{type:"prose",text:" 富貴論 如紫微天府天相祿權科太陰太陽文昌文曲左輔右弼天魁天鉞守照拱衝主大富貴"},{type:"prose",text:" 貧賤論 如擎羊陀羅廉貞七殺武曲破軍天空地劫忌星三方四正守照拱衝諸兇並犯陷地主貧賤"},{type:"prose",text:" 疾殀論 如貪狼廉貞擎羊陀羅天空地劫火鈴忌星三方守照主疾殀或疾厄相貌宮亦然"},{type:"prose",text:" 僧道論 如天機天梁七殺破軍天空地劫並犯帝座紫微又或耗殺加臨主為僧道"}],raw:`定富貴貧賤十等論  
 福壽論 如南人天同天梁坐命廟旺主福壽雙全如北人紫微武曲破軍貪狼坐命旺宮主福壽  
 聰明論 如文昌文曲天相天府武曲破軍三臺八座左輔右弼三合拱照主人極聰明  
 威勇論 如武曲文昌擎羊七殺坐命宮得權祿三方又得紫微天府左右拱照主人威勇  
 文職論 如文昌文曲左輔右弼天魁天鉞坐命旺宮又得三方四正科權祿拱主為文官  
 武職論 如武曲七殺坐命廟旺宮又得三臺八座加化權祿及天魁天鉞並拱主為武職  
 刑名論 如擎羊陀羅火鈴星武曲破軍帶殺上吉湊合三方四正無兇不陷主刑名  
 富貴論 如紫微天府天相祿權科太陰太陽文昌文曲左輔右弼天魁天鉞守照拱衝主大富貴  
 貧賤論 如擎羊陀羅廉貞七殺武曲破軍天空地劫忌星三方四正守照拱衝諸兇並犯陷地主貧賤  
 疾殀論 如貪狼廉貞擎羊陀羅天空地劫火鈴忌星三方守照主疾殀或疾厄相貌宮亦然  
 僧道論 如天機天梁七殺破軍天空地劫並犯帝座紫微又或耗殺加臨主為僧道`},{id:"shiergong-dedi",title:"十二宮諸星得地合格訣",volume:1,blocks:[{type:"prose",text:"十二宮諸星得地合格訣"},{type:"prose",text:" 子安命 子宮貪狼殺陰星，機梁相拱福興隆，庚辛乙癸生人美，一生富貴足豐榮。"},{type:"prose",text:" 丑安命 丑宮立命日月朝，丙戍生人福祿饒，正坐平常中局論，對照富貴禍皆消。"},{type:"prose",text:" 寅安命 寅宮巨日足豐隆，七殺天梁百事通，申巳庚人皆為吉，男子為官女受封。"},{type:"prose",text:" 卯安命 卯宮機巨武曲逢，辛乙生人福氣隆，男子為當縻廩祿，女人享福受褒封。"},{type:"prose",text:" 辰安命 辰位機梁坐命宮，天府戍地最盈豐，腰金衣紫真榮顯，富華貴輝宜到終。"},{type:"prose",text:" 巳安命 巳位天機天相臨，紫府朝垣福更深，戊辛壬丙皆為貴，一生順遂少災侵。"},{type:"prose",text:" 午安命 午宮紫府太陽同，機梁破殺喜相逢，甲丁己癸生人福，一世風光廩祿豐。"},{type:"prose",text:" 未安命 未宮紫武廉貞同，日月巨門喜相逢，女人值此全福壽，男子逢之位三公。"},{type:"prose",text:" 申安命 申宮紫帝貞梁同，武曲巨門喜相逢，甲庚癸人如得喜，一生富貴逞英雄。"},{type:"prose",text:" 酉安命 酉宮最喜太陰逢，巨日又逢當面衝，辛乙生人為貴格，一生福祿永亨通。"},{type:"prose",text:" 戍安命 戍宮紫微對沖辰，富而不貴有虛名，更加吉曜多權祿，只利開張貿易人。"},{type:"prose",text:" 亥安命 亥宮最喜太陰逢，若人值此福祿隆，男女逢之皆稱意，富貴榮華直到終。"}],raw:`十二宮諸星得地合格訣  
 子安命 子宮貪狼殺陰星，機梁相拱福興隆，庚辛乙癸生人美，一生富貴足豐榮。  
 丑安命 丑宮立命日月朝，丙戍生人福祿饒，正坐平常中局論，對照富貴禍皆消。  
 寅安命 寅宮巨日足豐隆，七殺天梁百事通，申巳庚人皆為吉，男子為官女受封。  
 卯安命 卯宮機巨武曲逢，辛乙生人福氣隆，男子為當縻廩祿，女人享福受褒封。  
 辰安命 辰位機梁坐命宮，天府戍地最盈豐，腰金衣紫真榮顯，富華貴輝宜到終。  
 巳安命 巳位天機天相臨，紫府朝垣福更深，戊辛壬丙皆為貴，一生順遂少災侵。  
 午安命 午宮紫府太陽同，機梁破殺喜相逢，甲丁己癸生人福，一世風光廩祿豐。  
 未安命 未宮紫武廉貞同，日月巨門喜相逢，女人值此全福壽，男子逢之位三公。  
 申安命 申宮紫帝貞梁同，武曲巨門喜相逢，甲庚癸人如得喜，一生富貴逞英雄。  
 酉安命 酉宮最喜太陰逢，巨日又逢當面衝，辛乙生人為貴格，一生福祿永亨通。  
 戍安命 戍宮紫微對沖辰，富而不貴有虛名，更加吉曜多權祿，只利開張貿易人。  
 亥安命 亥宮最喜太陰逢，若人值此福祿隆，男女逢之皆稱意，富貴榮華直到終。`},{id:"shiergong-shixian",title:"十二宮諸星失陷破格訣",volume:1,blocks:[{type:"prose",text:"十二宮諸星失陷破格訣"},{type:"prose",text:" 子丑安命 子午天機丑巨鈴，此星落陷果為真，縱然化吉更為美，任他富貴不清寧。"},{type:"prose",text:" 寅安命 寅上機昌曲月逢，雖然吉拱不豐隆，男為伴僕女娼婢，若非夭折即貧窮。"},{type:"prose",text:" 卯辰安命 卯上太陰擎羊逢，辰宮巨宿紫微同，縱然化吉非全美，若非加殺到頭兇。"},{type:"prose",text:" 巳安命 巳宮武月天梁巨，貪宿廉貞共到蛇，三方吉曜皆不貴，下賤貧窮度歲華。"},{type:"prose",text:" 午安命 午宮貪巨月昌從，羊刃三合最嫌衝，雖然化吉居仕路，橫破橫成到老窮。"},{type:"prose",text:" 未安命 未宮巨宿太陽嫌，縱少災危有克傷，勞碌奔波官事至，隨緣下賤度時光。"},{type:"prose",text:" 申酉安命 申宮機巨為破格，男人浪蕩女人貧，二宮若然桃花見，男女逢之總不榮。"},{type:"prose",text:" 戍安命 戍上紫破若相逢，天同太陽皆主兇，若還孤寒更殀折，隨緣勤苦免貧窮。"},{type:"prose",text:" 亥安命 亥宮貪火天梁同，飄蕩浪子走西東，若還富貴也年促，不然隸僕與貧窮。"}],raw:`十二宮諸星失陷破格訣  
 子丑安命 子午天機丑巨鈴，此星落陷果為真，縱然化吉更為美，任他富貴不清寧。  
 寅安命 寅上機昌曲月逢，雖然吉拱不豐隆，男為伴僕女娼婢，若非夭折即貧窮。  
 卯辰安命 卯上太陰擎羊逢，辰宮巨宿紫微同，縱然化吉非全美，若非加殺到頭兇。  
 巳安命 巳宮武月天梁巨，貪宿廉貞共到蛇，三方吉曜皆不貴，下賤貧窮度歲華。  
 午安命 午宮貪巨月昌從，羊刃三合最嫌衝，雖然化吉居仕路，橫破橫成到老窮。  
 未安命 未宮巨宿太陽嫌，縱少災危有克傷，勞碌奔波官事至，隨緣下賤度時光。  
 申酉安命 申宮機巨為破格，男人浪蕩女人貧，二宮若然桃花見，男女逢之總不榮。  
 戍安命 戍上紫破若相逢，天同太陽皆主兇，若還孤寒更殀折，隨緣勤苦免貧窮。  
 亥安命 亥宮貪火天梁同，飄蕩浪子走西東，若還富貴也年促，不然隸僕與貧窮。`},{id:"dedi-fugui",title:"十二宮諸星得地富貴論",volume:1,blocks:[{type:"prose",text:"十二宮諸星得地富貴論"},{type:"prose",text:" 子宮得地太陰星，殺破昌貪文曲明，丑未紫破朝日月，未貞梁丑福非輕，"},{type:"prose",text:" 寅宮最喜逢陽巨，七殺天同梁文清，卯上巨機為貴格，武曲守卯福豐盈，"},{type:"prose",text:" 辰戍機梁非小補，戍宮天府累千金，巳亥天機天相貴，午宮紫府梁俱榮，"},{type:"prose",text:" 申宮貞巨陰殺美，酉戍亥上太陰停，卯辰巳午陽正照，紫府巨宿巳亥興，"},{type:"prose",text:" 亥宮天府天梁吉，子宮機宿亦中平，七殺子午逢左右，文曲加之格最清，"},{type:"prose",text:" 廉坐中宮逢輔弼，更兼化吉禍尤興。"},{type:"prose",text:" 武曲巳亥逢，六甲帥邊庭，貪狼居卯酉，遇火作公卿，"},{type:"prose",text:" 天機坐卯貴，寅月六丁榮，巨卯逢左右，六乙立邊庭，"},{type:"prose",text:" 巨坐寅申位，偏喜甲庚生，二宮逢七殺，左右會昌星，"},{type:"prose",text:" 辰戍遇三宿，必主位公卿。"}],raw:`十二宮諸星得地富貴論  
 子宮得地太陰星，殺破昌貪文曲明，丑未紫破朝日月，未貞梁丑福非輕，  
 寅宮最喜逢陽巨，七殺天同梁文清，卯上巨機為貴格，武曲守卯福豐盈，  
 辰戍機梁非小補，戍宮天府累千金，巳亥天機天相貴，午宮紫府梁俱榮，  
 申宮貞巨陰殺美，酉戍亥上太陰停，卯辰巳午陽正照，紫府巨宿巳亥興，  
 亥宮天府天梁吉，子宮機宿亦中平，七殺子午逢左右，文曲加之格最清，  
 廉坐中宮逢輔弼，更兼化吉禍尤興。  
 武曲巳亥逢，六甲帥邊庭，貪狼居卯酉，遇火作公卿，  
 天機坐卯貴，寅月六丁榮，巨卯逢左右，六乙立邊庭，  
 巨坐寅申位，偏喜甲庚生，二宮逢七殺，左右會昌星，  
 辰戍遇三宿，必主位公卿。`},{id:"shixian-pinjian",title:"十二宮諸星失陷貧賤論",volume:1,blocks:[{type:"prose",text:"十二宮諸星失陷貧賤論"},{type:"prose",text:" 丑未巨機為值福，失陷此月福須輕，卯酉不喜逢羊刃，辰戌紫破朝羅網，"},{type:"prose",text:" 辰休戌囚貪貞陷，午宮陰巨不堪稱，申宮合武為下格，酉逢機巨日無精，"},{type:"prose",text:" 卯辰巳午逢陰宿，戌亥逢陽亦不容，貪殺巳亥居陷地，破軍卯酉不為清，"},{type:"prose",text:" 加殺遇劫為奸盜，此是刑邪不必論，貪狼化祿居四墓，縱然遇吉亦中平，"},{type:"prose",text:" 命纏弱地休逢忌，空劫擎羊加火鈴，若非夭折主下賤，六畜之命不可平，"},{type:"prose",text:" 旺地發福終遠大，陷地崢嶸到底傾，二論不過五百字，富貴貧賤別得明。"}],raw:`十二宮諸星失陷貧賤論  
 丑未巨機為值福，失陷此月福須輕，卯酉不喜逢羊刃，辰戌紫破朝羅網，  
 辰休戌囚貪貞陷，午宮陰巨不堪稱，申宮合武為下格，酉逢機巨日無精，  
 卯辰巳午逢陰宿，戌亥逢陽亦不容，貪殺巳亥居陷地，破軍卯酉不為清，  
 加殺遇劫為奸盜，此是刑邪不必論，貪狼化祿居四墓，縱然遇吉亦中平，  
 命纏弱地休逢忌，空劫擎羊加火鈴，若非夭折主下賤，六畜之命不可平，  
 旺地發福終遠大，陷地崢嶸到底傾，二論不過五百字，富貴貧賤別得明。`},{id:"ding-fu-ju",title:"定富局",volume:1,blocks:[{type:"prose",text:"定富局"},{type:"prose",text:" 財蔭夾印 相守命武梁來夾是也，田宅宮亦然。"},{type:"prose",text:" 日月夾財 武守命日月來夾是也，財帛宮亦然。"},{type:"prose",text:" 財祿夾馬 馬守命武祿來夾是也，逢生旺尤妙。"},{type:"prose",text:" 蔭印拱身 身臨田宅梁相拱衝是也，勿坐空亡。"},{type:"prose",text:" 日月照璧 日月臨田宅宮是也，喜居墓庫。"},{type:"prose",text:" 金燦光輝 太陽單守，命在午宮是也。"}],raw:`定富局  
 財蔭夾印 相守命武梁來夾是也，田宅宮亦然。  
 日月夾財 武守命日月來夾是也，財帛宮亦然。  
 財祿夾馬 馬守命武祿來夾是也，逢生旺尤妙。  
 蔭印拱身 身臨田宅梁相拱衝是也，勿坐空亡。  
 日月照璧 日月臨田宅宮是也，喜居墓庫。  
 金燦光輝 太陽單守，命在午宮是也。`},{id:"ding-gui-ju",title:"定貴局",volume:1,blocks:[{type:"prose",text:"定貴局"},{type:"prose",text:" 日月夾命 不坐空亡遇逢本宮有吉星是也。"},{type:"prose",text:" 日出扶桑 日在卯守命是也，守官祿宮亦然。"},{type:"prose",text:" 月落亥宮 月在亥守命是也，又名月朗天門。"},{type:"prose",text:" 月生滄海 月在子宮守田宅是也。"},{type:"prose",text:" 輔弼拱主 紫微守命二星來拱是也，夾之亦然。"},{type:"prose",text:" 君臣慶會 紫微左右同守命是也，更會相武陰妙上。"},{type:"prose",text:" 財印夾祿 祿守命梁相來夾是也，入財亦然。"},{type:"prose",text:" 祿馬佩印 馬前有祿印星同宮是也。"},{type:"prose",text:" 坐貴向貴 謂魁鉞在命迭相坐拱是也。"},{type:"prose",text:" 馬頭帶劍 謂馬有刃是也不是居午格。"},{type:"prose",text:" 七殺朝斗 見前批註"},{type:"prose",text:" 日月並明 見前批註"},{type:"prose",text:" 明珠出海 見前批註"},{type:"prose",text:" 日月同臨 見前批註"},{type:"prose",text:" 刑囚夾印 天刑廉貞同臨身命主武勇之人。"},{type:"prose",text:" 科權祿拱 見前批註"},{type:"prose",text:" 貪火相逢 謂二星守命同居廟旺是也。"},{type:"prose",text:" 武曲守垣 武守命卯宮是也，餘不是。"},{type:"prose",text:" 府相朝垣 見前批註"},{type:"prose",text:" 紫府朝垣 見前批註"},{type:"prose",text:" 文星暗拱 見前批註"},{type:"prose",text:" 權祿生逢 二星守命廟旺是也，陷不是。"},{type:"prose",text:" 羊刃入廟 辰戍丑未守命遇吉是也。"},{type:"prose",text:" 巨機居卯 見前批註"},{type:"prose",text:" 明祿暗祿 見前批註"},{type:"prose",text:" 科明暗祿 見前批註"},{type:"prose",text:" 金輿扶駕 紫微守命前後有日月來夾是也。"}],raw:`定貴局  
 日月夾命 不坐空亡遇逢本宮有吉星是也。  
 日出扶桑 日在卯守命是也，守官祿宮亦然。  
 月落亥宮 月在亥守命是也，又名月朗天門。  
 月生滄海 月在子宮守田宅是也。  
 輔弼拱主 紫微守命二星來拱是也，夾之亦然。  
 君臣慶會 紫微左右同守命是也，更會相武陰妙上。  
 財印夾祿 祿守命梁相來夾是也，入財亦然。  
 祿馬佩印 馬前有祿印星同宮是也。  
 坐貴向貴 謂魁鉞在命迭相坐拱是也。  
 馬頭帶劍 謂馬有刃是也不是居午格。  
 七殺朝斗 見前批註  
 日月並明 見前批註  
 明珠出海 見前批註  
 日月同臨 見前批註  
 刑囚夾印 天刑廉貞同臨身命主武勇之人。  
 科權祿拱 見前批註  
 貪火相逢 謂二星守命同居廟旺是也。  
 武曲守垣 武守命卯宮是也，餘不是。  
 府相朝垣 見前批註  
 紫府朝垣 見前批註  
 文星暗拱 見前批註  
 權祿生逢 二星守命廟旺是也，陷不是。  
 羊刃入廟 辰戍丑未守命遇吉是也。  
 巨機居卯 見前批註  
 明祿暗祿 見前批註  
 科明暗祿 見前批註  
 金輿扶駕 紫微守命前後有日月來夾是也。`},{id:"ding-pinjian-ju",title:"定貧賤局",volume:1,blocks:[{type:"prose",text:"定貧賤局"},{type:"prose",text:" 生不逢時 命坐空亡逢廉貞是也。"},{type:"prose",text:" 祿逢兩殺 祿坐空亡又逢空劫殺星是也。"},{type:"prose",text:" 馬落空亡 馬既落亡雖祿衝會無用主奔波。"},{type:"prose",text:" 日月藏輝 日月反背又逢巨暗是也。"},{type:"prose",text:" 財與囚仇 武貞同守身命是也。"},{type:"prose",text:" 一生孤貧 謂破守命星陷地是也。"},{type:"prose",text:" 君子在野 謂四殺守身命而言臨陷地是也。"},{type:"prose",text:" 兩重華蓋 謂祿存化祿坐命遇空劫是也。"}],raw:`定貧賤局  
 生不逢時 命坐空亡逢廉貞是也。  
 祿逢兩殺 祿坐空亡又逢空劫殺星是也。  
 馬落空亡 馬既落亡雖祿衝會無用主奔波。  
 日月藏輝 日月反背又逢巨暗是也。  
 財與囚仇 武貞同守身命是也。  
 一生孤貧 謂破守命星陷地是也。  
 君子在野 謂四殺守身命而言臨陷地是也。  
 兩重華蓋 謂祿存化祿坐命遇空劫是也。`},{id:"ding-za-ju",title:"定雜局",volume:1,blocks:[{type:"prose",text:"定雜局"},{type:"prose",text:" 風雲際會 身命雖弱二限逢祿馬是也。"},{type:"prose",text:" 錦上添花 謂限破惡星而行吉地是也。"},{type:"prose",text:" 祿衰馬困 限逢七殺祿馬空亡是也。"},{type:"prose",text:" 衣錦還鄉 少年不遂四十後行墓運是也。"},{type:"prose",text:" 步數無依 前限接後限連綿不分是也。"},{type:"prose",text:" 水上駕星 一年好一年不好是也。"},{type:"prose",text:" 吉凶相伴 命有主星限前則發限衰不發是也。"},{type:"prose",text:" 枯木逢春 謂命衰限好是也。"}],raw:`定雜局  
 風雲際會 身命雖弱二限逢祿馬是也。  
 錦上添花 謂限破惡星而行吉地是也。  
 祿衰馬困 限逢七殺祿馬空亡是也。  
 衣錦還鄉 少年不遂四十後行墓運是也。  
 步數無依 前限接後限連綿不分是也。  
 水上駕星 一年好一年不好是也。  
 吉凶相伴 命有主星限前則發限衰不發是也。  
 枯木逢春 謂命衰限好是也。`},{id:"an-shenming-li",title:"安身命例",volume:2,blocks:[{type:"prose",text:"安身命例"},{type:"prose",text:" 大抵人命俱從寅上起正月，順數至本生月止，又自人生月起子時逆至本生時安命，順至本生時安身。"},{type:"prose",text:" 假如正月生子時就在寅宮安身命，丑時逆轉丑安命，順去卯安身，寅時逆轉子安命，順至辰安身，餘宮仿此，又若閏月正月生者要在二月內起安身命，凡有閏月具要依此為例，納音甲子歌誤要熟讀。"},{type:"prose",text:" 如甲生人安命在寅卻起甲己之年丙為首，是丙寅丁卯爐中火，卻去火局尋某日生期起紫微帝王，如是正月初一生者是火局，酉宮起初一日，就從酉宮起紫微，數無差遲，若錯了則失之毫釐，差之千里矣。"}],raw:`安身命例  
 大抵人命俱從寅上起正月，順數至本生月止，又自人生月起子時逆至本生時安命，順至本生時安身。  
 假如正月生子時就在寅宮安身命，丑時逆轉丑安命，順去卯安身，寅時逆轉子安命，順至辰安身，餘宮仿此，又若閏月正月生者要在二月內起安身命，凡有閏月具要依此為例，納音甲子歌誤要熟讀。  
 如甲生人安命在寅卻起甲己之年丙為首，是丙寅丁卯爐中火，卻去火局尋某日生期起紫微帝王，如是正月初一生者是火局，酉宮起初一日，就從酉宮起紫微，數無差遲，若錯了則失之毫釐，差之千里矣。`},{id:"an-shiergong-li",title:"安十二宮例",volume:2,blocks:[{type:"prose",text:"安十二宮例 男女俱從逆轉切忌莫順去"},{type:"prose",text:" 一 命宮、二兄弟、三妻妾、四子女、五財帛、六疾厄、七遷移、八奴僕、九官祿、十田宅、十一福德、十二父母"}],raw:`安十二宮例 男女俱從逆轉切忌莫順去  
 一 命宮、二兄弟、三妻妾、四子女、五財帛、六疾厄、七遷移、八奴僕、九官祿、十田宅、十一福德、十二父母`},{id:"qi-wuxing-yin",title:"起五行寅例",volume:2,blocks:[{type:"prose",text:"起五行寅例"},{type:"prose",text:" 甲己之歲起丙寅，乙庚之歲起戊寅，丙辛之歲起庚寅，丁壬之歲起壬寅，戊癸之歲起甲寅。"}],raw:`起五行寅例  
 甲己之歲起丙寅，乙庚之歲起戊寅，丙辛之歲起庚寅，丁壬之歲起壬寅，戊癸之歲起甲寅。`},{id:"huajia-nayin",title:"六十花甲子納音歌",volume:2,blocks:[{type:"prose",text:"六十花甲子納音歌"},{type:"prose",text:" 甲子乙丑海中金，丙寅丁卯爐中火，戊辰己巳大林木，庚午辛未路旁土，壬申癸酉劍峰金，"},{type:"prose",text:" 甲戊乙亥山頭火，丙子丁丑澗下水，戊寅己卯城頭土，庚辰辛巳白蠟金，壬午癸未楊柳木，"},{type:"prose",text:" 甲申乙酉泉中水，丙戌丁亥屋上土，戊子己丑霹靂火，庚寅辛卯松柏木，壬辰癸巳長流水，"},{type:"prose",text:" 甲午乙未沙中金，丙申丁酉山下火，戊戌已亥平地木，庚子辛丑壁上土，壬寅癸卯金箔金，"},{type:"prose",text:" 甲辰乙巳覆燈火，丙午丁未天河水，戊申己酉大驛土，庚戌辛亥釵釧金，壬子癸丑桑拓木，"},{type:"prose",text:" 甲寅乙卯大溪水，丙辰丁巳沙中土，戊午己未天上火，庚申辛酉石榴木，壬戌癸亥大海水。"}],raw:`六十花甲子納音歌  
 甲子乙丑海中金，丙寅丁卯爐中火，戊辰己巳大林木，庚午辛未路旁土，壬申癸酉劍峰金，  
 甲戊乙亥山頭火，丙子丁丑澗下水，戊寅己卯城頭土，庚辰辛巳白蠟金，壬午癸未楊柳木，  
 甲申乙酉泉中水，丙戌丁亥屋上土，戊子己丑霹靂火，庚寅辛卯松柏木，壬辰癸巳長流水，  
 甲午乙未沙中金，丙申丁酉山下火，戊戌已亥平地木，庚子辛丑壁上土，壬寅癸卯金箔金，  
 甲辰乙巳覆燈火，丙午丁未天河水，戊申己酉大驛土，庚戌辛亥釵釧金，壬子癸丑桑拓木，  
 甲寅乙卯大溪水，丙辰丁巳沙中土，戊午己未天上火，庚申辛酉石榴木，壬戌癸亥大海水。`},{id:"an-nanbeidou",title:"安南北斗諸星訣",volume:2,blocks:[{type:"prose",text:"安南北斗諸星訣"},{type:"prose",text:" 紫微天機逆行旁，隔一陽武天同當，又隔二位廉貞地，空三復見紫微郎，"},{type:"prose",text:" 天府太陰與貪狼，巨門天相及天梁，七殺空三破軍位，八星順數細推詳。"}],raw:`安南北斗諸星訣  
 紫微天機逆行旁，隔一陽武天同當，又隔二位廉貞地，空三復見紫微郎，  
 天府太陰與貪狼，巨門天相及天梁，七殺空三破軍位，八星順數細推詳。`},{id:"an-changqu",title:"安文昌文曲星訣",volume:2,blocks:[{type:"prose",text:"安文昌文曲星訣 論本生時"},{type:"prose",text:" 子時戌上起文昌，逆到生時是貴鄉，文曲數從辰上起，順到生時是本鄉。"},{type:"prose",text:" 文昌星從戌上起子時，就在戌宮安，若丑時逆至酉宮安之。"},{type:"prose",text:" 文曲星從辰上起子時，如人生子時就在辰宮安，若丑時順去巳宮安之，餘宮仿此。"}],raw:`安文昌文曲星訣 論本生時  
 子時戌上起文昌，逆到生時是貴鄉，文曲數從辰上起，順到生時是本鄉。  
 文昌星從戌上起子時，就在戌宮安，若丑時逆至酉宮安之。  
 文曲星從辰上起子時，如人生子時就在辰宮安，若丑時順去巳宮安之，餘宮仿此。`},{id:"an-fuxing",title:"安左輔右弼星訣",volume:2,blocks:[{type:"prose",text:"安左輔右弼星訣 論本生月"},{type:"prose",text:" 左輔正月起於辰，順逢生月是貴方，右弼正月宮尋戌，逆至正月便調停。"},{type:"prose",text:" 左輔從辰上起正月順行，如正月生者就辰宮安之。二月在巳宮，右弼從戌宮逆轉如正月便成戌宮安之，二月在酉宮餘仿此。"}],raw:`安左輔右弼星訣 論本生月  
 左輔正月起於辰，順逢生月是貴方，右弼正月宮尋戌，逆至正月便調停。  
 左輔從辰上起正月順行，如正月生者就辰宮安之。二月在巳宮，右弼從戌宮逆轉如正月便成戌宮安之，二月在酉宮餘仿此。`},{id:"an-kuiyue",title:"安天魁天鉞訣",volume:2,blocks:[{type:"prose",text:"安天魁天鉞訣 論本生年幹"},{type:"prose",text:" 甲戊庚牛羊，乙己鼠猴鄉，六辛逢虎馬，壬癸免蛇藏，丙丁豬狗位，此是貴人方。"},{type:"prose",text:" 二星主科甲，身命若逢之，金榜提名之客。"}],raw:`安天魁天鉞訣 論本生年幹  
 甲戊庚牛羊，乙己鼠猴鄉，六辛逢虎馬，壬癸免蛇藏，丙丁豬狗位，此是貴人方。  
 二星主科甲，身命若逢之，金榜提名之客。`},{id:"an-tianma",title:"安天馬星訣",volume:2,blocks:[{type:"prose",text:"安天馬星訣 論本生年支"},{type:"prose",text:" 寅午戍人馬居申，申子辰人馬居寅，巳酉丑人馬居亥，亥卯未人馬居巳。"},{type:"prose",text:" 如安命在辰戌丑未，遇夫妻宮在寅申巳亥有天馬，若得同位或三方照臨，必主男為官女封贈，不然祿馬交馳亦吉。"}],raw:`安天馬星訣 論本生年支  
 寅午戍人馬居申，申子辰人馬居寅，巳酉丑人馬居亥，亥卯未人馬居巳。  
 如安命在辰戌丑未，遇夫妻宮在寅申巳亥有天馬，若得同位或三方照臨，必主男為官女封贈，不然祿馬交馳亦吉。`},{id:"an-lucun",title:"安祿存星訣",volume:2,blocks:[{type:"prose",text:"安祿存星訣 論本生年幹"},{type:"prose",text:" 甲生祿存在寅宮，乙生在卯丙戊巳，丁己祿存停午方，庚祿居申辛祿酉，壬祿在亥癸祿子。"}],raw:`安祿存星訣 論本生年幹  
 甲生祿存在寅宮，乙生在卯丙戊巳，丁己祿存停午方，庚祿居申辛祿酉，壬祿在亥癸祿子。`},{id:"an-yangtuo",title:"安擎羊陀羅二星訣",volume:2,blocks:[{type:"prose",text:"安擎羊陀羅二星訣"},{type:"prose",text:" 祿前擎羊後陀羅，夾限逢兇禍患多，歲限逢之俱不利，人生遇此莫蹉跎。"},{type:"prose",text:" 此二星隨祿存安之，前安擎羊祿後安陀羅。假如癸祿在子，丑宮安擎羊，亥宮安陀羅，餘仿此。"}],raw:`安擎羊陀羅二星訣  
 祿前擎羊後陀羅，夾限逢兇禍患多，歲限逢之俱不利，人生遇此莫蹉跎。  
 此二星隨祿存安之，前安擎羊祿後安陀羅。假如癸祿在子，丑宮安擎羊，亥宮安陀羅，餘仿此。`},{id:"an-huoling",title:"安火鈴二星訣",volume:2,blocks:[{type:"prose",text:"安火鈴二星訣"},{type:"prose",text:" 寅午戌人丑卯方，申子辰人寅戌揚，巳酉丑人卯戌位，亥卯未人酉戌房。"}],raw:`安火鈴二星訣  
 寅午戌人丑卯方，申子辰人寅戌揚，巳酉丑人卯戌位，亥卯未人酉戌房。`},{id:"an-sihua-bianhua",title:"安祿權科忌四星變化訣",volume:2,blocks:[{type:"prose",text:"安祿權科忌四星變化訣 論生年幹 挾火而化"},{type:"prose",text:" 甲廉破武陽為伴，乙機梁紫月交侵，丙同機昌廉貞位，丁月同機巨門尋，"},{type:"prose",text:" 戊貪月弼機為主，己武貪梁曲最平，庚日武陰同為首，辛巨陽曲昌至臨，"},{type:"prose",text:" 壬梁紫府武宿是，癸破巨陰貪狼停。"},{type:"prose",text:" 如甲生人廉貞化祿、破軍化權、武曲化科、太陽化忌是也，餘仿此。"}],raw:`安祿權科忌四星變化訣 論生年幹 挾火而化  
 甲廉破武陽為伴，乙機梁紫月交侵，丙同機昌廉貞位，丁月同機巨門尋，  
 戊貪月弼機為主，己武貪梁曲最平，庚日武陰同為首，辛巨陽曲昌至臨，  
 壬梁紫府武宿是，癸破巨陰貪狼停。  
 如甲生人廉貞化祿、破軍化權、武曲化科、太陽化忌是也，餘仿此。`},{id:"kongjie-jue",title:"天空地劫訣",volume:2,blocks:[{type:"prose",text:"天空地劫訣 論本生時"},{type:"prose",text:" 亥上起子順安劫，逆向便是天空鄉。"},{type:"prose",text:" 如子時生者劫空俱在亥宮。若丑時生者劫順在子宮，空逆在戌宮。若午時生者，劫空俱在巳上安之。餘宮仿此。"}],raw:`天空地劫訣 論本生時  
 亥上起子順安劫，逆向便是天空鄉。  
 如子時生者劫空俱在亥宮。若丑時生者劫順在子宮，空逆在戌宮。若午時生者，劫空俱在巳上安之。餘宮仿此。`},{id:"an-shangshi",title:"安天傷天使訣",volume:2,blocks:[{type:"prose",text:"安天傷天使訣"},{type:"prose",text:" 命前六位是天傷，命後六位天使當。"},{type:"prose",text:" 順數命前六位是天傷，命後六位是天使，天傷安在奴僕宮，天使安在疾厄宮。身與歲限夾在傷使中間，謂之加夾地更加惡曜多兇。"}],raw:`安天傷天使訣  
 命前六位是天傷，命後六位天使當。  
 順數命前六位是天傷，命後六位是天使，天傷安在奴僕宮，天使安在疾厄宮。身與歲限夾在傷使中間，謂之加夾地更加惡曜多兇。`},{id:"an-suisha-lu",title:"安十二宮太歲殺祿訣",volume:2,blocks:[{type:"prose",text:"安十二宮太歲殺祿訣"},{type:"prose",text:" 博士力士青龍續，小耗將軍及奏書，蜚廉喜神病符錄，天耗伏兵至宮府，吉凶從此分禍福。"},{type:"prose",text:" 要知不論男女命尋祿存星起，陽男陰女順推輪，陰男陽女逆流行。"},{type:"prose",text:" 博士聰明力士權，青龍喜氣小耗錢，將軍威武奏書福，蜚廉主弧喜神延，"},{type:"prose",text:" 病符帶疾耗退祖，伏兵宮府口舌纏，生年坐守十二殺，方敢斷人禍福源。"}],raw:`安十二宮太歲殺祿訣  
 博士力士青龍續，小耗將軍及奏書，蜚廉喜神病符錄，天耗伏兵至宮府，吉凶從此分禍福。  
 要知不論男女命尋祿存星起，陽男陰女順推輪，陰男陽女逆流行。  
 博士聰明力士權，青龍喜氣小耗錢，將軍威武奏書福，蜚廉主弧喜神延，  
 病符帶疾耗退祖，伏兵宮府口舌纏，生年坐守十二殺，方敢斷人禍福源。`},{id:"an-xingyao",title:"安天刑天姚星訣",volume:2,blocks:[{type:"prose",text:"安天刑天姚星訣"},{type:"prose",text:" 天刑星從酉上起正月順至本生月便安之。天姚星從丑上起正月順至本生月即安之。"}],raw:`安天刑天姚星訣  
 天刑星從酉上起正月順至本生月便安之。天姚星從丑上起正月順至本生月即安之。`},{id:"an-santai",title:"安三臺八座二星訣",volume:2,blocks:[{type:"prose",text:"安三臺八座二星訣"},{type:"prose",text:" 三臺尋左輔將初一日加在左輔宮，順數至本生日安之。八座尋右弼將初一加右弼宮逆數至本生日安之是也。"}],raw:`安三臺八座二星訣  
 三臺尋左輔將初一日加在左輔宮，順數至本生日安之。八座尋右弼將初一加右弼宮逆數至本生日安之是也。`},{id:"an-kuxu",title:"安天哭天虛星訣",volume:2,blocks:[{type:"prose",text:"安天哭天虛星訣 論本生年支"},{type:"prose",text:" 天哭天虛起午宮。午宮起子兩分蹤。哭逆巳兮虛順未。數到生年便居中。"}],raw:`安天哭天虛星訣 論本生年支  
 天哭天虛起午宮。午宮起子兩分蹤。哭逆巳兮虛順未。數到生年便居中。`},{id:"an-longfeng",title:"安龍池鳳閣訣",volume:2,blocks:[{type:"prose",text:"安龍池鳳閣訣 論本生年支"},{type:"prose",text:" 龍池子順辰，鳳閣子戌逆。"}],raw:`安龍池鳳閣訣 論本生年支  
 龍池子順辰，鳳閣子戌逆。`},{id:"an-taifu",title:"安臺輔封訣",volume:2,blocks:[{type:"prose",text:"安臺輔封訣"},{type:"prose",text:" 由午宮起子順數至本生時安之。"}],raw:`安臺輔封訣  
 由午宮起子順數至本生時安之。`},{id:"an-fenggao",title:"安封誥訣",volume:2,blocks:[{type:"prose",text:"安封誥訣"},{type:"prose",text:" 由寅起宮子順數至本生時安之。"}],raw:`安封誥訣  
 由寅起宮子順數至本生時安之。`},{id:"an-changsheng",title:"安長生沐浴十二宮",volume:2,blocks:[{type:"prose",text:"安長生、沐浴、冠帶、臨官、帝旺、衰、病、死、墓、絕、胎、養 男命順數、女命逆數。"},{type:"prose",text:" 火局命寅起長生。木局命亥起長生。水局命申起長生。金局命巳起長生。土局命申起長生。"}],raw:`安長生、沐浴、冠帶、臨官、帝旺、衰、病、死、墓、絕、胎、養 男命順數、女命逆數。  
 火局命寅起長生。木局命亥起長生。水局命申起長生。金局命巳起長生。土局命申起長生。`},{id:"an-hongluan",title:"安紅鸞天喜訣",volume:2,blocks:[{type:"prose",text:"安紅鸞天喜訣"},{type:"prose",text:" 卯上起子逆數之，數到當生太歲支，坐守此宮紅鸞位，對宮天喜不差移，"},{type:"prose",text:" 年少婚姻喜事奇，老人必主喪其妻，三十年前為吉曜，五十年後不相宜。"}],raw:`安紅鸞天喜訣  
 卯上起子逆數之，數到當生太歲支，坐守此宮紅鸞位，對宮天喜不差移，  
 年少婚姻喜事奇，老人必主喪其妻，三十年前為吉曜，五十年後不相宜。`},{id:"an-sangmen",title:"安喪門白虎弔客官府四飛星訣",volume:2,blocks:[{type:"prose",text:"安喪門白虎弔客官府四飛星訣"},{type:"prose",text:" 流年太歲前二位是喪門，後二位是弔客，喪門對照安白虎，弔客對照安官府。"},{type:"prose",text:" 歲君前二是喪門，後二宮中弔客存，對照喪門安白虎，弔客對照安官府。"}],raw:`安喪門白虎弔客官府四飛星訣  
 流年太歲前二位是喪門，後二位是弔客，喪門對照安白虎，弔客對照安官府。  
 歲君前二是喪門，後二宮中弔客存，對照喪門安白虎，弔客對照安官府。`},{id:"an-doujun",title:"安斗君訣",volume:2,blocks:[{type:"prose",text:"安斗君訣 即月將星是也"},{type:"prose",text:" 於流年太歲宮起正月逆至本生月，又從本生月起子順數至本生時安斗君。"},{type:"prose",text:" 大歲宮中便起正，逆尋生月即留停，又從生月宮輪子，順至生時鎮斗星。"}],raw:`安斗君訣 即月將星是也  
 於流年太歲宮起正月逆至本生月，又從本生月起子順數至本生時安斗君。  
 大歲宮中便起正，逆尋生月即留停，又從生月宮輪子，順至生時鎮斗星。`},{id:"an-tiande",title:"安天德月德解神訣",volume:2,blocks:[{type:"prose",text:"安天德月德解神訣"},{type:"prose",text:" 天德星從酉上起子，順數至流年太歲上是也。月德星從子上起子，順數至流年太歲上是也。"},{type:"prose",text:" 解神從戌上起子，逆數至當生年太歲上是也。"}],raw:`安天德月德解神訣  
 天德星從酉上起子，順數至流年太歲上是也。月德星從子上起子，順數至流年太歲上是也。  
 解神從戌上起子，逆數至當生年太歲上是也。`},{id:"an-feisha",title:"安飛天三殺訣",volume:2,blocks:[{type:"prose",text:"安飛天三殺訣 即奏書、將軍、直符"},{type:"prose",text:" 寅午戍年飛入亥卯未宮。申子辰年飛入巳酉丑宮。"},{type:"prose",text:" 亥卯未年飛入申子辰宮。巳酉丑年飛入寅午戌宮。"},{type:"prose",text:" 奏書口舌禍來侵，將軍飛入悔心驚，直符官災終不免，此是流年三殺星。"}],raw:`安飛天三殺訣 即奏書、將軍、直符  
 寅午戍年飛入亥卯未宮。申子辰年飛入巳酉丑宮。  
 亥卯未年飛入申子辰宮。巳酉丑年飛入寅午戌宮。  
 奏書口舌禍來侵，將軍飛入悔心驚，直符官災終不免，此是流年三殺星。`},{id:"an-jielu",title:"安截路空亡訣",volume:2,blocks:[{type:"prose",text:"安截路空亡訣 論本生年"},{type:"prose",text:" 甲己申酉宮，乙庚午未宮，丙辛辰巳宮，丁壬寅卯宮，戊癸子丑宮。"}],raw:`安截路空亡訣 論本生年  
 甲己申酉宮，乙庚午未宮，丙辛辰巳宮，丁壬寅卯宮，戊癸子丑宮。`},{id:"an-xunzhong",title:"安旬中空亡訣",volume:2,blocks:[{type:"prose",text:"安旬中空亡訣 論本生年"},{type:"prose",text:" 甲子旬中空戌亥，甲寅旬中空子丑，甲辰旬中空寅卯，"},{type:"prose",text:" 甲午旬中空辰巳，甲申旬中空午未，甲戌旬中空申酉。"}],raw:`安旬中空亡訣 論本生年  
 甲子旬中空戌亥，甲寅旬中空子丑，甲辰旬中空寅卯，  
 甲午旬中空辰巳，甲申旬中空午未，甲戌旬中空申酉。`},{id:"an-daxian",title:"安大限訣",volume:2,blocks:[{type:"prose",text:"安大限訣"},{type:"prose",text:" 陽男陰女從命前一宮起順行 是父母宮。陰男陽女從命後一宮起逆行 是兄弟宮"}],raw:`安大限訣  
 陽男陰女從命前一宮起順行 是父母宮。陰男陽女從命後一宮起逆行 是兄弟宮`},{id:"an-xiaoxian",title:"安小限訣",volume:2,blocks:[{type:"prose",text:"安小限訣 不論陰陽男俱順數不論陰陽女俱逆數"},{type:"prose",text:" 寅午戌人起辰宮，申子辰人自戌宮，巳酉丑人起未宮，亥卯未人起丑宮。"}],raw:`安小限訣 不論陰陽男俱順數不論陰陽女俱逆數  
 寅午戌人起辰宮，申子辰人自戌宮，巳酉丑人起未宮，亥卯未人起丑宮。`},{id:"an-tongxian",title:"安童限訣",volume:2,blocks:[{type:"prose",text:"安童限訣"},{type:"prose",text:" 一命二財三疾厄，四妻五福六官祿，餘年一派順流行，十五命宮看端的。"}],raw:`安童限訣  
 一命二財三疾厄，四妻五福六官祿，餘年一派順流行，十五命宮看端的。`},{id:"an-mingzhu",title:"安命主",volume:2,blocks:[{type:"prose",text:"安命主"},{type:"prose",text:" 貪狼子宮，巨門丑亥宮，祿存寅戌宮，文曲卯酉宮，廉真申辰宮，武曲巳未宮，破軍午宮。"},{type:"prose",text:" 假如午宮安命尋破軍星在何宮即命主也，子宮安命尋貪狼星在何宮即命主也，左輔隨丑至午，右弼隨亥至午。"}],raw:`安命主  
 貪狼子宮，巨門丑亥宮，祿存寅戌宮，文曲卯酉宮，廉真申辰宮，武曲巳未宮，破軍午宮。  
 假如午宮安命尋破軍星在何宮即命主也，子宮安命尋貪狼星在何宮即命主也，左輔隨丑至午，右弼隨亥至午。`},{id:"an-shenzhu",title:"安身主",volume:2,blocks:[{type:"prose",text:"安身主"},{type:"prose",text:" 子午人火玲星，丑未人天相星，寅申人天梁星，卯酉人天同星，辰戌人文昌星，巳亥人天機星。"}],raw:`安身主  
 子午人火玲星，丑未人天相星，寅申人天梁星，卯酉人天同星，辰戌人文昌星，巳亥人天機星。`},{id:"jinsuo-tieshe",title:"論安命金鎖鐵蛇關",volume:2,blocks:[{type:"prose",text:"論安命金鎖鐵蛇關"},{type:"prose",text:" 當從戌上起子年，順數行年月逆推，日又順數時逆轉，小兒壽夭可先知。"},{type:"prose",text:" 此法從戌上起年順行至本生年，年上起月逆數至本生月，月上起日，月上起時，逆至本生時遇丑未宮病有救，辰戌宮死。"}],raw:`論安命金鎖鐵蛇關  
 當從戌上起子年，順數行年月逆推，日又順數時逆轉，小兒壽夭可先知。  
 此法從戌上起年順行至本生年，年上起月逆數至本生月，月上起日，月上起時，逆至本生時遇丑未宮病有救，辰戌宮死。`},{id:"zhuluo-sanxian",title:"定男女竹蘿三限",volume:2,blocks:[{type:"prose",text:"定男女竹蘿三限"},{type:"prose",text:" 法曰同前帝皇局例，只是逆行以上此二數逆排定，只托三方四正七殺破軍俱作竹蘿三限，若再加巨暗兇星便作三方四正定議，若大小二限相遇作死限斷。"}],raw:`定男女竹蘿三限  
 法曰同前帝皇局例，只是逆行以上此二數逆排定，只托三方四正七殺破軍俱作竹蘿三限，若再加巨暗兇星便作三方四正定議，若大小二限相遇作死限斷。`},{id:"shiergong-ruoqiang",title:"定十二宮弱強",volume:2,blocks:[{type:"prose",text:"定十二宮弱強"},{type:"prose",text:" 男命 財帛、官祿、福德、遷移、田宅為強宮，子女、奴僕、兄弟、父母為弱宮。"},{type:"prose",text:" 女命 夫君、子息、財帛、田宅、福德為強，餘宮皆弱。"}],raw:`定十二宮弱強  
 男命 財帛、官祿、福德、遷移、田宅為強宮，子女、奴僕、兄弟、父母為弱宮。  
 女命 夫君、子息、財帛、田宅、福德為強，餘宮皆弱。`},{id:"xingchen-luoxian",title:"定十二宮星辰落閒",volume:2,blocks:[{type:"prose",text:"定十二宮星辰落閒"},{type:"prose",text:" 紫微在子辰亥為閒宮，貪狼在寅辰為閒宮，天相在辰戌為閒宮，七殺在辰亥為閒宮，天梁在巳酉為閒宮，天機在巳為閒宮，破軍在巳申為閒宮，武曲在申為閒宮。"}],raw:`定十二宮星辰落閒  
 紫微在子辰亥為閒宮，貪狼在寅辰為閒宮，天相在辰戌為閒宮，七殺在辰亥為閒宮，天梁在巳酉為閒宮，天機在巳為閒宮，破軍在巳申為閒宮，武曲在申為閒宮。`},{id:"an-liulu",title:"安流祿流羊流陀訣",volume:2,blocks:[{type:"prose",text:"安流祿流羊流陀訣 論流年太歲"},{type:"prose",text:" 假如己丑流年流祿在午、流羊在未、流陀在巳，如甲子生人安命巳，小限又行在亥，小限擎羊。"}],raw:`安流祿流羊流陀訣 論流年太歲  
 假如己丑流年流祿在午、流羊在未、流陀在巳，如甲子生人安命巳，小限又行在亥，小限擎羊。`},{id:"shengke-zhihua",title:"論星辰生剋制化",volume:2,blocks:[{type:"prose",text:"論星辰生剋制化"},{type:"prose",text:" 星曜全明生剋制化之機，次看落於何宮，如廉真屬火在寅宮，乃木鄉能生廉真之火，若武曲金星與廉真同度，則武曲為財而無用也，餘仿此。"},{type:"prose",text:" 金入火鄉 火入水鄉 水入土鄉 土入木鄉 俱為受制"}],raw:`論星辰生剋制化  
 星曜全明生剋制化之機，次看落於何宮，如廉真屬火在寅宮，乃木鄉能生廉真之火，若武曲金星與廉真同度，則武曲為財而無用也，餘仿此。  
 金入火鄉 火入水鄉 水入土鄉 土入木鄉 俱為受制`},{id:"nanbeidou-wuxing",title:"論諸星分屬南北斗化吉凶並分屬五行",volume:2,blocks:[{type:"prose",text:"論諸星分屬南北斗化吉凶並分屬五行"},{type:"prose",text:" 紫微屬土中天星南北斗化帝座為官祿主"},{type:"prose",text:" 天機屬木南斗化善為兄弟主"},{type:"prose",text:" 祿存屬土北斗司爵貴壽星"},{type:"prose",text:" 太陽屬火南北斗化貴為官祿主"},{type:"prose",text:" 天同屬水金南斗化福為福德主"},{type:"prose",text:" 廉真屬火北斗化殺囚在官祿為官祿主在身命為次桃花"},{type:"prose",text:" 武曲屬金北斗化財為財帛主"},{type:"prose",text:" 天府屬土南斗化令星為財帛田宅主"},{type:"prose",text:" 太陰屬水南北斗化富為財帛田宅主"},{type:"prose",text:" 貪狼屬水木北斗化桃花殺主禍福"},{type:"prose",text:" 巨門屬水北斗化暗主是非"},{type:"prose",text:" 天相屬水南斗化印為官祿主"},{type:"prose",text:" 天梁屬土南斗化蔭主壽星"},{type:"prose",text:" 七殺屬火金南斗降星遇帝為權"},{type:"prose",text:" 破軍屬水北斗化耗司夫妻子女奴僕"},{type:"prose",text:" 文昌屬金南北斗司科甲乃文魁之首"},{type:"prose",text:" 文曲屬水北斗主科甲裡"},{type:"prose",text:" 輔弼二星北斗善住雨令星"},{type:"prose",text:" 以上自紫微至輔弼一十八星俱南北斗正曜，魁鉞天馬亦是吉星俱不入正曜。"},{type:"prose",text:" 魁鉞二星屬火"},{type:"prose",text:" 天馬屬火"},{type:"prose",text:" 擎羊屬金北斗浮星化刑"},{type:"prose",text:" 陀羅屬金北斗助星化忌"},{type:"prose",text:" 火星屬火南斗助星"},{type:"prose",text:" 鈴星屬火南斗助星"},{type:"prose",text:" 天空地劫屬火"},{type:"prose",text:" 天殤天使屬水"},{type:"prose",text:" 化祿屬土喜見祿存"},{type:"prose",text:" 化權屬木喜會巨門武曲"},{type:"prose",text:" 化科屬水喜會魁鉞"},{type:"prose",text:" 化忌屬水即計都星"},{type:"prose",text:" 紅鸞天喜屬水"},{type:"prose",text:" 歲君屬火"},{type:"prose",text:" 博士屬水主聰明"},{type:"prose",text:" 力士屬火主權勢"},{type:"prose",text:" 青龍屬木主喜氣"},{type:"prose",text:" 大小耗屬火小耗錢財大耗退祖"},{type:"prose",text:" 將軍屬木主威猛欠合"},{type:"prose",text:" 奏書屬金主福祿"},{type:"prose",text:" 飛廉屬火主孤"},{type:"prose",text:" 喜神屬火主喜氣"},{type:"prose",text:" 伏兵屬火主口舌"},{type:"prose",text:" 病符主病"},{type:"prose",text:" 官府主官符"},{type:"prose",text:" 喪門木"},{type:"prose",text:" 弔客火"},{type:"prose",text:" 白虎金"},{type:"prose",text:" 官符火"},{type:"prose",text:" 坎水宮中二歲行，初一起丑初二寅，"},{type:"prose",text:" 順行一宮安二日，陰陽雖殊行則同。"},{type:"palace-chart",title:"水二局",note:"",palaces:{巳:"初八、初九",午:"初十、十一",未:"十二、十三",申:"十四、十五",辰:"初六、初七、三十",酉:"十六、十七",卯:"初四、初五、廿八、廿九",戌:"十八、十九",寅:"初二、初三、廿六、廿七",丑:"初一、廿四、廿五",子:"廿二、廿三",亥:"二十、廿一"}},{type:"prose",text:" 生逢木宮三歲起，初一起龍初二牛，"},{type:"prose",text:" 逆進二宮安二日，順回四步一辰字，"},{type:"prose",text:" 初二同宮牛頭起，逆退二步二辰尋。"},{type:"palace-chart",title:"木三局",note:"",palaces:{巳:"初四、十二、十四",午:"初七、十五、十七",未:"初十、十八、二十",申:"十三、廿一、廿三",辰:"初一、初九、十一",酉:"十六、廿四、廿六",卯:"初六、初八",戌:"十九、廿七、廿九",寅:"初三、初九",丑:"初二、廿八",子:"廿五",亥:"廿二、三十"}},{type:"prose",text:" 紫微金宮四歲花，初一尋豬初二龍，"},{type:"prose",text:" 順進三步逆退一，先陰後陽是其基，"},{type:"prose",text:" 惟有初二辰上起，退三進四逆尋跡。"},{type:"palace-chart",title:"金四局",note:"",palaces:{巳:"初六、十六、十九、廿五",午:"初十、二十、廿三、廿九",未:"十四、廿四、廿七",申:"十八、廿八",辰:"初二、十二、十五、廿一",酉:"廿二",卯:"初八、十一、十七",戌:"廿六",寅:"初四、初七、十三",丑:"初三、初九",子:"初五",亥:"初一"}},{type:"prose",text:" 戌土五龍居其中，初一午上二亥宮，"},{type:"prose",text:" 逆行二宮安一日，惟有九日不能均，"},{type:"prose",text:" 十居辰上初居寅，二十九日五上尋，"},{type:"prose",text:" 二宮一日順三次，退二三次又逆回，"},{type:"prose",text:" 惟有六日無正位，逢四對宮去追尋。"},{type:"palace-chart",title:"土五局",note:"",palaces:{巳:"初八、二十、廿四",午:"初一、十三、廿五、廿九",未:"初六、十八、三十",申:"十一、廿三",辰:"初三、十五、十九、廿七",酉:"十六、廿八",卯:"初十、十四、廿二",戌:"廿一",寅:"初五、初九、十七",丑:"初四、十二",子:"初七",亥:"初二、廿六"}},{type:"prose",text:" 離火宮中六歲奇，初二騎馬初四龍，"},{type:"prose",text:" 進三退二各一日，逆回三步是生時，"},{type:"prose",text:" 先陽後陰逆退二，另有進一各期端，"},{type:"prose",text:" 退二安一退二日，順進五宮方是基。"},{type:"palace-chart",title:"火六局",note:"",palaces:{巳:"初十、廿四、廿九",午:"初二、十六、三十",未:"初八、廿二",申:"十四、廿八",辰:"初四、十八、廿三",酉:"初一、二十",卯:"十二、十七、廿七",戌:"初七、廿六",寅:"初六、十一、廿一",丑:"初五、十五、廿五",子:"初九、十九",亥:"初三、十三"}}],raw:`論諸星分屬南北斗化吉凶並分屬五行  
 紫微屬土中天星南北斗化帝座為官祿主  
 天機屬木南斗化善為兄弟主  
 祿存屬土北斗司爵貴壽星  
 太陽屬火南北斗化貴為官祿主  
 天同屬水金南斗化福為福德主  
 廉真屬火北斗化殺囚在官祿為官祿主在身命為次桃花  
 武曲屬金北斗化財為財帛主  
 天府屬土南斗化令星為財帛田宅主  
 太陰屬水南北斗化富為財帛田宅主  
 貪狼屬水木北斗化桃花殺主禍福  
 巨門屬水北斗化暗主是非  
 天相屬水南斗化印為官祿主  
 天梁屬土南斗化蔭主壽星  
 七殺屬火金南斗降星遇帝為權  
 破軍屬水北斗化耗司夫妻子女奴僕  
 文昌屬金南北斗司科甲乃文魁之首  
 文曲屬水北斗主科甲裡  
 輔弼二星北斗善住雨令星  
 以上自紫微至輔弼一十八星俱南北斗正曜，魁鉞天馬亦是吉星俱不入正曜。  
 魁鉞二星屬火  
 天馬屬火  
 擎羊屬金北斗浮星化刑  
 陀羅屬金北斗助星化忌  
 火星屬火南斗助星  
 鈴星屬火南斗助星  
 天空地劫屬火  
 天殤天使屬水  
 化祿屬土喜見祿存  
 化權屬木喜會巨門武曲  
 化科屬水喜會魁鉞  
 化忌屬水即計都星  
 紅鸞天喜屬水  
 歲君屬火  
 博士屬水主聰明  
 力士屬火主權勢  
 青龍屬木主喜氣  
 大小耗屬火小耗錢財大耗退祖  
 將軍屬木主威猛欠合  
 奏書屬金主福祿  
 飛廉屬火主孤  
 喜神屬火主喜氣  
 伏兵屬火主口舌  
 病符主病  
 官府主官符  
 喪門木  
 弔客火  
 白虎金  
 官符火  
 坎水宮中二歲行，初一起丑初二寅，  
 順行一宮安二日，陰陽雖殊行則同。  
 \\-----------------------------------------------------------  
 | | | | |  
 | 初初 | 初十 | 十十 | 十十 |  
 | 八九 | 十一 | 二三 | 四五 |  
 | | | | |  
 | 巳| 午| 未| 申|  
 \\--------------+-----------------------------+--------------  
 | | | |  
 | 初初三 | | 十十 |  
 | 六七十 | | 六七 |  
 | | | |  
 | 辰| | 酉|  
 \\-------------- 水二局 --------------  
 | | | |  
 | 初初廿廿 | | 十十 |  
 | 四五八九 | | 八九 |  
 | | | |  
 | 卯| | 戌|  
 \\--------------+-----------------------------+--------------  
 | | | | |  
 | 初初廿廿 | 初廿廿 | 廿廿 | 二廿 |  
 | 二三六七 | 一四五 | 二三 | 十一 |  
 | | | | |  
 | 寅| 丑| 子| 亥|  
 \\-----------------------------------------------------------  
 生逢木宮三歲起，初一起龍初二牛，  
 逆進二宮安二日，順回四步一辰字，  
 初二同宮牛頭起，逆退二步二辰尋。  
 \\-----------------------------------------------------------  
 | | | | |  
 | 初十十 | 初十十 | 初十二 | 十廿廿 |  
 | 四二四 | 七五七 | 十八十 | 三一三 |  
 | | | | |  
 | 巳| 午| 未| 申|  
 \\--------------+-----------------------------+--------------  
 | | | |  
 | 初初十 | | 十廿廿 |  
 | 一九一 | | 六四六 |  
 | | | |  
 | 辰| | 酉|  
 \\-------------- 木三局 --------------  
 | | | |  
 | 初初 | | 十廿廿 |  
 | 六八 | | 九七九 |  
 | | | |  
 | 卯| | 戌|  
 \\--------------+-----------------------------+--------------  
 | | | | |  
 | 初初 | 初廿 | 廿 | 廿三 |  
 | 三九 | 二八 | 五 | 二十 |  
 | | | | |  
 | 寅| 丑| 子| 亥|  
 \\-----------------------------------------------------------  
 紫微金宮四歲花，初一尋豬初二龍，  
 順進三步逆退一，先陰後陽是其基，  
 惟有初二辰上起，退三進四逆尋跡。  
 \\-----------------------------------------------------------  
 | | | | |  
 | 初十十廿 | 初二廿廿 | 十廿廿 | 十廿 |  
 | 六六九五 | 十十三九 | 四四七 | 八八 |  
 | | | | |  
 | 巳| 午| 未| 申|  
 \\--------------+-----------------------------+--------------  
 | | | |  
 | 初十十廿 | | 廿 |  
 | 二二五一 | | 二 |  
 | | | |  
 | 辰| | 酉|  
 \\-------------- 金四局 --------------  
 | | | |  
 | 初十十 | | 廿 |  
 | 八一七 | | 六 |  
 | | | |  
 | 卯| | 戌|  
 \\--------------+-----------------------------+--------------  
 | | | | |  
 | 初初十 | 初初 | 初 | 初 |  
 | 四七三 | 三九 | 五 | 一 |  
 | | | | |  
 | 寅| 丑| 子| 亥|  
 \\-----------------------------------------------------------  
 戌土五龍居其中，初一午上二亥宮，  
 逆行二宮安一日，惟有九日不能均，  
 十居辰上初居寅，二十九日五上尋，  
 二宮一日順三次，退二三次又逆回，  
 惟有六日無正位，逢四對宮去追尋。  
 \\-----------------------------------------------------------  
 | | | | |  
 | 初二廿 | 初十廿廿 | 初十三 | 十廿 |  
 | 八十四 | 一三五九 | 六八十 | 一三 |  
 | | | | |  
 | 巳| 午| 未| 申|  
 \\--------------+-----------------------------+--------------  
 | | | |  
 | 初十十廿 | | 十廿 |  
 | 三五九七 | | 六八 |  
 | | | |  
 | 辰| | 酉|  
 \\-------------- 土五局 --------------  
 | | | |  
 | 初十廿 | | 廿 |  
 | 十四二 | | 一 |  
 | | | |  
 | 卯| | 戌|  
 \\--------------+-----------------------------+--------------  
 | | | | |  
 | 初初十 | 初十 | 初 | 初廿 |  
 | 五九七 | 四二 | 七 | 二六 |  
 | | | | |  
 | 寅| 丑| 子| 亥|  
 \\-----------------------------------------------------------  
 離火宮中六歲奇，初二騎馬初四龍，  
 進三退二各一日，逆回三步是生時，  
 先陽後陰逆退二，另有進一各期端，  
 退二安一退二日，順進五宮方是基。  
 \\-----------------------------------------------------------  
 | | | | |  
 | 初廿廿 | 初十三 | 初廿 | 十廿 |  
 | 十四九 | 二六十 | 八二 | 四八 |  
 | | | | |  
 | 巳| 午| 未| 申|  
 \\--------------+-----------------------------+--------------  
 | | | |  
 | 初十廿 | | 初二 |  
 | 四八三 | | 一十 |  
 | | | |  
 | 辰| | 酉|  
 \\-------------- 火六局 --------------  
 | | | |  
 | 十十廿 | | 初廿 |  
 | 二七七 | | 七六 |  
 | | | |  
 | 卯| | 戌|  
 \\--------------+-----------------------------+--------------  
 | | | | |  
 | 初十廿 | 初十廿 | 初十 | 初十 |  
 | 六一一 | 五五五 | 九九 | 三三 |  
 | | | | |  
 | 寅| 丑| 子| 亥|`},{id:"antu-tianfu",title:"安紫微天府圖",volume:2,blocks:[{type:"palace-chart",title:"安天府圖",note:`天府惟寅申二宮紫府同宮，餘
宮俱各填協作對如紫居丑則府
居卯矣。`,palaces:{巳:"紫",午:"紫",未:"紫",申:"紫府同宮",辰:"紫",酉:"府",卯:"紫",戌:"府",寅:"紫府同宮",丑:"府",子:"府",亥:"府"}}],raw:`\\-----------------------------------------------------------  
 \\-----------------------------------------------------------  
 | | | | |  
 | | | | |  
 | 紫 | 紫 | 紫 | 紫府同宮 |  
 | | | | |  
 | 巳| 午| 未| 申|  
 \\--------------+-------------- --------------+--------------  
 | | 安天府圖 | |  
 | | | |  
 | 紫 | 天府惟寅申二宮紫府同宮，餘 | 府 |  
 | | 宮俱各填協作對如紫居丑則府 | |  
 | 辰| 居卯矣。 | 酉|  
 \\-------------- --------------  
 | | | |  
 | | | |  
 | 紫 | | 府 |  
 | | | |  
 | 卯| | 戌|  
 \\--------------+-------------- --------------+--------------  
 | | | | |  
 | | | | |  
 | 紫府同宮 | 府 | 府 | 府 |  
 | | | | |  
 | 寅| 丑| 子| 亥|`},{id:"shangshi-tu",title:"殤使禍福緊慢圖",volume:2,blocks:[{type:"palace-chart",title:"殤使禍福緊慢圖",note:`殤使禍福緊慢圖歲限為災之局
凡歲限行到此星必死，若有救
始不妨也。
天殤 子辰卯午未宮禍緊
天使丑卯辰酉戌宮禍緊
殤使寅申巳亥禍緊`,palaces:{巳:`。如六
寅丙
一生
樣人`,午:`災，天
。若殤
身禍
合緊`,未:`天
殤
禍
緊`,申:`寅怕六
一者庚
樣，生
。如人`,辰:`天
殤
禍
緊`,酉:`天
使
禍
緊`,卯:`天
殤
禍
緊`,戌:`惡臨殺，天
。此，不使
宮太可禍
災歲見緊`,寅:`相二，不六
遇限怕宜甲
。太殤到生
歲使此人`,丑:`天
使
禍
緊`,子:`天
殤
禍
緊`,亥:`大限此
宜至斗
。此方
宮，`}}],raw:`\\-----------------------------------------------------------  
 \\-------------- -------------- -------------- --------------  
 | 。如六 | 災，天 | 天 | 寅怕六 |  
 | 寅丙 | 。若殤 | 殤 | 一者庚 |  
 | 一生 | 身禍 | 禍 | 樣，生 |  
 | 樣人 | 合緊 | 緊 | 。如人 |  
 | 巳| 午| 未| 申|  
 \\--------------+-------------- --------------+--------------  
 | 天 | 殤使禍福緊慢圖歲限為災之局 | 天 |  
 | 殤 | | 使 |  
 | 禍 | 凡歲限行到此星必死，若有救 | 禍 |  
 | 緊 | 始不妨也。 | 緊 |  
 | 辰| | 酉|  
 \\-------------- 天殤 子辰卯午未宮禍緊 --------------  
 | 天 | 天使 丑卯辰酉戌宮禍緊 | 惡臨殺，天 |  
 | 殤 | 殤使 寅申巳亥禍緊 | 。此，不使 |  
 | 禍 | | 宮太可禍 |  
 | 緊 | | 災歲見緊 |  
 | 卯| | 戌|  
 \\--------------+-------------- --------------+--------------  
 | 相二，不六 | 天 | 天 | 大限此 |  
 | 遇限怕宜甲 | 使 | 殤 | 宜至斗 |  
 | 。太殤到生 | 禍 | 禍 | 。此方 |  
 | 歲使此人 | 緊 | 緊 | 宮， |  
 | 寅| 丑| 子| 亥|`},{id:"luquan-tu",title:"祿權科忌圖",volume:2,blocks:[{type:"palace-chart",title:"祿權科忌圖",note:"",palaces:{巳:`忌。科
星 祿
兇 福
。 慢`,午:`忌地，科
星。祿星
兇 不得
。 得地`,未:`忌禍，科
無。怕權
用 殺福
。 為慢`,申:`地權。科
。忌 祿
不 得
得 地`,辰:`忌災，科
無，衝祿
用 殺福
。 為重`,酉:`地權地權
。忌。忌
不 不
得 得`,卯:`。忌殺科
星湊權
得合喜
地。怕`,戌:`。忌。厚科
星 怕權
重 殺福
重 衝祿`,寅:`。忌破慢科
星財，權
不。有福
宜 殺祿`,丑:`。忌。緊科
星 不權
不 怕福
忌 殺祿`,子:`。忌地祿
星。權
不 不
兇 得`,亥:`。忌
星
不
宜`}}],raw:`\\-------------- -------------- -------------- --------------  
 \\-------------- -------------- -------------- --------------  
 | 忌。科 | 忌地，科 | 忌禍，科 | 地權。科 |  
 | 星 祿 | 星。祿星 | 無。怕權 | 。忌 祿 |  
 | 兇 福 | 兇 不得 | 用 殺福 | 不 得 |  
 | 。 慢 | 。 得地 | 。 為慢 | 得 地 |  
 | 巳| 午| 未| 申|  
 \\--------------+-------------- --------------+--------------  
 | 忌災，科 | | 地權地權 |  
 | 無，衝祿 | 祿權科忌圖 | 。忌。忌 |  
 | 用 殺福 | | 不 不 |  
 | 。 為重 | | 得 得 |  
 | 辰| | 酉|  
 \\-------------- --------------  
 | 。忌殺科 | | 。忌。厚科 |  
 | 星湊權 | | 星 怕權 |  
 | 得合喜 | | 重 殺福 |  
 | 地。怕 | | 重 衝祿 |  
 | 卯| | 戌|  
 \\--------------+-------------- --------------+--------------  
 | 。忌破慢科 | 。忌。緊科 | 。忌地祿 | 。忌 |  
 | 星財，權 | 星 不權 | 星。權 | 星 |  
 | 不。有福 | 不 怕福 | 不 不 | 不 |  
 | 宜 殺祿 | 忌 殺祿 | 兇 得 | 宜 |  
 | 寅| 丑| 子| 亥|`},{id:"miaowang-tu",title:"十二宮廟旺落陷圖",volume:2,blocks:[{type:"table",title:"十二宮廟旺落陷圖",headers:["宮","廟","旺","得地","利益","平和","不得地","落陷"],rows:[["子","機府月相梁破祿","武同貪巨殺","昌曲","","紫廉","","日羊火鈴"],["丑","紫武府月貪相殺昌曲羊陀","梁破","火鈴","廉","","日同巨","機"],["寅","廉府巨相梁殺祿火鈴","紫日月","機武破","同","貪曲","","昌陀"],["卯","日巨梁祿","紫機殺曲","府","武貪昌火鈴","同廉","","月相破羊"],["辰","武府貪梁殺羊陀","日破","紫相昌曲","機廉","同","","月巨火鈴"],["巳","同昌曲祿","紫日巨","府相火鈴","","機武殺破","","廉月貪梁陀"],["午","紫機相梁破祿火鈴","日武府貪巨殺","","","廉","月","同昌曲羊"],["未","紫武府貪殺羊陀","梁破曲","日相","廉昌火鈴","","同月巨","機"],["申","廉巨相殺祿","紫同","機日武府破昌曲","月","貪","","梁陀火鈴"],["酉","巨昌曲祿","紫機府月殺","梁火鈴","武貪","日同廉","","相破羊"],["戌","武府貪梁殺羊陀火鈴","月破","紫相","機廉","同","日","巨昌曲"],["亥","同月祿","紫巨曲","府相","昌火鈴","機武殺破","","日廉貪梁陀"]]}],raw:`\\-------------- -------------- -------------- --------------  
 \\-------------------------------------------------------------------------  
 | |廟 |旺 |得地 |利益 |平和 |不得地 |落陷 |  
 \\---+---------+---------+---------+---------+---------+---------+---------  
 | |機府月相 |武同貪巨 |昌曲 | |紫廉 | |日羊火鈴 |  
 |子 |梁破祿 |殺 | | | | | |  
 | | | | | | | | |  
 \\---+---------+---------+---------+---------+---------+---------+---------  
 | |紫武府月 |梁破 |火鈴 |廉 | |日同巨 |機 |  
 |丑 |貪相殺昌 | | | | | | |  
 | |曲羊陀 | | | | | | |  
 \\---+---------+---------+---------+---------+---------+---------+---------  
 | |廉府巨相 |紫日月 |機武破 |同 |貪曲 | |昌陀 |  
 |寅 |梁殺祿火 | | | | | | |  
 | |鈴 | | | | | | |  
 \\---+---------+---------+---------+---------+---------+---------+---------  
 | |日巨梁祿 |紫機殺曲 |府 |武貪昌火 |同廉 | |月相破羊 |  
 |卯 | | | |鈴 | | | |  
 | | | | | | | | |  
 \\---+---------+---------+---------+---------+---------+---------+---------  
 | |武府貪梁 |日破 |紫相昌曲 |機廉 |同 | |月巨火鈴 |  
 |辰 |殺羊陀 | | | | | | |  
 | | | | | | | | |  
 \\---+---------+---------+---------+---------+---------+---------+---------  
 | |同昌曲祿 |紫日巨 |府相火鈴 | |機武殺破 | |廉月貪梁 |  
 |巳 | | | | | | |陀 |  
 | | | | | | | | |  
 \\---+---------+---------+---------+---------+---------+---------+---------  
 | |紫機相梁 |日武府貪 | | |廉 |月 |同昌曲羊 |  
 |午 |破祿火鈴 |巨殺 | | | | | |  
 | | | | | | | | |  
 \\---+---------+---------+---------+---------+---------+---------+---------  
 | |紫武府貪 |梁破曲 |日相 |廉昌火鈴 | |同月巨 |機 |  
 |未 |殺羊陀 | | | | | | |  
 | | | | | | | | |  
 \\---+---------+---------+---------+---------+---------+---------+---------  
 | |廉巨相殺 |紫同 |機日武府 |月 |貪 | |梁陀火鈴 |  
 |申 |祿 | |破昌曲 | | | | |  
 | | | | | | | | |  
 \\---+---------+---------+---------+---------+---------+---------+---------  
 | |巨昌曲祿 |紫機府月 |梁火鈴 |武貪 |日同廉 | |相破羊 |  
 |酉 | |殺 | | | | | |  
 | | | | | | | | |  
 \\---+---------+---------+---------+---------+---------+---------+---------  
 | |武府貪梁 |月破 |紫相 |機廉 |同 |日 |巨昌曲 |  
 |戌 |殺羊陀火 | | | | | | |  
 | |鈴 | | | | | | |  
 \\---+---------+---------+---------+---------+---------+---------+---------  
 | |同月祿 |紫巨曲 |府相 |昌火鈴 |機武殺破 | |日廉貪梁 |  
 |亥 | | | | | | |陀 |  
 | | | | | | | | |  
 \\-------------------------------------------------------------------------`},{id:"lun-minggong",title:"一 命宮",volume:2,blocks:[{type:"prose",text:"一 命宮"},{type:"prose",text:" 紫微土，南北斗化帝座，為官祿主。紫微面紫色或白青，腰背肥滿，為人忠厚老成，謙恭耿直，其威制七殺降火鈴。若與府相左右日月昌曲三合嘉會極急，食祿千鍾鉅富大貴。與祿存同奇特，不入廟無左右為孤君，亦清閒僧道。與破軍同為胥吏。與羊陀火鈴衝合吉多亦發財，常庶人吉。女命會吉清秀旺夫益子。"},{type:"prose",text:" 子宮喜丁己庚生人貴格，壬癸生人不耐久。"},{type:"prose",text:" 午宮入廟喜甲丁己生人財官格，丙戊生人成敗帶疾。"},{type:"prose",text:" 卯酉宮貪狼同度，乙辛甲庚生人貴不耐久。"},{type:"prose",text:" 寅申宮旺地與天府同度，甲庚丁己生人財官格。"},{type:"prose",text:" 巳亥宮旺地與七殺同度，乙戊生人財官格。"},{type:"prose",text:" 辰戌宮得地與天相同度，乙己甲庚癸生人財官格。"},{type:"prose",text:" 丑未宮入廟與破軍同度，乙己甲庚丁壬生人財官格。"},{type:"prose",text:" 紫微入男命吉凶訣："},{type:"prose",text:" 紫微天中第一星，命身相遇福財興，若逢相佐宮中會，富貴雙全播令名。"},{type:"prose",text:" 紫微守命最為良，二殺逢之壽不長，羊陀火鈴來相會，只好空門禮梵王。"},{type:"prose",text:" 紫微辰戌遇破軍，富而不貴有虛名，若逢貪狼在卯酉，為臣失義不相應。"},{type:"prose",text:" 火鈴羊陀來相會，七殺同宮多不貴，欺人孤獨更刑傷，若是空門為吉利。"},{type:"prose",text:" 紫微入女命吉凶訣："},{type:"prose",text:" 紫微女命守身宮，天府尊星同到宮，更得吉星同主照，金冠封贈福滔滔。"},{type:"prose",text:" 紫微女命守夫宮，三方吉拱便為榮，若逢殺破來衝破，衣祿盈餘淫巧容。"},{type:"prose",text:" 紫微入限吉凶訣："},{type:"prose",text:" 紫微垣內吉星臨，二限相逢福祿興，常人得遇多財富，官員逢之職位升。"},{type:"prose",text:" 紫微入限本為祥，只恐三方殺破狼，常庶逢之多不利，官員降謫有驚傷。"},{type:"prose",text:" 天機屬木，南斗化善星，為兄弟主。入廟身長肥胖，性急心慈，機謀多變。與天梁會合善談兵，乙丙丁生人遇之入廟化吉，得左右昌曲魁鉞太陰湊合，坐於巳酉丑亥卯未宮，權祿不小，文武皆大貴極品。加巨門羊陀火鈴忌，巳酉丑亥為下局，孤窮，縱有財官貴顯亦不耐久，只宜經商巧藝之輩耳。女命入廟性剛有權柄，持家助夫益子。天梁太陰巨門見羊陀火鈴忌衝合財帛，淫賤偏房娼婢，否則傷夫克子。"},{type:"prose",text:" 子午宮入廟，丁己癸甲庚壬生人財官格。"},{type:"prose",text:" 卯酉宮旺地與巨門同度，乙辛戊癸生人財官格。"},{type:"prose",text:" 寅申宮得地與太陰同度，丁己癸甲庚壬生人財官格。"},{type:"prose",text:" 巳亥宮和平，丙壬戊生人合局不耐久。"},{type:"prose",text:" 辰戌宮利益與天梁同度，壬庚丁生人為福。"},{type:"prose",text:" 丑未宮陷地，丙戊丁壬生人財官格，乙壬生人祿合格。"},{type:"prose",text:" 天機入男命吉凶訣："},{type:"prose",text:" 機月天梁合太陽，常人富足置田莊，官員得遇科權祿，職位高遷面帝王。"},{type:"prose",text:" 天機化忌落閒宮，縱有財官亦不榮，退盡家財兼壽夭，飄蓬僧道住山中。"},{type:"prose",text:" 天機入女命吉凶訣："},{type:"prose",text:" 天機女命吉星扶，作事操持過丈夫，權祿宮中逢守照，榮膺誥命貴無倫。"},{type:"prose",text:" 天機星與太陰同，女命逢之淫巧容，衣祿豐饒終不美，為娼為妾主淫風。"},{type:"prose",text:" 天機入限吉凶訣："},{type:"prose",text:" 男女二限值天機，科權祿逢大有為，出入經營多遇貴，發財發福少人知。"},{type:"prose",text:" 天機照限不安寧，家事紛紛外事多，更遇羊陀並巨暗，須知此歲入南柯。"},{type:"prose",text:" 太陽火，南北斗化貴，為官祿主。太陽入廟形貌堂堂，雄壯麵方圓滿，夜生陷日生廟旺，心慈面紫色，好濟施。若會左右昌曲魁鉞太陰祿存守照官祿，財官昭著，極品之論，文武皆宜之。身逢吉聚貴人門下客，否則公卿走卒，六庚生人命坐卯宮，第一廟所，六壬次之。命在亥，申生人下局，否則夭壽貧窮，雖發不耐久。廟旺終身富貴，陷地雖化權祿也兇，官祿亦不顯，先勤終懶，成敗不一，出外離祖可吉。與羊陀衝破又陷下局，橫發橫破不耐久，若經商巧藝，辛苦勞力而禍輕延生矣，加兇殺帶疾，化忌目疾。女命入廟旺夫益子，若陷地又見羊陀火鈴忌劫，貧賤殘疾，亦為貞潔之婦，僧道亦清潔。"},{type:"prose",text:" 子宮陷午宮旺，丁己生人財官格，壬丙戊生人悔吝。"},{type:"prose",text:" 卯宮廟酉宮和平，乙辛生人財官格，甲庚生人困。"},{type:"prose",text:" 寅宮旺申宮得地與巨門同度，丁己甲庚生人財官格。"},{type:"prose",text:" 巳宮旺財官格。亥宮陷逢殺孤寡貧窮。"},{type:"prose",text:" 辰宮旺財官格。戌宮陷反背孤寡。"},{type:"prose",text:" 丑宮陷未宮得地與太陰同度，加吉星財官格。"},{type:"prose",text:" 太陽入男命吉凶訣："},{type:"prose",text:" 命裡逢陽福壽濃，更兼權祿兩相逢，魁昌左右來相湊，富貴雙全比石崇。"},{type:"prose",text:" 日月丑未命中逢，三方無化福難豐，更有吉星終不美，若逢殺湊一生窮。"},{type:"prose",text:" 失陷太陽居反背，化忌逢之多蹇昧，又遭橫事破家財，命強化祿也無益。"},{type:"prose",text:" 太陽入女命吉凶訣："},{type:"prose",text:" 太陽正照婦人身，姿貌殊常性格貞，更得吉星同主照，金冠封贈作夫人。"},{type:"prose",text:" 太陽安命有奇能，陷地須防惡殺凌，作事沈吟多進退，辛勤度日免家傾。"},{type:"prose",text:" 太陽反照主心忙，衣祿平常壽不長，克過良人還克子，只宜蔭下作偏房。"},{type:"prose",text:" 太陽入限吉凶訣："},{type:"prose",text:" 二限偏宜見太陽，添財進業福非常，婚姻和合添嗣續，仕者高遷坐廟堂。"},{type:"prose",text:" 太陽守限有多般，陷地須防惡殺侵，加忌逢兇多阻滯，橫事破財家伶仃。"},{type:"prose",text:" 武曲金，北斗化財，為財帛主。武曲性剛果決，心直無毒，形小聲高而量大，有毛髮之異。最喜甲己生人福厚，入廟與昌曲同行，則出將入相，武職最旺，文人多學多能。會貪遇火化吉為上格，丙丁庚辛壬癸中格斷。與府相梁月祿馬會主貴，西北生人為福，東南生人平常。陷地巧藝之人及僧道，更遇廉貞破軍羊忌空劫衝破下局，破家敗祖。女命入廟權貴，陷地值殺孤單，刑夫克子兼且不正。"},{type:"prose",text:" 子午宮旺地，與天府同度，丁己庚生人財官格。"},{type:"prose",text:" 卯酉宮利益，與七殺同度，乙辛生人財官格。"},{type:"prose",text:" 寅申宮得地，與天相同度，丁己甲庚生人財官格。"},{type:"prose",text:" 巳亥宮和平，與破軍同度，壬戊生人財官格。"},{type:"prose",text:" 辰戌宮入廟，甲乙生人財官格。"},{type:"prose",text:" 丑未宮入廟，與貪狼同度，戊辛生人大貴財官格。"},{type:"prose",text:" 武曲入男命吉凶訣："},{type:"prose",text:" 武曲守命化為權，吉曜來臨福壽全，志氣崢嶸多出眾，超凡入聖向人前。"},{type:"prose",text:" 武曲之星守命宮，吉星守照始榮昌，若加耗殺來衝破，任是財多畢竟空。"},{type:"prose",text:" 武曲入女命吉凶訣："},{type:"prose",text:" 女人武曲命中逢，天府加之志氣雄，左右祿存相逢聚，富貴雙全美無窮。"},{type:"prose",text:" 將星一宿最剛強，女命逢之性異常，衣祿滔滔終有破，不然壽夭或兇亡。"},{type:"prose",text:" 武曲入限吉凶訣："},{type:"prose",text:" 大小二限逢武曲，若還入廟主財興，更加文昌臨左右，福祿雙全得稱心。"},{type:"prose",text:" 武曲臨限化權星，最利求謀事有成，更遇吉星同會合，文人名顯庶人興。"},{type:"prose",text:" 武曲之星主官非，公吏逢之刑杖來，常庶遇之還負債，官員值此有驚懷。"},{type:"prose",text:" 天同水，南斗化福，為福德主。天同入廟肥滿清明，仁慈耿直。與天梁左右嘉會丙生人於巳亥酉宮安命，財官雙美，福非小可，未宮次之，午宮陷，丁生人宜之。若在亥地庚生人下局，更遇羊陀火鈴忌衝合，則孤單破相目疾。"},{type:"prose",text:" 女命會吉星作命婦，旺夫益子極賢能，若居巳亥雖美而淫。"},{type:"prose",text:" 子宮旺地午宮陷，丁己癸辛生人財官格。"},{type:"prose",text:" 卯酉宮和平，乙丙辛生人財官格。"},{type:"prose",text:" 寅宮利申宮旺，與天梁同度，乙甲丁生人福厚。"},{type:"prose",text:" 巳亥宮入廟，壬丙戊生人財官格。"},{type:"prose",text:" 辰戌宮和平，丙丁生人利達，庚癸生人福不耐久。"},{type:"prose",text:" 丑未宮不得地，與巨門同度，乙壬甲辛庚生人財官格。"},{type:"prose",text:" 天同入男命吉凶訣："},{type:"prose",text:" 天同坐命性溫良，福祿悠悠壽更長，若是福人居廟旺，定教食祿譽傳揚。"},{type:"prose",text:" 天同若與吉星逢，性格聰明百事通，男子定然食天祿，女人樂守繡房中。"},{type:"prose",text:" 天同守命落閒宮，火鈴殺湊更為兇，天機梁月來相會，只好空門度歲終。"},{type:"prose",text:" 天同入女命吉凶訣："},{type:"prose",text:" 天同守命婦人身，性格聰明伶俐人，昌曲更來相會處，悠悠財祿自天伸。"},{type:"prose",text:" 天同若與太陰同，女命逢之淫巧容，衣祿雖豐終不美，偏房侍妾與人通。"},{type:"prose",text:" 天同入限吉凶訣："},{type:"prose",text:" 人生二限值天同，喜氣盈門萬事榮，財祿增添宜創造，從今家道得豐榮。"},{type:"prose",text:" 流年二限值天同，陷地須防惡殺衝，作事美中終不足，惟防官災及家傾。"},{type:"prose",text:" 廉貞屬火，北斗化次桃花殺、囚星，為官祿主。為人身長體壯，眼露神光，眉毛中大克骨亦露，性硬浮蕩，好忿爭。入廟武職貴，遇府相左右有科權祿存同宮富貴。逢昌曲七殺立武功。與擎羊同是非日有。破軍火鈴同，狗悻狼心。巳亥陷宮棄祖孤單，巧藝僧道軍旅之流。六甲生人命坐寅申者上格，丁己生人次之。六丙生人命坐子午卯酉，橫發橫破不耐久。六甲生人命坐四墓宮，財官格，若丙戊生人招非有成敗。若與昌曲忌星同在巳亥宮，六丙生人有禍，六甲生人亦不宜也。未申生人命居未申宮，化祿逢吉富貴必矣。若在諸宮逢羊陀火鈴化忌衝破，主殘疾。女命三合吉拱主封贈，雖惡殺衝破不為下局，若入廟逢化祿剛烈機巧，清秀，旺夫益子。僧道加吉拱，有師號，此星最喜天相同宮能化其惡。"},{type:"prose",text:" 子午宮和平，與天相同度，丁己甲生人財官格。"},{type:"prose",text:" 卯酉宮和平，與破軍同度，乙辛癸生人吉。"},{type:"prose",text:" 寅宮和平，甲庚己生人貴格。申宮入廟甲庚戊生人貴格，丙生人次之。"},{type:"prose",text:" 巳亥宮陷地，甲己丙戊生人福不耐久。"},{type:"prose",text:" 辰戌宮利益，與天府同度，甲庚生人財官格。"},{type:"prose",text:" 丑未宮利益，與七殺同度，加吉星財官格。"},{type:"prose",text:" 廉貞入男命吉凶訣："},{type:"prose",text:" 廉貞守命亦非常，賦性巍巍志氣強，格故鼎新官大貴，為官清顯姓名香。"},{type:"prose",text:" 廉貞坐命落閒宮，貪破羊火忌相逢，縱有財官也不美，平生何以得從容。"},{type:"prose",text:" 廉貞落陷入閒宮，吉曜相逢也有兇，腰足災殘難脫厄，更加惡殺命該終。"},{type:"prose",text:" 廉貞入女命吉凶訣："},{type:"prose",text:" 女人身命值廉貞，內政清廉格局新，諸吉拱照無殺破，定教封贈在青春。"},{type:"prose",text:" 廉貞貪破曲相逢，陀火交加極賤庸，定主刑夫並克子，只好偏房娼婢容。"},{type:"prose",text:" 廉貞入限吉凶訣："},{type:"prose",text:" 廉貞入限旺宮臨，喜逢吉曜福駢臻，財物自然多蓄積，任人得意位高升。"},{type:"prose",text:" 大小二限遇廉貞，更有天刑忌刃侵，膿血刑災難脫逃，破軍貪殺赴幽冥。"},{type:"prose",text:" 天府土，南斗化令星，為財帛主。為人面方圓，容紅齒白，心性溫和，聰明俊秀，博學機變，能解一切災厄。喜紫微昌曲左右祿存魁鉞權祿，居廟旺必中高第。羊陀火鈴會合好詐。命坐寅午戌亥卯未，六己生人貴格。若居巳酉丑宮，乙丙戊辛生人，文武財官格，如亥卯未辰酉宮安命者，甲庚生人不貴，先大後小，有始無終。女命清白機巧，旺夫益子，遇紫微左右同垣極美，作命婦論。"},{type:"prose",text:" 子午宮與武曲同度，丁己癸生人為福，財官格。"},{type:"prose",text:" 卯宮入廟，酉宮旺地，乙丙辛生人財官格。"},{type:"prose",text:" 寅宮入廟，申宮得地，與紫微同度，丁己生人財官格。"},{type:"prose",text:" 巳亥宮得地，乙丙戊辛生人財官格。"},{type:"prose",text:" 辰戌宮入廟，與廉貞同度，甲庚壬生人財官格。"},{type:"prose",text:" 丑未宮入廟加吉星財官格。"},{type:"prose",text:" 天府入男命吉凶訣："},{type:"prose",text:" 天府之星守命宮，加之權祿喜相逢，魁昌左右來相會，附鳳攀龍上九重。"},{type:"prose",text:" 火鈴羊陀三方會，為人奸詐多勞碌，空劫同垣不為佳，只宜空門享福人。"},{type:"prose",text:" 天府入女命吉凶訣："},{type:"prose",text:" 女人天府命身宮，性格聰明花樣容，更得紫微三合照，金冠霞佩受皇封。"},{type:"prose",text:" 火鈴羊陀來衝會，性格庸常多蹇昧，六親相背子難招，只好空門為尼計。"},{type:"prose",text:" 天府入限吉凶訣："},{type:"prose",text:" 限臨天府能司祿，士庶逢之多發福，添財進喜永無災，且也潤身也潤屋。"},{type:"prose",text:" 南斗尊星入限來，所為謀事稱心懷，若還又化科權祿，指日欣然展大材。"},{type:"prose",text:" 太陰水，南北斗化富，為母宿，又為妻星，為田宅主。太陰居命面方圓，心性溫和，清秀耿直聰明，花酒文章，博學橫立功名。身若逢之則隨娘繼拜，陷地化吉科權祿，反以兇論，出外離祖則吉。更遇羊陀火鈴，酒色邪淫，下賤夭折。最喜六壬戊生人，在亥卯未宮立命合局，乙庚戊生人居亥宮立命上格，六丁生人次之，六乙生人合格，六丁六戊生人，化科權祿吉。女命會太陽入廟，封贈夫人，若陷地傷夫克子，妾妓之流。"},{type:"prose",text:" 子丑寅宮入廟，丁戊生人財官格。"},{type:"prose",text:" 卯辰巳宮陷地，乙壬戊生人孤寡不耐久。"},{type:"prose",text:" 午宮陷未申宮利益，丁庚甲入生人財官格。"},{type:"prose",text:" 酉戌亥宮入廟，丙丁生人財官格，吉星眾大貴。"},{type:"prose",text:" 太陰入男命吉凶訣："},{type:"prose",text:" 太陰原是水之精，身命逢之福自生，酉戌亥垣為得地，光輝揚顯姓名亨。"},{type:"prose",text:" 太陰入廟化權星，清秀聰明貴無倫，稟性溫良恭儉讓，為官清顯列朝綱。"},{type:"prose",text:" 寅上機昌曲月逢，縱然吉拱不豐隆，男為僕從女為妓，加殺衝殺到老窮。"},{type:"prose",text:" 太陰陷地惡星中，陀火相逢定困窮，此命只宜僧與道，空門出入得從容。"},{type:"prose",text:" 太陰入女命吉凶訣："},{type:"prose",text:" 月會同陽在命宮，三方吉拱必盈豐，不見兇殺來衝會，富貴雙全保到終。"},{type:"prose",text:" 太陰陷在命和身，不喜三方惡殺侵，克害夫君又夭壽，更虛血氣少精神。"},{type:"prose",text:" 太陰入限吉凶訣："},{type:"prose",text:" 太陰星曜限中逢，財祿豐盈百事通，嫁娶迎親添嗣續，常人得此旺門風。"},{type:"prose",text:" 二限偏宜見太陰，添屋進財福非輕，火鈴若也來相湊，未免官災病患臨。"},{type:"prose",text:" 限至太陰居反背，不喜羊陀三方會，火鈴二限最為兇，若不官災多破悔。"},{type:"prose",text:" 貪狼屬木，化桃花殺。貪狼入廟長聳肥胖，陷宮形小聲高而量大，性格不常，心多計較，作事急速不耐靜，作巧反拙，好賭博花酒。陷地加羊陀化忌，則孤貧破相殘疾，斑痕疤痣。入廟多居武藝之中，遇火鈴喜戊己生人合局，不喜六癸生人，不耐久長。女命平常，若居陷地傷夫克子且不正，大多為娼婢，僧道亦不清潔。"},{type:"prose",text:" 子午宮旺地，丁己生人福厚，丙戊庚生寅申人下局。"},{type:"prose",text:" 卯酉宮利益，與紫微同度，見火星貴，乙辛己生人宜之，財官格。"},{type:"prose",text:" 寅申宮和平，庚生人財官格。"},{type:"prose",text:" 巳亥宮陷地，與廉貞同度，丙戊壬生人為福不耐久。"},{type:"prose",text:" 辰戌宮入廟，戊己生人財官格。"},{type:"prose",text:" 丑未宮入廟，與武曲同度，見火星，戊己庚生人貴格。"},{type:"prose",text:" 貪狼入男命吉凶訣："},{type:"prose",text:" 四墓宮中福氣濃，提兵指日立邊功，火星拱會誠為貴，名震諸夷定有封。"},{type:"prose",text:" 貪狼守命擎羊逢，陀殺交加必困窮，武破廉貞同殺劫，百藝防身度歲終。"},{type:"prose",text:" 四墓貪狼廟旺宮，加臨左右富財翁，若然再化科權祿，文武才能顯大功。"},{type:"prose",text:" 貪狼入女命吉凶訣："},{type:"prose",text:" 四墓宮中多吉利，更逢左右方為貴，祿財豐富旺夫君，性格剛強多志氣。"},{type:"prose",text:" 貪狼陷地女非祥，衣食雖豐也不良，克害良人並男女，又教衾枕守孤孀。"},{type:"prose",text:" 貪狼入限吉凶訣："},{type:"prose",text:" 北斗貪狼入限來，若還入廟事和諧，科權仕路多成就，必主當年發橫財。"},{type:"prose",text:" 貪狼主限四墓臨，更喜人生四墓生，若見火星多橫發，自然富貴冠鄉鄰。"},{type:"prose",text:" 限至貪狼陷不良，只宜節慾息災傷，賭盪風流去財寶，吉曜三方可免災。"},{type:"prose",text:" 女限貪狼事不良，宜懷六甲免災殃，若無吉曜來相會，須知一命入黃泉。"},{type:"prose",text:" 巨門水，北斗化暗，主是非。入廟身長肥胖敦厚清秀，不入廟五短瘦小，作事進退，多疑且多學少精，與人寡合，多是多非，奔波勞碌。喜左右祿存六癸六辛生人，命坐子卯合局。六庚六丁生人，辰戌安命卻不富貴。子午宮安命，丙戊生人孤寡夭折。六甲生人居卯宮雖入廟，與擎羊同度破局平常論。身命居子午宮為石中隱玉格，更會科權祿，終身福厚，會羊陀火鈴化忌，若不夭折，男盜女娼。"},{type:"prose",text:" 女命入廟，六癸六辛生人享福，陷地傷夫克子，丁人遇極淫，此星在女命多有瑕玷。"},{type:"prose",text:" 子午宮旺地，丁己癸辛生人福厚，丙戊生人主困。"},{type:"prose",text:" 卯酉宮入廟，與天機同度，乙辛己丙生人財官格，丁戊生人有成敗。"},{type:"prose",text:" 寅申宮入廟，與太陽同度，庚癸辛生人財官格。"},{type:"prose",text:" 巳亥旺宮單守，癸辛丙生人財官格。"},{type:"prose",text:" 辰戌宮和平，癸辛生人主貴，丁生人困。"},{type:"prose",text:" 丑未宮不得地，癸辛丙生人財官格。"},{type:"prose",text:" 巨門入男命吉凶訣："},{type:"prose",text:" 巨門子午二宮逢，局中得遇以為榮，三合化吉科權祿，官高極品衣紫袍。"},{type:"prose",text:" 此星化暗不宜逢，更會殺星愈肆兇，唇齒有傷兼性猛，若然入廟可和平。"},{type:"prose",text:" 巨門守命遇擎羊，火鈴逢之事不祥，為人性急多顛倒，百事茫茫亂主張。"},{type:"prose",text:" 巨門入女命吉凶訣："},{type:"prose",text:" 巨門旺地多生吉，左右加臨壽更長，女人得此誠為貴，簾卷珍珠坐繡房。"},{type:"prose",text:" 巨門命陷主淫娼，侍女偏房免災殃，相貌清奇多近寵，不然壽夭或兇亡。"},{type:"prose",text:" 巨門入限吉凶訣："},{type:"prose",text:" 巨門主限化權星，最喜求謀萬事成，雖有官災並口舌，逢凶化吉得安寧。"},{type:"prose",text:" 巨門入限動人愁，若遇喪門事不周，士庶逢之多惹訟，居官失職有丁憂。"},{type:"prose",text:" 巨門限陷最乖張，無事官非鬧一場，哭泣喪禍終不免，破財嘔氣受淒涼。"},{type:"prose",text:" 天相水，南斗化印，為官祿主。為人相貌敦厚持重，清白好酒食，衣祿豐足。紫府左右昌曲日月嘉會，財官雙美，位至三公。與武破羊陀同行則為巧藝，更加火鈴巨機，則傷刑不善終，天相又能化廉貞之惡。"},{type:"prose",text:" 女命入廟性溫和，衣祿遂心，僧道屯吉。"},{type:"prose",text:" 子午宮入廟，與廉貞同度，丁己癸甲生人財官格。"},{type:"prose",text:" 卯酉宮陷地，乙辛生人吉。甲庚生人主困。"},{type:"prose",text:" 辰戌宮得地，與紫微同度，財官格。"},{type:"prose",text:" 丑宮入廟未宮得地，加吉星財官格。"},{type:"prose",text:" 寅申宮入廟，與武曲同度，丁甲庚生人財官格。"},{type:"prose",text:" 巳亥宮得地，丙戊壬生人為福。"},{type:"prose",text:" 天相入男命吉凶訣："},{type:"prose",text:" 天相星辰貴等倫，照守身命喜無垠，為官必主居元宰，三合相逢福不輕。"},{type:"prose",text:" 天相吉星為命主，必定斯人多克己，財官祿主旺家資，權壓當時誰不美。"},{type:"prose",text:" 天相之星武破同，羊陀火鈴更為兇，或作技術經商輩，若在空門享福隆。"},{type:"prose",text:" 天相入女命吉凶訣："},{type:"prose",text:" 女人之命天相星，性格聰明百事寧，衣祿豐盈財帛足，旺夫貴子顯門庭。"},{type:"prose",text:" 破軍七殺來相會，羊陀火鈴最所忌，孤刑剋害六親無，只可偏房與侍婢。"},{type:"prose",text:" 天相入限吉凶訣："},{type:"prose",text:" 天相之星敢主財，照臨二限悉無災，動作謀為皆遂意，悠遊享福自然來。"},{type:"prose",text:" 天相之星有幾般，三方不喜惡星纏，羊陀空劫重相會，口舌官災禍亦連。"},{type:"prose",text:" 限臨天相遇擎羊，作禍興殃不可當，更有火鈴諸殺湊，須教一命入泉鄉。"},{type:"prose",text:" 天梁屬土，南斗化蔭，主壽星。厚重清秀，聰明耿直，心無私曲好濟施，有壽。與天機同行居翰苑，善談兵。左右昌曲嘉會，則出將入相。要入廟方富貴，陷地遇火羊破局，則下賤孤寡夭折。逢天機耗殺清閒，僧道受制誥，六壬生人，亥卯未宮安命者，富貴雙全。"},{type:"prose",text:" 女命有男子之志，入廟富貴，陷地加殺傷夫克子又淫賤。"},{type:"prose",text:" 子午宮入廟，丁己癸生人福厚財格。"},{type:"prose",text:" 卯宮入廟酉宮得地，與太陽同度，乙壬辛生人財官格。"},{type:"prose",text:" 辰戌宮入廟，與天機同度，丁己壬庚生人財官格。"},{type:"prose",text:" 丑未宮入廟，壬乙生人財官格，六戊生人大貴。"},{type:"prose",text:" 寅宮入廟申宮陷地，與天同同度，丁己甲庚生人財官格。"},{type:"prose",text:" 天梁入男命吉凶訣："},{type:"prose",text:" 天梁之曜數中強，形神穩重性溫良，左右昌曲來會合，管教富貴列朝綱。"},{type:"prose",text:" 天梁星宿壽星逢，機日文昌左右同，子午寅申為入廟，官資清顯至三公。"},{type:"prose",text:" 天梁遇火落閒宮，陀殺重逢更是兇，孤刑帶疾破家財，空門技藝可營工。"},{type:"prose",text:" 辰戌機梁非小補，破軍卯酉不為良，女人得此為孤獨，剋夫刑子守空房。"},{type:"prose",text:" 天梁入限吉凶訣："},{type:"prose",text:" 天梁化蔭吉星和，二限逢之福必多，若加吉曜逢廟地，貴極一品輔山河。"},{type:"prose",text:" 限至天梁最是良，猶如秋菊吐馨香，加官進職迎新祿，常庶逢之也足糧。"},{type:"prose",text:" 天梁守限壽延長，作事求謀更吉昌，若遇火鈴羊陀合，須防一厄與家亡。"},{type:"prose",text:" 七殺火金，南斗將星，遇帝為權，其餘諸宮皆殺。為人目大性急，喜怒無常，作事進退沈吟。廟旺有謀略，遇紫微掌生殺之權，武職最利。加左右昌曲魁鉞會合，位至極品。落空亡無威力。遇兇曜於生鄉，定為屠宰，會刑囚傷克。安命寅亥子午宮，丁己生人合局，不喜壬癸午戌生人，六丙六戊生人中平。辰宮安命六庚生人吉利，羊陀火鈴衝會，又在陷地殘疾下局，雖富貴不耐久。女人入廟加權祿，旺夫益子，陷地遇羊火，則以傷克下賤論。"},{type:"prose",text:" 子午宮旺地，丁己甲生人財官格。"},{type:"prose",text:" 卯酉宮旺地，與武曲同度，乙辛生人福厚財官格。"},{type:"prose",text:" 辰戌宮入廟，加吉星財官格。"},{type:"prose",text:" 丑未宮入廟，與廉貞同度，加吉星財官格。"},{type:"prose",text:" 寅申宮入廟，甲庚丁己生人財官格。"},{type:"prose",text:" 巳亥宮和平，與紫微同度，丙戊壬生人財官格。"},{type:"prose",text:" 七殺入男命吉凶訣："},{type:"prose",text:" 七殺寅申子午宮，四夷拱手服英雄，魁鉞左右文昌會，科祿名高食萬鍾。"},{type:"prose",text:" 殺居陷地不堪言，兇禍猶如伴虎眠，若是殺強無制伏，少年惡死到黃泉。"},{type:"prose",text:" 七殺居命落閒宮，巨宿羊陀更照衝，若不傷肢必損骨，空門僧道可興隆。"},{type:"prose",text:" 七殺入女命吉凶訣："},{type:"prose",text:" 女命愁逢七殺星，作事果斷又聰明，氣高志大無男女，不免刑夫歷苦辛。"},{type:"prose",text:" 七殺孤星貪宿逢，火陀湊合非為貴，女人得此性不良，只好偏房為使婢。"},{type:"prose",text:" 七殺入限吉凶訣："},{type:"prose",text:" 二限雖然逢七殺，從容和緩家道發，對宮天府正來朝，仕宦逢之名顯達。"},{type:"prose",text:" 七殺之星主啾唧，作事艱難俱有失，更加惡曜在限中，主有官災多病疾。"},{type:"prose",text:" 破軍水，北斗化耗星，主妻子、奴僕。體型五短背厚眉寬腰斜，性剛寡合，好爭強。棄祖發福，好博禽捕獵。喜紫微有威權，天梁天府能制其惡，與文曲同度一生貧士，更入水鄉殘疾，雖富不久、夭折。六癸甲生人，坐子午宮者位至三公。若丙戊寅生人命坐子午宮，則孤單殘疾，雖富貴不久、夭折。丙戊生人，命坐辰戌丑未，與紫微同垣或對居，富貴不小。遇廉貞羊陀火鈴於陷宮，爭斗疾病。僧道宜之，女命"},{type:"prose",text:" 子午入廟，陷地加殺則殘疾下賤淫慾。"},{type:"prose",text:" 子午宮入廟，丁己癸生人福厚，丙戊生人主困。"},{type:"prose",text:" 卯酉宮陷地與廉貞同度，乙辛癸生人利，甲庚丙生人不耐久。"},{type:"prose",text:" 辰戌宮旺地，甲癸生人為福。"},{type:"prose",text:" 丑未宮旺地與紫微同度，丙戊乙生人財官格。"},{type:"prose",text:" 寅申宮得地，甲庚丁己生人財官格。"},{type:"prose",text:" 巳亥宮與武曲同度，戊生人福厚。"},{type:"prose",text:" 破軍入男命吉凶訣："},{type:"prose",text:" 破軍七殺與貪狼，入廟英雄不可當，關羽命逢為上將，庶人富足置田莊。"},{type:"prose",text:" 破軍子午會文昌，左右雙雙入廟廊，財帛豐盈多慷慨，祿官昭著佐君王。"},{type:"prose",text:" 破軍一曜最難當，化祿科權喜異常，若還陷地仍加殺，破祖離宗出遠鄉。"},{type:"prose",text:" 破軍不喜在身宮，廉貞火羊陀會兇，不見傷殘定壽夭，只宜僧道度平生。"},{type:"prose",text:" 破軍入女命吉凶訣："},{type:"prose",text:" 破軍子午為入廟，女命逢之福壽昌，性格有能偏出眾，旺夫益子姓名香。"},{type:"prose",text:" 破軍女命不宜逢，擎羊加陷便為兇，克害良人非一次，須教悲哭度朝昏。"},{type:"prose",text:" 破軍入限吉凶訣："},{type:"prose",text:" 破軍入限要推詳，廟地方知福祿昌，更遇文昌同魁鉞，限臨此地極風光。"},{type:"prose",text:" 破軍入限細推詳，廟地無兇少損傷，殺湊破軍防破耗，更防妻子自身亡。"},{type:"prose",text:" 破軍主限多濃血，失脫乖張不可說，更值女人主孝服，血光產難災殃節。"},{type:"prose",text:" 文昌金，南北斗，乃文魁星，眉目清秀分明，機巧多學多能，會陽梁祿存財官昭卓，富貴聲揚，陷地先難後易，加擎羊火鈴巧藝之人，陷地獨守加殺帶疾，亦能延壽，旺有暗痣，陷有斑痕。女命入廟平常，加吉曜富貴，陷地遇羊火巨機殺忌，則下賤淫娼使婢。"},{type:"prose",text:" 寅午戌宮得地，丁己甲庚生人財官格。"},{type:"prose",text:" 申子辰宮得地，癸甲庚生人貴格。"},{type:"prose",text:" 巳酉丑宮入廟，乙戊辛生人大貴。"},{type:"prose",text:" 亥卯未宮利益，乙戊生人財官格。"},{type:"prose",text:" 文昌入男命吉凶訣："},{type:"prose",text:" 文昌坐命旺宮臨，志大財高抵萬金，文藝精華心壯大，須教平步上青雲。"},{type:"prose",text:" 文昌守命亦非常，限不夭傷福壽長，只怕限衝逢火忌，須教夭折帶刑傷。"},{type:"prose",text:" 文昌入女命吉凶訣："},{type:"prose",text:" 女人身命值文昌，秀麗清奇福更長，紫府對沖三合照，管教富貴著霞裳。"},{type:"prose",text:" 文昌女命遇廉貞，陷地擎羊火忌星，若不為娼終壽夭，偏房猶得主人輕。"},{type:"prose",text:" 文昌入限吉凶訣："},{type:"prose",text:" 文昌之星最為清，斗數之中第二星，若遇太歲與二限，士人值此佔科名。"},{type:"prose",text:" 限遇文昌不得地，更有羊陀火鈴忌，官非口舌破家財，未免刑傷多晦滯。"},{type:"prose",text:" 文曲水，北斗，司科甲星。與文昌逢吉主科第，單居身命更逢惡殺湊合，無名便佞之人，喜六甲生人居巳酉丑宮，侯伯官貴。與貪狼火星同垣三合者，將相之命。武貞羊殺破狼，居陷地則喪命夭折，若與同梁武曲會旺宮，聰明果決，如羊陀火鈴衝破，只宜空門。旺有暗痣，陷有斑痕。女命入廟清秀，陷地與巨火忌機會，及貪狼破軍同垣衝破，則孤寒下賤淫慾論。"},{type:"prose",text:" 寅宮和平，午戌陷地，甲庚生人財官格。"},{type:"prose",text:" 申子辰宮得地，丁癸辛生人福厚。"},{type:"prose",text:" 巳酉丑宮入廟，辛生人遇紫微同宮大富貴格。"},{type:"prose",text:" 亥卯未宮旺地，丙壬戊生人財官格。"},{type:"prose",text:" 文曲入男命吉凶訣："},{type:"prose",text:" 文曲守命最為良，相貌堂堂志氣昂，士庶逢之應福厚，丈夫得此受金章。"},{type:"prose",text:" 文曲守垣逢火忌，不喜三方惡殺聚，此人雖巧口能言，惟在空門可遇貴。"},{type:"prose",text:" 文曲入女命吉凶訣："},{type:"prose",text:" 女人命裡逢文曲，相貌清奇多有福，聰明伶俐不尋常，有殺偏房也淫慾。"},{type:"prose",text:" 文曲入限吉凶訣："},{type:"prose",text:" 二限相逢文曲星，士庶斯年鬚髮福，更添左右會天同，財祿滔滔為上局。"},{type:"prose",text:" 文曲限遇廉陀羊，陷地非災惹禍殃，更兼命裡星辰弱，須知此歲入泉鄉。"},{type:"prose",text:" 左輔土，南北斗善星，佐帝令尤佳，若府相機昌貪狼武曲會，再加右弼同垣，富貴不小，財官雙美，若見羊陀火忌中局，旺宮有暗痣，三殺如陷地加巨門七殺天機下局。女命會吉星旺夫益子，僧道清潔。"},{type:"prose",text:" 左輔入男命吉凶訣："},{type:"prose",text:" 左輔尊星能降福，風流敦厚通今古，紫府祿權貪武會，文官武職多清貴。"},{type:"prose",text:" 羊陀火鈴三方照，縱有財官非吉兆，廉貞破巨更來衝，若不傷殘終是夭。"},{type:"prose",text:" 左輔入女命吉凶訣："},{type:"prose",text:" 女命左輔主賢豪，能幹能為又氣高，更與紫微天府合，金冠封贈過滔滔。"},{type:"prose",text:" 火陀相會不為良，七殺破軍壽不長，只可偏房方富足，聰明得寵過時光。"},{type:"prose",text:" 左輔入限吉凶訣："},{type:"prose",text:" 左輔限行福氣深，常人富足累千金，官員更得科權照，職位高遷佐聖君"},{type:"prose",text:" 左輔之星入限來，不宜殺湊主悲哀，火鈴空劫來相湊，財破人亡事事哀。"},{type:"prose",text:" 右弼水，南北斗善星，佐帝令。入廟厚重清秀耿直，心懷寬恕好施濟，有機謀。諸宮 降福，居四墓尤佳，若會紫微天府天相昌曲，終身福厚。若與諸殺同纏及羊陀火鈴忌衝合者僅主福薄亦不為兇，惟有斑痕暗痣或傷殘帶疾。女命會吉星旺夫益子，僧道清潔。"},{type:"prose",text:" 右弼入男命吉凶訣："},{type:"prose",text:" 右弼天機上宰星，命逢重厚最聰明，若無火忌羊陀會，加吉財官冠世英。"},{type:"prose",text:" 右弼尊星入命宮，若還殺湊主常庸，羊陀空劫三方湊，須知帶疾免災兇。"},{type:"prose",text:" 右弼入限吉凶訣："},{type:"prose",text:" 右弼入限最為榮，入財興旺必多能，官員遷擢僧道喜，士子攻書必顯名。"},{type:"prose",text:" 右弼主限遇兇星，掃盡家資百不成，士遭傷敗奴欺主，更教家破主伶仃。"},{type:"prose",text:" 祿存土，北斗司爵貴星。老成持重心慈耿直，有機變多學多能，命遇主富貴，文人有聲名，諸宮降福消災，逢諸殺棄祖重拜父母。喜紫府相同梁日月及武曲同宮為妙，單守命身，看財之奴。怕空劫火鈴衝照則為下局，巧藝多精之人，陷地減福。在命宮官祿田宅為福。女命清白秀麗，有男子之志。"},{type:"prose",text:" 祿存入男命吉凶訣："},{type:"prose",text:" 人生若遇祿存星，性格剛強百事成，官員遷兮昌曲會，滔滔衣祿顯門庭。"},{type:"prose",text:" 祿存守命莫逢衝，陀火交加福不全，天機空劫忌相會，空門僧道得清閒。"},{type:"prose",text:" 祿存入女命吉凶訣："},{type:"prose",text:" 女命若遇祿存星，紫府加臨百事寧，更遇同貞相湊合，必然註定是夫人。"},{type:"prose",text:" 祿存入命陷宮來，空劫火鈴必為災，若無吉曜來相湊，夫妻分離永不諧。"},{type:"prose",text:" 祿存入限吉凶訣："},{type:"prose",text:" 祿存主限最為良，作事求謀盡吉祥，仕吏逢之多轉職，庶人遇此足錢糧。"},{type:"prose",text:" 祿存主限壽延長，作事營謀萬事昌，更有科權兼左右，定知此限富倉廂。"},{type:"prose",text:" 祿存祿主多富足，婚姻嫁娶添嗣續，更兼科祿又同宮，必主榮華享厚福。"},{type:"prose",text:" 祿存交馳限步逢，最怕劫空相遇同，更兼太歲惡星衝，限倒其年入墓中。"},{type:"prose",text:" 魁鉞火，即天乙貴人，若人身命逢之，更得諸吉加臨，三合吉星守照，必少年登科及第，逢兇忌不為文章秀士，可為弟子之師，限步逢之必主清高，名成利就。大抵此星若身命逢之，雖不富貴亦主聰明，為人秀麗清白，有威可畏，有儀可象。女命逢吉多為宰相婦，逢兇殺也主富貴。"},{type:"prose",text:" 魁鉞入命限吉凶訣："},{type:"prose",text:" 魁鉞命身限遇昌，常人得此足錢糧，官員遇此高遷擢，必定當年面帝王。"},{type:"prose",text:" 擎羊火金，北斗浮星，化氣為刑。入廟權貴，身旺形粗破相，剛強果決，好勇斗狠，機謀狡詐，橫立功名，能奪君子之權，喜西北生人為福，宜命在四墓宮廟地，亦喜四墓生人，會日月男克妻而女剋夫，會昌曲左右有暗痣斑痕，居卯酉陷宮作禍興殃，傷殘帶疾目眇，六甲六戊寅申生人守命，主其人孤單，不守祖業，二姓延生，巧藝為活，廉貞火巨忌星陷地同宮，則帶暗疾，或面手足有傷殘，且不善終，一生多招刑禍，否則為僧道。女命入廟權貴，陷地傷夫克子，孤刑破相淫蕩。"},{type:"prose",text:" 辰戌丑未入廟，亦宜辰戌丑未生人財官格。"},{type:"prose",text:" 子午卯酉陷地。"},{type:"prose",text:" 擎羊入男命吉凶訣："},{type:"prose",text:" 祿前一位安擎羊，上將逢之福祿加，更得貴人相守照，兵權萬里壯皇家。"},{type:"prose",text:" 擎羊守命性剛強，四墓生人福壽長，若得紫府來會合，須知財谷富倉箱。"},{type:"prose",text:" 擎羊一曜落閒宮，陀火衝兮便是兇，更若身命同劫殺，定然夭絕在途中。"},{type:"prose",text:" 擎羊入女命吉凶訣："},{type:"prose",text:" 北斗浮星女命逢，火機巨忌必常庸，三方兇殺兼來湊，不夭終須浪滾濤。"},{type:"prose",text:" 擎羊入男命吉凶訣："},{type:"prose",text:" 擎羊守限細推詳，四墓生人免災殃，若遇紫微昌府會，財官顯達福悠長。"},{type:"prose",text:" 天羅地網遇擎羊，二限衝兮禍患戕，若是命中主星弱，定教一疾夢黃泉。"},{type:"prose",text:" 擎羊加殺最為兇，二限休教落陷逢，克子刑妻賣田莊，徙流貶配去從戎。"},{type:"prose",text:" 陀羅火金，北斗浮星，化氣為忌。入廟身雄形粗，賦性剛強，破相氣高，橫發橫破，不守祖業，為人飄蓬，不作本處居民，作事退悔，有始無終。喜西北生人為福，及四墓生人又坐四墓宮，加吉星眾者為福，會日月忌宿男克妻而女剋夫，加忌且損目，會昌曲左右有暗痣斑痕，若無正星而獨守命者，孤單棄祖，入贅二姓延生，巧藝為活。若居陷地逢巨殺，必傷妻克子，背六親且傷殘帶疾。僧道吉利，女命內狠外虛，凌夫克子，六親不和又無廉恥。"},{type:"prose",text:" 辰戌丑未入廟，亦宜辰戌丑未生人利益。"},{type:"prose",text:" 寅申巳亥陷地。"},{type:"prose",text:" 陀羅入男命吉凶訣："},{type:"prose",text:" 陀羅命內坐中存，更喜人生四墓中，再得紫微昌府合，財祿豐盈遠播名。"},{type:"prose",text:" 陀羅在陷不堪聞，口舌官非一世侵，財散人離人孤獨，所為所作不如心。"},{type:"prose",text:" 陀羅入女命吉凶訣："},{type:"prose",text:" 陀羅一曜女命逢，遇吉加臨淫蕩容，兇殺三方相照破，須防相別主人翁。"},{type:"prose",text:" 陀羅入限吉凶訣："},{type:"prose",text:" 限遇陀羅事亦多，必然忍耐要謙和，若無吉曜同相會，須教一夢入南柯。"},{type:"prose",text:" 夾身夾命有陀羊，火鈴空劫又來傷，天祿不逢生旺地，刑妻克子不為良。"},{type:"prose",text:" 火星，南斗浮星。性剛強出眾，唇齒四肢有傷，毛髮有異，形容各別。諸宮不美，惟貪狼廟旺同度，指日立邊功，為財官格，利東南生人不利西北生人，及喜寅卯巳午生人為禍較輕，更與擎羊同垣，則襁褓災厄，孤克下局，只宜過房由外家寄養，或重拜父母方可。女命心毒內狠外虛狡詐，凌夫克子，不守婦道，多是非，淫慾下賤。"},{type:"prose",text:" 寅午戌人宜，申子辰人陷災吝困頓，巳酉丑人得地吉，亥卯未人利益，吉多發福。"},{type:"prose",text:" 火星入限吉凶訣："},{type:"prose",text:" 火星得地限宮逢，喜氣盈門百事通，仕宦逢之皆發福，常人得此財豐隆。"},{type:"prose",text:" 火星一宿最乖張，無事官災鬧一場，克害六親應不免，破財艱苦免恓惶。"},{type:"prose",text:" 鈴星火，南斗浮星。性毒形神破相，膽大出眾，宜寅午戌人權貴，亦利東南生人限行福厚，西北生人限行成敗，雖富貴亦不耐久，入廟遇貪狼武曲，威鎮邊夷，更會紫府左右不貴即富，如居陷地夭折破相延壽，或離祖重拜父母。女命性剛背六親，傷夫克子，遇吉始能豐足。"},{type:"prose",text:" 鈴星入限吉凶訣："},{type:"prose",text:" 限至鈴星事若何，貪狼相遇福還多，更加入廟逢諸吉，富貴聲揚處處歌。"},{type:"prose",text:" 鈴星一宿不可當，守臨二限必癲狂，若無吉曜來相照，未免招災惹禍殃。"},{type:"prose",text:" 火鈴二星入男命吉凶訣："},{type:"prose",text:" 火鈴二曜居廟地，貪狼紫府宜相會，為人性急有威權，鎮壓鄉邦終有貴。"},{type:"prose",text:" 火鈴在命落閒宮，西北生人作事庸，破盡家財終不久，須教帶疾免災兇。"},{type:"prose",text:" 火鈴二星入女命吉凶訣："},{type:"prose",text:" 火鈴之星入命來，貪狼相會得和諧，三方無殺諸般美，坐守香閨得遂懷。"},{type:"prose",text:" 火鈴二曜最難當，女命逢之必刑傷，若遇三方加殺湊，須防目下入泉鄉。"},{type:"prose",text:" 火鈴二星入限吉凶訣："},{type:"prose",text:" 火鈴二星事若何，貪狼相會福還多，更加吉曜多權柄，富貴聲揚處處歌。"},{type:"prose",text:" 火鈴限陷血濃侵，失脫尋常不可尋，口舌官災應不免，須防無妄禍來臨。"},{type:"prose",text:" 地劫火，乃劫殺之神，性惡作事疏狂，動靜增惡，不行正道，為邪僻之事，有吉禍輕，三方四正加殺多者夭壽論。"},{type:"prose",text:" 女命只可為偏房妓婢而已。"},{type:"prose",text:" 地劫入命吉凶訣："},{type:"prose",text:" 地劫從來生髮疾，命中相遇多啾唧，若遇羊火在其中，辛苦持家防內室。"},{type:"prose",text:" 地劫入限吉凶訣："},{type:"prose",text:" 劫星二限若相逢，未免當年有禍危，太歲殺臨多疾厄，官符星遇有官符。"},{type:"prose",text:" 天空乃空亡之神，性惡作事虛空，不行正道，成敗多端不聚財，退祖榮昌，空多不吉，名曰斷橋，有吉禍輕，四殺加少者平常論，多者下賤。太歲二限遇逢，有正曜星加吉者平安，經雲：項羽英雄，限到天空而喪國。"},{type:"prose",text:" 女命單守只可為偏房妓婢。"},{type:"prose",text:" 天空入命吉凶訣："},{type:"prose",text:" 命坐天空定出家，文昌天相實堪誇，若逢四殺同身命，受蔭承恩福可佳。"},{type:"prose",text:" 天空入限吉凶訣："},{type:"prose",text:" 天空入限破田莊，妻子須防有損傷，財帛不惟多敗失，更憂壽命入泉鄉。"},{type:"prose",text:" 地劫天空同入限吉凶訣："},{type:"prose",text:" 極居卯酉劫空臨，為僧為道福興隆，樂享山林有師號，福壽雙全到古齡。"},{type:"prose",text:" 劫空二限最乖張，夫子在陳也絕糧，項羽英雄曾喪國，綠珠逢此墜樓亡。"},{type:"prose",text:" 天傷水，乃虛耗之神，守臨二限遇太歲，不問得地，只要眾星吉方可獲善，若無正星又值羊火巨機，必主官災喪服破財，橫事相侵，夫子絕糧限到天傷。"},{type:"prose",text:" 天使水，乃傳使之星，務審人間禍福之由，若二限太歲俱臨，有吉星眾者禍輕，若無正星又值巨機羊火，則官災喪亡，橫事破家。"},{type:"prose",text:" 天傷天使入限吉凶訣："},{type:"prose",text:" 天耗守限號天傷，夫子在陳也絕糧，天使限臨人共忌，石崇豪富破家亡。"},{type:"prose",text:" 天馬火，最喜會祿存，極忌截路空亡。如命在辰戌丑未，遇寅申巳亥有天馬在夫妻宮，加吉會者富貴，加殺不美，加權祿照臨，必主男為官，女封贈。"},{type:"prose",text:" 天馬入限吉凶訣："},{type:"prose",text:" 天馬臨限最為良，紫府祿存遇非常，官宦逢之應顯達，士人遇此赴科場。"},{type:"prose",text:" 天馬守限不得住，又怕劫空來相遇，更兼太歲坐宮中，限到其人尋死路。"},{type:"prose",text:" 化祿星土，為福德之神，守身命官祿之位，科權相遇必作大臣之職，小限逢之主進仕之喜，大限十年吉慶，惡曜來臨並羊陀火忌衝照，亦不為害。女人吉湊作命婦，內外威嚴，殺湊平常。"},{type:"prose",text:" 化祿入命斷訣："},{type:"prose",text:" 十干化祿最為榮，男命逢之福自申，武職題名邊塞上，文人名譽滿朝廷。"},{type:"prose",text:" 祿主天同遇太陽，常人大富足田莊，資財六畜皆生旺，凡有施為盡吉祥。"},{type:"prose",text:" 化祿入限斷訣："},{type:"prose",text:" 限中若遇祿來臨，爵位高遷佐聖明，常庶相逢當大貴，自然蓄積廣金銀。"},{type:"prose",text:" 化權星木，掌判生殺之神，守身命科祿相迎，則出將入相，會巨門武曲必專大事，掌握兵符，為人極古怪，到處欲人敬重，小限相逢無有不吉，大限十年必遂，逢兇亦不為災，如遇羊陀耗使空劫，聽說貽累，官災貶謫。女人得之內外稱意，僧道掌山林，有師號。"},{type:"prose",text:" 化權入男命吉凶訣："},{type:"prose",text:" 權星最喜吉星扶，事業軒昂膽氣粗，更值巨門兼武曜，三邊鎮守掌兵符。"},{type:"prose",text:" 化權入女命吉凶訣："},{type:"prose",text:" 化權吉曜喜相逢，更吉加臨衣祿豐，富貴雙全人性硬，奪夫權柄福興隆。"},{type:"prose",text:" 化權入限吉凶訣："},{type:"prose",text:" 此星主限喜非常，官祿高升佐帝王，財帛豐添宜創業，從今家道保安康。"},{type:"prose",text:" 權星若遇武貪臨，作事求謀盡得成，士子名高添福祿，庶人得此積金銀。"},{type:"prose",text:" 化科星水，上界應試之神，主掌文墨之神。守身命權祿相逢，主人聰明通達，最喜逢魁鉞，必中科第，作宰臣之職，如遇惡星，亦為文章秀士，或作群英師範，但嫌截路空亡、旬空、亦畏忌天空。"},{type:"prose",text:" 女命科星拱守，作公卿婦，雖四殺衝破也主富貴。"},{type:"prose",text:" 化科入男命吉凶訣："},{type:"prose",text:" 科星文宿最為奇，包藏錦繡美文章，一躍禹門龍變化，管教聲達譽朝堂。"},{type:"prose",text:" 科星入命豈尋常，錦繡才華展廟廊，更遇曲昌魁鉞宿，龍門一躍姓名揚。"},{type:"prose",text:" 化科入女命吉凶訣："},{type:"prose",text:" 化科女命是良星，四德兼全性格清，更遇吉星權祿湊，夫榮子貴作夫人。"},{type:"prose",text:" 化科入限吉凶訣："},{type:"prose",text:" 科星二限遇文昌，士子逢之姓名香，僧道庶人多富貴，百謀百遂事英揚。"},{type:"prose",text:" 化忌星水，為多管之神，守身命一生不順，招是非，小限逢之一年不足，大限相遇十年悔吝，二限並太歲交臨，斷然蹭蹬，文人不耐久，武人縱有官災口舌不妨，然商賈藝人在處不宜，難立腳，如遇紫府昌曲同吉利，權祿與忌同宮又兼羊火鈴空作事進退，橫發橫破，始終不得久遠，即系發不住財是也，一生奔波勞碌或帶疾貧夭，僧道亦流移還俗。然天同在戌化忌，丁生人遇吉，巨門在辰化忌辛生人返佳，若太陽在寅卯辰巳午化忌，太陰在酉戌亥子化忌為福論。若日月陷地化忌，主大凶。如廉貞在亥化忌是也，火入泉鄉，又逢水命人化忌也不為害。"},{type:"prose",text:" 化忌入男命吉凶訣："},{type:"prose",text:" 諸星化忌不宜逢，更會兇星愈肆兇，若得吉星來助救，縱然富貴不豐隆。"},{type:"prose",text:" 貪狼破軍居陷地，遇吉化忌終不利，男為奸盜女淫娼，加殺照命無眠睡。"},{type:"prose",text:" 化忌入女命吉凶訣："},{type:"prose",text:" 女命化忌本非奇，更遇兇星是禍基，衣食艱辛貧賤甚，吉星湊合減災危。"},{type:"prose",text:" 化忌入限吉凶訣："},{type:"prose",text:" 忌星入廟反為佳，縱有官災亦不傷，一進一退名不遂，更兼遇吉保安康。"},{type:"prose",text:" 二限宮中見忌星，致災為禍必家傾，為官退職遭贓濫，胥吏須防禁杖刑。"},{type:"prose",text:" 忌星落陷在閒宮，惡殺加臨作禍兇，財散人離多疾苦，傷官退職孝重逢。"},{type:"prose",text:" 祿會祿存富貴，權會巨武英揚，科會魁鉞貴顯，忌會身命招是非。"},{type:"prose",text:" 歲君火，乃流年太歲星君，與諸凶神相遇皆與不謀，忌與大小二限相沖，若逢大限遇紫府昌曲左右魁鉞吉星扶救則災少，但防六畜死失，若遇羊陀火鈴劫空傷使，財破人亡，女命逢之防產難之厄，若吉眾有救，惡多死亡。"},{type:"prose",text:" 太歲之星不可當，守臨官限要推詳，若無吉曜來相助，未免官災鬧一場。"},{type:"prose",text:" 斗君，正月初一日管事，遇吉斷吉，遇兇斷兇，如太歲二限美，若斗君正月初一日值在某宮過度，逢兇殺也主其年有得失災病官非，依月限斷之。"}],raw:`一 命宮  
 紫微土，南北斗化帝座，為官祿主。紫微面紫色或白青，腰背肥滿，為人忠厚老成，謙恭耿直，其威制七殺降火鈴。若與府相左右日月昌曲三合嘉會極急，食祿千鍾鉅富大貴。與祿存同奇特，不入廟無左右為孤君，亦清閒僧道。與破軍同為胥吏。與羊陀火鈴衝合吉多亦發財，常庶人吉。女命會吉清秀旺夫益子。  
 子宮喜丁己庚生人貴格，壬癸生人不耐久。  
 午宮入廟喜甲丁己生人財官格，丙戊生人成敗帶疾。  
 卯酉宮貪狼同度，乙辛甲庚生人貴不耐久。  
 寅申宮旺地與天府同度，甲庚丁己生人財官格。  
 巳亥宮旺地與七殺同度，乙戊生人財官格。  
 辰戌宮得地與天相同度，乙己甲庚癸生人財官格。  
 丑未宮入廟與破軍同度，乙己甲庚丁壬生人財官格。  
 紫微入男命吉凶訣：  
 紫微天中第一星，命身相遇福財興，若逢相佐宮中會，富貴雙全播令名。  
 紫微守命最為良，二殺逢之壽不長，羊陀火鈴來相會，只好空門禮梵王。  
 紫微辰戌遇破軍，富而不貴有虛名，若逢貪狼在卯酉，為臣失義不相應。  
 火鈴羊陀來相會，七殺同宮多不貴，欺人孤獨更刑傷，若是空門為吉利。  
 紫微入女命吉凶訣：  
 紫微女命守身宮，天府尊星同到宮，更得吉星同主照，金冠封贈福滔滔。  
 紫微女命守夫宮，三方吉拱便為榮，若逢殺破來衝破，衣祿盈餘淫巧容。  
 紫微入限吉凶訣：  
 紫微垣內吉星臨，二限相逢福祿興，常人得遇多財富，官員逢之職位升。  
 紫微入限本為祥，只恐三方殺破狼，常庶逢之多不利，官員降謫有驚傷。  
 天機屬木，南斗化善星，為兄弟主。入廟身長肥胖，性急心慈，機謀多變。與天梁會合善談兵，乙丙丁生人遇之入廟化吉，得左右昌曲魁鉞太陰湊合，坐於巳酉丑亥卯未宮，權祿不小，文武皆大貴極品。加巨門羊陀火鈴忌，巳酉丑亥為下局，孤窮，縱有財官貴顯亦不耐久，只宜經商巧藝之輩耳。女命入廟性剛有權柄，持家助夫益子。天梁太陰巨門見羊陀火鈴忌衝合財帛，淫賤偏房娼婢，否則傷夫克子。  
 子午宮入廟，丁己癸甲庚壬生人財官格。  
 卯酉宮旺地與巨門同度，乙辛戊癸生人財官格。  
 寅申宮得地與太陰同度，丁己癸甲庚壬生人財官格。  
 巳亥宮和平，丙壬戊生人合局不耐久。  
 辰戌宮利益與天梁同度，壬庚丁生人為福。  
 丑未宮陷地，丙戊丁壬生人財官格，乙壬生人祿合格。  
 天機入男命吉凶訣：  
 機月天梁合太陽，常人富足置田莊，官員得遇科權祿，職位高遷面帝王。  
 天機化忌落閒宮，縱有財官亦不榮，退盡家財兼壽夭，飄蓬僧道住山中。  
 天機入女命吉凶訣：  
 天機女命吉星扶，作事操持過丈夫，權祿宮中逢守照，榮膺誥命貴無倫。  
 天機星與太陰同，女命逢之淫巧容，衣祿豐饒終不美，為娼為妾主淫風。  
 天機入限吉凶訣：  
 男女二限值天機，科權祿逢大有為，出入經營多遇貴，發財發福少人知。  
 天機照限不安寧，家事紛紛外事多，更遇羊陀並巨暗，須知此歲入南柯。  
 太陽火，南北斗化貴，為官祿主。太陽入廟形貌堂堂，雄壯麵方圓滿，夜生陷日生廟旺，心慈面紫色，好濟施。若會左右昌曲魁鉞太陰祿存守照官祿，財官昭著，極品之論，文武皆宜之。身逢吉聚貴人門下客，否則公卿走卒，六庚生人命坐卯宮，第一廟所，六壬次之。命在亥，申生人下局，否則夭壽貧窮，雖發不耐久。廟旺終身富貴，陷地雖化權祿也兇，官祿亦不顯，先勤終懶，成敗不一，出外離祖可吉。與羊陀衝破又陷下局，橫發橫破不耐久，若經商巧藝，辛苦勞力而禍輕延生矣，加兇殺帶疾，化忌目疾。女命入廟旺夫益子，若陷地又見羊陀火鈴忌劫，貧賤殘疾，亦為貞潔之婦，僧道亦清潔。  
 子宮陷午宮旺，丁己生人財官格，壬丙戊生人悔吝。  
 卯宮廟酉宮和平，乙辛生人財官格，甲庚生人困。  
 寅宮旺申宮得地與巨門同度，丁己甲庚生人財官格。  
 巳宮旺財官格。亥宮陷逢殺孤寡貧窮。  
 辰宮旺財官格。戌宮陷反背孤寡。  
 丑宮陷未宮得地與太陰同度，加吉星財官格。  
 太陽入男命吉凶訣：  
 命裡逢陽福壽濃，更兼權祿兩相逢，魁昌左右來相湊，富貴雙全比石崇。  
 日月丑未命中逢，三方無化福難豐，更有吉星終不美，若逢殺湊一生窮。  
 失陷太陽居反背，化忌逢之多蹇昧，又遭橫事破家財，命強化祿也無益。  
 太陽入女命吉凶訣：  
 太陽正照婦人身，姿貌殊常性格貞，更得吉星同主照，金冠封贈作夫人。  
 太陽安命有奇能，陷地須防惡殺凌，作事沈吟多進退，辛勤度日免家傾。  
 太陽反照主心忙，衣祿平常壽不長，克過良人還克子，只宜蔭下作偏房。  
 太陽入限吉凶訣：  
 二限偏宜見太陽，添財進業福非常，婚姻和合添嗣續，仕者高遷坐廟堂。  
 太陽守限有多般，陷地須防惡殺侵，加忌逢兇多阻滯，橫事破財家伶仃。  
 武曲金，北斗化財，為財帛主。武曲性剛果決，心直無毒，形小聲高而量大，有毛髮之異。最喜甲己生人福厚，入廟與昌曲同行，則出將入相，武職最旺，文人多學多能。會貪遇火化吉為上格，丙丁庚辛壬癸中格斷。與府相梁月祿馬會主貴，西北生人為福，東南生人平常。陷地巧藝之人及僧道，更遇廉貞破軍羊忌空劫衝破下局，破家敗祖。女命入廟權貴，陷地值殺孤單，刑夫克子兼且不正。  
 子午宮旺地，與天府同度，丁己庚生人財官格。  
 卯酉宮利益，與七殺同度，乙辛生人財官格。  
 寅申宮得地，與天相同度，丁己甲庚生人財官格。  
 巳亥宮和平，與破軍同度，壬戊生人財官格。  
 辰戌宮入廟，甲乙生人財官格。  
 丑未宮入廟，與貪狼同度，戊辛生人大貴財官格。  
 武曲入男命吉凶訣：  
 武曲守命化為權，吉曜來臨福壽全，志氣崢嶸多出眾，超凡入聖向人前。  
 武曲之星守命宮，吉星守照始榮昌，若加耗殺來衝破，任是財多畢竟空。  
 武曲入女命吉凶訣：  
 女人武曲命中逢，天府加之志氣雄，左右祿存相逢聚，富貴雙全美無窮。  
 將星一宿最剛強，女命逢之性異常，衣祿滔滔終有破，不然壽夭或兇亡。  
 武曲入限吉凶訣：  
 大小二限逢武曲，若還入廟主財興，更加文昌臨左右，福祿雙全得稱心。  
 武曲臨限化權星，最利求謀事有成，更遇吉星同會合，文人名顯庶人興。  
 武曲之星主官非，公吏逢之刑杖來，常庶遇之還負債，官員值此有驚懷。  
 天同水，南斗化福，為福德主。天同入廟肥滿清明，仁慈耿直。與天梁左右嘉會丙生人於巳亥酉宮安命，財官雙美，福非小可，未宮次之，午宮陷，丁生人宜之。若在亥地庚生人下局，更遇羊陀火鈴忌衝合，則孤單破相目疾。  
 女命會吉星作命婦，旺夫益子極賢能，若居巳亥雖美而淫。  
 子宮旺地午宮陷，丁己癸辛生人財官格。  
 卯酉宮和平，乙丙辛生人財官格。  
 寅宮利申宮旺，與天梁同度，乙甲丁生人福厚。  
 巳亥宮入廟，壬丙戊生人財官格。  
 辰戌宮和平，丙丁生人利達，庚癸生人福不耐久。  
 丑未宮不得地，與巨門同度，乙壬甲辛庚生人財官格。  
 天同入男命吉凶訣：  
 天同坐命性溫良，福祿悠悠壽更長，若是福人居廟旺，定教食祿譽傳揚。  
 天同若與吉星逢，性格聰明百事通，男子定然食天祿，女人樂守繡房中。  
 天同守命落閒宮，火鈴殺湊更為兇，天機梁月來相會，只好空門度歲終。  
 天同入女命吉凶訣：  
 天同守命婦人身，性格聰明伶俐人，昌曲更來相會處，悠悠財祿自天伸。  
 天同若與太陰同，女命逢之淫巧容，衣祿雖豐終不美，偏房侍妾與人通。  
 天同入限吉凶訣：  
 人生二限值天同，喜氣盈門萬事榮，財祿增添宜創造，從今家道得豐榮。  
 流年二限值天同，陷地須防惡殺衝，作事美中終不足，惟防官災及家傾。  
 廉貞屬火，北斗化次桃花殺、囚星，為官祿主。為人身長體壯，眼露神光，眉毛中大克骨亦露，性硬浮蕩，好忿爭。入廟武職貴，遇府相左右有科權祿存同宮富貴。逢昌曲七殺立武功。與擎羊同是非日有。破軍火鈴同，狗悻狼心。巳亥陷宮棄祖孤單，巧藝僧道軍旅之流。六甲生人命坐寅申者上格，丁己生人次之。六丙生人命坐子午卯酉，橫發橫破不耐久。六甲生人命坐四墓宮，財官格，若丙戊生人招非有成敗。若與昌曲忌星同在巳亥宮，六丙生人有禍，六甲生人亦不宜也。未申生人命居未申宮，化祿逢吉富貴必矣。若在諸宮逢羊陀火鈴化忌衝破，主殘疾。女命三合吉拱主封贈，雖惡殺衝破不為下局，若入廟逢化祿剛烈機巧，清秀，旺夫益子。僧道加吉拱，有師號，此星最喜天相同宮能化其惡。  
 子午宮和平，與天相同度，丁己甲生人財官格。  
 卯酉宮和平，與破軍同度，乙辛癸生人吉。  
 寅宮和平，甲庚己生人貴格。申宮入廟甲庚戊生人貴格，丙生人次之。  
 巳亥宮陷地，甲己丙戊生人福不耐久。  
 辰戌宮利益，與天府同度，甲庚生人財官格。  
 丑未宮利益，與七殺同度，加吉星財官格。  
 廉貞入男命吉凶訣：  
 廉貞守命亦非常，賦性巍巍志氣強，格故鼎新官大貴，為官清顯姓名香。  
 廉貞坐命落閒宮，貪破羊火忌相逢，縱有財官也不美，平生何以得從容。  
 廉貞落陷入閒宮，吉曜相逢也有兇，腰足災殘難脫厄，更加惡殺命該終。  
 廉貞入女命吉凶訣：  
 女人身命值廉貞，內政清廉格局新，諸吉拱照無殺破，定教封贈在青春。  
 廉貞貪破曲相逢，陀火交加極賤庸，定主刑夫並克子，只好偏房娼婢容。  
 廉貞入限吉凶訣：  
 廉貞入限旺宮臨，喜逢吉曜福駢臻，財物自然多蓄積，任人得意位高升。  
 大小二限遇廉貞，更有天刑忌刃侵，膿血刑災難脫逃，破軍貪殺赴幽冥。  
 天府土，南斗化令星，為財帛主。為人面方圓，容紅齒白，心性溫和，聰明俊秀，博學機變，能解一切災厄。喜紫微昌曲左右祿存魁鉞權祿，居廟旺必中高第。羊陀火鈴會合好詐。命坐寅午戌亥卯未，六己生人貴格。若居巳酉丑宮，乙丙戊辛生人，文武財官格，如亥卯未辰酉宮安命者，甲庚生人不貴，先大後小，有始無終。女命清白機巧，旺夫益子，遇紫微左右同垣極美，作命婦論。  
 子午宮與武曲同度，丁己癸生人為福，財官格。  
 卯宮入廟，酉宮旺地，乙丙辛生人財官格。  
 寅宮入廟，申宮得地，與紫微同度，丁己生人財官格。  
 巳亥宮得地，乙丙戊辛生人財官格。  
 辰戌宮入廟，與廉貞同度，甲庚壬生人財官格。  
 丑未宮入廟加吉星財官格。  
 天府入男命吉凶訣：  
 天府之星守命宮，加之權祿喜相逢，魁昌左右來相會，附鳳攀龍上九重。  
 火鈴羊陀三方會，為人奸詐多勞碌，空劫同垣不為佳，只宜空門享福人。  
 天府入女命吉凶訣：  
 女人天府命身宮，性格聰明花樣容，更得紫微三合照，金冠霞佩受皇封。  
 火鈴羊陀來衝會，性格庸常多蹇昧，六親相背子難招，只好空門為尼計。  
 天府入限吉凶訣：  
 限臨天府能司祿，士庶逢之多發福，添財進喜永無災，且也潤身也潤屋。  
 南斗尊星入限來，所為謀事稱心懷，若還又化科權祿，指日欣然展大材。  
 太陰水，南北斗化富，為母宿，又為妻星，為田宅主。太陰居命面方圓，心性溫和，清秀耿直聰明，花酒文章，博學橫立功名。身若逢之則隨娘繼拜，陷地化吉科權祿，反以兇論，出外離祖則吉。更遇羊陀火鈴，酒色邪淫，下賤夭折。最喜六壬戊生人，在亥卯未宮立命合局，乙庚戊生人居亥宮立命上格，六丁生人次之，六乙生人合格，六丁六戊生人，化科權祿吉。女命會太陽入廟，封贈夫人，若陷地傷夫克子，妾妓之流。  
 子丑寅宮入廟，丁戊生人財官格。  
 卯辰巳宮陷地，乙壬戊生人孤寡不耐久。  
 午宮陷未申宮利益，丁庚甲入生人財官格。  
 酉戌亥宮入廟，丙丁生人財官格，吉星眾大貴。  
 太陰入男命吉凶訣：  
 太陰原是水之精，身命逢之福自生，酉戌亥垣為得地，光輝揚顯姓名亨。  
 太陰入廟化權星，清秀聰明貴無倫，稟性溫良恭儉讓，為官清顯列朝綱。  
 寅上機昌曲月逢，縱然吉拱不豐隆，男為僕從女為妓，加殺衝殺到老窮。  
 太陰陷地惡星中，陀火相逢定困窮，此命只宜僧與道，空門出入得從容。  
 太陰入女命吉凶訣：  
 月會同陽在命宮，三方吉拱必盈豐，不見兇殺來衝會，富貴雙全保到終。  
 太陰陷在命和身，不喜三方惡殺侵，克害夫君又夭壽，更虛血氣少精神。  
 太陰入限吉凶訣：  
 太陰星曜限中逢，財祿豐盈百事通，嫁娶迎親添嗣續，常人得此旺門風。  
 二限偏宜見太陰，添屋進財福非輕，火鈴若也來相湊，未免官災病患臨。  
 限至太陰居反背，不喜羊陀三方會，火鈴二限最為兇，若不官災多破悔。  
 貪狼屬木，化桃花殺。貪狼入廟長聳肥胖，陷宮形小聲高而量大，性格不常，心多計較，作事急速不耐靜，作巧反拙，好賭博花酒。陷地加羊陀化忌，則孤貧破相殘疾，斑痕疤痣。入廟多居武藝之中，遇火鈴喜戊己生人合局，不喜六癸生人，不耐久長。女命平常，若居陷地傷夫克子且不正，大多為娼婢，僧道亦不清潔。  
 子午宮旺地，丁己生人福厚，丙戊庚生寅申人下局。  
 卯酉宮利益，與紫微同度，見火星貴，乙辛己生人宜之，財官格。  
 寅申宮和平，庚生人財官格。  
 巳亥宮陷地，與廉貞同度，丙戊壬生人為福不耐久。  
 辰戌宮入廟，戊己生人財官格。  
 丑未宮入廟，與武曲同度，見火星，戊己庚生人貴格。  
 貪狼入男命吉凶訣：  
 四墓宮中福氣濃，提兵指日立邊功，火星拱會誠為貴，名震諸夷定有封。  
 貪狼守命擎羊逢，陀殺交加必困窮，武破廉貞同殺劫，百藝防身度歲終。  
 四墓貪狼廟旺宮，加臨左右富財翁，若然再化科權祿，文武才能顯大功。  
 貪狼入女命吉凶訣：  
 四墓宮中多吉利，更逢左右方為貴，祿財豐富旺夫君，性格剛強多志氣。  
 貪狼陷地女非祥，衣食雖豐也不良，克害良人並男女，又教衾枕守孤孀。  
 貪狼入限吉凶訣：  
 北斗貪狼入限來，若還入廟事和諧，科權仕路多成就，必主當年發橫財。  
 貪狼主限四墓臨，更喜人生四墓生，若見火星多橫發，自然富貴冠鄉鄰。  
 限至貪狼陷不良，只宜節慾息災傷，賭盪風流去財寶，吉曜三方可免災。  
 女限貪狼事不良，宜懷六甲免災殃，若無吉曜來相會，須知一命入黃泉。  
 巨門水，北斗化暗，主是非。入廟身長肥胖敦厚清秀，不入廟五短瘦小，作事進退，多疑且多學少精，與人寡合，多是多非，奔波勞碌。喜左右祿存六癸六辛生人，命坐子卯合局。六庚六丁生人，辰戌安命卻不富貴。子午宮安命，丙戊生人孤寡夭折。六甲生人居卯宮雖入廟，與擎羊同度破局平常論。身命居子午宮為石中隱玉格，更會科權祿，終身福厚，會羊陀火鈴化忌，若不夭折，男盜女娼。  
 女命入廟，六癸六辛生人享福，陷地傷夫克子，丁人遇極淫，此星在女命多有瑕玷。  
 子午宮旺地，丁己癸辛生人福厚，丙戊生人主困。  
 卯酉宮入廟，與天機同度，乙辛己丙生人財官格，丁戊生人有成敗。  
 寅申宮入廟，與太陽同度，庚癸辛生人財官格。  
 巳亥旺宮單守，癸辛丙生人財官格。  
 辰戌宮和平，癸辛生人主貴，丁生人困。  
 丑未宮不得地，癸辛丙生人財官格。  
 巨門入男命吉凶訣：  
 巨門子午二宮逢，局中得遇以為榮，三合化吉科權祿，官高極品衣紫袍。  
 此星化暗不宜逢，更會殺星愈肆兇，唇齒有傷兼性猛，若然入廟可和平。  
 巨門守命遇擎羊，火鈴逢之事不祥，為人性急多顛倒，百事茫茫亂主張。  
 巨門入女命吉凶訣：  
 巨門旺地多生吉，左右加臨壽更長，女人得此誠為貴，簾卷珍珠坐繡房。  
 巨門命陷主淫娼，侍女偏房免災殃，相貌清奇多近寵，不然壽夭或兇亡。  
 巨門入限吉凶訣：  
 巨門主限化權星，最喜求謀萬事成，雖有官災並口舌，逢凶化吉得安寧。  
 巨門入限動人愁，若遇喪門事不周，士庶逢之多惹訟，居官失職有丁憂。  
 巨門限陷最乖張，無事官非鬧一場，哭泣喪禍終不免，破財嘔氣受淒涼。  
 天相水，南斗化印，為官祿主。為人相貌敦厚持重，清白好酒食，衣祿豐足。紫府左右昌曲日月嘉會，財官雙美，位至三公。與武破羊陀同行則為巧藝，更加火鈴巨機，則傷刑不善終，天相又能化廉貞之惡。  
 女命入廟性溫和，衣祿遂心，僧道屯吉。  
 子午宮入廟，與廉貞同度，丁己癸甲生人財官格。  
 卯酉宮陷地，乙辛生人吉。甲庚生人主困。  
 辰戌宮得地，與紫微同度，財官格。  
 丑宮入廟未宮得地，加吉星財官格。  
 寅申宮入廟，與武曲同度，丁甲庚生人財官格。  
 巳亥宮得地，丙戊壬生人為福。  
 天相入男命吉凶訣：  
 天相星辰貴等倫，照守身命喜無垠，為官必主居元宰，三合相逢福不輕。  
 天相吉星為命主，必定斯人多克己，財官祿主旺家資，權壓當時誰不美。  
 天相之星武破同，羊陀火鈴更為兇，或作技術經商輩，若在空門享福隆。  
 天相入女命吉凶訣：  
 女人之命天相星，性格聰明百事寧，衣祿豐盈財帛足，旺夫貴子顯門庭。  
 破軍七殺來相會，羊陀火鈴最所忌，孤刑剋害六親無，只可偏房與侍婢。  
 天相入限吉凶訣：  
 天相之星敢主財，照臨二限悉無災，動作謀為皆遂意，悠遊享福自然來。  
 天相之星有幾般，三方不喜惡星纏，羊陀空劫重相會，口舌官災禍亦連。  
 限臨天相遇擎羊，作禍興殃不可當，更有火鈴諸殺湊，須教一命入泉鄉。  
 天梁屬土，南斗化蔭，主壽星。厚重清秀，聰明耿直，心無私曲好濟施，有壽。與天機同行居翰苑，善談兵。左右昌曲嘉會，則出將入相。要入廟方富貴，陷地遇火羊破局，則下賤孤寡夭折。逢天機耗殺清閒，僧道受制誥，六壬生人，亥卯未宮安命者，富貴雙全。  
 女命有男子之志，入廟富貴，陷地加殺傷夫克子又淫賤。  
 子午宮入廟，丁己癸生人福厚財格。  
 卯宮入廟酉宮得地，與太陽同度，乙壬辛生人財官格。  
 辰戌宮入廟，與天機同度，丁己壬庚生人財官格。  
 丑未宮入廟，壬乙生人財官格，六戊生人大貴。  
 寅宮入廟申宮陷地，與天同同度，丁己甲庚生人財官格。  
 天梁入男命吉凶訣：  
 天梁之曜數中強，形神穩重性溫良，左右昌曲來會合，管教富貴列朝綱。  
 天梁星宿壽星逢，機日文昌左右同，子午寅申為入廟，官資清顯至三公。  
 天梁遇火落閒宮，陀殺重逢更是兇，孤刑帶疾破家財，空門技藝可營工。  
 辰戌機梁非小補，破軍卯酉不為良，女人得此為孤獨，剋夫刑子守空房。  
 天梁入限吉凶訣：  
 天梁化蔭吉星和，二限逢之福必多，若加吉曜逢廟地，貴極一品輔山河。  
 限至天梁最是良，猶如秋菊吐馨香，加官進職迎新祿，常庶逢之也足糧。  
 天梁守限壽延長，作事求謀更吉昌，若遇火鈴羊陀合，須防一厄與家亡。  
 七殺火金，南斗將星，遇帝為權，其餘諸宮皆殺。為人目大性急，喜怒無常，作事進退沈吟。廟旺有謀略，遇紫微掌生殺之權，武職最利。加左右昌曲魁鉞會合，位至極品。落空亡無威力。遇兇曜於生鄉，定為屠宰，會刑囚傷克。安命寅亥子午宮，丁己生人合局，不喜壬癸午戌生人，六丙六戊生人中平。辰宮安命六庚生人吉利，羊陀火鈴衝會，又在陷地殘疾下局，雖富貴不耐久。女人入廟加權祿，旺夫益子，陷地遇羊火，則以傷克下賤論。  
 子午宮旺地，丁己甲生人財官格。  
 卯酉宮旺地，與武曲同度，乙辛生人福厚財官格。  
 辰戌宮入廟，加吉星財官格。  
 丑未宮入廟，與廉貞同度，加吉星財官格。  
 寅申宮入廟，甲庚丁己生人財官格。  
 巳亥宮和平，與紫微同度，丙戊壬生人財官格。  
 七殺入男命吉凶訣：  
 七殺寅申子午宮，四夷拱手服英雄，魁鉞左右文昌會，科祿名高食萬鍾。  
 殺居陷地不堪言，兇禍猶如伴虎眠，若是殺強無制伏，少年惡死到黃泉。  
 七殺居命落閒宮，巨宿羊陀更照衝，若不傷肢必損骨，空門僧道可興隆。  
 七殺入女命吉凶訣：  
 女命愁逢七殺星，作事果斷又聰明，氣高志大無男女，不免刑夫歷苦辛。  
 七殺孤星貪宿逢，火陀湊合非為貴，女人得此性不良，只好偏房為使婢。  
 七殺入限吉凶訣：  
 二限雖然逢七殺，從容和緩家道發，對宮天府正來朝，仕宦逢之名顯達。  
 七殺之星主啾唧，作事艱難俱有失，更加惡曜在限中，主有官災多病疾。  
 破軍水，北斗化耗星，主妻子、奴僕。體型五短背厚眉寬腰斜，性剛寡合，好爭強。棄祖發福，好博禽捕獵。喜紫微有威權，天梁天府能制其惡，與文曲同度一生貧士，更入水鄉殘疾，雖富不久、夭折。六癸甲生人，坐子午宮者位至三公。若丙戊寅生人命坐子午宮，則孤單殘疾，雖富貴不久、夭折。丙戊生人，命坐辰戌丑未，與紫微同垣或對居，富貴不小。遇廉貞羊陀火鈴於陷宮，爭斗疾病。僧道宜之，女命  
 子午入廟，陷地加殺則殘疾下賤淫慾。  
 子午宮入廟，丁己癸生人福厚，丙戊生人主困。  
 卯酉宮陷地與廉貞同度，乙辛癸生人利，甲庚丙生人不耐久。  
 辰戌宮旺地，甲癸生人為福。  
 丑未宮旺地與紫微同度，丙戊乙生人財官格。  
 寅申宮得地，甲庚丁己生人財官格。  
 巳亥宮與武曲同度，戊生人福厚。  
 破軍入男命吉凶訣：  
 破軍七殺與貪狼，入廟英雄不可當，關羽命逢為上將，庶人富足置田莊。  
 破軍子午會文昌，左右雙雙入廟廊，財帛豐盈多慷慨，祿官昭著佐君王。  
 破軍一曜最難當，化祿科權喜異常，若還陷地仍加殺，破祖離宗出遠鄉。  
 破軍不喜在身宮，廉貞火羊陀會兇，不見傷殘定壽夭，只宜僧道度平生。  
 破軍入女命吉凶訣：  
 破軍子午為入廟，女命逢之福壽昌，性格有能偏出眾，旺夫益子姓名香。  
 破軍女命不宜逢，擎羊加陷便為兇，克害良人非一次，須教悲哭度朝昏。  
 破軍入限吉凶訣：  
 破軍入限要推詳，廟地方知福祿昌，更遇文昌同魁鉞，限臨此地極風光。  
 破軍入限細推詳，廟地無兇少損傷，殺湊破軍防破耗，更防妻子自身亡。  
 破軍主限多濃血，失脫乖張不可說，更值女人主孝服，血光產難災殃節。  
 文昌金，南北斗，乃文魁星，眉目清秀分明，機巧多學多能，會陽梁祿存財官昭卓，富貴聲揚，陷地先難後易，加擎羊火鈴巧藝之人，陷地獨守加殺帶疾，亦能延壽，旺有暗痣，陷有斑痕。女命入廟平常，加吉曜富貴，陷地遇羊火巨機殺忌，則下賤淫娼使婢。  
 寅午戌宮得地，丁己甲庚生人財官格。  
 申子辰宮得地，癸甲庚生人貴格。  
 巳酉丑宮入廟，乙戊辛生人大貴。  
 亥卯未宮利益，乙戊生人財官格。  
 文昌入男命吉凶訣：  
 文昌坐命旺宮臨，志大財高抵萬金，文藝精華心壯大，須教平步上青雲。  
 文昌守命亦非常，限不夭傷福壽長，只怕限衝逢火忌，須教夭折帶刑傷。  
 文昌入女命吉凶訣：  
 女人身命值文昌，秀麗清奇福更長，紫府對沖三合照，管教富貴著霞裳。  
 文昌女命遇廉貞，陷地擎羊火忌星，若不為娼終壽夭，偏房猶得主人輕。  
 文昌入限吉凶訣：  
 文昌之星最為清，斗數之中第二星，若遇太歲與二限，士人值此佔科名。  
 限遇文昌不得地，更有羊陀火鈴忌，官非口舌破家財，未免刑傷多晦滯。  
 文曲水，北斗，司科甲星。與文昌逢吉主科第，單居身命更逢惡殺湊合，無名便佞之人，喜六甲生人居巳酉丑宮，侯伯官貴。與貪狼火星同垣三合者，將相之命。武貞羊殺破狼，居陷地則喪命夭折，若與同梁武曲會旺宮，聰明果決，如羊陀火鈴衝破，只宜空門。旺有暗痣，陷有斑痕。女命入廟清秀，陷地與巨火忌機會，及貪狼破軍同垣衝破，則孤寒下賤淫慾論。  
 寅宮和平，午戌陷地，甲庚生人財官格。  
 申子辰宮得地，丁癸辛生人福厚。  
 巳酉丑宮入廟，辛生人遇紫微同宮大富貴格。  
 亥卯未宮旺地，丙壬戊生人財官格。  
 文曲入男命吉凶訣：  
 文曲守命最為良，相貌堂堂志氣昂，士庶逢之應福厚，丈夫得此受金章。  
 文曲守垣逢火忌，不喜三方惡殺聚，此人雖巧口能言，惟在空門可遇貴。  
 文曲入女命吉凶訣：  
 女人命裡逢文曲，相貌清奇多有福，聰明伶俐不尋常，有殺偏房也淫慾。  
 文曲入限吉凶訣：  
 二限相逢文曲星，士庶斯年鬚髮福，更添左右會天同，財祿滔滔為上局。  
 文曲限遇廉陀羊，陷地非災惹禍殃，更兼命裡星辰弱，須知此歲入泉鄉。  
 左輔土，南北斗善星，佐帝令尤佳，若府相機昌貪狼武曲會，再加右弼同垣，富貴不小，財官雙美，若見羊陀火忌中局，旺宮有暗痣，三殺如陷地加巨門七殺天機下局。女命會吉星旺夫益子，僧道清潔。  
 左輔入男命吉凶訣：  
 左輔尊星能降福，風流敦厚通今古，紫府祿權貪武會，文官武職多清貴。  
 羊陀火鈴三方照，縱有財官非吉兆，廉貞破巨更來衝，若不傷殘終是夭。  
 左輔入女命吉凶訣：  
 女命左輔主賢豪，能幹能為又氣高，更與紫微天府合，金冠封贈過滔滔。  
 火陀相會不為良，七殺破軍壽不長，只可偏房方富足，聰明得寵過時光。  
 左輔入限吉凶訣：  
 左輔限行福氣深，常人富足累千金，官員更得科權照，職位高遷佐聖君  
 左輔之星入限來，不宜殺湊主悲哀，火鈴空劫來相湊，財破人亡事事哀。  
 右弼水，南北斗善星，佐帝令。入廟厚重清秀耿直，心懷寬恕好施濟，有機謀。諸宮 降福，居四墓尤佳，若會紫微天府天相昌曲，終身福厚。若與諸殺同纏及羊陀火鈴忌衝合者僅主福薄亦不為兇，惟有斑痕暗痣或傷殘帶疾。女命會吉星旺夫益子，僧道清潔。  
 右弼入男命吉凶訣：  
 右弼天機上宰星，命逢重厚最聰明，若無火忌羊陀會，加吉財官冠世英。  
 右弼尊星入命宮，若還殺湊主常庸，羊陀空劫三方湊，須知帶疾免災兇。  
 右弼入限吉凶訣：  
 右弼入限最為榮，入財興旺必多能，官員遷擢僧道喜，士子攻書必顯名。  
 右弼主限遇兇星，掃盡家資百不成，士遭傷敗奴欺主，更教家破主伶仃。  
 祿存土，北斗司爵貴星。老成持重心慈耿直，有機變多學多能，命遇主富貴，文人有聲名，諸宮降福消災，逢諸殺棄祖重拜父母。喜紫府相同梁日月及武曲同宮為妙，單守命身，看財之奴。怕空劫火鈴衝照則為下局，巧藝多精之人，陷地減福。在命宮官祿田宅為福。女命清白秀麗，有男子之志。  
 祿存入男命吉凶訣：  
 人生若遇祿存星，性格剛強百事成，官員遷兮昌曲會，滔滔衣祿顯門庭。  
 祿存守命莫逢衝，陀火交加福不全，天機空劫忌相會，空門僧道得清閒。  
 祿存入女命吉凶訣：  
 女命若遇祿存星，紫府加臨百事寧，更遇同貞相湊合，必然註定是夫人。  
 祿存入命陷宮來，空劫火鈴必為災，若無吉曜來相湊，夫妻分離永不諧。  
 祿存入限吉凶訣：  
 祿存主限最為良，作事求謀盡吉祥，仕吏逢之多轉職，庶人遇此足錢糧。  
 祿存主限壽延長，作事營謀萬事昌，更有科權兼左右，定知此限富倉廂。  
 祿存祿主多富足，婚姻嫁娶添嗣續，更兼科祿又同宮，必主榮華享厚福。  
 祿存交馳限步逢，最怕劫空相遇同，更兼太歲惡星衝，限倒其年入墓中。  
 魁鉞火，即天乙貴人，若人身命逢之，更得諸吉加臨，三合吉星守照，必少年登科及第，逢兇忌不為文章秀士，可為弟子之師，限步逢之必主清高，名成利就。大抵此星若身命逢之，雖不富貴亦主聰明，為人秀麗清白，有威可畏，有儀可象。女命逢吉多為宰相婦，逢兇殺也主富貴。  
 魁鉞入命限吉凶訣：  
 魁鉞命身限遇昌，常人得此足錢糧，官員遇此高遷擢，必定當年面帝王。  
 擎羊火金，北斗浮星，化氣為刑。入廟權貴，身旺形粗破相，剛強果決，好勇斗狠，機謀狡詐，橫立功名，能奪君子之權，喜西北生人為福，宜命在四墓宮廟地，亦喜四墓生人，會日月男克妻而女剋夫，會昌曲左右有暗痣斑痕，居卯酉陷宮作禍興殃，傷殘帶疾目眇，六甲六戊寅申生人守命，主其人孤單，不守祖業，二姓延生，巧藝為活，廉貞火巨忌星陷地同宮，則帶暗疾，或面手足有傷殘，且不善終，一生多招刑禍，否則為僧道。女命入廟權貴，陷地傷夫克子，孤刑破相淫蕩。  
 辰戌丑未入廟，亦宜辰戌丑未生人財官格。  
 子午卯酉陷地。  
 擎羊入男命吉凶訣：  
 祿前一位安擎羊，上將逢之福祿加，更得貴人相守照，兵權萬里壯皇家。  
 擎羊守命性剛強，四墓生人福壽長，若得紫府來會合，須知財谷富倉箱。  
 擎羊一曜落閒宮，陀火衝兮便是兇，更若身命同劫殺，定然夭絕在途中。  
 擎羊入女命吉凶訣：  
 北斗浮星女命逢，火機巨忌必常庸，三方兇殺兼來湊，不夭終須浪滾濤。  
 擎羊入男命吉凶訣：  
 擎羊守限細推詳，四墓生人免災殃，若遇紫微昌府會，財官顯達福悠長。  
 天羅地網遇擎羊，二限衝兮禍患戕，若是命中主星弱，定教一疾夢黃泉。  
 擎羊加殺最為兇，二限休教落陷逢，克子刑妻賣田莊，徙流貶配去從戎。  
 陀羅火金，北斗浮星，化氣為忌。入廟身雄形粗，賦性剛強，破相氣高，橫發橫破，不守祖業，為人飄蓬，不作本處居民，作事退悔，有始無終。喜西北生人為福，及四墓生人又坐四墓宮，加吉星眾者為福，會日月忌宿男克妻而女剋夫，加忌且損目，會昌曲左右有暗痣斑痕，若無正星而獨守命者，孤單棄祖，入贅二姓延生，巧藝為活。若居陷地逢巨殺，必傷妻克子，背六親且傷殘帶疾。僧道吉利，女命內狠外虛，凌夫克子，六親不和又無廉恥。  
 辰戌丑未入廟，亦宜辰戌丑未生人利益。  
 寅申巳亥陷地。  
 陀羅入男命吉凶訣：  
 陀羅命內坐中存，更喜人生四墓中，再得紫微昌府合，財祿豐盈遠播名。  
 陀羅在陷不堪聞，口舌官非一世侵，財散人離人孤獨，所為所作不如心。  
 陀羅入女命吉凶訣：  
 陀羅一曜女命逢，遇吉加臨淫蕩容，兇殺三方相照破，須防相別主人翁。  
 陀羅入限吉凶訣：  
 限遇陀羅事亦多，必然忍耐要謙和，若無吉曜同相會，須教一夢入南柯。  
 夾身夾命有陀羊，火鈴空劫又來傷，天祿不逢生旺地，刑妻克子不為良。  
 火星，南斗浮星。性剛強出眾，唇齒四肢有傷，毛髮有異，形容各別。諸宮不美，惟貪狼廟旺同度，指日立邊功，為財官格，利東南生人不利西北生人，及喜寅卯巳午生人為禍較輕，更與擎羊同垣，則襁褓災厄，孤克下局，只宜過房由外家寄養，或重拜父母方可。女命心毒內狠外虛狡詐，凌夫克子，不守婦道，多是非，淫慾下賤。  
 寅午戌人宜，申子辰人陷災吝困頓，巳酉丑人得地吉，亥卯未人利益，吉多發福。  
 火星入限吉凶訣：  
 火星得地限宮逢，喜氣盈門百事通，仕宦逢之皆發福，常人得此財豐隆。  
 火星一宿最乖張，無事官災鬧一場，克害六親應不免，破財艱苦免恓惶。  
 鈴星火，南斗浮星。性毒形神破相，膽大出眾，宜寅午戌人權貴，亦利東南生人限行福厚，西北生人限行成敗，雖富貴亦不耐久，入廟遇貪狼武曲，威鎮邊夷，更會紫府左右不貴即富，如居陷地夭折破相延壽，或離祖重拜父母。女命性剛背六親，傷夫克子，遇吉始能豐足。  
 鈴星入限吉凶訣：  
 限至鈴星事若何，貪狼相遇福還多，更加入廟逢諸吉，富貴聲揚處處歌。  
 鈴星一宿不可當，守臨二限必癲狂，若無吉曜來相照，未免招災惹禍殃。  
 火鈴二星入男命吉凶訣：  
 火鈴二曜居廟地，貪狼紫府宜相會，為人性急有威權，鎮壓鄉邦終有貴。  
 火鈴在命落閒宮，西北生人作事庸，破盡家財終不久，須教帶疾免災兇。  
 火鈴二星入女命吉凶訣：  
 火鈴之星入命來，貪狼相會得和諧，三方無殺諸般美，坐守香閨得遂懷。  
 火鈴二曜最難當，女命逢之必刑傷，若遇三方加殺湊，須防目下入泉鄉。  
 火鈴二星入限吉凶訣：  
 火鈴二星事若何，貪狼相會福還多，更加吉曜多權柄，富貴聲揚處處歌。  
 火鈴限陷血濃侵，失脫尋常不可尋，口舌官災應不免，須防無妄禍來臨。  
 地劫火，乃劫殺之神，性惡作事疏狂，動靜增惡，不行正道，為邪僻之事，有吉禍輕，三方四正加殺多者夭壽論。  
 女命只可為偏房妓婢而已。  
 地劫入命吉凶訣：  
 地劫從來生髮疾，命中相遇多啾唧，若遇羊火在其中，辛苦持家防內室。  
 地劫入限吉凶訣：  
 劫星二限若相逢，未免當年有禍危，太歲殺臨多疾厄，官符星遇有官符。  
 天空乃空亡之神，性惡作事虛空，不行正道，成敗多端不聚財，退祖榮昌，空多不吉，名曰斷橋，有吉禍輕，四殺加少者平常論，多者下賤。太歲二限遇逢，有正曜星加吉者平安，經雲：項羽英雄，限到天空而喪國。  
 女命單守只可為偏房妓婢。  
 天空入命吉凶訣：  
 命坐天空定出家，文昌天相實堪誇，若逢四殺同身命，受蔭承恩福可佳。  
 天空入限吉凶訣：  
 天空入限破田莊，妻子須防有損傷，財帛不惟多敗失，更憂壽命入泉鄉。  
 地劫天空同入限吉凶訣：  
 極居卯酉劫空臨，為僧為道福興隆，樂享山林有師號，福壽雙全到古齡。  
 劫空二限最乖張，夫子在陳也絕糧，項羽英雄曾喪國，綠珠逢此墜樓亡。  
 天傷水，乃虛耗之神，守臨二限遇太歲，不問得地，只要眾星吉方可獲善，若無正星又值羊火巨機，必主官災喪服破財，橫事相侵，夫子絕糧限到天傷。  
 天使水，乃傳使之星，務審人間禍福之由，若二限太歲俱臨，有吉星眾者禍輕，若無正星又值巨機羊火，則官災喪亡，橫事破家。  
 天傷天使入限吉凶訣：  
 天耗守限號天傷，夫子在陳也絕糧，天使限臨人共忌，石崇豪富破家亡。  
 天馬火，最喜會祿存，極忌截路空亡。如命在辰戌丑未，遇寅申巳亥有天馬在夫妻宮，加吉會者富貴，加殺不美，加權祿照臨，必主男為官，女封贈。  
 天馬入限吉凶訣：  
 天馬臨限最為良，紫府祿存遇非常，官宦逢之應顯達，士人遇此赴科場。  
 天馬守限不得住，又怕劫空來相遇，更兼太歲坐宮中，限到其人尋死路。  
 化祿星土，為福德之神，守身命官祿之位，科權相遇必作大臣之職，小限逢之主進仕之喜，大限十年吉慶，惡曜來臨並羊陀火忌衝照，亦不為害。女人吉湊作命婦，內外威嚴，殺湊平常。  
 化祿入命斷訣：  
 十干化祿最為榮，男命逢之福自申，武職題名邊塞上，文人名譽滿朝廷。  
 祿主天同遇太陽，常人大富足田莊，資財六畜皆生旺，凡有施為盡吉祥。  
 化祿入限斷訣：  
 限中若遇祿來臨，爵位高遷佐聖明，常庶相逢當大貴，自然蓄積廣金銀。  
 化權星木，掌判生殺之神，守身命科祿相迎，則出將入相，會巨門武曲必專大事，掌握兵符，為人極古怪，到處欲人敬重，小限相逢無有不吉，大限十年必遂，逢兇亦不為災，如遇羊陀耗使空劫，聽說貽累，官災貶謫。女人得之內外稱意，僧道掌山林，有師號。  
 化權入男命吉凶訣：  
 權星最喜吉星扶，事業軒昂膽氣粗，更值巨門兼武曜，三邊鎮守掌兵符。  
 化權入女命吉凶訣：  
 化權吉曜喜相逢，更吉加臨衣祿豐，富貴雙全人性硬，奪夫權柄福興隆。  
 化權入限吉凶訣：  
 此星主限喜非常，官祿高升佐帝王，財帛豐添宜創業，從今家道保安康。  
 權星若遇武貪臨，作事求謀盡得成，士子名高添福祿，庶人得此積金銀。  
 化科星水，上界應試之神，主掌文墨之神。守身命權祿相逢，主人聰明通達，最喜逢魁鉞，必中科第，作宰臣之職，如遇惡星，亦為文章秀士，或作群英師範，但嫌截路空亡、旬空、亦畏忌天空。  
 女命科星拱守，作公卿婦，雖四殺衝破也主富貴。  
 化科入男命吉凶訣：  
 科星文宿最為奇，包藏錦繡美文章，一躍禹門龍變化，管教聲達譽朝堂。  
 科星入命豈尋常，錦繡才華展廟廊，更遇曲昌魁鉞宿，龍門一躍姓名揚。  
 化科入女命吉凶訣：  
 化科女命是良星，四德兼全性格清，更遇吉星權祿湊，夫榮子貴作夫人。  
 化科入限吉凶訣：  
 科星二限遇文昌，士子逢之姓名香，僧道庶人多富貴，百謀百遂事英揚。  
 化忌星水，為多管之神，守身命一生不順，招是非，小限逢之一年不足，大限相遇十年悔吝，二限並太歲交臨，斷然蹭蹬，文人不耐久，武人縱有官災口舌不妨，然商賈藝人在處不宜，難立腳，如遇紫府昌曲同吉利，權祿與忌同宮又兼羊火鈴空作事進退，橫發橫破，始終不得久遠，即系發不住財是也，一生奔波勞碌或帶疾貧夭，僧道亦流移還俗。然天同在戌化忌，丁生人遇吉，巨門在辰化忌辛生人返佳，若太陽在寅卯辰巳午化忌，太陰在酉戌亥子化忌為福論。若日月陷地化忌，主大凶。如廉貞在亥化忌是也，火入泉鄉，又逢水命人化忌也不為害。  
 化忌入男命吉凶訣：  
 諸星化忌不宜逢，更會兇星愈肆兇，若得吉星來助救，縱然富貴不豐隆。  
 貪狼破軍居陷地，遇吉化忌終不利，男為奸盜女淫娼，加殺照命無眠睡。  
 化忌入女命吉凶訣：  
 女命化忌本非奇，更遇兇星是禍基，衣食艱辛貧賤甚，吉星湊合減災危。  
 化忌入限吉凶訣：  
 忌星入廟反為佳，縱有官災亦不傷，一進一退名不遂，更兼遇吉保安康。  
 二限宮中見忌星，致災為禍必家傾，為官退職遭贓濫，胥吏須防禁杖刑。  
 忌星落陷在閒宮，惡殺加臨作禍兇，財散人離多疾苦，傷官退職孝重逢。  
 祿會祿存富貴，權會巨武英揚，科會魁鉞貴顯，忌會身命招是非。  
 歲君火，乃流年太歲星君，與諸凶神相遇皆與不謀，忌與大小二限相沖，若逢大限遇紫府昌曲左右魁鉞吉星扶救則災少，但防六畜死失，若遇羊陀火鈴劫空傷使，財破人亡，女命逢之防產難之厄，若吉眾有救，惡多死亡。  
 太歲之星不可當，守臨官限要推詳，若無吉曜來相助，未免官災鬧一場。  
 斗君，正月初一日管事，遇吉斷吉，遇兇斷兇，如太歲二限美，若斗君正月初一日值在某宮過度，逢兇殺也主其年有得失災病官非，依月限斷之。`},{id:"lun-xiongdi",title:"二 兄弟",volume:2,blocks:[{type:"prose",text:"二 兄弟"},{type:"prose",text:" 紫微有倚靠年長之兄，天府同三人，天相同三四人，破軍同亦有三人，或各胞生，加羊陀火鈴空劫克害有則欠和。"},{type:"prose",text:" 天機廟旺有二人，與巨門同二人，陷地，相背不一心，天梁同二人，太陰同二三人，見羊陀火鈴雖有而克害。"},{type:"prose",text:" 太陽廟旺三人，與巨門同無殺加有三人，太陰同五人，陷地，不和欠力，加羊陀火鈴空劫更克減半。"},{type:"prose",text:" 武曲廟旺有二人，不合，陷宮加殺只一人，天相同二人，破軍七殺同有一人，不和睦，加昌曲左右有三人，見羊陀火鈴空劫孤單。"},{type:"prose",text:" 天同入廟四五人，天梁同二三人，巨門同無殺三人，太陰同四五人，陷地，只二人，見羊陀火鈴空劫忌，少宜分居不和。"},{type:"prose",text:" 廉貞入廟二人，貪狼同招怨天相同二人，七殺同一人，天府同加左右昌曲有三人，見羊陀火鈴空劫有克且不和。兄弟感情融洽，但兄弟不多。"},{type:"prose",text:" 天府有五人，紫微同加左右昌曲有六七人，廉貞同三人，見羊陀火鈴空劫只二人。"},{type:"prose",text:" 太陰入廟兄弟五人，太陽同亦五六人，天機同二人，科權同四五人，見羊陀火鈴空劫減半，且克宜分居相背。"},{type:"prose",text:" 貪狼廟旺二人，陷地宜各胞，廉貞同不和，紫微同有三人，加羊陀火鈴空劫孤單。"},{type:"prose",text:" 巨門廟旺二人，陷地，各胞有，宜分居，太陽同加左右昌曲有三人，天機同有二人，更乖違不一心，天同二三人，加羊陀火鈴空劫孤克。"},{type:"prose",text:" 天相和平有二三人，見殺全無紫微同有三四人，武曲同二人，廉貞同二人，見羊陀火鈴空劫孤單。"},{type:"prose",text:" 天梁廟旺二人和順，或多不同胞且不和，陷宮全無，天同同三人，天機同二人，見羊陀火鈴空劫少。"},{type:"prose",text:" 七殺主孤克，在子午寅申宮方有三人，也不和宜各人，加昌曲左右更好。"},{type:"prose",text:" 破軍入廟三人，陷地加殺孤單，武曲同二人，紫微同二人，廉貞同一人，加昌曲左右有三人和睦加，羊陀火鈴空劫孤單。"},{type:"prose",text:" 文昌文曲諸宮皆有三人，見羊陀火鈴，廟旺不克，陷宮孤單，加空劫全無。"},{type:"prose",text:" 左輔有三人，同天同昌曲有四五人，加羊陀火鈴二人，有空劫欠力不和。"},{type:"prose",text:" 右弼三人，同府相紫微昌曲有四五人，加羊陀火鈴二人，有空劫欠力不和睦。"},{type:"prose",text:" 祿存相生有兄弟見殺克害招怨。"},{type:"prose",text:" 羊玲克害入廟一人，眾吉星加有二三人，陷地全無。"},{type:"prose",text:" 火星入廟逢有吉星有一二人，加廉殺破鈴孤克。"},{type:"prose",text:" 鈴星入廟相生有兄弟，加羊陀火空劫全無。"},{type:"prose",text:" 斗君逢在兄弟宮過度，逢吉星兄弟一年和睦，逢兇殺有刑者不見刑主有兄弟爭斗。"}],raw:`二 兄弟  
 紫微有倚靠年長之兄，天府同三人，天相同三四人，破軍同亦有三人，或各胞生，加羊陀火鈴空劫克害有則欠和。  
 天機廟旺有二人，與巨門同二人，陷地，相背不一心，天梁同二人，太陰同二三人，見羊陀火鈴雖有而克害。  
 太陽廟旺三人，與巨門同無殺加有三人，太陰同五人，陷地，不和欠力，加羊陀火鈴空劫更克減半。  
 武曲廟旺有二人，不合，陷宮加殺只一人，天相同二人，破軍七殺同有一人，不和睦，加昌曲左右有三人，見羊陀火鈴空劫孤單。  
 天同入廟四五人，天梁同二三人，巨門同無殺三人，太陰同四五人，陷地，只二人，見羊陀火鈴空劫忌，少宜分居不和。  
 廉貞入廟二人，貪狼同招怨天相同二人，七殺同一人，天府同加左右昌曲有三人，見羊陀火鈴空劫有克且不和。兄弟感情融洽，但兄弟不多。  
 天府有五人，紫微同加左右昌曲有六七人，廉貞同三人，見羊陀火鈴空劫只二人。  
 太陰入廟兄弟五人，太陽同亦五六人，天機同二人，科權同四五人，見羊陀火鈴空劫減半，且克宜分居相背。  
 貪狼廟旺二人，陷地宜各胞，廉貞同不和，紫微同有三人，加羊陀火鈴空劫孤單。  
 巨門廟旺二人，陷地，各胞有，宜分居，太陽同加左右昌曲有三人，天機同有二人，更乖違不一心，天同二三人，加羊陀火鈴空劫孤克。  
 天相和平有二三人，見殺全無紫微同有三四人，武曲同二人，廉貞同二人，見羊陀火鈴空劫孤單。  
 天梁廟旺二人和順，或多不同胞且不和，陷宮全無，天同同三人，天機同二人，見羊陀火鈴空劫少。  
 七殺主孤克，在子午寅申宮方有三人，也不和宜各人，加昌曲左右更好。  
 破軍入廟三人，陷地加殺孤單，武曲同二人，紫微同二人，廉貞同一人，加昌曲左右有三人和睦加，羊陀火鈴空劫孤單。  
 文昌文曲諸宮皆有三人，見羊陀火鈴，廟旺不克，陷宮孤單，加空劫全無。  
 左輔有三人，同天同昌曲有四五人，加羊陀火鈴二人，有空劫欠力不和。  
 右弼三人，同府相紫微昌曲有四五人，加羊陀火鈴二人，有空劫欠力不和睦。  
 祿存相生有兄弟見殺克害招怨。  
 羊玲克害入廟一人，眾吉星加有二三人，陷地全無。  
 火星入廟逢有吉星有一二人，加廉殺破鈴孤克。  
 鈴星入廟相生有兄弟，加羊陀火空劫全無。  
 斗君逢在兄弟宮過度，逢吉星兄弟一年和睦，逢兇殺有刑者不見刑主有兄弟爭斗。`},{id:"lun-qieqie",title:"三 妻妾",volume:2,blocks:[{type:"prose",text:"三 妻妾"},{type:"prose",text:" 紫微晚聘諧老性剛，天府同諧老，天相同年少，破軍同克刑，加羊陀火鈴亦刑，貪狼同有吉星免刑。"},{type:"prose",text:" 天機宜年少剛強之，妻可配夫宜長，加羊陀火鈴主生離，晚娶吉，天梁同宜年長，太陰同內助美容。"},{type:"prose",text:" 太陽廟旺遲娶吉，早娶克，因妻得貴，與天梁同加左右招賢明之妻，太陰同內助，巨門同無羊陀火鈴空劫不克，有此四殺，反空劫定克，遇耗非禮成婚。"},{type:"prose",text:" 武曲背克宜遲娶，同年夫婦也相當，加吉星因妻得財，兇娶因妻去產，貪狼同招遲無刑七殺同克二三妻，加羊陀火鈴空劫更克。"},{type:"prose",text:" 天同遲娶諧老，夫宜長妻宜少，加四殺欠和生離，巨門同加四殺亦克，太陰同助美容，天梁同極美夫婦。"},{type:"prose",text:" 廉貞三度作新郎，即貪狼同愈克七殺同亦刑，且欠和加，羊陀火鈴主生離，府諧老性剛者無克。"},{type:"prose",text:" 天府相生寵愛夫主貴，見羊陀火鈴空劫遲娶免刑，晚娶得諧老。"},{type:"prose",text:" 太陰入廟男女皆貴美夫婦，加昌曲極美，加羊陀火鈴空劫耗忌，不克主生離，太陽同諧老，夫同同內助，天機同美好宜少年。"},{type:"prose",text:" 貪狼男女不得美，三次作新郎，入廟宜遲娶，廉貞同主克，加羊陀火鈴主生離，紫微同年長方可對。"},{type:"prose",text:" 巨門宜年長定克欠和，太陽同無四殺加諧老，天機同內助美貌，天同同性聰之妻並頭，加羊陀火鈴空劫定克二妻或主生離。"},{type:"prose",text:" 天相貌美賢淑夫宜年長，親上成親，紫微同諧老，武曲少和，廉貞同入廟免刑，加羊陀火鈴空劫刑剋。"},{type:"prose",text:" 天梁妻宜大美容，天同同和氣，天機招美淑，加羊陀火鈴空劫朵不和順。"},{type:"prose",text:" 七殺早克，武曲同亦克，或遲娶免刑，廉貞主生離，加羊陀火鈴空劫克三妻。"},{type:"prose",text:" 破軍男女俱克別聚主生離，武曲同克三，廉貞亦克且欠和，紫微同宜年長之妻。"},{type:"prose",text:" 文昌妻少內助聰明，天機太陰同主美容，不宜陷地，加羊陀火鈴空劫深忌。"},{type:"prose",text:" 文曲相生會太陰諸吉星諧老，同昌曲妻妾多，加羊陀火鈴空劫忌星有克。"},{type:"prose",text:" 祿存相生無克，妻宜年少並頭遲娶者，加羊陀火鈴空劫見截路空亡孤單。"},{type:"prose",text:" 左輔右弼諧老，加羊陀火鈴空劫貪廉同，宜年長剛強之妻。"},{type:"prose",text:" 羊陀入廟加吉星，遲娶免刑或久和，陷地早克，加日月巨機火鈴武殺，主生離。"},{type:"prose",text:" 火星鈴星入廟加吉無刑，陷地刑剋。"},{type:"prose",text:" 天魁天鉞多主夫婦美麗，坐妻宮必主得妻財，加吉星同主貴美夫婦。"},{type:"prose",text:" 斗君過度在妻宮逢吉星妻妾美無災克，逢惡星妻妾有災厄，又看人本命妻宮若克妻者的主其年刑傷妻妾，若不克者可斷其年有災。"}],raw:`三 妻妾  
 紫微晚聘諧老性剛，天府同諧老，天相同年少，破軍同克刑，加羊陀火鈴亦刑，貪狼同有吉星免刑。  
 天機宜年少剛強之，妻可配夫宜長，加羊陀火鈴主生離，晚娶吉，天梁同宜年長，太陰同內助美容。  
 太陽廟旺遲娶吉，早娶克，因妻得貴，與天梁同加左右招賢明之妻，太陰同內助，巨門同無羊陀火鈴空劫不克，有此四殺，反空劫定克，遇耗非禮成婚。  
 武曲背克宜遲娶，同年夫婦也相當，加吉星因妻得財，兇娶因妻去產，貪狼同招遲無刑七殺同克二三妻，加羊陀火鈴空劫更克。  
 天同遲娶諧老，夫宜長妻宜少，加四殺欠和生離，巨門同加四殺亦克，太陰同助美容，天梁同極美夫婦。  
 廉貞三度作新郎，即貪狼同愈克七殺同亦刑，且欠和加，羊陀火鈴主生離，府諧老性剛者無克。  
 天府相生寵愛夫主貴，見羊陀火鈴空劫遲娶免刑，晚娶得諧老。  
 太陰入廟男女皆貴美夫婦，加昌曲極美，加羊陀火鈴空劫耗忌，不克主生離，太陽同諧老，夫同同內助，天機同美好宜少年。  
 貪狼男女不得美，三次作新郎，入廟宜遲娶，廉貞同主克，加羊陀火鈴主生離，紫微同年長方可對。  
 巨門宜年長定克欠和，太陽同無四殺加諧老，天機同內助美貌，天同同性聰之妻並頭，加羊陀火鈴空劫定克二妻或主生離。  
 天相貌美賢淑夫宜年長，親上成親，紫微同諧老，武曲少和，廉貞同入廟免刑，加羊陀火鈴空劫刑剋。  
 天梁妻宜大美容，天同同和氣，天機招美淑，加羊陀火鈴空劫朵不和順。  
 七殺早克，武曲同亦克，或遲娶免刑，廉貞主生離，加羊陀火鈴空劫克三妻。  
 破軍男女俱克別聚主生離，武曲同克三，廉貞亦克且欠和，紫微同宜年長之妻。  
 文昌妻少內助聰明，天機太陰同主美容，不宜陷地，加羊陀火鈴空劫深忌。  
 文曲相生會太陰諸吉星諧老，同昌曲妻妾多，加羊陀火鈴空劫忌星有克。  
 祿存相生無克，妻宜年少並頭遲娶者，加羊陀火鈴空劫見截路空亡孤單。  
 左輔右弼諧老，加羊陀火鈴空劫貪廉同，宜年長剛強之妻。  
 羊陀入廟加吉星，遲娶免刑或久和，陷地早克，加日月巨機火鈴武殺，主生離。  
 火星鈴星入廟加吉無刑，陷地刑剋。  
 天魁天鉞多主夫婦美麗，坐妻宮必主得妻財，加吉星同主貴美夫婦。  
 斗君過度在妻宮逢吉星妻妾美無災克，逢惡星妻妾有災厄，又看人本命妻宮若克妻者的主其年刑傷妻妾，若不克者可斷其年有災。`},{id:"lun-zinv",title:"四 子女",volume:2,blocks:[{type:"prose",text:"四 子女"},{type:"prose",text:" 凡看子女先看本宮星宿主有几子。若加羊陀火玲空劫殺忌主生子女有刑剋，次看對宮有衝刑否。如本宮無星曜專看對宮有何星宿主有几子。若善星貴星守子女宮必主其人生子昌盛貴顯。若惡星又同刑殺守子女宮，不是刑剋，主生強橫破蕩之子。又看三方四正得南斗星多主生男，北斗星多主生女。若太陽星落在陽宮主先生男，太陰星落在陰宮主先生女。專看刑殺守本宮無制化相生，必然絕祀。日生最怕太陰臨，夜生最怕太陽照，此星若在兒女宮方恐無兒。"},{type:"prose",text:" 紫微廟旺男三女二，加左右昌曲有五人，加羊陀火鈴空劫只一雙，不然偏室生者多，或招祀子居長，破軍同三人，天府同加吉星四五人，加昌曲左右有貴子，若獨守再加空劫孤君。"},{type:"prose",text:" 天機廟旺二人，或庶生多，巨門一人，天梁同在寅宮，有二三人，在申宮女多男少，只可一子，太陰同二三人，加羊陀火鈴空劫全無子。"},{type:"prose",text:" 太陽入廟男三女二晚子貴，巨門同三人，太陰同五人，陷地有三子不成蓋，再加羊陀火鈴空劫止留一子送終。"},{type:"prose",text:" 武曲主一子或成至生者多，破軍同主刑，止有一人，加羊陀火鈴空劫絕祀，貪狼晚招二子，天相同先招外子，後親生一子，七殺同主孤或傷殘之子。"},{type:"prose",text:" 天同廟旺五子有貴，巨門同三人，太陰同五人，在午宮陷地減半，天梁同先女後男有二子，守在申宮只可留一子送終，在寅宮加吉星有三子，加羊陀火鈴空劫見刑剋，子少送終。"},{type:"prose",text:" 廉貞一人，天府同主貴子三人，若貪狼破軍七殺同主孤，再加羊陀火鈴空劫全無，天相同有二子。"},{type:"prose",text:" 天府五人，武曲同二人，紫微同四五人，廉貞同三人，加羊陀火鈴空劫止三人。"},{type:"prose",text:" 太陰女三男二先女後男，廟旺有貴子，陷地減半，招軟弱之子，或虛花不成器，太陽同五人，天機同二人，天同同五人，廟地無克，陷宮有克，加羊陀火鈴空劫子少。"},{type:"prose",text:" 貪狼廟旺二人，早有刑剋，紫微同二人，廉貞同子少，如占星二人，武曲同三人，先難後易。"},{type:"prose",text:" 巨門入廟二入，先難後易，太陽同居一二子易養，加羊陀火鈴子少，天機同一人，有吉星同二人加空劫全無。"},{type:"prose",text:" 天相無羊陀火鈴同有二子成器，有殺先招祀子居長，親生一二子，紫微同如昌曲左右有三四人，武曲同有三人，見羊陀火鈴空劫必克，宜偏室生。"},{type:"prose",text:" 天梁廟旺二人，加羊陀火鈴空劫早克，天同同加昌曲左右吉星有三人，天機同有二人，加羊陀火鈴空劫全無。"},{type:"prose",text:" 七殺主孤一人之分，紫微同再吉星有三人，見羊陀火鈴空劫全無，縱有不成器，必強橫敗家之子。"},{type:"prose",text:" 破軍入廟三人，剛強之子，紫微同三人，武曲同加昌曲左右有三人，廉貞同一人，見羊陀相生有制，無制見空劫火陀少子。"},{type:"prose",text:" 左輔單居男三女一，見紫微天府諸吉星主貴子，見破殺羊陀火鈴空劫止二人，有也不成器。"},{type:"prose",text:" 右弼三人加吉星有貴子，見羊陀火鈴空劫減半。"},{type:"prose",text:" 文昌三人，加吉星更多，有擎陀火鈴空劫只可一子之分。"},{type:"prose",text:" 文曲廟旺有四人，陷地有二三人，加擎羊羅陀火鈴子少。"},{type:"prose",text:" 祿存主孤宜庶出一螟蛉之子，加吉星有一人，加火星諸殺孤刑。"},{type:"prose",text:" 羊陀陷宮孤單，加吉星廟旺有一人，如對宮有吉星多無殺衝，亦有三四人，見耗殺忌，在本宮絕嗣。"},{type:"prose",text:" 火星逢吉同不孤，陷宮加殺刑傷。"},{type:"prose",text:" 鈴星獨守孤單，加吉星入廟可許庶出，看對宮吉多二三人。"},{type:"prose",text:" 魁鉞單守主有貴子。"},{type:"prose",text:" 斗君在子女宮過度，逢吉子女昌盛，逢兇刑剋或子破家。"}],raw:`四 子女  
 凡看子女先看本宮星宿主有几子。若加羊陀火玲空劫殺忌主生子女有刑剋，次看對宮有衝刑否。如本宮無星曜專看對宮有何星宿主有几子。若善星貴星守子女宮必主其人生子昌盛貴顯。若惡星又同刑殺守子女宮，不是刑剋，主生強橫破蕩之子。又看三方四正得南斗星多主生男，北斗星多主生女。若太陽星落在陽宮主先生男，太陰星落在陰宮主先生女。專看刑殺守本宮無制化相生，必然絕祀。日生最怕太陰臨，夜生最怕太陽照，此星若在兒女宮方恐無兒。  
 紫微廟旺男三女二，加左右昌曲有五人，加羊陀火鈴空劫只一雙，不然偏室生者多，或招祀子居長，破軍同三人，天府同加吉星四五人，加昌曲左右有貴子，若獨守再加空劫孤君。  
 天機廟旺二人，或庶生多，巨門一人，天梁同在寅宮，有二三人，在申宮女多男少，只可一子，太陰同二三人，加羊陀火鈴空劫全無子。  
 太陽入廟男三女二晚子貴，巨門同三人，太陰同五人，陷地有三子不成蓋，再加羊陀火鈴空劫止留一子送終。  
 武曲主一子或成至生者多，破軍同主刑，止有一人，加羊陀火鈴空劫絕祀，貪狼晚招二子，天相同先招外子，後親生一子，七殺同主孤或傷殘之子。  
 天同廟旺五子有貴，巨門同三人，太陰同五人，在午宮陷地減半，天梁同先女後男有二子，守在申宮只可留一子送終，在寅宮加吉星有三子，加羊陀火鈴空劫見刑剋，子少送終。  
 廉貞一人，天府同主貴子三人，若貪狼破軍七殺同主孤，再加羊陀火鈴空劫全無，天相同有二子。  
 天府五人，武曲同二人，紫微同四五人，廉貞同三人，加羊陀火鈴空劫止三人。  
 太陰女三男二先女後男，廟旺有貴子，陷地減半，招軟弱之子，或虛花不成器，太陽同五人，天機同二人，天同同五人，廟地無克，陷宮有克，加羊陀火鈴空劫子少。  
 貪狼廟旺二人，早有刑剋，紫微同二人，廉貞同子少，如占星二人，武曲同三人，先難後易。  
 巨門入廟二入，先難後易，太陽同居一二子易養，加羊陀火鈴子少，天機同一人，有吉星同二人加空劫全無。  
 天相無羊陀火鈴同有二子成器，有殺先招祀子居長，親生一二子，紫微同如昌曲左右有三四人，武曲同有三人，見羊陀火鈴空劫必克，宜偏室生。  
 天梁廟旺二人，加羊陀火鈴空劫早克，天同同加昌曲左右吉星有三人，天機同有二人，加羊陀火鈴空劫全無。  
 七殺主孤一人之分，紫微同再吉星有三人，見羊陀火鈴空劫全無，縱有不成器，必強橫敗家之子。  
 破軍入廟三人，剛強之子，紫微同三人，武曲同加昌曲左右有三人，廉貞同一人，見羊陀相生有制，無制見空劫火陀少子。  
 左輔單居男三女一，見紫微天府諸吉星主貴子，見破殺羊陀火鈴空劫止二人，有也不成器。  
 右弼三人加吉星有貴子，見羊陀火鈴空劫減半。  
 文昌三人，加吉星更多，有擎陀火鈴空劫只可一子之分。  
 文曲廟旺有四人，陷地有二三人，加擎羊羅陀火鈴子少。  
 祿存主孤宜庶出一螟蛉之子，加吉星有一人，加火星諸殺孤刑。  
 羊陀陷宮孤單，加吉星廟旺有一人，如對宮有吉星多無殺衝，亦有三四人，見耗殺忌，在本宮絕嗣。  
 火星逢吉同不孤，陷宮加殺刑傷。  
 鈴星獨守孤單，加吉星入廟可許庶出，看對宮吉多二三人。  
 魁鉞單守主有貴子。  
 斗君在子女宮過度，逢吉子女昌盛，逢兇刑剋或子破家。`},{id:"lun-caibo",title:"五 財帛",volume:2,blocks:[{type:"prose",text:"五 財帛"},{type:"prose",text:" 紫微豐足倉箱，加羊陀火鈴空劫不旺，破軍同先難後易，天相同財帛蓄積，天府同富足終身保守，加左右為財富之官，七殺同加吉財帛橫發。"},{type:"prose",text:" 天機勞心費力生財，巨門同鬧中求取，天梁同機關巧計生外財，太陰同陷宮成敗，加羊陀火鈴空劫一生有成有敗。"},{type:"prose",text:" 太陽入廟豐足，陷宮勞碌不遂，太陰同加左右吉星發財不小，祿存同操心得財玫大富，巨門同早年成敗中未充盈。"},{type:"prose",text:" 武曲豐足化吉有鉅萬家資，無吉加鬧中進財，破軍同東來西去先無後有，天相同財帛豐盈，遇貴生財成家，七殺同白手生財成家，貪狼同三十年後方發財，加羊陀火鈴不聚極怕空亡。"},{type:"prose",text:" 天同白手生財晚發，巨門同財氣進退，天梁同財大旺，加四殺空劫或九流人生財成家。"},{type:"prose",text:" 廉貞在申寅宮鬧中生財，陷宮先難後易，貪狼生橫發橫破，見羊火極生橫進之財，七殺同鬧中取，天相同富足倉箱，如耗劫天空常在官府中破財。"},{type:"prose",text:" 天府富足，見羊陀火鈴空劫有成敗，紫微同巨積，廉貞武曲同加權祿為富奢翁。"},{type:"prose",text:" 太陰入廟富足倉箱，陷宮成敗不聚，太陽同先少後多，天機同白手生財成家，天同同財旺生身，祿存兼左右同主大富。"},{type:"prose",text:" 貪狼廟旺橫發，陷地貧窮，紫微同守現成，家計自後更豐盈，見火星三十年前成敗，三十年後橫發。"},{type:"prose",text:" 巨門白手生財成家，宜鬧中取，氣高之人橫破，太陽同入廟守見成家計，天機同財氣生身，所作不一，天同同白手成家，九流人吉，加羊陀火鈴空劫破財多端。"},{type:"prose",text:" 天相富足，紫微同財氣橫進，武曲同加四殺百工生財，廉貞同商賈生財，加羊陀火鈴空劫耗忌，成敗無積聚。"},{type:"prose",text:" 天梁富足入廟上等富貴，陷宮辛勤求財度日，天同同白手生財勝祖，天機同勞心用力發財不多，更改方見成家，加羊陀火鈴空劫，先難後易僅足度日。"},{type:"prose",text:" 破軍在子午宮，多有金銀寶貝蓄積，辰戌旺宮亦財盛，陷宮破不祖聚，武曲同守巳亥宮，東來西去，紫微同先去後生，廉貞同勞碌生財，先難後遂，加空劫極貧。"},{type:"prose",text:" 文昌富足倉箱，加吉星財氣旺，巨門同富，陷地將同陀火鈴空敗寒儒輩。"},{type:"prose",text:" 文曲入廟富足，加吉星得貴人財，加羊陀火鈴空劫家忌，東來西去成敗不遂。"},{type:"prose",text:" 左輔右弼，諸宮富足，會諸吉星得貴人財，加羊陀火鈴空劫耗忌，主成敗而不聚。"},{type:"prose",text:" 祿存富足倉箱堆金積玉，加吉美不待勞而財自加，羊陀火鈴空劫耗忌先無後有。"},{type:"prose",text:" 擎羊辰戌丑未宮鬧中生財，陷地破祖不聚終不能發達，只魚鹽汙垢中生財。"},{type:"prose",text:" 陀羅鬧中生財，陷宮辛勤求財度日，加空劫東來西去。"},{type:"prose",text:" 火星獨守橫發橫破，陷宮辛勤，加吉星財多遂志。"},{type:"prose",text:" 鈴星入廟獨守橫發，陷地孤寒辛苦度日。"},{type:"prose",text:" 魁鉞主清高中生財一生遂意。"},{type:"prose",text:" 斗君遇吉其月發財。遇兇惡空劫耗忌星其月損財，招口舌官非為財而逃。"}],raw:`五 財帛  
 紫微豐足倉箱，加羊陀火鈴空劫不旺，破軍同先難後易，天相同財帛蓄積，天府同富足終身保守，加左右為財富之官，七殺同加吉財帛橫發。  
 天機勞心費力生財，巨門同鬧中求取，天梁同機關巧計生外財，太陰同陷宮成敗，加羊陀火鈴空劫一生有成有敗。  
 太陽入廟豐足，陷宮勞碌不遂，太陰同加左右吉星發財不小，祿存同操心得財玫大富，巨門同早年成敗中未充盈。  
 武曲豐足化吉有鉅萬家資，無吉加鬧中進財，破軍同東來西去先無後有，天相同財帛豐盈，遇貴生財成家，七殺同白手生財成家，貪狼同三十年後方發財，加羊陀火鈴不聚極怕空亡。  
 天同白手生財晚發，巨門同財氣進退，天梁同財大旺，加四殺空劫或九流人生財成家。  
 廉貞在申寅宮鬧中生財，陷宮先難後易，貪狼生橫發橫破，見羊火極生橫進之財，七殺同鬧中取，天相同富足倉箱，如耗劫天空常在官府中破財。  
 天府富足，見羊陀火鈴空劫有成敗，紫微同巨積，廉貞武曲同加權祿為富奢翁。  
 太陰入廟富足倉箱，陷宮成敗不聚，太陽同先少後多，天機同白手生財成家，天同同財旺生身，祿存兼左右同主大富。  
 貪狼廟旺橫發，陷地貧窮，紫微同守現成，家計自後更豐盈，見火星三十年前成敗，三十年後橫發。  
 巨門白手生財成家，宜鬧中取，氣高之人橫破，太陽同入廟守見成家計，天機同財氣生身，所作不一，天同同白手成家，九流人吉，加羊陀火鈴空劫破財多端。  
 天相富足，紫微同財氣橫進，武曲同加四殺百工生財，廉貞同商賈生財，加羊陀火鈴空劫耗忌，成敗無積聚。  
 天梁富足入廟上等富貴，陷宮辛勤求財度日，天同同白手生財勝祖，天機同勞心用力發財不多，更改方見成家，加羊陀火鈴空劫，先難後易僅足度日。  
 破軍在子午宮，多有金銀寶貝蓄積，辰戌旺宮亦財盛，陷宮破不祖聚，武曲同守巳亥宮，東來西去，紫微同先去後生，廉貞同勞碌生財，先難後遂，加空劫極貧。  
 文昌富足倉箱，加吉星財氣旺，巨門同富，陷地將同陀火鈴空敗寒儒輩。  
 文曲入廟富足，加吉星得貴人財，加羊陀火鈴空劫家忌，東來西去成敗不遂。  
 左輔右弼，諸宮富足，會諸吉星得貴人財，加羊陀火鈴空劫耗忌，主成敗而不聚。  
 祿存富足倉箱堆金積玉，加吉美不待勞而財自加，羊陀火鈴空劫耗忌先無後有。  
 擎羊辰戌丑未宮鬧中生財，陷地破祖不聚終不能發達，只魚鹽汙垢中生財。  
 陀羅鬧中生財，陷宮辛勤求財度日，加空劫東來西去。  
 火星獨守橫發橫破，陷宮辛勤，加吉星財多遂志。  
 鈴星入廟獨守橫發，陷地孤寒辛苦度日。  
 魁鉞主清高中生財一生遂意。  
 斗君遇吉其月發財。遇兇惡空劫耗忌星其月損財，招口舌官非為財而逃。`},{id:"lun-jie",title:"六 疾厄",volume:2,blocks:[{type:"prose",text:"六 疾厄"},{type:"prose",text:" 先看命宮星曜落陷加羊陀火鈴空劫化忌守照如何，又看疾厄宮星曜善惡 廟旺落陷如何斷之。"},{type:"prose",text:" 紫微災少，天府同亦少，天相同皮胎勞，如加破軍血氣不和，同羊鈴主有暗疾，加空劫主疢疾心氣疾。"},{type:"prose",text:" 天機襁褓多災，陷地頭面破相，巨門同血氣疾，天梁同下部疾，太陰同瘡災，加羊火陷宮有目疾，四肢無力。"},{type:"prose",text:" 太陽頭風，太陰同加化忌，羊陀主眼目有傷，陷宮亦主目疾欠光明。"},{type:"prose",text:" 武曲襁褓災迍手足頭面有傷，羊陀同一生常有災，天相同招暗疾，七殺同血疾，貪狼同廟旺無疾，陷地加四殺，眼手足疾痔疾瘋瘡。"},{type:"prose",text:" 天同入廟災少，巨門同心氣疾，太陰同加羊火血氣疾，天梁同加四殺心氣疾。"},{type:"prose",text:" 廉貞襁褓災瘡腰足之疾，入廟加吉和平，遇貪狼同，陷地眼疾災多，七殺破軍天府同災少。"},{type:"prose",text:" 天府災少臨災有救，紫微同災少，加羊陀火鈴空劫有瘋疾，廉貞同加劫殺空亡，半途傷殘。"},{type:"prose",text:" 太陰廟旺無災，陷地災多主勞傷之症，女人主大傷殘，若太陽同加吉美一生災少，羊陀火鈴眼目疾，加空劫有瘋疾，天同同加羊陀，陷宮主加症同火鈴多災。"},{type:"prose",text:" 巨門少年膿血之厄，太陽同有頭瘋疽，天同同下部主有瘋症，加羊火酒免之疾，加忌有耳目之憂。"},{type:"prose",text:" 天相災少麵皮黃腫血氣之疾，紫微同災少，武曲同加四殺破相，廉貞同加空劫手足傷。"},{type:"prose",text:" 七殺幼年多災，長主痔疾，武曲同加四殺手足傷殘，廉貞同主目疾，加擎羊四肢有傷殘。"},{type:"prose",text:" 破軍幼年瘡癩濃血羸黃，武曲同目視疾，紫微同災少，廉貞同加羊火四肢有傷殘。"},{type:"prose",text:" 文昌獨守災少，加羊陀火鈴空劫災多，同諸吉星一生無災。"},{type:"prose",text:" 文曲災少加吉星一世無災，加羊陀火鈴空劫，坐陷宮災有。"},{type:"prose",text:" 左輔獨守平和，加吉星災少，見羊陀火鈴空劫常有災。"},{type:"prose",text:" 右弼獨守逢災有救，見羊陀火鈴空劫災多。"},{type:"prose",text:" 祿存少年多災，加吉星災少，見羊陀火鈴四肢必傷殘，加空劫玫暗疾延生。"},{type:"prose",text:" 陀羅幼年災，磨唇齒頭面，有傷破方可延壽。"},{type:"prose",text:" 擎羊有頭瘋之症，或四肢欠力，頭面破相延壽，加吉星災少。"},{type:"prose",text:" 羊鈴主一生災少，身體健旺伶俐。"},{type:"prose",text:" 斗君遇吉身心安寧其年無災。遇兇殺本生人有畏忌其年多災。"}],raw:`六 疾厄  
 先看命宮星曜落陷加羊陀火鈴空劫化忌守照如何，又看疾厄宮星曜善惡 廟旺落陷如何斷之。  
 紫微災少，天府同亦少，天相同皮胎勞，如加破軍血氣不和，同羊鈴主有暗疾，加空劫主疢疾心氣疾。  
 天機襁褓多災，陷地頭面破相，巨門同血氣疾，天梁同下部疾，太陰同瘡災，加羊火陷宮有目疾，四肢無力。  
 太陽頭風，太陰同加化忌，羊陀主眼目有傷，陷宮亦主目疾欠光明。  
 武曲襁褓災迍手足頭面有傷，羊陀同一生常有災，天相同招暗疾，七殺同血疾，貪狼同廟旺無疾，陷地加四殺，眼手足疾痔疾瘋瘡。  
 天同入廟災少，巨門同心氣疾，太陰同加羊火血氣疾，天梁同加四殺心氣疾。  
 廉貞襁褓災瘡腰足之疾，入廟加吉和平，遇貪狼同，陷地眼疾災多，七殺破軍天府同災少。  
 天府災少臨災有救，紫微同災少，加羊陀火鈴空劫有瘋疾，廉貞同加劫殺空亡，半途傷殘。  
 太陰廟旺無災，陷地災多主勞傷之症，女人主大傷殘，若太陽同加吉美一生災少，羊陀火鈴眼目疾，加空劫有瘋疾，天同同加羊陀，陷宮主加症同火鈴多災。  
 巨門少年膿血之厄，太陽同有頭瘋疽，天同同下部主有瘋症，加羊火酒免之疾，加忌有耳目之憂。  
 天相災少麵皮黃腫血氣之疾，紫微同災少，武曲同加四殺破相，廉貞同加空劫手足傷。  
 七殺幼年多災，長主痔疾，武曲同加四殺手足傷殘，廉貞同主目疾，加擎羊四肢有傷殘。  
 破軍幼年瘡癩濃血羸黃，武曲同目視疾，紫微同災少，廉貞同加羊火四肢有傷殘。  
 文昌獨守災少，加羊陀火鈴空劫災多，同諸吉星一生無災。  
 文曲災少加吉星一世無災，加羊陀火鈴空劫，坐陷宮災有。  
 左輔獨守平和，加吉星災少，見羊陀火鈴空劫常有災。  
 右弼獨守逢災有救，見羊陀火鈴空劫災多。  
 祿存少年多災，加吉星災少，見羊陀火鈴四肢必傷殘，加空劫玫暗疾延生。  
 陀羅幼年災，磨唇齒頭面，有傷破方可延壽。  
 擎羊有頭瘋之症，或四肢欠力，頭面破相延壽，加吉星災少。  
 羊鈴主一生災少，身體健旺伶俐。  
 斗君遇吉身心安寧其年無災。遇兇殺本生人有畏忌其年多災。`},{id:"lun-qianyi",title:"七 遷移",volume:2,blocks:[{type:"prose",text:"七 遷移"},{type:"prose",text:" 紫微同左右出外貴人扶持發福，天府同出入通達，天相同在外發財，破軍同貴人見愛，小人不足，加羊陀火鈴空劫在外不安靜。"},{type:"prose",text:" 天機出外遇貴居家有是非，巨門同動中則吉，天梁同出外稱意，太陰同忙中吉，加羊陀火鈴在外多是非身不安靜。"},{type:"prose",text:" 太陽宜出外發福不耐靜守，太陰同出外忙中吉，巨門勞心，加羊陀火鈴空劫在外心身不清閒。"},{type:"prose",text:" 武曲鬧忙中進少不宜靜守，貪狼同作鉅商，七殺破軍同身心不得靜守，加羊陀火鈴在外招是非。"},{type:"prose",text:" 天同出外遇貴人扶持，巨門同勞心，太陰同辛苦，天梁同貴人見愛，加羊陀火鈴空劫在外少遂志。"},{type:"prose",text:" 廉貞出外通達近貴，在家日少，貪狼同鬧中立腳，七殺同在外廣招財，天相同動中則吉，加羊陀並三方有兇殺死於外道。"},{type:"prose",text:" 天府出外遇貴人扶，持同紫微發福，廉貞武曲鬧中取財作鉅商。"},{type:"prose",text:" 太陰入廟出外遇貴發財，陷宮招是非，太陽同極美，太陰同欠寧靜，天同同在廟旺地出外白手生財成家。"},{type:"prose",text:" 貪狼獨守在外勞碌，鬧中橫進財，廉貞同加四殺，在外艱難，武曲同作鉅商，加羊陀火鈴空劫耗殺流年遭兵劫掠。"},{type:"prose",text:" 巨門出外勞心不安，與人不足多是非，加羊陀火鈴空劫愈甚。"},{type:"prose",text:" 天相出外貴人提撕，紫微同吉利，武曲同在外發財，廉貞同加羊陀火鈴招是非小人不足。"},{type:"prose",text:" 天梁出外近貴貴人成就，天同同福厚，天機同藝術途中走。"},{type:"prose",text:" 七殺在外日多，在家日少，武曲同動中則吉，廉貞同在外生財，紫微同在外多遂志，加羊陀火鈴空劫又操心不寧或流蕩天涯。"},{type:"prose",text:" 破軍出外勞心不寧，入廟在外崢嶸，加羊陀火鈴，奔馳巧藝走途中，加文昌文曲武曲相會優伶之人。"},{type:"prose",text:" 文昌出外遇貴發達，小人不足，加羊陀火鈴空劫在外欠安寧。"},{type:"prose",text:" 文曲在外近貴，加吉星得財，加羊陀火鈴少遂志。"},{type:"prose",text:" 左輔動中貴人扶持發福，加羊陀火鈴下人不足多招是非。"},{type:"prose",text:" 右弼出外遇貴人扶持發達，不宜靜守，加羊陀火鈴空劫，在外與人有爭競。"},{type:"prose",text:" 祿存出外衣祿遂心，會羊陀火鈴空劫與人多不足意。"},{type:"prose",text:" 擎羊入廟在外衣祿遂心，加吉星鬧中發財，陷地有成下人多不足。"},{type:"prose",text:" 陀羅會吉星在外遇貴得財，陷地加羊火鈴星空劫多招是非下人不足。"},{type:"prose",text:" 火星獨守出外不安，加吉星鬧中進財，加羊陀空劫招是非在外少遂志。"},{type:"prose",text:" 鈴星有吉星同在外吉，加羊火鈴空劫不足招是非。"},{type:"prose",text:" 斗君過度遇吉動中吉，遇兇殺動中有口舌。"}],raw:`七 遷移  
 紫微同左右出外貴人扶持發福，天府同出入通達，天相同在外發財，破軍同貴人見愛，小人不足，加羊陀火鈴空劫在外不安靜。  
 天機出外遇貴居家有是非，巨門同動中則吉，天梁同出外稱意，太陰同忙中吉，加羊陀火鈴在外多是非身不安靜。  
 太陽宜出外發福不耐靜守，太陰同出外忙中吉，巨門勞心，加羊陀火鈴空劫在外心身不清閒。  
 武曲鬧忙中進少不宜靜守，貪狼同作鉅商，七殺破軍同身心不得靜守，加羊陀火鈴在外招是非。  
 天同出外遇貴人扶持，巨門同勞心，太陰同辛苦，天梁同貴人見愛，加羊陀火鈴空劫在外少遂志。  
 廉貞出外通達近貴，在家日少，貪狼同鬧中立腳，七殺同在外廣招財，天相同動中則吉，加羊陀並三方有兇殺死於外道。  
 天府出外遇貴人扶，持同紫微發福，廉貞武曲鬧中取財作鉅商。  
 太陰入廟出外遇貴發財，陷宮招是非，太陽同極美，太陰同欠寧靜，天同同在廟旺地出外白手生財成家。  
 貪狼獨守在外勞碌，鬧中橫進財，廉貞同加四殺，在外艱難，武曲同作鉅商，加羊陀火鈴空劫耗殺流年遭兵劫掠。  
 巨門出外勞心不安，與人不足多是非，加羊陀火鈴空劫愈甚。  
 天相出外貴人提撕，紫微同吉利，武曲同在外發財，廉貞同加羊陀火鈴招是非小人不足。  
 天梁出外近貴貴人成就，天同同福厚，天機同藝術途中走。  
 七殺在外日多，在家日少，武曲同動中則吉，廉貞同在外生財，紫微同在外多遂志，加羊陀火鈴空劫又操心不寧或流蕩天涯。  
 破軍出外勞心不寧，入廟在外崢嶸，加羊陀火鈴，奔馳巧藝走途中，加文昌文曲武曲相會優伶之人。  
 文昌出外遇貴發達，小人不足，加羊陀火鈴空劫在外欠安寧。  
 文曲在外近貴，加吉星得財，加羊陀火鈴少遂志。  
 左輔動中貴人扶持發福，加羊陀火鈴下人不足多招是非。  
 右弼出外遇貴人扶持發達，不宜靜守，加羊陀火鈴空劫，在外與人有爭競。  
 祿存出外衣祿遂心，會羊陀火鈴空劫與人多不足意。  
 擎羊入廟在外衣祿遂心，加吉星鬧中發財，陷地有成下人多不足。  
 陀羅會吉星在外遇貴得財，陷地加羊火鈴星空劫多招是非下人不足。  
 火星獨守出外不安，加吉星鬧中進財，加羊陀空劫招是非在外少遂志。  
 鈴星有吉星同在外吉，加羊火鈴空劫不足招是非。  
 斗君過度遇吉動中吉，遇兇殺動中有口舌。`},{id:"lun-nupu",title:"八 奴僕",volume:2,blocks:[{type:"prose",text:"八 奴僕"},{type:"prose",text:" 紫微成行得力，旺主生財，加擎羊火鈴陀羅欠力，破軍同先難後有招，天相同得力，加空劫招怨逃走。"},{type:"prose",text:" 天機入廟得力，陷空怨主，天梁同晚招，太陰同欠力，巨門加吉星有奴婢，加擎陀火鈴空劫全難。"},{type:"prose",text:" 太陽入廟旺主發，陷宮無分，有也怨主，會走，太陰同多招，巨門同有多招怨，加羊陀火鈴奴則背主。"},{type:"prose",text:" 武曲旺宮不少，一呼百諾，天府同多奴多婢，破軍同招怨，會走，末年有招，天相同得力，七殺同，背主，貪狼同欠力。"},{type:"prose",text:" 天同得力旺相，巨門先難後易，太陰同得力，天梁同助主，加羊陀火鈴有背主之奴，若見空劫怨主會走。"},{type:"prose",text:" 廉貞陷地奴背主，晚年方招得，入廟一呼百諾，貪狼同欠力，七殺同背主，天同同多奴多婢，加羊陀火鈴不旺，會走。"},{type:"prose",text:" 天府得力一呼百諾，紫微同助主天家，武曲同奴僕有，加陀羊火鈴空劫多背主，逃走。"},{type:"prose",text:" 太陰廟地得力成行，太陽同多奴多婢，天機同欠力，天同同旺主，加羊陀火鈴空劫，雖有而走，陷地全無。"},{type:"prose",text:" 貪狼初難招敗主之奴，陷地全無，廉貞同亦少，紫微同之奴婢加羊陀火鈴空劫雖有難育。"},{type:"prose",text:" 巨門入廟早年不得力，招是非，不能久居，太陽同助主衛家，天同天一心，天同同末年招得。"},{type:"prose",text:" 天相末年招得，紫微同多奴多婢，武曲同怨主，廉貞同末年可招加羊陀火鈴空劫欠力逃走。"},{type:"prose",text:" 天梁奴多旺主，天同同有衛家之奴，天機同不一心。"},{type:"prose",text:" 七殺欺主有剛強之僕，多盜家財，武曲同背主廉貞欠力，加羊陀火鈴空劫全，難招。"},{type:"prose",text:" 破軍入廟得力，陷宮招怨背主，武曲同違背，紫微同得力，廉貞同欠力，加羊陀火鈴空劫難招。"},{type:"prose",text:" 文昌入廟獨守得力助主，加羊陀火鈴空劫雖有背主。"},{type:"prose",text:" 文曲入廟得力，陷宮無分，加羊陀火鈴空劫怨主逃走。"},{type:"prose",text:" 左輔獨守旺相一呼百諾，加羊陀火鈴空劫耗忌背主難招。"},{type:"prose",text:" 右弼獨守成行，加羊陀火鈴空劫耗忌，背主盜財而走。"},{type:"prose",text:" 祿存奴僕多，加吉星衛主起家，見羊陀火鈴耗忌欠力。"},{type:"prose",text:" 擎羊背主招怨不得力，有也不長久入廟晚年方可招。"},{type:"prose",text:" 陀羅奴僕欠力怨主，入廟加吉星有分。"},{type:"prose",text:" 火星獨守怨主不得力，加吉星入廟可招一二。"},{type:"prose",text:" 鈴星獨守不得力，恨主，會吉星入廟，助主衛家，加空劫耗忌全欠力。"},{type:"prose",text:" 斗君過度逢吉星則奴僕歸順。逢兇忌耗殺或恨主而走，或兇奴僕而招是非。"}],raw:`八 奴僕  
 紫微成行得力，旺主生財，加擎羊火鈴陀羅欠力，破軍同先難後有招，天相同得力，加空劫招怨逃走。  
 天機入廟得力，陷空怨主，天梁同晚招，太陰同欠力，巨門加吉星有奴婢，加擎陀火鈴空劫全難。  
 太陽入廟旺主發，陷宮無分，有也怨主，會走，太陰同多招，巨門同有多招怨，加羊陀火鈴奴則背主。  
 武曲旺宮不少，一呼百諾，天府同多奴多婢，破軍同招怨，會走，末年有招，天相同得力，七殺同，背主，貪狼同欠力。  
 天同得力旺相，巨門先難後易，太陰同得力，天梁同助主，加羊陀火鈴有背主之奴，若見空劫怨主會走。  
 廉貞陷地奴背主，晚年方招得，入廟一呼百諾，貪狼同欠力，七殺同背主，天同同多奴多婢，加羊陀火鈴不旺，會走。  
 天府得力一呼百諾，紫微同助主天家，武曲同奴僕有，加陀羊火鈴空劫多背主，逃走。  
 太陰廟地得力成行，太陽同多奴多婢，天機同欠力，天同同旺主，加羊陀火鈴空劫，雖有而走，陷地全無。  
 貪狼初難招敗主之奴，陷地全無，廉貞同亦少，紫微同之奴婢加羊陀火鈴空劫雖有難育。  
 巨門入廟早年不得力，招是非，不能久居，太陽同助主衛家，天同天一心，天同同末年招得。  
 天相末年招得，紫微同多奴多婢，武曲同怨主，廉貞同末年可招加羊陀火鈴空劫欠力逃走。  
 天梁奴多旺主，天同同有衛家之奴，天機同不一心。  
 七殺欺主有剛強之僕，多盜家財，武曲同背主廉貞欠力，加羊陀火鈴空劫全，難招。  
 破軍入廟得力，陷宮招怨背主，武曲同違背，紫微同得力，廉貞同欠力，加羊陀火鈴空劫難招。  
 文昌入廟獨守得力助主，加羊陀火鈴空劫雖有背主。  
 文曲入廟得力，陷宮無分，加羊陀火鈴空劫怨主逃走。  
 左輔獨守旺相一呼百諾，加羊陀火鈴空劫耗忌背主難招。  
 右弼獨守成行，加羊陀火鈴空劫耗忌，背主盜財而走。  
 祿存奴僕多，加吉星衛主起家，見羊陀火鈴耗忌欠力。  
 擎羊背主招怨不得力，有也不長久入廟晚年方可招。  
 陀羅奴僕欠力怨主，入廟加吉星有分。  
 火星獨守怨主不得力，加吉星入廟可招一二。  
 鈴星獨守不得力，恨主，會吉星入廟，助主衛家，加空劫耗忌全欠力。  
 斗君過度逢吉星則奴僕歸順。逢兇忌耗殺或恨主而走，或兇奴僕而招是非。`},{id:"lun-guanlu",title:"九 官祿",volume:2,blocks:[{type:"prose",text:"九 官祿"},{type:"prose",text:" 紫微廟旺遇左右昌曲魁鉞，軒勝位至封候伯，加羊陀火鈴平常，天府同權貴名利兩全，天相加內外權貴清正，破軍同鬧中安身。"},{type:"prose",text:" 天機入廟權貴，會文曲為良巨，見羊陀火鈴方宜，天梁同文武之材，太陰同名振邊夷，陷宮退官失職，吏員立腳。"},{type:"prose",text:" 太陽入廟文武為良，不見羊陀火鈴吉，太陰同貴顯，左右昌曲魁鉞同更君科祿權，定居一品之貴。"},{type:"prose",text:" 武曲入廟與昌曲左右同宮，武職崢嶸，常人發福，會科權祿為財富之官，貪狼同為貪汙之官，破軍同軍旅內出身，與安身七殺同橫立功名，陷宮及陀鈴劫忌功名無分。"},{type:"prose",text:" 天同入廟文武皆宜，無羊陀火鈴吉，巨門同先小後大，太陽昌曲科權祿吉美天姿，同權貴太陰同，陷宮胥更論。"},{type:"prose",text:" 廉貞入廟武職權貴不耐久，貪狼同鬧中權貴，紫微會三方文職諭，七殺同軍旅出身，天相天府同衣錦富貴。"},{type:"prose",text:" 天府入廟文武皆吉，無羊陀火鈴空耗全美，紫微同文武聲名，廉貞武曲同權貴，見空劫平常。"},{type:"prose",text:" 太陰入廟多貴，陷地氣高橫破難顯達，會太陽昌曲左右三品之貴，天同同文武皆宜，天機同鬧中進身吏員立腳。"},{type:"prose",text:" 貪狼入廟遇火鈴武職掌大權，紫微同文武之職權貴非小，陷宮貪汙之官，加羊陀空劫平常。"},{type:"prose",text:" 巨門入廟武職權貴，文人不耐久，太陽同有進退，入廟久長，天機同在卯宮吉美，在酉宮雖美無始終，陷宮遭悔吝，加羊陀火鈴空劫更不美，退宮卸職。"},{type:"prose",text:" 天相入廟文武皆宜食祿千鍾，陷地成敗，紫微同權貴，昌曲左右同權顯榮貴，武曲同邊夷之職，廉貞同崢嶸權貴，加羊陀火鈴空劫有貶謫。"},{type:"prose",text:" 天梁廟午會左右魁鉞，文武之材天同同權貴不小，天機同崢嶸貴顯，加羊陀火鈴空劫平。"},{type:"prose",text:" 七殺廟旺武職崢嶸權貴非小，不宜文人，武曲同權貴，廉貞同功名顯達。"},{type:"prose",text:" 破軍廟旺武職軒勝，武曲同加權祿，文昌文曲顯達，加羊陀火鈴平常，紫微同宮名振揚，廉貞同文人不耐久，胥吏最美。"},{type:"prose",text:" 文昌入廟太陽同加吉科權祿，文武之材，同天府文曲富貴雙全。"},{type:"prose",text:" 文曲廟旺文武皆宜，陷宮與天機太陰同宮，胥吏權貴，會紫府左右近君頻而執政，加羊陀火鈴空劫平常。"},{type:"prose",text:" 左輔入廟文武之材，武職最旺，不利文人，會吉星身中清，文武皆良，見羊陀火鈴空劫進退聲名。"},{type:"prose",text:" 右弼宜居武職，不和文人，與紫府昌曲同，財官雙美，陷宮成敗有貶謫，見美陀火鈴空劫亦有黜降。"},{type:"prose",text:" 祿存會吉文武皆良，財官雙美，子孫爵秩，諸宮為美。"},{type:"prose",text:" 擎羊入廟最利武職，同吉星權貴，陷地平常，虛名而已。"},{type:"prose",text:" 陀羅獨守平常，加吉星亦虛名而已。"},{type:"prose",text:" 火星晚年功名遂心，早年成敗，會紫微貪狼吉，陷地不美。"},{type:"prose",text:" 鈴星獨守旺宮吉，陷地不美，加諸吉星權貴。"},{type:"prose",text:" 斗君遇吉其年月財官旺，逢兇忌財官不顯達，有勞祿奔波。"},{type:"prose",text:" 定公卿"},{type:"prose",text:" 輔弼星纏帝座中，高官三品入朝中，空亡惡曜三方見，指是虛名受蔭封。"},{type:"prose",text:" 定兩官府"},{type:"prose",text:" 昌曲二曜最難逢，建節封侯笑語中，若然兇殺來臨破，須然好處也成兇。"},{type:"prose",text:" 定文官"},{type:"prose",text:" 文官昌曲掛朝衣，官祿之中喜有之，紫相更兼權祿至，定居風憲肅朝儀。"},{type:"prose",text:" 定武官"},{type:"prose",text:" 將軍武曜最為良，帝座權衡在祿鄉，輔弼二星兼拱照，金章玉帶佐皇王。"},{type:"prose",text:" 定曹吏"},{type:"prose",text:" 太陽化官在陽宮，更有光輝使不兇，若逢紫府兼左右，一生曹吏逞英雄。"}],raw:`九 官祿  
 紫微廟旺遇左右昌曲魁鉞，軒勝位至封候伯，加羊陀火鈴平常，天府同權貴名利兩全，天相加內外權貴清正，破軍同鬧中安身。  
 天機入廟權貴，會文曲為良巨，見羊陀火鈴方宜，天梁同文武之材，太陰同名振邊夷，陷宮退官失職，吏員立腳。  
 太陽入廟文武為良，不見羊陀火鈴吉，太陰同貴顯，左右昌曲魁鉞同更君科祿權，定居一品之貴。  
 武曲入廟與昌曲左右同宮，武職崢嶸，常人發福，會科權祿為財富之官，貪狼同為貪汙之官，破軍同軍旅內出身，與安身七殺同橫立功名，陷宮及陀鈴劫忌功名無分。  
 天同入廟文武皆宜，無羊陀火鈴吉，巨門同先小後大，太陽昌曲科權祿吉美天姿，同權貴太陰同，陷宮胥更論。  
 廉貞入廟武職權貴不耐久，貪狼同鬧中權貴，紫微會三方文職諭，七殺同軍旅出身，天相天府同衣錦富貴。  
 天府入廟文武皆吉，無羊陀火鈴空耗全美，紫微同文武聲名，廉貞武曲同權貴，見空劫平常。  
 太陰入廟多貴，陷地氣高橫破難顯達，會太陽昌曲左右三品之貴，天同同文武皆宜，天機同鬧中進身吏員立腳。  
 貪狼入廟遇火鈴武職掌大權，紫微同文武之職權貴非小，陷宮貪汙之官，加羊陀空劫平常。  
 巨門入廟武職權貴，文人不耐久，太陽同有進退，入廟久長，天機同在卯宮吉美，在酉宮雖美無始終，陷宮遭悔吝，加羊陀火鈴空劫更不美，退宮卸職。  
 天相入廟文武皆宜食祿千鍾，陷地成敗，紫微同權貴，昌曲左右同權顯榮貴，武曲同邊夷之職，廉貞同崢嶸權貴，加羊陀火鈴空劫有貶謫。  
 天梁廟午會左右魁鉞，文武之材天同同權貴不小，天機同崢嶸貴顯，加羊陀火鈴空劫平。  
 七殺廟旺武職崢嶸權貴非小，不宜文人，武曲同權貴，廉貞同功名顯達。  
 破軍廟旺武職軒勝，武曲同加權祿，文昌文曲顯達，加羊陀火鈴平常，紫微同宮名振揚，廉貞同文人不耐久，胥吏最美。  
 文昌入廟太陽同加吉科權祿，文武之材，同天府文曲富貴雙全。  
 文曲廟旺文武皆宜，陷宮與天機太陰同宮，胥吏權貴，會紫府左右近君頻而執政，加羊陀火鈴空劫平常。  
 左輔入廟文武之材，武職最旺，不利文人，會吉星身中清，文武皆良，見羊陀火鈴空劫進退聲名。  
 右弼宜居武職，不和文人，與紫府昌曲同，財官雙美，陷宮成敗有貶謫，見美陀火鈴空劫亦有黜降。  
 祿存會吉文武皆良，財官雙美，子孫爵秩，諸宮為美。  
 擎羊入廟最利武職，同吉星權貴，陷地平常，虛名而已。  
 陀羅獨守平常，加吉星亦虛名而已。  
 火星晚年功名遂心，早年成敗，會紫微貪狼吉，陷地不美。  
 鈴星獨守旺宮吉，陷地不美，加諸吉星權貴。  
 斗君遇吉其年月財官旺，逢兇忌財官不顯達，有勞祿奔波。  
 定公卿  
 輔弼星纏帝座中，高官三品入朝中，空亡惡曜三方見，指是虛名受蔭封。  
 定兩官府  
 昌曲二曜最難逢，建節封侯笑語中，若然兇殺來臨破，須然好處也成兇。  
 定文官  
 文官昌曲掛朝衣，官祿之中喜有之，紫相更兼權祿至，定居風憲肅朝儀。  
 定武官  
 將軍武曜最為良，帝座權衡在祿鄉，輔弼二星兼拱照，金章玉帶佐皇王。  
 定曹吏  
 太陽化官在陽宮，更有光輝使不兇，若逢紫府兼左右，一生曹吏逞英雄。`},{id:"lun-tianzhai",title:"十 田宅",volume:2,blocks:[{type:"prose",text:"十 田宅"},{type:"prose",text:" 紫微茂盛自置旺相，加羊陀火鈴空劫，有置有去，破軍同退祖，天相同有見成家業，得左右昌曲。"},{type:"prose",text:" 天機退祖新創置，巨門同在卯宮有田莊，在酉宮不守祖業，先大後小，天梁同有置晚年富，太陰同自置旺相。"},{type:"prose",text:" 太陽入廟得祖業，初旺未平，太陰同加吉星田多，巨門同在寅宮旺盛，在申宮退祖，不為無田產，陷地逢羊陀火鈴空劫全無。"},{type:"prose",text:" 武曲單居旺地，得祖父大業，陷地退後方成，破軍大耗同破蕩家產，有也不耐久，天相同先見破後方有，七殺同心不欲，天府同守見成家業，貪狼同晚置，見火鈴星同極美，田產茂盛，同空劫有進有退。"},{type:"prose",text:" 天同先少後多，自置甚旺，巨門同田少，太陰同入廟大富，天梁同先退後進，加羊陀火鈴空忌全無。"},{type:"prose",text:" 廉貞破祖，貪狼同有祖業，不耐久，七殺同自置，天府同守見成家業，天相同先無後有。"},{type:"prose",text:" 天府田園茂盛，守祖自置旺相，紫微同大富，廉貞武曲同守祖業榮昌，見羊陀火鈴空劫更少，有成敗。"},{type:"prose",text:" 太陰入廟田多，陷地加忌及羊陀火鈴空劫田全無，天機同自創置，天同同白手自置，同左右權祿及祿存主多田產。"},{type:"prose",text:" 貪狼陷宮退祖一世田少，廟旺有祖業，也去中未自有置，廉貞同無分，紫微同有祖業，武曲同晚置，見火鈴星守祖業，有自創，但恐火焚屋宅。"},{type:"prose",text:" 巨門廟旺橫發置買，陷地無分，因田產招非，太陽同先無後有，加羊陀火鈴空劫田宅全無。"},{type:"prose",text:" 天相廟旺有分，紫微同自置，武曲同無分，廉貞加羊陀火鈴空劫飄零祖業。"},{type:"prose",text:" 天梁入廟旺有祖業，天同同先難後易，天機同不見羊陀火鈴空劫，終有田宅。"},{type:"prose",text:" 破軍在子午宮守祖業榮昌，但見有進退，加羊陀火鈴退祖田少，紫微同有見成家業，廉貞同先破後有置，耗忌全無。"},{type:"prose",text:" 文昌會諸吉田園廣置，加羊陀火鈴空劫敗祖。"},{type:"prose",text:" 文曲旺地有分，守祖業，加吉星自置，同羊陀火鈴空劫湊有進有退。"},{type:"prose",text:" 左輔有祖業，加羊陀火鈴空劫退祖，田地少，會吉星多。"},{type:"prose",text:" 祿存田園多旺自置，會吉星承祖業榮昌，加羊陀火鈴空劫田宅少。"},{type:"prose",text:" 擎羊入廟先破後成陷地加空劫退祖業。"},{type:"prose",text:" 陀羅退祖辛勤度日，加吉星先無後有，加空劫全無。"},{type:"prose",text:" 火星獨守，退祖業，會吉星先無後有，加空劫全無。"},{type:"prose",text:" 鈴星退祖，入廟加吉星自有置，見空劫全無。"},{type:"prose",text:" 斗君過度遇吉星其年田產倍進，逢兇殺忌耗退敗。"}],raw:`十 田宅  
 紫微茂盛自置旺相，加羊陀火鈴空劫，有置有去，破軍同退祖，天相同有見成家業，得左右昌曲。  
 天機退祖新創置，巨門同在卯宮有田莊，在酉宮不守祖業，先大後小，天梁同有置晚年富，太陰同自置旺相。  
 太陽入廟得祖業，初旺未平，太陰同加吉星田多，巨門同在寅宮旺盛，在申宮退祖，不為無田產，陷地逢羊陀火鈴空劫全無。  
 武曲單居旺地，得祖父大業，陷地退後方成，破軍大耗同破蕩家產，有也不耐久，天相同先見破後方有，七殺同心不欲，天府同守見成家業，貪狼同晚置，見火鈴星同極美，田產茂盛，同空劫有進有退。  
 天同先少後多，自置甚旺，巨門同田少，太陰同入廟大富，天梁同先退後進，加羊陀火鈴空忌全無。  
 廉貞破祖，貪狼同有祖業，不耐久，七殺同自置，天府同守見成家業，天相同先無後有。  
 天府田園茂盛，守祖自置旺相，紫微同大富，廉貞武曲同守祖業榮昌，見羊陀火鈴空劫更少，有成敗。  
 太陰入廟田多，陷地加忌及羊陀火鈴空劫田全無，天機同自創置，天同同白手自置，同左右權祿及祿存主多田產。  
 貪狼陷宮退祖一世田少，廟旺有祖業，也去中未自有置，廉貞同無分，紫微同有祖業，武曲同晚置，見火鈴星守祖業，有自創，但恐火焚屋宅。  
 巨門廟旺橫發置買，陷地無分，因田產招非，太陽同先無後有，加羊陀火鈴空劫田宅全無。  
 天相廟旺有分，紫微同自置，武曲同無分，廉貞加羊陀火鈴空劫飄零祖業。  
 天梁入廟旺有祖業，天同同先難後易，天機同不見羊陀火鈴空劫，終有田宅。  
 破軍在子午宮守祖業榮昌，但見有進退，加羊陀火鈴退祖田少，紫微同有見成家業，廉貞同先破後有置，耗忌全無。  
 文昌會諸吉田園廣置，加羊陀火鈴空劫敗祖。  
 文曲旺地有分，守祖業，加吉星自置，同羊陀火鈴空劫湊有進有退。  
 左輔有祖業，加羊陀火鈴空劫退祖，田地少，會吉星多。  
 祿存田園多旺自置，會吉星承祖業榮昌，加羊陀火鈴空劫田宅少。  
 擎羊入廟先破後成陷地加空劫退祖業。  
 陀羅退祖辛勤度日，加吉星先無後有，加空劫全無。  
 火星獨守，退祖業，會吉星先無後有，加空劫全無。  
 鈴星退祖，入廟加吉星自有置，見空劫全無。  
 斗君過度遇吉星其年田產倍進，逢兇殺忌耗退敗。`},{id:"lun-fude",title:"十一 福德",volume:2,blocks:[{type:"prose",text:"十一 福德"},{type:"prose",text:" 紫微福厚享福安樂，天府天相同終身獲吉，破軍同勞心費力不安，加羊陀鈴空劫福薄，天機同享福終身。"},{type:"prose",text:" 天機先勞後逸，巨門同勞力欠安，天梁同享福，太陰同主快樂，加羊陀火鈴空劫奔走不得寧靜。"},{type:"prose",text:" 太陽忙中發福，太陰同快樂，巨門同費力欠安，天梁同快樂，女人會吉星，招賢明之夫，享福，加羊陀火鈴空劫忌耗，終身不美之論。"},{type:"prose",text:" 武曲勞心費力，入廟安然享福，破軍同東走西行，不寧靜，天相同老境安康，七殺同欠安康，貪狼同晚年享福，見火鈴星安逸，加羊陀操心得力。"},{type:"prose",text:" 天同快樂有福有壽，巨門同多憂少喜，太陰同享福，天梁同清閒快樂。"},{type:"prose",text:" 廉貞獨守忙中生福，天相同有福有壽，天府同安樂無憂，破軍同不守靜，勞心費力，再加羊陀火鈴勞苦終身，末年如意。"},{type:"prose",text:" 天府安靜享福，紫微同快樂，廉貞同身安心忙，武曲同早年更辛苦，中晚安樂享福，加羊陀火鈴空劫耗忌勞苦過日。"},{type:"prose",text:" 太陰入廟享福快樂，太陽同極美，僧道亦清潔享福，天機同心忙，天同同安靜無憂，加羊陀火鈴空劫，有憂有喜，不得安靜。"},{type:"prose",text:" 貪狼勞心不安，廉貞同福薄，紫微同晚年快樂。"},{type:"prose",text:" 巨門勞力不安，太陽同有憂有喜，天機同心忙不安，天同同享福，加羊陀火鈴空劫生平多憂。"},{type:"prose",text:" 天相安逸享福有壽，紫微同快樂，天機同忙中吉，太陽同福壽雙全加羊陀火鈴空劫不得心靜。"},{type:"prose",text:" 七殺入廟享福，陷地加羊陀火鈴勞心費力，武曲同欠安，廉貞同辛勤，紫微同先勞後逸，末年方如意遂心，女人單居福德，則必為娼婢。"},{type:"prose",text:" 破軍勞心費力，武曲同欠安，廉貞同辛勤，紫微同安樂，加羊陀火鈴空劫操心，不得寧靜。"},{type:"prose",text:" 文昌加吉星入廟享福快樂，陷地遇羊陀火鈴空劫，心身俱不得安靜。"},{type:"prose",text:" 左輔加吉星享福獨守，晚年安寧，加羊陀火鈴空劫辛勤。"},{type:"prose",text:" 右弼生平福祿全美，加吉星一生少憂，見羊陀火鈴空劫，湊勞心欠安。"},{type:"prose",text:" 祿存終身福厚安靜處世，加吉星有喜有福，見羊陀火鈴空劫，心身不得寧靜。"},{type:"prose",text:" 魁鉞有貴人，為伴享福快樂。"},{type:"prose",text:" 擎羊入廟動中有福，陷宮勞心欠力，得吉星，同減憂獨守身心不安。"},{type:"prose",text:" 陀羅獨守辛勤，入廟有福祿，陷地奔馳，加吉星晚年有福。"},{type:"prose",text:" 火星欠安勞力辛勤，加吉星晚年遂志。"},{type:"prose",text:" 鈴星勞苦，加吉星平和，獨守辛勤。"},{type:"prose",text:" 斗君遇吉其年安靜，逢殺不寧。"},{type:"prose",text:" 歲君大小限過，逢吉則享福，逢兇則勞力辛苦。"}],raw:`十一 福德  
 紫微福厚享福安樂，天府天相同終身獲吉，破軍同勞心費力不安，加羊陀鈴空劫福薄，天機同享福終身。  
 天機先勞後逸，巨門同勞力欠安，天梁同享福，太陰同主快樂，加羊陀火鈴空劫奔走不得寧靜。  
 太陽忙中發福，太陰同快樂，巨門同費力欠安，天梁同快樂，女人會吉星，招賢明之夫，享福，加羊陀火鈴空劫忌耗，終身不美之論。  
 武曲勞心費力，入廟安然享福，破軍同東走西行，不寧靜，天相同老境安康，七殺同欠安康，貪狼同晚年享福，見火鈴星安逸，加羊陀操心得力。  
 天同快樂有福有壽，巨門同多憂少喜，太陰同享福，天梁同清閒快樂。  
 廉貞獨守忙中生福，天相同有福有壽，天府同安樂無憂，破軍同不守靜，勞心費力，再加羊陀火鈴勞苦終身，末年如意。  
 天府安靜享福，紫微同快樂，廉貞同身安心忙，武曲同早年更辛苦，中晚安樂享福，加羊陀火鈴空劫耗忌勞苦過日。  
 太陰入廟享福快樂，太陽同極美，僧道亦清潔享福，天機同心忙，天同同安靜無憂，加羊陀火鈴空劫，有憂有喜，不得安靜。  
 貪狼勞心不安，廉貞同福薄，紫微同晚年快樂。  
 巨門勞力不安，太陽同有憂有喜，天機同心忙不安，天同同享福，加羊陀火鈴空劫生平多憂。  
 天相安逸享福有壽，紫微同快樂，天機同忙中吉，太陽同福壽雙全加羊陀火鈴空劫不得心靜。  
 七殺入廟享福，陷地加羊陀火鈴勞心費力，武曲同欠安，廉貞同辛勤，紫微同先勞後逸，末年方如意遂心，女人單居福德，則必為娼婢。  
 破軍勞心費力，武曲同欠安，廉貞同辛勤，紫微同安樂，加羊陀火鈴空劫操心，不得寧靜。  
 文昌加吉星入廟享福快樂，陷地遇羊陀火鈴空劫，心身俱不得安靜。  
 左輔加吉星享福獨守，晚年安寧，加羊陀火鈴空劫辛勤。  
 右弼生平福祿全美，加吉星一生少憂，見羊陀火鈴空劫，湊勞心欠安。  
 祿存終身福厚安靜處世，加吉星有喜有福，見羊陀火鈴空劫，心身不得寧靜。  
 魁鉞有貴人，為伴享福快樂。  
 擎羊入廟動中有福，陷宮勞心欠力，得吉星，同減憂獨守身心不安。  
 陀羅獨守辛勤，入廟有福祿，陷地奔馳，加吉星晚年有福。  
 火星欠安勞力辛勤，加吉星晚年遂志。  
 鈴星勞苦，加吉星平和，獨守辛勤。  
 斗君遇吉其年安靜，逢殺不寧。  
 歲君大小限過，逢吉則享福，逢兇則勞力辛苦。`},{id:"lun-fumu",title:"十二 父母",volume:2,blocks:[{type:"prose",text:"十二 父母"},{type:"prose",text:" 凡看父母以太陽星為父，太陰星為母。太陽在陷宮主先克父，太陰星在陷宮主先克母。如二星具在陷地，只以人之本生時，日生者主父存，夜生者主母在。若夜生者 太陰星主母存，反背不明主母先克。日生時者主父在，反背暗晦主父先克。餘試之屢驗矣，學者宜細心識之。先有本宮某星主刑剋，又加惡殺的以刑剋斷之，據理參詳，在乎人之自悟耳。"},{type:"prose",text:" 紫微無克，天府同亦無刑，加羊陀火鈴空劫亦克，天相同無刑，貪狼同無殺加亦無刑，破軍同早克。"},{type:"prose",text:" 天機廟旺無刑，陷地逢羊陀火鈴空劫，二姓寄居，重拜父母，或過房入贅，太陰同免刑，天梁同無刑，俱要無殺，加有殺，加也不免刑傷，巨門早刑。"},{type:"prose",text:" 太陽入廟無克，陷地克父，加羊陀火鈴空劫克父母早，太陰同看無，羊陀湊父母全遲刑，巨門同加四殺空劫早克，天梁同無刑。"},{type:"prose",text:" 武曲克早，退祖業不刑，貪狼同刑剋，七殺同有刑，天相同加羊陀火鈴空劫刑傷。"},{type:"prose",text:" 天同獨守廟旺無刑，加四殺重拜父母，巨門同欠和太陰同父母雙全，天梁同無刑或退祖業，加羊陀火鈴空劫父母不全。"},{type:"prose",text:" 廉貞難為父母，祖重拜，貪狼同早刑，七殺孤克，天府同免刑，破軍同早刑，加羊陀火鈴空劫，父母不周全。"},{type:"prose",text:" 天府父母雙全，紫微同亦無刑，廉貞武曲同，在廟旺無刑，加羊陀火鈴空劫主傷。"},{type:"prose",text:" 太陰入廟無克，加羊陀火鈴克母，不然過房棄祖，太陽同無四殺父母雙全，天機同無刑天同同極美。"},{type:"prose",text:" 貪狼狼陷地早棄祖，重拜過房，入贅，廉貞同早刑主孤單，紫微同無殺加雙全。"},{type:"prose",text:" 巨門陷地傷克棄祖過房，太陽同少和，天機同重，拜天同同或退祖無刑，加羊陀火鈴空劫父母不周全。"},{type:"prose",text:" 天相廟旺無刑，紫微同無刑剋，廉貞同亦刑，加羊陀火鈴空劫早刑。"},{type:"prose",text:" 天梁陷地，加羊陀火鈴孤克，棄祖入贅，更名寄人，保養免刑，天同同加四殺有刑，無殺無刑，天機同無刑，太陽同克遲，加四殺空劫亦克早。"},{type:"prose",text:" 七殺克早離祖，六親骨肉孤獨，武曲同亦刑，廉貞同刑早，紫微同加吉星無刑，加羊陀火鈴空劫，父母不周全。"},{type:"prose",text:" 破軍克早離祖，更名寄養免刑，武曲同克早，廉貞同亦早克，紫微同無刑。"},{type:"prose",text:" 文昌加吉星入廟無刑，加羊陀火鈴有刑，或退祖二姓延生。"},{type:"prose",text:" 文曲獨守入廟無刑，加羊陀火鈴空劫父母俱不周全。"},{type:"prose",text:" 左輔獨守無刑，廉貞同早刑，加文昌相生無刑，加羊陀火鈴刑傷，退祖二姓延生。"},{type:"prose",text:" 右弼獨守無刑，加吉星得父母庇廕，見羊陀火鈴湊，離祖二姓安居。"},{type:"prose",text:" 祿存無克，加空劫羊陀火鈴，早年有破父財，且刑傷中不自成家計。"},{type:"prose",text:" 擎羊刑剋早會日月重重退祖，加吉星眾免刑。"},{type:"prose",text:" 陀羅幼年刑傷，會日月重重退祖，二姓安居，加吉星入贅過房，或重拜二姓延生。"},{type:"prose",text:" 火星獨守孤克，二姓延生，加吉星平和。"},{type:"prose",text:" 鈴星刑剋孤單，二姓安居，重拜父母，入贅過房。"},{type:"prose",text:" 魁鉞主父母榮貴同吉星雙全。"},{type:"prose",text:" 斗君過度逢吉父母吉利無災傷，得安逸內外有喜。遇兇則父母不利。"}],raw:`十二 父母  
 凡看父母以太陽星為父，太陰星為母。太陽在陷宮主先克父，太陰星在陷宮主先克母。如二星具在陷地，只以人之本生時，日生者主父存，夜生者主母在。若夜生者 太陰星主母存，反背不明主母先克。日生時者主父在，反背暗晦主父先克。餘試之屢驗矣，學者宜細心識之。先有本宮某星主刑剋，又加惡殺的以刑剋斷之，據理參詳，在乎人之自悟耳。  
 紫微無克，天府同亦無刑，加羊陀火鈴空劫亦克，天相同無刑，貪狼同無殺加亦無刑，破軍同早克。  
 天機廟旺無刑，陷地逢羊陀火鈴空劫，二姓寄居，重拜父母，或過房入贅，太陰同免刑，天梁同無刑，俱要無殺，加有殺，加也不免刑傷，巨門早刑。  
 太陽入廟無克，陷地克父，加羊陀火鈴空劫克父母早，太陰同看無，羊陀湊父母全遲刑，巨門同加四殺空劫早克，天梁同無刑。  
 武曲克早，退祖業不刑，貪狼同刑剋，七殺同有刑，天相同加羊陀火鈴空劫刑傷。  
 天同獨守廟旺無刑，加四殺重拜父母，巨門同欠和太陰同父母雙全，天梁同無刑或退祖業，加羊陀火鈴空劫父母不全。  
 廉貞難為父母，祖重拜，貪狼同早刑，七殺孤克，天府同免刑，破軍同早刑，加羊陀火鈴空劫，父母不周全。  
 天府父母雙全，紫微同亦無刑，廉貞武曲同，在廟旺無刑，加羊陀火鈴空劫主傷。  
 太陰入廟無克，加羊陀火鈴克母，不然過房棄祖，太陽同無四殺父母雙全，天機同無刑天同同極美。  
 貪狼狼陷地早棄祖，重拜過房，入贅，廉貞同早刑主孤單，紫微同無殺加雙全。  
 巨門陷地傷克棄祖過房，太陽同少和，天機同重，拜天同同或退祖無刑，加羊陀火鈴空劫父母不周全。  
 天相廟旺無刑，紫微同無刑剋，廉貞同亦刑，加羊陀火鈴空劫早刑。  
 天梁陷地，加羊陀火鈴孤克，棄祖入贅，更名寄人，保養免刑，天同同加四殺有刑，無殺無刑，天機同無刑，太陽同克遲，加四殺空劫亦克早。  
 七殺克早離祖，六親骨肉孤獨，武曲同亦刑，廉貞同刑早，紫微同加吉星無刑，加羊陀火鈴空劫，父母不周全。  
 破軍克早離祖，更名寄養免刑，武曲同克早，廉貞同亦早克，紫微同無刑。  
 文昌加吉星入廟無刑，加羊陀火鈴有刑，或退祖二姓延生。  
 文曲獨守入廟無刑，加羊陀火鈴空劫父母俱不周全。  
 左輔獨守無刑，廉貞同早刑，加文昌相生無刑，加羊陀火鈴刑傷，退祖二姓延生。  
 右弼獨守無刑，加吉星得父母庇廕，見羊陀火鈴湊，離祖二姓安居。  
 祿存無克，加空劫羊陀火鈴，早年有破父財，且刑傷中不自成家計。  
 擎羊刑剋早會日月重重退祖，加吉星眾免刑。  
 陀羅幼年刑傷，會日月重重退祖，二姓安居，加吉星入贅過房，或重拜二姓延生。  
 火星獨守孤克，二姓延生，加吉星平和。  
 鈴星刑剋孤單，二姓安居，重拜父母，入贅過房。  
 魁鉞主父母榮貴同吉星雙全。  
 斗君過度逢吉父母吉利無災傷，得安逸內外有喜。遇兇則父母不利。`},{id:"tanxing-yaolun",title:"談星要論",volume:3,blocks:[{type:"prose",text:"談星要論"},{type:"prose",text:" 看身安命祿馬不落空亡天空截空最緊，旬空次之。 第一看"},{type:"prose",text:"命宮吉凶廟旺化吉化忌生克。次看身主吉凶生克。 三看遷移"},{type:"prose",text:"財帛宮祿三方星辰刑沖剋破。 四看幅德宮權祿"},{type:"prose",text:"劫空廟陷，以福德宮對"},{type:"prose",text:"財帛宮也。 身命遷移財官福德六宮名曰八座，俱在成照聚吉化吉，富貴高壽。 六宮俱陷，聚兇化忌，孤寡天壽。若卯酉時生人尤外，有田宅疾厄已錄於後。 又看父母妻子三宮，俱有"},{type:"prose",text:"劫空殺忌，僧道之命，否則孤獨貧窮。 若"},{type:"prose",text:"命宮無正曜者，財宮二宮有吉星拱照，富貴全美，或偏房庶母所生。 三方有惡星衝照，或二姓可延生，離祖可保成家。 如"},{type:"prose",text:"命宮有正曜吉星，廟旺化吉，三方又有吉星會合，上上之命。 如無正曜吉星，三方有吉，上次之命。"},{type:"prose",text:"命宮星辰無言無兇，或吉凶相伴者，如三方亦有中等星辰，為中格。 及"},{type:"prose",text:"命宮星辰廟旺，三方有惡星守照破格。 及命星陷背，加羊陀化忌，卻得十干祿元來相守化吉，亦為中等之命。 若命無吉星，反有兇殺化忌無祿落陷，為下格之命。 三方有吉星，亦可為中等，先小後大，不能久遠，終為成敗夭折論。 若安命星纏陷地，又加兇殺化忌，三方又會羊陀火鈴空劫，為下格貧賤，二姓延生，奴僕之命，否則夭折六畜之命。"}],raw:`談星要論
 看身安命祿馬不落空亡天空截空最緊，旬空次之。 第一看
命宮吉凶廟旺化吉化忌生克。次看身主吉凶生克。 三看遷移
財帛宮祿三方星辰刑沖剋破。 四看幅德宮權祿
劫空廟陷，以福德宮對
財帛宮也。 身命遷移財官福德六宮名曰八座，俱在成照聚吉化吉，富貴高壽。 六宮俱陷，聚兇化忌，孤寡天壽。若卯酉時生人尤外，有田宅疾厄已錄於後。 又看父母妻子三宮，俱有
劫空殺忌，僧道之命，否則孤獨貧窮。 若
命宮無正曜者，財宮二宮有吉星拱照，富貴全美，或偏房庶母所生。 三方有惡星衝照，或二姓可延生，離祖可保成家。 如
命宮有正曜吉星，廟旺化吉，三方又有吉星會合，上上之命。 如無正曜吉星，三方有吉，上次之命。 
命宮星辰無言無兇，或吉凶相伴者，如三方亦有中等星辰，為中格。 及
命宮星辰廟旺，三方有惡星守照破格。 及命星陷背，加羊陀化忌，卻得十干祿元來相守化吉，亦為中等之命。 若命無吉星，反有兇殺化忌無祿落陷，為下格之命。 三方有吉星，亦可為中等，先小後大，不能久遠，終為成敗夭折論。 若安命星纏陷地，又加兇殺化忌，三方又會羊陀火鈴空劫，為下格貧賤，二姓延生，奴僕之命，否則夭折六畜之命。`},{id:"lun-ruming-ruge",title:"論人命入格",volume:3,blocks:[{type:"prose",text:"論人命入格"},{type:"prose",text:" 如命入格，廟旺聚吉"},{type:"prose",text:"科權祿守，上上之命。 不入廟加吉化"},{type:"prose",text:"科權祿，上次之命。 不入廟不加吉，為平常命。 入廟不加吉，平等。 若居陷地又加殺化忌，為下格之命，不以入格而論也。 又入格不化吉而化兇，只以本命吉凶多寡而斷之。"}],raw:`論人命入格
 如命入格，廟旺聚吉
科權祿守，上上之命。 不入廟加吉化
科權祿，上次之命。 不入廟不加吉，為平常命。 入廟不加吉，平等。 若居陷地又加殺化忌，為下格之命，不以入格而論也。 又入格不化吉而化兇，只以本命吉凶多寡而斷之。`},{id:"lun-geshu-gaoxia",title:"論格星數高下",volume:3,blocks:[{type:"prose",text:"論格星數高下"},{type:"prose",text:" 紫府與數相合何如，紫微南北斗中天帝主，天府乃南斗主。 又看陰陽相半者，看陰陽不相半，又數不相生，為下格。 陰陽純駁為中格。又三方四正皆吉星為上格。 吉凶相半守照為中格。 兇星惡殺為下格兇徒論。 凡星得上格而數得上格為第一，位至極品之貴。 凡星得上格而數得中格為第二，位至三公。 星得上格而數得下格為第三，位至六卿。 皆為上格上壽之人。 星得中格而數得上格為第四，位至監司。 星中數中為第五，位至縣令。 星中敷下為第六，異路前程貴顯。 皆得中等享福主人也。 又星得下格而數得上格為第七，衣祿豐足，富比陶朱，子孫蕃盛，壽享遐齡，以星雖兇而命入格合局故也，再否虛名虛利。 星下數中為第八，衣食無虧。 星下數下為第九，辛苦奔波，貧窮夭折。 上中下三等，依理而斷，則上可以知祖宗之源，而下可以知子孫之盛衰也。"}],raw:`論格星數高下
 紫府與數相合何如，紫微南北斗中天帝主，天府乃南斗主。 又看陰陽相半者，看陰陽不相半，又數不相生，為下格。 陰陽純駁為中格。又三方四正皆吉星為上格。 吉凶相半守照為中格。 兇星惡殺為下格兇徒論。 凡星得上格而數得上格為第一，位至極品之貴。 凡星得上格而數得中格為第二，位至三公。 星得上格而數得下格為第三，位至六卿。 皆為上格上壽之人。 星得中格而數得上格為第四，位至監司。 星中數中為第五，位至縣令。 星中敷下為第六，異路前程貴顯。 皆得中等享福主人也。 又星得下格而數得上格為第七，衣祿豐足，富比陶朱，子孫蕃盛，壽享遐齡，以星雖兇而命入格合局故也，再否虛名虛利。 星下數中為第八，衣食無虧。 星下數下為第九，辛苦奔波，貧窮夭折。 上中下三等，依理而斷，則上可以知祖宗之源，而下可以知子孫之盛衰也。`},{id:"lun-nannu-tongyi",title:"論男女命同異",volume:3,blocks:[{type:"prose",text:"論男女命同異"},{type:"prose",text:" 男女命不同，星辰各別。男命先看身命，次看"},{type:"prose",text:"財帛宮祿遷移，俱要廟旺為吉，落陷聚兇為兇。三看福德，權祿"},{type:"prose",text:"劫空廟陷吉忌。又看田宅奴僕疾厄宮吉凶，吉凶已算於後。又看父母妻子三宮，俱有"},{type:"prose",text:"劫空殺忌則僧道之命，否則貧窮孤獨。須要仔細參詳，方可斷人禍福榮辱。 女命先看身命吉凶，如貪狼七殺擎羊則不美。次看福德宮吉凶，若七殺單居福德必為娼婢。三看夫君，四看子媳"},{type:"prose",text:"財帛田宅。若桃花刑殺要敗絕空亡為兇，若諸吉廟旺則佳，雖是艱辛貧困亦不為下濺夭折論。女因夫貴，女命貴格反為無用，以子媳夫君福德為正強。田宅"},{type:"prose",text:"財帛為次強。宮祿遷移七殺為陷。"}],raw:`論男女命同異
 男女命不同，星辰各別。男命先看身命，次看
財帛宮祿遷移，俱要廟旺為吉，落陷聚兇為兇。三看福德，權祿
劫空廟陷吉忌。又看田宅奴僕疾厄宮吉凶，吉凶已算於後。又看父母妻子三宮，俱有
劫空殺忌則僧道之命，否則貧窮孤獨。須要仔細參詳，方可斷人禍福榮辱。 女命先看身命吉凶，如貪狼七殺擎羊則不美。次看福德宮吉凶，若七殺單居福德必為娼婢。三看夫君，四看子媳
財帛田宅。若桃花刑殺要敗絕空亡為兇，若諸吉廟旺則佳，雖是艱辛貧困亦不為下濺夭折論。女因夫貴，女命貴格反為無用，以子媳夫君福德為正強。田宅
財帛為次強。宮祿遷移七殺為陷。`},{id:"lun-xiaoer-ming",title:"論小兒命",volume:3,blocks:[{type:"prose",text:"論小兒命"},{type:"prose",text:" 小兒博士力士上短下長，青龍將軍腮小頭圓。大耗鼻仰唇縮，死符病符聲高性雄。官府奏書逢惡曜落地無聲，白虎太歲遇七殺幼弱遭傷。須分生剋制化之垣，更看時祿衰敗之地，後觀關殺方知壽夭窮通。 小兒初生，命中星辰廟旺，大小二限未行，斷其災少，易養，父母無克。若命坐惡 殺及纏陷弱之地，大小二限未行，斷其災多，難養，刑剋父母。"}],raw:`論小兒命
 小兒博士力士上短下長，青龍將軍腮小頭圓。大耗鼻仰唇縮，死符病符聲高性雄。官府奏書逢惡曜落地無聲，白虎太歲遇七殺幼弱遭傷。須分生剋制化之垣，更看時祿衰敗之地，後觀關殺方知壽夭窮通。 小兒初生，命中星辰廟旺，大小二限未行，斷其災少，易養，父母無克。若命坐惡 殺及纏陷弱之地，大小二限未行，斷其災多，難養，刑剋父母。`},{id:"ding-xiaoer-shengshi",title:"定小兒生時訣",volume:3,blocks:[{type:"prose",text:"定小兒生時訣"},{type:"prose",text:" 子午卯酉單頂門，或偏左邊二三分，寅申巳亥亦單頂，偏居右去始為真，辰戌丑未是雙頂，胞胎受定正時辰。 又 子午卯酉面向天，寅申巳亥側身眠，辰戌丑未臉伏地，臨盆當試用心堅。"}],raw:`定小兒生時訣
 子午卯酉單頂門，或偏左邊二三分，寅申巳亥亦單頂，偏居右去始為真，辰戌丑未是雙頂，胞胎受定正時辰。 又 子午卯酉面向天，寅申巳亥側身眠，辰戌丑未臉伏地，臨盆當試用心堅。`},{id:"lun-shengshi-anming",title:"論人生時安命吉凶",volume:3,blocks:[{type:"prose",text:"論人生時安命吉凶"},{type:"prose",text:" 凡男女生在寅午戌申子辰六陽時，安命在此六宮者吉。生在巳酉丑亥卯未六陰時，安命在此六宮者吉。反此則少遂。"}],raw:`論人生時安命吉凶
 凡男女生在寅午戌申子辰六陽時，安命在此六宮者吉。生在巳酉丑亥卯未六陰時，安命在此六宮者吉。反此則少遂。`},{id:"lun-shengshi-diqie",title:"論人生時要審的確",volume:3,blocks:[{type:"prose",text:"論人生時要審的確"},{type:"prose",text:" 如人生子亥二時最難定，準要仔細推祥，如子時有十刻，上午刻屬昨夜亥時，下午刻屬今日子時，如天氣陰雨之際，必須羅經以定真確時候，若差訛則命不準矣。"}],raw:`論人生時要審的確
 如人生子亥二時最難定，準要仔細推祥，如子時有十刻，上午刻屬昨夜亥時，下午刻屬今日子時，如天氣陰雨之際，必須羅經以定真確時候，若差訛則命不準矣。`},{id:"lun-xiaoer-keqin",title:"論小兒克親",volume:3,blocks:[{type:"prose",text:"論小兒克親"},{type:"prose",text:" 如寅午巳酉生人，見辰戍丑未時最毒，子申亥卯生人次之。若寅亥巳生人，見午申酉亥時，主先克父，出十六歲則不妨。若辰巳丑未生人，見子午卯巳亥申酉時生者，主先克母。"}],raw:`論小兒克親
 如寅午巳酉生人，見辰戍丑未時最毒，子申亥卯生人次之。若寅亥巳生人，見午申酉亥時，主先克父，出十六歲則不妨。若辰巳丑未生人，見子午卯巳亥申酉時生者，主先克母。`},{id:"lun-xianpin-houfu",title:"論命先貧後富",volume:3,blocks:[{type:"prose",text:"論命先貧後富"},{type:"prose",text:" 人生於富貴之家，一生快樂享福，財官顯達，妻榮子貴，奴僕成行，聲名昭著。其間有半途遭傷，人離財散，官非火盜，身喪家亡，此等之命非命也。是限步逢大小二限及太歲相沖照，又加兇殺守臨，故此破敗，不貧即損壽也。所謂先成後敗，先大後小也。 又有人命出身微賤，營活生計，百工巧藝，九流醫術，又為農圃等輩，初歷艱辛度日。卻仍中末平地升騰，發財驚駭鄉邦，因生在中庸之局，後因限步相扶，星辰逢吉曜兼廟旺，以此突然發達進祿。所謂先貧後富，先小後大是也。"}],raw:`論命先貧後富
 人生於富貴之家，一生快樂享福，財官顯達，妻榮子貴，奴僕成行，聲名昭著。其間有半途遭傷，人離財散，官非火盜，身喪家亡，此等之命非命也。是限步逢大小二限及太歲相沖照，又加兇殺守臨，故此破敗，不貧即損壽也。所謂先成後敗，先大後小也。 又有人命出身微賤，營活生計，百工巧藝，九流醫術，又為農圃等輩，初歷艱辛度日。卻仍中末平地升騰，發財驚駭鄉邦，因生在中庸之局，後因限步相扶，星辰逢吉曜兼廟旺，以此突然發達進祿。所謂先貧後富，先小後大是也。`},{id:"lun-daxian-shinian",title:"論大限十年禍福何如",volume:3,blocks:[{type:"prose",text:"論大限十年禍福何如"},{type:"prose",text:" 如宮分星纏全吉廟旺得地，無擎羊陀羅火鈴空劫者，主十年安靜，人財全美。若限內有擎羊陀羅火鈴空劫忌星為伴，成敗不一。如宮分星纏陷地，值擎羊陀羅火鈴空劫忌，又加流年惡殺湊合，及小限巡逢兇殺，則官災死亡立見。大限將出，有吉眾者無災悔，少者災多，損人破財不利。凡行至寅申巳亥子午宮，遇紫微天府天同太陽太陰昌曲祿存祿主吉星，主人財興旺，添丁進口之慶。行至辰戍丑未卯酉，遇惡殺廉貞天使羊陀火鈴空劫忌星，主人酒色荒迷，貧乏死生。遇左右昌曲，仕宦遷官加職，士民生子發財，婦人喜事，僧道亦利，商賈得益。凡大小二限及太歲，怕行天傷天使夾地，怕行天空地劫之地，怕行擎羊陀羅之地，及羊陀衝照，怕脫兇限，怕逢兇限，又怕"},{type:"prose",text:"傷使"},{type:"prose",text:"劫空羊陀並夾歲限。如天傷在子，天使在寅，歲限在丑宮，乃並夾也。羊陀守命尚且無用，況夾限乎，若逃得過須看壽星，紫微天同天梁貪狼坐命可解。更須看月值惡殺，日值惡殺，加湊大小歲月日時五者參詳吉凶推斷。太歲行至奏書將軍直符天使天傷羊陀火鈴空劫忌星，逢一二位，主人離財散，疾病哭泣之兆。若歲限犯重月日一二位，又逢忌星合者，官吏遭謫，常人遭橫事，婦人損胎，病者死亡。若惡殺在不得地，如風雨暴過。若歲限臨無吉星，命中無救，其年難過必死。"}],raw:`論大限十年禍福何如
 如宮分星纏全吉廟旺得地，無擎羊陀羅火鈴空劫者，主十年安靜，人財全美。若限內有擎羊陀羅火鈴空劫忌星為伴，成敗不一。如宮分星纏陷地，值擎羊陀羅火鈴空劫忌，又加流年惡殺湊合，及小限巡逢兇殺，則官災死亡立見。大限將出，有吉眾者無災悔，少者災多，損人破財不利。凡行至寅申巳亥子午宮，遇紫微天府天同太陽太陰昌曲祿存祿主吉星，主人財興旺，添丁進口之慶。行至辰戍丑未卯酉，遇惡殺廉貞天使羊陀火鈴空劫忌星，主人酒色荒迷，貧乏死生。遇左右昌曲，仕宦遷官加職，士民生子發財，婦人喜事，僧道亦利，商賈得益。凡大小二限及太歲，怕行天傷天使夾地，怕行天空地劫之地，怕行擎羊陀羅之地，及羊陀衝照，怕脫兇限，怕逢兇限，又怕
傷使
劫空羊陀並夾歲限。如天傷在子，天使在寅，歲限在丑宮，乃並夾也。羊陀守命尚且無用，況夾限乎，若逃得過須看壽星，紫微天同天梁貪狼坐命可解。更須看月值惡殺，日值惡殺，加湊大小歲月日時五者參詳吉凶推斷。太歲行至奏書將軍直符天使天傷羊陀火鈴空劫忌星，逢一二位，主人離財散，疾病哭泣之兆。若歲限犯重月日一二位，又逢忌星合者，官吏遭謫，常人遭橫事，婦人損胎，病者死亡。若惡殺在不得地，如風雨暴過。若歲限臨無吉星，命中無救，其年難過必死。`},{id:"lun-erxian-taisui",title:"論二限太歲吉凶",volume:3,blocks:[{type:"prose",text:"論二限太歲吉凶"},{type:"prose",text:" 須詳大限獨守吉凶何如，小限獨守吉凶何如，太歲獨守吉凶何如。如歲限俱兇則兇。又看大限與小限相逢吉凶何如，大限逢太歲吉凶何如，小限逢太歲吉凶何如，禍福所定。又看太歲衝大限小限，太歲衝羊陀七殺，然後可斷吉凶。"}],raw:`論二限太歲吉凶
 須詳大限獨守吉凶何如，小限獨守吉凶何如，太歲獨守吉凶何如。如歲限俱兇則兇。又看大限與小限相逢吉凶何如，大限逢太歲吉凶何如，小限逢太歲吉凶何如，禍福所定。又看太歲衝大限小限，太歲衝羊陀七殺，然後可斷吉凶。`},{id:"lun-xingxian-nanbei",title:"論行限分南北斗",volume:3,blocks:[{type:"prose",text:"論行限分南北斗"},{type:"prose",text:" 陽男陰女南斗為福。陰男陽女北斗為福。 北斗諸星吉凶，大限斷上五年應?小限斷上半年應。 南斗諸星吉凶，大限斷下五年應，小限斷下半年應。"}],raw:`論行限分南北斗
 陽男陰女南斗為福。陰男陽女北斗為福。 北斗諸星吉凶，大限斷上五年應?小限斷上半年應。 南斗諸星吉凶，大限斷下五年應，小限斷下半年應。`},{id:"lun-liunian-xingsha",title:"論流年太歲吉凶星殺",volume:3,blocks:[{type:"prose",text:"論流年太歲吉凶星殺"},{type:"prose",text:" 凡太歲看三方對照星辰吉凶何如以定禍福，太歲在"},{type:"prose",text:"命宮行者禍福尤緊。如命在子宮太歲到子，又癸生人逢吉則吉逢兇則兇。"}],raw:`論流年太歲吉凶星殺
 凡太歲看三方對照星辰吉凶何如以定禍福，太歲在
命宮行者禍福尤緊。如命在子宮太歲到子，又癸生人逢吉則吉逢兇則兇。`},{id:"lun-yinzhi-yanshou",title:"論陰騭延壽",volume:3,blocks:[{type:"prose",text:"論陰騭延壽"},{type:"prose",text:" 陰騰延壽生百福，雖然倒限不遭傷。假如有人大小二限及太歲到兇陷地，有延過壽去不死者，乃是其人曾行陰騰，平日利物濟人，反身修德，以作善降福，雖兇不害。如宋郊編荻橋渡蟻是也。又如諸葛亮火燒藤甲軍，傷人太毒減壽一紀。當以此參詳。"}],raw:`論陰騭延壽
 陰騰延壽生百福，雖然倒限不遭傷。假如有人大小二限及太歲到兇陷地，有延過壽去不死者，乃是其人曾行陰騰，平日利物濟人，反身修德，以作善降福，雖兇不害。如宋郊編荻橋渡蟻是也。又如諸葛亮火燒藤甲軍，傷人太毒減壽一紀。當以此參詳。`},{id:"lun-yangtuo-diebing",title:"論羊陀迭並",volume:3,blocks:[{type:"prose",text:"論羊陀迭並"},{type:"prose",text:" 如庚年生人，命在卯宮，遷移在酉宮。如遇羊陀，流年亦庚祿居申，流羊在酉，流陀在未，是命在卯宮原有酉宮擎羊衝合，流年又遇流羊流陀，謂之羊陀迭並。"}],raw:`論羊陀迭並
 如庚年生人，命在卯宮，遷移在酉宮。如遇羊陀，流年亦庚祿居申，流羊在酉，流陀在未，是命在卯宮原有酉宮擎羊衝合，流年又遇流羊流陀，謂之羊陀迭並。`},{id:"lun-qisha-chongfeng",title:"論七殺重逢",volume:3,blocks:[{type:"prose",text:"論七殺重逢"},{type:"prose",text:" 如命中三合原有七殺守照，而流年又遇流羊流陀衝照兇，七殺重逢二者為禍最毒，入廟災晦減輕，如陷地逢忌及卯酉遇擎羊為閒宮，午生人不利也。然七殺逢吉曜眾亦轉兇化吉，不可一概論兇。擎羊陀羅七殺逢紫微天相祿存三合拱照可解。"},{type:"song-label",text:"詩曰："},{type:"song",text:"羊陀迭並命難逃，七殺重逢禍必遭，太歲二限臨此地，十生九死不堅牢。"}],raw:`論七殺重逢
 如命中三合原有七殺守照，而流年又遇流羊流陀衝照兇，七殺重逢二者為禍最毒，入廟災晦減輕，如陷地逢忌及卯酉遇擎羊為閒宮，午生人不利也。然七殺逢吉曜眾亦轉兇化吉，不可一概論兇。擎羊陀羅七殺逢紫微天相祿存三合拱照可解。 
詩曰 羊陀迭並命難逃，七殺重逢禍必遭，太歲二限臨此地，十生九死不堅牢。`},{id:"lun-xianchen-suoji",title:"論大小限星辰過十二宮遇十二支所忌訣",volume:3,blocks:[{type:"prose",text:"論大小限星辰過十二宮遇十二支所忌訣"},{type:"prose",text:" 人生子命忌寅申 假如子年生人切忌寅申歲限，災晦至重，及忌子午歲限相沖。 丑午生人丑午瞋 假如丑年生人忌午丑歲限，午生人亦忌丑午歲限，及忌七殺星，災晦極重。 寅卯之人防巳亥 假如寅卯人忌巳亥歲限，及忌卯酉寅申相沖。 龍蛇切忌本身臨 假如巳生人忌逢巳年及忌行到巳限、辰生人忌行辰年又忌行到辰限為天羅，又忌行到戌為地網，限遇此災晦疾厄之險，官非破財憂制連連矣。 申人鈴火災殃重 假如申生人忌逢火鈴二星，必主災晦至重，及忌寅年衝。 未遇豬雞墓患殷 假如未生人忌逢酉戌歲限，又忌見擎羊在四墓宮。 戌亥羊陀須避忌 假如戌亥生人忌遇羊陀災重，戌生人又行到戍宮歲限為地網，又忌行到辰宮歲限為天羅，謂之辰戌相沖不美。 酉人陀刃亦非親 假如酉生人亦忌羊陀歲限及忌行卯宮限，及卯年歲君相沖。 豬犬生人莫遇蛇，辰戍切忌到網羅，預先整頓衣冠木，未免生人唱輓歌。"}],raw:`論大小限星辰過十二宮遇十二支所忌訣
 人生子命忌寅申 假如子年生人切忌寅申歲限，災晦至重，及忌子午歲限相沖。 丑午生人丑午瞋 假如丑年生人忌午丑歲限，午生人亦忌丑午歲限，及忌七殺星，災晦極重。 寅卯之人防巳亥 假如寅卯人忌巳亥歲限，及忌卯酉寅申相沖。 龍蛇切忌本身臨 假如巳生人忌逢巳年及忌行到巳限、辰生人忌行辰年又忌行到辰限為天羅，又忌行到戌為地網，限遇此災晦疾厄之險，官非破財憂制連連矣。 申人鈴火災殃重 假如申生人忌逢火鈴二星，必主災晦至重，及忌寅年衝。 未遇豬雞墓患殷 假如未生人忌逢酉戌歲限，又忌見擎羊在四墓宮。 戌亥羊陀須避忌 假如戌亥生人忌遇羊陀災重，戌生人又行到戍宮歲限為地網，又忌行到辰宮歲限為天羅，謂之辰戌相沖不美。 酉人陀刃亦非親 假如酉生人亦忌羊陀歲限及忌行卯宮限，及卯年歲君相沖。 豬犬生人莫遇蛇，辰戍切忌到網羅，預先整頓衣冠木，未免生人唱輓歌。`},{id:"lun-liming-xingxian-ge",title:"論立命行限宮歌",volume:3,blocks:[{type:"prose",text:"論立命行限宮歌"},{type:"prose",text:" 金人遇坎命須傷，木命落離有禍殃，水遇艮宮應蹇滯，火來兌上禍難藏， 土到東南逢震巽，須防膿血及驚慌，縱然吉曜相逢照，未免宮災鬧一場。"}],raw:`論立命行限宮歌
 金人遇坎命須傷，木命落離有禍殃，水遇艮宮應蹇滯，火來兌上禍難藏， 土到東南逢震巽，須防膿血及驚慌，縱然吉曜相逢照，未免宮災鬧一場。`},{id:"lun-taisui-xiaoxian-miaoxian",title:"論太歲小限星辰廟陷遇十二宮中吉凶",volume:3,blocks:[{type:"prose",text:"論太歲小限星辰廟陷遇十二宮中吉凶"},{type:"prose",text:" 依此判斷人行年災患應如神"},{type:"prose",text:"子年太歲並小限到子宮入廟化吉 七殺破軍在子宮守歲限癸庚己生人發福，巨門天機乙癸生人發福，天府天相天梁丁己庚人財旺遂心，又天同丙丁生人財官雙美。"},{type:"prose",text:"子年太歲並小限到子宮不入廟化兇 紫微在子宮守命及歲限丙戊生人悔吝，破財災殃。"},{type:"prose",text:"子年太歲所值吉凶星 祿存天機天同太陰昌曲輔弼破軍天相廉真武曲天府巨門七殺，可斷其年人財兩美事事遂心。若遇貪狼紫微天梁忌星太陽擎羊，便斷人財耗散孝服，本身災晦不寧，減半論之。"},{type:"prose",text:"丑年太歲並小限到丑宮入廟化吉 天機在丑守命丙辛生人發旺，天相戊生人發旺，太陰武曲丙戊生人發旺，天府廉貞戊生人發旺，天梁丙戊辛生人發旺。"},{type:"prose",text:"丑年太歲並小限到丑宮不入廟化兇 太陰在丑宮守命戊生人悔吝，太陽星甲乙生人悔吝，天機丙辛癸生人悔吝，天同廉貞丁庚生人招官非。"},{type:"prose",text:"丑年太歲所值吉凶星 紫微天相天梁太陰天府祿存廉貞破軍昌曲天機輔弼，可斷其年事事遂心。若遇天同巨門武曲貪狼忌宿太陽擎羊，便斷其年人財耗散，官災口舌孝服，本身遭晦，減半論之。"},{type:"prose",text:"寅年太歲並小限到寅宮入廟化吉 紫微太陽武曲天梁七殺，甲庚丁己生人財官雙美。"},{type:"prose",text:"寅年太歲並小限到寅宮不入廟化兇 廉貞貪狼破軍在寅，丙戊生人招官非，甲子生人不喜寅申歲限。"},{type:"prose",text:"寅年太歲所值吉凶星 紫微天府天機太陰武曲七殺天同天相太陽巨門天梁，便斷其年人財進益作事遂心。若遇貪狼陀忌，便斷其年人財破散，官非孝服，本身見災，減半論之。"},{type:"prose",text:"卯年太歲並小限到卯宮入廟化吉 紫微天機太陽天相天府天同武曲在命乙辛生人發旺。"},{type:"prose",text:"卯年太歲並小限到卯宮不入廟化兇 廉貞甲丙生人橫破財，太陰甲乙生人財破災害，庚生人亦不宜主災害。"},{type:"prose",text:"卯年太歲所值吉凶星 太陰天梁紫微天機天同天府貪狼巨門七殺，即斷其年人財興旺，婚姻喜事重重，諸事稱心。若遇廉貞破軍太陰天相擎羊忌宿，其年破財，官災口舌，本身見晦，減半論之。"},{type:"prose",text:"辰年太歲並小限到辰宮入廟化吉 紫微貪狼七殺在辰宮守命限癸甲生人財官祿旺，天機太陽丁庚癸生人財祿發旺，天同戊庚癸生人順遂，巨門丙辛生人遂意。"},{type:"prose",text:"辰年太歲並小限到辰宮不入廟化兇 貪狼武曲在辰壬癸生人災晦，天同巨門丁庚生人災晦，廉貞壬癸生人主災晦至重，太陰太陽天機甲乙戊己生人災晦。"},{type:"prose",text:"辰年太歲所值吉凶星 太陽天機天梁七殺貪狼文昌"},{type:"prose",text:"左輔右弼，便斷其年財祿大進益，家道更興隆，添丁進口，婚姻喜慶重重。若遇紫微天同廉貞天府太陰巨門天相破軍忌宿，便斷其年破財孝服，官災口舌。"},{type:"prose",text:"巳年太歲並小限到巳宮入廟化吉 紫微天府天同巨門天相天梁破軍丙戊辛人發福，太陰天機丁壬辛丙生人破財，貪狼甲戊生人平平。"},{type:"prose",text:"巳年太歲並小限到巳宮不入廟化兇 巨門貪狼癸丙生人口舌災晦，太陰破軍災晦多端。"},{type:"prose",text:"巳年太歲所值吉凶星 紫微太陽天同天府天梁祿存，便斷其年人財稱意，喜事重重。若遇武曲廉貞太陰貪狼巨門天相破軍忌星，便斷其年人財損失，官災口舌，本身病患，減半論之。"},{type:"prose",text:"午年太歲並小限到午宮入廟化吉 紫微太陽武曲天同天梁廉貞七殺破軍丁己甲癸生人進財遂心。"},{type:"prose",text:"午年太歲並小限到午宮不入廟化兇 貪狼在丙午壬癸生人破財官災口舌。"},{type:"prose",text:"午年太歲所值吉凶星 紫微天府天機太陽武曲廉貞天相巨門天梁破軍祿存，便斷其年人財興旺，婚姻喜事重重。若值太陰貪狼天同羊陀忌星，便斷其年人財破敗，官災口舌孝服，本身災厄可免。"},{type:"prose",text:"未年太歲並小限到未宮入廟化吉 紫微天機天府天相天梁壬乙生人發福，太陰庚壬生人發福生財。"},{type:"prose",text:"未年太歲並小限到未宮不入廟化兇 太陽甲乙生人多災晦，天同丁庚生人多災，武曲壬癸生人生災招官非橫禍。"},{type:"prose",text:"未年太歲所值吉凶星 紫微天府廉貞天機破軍天相，便斷其年人財增益，作事如意，婚姻產育之喜。若遇太陰太陽武曲天同貪狼巨門羊陀忌宿，便斷其年人財耗散，孝服官災，陰人小口不寧，本人災厄難免。"},{type:"prose",text:"申年太歲並小限到申宮入廟化吉 廉偵破軍紫微甲庚癸生人發福，巨門甲庚癸生人發福，天機丁甲癸生人發福，庚生人亦發財發福。"},{type:"prose",text:"申年太歲並小限到申宮不入廟化兇 天機乙戊生人災晦，巨門丁生人不宜，廉貞丙壬生人有災，天同甲庚生人災禍，貪狼癸丙生人有災禍。"},{type:"prose",text:"申年太歲所值吉凶星 紫微太陽廉貞天府巨門七殺文昌武曲祿存，便斷其年人財利益，喜事重重。若遇天機天同天梁天相太陰破軍忌星，便斷其年人財散失，官非孝服，本身災病。"},{type:"prose",text:"酉年太歲並小限到酉宮入廟化吉 紫微天機太陰酉宮守命丙戊乙辛生人進財吉利。"},{type:"prose",text:"酉年太歲並小限到酉宮不入廟化兇 太陽天同甲乙生人不宜，武曲庚壬生人不宜，天相甲庚生人不宜，廉貞甲庚丙辛生人不宜，天府甲庚壬生人不宜。"},{type:"prose",text:"酉年太歲所值吉凶星 祿存太陰紫微天府昌曲左右，便斷其年人財興旺，作事遂心。若值天機巨門武曲廉貞擎羊陀忌，便斷其年人離財散，口舌官非。"},{type:"prose",text:"戌年太歲並小限到戌宮入廟化吉 紫微壬甲丁己生人進財，太陰丁己生人吉慶，武曲丁己甲庚生人吉慶，天機甲乙丁己生人發福，巨門己辛癸生人發福，天同廉貞破軍七殺丁己甲生人發財。"},{type:"prose",text:"戌年太歲並小限到戌宮不入廟化兇 貪狼癸生人不宜，天同庚生人不宜，天機戊生人不宜，巨門丁生人不宜，太陽甲生人不宜，廉貞丙生人不宜，武曲壬生人不宜。"},{type:"prose",text:"戌年太歲所值吉凶星 天機太陰天梁天府武曲七殺貪狼左右天同，便斷其年人財利益，作事遂心，家道興隆。如遇巨門太陽破軍紫微天相忌宿，便斷其年人財退失，孝服官災，本身見病，減半論之。"},{type:"prose",text:"亥年太歲並小限到亥宮入廟化吉 紫微天同巨門天梁壬癸戊生人吉慶，天機壬生人吉美，天相丁己生人及丙戊生人發福，太陰戊己生人財官雙美。"},{type:"prose",text:"亥年太歲並小限到亥宮不入廟化兇 廉貞丙壬癸生人不宜，武曲壬丙生人不宜，太陽甲生人不宜。"},{type:"prose",text:"亥年太歲所值吉凶星 天同太陰天梁紫微天府昌曲祿存，便斷其年人財進益，喜氣重重，謀事俱稱心懷。若遇廉貞破軍七殺，便斷其年人財耗散，小口死亡，本身災晦。"}],raw:`論太歲小限星辰廟陷遇十二宮中吉凶
 依此判斷人行年災患應如神 
子年太歲並小限到子宮入廟化吉 七殺破軍在子宮守歲限癸庚己生人發福，巨門天機乙癸生人發福，天府天相天梁丁己庚人財旺遂心，又天同丙丁生人財官雙美。 
子年太歲並小限到子宮不入廟化兇 紫微在子宮守命及歲限丙戊生人悔吝，破財災殃。 
子年太歲所值吉凶星 祿存天機天同太陰昌曲輔弼破軍天相廉真武曲天府巨門七殺，可斷其年人財兩美事事遂心。若遇貪狼紫微天梁忌星太陽擎羊，便斷人財耗散孝服，本身災晦不寧，減半論之。 
丑年太歲並小限到丑宮入廟化吉 天機在丑守命丙辛生人發旺，天相戊生人發旺，太陰武曲丙戊生人發旺，天府廉貞戊生人發旺，天梁丙戊辛生人發旺。 
丑年太歲並小限到丑宮不入廟化兇 太陰在丑宮守命戊生人悔吝，太陽星甲乙生人悔吝，天機丙辛癸生人悔吝，天同廉貞丁庚生人招官非。 
丑年太歲所值吉凶星 紫微天相天梁太陰天府祿存廉貞破軍昌曲天機輔弼，可斷其年事事遂心。若遇天同巨門武曲貪狼忌宿太陽擎羊，便斷其年人財耗散，官災口舌孝服，本身遭晦，減半論之。 
寅年太歲並小限到寅宮入廟化吉 紫微太陽武曲天梁七殺，甲庚丁己生人財官雙美。 
寅年太歲並小限到寅宮不入廟化兇 廉貞貪狼破軍在寅，丙戊生人招官非，甲子生人不喜寅申歲限。 
寅年太歲所值吉凶星 紫微天府天機太陰武曲七殺天同天相太陽巨門天梁，便斷其年人財進益作事遂心。若遇貪狼陀忌，便斷其年人財破散，官非孝服，本身見災，減半論之。 
卯年太歲並小限到卯宮入廟化吉 紫微天機太陽天相天府天同武曲在命乙辛生人發旺。 
卯年太歲並小限到卯宮不入廟化兇 廉貞甲丙生人橫破財，太陰甲乙生人財破災害，庚生人亦不宜主災害。 
卯年太歲所值吉凶星 太陰天梁紫微天機天同天府貪狼巨門七殺，即斷其年人財興旺，婚姻喜事重重，諸事稱心。若遇廉貞破軍太陰天相擎羊忌宿，其年破財，官災口舌，本身見晦，減半論之。 
辰年太歲並小限到辰宮入廟化吉 紫微貪狼七殺在辰宮守命限癸甲生人財官祿旺，天機太陽丁庚癸生人財祿發旺，天同戊庚癸生人順遂，巨門丙辛生人遂意。 
辰年太歲並小限到辰宮不入廟化兇 貪狼武曲在辰壬癸生人災晦，天同巨門丁庚生人災晦，廉貞壬癸生人主災晦至重，太陰太陽天機甲乙戊己生人災晦。 
辰年太歲所值吉凶星 太陽天機天梁七殺貪狼文昌
左輔右弼，便斷其年財祿大進益，家道更興隆，添丁進口，婚姻喜慶重重。若遇紫微天同廉貞天府太陰巨門天相破軍忌宿，便斷其年破財孝服，官災口舌。 
巳年太歲並小限到巳宮入廟化吉 紫微天府天同巨門天相天梁破軍丙戊辛人發福，太陰天機丁壬辛丙生人破財，貪狼甲戊生人平平。 
巳年太歲並小限到巳宮不入廟化兇 巨門貪狼癸丙生人口舌災晦，太陰破軍災晦多端。 
巳年太歲所值吉凶星 紫微太陽天同天府天梁祿存，便斷其年人財稱意，喜事重重。若遇武曲廉貞太陰貪狼巨門天相破軍忌星，便斷其年人財損失，官災口舌，本身病患，減半論之。 
午年太歲並小限到午宮入廟化吉 紫微太陽武曲天同天梁廉貞七殺破軍丁己甲癸生人進財遂心。 
午年太歲並小限到午宮不入廟化兇 貪狼在丙午壬癸生人破財官災口舌。 
午年太歲所值吉凶星 紫微天府天機太陽武曲廉貞天相巨門天梁破軍祿存，便斷其年人財興旺，婚姻喜事重重。若值太陰貪狼天同羊陀忌星，便斷其年人財破敗，官災口舌孝服，本身災厄可免。 
未年太歲並小限到未宮入廟化吉 紫微天機天府天相天梁壬乙生人發福，太陰庚壬生人發福生財。 
未年太歲並小限到未宮不入廟化兇 太陽甲乙生人多災晦，天同丁庚生人多災，武曲壬癸生人生災招官非橫禍。 
未年太歲所值吉凶星 紫微天府廉貞天機破軍天相，便斷其年人財增益，作事如意，婚姻產育之喜。若遇太陰太陽武曲天同貪狼巨門羊陀忌宿，便斷其年人財耗散，孝服官災，陰人小口不寧，本人災厄難免。 
申年太歲並小限到申宮入廟化吉 廉偵破軍紫微甲庚癸生人發福，巨門甲庚癸生人發福，天機丁甲癸生人發福，庚生人亦發財發福。 
申年太歲並小限到申宮不入廟化兇 天機乙戊生人災晦，巨門丁生人不宜，廉貞丙壬生人有災，天同甲庚生人災禍，貪狼癸丙生人有災禍。 
申年太歲所值吉凶星 紫微太陽廉貞天府巨門七殺文昌武曲祿存，便斷其年人財利益，喜事重重。若遇天機天同天梁天相太陰破軍忌星，便斷其年人財散失，官非孝服，本身災病。 
酉年太歲並小限到酉宮入廟化吉 紫微天機太陰酉宮守命丙戊乙辛生人進財吉利。 
酉年太歲並小限到酉宮不入廟化兇 太陽天同甲乙生人不宜，武曲庚壬生人不宜，天相甲庚生人不宜，廉貞甲庚丙辛生人不宜，天府甲庚壬生人不宜。 
酉年太歲所值吉凶星 祿存太陰紫微天府昌曲左右，便斷其年人財興旺，作事遂心。若值天機巨門武曲廉貞擎羊陀忌，便斷其年人離財散，口舌官非。 
戌年太歲並小限到戌宮入廟化吉 紫微壬甲丁己生人進財，太陰丁己生人吉慶，武曲丁己甲庚生人吉慶，天機甲乙丁己生人發福，巨門己辛癸生人發福，天同廉貞破軍七殺丁己甲生人發財。 
戌年太歲並小限到戌宮不入廟化兇 貪狼癸生人不宜，天同庚生人不宜，天機戊生人不宜，巨門丁生人不宜，太陽甲生人不宜，廉貞丙生人不宜，武曲壬生人不宜。 
戌年太歲所值吉凶星 天機太陰天梁天府武曲七殺貪狼左右天同，便斷其年人財利益，作事遂心，家道興隆。如遇巨門太陽破軍紫微天相忌宿，便斷其年人財退失，孝服官災，本身見病，減半論之。 
亥年太歲並小限到亥宮入廟化吉 紫微天同巨門天梁壬癸戊生人吉慶，天機壬生人吉美，天相丁己生人及丙戊生人發福，太陰戊己生人財官雙美。 
亥年太歲並小限到亥宮不入廟化兇 廉貞丙壬癸生人不宜，武曲壬丙生人不宜，太陽甲生人不宜。 
亥年太歲所值吉凶星 天同太陰天梁紫微天府昌曲祿存，便斷其年人財進益，喜氣重重，謀事俱稱心懷。若遇廉貞破軍七殺，便斷其年人財耗散，小口死亡，本身災晦。`},{id:"lun-tongyuan-suoyi",title:"論諸星同垣各司所宜分別富貴貧賤夭壽",volume:3,blocks:[{type:"prose",text:"論諸星同垣各司所宜分別富貴貧賤夭壽"},{type:"prose",text:"紫微 廟丑未午 旺寅申卯酉巳亥 平子 無陷 紫微居午無刑忌甲丁己命至公卿 加刑忌平常刑乃擎羊也。 紫微居子午"},{type:"prose",text:"科權祿照最為奇"},{type:"prose",text:"科權祿三方照是也為仰面朝斗格。 紫微男亥女寅宮壬甲生人富貴同 同男女同也。 紫微卯酉"},{type:"prose",text:"劫空四殺多為脫俗之僧 四殺羊陀火鈴也。 紫微天府全依輔弼之功 紫府得輔弼同垣，及三方拱照嘉會，終身富貴。 紫微同宮無殺湊甲人享幅終身 紫府同在寅申宮守命，六甲人富貴。 紫府朝垣活祿逢終身福厚至三公 命坐寅申再加吉星妙。 紫府日月居旺地必定出佳公卿器 紫午府丑無殺加，又化祿是也。 紫府武曲臨"},{type:"prose",text:"財宅更兼權祿富奢翁 得左右祿存亦同。 紫微輔弼同宮一呼百諾居上品 或作三方為次吉，在"},{type:"prose",text:"財帛宮則為財賦之官。 紫府擎羊在鉅商 得武曲居遷移者吉。 紫祿同宮日月照貴不可言 紫微祿存同宮，日月三合拱照。 紫微七殺化權反作楨梓 紫微破軍無左右無吉曜兇惡胥吏之徒 紫微權祿遇羊陀雖獲吉而無道 為人心術不正。 紫破命臨於辰戍丑未再加吉曜富貴堪期 紫破貪狼為至淫男女邪淫 紫府同臨巳亥一朝富貴雙全 紫府夾命為貴格 紫微昌曲富貴可期 紫微太陰殺曜逢一生曹吏逞英雄 紫微武曲破軍會羊陀欺公禍亂 只宜經商。 紫破辰戍君臣不義 安樂山，趙高命是也。 女命紫微太陽星早遇賢夫信可憑 女命紫微在寅午申宮吉，貴美旺夫益子。陷地平常，惟子酉及巳亥加四殺，美玉瑕玷日後不美。"},{type:"prose",text:"天府 廟子丑未寅辰戌 旺午酉 地卯巳申亥 無陷 天府戌宮無殺湊甲己人腰金又且富 加四殺有疵。 天府居午戌天相來朝甲人一品之貴 府相朝垣千鍾食祿 命寅申，府相在"},{type:"prose",text:"財帛宮，祿官朝者，上格別宮次之。 天府昌曲左右高第恩榮 天府天相天梁同君臣慶會 天府祿存昌曲鉅萬之資 天府武曲居"},{type:"prose",text:"財宅更兼權祿富奢翁 有左右祿存亦美。"},{type:"prose",text:"天相 廟子午丑寅申 地辰戌巳亥未 陷卯酉 天相廉貞擎羊來多招刑杖難逃 終身不美招橫禍，只宜僧道。 天相之星女命纏必當子貴及夫賢 女命己生子宮，甲生午宮，庚生辰宮，俱是貴格。 右弼天相福來臨 女命天相、右弼，諸宮吉。子宮癸生人，寅宮癸己生人，申宮甲庚癸生人，俱是貴格，丑末亥宮不貴，子午卯酉皆少福。"},{type:"prose",text:"天梁 廟子午寅卯辰戌 旺丑未 地酉 陷申巳亥 天梁月曜女淫貧 梁巳亥陰寅申主淫佚，不陷衣祿遂如陷下賤。 天梁居午位官資清顯朝堂 丁己癸人合格。 梁同己亥男多浪蕩女多淫 加刑忌殺湊多下賤。 天梁文昌居廟旺位至臺綱 天梁守照吉相逢平生福壽 在午位極佳。 梁同機月寅申位一生利業聰明 聲多不論。 天梁太陽昌祿會臚傳第一名 梁武陰鈴擬作棟樑之客 梁宿太陰卻作飄蓬之客 梁居酉，月居已是也。 天梁"},{type:"prose",text:"天馬為人飄蕩風流 天梁加吉坐遷移臣商高賈 加刑忌平常。"},{type:"prose",text:"天同 廟巳亥 旺子申 陷午 天同會吉壽元長 天同貪羊陀居午位丙戌鎮御邊疆 為馬頭帶箭富且貴。 同月陷宮加殺重技藝羸黃 天同戌宮為反背丁人命遇反為佳 女命天同必是賢 子生人命坐寅，辛人命卯，丁人命戌入格。丙辛人命中吉，己亥逢此化吉雖美必淫。"},{type:"prose",text:"天機 廟子午 旺辰酉 陷丑未 機梁會合善談兵居戌亦為美論 孟子遷移戌宮，有機梁。 機梁守命加吉曜富貴慈祥 加刑忌僧道。 機梁同照命身空偏宜僧道 機同單守命身，又逢空亡。 機梁七殺破軍衝羽客僧流命所逢 若兼帝座加太陽吉。 機月同梁作吏人 命在寅申方論，加吉不論無吉無殺亦是平常人，兇殺空劫化忌為下格。 機梁貪月同機會暮夜經商無眠睡 遇兇星奔波。 天機加惡殺同宮狗偷鼠竊 天機巳宮酉逢好飲離宗奸狡重 巨陷天機為破格 女命在寅申卯酉雖富貴不免淫慾下賤，寅申守照福不全美。"},{type:"prose",text:"太陽 廟卯 旺寅辰巳午 陷子 日照雷門子辰卯地晝生富貴聲揚 太陽文昌在官祿皇殿朝班 文昌同亦然。 日落未申在命位為人先勤後懶 太陽居午庚辛丁己人富貴雙全 太陽化忌是非日有目還傷 女命端正太陽星早配賢夫信可憑 太陽守命，陷平常。居卯辰巳午無殺，旺夫益子。"},{type:"prose",text:"太陰 廟亥子丑 旺寅酉戌 陷卯辰巳 太陰居子丙丁富貴忠良 夜生人合局。 太陰武曲祿存同左右相逢富貴翁 太陰同文曲於妻宮蟾宮折桂 文昌同亦然，在身命巧藝之人。 太陰羊陀必主人離財散 月朗天門於亥地登雲職掌大權 子生人夜時生合局。不貴則大富。 月曜天梁女淫貧 太陰寅申巳，多主淫貧，或偏房侍婢。若貪狼、文昌、文曲，同於夫宮必招配賢明之夫。 太陽太陰拱照 日巳月酉丑宮命步蟾宮 日卯月亥安命未宮多折桂 日月同未命安丑侯伯之材 日月命身居丑末三方無吉反為兇 子午辰戌，身命更佳。 日月守命不如照合併明 守命吉多主吉，兇多主兇。若吉少，亦不為美之論。 日辰月戌並爭耀權祿非淺 日月夾命夾財加吉曜不權則富 加羊陀衝守，宜僧。 日月最嫌反背 如日月同宮，看人之生時。日喜太陽，夜宜太陰。若反背日戌月辰，子月午。若出外離宗成家也吉。勿概以反背論。 陰陽左右合為佳 日月陷宮逢惡殺勞碌奔波 日月羊陀多克親 日月更須貪殺會男多奸盜女多淫 日月疾厄"},{type:"prose",text:"命宮空腰陀目瞽 如日月在疾厄宮，逢空亡必主腰陀，目瞽，"},{type:"prose",text:"命宮亦然。"},{type:"prose",text:"文昌 廟巳酉丑 地申子辰 陷寅午戌 文昌武曲為人多學多能 四墓，卯酉巳亥身命。論三方"},{type:"prose",text:"科權祿。 文科拱照賈誼年少登科 論三方。 左輔文昌位至三臺 文昌武曲於身命文正兼備 孫臏之命是也。"},{type:"prose",text:"文曲 廟巳酉丑 地申子辰 陷寅午戌 二曲廟垣逢左右將相之財 文曲宜子午酉，武曲宜四墓。 二曲旺宮威名赫奕 文曲子宮第一，卯西宮次之。武曲辰宮第一，丑末宮次之。 二曲貪狼午丑限防溺水之憂 文昌文曲 昌曲夾命最為奇 假若命在丑宮，文昌在寅，文曲在子是也。不貴即富，吉多方論此為貴 昌曲臨於丑未時逢卯酉近天顏 賈誼卜商，昌曲未宮命丑宮。在命兼化吉者方論。 昌曲巳亥臨不貴即當大富 昌曲吉星居福德謂之玉袖天香 更得紫微，居午宮妙。 昌曲陷宮兇殺破虛譽之隆 兇殺即羊陀空劫。 昌曲陷於天傷顏回夭折 命有"},{type:"prose",text:"劫空，羊陀。限至七殺，羊陀迭並方論。 昌曲己辛壬生人限逢辰戌慮投河 如入廟吉，大小二限俱到。 昌曲廉貞於巳亥遭刑不善且虛誇 貪多作事顛倒，子申二官貴吉多美。 昌曲祿存猶為奇特 昌曲破軍臨虎兔殺羊衝破奔波 虎兔，即寅卯宮是也。 昌曲左右會羊陀當生異痣 女人昌曲聰明富貴只多淫"},{type:"prose",text:"武曲 廟辰戌丑未 旺子午 平巳亥 無失陷 武曲廟垣威名赫奕 辰戍丑未生人安命在辰戍宮為四墓，若但在丑未次之。 武曲相遇昌曲逢聰明巧藝定無窮 武曲或與天相同垣逢昌曲。 武曲祿馬交馳發財遠郡 武曲遷移鉅商高賈 吉多方論。 武曲廉貞貪殺便作經商 武曲破軍破祖破家勞碌 武曲劫殺會擎羊因財持刀 武曲"},{type:"prose",text:"魁鉞居廟旺財賦之官 武曲貪狼"},{type:"prose",text:"財宅位橫發資財 武曲貪狼加殺忌技藝之人 武曲破貞於卯地木壓雷驚 武曲羊陀兼火宿喪命因財 武曲之星為寡宿 火星柔弱，婦奪夫權方免刑剋。若兩剛相敵，必主刑剋生離。"},{type:"prose",text:"貪狠 廟辰戌丑未 旺子午 陷巳亥 貪狼遇鈴火四墓宮豪富家資侯伯貴 辰戌宮佳，丑未宮次之，若守照俱可論吉。 貪狠入廟壽元長 貪狼會殺無吉曜屠宰之人 貪狠子午卯酉鼠竊狗偷之輩終身不能有為 申子辰人命坐子宮，寅午戌人命坐午宮，亥卯末人命坐卯宮，巳酉丑人命坐酉宮是也。 貪狼加吉坐長生壽考永如彭租 寅午戌火生人，命坐寅木申金。 貪狠巳亥加殺不為屠戶亦遭刑 享福不久。 貪狼同行晚景邊夷神服 三十年後發財，坐命武曲守照。辰戌宮佳，丑未宮次之。 貪武先貧而後富 利己損人，命有紫微日月左右昌曲，限逢綠權科，則貴顯論。 貪狼加殺同鄉女偷香而男鼠竊 貪狼武曲同守身無吉命反不長 命無吉曜，身有貪武，孤貧。 貪月同殺會機梁貪財無厭作經商。 貪遇羊陀居亥子名為泛水桃花 男女貪花，迷酒喪身。有吉曜則吉。 貪狼陀羅在寅宮號曰風流彩杖 貪武申宮為下格 化忌方論。 貪武四生四墓宮破軍忌殺百工通 貪武破軍無吉曜迷戀酒以忘身 或作手藝。 貪狼廉貞同度男多浪蕩女多淫 女命貪狼多嫉妒 在亥子，遇羊陀嫉妒之流。逢祿馬不美。"},{type:"prose",text:"廉貞 廟寅申 利辰戌丑未 陷巳亥 廉貞申未宮無殺富貴聲揚播遠名 雄宿朝元格，加殺平常。 廉貞卯酉宮加殺公胥無面官人 或巧藝人。 廉貞暗臣曹吏貪婪 廉貞貪殺破軍逢武曲遷移作具戎 恐是文曲。 廉貞七殺居廟旺反為積富之人 殺居午奇格，若陷地化忌，貧賤殘疾。 廉貞破火居陷地自縊投河 廉貞七殺居巳亥流蕩天涯 仲由威猛廉貞入廟遇將軍 甲生人坐酉，乙生人坐亥，丙戊生人命坐酉，丁己生人命坐寅，庚生人命坐子，辛生人命坐卯，癸生人命坐申。 廉貞四殺遭刑戮 同羊陀火鈴是也，若安布此星同，必遭刑戮終身。 廉貞白虎刑杖難逃 流年太歲並小限坐宮，又值白虎加臨，主官非遭刑杖。 廉貞殺破會遷移死於外道 廉貞羊殺居官祿加紐難逃 廉貞清白能相守 女人甲己庚癸安命申酉亥子宮，丙辛乙戊安命寅卯巳午是也，若辰戌丑未反賤。"},{type:"prose",text:"巨門 廟寅申卯酉 旺子午巳亥 陷辰戌 巨日寅宮立命申先馳名而食祿 巨日"},{type:"prose",text:"命宮寅位食祿馳名 巨日申宮立命寅馳名食祿 巨門子午"},{type:"prose",text:"科權祿石中隱玉福興隆 富而子貴，辛癸人上格，丁己人次之，丙戊主男。 巨日命立申宮亦妙 巨在亥宮日在巳食祿馳名 巨在巳宮日在亥反為不佳 巨日拱照亦為奇 假如日午宮巨在戌宮是也，多方論日忌陷。 巨機居卯乙辛己丙至公卿 不貴即富，甲人平常何也，因甲祿到寅卯宮有擎羊破格耳。 巨機酉上化吉者縱有財官也不終 如值孤貧多有壽，鉅富即夭亡。加化忌尤兇，若太歲在遷移宮財官化祿。 巨門辰宮化忌辛人命遇反為奇 巨機丑未為下格 巨門陀羅必生異痣 巨門羊陀於身命疾厄羸黃困弱盜而娼 巨門四殺陷而兇 巨火擎羊陀逢惡曜防縊死投河 巨火鈴星逢惡限死於外道 巨宿天機為破蕩 女命巨機於卯酉，雖富貴不免淫佚，若陷地下賤。"},{type:"prose",text:"七殺 廟辰戌丑未寅申 旺子午卯酉 平巳亥 無陷 七殺寅申子午一生爵祿榮昌 為七殺朝斗格。 七殺破軍專依羊鈴之虐 七殺廉貞同位路上埋屍 觀廉貞內注會耗於遷移亦然，若陷地加化忌尤兇。 七殺破軍宜出外諸般手藝不能精 七殺臨身命流年刑忌災傷 逢紫微天相祿存可解。 殺臨絕地會羊陀顏回夭折 七殺重逢四殺腰陀背曲陣中亡 殺與鈴火，主陣亡，又有疾危。 七殺火羊貪且賤屠宰之人 七殺羊陀會生鄉，為屠宰。 七殺羊鈴流年白虎刑戮災迍 七殺流羊二官符離鄉遭配 歲限俱到。 七殺守照歲限擎羊午生人命安卯西宮主兇亡 餘宮亦忌命限三合殺，流年羊刃到命，即七殺重逢，申酉宮忌，多忌限 七殺沉吟福不榮 男有威權，女無所施。 七殺臨身終是夭 七殺單居幅德女人切忌賤無疑"},{type:"prose",text:"破軍 廟子午 旺辰戌丑未 陷卯酉 破軍子午宮無殺官資清顯至三公 甲癸生人合格，丁巳生人次之，丙戌生人主困。 破軍貪狼逢祿馬男多浪蕩女多淫 破軍暗巨同鄉水中作冢 破與巨不同垣，恐照"},{type:"prose",text:"命宮或犯遷移。 破軍火鈴奔波勞碌 破軍一曜性難明 男女命論。 破耗羊鈴官祿位到處乞求 又貪狼在子午卯酉者，看貪狼內注。"},{type:"prose",text:"擎羊 廟辰戌丑未 陷子午卯酉 擎羊入廟富貴聲揚 加吉萬論。 羊火同宮威權壓眾 辰戍人佳，丑未次之。 羊陀鈴火守身命腰駝背曲之人 擎羊子午卯酉非夭折而刑傷 午兇卯次之。子酉又次之，馬頭帶劍，吉多勿論。 擎羊逢力士李廣難封 甲生人命卯，丙生人命午，庚生人命酉，壬生人命子。吉多平常，加殺則兇 羊陀火鈴逢吉發財兇則忌 羊鈴坐命流年白虎災傷 流年白虎，又到"},{type:"prose",text:"命宮也。 擎羊對守在酉宮歲迭羊陀庚命兇 除宮亦忌，守"},{type:"prose",text:"命宮有羊陀。流年遇羊陀，為迭並。 羊陀夾忌為敗局 假如安命在申宮，又逢忌星，羊在酉陀在未夾之，餘皆仿此為例。命歲凶孤貧刑剋。若單守祿存無吉星同垣，亦有災殃之兇。 羊陀流年鈴破面字斑痕 擎羊火星為下格 擎羊重逢流羊西施傾殞身 歲限重逢。"},{type:"prose",text:"陀羅 廟辰戌丑未 陷寅申巳亥 陀羅巳亥寅申非夭折而刑傷 餘試得多離祖出外成家者亦吉，主生人有破相。"},{type:"prose",text:"火星 廟寅午戌 地巳酉丑 陷申子辰 火鈴相遇名振諸邦 火鈴夾命為敗局 如命安寅申，火星在丑，鈴星在卯。吉多尚可，惟夾忌。辰凶歲限巡遊者此地亦吉"},{type:"prose",text:"鈴星 廟寅午戌 地巳酉丑 陷申子辰 火鈴旺宮亦為福論 擎羊火鈴為下格 女人廟旺猶可，陷地下賤，貧窮夭折。"},{type:"prose",text:"魁鉞"},{type:"prose",text:"魁鉞夾命為奇格 如命安在辰宮，魁在卯，鉞在巳宮是也。"},{type:"prose",text:"魁鉞命身多折桂 如吉方論，在命身最妙，三方次之。"},{type:"prose",text:"魁鉞昌曲祿存扶刑殺無衝臺輔貴 命身妙三方，次見刑殺衝會者平常，只宜僧道。"},{type:"prose",text:"魁鉞重逢殺湊痼疾尤多 殺乃羊鈴空劫。"},{type:"prose",text:"魁鉞輔星為福壽 二上在命，諸宮福壽雙全。"},{type:"prose",text:"左輔右弼 左右文昌位至臺輔 左右夾命為貴格 如安命在丑宮，左輔在子宮，右弼在寅宮。四七十一月生者是也，若不貴則大富 右弼左輔終身福厚 在"},{type:"prose",text:"命宮遷移是也，三方次之。 左右同宮披羅衣紫 辰戌宮安命，正月七月生者，丑宮安命。四月生者卯亥宮安命，六月十二月生者，三方勿論。 左右單守照"},{type:"prose",text:"命宮離宗庶出 身命無正曜是也，若三方合紫微，天相，天府吉。 左右貞羊遭刑盜一左右昌曲逢羊陀當生暗痣 左右財官兼夾拱衣祿豐盈 左右"},{type:"prose",text:"魁鉞為福壽 三星在命論宮，福壽全美。若女命逢之，旺夫益子。 右弼天相福來臨 諸宮遇福，丑未亥三宮不貴。縱貴不久遠，前當主富，若卯酉二陷宮，少稱心意"},{type:"prose",text:"祿存 十二宮中皆入廟 祿存守於"},{type:"prose",text:"財宅積玉堆金 在命方可喜，化祿，同科權，更妙。 祿存子午位遷移身命逢之利祿宜 明祿暗祿位至公卿 雙祿重返終身富貴 祿逢衝破吉也成兇 雙祿守命呂后專權 祿存厚重多衣祿 諸宮降福，起家富貴。女人嫁夫，招贅旺財。"},{type:"prose",text:"天馬 祿馬最喜交馳 忌見殺羊火截路空亡，多主勞苦。"},{type:"prose",text:"天馬四生妻宮富貴還當封贈 馬遇空亡終身奔走"},{type:"prose",text:"科權祿"},{type:"prose",text:"科權祿合富貴雙全 祿存亦是祿，祿會祿存，富貴全會。巨武戍揚科，會"},{type:"prose",text:"魁鉞在"},{type:"prose",text:"命宮極佳。三方次吉，亦在兇多則不美。 祿權命逢合吉威權壓眾相王朝 權祿重逢財官雙美 三方吉多方吉，因聚也不美。 科命權朝登庸甲第 或權或祿全更佳。為言祿逢迎格。 活祿子午位遷移，夫子文章冠世 遷移在子午宮為對面朝天子 命太陽，化祿在午宮，合比格，餘宮要看吉凶"},{type:"prose",text:"科權祿來為貴格。如命安在子宮，祿在亥宮，權在丑宮，為夾貴。皆餘仿此。 權祿重逢殺湊虛譽之隆 科名陷於凶神苗而不秀 如日戌，月卯，化科陷地，或又加羊陀"},{type:"prose",text:"劫空。 祿主纏於弱地發不主財 權祿守"},{type:"prose",text:"財福之位處世榮華 權祿吉星奴僕位縱然官貴也奔波"},{type:"prose",text:"劫空"},{type:"prose",text:"劫空夾命為敗局 假如命安在亥宮，劫在子宮，空在亥宮是也。歲限行到亦兇，夾忌亦兇孤貧刑傷。"},{type:"prose",text:"劫空臨限楚王喪國綠珠亡 生處"},{type:"prose",text:"劫空猶如半天折翅"},{type:"prose",text:"劫空臨財幅之鄉生來貧賤"},{type:"prose",text:"傷使 天傷加惡曜仲尼絕糧鄧通亡"},{type:"prose",text:"命宮 三夾命兇六夾吉 三夾是"},{type:"prose",text:"劫空火鈴羊陀是也。六夾是紫府左右昌曲"},{type:"prose",text:"魁鉞"},{type:"prose",text:"科權祿日月是也。若在命則凶多吉少雖吉也兇，如吉多兇少雖兇也吉，身命三方乃看廟旺。 命無正曜二姓延生 或過房出維隨母繼拜入贅，或又是庶母所生者。 命逢吉曜松柏清秀以難凋 身命官有吉星，太歲大小二限不利，末為兇。必太歲二限有兇，又且本生人所忌方兇。 限逢兇曜柳綠桃紅而易謝 命逢兇限廟旺猶發，達限兇星陷必兇。 命實運生如旱苗而得雨 如命限平常，三方有吉星，如限行美地為福。 命衰運弱如嫩草而遭霜 如命坐陷忌，歲限又逢惡曜，必刑傷死亡。 命有吉星官殺重縱有財官也辛苦"},{type:"prose",text:"身宮 三夾身兇六夾吉 夾忌"},{type:"prose",text:"劫空火鈴羊陀兇，六夾貴逢吉甚妙。 身命俱吉富貴雙全 身吉命兇亦為美論 命弱身強財源不聚"},{type:"prose",text:"納音"},{type:"prose",text:"納音墓庫看何宮 如水生人墓辰遇財官或祿存尤妙，遇遷移耗殺同為不美。 生逢敗地發也虛花 如年"},{type:"prose",text:"納音水土長生見甲申，乃金星為水宮之主，若安命在酉敗地又逢羊陀忌耗七殺同不美。得祿存吉。 絕處逢生花而不敗 如水土絕在巳安命在巳為絕地卻得金星在巳生水不絕方為得祿"},{type:"prose",text:"財帛 日月夾財加吉曜不貴則富 如"},{type:"prose",text:"財帛宮在未天府星守，日在午月在申夾財是也，餘仿此。 左右財官兼夾拱衣祿豐隆 如左右同"},{type:"prose",text:"財帛宮，又或財官在丑日在子月在寅是夾也。"},{type:"prose",text:"財宅 紫微輔弼多為財賦之官 武曲太陰多居財賦之任 不是武曲太陰同限度，取"},{type:"prose",text:"財帛宮遇武曲或遇太陰星，主為人多居財賦之任。 紫府武曲居"},{type:"prose",text:"財帛更兼權祿富奢翁 武曲貪狼"},{type:"prose",text:"財宅橫發資財 忌空亡。 祿存守於"},{type:"prose",text:"財宅堆金積玉"},{type:"prose",text:"財福 權祿守"},{type:"prose",text:"財福之位出世榮華"},{type:"prose",text:"劫空臨"},{type:"prose",text:"財福之鄉生來貧賤"}],raw:`論諸星同垣各司所宜分別富貴貧賤夭壽
 
紫微 廟丑未午 旺寅申卯酉巳亥 平子 無陷 紫微居午無刑忌甲丁己命至公卿 加刑忌平常刑乃擎羊也。 紫微居子午
科權祿照最為奇 
科權祿三方照是也為仰面朝斗格。 紫微男亥女寅宮壬甲生人富貴同 同男女同也。 紫微卯酉
劫空四殺多為脫俗之僧 四殺羊陀火鈴也。 紫微天府全依輔弼之功 紫府得輔弼同垣，及三方拱照嘉會，終身富貴。 紫微同宮無殺湊甲人享幅終身 紫府同在寅申宮守命，六甲人富貴。 紫府朝垣活祿逢終身福厚至三公 命坐寅申再加吉星妙。 紫府日月居旺地必定出佳公卿器 紫午府丑無殺加，又化祿是也。 紫府武曲臨
財宅更兼權祿富奢翁 得左右祿存亦同。 紫微輔弼同宮一呼百諾居上品 或作三方為次吉，在
財帛宮則為財賦之官。 紫府擎羊在鉅商 得武曲居遷移者吉。 紫祿同宮日月照貴不可言 紫微祿存同宮，日月三合拱照。 紫微七殺化權反作楨梓 紫微破軍無左右無吉曜兇惡胥吏之徒 紫微權祿遇羊陀雖獲吉而無道 為人心術不正。 紫破命臨於辰戍丑未再加吉曜富貴堪期 紫破貪狼為至淫男女邪淫 紫府同臨巳亥一朝富貴雙全 紫府夾命為貴格 紫微昌曲富貴可期 紫微太陰殺曜逢一生曹吏逞英雄 紫微武曲破軍會羊陀欺公禍亂 只宜經商。 紫破辰戍君臣不義 安樂山，趙高命是也。 女命紫微太陽星早遇賢夫信可憑 女命紫微在寅午申宮吉，貴美旺夫益子。陷地平常，惟子酉及巳亥加四殺，美玉瑕玷日後不美。 
天府 廟子丑未寅辰戌 旺午酉 地卯巳申亥 無陷 天府戌宮無殺湊甲己人腰金又且富 加四殺有疵。 天府居午戌天相來朝甲人一品之貴 府相朝垣千鍾食祿 命寅申，府相在
財帛宮，祿官朝者，上格別宮次之。 天府昌曲左右高第恩榮 天府天相天梁同君臣慶會 天府祿存昌曲鉅萬之資 天府武曲居
財宅更兼權祿富奢翁 有左右祿存亦美。 
天相 廟子午丑寅申 地辰戌巳亥未 陷卯酉 天相廉貞擎羊來多招刑杖難逃 終身不美招橫禍，只宜僧道。 天相之星女命纏必當子貴及夫賢 女命己生子宮，甲生午宮，庚生辰宮，俱是貴格。 右弼天相福來臨 女命天相、右弼，諸宮吉。子宮癸生人，寅宮癸己生人，申宮甲庚癸生人，俱是貴格，丑末亥宮不貴，子午卯酉皆少福。 
天梁 廟子午寅卯辰戌 旺丑未 地酉 陷申巳亥 天梁月曜女淫貧 梁巳亥陰寅申主淫佚，不陷衣祿遂如陷下賤。 天梁居午位官資清顯朝堂 丁己癸人合格。 梁同己亥男多浪蕩女多淫 加刑忌殺湊多下賤。 天梁文昌居廟旺位至臺綱 天梁守照吉相逢平生福壽 在午位極佳。 梁同機月寅申位一生利業聰明 聲多不論。 天梁太陽昌祿會臚傳第一名 梁武陰鈴擬作棟樑之客 梁宿太陰卻作飄蓬之客 梁居酉，月居已是也。 天梁
天馬為人飄蕩風流 天梁加吉坐遷移臣商高賈 加刑忌平常。 
天同 廟巳亥 旺子申 陷午 天同會吉壽元長 天同貪羊陀居午位丙戌鎮御邊疆 為馬頭帶箭富且貴。 同月陷宮加殺重技藝羸黃 天同戌宮為反背丁人命遇反為佳 女命天同必是賢 子生人命坐寅，辛人命卯，丁人命戌入格。丙辛人命中吉，己亥逢此化吉雖美必淫。 
天機 廟子午 旺辰酉 陷丑未 機梁會合善談兵居戌亦為美論 孟子遷移戌宮，有機梁。 機梁守命加吉曜富貴慈祥 加刑忌僧道。 機梁同照命身空偏宜僧道 機同單守命身，又逢空亡。 機梁七殺破軍衝羽客僧流命所逢 若兼帝座加太陽吉。 機月同梁作吏人 命在寅申方論，加吉不論無吉無殺亦是平常人，兇殺空劫化忌為下格。 機梁貪月同機會暮夜經商無眠睡 遇兇星奔波。 天機加惡殺同宮狗偷鼠竊 天機巳宮酉逢好飲離宗奸狡重 巨陷天機為破格 女命在寅申卯酉雖富貴不免淫慾下賤，寅申守照福不全美。 
太陽 廟卯 旺寅辰巳午 陷子 日照雷門子辰卯地晝生富貴聲揚 太陽文昌在官祿皇殿朝班 文昌同亦然。 日落未申在命位為人先勤後懶 太陽居午庚辛丁己人富貴雙全 太陽化忌是非日有目還傷 女命端正太陽星早配賢夫信可憑 太陽守命，陷平常。居卯辰巳午無殺，旺夫益子。 
太陰 廟亥子丑 旺寅酉戌 陷卯辰巳 太陰居子丙丁富貴忠良 夜生人合局。 太陰武曲祿存同左右相逢富貴翁 太陰同文曲於妻宮蟾宮折桂 文昌同亦然，在身命巧藝之人。 太陰羊陀必主人離財散 月朗天門於亥地登雲職掌大權 子生人夜時生合局。不貴則大富。 月曜天梁女淫貧 太陰寅申巳，多主淫貧，或偏房侍婢。若貪狼、文昌、文曲，同於夫宮必招配賢明之夫。 太陽太陰拱照 日巳月酉丑宮命步蟾宮 日卯月亥安命未宮多折桂 日月同未命安丑侯伯之材 日月命身居丑末三方無吉反為兇 子午辰戌，身命更佳。 日月守命不如照合併明 守命吉多主吉，兇多主兇。若吉少，亦不為美之論。 日辰月戌並爭耀權祿非淺 日月夾命夾財加吉曜不權則富 加羊陀衝守，宜僧。 日月最嫌反背 如日月同宮，看人之生時。日喜太陽，夜宜太陰。若反背日戌月辰，子月午。若出外離宗成家也吉。勿概以反背論。 陰陽左右合為佳 日月陷宮逢惡殺勞碌奔波 日月羊陀多克親 日月更須貪殺會男多奸盜女多淫 日月疾厄
命宮空腰陀目瞽 如日月在疾厄宮，逢空亡必主腰陀，目瞽，
命宮亦然。 
文昌 廟巳酉丑 地申子辰 陷寅午戌 文昌武曲為人多學多能 四墓，卯酉巳亥身命。論三方
科權祿。 文科拱照賈誼年少登科 論三方。 左輔文昌位至三臺 文昌武曲於身命文正兼備 孫臏之命是也。 
文曲 廟巳酉丑 地申子辰 陷寅午戌 二曲廟垣逢左右將相之財 文曲宜子午酉，武曲宜四墓。 二曲旺宮威名赫奕 文曲子宮第一，卯西宮次之。武曲辰宮第一，丑末宮次之。 二曲貪狼午丑限防溺水之憂 文昌文曲 昌曲夾命最為奇 假若命在丑宮，文昌在寅，文曲在子是也。不貴即富，吉多方論此為貴 昌曲臨於丑未時逢卯酉近天顏 賈誼卜商，昌曲未宮命丑宮。在命兼化吉者方論。 昌曲巳亥臨不貴即當大富 昌曲吉星居福德謂之玉袖天香 更得紫微，居午宮妙。 昌曲陷宮兇殺破虛譽之隆 兇殺即羊陀空劫。 昌曲陷於天傷顏回夭折 命有
劫空，羊陀。限至七殺，羊陀迭並方論。 昌曲己辛壬生人限逢辰戌慮投河 如入廟吉，大小二限俱到。 昌曲廉貞於巳亥遭刑不善且虛誇 貪多作事顛倒，子申二官貴吉多美。 昌曲祿存猶為奇特 昌曲破軍臨虎兔殺羊衝破奔波 虎兔，即寅卯宮是也。 昌曲左右會羊陀當生異痣 女人昌曲聰明富貴只多淫 
武曲 廟辰戌丑未 旺子午 平巳亥 無失陷 武曲廟垣威名赫奕 辰戍丑未生人安命在辰戍宮為四墓，若但在丑未次之。 武曲相遇昌曲逢聰明巧藝定無窮 武曲或與天相同垣逢昌曲。 武曲祿馬交馳發財遠郡 武曲遷移鉅商高賈 吉多方論。 武曲廉貞貪殺便作經商 武曲破軍破祖破家勞碌 武曲劫殺會擎羊因財持刀 武曲
魁鉞居廟旺財賦之官 武曲貪狼
財宅位橫發資財 武曲貪狼加殺忌技藝之人 武曲破貞於卯地木壓雷驚 武曲羊陀兼火宿喪命因財 武曲之星為寡宿 火星柔弱，婦奪夫權方免刑剋。若兩剛相敵，必主刑剋生離。 
貪狠 廟辰戌丑未 旺子午 陷巳亥 貪狼遇鈴火四墓宮豪富家資侯伯貴 辰戌宮佳，丑未宮次之，若守照俱可論吉。 貪狠入廟壽元長 貪狼會殺無吉曜屠宰之人 貪狠子午卯酉鼠竊狗偷之輩終身不能有為 申子辰人命坐子宮，寅午戌人命坐午宮，亥卯末人命坐卯宮，巳酉丑人命坐酉宮是也。 貪狼加吉坐長生壽考永如彭租 寅午戌火生人，命坐寅木申金。 貪狠巳亥加殺不為屠戶亦遭刑 享福不久。 貪狼同行晚景邊夷神服 三十年後發財，坐命武曲守照。辰戌宮佳，丑未宮次之。 貪武先貧而後富 利己損人，命有紫微日月左右昌曲，限逢綠權科，則貴顯論。 貪狼加殺同鄉女偷香而男鼠竊 貪狼武曲同守身無吉命反不長 命無吉曜，身有貪武，孤貧。 貪月同殺會機梁貪財無厭作經商。 貪遇羊陀居亥子名為泛水桃花 男女貪花，迷酒喪身。有吉曜則吉。 貪狼陀羅在寅宮號曰風流彩杖 貪武申宮為下格 化忌方論。 貪武四生四墓宮破軍忌殺百工通 貪武破軍無吉曜迷戀酒以忘身 或作手藝。 貪狼廉貞同度男多浪蕩女多淫 女命貪狼多嫉妒 在亥子，遇羊陀嫉妒之流。逢祿馬不美。 
廉貞 廟寅申 利辰戌丑未 陷巳亥 廉貞申未宮無殺富貴聲揚播遠名 雄宿朝元格，加殺平常。 廉貞卯酉宮加殺公胥無面官人 或巧藝人。 廉貞暗臣曹吏貪婪 廉貞貪殺破軍逢武曲遷移作具戎 恐是文曲。 廉貞七殺居廟旺反為積富之人 殺居午奇格，若陷地化忌，貧賤殘疾。 廉貞破火居陷地自縊投河 廉貞七殺居巳亥流蕩天涯 仲由威猛廉貞入廟遇將軍 甲生人坐酉，乙生人坐亥，丙戊生人命坐酉，丁己生人命坐寅，庚生人命坐子，辛生人命坐卯，癸生人命坐申。 廉貞四殺遭刑戮 同羊陀火鈴是也，若安布此星同，必遭刑戮終身。 廉貞白虎刑杖難逃 流年太歲並小限坐宮，又值白虎加臨，主官非遭刑杖。 廉貞殺破會遷移死於外道 廉貞羊殺居官祿加紐難逃 廉貞清白能相守 女人甲己庚癸安命申酉亥子宮，丙辛乙戊安命寅卯巳午是也，若辰戌丑未反賤。 
巨門 廟寅申卯酉 旺子午巳亥 陷辰戌 巨日寅宮立命申先馳名而食祿 巨日
命宮寅位食祿馳名 巨日申宮立命寅馳名食祿 巨門子午
科權祿石中隱玉福興隆 富而子貴，辛癸人上格，丁己人次之，丙戊主男。 巨日命立申宮亦妙 巨在亥宮日在巳食祿馳名 巨在巳宮日在亥反為不佳 巨日拱照亦為奇 假如日午宮巨在戌宮是也，多方論日忌陷。 巨機居卯乙辛己丙至公卿 不貴即富，甲人平常何也，因甲祿到寅卯宮有擎羊破格耳。 巨機酉上化吉者縱有財官也不終 如值孤貧多有壽，鉅富即夭亡。加化忌尤兇，若太歲在遷移宮財官化祿。 巨門辰宮化忌辛人命遇反為奇 巨機丑未為下格 巨門陀羅必生異痣 巨門羊陀於身命疾厄羸黃困弱盜而娼 巨門四殺陷而兇 巨火擎羊陀逢惡曜防縊死投河 巨火鈴星逢惡限死於外道 巨宿天機為破蕩 女命巨機於卯酉，雖富貴不免淫佚，若陷地下賤。 
七殺 廟辰戌丑未寅申 旺子午卯酉 平巳亥 無陷 七殺寅申子午一生爵祿榮昌 為七殺朝斗格。 七殺破軍專依羊鈴之虐 七殺廉貞同位路上埋屍 觀廉貞內注會耗於遷移亦然，若陷地加化忌尤兇。 七殺破軍宜出外諸般手藝不能精 七殺臨身命流年刑忌災傷 逢紫微天相祿存可解。 殺臨絕地會羊陀顏回夭折 七殺重逢四殺腰陀背曲陣中亡 殺與鈴火，主陣亡，又有疾危。 七殺火羊貪且賤屠宰之人 七殺羊陀會生鄉，為屠宰。 七殺羊鈴流年白虎刑戮災迍 七殺流羊二官符離鄉遭配 歲限俱到。 七殺守照歲限擎羊午生人命安卯西宮主兇亡 餘宮亦忌命限三合殺，流年羊刃到命，即七殺重逢，申酉宮忌，多忌限 七殺沉吟福不榮 男有威權，女無所施。 七殺臨身終是夭 七殺單居幅德女人切忌賤無疑 
破軍 廟子午 旺辰戌丑未 陷卯酉 破軍子午宮無殺官資清顯至三公 甲癸生人合格，丁巳生人次之，丙戌生人主困。 破軍貪狼逢祿馬男多浪蕩女多淫 破軍暗巨同鄉水中作冢 破與巨不同垣，恐照
命宮或犯遷移。 破軍火鈴奔波勞碌 破軍一曜性難明 男女命論。 破耗羊鈴官祿位到處乞求 又貪狼在子午卯酉者，看貪狼內注。 
擎羊 廟辰戌丑未 陷子午卯酉 擎羊入廟富貴聲揚 加吉萬論。 羊火同宮威權壓眾 辰戍人佳，丑未次之。 羊陀鈴火守身命腰駝背曲之人 擎羊子午卯酉非夭折而刑傷 午兇卯次之。子酉又次之，馬頭帶劍，吉多勿論。 擎羊逢力士李廣難封 甲生人命卯，丙生人命午，庚生人命酉，壬生人命子。吉多平常，加殺則兇 羊陀火鈴逢吉發財兇則忌 羊鈴坐命流年白虎災傷 流年白虎，又到
命宮也。 擎羊對守在酉宮歲迭羊陀庚命兇 除宮亦忌，守
命宮有羊陀。流年遇羊陀，為迭並。 羊陀夾忌為敗局 假如安命在申宮，又逢忌星，羊在酉陀在未夾之，餘皆仿此為例。命歲凶孤貧刑剋。若單守祿存無吉星同垣，亦有災殃之兇。 羊陀流年鈴破面字斑痕 擎羊火星為下格 擎羊重逢流羊西施傾殞身 歲限重逢。 
陀羅 廟辰戌丑未 陷寅申巳亥 陀羅巳亥寅申非夭折而刑傷 餘試得多離祖出外成家者亦吉，主生人有破相。 
火星 廟寅午戌 地巳酉丑 陷申子辰 火鈴相遇名振諸邦 火鈴夾命為敗局 如命安寅申，火星在丑，鈴星在卯。吉多尚可，惟夾忌。辰凶歲限巡遊者此地亦吉 
鈴星 廟寅午戌 地巳酉丑 陷申子辰 火鈴旺宮亦為福論 擎羊火鈴為下格 女人廟旺猶可，陷地下賤，貧窮夭折。 
魁鉞 
魁鉞夾命為奇格 如命安在辰宮，魁在卯，鉞在巳宮是也。 
魁鉞命身多折桂 如吉方論，在命身最妙，三方次之。 
魁鉞昌曲祿存扶刑殺無衝臺輔貴 命身妙三方，次見刑殺衝會者平常，只宜僧道。 
魁鉞重逢殺湊痼疾尤多 殺乃羊鈴空劫。 
魁鉞輔星為福壽 二上在命，諸宮福壽雙全。 
左輔右弼 左右文昌位至臺輔 左右夾命為貴格 如安命在丑宮，左輔在子宮，右弼在寅宮。四七十一月生者是也，若不貴則大富 右弼左輔終身福厚 在
命宮遷移是也，三方次之。 左右同宮披羅衣紫 辰戌宮安命，正月七月生者，丑宮安命。四月生者卯亥宮安命，六月十二月生者，三方勿論。 左右單守照
命宮離宗庶出 身命無正曜是也，若三方合紫微，天相，天府吉。 左右貞羊遭刑盜一左右昌曲逢羊陀當生暗痣 左右財官兼夾拱衣祿豐盈 左右
魁鉞為福壽 三星在命論宮，福壽全美。若女命逢之，旺夫益子。 右弼天相福來臨 諸宮遇福，丑未亥三宮不貴。縱貴不久遠，前當主富，若卯酉二陷宮，少稱心意 
祿存 十二宮中皆入廟 祿存守於
財宅積玉堆金 在命方可喜，化祿，同科權，更妙。 祿存子午位遷移身命逢之利祿宜 明祿暗祿位至公卿 雙祿重返終身富貴 祿逢衝破吉也成兇 雙祿守命呂后專權 祿存厚重多衣祿 諸宮降福，起家富貴。女人嫁夫，招贅旺財。 
天馬 祿馬最喜交馳 忌見殺羊火截路空亡，多主勞苦。 
天馬四生妻宮富貴還當封贈 馬遇空亡終身奔走 
科權祿 
科權祿合富貴雙全 祿存亦是祿，祿會祿存，富貴全會。巨武戍揚科，會
魁鉞在
命宮極佳。三方次吉，亦在兇多則不美。 祿權命逢合吉威權壓眾相王朝 權祿重逢財官雙美 三方吉多方吉，因聚也不美。 科命權朝登庸甲第 或權或祿全更佳。為言祿逢迎格。 活祿子午位遷移，夫子文章冠世 遷移在子午宮為對面朝天子 命太陽，化祿在午宮，合比格，餘宮要看吉凶
科權祿來為貴格。如命安在子宮，祿在亥宮，權在丑宮，為夾貴。皆餘仿此。 權祿重逢殺湊虛譽之隆 科名陷於凶神苗而不秀 如日戌，月卯，化科陷地，或又加羊陀
劫空。 祿主纏於弱地發不主財 權祿守
財福之位處世榮華 權祿吉星奴僕位縱然官貴也奔波 
劫空 
劫空夾命為敗局 假如命安在亥宮，劫在子宮，空在亥宮是也。歲限行到亦兇，夾忌亦兇孤貧刑傷。 
劫空臨限楚王喪國綠珠亡 生處
劫空猶如半天折翅 
劫空臨財幅之鄉生來貧賤 
傷使 天傷加惡曜仲尼絕糧鄧通亡 
命宮 三夾命兇六夾吉 三夾是
劫空火鈴羊陀是也。六夾是紫府左右昌曲
魁鉞
科權祿日月是也。若在命則凶多吉少雖吉也兇，如吉多兇少雖兇也吉，身命三方乃看廟旺。 命無正曜二姓延生 或過房出維隨母繼拜入贅，或又是庶母所生者。 命逢吉曜松柏清秀以難凋 身命官有吉星，太歲大小二限不利，末為兇。必太歲二限有兇，又且本生人所忌方兇。 限逢兇曜柳綠桃紅而易謝 命逢兇限廟旺猶發，達限兇星陷必兇。 命實運生如旱苗而得雨 如命限平常，三方有吉星，如限行美地為福。 命衰運弱如嫩草而遭霜 如命坐陷忌，歲限又逢惡曜，必刑傷死亡。 命有吉星官殺重縱有財官也辛苦 
身宮 三夾身兇六夾吉 夾忌
劫空火鈴羊陀兇，六夾貴逢吉甚妙。 身命俱吉富貴雙全 身吉命兇亦為美論 命弱身強財源不聚 
納音 
納音墓庫看何宮 如水生人墓辰遇財官或祿存尤妙，遇遷移耗殺同為不美。 生逢敗地發也虛花 如年
納音水土長生見甲申，乃金星為水宮之主，若安命在酉敗地又逢羊陀忌耗七殺同不美。得祿存吉。 絕處逢生花而不敗 如水土絕在巳安命在巳為絕地卻得金星在巳生水不絕方為得祿 
財帛 日月夾財加吉曜不貴則富 如
財帛宮在未天府星守，日在午月在申夾財是也，餘仿此。 左右財官兼夾拱衣祿豐隆 如左右同
財帛宮，又或財官在丑日在子月在寅是夾也。 
財宅 紫微輔弼多為財賦之官 武曲太陰多居財賦之任 不是武曲太陰同限度，取
財帛宮遇武曲或遇太陰星，主為人多居財賦之任。 紫府武曲居
財帛更兼權祿富奢翁 武曲貪狼
財宅橫發資財 忌空亡。 祿存守於
財宅堆金積玉 
財福 權祿守
財福之位出世榮華 
劫空臨
財福之鄉生來貧賤`}],Es=Object.freeze(Object.defineProperty({__proto__:null,default:Oe},Symbol.toStringTag,{value:"Module"})),Le=[{id:"taiwei-fu",title:"太微賦",volume:1},{id:"xingxing-fu",title:"形性賦",volume:1},{id:"xingyuan-lun",title:"星垣論",volume:1},{id:"dou-shu-zhun-sheng",title:"斗數準繩",volume:1},{id:"dou-shu-fawei-lun",title:"斗數發微論",volume:1},{id:"chongbu-goulv",title:"重補斗數彀率",volume:1},{id:"zengbu-taiwei-fu",title:"增補太微賦",volume:1},{id:"zhuxing-wenda",title:"諸星問答論",volume:1},{id:"gumu-fu",title:"斗數骨隨賦",volume:1},{id:"nvming-gumu-fu",title:"女命骨髓賦",volume:1},{id:"shi-deng-lun",title:"定富貴貧賤十等論",volume:1},{id:"shiergong-dedi",title:"十二宮諸星得地合格訣",volume:1},{id:"shiergong-shixian",title:"十二宮諸星失陷破格訣",volume:1},{id:"dedi-fugui",title:"十二宮諸星得地富貴論",volume:1},{id:"shixian-pinjian",title:"十二宮諸星失陷貧賤論",volume:1},{id:"ding-fu-ju",title:"定富局",volume:1},{id:"ding-gui-ju",title:"定貴局",volume:1},{id:"ding-pinjian-ju",title:"定貧賤局",volume:1},{id:"ding-za-ju",title:"定雜局",volume:1},{id:"an-shenming-li",title:"安身命例",volume:2},{id:"an-shiergong-li",title:"安十二宮例",volume:2},{id:"qi-wuxing-yin",title:"起五行寅例",volume:2},{id:"huajia-nayin",title:"六十花甲子納音歌",volume:2},{id:"an-nanbeidou",title:"安南北斗諸星訣",volume:2},{id:"an-changqu",title:"安文昌文曲星訣",volume:2},{id:"an-fuxing",title:"安左輔右弼星訣",volume:2},{id:"an-kuiyue",title:"安天魁天鉞訣",volume:2},{id:"an-tianma",title:"安天馬星訣",volume:2},{id:"an-lucun",title:"安祿存星訣",volume:2},{id:"an-yangtuo",title:"安擎羊陀羅二星訣",volume:2},{id:"an-huoling",title:"安火鈴二星訣",volume:2},{id:"an-sihua-bianhua",title:"安祿權科忌四星變化訣",volume:2},{id:"kongjie-jue",title:"天空地劫訣",volume:2},{id:"an-shangshi",title:"安天傷天使訣",volume:2},{id:"an-suisha-lu",title:"安十二宮太歲殺祿訣",volume:2},{id:"an-xingyao",title:"安天刑天姚星訣",volume:2},{id:"an-santai",title:"安三臺八座二星訣",volume:2},{id:"an-kuxu",title:"安天哭天虛星訣",volume:2},{id:"an-longfeng",title:"安龍池鳳閣訣",volume:2},{id:"an-taifu",title:"安臺輔封訣",volume:2},{id:"an-fenggao",title:"安封誥訣",volume:2},{id:"an-changsheng",title:"安長生沐浴十二宮",volume:2},{id:"an-hongluan",title:"安紅鸞天喜訣",volume:2},{id:"an-sangmen",title:"安喪門白虎弔客官府四飛星訣",volume:2},{id:"an-doujun",title:"安斗君訣",volume:2},{id:"an-tiande",title:"安天德月德解神訣",volume:2},{id:"an-feisha",title:"安飛天三殺訣",volume:2},{id:"an-jielu",title:"安截路空亡訣",volume:2},{id:"an-xunzhong",title:"安旬中空亡訣",volume:2},{id:"an-daxian",title:"安大限訣",volume:2},{id:"an-xiaoxian",title:"安小限訣",volume:2},{id:"an-tongxian",title:"安童限訣",volume:2},{id:"an-mingzhu",title:"安命主",volume:2},{id:"an-shenzhu",title:"安身主",volume:2},{id:"jinsuo-tieshe",title:"論安命金鎖鐵蛇關",volume:2},{id:"zhuluo-sanxian",title:"定男女竹蘿三限",volume:2},{id:"shiergong-ruoqiang",title:"定十二宮弱強",volume:2},{id:"xingchen-luoxian",title:"定十二宮星辰落閒",volume:2},{id:"an-liulu",title:"安流祿流羊流陀訣",volume:2},{id:"shengke-zhihua",title:"論星辰生剋制化",volume:2},{id:"nanbeidou-wuxing",title:"論諸星分屬南北斗化吉凶並分屬五行",volume:2},{id:"antu-tianfu",title:"安紫微天府圖",volume:2},{id:"shangshi-tu",title:"殤使禍福緊慢圖",volume:2},{id:"luquan-tu",title:"祿權科忌圖",volume:2},{id:"miaowang-tu",title:"十二宮廟旺落陷圖",volume:2},{id:"lun-minggong",title:"一 命宮",volume:2},{id:"lun-xiongdi",title:"二 兄弟",volume:2},{id:"lun-qieqie",title:"三 妻妾",volume:2},{id:"lun-zinv",title:"四 子女",volume:2},{id:"lun-caibo",title:"五 財帛",volume:2},{id:"lun-jie",title:"六 疾厄",volume:2},{id:"lun-qianyi",title:"七 遷移",volume:2},{id:"lun-nupu",title:"八 奴僕",volume:2},{id:"lun-guanlu",title:"九 官祿",volume:2},{id:"lun-tianzhai",title:"十 田宅",volume:2},{id:"lun-fude",title:"十一 福德",volume:2},{id:"lun-fumu",title:"十二 父母",volume:2},{id:"tanxing-yaolun",title:"談星要論",volume:3},{id:"lun-ruming-ruge",title:"論人命入格",volume:3},{id:"lun-geshu-gaoxia",title:"論格星數高下",volume:3},{id:"lun-nannu-tongyi",title:"論男女命同異",volume:3},{id:"lun-xiaoer-ming",title:"論小兒命",volume:3},{id:"ding-xiaoer-shengshi",title:"定小兒生時訣",volume:3},{id:"lun-shengshi-anming",title:"論人生時安命吉凶",volume:3},{id:"lun-shengshi-diqie",title:"論人生時要審的確",volume:3},{id:"lun-xiaoer-keqin",title:"論小兒克親",volume:3},{id:"lun-xianpin-houfu",title:"論命先貧後富",volume:3},{id:"lun-daxian-shinian",title:"論大限十年禍福何如",volume:3},{id:"lun-erxian-taisui",title:"論二限太歲吉凶",volume:3},{id:"lun-xingxian-nanbei",title:"論行限分南北斗",volume:3},{id:"lun-liunian-xingsha",title:"論流年太歲吉凶星殺",volume:3},{id:"lun-yinzhi-yanshou",title:"論陰騭延壽",volume:3},{id:"lun-yangtuo-diebing",title:"論羊陀迭並",volume:3},{id:"lun-qisha-chongfeng",title:"論七殺重逢",volume:3},{id:"lun-xianchen-suoji",title:"論大小限星辰過十二宮遇十二支所忌訣",volume:3},{id:"lun-liming-xingxian-ge",title:"論立命行限宮歌",volume:3},{id:"lun-taisui-xiaoxian-miaoxian",title:"論太歲小限星辰廟陷遇十二宮中吉凶",volume:3},{id:"lun-tongyuan-suoyi",title:"論諸星同垣各司所宜分別富貴貧賤夭壽",volume:3}],Ce=Oe,Wt=Le;function Gt(e){const t=String(e||"").replace(/星$/u,"").trim();if(!t)return[];const s=he(t,"hant"),l=he(t,"hans");return[...new Set([t,s,l].filter(Boolean))]}function Me(e,t){return t!=="天寿"&&t!=="天壽"||e.includes("天壽星")||e.includes("天寿星")?!1:/孤寡天[寿壽]|[夭高][寿壽]|富貴高[寿壽]/.test(e)}function Ee(e,t){return!e||!t.length?!1:t.some(s=>s.length<2||!e.includes(s)?!1:!Me(e,s))}function Qt(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Is(e,t){if(!e)return[];const s=[...new Set(t.filter(c=>c.length>=2))].sort((c,i)=>i.length-c.length);if(!s.length)return[{text:e,hit:!1}];const l=new RegExp(`(${s.map(Qt).join("|")})`,"g"),a=[];let r=0;for(const c of e.matchAll(l)){const i=c.index??0;i>r&&a.push({text:e.slice(r,i),hit:!1});const o=c[0];a.push({text:o,hit:!Me(e,o)}),r=i+o.length}return r<e.length&&a.push({text:e.slice(r),hit:!1}),a.length?a:[{text:e,hit:!1}]}function Ss(e){const t=Gt(e);if(!t.length)return{found:!1,chapterId:"",keys:[]};const s=Ce.find(l=>l.id==="zhuxing-wenda");if(s){for(const l of t)if((s.blocks||[]).some(r=>{const c=String(r.text||"");return/[問问]/.test(c)&&c.includes(l)}))return{found:!0,chapterId:"zhuxing-wenda",keys:t}}for(const l of Wt){const a=String(l.title||"");if(Ee(a,t))return{found:!0,chapterId:l.id,keys:t}}for(const l of Ce)for(const a of l.blocks||[])if(Ee(String(a.text||""),t))return{found:!0,chapterId:l.id,keys:t};return{found:!1,chapterId:"",keys:t}}const Xt="http://ab.newdu.com/book/ms261794.html",Jt="https://baike.baidu.com/item/%E4%B8%89%E6%96%B9%E5%9B%9B%E6%AD%A3/1476303";function Zt(e){return Xt}const n={sourceTitle:"諸星問答論",wikiHeading:"諸星問答論",bookId:"zhuxing-wenda"},u={sourceTitle:"斗數發微論",wikiHeading:"斗數發微論",bookId:"dou-shu-fawei-lun"},C={sourceTitle:"十二宮諸星得地合格訣",wikiHeading:"十二宮諸星得地合格訣",bookId:"shiergong-dedi"},O={sourceTitle:"十二宮諸星失陷破格訣",wikiHeading:"十二宮諸星失陷破格訣",bookId:"shiergong-shixian"},zs={classic:"四正吉星定為貴，三方殺拱少為奇。對照兮詳凶詳吉，合照兮觀賤觀榮。",vernacular:"四正見到吉星才可論貴；三方被煞星拱照，就很少有出奇的福。對宮要分清吉凶，三合要看榮辱貴賤。單看一宮不夠。",...u},Ts={classic:"三方指一個宮位的三合宮，四正指三方加上該宮位的對宮。命宮的三方四正含命宮、官祿、財帛及對宮遷移。",vernacular:"讀任一宮，都要把本宮、對宮、兩個三合宮合起來看。命宮這組就是命、財、官、遷四宮。",sourceTitle:"百度百科·三方四正",wikiHeading:"",bookId:""},es=[{topic:"sihua",mutagen:["禄","祿"],classic:"祿為福德之神。守身命官祿之位，科權相逢必作大臣之職。",vernacular:"化祿主福澤。若守在身、命或官祿，再逢化科、化權，古書以大臣之職來比喻權位與資源。",sourceTitle:"問化祿星所主若何？",wikiHeading:"問化祿星所主若何？",bookId:"zhuxing-wenda"},{topic:"sihua",mutagen:["权","權"],classic:"權星掌判生殺之神。守身命科祿相逢出將入相。",vernacular:"化權主決斷與權柄。守身命又逢科、祿，古書以出將入相來比喻能做主、能推動。",sourceTitle:"問化權星所主若何？",wikiHeading:"問化權星所主若何？",bookId:"zhuxing-wenda"},{topic:"sihua",mutagen:["科"],classic:"科星上界應試，主掌文墨之星。守身命權祿相逢宰臣之貴。",vernacular:"化科主文名、考試與聲譽。守身命再逢權、祿，古書以宰臣之貴來比喻名望與文書之利。",sourceTitle:"問化科星所主若何？",wikiHeading:"問化科星所主若何？",bookId:"zhuxing-wenda"},{topic:"sihua",mutagen:["忌"],classic:"忌為多管之神。守身命一生不順，小限逢之一年不足，大限十年悔吝。",vernacular:"化忌主牽掛、阻滯。若守身命，古書說一生多不順；小限逢之主一年不足，大限逢之主十年多悔。",sourceTitle:"問化忌星所主若何？",wikiHeading:"問化忌星所主若何？",bookId:"zhuxing-wenda"}],ts=[{topic:"star",stars:["紫微"],classic:"紫微屬土，乃中天之尊星為帝座，主掌造化樞機，人生主宰。",vernacular:"紫微屬土，是中天帝座，管一盤的總綱，古人以它為人生主宰。",...n},{topic:"star",stars:["天機","天机"],classic:"天機屬木，南斗第三益算之善星也。",vernacular:"天機屬木，是南斗益壽的善星，主心思、謀略與變動。",...n},{topic:"star",stars:["太陽","太阳"],classic:"太陽星屬火，日之精也。乃造化之表儀，在數主人有貴氣，能為文為武。",vernacular:"太陽屬火，是日之精，主貴氣與外顯，能文能武。",...n},{topic:"star",stars:["武曲"],classic:"武曲北斗第六星，屬金，乃財帛宮主。",vernacular:"武曲屬金，是財帛宮主星，主剛斷，也主財與壽。",...n},{topic:"star",stars:["天同"],classic:"天同星屬水，乃南方第四星也，為福德宮之主宰。",vernacular:"天同屬水，是福德宮主星，主福澤、溫和與享樂。",...n},{topic:"star",stars:["廉貞","廉贞"],classic:"廉貞屬火，北斗第五星也。在斗司品秩，在數司權令。不臨廟旺，更犯官符，故曰化囚為殺。",vernacular:"廉貞屬火，管品秩權令；不得廟旺又見官符，古書說化囚為殺。",sourceTitle:"問廉貞所主若何？",wikiHeading:"問廉貞所主若何？",bookId:"zhuxing-wenda"},{topic:"star",stars:["天府"],classic:"天府屬土，南斗主令第一星也。為財帛之主宰，在斗司福權之宿，會吉皆為富貴之基。",vernacular:"天府屬土，是南斗主令、財帛主宰，會吉則為富貴之基。",sourceTitle:"問天府所主若何？",wikiHeading:"問天府所主若何？",bookId:"zhuxing-wenda"},{topic:"star",stars:["太陰","太阴"],classic:"太陰乃水之精，為田宅主，化富，與日為配。",vernacular:"太陰是水之精、田宅主，化氣為富，與太陽相配。",sourceTitle:"問太陰星所主若何？",wikiHeading:"問太陰星所主若何？",bookId:"zhuxing-wenda"},{topic:"star",stars:["貪狼","贪狼"],classic:"貪狼北斗解厄之神，第一星也。屬水，化氣為桃花。",vernacular:"貪狼屬水，化氣為桃花，是北斗第一星，主欲望與才藝，亦能解厄。",sourceTitle:"問貪狼所主若何？",wikiHeading:"問貪狼所主若何？",bookId:"zhuxing-wenda"},{topic:"star",stars:["巨門","巨门"],classic:"巨門屬水、金。北斗第二星也，為陰精之星，化氣為暗。",vernacular:"巨門化氣為暗，主口舌、是非與暗昧，落哪一宮就在哪一宮生口實。",...n},{topic:"star",stars:["天相"],classic:"天相屬水，南斗第五星也。為司爵之宿，為福善，化氣曰印。",vernacular:"天相化氣為印，是司爵之星，主輔助、衣食與官祿文書。",...n},{topic:"star",stars:["天梁"],classic:"天梁屬土，南斗第二星也。司壽化氣為蔭為福壽，乃父母之主。",vernacular:"天梁化氣為蔭，主壽、清望與父母，也能把暴戾化為祥和。",...n},{topic:"star",stars:["七殺","七杀"],classic:"七殺南斗第六星也，屬火、金。乃斗中之上將，實成敗之孤辰。",vernacular:"七殺是斗中上將，主威權與波折，成敗都猛，古書稱為孤辰。",...n},{topic:"star",stars:["破軍","破军"],classic:"破軍屬水，北斗第七星也，司夫妻、子息、奴僕之神。居子午入廟，在數為耗星，故化氣曰耗。",vernacular:"破軍屬水，化氣為耗，管夫妻、子息、奴僕；子午入廟，主耗散與開創。",sourceTitle:"問破軍所主若何？",wikiHeading:"問破軍所主若何？",bookId:"zhuxing-wenda"},{topic:"star",stars:["文昌"],classic:"文昌主科甲，守身命主人幽閑儒雅，清秀魁梧，博文廣記，機變異常，一舉成名。",vernacular:"文昌主科甲。守身命，古書說人清雅博學，一舉成名。",sourceTitle:"問文昌星所主若何？",wikiHeading:"問文昌星所主若何？",bookId:"zhuxing-wenda"},{topic:"star",stars:["文曲"],classic:"文曲屬水，北斗第四星也，主科甲文車之宿。臨身命中作科第之客。",vernacular:"文曲屬水，主科甲文墨；臨身命，古書以科第之客稱之。",sourceTitle:"問文曲星所主若何？",wikiHeading:"問文曲星所主若何？",bookId:"zhuxing-wenda"},{topic:"star",stars:["祿存","禄存"],classic:"十二宮中惟身命、田宅、財帛為要，主富。居遷移則佳，與帝星守官祿宜子孫爵秩。",vernacular:"祿存最得力在身、命、田宅、財帛，主富；在遷移也好；與紫微同守官祿，古書說利於爵秩。",...n},{topic:"star",stars:["左輔","左辅"],classic:"左輔帝極主宰之星，守身命諸宮降福。",vernacular:"左輔是帝座輔星，守身命則諸宮降福。",sourceTitle:"問左輔所主若何？",wikiHeading:"問左輔所主若何？",bookId:"zhuxing-wenda"},{topic:"star",stars:["右弼"],classic:"右弼帝極主宰之星，守身命文墨精通。",vernacular:"右弼與左輔同為帝座輔星，守身命主文墨精通。",sourceTitle:"問右弼所主若何？",wikiHeading:"問右弼所主若何？",bookId:"zhuxing-wenda"},{topic:"star",stars:["擎羊"],classic:"擎羊北斗之助星。守身命性粗行暴，孤單，視親為疏，翻恩為怨。",vernacular:"擎羊是北斗助星。守身命，古書說性子粗暴、易孤單，把親當疏、把恩當怨。",...n},{topic:"star",stars:["陀羅","陀罗"],classic:"陀羅北斗之助星。守身命心行不正，暗淚長流，性剛威猛，作事進退。",vernacular:"陀羅是北斗助星。守身命，古書說心思不定、進退反覆，做事橫成橫破。",...n},{topic:"star",stars:["火星"],classic:"火星乃南斗浮星也。",vernacular:"火星是南斗浮星，主急躁、衝動與突发波折，落哪一宮就在哪一宮添火氣。",...n},{topic:"star",stars:["鈴星","铃星"],classic:"鈴星乃南斗助星也。",vernacular:"鈴星是南斗助星，主驚擾、喧鬧與不安，常與火星並論。",...n},{topic:"star",stars:["天空"],classic:"天空地劫",vernacular:"天空主虛空、落空；做事容易「看得到抓不住」，計劃易散。",...n},{topic:"star",stars:["地劫"],classic:"天空地劫",vernacular:"地劫主耗散、破耗；資源或心力容易被抽走，宜防白忙。",...n},{topic:"star",stars:["天魁"],classic:"魁鉞斗中司科之星，入命坐貴向貴，或得左右吉聚無不富貴。",vernacular:"天魁是斗中貴人星之一，主貴人提攜、考試文書之助；入命多主有人拉一把。",...n},{topic:"star",stars:["天鉞","天钺"],classic:"魁鉞斗中司科之星，入命坐貴向貴，或得左右吉聚無不富貴。",vernacular:"天鉞與天魁同屬貴人，主和合與扶助；常見「遇難有人成全」的說法。",...n},{topic:"star",stars:["天馬","天马"],classic:"諸宮各有制化，如身命臨之謂之驛馬。",vernacular:"天馬主走動、變動與奔波；身命逢之，古書稱為驛馬，喜見祿存、紫府、昌曲。",...n},{topic:"star",stars:["天刑"],classic:"天刑守命身，不為僧道定主孤刑，不夭則貧。",vernacular:"天刑守身命，古書說若非出家清修，就容易孤克刑傷；限步逢之宜防官非破財。",...n},{topic:"star",stars:["天姚"],classic:"天姚守身命，心性陰毒，多疑恐、善顏色、風流多婢、主淫。",vernacular:"天姚守身命，主魅力、風流與桃花；也易多疑、因色生非，廟旺則另作富貴看。",...n}],ss=[{topic:"fawei-line",classic:"白玉蟾先生曰觀天斗數與五星不同，按此星辰與諸術大異。",vernacular:"白玉蟾說：斗數看天的方式與五星術不同，星辰用法和別家術數差很大。",...u},{topic:"fawei-line",classic:"四正吉星定為貴，三方殺拱少為奇。",vernacular:"四正見到吉星才可論貴；三方被煞星拱照，就很少有出奇的福。",...u},{topic:"fawei-line",classic:"對照兮詳兇詳吉，合照兮觀賤觀榮。",vernacular:"對宮要分清吉凶，三合要看榮辱貴賤。單看一宮不夠。",...u},{topic:"fawei-line",classic:"吉星入垣則為吉，兇星失地則為兇。",vernacular:"吉星落在得地、入廟之處才真吉；凶星落在失陷之地，凶性更顯。",...u},{topic:"fawei-line",classic:"命逢紫微非特壽而且榮，身遇殺星不但貧而且賤。",vernacular:"命宮逢紫微，古書說不僅壽，而且榮；身宮若遇殺星，不但貧而且賤。",stars:["紫微"],...u},{topic:"fawei-line",classic:"左右會於紫府極品之尊，科權陷於兇鄉功名蹭蹬。",vernacular:"左輔右弼會於紫微、天府，古書以極品之尊比喻；化科、化權若落凶陷之地，功名容易蹭蹬。",stars:["左輔","左辅","右弼","紫微","天府"],...u},{topic:"fawei-line",classic:"行限逢乎弱地未必為災，立命會在強宮必能降福。",vernacular:"大限走到弱地不一定成災；命盤本身坐在強宮，仍較能降福。",...u},{topic:"fawei-line",classic:"羊陀七殺限運莫逢，逢之定有刑傷。(劫空傷使在內合斷)",vernacular:"大限、流年忌逢擎羊、陀羅、七殺；逢之古書說易有刑傷（劫空、天傷、天使一併合看）。",stars:["擎羊","陀羅","陀罗","七殺","七杀"],needSha:!0,...u},{topic:"fawei-line",classic:"天哭喪門流年莫遇，遇之實防破害。",vernacular:"流年忌遇天哭、喪門一類星；遇之宜防破敗、傷損。",...u},{topic:"fawei-line",classic:"南斗主限必生男，北斗加臨先得女。",vernacular:"古書以南斗主限偏男、北斗加臨偏女作子息先後的一種說法，僅供對照。",...u},{topic:"fawei-line",classic:"科星居於陷地，燈火辛勤。昌曲在於兇鄉，林泉冷淡。",vernacular:"化科落陷，文書功名多辛苦；文昌文曲落在凶地，清貴之路容易冷淡。",stars:["文昌","文曲"],...u},{topic:"fawei-line",classic:"奸謀頻設，紫微愧遇破軍。淫奔大行，紅鸞差逢貪宿。",vernacular:"紫微遇破軍，古書說易生奸謀波折；紅鸞逢貪狼，桃花事容易過界。",stars:["紫微","破軍","破军","貪狼","贪狼"],...u},{topic:"fawei-line",classic:"命身相剋，則心亂而不閒。玄媼三宮，則邪淫而耽酒。(即天姚星)",vernacular:"命與身相剋，內心容易忙亂不安；天姚（玄媼）臨夫妻等宮，古書特提酒色風流之偏。",stars:["天姚"],palaces:["qizi"],...u},{topic:"fawei-line",classic:"殺臨三位，定然妻子不和。巨到二宮，必是兄弟無義。",vernacular:"煞星守夫妻宮（第三位），妻子不和；巨門到兄弟宮（第二位），兄弟少義氣。",...u},{topic:"fawei-line",classic:"刑殺守子，宮子難奉老。諸兇照財，帛聚散無常。",vernacular:"刑殺守子女宮，子息難養老；諸凶照財帛，錢財聚散無常。",...u},{topic:"fawei-line",classic:"羊陀守疾厄，眼目昏盲。火鈴到遷移，長途寂寞。",vernacular:"擎羊、陀羅守疾厄，古書特提眼目昏盲；火星、鈴星到遷移，遠行寂寞奔波。",stars:["擎羊","陀羅","陀罗","火星","鈴星","铃星"],...u},{topic:"fawei-line",classic:"尊星列賤位，主人多勞。惡星應八宮，奴僕無助。",vernacular:"貴星落在弱宮，主人多勞碌；惡星應奴僕宮（第八位），部屬或朋友少助力。",palaces:["jiaoyou"],...u},{topic:"fawei-line",classic:"官祿遇紫府，富而且貴。田宅遇破軍，先破後成。",vernacular:"官祿見紫微、天府，富而且貴；田宅遇破軍，產業先破後成。",stars:["紫微","天府","破軍","破军"],...u},{topic:"fawei-line",classic:"福德遇空劫，奔走無力。相貌加刑殺，刑剋難免。",vernacular:"福德遇天空、地劫，奔走而力不從心；相貌宮加刑殺，刑克較難免。",stars:["天空","地劫"],palaces:["fude"],...u},{topic:"fawei-line",classic:"後學者執此推詳，萬無一失。",vernacular:"後學按這些要點細推，古書自許較少差錯——仍須與全盤合參，不作鐵斷。",...u}],as=[{topic:"shixian-verse",palaces:["ming"],branches:["子","丑"],classic:"子午天機丑巨鈴，此星落陷果為真，縱然化吉更為美，任他富貴不清寧。",vernacular:"命在子、丑：天機在午、巨門鈴星在丑一類落陷，古訣說縱有化吉、富貴也不清寧。",...O},{topic:"shixian-verse",palaces:["ming"],branches:["寅"],classic:"寅上機昌曲月逢，雖然吉拱不豐隆，男為伴僕女娼婢，若非夭折即貧窮。",vernacular:"命在寅：天機、昌曲、太陰相逢，雖有吉拱也不豐隆；古訣語氣極重，宜作「易勞碌貧賤」來看。",...O},{topic:"shixian-verse",palaces:["ming"],branches:["卯","辰"],classic:"卯上太陰擎羊逢，辰宮巨宿紫微同，縱然化吉非全美，若非加殺到頭兇。",vernacular:"命在卯、辰：卯見太陰擎羊、辰見巨門紫微同宮，古訣說縱化吉也不全美，再加煞更凶。",...O},{topic:"shixian-verse",palaces:["ming"],branches:["巳"],classic:"巳宮武月天梁巨，貪宿廉貞共到蛇，三方吉曜皆不貴，下賤貧窮度歲華。",vernacular:"命在巳：武曲太陰天梁巨門與貪狼廉貞共聚，三方雖有吉曜古訣仍說難貴，偏貧賤勞碌。",...O},{topic:"shixian-verse",palaces:["ming"],branches:["午"],classic:"午宮貪巨月昌從，羊刃三合最嫌衝，雖然化吉居仕路，橫破橫成到老窮。",vernacular:"命在午：貪狼巨門太陰昌曲，又嫌羊刃三合沖；縱化吉走仕途，古訣說橫破橫成、晚年仍窮。",...O},{topic:"shixian-verse",palaces:["ming"],branches:["未"],classic:"未宮巨宿太陽嫌，縱少災危有克傷，勞碌奔波官事至，隨緣下賤度時光。",vernacular:"命在未：巨門與太陽相嫌，縱少大災也有克傷；勞碌奔波、官非易至，宜隨緣安守。",...O},{topic:"shixian-verse",palaces:["ming"],branches:["申","酉"],classic:"申宮機巨為破格，男人浪蕩女人貧，二宮若然桃花見，男女逢之總不榮。",vernacular:"命在申、酉：天機巨門為破格，男偏浪蕩、女偏貧；再逢桃花，古訣說更難榮顯。",...O},{topic:"shixian-verse",palaces:["ming"],branches:["戌","戍"],classic:"戍上紫破若相逢，天同太陽皆主兇，若還孤寒更殀折，隨緣勤苦免貧窮。",vernacular:"命在戌：紫微破軍相逢，天同太陽亦主凶；孤寒更重，古訣勸隨緣勤苦以求免貧。",...O},{topic:"shixian-verse",palaces:["ming"],branches:["亥"],classic:"亥宮貪火天梁同，飄蕩浪子走西東，若還富貴也年促，不然隸僕與貧窮。",vernacular:"命在亥：貪狼火星天梁同宮，飄蕩東西；縱有富貴也難長久，否則偏隸僕貧窮。",...O}],rs=[{topic:"palace-star",stars:["巨門","巨门"],palaces:["ming"],classic:"在身命一生招口舌之非。",vernacular:"巨門在命或身，古書說一生多口舌是非。",...n},{topic:"palace-star",stars:["巨門","巨门"],palaces:["xiongdi"],classic:"在兄弟則骨肉參商。",vernacular:"巨門在兄弟宮，古書說骨肉容易不和。",...n},{topic:"palace-star",stars:["巨門","巨门"],palaces:["qizi"],classic:"在夫妻主於隔角，生離死別，縱夫妻有對，不免汙名失節。",vernacular:"巨門在夫妻宮，古書說多隔閡，甚至生離死別，名節也要小心。",...n},{topic:"palace-star",stars:["巨門","巨门"],palaces:["zinv"],classic:"在子息損後方招，雖有而無。",vernacular:"巨門在子女宮，古書說子息來得晚、損後再招，有也不穩。",...n},{topic:"palace-star",stars:["巨門","巨门"],palaces:["caibo"],classic:"在財帛有爭競之意。",vernacular:"巨門在財帛宮，古書說錢財上多爭競。",...n},{topic:"palace-star",stars:["巨門","巨门"],palaces:["jie"],classic:"在疾厄遇刑忌，眼目之災，殺臨主殘疾。",vernacular:"巨門在疾厄再遇刑忌，古書特提眼目之災；有煞同宮更重。",...n},{topic:"palace-star",stars:["巨門","巨门"],palaces:["qianyi"],classic:"在遷移則招是非。",vernacular:"巨門在遷移宮，古書說外出、變動中容易惹是非。",...n},{topic:"palace-star",stars:["巨門","巨门"],palaces:["jiaoyou"],classic:"在奴僕則多怨逆。",vernacular:"巨門在奴僕（交友）宮，古書說部屬或朋友多怨逆。",...n},{topic:"palace-star",stars:["巨門","巨门"],palaces:["guanlu"],classic:"在官祿主招刑杖。",vernacular:"巨門在官祿宮，古書說功名事業上容易招刑責、口舌。",...n},{topic:"palace-star",stars:["巨門","巨门"],palaces:["tianzhai"],classic:"在田宅則破蕩祖業。",vernacular:"巨門在田宅宮，古書說不利祖業房產，容易破蕩。",...n},{topic:"palace-star",stars:["巨門","巨门"],palaces:["fude"],classic:"在福德其禍稍輕。",vernacular:"巨門在福德宮，古書說為禍相對較輕。",...n},{topic:"palace-star",stars:["巨門","巨门"],palaces:["fumu"],classic:"在父母則遭棄擲。",vernacular:"巨門在父母宮，古書說與尊長緣薄，有被棄擲之象。",...n},{topic:"palace-star",stars:["七殺","七杀"],palaces:["ming"],classic:"在命宮若限不扶夭折，在官祿得地，化禍為祥。",vernacular:"七殺在命宮，若大限不來扶助，古書說恐夭折；若在官祿得地，則能化禍為祥。",...n},{topic:"palace-star",stars:["七殺","七杀"],palaces:["guanlu"],classic:"在官祿得地，化禍為祥。",vernacular:"七殺在官祿得地，古書說能把禍轉成權與功。",...n},{topic:"palace-star",stars:["七殺","七杀"],palaces:["zinv"],classic:"在子息，而子息孤單。",vernacular:"七殺在子女宮，古書說子息緣薄、孤單。",...n},{topic:"palace-star",stars:["七殺","七杀"],palaces:["qizi"],classic:"居夫婦而鴛衾半冷。",vernacular:"七殺在夫妻宮，古書說情感易冷、伴侶緣不圓。",...n},{topic:"palace-star",stars:["紫微"],palaces:["ming","guanlu"],classic:"若居官祿身命，三宮最要左右守衛。",vernacular:"紫微守命或官祿，古書最重左輔右弼同宮或拱照。",...n},{topic:"palace-star",stars:["紫微"],palaces:["caibo","tianzhai"],classic:"財帛田宅有左右守衛，又與太陰武曲同度，不見惡星，必為財賦之官。",vernacular:"紫微在財帛或田宅，若有輔弼，又見太陰、武曲而無惡星，古書以財賦之官比喻。",...n},{topic:"palace-star",stars:["紫微"],palaces:["zinv"],classic:"男女宮得祥佐吉星，主生貴子。若獨守無相佐，則子息孤單。",vernacular:"紫微在子女宮，有吉星相佐主貴子；獨守無輔則子息孤單。",...n},{topic:"palace-star",stars:["紫微"],palaces:["qizi"],classic:"妻宮會吉，男女得貴美夫婦諧老，亦要無破殺。",vernacular:"紫微在夫妻宮會吉，古書說夫婦可諧老，但不能見破軍、七殺沖破。",...n},{topic:"palace-star",stars:["紫微"],palaces:["qianyi"],classic:"遷移雖是強宮，更要相佐，有吉星照命，則因人之貴。",vernacular:"紫微在遷移是強宮，仍要有輔佐；有吉星照命，古書說能因人而貴。",...n},{topic:"palace-star",stars:["紫微"],palaces:["fude"],classic:"福德男為陷地，女為廟樂，逢吉則吉，逢凶則凶。",vernacular:"紫微在福德，男命多作陷地看，女命較宜；仍是逢吉則吉、逢凶則凶。",...n},{topic:"palace-star",stars:["紫微"],palaces:["jie","xiongdi","jiaoyou"],classic:"如落疾厄、兄弟、奴僕、相貌、四陷宮，主人勞碌作事無成，雖得助亦不為福。",vernacular:"紫微落入疾厄、兄弟、奴僕等弱宮，古書說勞碌少成，即使有助也不算福。",...n},{topic:"palace-star",stars:["太陽","太阳"],palaces:["guanlu"],classic:"後化貴化祿，最宜在官祿宮。",vernacular:"太陽最宜在官祿宮，古書說能化貴、化祿。",...n},{topic:"palace-star",stars:["太陽","太阳"],palaces:["qizi"],classic:"夫妻亦為強宮，男為諸吉聚，可因妻得貴。陷地加殺，傷妻不吉。",vernacular:"太陽在夫妻是強宮，男命吉聚可因妻得貴；若陷地加煞，古書說傷妻不吉。",...n},{topic:"palace-star",stars:["太陽","太阳"],palaces:["zinv"],classic:"男女宮得八座，加吉星在廟旺地，主生貴子，權柄不小。",vernacular:"太陽在子女宮，廟旺又見吉星，古書說主貴子、權柄。",...n},{topic:"palace-star",stars:["太陽","太阳"],palaces:["caibo"],classic:"若財帛宮於旺地，會吉相助，不怕巨門纏，其富貴綿遠矣！",vernacular:"太陽在財帛得旺又有吉助，即使見巨門，古書仍說富貴較能綿遠。",...n},{topic:"palace-star",stars:["太陽","太阳"],palaces:["tianzhai"],classic:"居田宅，得祖父蔭澤。",vernacular:"太陽在田宅宮，古書說能得祖父蔭澤。",...n},{topic:"palace-star",stars:["太陽","太阳"],palaces:["qianyi"],classic:"遷移宮其福與身命不同，難招祖業，移根換葉，出祖為家。",vernacular:"太陽在遷移，福與守命不同，古書說難守祖業，多外出成家。",...n},{topic:"palace-star",stars:["太陽","太阳"],palaces:["fumu"],classic:"父母宮男子單作父星，有輝則吉，無輝克父。",vernacular:"太陽在父母宮，男命作父星：有輝則吉，失輝古書說克父。",...n},{topic:"palace-star",stars:["武曲"],palaces:["caibo","tianzhai"],classic:"天府、天相為佐貳之星，財帛田宅為專司之所。",vernacular:"武曲專司財帛、田宅，喜天府、天相同宮相助。",...n},{topic:"palace-star",stars:["天梁"],palaces:["fumu"],classic:"在父母宮則厚重威嚴。",vernacular:"天梁在父母宮，古書說尊長厚重威嚴。",...n},{topic:"palace-star",stars:["天梁"],palaces:["jiaoyou","jie"],classic:"居奴僕、疾厄、相貌作豐餘之論。",vernacular:"天梁在奴僕或疾厄，古書反而作豐餘、有餘裕來看。",...n},{topic:"palace-star",stars:["天相"],palaces:["guanlu"],classic:"官祿得之則顯榮，帝座合之則爭權。",vernacular:"天相在官祿主顯榮；與紫微同宮，古書說能爭權、佐帝。",...n},{topic:"palace-star",stars:["天相"],palaces:["ming"],classic:"身命得之而榮耀。",vernacular:"天相在身、命，古書說主榮耀。",...n},{topic:"palace-star",stars:["天相"],palaces:["zinv"],classic:"子息得之而嗣續昌。",vernacular:"天相在子女宮，古書說嗣續昌盛。",...n},{topic:"palace-star",stars:["天機","天机"],palaces:["xiongdi"],classic:"天機兄弟主，南斗正曜星。",vernacular:"天機是兄弟宮主星，主聰明謀略，也看手足緣。",...n},{topic:"palace-star",stars:["天同"],palaces:["fude","ming"],classic:"十二宮中皆曰福，無破定為祥。",vernacular:"天同入廟無破，古書說十二宮皆可作福看。",...n}],ns=[{topic:"fawei-palace",palaces:["qizi"],classic:"殺臨三位，定然妻子不和。",vernacular:"煞星守夫妻宮（第三位），古書說妻子不和。",needSha:!0,...u},{topic:"fawei-palace",palaces:["xiongdi"],stars:["巨門","巨门"],classic:"巨到二宮，必是兄弟無義。",vernacular:"巨門到兄弟宮（第二位），古書說兄弟少義氣。",...u},{topic:"fawei-palace",palaces:["zinv"],classic:"刑殺守子宮，子難奉老。",vernacular:"刑殺守子女宮，古書說子息難養老。",needSha:!0,...u},{topic:"fawei-palace",palaces:["caibo"],classic:"諸凶照財帛，聚散無常。",vernacular:"諸凶照財帛宮，古書說錢財聚散無常。",needSha:!0,...u},{topic:"fawei-palace",palaces:["jie"],stars:["擎羊","陀羅","陀罗"],classic:"羊陀守疾厄，眼目昏盲。",vernacular:"擎羊、陀羅守疾厄，古書特提眼目昏盲。",...u},{topic:"fawei-palace",palaces:["qianyi"],stars:["火星","鈴星","铃星"],classic:"火鈴到遷移，長途寂寞。",vernacular:"火星、鈴星到遷移，古書說遠行寂寞、奔波。",...u},{topic:"fawei-palace",palaces:["jiaoyou"],classic:"惡星應八宮，奴僕無助。",vernacular:"惡星應奴僕宮（第八位），古書說部屬無助。",needSha:!0,...u},{topic:"fawei-palace",palaces:["guanlu"],stars:["紫微","天府"],classic:"官祿遇紫府，富而且貴。",vernacular:"官祿宮見紫微、天府，古書說富而且貴。",...u},{topic:"fawei-palace",palaces:["tianzhai"],stars:["破軍","破军"],classic:"田宅遇破軍，先破後成。",vernacular:"田宅宮遇破軍，古書說產業先破後成。",...u},{topic:"fawei-palace",palaces:["fude"],stars:["天空","地劫"],classic:"福德遇空劫，奔走無力。",vernacular:"福德宮遇天空、地劫，古書說奔走而力不從心。",...u},{topic:"fawei-palace",palaces:["ming"],stars:["紫微"],classic:"命逢紫微非特壽而且榮。",vernacular:"命宮逢紫微，古書說不僅壽，而且榮。",...u}],cs=[{topic:"ming-verse",palaces:["ming"],branches:["子"],classic:"子宮貪狼殺陰星，機梁相拱福興隆。",vernacular:"命在子：貪狼、七殺、太陰一類，若得天機、天梁相拱，古訣說福可興隆。",...C},{topic:"ming-verse",palaces:["ming"],branches:["丑"],classic:"丑宮立命日月朝，丙戍生人福祿饒。",vernacular:"命在丑：日月朝拱，古訣以丙、戊生人福祿較饒。",...C},{topic:"ming-verse",palaces:["ming"],branches:["寅"],classic:"寅宮巨日足豐隆，七殺天梁百事通。",vernacular:"命在寅：巨門、太陽，或七殺、天梁，古訣說能豐隆、百事通。",...C},{topic:"ming-verse",palaces:["ming"],branches:["卯"],classic:"卯宮機巨武曲逢，辛乙生人福氣隆。",vernacular:"命在卯：天機、巨門、武曲相逢，古訣以辛、乙生人福氣較隆。",...C},{topic:"ming-verse",palaces:["ming"],branches:["辰"],classic:"辰位機梁坐命宮，天府戍地最盈豐。",vernacular:"命在辰：天機、天梁坐命，天府在戌地，古訣說最盈豐。",...C},{topic:"ming-verse",palaces:["ming"],branches:["巳"],classic:"巳位天機天相臨，紫府朝垣福更深。",vernacular:"命在巳：天機、天相臨命，再得紫微、天府朝垣，古訣說福更深。",...C},{topic:"ming-verse",palaces:["ming"],branches:["午"],classic:"午宮紫府太陽同，機梁破殺喜相逢。",vernacular:"命在午：紫微、天府、太陽同宮，天機、天梁與破軍、七殺相逢，古訣作喜看。",...C},{topic:"ming-verse",palaces:["ming"],branches:["未"],classic:"未宮紫武廉貞同，日月巨門喜相逢。",vernacular:"命在未：紫微、武曲、廉貞同宮，日月、巨門相逢，古訣說男可位至三公、女主福壽。",...C},{topic:"ming-verse",palaces:["ming"],branches:["申"],classic:"申宮紫帝貞梁同，武曲巨門喜相逢。",vernacular:"命在申：紫微、廉貞、天梁同度，武曲、巨門相逢，古訣以甲、庚、癸人較喜。",...C},{topic:"ming-verse",palaces:["ming"],branches:["酉"],classic:"酉宮最喜太陰逢，巨日又逢當面沖。",vernacular:"命在酉：最喜太陰，巨門、太陽當面沖，古訣以辛、乙生人為貴格。",...C},{topic:"ming-verse",palaces:["ming"],branches:["戌","戍"],classic:"戍宮紫微對沖辰，富而不貴有虛名。",vernacular:"命在戌：紫微對沖辰，古訣說富而不貴、有虛名；再加吉曜權祿，利貿易。",...C},{topic:"ming-verse",palaces:["ming"],branches:["亥"],classic:"亥宮最喜太陰逢，若人值此福祿隆。",vernacular:"命在亥：最喜太陰，古訣說男女逢之皆稱意，福祿較隆。",...C}];function As(e){const t=e.bookId?Zt(e.wikiHeading):Jt;return{classic:e.classic,vernacular:e.vernacular,cite:{title:e.sourceTitle,url:t,bookId:e.bookId||void 0}}}const ls={"chongbu-goulv":[{classic:"諸星吉多逢兇也吉，諸星惡多逢吉也兇。",vernacular:"诸星吉多：逢凶也吉——盘面禄权昌曲辅弼占优，偶见羊陀火铃，整体仍偏吉，煞成波折不成定败。诸星恶多：逢吉也凶——煞空劫占优，偶见一颗禄权，也难翻盘，吉成点缀。先数吉凶比重，再谈单星。"},{classic:"星更纏度，數分定局。",vernacular:"星更缠度：每星落度不同，同宫也分紧会远会。数分定局：先安十二宫定局、定主星，再分格局高低。缠度与定局是讲盘起手式。"},{classic:"重在看星得垣受制，方可論人禍福窮通。",vernacular:"重在看星「得垣」还是「受制」：得垣=入庙旺有力；受制=被克被冲被空。方可论祸福穷通——不得垣的吉星福虚，受制的凶星或减或横，条件不清勿下断。"},{classic:"大概以身命為禍福之柄，以根源為窮通之機。",vernacular:"大概以「身命」为祸福之柄——命身定总开关；以「根源」为穷通之机——本命庙旺格局、五行通关才是穷通关键。柄在身命，机在根基，两层都要看。"},{classic:"紫微在命輔弼同垣，其貴必矣，財印夾命日月夾財，其富何疑。",vernacular:"紫微在命、辅弼同垣：其贵必矣——帝星+左右同宫，贵气实打实。「财印夹命、日月夹财」：其富何疑——财星印星（天相禄存等）夹命，日月夹财帛，富局成型。贵看紫辅，富看夹拱。"},{classic:"蔭福臨不怕兇衝，日月會不如合照。",vernacular:"「荫福」临：不怕凶冲——天梁等荫星坐宫，凶冲有挡，福可护人。「日月会」不如「合照」——日月仅对宫远会，力不如三合/同宫合照来得贴。护持看荫星实临，光看远会不够。"},{classic:"貪狼居子乃為泛水桃花，天刑遭貪必主風流刑杖。",vernacular:"贪狼居子：乃为「泛水桃花」——子水位贪狼，桃花欲望泛滥，感情社交湿重。「天刑」遭贪：必主风流刑杖——刑星会贪狼，风流易惹官司刑责。子贪+刑贪，色与讼要一起防。"},{classic:"紫微坐命庫則曰金轝捧櫛輦，臨官安文曜號為衣錦惹天香。",vernacular:"紫微坐命库：曰「金轝捧栉辇」——帝星坐库地，贵而有藏，车驾仪仗之象。「临官」安文曜：号「衣锦惹天香」——临官位再安文昌文曲，衣锦文名香。库贵+文曜，名位都好看。"},{classic:"太陰合文曲於妻宮翰林清異，太陽會文昌於官祿金殿傳臚。",vernacular:"太阴合文曲于妻宫：翰林清异——夫妻宫阴+曲，配偶偏文清，或因配偶得文名清贵。「太阳会文昌于官禄」：金殿传胪——官禄日+昌，功名殿试传胪象。文贵落妻与落官，一主姻一文主职。"},{classic:"祿合守田財為爛谷堆金，財蔭居遷移為高商豪客。",vernacular:"「禄合」守田财：烂谷堆金——禄存化禄等合守田宅财帛，积粟堆金，不动产与存款厚。「财荫」居迁移：高商豪客——财星天梁等在迁移，外出贸易、豪商客路。禄守库田为富，财荫在外为商。"},{classic:"耗居敗地沿途丐求，貪會旺宮終身鼠竊。",vernacular:"「耗」居败地：沿途丐求——大耗破军等落休囚败地，破耗无补，如一路求告。「贪」会旺宫：终身鼠窃——贪狼虽旺，若无德星托、叠煞忌，欲望旺反成苟且鼠窃象（古语气重）。耗败则贫，贪旺无制则邪。"},{classic:"殺居絕地生成三十二之顏回，日在旺宮可學八百年之彭祖。",vernacular:"「杀」居绝地：生成三十二之颜回——七杀落死绝，寿元/压力古诀偏短，以颜回年寿为喻。「日」在旺宫：可学八百年彭祖——太阳庙旺，寿元精神长。杀绝与日旺，寿夭对照；今作健康强弱趋势，勿死抠岁数。"},{classic:"巨暗同垣於身命疾厄贏瘦其軀，兇星交會於相貌遷移傷刑其面。",vernacular:"「巨暗」同垣于身命疾厄：赢瘦其躯——巨门化暗贴身命或疾厄，体瘦弱、暗疾消耗。「凶星」交会于相貌迁移：伤刑其面——羊火铃等会相貌/迁移，面伤疤痕、在外刑克。暗主内耗瘦，凶主外伤貌。"},{classic:"大耗會廉貞於官祿枷杻囚徒，官符會刑殺於遷移離鄉遠配。",vernacular:"大耗会廉贞于官禄：枷杻囚徒——耗+廉在官禄，职场囚气、官非束缚象。「官符」会刑杀于迁移：离乡远配——官符刑杀在迁移，口舌官司催人离乡。官禄耗廉防职讼，迁移符杀防远谪奔。"},{classic:"七殺臨於陷地流年必見死亡，耗殺忌逢破軍火鈴嫌逢太歲。",vernacular:"七杀临于陷地：流年必见死亡——杀陷再逢流年催发，古诀极重生死；今作重大健康/惊恐高压年提醒，必合疾厄太岁。「耗杀」忌逢破军，「火铃」嫌逢太岁——破军叠耗杀破更凶，火铃叠太岁突发灾冲。层层加码才凶透。"},{classic:"奏書博士並流祿以盡乎吉祥，力士將軍與青龍以顯其威福。",vernacular:"奏书、博士并流禄：尽乎吉祥——流年见奏书博士+流禄，文书喜庆吉利事多。力士、将军与青龙：显其威福——流年将星力士青龙，威势权福外发。吉神流禄主喜，将星青龙主威。"},{classic:"童子限弱水上浮泡，老人限衰風中燃燭。",vernacular:"童子限弱：水上浮泡——幼限主星弱、叠煞空，根基不稳如泡。「老人」限衰：风中燃烛——衰限见煞，寿元精神如风烛。童限护元气，老限避煞空倒限。"},{classic:"遇殺必驚，流年最緊。",vernacular:"遇杀必惊：流年最紧——本命有杀不可怕，流年太岁催杀最紧，刑伤灾病易应。流年见杀，优先健康与冲突管理。"},{classic:"人生髮達限元最怕浮沉，一世迍邅命限逢乎駁雜。",vernacular:"人生发达：限元最怕浮沉——大限忽旺忽陷、主星不连贯，发也难稳。「一世迍邅」：命限逢乎驳杂——命与限吉凶混杂、主宾不清，一辈子多坎坷。发达要限顺，顺要命限纯。"},{classic:"論而至此允矣玄微。",vernacular:"论而至此允矣玄微：以上诸条——吉凶比重、得垣受制、身命根源、具体星象宫位——已把斗数玄微纲领讲到位；余下只在熟参实盘。"}],"dedi-fugui":[{classic:"子宮得地太陰星，殺破昌貪文曲明，丑未紫破朝日月，未貞梁丑福非輕，",vernacular:"得地看宫星是否「坐对地方」。子宫喜太阴（月入水位有光）；杀破昌贪文曲能用。丑未见紫破朝日月，未贞梁、丑得福德→福气不轻，财官有根。"},{classic:"寅宮最喜逢陽巨，七殺天同梁文清，卯上巨機為貴格，武曲守卯福豐盈，",vernacular:"寅宫最喜阳巨（日照巨门明）；杀同梁文清贵。卯上巨机为贵格，武曲守卯福丰盈→权名与财禄都易落地。"},{classic:"辰戍機梁非小補，戍宮天府累千金，巳亥天機天相貴，午宮紫府梁俱榮，",vernacular:"辰戌机梁非小补（机梁得土库）；戌宫天府累千金（财库实）。巳亥机相贵，午宫紫府梁俱荣→帝座财库同亮，荣贵象足。"},{classic:"申宮貞巨陰殺美，酉戍亥上太陰停，卯辰巳午陽正照，紫府巨宿巳亥興，",vernacular:"申宫贞巨阴杀美；酉戌亥太阴停得所。卯辰巳午阳正照（日得明）；紫府巨宿巳亥兴→日月与府相各得宜地，富贵可推。"},{classic:"亥宮天府天梁吉，子宮機宿亦中平，七殺子午逢左右，文曲加之格最清，",vernacular:"亥宫府梁吉；子宫机宿中平。七杀子午逢左右，再加文曲→杀星被辅弼文星化清，格最清：威而不浊，宜仕途。"},{classic:"廉坐中宮逢輔弼，更兼化吉禍尤興。",vernacular:"廉贞坐中宫（帝座位）逢辅弼，更兼化吉→囚星得左右与化吉托，祸能转福，气势更旺：权威事业易起。"},{classic:"武曲巳亥逢，六甲帥邊庭，貪狼居卯酉，遇火作公卿，",vernacular:"武曲巳亥逢，六甲生人「帅边庭」→武财在四马地，宜边防军职外放。贪狼居卯酉遇火→火贪点燃，欲望成名，书断公卿一级。"},{classic:"天機坐卯貴，寅月六丁榮，巨卯逢左右，六乙立邊庭，",vernacular:"天机坐卯贵（机得木旺）；寅月六丁荣。巨卯逢左右，六乙立边庭→巨门得辅弼，口才权谋能立功于外。"},{classic:"巨坐寅申位，偏喜甲庚生，二宮逢七殺，左右會昌星，",vernacular:"巨坐寅申偏喜甲庚生；二宫逢七杀，左右会昌星→巨杀带辅弼昌曲，明暗权谋+文才，格局更有力。"},{classic:"辰戍遇三宿，必主位公卿。",vernacular:"辰戌遇三宿聚会→土库聚星，权位象重，书断多主位至公卿：财官能堆到高层。"}],"ding-fu-ju":[{classic:"財蔭夾印 相守命武梁來夾是也，田宅宮亦然。",vernacular:"「财荫夹印」：天相为印（稳厚衣禄），武曲为财、天梁为荫，两边夹命→财与荫护托着印星；利于置产、有靠山护身。田宅宫见同组合亦主宅运有托。"},{classic:"日月夾財 武守命日月來夾是也，財帛宮亦然。",vernacular:"「日月夹财」：武曲为财坐命，太阳太阴两边夹→日月照财，财气亮堂；易进财、场面光。财帛宫见同象，钱路更明。"},{classic:"財祿夾馬 馬守命武祿來夾是也，逢生旺尤妙。",vernacular:"「财禄夹马」：天马主走动坐命，武曲（财）禄存（禄）来夹→走动里夹带财禄；宜外出求财、动中取利。落生旺地马力财力更足。"},{classic:"蔭印拱身 身臨田宅梁相拱衝是也，勿坐空亡。",vernacular:"「荫印拱身」：身宫临田宅，梁（荫）相（印）拱冲→家业靠山护自身；勿坐空亡——一空则荫印虚托，家业护不住人。"},{classic:"日月照璧 日月臨田宅宮是也，喜居墓庫。",vernacular:"「日月照璧」：日月临田宅，如照家中「璧」→房产家业有光彩。喜居墓库（辰戌丑未）→利于积蓄锁财，宅运能存住。"},{classic:"金燦光輝 太陽單守，命在午宮是也。",vernacular:"「金灿光辉」：太阳单守命，且命在午（日入帝旺）→日星当空火旺，人有光彩气势，名望易显，不是暗淡之命。"}],"ding-gui-ju":[{classic:"日月夾命 不坐空亡遇逢本宮有吉星是也。",vernacular:"「日月夹命」：日主光彩功名、月主清贵财荫，两边夹命；条件：不坐空亡、本宫有吉星→日月护命不空，贵气光彩足，名利易亮。"},{classic:"日出扶桑 日在卯守命是也，守官祿宮亦然。",vernacular:"「日出扶桑」：太阳在卯（东方日出位）守命→旭日初升，利功名起步、事业开局；太阳守官禄宫亦可同看：官途有晨光。"},{classic:"月落亥宮 月在亥守命是也，又名月朗天門。",vernacular:"「月落亥宫」（月朗天门）：太阴在亥守命→夜月当空、水旺得地，才情清贵显；宜文名、夜间行业、清贵之职。"},{classic:"月生滄海 月在子宮守田宅是也。",vernacular:"「月生沧海」：太阴在子（水位最旺）守田宅→月生海里，宅运有光；利于置产、家业积蓄，房产情味都足。"},{classic:"輔弼拱主 紫微守命二星來拱是也，夾之亦然。",vernacular:"「辅弼拱主」：紫微帝座守命，左辅右弼来拱或夹→帝星有左右手；贵人助力多，做事有班子、不孤单。"},{classic:"君臣慶會 紫微左右同守命是也，更會相武陰妙上。",vernacular:"「君臣庆会」：紫微与左右同守命，如君臣同朝；再会相、武、阴→印财清贵齐聚，格局再抬一层，权禄场面更整。"},{classic:"財印夾祿 祿守命梁相來夾是也，入財亦然。",vernacular:"「财印夹禄」：禄存守命主财禄，梁（荫）相（印）两边夹→禄被印荫托住，钱路有靠山；入财帛宫同看：财能存、有人护。"},{classic:"祿馬佩印 馬前有祿印星同宮是也。",vernacular:"「禄马佩印」：天马主走动，马前有禄，又与天相同宫→走动求财时印星护身；动中有成，宜出差外派带财禄。"},{classic:"坐貴向貴 謂魁鉞在命迭相坐拱是也。",vernacular:"「坐贵向贵」：魁钺贵人星一坐命、一拱照（迭相坐拱）→贵人互相照应；遇事易提携，场面体面，考试求职有人帮。"},{classic:"馬頭帶劍 謂馬有刃是也不是居午格。",vernacular:"「马头带剑」：天马与羊刃同见→走动带锋芒；宜武职竞逐，也主奔波带险。注意：不是「马居午」另格，勿混断。"},{classic:"七殺朝斗 見前批註",vernacular:"「七杀朝斗」：见前批注；七杀朝向斗垣（紫微体系）→杀星外放成威权，宜武贵、执法、开疆，威而不散。"},{classic:"日月並明 見前批註",vernacular:"「日月并明」：见前批注；日月同明光气足→功名声望双亮，名利不暗淡，宜公开场合出头。"},{classic:"明珠出海 見前批註",vernacular:"「明珠出海」：见前批注；明珠出水之象→才情显露、有出头日；埋没久了也能被看见。"},{classic:"日月同臨 見前批註",vernacular:"「日月同临」：见前批注；日月同到一宫→光华聚一处，该宫事体亮、名利集中，喜忌也更集中。"},{classic:"刑囚夾印 天刑廉貞同臨身命主武勇之人。",vernacular:"「刑囚夹印」：天刑主刑克刚锐，廉贞为囚，同临身命→性急有魄力；书多断武勇敢拼，宜冲锋执法，也防躁急惹事。"},{classic:"科權祿拱 見前批註",vernacular:"「科权禄拱」：见前批注；化科（名）、化权（势）、化禄（财）来拱→功名权禄一齐照面，升迁进财名气都易动。"},{classic:"貪火相逢 謂二星守命同居廟旺是也。",vernacular:"「贪火相逢」：贪狼主欲望机变，火星主爆发，同守命且庙旺→欲望被火点燃；易成名暴起，也易躁进破财，成在猛、败也猛。"},{classic:"武曲守垣 武守命卯宮是也，餘不是。",vernacular:"「武曲守垣」：专指武曲在卯宫守命→武财得木旺之地成格；落他宫不能硬套此格名，勿误断富贵。"},{classic:"府相朝垣 見前批註",vernacular:"「府相朝垣」：见前批注；天府财库、天相印星朝有力之垣→财官衣禄较厚，稳富稳职，宜守成食禄。"},{classic:"紫府朝垣 見前批註",vernacular:"「紫府朝垣」：见前批注；紫微帝座与天府财库朝垣呼应→贵富同构，权位与库藏齐亮，大格局象。"},{classic:"文星暗拱 見前批註",vernacular:"「文星暗拱」：见前批注；昌曲暗中拱照→利科名文才；不张扬也有成，宜考试、文职、幕后策划。"},{classic:"權祿生逢 二星守命廟旺是也，陷不是。",vernacular:"「权禄生逢」：权禄二星守命且庙旺→权柄与财禄生而逢时，能掌权也能进财；落陷则格不算，空有权禄名。"},{classic:"羊刃入廟 辰戍丑未守命遇吉是也。",vernacular:"「羊刃入庙」：擎羊在辰戌丑未（墓库）守命又遇吉→刃星入庙，刚锐能成事；不像陷地纯凶，宜武职竞逐、刀口求财。"},{classic:"巨機居卯 見前批註",vernacular:"「巨机居卯」：见前批注；巨门天机同在卯→口才机变得木旺，古诀贵格；宜谋略、传媒、外交一类。"},{classic:"明祿暗祿 見前批註",vernacular:"「明禄暗禄」：见前批注；明处有禄、暗处也有禄→财禄路子宽，台面与私下进财皆有，不易单一断财。"},{classic:"科明暗祿 見前批註",vernacular:"「科明暗禄」：见前批注；科名亮，禄又分明暗两路→功名与财禄可兼看，考试进财两不误。"},{classic:"金輿扶駕 紫微守命前後有日月來夾是也。",vernacular:"「金舆扶驾」：紫微守命，前后日月来夹→如金车护驾，帝星被日月抬着；贵气很足，名望光彩压场。"}],"ding-pinjian-ju":[{classic:"生不逢時 命坐空亡逢廉貞是也。",vernacular:"「生不逢时」：命坐空亡（星力落空）又逢廉贞（囚、是非）→时机不对、贵气难兑现；做事易卡住，努力像踩空。"},{classic:"祿逢兩殺 祿坐空亡又逢空劫殺星是也。",vernacular:"「禄逢两杀」：禄（化禄/禄存）本主进财，却坐空亡，又叠天空地劫等杀→财禄被掏空；好运留不住，钱进也漏。"},{classic:"馬落空亡 馬既落亡雖祿衝會無用主奔波。",vernacular:"「马落空亡」：天马主走动；迁移/命身见马又叠空亡，马力落空→纵有禄冲会也难救；坐不定、常换地，奔波难安居。"},{classic:"日月藏輝 日月反背又逢巨暗是也。",vernacular:"「日月藏辉」：日月反背（失辉）又逢巨门化暗→光彩被盖；名利声望暗淡，才华难被看见，公开场合吃亏。"},{classic:"財與囚仇 武貞同守身命是也。",vernacular:"「财与囚仇」：武曲为财、廉贞为囚，同守身命→财与是非拧着；求财不省心，钱和性格口舌纠缠，易因财惹官非。"},{classic:"一生孤貧 謂破守命星陷地是也。",vernacular:"「一生孤贫」：破军主冲破变动，守命又落陷地（无力）→冲劲有余成局不足；孤寒难聚财，人缘家业都散。"},{classic:"君子在野 謂四殺守身命而言臨陷地是也。",vernacular:"「君子在野」：羊陀火铃等四杀守身命又临陷地→有才难在朝堂施展；像君子晾在野外，不得其位，怀才不遇。"},{classic:"兩重華蓋 謂祿存化祿坐命遇空劫是也。",vernacular:"「两重华盖」：禄存化禄坐命本美，却遇天空地劫→福气悬空如华盖罩顶；清高有余实惠不足，也易孤僻难落地。"}],"ding-za-ju":[{classic:"風雲際會 身命雖弱二限逢祿馬是也。",vernacular:"「风云际会」：身命盘面虽弱，但大限小限逢禄（财禄）与马（走动机会）→弱底碰上禄马运；突然赶上时机，能翻身抓机会、动中求财。"},{classic:"錦上添花 謂限破惡星而行吉地是也。",vernacular:"「锦上添花」：限上本带恶星（不顺），却行到吉地→坏运里开出好事；处境明显好转，不是单纯好运，是凶限遇吉方。"},{classic:"祿衰馬困 限逢七殺祿馬空亡是也。",vernacular:"「禄衰马困」：限逢七杀（压力冲撞），禄与马又空亡→财禄走不动、奔波使不上劲；运势发虚，难开局面，忙也白忙。"},{classic:"衣錦還鄉 少年不遂四十後行墓運是也。",vernacular:"「衣锦还乡」：少年不遂（早年运弱），四十后行墓运（辰戌丑未偏积蓄收成）→晚运收成；发达风光像穿锦衣回乡，中年后翻盘。"},{classic:"步數無依 前限接後限連綿不分是也。",vernacular:"「步数无依」：前限接后限连绵不分→运限黏连，吉凶难单独拆；人易觉得脚下没准星，规划难落地，阶段感模糊。"},{classic:"水上駕星 一年好一年不好是也。",vernacular:"「水上驾星」：运势如水面漂星→一年好一年不好，起伏大不稳定；别指望一路平坦，宜见好就收、坏年守成。"},{classic:"吉凶相伴 命有主星限前則發限衰不發是也。",vernacular:"「吉凶相伴」：命有主星能撑场面，但发不发看限→限旺则发，限衰则憋；成败绑在阶段性运势，不是命好就一路顺。"},{classic:"枯木逢春 謂命衰限好是也。",vernacular:"「枯木逢春」：命衰（底子弱）而限好（运限有力）→如枯树发芽；这段时间易有起色翻盘，要抓住窗口期做事。"}],"dou-shu-fawei-lun":[{classic:"白玉蟾先生曰觀天斗數與五星不同，按此星辰與諸術大異。",vernacular:"白玉蟾曰：观天斗数与五星不同——紫微斗数按十二宫安星、论庙旺空陷与三方四正，跟五星分野行度不是一套。星辰用法与诸术大异：别拿五星、八字口诀硬套斗数宫位。"},{classic:"四正吉星定為貴，三方殺拱少為奇。",vernacular:"「四正」（命、财、官、迁等四正宫）见吉星，定可为贵——关键宫有禄权昌曲紫府，才谈贵气。「三方」被杀拱：少为奇——三方四正尽是羊陀火铃七杀，难得出奇之福。贵看四正实吉，怕三方煞围。"},{classic:"對照兮詳兇詳吉，合照兮觀賤觀榮。",vernacular:"「对照」详凶详吉：对宫冲照，吉凶对穿，一宫好对宫破则福减。「合照」观贱观荣：三合会照成党，看荣辱贵贱。光看本宫不够，必加对宫与三方。"},{classic:"吉星入垣則為吉，兇星失地則為兇。",vernacular:"吉星入垣则为吉——禄权昌曲紫府得庙旺，吉才真。凶星失地则为凶——羊陀火铃七杀落陷，凶性更横（或凶而无用，仍碍事）。吉要得地，凶要辨陷地是「凶显」还是「凶废」。"},{classic:"命逢紫微非特壽而且榮，身遇殺星不但貧而且賤。",vernacular:"命逢紫微：非特寿而且荣——帝星坐命得地，寿与名位都托得住。身遇杀星：不但贫而且贱——七杀羊陀等守身，奔波受制、地位难抬。命贵身贱要对照看，身杀可减命紫之安稳。"},{classic:"左右會於紫府極品之尊，科權陷於兇鄉功名蹭蹬。",vernacular:"左右会于紫府：极品之尊——左辅右弼会紫微天府，贵气到顶格。「科权」陷于凶乡：功名蹭蹬——化科化权落羊陀空劫之乡，考试升迁磕绊。辅实则贵，科权陷则名虚。"},{classic:"行限逢乎弱地未必為災，立命會在強宮必能降福。",vernacular:"行限逢弱地：未必为灾——大限落休囚，若本命强、限上有辅，只是平淡不一定灾。立命会在强宫：必能降福——命盘本身坐旺得辅，根基能生福。限弱怕的是叠煞倒限，不是弱地本身。"},{classic:"羊陀七殺限運莫逢，逢之定有刑傷。",vernacular:"羊陀七杀，限运莫逢：逢之定有刑伤——大限小限流年步入羊陀七杀宫，外伤手术车祸冲撞、人事刑克易起。有化忌解、有天医，可减等。"},{classic:"(劫空傷使在內合斷)",vernacular:"（劫空伤使在内合断）——天空地劫、伤使一类，要放进命身限运里合参，不单列吓人；空劫冲吉则福虚，冲凶则凶减，合断才准。"},{classic:"天哭喪門流年莫遇，遇之實防破害。",vernacular:"天哭、丧门，流年莫遇：遇之实防破害——流年见哭丧类星，防破财丧事情绪低潮。须与太岁、疾厄、父母宫同看，勿见哭丧就断生死。"},{classic:"南斗主限必生男，北斗加臨先得女。",vernacular:"南斗主限必生男，北斗加临先得女——古有此说，仅作参考：南斗系限偏男丁象、北斗加临偏女丁象，实际以子女宫主星与流年为准，别当铁断。"},{classic:"科星居於陷地，燈火辛勤。",vernacular:"「科星」居于陷地：灯火辛勤——化科文昌等落陷，求学考试辛苦熬，名气来得慢。科星得地才是科甲顺；陷地是勤奋补格局。"},{classic:"昌曲在於兇鄉，林泉冷淡。",vernacular:"「昌曲」在于凶乡：林泉冷淡——文昌文曲落羊陀空劫凶地，文名清冷、人脉淡，不易热闹扬名。昌曲要庙旺拱贵才荣华。"},{classic:"奸謀頻設，紫微愧遇破軍。",vernacular:"奸谋频设：紫微愧遇破军——帝星同宫/紧会破军，尊贵被破耗拉扯，心机算计多、事多反复。紫破同宫有权谋胆，也有内耗；有辅弼禄权可成偏业权位。"},{classic:"淫奔大行，紅鸞差逢貪宿。",vernacular:"淫奔大行：红鸾差逢贪宿——红鸾桃花星不巧会贪狼，感情易出格、冲动私奔一类。条件是红鸾+贪狼同宫或紧会命身夫妻；有廉贞火铃更催。今作感情节奏快、易越界看。"},{classic:"命身相剋，則心亂而不閒。",vernacular:"命身相克：则心乱而不闲——命宫与身宫主星五行相战或煞气对冲，心思拧巴、坐不定。命身同气或相生，心才安。"},{classic:"玄媼三宮，則邪淫而耽酒。",vernacular:"「玄媪」三宫：则邪淫而耽酒——玄媪（即天姚）临命身夫妻等三宫，酒色桃花重。天姚本主媚态欲望，贴关键宫才显；落闲宫从轻。"},{classic:"(即天姚星)",vernacular:"（即天姚星）——上文玄媪就是天姚，讲盘直接看天姚落哪一宫、会否贪火廉铃。"},{classic:"殺臨三位，定然妻子不和。",vernacular:"杀临「三位」（夫妻宫）：定然妻子不和——七杀羊陀火铃守夫妻，配偶缘冲撞、冷战硬碰。有天同天梁化吉，可减戾气。"},{classic:"巨到二宮，必是兄弟無義。",vernacular:"巨到「二宫」（兄弟宫）：必是兄弟无义——巨门是非守兄弟，手足口舌、少义气。巨门得化科、有辅，可成「诤友式」兄弟，不必皆坏。"},{classic:"刑殺守子，宮子難奉老。",vernacular:"刑杀守「子宫」（子女）：子难奉老——刑忌七杀等守子女宫，子女缘薄或难尽孝养老。今作亲子关系费力、养老预期要保守。"},{classic:"諸兇照財，帛聚散無常。",vernacular:"诸凶照「财帛」：聚散无常——羊陀火铃劫空照财宫，钱来得快去得快。财宫要有禄存武曲化禄坐实，凶照才不致全散。"},{classic:"羊陀守疾厄，眼目昏盲。",vernacular:"羊陀守疾厄：眼目昏盲——羊刃陀罗主刑伤，疾厄见之古诀特提眼目视力、手术外伤。今作五官神经压力与外伤风险提醒，合参医疗，勿恐吓。"},{classic:"火鈴到遷移，長途寂寞。",vernacular:"火铃到迁移：长途寂寞——火星铃星催动迁移宫，远行奔波、在外孤单不安。迁移有马+辅弼，奔波可成事业；火铃无解则徒劳奔。"},{classic:"尊星列賤位，主人多勞。",vernacular:"尊星列贱位：主人多劳——紫微天府等尊星落奴仆、疾厄、死绝失陷之位，贵气用不顺，人多劳碌补位。尊星宜坐命财官旺地。"},{classic:"惡星應八宮，奴僕無助。",vernacular:"恶星应「八宫」（奴仆）：奴仆无助——羊陀火铃等应奴仆宫，下属同事帮不上忙，或反掣肘。管理岗见此，宜少依赖人、多靠制度。"},{classic:"官祿遇紫府，富而且貴。",vernacular:"官禄遇紫府：富而且贵——官禄宫见紫微天府，职位与财库双托，富贵可期。再得辅弼科权，官运更实。"},{classic:"田宅遇破軍，先破後成。",vernacular:"田宅遇破军：先破后成——破军主耗变，田宅见之产业先散再立、住房多迁改。中晚有禄权府星来会，才谈后成。"},{classic:"福德遇空劫，奔走無力。",vernacular:"福德遇空劫：奔走无力——福德宫见天空地劫，精神福气虚，奔波却使不上劲、享福不得。福德宜梁同禄存实守。"},{classic:"相貌加刑殺，刑剋難免。",vernacular:"相貌加刑杀：刑克难免——相貌宫叠刑忌杀曜，面相有记、六亲仪容刑克象。仪表与人际关系都易带「伤气」。"},{classic:"後學者執此推詳，萬無一失。",vernacular:"后学者执此推详，万无一失——古书把这些宫位星象当作纲领；实盘仍须庙旺空陷、大限流年合参，纲举而目张，勿句句铁断。"}],"dou-shu-zhun-sheng":[{classic:"命居生旺定富貴，各有所宜。",vernacular:"命居「生旺」定富贵——命宫主星落长生帝旺等有力之地，根基厚，才谈富贵。然「各有所宜」：紫微宜辅弼、贪狼宜火铃、巨门宜得垣，不是凡生旺皆同一路发。"},{classic:"身坐空亡論榮枯，專求其要。",vernacular:"身坐「空亡」（天空地劫等）：论荣枯要专求其要——身宫主行动表现，一空则荣华易虚、枯亦不全凶。关键看命宫是否实、空的是吉星还是凶星。"},{classic:"紫微帝座在南極不能施功，天府令星在南地專能為福。",vernacular:"紫微帝座在「南极」（南方巳午等火旺之野）不能施功——帝星忌过燥失令；天府令星在南地专能为福——府星喜火土厚藏。同属南方，紫微与天府宜忌相反，勿混断。"},{classic:"天機七殺同宮也善三分，太陰火鈴同位反成十惡。",vernacular:"天机七杀同宫：也善三分——机杀同宫主谋略胆色，有辅尚可用。「太阴」与「火铃」同位：反成十恶——阴柔被火铃急催，情绪灾耗感情创伤重。同宫结构不同，善恶差极大。"},{classic:"貪狼為善宿入廟不兇，巨門為惡曜得垣尤美。",vernacular:"贪狼为善宿：入庙不凶——庙地贪狼才艺贵气外发。「巨门」为恶曜：得垣尤美——巨门得地，是非变口才条理。庙陷一翻，星性全转。"},{classic:"諸兇在緊要之鄉最宜制克，若在身命之位卻受孤單。",vernacular:"诸凶在紧要之乡（官禄财帛等）最宜制克——有化忌、有昌曲魁钺压着，煞可成权。若在身命之位：却受孤单——煞贴身命，六亲助力少、人易孤。煞位不同，断法不同。"},{classic:"若見殺星倒限最兇，福廕臨之庶幾可解。",vernacular:"杀星「倒限」（大限走到死绝冲破之限）最凶；「福荫」（天梁禄存化禄等）临之庶几可解。流年大限见杀倒，必查有无梁禄来解，无解则健康破败高压。"},{classic:"大抵在人之機變，更加作意之推詳。",vernacular:"大抵在人之机变，更加作意之推详：口诀是死的，盘是活的——同一句要看主宾、庙陷、限运是否同时成立，再下断。"},{classic:"辨生剋制化以定窮通，看好惡正偏以言禍福。",vernacular:"辨生克制化以定穷通：有生有化则通，只克无制则穷。看好恶正偏以言祸福：正格吉星庙旺为福，偏格煞星失制为祸。两步都做，才准。"},{classic:"官星居於福地近貴榮財，福星居於官宮卻成無用。",vernacular:"「官星」居于「福地」（福德等）：近贵荣财——权职有福托，贵而能享。「福星」居于「官宫」：却成无用——福气堆在官禄，未必换成真权，像有福无位。宫职错位，吉也不真。"},{classic:"身命得星為要，限度遇吉為榮。",vernacular:"身命得星为要——命身有主星得地最要紧；限度遇吉为荣——大限流年见吉才风光。本命实+限吉，发得稳；本命虚+限吉，发得飘。"},{classic:"若言子媳有無，專在擎羊耗殺。",vernacular:"若言子媳有无，专在「擎羊」「耗杀」：子女宫见羊刃、大耗、七杀破军等，子缘刑克或难得。要子女宫同宫紧守才专论，泛会从轻。"},{classic:"逢之則害妻妾亦然。",vernacular:"逢之则害：妻妾亦然——夫妻宫同样忌羊耗杀，感情刑克、配偶缘薄。子女与夫妻两宫见同类煞，家庭刑克更显。"},{classic:"相貌逢兇必帶破相，疾厄逢忌定有尪贏。",vernacular:"相貌逢凶：必带破相——羊火铃等在相貌，疤痕手术外伤记认。「疾厄」逢忌：定有尪羸——忌星守疾厄，体弱多病。两宫分看仪表与健康。"},{classic:"須言定數以求玄，更在同年之相合，總為綱領用作準繩。",vernacular:"须言定数以求玄，更在同年之相合：定盘口诀要合流年太岁、大限小限一起参。总为纲领用作准绳——以上是准绳，不是单句死刑判决书。"}],"gumu-fu":[{classic:"太極星纏，乃群宿眾星之主，天門運限，即扶身助命之源，在天則運用無常，在人則命有格局。",vernacular:"太极星缠：紫微等主星统众宿；天门运限扶身助命。天上运转无常，落到人→命盘成各种格局：先认主星与运限，再谈祸福。"},{classic:"先明格局，次看眾星。",vernacular:"程序：先明格局（组合是否成立），次看众星庙旺陷地与会照→格局定高低，众星定细节，不可颠倒。"},{classic:"或有同年同月同日同時而生，則有貧賤富貴壽夭之異。",vernacular:"同年月日时生人仍可贫贱富贵寿夭大异→因地支宫位、分秒、胎息与运限不同；八字同时不等于斗数同盘。"},{classic:"或在惡限，積百萬之金銀。",vernacular:"或在恶限仍积百万金银→限凶未必破财；若财帛田宅本命有禄库托，恶限也能攒钱，勿见凶限就断穷。"},{classic:"或在旺鄉，遭連年之困苦。",vernacular:"或在旺乡却连年困苦→宫位旺而用星空陷/运限驳杂，旺是空壳；表面地好，实际财官走不通。"},{classic:"禍福不可一途而惟，吉凶不可一例而斷。",vernacular:"祸福不可一途推，吉凶不可一例断→同星因庙陷、夹拱、运限而异；要组合看，忌套模板。"},{classic:"要知一世之榮枯，定看五行之宮位。",vernacular:"一世荣枯定看五行宫位→十二宫五行生克与旺衰，是荣枯底盘；宫位不对，吉星也难久。"},{classic:"立命可知貴賤，安身便曉根基。",vernacular:"立命可知贵贱（命宫主星层次），安身便晓根基（身宫稳不稳）→命看面子地位，身看底气能扛多久。"},{classic:"第一先看福德，再三細考遷移，分對宮之體用，定三合之源流。",vernacular:"第一先看福德（精神福气），再三细考迁移（外出变动）；分对宫体用，定三合源流→福德迁移定内外场，对宫三合定合力。"},{classic:"命無正曜，夭折孤貧。",vernacular:"命无正曜（十四主星不守命）→主星缺位，书断易夭折孤贫：人生少「主心骨」，贵气难立。"},{classic:"吉有兇星，美玉瑕玷。",vernacular:"吉局里夹凶星→如美玉瑕玷；好事里藏破口，福要打折，成中带损，不可见吉就满断。"},{classic:"既得根源堅固，須知合局相生，堅固則富貴延壽，相生則財官昭著。",vernacular:"根源坚固（命身庙旺有托）须合局相生→坚固则富贵延寿，相生则财官昭著；根稳+生助，名利才实。"},{classic:"命好身好限好到老榮昌。",vernacular:"命好、身好、限好三层都力→到老荣昌：本命格局、身宫根基、运限助力齐，晚景风光可期。"},{classic:"命衰身衰限衰終身乞丐。",vernacular:"命衰、身衰、限衰三层皆弱→终身乞丐象：财官难立，层次难抬，越往后越吃力。"},{classic:"夾貴夾祿少人知，夾權夾科世所宜。",vernacular:"夹贵夹禄少人知（魁钺/禄夹命身），夹权夹科世所宜→权科夹更利功名权势；贵禄夹利提携进财，皆要夹星不空。"},{classic:"夾日夾月誰能遇，夾昌夾曲主貴兮。",vernacular:"夹日夹月谁能遇（日月夹），夹昌夹曲主贵→光彩与文贵夹命，名利文气足，科名场面好看。"},{classic:"夾空夾劫主貧賤，夾羊夾陀為乞丐。",vernacular:"夹空夹劫主贫贱（空亡掏空），夹羊夹陀为乞丐→夹的是煞空，福被两边撕；财禄难留，易落到极窘。"},{classic:"廉貞七殺反為積富之人，天梁太陰卻作飄蓬之客。",vernacular:"廉贞七杀反为积富→囚杀得用可刀口求财；天梁太阴却作飘蓬→梁月清孤，易四处漂、难定宅。同星因组合而反向。"},{classic:"廉貞主下賤孤寒，太陰主一生快樂。",vernacular:"廉贞主下贱孤寒（囚星失用）；太阴主一生快乐（月得地清福）→同一赋内对照：囚失则苦，月得则乐。"},{classic:"先貧後富武貪同身命之宮，先富後貧只為運限逢劫殺。",vernacular:"先贫后富：武贪同守身命→武财+贪欲望后发；先富后贫：运限逢劫杀→财运被劫空撕开，富不能守。"},{classic:"出世榮華權祿守財官之位，生來貧賤劫空臨財福之鄉。",vernacular:"出世荣华：权禄守财官位→权柄财禄占财官，生来衣禄足。生来贫贱：劫空临财福乡→财福被空劫，钱福两虚。"},{classic:"文曲武曲為人多學多能，左輔右弼稟性克寬克厚。",vernacular:"文曲武曲→多学多能（文才+武财技能）；左辅右弼→禀性宽厚（助力星性情）。才艺与性情分看。"},{classic:"天府天相乃為衣祿之神，為仕為官定主亨通之兆。",vernacular:"天府天相为衣禄之神→财库印星主食禄；为仕为官定亨通→食禄稳，官途衣食不愁。"},{classic:"苗而不秀科名陷於凶神，發不主財祿主躔於弱地。",vernacular:"苗而不秀：科名陷于凶神→考试功名被凶托住，开花不结果。发不主财：禄主躔弱地→禄无力，发也虚。"},{classic:"七殺朝斗爵祿榮昌，紫府同宮終身福厚。",vernacular:"七杀朝斗→爵禄荣昌（杀化威权朝帝座）；紫府同宫→终身福厚（帝座财库同宫，贵富同体）。"},{classic:"紫微居午無殺湊位至三公，天府臨戌有星扶腰金衣紫。",vernacular:"紫微居午无杀凑→位至三公象（帝旺无煞扰）；天府临戌有星扶→腰金衣紫（财库得扶，衣禄贵显）。"},{classic:"科權祿拱名譽昭彰，武曲廟垣威名赫奕。",vernacular:"科权禄拱→名誉昭彰（名权财齐照）；武曲庙垣→威名赫奕（武财入庙，威势能立）。"},{classic:"科明祿暗位列三臺，日月同臨官居侯伯。",vernacular:"科明禄暗→位列三台（明科暗禄，名利双路）；日月同临→官居侯伯（光华聚，官位高）。"},{classic:"巨機同宮公卿之位，貪鈴並守將相之名。",vernacular:"巨机同宫→公卿之位（口才机变贵）；贪铃并守→将相之名（贪火铃爆发成名，武贵象）。"},{classic:"天魁天鉞蓋世文章，天祿天馬驚人甲第。",vernacular:"魁钺→盖世文章（贵人文气）；天禄天马→惊人甲第（禄马动科名，考试走动皆利）。"},{classic:"左輔文昌會吉星尊居八座，貪狼火星居廟旺名鎮諸邦。",vernacular:"左辅文昌会吉→尊居八座（辅+文+吉，高位）；贪狼火星居庙旺→名镇诸邦（火贪点燃成大名）。"},{classic:"巨日同宮官封三代，紫府朝垣食祿萬鍾。",vernacular:"巨日同宫→官封三代（巨明得日，官贵延及）；紫府朝垣→食禄万钟（帝财朝垣，禄厚）。"},{classic:"科權對拱躍三汲於禹門，日月並明佐九重於堯殿。",vernacular:"科权对拱→跃龙门连升（名权对拱，升迁快）；日月并明→佐九重尧殿（光辅帝座，近君之象）。"},{classic:"府相同來會命宮全家食祿，三合明珠生旺地穩步蟾宮。",vernacular:"府相同来会命→全家食禄（印财会命，家族衣禄）；三合明珠生旺→稳步蟾宫（科名珠在旺地，登科稳）。"},{classic:"七殺破軍宜出外，機月同梁作吏人。",vernacular:"七杀破军宜出外→动中求贵，不宜守家；机月同梁作吏人→机月梁清细，宜文吏幕僚，稳职不武。"},{classic:"紫府日月居旺地斷定公侯器，日月科祿丑宮中定是方伯公。",vernacular:"紫府日月居旺地→公侯器（贵富光全且旺）；日月科禄丑宫→方伯公（光+科禄在丑库，一方大员）。"},{classic:"天梁天馬陷飄蕩無疑，廉貞殺不加聲名遠播。",vernacular:"天梁天马陷→飘荡无疑（荫马无力，坐不定）；廉贞杀不加→声名远播（囚杀不加扰，名可扬）。"},{classic:"日照雷門富貴榮華，月朗天門進爵封侯。",vernacular:"日照雷门（日在卯）→富贵荣华；月朗天门（月在亥）→进爵封侯。日月得地，名利爵位双亮。"},{classic:"寅逢府相位登一品之榮，墓逢左右尊居八座之貴。",vernacular:"寅逢府相→位登一品（寅马地府相，高官）；墓逢左右→尊居八座（墓库得辅弼，高位有托）。"},{classic:"梁居午位官資清顯，曲遇梁星位至臺綱。",vernacular:"梁居午→官资清显（梁入火旺清贵）；曲遇梁→位至台纲（文曲得梁荫，台阁之职）。"},{classic:"科祿巡逢周勃欣然入相，文星暗拱賈誼允矣登科。",vernacular:"科禄巡逢→如周勃入相（科禄巡到，相位可期）；文星暗拱→如贾谊登科（昌曲暗拱，科名成）。历史比喻指格局层次，非真同命。"},{classic:"擎羊火星威權出眾，貪武同行威鎮邊夷。",vernacular:"擎羊火星→威权出众（刃火刚锐掌权）；贪武同行→威镇边夷（贪武外放，边功武贵）。"},{classic:"李廣不封擎羊逢於力士，顏回夭折文昌陷於天傷。",vernacular:"李广不封：擎羊逢力士→有功难封，威权被阻。颜回夭折：文昌陷天伤→文贵入伤地，寿元受冲。借史喻星，勿死套。"},{classic:"仲由威猛廉貞入廟遇將軍，子羽才能巨宿同梁衝且合。",vernacular:"仲由威猛：廉贞入庙遇将军→囚星得势+武贵神，勇。子羽才能：巨梁冲合→口才荫护有成。星象喻人杰性格。"},{classic:"寅申最喜同梁會，辰戌應嫌陷巨門。",vernacular:"寅申最喜同梁会（马地同梁清贵）；辰戌应嫌陷巨门（土网巨陷，口舌暗滞）→宫位喜忌分明。"},{classic:"祿倒馬倒忌太歲之合劫空，運衰限衰喜紫微之解兇厄。",vernacular:"禄倒马倒忌太岁合劫空→财禄走动尽废又逢岁破；运衰限衰喜紫微解凶→帝座能压煞，衰运有救。"},{classic:"孤貧多有壽，富貴即夭亡。",vernacular:"孤贫多有寿（无欲少耗）；富贵即夭亡（厚福易折）→寿与福常反看，勿见富就断长寿。"},{classic:"弔客喪門綠珠有墮樓之厄，官符太歲公冶有縲紲之憂。",vernacular:"吊客丧门→如绿珠堕楼（凶神主凶险情感变故）；官符太岁→如公冶缧绁（官非牢狱忧）。岁运凶神应事。"},{classic:"限至天羅地網屈原溺水而身亡，運遇地劫天空阮籍有貧窮之苦。",vernacular:"限至天罗地网→如屈原溺水（罗网困死，险厄）；运遇地劫天空→如阮籍贫穷（空劫掏空，困顿）。限运空网最怕。"},{classic:"文昌文曲會廉貞喪命天年，命空限空無吉湊功名蹭蹬。",vernacular:"昌曲会廉贞→文贵会囚，书断丧命天年（文弱入是非）。命空限空无吉凑→功名蹭蹬：考试升迁两难。"},{classic:"生逢天空猶如半天折翅，命中遇劫恰如浪裡行船。",vernacular:"生逢天空→如半天折翅（贵气悬空飞不起）；命中遇劫→如浪里行船（地劫颠簸，难稳渡）。空劫主虚与险。"},{classic:"項羽英雄限至天空而喪國，石崇豪富限行劫地以亡家。",vernacular:"项羽限至天空丧国；石崇限行劫地亡家→英雄豪富也怕空劫限：权财再大，限空限劫则倾。"},{classic:"呂后專權兩重天祿天馬，楊妃好色三合文曲文昌。",vernacular:"吕后专权：两重天禄天马→禄马重叠，权欲走动强。杨妃好色：三合昌曲→文桃花会，情欲象显。借史喻禄马桃花。"},{classic:"天梁遇馬女命賤而且淫，昌曲夾墀男命貴而且顯。",vernacular:"天梁遇马女命→书断贱且淫（荫马动情，清誉损）；昌曲夹墀男命→贵且显（文夹帝阶，科名显）。男女同星异断。"},{classic:"極居卯酉多為脫俗僧人，貞居卯酉定是公胥吏輩。",vernacular:"极（紫微）居卯酉多为脱俗僧人→帝座落桃花驿马位易离俗；贞居卯酉定是公胥吏→囚星在该位宜吏职杂役。"},{classic:"左府同宮尊居萬乘，廉貞七殺流蕩天涯。",vernacular:"左府同宫→尊居万乘（辅+财库，极贵）；廉贞七杀→流荡天涯（囚杀动荡，难安居）。贵贱对照。"},{classic:"鄧通餓死運逢大耗之鄉，夫子絕糧限到天傷之內。",vernacular:"邓通饿死运逢大耗→财运被耗尽；夫子绝粮限到天伤→圣贤也逢伤限断粮。限运耗伤可破本命之富。"},{classic:"鈴昌羅武限至投河，巨火擎羊終身縊死。",vernacular:"铃昌陀武限至投河；巨火擎羊终身缢死→文武煞火会限，书断极端凶险；宜作健康情绪警示，勿迷信死法。"},{classic:"命裡逢空不飄流即主疾苦，馬頭帶劍非夭折則主刑傷。",vernacular:"命里逢空→不飘流即疾苦（空则虚：身不定或体弱）；马头带剑→非夭折则刑伤（马+刃，动中带血光刑克）。"},{classic:"子午破軍加官進祿，昌貪居命粉骨碎屍。",vernacular:"子午破军→加官进禄（破军在子午得地可冲出官禄）；昌贪居命→粉骨碎尸象（文欲交攻极端）→吉凶两极，组合定断。"},{classic:"朝斗仰斗爵祿榮昌，文桂文華九重貴顯。",vernacular:"朝斗仰斗→爵禄荣昌（朝帝座得贵）；文桂文华→九重贵显（文贵花灿近君）。科名贵气象。"},{classic:"丹墀桂墀早遂青雲之志，合祿拱祿定為巨擘之臣。",vernacular:"丹墀桂墀→早遂青云（近阶早升）；合禄拱禄→巨擘之臣（禄合拱，重臣食禄）。早贵与重禄。"},{classic:"陰陽會昌曲出世榮華，輔弼遇財官衣緋著紫。",vernacular:"阴阳会昌曲→出世荣华（日月+文，生来亮）；辅弼遇财官→衣绯着紫（左右遇财官，服色贵）。"},{classic:"巨梁相會廉貞並，合祿鴛鴦一世榮。",vernacular:"巨梁相会廉贞并，合禄鸳鸯→巨梁囚+合禄，一世荣：口才荫护与禄配，名利可成双。"},{classic:"武曲閒宮多手藝，貪狼陷地作屠人。",vernacular:"武曲闲宫多手艺→武财不在财官正位，靠技艺吃饭；贪狼陷地作屠人→欲望陷地，书断屠宰粗活，层次偏下。"},{classic:"天祿朝垣身榮貴顯，魁星臨命位列三臺。",vernacular:"天禄朝垣→身荣贵显（禄朝有力垣）；魁星临命→位列三台（贵人临命，高位象）。"},{classic:"武曲居幹戌亥上，最怕太陰逢貪狼。",vernacular:"武曲居干戌亥，最怕太阴逢贪狼→武财在这些位忌月贪会（财被情欲桃花牵），易因色因情破财。"},{classic:"化祿還為好，休向墓中藏。",vernacular:"化禄还为好，休向墓中藏→化禄喜露不喜入墓库锁死；禄入墓则财发迟、难畅。"},{classic:"子午巨門石中隱玉，明祿暗祿錦上添花。",vernacular:"子午巨门→石中隐玉（巨在子午先晦后明，厚积）；明禄暗禄→锦上添花（明暗双禄，财上加财）。"},{classic:"紫微辰戌遇破軍，富而不貴有虛名。",vernacular:"紫微辰戌遇破军→富而不贵有虚名：帝座在土网逢破，钱或有、衔不足，名声偏虚。"},{classic:"昌曲破軍逢刑剋多勞碌，貪武墓中居三十才發福。",vernacular:"昌曲破军逢刑克→多劳碌（文被冲破刑，忙而难安）；贪武墓中居→三十才发福（贪武入墓，财欲晚开库）。"},{classic:"天同戌宮為反背，丁人化吉主大貴。",vernacular:"天同戌宫为反背，丁人化吉主大贵→同星反背本弱，丁年得化吉可翻成大贵：生年化气救陷。"},{classic:"巨門辰戌為陷地，辛人化吉祿崢嶸。",vernacular:"巨门在辰戌为陷地（口才暗滞）；辛人得化吉→陷可救，禄转峥嵘：暗滞之巨因生年化气翻成禄旺。"},{classic:"機梁酉上化吉者，縱遇財官也不榮。",vernacular:"机梁酉上化吉，纵遇财官也不荣→机梁在酉力量别扭，化吉也难真荣：财官擦边，格局不扬。"},{classic:"日月最嫌反背乃為失輝，命身定要精求恐差分數。",vernacular:"日月最嫌反背乃失辉→光彩暗；命身定要精求恐差分数→命身宫度差一线，贵贱寿夭可分叉，细排勿粗。"},{classic:"陰騭延年增百福，至於陷地不遭傷。",vernacular:"阴骘延年增百福→积德可补命；至于陷地不遭伤→有阴德，陷地也不易真伤：命理外留积善余地。"},{classic:"命實運堅稿田得雨，命衰限弱嫩草遭霜。",vernacular:"命实运坚→稿田得雨（底好运助，干田逢甘霖）；命衰限弱→嫩草遭霜（底弱运差，一点就伤）。"},{classic:"論命必推星善惡，巨破擎羊性必剛。",vernacular:"论命必推星善恶；巨破擎羊性必刚→口舌冲破刃星，人刚硬急躁，宜疏导勿硬碰。"},{classic:"府相同梁性必好，火劫空貪性不常。",vernacular:"府相同梁性必好（稳厚清善）；火劫空贪性不常→火爆空虚欲望，性情飘忽难测。"},{classic:"昌曲祿機清秀巧，陰陽左右最慈祥。",vernacular:"昌曲禄机清秀巧（文禄机变灵）；阴阳左右最慈祥（日月辅弼温和）。性情从星性断。"},{classic:"武破貞貪衝合曲全固貴，羊陀七殺相雜互見則傷。",vernacular:"武破贞贪冲合曲全固贵→冲合有序、曲全则贵；羊陀七杀相杂互见则伤→煞混无序则伤身伤运。"},{classic:"貪狼廉貞破軍惡，七殺擎羊陀羅兇。",vernacular:"贪狼廉贞破军恶；七杀擎羊陀罗凶→欲望囚破偏恶，杀刃忌偏凶：见之先察是否得制得用。"},{classic:"火星鈴星專作禍，劫空傷使禍重重。",vernacular:"火星铃星专作祸；劫空伤使祸重重→火铃引爆，空劫伤使加深：灾病官非易连环。"},{classic:"巨門忌星皆不吉，運身命限忌相逢。",vernacular:"巨门忌星皆不吉；运身命限忌相逢→巨暗+化忌，最怕在运身命限叠见：口舌是非破财集中爆发。"},{classic:"更兼太歲官符至，官非口舌決不空。",vernacular:"岁运再逢太岁官符→官非口舌决不空；尤其叠巨门化忌时，诉讼口舌集中爆发，难靠忍让躲过。"},{classic:"弔客喪門又相遇，管教災病兩相攻。",vernacular:"吊客丧门岁运相遇→灾与病两头夹攻；健康波动与丧服忧同来，宜保重身体、少赴凶事。"},{classic:"七殺守身終是夭，貪狼入命必為娼。",vernacular:"七杀守身终是夭→杀守身无制，寿元受冲；贪狼入命必为娼→贪入命欲望重，书断风尘象（宜作情欲提醒，勿污名）。"},{classic:"心好命微亦主壽，心毒命固亦夭亡。",vernacular:"心好命微亦主寿；心毒命固亦夭亡→心性可改寿夭，命硬心毒仍折；劝善大于纯星断。"},{classic:"今人命有千金貴，運去之時豈久長。",vernacular:"命里纵有千金之贵，运一走财官空→风光难久；富要看运能否守得住，本命富不等于一世富。"},{classic:"數內包藏多少理，學者須當仔細詳。",vernacular:"数内包藏多少理，学者须仔细详→赋文浓缩，须对照宫星运限细玩，不可一句死断。"}],"nvming-gumu-fu":[{classic:"府相之星女命躔，必當子貴與夫賢。",vernacular:"女命府相之星躔得好→天府财库、天相印星主衣禄稳厚；条件成立则子贵夫贤：子女出息、丈夫可靠，家业有托。"},{classic:"廉貞清白能相守，更有天同理亦然。",vernacular:"廉贞清白能相守→囚星不浊、守得住感情；天同亦然→同星温和，夫妻易相守，日子稳不闹。"},{classic:"端正紫微太陽星，早遇賢夫性可憑。",vernacular:"紫微主贵、太阳主光彩；女命两星端正守照→帝座日照正，夫缘正派；易早遇贤夫，性格可凭，婚姻不偏邪。"},{classic:"太陽寅到午，遇吉終是福。",vernacular:"太阳走寅至午为日得明地（光气足）；再遇吉星拱照→女命福气能兑现，不是空有日照无实惠。"},{classic:"左輔天魁為福壽，左弼天相福相臨。",vernacular:"左辅天魁为福寿（辅+贵人）；右弼天相福相临（弼+印）→贵人印星护，福寿易临，有人帮衬。"},{classic:"祿存厚重多衣食，府相朝垣命必榮。",vernacular:"禄存厚重多衣食→禄星主财禄衣食不愁；府相朝垣命必荣→财库印朝有力垣，命贵家荣。"},{classic:"紫府巳亥相互輔，左右扶持福必生。",vernacular:"紫府巳亥相互辅，左右扶持→帝座财库在四马地互辅+辅弼→福必生：贵富互助，福气能生发。"},{classic:"巨門天機為破蕩。",vernacular:"巨门天机为破荡→口才机变失用则破败动荡；女命见之宜看出入是非、家业不稳。"},{classic:"天梁月曜女命貧。",vernacular:"天梁主荫护清高、太阴主清福；女命梁月同见→荫有余、财不足，清孤象；书断偏贫：日子清苦多于实惠。"},{classic:"擎羊火星為下賤。",vernacular:"擎羊主刑刃、火星主爆发；两星交攻→刚暴冲撞，层次易走低；性情冲、处境易下风，难享平稳福。"},{classic:"文昌文曲福不全。",vernacular:"文昌文曲福不全→文星有才名，福气却不一定齐；聪明有余、齐福不足，才与福要分看。"},{classic:"武曲之宿為寡宿。",vernacular:"武曲之宿为寡宿→武财孤克，婚姻易孤单；女命常作寡宿看：伴侣缘薄或晚成。"},{classic:"破軍一曜性難明。",vernacular:"破军主冲破变动；女命见之→性情难测、情绪起伏大；关系易反复，伴侣难摸透其喜怒。"},{classic:"貪狼內狠多淫佚。",vernacular:"贪狼主欲望机变；女命贪重→心思深、感情易放纵；情欲象明显，宜自持，勿任欲望牵婚姻。"},{classic:"七殺沉吟福不榮。",vernacular:"七杀主压力威权，沉吟不得力→杀气闷滞发不出；福气不荣，日子憋、做事有压无成。"},{classic:"十干化祿最榮昌，女命逢之大吉昌。",vernacular:"十干化禄最荣昌，女命逢之大吉昌→生年化禄主进财机会，女命见之衣禄感情场面都易亮。"},{classic:"更得祿存相湊合，旺夫益子受恩光。",vernacular:"更得禄存相凑合→化禄+禄存双禄；旺夫益子受恩光→助丈夫孩子，也易得人照应提携。"},{classic:"火鈴羊陀及巨門，天空地劫又相臨。",vernacular:"火铃羊陀及巨门，天空地劫又相临→火爆刃忌口舌+空劫齐来；女命大忌：灾病官非感情破口集中。"},{classic:"貪狼七殺廉貞宿，武曲加臨克害侵。",vernacular:"贪狼七杀廉贞宿，武曲加临克害侵→欲望杀囚+武财叠克；克害重：婚姻子女健康易受损。"},{classic:"三方四正嫌逢殺，更在夫宮禍患深。",vernacular:"三方四正嫌逢杀；更在夫宫祸患深→关键宫见煞已忌，落夫宫则夫缘灾祸更深，婚姻重灾区。"},{classic:"若是本宮無正曜，必主生離克害真。",vernacular:"本宫无正曜→主星缺位；必主生离克害真：夫妻易生离、互相克，关系难成局。"},{classic:"已前論賦俱系看命要訣，學者宜熟玩之，乃得原委也。",vernacular:"以前论赋俱系看命要诀→学者宜熟玩得原委：女命赋要对照府相禄煞夫宫细看，勿一句定终身。"},{classic:"論對面朝斗格 子午宮逢祿存是也",vernacular:"论对面朝斗格：子午宫逢禄存是也→禄在子午对帝座体系成立「朝斗」；禄对迁移，利禄走动。"},{classic:"祿有對面在遷移，子午逢之利祿宜，德合吉壤人敬重，雙全富貴福稀奇。",vernacular:"禄有对面在迁移，子午逢之利禄宜→迁移见禄对命，外出求财顺；德合吉壤人敬重→双全富贵福稀奇：人缘+财禄齐。"},{classic:"論科權祿主格",vernacular:"「科权禄主格」专看化科（名）、化权（势）、化禄（财）为主星组合；三化得用拱命→功名权禄齐动，女命亦利场面上扬。"},{classic:"祿權周勃命中逢，入相王朝贊聖功，迎合權星兼吉曜，巍巍富貴列三公。",vernacular:"禄权如周勃命中逢→禄权入命，入相赞功象；迎合权星兼吉曜→巍巍富贵列三公：权禄+吉，高位厚禄。"},{classic:"論左右朝垣格",vernacular:"「左右朝垣格」：左辅右弼朝向有力之垣；贵助星朝垣得力→有班子提携，职场家庭都易得人手帮忙。"},{classic:"天星左右最高明，若在三方祿位興，武職高登應顯佐，文人名譽列公卿。",vernacular:"天星左右最高明，若在三方禄位兴→辅弼在三方禄位；武职高登显佐，文人名列公卿：文助力武皆可贵。"},{classic:"論兼文武格 文曲武曲在身命是也",vernacular:"「兼文武格」：文曲（文才）武曲（财武技能）同在身命→文武才艺兼备；身命有双曲，做事门路宽，能文也能务实。"},{classic:"格名文武少人知，遇此須教百事通，更值命宮無殺破，滔滔榮顯是英雄。",vernacular:"文武格少人知；遇此百事通→文才武财兼备，路子宽；命宫无杀破→滔滔荣显是英雄：无煞破则真荣。"},{classic:"論文星朝命格",vernacular:"「文星朝命格」：文昌文曲朝向命宫→文贵照命；利科名才学，女命亦主知书达理、门第或自身文气足。"},{classic:"文昌文曲最榮華，值此鬚生富貴家，更得三方祥曜拱，卻如錦上又添花。",vernacular:"昌曲最荣华，值此须生富贵家→文星朝命，易出条件好的家；三方祥曜拱→锦上添花：科名家世更厚。"},{classic:"論石中隱玉格 命在子午逢巨門是也",vernacular:"「石中隐玉格」：命在子午逢巨门→巨在子午先晦后明，如石中藏玉；厚积待发，后运科禄一开才显贵。"},{classic:"巨門子午二宮逢，身命逢之必貴榮，更得三方科祿照，石中隱玉是豐隆。",vernacular:"巨门子午身命逢必贵荣→口才暗滞中藏玉；三方科禄照→石中隐玉丰隆：厚积后发，科禄一开则显。"},{classic:"論貪狼遇火名為火貴格 三合照身命是也",vernacular:"「火贵格」：贪狼遇火星，三合照身命→火点燃贪欲成贵；欲望爆发成名，宜抓成名窗口，也防躁进。"},{classic:"火遇貪狼照命宮，封侯食祿是英雄，三方倘若無兇殺，到老應知福壽隆。",vernacular:"火遇贪狼照命→封侯食禄英雄象；三方无凶杀→到老福寿隆：爆发成名且能守到老。"},{classic:"論人有無商賈之命",vernacular:"「有无商贾之命」：看巨日紫府（安分仕途）还是月贪杀忌（钻营求利）→前者宜职，后者易经商算计财利。"},{classic:"如人命有巨日紫府守照，為人安分，有仁德耿直之心，作事無私，不行邪僻，不肯妄求，為士為官主有廉潔：如值月貪同殺忌，心多機關，貪財無厭，暮夜求利之輩。",vernacular:"巨日紫府守照→安分仁德耿直，不妄求，为士为官廉洁。月贪同杀忌→心多机关贪财无厌，暮夜求利：前者宜仕，后者易商贾钻营。"},{classic:"貪月同殺會機梁，因財計利作經商，須知暮夜無眠睡，潮海營營自走忙。",vernacular:"贪月同杀会机梁→因财计利作经商；暮夜无眠、潮海营营→欲望+杀+机梁，夜里还在算计跑生意，商贾劳心象。"},{classic:"論人命有無藝術者",vernacular:"「有无艺术者」：看闲宫/马地贪武化忌加煞等→正财官难走时，转细巧手艺、术业吃饭。"},{classic:"寅申巳亥安命或丑未辰戌遇有貪狼武曲在命化忌、加殺，必作細巧藝術之人也。",vernacular:"寅申巳亥或丑未辰戌，贪狼武曲在命化忌加杀→必作细巧艺术之人：欲望武财入忌煞，正财官难，转手艺精细活。"},{classic:"閒宮貪狼何生業，不是屠人須打鐵，諸般巧藝更能精，性好遊畋並捕獵。",vernacular:"闲宫贪狼何生业→不在财官正位；不是屠人须打铁，诸般巧艺能精，性好游畋捕猎：粗艺或游猎，技能有、层次偏术业。"},{classic:"論出家僧道之命",vernacular:"「出家僧道之命」：要帝座空耗、命无正曜、六亲宫有煞等条件齐→俗缘薄才断离俗清修，单见一星不够。"},{classic:"紫微居卯酉遇劫空者，看命無正曜又兼羊火劫空化忌者，更看父母妻子三宮有殺者方可斷。",vernacular:"紫微居卯酉遇劫空；命无正曜又兼羊火劫空化忌；父母妻子三宫有杀→方可断出家：帝座空耗+六亲煞，俗缘薄。"},{classic:"及寅年申月巳日亥時四正殺湊化忌，男僧道，女尼姑。",vernacular:"及寅年申月巳日亥时四正杀凑化忌→男僧道女尼姑：四马年时叠杀忌，离俗象更真。"},{classic:"極居卯酉遇劫空，十人之命九人僧，道釋巖泉皆有分，清閒幽靜度平生。",vernacular:"极居卯酉遇劫空→十人九僧夸张语；道释岩泉有分，清闲幽静度平生：帝座落桃花位+空，宜清修少俗累。"},{classic:"論人命內犯孤克者",vernacular:"「内犯孤克」：克妻、克子、克父母；看父母/妻妾/子女宫庙陷与杀忌→陷加杀忌按刑克鳏寡断，犯一二即宜慎婚育。"},{classic:"如克妻克子克父母內犯一二不為僧道亦作貧賤之人，第一看父母在廟旺地有無吉凶星辰，如在陷地加殺化忌必主刑剋，第二又看妻妾宮，三看子女宮廟陷之地，有無吉凶星辰，如在陷加殺化忌必鰥寡孤獨論斷。",vernacular:"内犯一二不为僧道亦贫贱。一看父母庙旺吉凶，陷加杀忌必刑克；二看妻妾宫；三看子女宫庙陷吉凶，陷加杀忌按鳏寡孤独断。"},{classic:"論壽夭淫蕩",vernacular:"「寿夭淫荡」：贪入庙+寿星可延寿；杀临身冲寿、贪欲重走风月→寿元与情欲要分开看，勿混为一谈。"},{classic:"貪狼入廟最高強，南極星同壽命長，北斗帝星無惡殺，綿綿老耋衍禎祥。",vernacular:"贪狼入庙最高强，南极星同寿命长；北斗帝星无恶杀→绵绵老耋：贪得庙+寿星+紫微无煞，寿福可延。"},{classic:"七殺臨身終是夭，貪狼入廟定為娼，前示三合相臨照，也學韓君去竊香。",vernacular:"七杀临身终是夭→杀临身冲寿。贪狼入庙定为娼→欲望成格走风月（提醒勿污名）。三合相临照→也学窃香：情欲出格象。"},{classic:"身命兩宮俱有殺，貪花戀酒禍猶深，平生二限來符會，得意之中卻又沈。",vernacular:"身命两宫俱有杀，贪花恋酒祸犹深→双宫煞+酒色，祸更深；平生二限来符会→得意之中却又沉：好运窗口也易再栽。"},{classic:"論定人殘疾",vernacular:"「定人残疾」：命宫陷+羊陀火铃劫空忌，再对疾厄宫庙陷吉凶→双宫确认，残障病痛象才稳，忌单宫死断。"},{classic:"先看命宮星落陷，加羊陀火鈴劫空忌宿，又看疾厄宮星廟陷吉凶而斷可也。",vernacular:"先看命宫星落陷，加羊陀火铃劫空忌；又看疾厄宫庙陷吉凶而断→命+疾厄双宫确认，残障象才稳。"},{classic:"命中羊陀殺守身，火鈴坐照禍非輕，平生若不常年臥，也作陀腰曲背人。",vernacular:"命中羊陀杀守身，火铃坐照祸非轻→刃忌杀火齐攻身；不常年卧也作驼腰曲背人：肢体病痛象重。"},{classic:"論定人破相",vernacular:"「定人破相」：相貌宫逢杀曜，三合逢刑，疾厄再见羊耗→面相肢体易折伤破相，外伤疤痕象。"},{classic:"相貌之中逢殺曜，更加三合又逢刑，疾厄擎羊逢耗使，折傷肢體不和平。",vernacular:"相貌逢杀曜，三合又逢刑；疾厄擎羊逢耗使→折伤肢体不和平：貌宫煞刑+疾厄刃耗，易破相受伤。"},{classic:"論定人聰明",vernacular:"「定人聪明」：文曲天相破军主计策机变，三方再会昌曲→脑子活、巧艺成名；聪明从文破机变断。"},{classic:"文曲天相破軍星，計策偏多性更靈，更若三方昌曲會，一生巧藝有聲名。",vernacular:"文曲天相破军→计策多性更灵（文+印+破之机变）；三方昌曲会→一生巧艺有声名：文破得昌曲，技艺成名。"},{classic:"論定人富足",vernacular:"「定人富足」：太阴入庙有光，财入财乡，破耗凶星不犯→月得地+财得位无漏，真能堆金积玉。"},{classic:"太陰入廟有光輝，財入財鄉分外奇，破耗兇星皆不犯，堆金積玉富豪兒。",vernacular:"太阴入庙有光辉，财入财乡分外奇；破耗凶星皆不犯→堆金积玉富豪儿：月得地+财得位无破耗，真富。"},{classic:"論定人貧賤",vernacular:"「定人贫贱」：吉曜不来，火忌羊陀四正侵，武廉巨破会→无吉有煞又囚破，贫且易暴怒，财官两虚。"},{classic:"命中吉曜不來臨，火忌羊陀四正侵，武曲廉貞巨破會，一生暴怒又身貧。",vernacular:"命中吉曜不来，火忌羊陀四正侵；武曲廉贞巨破会→一生暴怒又身贫：无吉+煞忌+武囚巨破，贫且躁。"},{classic:"論定人作盜賊",vernacular:"「定人作盗贼」：破耗贪廉+七杀三方照身，武曲居迁移→动中越轨受伤象；古断语气重，宜作警示勿妄指。"},{classic:"命逢破耗與貪廉，七殺三方照及身，武曲更居遷動位，一生面背刺痕新。",vernacular:"命逢破耗与贪廉，七杀三方照及身；武曲更居迁动位→一生面背刺痕新：破耗欲望囚杀+武在迁移，动中违法受伤象。"},{classic:"論定人一身駁雜",vernacular:"「一身驳杂」：吉凶混临，百般巧艺却不亨通；身命再遇恶曜→正途难立，易落粗活术业糊口，技能杂不成大器。"},{classic:"吉曜相扶兇曜臨，百般巧藝不亨通，若逢身命遇惡曜，只做屠牛宰馬人。",vernacular:"吉曜相扶凶曜临→百般巧艺不亨通（吉凶混，艺多不顺）；身命遇恶曜→只做屠牛宰马人：正业难立，粗活糊口。"}],"shi-deng-lun":[{classic:"福壽論 如南人天同天梁坐命廟旺主福壽雙全如北人紫微武曲破軍貪狼坐命旺宮主福壽",vernacular:"「福寿」看命主寿与福气厚薄。条件：南人天同、天梁坐命且庙旺（星力足）→福寿易双全；北人紫微、武曲、破军、贪狼坐命又旺宫→亦主福寿可持，非空谈长寿。"},{classic:"聰明論 如文昌文曲天相天府武曲破軍三臺八座左輔右弼三合拱照主人極聰明",vernacular:"「聪明」看文才机变。条件：文昌文曲（文笔）、天相天府（稳厚）、武曲破军（决断）、三台八座（位望）、左辅右弼（助力）三合拱照命身→脑子活、学得快、处事灵，聪明象很足。"},{classic:"威勇論 如武曲文昌擎羊七殺坐命宮得權祿三方又得紫微天府左右拱照主人威勇",vernacular:"「威勇」看胆气权柄。条件：武曲文昌擎羊七杀坐命又得权禄（权柄+财禄），三方再紫微天府左右拱→刚锐敢冲，威势压场，宜武职、执法、冲锋一类。"},{classic:"文職論 如文昌文曲左輔右弼天魁天鉞坐命旺宮又得三方四正科權祿拱主為文官",vernacular:"「文职」看文官仕途。条件：昌曲辅弼魁钺坐命旺宫，三方四正再见科权禄拱→科名文气与权禄齐照，宜公文、教职、文官系统，靠笔墨与贵人升迁。"},{classic:"武職論 如武曲七殺坐命廟旺宮又得三臺八座加化權祿及天魁天鉞並拱主為武職",vernacular:"「武职」看武官军职。条件：武曲七杀坐命庙旺，又三台八座，加化权化禄与魁钺并拱→杀星得权禄托，威权能落地，宜军警、武职、带兵带队。"},{classic:"刑名論 如擎羊陀羅火鈴星武曲破軍帶殺上吉湊合三方四正無兇不陷主刑名",vernacular:"「刑名」看法司刑狱之职。条件：羊陀火铃武曲破军带煞，但有上吉凑合，三方四正无大凶且不陷→煞气转成执法锋芒，宜司法、纪检、刑名差事，刚断能成局。"},{classic:"富貴論 如紫微天府天相祿權科太陰太陽文昌文曲左輔右弼天魁天鉞守照拱衝主大富貴",vernacular:"「富贵」看财官齐发。条件：紫府相、禄权科、日月、昌曲、辅弼、魁钺守照拱冲齐全→帝座财库文贵权禄一齐亮，大富大贵机会足，场面与实利都能撑。"},{classic:"貧賤論 如擎羊陀羅廉貞七殺武曲破軍天空地劫忌星三方四正守照拱衝諸兇並犯陷地主貧賤",vernacular:"「贫贱」看财官两空。条件：羊陀廉杀武破、天空地劫、忌星在三方四正守照拱冲，诸凶并犯又陷地→财禄被掏、贵气落空，书断偏贫贱：难聚财、难抬头。"},{classic:"疾殀論 如貪狼廉貞擎羊陀羅天空地劫火鈴忌星三方守照主疾殀或疾厄相貌宮亦然",vernacular:"「疾夭」看健康寿元。条件：贪廉羊陀空劫火铃忌星三方守照→血气欲望与煞忌交攻，易病弱、寿元受冲；疾厄、相貌宫见同象亦须重看身体。"},{classic:"僧道論 如天機天梁七殺破軍天空地劫並犯帝座紫微又或耗殺加臨主為僧道",vernacular:"「僧道」看出家清修之象。条件：机梁杀破空劫并犯帝座紫微，或再加耗煞→帝座被空耗煞冲，俗世贵气难安，书多断僧道、离俗清修一路。"}],"shiergong-dedi":[{classic:"子安命 子宮貪狼殺陰星，機梁相拱福興隆，庚辛乙癸生人美，一生富貴足豐榮。",vernacular:"子安命得地：命在子（水旺），贪狼/七杀/太阴一类坐守，再天机天梁来拱→机变有荫护，福能兴；尤喜庚辛乙癸年生，财禄路宽→一生偏富贵丰足。"},{classic:"丑安命 丑宮立命日月朝，丙戍生人福祿饒，正坐平常中局論，對照富貴禍皆消。",vernacular:"丑安命得地：命在丑，日月来朝→光气照命；丙戊年生福禄更厚。正坐本宫多半中局；要对宫对照得力，富贵才实，灾祸也消得快。"},{classic:"寅安命 寅宮巨日足豐隆，七殺天梁百事通，申巳庚人皆為吉，男子為官女受封。",vernacular:"寅安命得地：命在寅，巨门太阳撑丰足，七杀天梁做事通→财官路开；申巳庚人更吉→男宜官职、女易得封誉名分。"},{classic:"卯安命 卯宮機巨武曲逢，辛乙生人福氣隆，男子為當縻廩祿，女人享福受褒封。",vernacular:"卯安命得地：命在卯，天机巨门武曲相逢，辛乙年生福气隆→男多有俸禄可依，女多享福且易受褒奖，衣禄较稳。"},{classic:"辰安命 辰位機梁坐命宮，天府戍地最盈豐，腰金衣紫真榮顯，富華貴輝宜到終。",vernacular:"辰安命得地：命在辰，机梁坐命，天府在戌最盈丰→财库存实；书云「腰金衣紫」→荣显能贯穿始终，富贵光彩不虚花。"},{classic:"巳安命 巳位天機天相臨，紫府朝垣福更深，戊辛壬丙皆為貴，一生順遂少災侵。",vernacular:"巳安命得地：命在巳，机相临命，紫府朝垣福更深；戊辛壬丙皆贵→一生顺遂少灾，贵气有三方托，不是空名。"},{classic:"午安命 午宮紫府太陽同，機梁破殺喜相逢，甲丁己癸生人福，一世風光廩祿豐。",vernacular:"午安命得地：命在午，紫府太阳同宫，机梁与破杀相逢反喜（杀破得帝座日照）→甲丁己癸生人福厚，一世风光、俸禄丰。"},{classic:"未安命 未宮紫武廉貞同，日月巨門喜相逢，女人值此全福壽，男子逢之位三公。",vernacular:"未安命得地：命在未，紫武廉同宫，日月巨门喜相逢→女命福寿较全；男命权位象重，书夸张至「三公」→高位厚禄可期。"},{classic:"申安命 申宮紫帝貞梁同，武曲巨門喜相逢，甲庚癸人如得喜，一生富貴逞英雄。",vernacular:"申安命得地：命在申，紫微帝座会廉梁，武曲巨门喜相逢；甲庚癸人得用→富贵带英雄气，能扛事、能出头。"},{classic:"酉安命 酉宮最喜太陰逢，巨日又逢當面衝，辛乙生人為貴格，一生福祿永亨通。",vernacular:"酉安命得地：命在酉最喜太阴，巨日当面冲（明暗对照）→辛乙生人为贵格，福禄亨通，名利路较顺。"},{classic:"戍安命 戍宮紫微對沖辰，富而不貴有虛名，更加吉曜多權祿，只利開張貿易人。",vernacular:"戌安命得地：命在戌，紫微对冲辰→易富而不贵、名声偏虚；若再吉曜多权禄→更利开张贸易、生意人，实利大于虚衔。"},{classic:"亥安命 亥宮最喜太陰逢，若人值此福祿隆，男女逢之皆稱意，富貴榮華直到終。",vernacular:"亥安命得地：命在亥最喜太阴，福禄易隆→男女皆称意，富贵荣华能撑到终，宅运情感也较稳。"}],"shiergong-shixian":[{classic:"子丑安命 子午天機丑巨鈴，此星落陷果為真，縱然化吉更為美，任他富貴不清寧。",vernacular:"子丑失陷：天机在午、巨门铃星在丑等落陷（星力弱）→纵然化吉表面好看，富贵也不清宁：钱名有、心不安、事多反复。"},{classic:"寅安命 寅上機昌曲月逢，雖然吉拱不豐隆，男為伴僕女娼婢，若非夭折即貧窮。",vernacular:"寅失陷：寅上机昌曲月相逢，吉拱也不丰隆→男易劳碌伺候人、女易走下位；非夭即贫之象要重看：日子紧、难抬头。"},{classic:"卯辰安命 卯上太陰擎羊逢，辰宮巨宿紫微同，縱然化吉非全美，若非加殺到頭兇。",vernacular:"卯辰失陷：卯太阴逢羊、辰巨紫同宫→化吉非全美；再加煞→到头偏凶：名利易破、灾厄易显。"},{classic:"巳安命 巳宮武月天梁巨，貪宿廉貞共到蛇，三方吉曜皆不貴，下賤貧窮度歲華。",vernacular:"巳失陷：武月梁巨与贪廉挤在巳（蛇宫）→三方有吉也不贵；下贱贫穷度岁→层次难抬、财官两虚。"},{classic:"午安命 午宮貪巨月昌從，羊刃三合最嫌衝，雖然化吉居仕路，橫破橫成到老窮。",vernacular:"午失陷：贪巨月昌从，又嫌羊刃三合冲→纵化吉走仕途，横破横成；到老仍易穷：成局猛、破局也猛，难稳富。"},{classic:"未安命 未宮巨宿太陽嫌，縱少災危有克傷，勞碌奔波官事至，隨緣下賤度時光。",vernacular:"未失陷：巨门嫌太阳（口舌是非重）→大灾未必有，克伤仍在；劳碌奔波、官事易至→宜随缘安守，勿硬冲。"},{classic:"申酉安命 申宮機巨為破格，男人浪蕩女人貧，二宮若然桃花見，男女逢之總不榮。",vernacular:"申酉失陷：申宫机巨为破格→男浪荡、女贫；两宫再见桃花→男女皆难真荣：情欲耗福、名利不稳。"},{classic:"戍安命 戍上紫破若相逢，天同太陽皆主兇，若還孤寒更殀折，隨緣勤苦免貧窮。",vernacular:"戌失陷：戌上紫破相逢，天同太阳亦主凶→孤寒再重易夭折；劝随缘勤苦→求少受穷，勿指望虚贵。"},{classic:"亥安命 亥宮貪火天梁同，飄蕩浪子走西東，若還富貴也年促，不然隸僕與貧窮。",vernacular:"亥失陷：贪火梁同宫→飘荡浪子走西东；纵富贵也年促，不然隶仆贫穷→坐不定、寿元或层次受冲。"}],"shixian-pinjian":[{classic:"丑未巨機為值福，失陷此月福須輕，卯酉不喜逢羊刃，辰戌紫破朝羅網，",vernacular:"失陷看星落无力。丑未巨机本可值福，一失陷福须轻。卯酉不喜羊刃（刃破桃花财气）；辰戌紫破朝罗网→帝座冲破被网住，格局卡住，贵气难伸。"},{classic:"辰休戌囚貪貞陷，午宮陰巨不堪稱，申宮合武為下格，酉逢機巨日無精，",vernacular:"辰休戌囚，贪贞陷→欲望囚星无力。午宫阴巨不堪；申合武为下格；酉逢机巨日无精→明暗文财都暗淡，贫贱象加重。"},{classic:"卯辰巳午逢陰宿，戌亥逢陽亦不容，貪殺巳亥居陷地，破軍卯酉不為清，",vernacular:"卯辰巳午逢阴宿失辉；戌亥逢阳亦不容（日入夜地）。贪杀巳亥居陷；破军卯酉不清→杀破失地，冲劲散、清贵无，难成大器。"},{classic:"加殺遇劫為奸盜，此是刑邪不必論，貪狼化祿居四墓，縱然遇吉亦中平，",vernacular:"加煞遇劫→奸盗刑邪象（意欲偏邪、易惹官非）。贪狼化禄居四墓→禄入墓库，纵遇吉也中平：财有而难大发，欲望被锁。"},{classic:"命纏弱地休逢忌，空劫擎羊加火鈴，若非夭折主下賤，六畜之命不可平，",vernacular:"命缠弱地最忌再逢化忌，叠空劫羊火铃→星力本弱又被掏空打散；非夭折即下贱，书用「六畜之命」极言层次难抬，不可轻看。"},{classic:"旺地發福終遠大，陷地崢嶸到底傾，二論不過五百字，富貴貧賤別得明。",vernacular:"总诀：旺地发福终远大（后劲足）；陷地峥嵘到底倾（一时风光根基虚）。得地/失陷两论不过五百字→富贵贫贱大体可分清。"}],"taiwei-fu":[{classic:"斗數至玄至微，理旨難明，雖設問於各篇之中，猶有言而未盡，至如星之分野，各有所屬，壽夭賢愚，富貴貧賤，不可一概論議。",vernacular:"「斗数」指紫微斗数这一套星盘理法。它细到星的分野、宫位所属，寿夭贤愚、富贵贫贱各有来历，各篇虽设问答仍说不尽。实务上不能拿一两句通论套所有盘——须按星落何宫、庙旺陷地、吉凶会照逐层看，才贴得上原文的「不可一概论议」。"},{classic:"其星分佈一十二垣（yuan園），數定乎三十六位，入廟為奇，失度為虛，大抵以身命為福德之本，加以根源為窮通之資。",vernacular:"十二垣即十二宫（命、兄、夫、子、财、疾、迁、仆、官、田、福、父）。「三十六位」多指主星、辅星在盘上的定位。「入庙」指星落庙旺地，力量足、能发挥；「失度」指落陷、失垣，力量虚、名实难副。论福德穷通，先看身宫、命宫这个「本」，再参看福德、田宅、父母等根源宫，合起来才判得通塞。"},{classic:"星有同躔（chan纏），數有分定，須明其生克之要，必詳乎得垣失度之分。",vernacular:"「同躔」指两星叠在同一宫位（同宫共度）。「得垣」是星入本垣庙旺，「失度」是落陷失力。同宫要看谁生谁克、谁制谁化；再分清是得垣还是失度——生克与庙旺合参，这句才立得住。"},{classic:"觀乎紫微舍躔，司一天儀之象，率列宿而成垣，土星茍居其垣，若可移動，金星專司財庫，最怕空亡。",vernacular:"紫微为帝星，管一盘纲纪，率众星成垣。「土星」在斗数语境多指武曲等属土财星；入紫微之垣若得辅弼、魁钺，格局可转、可移动。「金星」多指太阴、贪狼等司财库者；财库最忌同宫再见天空、地劫、空亡——库开了却存不住，钱来也易散。"},{classic:"帝星動則列宿奔馳，貪守空而財源不聚。",vernacular:"「帝星」即紫微。紫微动（迁移、大限走到动宫，或同宫煞动），列宿往往跟着起伏，整盘气机不稳。「贪」指贪狼；贪狼守空亡（同宫天空、地劫或落空亡宫），本主的财缘、桃花缘聚不牢——财源难囤，机会来了也易飘。"},{classic:"各司其職，不可參差。",vernacular:"各星各有本位职司：紫微主贵、武曲主财、贪狼主欲望、七杀主肃杀……看盘时不可张冠李戴、把职司搅乱。原文强调「各司其职」，就是提醒：先认清这颗星管什么，再谈会照吉凶。"},{classic:"茍或不察其機，更忘其變，則數之造化遠矣。",vernacular:"斗数重「机」与「变」：机是星会、冲破、空实的关键节点；变是流年、大限把本命格局改了样。若只背口诀、不察当下会照，也不跟大限流年的变化，就离书上说的「造化」远了——盘看不准、断也贴不上。"},{classic:"祿逢衝破，吉處藏兇。",vernacular:"这里的「禄」多指化禄、禄存等财禄星，本主进财、机会多，是吉。但若同宫被擎羊、陀罗冲破，三方再见火星、铃星，就是「禄逢冲破」——表面财路开着，里面藏着破口：钱进来也留不住，合伙投资易漏。"},{classic:"馬遇空亡，終身奔走。",vernacular:"「马」指天马（驿马），主走动、迁移、出差换城。若迁移宫或命身见天马，同宫又叠天空、地劫（空亡），马力落空——人往往坐不定、换城换工作，一辈子奔波难安居。"},{classic:"生逢敗地，發也虛花。",vernacular:"「败地」指主星落在休囚、失陷之地，力量弱、根基不牢。即便年运表面上发了（名利上来），也多是虚名虚利：根基不稳、后劲不足，书上谓之「发也虚花」。"},{classic:"絕處逢生，生花不敗。",vernacular:"星落绝地本主走投无路、气机将尽；但若有生扶、解厄（吉星制化、禄权科来救），绝地反能生——事情往往有转机，且能稳住，不至于一败涂地。"},{classic:"星臨廟旺，再觀生克之機。",vernacular:"「庙旺」指星入庙、旺地，本身有力。仍须再看同宫与三方四正的生克：得生扶则力更足，遭克破则庙旺也打折——不能见庙旺就一口断好。"},{classic:"命坐強宮，細察制化之理。",vernacular:"「强宫」多指命坐子午卯酉等旺宫，或主星得地有力。仍要细察制化：有左辅右弼、天魁天钺、昌曲禄权来制化则吉能落实；无制化、反见羊陀火铃，强宫也易变成「硬刚」——冲得猛、也伤得重。"},{classic:"日月最嫌反背，祿馬最喜交馳。",vernacular:"「日月反背」指太阳、太阴落在不利方位（如日在酉、月在卯一类昼夜失位），光明不济，书上多主眼目、精神或名利暗淡。「禄马交驰」指禄存（或化禄）与天马相会、拱照——财禄带走动，利于外出求财、迁动中得机会。"},{classic:"倘居空亡，得失最為要緊。",vernacular:"星本吉或本有用，一旦落入空亡（天空、地劫同宫，或宫位空亡），吉力打折、应事易虚。此时得失最要紧：看有没有解空、填实、吉星拱照——有则空而不空，无则好事也飘。"},{classic:"若逢敗地，扶持大有奇功。",vernacular:"主星落败地本弱；若同宫或三方有禄存、化禄、辅弼、魁钺来扶持、生扶，弱星得「药」，往往能起奇功——败地不败，困境里反而翻身。"},{classic:"紫微天府全依輔弼之功，七殺破軍專依羊鈴之虐。",vernacular:"紫微、天府为帝相之尊，全靠左辅、右弼夹拱或同宫相助，贵气才稳、号令才灵。七杀、破军本带肃杀动荡；若再叠擎羊、火星、铃星，凶性被放大——冲突、破耗、意外一类象书上多看重。"},{classic:"諸星吉，逢兇也吉。",vernacular:"主星、格局本属吉（庙旺、得禄权科、辅弼魁钺），即便同宫或会照碰上凶星，因有吉作底，往往仍偏吉——凶被冲淡，坏事能化小。"},{classic:"諸星兇，逢兇也兇。",vernacular:"主星、格局本属凶（七杀破军贪狼落陷、羊陀火铃叠宫），再逢凶星会照，就是凶上加凶——冲突、破败、刑伤一类应事，书上往往看得更重。"},{classic:"輔弼夾帝為上品，桃花犯主為至淫。",vernacular:"「辅弼夹帝」：左辅、右弼分夹紫微（或紫微在命、辅弼夹命），君臣相得，属上品贵格。「桃花犯主」：贪狼、红鸾、天喜、咸池一类桃花星冲犯命主或夫妻宫，书上多主感情纠缠、易走偏淫邪一路（宜慎断，看有无制化）。"},{classic:"君臣慶會，材善經邦。",vernacular:"「君臣」多指紫微与天府、或紫微与辅弼、杀破狼等成君臣庆会之象。凑齐会照，书上多主材器可经邦——能掌事、能统筹，适合担责而非只做执行。"},{classic:"魁鉞同行，位居臺輔。",vernacular:"天魁、天钺为贵人星；若同宫或夹拱命身、官禄，成「魁钺同行」。书上多主有贵人提携，职位易近台辅、幕僚、决策层一类——贵气来自「人帮人」。"},{classic:"祿文拱命，貴而且賢。",vernacular:"「禄文拱命」：禄存（或化禄）与文昌、文曲来拱照命宫（三方四正会命）。财禄加文气，人往往既有名位又重学养——贵而且贤，不是空有头衔。"},{classic:"日月夾財，不權則富。",vernacular:"太阳、太阴夹着财帛宫（或夹武曲、禄存等财星），成「日月夹财」。光明照库，钱路亮；书上说即便不当大权，也容易积富——权不足则富补。"},{classic:"馬頭帶劍，鎮衛邊疆。",vernacular:"「马头带剑」古格：天马与擎羊（或七杀、破军带刃）会于迁移、官禄等宫。马主走动，剑主威权肃杀——书上多往武职、镇守边防、外勤执法一类看，走动中带锋芒。"},{classic:"刑囚夾印，刑杖惟司。",vernacular:"「刑囚夹印」：天刑、天囚夹着官禄印绶（或廉贞、天相一类印局）。刑主官司责罚，囚主受困，夹印则权力落在刑名上——书上多主管刑杖、司法、纪律一类职司。"},{classic:"善蔭朝綱，仁慈之長。",vernacular:"「善荫」多指天梁、天同、左辅右弼、天魁天钺等善星福荫朝纲（官禄、命身得照）。主仁慈宽厚，宜做长辈、长官或受人托付——以德服人多于以威压人。"},{classic:"貴入貴鄉，逢之富貴。",vernacular:"「贵入贵乡」：天魁、天钺、化权、化科等贵星落入庙旺贵地，或贵星入官禄、命宫贵位。贵上加贵，碰上往往偏富贵——名位与财禄易两得。"},{classic:"財居財位，遇者富奢。",vernacular:"「财居财位」：武曲、禄存、化禄等财星落在财帛宫，或财星入庙旺财地。财就财位，遇者日子往往宽裕、排场易奢——钱能聚、也能花得起。"},{classic:"太陽居午，謂之日麗中天，有專權之貴，敵國之富。",vernacular:"太阳落午宫，白天正中，称「日丽中天」。日主贵显光明；居午得地，书上多主专权之贵，且财势可敌一方——权与富都足，不是虚名。"},{classic:"太陰居子，號曰水澄桂萼，得清要之職，忠諫之材。",vernacular:"太阴落子宫，夜间正位，称「水澄桂萼」（月明水清）。月主清贵、文书；居子得地，书上多主清要之职（幕僚、文职、咨询一类），并具忠谏之材——能直言、能辅政。"},{classic:"紫微輔弼同宮，一呼百諾居上品。",vernacular:"紫微与左辅、右弼同宫（或紧密相夹），帝座有辅。号令有人应，一呼百诺，属上品格局——贵在「有班子」，不是光杆司令。"},{classic:"文耗居寅卯，謂之眾水朝東。",vernacular:"文昌、文曲与大耗（或劫耗一类）同落寅、卯。寅卯属木、水流向东，「众水朝东」喻文气汇聚又带耗泄——文章名气易扬，钱财也易随名气进出，宜防虚名耗实。"},{classic:"日月守不如照合，蔭福聚不怕兇危。",vernacular:"太阳、太阴「守」本宫，力不如「照合」（三方四正会照、对拱）来得活、来得广——照合能把日月光散到多宫。「荫福」指天梁、天同、辅弼魁钺等福荫星聚；聚在一起，凶危往往能挡一挡，不怕单见煞。"},{classic:"貪居亥子，名為犯水桃花。",vernacular:"贪狼落亥、子（水旺之地），欲望、桃花得水更扬，称「犯水桃花」。感情、应酬、投机一路易热——机会多，也易沉湎；须看有无廉贞、天刑、昌曲制化，才不至风流成灾。"},{classic:"刑遇貪狼，號曰風流彩杖。",vernacular:"天刑（或刑煞）与贪狼会照同宫，称「风流彩杖」。桃花带刑：感情事里夹是非责罚——风流背后易挨板子，书上多主桃花惹官非或家规责打一类象（宜参全盘，勿死断）。"},{classic:"七殺廉貞同位，路上埋屍。",vernacular:"七杀与廉贞同宫：杀主肃杀血光，廉贞主囚、主血、主是非。二星叠宫，古赋用「路上埋尸」极言其重——冲突、血光、在外不测一类风险偏高；实务须看庙旺制化，有解则减等，无解则宜慎。"},{classic:"破軍暗曜同鄉，水中作冢。",vernacular:"破军与暗曜（如阴煞、天姚暗昧之曜，或化忌一类）同乡：破主破耗动荡，暗主不明不白。古赋用「水中作冢」喻溺水、暗伤、无声之祸一类象——在外、近水、私下之事宜加小心（同样须参制化，不断死）。"},{classic:"祿居奴僕縱有官也奔馳，帝遇兇徒雖獲吉而無道。",vernacular:"禄存落奴仆宫：禄本主财禄贵气，落仆宫则贵气下移、财禄随人走——纵有官职也常奔波代劳、为他人忙。「帝遇凶徒」：紫微同宫或会照羊陀火铃等凶星；帝座被凶缠，即便有吉拱，行为处事也易偏离正道，权用不端。"},{classic:"帝坐金車則曰金輿捧櫛，福安文曜謂之玉袖天香。",vernacular:"「金舆捧栉」：紫微（帝）坐逢天马、禄存或金舆一类贵驾之象，如金车捧饰——贵而有仪仗，出行、职位带排场。「玉袖天香」：福德宫安稳，又逢文昌、文曲等文曜——福气清雅，书香、才情一路显。"},{classic:"太陽會文昌於官祿，皇殿朝班，富貴全美。",vernacular:"太阳在官禄宫与文昌会照（同宫或三方）。日主贵、昌主文墨科名，如皇殿朝班——职务、功名、体面较齐全，富贵偏「明面」上的那种。"},{classic:"太陰會文曲於妻宮，蟾宮折桂，文章全盛。",vernacular:"太阴在夫妻宫与文曲会照。月主姻缘与清贵，曲主才艺文章，如蟾宫折桂——配偶缘常带文气，或因文得偶；文章功名气也足，不单论感情。"},{classic:"祿存守于田財，堆金積玉。",vernacular:"禄存守田宅或财帛宫（田财）。禄主财库积蓄，守田财则田产、存款易堆——堆金积玉，偏「留得住」的富，不是过路财。"},{classic:"財蔭坐於遷移，鉅商高賈。",vernacular:"财荫（武曲、禄存、化禄，或天梁天同等荫财之星）坐迁移宫。财在外动：利于行商、外贸、异地经营——书上多主钜商高贾，钱从走动中来。"},{classic:"耗居祿位，沿途乞食。",vernacular:"大耗（或劫煞耗星）占了禄位（禄存之位、财禄宫，或化禄被耗同宫）。禄本进财，耗来泄财——钱路开着却沿途漏光，书上重象作「沿途乞食」：奔波求生、积蓄难留（有制化则减等）。"},{classic:"貪會旺宮，終身鼠竊。",vernacular:"贪狼会旺宫（贪狼入庙旺，或旺宫见贪）。欲望强、手段活；若无吉制、反见煞忌，书上偏「终身鼠窃」——投机取巧、旁门取利，不易走正途（语气重，须参全盘与制化，勿死盯小偷）。"},{classic:"殺居絕地，天年夭似顏回。",vernacular:"七杀落绝地（绝、死、墓等无力之地）。杀本主肃杀年限，绝地无生扶，寿元气机易短；古赋以颜回短寿作比——天年不永之象。实务看疾厄、有无天梁天马禄权解救，有解则勿死断夭折。"},{classic:"貪坐生鄉，壽考永如彭祖。",vernacular:"贪狼坐生乡（长生、沐浴、冠带等生旺之地）。贪得生地，欲望转化为活力与续命之气；书上以彭祖喻长寿——寿考偏永。仍须看疾厄有无恶煞叠宫，生乡是加分不是铁券。"},{classic:"忌暗同居身命疾厄，沉困尪（wang汪）贏，兇星會於父母遷移，刑傷破祖。",vernacular:"化忌与暗曜（阴煞、天姚等）同守身宫、命宫或疾厄宫：忌主阻滞忧煎，暗主不明之疾——人往往沉困、瘦弱（「尪羸」即瘦弱乏力）。凶星（羊陀火铃杀破）会于父母宫或迁移宫：父母缘刑克、祖业破耗，或离乡后破祖产——刑伤破祖之象。"},{classic:"刑殺同廉貞於官祿，枷扭難逃，官符加刑殺於遷移，離鄉遭配。",vernacular:"天刑、七杀与廉贞同在官禄宫：刑杀囚齐聚官禄——官非、责罚、枷锁一类麻烦难躲。「官符」再加刑杀落在迁移宫：在外惹官司，书上多主离乡遭配、远走避祸一类（今可作异地纠纷、外出受罚之象，有解则轻）。"},{classic:"善福居於空位，天竺生涯。",vernacular:"善星、福德星（天梁、天同、辅弼等）落在空亡之位（天空地劫同宫，或空亡宫）。福气清而不实、宜淡不宜浓——书上多主清修、出世、天竺生涯一路：名利心淡，偏宗教、学术、隐逸。"},{classic:"輔弼單守命宮，離宗庶出。",vernacular:"左辅或右弼「单守」命宫（只有一颗辅弼守命，无紫微天府君臣相配，或辅弼孤守）。辅本主佐贰、傍支；单守命，书上多主离宗过继、庶出旁支，或早离祖宅——贵在「傍」，不在「正嫡」。"},{classic:"七殺臨於身命加惡殺，必定死亡。",vernacular:"七杀临身宫或命宫，再加恶煞（擎羊、陀罗、火星、铃星、地空地劫等）。杀本主肃杀，恶煞叠宫则凶力加重——书上说死亡风险偏高。今断宜软：疾厄、意外、重大冲击要防；有天梁、禄权、昌曲制化则减等，不断死。"},{classic:"鈴羊合於命宮遇白虎，須當刑戮。",vernacular:"铃星、擎羊合照或同在命宫，又遇白虎。羊铃主刑伤破败，白虎主血光丧服——叠在命上，书上须防刑罚、血光、官刑一类。有解厄星则作「惊险」，无解则刑戮之象加重（仍用往往/须防，不死断）。"},{classic:"官府發於吉曜，流殺怕逢破軍。",vernacular:"官禄宫有吉曜发动（化禄化权化科、魁钺昌曲等），利于升迁、职务展开。「流杀」指流年七杀；流年七杀最怕再逢本命或流年破军——杀破会齐，动荡破耗、职位动荡书上最忌。"},{classic:"羊陀憑太歲以引行，病符官符皆作禍。",vernacular:"擎羊、陀罗随太岁（流年）引动：流年走到羊陀所在，或太岁触发羊陀宫位。病符、官符跟着作祸——流年易有病痛纠缠、官非文书；不是年年如此，而是羊陀太岁并见之年要特别当心。"},{classic:"奏書博士與流祿，盡作吉祥。",vernacular:"奏书、博士为岁辅吉神，再与流禄（流年禄存或化禄）同会。文书、职禄、喜庆一类助力叠上——流年多作吉祥看：考试、调任、进财都易有「文书开路」。"},{classic:"力士將軍同青龍，顯其權勢。",vernacular:"力士、将军为岁驾威权之神，同会青龙（喜庆贵气）。威权加喜庆——权势容易显出来：升职、掌印、场面做大，流年偏「露脸掌事」。"},{classic:"童子限如水上泡漚，老人限似風中燃燭。",vernacular:"「童子限」指幼年大限：如水上浮泡，根基未固，一碰易破——儿时灾厄、变故要防，也提醒童限吉凶应验快、消得也快。「老人限」如风中燃烛：气阴已弱，经不起大风大煞——晚年遇凶限，损耗来得重，宜养不宜搏。"},{classic:"遇殺無制乃流年最忌，",vernacular:"流年或大限逢七杀、羊陀火铃等煞，又无天梁、昌曲、禄权、辅弼来制化——「遇杀无制」，是流年最忌的组合。冲突、破耗、疾病、官非都易应；有制则煞可化用，无制则宜守不宜攻。"},{classic:"人生榮辱限元必有休咎，處世孤貧數中逢乎駁雜，學至此誠玄微矣。",vernacular:"荣辱不在一句定论，而在大限、小限、流年里一轮轮休咎交替——顺限荣、逆限辱。「孤贫」多因命盘驳杂：吉凶混杂、空亡耗煞交织，处世易孤、求财易滞。学到此处，才知斗数确是玄微——须把星、宫、限、流年合参，不能一概论死。"}],"xingxing-fu":[{classic:"原夫紫微帝座，生為厚重之容。",vernacular:"「紫微」是斗数帝星，坐命/身当「帝座」时力量最足。成立条件是紫微得位入庙、不被空劫硬冲散。现实上看：人多半面相偏厚重稳当，气场像坐得住的主心骨，不飘不碎。"},{classic:"天府尊星，也作純和之體。",vernacular:"「天府」是南斗尊星，主库藏、稳妥。同宫或三方见辅弼、禄权更稳。现实上看：体性偏纯和，待人好相处，像有库有底的人，不爱走极端。"},{classic:"金烏圓滿，玉兔清奇。",vernacular:"「金乌」指太阳，「玉兔」指太阴。太阳入庙旺、照得正，面相/气场偏圆满有光；太阴得地、不暗不空，偏清秀出众。成立要看日月是否庙旺、有无空劫羊陀来破。"},{classic:"天機為不長不短之姿，情懷好善。",vernacular:"「天机」主心思、谋划。落得地时，身材往往不特高不特矮；性情上好善、爱动脑。若天机叠火铃忌，心思就变急躁多变，不再是单纯「好善」象。"},{classic:"武曲乃至要至緊之操，心性果決。",vernacular:"「武曲」主财、决断、刚金之气。入庙得禄权时，操守紧要干脆，心性果决——拿得起放得下。若武曲会羊陀火铃，果决容易变成冲撞、破财。"},{classic:"天同肥滿，目秀清奇。",vernacular:"「天同」主福、安逸。得地时体态常偏丰满，目秀清奇，像福气写在脸上。若天同叠陀罗、忌星、耗星，就易显臃肿、眼神发飘，福里带累。"},{classic:"廉貞眉寬，口闊面橫，為人性暴，好忿好爭。",vernacular:"「廉贞」主囚、桃花、刚烈。落命身或相貌时，古诀看眉宽口阔、脸盘横；性情易暴、好忿好争。成立要看是否入庙得辅、有无火铃羊陀加攻——有化则刚可用，无化则口舌争端多。"},{classic:"貪狼為善惡之星，入廟必應長聳，出垣必定頑囂。",vernacular:"「贪狼」是善恶两头星：入庙（子午卯酉等得地）时，人多长耸挺拔、才艺外放；出垣失陷时，顽嚣吵闹、欲望失控。讲盘先问：贪狼在庙还是陷？再问有无火铃同宫催桃花。"},{classic:"巨門乃是非之曜，在廟敦厚溫良。",vernacular:"「巨门」是是非口舌之曜。入庙（如卯酉）时，人反而敦厚温良，口才变作条理；失陷再会暗忌，就易争讼暗伤。成立条件：巨门得垣+有化科/禄辅，是非才能化成辩才。"},{classic:"天相精神，天梁穩重，心事玉潔冰清。",vernacular:"「天相」主印、仪表，看着精神；「天梁」主荫、清贵，看着稳重。两星心事多玉洁冰清——前提是不叠贪狼火铃、不落空劫。否则「清」会变成清冷孤高。"},{classic:"七殺如子路暴虎馮河，火鈴似豫讓吞炭裝啞。",vernacular:"「七杀」如子路「暴虎冯河」：胆大敢冲、杀气外露；「火铃」似豫让「吞炭装哑」：隐忍阴狠、突发冲击。同宫/三方见杀火铃，人外表可能压着，骨子里爆发力强，宜武职压力岗，忌无制硬冲。"},{classic:"暴虎馮河兮目太兇狠，吞炭裝啞兮暗狼聲沉。",vernacular:"接上句拆象：「暴虎冯河」落到相貌/眼神，太凶太狠；「吞炭装哑」落到声气心机，暗狼声沉。成立多是七杀火铃守命身或相貌疾厄，再无昌曲魁钺软化。"},{classic:"俊雅文昌眉清目秀，磊落文曲口舌便佞，在廟定生異痣，失陷必有班痕。",vernacular:"「文昌」主科甲清雅，眉清目秀；「文曲」主巧艺口才，磊落便佞（嘴利，有时也耍嘴）。入庙常带异痣（记认）；失陷则斑痕、口舌虚浮。讲盘要看昌曲是否庙旺、有无羊陀冲破文星。"},{classic:"左輔右弼溫良規模，端莊高士。",vernacular:"「左辅」「右弼」是辅助贵人星，温良有规模，像端庄高士。同宫紫府或夹命身时，贵人助力实；若辅弼落空劫或逢煞，贵人象就虚、帮不上忙。"},{classic:"天魁天鉞具足威儀，重合三臺則十全模範。",vernacular:"「天魁」「天钺」主贵人威仪；再「重合三台」（三台八座来会），古诀近十全模范。成立：魁钺得见命身官禄，又有三台拱照，才谈仪表威仪足；单见魁钺而无主星，力量有限。"},{classic:"擎羊陀羅，形丑貌粗，有矯詐體態。",vernacular:"「擎羊」「陀罗」是刑忌煞：形丑貌粗、矫诈体态。守命身相貌、或夹主星时，外伤疤痕、性情拧巴更显。若羊陀仅在闲宫且有吉化，粗相可减。"},{classic:"破軍不仁，背重眉寬，行坐腰斜奸詐好行驚險。",vernacular:"「破军」主耗、变动、不仁之象：背重眉宽、行坐腰斜，奸诈又好行惊险。坐命身或财迁时，人生起伏大、爱拆再建。有紫府禄权制化，破中可立业；无制则破多成少。"},{classic:"性貌如春和藹，乃是祿存之情德。",vernacular:"「禄存」是禄主、财库之德。落命身或三方拱照时，性貌如春和蔼——钱财稳、脾气也厚。若禄存被羊陀冲破（禄逢冲破），和蔼底下财口漏。"},{classic:"情懷似火鋒衝，此誠破耗之威權。",vernacular:"情怀似火锋冲——多指破军、大耗、火铃一类威权外露：心里火头往外顶。成立于破耗火铃守命身或限运；现实上敢冲敢拼，也易破财伤人，要有武曲禄权托底才用得住。"},{classic:"星論廟旺最怕空亡，殺落空亡竟無威力。",vernacular:"论星先看「庙旺」，最怕「空亡」（天空地劫等落空）。杀星（七杀羊陀火铃）一旦落空亡，凶威打折——坏事未必成大凶，但主星空亡也难成真贵。讲盘：空亡要分吉凶星而论。"},{classic:"權祿乃九竅之奇，耗積散平生之福。",vernacular:"「权禄」指化权、化禄等，如九窍通透——聪明灵光、权柄财路开。若「耗」星（大耗破军等）积多叠见，平生福气反被散掉：赚得多留不住。条件是权禄得地且耗星不攻财福。"},{classic:"祿逢梁蔭抱私財益與他人，耗遇貪狼浽淫情於井底。",vernacular:"「禄」逢「天梁」荫：禄本进财，梁主清贵荫护，却也主「给出去」——私财益与他人，像帮人挡事、钱往外流。「耗」遇「贪狼」：耗散叠欲望，情欲易陷井底抬不出。两句都要同宫或三方紧会才立。"},{classic:"貪星入於馬垣易善易惡，惡曜扶同善曜稟性不常。",vernacular:"「贪狼」入「马垣」（驿马所在宫度）：善恶切换快，才艺欲望一起动——易善易恶。「恶曜」扶同「善曜」：羊陀火铃跟昌曲禄权同宫，禀性不常，人前一面人后一面。"},{classic:"財居空亡巴三覽四，文曲旺宮聞一知十。",vernacular:"「财」星（武曲禄存化禄等）居空亡：财源虚，人巴三揽四、抓不准重点。「文曲」旺宫：闻一知十、一点就通。对比成立：财怕空，文喜旺。"},{classic:"暗合廉貞為貪濫之曹吏。",vernacular:"「暗」合「廉贞」：多指巨门化暗、地空等暗曜与廉贞同宫会照。廉贞本主囚与欲望，再叠暗，古诀偏贪滥之曹吏——手里有权却爱揩油。要落官禄命身才显。"},{classic:"身命司數實奸盜之技兒，豬屠之流。",vernacular:"身命主星若按上文「暗合廉贞」一类排布，实象易走奸盗技或屠宰粗活一路——古诀语气重，今看宜作「边缘行当/压力手工」参考，仍须全盘吉凶合参，勿铁断。"},{classic:"善祿定是奇高之藝細巧，伶俐之人。",vernacular:"「善禄」指定星、禄存、化禄等到位得地。成立则奇高之艺、细巧伶俐——手艺精、脑子快。若善禄落陷或被羊铃冲，伶俐变投机，艺不养家。"},{classic:"男居生旺最要得地，女居死絕專看福德。",vernacular:"男命重「生旺得地」：命身主星落旺宫、得垣，根基才立。女命若落「死绝」，专看「福德宫」——福德有梁同禄权，尚可补命弱；福德再空劫，孤苦更显。"},{classic:"命最嫌立於敗位，財源卻怕逢空亡。",vernacular:"「命」最嫌立「败位」（休囚败地）：主星无力，一生难起势。「财源」最怕逢「空亡」：财宫/财星空劫，钱来得虚、留不住。讲盘先查命宫地势，再查财帛是否空。"},{classic:"機刑殺蔭孤星論嗣續之宮加惡星忌耗，不為奇特。",vernacular:"「嗣续宫」（子女）见天机、刑、杀、荫等偏孤之星，再加恶星、忌星、耗星——子女缘薄、教养费力，不为奇特。成立要子女宫同宫/对冲紧会，不是远处一照就断。"},{classic:"陀耗囚之星守父母之纏，決然破祖刑傷。",vernacular:"「陀」「耗」「囚」（陀罗、大耗、廉贞囚等）守父母宫缠度：决然破祖刑伤——祖产难守、父母缘有刑克。若父母宫另有天梁禄存化吉，可减破祖之烈。"},{classic:"兼之童格宜相，根基要察。",vernacular:"还要兼看「童格」（童限）是否宜相，以及命盘「根基」（庙旺、空实、辅煞）。童限恶煞叠见，幼年灾病要细推，不能只看成年格局。"},{classic:"紫微肥滿，天府精神。",vernacular:"补相貌纲领：「紫微」多主肥满厚重；「天府」多主精神足、库态安稳。两星入庙更显；落陷则厚重变滞、精神变虚。"},{classic:"祿存祿主，也應厚重。",vernacular:"「禄存」为禄主，再应厚重——面相体态偏敦厚，财库气质也厚。禄存被冲破时，厚重象在，财口却漏。"},{classic:"日月曲相同梁機昌皆為美俊之姿，乃是清奇之格，上長下短目秀眉清。",vernacular:"太阳、太阴、文曲、天相、天同、天梁、天机、文昌这组，多主美俊清奇：上长下短、目秀眉清。成立于诸星庙旺、少煞；羊陀火铃一多，清奇打折。"},{classic:"貪狼同武曲形小聲高而量大，天同如陀忌肥滿而目渺。",vernacular:"「贪狼」同「武曲」：形小声高而量大——身形不大嗓门气场却足。「天同」如「陀忌」：同宫陀罗、忌星，肥满而目渺——福态变臃、眼神发小。条件是同宫紧叠，不是泛泛三方。"},{classic:"擎羊身體遭傷，若遇火鈴巨暗必生異痣。",vernacular:"「擎羊」主身体遭伤（刀斧手术疤痕等）；再遇火铃、巨门、暗曜，必生异痣——记认明显。看疾厄/相貌宫是否羊火巨暗同会。"},{classic:"又值耗殺定主形丑貌粗。",vernacular:"上句再叠「耗」「杀」（大耗、七杀破军等）：定主形丑貌粗。煞耗交加在相貌命身，仪表受损更重。"},{classic:"若居死絕之限，童子乳哺徒勞其力，老者亦然壽終。",vernacular:"行至「死绝之限」：童子乳哺徒劳——幼限命弱难养；老者亦然寿终——衰限见煞空，寿元告警。今看宜作健康高压期提醒，须流年大限合参，勿单句定生死。"},{classic:"此數中之綱領，乃為星緯之機關。",vernacular:"以上是数中纲领、星纬机关——看相貌性情、庙旺空亡、禄权耗杀、身命父母子女的总钥匙。后面运限浮沉，都要扣回这些条件。"},{classic:"玩味專精，以參玄妙。",vernacular:"玩味专精，才能参到玄妙：不是背口诀，而是每句落到「哪颗星、什么宫、何种会照、现实哪一类事」。"},{classic:"限有高低星尋喜怒，假如運限駁雜終有浮沉。",vernacular:"「限」有高低，「星」有喜怒：大限小限落旺落陷不同；星喜庙旺禄权，怒见煞空冲破。运限驳杂（吉凶混杂、主星无力），终有浮沉——事业情绪起落大。"},{classic:"如逢殺地更要推詳倘，遇空亡必須細察。",vernacular:"逢「杀地」（杀星所在宫限）更要推详；遇「空亡」必须细察——是吉星空（福虚）还是凶星空（凶减）。不可见杀就怕、见空就弃。"},{classic:"精研於此不患不神。",vernacular:"把庙旺、空亡、禄权耗杀、身命限运这套钻透，看盘才不患不「神」——神在条件清楚，不在神秘其词。"}],"xingyuan-lun":[{classic:"紫微帝座以輔弼為佐貳，作數中之主星乃有用之源流。",vernacular:"「紫微帝座」要以「左辅右弼」为佐贰：辅弼同宫或夹拱，帝星才坐得稳。紫微是数中主星、有用源流——命身官禄见紫微+辅弼，格局才有主心骨；光见紫微无辅，贵气打折。"},{classic:"是以南北二斗集而成數，為萬物之靈。",vernacular:"南北二斗（紫微系与天府系等）集而成数，才成人这个「万物之灵」。讲盘：南北斗主星是否得地、互为依辅，决定命盘有没有「成数」的底子。"},{classic:"蓋以水淘溶，則陰陽既濟，水盛陽傷，火盛陰滅，二者不可偏廢，故知其中者，斯為美矣。",vernacular:"用水淘溶，阴阳既济：水盛伤阳、火盛灭阴，二者不可偏废。落到星盘，就是水火星（如文曲贪狼破军廉贞日月等）勿一边独旺无制。能守中和者，斯为美——主星有生有泄、有制有化。"},{classic:"寅乃木之垣，乃三陽交泰之時，草木萌芽之所，至於卯位，其木至旺矣。",vernacular:"「寅」为木之垣：三阳交泰、草木萌芽；到「卯」木至旺。这是后文贪机相巨落寅卯何以庙乐的五行底子——木垣旺地，木系星得力。"},{classic:"貪狼天機是廟樂，故得天相水到寅為之旺相、巨門水得卯為之疏通，木乃土栽培，加以水之澆灌，三方更得文曲水破軍水相會尤妙，又加祿存土極美矣。",vernacular:"贪狼、天机在寅卯一带庙乐（得地舒服）；天相水到寅为旺相，巨门水到卯能疏通。木要土栽培、水浇灌——三方再会文曲水、破军水更妙，再加禄存土极美。成立：寅卯命身见贪机，三方文曲破军禄存来会，木局活水通，才艺财禄都好看。"},{classic:"巨門水到丑，天梁土到未，陀羅金到於四墓之所，苟或得擎羊金相會，以土為金墓，則金通不凝。",vernacular:"巨门水到丑、天梁土到未、陀罗金到四墓：墓库之地金本易凝。若再得擎羊金相会——土为金墓——金反能通、不凝死。条件是丑未墓度见巨梁陀，又有羊会，煞金流通反成用。"},{classic:"加以天府土天同金以生之，是為金趁土肥，順其德以生成。",vernacular:"再加天府土、天同金来生：金趁土肥，顺德生成。府土厚、同金贴，墓中金有生有泄，现实上财库可立、不至于死煞凝滞。"},{classic:"已午乃火位，巳為水土所絕之地，更午垣之火，餘氣流於巳，水則倒流，火氣逆焰，必歸於巳。",vernacular:"巳午皆火位；巳又为水土所绝。午火余气流巳：水倒流、火气逆焰，必归于巳。讲盘：巳宫见火系星（廉贞火铃等）火力特猛，水土星落巳易「绝」——用神要防过燥。"},{classic:"午屬火德，能生於已絕之土，所以廉貞火居焉。",vernacular:"午属火德，能生已绝之土，故「廉贞」火居焉。廉贞在午得火旺，囚火有根；再无羊铃狂催，刚烈可为权柄。"},{classic:"至於午火，旺照離明洞徹表裡，而文曲水入廟。",vernacular:"午火旺照、离明洞彻表里时，「文曲」水入庙——火旺处水星反得「照亮」而不灭。条件是文曲在午得见，主文采巧思外发；若文曲再叠巨暗忌，巧思变口舌是非。"},{classic:"若會紫府，則魁星拱斗，加以天機木貪狼木，謂之變景，愈加奇特。",vernacular:"再会紫微、天府，为「魁星拱斗」；再加天机木、贪狼木，谓之「变景」，愈加奇特。成立：午火局有紫府朝拱+机贪木来会，格局花样多、功名才艺可跳阶，非平凡火燥盘。"},{classic:"申酉金乃西方太白之氣，武曲居申而好生，擎羊在酉而用殺，加以巨門祿存陀羅而助之愈急，須得逆行逢善化惡是為妙用。",vernacular:"申酉金为西方太白之气：「武曲」居申好生（金生发），「擎羊」在酉用杀（金刑锐）。再加巨门、禄存、陀罗助之愈急——金局又生又刑又催。须逆行逢善（昌曲魁钺化禄等）化恶，方为妙用；否则刚金过锐，破耗刑伤重。"},{classic:"亥水屬文曲破軍之要地，乃文明清高之士，萬里派源之潔，如大川之澤不為焦枯。",vernacular:"亥水是文曲、破军要地：文明清高、万里派源之洁，如大川泽不为焦枯。文曲破军落亥得水旺，才思波澜而源不断——适合文职远略；无煞空冲破才真「清高不焦」。"},{classic:"居於亥位將入天河，是故為妙。",vernacular:"居亥位将入天河，故为妙：亥为天门水位，水星入亥如进天河，气势通畅。命身或文曲破军坐亥，格局偏清流动。"},{classic:"破軍水於子旺之鄉，如巨海之浪淜洶湧，可遠觀而不可近倚，破軍是以居焉，若四墓之克，充其瀰漫，必得武曲之金使其源流不絕方為妙矣。",vernacular:"破军水在「子」旺乡：如巨海浪汹涌，可远观不可近倚——破军力猛难贴身驯。若四墓来克，水势弥漫；必得武曲之金使源流不绝，方妙。条件：破军在子+武曲来通关，变动有财可托；无武曲则破浪难收。"},{classic:"其餘諸星以身命推之，無施不可至玄至妙者矣。",vernacular:"其余诸星以身命推之：先定身命主星五行垣局，再套上文寅卯木、巳午火、申酉金、亥子水之理，无施不可，至玄至妙。讲盘总诀——星性+落宫五行+生克通关，三件同时成立才下断。"}],"zengbu-taiwei-fu":[{classic:"前後兩凶神為兩鄰，加會尚可撐持，同室與謀最難堤防。",vernacular:"「前后两凶神」指夹命身的羊陀火铃等煞：只做「两邻」（邻宫加会），人尚可撑持；一旦「同室与谋」（同宫紧守），最难堤防——内心外事一起被煞催。讲盘先分：煞在邻宫可化，同宫要重看。"},{classic:"片火焚天馬，重羊逐祿存。",vernacular:"「片火」焚「天马」：一点火星同宫/紧会天马，马力被烧——走动反成奔波灾耗。「重羊」逐「禄存」：两重擎羊冲破禄存，禄被赶走——财库守不住。条件是火会马、羊冲禄，不是远处虚照。"},{classic:"劫空親戚無常，權祿行藏靡定。",vernacular:"见「劫空」（地劫天空）：亲戚缘无常——亲友帮不上或聚散不定。见「权禄」（化权化禄）：行藏靡定——进退起伏大，权财机会多却难钉死一条路。两句都落在命身或相关宫同会才显。"},{classic:"君子哉魁鉞，小人哉羊鈴。",vernacular:"「君子哉魁钺」：天魁天钺主贵人君子象；「小人哉羊铃」：擎羊、火星、铃星主小人冲撞。盘里君子小人常并存——看谁贴命身、谁在闲宫，定谁说了算。"},{classic:"兇不皆兇，吉無純吉。",vernacular:"凶不皆凶、吉无纯吉：凶星得制化、落闲宫可变权柄；吉星落陷被冲破反藏凶。讲盘忌见煞就判死、见禄就说发。"},{classic:"主強賓弱可保無虞，主弱賓強兇危立見。",vernacular:"「主」指命身主星，「宾」指加会之星。主强宾弱可保无虞——主星庙旺，煞只是客；主弱宾强，凶危立见——主星无力，煞宾反客为主。先比主宾力量再断。"},{classic:"主賓得失兩相宜，運限命身當互見。",vernacular:"主宾得失要两相宜：主星得地、宾星有用，才成格。运限与命身当互见——本命吉而限凶，仍有坎；本命平而限吉，可发一程。单看命或单看限都偏。"},{classic:"身命最嫌羊陀七殺，遇之未免為兇。",vernacular:"身命最嫌「羊陀七杀」同宫紧守：刑忌杀气贴身，未免为凶——外伤手术、冲撞破败、压力岗。若有昌曲魁钺紫府同解，凶可减半。"},{classic:"二限甚忌貪破巨廉，逢之定然作禍。",vernacular:"「二限」（大限小限）甚忌贪狼、破军、巨门、廉贞来守：欲望、变动、是非、囚气叠在限上，定然作祸——感情口舌、破耗官司一类。限上见此四星，要查有无禄权辅弼化解。"},{classic:"命運魁昌常得貴，限逢紫府定財多。",vernacular:"命运见「魁」「昌」（天魁文昌）：常得贵——贵人文书功名路。「限」逢「紫府」：定财多——库星临限，进财积蓄期。条件是魁昌紫府得地，非空陷。"},{classic:"凡觀女人之命，先觀夫子二宮。",vernacular:"观女命，先观「夫子二宫」（夫妻宫、子女宫）：婚姻与子嗣是女命古诀第一刀。两宫主星庙旺有辅，情福较稳；两宫见煞空，先谈风波再谈福。"},{classic:"若值殺星定三嫁而心不足，或逢羊孛雖啼哭而淚不幹。",vernacular:"夫子宫「值杀星」（七杀羊陀火铃等）：定三嫁而心不足——感情多段仍难安（古语气重，今作关系波折多看）。「羊孛」会照：啼哭泪不干——悲苦情绪反复。须同宫/对冲才立。"},{classic:"若觀男命始以福財為主，再審遷移何如。",vernacular:"观男命，始以「福」「财」（福德、财帛）为主，再审「迁移」何如：男人古诀重财福与外出发展。福财得禄权，迁移有马不空，路子才宽。"},{classic:"二限相因，吉凶同斷。",vernacular:"「二限」相因，吉凶同断：大限定阶段，小限/流年触发。大限吉小限凶，吉中有刺；大限凶小限吉，苦中有缝。要叠看。"},{classic:"限逢吉曜平生動用和諧，命坐兇鄉一世求謀齟齬。",vernacular:"限逢吉曜：平生动用和谐——做事协作顺。命坐凶乡：一世求谋龃龉——本命煞空重，谋事常卡壳。本命与限要对照：限吉可救命凶一程，救不了根基全翻。"},{classic:"廉祿臨身女得純陰貞潔之德，同梁守命男得陽純中正之心。",vernacular:"「廉禄」临身：廉贞+禄存贴身，女得纯阴贞洁之德——情欲有收、财德相守。「同梁」守命：天同天梁坐命，男得阳纯中正之心——厚道有担当。成立要两星同宫得地，无贪火狂催。"},{classic:"君子命中亦有羊陀火鈴，小人命內豈無科祿權星。",vernacular:"君子命中亦有羊陀火铃，小人命内岂无科禄权星——吉凶星人人可有。差别在：君子盘煞在闲宫或有制，小人盘吉星落陷被冲。看位置与制化，不看「有没有煞」。"},{classic:"要看得垣失垣，專論入廟失廟。",vernacular:"要看「得垣失垣」，专论「入庙失庙」：同一颗星，庙旺是贵是福，失陷是虚是祸。紫微贪狼巨门等尤甚——先查落宫庙陷，再谈吉凶名词。"},{classic:"若論小兒，詳推童限。",vernacular:"若论小儿，详推「童限」：幼年大限/童限见煞空死绝，灾病养育要当心；童限平稳，才谈后天教养。小儿不先看成年官禄。"},{classic:"小兒命坐兇鄉，二五歲必然殀折，更有限逢惡殺，五七歲必主災亡。",vernacular:"小儿命坐凶乡：二五岁易夭折之警；限再逢恶杀：五七岁必主灾亡——古诀极重，今作高风险健康期提醒。须合参疾厄、元气主星，勿单句定生死。"},{classic:"文昌文曲天魁秀，不讀詩書也可人。",vernacular:"文昌文曲天魁带「秀」：不读诗书也可人——气质讨喜、言谈得体。昌曲魁落命身相貌，仪表口才先加分；若再得科权，才谈功名实收。"},{classic:"多學少成只為擎羊逢劫殺，為人好訟蓋因太歲遇官符。",vernacular:"多学少成：只为擎羊逢劫杀——羊+地劫等破学习专注，学得多成得少。为人好讼：盖因太岁遇官符——流年太岁叠官符，口舌官司易起。一属本命学习宫，一属流年触发。"},{classic:"命之理微熟察星辰之變化，數之理遠細詳格局之興衰。",vernacular:"命理微，熟察星辰变化；数理远，细详格局兴衰。变化=大限流年星动；兴衰=庙旺空陷主宾强弱。两者都做完，才算「熟察细详」。"},{classic:"北極加兇殺為道為僧，羊陀遇惡星為奴為僕。",vernacular:"「北极」（紫微）加凶杀：为道为僧——清修孤克象，或职业近宗教出世。「羊陀」遇恶星：为奴为仆——受制于人、身不由己。今看可作体制外清苦/打工受制参考，勿刻板职业铁断。"},{classic:"如武破廉貪固深謀而貴顯，加羊陀空劫反小志以孤寒。",vernacular:"武破廉贪：本可深谋贵显——杀破狼廉有权谋胆色。加羊陀空劫：反小志孤寒——煞空一叠，志气被削、路子变窄。同一组主星，有无煞空，贵贱两重天。"},{classic:"限輔星旺限雖弱而不弱，命臨吉地命雖兇而不兇。",vernacular:"限有辅星且旺：限虽弱而不弱——辅弼魁钺托着，弱限也能过。命临吉地：命虽凶而不凶——命宫地势好、吉星坐实，本命带煞也可化。看「托」与「地」，不看表面强弱标签。"},{classic:"斷橋截路大小難行，卯酉二空聰明發福。",vernacular:"「断桥截路」（如某些空亡阻隔格局）：大小难行——求谋卡关、贵人断档。「卯酉二空」：反而聪明发福——空在卯酉有时反主灵巧（古特殊法）。空亡要分格局，不是见空皆凶。"},{classic:"命身遇紫府迭積金銀，二主逢劫空衣食不足。",vernacular:"命身遇紫府：迭积金银——帝库坐身命，积财有底。「二主」逢劫空：衣食不足——命身两主星落天空地劫，福禄虚，手头紧。紫府实与劫空虚，对照极分明。"},{classic:"謀而不遂，命限遇入擎羊，東作西成，限身遭逢輔相",vernacular:"谋而不遂：命限遇入擎羊——羊刃刑碍，计划常打折。「东作西成」：限身遭逢辅相（左辅右弼天相）——有辅有印，做事有成。羊阻辅成，限上见谁跟谁走。"},{classic:"科權祿拱，定為扳桂之高人，空劫羊鈴，作九流之術士。",vernacular:"科权禄拱：定为扳桂高人——化科化权化禄来拱命身官禄，功名登科象。「空劫羊铃」：作九流术士——空亡煞曜贴身，偏技艺旁门、不走正途科甲。今看可作专业技能/自由职业参考。"},{classic:"情懷暢舒昌曲命身，詭詐浮虛羊陀陷地。",vernacular:"情怀畅舒：昌曲在命身——文星开，心情表达顺。「诡诈浮虚」：羊陀陷地——刑忌落陷，人显得矫、事显得虚。文星实则畅，煞陷则虚。"},{classic:"天機天梁擎羊會，早有刑而晚見孤。",vernacular:"天机天梁会擎羊：早有刑而晚见孤——早年刑克父母六亲，晚景清孤。机梁本清，一叠羊刃，清变成孤刑。看父母疾厄早限、夫妻晚限是否同验。"},{classic:"貪狼武曲廉貞逢，少受貧而後享福。",vernacular:"贪狼武曲廉贞逢：少受贫而后享福——早年欲望冲、财未稳，中晚有武廉成势才享福。三星同会要有禄权托，否则「后福」不来。"},{classic:"此皆斗數之奧妙，學者宜熟思之。",vernacular:"此皆斗数奥妙，学者宜熟思：每句落到星、宫、会照、现实，反复对照命例，勿背诵了事。"}],"zhuxing-wenda":[{classic:"問紫微所主若何？",vernacular:"问：「紫微」主要管什么？——帝座总纲、人生主宰这一路。"},{classic:"答曰：紫微屬土，乃中天之尊星為帝座，主掌造化樞機，人生主宰。",vernacular:"答：紫微属土，是中天最尊的「帝座」。书上觉得它掌造化枢纽，像人命的总开关——格局高低、贵气有无，常先看帝星落哪、得不得地。"},{classic:"仗五行育萬物，以人命為之立定數。",vernacular:"它借五行养万物，也据此给人定下命数框架：十二宫安星之后，紫微一落，人生总调子往往就定了大半。"},{classic:"安星纏各根所司，處年數常掌爵祿。",vernacular:"各星按职责落位缠度；到了流年、大限，紫微也常管爵禄官位——限步逢帝，权位、名分容易有动静。"},{classic:"諸宮降福能消百惡。",vernacular:"紫微落哪一宫，往往都能帮着添福、化解不少恶曜的冲克——前提是它本身不太空太陷。"},{classic:"須看三臺，蓋紫微守命是中臺，前一位是上臺，後一位是下臺。",vernacular:"还得看「三台」：紫微守命算中台，前一位上台、后一位下台。三台齐会，才像有班底的帝座；光见紫微无台辅，贵气虚。"},{classic:"俱看在廟旺之鄉否，有何吉凶之守照。",vernacular:"都要问：落在庙旺之乡没有？旁边有哪些吉星、凶星守照？庙旺=星有力舒服；陷空=无力虚飘。条件不清勿下断。"},{classic:"如廟旺化吉甚妙，陷又化兇甚兇。",vernacular:"庙旺再化吉（化禄权科等），往往很妙；落陷又化凶（化忌叠煞），压力就大——吉凶差一整档。"},{classic:"吉限不為美，兇限則兇也。",vernacular:"即便走到偏吉的大限，也不算十全十美；走到偏凶的大限，就更容易难过——帝星陷局，限运难翻。"},{classic:"人之身命若值祿存同宮，日月三合相照，貴不可言。",vernacular:"身宫、命宫若与「禄存」同宫，又有太阳、太阴三合相照：禄主财库，日月主贵气光华——书上觉得贵不可言。成立要同宫/三合紧会，不是远处一照。"},{classic:"無輔弼同行則為孤君，雖美玉不足。",vernacular:"若无「左辅」「右弼」同行（同宫或夹拱），就是「孤君」——帝星再好看也缺点东西，贵人助力虚、决策常孤独。"},{classic:"更與諸殺同宮，或諸兇合照，君子在野，小人在位。",vernacular:"再与诸杀（羊陀火铃等）同宫，或被诸凶合照：君子在野、小人在位——权柄旁落，正人难伸，处境别扭。"},{classic:"主人奸詐假善，平生惡積。",vernacular:"这种组合下，人往往容易显得奸诈、假好心，一辈子也易积下不好的习气——帝座被煞污，德不配位之象。"},{classic:"與囚同居，無左右相佐，定為胥吏。",vernacular:"与「囚」星（廉贞）同宫，又无左右相佐：书上多半往胥吏、办事小吏看——有权柄象却落不到高位，只能押文书跑腿。"},{classic:"如落疾厄、兄弟、奴僕、相貌、四陷宮，主人勞碌作事無成，雖得助亦不為福。",vernacular:"紫微若落疾厄、兄弟、奴仆、相貌这类偏弱/四陷宫：人多半劳碌、事难成；就算有人帮忙，也不算真福——帝星坐闲宫，力泄。"},{classic:"更宜詳細宮度，應究星纏之論。",vernacular:"还得细看宫位度数，并把同宫、同缠的星一块参详——同度紧会力大，远会力轻，不可一概而论。"},{classic:"若居官祿身命，三宮最要左右守衛。",vernacular:"紫微守命宫或官禄宫时，最要左辅、右弼同宫或拱照来护——帝+左右守卫，才坐得稳；无辅则孤。"},{classic:"天相祿馬交馳，不落空亡，更坐生鄉，可為貴論。",vernacular:"若有「天相」、禄马交驰照应，又不落空亡（天空地劫等），再坐生旺之地，才好往贵上看。空亡一见，贵气打折。"},{classic:"如魁鉞三臺星會吉星。",vernacular:"若「天魁」「天钺」、三台再碰上吉星（禄权昌曲等），"},{classic:"則三臺八座矣。",vernacular:"书上就觉得够得上「三台八座」那种贵气——朝班齐全、位份实。"},{classic:"帝會文昌拱照，又得美限扶，必文選之職。",vernacular:"帝座有「文昌」拱照，大限又美：多半往文职、选拔类差事看——文贵成立于昌星庙旺+限扶。"},{classic:"帝降七殺為權，有吉同位，則帝相有氣。",vernacular:"紫微能压住「七杀」、化成权势；旁边再有吉星同宫，帝、相这一路更有气——杀为权柄，有吉托才用得住。"},{classic:"諸吉鹹集，作武官之職。",vernacular:"吉星扎堆时，书上更常往武职看——帝杀有气+诸吉集，威权外放。"},{classic:"財帛田宅有左右守衛，又與武曲太陰同度，不見惡星，必為財賦之官。",vernacular:"财帛、田宅有左右守卫，又与「武曲」「太阴」同度，不见恶星：像管钱粮的官——财库有辅、阴武贴身，钱权两实。"},{classic:"更與武曲祿存同宮，身命中尤為奇特。",vernacular:"再与武曲、禄存同宫，落在身命里就更特别：武财+禄库贴帝，财官格局往往跳一档。"},{classic:"男女宮得祥佐吉星，主生貴子。",vernacular:"子女宫得祥佐吉星（辅弼昌曲禄权等）：书上觉得容易出贵子——条件是子女宫庙旺有吉，非空谈。"},{classic:"若獨守無相佐，則子息孤單。",vernacular:"若紫微独守子女宫、无相佐：子息缘往往偏孤单——帝孤则嗣单。"},{classic:"妻宮會吉，得貴美夫婦諧老，亦要無破殺。",vernacular:"夫妻宫会吉、又得贵美星：夫妻多半能和美；但最好别被「破军」「七杀」冲破——妻宫一破，谐老难。"},{classic:"遷移雖是強宮，更要相佐，有吉星照命，則因人之貴。",vernacular:"紫微在迁移宫算强宫，可还是要有辅佐；有吉星照命，容易因别人而得贵——外出依人、借势成名。"},{classic:"福德在男為陷地，女為廟樂，逢吉則吉，逢兇則兇。",vernacular:"福德宫对男命多半算陷地，女命反而庙乐（舒服）；仍是逢吉偏吉、逢凶偏凶——福德看性别地势，再看吉凶会照。"},{classic:"希夷先生曰：紫微為帝座，在諸宮能降福消災，解諸星之惡虛。",vernacular:"希夷先生说：紫微是帝座，落各宫常能降福消灾，把别的星带来的凶恶、虚耗化解一些——前提是帝星不太陷空。"},{classic:"能制火鈴為善，能降七殺為權。",vernacular:"它能压住「火星」「铃星」往好处走；也能把「七杀」压成权——火铃制则突发减，杀降则威可用。"},{classic:"若得府相左右昌曲吉集，無有不貴。",vernacular:"若「天府」「天相」、左右、昌曲这些吉星凑齐：贵气几乎少不了——府相辅文齐会帝座，格局成数。"},{classic:"不然亦主鉅富。",vernacular:"就算不到贵，也常往大富看——库星禄权足，钱可堆。"},{classic:"縱有四殺衝破亦作中局。",vernacular:"就算被四杀（羊陀火铃）冲破，也多半还能落在中等格局——帝座有底气，煞冲难全毁。"},{classic:"若遇破軍辰戌丑未，主為臣不忠，為子不孝之論。",vernacular:"若遇「破军」又落辰戌丑未：书上有「为臣不忠、为子不孝」一类偏苛说法——破军在库墓冲帝，忠孝象损；今宜软看，勿死套。"},{classic:"女命逢之作貴婦斷。",vernacular:"女命碰到这类组合，书上多半往贵妇断——帝座女命本易近贵。"},{classic:"加殺衝破，亦作平常不為下賤。",vernacular:"再加杀冲破，也多半只是平常命，不一定落到下贱——帝座有底，煞破降格不至贱。"},{classic:"紫微原屬土，官祿宮主星，有相為有用，無相為孤君，諸宮皆降福，逢兇福自申，",vernacular:"紫微本属土，是官禄宫主星；有「天相」帮忙才好用，没天相就像孤君。它落各宫常能降福，碰上凶象，福气也还能自己撑一撑——有相为用，无相贵虚。"},{classic:"文昌發科甲，文曲受皇恩，僧道有師號，快樂度春秋，吉星皆拱照，為吏協公平，",vernacular:"遇「文昌」书上觉得容易科甲；遇「文曲」容易得上面赏识。僧道可得师号，日子偏安乐。吉星拱照，做吏也容易办事公道——文曜贴帝，名位清。"},{classic:"女人會帝座，遇吉事貴人，若與桃花會，飄蕩落風塵，擎羊火鈴聚，鼠竊狗偷群，",vernacular:"女命会帝座，遇吉往往近贵人；若再与桃花（贪狼等）会，容易飘荡、陷风尘。「擎羊」「火星」「铃星」扎堆，更常往鼠窃狗偷那一路偏——古语气重，今作欲望失控/边缘行当提醒。"},{classic:"三方有吉拱，方作貴人評，若還無輔弼，諸惡共飲凌，帝為無道主，考究要知因，",vernacular:"三方有吉星拱着，才好往贵人评；若无左辅右弼，诸恶一起压上来，帝座也会变成「无道之主」——细看时得把原因理清：是无辅、是煞冲，还是化忌叠。"},{classic:"二限若遇帝，喜氣自然新。",vernacular:"大小二限碰上紫微，喜气往往会重新起来一波——限步逢帝，运势有抬头象。"},{classic:"玉蟾先生曰：紫微乃中天星主，為眾星之樞紐，為造化也。",vernacular:"玉蟾先生说：紫微是中天星主，像众星的枢纽，关乎造化运转——盘有帝座，才有主心骨。"},{classic:"大抵為人命之主宰，掌五行育萬物，各有所司。",vernacular:"大体可看成人命的主宰，管着五行养万物，各星各有分工——讲盘先定帝座，再论从星。"},{classic:"以左輔右弼為相，以天相昌曲為從，以魁鉞為傳令，以日月為分司，以祿馬為掌爵之司，以天府為帑藏之主，身命逢之，不勝其吉。",vernacular:"左辅右弼像宰相，天相、昌曲像跟班，魁钺像传令，日月像分管，禄马管爵禄，天府管库藏；身命碰上这些，吉利会很足——班底齐全，帝座才真贵。"},{classic:"如遇四殺（羊陀火鈴）、劫空衝破，定是僧道。",vernacular:"若碰上四杀（擎羊、陀罗、火星、铃星）再加劫空冲破：书上多半往僧道看——帝座被煞空冲散，尘缘难恋，清修象显。"},{classic:"此星在命，為人厚重，面紫色，專作吉斷。",vernacular:"这星落命宫，人往往厚重，面色偏紫，断法上专往吉上看——帝星入命，气场稳、少飘。"},{classic:"問天機所主如何？",vernacular:"问：「天机」主要管什么？——心思谋划、益算善星这一路。"},{classic:"答曰：天機屬木，南斗第三益算之善星也。",vernacular:"答：天机属木，是南斗第三颗星，书上叫「益算」的善星——主聪明、机变、筹划。"},{classic:"後化氣曰善，又得地合之行事，解諸星之順逆。",vernacular:"化气叫「善」：落得地、配合得好，就能把别的星的顺逆理顺一些——机星得垣，盘面思路通。"},{classic:"定數於人命，逢諸吉鹹集，則萬事皆善。",vernacular:"它也参与定人命的数；吉星凑齐时，万事往往都偏顺利——机+诸吉，事事见善象。"},{classic:"勤於禮佛，敬乎六親，利於林泉，宜於僧道。",vernacular:"人多半勤于礼佛、敬重六亲，适合山林清静，也宜僧道一路——机星清则心向善、喜静修。"},{classic:"無惡虐不仁之心，有靈機應變之志。",vernacular:"心里少恶虐不仁，脑子灵，遇事会变通——善星本性：机巧而不狠。"},{classic:"淵魚察見，作事有方。",vernacular:"能把隐微处看明白，做事也比较有章法——天机入用，洞察+条理同显。"},{classic:"女命遇之為福，逢吉為吉，遇兇為兇。",vernacular:"女命遇天机多半算有福；仍是逢吉偏吉、逢凶偏凶——机星女命看会照，勿一见就断福。"},{classic:"或守於身，更逢天梁，必有高藝隨身。",vernacular:"若守在身宫，再逢「天梁」：往往身怀一技之长——机梁同宫，艺能随身，清贵可立。"},{classic:"習者宜詳玩之。",vernacular:"学命的人最好把这些细细品一品——机星变化多，要落宫落会才准。"},{classic:"希夷先生曰：天機益壽之星，若守身命，主人異常。",vernacular:"希夷先生说：天机是益寿之星，守身命时人往往显得不凡——机入身命，聪明异常、寿元有益象。"},{classic:"與天梁、左右、昌曲交會，文為清顯，武為忠良。",vernacular:"与天梁、左右、昌曲交会：文职偏清显，武职偏忠良——机梁辅文齐会，文武都可走清路。"},{classic:"若居陷地，四殺衝破，是為下局，當為僧道之清閒。",vernacular:"若落陷地，又被四杀冲破：格局偏下，书上常往僧道清闲命看——机陷+煞冲，尘世难发，清修反安。"},{classic:"凡入二限逢之，興家創業更改。",vernacular:"大小二限碰上它，多半主兴家创业，生活也容易有改动——限逢天机，变动创业象显。"},{classic:"女人吉星拱照，主旺夫益子。",vernacular:"女命得吉星拱照，书上觉得容易旺夫益子——机+吉拱，家内助力。"},{classic:"有權祿則為貴婦。",vernacular:"再有权禄（化权化禄等），就可往贵妇看——机得权禄，位份起。"},{classic:"落局羊陀火忌衝破，主下賤殘疾刑剋。",vernacular:"落局又被擎羊、陀罗、火星、化忌冲破：书上说容易下贱、残疾、刑克——古语气重，宜软看作健康刑伤/处境困顿提醒。"},{classic:"天機兄弟主，南斗正曜星，作事有操略，稟性最高明，所為最好尚，亦可作群英",vernacular:"天机是兄弟宫主星、南斗正曜：做事有谋略，性情偏高明，追求也高，甚至能领着一群人——机主智谋，群英可聚。"},{classic:"會吉主享福，入格居翰林，巨門同一位，武職壓邊庭，亦要權逢殺，方可立功名",vernacular:"会吉多半享福，入格可往翰林一类文职看；与「巨门」同宫，偏武职压边庭——还得权星逢杀，才容易立功名。条件：机巨+权杀同会，边功才立。"},{classic:"天梁星同位，定作道與僧，女人若逢此，性巧必淫奔，天同與昌曲，聚拱主華榮",vernacular:"与「天梁」同宫，书上多半往道、僧看；女命逢此，性巧却也容易因情欲出事。天同与昌曲聚拱，则偏华荣——机梁清修，同昌华贵，两路分看。"},{classic:"辰戌子午地，入廟有功名，若在寅卯位，四殺並破軍，羊陀及火玲，若與諸殺會，",vernacular:"落在辰戌子午入庙，容易有功名；若在寅卯，又见四杀、破军、羊陀火铃这些恶会——机在寅卯本旺，叠煞则善变凶。"},{classic:"災患有虛驚，武暗廉破會，兩目少光明，二限臨此宿，事必有變更。",vernacular:"灾患多半虚惊居多。武曲、巨门（暗）、廉贞、破军会在一起，眼睛容易出问题。二限临这颗星，事情也往往要变——武暗廉破攻目，限机主变更。"},{classic:"玉蟾先生曰：天機南斗善星，故化氣曰善。",vernacular:"玉蟾先生说：天机是南斗善星，所以化气叫「善」——善=益算、顺理、化解拗劲。"},{classic:"佐帝令以行事，解諸兇之逆節。",vernacular:"它帮着帝座发令做事，也能把诸凶的拗劲化解一些——机佐紫微，煞逆可解。"},{classic:"定數於人命之中，若逢吉聚則為富貴，若逢衝殺亦必好善。",vernacular:"落在人命里：吉星聚会往往偏富贵；就算被冲杀，人也多半还是好善——机性本善，煞冲难尽改其心。"},{classic:"孝義六親，勤於禮佛，無不仁不義之為，有靈通變達之志。",vernacular:"对六亲孝义，勤于礼佛；少做不仁不义的事，脑子灵通、会变通——善星落地：孝悌+机变。"},{classic:"女命逢之，多主福壽。",vernacular:"女命逢它，多半主福寿——机入女命，福寿象偏显。"},{classic:"其在廟旺有力，陷地無力。",vernacular:"落庙旺就有力，落陷地就乏力——讲盘先问天机得垣否，再谈善用。"},{classic:"問太陽所主若何？",vernacular:"问：「太阳」主要管什么？——日精贵气、官禄父星/夫星这一路。"},{classic:"答曰：太陽星屬火，日之精也。",vernacular:"答：太阳属火，是日之精——主光明、贵气、权柄外发。"},{classic:"乃造化之表儀，在數主人有貴氣，能為文為武。",vernacular:"像造化的仪表；在斗数里主人常有贵气，能文也能武——日入用，名位光华开。"},{classic:"諸吉集則降禎祥，處黑星則勞心費力。",vernacular:"吉星凑齐就容易降祥；落到黑星（羊陀火铃忌等）堆里，就容易劳心费力——日喜吉会，忌煞缠。"},{classic:"若隨身命之中，居於廟樂之地。",vernacular:"若守在身宫、命宫，又落在庙乐（有辉得地）的位置，"},{classic:"為數中之至曜，乃官祿之樞機。",vernacular:"那就是数里很关键的曜，也是官禄的枢纽——身命日旺，官禄总开关亮。"},{classic:"後化貴化祿，最宜在官祿宮。",vernacular:"太阳最宜落在官禄宫，书上说能化贵、化禄——日在官禄，贵禄双开。"},{classic:"男作父星，女為夫主。",vernacular:"男命当父星看，女命当夫星看——父/夫之光，皆看太阳有辉否。"},{classic:"命逢諸吉守照，更得太陰同照，富貴全美。",vernacular:"命宫有诸吉守照，再得「太阴」同照：日月并明，富贵往往比较圆满。成立要日月同照/三合，非单见一日。"},{classic:"若身居之，逢吉聚，則可在貴人門下客，否則公卿走卒。",vernacular:"身宫逢它又吉星聚会，可做贵人门下客；否则也容易在公卿身边当差跑腿——身日有吉则近贵，无吉则走卒。"},{classic:"夫妻亦為強宮，男為諸吉聚，可因妻得貴。",vernacular:"夫妻宫对太阳也算强宫；男命吉星聚会，容易因妻得贵——夫宫日+吉，妻助功名。"},{classic:"陷地加殺，傷妻不吉。",vernacular:"落陷再加杀（羊火铃等）：对妻子不利，不太吉——日陷杀攻妻宫，妻缘刑克。"},{classic:"男女宮得八座，加吉星在廟旺地，主生貴子，權柄不小。",vernacular:"太阳在子女宫，庙旺又见吉星（八座辅弼等）：容易出贵子，权柄也不小——子女日旺有吉，嗣贵有权。"},{classic:"若財帛宮於旺地，會吉相助，不怕巨門纏，其富貴綿遠矣！",vernacular:"太阳在财帛得旺又有吉星帮忙，就算见「巨门」，书上仍觉得富贵能拖得比较久——日旺财宫，巨门缠也不易破尽。"},{classic:"若旺相無空劫，一生主富。",vernacular:"旺相又没有空亡、地劫：一生多半偏富——日旺无空劫，财光实。"},{classic:"居田宅，得祖父蔭澤。",vernacular:"太阳在田宅宫：容易得祖父的荫泽——日主父祖之光，田宅见日有祖荫象。"},{classic:"若左右諸吉星皆至，大小二限俱到，必有驟興之喜。",vernacular:"左辅右弼等吉星都到，大小二限也到：往往有骤然兴起的喜事——限日+辅弼齐至，骤兴。"},{classic:"若限不扶，不可以三合論議，恐應小差。",vernacular:"若大限不扶，就别单靠三合硬断，怕应验会有点偏差——限不扶则三合力虚，勿铁断。"},{classic:"女命逢之，限旺亦可共享。",vernacular:"女命逢它，大限旺时也能一起享到福——女命日+限旺，共享贵气。"},{classic:"與鈴刑忌集限，目下有憂，或生克父母。",vernacular:"限上跟铃星、刑、忌凑在一起：眼前容易有忧，也可能牵涉父母的生克——铃刑忌集限，忧在目前、父缘紧。"},{classic:"刑殺聚限，有傷官之憂，常人有官非之撓。",vernacular:"刑杀聚在限上：官场中人怕伤官位；普通人则容易有官非麻烦——刑杀催限，官灾分流看身份。"},{classic:"與羊陀聚則有疾病，與火鈴合其苦楚不少。",vernacular:"跟擎羊、陀罗聚，容易有病；跟火星、铃星合，苦楚往往不少——羊陀主疾，火铃主突发苦。"},{classic:"推而至此，禍福瞭然。",vernacular:"推到这一步，祸福就比较清楚了——日之庙陷、吉煞、限扶，一层层合参即明。"},{classic:"遷移宮其福與身命不同，難招祖業，移根換葉，出祖為家。",vernacular:"太阳在迁移宫，福气跟守命不一样：难守祖业，多半要移根换叶、外出成家——迁日主动、离祖。"},{classic:"限步逢之，決要動移。",vernacular:"限步碰上它，多半真得动一动、换地方——限逢迁日，动移必应。"},{classic:"女命逢之不吉，若福德宮有相佐，招賢明之夫。",vernacular:"女命逢它不太吉；若福德宫有人相佐，还能招到贤明的丈夫——女命日失辉偏克夫，福德有佐可补。"},{classic:"父母宮男子單作父星，有輝則吉，無輝克父。",vernacular:"太阳在父母宫，男命当父星：有辉偏吉，失辉书上说容易克父——父宫日有辉则父安，无辉刑克。"},{classic:"希夷先生曰：太陽星周天歷度輸轉無窮。",vernacular:"希夷先生说：太阳绕着周天度数转，运转不停——日行十二宫，辉陷随宫变。"},{classic:"喜輔弼而佐君象，以祿存而助福。",vernacular:"喜欢左辅右弼来帮衬君象，也喜欢「禄存」来助福——辅弼佐日，禄存添财福。"},{classic:"所忌者，巨暗遭逢。",vernacular:"最忌跟「巨门」、化忌撞上——巨暗遮日，贵气被掩。"},{classic:"所樂者，太陰相旺。",vernacular:"最乐意「太阴」也旺、互相帮衬——日月并明，阴阳既济。"},{classic:"諸宮會吉則吉、黑道遇之則勞。",vernacular:"各宫会吉就偏吉；落到黑道（煞忌空劫）上就容易劳碌——日逢吉则祥，逢黑则劳。"},{classic:"守人身命，主人忠鯁，不較是非。",vernacular:"守在身宫、命宫：人往往忠直耿介，不太跟别人计较是非——日入身命，性刚正少纠缠。"},{classic:"若居廟旺，化祿化權，允為貴論。",vernacular:"落庙旺又化禄、化权，才好往贵上看——日旺+权禄，贵论成立。"},{classic:"若得左右、昌曲、魁鉞三合拱照財官二宮，富貴極品。",vernacular:"再得左右、昌曲、魁钺三合拱照财帛、官禄二宫：富贵往往顶格——辅文魁钺拱财官，极品象。"},{classic:"加四殺，亦主飽暖，僧道有師號。",vernacular:"就算加四杀，也多半还能吃饱穿暖；僧道可得师号——日有底气，煞冲难至饥寒。"},{classic:"女人廟旺，主旺夫益子，加權祿封贈，加殺主平常。",vernacular:"女命庙旺：书上觉得旺夫益子；加权禄可封赠，加杀就偏平常——女日旺吉则贵，叠煞则平。"},{classic:"太陽原屬火，正主官祿星，若居身命位，稟性最聰明，慈愛量寬大，福壽享遐齡，",vernacular:"太阳本属火，正管官禄。落在身命：性情往往很聪明，慈爱宽大，福寿也容易长——日旺身命，聪慈寿长。"},{classic:"若與太陰會，驟發貴無倫，有輝照身命，平步入金門，巨門不相犯，升殿承君恩，",vernacular:"与太阴会：书上觉得发贵很快；有辉照身命，像平步入金门。巨门不来犯，更容易升殿承恩——日月会+有辉无巨，骤贵。"},{classic:"偏垣逢暗度，貧賤不可言，男人必克父，女命夫不全，火鈴逢若定，羊陀眼目昏，",vernacular:"偏垣又失辉：贫贱压力会大；男命容易克父，女命夫缘不全。火铃一到往往有事，擎羊陀罗则眼睛容易昏——失辉+暗煞，父夫目疾同警。"},{classic:"二限若值此，必定賣田園。",vernacular:"二限碰上这种组合：书上说多半得卖田卖地周转——限逢失辉暗煞，破产周转象。"},{classic:"玉蟾先生曰：太陽司權貴為文，遇天刑為武。",vernacular:"玉蟾先生说：太阳掌权偏文贵；碰上天刑，则偏武——日主文，刑催则武。"},{classic:"在寅卯為初升，在辰巳為升殿。",vernacular:"在寅卯像初升，在辰巳像升殿——日由升而殿，贵气渐足。"},{classic:"在午為日麗中天，主大富貴。",vernacular:"在午像日丽中天：书上觉得大富贵机会大——午日最旺，光华顶格。"},{classic:"在未申為偏垣，作事先勤後惰。",vernacular:"在未申算偏垣：做事容易先勤后懒——日过中天，力渐斜，勤始惰终。"},{classic:"在酉為西沒，貴而不顯，秀而不實。",vernacular:"在酉像西沉：贵气有但不显眼，秀气有但难落实——西没之日，名虚实亏。"},{classic:"在戌亥子為失輝，更逢巨暗一生勞碌貧忙。",vernacular:"在戌亥子算失辉；再逢巨门、化忌：一生多半劳碌贫忙——失辉+巨暗，光尽则劳贫。"},{classic:"更主眼目有傷，與人寡合招非。",vernacular:"还容易眼睛受伤，跟人合不来、招是非——日主目，失辉寡合招非。"},{classic:"女命逢之，夫星不美，遇耗則非禮成婚。",vernacular:"女命逢它，夫星不太美；再遇耗星（大耗破军等），容易非礼成婚——女命失辉日+耗，夫缘不正。"},{classic:"若與祿存同宮，雖主財帛，亦辛苦不閒。",vernacular:"跟禄存同宫：虽主财帛，也还是辛苦忙不完——日禄同宫财有，奔波不息。"},{classic:"若與左右同宮則為貴論。",vernacular:"跟左辅右弼同宫，才好往贵上看——日+辅弼，君象有佐才贵。"},{classic:"又嫌火鈴、刑忌，未免先克其父。",vernacular:"再嫌火星、铃星、刑、忌：往往免不了先克到父亲——火铃刑忌攻日，父星先损。"},{classic:"此星男得之為父星，女得之為夫星。",vernacular:"这颗星男命当父星，女命当夫星——父/夫总看太阳辉陷与会照。"},{classic:"問武曲星所主為何？",vernacular:"问：「武曲」主要管什么？——财帛刚金、决断寿财这一路。"},{classic:"答曰：武曲北斗第六星，屬金，乃財帛宮主。",vernacular:"答：武曲是北斗第六星，属金，是财帛宫的主星——主财、主刚、主决断。"},{classic:"與天府同宮有壽，其施權於十二宮分，其臨地有廟、旺、陷宮。",vernacular:"跟「天府」同宫往往有寿；它的权遍及十二宫，落的地方也有庙、旺、陷的差别——武曲得地则财寿双看，陷则力虚。"},{classic:"主於人，性剛果決，有喜有怒，可福可災。",vernacular:"落在人身上：性情刚、做事果断，喜怒分明，能带来福也能带来灾——刚金两用，看制化。"},{classic:"若陷囚會於震宮必為破，主淹留之舉。",vernacular:"若落陷又跟囚星（廉贞）会在震宫（东方木）：容易破败，事情也容易拖着走不掉——金陷受木压，破而淹留。"},{classic:"與祿馬交馳，發財於遠郡。",vernacular:"跟禄马交驰：发财多半在远处——武曲+禄+驿马，财在远郡外发。"},{classic:"若貪狼同度，慳吝之人。",vernacular:"跟「贪狼」同度：人往往偏吝啬——武财叠贪欲，钱抓得紧、出手难。"},{classic:"破軍同財鄉，財到手而成空。",vernacular:"「破军」同在财乡：钱到手也容易空掉——武破同财，进财即耗，难留。"},{classic:"諸兇聚而作禍，吉集以成祥。",vernacular:"凶星扎堆就容易出事，吉星聚会就容易成祥——武曲吉凶全看会照比重。"},{classic:"希夷先生曰：武曲屬金，在天司壽，在數司財。",vernacular:"希夷先生说：武曲属金，在天上管寿，在斗数里管财——寿财同司于武。"},{classic:"怕受制入陷，喜祿存而同政。",vernacular:"怕受制、落入陷地；喜欢「禄存」跟它一起理事——武喜禄同政，忌陷受制。"},{classic:"與太陰以互權，天府、天相為佐貳之星，財帛田宅為專司之所。",vernacular:"跟太阴互相分权；天府、天相是副手，财帛、田宅是它专管的地方——阴武互权，府相佐财田。"},{classic:"惡殺耗囚會於震宮，必見木壓雷震。",vernacular:"恶杀、耗、囚会在震宫：书上说容易见木压、雷震一类灾——古象重，今宜软看作意外冲击/压力灾提醒，勿死套。"},{classic:"破軍貪狼會於坎宮，必主投河溺水。",vernacular:"破军、贪狼会在坎宫：书上说容易投河溺水——水局破贪，危险象；今作水性风险/情绪冲动提醒，必合疾厄流年。"},{classic:"會祿馬則發財遠郡。",vernacular:"会禄马：发财多半在远方——禄马引武，财路在外。"},{classic:"貪狼會則少年不利。",vernacular:"跟贪狼会：少年阶段往往不太顺——武贪同宫，少不发，所谓「贪狼不发少年郎」。"},{classic:"所謂武曲守命福非輕，貪狼不發少年郎是也。",vernacular:"古话说「武曲守命福非轻，贪狼不发少年郎」：武守命本福厚，一叠贪则少年难发——发要等运开。"},{classic:"廟樂桃花同宮，利己損人。",vernacular:"庙乐又跟桃花同宫：容易利己损人——武曲得地叠桃花，欲望为己、不顾人。"},{classic:"七殺火星同宮，因財被劫。",vernacular:"「七杀」「火星」同宫：容易因财被劫——杀火催武财，财来凶夺。"},{classic:"遇羊陀則孤克，遇破軍難顯貴。",vernacular:"遇擎羊、陀罗：容易孤克；遇破军：难显贵——羊陀刑孤，破军耗贵。"},{classic:"若與破軍同位，更臨二限之中，定主是非之撓。",vernacular:"跟破军同宫，又正赶上大小二限：多半是非麻烦会多——武破叠限，争端起。"},{classic:"蓋武曲守命，主人剛強果斷，甲己生人福厚，出將入相。",vernacular:"武曲守命：人往往刚强果断；甲己年生的人福厚，书上觉得可出将入相——武命+甲己，将相象。"},{classic:"更得貪火衝破，定為貴格。",vernacular:"再得贪狼、火星冲破：书上常断成贵格——火贪冲武，点燃成贵（火贪格类），条件要有制有化。"},{classic:"喜西北生人，東南生人平常，不守祖業。",vernacular:"比较喜西北生人；东南生人偏平常，也难守祖业——武金喜西戌亥子一带生人得地，东南木火泄克则平。"},{classic:"四殺衝破孤貧不一，破相延年。",vernacular:"四杀冲破：孤贫情况不一；破相反而有时能延年——煞冲武，孤贫看轻重；破相（外伤疤）古诀反作寿延，宜软参。"},{classic:"女人吉多為貴婦，加殺衝破孤克。",vernacular:"女命吉星多：多半可作贵妇；加杀冲破，就容易孤克——女武吉多则贵，煞破则孤。"},{classic:"問天同星所主若何？",vernacular:"问：「天同」主要管什么？——福德安逸、化福清奇这一路。"},{classic:"答曰：天同星屬水，乃南方第四星也，為福德宮之主宰。",vernacular:"答：天同属水，是南方第四星，管着福德宫这一块——主福、主安、主清和。"},{classic:"復雲：化福最喜遇吉曜，助福添祥，為人廉潔，貌稟清奇。",vernacular:"又说：化福最喜欢碰上吉曜，能助福添祥；为人廉洁，模样也常清奇——同得吉会，福貌双清。"},{classic:"有機樞無亢激，不怕七殺相侵，不怕諸殺同纏。",vernacular:"脑子有机枢但不亢激；不太怕七杀来侵，也不太怕诸杀同缠——天同水性柔，煞来可化、不硬碰。"},{classic:"限若逢之，一生得地，十二宮中皆曰福，無破定為祥。",vernacular:"大限碰上它，一生往往比较得地；十二宫里多半都往福上看，没有冲破就更偏吉祥——限逢天同，福地展开；无破定祥。"},{classic:"希夷先生曰：天同南斗益算保生之星，化祿為善，逢吉為祥，身命值之，主為人謙遜，稟性溫和。",vernacular:"「天同」南斗益算保生星：主福、安逸、延寿。化禄则善气显；再逢吉（禄权昌曲辅弼）→祥。身命值之：人多谦逊温和——前提天同得地，非空劫硬冲。"},{classic:"必慈鯁直，文墨精通，有奇志無兇激。",vernacular:"天同落到性情：慈直（软里带梗）、文墨通；有奇志却不走凶激。条件：守命身/相貌，无火铃忌硬催——急性一催就失「慈」。"},{classic:"不忌七殺相侵，不畏諸兇同度，十二宮中皆為福論。",vernacular:"天同本主福：七杀来侵、诸凶同度，也不轻易翻大凶——十二宫多仍作福星论。讲盘：煞会天同先减等，别见杀就判死。"},{classic:"遇左右昌梁貴顯，喜壬乙丙生人，巳亥得地。",vernacular:"天同喜会左辅右弼、文昌、天梁→贵显。命造喜壬/乙/丙生人；宫位喜巳亥得地。缺辅弼昌梁，贵显减半；有会才论显达。"},{classic:"不宜六庚生人居酉地，終身不守。",vernacular:"忌象：六庚生人再居酉地——天同落酉对庚造「终身不守」→坐不定、难安居一处。须叠「庚命+酉宫」才重断，单见减等。"},{classic:"會四殺居巳亥為陷，殘疾孤克。",vernacular:"天同会四杀（羊陀火铃）又居巳亥：书作陷地→残疾患、孤克亲人。巳亥本或为天同地，叠四杀则福翻陷，健康六亲先防。"},{classic:"女人逢殺衝破，刑夫克子。",vernacular:"女命天同逢杀冲破（羊陀火铃七杀硬冲）：刑夫克子——婚姻波折、子女缘薄。须冲破成立；邻宫虚照只作波折减等。"},{classic:"梁月衝破，合作偏房，僧道宜之，主享福。",vernacular:"天同遇天梁、太阴冲破：易作偏房/侧室象；僧道命反宜，主享清福。世俗婚配冲破重看，出家清修可转吉。"},{classic:"問廉貞所主若何？",vernacular:"设问起手：廉贞所主若何？下文按职司→庙旺/化囚→身命官禄→限运凶会，贴原文拆「何时为权、何时为刑」。"},{classic:"答曰：廉貞屬火，北斗第五星也。",vernacular:"答纲：廉贞属火，北斗第五星——斗数「囚」气所在，主刚烈权令，亦带刑囚。先定属火，再谈化气与庙陷。"},{classic:"在斗司品秩，在數司權令。",vernacular:"廉贞在天司品秩；在数司权令——威权号令与囚气一体。讲盘先分庙旺：旺可作权柄，陷则刑囚、口舌显。"},{classic:"不臨廟旺，更犯官符，故曰化囚為殺。",vernacular:"廉贞不临庙旺，再犯官符（刑讼星/宫）：化囚为杀——囚气变刑杀，官司口舌硬。庙旺有制则可作威权用。"},{classic:"觸之不可解其禍，逢之不可測其祥。",vernacular:"廉贞凶象：触之难解祸，逢之难测祥——吉凶陡变。多因叠煞忌、落陷或限运硬冲；单星勿吓人，先查加会。"},{classic:"主人心狠性狂，不習禮義。",vernacular:"廉贞守命身而无制：心狠性狂，不习礼义——脾气烈、不服管。得紫府辅弼化，刚可变威权，无化则冲撞多。"},{classic:"逢帝座執威權，遇祿存主富貴，遇文昌好禮樂，遇殺曜顯武職，在官祿有威權，在身命為次桃花。",vernacular:"廉贞会帝座（紫微）→执威权；会禄存→富贵；会文昌→好礼乐；会杀曜→武职显；在官禄有威权；在身命作次桃花（欲望第二层）。同宫/三方紧会才立。"},{classic:"若居旺宮，則賭博迷花而致訟。",vernacular:"廉贞居旺宫：权欲旺，易赌博迷花而致讼——花酒博戏牵官司。旺而无制才惹讼；有禄权辅弼可作威权正用。"},{classic:"限逢巨門於陷地，則是非起於官司。",vernacular:"大限小限逢巨门又在陷地：是非起于官司——口舌暗耗升级成诉讼。限上巨门+陷地双条件齐才立，单见巨门减等。"},{classic:"逢財星耗合祖業必破，遇刑忌則膿血不免。",vernacular:"廉贞逢财星又耗合：祖业必破——财来财漏、守不住家底。遇刑忌：脓血不免——疮疡手术外伤类，看同宫紧会。"},{classic:"遇白虎則刑杖難逃，遇武曲於受制之鄉，恐木壓蛇傷。",vernacular:"遇白虎：刑杖难逃——刑伤责罚象。武曲落受制之乡再会廉贞：恐木压蛇伤——今作工伤外伤、意外压伤防。"},{classic:"同火曜於陷空之地，主投河自縊。",vernacular:"廉贞同火曜（火星）又在陷空：古断投河自缢——极端自伤象。今作情绪崩溃/险地风险；须陷空+火紧会，勿轻断生死。"},{classic:"破軍與日月以濟行，目疾而不免。",vernacular:"破军与日月济行（同会日月）：目疾不免——视力眼疾象。破军冲荡+日月主目，叠疾厄宫同看，有天医可减。"},{classic:"限逢至此，災不可攘。",vernacular:"限运步入前述凶会（廉火陷空、破军日月等）：灾不可攘——宜避险减灾，硬冲易应；有解神化忌可减等。"},{classic:"只宜官祿身命之位，遇吉福映，逢兇則不慈。",vernacular:"廉贞只宜官禄、身命得位：遇吉福映可作威权福；逢凶则不慈——心硬少恩。他宫另按所落人事断，勿套命身。"},{classic:"若在他宮，禍福宜詳。",vernacular:"廉贞在他宫（非官禄身命）：祸福宜详——按宫位事类（财田夫迁等）拆条件，勿直接套命身威权/桃花结论。"},{classic:"廉貪巳亥宮，遇吉福盈豐，應過三旬後，須防不善終。",vernacular:"廉贞贪狼同在巳亥：遇吉可福盈丰；过三旬后须防不善终——中年后防极端收场。格局前半发、后半要收束。"},{classic:"問天府所主若何？",vernacular:"设问：天府所主若何？下文按禄库/财田/制煞/各宫庙陷，拆「府=库」何时库实、何时库漏。"},{classic:"答曰：天府屬土，南斗主令第一星也。",vernacular:"答纲：天府属土，南斗主令第一星——库藏尊星，主稳、蓄、有底。得禄则库实，空劫则库虚难积。"},{classic:"為財帛之主宰，在斗司福權之宿，會吉皆為富貴之基，定作文昌之論。",vernacular:"天府为财帛主宰；在斗司福权。会吉（禄权昌曲辅弼）→富贵之基，可作文昌清贵论。库要得禄，空劫则库虚。"},{classic:"希夷先生曰：天府乃南斗延壽解厄之星，又曰司命。",vernacular:"希夷曰：天府乃南斗延寿解厄之星，又称司命——管寿、解厄、掌命之库。落命身得地，寿福有托；陷空则托不住。"},{classic:"上相鎮國之星，在斗司權，在數則職掌財帛、田宅、衣祿之神。",vernacular:"上相镇国之星：在斗司权；在数职掌财帛、田宅、衣禄——钱、房、衣食三库。府星有力，家底易厚；无力则名库实空。"},{classic:"為帝之佐貳，能制羊陀為從，能化火鈴為福。",vernacular:"天府为帝之佐贰（辅紫微）：能制羊陀为从——煞听调度；能化火铃为福——冲击收成助力。条件：府得地非空陷。"},{classic:"主人相貌清奇，稟性溫良端雅。",vernacular:"天府得地：相貌清奇，禀性温良端雅——像有库有底、不走极端。叠煞空则「清」变沉闷拘谨，库气发闷。"},{classic:"與昌曲會，必登首選。",vernacular:"天府与文昌文曲会：必登首选——考试功名、选拔类易拔尖。昌曲庙旺+府库同会才稳；昌曲陷则名虚。"},{classic:"逢祿存武曲，必有鉅萬之富。",vernacular:"逢禄存、武曲：必有钜万之富——禄入府库、武曲司财，财量大。府+禄+武同宫/三方紧会；缺一则富减档。"},{classic:"秘雲：天府為祿庫，命逢終是富是也。",vernacular:"秘云：天府为禄库，命逢终是富——命宫见天府得地，终身偏有积蓄底子；空劫冲破则「富」打折，进也易漏。"},{classic:"不喜四殺衝破，雖無官貴，亦主財田富足。",vernacular:"不喜四杀冲破；即便无官贵，亦主财田富足——府星本主田财，煞冲损贵不损尽库。杀破则看库漏多少再断。"},{classic:"以田宅財帛為廟樂，以奴僕相貌為陷弱。",vernacular:"庙乐：田宅、财帛宫见府最得用；陷弱：奴仆、相貌宫见府力弱。先问落哪宫，再谈富不富——错宫力错用。"},{classic:"以兄弟為平常，命逢之得相佐，主夫妻子女不缺。",vernacular:"兄弟宫见府平常；命逢天府得相佐→夫妻子女不缺——家口缘厚。命身有府，六亲宫另参，勿一例断全福。"},{classic:"若值空亡是為孤立，不可一例而推斷，大抵此星多主吉。",vernacular:"若值空亡：孤立——库空、助缘虚，不可一例断富。大抵此星多主吉，空亡是少数翻案条件，见空先减富。"},{classic:"又曰：此星不論諸宮皆吉，女命得之清正機巧，旺夫益子，雖見衝破，亦以善論，僧道宜之有師號。",vernacular:"天府不论诸宫多吉。女命得之：清正机巧，旺夫益子；虽见冲破仍以善论。僧道宜之，主有师号——清誉名衔。"},{classic:"天府為祿庫，入命終是富，萬傾置田莊，家資無論數，女命坐香閨，男人食天祿，",vernacular:"口诀：天府=禄库，入命终偏富；田庄家资厚。女命坐香闺安稳，男人食天禄（俸禄/正当衣食）。仍须府得地非空。"},{classic:"此是福吉星，四外無不足。",vernacular:"结句：天府为福吉星，四外无不足——周遭有府气映，衣食住用不易缺到骨。大空亡冲破则「不足」要重看。"},{classic:"問太陰星所主若何？",vernacular:"设问：太阴所主若何？下文按田宅主、弦望辉陷、母妻象与煞会——先定辉，再断福；失辉先谈耗。"},{classic:"答曰：太陰乃水之精，為田宅主，化富，與日為配。",vernacular:"答：太阴乃水之精，田宅主，化富；与日为配——日月对望才成圆满光。单月无日，辉力减半，田宅母妻弱一档。"},{classic:"天儀表有上弦下弦之用，黃到黑到分勢尚好，虧數定廟樂。",vernacular:"天仪表分上弦下弦：黄到黑到定势尚；亏数定庙乐——月相盈亏管太阴庙旺。讲盘先问：弦望还是晦蚀失辉。"},{classic:"其為人也聰明俊秀，其稟性也端雅純祥。",vernacular:"太阴得辉：为人聪明俊秀，禀性端雅纯祥——清秀有光。失辉则清变暗、俊变滞，福名田宅都哑一截。"},{classic:"上弦為要之機，下弦減威之論。",vernacular:"上弦：要机（力量足、事能成）；下弦：减威（力退半档）。同是太阴，弦向不同断法不同——勿见月就同断。"},{classic:"所值不以所見無妨，若相生坐於太陽，日在卯，月在酉，俱為旺地，為富貴之基。",vernacular:"所值不以所见无妨：若与太阳相生，日在卯、月在酉——俱为旺地，作富贵之基。日月得垣对照，光才实、福才稳。"},{classic:"命坐銀輝之宮，諸吉鹹集，為享福之論。",vernacular:"命坐银辉之宫（太阴得辉庙旺），诸吉咸集→享福论。辉+吉缺一，福减；叠空劫则银辉虚，享福打折。"},{classic:"若居陷地，則落弱之名。",vernacular:"太阴居陷地（卯辰巳午未一类）：落弱之名——月光暗，田宅/母妻象无力，名不响福不显；先谈弱再谈吉会。"},{classic:"若上弦下弦，仍以不逢巨門為佳。",vernacular:"无论上弦下弦：仍以不逢巨门为佳——巨门化暗叠月，口舌暗耗、名声蒙尘。月+巨同宫/紧会慎断，远会减等。"},{classic:"身若居之，則有隨娘繼拜，或離祖過房。",vernacular:"身宫见太阴（尤其失辉/冲破）：随娘继拜，或离祖过房——跟母系、过继寄养象。身宫月星必查父母迁移宫。"},{classic:"身命若見惡殺交衝，必作傷殘之論。",vernacular:"身命见恶杀交冲：必作伤残论——月主阴柔再被煞破，体伤残障风险升。紧冲才立；有天医昌曲可减等。"},{classic:"除非僧道，反獲禎祥。",vernacular:"除非僧道命：太阴叠恶杀反获祯祥——清修可把阴暗转清福。世俗婚宦勿套此解，出家清修才适用。"},{classic:"決禍福最為要緊，不可參差。",vernacular:"决太阴祸福最要紧：辉陷、弦望、会照不可参差——错看辉陷，整盘母妻田宅会翻案；先定辉再加会。"},{classic:"又或與文曲同居身命，定是九流術士。",vernacular:"太阴与文曲同居身命：定是九流术士——技艺、术数、偏业谋生象。昌曲清贵庙旺则另断功名，不走九流。"},{classic:"男為妻宿，又作母星。",vernacular:"男命论太阴：为妻宿，又作母星——夫妻宫与父母宫都要过太阴；月辉陷直接牵妻母吉凶，勿只看夫妻宫。"},{classic:"希夷先生曰：太陰化祿與日為配，以卯辰巳午未為陷地，以酉戌亥子丑為得垣。",vernacular:"希夷曰：太阴化禄与日为配。陷地：卯辰巳午未；得垣：酉戌亥子丑。讲盘先定月在陷还是垣，再谈化禄是否落地。"},{classic:"酉為西山之門，為東潛之所。",vernacular:"酉为西山之门、东潜之所——太阴入酉为月得门，光可藏可发，属得垣要地；田宅母妻力较足，仍忌巨暗来缠。"},{classic:"嫌巨曜以來纏，怕羊陀以同度，廉囚相犯，七殺相沖，恐非得意之垣，定作傷殘之論。",vernacular:"嫌巨曜来缠、怕羊陀同度；廉囚相犯、七杀相冲：恐非得意之垣→定作伤残论。月本得垣也被煞暗破，辉尽则凶。"},{classic:"此星屬水，為田宅宮主，有輝為福，失陷必兇。",vernacular:"太阴属水，田宅宫主：有辉为福，失陷必凶——房田母妻事，辉是开关；失辉先谈耗破，再谈有没有吉会能救。"},{classic:"男女得之，皆為母星，又作妻宿。",vernacular:"男女得太阴皆为母星，又作妻宿——母与妻同参月；女命亦关母职内宅。辉则慈护，陷则母妻事滞、缘薄。"},{classic:"若在身命廟樂，吉集主富貴。",vernacular:"身命庙乐、吉集：主富贵。条件：太阴庙旺+吉会，非空陷；缺吉则富而不贵，或贵而不稳、福名虚。"},{classic:"在疾厄遇陀暗為目疾，遇火鈴為災，值貪殺損目。",vernacular:"疾厄宫：遇陀罗/化忌暗→目疾；遇火铃→灾病急冲；值贪杀→损目。月主目，疾厄叠暗杀重防眼疾外伤。"},{classic:"在父母，如陷地失輝，遇流年白虎太歲，主母有災。",vernacular:"父母宫：太阴陷地失辉，再遇流年白虎太岁→主母有灾。限流年叠看，勿见陷就断母难；有解可减。"},{classic:"此雖純和之星，但失輝受制則不吉。",vernacular:"太阴虽纯和：失辉受制则不吉——和星被制，清福变阴耗；母妻田宅先查辉陷，再查羊陀巨门。"},{classic:"若逢白虎、喪門、弔客，妻亦慎之。",vernacular:"逢白虎、丧门、吊客：妻亦慎之——太阴既为妻宿，哭丧白虎临，婚姻健康情绪要防。须流年/限上见才立。"},{classic:"問貪狼所主若何？",vernacular:"设问：贪狼所主若何？下文按桃花标准、庙陷两头、酒色财气与十二宫——先问入庙还是陷，再问火铃禄权。"},{classic:"答曰：貪狼北斗解厄之神，第一星也。",vernacular:"答纲：贪狼为北斗解厄之神，第一星——善恶两头：能解厄也能惹祸。先定庙陷，再定吉凶走向。"},{classic:"屬水，化氣為桃花，為標準，乃主禍福之神。",vernacular:"属水，化气为桃花，为标准；乃主祸福之神——欲望、才艺、交际一把刀。吉凶全看庙陷与加会，不看星名吓人。"},{classic:"受善惡定奸詐瞞人，授學神仙之術。",vernacular:"受善恶两头：可定奸诈瞒人，亦可授学神仙之术——同一贪狼，庙旺走技艺玄学，陷地走欺瞒虚花。"},{classic:"又好高吟浮蕩，作巧成拙。",vernacular:"又好高吟浮荡，作巧成拙——才情外放，计划常落空。火铃一催更浮；有禄权可把巧钉成业，无禄则巧反拙。"},{classic:"入廟樂之宮，可為祥可為禍。",vernacular:"入庙乐之宫：可为祥亦可为祸——贪狼入庙力大，吉会发才艺富贵，凶会发酒色破败。入庙≠纯吉，要看加会。"},{classic:"會破軍迷花戀酒而喪命，同祿存可吉。",vernacular:"会破军：迷花恋酒而丧命——欲望+动荡叠到极端。同禄存可吉——有禄压桃花成财艺，色欲转成财路。"},{classic:"遇耗因以虛花，遇廉貞也不潔，見七殺或配以遭刑。",vernacular:"遇耗：因虚花——表面热闹无实利。遇廉贞也不洁——囚桃叠，名节情欲浊。见七杀或配遭刑——刑伤配流风险。"},{classic:"遇羊陀主痔疾，逢刑忌有斑痕，二限為禍非輕。",vernacular:"遇羊陀：主痔疾；逢刑忌：有斑痕。二限为祸非轻——限上贪狼叠羊陀刑忌，病符色欲灾重，宜提前收心。"},{classic:"與七殺同守身命，男有穿窬之體，女有偷香之態。",vernacular:"贪狼与七杀同守身命：男有穿窬之体，女有偷香之态（古断重）。今作欲望越界、行为冒险看；须同宫紧守才立。"},{classic:"諸吉壓不能為福，眾兇聚愈藏其奸。",vernacular:"诸吉压不能为福，众凶聚愈藏其奸——贪狼欲望重：吉多压不住浮花，凶多奸机更深。先谈制化，再谈有没有福。"},{classic:"以事藏機，虛花無實。",vernacular:"贪狼处事藏机，虚花无实——表面好看、落地空。讲盘必查有无禄权把欲望钉成财艺；无禄则名利虚。"},{classic:"與人交厚者薄，而薄者又厚。",vernacular:"人际：交厚者薄，薄者又厚——亲疏颠倒，感情账算不清。贪狼命身或福德常见此摆动，合作宜签清界限。"},{classic:"故云：七殺守身終是夭，貪狼入廟必為娼。",vernacular:"古诀：七杀守身终是夭；贪狼入庙必为娼——杀主刑夭，贪庙主色欲外放（古重；今作情欲行业/关系复杂减等）。"},{classic:"若身命與破軍同居，更居三合之鄉生旺之地，男好飲而賭博遊蕩，好女無媒而自嫁，淫奔私竊，輕則隨客奔馳，重則遊於歌妓。",vernacular:"身命与破军同居，又居三合生旺：男好饮赌博游荡；女无媒自嫁、淫奔私窃——轻则随客奔驰，重则游于歌妓。破+贪+旺地，欲望动力最强。"},{classic:"喜見空亡，返主端正。",vernacular:"喜见空亡：返主端正——桃花力被空掉，欲望反收，人反而规矩。贪狼忌实旺无制，喜空来泄；空是翻案条件。"},{classic:"若與武曲同度，為人諂佞奸貪，每存肥己之心，並無濟人之意。",vernacular:"与武曲同度：谄佞奸贪，肥己无济人之意——财欲重、算计私利。武贪同宫，钱与欲绑一起，合作防被算。"},{classic:"與貞同，公庭必定遭刑。",vernacular:"贪狼与廉贞同宫/紧会：囚气叠桃花→公庭必定遭刑——官司刑责易照面；有魁钺昌曲可减等，无制则讼。"},{classic:"四殺同，定為屠宰。",vernacular:"贪狼与四杀同：定为屠宰——杀气重，宜宰割/血腥或高压刚职（古断职业象）；今亦作高压刚职、刀口饭看。"},{classic:"羊陀交併，必作風流之鬼。",vernacular:"羊陀交并：必作风流之鬼——色欲病符、情欲伤身。羊陀催桃花到鬼门关；有天医/禄可减，无解宜戒色。"},{classic:"昌曲同度，必多虛而少實。",vernacular:"昌曲同度：必多虚而少实——文才口才有，成果虚飘。昌曲+贪，名气常大于实力；要禄权钉住才实。"},{classic:"與七殺同纏，男女淫邪虛花。",vernacular:"贪狼与七杀同缠：杀催欲→男女淫邪虚花，关系乱、事不实。同宫紧守才立；远会只作欲望波动减等。"},{classic:"巨門交戰，口舌是非常有。",vernacular:"贪狼与巨门交战：桃花叠暗口→口舌是非常有，绯闻争竞不断。有化科/昌可转辩才，无化则是非缠身。"},{classic:"若犯帝座，無制便為無益之人。",vernacular:"贪狼犯帝座（紫微）无制：帝被欲扰→无益之人，尊而不实。有辅弼昌曲夹制则不作此断——夹制是翻案键。"},{classic:"得輔弼昌曲夾制，則無此論。",vernacular:"得左辅右弼、文昌文曲夹制：贪狼才艺可用，取消「犯帝无益」之论——夹制把欲望收成器用，才艺可成名。"},{classic:"陷地逢生又生祥瑞，雖家顛也發一時之財。",vernacular:"陷地逢生（得生扶）：又生祥瑞——虽家颠，也发一时之财。贪陷本凶，逢生可暴发一程，难久持，见好就收。"},{classic:"惟會火鈴能富貴，美在財帛與武曲太陰同，終非所自發，則為淫佚。",vernacular:"惟会火铃能富贵；美在财帛与武曲太阴同——火贪格可发。终非所自发，则为淫佚——财色来路偏外偏欲，非稳妥自创。"},{classic:"在兄弟子息，俱為陷地。",vernacular:"贪狼在兄弟、子息：俱作陷地看——兄弟子女缘虚花、不得力；勿指望这两宫贪狼生助力，反防破耗口舌。"},{classic:"在田宅則破蕩祖業，先富後貧。",vernacular:"贪狼在田宅：欲望掏宅库→破荡祖业，先富后贫。条件是贪守田宅得力；闲宫虚照只作宅运不稳减等。"},{classic:"奴僕居於廟旺，必因奴僕所破。",vernacular:"奴仆宫贪狼居庙旺：力用在「仆」上反噬→必因奴仆/下属所破。庙旺错宫，福力变破口；管理宜紧契约。"},{classic:"夫妻宮男女俱不得美，疾厄與羊陀暗殺交併，酒色之病。",vernacular:"夫妻宫：男女俱不得美——婚缘质量差。疾厄与羊陀暗杀交并：酒色之病——性病酒伤色损；夫妻+疾厄叠看。"},{classic:"遷移若坐火鄉，破軍暗殺並，流年歲殺迭並，則主遭兵火賊盜相侵。",vernacular:"迁移坐火乡，破军暗杀并，流年岁杀迭并→遭兵火贼盗相侵。外出地见火破杀，防盗劫火灾冲突；多层叠加才重断。"},{classic:"總而言之，男女非得地之星，不見尤妙。",vernacular:"总断：贪狼非男女得地之纯吉星，不见尤妙——不见更省事；见则必查庙陷、火铃、禄权制化，再谈才艺还是酒色。"},{classic:"希夷先生曰：貪狼為北斗解厄之神，陟明之星，其氣屬木，體屬水，故化氣為桃花。",vernacular:"希夷曰：贪狼为北斗解厄之神、陟明之星；气属木、体属水，故化气为桃花——欲望、才艺、解厄三位一体，庙陷定走向。"},{classic:"乃主禍福之神，在數則樂為放蕩之事。",vernacular:"贪狼主祸福；在数则乐放荡之事——吉会走才情娱乐成财，凶会走荒唐破败。同一「放荡」，吉凶看加会。"},{classic:"遇吉則主富貴，遇兇則主虛浮。",vernacular:"贪狼遇吉（禄权昌曲）→富贵落地；遇凶（羊陀火铃空劫）→虚浮无根。开关在加会，不在星名本身吓人。"},{classic:"主人矮小，性剛猛威，機深謀遠，隨波逐浪，愛憎難定。",vernacular:"主人矮小，性刚猛威，机深谋远，随波逐浪，爱憎难定——欲望驱动，立场飘。贪狼命身常见心机与情绪摆动。"},{classic:"居廟旺遇火星武職權貴，戊己生人合局。",vernacular:"居庙旺遇火星：武职权贵；戊己生人合局——火贪格+土年生助，权武路顺。无火则武职力减，有火无庙则暴。"},{classic:"遇天相延壽，會廉武巧藝，得祿存僧道宜之。",vernacular:"遇天相：延寿；会廉武：巧艺；得禄存：僧道宜之——相解暴、廉武成艺、禄收心，贪狼可转正用成技成清修。"},{classic:"破殺相沖，飄蓬度日。",vernacular:"破军七杀相冲贪狼：动荡+刑杀催欲→飘蓬度日，难钉居业。迁移/命身见此，奔波加重；有府相可略稳。"},{classic:"女人刑剋不潔，遇太陰則主淫佚。",vernacular:"女人刑克不洁；遇太阴则主淫佚——女命贪狼叠月，情欲名节压力大（今作感情复杂、关系多段减等看）。"},{classic:"問巨門所主若何？",vernacular:"设问：巨门所主若何？下文按暗曜是非、十二宫分断、帝禄制化——先定庙乐，再谈灾还是辩才。"},{classic:"答曰：巨門屬水、金。",vernacular:"答纲：巨门属水、金——暗、口、是非之星，亦主暗合机谋。化暗是总开关；庙旺可转品鉴，失庙则口舌。"},{classic:"北斗第二星也，為陰精之星，化氣為暗。",vernacular:"北斗第二星，阴精之星，化气为暗——事不透亮，名易蒙、口易争。卯酉入庙可转品鉴辩才，失庙则是非跟身。"},{classic:"在身命一生招口舌之非；",vernacular:"巨门在身命：一生招口舌之非——人未到是非先到。沟通与名声当课题；卯酉入庙可化口才，失庙则讼非多。"},{classic:"在兄弟則骨肉參商；",vernacular:"巨门在兄弟宫：化暗主口舌隔阂→骨肉参商，兄弟不合、各奔东西。同宫紧守比三方虚会更显；有化禄可缓。"},{classic:"在夫妻主於隔角，生離死別，縱夫妻有對，不免汙名失節；",vernacular:"巨门在夫妻：主隔角，生离死别；纵有对，不免污名失节——婚缘阻隔、名节口舌。先谈风波再谈偕老，有日紫可减。"},{classic:"在子息損後方招，雖有而無；",vernacular:"巨门在子息：损后方招，虽有而无——子女缘晚、有名无实或缘薄。叠空劫更虚；有府相荫可补嗣缘。"},{classic:"在財帛有爭競之意；",vernacular:"巨门在财帛：暗口落钱上→争竞之意——合同纠纷、钱债口舌。有化禄武曲同解可减；无解宜契约写清。"},{classic:"在疾厄遇刑忌，眼目之災，殺臨主殘疾；",vernacular:"疾厄遇刑忌：眼目之灾；杀临：主残疾。巨门化暗+刑+杀，体伤目疾升级；有天医可减，无医宜重防。"},{classic:"在遷移則招是非；",vernacular:"巨门在迁移：外出换地仍带暗口→招是非。迁宫巨门+流年煞，口舌升级成冲突；外出宜少争多记。"},{classic:"在奴僕則多怨逆；",vernacular:"巨门在奴仆：下属仆役缘逆→多怨逆、不服管。管理岗见此，先防内耗再谈忠仆；契约与边界要硬。"},{classic:"在官祿主招刑杖；",vernacular:"巨门在官禄：主招刑杖——职场刑责、处分压力。化科化禄、魁钺同宫可减等；无解宜避争讼岗。"},{classic:"在田宅則破蕩祖業；",vernacular:"巨门在田宅：暗耗破宅→破荡祖业，宅产口舌、家业不守。叠空劫更易卖祖业；有府禄可守一截。"},{classic:"在福德其禍稍輕；",vernacular:"巨门在福德：其祸稍轻——是非心耗有，外灾相对轻。仍防情绪口舌内耗，勿当无事；心安则祸再减。"},{classic:"在父母則遭棄擲。",vernacular:"巨门在父母：遭弃掷——与父母缘薄、被疏远。今作代沟、分居、沟通难减等看；有月梁同会可补孝缘。"},{classic:"希夷先生曰：巨門在天，司品萬物。",vernacular:"希夷曰：巨门在天，司品万物——品评、鉴定、口舌裁量之职；落到人事就是是非与品鉴两用，庙陷定哪一头。"},{classic:"在數則掌執是非，主於闇昧，疑是多非，欺瞞天地，進退兩難。",vernacular:"在数掌是非，主暗昧：疑是多非，欺瞒天地，进退两难——暗耗纠结，事难两全；有化科可转评断之才。"},{classic:"其性則面是背非，六親寡合，交人初善終惡。",vernacular:"性则面是背非，六亲寡合，交人初善终恶——开头热、后头翻。巨门命身人际关系要防后手，合作宜留证据。"},{classic:"十二宮中若無廟樂照臨，到處為災，奔波勞碌。",vernacular:"十二宫中若无庙乐照临：到处为灾，奔波劳碌——巨门失庙，口舌奔波跟身。卯酉等庙地可转辩才，灾口变器用。"},{classic:"至亥寅巳申，雖富貴亦不耐久。",vernacular:"至亥寅巳申：虽富贵亦不耐久——四马地巨门，发得快也散得快；财贵宜见好就收，勿赌长久。"},{classic:"會太陽則吉凶相半，逢七殺則主殺傷。",vernacular:"会太阳：吉凶相半——日照巨门可明可讼。逢七杀：主杀伤——暗+杀，刑伤硬；有紫府制可减杀性。"},{classic:"貪耗同行，因好徒配。",vernacular:"贪耗同行：因好徒配——桃花虚耗叠巨门，因嗜好/酒色牵连配流（今作劣友牵连、处分风险）。远小人是关键。"},{classic:"遇帝座則制其強。",vernacular:"遇帝座（紫微）：制其强——帝星压暗口，巨门凶性可收成权谋器用；无紫则暗口难制，是非易抬头。"},{classic:"逢祿存則解其厄，值羊陀男盜女娼。",vernacular:"逢禄存：解其厄——有禄压暗。值羊陀：男盗女娼——煞催暗口到行为越界（古重，今减等看戒行）。禄解、羊陀加深，两头对照。"},{classic:"對宮遇火鈴、白虎，無帝壓制，決配千里。",vernacular:"对宫遇火铃、白虎，无帝压制：决配千里——远端流配、远迁受迫。对宫火铃白虎+无紫制，条件齐才重断。"},{classic:"三合殺湊，必遭火厄，此乃孤獨之數，刻剝之神。",vernacular:"三合杀凑：必遭火厄——巨门党里羊陀火铃齐，火灾烫伤冲突。此乃孤独之数、刻剥之神——缘薄克剥，宜少聚是非党。"},{classic:"除為僧道九流，方免勞神偃蹇，限逢兇曜災難不輕。",vernacular:"除为僧道九流：方免劳神偃蹇。限逢凶曜：灾难不轻——限上巨门叠煞，灾口齐来；技艺清修可泄，硬冲易应。"},{classic:"問天相星所主若何？",vernacular:"设问：天相所主若何？下文按印星司爵、佐帝、十二宫祥福与陷地巧艺——先定印实（有禄辅）还是印虚（空劫）。"},{classic:"答曰：天相屬水，南斗第五星也。",vernacular:"答纲：天相属水，南斗第五星——印、仪表、佐贰。化气为印，官禄文书副手象；印实则荣，印虚则名位空。"},{classic:"為司爵之宿，為福善，化氣曰印，是為官祿文星，佐帝之位。",vernacular:"为司爵之宿，为福善，化气曰印；官禄文星，佐帝之位——文书印信、副手辅政。印要得禄权辅，空则印虚难封爵。"},{classic:"若人命逢之，言語誠實，事不虛偽。",vernacular:"人命逢天相：言语诚实，事不虚伪——印星坐命，口德事品偏正。叠贪火则「诚」打折，口惠而实不至。"},{classic:"見人難，有惻隱之心；",vernacular:"天相见人难：有恻隐之心——愿伸手。多主命身/福德正印气；杀忌催则易揽事上身，助人反惹灾。"},{classic:"見人惡，抱不平之氣。",vernacular:"天相见人恶：抱不平之气——正义感强、易出头。宜查有无火铃把「不平」激成争端；有辅则义气成贵。"},{classic:"官祿得之則顯榮，帝座合之則爭權。",vernacular:"官禄得之则显荣；帝座合之则争权——相佐紫微，副手也争权柄。官禄有相职场易亮；与帝合要注意分权，防内耗。"},{classic:"佐日月之光，兼化廉貞之惡。",vernacular:"佐日月之光，兼化廉贞之恶——相能助日月生辉，也能把廉贞囚恶收成印用；同会紧才显化力，远会力弱。"},{classic:"身命得之而榮耀；",vernacular:"身命得天相：印星贴身→荣耀名位体面有托。得地有辅更稳；空劫则荣名虚，有名无实要防。"},{classic:"子息得之而嗣續昌，十二宮中皆為祥福，不隨惡而變志，不因殺而改移。",vernacular:"子息得之而嗣续昌；十二宫中皆为祥福——不随恶变志，不因杀改移。天相稳定性强，煞会也难全毁其正，先减等。"},{classic:"限步逢之，富不可量。",vernacular:"限步逢天相：富不可量——大限小限见天相得地，财福档拉满；陷地则「不可量」打折，仍偏吉但力度降。"},{classic:"此星若臨生旺之鄉，雖不逢帝座，若得左右，則職掌威權。",vernacular:"临生旺之乡：虽不逢帝座，若得左右（辅弼）→职掌威权。相+辅弼+旺地，可当权，不必非紫；缺辅则权不稳。"},{classic:"或居閒弱之地，也作吉利，二限逢之主富貴。",vernacular:"或居闲弱之地也作吉利；二限逢之主富贵——天相容错高，弱地不纯凶，限上见仍偏发；勿见闲弱就判废。"},{classic:"希夷先生曰：天相南斗司爵之星，化氣為印。",vernacular:"希夷曰：天相南斗司爵之星，化气为印——爵印二字是总纲；落盘先问印实（有禄辅）还是印虚（空劫冲破）。"},{classic:"主人衣食豐足，昌曲左右相會，位至公卿。",vernacular:"主人衣食丰足；昌曲左右相会→位至公卿。印+科文+辅弼，官贵路通；缺一会则位阶降，三会齐才到顶。"},{classic:"陷地貪廉武破羊陀殺湊，巧藝安身。",vernacular:"陷地又贪廉武破羊陀杀凑：巧艺安身——正印路不通，改靠手艺技能吃饭。煞凑陷相，宜技不宜纯官，技可养家。"},{classic:"火鈴衝破殘疾，女人主聰明端莊，志過丈夫。",vernacular:"火铃冲破：残疾患。女人主聪明端庄，志过丈夫——女命天相才志常强；火铃冲则健恙风险升，宜护身减冲。"},{classic:"三方吉拱封贈論，若昌曲衝破侍妾，在僧道主清高。",vernacular:"三方吉拱：封赠论——荣衔封赠。若昌曲冲破：侍妾象。在僧道：主清高。同星不同会，断法分流，勿一例套。"},{classic:"天相原屬水，化印主官祿，身命二宮逢，定主多財福，形體又肥滿，語言不輕瀆，",vernacular:"口诀：天相属水化印主官禄；身命二宫逢→多财福；形体肥满，语言不轻渎——印旺人厚口稳，财福有托。"},{classic:"出仕主飛騰，居家主財谷，二限若逢之，百事看充足。",vernacular:"出仕主飞腾，居家主财谷；二限若逢之，百事看充足——官途或家业两条，限上见相都偏够用；陷地则够用减档。"},{classic:"問天梁星所主若何？",vernacular:"设问：天梁所主若何？下文按荫星寿福、父母主、化暴为和与性情相貌——先定梁得地，再谈荫力到谁。"},{classic:"答曰：天梁屬土，南斗第二星也。",vernacular:"答纲：天梁属土，南斗第二星——荫、清贵、寿。司寿化荫，父母之主；得地则长辈荫与寿福托得住。"},{classic:"司壽化氣為蔭為福壽，乃父母之主命化暴戾為祥和。",vernacular:"司寿，化气为荫为福寿；乃父母之主——能化暴戾为祥和。梁星得地，长辈荫、寿福有托；叠杀则荫力打折。"},{classic:"於人命則性情磊落，於相貌則厚重溫謙，循直無私。",vernacular:"于人命：性情磊落；于相貌：厚重温谦，循直无私——清贵写在脸上行事上。叠贪火则「清」变孤傲，荫变清冷。"},{classic:"臨事果決，蔭於身福及子孫。",vernacular:"临事果决；荫于身福及子孙——自己有福，也能荫到后代。梁在命身/福德/子女，荫力分层看；空劫则荫虚。"},{classic:"遇昌曲於財宮，逢太陽於福德三合，乃萬全聲名。",vernacular:"「昌曲」指文昌、文曲，主科名文采；落「财宫」（财帛）→钱财带文气名声。「太阳」主光彩显达，逢于「福德三合」→福德宫三合会照太阳有光。两件齐：财上见文星、福德三合日照，书断「万全声名」——名利声望较周全，不是空有虚名。"},{classic:"顯於王室職位，臨於風憲。",vernacular:"显于「王室职位」：古指近朝廷、清贵要职；临「风宪」：监察、执法、纪检一类。条件多接上文昌曲财+福德会日之贵局——现实上易走公职、法纪、组织威望岗，气场偏正、能管人。"},{classic:"若逢耗曜，更逢天機及殺，宜僧道，亦受王家制誥。",vernacular:"若再逢「耗曜」（破军、大耗等破耗星），更见「天机」及「杀」（七杀）→机变+杀耗叠。书断宜僧道清修，亦可能受「王家制诰」（朝廷封诰文书）。条件：耗杀机同会贵星局；现实上宜清职、宗教文化、或靠公文封赏吃饭，不宜纯财利硬拼。"},{classic:"逢貪巨同度而亂禮亂家。",vernacular:"「贪巨同度」：贪狼与巨门同宫共度。贪主欲望桃花，巨主是非口舌——同度则「乱礼乱家」：礼法家规易乱，口舌情欲搅家庭。成立要同宫紧叠，不是远处一照；现实多婚外是非、家吵口舌。"},{classic:"居奴僕、疾厄、相貌作豐餘之論。",vernacular:"居「奴仆」「疾厄」「相貌」作「丰余」之论：天梁（或上文主星）落这三宫，书反断日子还算宽裕。奴仆主下属帮手、疾厄主健康、相貌主仪表——梁荫落此，病可挡、人有助、相不枯。勿见奴仆疾厄就断穷苦。"},{classic:"見廉貞刑忌，必無災厄克激之虞；",vernacular:"见「廉贞刑忌」：廉贞化刑或化忌来会。廉本囚、刑忌主克激——但接上文梁荫格局，书说「必无灾厄克激之虞」：有梁挡，囚刑忌未必成真灾。条件是梁得用再遇廉刑忌；勿单独见忌就断大祸。"},{classic:"遇火鈴刑暗，亦無征戰之撓。",vernacular:"遇「火铃刑暗」：火星、铃星、化刑、巨门化暗等。本主突发征战式冲击，但有梁荫托底，书断「亦无征战之挠」——战事冲突、硬冲大麻烦往往闹不成。仍看火铃是否同宫紧攻命身；远会可减。"},{classic:"太歲衝而為福，白虎臨而無殃。",vernacular:"「太岁冲」而反为福：流年太岁冲命/梁宫，本象冲激，梁能化冲为助，反成机缘。「白虎临」而无殃：白虎主血光刑伤，临宫有梁荫则灾不成。流年冲白虎别先断凶——先问有无天梁制化。"},{classic:"論而至此，數決窮通之論也。",vernacular:"论而至此：上文天梁诸条（荫寿、宫位吉凶、煞来化吉）合起来，就是用斗数「决穷通」的一套——穷通看主星得用与否、煞能否被荫制。不是空谈理论，是断盘纲领收束。"},{classic:"命或對宮有天梁主有壽，乃極吉之星。",vernacular:"命宫或「对宫」有「天梁」：对宫冲照亦算见梁。天梁司寿主荫→多主有寿，乃「极吉之星」。条件：梁入庙旺更实；落陷仅减力不完全废。现实：根基有人挡、寿元精神偏稳。"},{classic:"希夷先生又曰：天梁南斗司壽之星，化氣為蔭為壽。",vernacular:"希夷曰：天梁是「南斗司寿」之星，化气为「荫」为「寿」。术语：荫＝庇护清贵，寿＝寿元康宁。讲盘见梁先问：是否得地？会何吉煞？再落到父母缘、健康与清名。"},{classic:"佐上帝威權，為父母主，生人清秀溫和，形神穩重，性情磊落，善識兵法。",vernacular:"佐「上帝威权」：梁辅紫微帝座之象；又为「父母主」（父母宫主星）。生人清秀温和、形神稳重、性情磊落，善识兵法——带清贵谋略气。条件梁得地少煞；叠贪火则「温和」变清冷孤峭。"},{classic:"得昌曲左右加會，位至臺省。",vernacular:"得「昌曲左右」加会：文昌文曲+左辅右弼来会梁。文星科名、辅弼助力→「位至台省」（古高阶文官）。条件三方四正紧会；仅远照力减。现实：宜文职升迁、有文书贵人托。"},{classic:"在父母宮則厚重威嚴，會太陽於福德，極品之貴。",vernacular:"在「父母宫」则厚重威严：梁守父母，父母形象稳、有威仪。会「太阳」于「福德」→福德宫三合/同见太阳光彩，书断「极品之贵」。父母宫梁+福德会日，家世与福气都抬一档。"},{classic:"戊己生人合局，若四殺衝破則苗而不秀，逢天機耗曜，僧道清閒。",vernacular:"「戊己」生人合局：戊己年命与梁土气相合更顺。若「四杀」（羊陀火铃）冲破→「苗而不秀」：有苗头不成气候。再逢「天机耗曜」→机变+破耗，宜僧道清闲。合局看年命五行；冲破看四杀是否攻梁。"},{classic:"於貪巨同度，則敗倫亂俗。",vernacular:"于「贪巨同度」则「败伦乱俗」：梁若与贪狼巨门同宫，荫清被欲望口舌污染——易败坏伦常、乱规矩。同宫紧叠才立；梁贪巨分宫远会则轻。现实：家规礼法易松、是非情欲扰门风。"},{classic:"在奴僕疾厄作豐餘之論。",vernacular:"在「奴仆」「疾厄」作「丰余」之论：梁落奴仆或疾厄，书反按宽裕看——有人可使、病有荫挡，日子不至于枯。勿因宫名凶就断贫病到底。"},{classic:"廉貞刑忌見之，必無克敵之虞。",vernacular:"「廉贞刑忌」见之：廉化刑/忌来会梁。书断「必无克敌之虞」——有梁荫，被克被敌之象可化。仍须梁得用；梁陷再叠廉忌，克敌仍要防。"},{classic:"火鈴刑暗遇之，亦無征戰之撓。",vernacular:"「火铃刑暗」遇之：火铃+刑暗来攻。有梁则「亦无征战之挠」——硬冲战事式搅扰难成大。条件同前：梁实则化，梁虚则火铃仍凶。"},{classic:"太歲衝而為福，白虎會而無災。",vernacular:"「太岁冲」而为福、「白虎会」而无灾：流年太岁冲、白虎会照，有梁化冲化虎→冲变机、虎不成灾。流年见冲虎先查梁是否得地会照。"},{classic:"奏書會則有意外之榮，青龍動則有文書之喜。",vernacular:"「奏书」会：流年/命见奏书星来会→常有意外荣名、文书表彰。「青龙」动：青龙主喜庆文书→文书之喜（合同、任命、喜讯）。两星会梁或贵局才实；单见流年吉神也要本命能承接。"},{classic:"小耗大耗交遇所幹無成，病符官符相侵不為災論。",vernacular:"「小耗大耗」交遇：大小耗星交叠→所干无成，事易散、钱易漏。「病符官符」相侵：病符官符来侵，书说「不为灾论」——有梁托则符星口舌病讼多虚惊。耗交要防办事空转；符侵别先断坐牢大病。"},{classic:"女人吉星入廟，旺夫益子，昌曲左右扶持封贈，羊陀火忌衝破，刑剋招非不潔，僧道宜之。",vernacular:"女命「吉星入庙」（庙旺有力）→旺夫益子：夫运子运托得住。昌曲左右扶持→可「封赠」（名分荣誉）。若「羊陀火忌」冲破→刑克招非、名声不洁，宜僧道。女命梁/吉局先看入庙还是冲破，再断夫子与名节。"},{classic:"天梁原屬土，南斗最吉星，化蔭名延壽，父母宮主星，田宅兄弟內，得之福自生，",vernacular:"赋诀：天梁属土，南斗最吉；化荫名「延寿」，父母宫主星。落「田宅」「兄弟」内→得之福自生：田宅有荫产稳，兄弟有梁少争。星性+落宫两件齐，福才「自生」。"},{classic:"形神自持重，心性更和平，生來無災患，文章有聲名，六親更和睦，仕宦居王庭，",vernacular:"形神持重、心性和平、生来少灾、文章有声名、六亲和睦、仕宦居王庭——梁得用地之全象。条件：庙旺+昌曲辅弼少煞；一缺则声名或六亲打折。现实：稳重文清、家和工作都顺的那类人。"},{classic:"巨門若相會，勞碌歷艱辛，若逢天機照，僧道享山林，二星在辰戌，福壽不須論。",vernacular:"巨门相会→劳碌艰辛：梁巨同会，荫被是非口舌拖累，人多忙于辩解奔波。天机照→僧道享山林：机+梁偏清修。二星在「辰戌」（梁机庙地）→福寿不须论，极美。讲盘：梁怕巨扰，喜机清，最喜辰戌得地。"},{classic:"問七殺星所主若何？",vernacular:"问：七杀这颗星主要管什么？下面按星性、宫位、会照拆开讲——先认杀是上将孤辰，再看有无帝禄制化。"},{classic:"答曰：七殺南斗第六星也，屬火、金。",vernacular:"答：七杀是南斗第六星，五行属火、金。术语落地：杀气刚锐，带金火肃杀，主威权、压力、冲锋。"},{classic:"乃斗中之上將，實成敗之孤辰。",vernacular:"乃斗中「上将」，实「成败之孤辰」：能成大功也能孤败——杀无制则孤克，有制则掌权。讲盘先问有无紫微禄权昌曲制化。"},{classic:"在斗司斗柄，主於風憲。",vernacular:"在斗司「斗柄」，主于「风宪」：柄权、监察执法之象。落官禄/命身得地，宜纪检、军警、强势管理岗。"},{classic:"其威作金之靈，其性若清涼之狀。",vernacular:"其威作「金之灵」，其性若「清凉」：外表可冷峻清刚，骨子里杀气如金刃。得地则威而不乱；叠火铃则清凉变燥烈。"},{classic:"主於數則宜僧道，主於身定歷艱辛。",vernacular:"主于数则宜僧道：杀气重时走清修可化；主于身定历艰辛：杀守身命，人生压力大、多磨炼。条件看杀在命身还是闲宫。"},{classic:"在命宮若限不扶夭折，在官祿得地，化禍為祥。",vernacular:"在命宫若「限不扶」→夭折之忧：命有杀而大限小限不扶托，古诀防寿元。在官禄得地→化祸为祥：杀落官禄庙旺，压力变权柄，职场反而能扛事。命杀怕限空，官杀喜得地。"},{classic:"在子息，而子息孤單；",vernacular:"在「子息」（子女宫）→子息孤单：子女缘薄、教养费力或少子。杀守子女宫紧会才立；远照会轻。"},{classic:"居夫婦而鴛衾半冷。",vernacular:"居「夫妇」→鸳衾半冷：夫妻宫见杀，感情冷热不定、同床异梦象。有昌曲辅弼可减冷；杀火同宫则更僵。"},{classic:"會刑囚于田宅、父母，刑傷父母，產業難留。",vernacular:"会「刑囚」于田宅、父母：刑星+廉贞囚会田宅父母宫→刑伤父母、产业难留。同宫/对冲紧会才重；现实祖产父母缘有刑克风险。"},{classic:"逢刑忌殺於遷移、疾厄，終身殘疾，縱使一身孤獨，也應壽年不長。",vernacular:"逢「刑忌杀」于迁移、疾厄：刑忌与杀叠在迁移或疾厄→终身残疾之象，纵孤独亦寿年不长（古语气重）。今作重大健康/外伤提醒，必合疾厄流年细推，勿铁断。"},{classic:"與囚於身命，折肱傷股，又主癆傷。",vernacular:"与「囚」于身命：廉贞囚与杀同守身命→折肱伤股、痨伤——四肢伤、慢性消耗。身命同宫叠囚杀最紧。"},{classic:"會囚耗於遷移，死於道路。",vernacular:"会「囚耗」于迁移：廉贞/囚+耗星在迁移→死于道路之象（外出凶）。今作远行事故、在外重大风险年提醒，迁移宫囚耗杀交并才重。"},{classic:"若臨陷弱之宮，為殘較減。",vernacular:"若临「陷弱」之宫：杀落陷地，为「残」较减——凶残力打折，坏事未必做成极凶，贵气也撑不起。杀陷非纯吉，是凶威与成就两头都弱。"},{classic:"若值正陰之宮，作禍憂深。",vernacular:"若值「正阴」之宫：杀落阴盛宫度，作祸忧更深——阴杀暗攻，灾来更缠。阴宫+杀无制，心事与灾患都沉。"},{classic:"流年殺曜莫教逢，身殺星辰戌迭並，身殺逢惡曜於要地，命逢殺曜於三方，流殺又迭並，二限之中又逢，主陣亡掠死。",vernacular:"流年杀曜莫逢：太岁流杀催发最紧。身杀与戌迭并、身杀逢恶曜于要地、命逢杀于三方、流杀又迭并、二限又逢——层层加码，古主阵亡掠死。今作极端暴力/突发死亡风险的最重组合，须流年+限+命三层齐见才按此量级防。"},{classic:"合太陽巨門會帝旺之鄉則吉，處空亡犯刑殺遭禍不輕。",vernacular:"合太阳、巨门会「帝旺」之乡则吉：杀得日光照、巨门化用，又落帝旺地→杀可变威权吉用。处空亡、犯刑杀→遭祸不轻。同一颗杀，帝旺有日则吉，空亡刑杀则凶。"},{classic:"大小二限合身命逢殺，雖帝制也無功。",vernacular:"大小二限合身命逢杀：限与身命同见杀，虽「帝制」（紫微帝座制化）也无功——限催太紧，帝也挡不住。倒限防灾年，别只靠本命有紫微就放心。"},{classic:"三合對沖，雖祿亦無力。",vernacular:"三合对冲：杀在三合对冲位攻来，虽有禄也无力——禄挡不住对冲杀势。禄要同宫紧护才有用，远禄不解近杀。"},{classic:"蓋世英雄為殺制，此時一夢南柯。",vernacular:"盖世英雄为杀制：再英雄也被杀限制住→「一梦南柯」，功业骤歇。多应在杀强无制的倒限流年，人生高点骤跌。"},{classic:"此乃倒限之地，所主務要仔細推詳，乃數中之惡曜，實非善星也。",vernacular:"此乃「倒限」之地：杀限倒限要仔细推详。七杀是数中恶曜、实非善星——不是不能用，是默认带凶压，必须制化才谈贵。收束：见杀先查制化与限运。"},{classic:"希夷先生曰：七殺斗中上將，遇紫微則化權降福，遇火鈴則長其殺威。",vernacular:"希夷曰：七杀斗中上将。遇「紫微」则「化权」降福——帝杀同朝，杀化权柄降福。遇「火铃」则长其杀威——火铃催杀，爆发更猛。讲盘：杀喜见紫微，忌火铃无制。"},{classic:"遇兇曜於生鄉定為屠宰，會昌曲於要地，情性頑囂。",vernacular:"遇凶曜于「生乡」定为屠宰：杀在生旺地再叠凶曜，古断屠宰粗烈行业。会昌曲于要地→情性顽嚣：文星会杀，才反成嘴硬顽固。生旺杀+凶＝烈业；杀+昌曲＝才猛性拗。"},{classic:"秘經雲：七殺居陷地，沉吟福不生是也。",vernacular:"秘经云：七杀居陷地，沉吟福不生——杀陷则威用不发、福也生不出。杀要得地或有帝禄制，陷地空喊威风。"},{classic:"身命二宮逢之定歷艱辛，二限逢之遭殃破敗。",vernacular:"身命二宫逢之定历艰辛：杀守身或命，一生压力磨炼多。二限逢之遭殃破败：大限小限见杀，破败灾殃易应。本命杀定底色，限杀定应期。"},{classic:"遇帝祿而可解，遭流殺而逢兇。",vernacular:"遇「帝禄」而可解：紫微、化禄禄存来解杀凶。遭「流杀」而逢凶：流年杀曜催发则凶。解法看帝禄；应期看流杀。"},{classic:"守身命作事進退，喜怒不常。",vernacular:"守身命作事进退、喜怒不常：杀守身命，决策反复、情绪起伏大——冲劲与退缩交替。有辅弼昌曲可稳情绪。"},{classic:"左右昌曲入廟拱照，掌生殺之權，富貴出眾。",vernacular:"左右昌曲入庙拱照：辅弼+昌曲庙旺拱杀→掌生杀之权，富贵出众。杀得文辅软化又拱照，威权可用、贵气实。条件入庙拱照，陷地拱无力。"},{classic:"若四殺忌星衝破，巧藝平常之人，陷地殘疾。",vernacular:"若四杀忌星冲破：羊陀火铃+忌冲破杀局→巧艺平常之人；陷地则残疾。杀贵局怕四杀忌再破；杀已陷再破，健康仪损加重。"},{classic:"女命旺地，財權服眾，志過丈夫。",vernacular:"女命旺地：杀落旺宫→财权服众，志过丈夫——魄力强、能管事压场。女杀旺是能力象，不是必然凶；再看有无四杀冲破。"},{classic:"四殺衝破刑剋不潔，僧道宜之，若殺湊飄蕩，流移還俗。",vernacular:"四杀冲破→刑克不潔，僧道宜之。若杀凑「飘荡」、流移还俗：杀气催得人漂，出家也难安，易还俗流动。女命杀局：冲破则名节压力，杀凑则安不住一处。"},{classic:"七殺寅申子午宮，四夷拱手服英雄，魁鉞左右文昌會，權祿名高食萬鍾，",vernacular:"赋：杀居寅申子午（杀之旺地）→四夷拱手服英雄，魁钺左右文昌会→权禄名高食万钟。条件：杀旺宫+魁钺辅弼昌会，才是威权厚禄；缺一会则「服英雄」打折。"},{classic:"殺居陷地不堪言，兇禍猶如抱虎眠，若是殺強無制伏，少年惡死到黃泉。",vernacular:"杀居陷地不堪言：凶祸如抱虎眠。若杀强无制伏→少年恶死到黄泉（古极重）。陷杀怕突发灾；旺杀无紫微禄权昌曲制，少年横祸风险升——今作高强度风险管理，勿铁断岁数。"},{classic:"問破軍所主若何？",vernacular:"问：破军这颗星主要管什么？下面按耗性、宫位、同度拆开——先认化气为耗，再看十二宫应事。"},{classic:"答曰：破軍屬水，北斗第七星也，司夫妻、子息、奴僕之神。",vernacular:"答：破军属水，北斗第七星，司夫妻、子息、奴仆之神——这三宫见破，变动破耗最显。"},{classic:"居子午入廟，在天為殺氣，在數為耗星，故化氣曰耗。",vernacular:"居子午入庙：破军庙地。在天为杀气，在数为「耗星」，故化气曰「耗」——主冲破、耗散、拆再建。庙破仍是耗，只是力更整、能成大破大立。"},{classic:"主人暴兇狡詐，其性奸猾，與人寡合，動輒損人。",vernacular:"主人暴凶狡诈、性奸猾、与人寡合、动辄损人——破耗性格底色。得禄权天梁可减暴；叠羊火则暴更显。"},{classic:"不成人之善，善助人之惡。",vernacular:"不成人之善，善助人之恶：帮衬难往正向，易往破局、拆台一路。破军无德星（梁昌禄）托时，这句更贴。"},{classic:"虐視六親如寇讎，處骨肉無仁義，惟六癸六甲生人合格主富貴。",vernacular:"虐视六亲如寇仇、处骨肉无仁义——六亲宫见破或破守命，亲情易冷硬。惟「六癸六甲」生人合格主富贵：甲癸年命与破水局合，破可化权贵。年命合则破成格，不合则六亲刑重。"},{classic:"陷地加殺衝破，巧藝殘疾，不守祖業，僧道宜之。",vernacular:"陷地加杀冲破→巧艺残疾、不守祖业，僧道宜之。破已陷再叠杀冲，技艺养家、祖产难留，宜清修淡泊。"},{classic:"女人衝破淫蕩無恥。",vernacular:"女人冲破→淫荡无耻（古语气重）：女命破军被冲破，情欲名节易受议。今作感情反复、界限松的提醒，须全盘吉凶合参，勿辱骂式铁断。"},{classic:"此星居紫微則失威權；",vernacular:"此星居紫微则失威权：破军同宫/紧会紫微→帝座被耗，威权打折。紫破同宫，贵气不稳、权柄易泄。"},{classic:"逢天府則作奸偽；",vernacular:"逢天府则作奸伪：破会天府库星→库被耗，表面稳厚内里奸伪变局。府破同度，财务信用要防暗耗。"},{classic:"會紫貪則鼠竊狗盜。",vernacular:"会紫贪则鼠窃狗盗：紫微+贪狼+破军党会→欲望+耗破，古断偷窃苟且。今作投机旁门、灰色手段风险，紫贪破三会才重。"},{classic:"與廉貞火鈴同度則決起官非；",vernacular:"与廉贞火铃同度→决起官非：破+廉+火铃，口舌官司易爆。同宫紧叠应官非最快。"},{classic:"與巨門同度則口舌爭斗；",vernacular:"与巨门同度→口舌争斗：破耗叠巨门是非，吵闹诉讼多。辩驳中易把事闹大。"},{classic:"與刑忌同度，則終身殘疾。",vernacular:"与刑忌同度→终身残疾：破+化刑/忌，健康仪损、慢性伤残象。疾厄命身见之更紧。"},{classic:"與武曲入財位則東傾西敗；",vernacular:"与武曲入财位→东倾西败：武曲财星+破军在财帛→财来财去、东倒西歪。财位破武，投资合伙最怕漏。"},{classic:"與文星守命一生貧士。",vernacular:"与文星守命→一生贫士：文昌文曲+破守命，文名虚、钱难聚，清贫文士象。文破同命，靠笔墨难致富。"},{classic:"遇諸兇結黨破敗，遇陷地其禍不輕。",vernacular:"遇诸凶结党破败：羊陀火铃忌等与破结党→破败加重。遇陷地其祸不轻：破再陷，祸更沉。破怕结党，更怕陷。"},{classic:"惟天梁可制其惡，天祿可解其狂。",vernacular:"惟「天梁」可制其恶，「天禄」（禄存化禄）可解其狂：梁荫制破之恶，禄填破之耗。见破先找梁禄是否同会。"},{classic:"若逢流殺交併，家業蕩空。",vernacular:"若逢「流杀」交并→家业荡空：流年杀曜与破交并，破家应期。流年破杀齐见，守财慎动产。"},{classic:"與文曲入於水域，殘疾、離鄉。",vernacular:"与文曲入于「水域」（水宫如亥子等）→残疾、离乡：曲破叠水，文弱受耗，伤残或远迁。水宫曲破，外地健康要防。"},{classic:"遇文昌於震宮，遇吉可貴。",vernacular:"遇文昌于「震宫」（卯宫）→遇吉可贵：昌在卯会破，若另有吉托，反可贵。破不全凶，昌震+吉可化贵。"},{classic:"若女命逢之，無媒自嫁，喪節飄流。",vernacular:"女命逢之→无媒自嫁、丧节飘流：破守女命夫妻/命身，婚嫁不按常轨、漂泊失所。有梁昌辅可减飘。"},{classic:"凡坐人身命居子午，貪狼七殺相拱則威震華夷。",vernacular:"凡坐人身命居子午（破庙），贪狼七杀相拱→威震华夷：庙破得贪杀拱，威势极大。子午破+贪杀拱，武贵英雄格。"},{classic:"或與武曲同居巳宮，貪狼拱亦居臺閣。",vernacular:"或与武曲同居巳宫，贪狼拱→亦居台阁：巳上武破+贪拱，财杀耗成权，台阁官贵象。宫度与拱会两件齐才立。"},{classic:"但看惡星何如？",vernacular:"但看恶星何如：上文贵格还要查羊陀火铃忌是否攻破——恶星一多，威震变凶险。破格成否，恶星一票否决。"},{classic:"甲癸生人入格，到老亦不全美也。",vernacular:"甲癸生人入格，到老亦不全美：甲癸合破水局可入格富贵，但破耗底色在，老来仍有缺憾不全。合格≠十全。"},{classic:"在身命陷地，棄祖離宗；",vernacular:"在身命陷地→弃祖离宗：破陷守身命，难守祖业、易离宗门。现实：早离家、不继承祖业。"},{classic:"在兄弟骨肉參商；",vernacular:"在兄弟→骨肉参商：兄弟宫见破，手足不和、各奔东西。破入兄弟，少互助多分散。"},{classic:"在夫妻不正，主婚姻進退；",vernacular:"在夫妻不正，主婚姻进退：夫妻宫破，婚配不正经或婚事反复进退。破守夫妻，婚局难一次定。"},{classic:"在子息先損後成；",vernacular:"在子息先损后成：子女宫破，子女缘先挫后立，或头胎难、后乃成。破入子女，先耗后成。"},{classic:"在財帛如湯澆雪；",vernacular:"在财帛如汤浇雪：财帛见破，钱来即化，聚不住。财位破军，现金流防大进大出。"},{classic:"在疾厄致尪贏之疾；",vernacular:"在疾厄致尪羸之疾：疾厄见破，体弱慢性消耗、赢瘦难养。破入疾厄，保养重于猛补。"},{classic:"在遷移奔走無力；",vernacular:"在迁移奔走无力：迁移见破，奔波却少成果，走动耗力。外地发展易费力不讨好。"},{classic:"在奴僕謗怨逃走；",vernacular:"在奴仆谤怨逃走：奴仆宫破，下属怨谤、人留不住。团队易散、口碑摩擦。"},{classic:"在官祿主清貧；",vernacular:"在官禄主清贫：官禄见破，职场难聚财位，清贵或清贫。官破宜守清职，忌贪功冒进。"},{classic:"在田宅陷度，祖基破蕩；",vernacular:"在田宅陷度→祖基破荡：田宅破且陷，祖产房产易荡。置产防卖房拆分。"},{classic:"在福德多災；",vernacular:"在福德多灾：福德见破，心境不安、福气耗、灾扰多。精神消耗大于体灾。"},{classic:"在父母破相刑剋。",vernacular:"在父母破相刑克：父母宫破，父母缘刑克、或父母仪容病伤。破入十二宫，宫义+耗性合参下断。"},{classic:"問文昌星所主若何？",vernacular:"问：文昌星主要管什么？主科甲文名——下面按身命会照、旺陷冲破拆开讲。"},{classic:"答曰：文昌主科甲，守身命主人幽閒儒雅，清秀魁梧，博文廣記，機變異常，一舉成名，披緋衣紫，福壽雙全。",vernacular:"答：文昌主科甲。守身命→人幽闲儒雅、清秀魁梧、博文广记、机变异常；一举成名、披绯衣紫、福寿双全——文贵全象。条件昌入庙旺；陷地则儒雅在、功名打折。"},{classic:"縱四殺衝破不為下賤。",vernacular:"纵四杀冲破不为下贱：昌守命即使羊陀火铃冲，仍不至下贱——文气托底。冲破减贵不灭文种。"},{classic:"女人加吉得地，衣祿充足。",vernacular:"女人加吉得地→衣禄充足：女命昌得吉拱、落得地，衣食禄丰。女昌喜得地加吉。"},{classic:"四殺衝破，偏房下賤，僧道宜之。",vernacular:"四杀冲破→偏房下贱，僧道宜之（古语气）：女昌被四杀冲，名分地位易偏，宜清修。今作婚位不正、压力大时的选择提醒。"},{classic:"加權祿厚重有師號。",vernacular:"加「权禄」→厚重有师号：昌得化权化禄，文权重、可有师尊名号、教职头衔。权禄托昌，名位更实。"},{classic:"文昌主科甲，辰巳是旺地，利午嫌卯酉，火生人不利，眉目定分明，相貌極俊麗，",vernacular:"赋：文昌主科甲；辰巳旺地；利午嫌卯酉；火生人不利。眉目分明、相貌俊丽——昌得地之相。讲盘先查落宫旺陷与年命五行。"},{classic:"喜於金生人，富貴雙全美，先難而後易，中晚有聲名，太陽蔭福集，傳臚第一名。",vernacular:"喜金生人，富贵双全；先难后易，中晚有声名。太阳荫福集→传胪第一名：日+昌会，科名殿试之象。金年命喜昌；日昌会照主文贵高峰。"},{classic:"問文曲星所主若何？",vernacular:"问：文曲星主要管什么？主科甲文车巧艺，与文昌对照——昌偏正统科名，曲偏巧艺舌辩。"},{classic:"答曰：文曲屬水，北斗第四星也，主科甲文車之宿。",vernacular:"答：文曲属水，北斗第四星，主科甲「文车」之宿——文书车马、文职奔走。水象灵活，亦带桃花浪。"},{classic:"其象屬水，與文昌同協，吉數最為祥，臨身命中作科第之客。",vernacular:"其象属水，与文昌同协，吉数最祥。临身命中作「科第之客」——身命见曲，走科考文职一路。昌曲同参，文气更足。"},{classic:"桃花浪暖，入仕無疑。",vernacular:"「桃花浪暖」入仕无疑：曲带桃花文浪，得地则入仕顺。曲喜水旺得辅，忌破军贪狼搅。"},{classic:"於官祿面君顏而執政。",vernacular:"于官禄「面君颜而执政」：曲在官禄，近领导、执行政务文书。官禄曲，宜秘书幕僚文职。"},{classic:"單居身命，吏逢兇曜，亦作無名舌辯之徒。",vernacular:"单居身命，吏逢凶曜→亦作无名舌辩之徒：曲独守身命再叠凶，有嘴才无功名，舌辩吏员、说客之象。"},{classic:"與廉貞共處必作公吏官。",vernacular:"与廉贞共处必作公吏官：曲+廉同宫，公文狱讼吏职——公门办事员、执法文书岗。"},{classic:"身與太陰同行，定系九流術士。",vernacular:"身与太阴同行→定系九流术士：身宫曲+太阴，偏术数、技艺、九流专业，非正途科甲。"},{classic:"怕逢破軍恐臨水以生災；",vernacular:"怕逢破军，恐临水以生灾：曲破同会又临水宫，水厄伤残灾。曲最忌破军叠水。"},{classic:"嫌遇貪狼蒞政事而顛倒。",vernacular:"嫌遇贪狼，莅政事而颠倒：曲贪同度，政事反复、决策被欲望带偏。曲贪不宜掌实权行政。"},{classic:"逢七殺刑忌囚及諸惡曜，詐偽莫逃。",vernacular:"逢七杀刑忌囚及诸恶曜→诈伪莫逃：曲叠杀刑忌廉恶，文才变诈伪巧辩。恶曜结党则文不成德。"},{classic:"逢巨門共其度，和而喪志。",vernacular:"逢巨门共度→和而丧志：曲巨同宫，表面随和，志向被口舌消磨。辩才在、成事志弱。"},{classic:"女命不宜於逢，水性楊花。",vernacular:"女命不宜于逢→水性杨花（古喻）：女命曲重，情易游移。有禄梁辅可稳；叠贪破则更飘。"},{classic:"忌入土宮，限臨蹭蹬。",vernacular:"忌入土宫，限临蹭蹬：曲属水忌土宫（辰戌丑未等）克水；大限临之功名蹭蹬。水曲落土，限运易绊。"},{classic:"若祿存、化祿來纏，不可以為兇論。",vernacular:"若禄存、化禄来缠→不可以凶论：曲虽见煞，有禄缠则化凶——财禄托文，仍可用。曲逢禄，先别断凶。"},{classic:"希夷先生曰：文曲守身命，居巳酉丑宮居侯伯。",vernacular:"希夷曰：文曲守身命，居巳酉丑（曲之金水局地）→居侯伯。宫度对则文贵到侯伯级。"},{classic:"武貪三合同垣，將相之格，文昌遇合亦然。",vernacular:"武贪三合同垣→将相之格；文昌遇合亦然：武曲贪狼三合/同垣成局，将相象；昌来会合同论。武贪+昌曲党，文武大贵。"},{classic:"午戌之地，巨門羊陀衝破，喪命夭折，水大驚險。",vernacular:"午戌之地，巨门羊陀冲破→丧命夭折、水大惊险：曲在午戌被巨羊陀冲，古防水厄寿险。今作该限健康交通水深风险，午戌曲+巨羊陀才按此量级。"},{classic:"若亥卯未旺地，與天梁天相會主聰明博學，殺衝破只宜僧道。",vernacular:"若亥卯未旺地，与天梁天相会→聪明博学；杀冲破只宜僧道。曲在亥卯未得梁相，文清博学；再被杀冲则贵减，宜清修文教。"},{classic:"若女命值之清秀聰明主貴，若陷地衝破淫而且賤。",vernacular:"女命值之清秀聪明主贵；若陷地冲破→淫而且贱（古语气）。女曲得地则慧贵；陷破则名节情欲受议——今作感情与名声风险管理。"},{classic:"問流年昌曲若何？",vernacular:"问：流年见到文昌文曲怎么看？专论科名应期——本命文气+流年昌曲催发最紧。"},{classic:"答曰：命逢流年昌曲，為科名科甲。",vernacular:"答：命逢流年昌曲→为科名科甲之应。本命有文气，流年昌曲催发，考试升学评职称易应。"},{classic:"大小二限逢之，三合拱照太陽，又照流年祿；",vernacular:"大小二限逢之，三合拱照太阳，又照流年禄：限见昌曲+三合会日+流禄齐→科贵财禄同亮，高中机会大。"},{classic:"小限太歲逢魁鉞、左右、臺座、日月、科權祿馬三方拱照，決然高中無疑。",vernacular:"小限太岁逢魁钺、左右、台座、日月、科权禄马三方拱照→决然高中无疑。吉神贵人科权禄马层层拱，科举/考试年最美。条件要多星俱会，不是单见一颗昌曲。"},{classic:"然亦此數星俱全方為大吉，但以流年科甲為主。",vernacular:"然须此数星俱全方为大吉；但以流年科甲为主——以流年昌曲科名为纲，其余为辅。缺几颗降档，不无昌曲就说零。"},{classic:"如命限值之，其餘吉曜，若得二三拱照，亦必高中。",vernacular:"如命限值之，其余吉曜得二三拱照，亦必高中：命限有昌曲，再有两三颗吉拱，也可成事。不必满盘全吉。"},{classic:"但二星在巳酉得地，不富即貴，只是不能耐久。",vernacular:"但二星在巳酉得地→不富即贵，只是不能耐久：昌曲落巳酉有力，富贵来得快，持续力弱。巳酉昌曲，发早防后劲。"},{classic:"南北昌曲星，數中推第一，身命最為佳，諸吉恐非吉，得居人命上，桃花浪三汲，",vernacular:"赋：南北昌曲，数中推第一；身命最佳。诸吉恐非吉——光有别的吉不如昌曲贴身命。得居人命上，桃花浪三汲——文浪催发，名情都动。"},{classic:"入仕更無虛，從容要輔弼，只恐惡殺臨，火鈴羊陀激，若還逢陷地，苗而不秀實，",vernacular:"入仕更无虚；从容要辅弼。只恐恶杀临、火铃羊陀激；若逢陷地→苗而不秀。昌曲入仕要辅弼托；怕煞激与陷地——有名无实、考而不成。"},{classic:"不是公吏輩，九流工數術，無破宰職權，女人多淫佚，樂居亥子宮，空亡官無益。",vernacular:"不是公吏辈，即九流工数术；无破宰职权。女人多淫佚（古）。乐居亥子；空亡官无益。昌曲无破可掌权；女曲防情欲议；喜水地亥子；落空亡则官贵无益。"},{classic:"問左輔所主若何？",vernacular:"问：左辅主要管什么？左辅是辅弼贵人星，专佐帝座——守哪宫就给哪宫加助力福力。"},{classic:"希夷先生答曰：左輔帝極主宰之星，守身命諸宮降福。",vernacular:"希夷答：左辅是「帝极主宰」之星——辅紫微帝座。守身命诸宫降福：辅临何宫，何宫得助力福力。"},{classic:"主人形貌敦厚慷慨風流。",vernacular:"主人形貌敦厚、慷慨风流——辅得地之相与性情。叠火忌则敦厚变躁；得紫府则风流变贵气。"},{classic:"紫府祿權若得三合衝照，主文武大貴。",vernacular:"紫府禄权若得三合冲照→文武大贵：辅会紫微天府+禄权，三合冲照齐，文武贵格。辅不孤贵，要会君星禄权。"},{classic:"火忌衝破，雖富貴不久。",vernacular:"火忌冲破→虽富贵不久：辅局被火铃化忌冲，贵来难久。辅贵怕火忌截断；见火忌先降持久度。"},{classic:"僧道清閒，所以溫重賢曉，旺地封贈。",vernacular:"僧道清闲；所以温重贤晓，旺地封赠：辅旺可封赠名号；清闲僧道亦合辅之温厚。旺辅主名位赠封。"},{classic:"火忌衝破，以中局斷之。",vernacular:"火忌冲破，以「中局」断之：辅被火忌破，不按上贵，降为中等格局。冲破降档，不是全废——仍有中等福力。"},{classic:"問右弼所主若何？",vernacular:"问：右弼主要管什么？与左辅成对，同为帝佐——弼偏文墨辅佐，辅偏敦厚气度。"},{classic:"希夷先生答曰：右弼帝極主宰之星，守身命文墨精通。",vernacular:"希夷答：右弼亦帝极主宰之星；守身命→文墨精通。弼偏文墨辅佐，辅偏敦厚气度——可对看；身命见弼，文书学问有托。"},{classic:"紫府吉星同垣，財官雙美，文武雙全。",vernacular:"紫府吉星同垣→财官双美、文武双全：弼与紫府吉同宫，财官文武都托得住。同垣紧叠力大于远会。"},{classic:"羊陀火忌衝破，下局斷之。",vernacular:"羊陀火忌冲破→下局断之：弼被羊陀火忌破，降为下局。辅怕火忌，弼怕羊陀火忌——冲破则贵人虚、助力断。"},{classic:"女人賢良有志，縱四殺衝破，不為下賤，僧道清閒。",vernacular:"女人贤良有志；纵四杀冲破不为下贱，僧道清闲。女弼有志节托底，冲破减贵不至下贱；清修亦合弼之文静。"},{classic:"左輔原屬土，右弼水為根，失君為無用，三合宜見君，若在紫微位，爵祿不須論，",vernacular:"赋：左辅属土，右弼水为根；失君为无用——不见紫微/君星则辅弼力虚。三合宜见君；若在紫微位，爵禄不须论——辅弼贴紫微，贵气满。"},{classic:"若在夫妻位，主人定二婚，若與廉貞並，惡賤遭鉗髡，輔弼為上相，輔佐紫微星，",vernacular:"若在夫妻位→主人定二婚：夫妻宫见辅或弼，常主二婚/二人以上婚配（助力多亦主关系复数）。若与廉贞并→恶贱遭钳髡（刑伤贱役，古）。妻宫辅弼看复数婚；辅廉并防刑贱。"},{classic:"喜居日月側，文人遇禹門，倘居閒位上，無爵更無名，妻宮遇此宿，決定兩妻成，",vernacular:"辅弼为上相，辅佐紫微；喜居日月侧→文人遇禹门（科名龙门）。倘居闲位→无爵更无名。辅弼要贴帝/日月/命官，闲宫则虚贵。"},{classic:"若與刑囚處，遭傷作盜賊。",vernacular:"妻宫遇此宿，决定两妻成；若与刑囚处→遭伤作盗贼。重申：夫妻宫辅弼主两妻/二婚；再叠刑囚，关系刑伤、行为走偏。妻宫辅弼+刑囚，婚复且防官非。"},{classic:"問天魁天鉞星所主若何？",vernacular:"问：天魁天钺主要管什么？斗中司科之贵人星——主贵人提携、科名机会与危难中的扶助。"},{classic:"希夷先生答曰：魁鉞斗中司科之星，入命坐貴向貴，或得左右吉聚無不富貴。",vernacular:"希夷答：魁钺司科之星；入命「坐贵向贵」——命见魁钺，贵人运、向贵处靠。或得左右吉聚→无不富贵。魁钺+辅弼吉聚，贵人实、富可期。"},{classic:"況二星又為上界和合之神，若魁臨命，鉞守身，更迭相守。",vernacular:"二星又为上界「和合之神」；若魁临命、钺守身，更迭相守——命身分守魁钺，贵人日夜相随。命魁身钺（或互调）是紧贵人局。"},{classic:"更遇紫微府、日月、昌曲、左右、權祿相湊，少年必聚美妻。",vernacular:"更遇紫微府、日月、昌曲、左右、权禄相凑→少年必聚美妻。魁钺再叠帝府日月文辅权禄，少年姻缘美、人得配。贵人局凑全，婚亦抬。"},{classic:"若遇大難，必得貴人成就扶助，小人不一，亦不為兇。",vernacular:"若遇大难，必得贵人成就扶助；小人不一，亦不为凶——贵人能解难，小人扰不成大凶。魁钺得用，危中有托。"},{classic:"限步巡逢必主女子添喜，生男則俊雅，入學功名有成。",vernacular:"限步巡逢→必主女子添喜；生男则俊雅，入学功名有成。限运逢魁钺，生育喜、男孩清俊向学。限催贵人，子女教育年。"},{classic:"生女則容貌端莊，出眾超群；",vernacular:"生女则容貌端庄、出众超群：同一限逢，生女仪容出众。魁钺限上，子女仪表气质佳；与上句同限不同性别之象。"},{classic:"若四十以後逢墓庫，不依此斷。",vernacular:"若四十以后逢「墓库」，不依此断：中年后限入墓库，子女添喜之断要改——墓库收气，不按少年魁钺喜断。四十后墓库，改看收敛守成。"},{classic:"有兇不以為災，居官者賢而威武，聲名遠播。",vernacular:"有凶不以为灾：魁钺在，凶可化。居官者贤而威武，声名远播——官禄/命见魁钺，官声贤威远。收束：魁钺主贵人科名官声，凶来有解、官声可扬。"},{classic:"僧道享福，與人和睦，不為下賤。",vernacular:"「僧道」指出家身份；若本段格局吉星多、煞少→享福象成立。现实上看：出家人日子多半安稳、与人和睦，地位不至落到很下贱。"},{classic:"女人吉多宰輔之妻，命婦之論。",vernacular:"女命「吉多」：禄权昌曲辅弼等吉星占优、少煞冲。古书拿宰相夫人、有封号的「命妇」作比——配偶位高、自己体面，非单指真宰相妻。"},{classic:"若加惡殺亦為富貴，但不免私情淫佚。",vernacular:"吉局再「加恶杀」（羊陀火铃七杀等同见）：富贵象仍可立，但条件变成吉煞并见。现实含义：有钱有位之外，往往夹私情、风流越界事，情欲口舌要防。"},{classic:"天乙貴人眾所欽，命逢金帶福彌深，飛騰名譽人爭慕，博雅皆通古與今，",vernacular:"「天乙贵人」主贵人提携、体面；命逢「金带」类吉象（贵人带禄权）→福更深。现实上看：名声往上走、人争慕，学问广、古今通，像人人敬重的通才。"},{classic:"魁鉞二星限中強，人人遇此廣錢糧，官吏逢之發財福，當年必定見君王。",vernacular:"「天魁」「天钺」是贵人星；在大限/小限里庙旺有力→限上贵气开。普通人逢之钱粮易宽；官吏逢之发财添福。书断「见君王」=当年易见上级、受提拔，勿死抠皇帝。"},{classic:"問祿存星所主若何？",vernacular:"问：禄存星主要管什么？术语上禄存属北斗禄星；下文按宫位、会照、行业分断其财官寿基。"},{classic:"希夷先生答曰：祿存北斗第三星，真人之宿，主人貴爵，掌人壽基。",vernacular:"希夷答：「禄存」是北斗第三星，称真人之宿。术语上主贵爵、掌寿基——管禄位厚薄与根基寿命，不是单纯「有钱」一词能概括。"},{classic:"帝相扶之施權，日月得之增輝。",vernacular:"「帝」=紫微、「相」=天相来扶禄存→权柄好施展；太阳、太阴得禄存拱会→光彩更足。条件：紫相/日月与禄存同宫或三方会照，权禄才亮。"},{classic:"天府武曲為厥職，天梁天同共其祥。",vernacular:"禄存与「天府」「武曲」同会，算本职搭档（府库+财星+禄）；与「天梁」「天同」同宫/会照→共祥，福荫安逸齐。讲盘先看这几星是否实会。"},{classic:"十二宮中惟身命、田宅、財帛為要，主富。",vernacular:"十二宫里，禄存落「身宫」「命宫」「田宅」「财帛」最要紧——这几宫贴身、贴产、贴钱，故主富。落闲宫则富象虚。"},{classic:"居遷移則佳，與帝星守官祿宜子孫爵秩。",vernacular:"禄存居「迁移宫」仍佳（外乡求财、走动有禄）；与紫微「帝星」同守「官禄」→官途有禄库。亦利「子孙」爵秩：后代升迁有望。"},{classic:"若獨守命而無吉化，乃看財奴耳。",vernacular:"条件：禄存独守命宫，又无化禄/化权/化科及辅弼昌曲来会→只剩守财之象。现实含义：古书说「看财奴」——有钱舍不得用、格局窄，不是大格局富。"},{classic:"逢吉逞其權，遇惡敗其跡。",vernacular:"禄存「逢吉」（禄权昌曲紫府）→权势能发挥，禄用得上；「遇恶」（羊陀火铃忌空）→名声事迹易砸，禄路被破。吉恶比重决定禄是实福还是虚禄。"},{classic:"最嫌落於陷空不能為福，更湊火鈴空劫，巧藝安身。",vernacular:"最嫌禄存落「陷地」「空亡」——无力为福；再凑「火星」「铃星」「天空」「地劫」→禄马空催。现实含义：多半靠手艺、技术安身，难走纯财官捷径。"},{classic:"蓋祿爵當得勢而享之，守身命主人慈厚信直，通文濟楚。",vernacular:"「禄爵」要得势（庙旺、有吉化限运）才能真享；守身/命时，人往往慈厚、信实、耿直，文采也过得去（通文济楚）。势不到则禄爵空挂。"},{classic:"女人清淑機巧能幹能為，有君子之志。",vernacular:"女命禄存得地：清淑机巧、能干能为，志气像君子——不单柔顺，敢做事。条件仍是禄存不陷、少煞冲。"},{classic:"紫府廉同會合，作祿存上局。",vernacular:"「紫微」「天府」「廉贞」与禄存会合→算禄存上局：帝库囚（廉）禄齐，贵财有骨。缺一会则降格。"},{classic:"大抵此星諸宮降福消災。",vernacular:"总断：禄存落诸宫，多半能「降福消灾」——有禄可挡小灾；但陷空+火铃劫则此句不成立，要先查庙旺。"},{classic:"斗北祿存星，數中為上局，守值身命內，不貴多金玉，此為迪吉星，亦可登仕路，",vernacular:"北斗禄存在斗数里算上局；守身命→不一定非大贵，也主金玉财禄厚。称「迪吉星」，亦可登仕路——禄开则文途武途都有门。"},{classic:"文人有聲名，武人有厚祿，常庶發橫財，僧道亦主福，官吏若逢之，斷然食天祿。",vernacular:"分行业看禄存：文人易有声名；武人俸禄厚；常庶（普通人）可发横财；僧道亦主有福；官吏逢之，书断「食天禄」=吃得上公职俸禄、编制内实惠。"},{classic:"夾祿拱貴並化祿，金裡重逢金滿屋，不惟方丈比諸侯，一食萬鍾猶未足，",vernacular:"「夹禄」「拱贵」再并「化禄」→禄上叠禄、贵人夹拱，金里重逢金满屋。排场大到「方丈比诸侯、一食万钟犹未足」——财禄场面极盛，易奢。"},{classic:"祿存對向守遷移，三合逢之利祿宜，得逢遐邇人欽敬，的然白手起家基。",vernacular:"禄存对宫守着「迁移」，三合再逢禄→利禄宜。远近人钦敬，往往能白手起家：外乡/对宫开财路，走动中立业。"},{classic:"問天馬星所主若何？",vernacular:"问：天马星主要管什么？天马主走动迁动；下文按身命称驿马，并分禄马、战马、死马等格名条件。"},{classic:"希夷先生答曰：諸宮各有制化，如身命臨之謂之驛馬。",vernacular:"希夷答：天马落各宫制化不同；落「身宫」「命宫」特称「驿马」——主走动、迁动、坐不定。先辨宫位，再谈吉凶。"},{classic:"喜祿存、紫府、昌曲，守照為吉。",vernacular:"天马喜与「禄存」「紫微」「天府」「文昌」「文曲」守照同会→马带禄贵文，走动有成，才算吉马。独马无吉则空奔。"},{classic:"如大小二限臨之，更遇祿存紫府，流昌必利。",vernacular:"大限、小限临天马，再遇禄存、紫府，流年再见文昌→限上马动+禄贵文齐，必利：调动升迁、外出求财易顺。"},{classic:"如與祿存同宮，謂之祿馬交馳，又曰折鞭馬；",vernacular:"天马与禄存同宫：「禄马交驰」（动中求财）；又称「折鞭马」——马快禄催，利奔波发财，也主鞭策不停、难闲。"},{classic:"紫府同宮謂之扶轝馬；",vernacular:"天马与紫微、天府同宫：称「扶轝马」——帝库扶轿，走动带贵气，宜公干、随贵人出行提携。"},{classic:"刑殺同宮謂之負屍馬；",vernacular:"天马与「刑」（羊刑/化刑类）、「七杀」同宫：称「负尸马」——走动带刑杀，主奔波见血光、丧事、凶险差事，勿当吉马。"},{classic:"火星同宮謂之戰馬；",vernacular:"天马与「火星」同宫：称「战马」——动中带火爆冲杀，宜武职竞逐、冲锋，也主急躁、冲突中奔走。"},{classic:"日月同宮謂雌雄馬；",vernacular:"天马与「太阳」「太阴」同宫：称「雌雄马」——日月一阳一阴夹马，走动显光彩，名利奔走、昼夜难停。"},{classic:"逢空亡謂之死馬、亡馬；",vernacular:"天马逢「空亡」（天空/空亡位）：称「死马」「亡马」——马力落空，奔波无果，计划走空。"},{classic:"居絕死謂之死馬；",vernacular:"天马居「绝」「死」之地（十二长生绝死位）：亦称「死马」——动得无力、走不动或越走越差，马象废。"},{classic:"遇陀羅謂之折足馬。",vernacular:"天马遇「陀罗」：称「折足马」——走动受绊、腿脚伤、行程卡死。现实上常换计划却迈不开步。"},{classic:"以上犯此數者，俱主災病，流年值之依此斷。",vernacular:"上文负尸/战/死/折足等凶马格：犯之俱主灾病。流年、限运值这些组合，就按对应马格断——别只见马就断吉利走动。"},{classic:"問化祿星所主若何？",vernacular:"问：化禄星主要管什么？四化之「禄」主财福进益、机会落地；下文看守身命官禄与科权并见。"},{classic:"希夷先生答曰：祿為福德之神。",vernacular:"希夷答：「化禄」是福德之神——主进财、机会、福气落地，与禄存同属禄系但更偏「当年/当限的禄气」。"},{classic:"守身命官祿之位，科權相逢必作大臣之職。",vernacular:"化禄守身/命/官禄，再「科权相逢」（化科、化权同会）→禄权科齐。古书「大臣之职」=高职权位、决策层，今作管理层/要职看。"},{classic:"小限逢之主進財入仕之喜。",vernacular:"「小限」逢化禄：主进财、入仕一类喜事——当年财路开、职场有进阶机会。小限贴身，应验偏快。"},{classic:"大限十年吉慶無疑，惡曜來臨並羊陀火忌衝照，亦不為害。",vernacular:"「大限」十年逢化禄：吉庆多半无疑；即便恶曜、羊陀、火、忌冲照，也往往伤不大——禄气厚能挡煞。仍须看冲破是否过重。"},{classic:"女人吉湊作命婦，二限逢之，內外威嚴，殺湊平常。",vernacular:"女命吉星凑齐+化禄：可作命妇（配偶贵、自己有封体面）；二限逢之内外威严；若「杀凑」则降为平常——煞多则禄贵打折。"},{classic:"問化權星所主若何？",vernacular:"问：化权星主要管什么？四化之「权」主权柄决断、说了算；下文看科禄并见与煞破贬谪。"},{classic:"希夷先生答曰：權星掌判生殺之神。",vernacular:"希夷答：「化权」掌判生杀——术语上主权柄、决断、生杀予夺之势，不是单指暴力，而是「说了算」的力量。"},{classic:"守身命科祿相逢出將入相。",vernacular:"化权守身/命，再逢化科、化禄→权禄科齐。古断「出将入相」=文武高位；今作权责大、能拍板、升迁到关键岗。"},{classic:"科權相逢必定文章冠世，人皆欽仰。",vernacular:"「化科」与「化权」相逢：文名+权柄，文章往往出众、人皆钦仰——考试、发表、专业话语权都易亮。"},{classic:"小限相逢，無有不吉。",vernacular:"小限逢化权：基本无不吉——当年做事有权势、推进力强，宜争取主导权。"},{classic:"大限十年，必然遂志。",vernacular:"大限十年逢化权：志向多半能遂——十年里权柄在手，目标易落地；忌叠太重煞则「遂志」打折。"},{classic:"如逢羊陀耗使劫空，聽讒貽累，官災貶謫。",vernacular:"化权若逢羊陀、「耗」「使」（大耗/天使类）、「劫空」：权被破耗。现实含义：听谗言惹累、官灾贬谪、职位被掏空——有权反成靶子。"},{classic:"女人得之內外稱志，可作命婦。",vernacular:"女命得化权：内外称志（家里外头都说了算），可作命妇——配偶贵或自己有职场权柄。"},{classic:"僧道掌山林有師號。",vernacular:"僧道得化权：能「掌山林」、有师号——教团里有职衔、管事权，不是挂名清修。"},{classic:"問化科星所主若何？",vernacular:"问：化科星主要管什么？四化之「科」主考试文墨、名声正途；下文看权禄并见与四杀冲破仍可文贵。"},{classic:"希夷先生答曰：科星上界應試，主掌文墨之星。",vernacular:"希夷答：「化科」应上界考试之象，主掌文墨——功名、考试、文书、专业名声。科亮则名正。"},{classic:"守身命權祿相逢宰臣之貴。",vernacular:"化科守身/命，再逢化权、化禄→科权禄齐。古断「宰臣之贵」=近决策、文贵；今作高考/职称/专业权威易成。"},{classic:"如逢惡曜亦為文章秀士，可作群英師範。",vernacular:"即使逢恶曜，化科仍主文章秀士，可作群英师范——文名在，煞只减顺遂、不轻易抹掉文才象。"},{classic:"女命吉拱，主貴封贈。",vernacular:"女命化科得吉星拱照：主贵、有封赠——名声体面、夫家/自己得封号类荣光。"},{classic:"雖四殺衝破，亦為富貴。",vernacular:"纵「四杀」（羊陀火铃）冲破，化科局仍可论富贵——名气财禄不致全灭，只是过程磕绊、名利带伤。"},{classic:"與科星拱照衝同論。",vernacular:"他星与化科「拱照」「对冲」：吉凶看法与科星同宫相近——拱则助名，冲则名气受扰，合参庙旺。"},{classic:"問化忌星所主若何？",vernacular:"问：化忌星主要管什么？四化之「忌」主牵绊阻滞、多管是非；下文看守身命与限岁叠忌之蹭蹬。"},{classic:"希夷先生答曰：忌為多管之神。",vernacular:"希夷答：「化忌」是多管之神——爱插手、事多绊多，主牵挂、阻滞、是非盯梢，不是单纯「倒霉」一词。"},{classic:"守身命一生不順，小限逢之一年不足，大限十年悔吝。",vernacular:"化忌守身/命：一生多不顺；小限逢→一年用度不足、事不顺；大限逢→十年悔吝反复。忌贴身，层层拖累。"},{classic:"二限太歲交臨，斷然蹭蹬。",vernacular:"大限、小限再与「太岁」交叠临化忌：蹭蹬难顺几乎定局——流年+限双重忌压，升迁财运易卡。"},{classic:"文人不耐久，武人縱有官災，口舌不防。",vernacular:"化忌下：文人耐不久（学业职场易断档）；武人纵有官灾，口舌也防不胜防——忌主是非牵绊，文武皆受。"},{classic:"雖商賈技藝人，皆不宜利。",vernacular:"商贾、技艺人逢化忌：亦不宜利——买卖易扯皮、手艺易被挑刺、合同纠纷，忌气粘财业。"},{classic:"如會紫府、昌曲、左右、科權祿，與忌同宮又兼四殺共處，即發財亦不佳，功名亦不成就。",vernacular:"即使会紫府、昌曲、左右、科权禄，只要与化忌同宫又兼四杀：发财也不踏实，功名难成——吉被忌杀钉死，福成虚花。"},{classic:"如單逢四殺、耗使、劫空，主奔波帶疾。",vernacular:"化忌单逢四杀、耗使、劫空（无吉解）：主奔波带疾——忙而无效，身子也拖累。"},{classic:"僧道流移還俗。",vernacular:"僧道逢此忌杀空耗：易流移、还俗——戒定难守，道缘被忌冲散。"},{classic:"處事只求七分。",vernacular:"处事心法：只求七分——忌星盘忌求满、忌贪功，留余地可减悔吝。"},{classic:"問擎羊星所主若何？",vernacular:"问：擎羊星主要管什么？擎羊属刑刃浮煞，主刚暴刑伤；下文分入庙为权贵、陷地为祸殃。"},{classic:"希夷先生答曰：擎羊北斗之助星。",vernacular:"希夷答：「擎羊」是北斗助星——浮煞助刑，主刃、刑、刚猛冲撞，非正星之福。"},{classic:"守身命性粗行暴，孤單，視親為疏，翻恩為怨。",vernacular:"擎羊守身/命：性粗行暴，易孤单；视亲为疏、翻恩为怨——人际关系硬碰，六亲缘薄。"},{classic:"入廟性剛果決，機謀好勇，主權貴。",vernacular:"擎羊「入庙」（如丑未等得地）：刚果决、机谋好勇，反主权贵——刑气化威权。陷地则纯暴无贵。"},{classic:"北方生人為福，四墓生人不忌。",vernacular:"北方生人逢羊偏为福；「四墓」（辰戌丑未）生人亦不甚忌——生肖/年支与羊气合参，有化解余地。"},{classic:"居卯酉作禍興殃，刑剋極甚。",vernacular:"擎羊居「卯」「酉」（羊之忌地）：作祸兴殃，刑克极重——刃气横冲，六亲与自身外伤风险高。"},{classic:"六甲六庚生人，必有兇禍。",vernacular:"六甲、六庚生人逢羊：易有凶祸——甲庚与羊刑冲气重，古断偏重，今作重大冲撞提醒，勿句句铁死。"},{classic:"縱富貴不久亦不善終，若九流工藝人辛勤。",vernacular:"羊重无解：纵富贵不久、不善终；若走九流工艺（手艺、技艺行）则辛勤可过——宜技不宜纯靠命贵。"},{classic:"加火忌劫空衝破，殘疾離祖刑剋六親。",vernacular:"羊再加火、忌、劫空冲破：残疾、离祖、刑克六亲——刑火忌空叠爆，身体与宗族缘都伤。"},{classic:"女人入廟加吉上局，殺耗衝破多主刑剋下局。",vernacular:"女命羊入庙又加吉：可上局（刚中有贵）；若杀耗冲破：多主刑克、偏下局——婚姻六亲不顺、层次易走低。"},{classic:"問陀羅星所主若何？",vernacular:"问：陀罗星主要管什么？陀罗属忌滞浮煞，主拖延暗伤；下文分同贪火铃与庙陷武文之别。"},{classic:"希夷先生答曰：陀羅北斗之助星。",vernacular:"希夷答：「陀罗」是北斗助星——主缠绕、拖延、暗滞，化气偏忌，与羊的刚刃不同：羊快冲，陀慢绊。"},{classic:"守身命心行不正，暗淚長流，性剛威猛，作事進退。",vernacular:"陀罗守身/命：心行不正、暗泪长流；性刚威猛却做事进退不定——外表硬、内心拧，决策反复。"},{classic:"橫成橫破，飄蕩不定。",vernacular:"陀罗象：横成横破——来得猛去得也猛；飘荡不定，事业居所难稳住。"},{classic:"與貪狼同度因酒色以成癆，與火鈴同處，疥疫不死。",vernacular:"陀+贪狼同度：因酒色成痨（纵欲伤身）；陀+火铃同处：疥疫缠身却未必死——皮肤慢性病、炎症类，拖不死但难受。"},{classic:"居疾厄，暗疾纏綿。",vernacular:"陀罗居「疾厄宫」：暗疾缠绵——查不出的慢性病、隐疾反复，宜体检随访，勿恐吓。"},{classic:"辰戌丑未生人為福，在廟財官論，文人不耐久，武人橫發高遷。",vernacular:"辰戌丑未生人逢陀偏为福；在庙可论财官；文人耐不久，武人易横发高迁——陀之刚滞，武职更能用。"},{classic:"若陷地加殺刑剋招兇，二姓延生，女人刑剋下賤。",vernacular:"陀陷地再加杀：刑克招凶；「二姓延生」=过继/随母改姓等；女命刑克、地位易低下——亲缘断层、处境下风。"},{classic:"羊陀二星總論",vernacular:"「羊陀二星总论」：把擎羊（刑）与陀罗（忌）合参——宫位、化气、流年面痣血光一并看。"},{classic:"玉蟾先生曰：擎羊陀羅二星屬火金，乃北斗浮星，在斗司奏，在數兇厄。",vernacular:"玉蟾曰：羊属火、陀属金，皆北斗浮星；在斗司奏，落斗数主凶厄——浮煞助刑忌，非正星之福德。"},{classic:"羊化氣曰刑，陀化氣曰忌。",vernacular:"术语：「擎羊」化气曰「刑」（刃刑冲撞）；「陀罗」化气曰「忌」（滞忌牵绊）。刑快忌慢，合参看伤法。"},{classic:"怕臨兄弟、田宅、父母三宮。",vernacular:"羊陀最怕临「兄弟」「田宅」「父母」三宫——手足产业父母缘最易刑破，家产与六亲先伤。"},{classic:"忌三合臨身命，合昌曲、左右有暗痣、眼痣。",vernacular:"「化忌」三合临身命，又合昌曲、左右：易有暗痣、眼痣——忌气贴身显于面目肌肤。亦提醒视力/面部标记。"},{classic:"見日月女剋夫，而夫克婦，為諸宮之凶神。",vernacular:"羊陀见日月：女克夫、夫克妇——夫妻宫/日月为配偶象，煞照则配偶缘刑。故称诸宫凶神。"},{classic:"忌同日月則傷親損目；",vernacular:"化忌同日月：伤亲、损目——日月主光与六亲贵气，忌贴则亲缘伤、视力忧。"},{classic:"刑並桃花則風流惹禍；",vernacular:"「刑」（羊刑）并桃花（贪姚铃等）：风流惹祸——欲望+刑刃，情色易闹事端。"},{classic:"忌貪狼合因花酒以忘身；",vernacular:"化忌与贪狼合：因花酒忘身——酒色拖垮身体事业，忌气粘在欲望上。"},{classic:"刑與暗同行招暗疾而壞目；",vernacular:"刑与「暗」星（太阴失光/巨门暗等）同行：招暗疾、坏目——隐疾+视力，刑暗交攻。"},{classic:"忌與殺暗同度招凌辱而生暗疾；",vernacular:"忌与七杀、暗星同度：招凌辱、生暗疾——被欺压羞辱，病在暗处。"},{classic:"與火鈴為兇伴只宜僧道；",vernacular:"羊陀与火铃为凶伴：只宜僧道——世俗难安，出家清修或可减杀气。"},{classic:"權刑合殺疾病官厄不免；",vernacular:"化权、刑合七杀：疾病、官厄不免——有权反招官司病灾，权杀刑交战。"},{classic:"貪耗流年面上刺痕。",vernacular:"流年贪狼+大耗：脸上易刺痕伤疤——外伤手术、面部磕碰，流年象要防。"},{classic:"二限更遇此，災害不時而生也。",vernacular:"大限小限再遇上述羊陀忌刑组合：灾害不时而生——限运叠本命煞，灾情反复冒头。"},{classic:"刑與暗同行，暗疾刑六親，火鈴遇兇伴，只宜道與僧，權刑囚合殺，疾病災厄侵，",vernacular:"歌诀重申：刑暗同行→暗疾+刑六亲；火铃凶伴→只宜僧道；权刑囚合杀→疾病灾厄侵——条件同前，作总括记。"},{classic:"貪耗流年聚，面上刺痕新，限運若逢此，橫禍血刃生。",vernacular:"贪耗流年聚→面上新刺痕；限运逢此→横祸血刃。讲盘：流年贪耗+限遇羊陀火，防外伤血光。"},{classic:"羊陀夭壽殺，人遇為掃星，君子防恐懼，小人遭凌刑，遇耗決乞求，只宜林泉人，",vernacular:"羊陀并夭寿、杀：遇之如扫星；君子防恐惧（敬畏减灾），小人遭凌刑；遇耗决乞求；只宜林泉人——宜清修隐退，不宜硬顶。"},{classic:"二限倘來犯，不時災禍侵。",vernacular:"二限倘犯羊陀夭杀耗：灾祸不时侵——限运避不开就减行事风险、保重身体。"},{classic:"問火星所主若何？",vernacular:"问：火星主要管什么？火星属南斗浮煞，主爆发刚猛；下文歌诀分庙陷、贪会、女命洁淫。"},{classic:"答曰：火星乃南斗浮星也。",vernacular:"答：「火星」是南斗浮星——催动、爆发、火性刚猛，与铃同属火铃系煞。"},{classic:"希夷先生歌曰",vernacular:"希夷先生歌诀如下——逐句贴「火星」庙陷、羊陀会、东南西北生、贪狼旺地、女命等条件讲。"},{classic:"火星大殺將，南斗號殺神，若主身命位，諸宮不可臨，性氣亦沉毒，剛強出眾人，",vernacular:"火星号大杀将、南斗杀神；主身命则诸宫不宜轻临；性气沉毒、刚强出众——火气贴身，脾气硬、气场冲。"},{classic:"毛髮多異類，唇齒有傷痕，更與羊陀會，襁褓必災迍，過房出外養，二姓可延生，",vernacular:"貌象：毛发异类、唇齿伤痕；更会羊陀→襁褓灾迍；过房外养、二姓延生——幼年不顺、常离本宗抚养。"},{classic:"此星東南利，不利西北生，若得貪狼會，旺地貴無倫，封侯居上將，勳業著邊庭，",vernacular:"火星利东南、不利西北生；若会贪狼又旺地→贵无伦，封侯上将、勋业边庭——火贪旺地成武贵边功，非纯煞。"},{classic:"三方無殺破，中年後始興，僧道多飄蕩，不守規戒心，女人旺地潔，陷地主邪淫，",vernacular:"三方无杀破→中年后始兴；僧道多飘荡、不守戒；女命旺地洁、陷地邪淫——同星庙陷分洁淫，女命尤验。"},{classic:"刑夫又克子，下賤勞碌人。",vernacular:"女命火星陷且煞重：刑夫克子，易成下贱劳碌——婚姻子女缘冲，处境辛劳。"},{classic:"問鈴星所主若何？",vernacular:"问：铃星主要管什么？铃星属南斗助煞，主轰鸣惊动；与火成「火铃」，下文分庙陷贵贫。"},{classic:"答曰：鈴星乃南斗助星也。",vernacular:"答：「铃星」是南斗助星——助火轰鸣、惊动、声势，与火星成火铃，一爆一鸣。"},{classic:"大殺鈴星將，南斗為從神，值人身命者，性格亦沉吟，形貌多異類，威勢有聲名，",vernacular:"铃星亦大杀将、南斗从神；值身命：性格沉吟，形貌异类，却有威势声名——外冷内震，名声带着煞气。"},{classic:"若與貪狼會，指日立邊庭，廟地財官貴，陷地主孤貧，羊陀若湊合，其刑大不清，",vernacular:"铃会贪狼→指日立边庭（武功速）；庙地财官贵，陷地孤贫；羊陀凑合→刑大不清——庙陷决定贵贫，羊陀叠则刑重。"},{classic:"孤單並棄祖，殘傷帶疾人，僧道多飄蕩，還俗定無疑，女人無吉曜，刑剋少六親，",vernacular:"铃凶无解：孤单弃祖、残伤带疾；僧道飘荡还俗定；女人无吉曜→刑克少六亲——亲缘薄、戒难守。"},{classic:"終身不貞潔，壽夭仍困貧，此星大殺將，其惡不可禁，一生有兇禍，聚實為虛情，",vernacular:"续断：终身不贞洁、寿夭困贫；铃为大杀将恶不可禁；一生凶祸，聚实为虚——积攒易散，情欲钱财不实。"},{classic:"七殺主陣亡，破軍財屋傾，廉宿羊刑會，劫空主刀兵，或遇貪狼宿，官祿亦不寧，",vernacular:"铃会七杀主阵亡；破军→财屋倾；廉贞+羊+刑会、劫空→刀兵；或遇贪狼→官禄不宁——武职血光、产业倾、官不安。"},{classic:"若逢居旺地，富貴不可論。",vernacular:"铃星若居旺地：富贵不可限量——煞化威权，武贵财势可极盛；关键在「旺」与否，陷则反是。"},{classic:"羊陀火鈴四星總論",vernacular:"「羊陀火铃四星总论」：四煞并看，又称马扫星/短寿杀——君子失权、小人刑法，宜僧减煞。"},{classic:"玉蟾先生曰",vernacular:"玉蟾先生曰：以下总断火铃羊陀并见之象——短寿杀、失权刑法、克六亲，合参疾厄与僧道出路。"},{classic:"火鈴陀羅金，擎羊刑忌訣，一名馬掃星，又名短壽殺，君子失其權，小人犯刑法，",vernacular:"火铃、陀罗金气，擎羊刑忌诀；一名马扫星、又名短寿杀；君子失权，小人犯刑法——四煞并，权失法犯。"},{classic:"孤獨克六親，災禍常不歇，腰足唇齒傷，勞碌多蹇剝，破相又勞心，乞丐填溝壑，",vernacular:"孤独克六亲，灾祸不歇；腰足唇齿伤，劳碌蹇剥；破相劳心，甚则乞丐填沟壑——刑伤劳苦到极致的象。"},{classic:"武曲並貪狼，一世招兇惡，疾厄若逢之，四時不離著，只宜山寺僧，金谷常安樂。",vernacular:"四煞再并武曲、贪狼：一世招凶恶；疾厄逢之四时病不离；只宜山寺僧，金谷（清净处）反安乐——宜僧不宜俗硬顶。"},{classic:"問天空地劫所主若何？",vernacular:"问：天空、地劫主要管什么？二星主空亡耗散；守身命则遇吉吉、遇凶凶，下文重破财与限凶。"},{classic:"希夷先生曰：二星守身命，遇吉則吉，遇兇則兇。",vernacular:"希夷曰：天空、地劫守身命——遇吉则吉（空掉煞）、遇凶则凶（空掉福）。本身中性偏耗，随同宫吉凶转向。"},{classic:"如四殺衝照，輕者下賤，重者六畜之命。",vernacular:"空劫再被四杀冲照：轻则下贱，重则古书「六畜之命」——人格/处境被压到极低，今作阶层大落、尊严受损看。"},{classic:"僧道不正，女子婢妾，刑剋孤獨。",vernacular:"空劫煞重：僧道不正派；女子易婢妾位；又刑克又孤独——身份不正、亲缘空。"},{classic:"大抵二星俱不宜見，定主破財，二限逢之必兇。",vernacular:"总断：二星不宜见，定主破财；二限逢之必凶——限运空劫，财散事空，优先防破耗。"},{classic:"劫空為害最愁人，才智英雄誤一身，只好為僧並學術，堆金積玉也須貧。",vernacular:"劫空害人最愁：才智英雄也误身；只好为僧或做学术；堆金积玉也须贫——空掉实福，富也守不住，宜清修学问路。"},{classic:"問天傷天使所主若何？",vernacular:"问：天伤、天使主要管什么？天伤主虚耗，天使主传使差役；太岁二限见之不论得地，吉多祸轻。"},{classic:"希夷先生答曰：天傷乃上天虛耗之神，天使乃上天傳使之神。",vernacular:"希夷答：「天伤」=上天虚耗之神（耗钱耗气）；「天使」=上天传使之神（差役奔走、消息变动），皆主动荡消耗。"},{classic:"太歲二限逢之不問得地否？",vernacular:"太岁、二限逢天伤天使：先不问得地与否——流年限上见之即要警觉，庙旺也减不掉耗使气。"},{classic:"只要吉多為福其禍稍輕，如無吉，值巨門、羊陀、火鈴、忌、天機，其年必主官災，喪亡破敗。",vernacular:"吉多则祸稍轻；无吉又值巨门、羊陀、火铃、忌、天机→其年必主官灾、丧亡、破败——忌煞口舌叠耗使，年运凶。"},{classic:"限至大耗號天傷，夫子在陳也絕糧，天使限臨人共忌，石崇鉅富破家亡。",vernacular:"限至大耗号天伤：如夫子在陈绝粮——再能也断粮；天使限临人共忌：石崇巨富亦破家——耗使临限，富也散。"},{classic:"問天刑星所主若何？",vernacular:"问：天刑星主要管什么？天刑主孤刑，出家可减；入庙可化「天喜」，下文分寅酉戌卯得地与文星边功。"},{classic:"希夷先生答曰：天刑守命身，不為僧道定主孤刑，不夭則貧。",vernacular:"希夷答：天刑守命身——不当僧道则定主孤刑；不夭则贫。出家可化解一部分孤刑气。"},{classic:"父母兄弟不得全，二限逢之主出家，官事牢獄失財，入廟則吉。",vernacular:"父母兄弟不全；二限逢主出家；亦主官事牢狱失财；「入庙则吉」——刑入庙反成纪律/执法之吉，可化。"},{classic:"天刑未必是兇星，入廟名為天喜神，昌曲吉星來湊合，定然獻策到王庭，",vernacular:"天刑未必纯凶：入庙名「天喜神」；昌曲吉星凑合→定然献策王庭——文策进用，刑化成法度智慧。"},{classic:"刑居寅上並酉戌，更臨卯位自光明，必遇文星成大業，掌握邊疆百萬兵，",vernacular:"天刑居寅，并酉戌，更临卯→自身光明；必遇文星成大业，掌边疆百万兵——刑得地+文星=武略边功。"},{classic:"三不子兮號天刑，為僧為道是孤身，天哭二星皆同到，終是難逃有疾人。",vernacular:"「三不子」号天刑：为僧为道多孤身；天哭二星同到→终难逃有疾——孤刑+哭星，疾病孤独象加重。"},{classic:"問天姚星所主若何？",vernacular:"问：天姚星主要管什么？天姚主桃花媚态欲望；守身命则阴毒风流主淫，下文分庙旺、恶会、临限速婚。"},{classic:"希夷先生答曰：天姚守身命，心性陰毒，多疑恐、善顏色、風流多婢、主淫。",vernacular:"希夷答：天姚守身命——心性阴毒、多疑恐；善颜色、风流多婢，主淫。术语：媚态欲望星，贴命身则情欲重。"},{classic:"入廟旺主富貴多奴，居亥有學識。",vernacular:"天姚入庙旺：富贵多奴（仆从多、场面大）；居「亥」有学识——水旺地桃花转文采。"},{classic:"會惡星破家敗產，因色犯刑。",vernacular:"天姚会恶星：破家败产，因色犯刑——桃花+煞=色事惹官司破财。"},{classic:"六合重逢，少年夭折。",vernacular:"天姚与「六合」重逢：少年夭折象——合催情欲过早过烈，古断寿夭，今作早恋纵欲伤身提醒。"},{classic:"若臨限不用媒妁，招手成婚。",vernacular:"天姚临限：不用媒妁、招手成婚——闪婚速配、非正式介绍成婚，感情节奏极快。"},{classic:"或紫微吉星加，剛柔相濟，主風騷，加紅鸞愈淫，加刑刃主夭。",vernacular:"紫微等吉加天姚：刚柔相济，主风骚（才情风流）；加红鸾愈淫；加刑刃主夭——吉催媚、鸾催淫、刑刃催夭。"},{classic:"天姚居戌卯酉遊，更入雙魚一併求，福厚生成耽酒色，無災無禍度春秋，",vernacular:"天姚游戌卯酉，再入双鱼（亥）：福厚者耽酒色却能无灾度春秋——桃花得地且福厚，享乐而不立刻破。"},{classic:"天姚星與敗星同，號曰人間掃氣囂，辛苦平生過一世，不曾安跡在客中，",vernacular:"天姚与「败星」同：号人间扫气嚣；辛苦一世，客中不安迹——败地桃花，漂泊情欲两头空。"},{classic:"人身偶爾值天姚，戀色貪花性帚兇，此曜若居生旺地，位登極品亦風騷。",vernacular:"人身偶值天姚：恋色贪花、性帚凶；若居生旺地，位登极品亦风骚——再贵也带风流名，桃花不因贵而灭。"},{classic:"問天哭天虛二星所主若何？",vernacular:"问：天哭、天虚二星主要管什么？哭虚为愁叹空虚恶曜；临命非常，下文分父母破荡、身命陷与丑卯申反吉。"},{classic:"希夷先生答曰：哭虛為惡曜，臨命最非常。",vernacular:"希夷答：天哭、天虚为恶曜；临命最非常——情绪哀愁、空虚耗神，贴命则人生底色偏苦闷。"},{classic:"加臨父母內，破蕩賣田莊。",vernacular:"哭虚加临「父母宫」：破荡卖田庄——父母产业耗散、家产变卖。"},{classic:"若教身命陷，窮獨帶刑傷。",vernacular:"若身命再逢哭虚且陷地：穷独带刑伤——钱路空、人缘孤，外伤暗疾也易跟上。"},{classic:"六親多不足，煩惱過時光。",vernacular:"哭虚作用下：六亲多不足，烦恼里过日子——亲缘缺位、心事沉，难得开怀。"},{classic:"東謀西不就，心事匆忙忙。",vernacular:"哭虚象：东谋西不就，心事匆匆忙忙——计划落空、心里焦灼，成事难收口。"},{classic:"丑卯申宮吉，遇祿名顯揚。",vernacular:"哭虚在「丑」「卯」「申」宫反吉；再遇禄→名显扬——特定宫位可化愁为名，遇禄则名声开。"},{classic:"二限若逢之，哀哀哭斷腸",vernacular:"二限若逢哭虚：哀哀哭断肠——限运情绪低潮、丧悲事易起，宜心理与人事双防，勿恐吓。"}]},V=ls,ps=Object.fromEntries(Le.map(e=>[e.id,e.title]));function os(e){return ps[e]||e}const is=[...es,...ts,...rs,...ns,...ss,...cs,...as];function ee(e){return(e||"").replace(/\s+/g,"").replace(/[，,。．.！!？?；;：:「」『』""''（）()【】\[\]、·…—\-]/g,"").replace(/兇/g,"凶").replace(/殺/g,"杀").trim()}function us(e,t){return{bookId:e.bookId||"",source:e.sourceTitle,classic:e.classic,vernacular:e.vernacular,palace:t}}const ys=new Set(Object.keys(V).filter(e=>{var t;return(((t=V[e])==null?void 0:t.length)??0)>0})),Ie=new Map;let re=null,ne=null;function xs(){if(ne)return ne;const e=[];for(const t of Object.keys(V))for(const s of V[t]||[]){const l=ee(s.classic);l.length<2||e.push({bookId:t,source:os(t),classic:s.classic,vernacular:s.vernacular,norm:l})}return e.sort((t,s)=>s.norm.length-t.norm.length),ne=e,e}function vs(e){const t=oe(e,xs());if(t)return{bookId:t.bookId,source:t.source,classic:t.classic,vernacular:t.vernacular}}function js(e){const t=vs(e.classic);return t?{...e,classic:t.classic,vernacular:t.vernacular,cite:{...e.cite,bookId:t.bookId||e.cite.bookId,title:t.source||e.cite.title}}:e}function De(e){const t=V[e];return t!=null&&t.length?t.map(s=>({bookId:e,source:e,classic:s.classic,vernacular:s.vernacular})):[]}function ds(e){if(!e)return[];const t=Ie.get(e);if(t)return t;const s=De(e),a=(s.length?s:gs().filter(r=>r.bookId&&r.bookId===e)).map(r=>({...r,norm:ee(r.classic)})).filter(r=>r.norm.length>=2).sort((r,c)=>c.norm.length-r.norm.length);return Ie.set(e,a),a}function gs(){if(re)return re;const e=new Set,t=[],s=a=>{const r=`${a.bookId}|${ee(a.classic)}`;!a.classic||e.has(r)||(e.add(r),t.push(a))};for(const a of Object.keys(V))for(const r of De(a))s(r);const l=[...is].sort((a,r)=>r.classic.length-a.classic.length);for(const a of l)s(us(a));return re=t,t}function Bs(e){return!!e&&ys.has(e)}function oe(e,t){const s=ee(e);if(!s)return;let l,a=0;for(const r of t){const c=r.norm;(s===c||s.includes(c)||c.includes(s))&&c.length>a&&(l=r,a=c.length)}return l}function Os(e,t){const s=(e||"").trim();if(!s)return[];const l=ds(t);if(!l.length)return[{text:s}];const a=s.split(new RegExp("(?<=[。！？；])")).map(r=>r.trim()).filter(Boolean);if(a.length<=1){const r=oe(s,l);return[{text:s,vernacular:r==null?void 0:r.vernacular,source:r==null?void 0:r.source}]}return a.map(r=>{const c=oe(r,l);return{text:/[。！？；]$/.test(r)?r:`${r}。`,vernacular:c==null?void 0:c.vernacular,source:c==null?void 0:c.source}})}export{ks as E,ss as F,cs as M,rs as P,ts as S,es as a,ns as b,as as c,Ts as d,zs as e,Oe as f,js as g,Bs as h,Os as i,Ee as j,Le as k,Gt as l,Es as m,Ss as r,Is as s,As as t,Cs as u,Zt as w};
