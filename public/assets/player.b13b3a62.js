import{d as ae,u as me,c as f,a as _e,o as re,i as s,s as E,m as z,b as m,F as $e,e as ge,f as fe,g as ye,h as j,t as x,N as he,j as we}from"./index.388b973f.js";import{s as R,f as A,b as be}from"./constants.6356c091.js";var Ne={};const Ce="_player_j10gy_1",Se="_controlsContainer_j10gy_17",je="_volumeControls_j10gy_35",xe="_indicators_j10gy_37",pe="_controls_j10gy_17",Be="_imgContainer_j10gy_79",Pe="_playPauseBtn_j10gy_145",ke="_title_j10gy_167",qe="_show_download_j10gy_179",De="_downloadBtn_j10gy_187",Te="_downloadBtnShow_j10gy_223";var r={player:Ce,controlsContainer:Se,volumeControls:je,indicators:xe,controls:pe,imgContainer:Be,playPauseBtn:Pe,title:ke,show_download:qe,downloadBtn:De,downloadBtnShow:Te};const Ie=x("<div></div>"),Fe=x('<div><div><img><a target="_blank" download><button>Download</button></a></div><div><div><button></button><div><button></button><p>%</p><button></button></div></div><div><p></p><input type="range"><p></p></div><p></p></div></div>'),Le=({id:a,reload:u,lenSec:o,nextVideoId:v,audioUrl:d,title:_})=>{let i=90;const t=new Audio("");let l=null;const $=me(),[p,n]=f(0),[b,y]=f(!1),[B,N]=f(i),[C,S]=f(!1);_e(async()=>{t.src=`${R}/audio/${a()}`,t.volume=i/100,l.max=parseInt(o),l.min=0,l.value=0,t.play()}),re(async()=>{t.onpause=()=>y(!1),t.onplay=()=>{y(!0),l.max=t.duration||parseInt(o)},t.onended=()=>{y(!1),$("/player/"+v),u(v)},t.ontimeupdate=h=>{l.value=t.currentTime,n(t.currentTime)}});const g={color:"#000000",size:"20px"};return(()=>{const h=Ie.cloneNode(!0);return s(h,d&&(()=>{const w=Fe.cloneNode(!0),T=w.firstChild,P=T.firstChild,I=P.nextSibling,ce=I.firstChild,M=T.nextSibling,F=M.firstChild,k=F.firstChild,G=k.nextSibling,q=G.firstChild,L=q.nextSibling,ve=L.firstChild,U=L.nextSibling,V=F.nextSibling,H=V.firstChild,D=H.nextSibling,ue=D.nextSibling,J=V.nextSibling;P.$$click=()=>S(!0),E(P,"src",d),ce.$$click=()=>S(!1),k.$$click=()=>b()?t.pause():t.play(),s(k,(()=>{const e=z(()=>!!b(),!0);return()=>e()?m($e,g):m(ge,g)})()),q.$$click=()=>{i+5>100||(t.volume=(i+5)/100,i=i+5,N(i))},s(q,m(fe,g)),s(L,B,ve),U.$$click=()=>{i-5<0||(t.volume=(i-5)/100,i=i-5,N(i))},s(U,m(ye,g)),s(H,()=>A(p())),D.$$input=e=>{t.currentTime=e.currentTarget.value,n(e.currentTarget.value)};const K=l;return typeof K=="function"?K(D):l=D,s(ue,()=>A(o)),s(J,_),j(e=>{const O=r.player,Q=r.imgContainer,W=C()?r.show_download:"",X=`${R}/audio/${a()}`,Y=`${r.downloadBtn} ${C()&&r.downloadBtnShow}`,Z=r.controlsContainer,ee=r.controls,te=r.playPauseBtn,ne=r.volumeControls,ie=r.volumeUp,oe=r.volumeDown,le=r.indicators,se=r.title;return O!==e._v$&&(w.className=e._v$=O),Q!==e._v$2&&(T.className=e._v$2=Q),W!==e._v$3&&(P.className=e._v$3=W),X!==e._v$4&&E(I,"href",e._v$4=X),Y!==e._v$5&&(I.className=e._v$5=Y),Z!==e._v$6&&(M.className=e._v$6=Z),ee!==e._v$7&&(F.className=e._v$7=ee),te!==e._v$8&&(k.className=e._v$8=te),ne!==e._v$9&&(G.className=e._v$9=ne),ie!==e._v$10&&(q.className=e._v$10=ie),oe!==e._v$11&&(U.className=e._v$11=oe),le!==e._v$12&&(V.className=e._v$12=le),se!==e._v$13&&(J.className=e._v$13=se),e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0}),w})()),h})()};ae(["click","input"]);const Ue="_item_container_15qjr_1",Ve="_item_shel_15qjr_15",Ee="_item_main_15qjr_27",Re="_item_img_container_15qjr_37",Ae="_item_img_15qjr_37",ze="_item_time_15qjr_55",Me="_item_title_15qjr_73",Ge="_item_view_count_and_published_at_container_15qjr_81";var c={item_container:Ue,item_shel:Ve,item_main:Ee,item_img_container:Re,item_img:Ae,item_time:ze,item_title:Me,item_view_count_and_published_at_container:Ge};const de=x("<div></div>"),He=x("<div><div><img><p></p></div><p></p><div><p></p><p></p></div></div>"),Je=({data:a,reload:u})=>(()=>{const o=de.cloneNode(!0);return s(o,(()=>{const v=z(()=>!!a(),!0);return()=>v()&&a()?.related_videos?.map((d,_)=>m(Ke,{info:d,get key(){return d.id},reload:u}))})()),j(()=>o.className=c.item_container),o})(),Ke=({info:a,reload:u})=>(()=>{const o=de.cloneNode(!0);return o.$$click=()=>u(a.id),s(o,m(he,{get href(){return`${be}/player/${a.id}`},style:{"text-decoration":"none"},get children(){const v=He.cloneNode(!0),d=v.firstChild,_=d.firstChild,i=_.nextSibling,t=d.nextSibling,l=t.nextSibling,$=l.firstChild,p=$.nextSibling;return s(i,()=>A(a.length_seconds)),s(t,()=>a.title),s($,()=>a.short_view_count_text),s(p,()=>a.published),j(n=>{const b=c.item_main,y=c.item_img_container,B=c.item_img,N=a.thumbnails[0].url,C=c.item_time,S=c.item_title,g=c.item_view_count_and_published_at_container,h=c.item_view_count,w=c.item_published_at;return b!==n._v$&&(v.className=n._v$=b),y!==n._v$2&&(d.className=n._v$2=y),B!==n._v$3&&(_.className=n._v$3=B),N!==n._v$4&&E(_,"src",n._v$4=N),C!==n._v$5&&(i.className=n._v$5=C),S!==n._v$6&&(t.className=n._v$6=S),g!==n._v$7&&(l.className=n._v$7=g),h!==n._v$8&&($.className=n._v$8=h),w!==n._v$9&&(p.className=n._v$9=w),n},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),v}})),j(()=>o.className=c.item_shel),o})();ae(["click"]);const Oe=x("<div></div>"),Xe=()=>{const a=we(),[u,o]=f(""),[v,d]=f(!1),[_,i]=f({});return _e(async()=>{d(!0);const t=await fetch(`${R}/video-info/${u()}`).then(l=>l.json());console.log(t),i(t),d(!1)}),re(async()=>{document.querySelector("body").style.overflow="auto",o(a.id)}),(()=>{const t=Oe.cloneNode(!0);return s(t,(()=>{const l=z(()=>!!(_()&&_().related_videos&&_().related_videos.length!==0),!0);return()=>l()&&m(Le,{id:u,reload:$=>{o($)},get audioUrl(){return _()?.videoDetails?.thumbnails[0]?.url},get lenSec(){return _()?.videoDetails?.lengthSeconds},get nextVideoId(){return _().related_videos[0].id},get title(){return _()?.videoDetails?.title}})})(),null),s(t,m(Je,{data:_,reload:l=>{o(l)}}),null),j(()=>t.className=Ne.main),t})()};export{Xe as default};