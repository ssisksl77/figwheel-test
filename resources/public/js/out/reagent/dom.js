// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
goog.require('react_dom');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return react_dom.unmountComponentAtNode.call(null,container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_29854 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR_29854){
return (function (){
var _STAR_always_update_STAR_29855 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_29855;
}});})(_STAR_always_update_STAR_29854))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_29854;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args29856 = [];
var len__27879__auto___29859 = arguments.length;
var i__27880__auto___29860 = (0);
while(true){
if((i__27880__auto___29860 < len__27879__auto___29859)){
args29856.push((arguments[i__27880__auto___29860]));

var G__29861 = (i__27880__auto___29860 + (1));
i__27880__auto___29860 = G__29861;
continue;
} else {
}
break;
}

var G__29858 = args29856.length;
switch (G__29858) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29856.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return react_dom.findDOMNode.call(null,this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__29867_29871 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__29868_29872 = null;
var count__29869_29873 = (0);
var i__29870_29874 = (0);
while(true){
if((i__29870_29874 < count__29869_29873)){
var v_29875 = cljs.core._nth.call(null,chunk__29868_29872,i__29870_29874);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_29875);

var G__29876 = seq__29867_29871;
var G__29877 = chunk__29868_29872;
var G__29878 = count__29869_29873;
var G__29879 = (i__29870_29874 + (1));
seq__29867_29871 = G__29876;
chunk__29868_29872 = G__29877;
count__29869_29873 = G__29878;
i__29870_29874 = G__29879;
continue;
} else {
var temp__4657__auto___29880 = cljs.core.seq.call(null,seq__29867_29871);
if(temp__4657__auto___29880){
var seq__29867_29881__$1 = temp__4657__auto___29880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29867_29881__$1)){
var c__27615__auto___29882 = cljs.core.chunk_first.call(null,seq__29867_29881__$1);
var G__29883 = cljs.core.chunk_rest.call(null,seq__29867_29881__$1);
var G__29884 = c__27615__auto___29882;
var G__29885 = cljs.core.count.call(null,c__27615__auto___29882);
var G__29886 = (0);
seq__29867_29871 = G__29883;
chunk__29868_29872 = G__29884;
count__29869_29873 = G__29885;
i__29870_29874 = G__29886;
continue;
} else {
var v_29887 = cljs.core.first.call(null,seq__29867_29881__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_29887);

var G__29888 = cljs.core.next.call(null,seq__29867_29881__$1);
var G__29889 = null;
var G__29890 = (0);
var G__29891 = (0);
seq__29867_29871 = G__29888;
chunk__29868_29872 = G__29889;
count__29869_29873 = G__29890;
i__29870_29874 = G__29891;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1511941499192