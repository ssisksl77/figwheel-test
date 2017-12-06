// Compiled by ClojureScript 1.9.229 {}
goog.provide('domina.css');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
goog.require('goog.dom.query');
domina.css.root_element = (function domina$css$root_element(){
return (goog.dom.getElementsByTagNameAndClass("html")[(0)]);
});
/**
 * Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
 */
domina.css.sel = (function domina$css$sel(var_args){
var args28460 = [];
var len__27879__auto___28466 = arguments.length;
var i__27880__auto___28467 = (0);
while(true){
if((i__27880__auto___28467 < len__27879__auto___28466)){
args28460.push((arguments[i__27880__auto___28467]));

var G__28468 = (i__27880__auto___28467 + (1));
i__27880__auto___28467 = G__28468;
continue;
} else {
}
break;
}

var G__28462 = args28460.length;
switch (G__28462) {
case 1:
return domina.css.sel.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.css.sel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28460.length)].join('')));

}
});

domina.css.sel.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return domina.css.sel.call(null,domina.css.root_element.call(null),expr);
});

domina.css.sel.cljs$core$IFn$_invoke$arity$2 = (function (base,expr){
if(typeof domina.css.t_domina$css28463 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.DomContent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
domina.css.t_domina$css28463 = (function (base,expr,meta28464){
this.base = base;
this.expr = expr;
this.meta28464 = meta28464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.css.t_domina$css28463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28465,meta28464__$1){
var self__ = this;
var _28465__$1 = this;
return (new domina.css.t_domina$css28463(self__.base,self__.expr,meta28464__$1));
});

domina.css.t_domina$css28463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28465){
var self__ = this;
var _28465__$1 = this;
return self__.meta28464;
});

domina.css.t_domina$css28463.prototype.domina$DomContent$ = true;

domina.css.t_domina$css28463.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__28458_SHARP_){
return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__28458_SHARP_));
});})(___$1))
,domina.nodes.call(null,self__.base));
});

domina.css.t_domina$css28463.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__28459_SHARP_){
return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__28459_SHARP_));
});})(___$1))
,domina.nodes.call(null,self__.base))));
});

domina.css.t_domina$css28463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"meta28464","meta28464",830195362,null)], null);
});

domina.css.t_domina$css28463.cljs$lang$type = true;

domina.css.t_domina$css28463.cljs$lang$ctorStr = "domina.css/t_domina$css28463";

domina.css.t_domina$css28463.cljs$lang$ctorPrWriter = (function (this__27410__auto__,writer__27411__auto__,opt__27412__auto__){
return cljs.core._write.call(null,writer__27411__auto__,"domina.css/t_domina$css28463");
});

domina.css.__GT_t_domina$css28463 = (function domina$css$__GT_t_domina$css28463(base__$1,expr__$1,meta28464){
return (new domina.css.t_domina$css28463(base__$1,expr__$1,meta28464));
});

}

return (new domina.css.t_domina$css28463(base,expr,cljs.core.PersistentArrayMap.EMPTY));
});

domina.css.sel.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=css.js.map?rel=1511837126002