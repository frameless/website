import{r as c,h as d}from"../entries/pages_index.Bo0-9ShI.js";import"./chunk-B95eHId6.js";/* empty css              */import"./chunk-D7HrI6pR.js";const b=".utrecht-number-badge{background-color:var(--utrecht-number-badge-background-color, var(--utrecht-badge-background-color, hsl(0, 0%, 0%)));border-radius:var(--utrecht-number-badge-border-radius, var(--utrecht-badge-border-radius, 0.5ch));color:var(--utrecht-number-badge-color, var(--utrecht-badge-color, hsl(0, 0%, 100%)));display:inline-block;font-family:var(--utrecht-number-badge-font-family, var(--utrecht-badge-font-family, var(--utrecht-document-font-family, sans-serif)));font-size:var(--utrecht-number-badge-font-size, var(--utrecht-badge-font-size));font-style:var(--utrecht-number-badge-font-style, normal);font-weight:var(--utrecht-number-badge-font-weight, var(--utrecht-badge-font-weight, bold));line-height:1;max-block-size:max-content;max-inline-size:max-content;min-block-size:var(--utrecht-number-badge-min-block-size, var(--utrecht-number-badge-min-inline-size, var(--utrecht-number-badge-min-size, 1em)));min-inline-size:var(--utrecht-number-badge-min-inline-size, var(--utrecht-number-badge-min-size, 1em));padding-block-end:var(--utrecht-number-badge-padding-block, var(--utrecht-badge-padding-block, 0.5ex));padding-block-start:var(--utrecht-number-badge-padding-block, var(--utrecht-badge-padding-block, 0.5ex));padding-inline-end:var(--utrecht-number-badge-padding-inline, var(--utrecht-badge-padding-inline, 0.5ch));padding-inline-start:var(--utrecht-number-badge-padding-inline, var(--utrecht-badge-padding-inline, 0.5ch));text-align:center;text-decoration:none;white-space:nowrap}@media screen and (-ms-high-contrast: active), screen and (forced-colors: active){.utrecht-number-badge{border-color:currentColor;border-style:solid;border-width:1px}}:host{display:inline-block}:host([hidden]){display:none !important}",u=b,l=class{constructor(e){c(this,e),this.value=void 0,this.max=void 0,this.locale=void 0}render(){const{locale:e,max:t,value:r}=this,o=typeof t=="number"&&typeof r=="number"&&Number(r)>Number(t),n=i=>e?Intl.NumberFormat(e).format(i):String(i),a=o?`${n(t)}+`:typeof r=="number"?n(r):"";return d("div",{key:"9d8ab3e9cdf83a24184f5ff7a7da1b2da2178b1e",class:"utrecht-number-badge"},a||d("slot",null))}};l.style=u;export{l as utrecht_number_badge};
