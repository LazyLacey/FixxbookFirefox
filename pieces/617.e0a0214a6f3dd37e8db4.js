"use strict";(self.webpackChunkficbook=self.webpackChunkficbook||[]).push([[617],{9617:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var i=a(1101),n=a(1536),s=a(4569),l=a(3043),o=a(7362);let c={class:"rating-selector"},d={class:"badge-text"},p={class:"description"},r={class:"option"},g={class:"badge-text"},u={class:"description"},b=["value"],_=(0,i.aZ)({__name:"fanfic-rating-selector",props:{ratingOptions:{},selectedRatingId:{}},setup(e){let t=(0,n.iH)(e.selectedRatingId?e.ratingOptions.find(t=>t.id===e.selectedRatingId)||null:e.ratingOptions[0]);return(e,a)=>((0,i.wg)(),(0,i.iD)("div",c,[(0,i.Wm)((0,n.SU)(l.Z),{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),options:e.ratingOptions,class:"common-select",label:"title",searchable:!1,clearable:!1,"clear-search-on-blur":()=>!1,components:{OpenIndicator:(0,n.SU)(o.$)}},{"selected-option":(0,i.w5)(e=>[(0,i._)("div",{class:(0,s.C_)(`badge-with-icon badge-rating-${e.title} selected-option-badge`)},[(0,i._)("span",d,(0,s.zw)(e.title),1)],2),(0,i._)("span",p," ("+(0,s.zw)(e.description)+") ",1)]),option:(0,i.w5)(e=>[(0,i._)("div",r,[(0,i._)("div",{class:(0,s.C_)(`badge-with-icon badge-rating-${e.title}`)},[(0,i._)("span",g,(0,s.zw)(e.title),1)],2),(0,i._)("span",u," ("+(0,s.zw)(e.description)+") ",1)])]),_:1},8,["modelValue","options","components"]),(0,i._)("input",{type:"hidden",name:"rating",value:t.value?.id},null,8,b)]))}});var v=a(1334);let w=(0,v.Z)(_,[["__scopeId","data-v-582f9dbe"]]),m=w}}]);