"use strict";(self.webpackChunkproposal_app=self.webpackChunkproposal_app||[]).push([[960],{960:(v,u,i)=>{i.r(u),i.d(u,{ProposalModule:()=>b});var p=i(895),d=i(114),l=i(433),f=i(226),g=i.n(f),o=i(256);function h(r,a){if(1&r){const e=o.EpF();o.TgZ(0,"span",22),o.NdJ("click",function(){o.CHM(e);const s=o.oxw();return o.KtG(s.onDownloadFile())}),o._UZ(1,"i",23),o.qZA()}}let m=(()=>{class r{constructor(e,t){this.fb=e,this.route=t,this.proposalForm=l.cw,this.isDownloadIconShow=!1,this.proposalArr=[],this.isReadOnly=!1}ngOnInit(){this.proposalForm=this.fb.group({id:["",l.kI.required],purpose:["",l.kI.required],category:[{value:"",disabled:!1},[l.kI.required]],upload:[{value:"",disabled:!1}],fileSource:new l.NI("",[l.kI.required]),remarks:["",[l.kI.required]],sentTo:[{value:"",disabled:!1},[l.kI.required]]});let e=this.route.snapshot.paramMap.get("items");if(e=JSON.parse(e),console.log(e),e){let t=localStorage.getItem("proposalData");t=JSON.parse(t),t.find(s=>s.id===e),console.log("val=",t),this.proposalForm.patchValue({id:t[0].id,purpose:t[0].purpose,remarks:t[0].remarks,sentTo:t[0].sentTo,category:t[0].category,fileSource:t[0].fileSource}),this.isDownloadIconShow=!0,this.fileSrc=t[0].fileSource,this.isReadOnly=!0,this.proposalForm.controls.category.disable(),this.proposalForm.controls.upload.disable(),this.proposalForm.controls.sentTo.disable()}}onDownloadFile(){this.downloadPdf(this.fileSrc,"sample")}downloadPdf(e,t){const s=e,n=document.createElement("a"),[,c]=e.split(";")[0].split("/");n.href=s,n.download=`${t}.${c}`,n.click()}onFileChange(e){if(e.target.files.length>0){const t=new FileReader;t.addEventListener("load",()=>{this.proposalForm.patchValue({fileSource:t.result}),this.isDownloadIconShow=!0,this.fileSrc=t.result}),t.readAsDataURL(e.target.files[0])}}submit(e){let t=Math.floor(1e6*Math.random());this.proposalForm.patchValue({id:t});const s=new FormData;s.append("upload",this.proposalForm.get("fileSource").value),console.log(this.proposalForm,s);let n=[this.proposalForm.value];n.push(),localStorage.setItem("proposalData",JSON.stringify(n)),g().fire("Data saved successfully","Proposal id: "+t,"success")}}return r.\u0275fac=function(e){return new(e||r)(o.Y36(l.qu),o.Y36(d.gz))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-new"]],decls:41,vars:8,consts:[[1,"sub-header"],[1,"row","g-3",3,"formGroup","ngSubmit"],[1,"col-md-12"],["for","purpose",1,"form-label"],["formControlName","purpose","id","purpose",1,"form-control",3,"readonly"],[1,"col-md-6"],["for","category",1,"form-label"],["formControlName","category","name","category","id","category",1,"form-select",3,"disabled"],["selected",""],["value","pot hole fix"],["value","village road"],["value","construction"],[1,"col-6"],["for","upload",1,"form-label"],["formControlName","upload","type","file","id","upload","id","customFile",1,"form-control",3,"disabled","readonly","change"],["class","download-proposal-icon",3,"click",4,"ngIf"],["for","remarks",1,"form-label"],["formControlName","remarks","type","text","id","remarks","placeholder","Remarks ....",1,"form-control",3,"readonly"],["for","sentto",1,"form-label"],["formControlName","sentTo","name","sentto","id","sentto",1,"form-select",3,"disabled"],[1,"col-12"],["type","submit",1,"btn","btn-primary",2,"float","right"],[1,"download-proposal-icon",3,"click"],[1,"fa","fa-download"]],template:function(e,t){1&e&&(o.TgZ(0,"div")(1,"div",0)(2,"h5"),o._uU(3,"New Proposal"),o.qZA()(),o.TgZ(4,"form",1),o.NdJ("ngSubmit",function(){return t.submit(t.proposalForm)}),o.TgZ(5,"div",2)(6,"label",3),o._uU(7,"Purpose"),o.qZA(),o._UZ(8,"textarea",4),o.qZA(),o.TgZ(9,"div",5)(10,"label",6),o._uU(11,"Category"),o.qZA(),o.TgZ(12,"select",7)(13,"option",8),o._uU(14,"Choose..."),o.qZA(),o.TgZ(15,"option",9),o._uU(16,"pot hole fix"),o.qZA(),o.TgZ(17,"option",10),o._uU(18,"village road"),o.qZA(),o.TgZ(19,"option",11),o._uU(20,"construction"),o.qZA()()(),o.TgZ(21,"div",12)(22,"label",13),o._uU(23,"Upload"),o.qZA(),o.TgZ(24,"input",14),o.NdJ("change",function(n){return t.onFileChange(n)}),o.qZA(),o.YNc(25,h,2,0,"span",15),o.qZA(),o.TgZ(26,"div",12)(27,"label",16),o._uU(28,"Remarks"),o.qZA(),o._UZ(29,"input",17),o.qZA(),o.TgZ(30,"div",5)(31,"label",18),o._uU(32,"Sent to"),o.qZA(),o.TgZ(33,"select",19)(34,"option",8),o._uU(35,"Choose..."),o.qZA(),o.TgZ(36,"option",9),o._uU(37,"State transport manager"),o.qZA()()(),o.TgZ(38,"div",20)(39,"button",21),o._uU(40,"Submit"),o.qZA()()()()),2&e&&(o.xp6(4),o.Q6J("formGroup",t.proposalForm),o.xp6(4),o.Q6J("readonly",t.isReadOnly),o.xp6(4),o.Q6J("disabled",t.isReadOnly),o.xp6(12),o.Q6J("disabled",t.isReadOnly)("readonly",t.isReadOnly),o.xp6(1),o.Q6J("ngIf",t.isDownloadIconShow),o.xp6(4),o.Q6J("readonly",t.isReadOnly),o.xp6(4),o.Q6J("disabled",t.isReadOnly))},dependencies:[p.O5,l._Y,l.YN,l.Kr,l.Fj,l.EJ,l.JJ,l.JL,l.sg,l.u],styles:[".download-proposal-icon[_ngcontent-%COMP%]{float:right;position:relative;top:-31px;right:10px;color:#d2691e}"]}),r})();function Z(r,a){if(1&r){const e=o.EpF();o.TgZ(0,"tr")(1,"th",5),o._uU(2),o.qZA(),o.TgZ(3,"td"),o._uU(4),o.qZA(),o.TgZ(5,"td"),o._uU(6),o.qZA(),o.TgZ(7,"td")(8,"button",6),o.NdJ("click",function(){const n=o.CHM(e).$implicit,c=o.oxw(2);return o.KtG(c.onView(n))}),o._uU(9,"view"),o.qZA()()()}if(2&r){const e=a.$implicit,t=o.oxw(2);o.xp6(2),o.hij("#",e.id,""),o.xp6(2),o.Oqu(e.purpose),o.xp6(2),o.Oqu(t.date)}}function _(r,a){if(1&r&&(o.TgZ(0,"div")(1,"table",2)(2,"thead")(3,"tr")(4,"th",3),o._uU(5,"Proposal number"),o.qZA(),o.TgZ(6,"th",3),o._uU(7,"Purpose"),o.qZA(),o.TgZ(8,"th",3),o._uU(9,"Submitted for approval on"),o.qZA(),o.TgZ(10,"th",3),o._uU(11,"Action"),o.qZA()()(),o.TgZ(12,"tbody"),o.YNc(13,Z,10,3,"tr",4),o.qZA()()()),2&r){const e=o.oxw();o.xp6(13),o.Q6J("ngForOf",e.proposalList)}}const w=[{path:"new-proposal",component:m},{path:"edit-proposal",component:m},{path:"proposal-list",component:(()=>{class r{constructor(e){this.router=e,this.proposalList=[],this.date=(new Date).toLocaleDateString()}ngOnInit(){let e=localStorage.getItem("proposalData");e=JSON.parse(e),e&&e.length>0&&(this.proposalList=e)}onView(e){console.log("proposal=",e),JSON.stringify(e),this.router.navigate(["edit-proposal",{items:e.id}])}}return r.\u0275fac=function(e){return new(e||r)(o.Y36(d.F0))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-proposal-list"]],decls:5,vars:1,consts:[[1,"sub-header"],[4,"ngIf"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[1,"btn","btn-primary",3,"click"]],template:function(e,t){1&e&&(o.TgZ(0,"div")(1,"div",0)(2,"h5"),o._uU(3,"Proposal List"),o.qZA()(),o.YNc(4,_,14,1,"div",1),o.qZA()),2&e&&(o.xp6(4),o.Q6J("ngIf",t.proposalList&&t.proposalList.length>0))},dependencies:[p.sg,p.O5]}),r})()}];let y=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[d.Bz.forChild(w),d.Bz]}),r})(),b=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[p.ez,y]}),r})()}}]);