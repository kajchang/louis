(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4,5,6],{142:function(e,t,a){"use strict";a.r(t);a(75),a(76),a(154);var n=a(0),r=a.n(n),l=a(152),o=a(202),s=a(203),i=a(204),c=a(205),u=a(157),d=a(155),p=a(166);t.default=function(e){var t=e.pageContext.name;return r.a.createElement(l.default,null,r.a.createElement(o.a,{style:{maxWidth:400}},r.a.createElement(s.a,null,r.a.createElement(i.a,null,r.a.createElement(d.default,{countryName:t,size:"medium",style:{marginBottom:".5rem"}}),r.a.createElement("h3",{style:{display:"inline"}},t),r.a.createElement("h4",null,"Wars")),r.a.createElement(c.a,null,Object(p.getDataSource)("War").data.filter(function(e){return e.participants.some(function(e){return e.includes(t)})}).map(function(e,t){return r.a.createElement(u.default,{key:t,data:e,size:"small"})})))))}},143:function(e,t,a){"use strict";a.r(t);a(154);var n=a(0),r=a.n(n),l=a(202),o=a(203),s=a(204),i=a(205),c=a(148),u=a(149),d=a(4),p=a.n(d),f=a(150),m=a.n(f),b=a(151),g={tag:b.b,noGutters:p.a.bool,className:p.a.string,cssModule:p.a.object,form:p.a.bool},h=function(e){var t=e.className,a=e.cssModule,n=e.noGutters,l=e.tag,o=e.form,s=Object(u.a)(e,["className","cssModule","noGutters","tag","form"]),i=Object(b.a)(m()(t,n?"no-gutters":null,o?"form-row":"row"),a);return r.a.createElement(l,Object(c.a)({},s,{className:i}))};h.propTypes=g,h.defaultProps={tag:"div"};var v=h,y=a(167),j=a.n(y),E=p.a.oneOfType([p.a.number,p.a.string]),O=p.a.oneOfType([p.a.bool,p.a.number,p.a.string,p.a.shape({size:p.a.oneOfType([p.a.bool,p.a.number,p.a.string]),order:E,offset:E})]),k={tag:b.b,xs:O,sm:O,md:O,lg:O,xl:O,className:p.a.string,cssModule:p.a.object,widths:p.a.array},C={tag:"div",widths:["xs","sm","md","lg","xl"]},w=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},N=function(e){var t=e.className,a=e.cssModule,n=e.widths,l=e.tag,o=Object(u.a)(e,["className","cssModule","widths","tag"]),s=[];n.forEach(function(t,n){var r=e[t];if(delete o[t],r||""===r){var l=!n;if(j()(r)){var i,c=l?"-":"-"+t+"-",u=w(l,t,r.size);s.push(Object(b.a)(m()(((i={})[u]=r.size||""===r.size,i["order"+c+r.order]=r.order||0===r.order,i["offset"+c+r.offset]=r.offset||0===r.offset,i)),a))}else{var d=w(l,t,r);s.push(d)}}}),s.length||s.push("col");var i=Object(b.a)(m()(t,s),a);return r.a.createElement(l,Object(c.a)({},o,{className:i}))};N.propTypes=k,N.defaultProps=C;var x=N,z=a(152),P=a(159),M=a(158);t.default=function(e){var t=e.pageContext,a=t.name,n=t.start,c=t.end,u=t.participants,d=t.desc,p=0;return r.a.createElement(z.default,null,r.a.createElement(l.a,{style:{maxWidth:400}},r.a.createElement(o.a,null,r.a.createElement(s.a,null,r.a.createElement("h3",null,a)),r.a.createElement(i.a,null,"(",n," - ",c,")"),r.a.createElement(v,null,u.map(function(e){return r.a.createElement(x,{key:p++},e.map(function(e,t){return r.a.createElement("span",{key:t,style:{display:"block",paddingBottom:5}},r.a.createElement(P.default,{data:{name:e},size:"small"}))}))}).reduce(function(e,t){return[e,r.a.createElement(x,{key:p++,className:"col-md-auto"},r.a.createElement("div",{style:{width:1,height:"100%",borderLeft:"1px solid",margin:"auto"}})),t]})),r.a.createElement(i.a,null,r.a.createElement(M.default,{text:d})))))}},144:function(e,t,a){"use strict";a.r(t);a(75),a(76),a(154);var n=a(0),r=a.n(n),l=a(148),o=a(149),s=a(160),i=a(161),c=a(4),u=a.n(c),d=a(150),p=a.n(d),f=a(151),m={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.b,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,n=e.type,s=e.bsSize,i=e.valid,c=e.invalid,u=e.tag,d=e.addon,m=e.plaintext,b=e.innerRef,g=Object(o.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(n)>-1,v=new RegExp("\\D","g"),y=u||("select"===n||"textarea"===n?n:"input"),j="form-control";m?(j+="-plaintext",y=u||"input"):"file"===n?j+="-file":h&&(j=d?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(f.c)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=g.size,delete g.size);var E=Object(f.a)(p()(t,c&&"is-invalid",i&&"is-valid",!!s&&"form-control-"+s,j),a);return("input"===y||u&&"function"==typeof u)&&(g.type=n),g.children&&!m&&"select"!==n&&"string"==typeof y&&"select"!==y&&(Object(f.c)('Input with a type of "'+n+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),r.a.createElement(y,Object(l.a)({},g,{ref:b,className:E}))},t}(r.a.Component);b.propTypes=m,b.defaultProps={type:"text"};var g=b,h={tag:f.b,flush:u.a.bool,className:u.a.string,cssModule:u.a.object},v=function(e){var t=e.className,a=e.cssModule,n=e.tag,s=e.flush,i=Object(o.a)(e,["className","cssModule","tag","flush"]),c=Object(f.a)(p()(t,"list-group",!!s&&"list-group-flush"),a);return r.a.createElement(n,Object(l.a)({},i,{className:c}))};v.propTypes=h,v.defaultProps={tag:"ul"};var y=v,j={tag:f.b,active:u.a.bool,disabled:u.a.bool,color:u.a.string,action:u.a.bool,className:u.a.any,cssModule:u.a.object},E=function(e){e.preventDefault()},O=function(e){var t=e.className,a=e.cssModule,n=e.tag,s=e.active,i=e.disabled,c=e.action,u=e.color,d=Object(o.a)(e,["className","cssModule","tag","active","disabled","action","color"]),m=Object(f.a)(p()(t,!!s&&"active",!!i&&"disabled",!!c&&"list-group-item-action",!!u&&"list-group-item-"+u,"list-group-item"),a);return i&&(d.onClick=E),r.a.createElement(n,Object(l.a)({},d,{className:m}))};O.propTypes=j,O.defaultProps={tag:"li"};var k=O,C=a(201),w=a(152);t.default=function(e){var t=e.pageContext,l=t.data,o=t.pathname,s=t.numShown,i=t.previewComponent,c=Object(n.useState)(""),u=c[0],d=c[1],p=Object(n.useState)(0),f=p[0],m=p[1],b=a(165)("./"+i).default,h=l.filter(function(e){return e.name.toLowerCase().includes(u.toLowerCase())});return r.a.createElement(w.default,null,r.a.createElement("div",null,r.a.createElement(g,{placeholder:"Search "+o.charAt(1).toUpperCase().concat(o.slice(2))+"...",type:"text",value:u,onChange:function(e){d(e.target.value),m(0)},style:{fontSize:20,marginBottom:10,padding:20}}),r.a.createElement(y,null,h.slice(f,f+s).map(function(e,t){return r.a.createElement(k,{key:t,style:{padding:10}},r.a.createElement(b,{data:e,size:"medium"}))})),r.a.createElement(C.a,{onClick:function(){return m(f-s)},style:{marginLeft:25,marginTop:15},disabled:f-s<0},"Previous Page"),r.a.createElement(C.a,{onClick:function(){return m(f+s)},style:{float:"right",marginRight:25,marginTop:15},disabled:f+s>h.length},"Next Page")))}},146:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),l=a(152),o=a(162),s=a(166);t.default=function(){return r.a.createElement(l.default,null,s.sources.map(function(e,t){return r.a.createElement(o.default,Object.assign({key:t},e))}))}},162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),s=a(156),i=a(202),c=a(203),u=a(204),d=a(201),p=a(164),f=function(e){var t=e.data,n=e.numShown,l=e.pathname,o=e.previewComponent,f=a(165)("./"+o).default;return r.a.createElement(i.a,{style:Object(p.b)()?{minWidth:"100%",marginTop:10}:{marginRight:10,marginTop:10,minWidth:"calc(33% - 10px)"}},r.a.createElement(c.a,null,r.a.createElement(u.a,null,r.a.createElement(s.a,{to:l,title:l.charAt(1).toUpperCase().concat(l.slice(2))},r.a.createElement("h3",null,l.charAt(1).toUpperCase().concat(l.slice(2))))),t.slice(0,n).map(function(e,t){return r.a.createElement(f,{key:t,data:e,size:"small"})}),r.a.createElement(d.a,{size:"sm",onClick:function(){return Object(s.b)(l)},style:{marginTop:10},title:l.charAt(1).toUpperCase().concat(l.slice(2))},"See More")))};f.propTypes={data:o.a.arrayOf(o.a.shape({name:o.a.string.isRequired})),numShown:o.a.number,pathname:o.a.string.isRequired,previewComponent:o.a.string.isRequired},t.default=f},165:function(e,t,a){var n={"./CountryPage":142,"./CountryPage.js":142,"./CountryPreview":159,"./CountryPreview.js":159,"./Flag":155,"./Flag.js":155,"./Layout":152,"./Layout.js":152,"./LinkDisplay":162,"./LinkDisplay.js":162,"./LinkSearch":144,"./LinkSearch.js":144,"./TextParser":158,"./TextParser.js":158,"./WarPage":143,"./WarPage.js":143,"./WarPreview":157,"./WarPreview.js":157};function r(e){var t=l(e);return a(t)}function l(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=165},167:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},201:function(e,t,a){"use strict";var n=a(148),r=a(149),l=a(160),o=a(161),s=a(0),i=a.n(s),c=a(4),u=a.n(c),d=a(150),p=a.n(d),f=a(151),m={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:f.b,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(l.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],l=e.block,o=e.className,s=e.close,c=e.cssModule,u=e.color,d=e.outline,m=e.size,b=e.tag,g=e.innerRef,h=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&void 0===h.children&&(h.children=i.a.createElement("span",{"aria-hidden":!0},"×"));var v="btn"+(d?"-outline":"")+"-"+u,y=Object(f.a)(p()(o,{close:s},s||"btn",s||v,!!m&&"btn-"+m,!!l&&"btn-block",{active:t,disabled:this.props.disabled}),c);h.href&&"button"===b&&(b="a");var j=s?"Close":null;return i.a.createElement(b,Object(n.a)({type:"button"===b&&h.onClick?"button":void 0},h,{className:y,ref:g,onClick:this.onClick,"aria-label":a||j}))},t}(i.a.Component);b.propTypes=m,b.defaultProps={color:"secondary",tag:"button"},t.a=b}}]);
//# sourceMappingURL=component---src-pages-index-js-ec7b27730a425c044f41.js.map