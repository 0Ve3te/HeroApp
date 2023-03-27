"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3615],{3615:(P,p,s)=>{s.r(p),s.d(p,{HeroesPageModule:()=>x});var l=s(6895),d=s(433),n=s(4556),a=s(1407),e=s(8256),h=s(1630);function u(i,t){1&i&&(e.TgZ(0,"ion-label"),e._uU(1,"None"),e.qZA())}function m(i,t){if(1&i){const o=e.EpF();e.TgZ(0,"ion-col",7)(1,"ion-card"),e._UZ(2,"img",8),e.TgZ(3,"ion-card-header")(4,"ion-card-title"),e._uU(5),e.qZA(),e.TgZ(6,"ion-card-subtitle")(7,"ion-chip",9),e.NdJ("click",function(){const g=e.CHM(o).$implicit,O=e.oxw(2);return e.KtG(O.redirectToRace(g.appearance.race))}),e.TgZ(8,"ion-avatar"),e._UZ(9,"img",10),e.qZA(),e.TgZ(10,"ion-label"),e._uU(11),e.qZA(),e.YNc(12,u,2,0,"ion-label",11),e.qZA()(),e.TgZ(13,"ion-grid")(14,"ion-row")(15,"ion-col",12)(16,"div",13),e._UZ(17,"img",14),e.TgZ(18,"span",15),e._uU(19),e.qZA()()(),e.TgZ(20,"ion-col",12)(21,"div",13),e._UZ(22,"img",16),e.TgZ(23,"span",15),e._uU(24),e.qZA()()(),e.TgZ(25,"ion-col",12)(26,"div",13),e._UZ(27,"img",17),e.TgZ(28,"span",15),e._uU(29),e.qZA()()(),e.TgZ(30,"ion-col",12)(31,"div",13),e._UZ(32,"img",18),e.TgZ(33,"span",15),e._uU(34),e.qZA()()(),e.TgZ(35,"ion-col",12)(36,"div",13),e._UZ(37,"img",19),e.TgZ(38,"span",15),e._uU(39),e.qZA()()(),e.TgZ(40,"ion-col",12)(41,"div",13),e._UZ(42,"img",20),e.TgZ(43,"span",15),e._uU(44),e.qZA()()()()()(),e.TgZ(45,"ion-card-content")(46,"ion-text",21),e._uU(47,"Group affiliation:"),e.qZA(),e._uU(48),e.qZA()()()}if(2&i){const o=t.$implicit;e.xp6(2),e.MGl("alt","Image of ",o.name,""),e.s9C("src",o.images.md,e.LSH),e.Q6J("routerLink","/hero/"+o.id),e.xp6(3),e.hij(" ",o.name,""),e.xp6(6),e.Oqu(o.appearance.race),e.xp6(1),e.Q6J("ngIf",null===o.appearance.race),e.xp6(7),e.Oqu(o.powerstats.intelligence),e.xp6(5),e.Oqu(o.powerstats.strength),e.xp6(5),e.Oqu(o.powerstats.speed),e.xp6(5),e.Oqu(o.powerstats.durability),e.xp6(5),e.Oqu(o.powerstats.power),e.xp6(5),e.Oqu(o.powerstats.combat),e.xp6(4),e.hij(" ",o.connections.groupAffiliation," ")}}function Z(i,t){if(1&i&&(e.TgZ(0,"ion-grid")(1,"ion-row"),e.YNc(2,m,49,13,"ion-col",6),e.qZA()()),2&i){const o=e.oxw();e.xp6(2),e.Q6J("ngForOf",o.heroesDTO)}}function _(i,t){1&i&&(e.TgZ(0,"div",22),e._UZ(1,"ion-spinner",23),e.TgZ(2,"h3"),e._uU(3,"Loading"),e.qZA()())}const f=[{path:"",component:(()=>{class i{constructor(o,r){this.heroService=o,this.router=r,this.index=0}ngOnInit(){null!=localStorage.getItem("heroes")?this.heroes=JSON.parse(localStorage.getItem("heroes")):this.heroService.getAllHeroes().subscribe(o=>{this.heroes=o,localStorage.setItem("heroes",JSON.stringify(o))}),this.heroesDTO=this.heroes.slice(this.index,20),this.index=20}inputChanged(o){console.log(o.detail.value),this.heroes=JSON.parse(localStorage.getItem("heroes")),this.heroes=this.heroes.filter(r=>r.name.includes(o.detail.value)),this.heroesDTO=this.heroes,""==o.detail.value&&(this.heroes=JSON.parse(localStorage.getItem("heroes")),this.heroesDTO=this.heroes)}loadMoreHeroes(){this.index+=20,this.heroesDTO=this.heroes.slice(0,this.index),console.log(this.heroesDTO)}redirectToRace(o){this.router.navigate([`/race/${o}`])}}return i.\u0275fac=function(o){return new(o||i)(e.Y36(h.b),e.Y36(a.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-heroes"]],decls:14,vars:2,consts:[["slot","start"],["placeholder","Name of hero",3,"ionChange"],[4,"ngIf","ngIfElse"],[1,"ion-text-center"],[3,"click"],["loading",""],["size","12","size-sm","6","size-md","4","size-lg","3","size-xl","3",4,"ngFor","ngForOf"],["size","12","size-sm","6","size-md","4","size-lg","3","size-xl","3"],[3,"routerLink","alt","src"],["color","primary",3,"click"],["alt","Race","src","https://ionicframework.com/docs/img/demos/avatar.svg"],[4,"ngIf"],["size","2"],[1,"ability-container"],["src","../../../assets/icon/intelligence.png","alt","intelligence"],[1,"ion-padding-top-8"],["src","../../../assets/icon/strength.png","alt","strength"],["src","../../../assets/icon/speed.png","alt","speed"],["src","../../../assets/icon/durability.png","alt","durability"],["src","../../../assets/icon/power.png","alt","power"],["src","../../../assets/icon/combat.png","alt","combat"],["color","primary"],[1,"spinner-container"],["color","primary",1,"spinner-large"]],template:function(o,r){if(1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"heroes"),e.qZA(),e.TgZ(4,"ion-buttons",0),e._UZ(5,"ion-menu-button"),e.qZA()()(),e.TgZ(6,"ion-content")(7,"ion-searchbar",1),e.NdJ("ionChange",function(g){return r.inputChanged(g)}),e.qZA(),e.YNc(8,Z,3,1,"ion-grid",2),e.TgZ(9,"p",3)(10,"ion-button",4),e.NdJ("click",function(){return r.loadMoreHeroes()}),e._uU(11,"Load more heroes"),e.qZA()(),e.YNc(12,_,4,0,"ng-template",null,5,e.W1O),e.qZA()),2&o){const c=e.MAs(13);e.xp6(8),e.Q6J("ngIf",r.heroes)("ngIfElse",c)}},dependencies:[l.sg,l.O5,n.BJ,n.YG,n.Sm,n.PM,n.FN,n.Zi,n.tO,n.Dq,n.hM,n.wI,n.W2,n.jY,n.Gu,n.Q$,n.fG,n.Nd,n.VI,n.PQ,n.yW,n.wd,n.sr,n.j9,n.YI,a.rH],styles:[".spinner-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:wrap;align-items:center;justify-content:center;width:90%;height:90%}.spinner-large[_ngcontent-%COMP%]{width:64px;height:64px}.ion-padding-top-8[_ngcontent-%COMP%]{padding-top:8px}ion-card[_ngcontent-%COMP%]{transition:.3s ease-in-out all;cursor:pointer}ion-card[_ngcontent-%COMP%]:hover{transform:scale(1.1);z-index:10000}"]}),i})()}];let T=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[a.Bz.forChild(f),a.Bz]}),i})(),x=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[l.ez,d.u5,n.Pc,T]}),i})()}}]);