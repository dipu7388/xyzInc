(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(n,t,e){n.exports=e("zUnb")},zUnb:function(n,t,e){"use strict";e.r(t);var o=e("8Y7J"),r=e("cUpR"),a=e("iInd");const i=[{userid:"abc@media.com",password:"abc123",username:"tom"},{userid:"def@media.com",password:"def123",username:"dick"}];var c=e("NZy3"),l=e("2Vo4");let s=(()=>{class n{constructor(n){this.router=n,this.imgFn=[c.image.abstract,c.image.animals,c.image.avatar,c.image.business,c.image.cats,c.image.city,c.image.fashion,c.image.food,c.image.image,c.image.imageUrl,c.image.nature,c.image.technics,c.image.sports,c.image.nightlife,c.image.animals,c.image.people,c.image.transport];let t=localStorage.getItem("user");t&&(t=JSON.parse(t)),this.currentUserBS=new l.a(t),this.currentUser$=this.currentUserBS.asObservable()}updateUser(n){this.currentUserBS.next(n?Object.assign({},n):void 0)}loginAndBack(){this.router.navigate(["/login"],{queryParams:{redirectTo:btoa(this.router.url)}})}getSingleMedia(){let n={},t=Math.floor(Math.random()*(this.imgFn.length-1));return n.image=this.imgFn[t](),n.title=c.git.commitMessage(),n}mediaImages(n){return Array(n).fill(!1).map(n=>this.getSingleMedia())}}return n.\u0275fac=function(t){return new(t||n)(o.Pb(a.b))},n.\u0275prov=o.Cb({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),g=(()=>{class n{constructor(n,t){this.fakeService=n,this.router=t}canActivate(n,t){return new Promise((n,e)=>{let{userid:o,password:r}=JSON.parse(localStorage.getItem("user")||"{}");o=null==o?void 0:o.trim(),r=null==r?void 0:r.trim();let a=i.find(n=>n.userid===o);a&&(null==a?void 0:a.userid)===o&&(null==a?void 0:a.password)===r?n(!0):this.router.navigate(["/login"],{queryParams:{redirectTo:btoa(t.url)}}).then(t=>n(!1))})}}return n.\u0275fac=function(t){return new(t||n)(o.Pb(s),o.Pb(a.b))},n.\u0275prov=o.Cb({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var p=e("mrSG"),d=e("IheW"),b=e("SVse");function m(n,t){if(1&n&&(o.Lb(0,"div",2),o.Lb(1,"h1",3),o.ic(2,"About Us"),o.Kb(),o.Hb(3,"img",4),o.Hb(4,"div",5),o.Kb()),2&n){const n=o.Ub();o.wb(3),o.Xb("src",null==n.content?null:n.content.backgroundImage,o.ec)("alt",null==n.content?null:n.content.contentTitle),o.wb(1),o.Xb("innerHtml",null==n.content?null:n.content.contentData,o.dc)}}function u(n,t){1&n&&(o.Lb(0,"div",6),o.Lb(1,"h1"),o.ic(2,"No Content Available"),o.Kb(),o.Kb())}let M=(()=>{class n{constructor(n){this.http=n}getAboutUsData(){return Object(p.a)(this,void 0,void 0,function*(){try{const n={params:{companyId:"3",contentId:"10"}};let t=yield this.http.get("https://webservice.lsnetx.com/fetch/content",n).toPromise();(null==t?void 0:t.dataEntryModel)&&!(null==t?void 0:t.errorFlag)&&(this.content=t.dataEntryModel)}catch(n){console.error(n),this.content=null}})}ngOnInit(){this.getAboutUsData()}}return n.\u0275fac=function(t){return new(t||n)(o.Gb(d.a))},n.\u0275cmp=o.Ab({type:n,selectors:[["app-about"]],decls:3,vars:2,consts:[["class","wrapper",4,"ngIf","ngIfElse"],["noData",""],[1,"wrapper"],[2,"text-align","center"],[1,"building",3,"src","alt"],[1,"content",3,"innerHtml"],[1,"wrapper","nodata"]],template:function(n,t){if(1&n&&(o.gc(0,m,5,3,"div",0),o.gc(1,u,3,0,"ng-template",null,1,o.hc)),2&n){const n=o.bc(2);o.Xb("ngIf",t.content)("ngIfElse",n)}},directives:[b.k],styles:[".wrapper[_ngcontent-%COMP%]{min-height:100%;padding-top:50px}.wrapper.nodata[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;min-height:85vh}.building[_ngcontent-%COMP%]{max-height:563px}.content[_ngcontent-%COMP%]{padding:2em 0}"]}),n})();function O(n,t){if(1&n&&(o.Lb(0,"div",6),o.Hb(1,"img",7),o.Lb(2,"div",8),o.Hb(3,"div",9),o.Lb(4,"div",10),o.Lb(5,"div",11),o.Lb(6,"div",12),o.Lb(7,"div",13),o.Lb(8,"span"),o.ic(9),o.Kb(),o.Kb(),o.Kb(),o.Hb(10,"div",14),o.Kb(),o.Kb(),o.Kb(),o.Kb()),2&n){const n=t.$implicit;o.wb(1),o.Xb("src",null==n?null:n.image,o.ec)("alt",null==n?null:n.title),o.wb(8),o.jc(null==n?null:n.title)}}let P=(()=>{class n{constructor(n){this.fakeData=n,this.medias=[],this.loadMore()}ngOnInit(){}loadMore(){let n=this.fakeData.mediaImages(Math.ceil(40*Math.random())+1);this.medias.push(...n)}}return n.\u0275fac=function(t){return new(t||n)(o.Gb(s))},n.\u0275cmp=o.Ab({type:n,selectors:[["app-gallery"]],decls:7,vars:1,consts:[[1,"wrapper"],[1,"card-container"],["subContent",""],["class","tile-wrapper card",4,"ngFor","ngForOf"],[1,"loadmore"],[3,"click"],[1,"tile-wrapper","card"],[1,"tile",3,"src","alt"],[1,"tile-layer"],[1,"upper-pnl"],[1,"lower-pnl"],[1,"content"],[1,"hover-container"],[1,"info"],[1,"line-border"]],template:function(n,t){1&n&&(o.Lb(0,"div",0),o.Lb(1,"div",1,2),o.gc(3,O,11,3,"div",3),o.Kb(),o.Lb(4,"div",4),o.Lb(5,"a",5),o.Sb("click",function(){return t.loadMore()}),o.ic(6,"Load More..."),o.Kb(),o.Kb(),o.Kb()),2&n&&(o.wb(3),o.Xb("ngForOf",t.medias))},directives:[b.j],styles:['@keyframes slide{0%{opacity:0;transform:translateY(50%)}to{opacity:1;transform:translateY(0)}}.loadmore[_ngcontent-%COMP%]{display:flex;justify-content:center;place-content:center}.loadmore[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}.wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]{margin-top:60px;margin-bottom:60px;display:grid;position:relative;width:100%;place-content:center;height:auto;grid-gap:40px;grid-template-columns:repeat(auto-fit,minmax(150px,300px))}.wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .tile-wrapper[_ngcontent-%COMP%]{position:relative}.wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]{height:400px;position:relative;border-radius:8px;max-width:100%;max-height:100%;object-fit:cover}.wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]{background:linear-gradient(hsla(0,0%,100%,0),rgba(0,0,0,.1),rgba(0,0,0,.4),#000);width:100%;height:100%;position:absolute;bottom:0;overflow:hidden;border-radius:8px}.wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]   .upper-pnl[_ngcontent-%COMP%]{height:150px}.wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]   .lower-pnl[_ngcontent-%COMP%]{height:calc(100% - 150px)}.wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]   .lower-pnl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{width:100%;color:#fff;position:absolute;bottom:0}.wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]   .lower-pnl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:30px;color:#fff;text-decoration:none;display:inline-block;padding:32px 32px 16px;width:calc(100% - 64px)}.wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]   .lower-pnl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .hover-container[_ngcontent-%COMP%]{display:none;overflow:hidden;max-height:0;padding:0 32px 16px}.wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]   .lower-pnl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .hover-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{margin-top:16px}.wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]   .lower-pnl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .hover-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]   .lower-pnl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .hover-container[_ngcontent-%COMP%]   .share-on[_ngcontent-%COMP%]{margin-bottom:16px;font-size:14px}.wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]   .lower-pnl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .hover-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:last-of-type):after, .wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]   .lower-pnl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .hover-container[_ngcontent-%COMP%]   .share-on[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:last-of-type):after{content:"|";padding:0 5px}.wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]   .lower-pnl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .hover-container[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%]{margin-bottom:16px;font-size:20px;max-height:73px;overflow:hidden}.wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]   .lower-pnl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .hover-container[_ngcontent-%COMP%]   .readmore[_ngcontent-%COMP%]{color:#f4b11c;text-decoration:none}.wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]   .lower-pnl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .line-border[_ngcontent-%COMP%]{height:10px;min-width:0;background:#3e7c94;visibility:hidden;margin-top:16px}.wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]   .lower-pnl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:hover   .line-border[_ngcontent-%COMP%]{min-width:100%;visibility:visible;animation-name:slideInLeft;animation-duration:2s}.wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]:hover   .lower-pnl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .hover-container[_ngcontent-%COMP%]{max-height:2000px;animation-name:slideInUp;animation-duration:1s;display:inline-block}.wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]:hover   .lower-pnl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{animation-name:fadeInUp;animation-duration:1s}.wrapper[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]:hover   .lower-pnl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{cursor:pointer;background:rgba(0,0,0,.8);animation-name:fadeInUp;animation-duration:1s}@media screen and (max-width:767px){.wrapper[_ngcontent-%COMP%]   .grid-panel[_ngcontent-%COMP%]{grid-gap:20px;margin-top:20px}.wrapper[_ngcontent-%COMP%]   .grid-panel[_ngcontent-%COMP%]   .tile-wrapper[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]{height:225px}.wrapper[_ngcontent-%COMP%]   .grid-panel[_ngcontent-%COMP%]   .tile-wrapper[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]{background:rgba(0,0,0,.1);border-radius:8px}.wrapper[_ngcontent-%COMP%]   .grid-panel[_ngcontent-%COMP%]   .tile-wrapper[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]   .upper-pnl[_ngcontent-%COMP%]{height:140px}.wrapper[_ngcontent-%COMP%]   .grid-panel[_ngcontent-%COMP%]   .tile-wrapper[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]   .lower-pnl[_ngcontent-%COMP%]{height:85px;background:linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.8),rgba(0,0,0,.8),rgba(0,0,0,.8));border-radius:8px}.wrapper[_ngcontent-%COMP%]   .grid-panel[_ngcontent-%COMP%]   .tile-wrapper[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]   .lower-pnl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{font-size:14px;line-height:24px}.wrapper[_ngcontent-%COMP%]   .grid-panel[_ngcontent-%COMP%]   .tile-wrapper[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]   .lower-pnl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:16px;padding:5px;text-align:center;width:calc(100% - 10px)}.wrapper[_ngcontent-%COMP%]   .grid-panel[_ngcontent-%COMP%]   .tile-wrapper[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]   .lower-pnl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .hover-container[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .grid-panel[_ngcontent-%COMP%]   .tile-wrapper[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]   .lower-pnl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .hover-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .grid-panel[_ngcontent-%COMP%]   .tile-wrapper[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]   .lower-pnl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .hover-container[_ngcontent-%COMP%]   .readmore[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .grid-panel[_ngcontent-%COMP%]   .tile-wrapper[_ngcontent-%COMP%]   .tile-layer[_ngcontent-%COMP%]   .lower-pnl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .hover-container[_ngcontent-%COMP%]   .share-on[_ngcontent-%COMP%]{display:none}}@keyframes slideInUp{0%{transform:translate3d(0,100%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes fadeInUp{0%{transform:translate3d(0,100%,0)}to{transform:translateZ(0)}}.fadeInUp[_ngcontent-%COMP%]{animation-name:fadeInUp}']}),n})();function C(n,t){if(1&n&&o.Hb(0,"div",2),2&n){const n=o.Ub();o.Xb("innerHtml",n.contentText,o.dc)}}function h(n,t){1&n&&(o.Lb(0,"div",3),o.Lb(1,"h1"),o.ic(2,"No Content Available"),o.Kb(),o.Kb())}let f=(()=>{class n{constructor(n){this.http=n}getPostData(){var n;return Object(p.a)(this,void 0,void 0,function*(){try{const t="https://api.rss2json.com/v1/api.json",e={params:{rss_url:"https://medium.com/feed/coffee-driven-dev"}};let o=yield this.http.get(t,e).toPromise();"ok"===(null==o?void 0:o.status)&&(null===(n=null==o?void 0:o.items)||void 0===n?void 0:n.length)&&(this.contentText=o.items[0].content)}catch(t){console.error(t),this.contentText=null}})}ngOnInit(){this.getPostData()}}return n.\u0275fac=function(t){return new(t||n)(o.Gb(d.a))},n.\u0275cmp=o.Ab({type:n,selectors:[["app-home"]],decls:3,vars:2,consts:[["class","wrapper",3,"innerHtml",4,"ngIf","ngIfElse"],["noData",""],[1,"wrapper",3,"innerHtml"],[1,"wrapper","nodata"]],template:function(n,t){if(1&n&&(o.gc(0,C,1,1,"div",0),o.gc(1,h,3,0,"ng-template",null,1,o.hc)),2&n){const n=o.bc(2);o.Xb("ngIf",t.contentText)("ngIfElse",n)}},directives:[b.k],styles:[".wrapper[_ngcontent-%COMP%]{min-height:100%;padding-top:50px}.wrapper.nodata[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;min-height:85vh}"]}),n})();var _=e("s7LF"),w=e("xgIS"),v=e("VRyK"),x=e("Kj3r");class y{constructor(n){this.validationMessages=n}processMessages(n){const t={};for(const e in n.controls)if(n.controls.hasOwnProperty(e)){const o=n.controls[e];if(o instanceof _.d){const n=this.processMessages(o);Object.assign(t,n)}else this.validationMessages[e]&&(t[e]="",(o.dirty||o.touched)&&o.errors&&Object.keys(o.errors).map(n=>{this.validationMessages[e][n]&&(t[e]+=this.validationMessages[e][n]+" ")}))}return t}}const k=function(n){return{"is-invalid":n}},I=[{path:"login",pathMatch:"prefix",component:(()=>{class n{constructor(n,t,e,o){this.fb=n,this.router=t,this.route=e,this.fakeService=o,this.displayMessage={},this.submitButtonValue="Login",this.emailRegex=new RegExp("^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+[.]{1}[a-zA-Z0-9]+$"),this.validationMessages={password:{required:"User Id is required.",minlength:"User id be at least three characters.",maxlength:"User Id exceed 50 characters."},email:{required:"Email ID is required.",pattern:"Email id must be Valid"}},this.genericValidator=new y(this.validationMessages),this.dataForm=this.fb.group({email:["abc@media.com",[_.k.required,_.k.pattern(this.emailRegex)]],password:["abc123",[_.k.required,_.k.minLength(6),_.k.maxLength(15)]]})}ngOnInit(){}ngAfterViewInit(){const n=this.formInputElements.map(n=>Object(w.a)(n.nativeElement,"blur"));Object(v.a)(this.dataForm.valueChanges,...n).pipe(Object(x.a)(800)).subscribe(()=>{this.displayMessage=this.genericValidator.processMessages(this.dataForm)})}submitForm(){if(this.dataForm.valid){let{email:n,password:t}=this.dataForm.value;n=null==n?void 0:n.trim(),t=null==t?void 0:t.trim();let e=i.find(t=>t.userid===n);if((null==e?void 0:e.userid)===n&&(null==e?void 0:e.password)===t){localStorage.setItem("user",JSON.stringify(e)),this.fakeService.updateUser(e);let n=this.route.snapshot.queryParamMap.get("redirectTo")||btoa("/");n=atob(n),this.router.navigate([n],{queryParams:{redirectTo:void 0}})}else alert("enter valid emailId  \n  and password")}}onSaveComplete(){this.dataForm.reset()}patchValues(n){this.dataForm.setValue(n)}ngOnDestroy(){}}return n.\u0275fac=function(t){return new(t||n)(o.Gb(_.b),o.Gb(a.b),o.Gb(a.a),o.Gb(s))},n.\u0275cmp=o.Ab({type:n,selectors:[["app-login"]],viewQuery:function(n,t){if(1&n&&o.lc(_.c,!0,o.l),2&n){let n;o.ac(n=o.Tb())&&(t.formInputElements=n)}},decls:12,vars:11,consts:[["novalidate","",1,"form",3,"formGroup","ngSubmit"],["id","panelEmail",1,"panelEmail","form-ele","noPadding","errorPnl"],["type","text","id","textFieldEmail","autocomplete","off","maxlength","256","placeholder","Email ID*","formControlName","email",1,"email","textFieldEmail",3,"ngClass"],[1,"invalid-feedback"],["id","panelName",1,"form-ele","panelName","errorPnl"],["id","name","type","password","id","textFieldName","autocomplete","off","maxlength","100","placeholder","Password*","formControlName","password",1,"name","textFieldName",3,"ngClass"],[1,"form-ele"],["id","submit-btn","type","submit",1,"button","req-demo","btn-action",3,"disabled"]],template:function(n,t){1&n&&(o.Lb(0,"form",0),o.Sb("ngSubmit",function(){return t.submitForm()}),o.Lb(1,"div",1),o.Hb(2,"input",2),o.Lb(3,"span",3),o.ic(4),o.Kb(),o.Kb(),o.Lb(5,"div",4),o.Hb(6,"input",5),o.Lb(7,"span",3),o.ic(8),o.Kb(),o.Kb(),o.Lb(9,"div",6),o.Lb(10,"button",7),o.ic(11),o.Kb(),o.Kb(),o.Kb()),2&n&&(o.Xb("formGroup",t.dataForm),o.wb(2),o.Xb("ngClass",o.Zb(7,k,t.displayMessage.email)),o.wb(2),o.kc(" ",t.displayMessage.email," "),o.wb(2),o.Xb("ngClass",o.Zb(9,k,t.displayMessage.password)),o.wb(2),o.kc(" ",t.displayMessage.password," "),o.wb(2),o.Xb("disabled",!t.dataForm.valid),o.wb(1),o.kc(" ",t.submitButtonValue," "))},directives:[_.l,_.i,_.e,_.a,_.g,_.h,_.c,b.i],styles:[".form[_ngcontent-%COMP%]{margin:50px auto 0;max-width:1581px;display:grid;grid-template-columns:repeat(auto-fit,minmax(266px,532px));justify-items:center;justify-content:center;grid-row-gap:30px;grid-template-rows:repeat(auto-fit,minmax(45px,60px));grid-column-gap:50px;height:calc(100% - 70px);padding-left:4.16vw;padding-right:4.16vw;min-height:400px}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:0 calc(18px + 1.0714285714vw);width:calc(100% - 2 * calc(18px + 1.0714285714vw));border-radius:calc(20px + 1.130952381vw);height:100%;background:#2f4d89;color:#fff;font-size:calc(12px + .4761904762vw);border:.5px transparent;resize:none}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover{border:.5px solid}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{transform:scale(1.01)}.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{-moz-appearance:textfield}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-indent:unset!important}.form[_ngcontent-%COMP%]   #submit-btn[_ngcontent-%COMP%]{position:relative;overflow:hidden}.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder, .form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff}.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button{display:none!important;-webkit-appearance:none!important}.form[_ngcontent-%COMP%]   .form-ele[_ngcontent-%COMP%]{width:100%}.form[_ngcontent-%COMP%]   .req-demo[_ngcontent-%COMP%]{border:.5px solid #f4b11c;color:#f4b11c;background:#fbfbfb;cursor:pointer}.form[_ngcontent-%COMP%]   .req-demo[_ngcontent-%COMP%]:hover{background-color:#f4b11c;color:#fff;border:none}@media screen and (max-width:1280px){.form[_ngcontent-%COMP%]{max-width:1024px}}@media screen and (max-width:767px){.form[_ngcontent-%COMP%]{grid-template-rows:repeat(auto-fit,minmax(45px,45px));grid-row-gap:20px}}"]}),n})()},{path:"",pathMatch:"prefix",component:f},{path:"about",pathMatch:"prefix",component:M},{path:"media-gallery",pathMatch:"prefix",component:P,canActivate:[g]}];let L=(()=>{class n{}return n.\u0275mod=o.Eb({type:n}),n.\u0275inj=o.Db({factory:function(t){return new(t||n)},imports:[[a.d.forRoot(I)],a.d]}),n})();function K(n,t){if(1&n){const n=o.Mb();o.Jb(0),o.Lb(1,"span",7),o.ic(2,"|"),o.Kb(),o.Lb(3,"span",8),o.Vb(4,"async"),o.ic(5),o.Vb(6,"async"),o.Kb(),o.Lb(7,"i",9),o.Sb("click",function(){return o.cc(n),o.Ub().logout()}),o.ic(8,"\xa0\xa0Sign Out"),o.Kb(),o.Ib()}if(2&n){const n=o.Ub();let t=null,e=null;o.wb(3),o.Yb("title","User Id: ",null==(t=o.Wb(4,2,null==n.fakerDs?null:n.fakerDs.currentUser$))?null:t.userid,""),o.wb(2),o.kc("Name: ",null==(e=o.Wb(6,4,null==n.fakerDs?null:n.fakerDs.currentUser$))?null:e.username,"")}}function U(n,t){if(1&n){const n=o.Mb();o.Jb(0),o.Lb(1,"i",10),o.Sb("click",function(){return o.cc(n),o.Ub().fakerDs.loginAndBack()}),o.ic(2," \xa0\xa0 Sign In"),o.Kb(),o.Ib()}}let S=(()=>{class n{constructor(n,t){this.fakerDs=n,this.router=t,this.title="xyz",this.btoa=btoa}ngOnInit(){}logout(){this.fakerDs.updateUser(),localStorage.clear(),this.router.navigate(["/"])}}return n.\u0275fac=function(t){return new(t||n)(o.Gb(s),o.Gb(a.b))},n.\u0275cmp=o.Ab({type:n,selectors:[["app-root"]],decls:17,vars:6,consts:[[1,"wrapper"],["routerLink","/"],["routerLink","/about"],["routerLink","/media-gallery"],[4,"ngIf"],[1,"content-body"],[1,"copyright"],[1,"pipe"],[3,"title"],["aria-hidden","true","title","Sign Out",1,"fa","fa-2x","fa-sign-out","logout",3,"click"],["title","Sign In","aria-hidden","true",1,"fa","fa-2x","fa-sign-in","logout",3,"click"]],template:function(n,t){1&n&&(o.Lb(0,"div",0),o.Lb(1,"header"),o.Lb(2,"a",1),o.ic(3,"XYZ"),o.Kb(),o.Lb(4,"a",2),o.ic(5,"About-Us"),o.Kb(),o.Lb(6,"a",3),o.ic(7,"Gallery"),o.Kb(),o.gc(8,K,9,6,"ng-container",4),o.Vb(9,"async"),o.gc(10,U,3,0,"ng-container",4),o.Vb(11,"async"),o.Kb(),o.Lb(12,"div",5),o.Hb(13,"router-outlet"),o.Kb(),o.Lb(14,"footer"),o.Lb(15,"div",6),o.ic(16,"Copyright @2021 XYZ Inc. All Rights Reserved."),o.Kb(),o.Kb(),o.Kb()),2&n&&(o.wb(8),o.Xb("ngIf",o.Wb(9,2,null==t.fakerDs?null:t.fakerDs.currentUser$)),o.wb(2),o.Xb("ngIf",!o.Wb(11,4,null==t.fakerDs?null:t.fakerDs.currentUser$)))},directives:[a.c,b.k,a.e],pipes:[b.b],styles:["header[_ngcontent-%COMP%]{-webkit-text-decoration:dashed;text-decoration:dashed;font-weight:bolder;color:#006400;position:sticky;z-index:100;background-color:#fff;top:0;box-shadow:0 0 6px #d3d3d3;line-height:2;width:calc(100% + 48px);margin-left:-24px}header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{background-color:#ff9800;padding:5px 10px;border-radius:5px;margin:5px;box-sizing:border-box;color:#fff}header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:first-child){padding-left:2em}header[_ngcontent-%COMP%]   .pipe[_ngcontent-%COMP%]{margin:0 .5em;color:#b8860b}header[_ngcontent-%COMP%]   .logout[_ngcontent-%COMP%]{position:absolute;right:8px}footer[_ngcontent-%COMP%]{padding-top:24px;margin-top:16px;justify-content:center;line-height:20px;border-top:.5px solid}footer[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center}i.fa[_ngcontent-%COMP%]{cursor:pointer}.wrapper[_ngcontent-%COMP%]{min-height:100%}.wrapper.nodata[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;min-height:85vh}.wrapper[_ngcontent-%COMP%]   .content-body[_ngcontent-%COMP%]{min-height:85vh}"]}),n})(),D=(()=>{class n{}return n.\u0275mod=o.Eb({type:n,bootstrap:[S]}),n.\u0275inj=o.Db({factory:function(t){return new(t||n)},providers:[],imports:[[b.c,r.a,L,d.b,_.f,_.j]]}),n})();Object(o.R)(),r.b().bootstrapModule(D).catch(n=>console.error(n))},zn8P:function(n,t){function e(n){return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t})}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id="zn8P"}},[[0,0,4]]]);