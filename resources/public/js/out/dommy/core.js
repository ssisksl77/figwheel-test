// Compiled by ClojureScript 1.9.229 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__26804__auto__ = elem.textContent;
if(cljs.core.truth_(or__26804__auto__)){
return or__26804__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args28028 = [];
var len__27879__auto___28031 = arguments.length;
var i__27880__auto___28032 = (0);
while(true){
if((i__27880__auto___28032 < len__27879__auto___28031)){
args28028.push((arguments[i__27880__auto___28032]));

var G__28033 = (i__27880__auto___28032 + (1));
i__27880__auto___28032 = G__28033;
continue;
} else {
}
break;
}

var G__28030 = args28028.length;
switch (G__28030) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28028.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args28035 = [];
var len__27879__auto___28038 = arguments.length;
var i__27880__auto___28039 = (0);
while(true){
if((i__27880__auto___28039 < len__27879__auto___28038)){
args28035.push((arguments[i__27880__auto___28039]));

var G__28040 = (i__27880__auto___28039 + (1));
i__27880__auto___28039 = G__28040;
continue;
} else {
}
break;
}

var G__28037 = args28035.length;
switch (G__28037) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28035.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args28043 = [];
var len__27879__auto___28046 = arguments.length;
var i__27880__auto___28047 = (0);
while(true){
if((i__27880__auto___28047 < len__27879__auto___28046)){
args28043.push((arguments[i__27880__auto___28047]));

var G__28048 = (i__27880__auto___28047 + (1));
i__27880__auto___28047 = G__28048;
continue;
} else {
}
break;
}

var G__28045 = args28043.length;
switch (G__28045) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28043.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__28042_SHARP_){
return !((p1__28042_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__27886__auto__ = [];
var len__27879__auto___28062 = arguments.length;
var i__27880__auto___28063 = (0);
while(true){
if((i__27880__auto___28063 < len__27879__auto___28062)){
args__27886__auto__.push((arguments[i__27880__auto___28063]));

var G__28064 = (i__27880__auto___28063 + (1));
i__27880__auto___28063 = G__28064;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((1) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27887__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__28052_28065 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__28053_28066 = null;
var count__28054_28067 = (0);
var i__28055_28068 = (0);
while(true){
if((i__28055_28068 < count__28054_28067)){
var vec__28056_28069 = cljs.core._nth.call(null,chunk__28053_28066,i__28055_28068);
var k_28070 = cljs.core.nth.call(null,vec__28056_28069,(0),null);
var v_28071 = cljs.core.nth.call(null,vec__28056_28069,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_28070),v_28071);

var G__28072 = seq__28052_28065;
var G__28073 = chunk__28053_28066;
var G__28074 = count__28054_28067;
var G__28075 = (i__28055_28068 + (1));
seq__28052_28065 = G__28072;
chunk__28053_28066 = G__28073;
count__28054_28067 = G__28074;
i__28055_28068 = G__28075;
continue;
} else {
var temp__4657__auto___28076 = cljs.core.seq.call(null,seq__28052_28065);
if(temp__4657__auto___28076){
var seq__28052_28077__$1 = temp__4657__auto___28076;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28052_28077__$1)){
var c__27615__auto___28078 = cljs.core.chunk_first.call(null,seq__28052_28077__$1);
var G__28079 = cljs.core.chunk_rest.call(null,seq__28052_28077__$1);
var G__28080 = c__27615__auto___28078;
var G__28081 = cljs.core.count.call(null,c__27615__auto___28078);
var G__28082 = (0);
seq__28052_28065 = G__28079;
chunk__28053_28066 = G__28080;
count__28054_28067 = G__28081;
i__28055_28068 = G__28082;
continue;
} else {
var vec__28059_28083 = cljs.core.first.call(null,seq__28052_28077__$1);
var k_28084 = cljs.core.nth.call(null,vec__28059_28083,(0),null);
var v_28085 = cljs.core.nth.call(null,vec__28059_28083,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_28084),v_28085);

var G__28086 = cljs.core.next.call(null,seq__28052_28077__$1);
var G__28087 = null;
var G__28088 = (0);
var G__28089 = (0);
seq__28052_28065 = G__28086;
chunk__28053_28066 = G__28087;
count__28054_28067 = G__28088;
i__28055_28068 = G__28089;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq28050){
var G__28051 = cljs.core.first.call(null,seq28050);
var seq28050__$1 = cljs.core.next.call(null,seq28050);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28051,seq28050__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__27886__auto__ = [];
var len__27879__auto___28096 = arguments.length;
var i__27880__auto___28097 = (0);
while(true){
if((i__27880__auto___28097 < len__27879__auto___28096)){
args__27886__auto__.push((arguments[i__27880__auto___28097]));

var G__28098 = (i__27880__auto___28097 + (1));
i__27880__auto___28097 = G__28098;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((1) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27887__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__28092_28100 = cljs.core.seq.call(null,keywords);
var chunk__28093_28101 = null;
var count__28094_28102 = (0);
var i__28095_28103 = (0);
while(true){
if((i__28095_28103 < count__28094_28102)){
var kw_28104 = cljs.core._nth.call(null,chunk__28093_28101,i__28095_28103);
style.removeProperty(dommy.utils.as_str.call(null,kw_28104));

var G__28105 = seq__28092_28100;
var G__28106 = chunk__28093_28101;
var G__28107 = count__28094_28102;
var G__28108 = (i__28095_28103 + (1));
seq__28092_28100 = G__28105;
chunk__28093_28101 = G__28106;
count__28094_28102 = G__28107;
i__28095_28103 = G__28108;
continue;
} else {
var temp__4657__auto___28109 = cljs.core.seq.call(null,seq__28092_28100);
if(temp__4657__auto___28109){
var seq__28092_28110__$1 = temp__4657__auto___28109;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28092_28110__$1)){
var c__27615__auto___28111 = cljs.core.chunk_first.call(null,seq__28092_28110__$1);
var G__28112 = cljs.core.chunk_rest.call(null,seq__28092_28110__$1);
var G__28113 = c__27615__auto___28111;
var G__28114 = cljs.core.count.call(null,c__27615__auto___28111);
var G__28115 = (0);
seq__28092_28100 = G__28112;
chunk__28093_28101 = G__28113;
count__28094_28102 = G__28114;
i__28095_28103 = G__28115;
continue;
} else {
var kw_28116 = cljs.core.first.call(null,seq__28092_28110__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_28116));

var G__28117 = cljs.core.next.call(null,seq__28092_28110__$1);
var G__28118 = null;
var G__28119 = (0);
var G__28120 = (0);
seq__28092_28100 = G__28117;
chunk__28093_28101 = G__28118;
count__28094_28102 = G__28119;
i__28095_28103 = G__28120;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq28090){
var G__28091 = cljs.core.first.call(null,seq28090);
var seq28090__$1 = cljs.core.next.call(null,seq28090);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28091,seq28090__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__27886__auto__ = [];
var len__27879__auto___28133 = arguments.length;
var i__27880__auto___28134 = (0);
while(true){
if((i__27880__auto___28134 < len__27879__auto___28133)){
args__27886__auto__.push((arguments[i__27880__auto___28134]));

var G__28135 = (i__27880__auto___28134 + (1));
i__27880__auto___28134 = G__28135;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((1) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27887__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__28123_28136 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__28124_28137 = null;
var count__28125_28138 = (0);
var i__28126_28139 = (0);
while(true){
if((i__28126_28139 < count__28125_28138)){
var vec__28127_28140 = cljs.core._nth.call(null,chunk__28124_28137,i__28126_28139);
var k_28141 = cljs.core.nth.call(null,vec__28127_28140,(0),null);
var v_28142 = cljs.core.nth.call(null,vec__28127_28140,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_28141,[cljs.core.str(v_28142),cljs.core.str("px")].join(''));

var G__28143 = seq__28123_28136;
var G__28144 = chunk__28124_28137;
var G__28145 = count__28125_28138;
var G__28146 = (i__28126_28139 + (1));
seq__28123_28136 = G__28143;
chunk__28124_28137 = G__28144;
count__28125_28138 = G__28145;
i__28126_28139 = G__28146;
continue;
} else {
var temp__4657__auto___28147 = cljs.core.seq.call(null,seq__28123_28136);
if(temp__4657__auto___28147){
var seq__28123_28148__$1 = temp__4657__auto___28147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28123_28148__$1)){
var c__27615__auto___28149 = cljs.core.chunk_first.call(null,seq__28123_28148__$1);
var G__28150 = cljs.core.chunk_rest.call(null,seq__28123_28148__$1);
var G__28151 = c__27615__auto___28149;
var G__28152 = cljs.core.count.call(null,c__27615__auto___28149);
var G__28153 = (0);
seq__28123_28136 = G__28150;
chunk__28124_28137 = G__28151;
count__28125_28138 = G__28152;
i__28126_28139 = G__28153;
continue;
} else {
var vec__28130_28154 = cljs.core.first.call(null,seq__28123_28148__$1);
var k_28155 = cljs.core.nth.call(null,vec__28130_28154,(0),null);
var v_28156 = cljs.core.nth.call(null,vec__28130_28154,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_28155,[cljs.core.str(v_28156),cljs.core.str("px")].join(''));

var G__28157 = cljs.core.next.call(null,seq__28123_28148__$1);
var G__28158 = null;
var G__28159 = (0);
var G__28160 = (0);
seq__28123_28136 = G__28157;
chunk__28124_28137 = G__28158;
count__28125_28138 = G__28159;
i__28126_28139 = G__28160;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq28121){
var G__28122 = cljs.core.first.call(null,seq28121);
var seq28121__$1 = cljs.core.next.call(null,seq28121);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28122,seq28121__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args28161 = [];
var len__27879__auto___28180 = arguments.length;
var i__27880__auto___28181 = (0);
while(true){
if((i__27880__auto___28181 < len__27879__auto___28180)){
args28161.push((arguments[i__27880__auto___28181]));

var G__28182 = (i__27880__auto___28181 + (1));
i__27880__auto___28181 = G__28182;
continue;
} else {
}
break;
}

var G__28167 = args28161.length;
switch (G__28167) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__27898__auto__ = (new cljs.core.IndexedSeq(args28161.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27898__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__28168 = elem;
(G__28168[k__$1] = v);

return G__28168;
} else {
var G__28169 = elem;
G__28169.setAttribute(k__$1,v);

return G__28169;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__28170_28184 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__28171_28185 = null;
var count__28172_28186 = (0);
var i__28173_28187 = (0);
while(true){
if((i__28173_28187 < count__28172_28186)){
var vec__28174_28188 = cljs.core._nth.call(null,chunk__28171_28185,i__28173_28187);
var k_28189__$1 = cljs.core.nth.call(null,vec__28174_28188,(0),null);
var v_28190__$1 = cljs.core.nth.call(null,vec__28174_28188,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_28189__$1,v_28190__$1);

var G__28191 = seq__28170_28184;
var G__28192 = chunk__28171_28185;
var G__28193 = count__28172_28186;
var G__28194 = (i__28173_28187 + (1));
seq__28170_28184 = G__28191;
chunk__28171_28185 = G__28192;
count__28172_28186 = G__28193;
i__28173_28187 = G__28194;
continue;
} else {
var temp__4657__auto___28195 = cljs.core.seq.call(null,seq__28170_28184);
if(temp__4657__auto___28195){
var seq__28170_28196__$1 = temp__4657__auto___28195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28170_28196__$1)){
var c__27615__auto___28197 = cljs.core.chunk_first.call(null,seq__28170_28196__$1);
var G__28198 = cljs.core.chunk_rest.call(null,seq__28170_28196__$1);
var G__28199 = c__27615__auto___28197;
var G__28200 = cljs.core.count.call(null,c__27615__auto___28197);
var G__28201 = (0);
seq__28170_28184 = G__28198;
chunk__28171_28185 = G__28199;
count__28172_28186 = G__28200;
i__28173_28187 = G__28201;
continue;
} else {
var vec__28177_28202 = cljs.core.first.call(null,seq__28170_28196__$1);
var k_28203__$1 = cljs.core.nth.call(null,vec__28177_28202,(0),null);
var v_28204__$1 = cljs.core.nth.call(null,vec__28177_28202,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_28203__$1,v_28204__$1);

var G__28205 = cljs.core.next.call(null,seq__28170_28196__$1);
var G__28206 = null;
var G__28207 = (0);
var G__28208 = (0);
seq__28170_28184 = G__28205;
chunk__28171_28185 = G__28206;
count__28172_28186 = G__28207;
i__28173_28187 = G__28208;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq28162){
var G__28163 = cljs.core.first.call(null,seq28162);
var seq28162__$1 = cljs.core.next.call(null,seq28162);
var G__28164 = cljs.core.first.call(null,seq28162__$1);
var seq28162__$2 = cljs.core.next.call(null,seq28162__$1);
var G__28165 = cljs.core.first.call(null,seq28162__$2);
var seq28162__$3 = cljs.core.next.call(null,seq28162__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28163,G__28164,G__28165,seq28162__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args28209 = [];
var len__27879__auto___28219 = arguments.length;
var i__27880__auto___28220 = (0);
while(true){
if((i__27880__auto___28220 < len__27879__auto___28219)){
args28209.push((arguments[i__27880__auto___28220]));

var G__28221 = (i__27880__auto___28220 + (1));
i__27880__auto___28220 = G__28221;
continue;
} else {
}
break;
}

var G__28214 = args28209.length;
switch (G__28214) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27898__auto__ = (new cljs.core.IndexedSeq(args28209.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27898__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_28223__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_28223__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_28223__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__28215_28224 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__28216_28225 = null;
var count__28217_28226 = (0);
var i__28218_28227 = (0);
while(true){
if((i__28218_28227 < count__28217_28226)){
var k_28228__$1 = cljs.core._nth.call(null,chunk__28216_28225,i__28218_28227);
dommy.core.remove_attr_BANG_.call(null,elem,k_28228__$1);

var G__28229 = seq__28215_28224;
var G__28230 = chunk__28216_28225;
var G__28231 = count__28217_28226;
var G__28232 = (i__28218_28227 + (1));
seq__28215_28224 = G__28229;
chunk__28216_28225 = G__28230;
count__28217_28226 = G__28231;
i__28218_28227 = G__28232;
continue;
} else {
var temp__4657__auto___28233 = cljs.core.seq.call(null,seq__28215_28224);
if(temp__4657__auto___28233){
var seq__28215_28234__$1 = temp__4657__auto___28233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28215_28234__$1)){
var c__27615__auto___28235 = cljs.core.chunk_first.call(null,seq__28215_28234__$1);
var G__28236 = cljs.core.chunk_rest.call(null,seq__28215_28234__$1);
var G__28237 = c__27615__auto___28235;
var G__28238 = cljs.core.count.call(null,c__27615__auto___28235);
var G__28239 = (0);
seq__28215_28224 = G__28236;
chunk__28216_28225 = G__28237;
count__28217_28226 = G__28238;
i__28218_28227 = G__28239;
continue;
} else {
var k_28240__$1 = cljs.core.first.call(null,seq__28215_28234__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_28240__$1);

var G__28241 = cljs.core.next.call(null,seq__28215_28234__$1);
var G__28242 = null;
var G__28243 = (0);
var G__28244 = (0);
seq__28215_28224 = G__28241;
chunk__28216_28225 = G__28242;
count__28217_28226 = G__28243;
i__28218_28227 = G__28244;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq28210){
var G__28211 = cljs.core.first.call(null,seq28210);
var seq28210__$1 = cljs.core.next.call(null,seq28210);
var G__28212 = cljs.core.first.call(null,seq28210__$1);
var seq28210__$2 = cljs.core.next.call(null,seq28210__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28211,G__28212,seq28210__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args28245 = [];
var len__27879__auto___28248 = arguments.length;
var i__27880__auto___28249 = (0);
while(true){
if((i__27880__auto___28249 < len__27879__auto___28248)){
args28245.push((arguments[i__27880__auto___28249]));

var G__28250 = (i__27880__auto___28249 + (1));
i__27880__auto___28249 = G__28250;
continue;
} else {
}
break;
}

var G__28247 = args28245.length;
switch (G__28247) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28245.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args28252 = [];
var len__27879__auto___28270 = arguments.length;
var i__27880__auto___28271 = (0);
while(true){
if((i__27880__auto___28271 < len__27879__auto___28270)){
args28252.push((arguments[i__27880__auto___28271]));

var G__28272 = (i__27880__auto___28271 + (1));
i__27880__auto___28271 = G__28272;
continue;
} else {
}
break;
}

var G__28257 = args28252.length;
switch (G__28257) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27898__auto__ = (new cljs.core.IndexedSeq(args28252.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27898__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___28274 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___28274)){
var class_list_28275 = temp__4655__auto___28274;
var seq__28258_28276 = cljs.core.seq.call(null,classes__$1);
var chunk__28259_28277 = null;
var count__28260_28278 = (0);
var i__28261_28279 = (0);
while(true){
if((i__28261_28279 < count__28260_28278)){
var c_28280 = cljs.core._nth.call(null,chunk__28259_28277,i__28261_28279);
class_list_28275.add(c_28280);

var G__28281 = seq__28258_28276;
var G__28282 = chunk__28259_28277;
var G__28283 = count__28260_28278;
var G__28284 = (i__28261_28279 + (1));
seq__28258_28276 = G__28281;
chunk__28259_28277 = G__28282;
count__28260_28278 = G__28283;
i__28261_28279 = G__28284;
continue;
} else {
var temp__4657__auto___28285 = cljs.core.seq.call(null,seq__28258_28276);
if(temp__4657__auto___28285){
var seq__28258_28286__$1 = temp__4657__auto___28285;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28258_28286__$1)){
var c__27615__auto___28287 = cljs.core.chunk_first.call(null,seq__28258_28286__$1);
var G__28288 = cljs.core.chunk_rest.call(null,seq__28258_28286__$1);
var G__28289 = c__27615__auto___28287;
var G__28290 = cljs.core.count.call(null,c__27615__auto___28287);
var G__28291 = (0);
seq__28258_28276 = G__28288;
chunk__28259_28277 = G__28289;
count__28260_28278 = G__28290;
i__28261_28279 = G__28291;
continue;
} else {
var c_28292 = cljs.core.first.call(null,seq__28258_28286__$1);
class_list_28275.add(c_28292);

var G__28293 = cljs.core.next.call(null,seq__28258_28286__$1);
var G__28294 = null;
var G__28295 = (0);
var G__28296 = (0);
seq__28258_28276 = G__28293;
chunk__28259_28277 = G__28294;
count__28260_28278 = G__28295;
i__28261_28279 = G__28296;
continue;
}
} else {
}
}
break;
}
} else {
var seq__28262_28297 = cljs.core.seq.call(null,classes__$1);
var chunk__28263_28298 = null;
var count__28264_28299 = (0);
var i__28265_28300 = (0);
while(true){
if((i__28265_28300 < count__28264_28299)){
var c_28301 = cljs.core._nth.call(null,chunk__28263_28298,i__28265_28300);
var class_name_28302 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_28302,c_28301))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_28302 === ""))?c_28301:[cljs.core.str(class_name_28302),cljs.core.str(" "),cljs.core.str(c_28301)].join('')));
}

var G__28303 = seq__28262_28297;
var G__28304 = chunk__28263_28298;
var G__28305 = count__28264_28299;
var G__28306 = (i__28265_28300 + (1));
seq__28262_28297 = G__28303;
chunk__28263_28298 = G__28304;
count__28264_28299 = G__28305;
i__28265_28300 = G__28306;
continue;
} else {
var temp__4657__auto___28307 = cljs.core.seq.call(null,seq__28262_28297);
if(temp__4657__auto___28307){
var seq__28262_28308__$1 = temp__4657__auto___28307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28262_28308__$1)){
var c__27615__auto___28309 = cljs.core.chunk_first.call(null,seq__28262_28308__$1);
var G__28310 = cljs.core.chunk_rest.call(null,seq__28262_28308__$1);
var G__28311 = c__27615__auto___28309;
var G__28312 = cljs.core.count.call(null,c__27615__auto___28309);
var G__28313 = (0);
seq__28262_28297 = G__28310;
chunk__28263_28298 = G__28311;
count__28264_28299 = G__28312;
i__28265_28300 = G__28313;
continue;
} else {
var c_28314 = cljs.core.first.call(null,seq__28262_28308__$1);
var class_name_28315 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_28315,c_28314))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_28315 === ""))?c_28314:[cljs.core.str(class_name_28315),cljs.core.str(" "),cljs.core.str(c_28314)].join('')));
}

var G__28316 = cljs.core.next.call(null,seq__28262_28308__$1);
var G__28317 = null;
var G__28318 = (0);
var G__28319 = (0);
seq__28262_28297 = G__28316;
chunk__28263_28298 = G__28317;
count__28264_28299 = G__28318;
i__28265_28300 = G__28319;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__28266_28320 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__28267_28321 = null;
var count__28268_28322 = (0);
var i__28269_28323 = (0);
while(true){
if((i__28269_28323 < count__28268_28322)){
var c_28324 = cljs.core._nth.call(null,chunk__28267_28321,i__28269_28323);
dommy.core.add_class_BANG_.call(null,elem,c_28324);

var G__28325 = seq__28266_28320;
var G__28326 = chunk__28267_28321;
var G__28327 = count__28268_28322;
var G__28328 = (i__28269_28323 + (1));
seq__28266_28320 = G__28325;
chunk__28267_28321 = G__28326;
count__28268_28322 = G__28327;
i__28269_28323 = G__28328;
continue;
} else {
var temp__4657__auto___28329 = cljs.core.seq.call(null,seq__28266_28320);
if(temp__4657__auto___28329){
var seq__28266_28330__$1 = temp__4657__auto___28329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28266_28330__$1)){
var c__27615__auto___28331 = cljs.core.chunk_first.call(null,seq__28266_28330__$1);
var G__28332 = cljs.core.chunk_rest.call(null,seq__28266_28330__$1);
var G__28333 = c__27615__auto___28331;
var G__28334 = cljs.core.count.call(null,c__27615__auto___28331);
var G__28335 = (0);
seq__28266_28320 = G__28332;
chunk__28267_28321 = G__28333;
count__28268_28322 = G__28334;
i__28269_28323 = G__28335;
continue;
} else {
var c_28336 = cljs.core.first.call(null,seq__28266_28330__$1);
dommy.core.add_class_BANG_.call(null,elem,c_28336);

var G__28337 = cljs.core.next.call(null,seq__28266_28330__$1);
var G__28338 = null;
var G__28339 = (0);
var G__28340 = (0);
seq__28266_28320 = G__28337;
chunk__28267_28321 = G__28338;
count__28268_28322 = G__28339;
i__28269_28323 = G__28340;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq28253){
var G__28254 = cljs.core.first.call(null,seq28253);
var seq28253__$1 = cljs.core.next.call(null,seq28253);
var G__28255 = cljs.core.first.call(null,seq28253__$1);
var seq28253__$2 = cljs.core.next.call(null,seq28253__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28254,G__28255,seq28253__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args28341 = [];
var len__27879__auto___28351 = arguments.length;
var i__27880__auto___28352 = (0);
while(true){
if((i__27880__auto___28352 < len__27879__auto___28351)){
args28341.push((arguments[i__27880__auto___28352]));

var G__28353 = (i__27880__auto___28352 + (1));
i__27880__auto___28352 = G__28353;
continue;
} else {
}
break;
}

var G__28346 = args28341.length;
switch (G__28346) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27898__auto__ = (new cljs.core.IndexedSeq(args28341.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27898__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___28355 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___28355)){
var class_list_28356 = temp__4655__auto___28355;
class_list_28356.remove(c__$1);
} else {
var class_name_28357 = dommy.core.class$.call(null,elem);
var new_class_name_28358 = dommy.utils.remove_class_str.call(null,class_name_28357,c__$1);
if((class_name_28357 === new_class_name_28358)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_28358);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__28347 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__28348 = null;
var count__28349 = (0);
var i__28350 = (0);
while(true){
if((i__28350 < count__28349)){
var c = cljs.core._nth.call(null,chunk__28348,i__28350);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__28359 = seq__28347;
var G__28360 = chunk__28348;
var G__28361 = count__28349;
var G__28362 = (i__28350 + (1));
seq__28347 = G__28359;
chunk__28348 = G__28360;
count__28349 = G__28361;
i__28350 = G__28362;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28347);
if(temp__4657__auto__){
var seq__28347__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28347__$1)){
var c__27615__auto__ = cljs.core.chunk_first.call(null,seq__28347__$1);
var G__28363 = cljs.core.chunk_rest.call(null,seq__28347__$1);
var G__28364 = c__27615__auto__;
var G__28365 = cljs.core.count.call(null,c__27615__auto__);
var G__28366 = (0);
seq__28347 = G__28363;
chunk__28348 = G__28364;
count__28349 = G__28365;
i__28350 = G__28366;
continue;
} else {
var c = cljs.core.first.call(null,seq__28347__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__28367 = cljs.core.next.call(null,seq__28347__$1);
var G__28368 = null;
var G__28369 = (0);
var G__28370 = (0);
seq__28347 = G__28367;
chunk__28348 = G__28368;
count__28349 = G__28369;
i__28350 = G__28370;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq28342){
var G__28343 = cljs.core.first.call(null,seq28342);
var seq28342__$1 = cljs.core.next.call(null,seq28342);
var G__28344 = cljs.core.first.call(null,seq28342__$1);
var seq28342__$2 = cljs.core.next.call(null,seq28342__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28343,G__28344,seq28342__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args28371 = [];
var len__27879__auto___28374 = arguments.length;
var i__27880__auto___28375 = (0);
while(true){
if((i__27880__auto___28375 < len__27879__auto___28374)){
args28371.push((arguments[i__27880__auto___28375]));

var G__28376 = (i__27880__auto___28375 + (1));
i__27880__auto___28375 = G__28376;
continue;
} else {
}
break;
}

var G__28373 = args28371.length;
switch (G__28373) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28371.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___28378 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___28378)){
var class_list_28379 = temp__4655__auto___28378;
class_list_28379.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args28380 = [];
var len__27879__auto___28383 = arguments.length;
var i__27880__auto___28384 = (0);
while(true){
if((i__27880__auto___28384 < len__27879__auto___28383)){
args28380.push((arguments[i__27880__auto___28384]));

var G__28385 = (i__27880__auto___28384 + (1));
i__27880__auto___28384 = G__28385;
continue;
} else {
}
break;
}

var G__28382 = args28380.length;
switch (G__28382) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28380.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args28387 = [];
var len__27879__auto___28390 = arguments.length;
var i__27880__auto___28391 = (0);
while(true){
if((i__27880__auto___28391 < len__27879__auto___28390)){
args28387.push((arguments[i__27880__auto___28391]));

var G__28392 = (i__27880__auto___28391 + (1));
i__27880__auto___28391 = G__28392;
continue;
} else {
}
break;
}

var G__28389 = args28387.length;
switch (G__28389) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28387.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args28394 = [];
var len__27879__auto___28405 = arguments.length;
var i__27880__auto___28406 = (0);
while(true){
if((i__27880__auto___28406 < len__27879__auto___28405)){
args28394.push((arguments[i__27880__auto___28406]));

var G__28407 = (i__27880__auto___28406 + (1));
i__27880__auto___28406 = G__28407;
continue;
} else {
}
break;
}

var G__28399 = args28394.length;
switch (G__28399) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27898__auto__ = (new cljs.core.IndexedSeq(args28394.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27898__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__28400 = parent;
G__28400.appendChild(child);

return G__28400;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__28401_28409 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__28402_28410 = null;
var count__28403_28411 = (0);
var i__28404_28412 = (0);
while(true){
if((i__28404_28412 < count__28403_28411)){
var c_28413 = cljs.core._nth.call(null,chunk__28402_28410,i__28404_28412);
dommy.core.append_BANG_.call(null,parent,c_28413);

var G__28414 = seq__28401_28409;
var G__28415 = chunk__28402_28410;
var G__28416 = count__28403_28411;
var G__28417 = (i__28404_28412 + (1));
seq__28401_28409 = G__28414;
chunk__28402_28410 = G__28415;
count__28403_28411 = G__28416;
i__28404_28412 = G__28417;
continue;
} else {
var temp__4657__auto___28418 = cljs.core.seq.call(null,seq__28401_28409);
if(temp__4657__auto___28418){
var seq__28401_28419__$1 = temp__4657__auto___28418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28401_28419__$1)){
var c__27615__auto___28420 = cljs.core.chunk_first.call(null,seq__28401_28419__$1);
var G__28421 = cljs.core.chunk_rest.call(null,seq__28401_28419__$1);
var G__28422 = c__27615__auto___28420;
var G__28423 = cljs.core.count.call(null,c__27615__auto___28420);
var G__28424 = (0);
seq__28401_28409 = G__28421;
chunk__28402_28410 = G__28422;
count__28403_28411 = G__28423;
i__28404_28412 = G__28424;
continue;
} else {
var c_28425 = cljs.core.first.call(null,seq__28401_28419__$1);
dommy.core.append_BANG_.call(null,parent,c_28425);

var G__28426 = cljs.core.next.call(null,seq__28401_28419__$1);
var G__28427 = null;
var G__28428 = (0);
var G__28429 = (0);
seq__28401_28409 = G__28426;
chunk__28402_28410 = G__28427;
count__28403_28411 = G__28428;
i__28404_28412 = G__28429;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq28395){
var G__28396 = cljs.core.first.call(null,seq28395);
var seq28395__$1 = cljs.core.next.call(null,seq28395);
var G__28397 = cljs.core.first.call(null,seq28395__$1);
var seq28395__$2 = cljs.core.next.call(null,seq28395__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28396,G__28397,seq28395__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args28430 = [];
var len__27879__auto___28441 = arguments.length;
var i__27880__auto___28442 = (0);
while(true){
if((i__27880__auto___28442 < len__27879__auto___28441)){
args28430.push((arguments[i__27880__auto___28442]));

var G__28443 = (i__27880__auto___28442 + (1));
i__27880__auto___28442 = G__28443;
continue;
} else {
}
break;
}

var G__28435 = args28430.length;
switch (G__28435) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__27898__auto__ = (new cljs.core.IndexedSeq(args28430.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27898__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__28436 = parent;
G__28436.insertBefore(child,parent.firstChild);

return G__28436;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__28437_28445 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__28438_28446 = null;
var count__28439_28447 = (0);
var i__28440_28448 = (0);
while(true){
if((i__28440_28448 < count__28439_28447)){
var c_28449 = cljs.core._nth.call(null,chunk__28438_28446,i__28440_28448);
dommy.core.prepend_BANG_.call(null,parent,c_28449);

var G__28450 = seq__28437_28445;
var G__28451 = chunk__28438_28446;
var G__28452 = count__28439_28447;
var G__28453 = (i__28440_28448 + (1));
seq__28437_28445 = G__28450;
chunk__28438_28446 = G__28451;
count__28439_28447 = G__28452;
i__28440_28448 = G__28453;
continue;
} else {
var temp__4657__auto___28454 = cljs.core.seq.call(null,seq__28437_28445);
if(temp__4657__auto___28454){
var seq__28437_28455__$1 = temp__4657__auto___28454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28437_28455__$1)){
var c__27615__auto___28456 = cljs.core.chunk_first.call(null,seq__28437_28455__$1);
var G__28457 = cljs.core.chunk_rest.call(null,seq__28437_28455__$1);
var G__28458 = c__27615__auto___28456;
var G__28459 = cljs.core.count.call(null,c__27615__auto___28456);
var G__28460 = (0);
seq__28437_28445 = G__28457;
chunk__28438_28446 = G__28458;
count__28439_28447 = G__28459;
i__28440_28448 = G__28460;
continue;
} else {
var c_28461 = cljs.core.first.call(null,seq__28437_28455__$1);
dommy.core.prepend_BANG_.call(null,parent,c_28461);

var G__28462 = cljs.core.next.call(null,seq__28437_28455__$1);
var G__28463 = null;
var G__28464 = (0);
var G__28465 = (0);
seq__28437_28445 = G__28462;
chunk__28438_28446 = G__28463;
count__28439_28447 = G__28464;
i__28440_28448 = G__28465;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq28431){
var G__28432 = cljs.core.first.call(null,seq28431);
var seq28431__$1 = cljs.core.next.call(null,seq28431);
var G__28433 = cljs.core.first.call(null,seq28431__$1);
var seq28431__$2 = cljs.core.next.call(null,seq28431__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28432,G__28433,seq28431__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___28466 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___28466)){
var next_28467 = temp__4655__auto___28466;
dommy.core.insert_before_BANG_.call(null,elem,next_28467);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args28468 = [];
var len__27879__auto___28472 = arguments.length;
var i__27880__auto___28473 = (0);
while(true){
if((i__27880__auto___28473 < len__27879__auto___28472)){
args28468.push((arguments[i__27880__auto___28473]));

var G__28474 = (i__27880__auto___28473 + (1));
i__27880__auto___28473 = G__28474;
continue;
} else {
}
break;
}

var G__28470 = args28468.length;
switch (G__28470) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28468.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__28471 = p;
G__28471.removeChild(elem);

return G__28471;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__28476){
var vec__28477 = p__28476;
var special_mouse_event = cljs.core.nth.call(null,vec__28477,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__28477,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__28477,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__28477,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__26804__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__26804__auto__)){
return or__26804__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__26792__auto__ = related_target;
if(cljs.core.truth_(and__26792__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__26792__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__28477,special_mouse_event,real_mouse_event))
});})(vec__28477,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__26792__auto__ = selected_target;
if(cljs.core.truth_(and__26792__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__26792__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__26804__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__26804__auto__)){
return or__26804__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__27886__auto__ = [];
var len__27879__auto___28483 = arguments.length;
var i__27880__auto___28484 = (0);
while(true){
if((i__27880__auto___28484 < len__27879__auto___28483)){
args__27886__auto__.push((arguments[i__27880__auto___28484]));

var G__28485 = (i__27880__auto___28484 + (1));
i__27880__auto___28484 = G__28485;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((2) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27887__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq28480){
var G__28481 = cljs.core.first.call(null,seq28480);
var seq28480__$1 = cljs.core.next.call(null,seq28480);
var G__28482 = cljs.core.first.call(null,seq28480__$1);
var seq28480__$2 = cljs.core.next.call(null,seq28480__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28481,G__28482,seq28480__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__27886__auto__ = [];
var len__27879__auto___28525 = arguments.length;
var i__27880__auto___28526 = (0);
while(true){
if((i__27880__auto___28526 < len__27879__auto___28525)){
args__27886__auto__.push((arguments[i__27880__auto___28526]));

var G__28527 = (i__27880__auto___28526 + (1));
i__27880__auto___28526 = G__28527;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((1) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27887__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__28488_28528 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_28529 = cljs.core.nth.call(null,vec__28488_28528,(0),null);
var selector_28530 = cljs.core.nth.call(null,vec__28488_28528,(1),null);
var seq__28491_28531 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__28498_28532 = null;
var count__28499_28533 = (0);
var i__28500_28534 = (0);
while(true){
if((i__28500_28534 < count__28499_28533)){
var vec__28507_28535 = cljs.core._nth.call(null,chunk__28498_28532,i__28500_28534);
var orig_type_28536 = cljs.core.nth.call(null,vec__28507_28535,(0),null);
var f_28537 = cljs.core.nth.call(null,vec__28507_28535,(1),null);
var seq__28501_28538 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28536,cljs.core.PersistentArrayMap.fromArray([orig_type_28536,cljs.core.identity], true, false)));
var chunk__28503_28539 = null;
var count__28504_28540 = (0);
var i__28505_28541 = (0);
while(true){
if((i__28505_28541 < count__28504_28540)){
var vec__28510_28542 = cljs.core._nth.call(null,chunk__28503_28539,i__28505_28541);
var actual_type_28543 = cljs.core.nth.call(null,vec__28510_28542,(0),null);
var factory_28544 = cljs.core.nth.call(null,vec__28510_28542,(1),null);
var canonical_f_28545 = (cljs.core.truth_(selector_28530)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28529,selector_28530):cljs.core.identity).call(null,factory_28544.call(null,f_28537));
dommy.core.update_event_listeners_BANG_.call(null,elem_28529,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28530,actual_type_28543,f_28537], null),canonical_f_28545);

if(cljs.core.truth_(elem_28529.addEventListener)){
elem_28529.addEventListener(cljs.core.name.call(null,actual_type_28543),canonical_f_28545);
} else {
elem_28529.attachEvent(cljs.core.name.call(null,actual_type_28543),canonical_f_28545);
}

var G__28546 = seq__28501_28538;
var G__28547 = chunk__28503_28539;
var G__28548 = count__28504_28540;
var G__28549 = (i__28505_28541 + (1));
seq__28501_28538 = G__28546;
chunk__28503_28539 = G__28547;
count__28504_28540 = G__28548;
i__28505_28541 = G__28549;
continue;
} else {
var temp__4657__auto___28550 = cljs.core.seq.call(null,seq__28501_28538);
if(temp__4657__auto___28550){
var seq__28501_28551__$1 = temp__4657__auto___28550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28501_28551__$1)){
var c__27615__auto___28552 = cljs.core.chunk_first.call(null,seq__28501_28551__$1);
var G__28553 = cljs.core.chunk_rest.call(null,seq__28501_28551__$1);
var G__28554 = c__27615__auto___28552;
var G__28555 = cljs.core.count.call(null,c__27615__auto___28552);
var G__28556 = (0);
seq__28501_28538 = G__28553;
chunk__28503_28539 = G__28554;
count__28504_28540 = G__28555;
i__28505_28541 = G__28556;
continue;
} else {
var vec__28513_28557 = cljs.core.first.call(null,seq__28501_28551__$1);
var actual_type_28558 = cljs.core.nth.call(null,vec__28513_28557,(0),null);
var factory_28559 = cljs.core.nth.call(null,vec__28513_28557,(1),null);
var canonical_f_28560 = (cljs.core.truth_(selector_28530)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28529,selector_28530):cljs.core.identity).call(null,factory_28559.call(null,f_28537));
dommy.core.update_event_listeners_BANG_.call(null,elem_28529,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28530,actual_type_28558,f_28537], null),canonical_f_28560);

if(cljs.core.truth_(elem_28529.addEventListener)){
elem_28529.addEventListener(cljs.core.name.call(null,actual_type_28558),canonical_f_28560);
} else {
elem_28529.attachEvent(cljs.core.name.call(null,actual_type_28558),canonical_f_28560);
}

var G__28561 = cljs.core.next.call(null,seq__28501_28551__$1);
var G__28562 = null;
var G__28563 = (0);
var G__28564 = (0);
seq__28501_28538 = G__28561;
chunk__28503_28539 = G__28562;
count__28504_28540 = G__28563;
i__28505_28541 = G__28564;
continue;
}
} else {
}
}
break;
}

var G__28565 = seq__28491_28531;
var G__28566 = chunk__28498_28532;
var G__28567 = count__28499_28533;
var G__28568 = (i__28500_28534 + (1));
seq__28491_28531 = G__28565;
chunk__28498_28532 = G__28566;
count__28499_28533 = G__28567;
i__28500_28534 = G__28568;
continue;
} else {
var temp__4657__auto___28569 = cljs.core.seq.call(null,seq__28491_28531);
if(temp__4657__auto___28569){
var seq__28491_28570__$1 = temp__4657__auto___28569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28491_28570__$1)){
var c__27615__auto___28571 = cljs.core.chunk_first.call(null,seq__28491_28570__$1);
var G__28572 = cljs.core.chunk_rest.call(null,seq__28491_28570__$1);
var G__28573 = c__27615__auto___28571;
var G__28574 = cljs.core.count.call(null,c__27615__auto___28571);
var G__28575 = (0);
seq__28491_28531 = G__28572;
chunk__28498_28532 = G__28573;
count__28499_28533 = G__28574;
i__28500_28534 = G__28575;
continue;
} else {
var vec__28516_28576 = cljs.core.first.call(null,seq__28491_28570__$1);
var orig_type_28577 = cljs.core.nth.call(null,vec__28516_28576,(0),null);
var f_28578 = cljs.core.nth.call(null,vec__28516_28576,(1),null);
var seq__28492_28579 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28577,cljs.core.PersistentArrayMap.fromArray([orig_type_28577,cljs.core.identity], true, false)));
var chunk__28494_28580 = null;
var count__28495_28581 = (0);
var i__28496_28582 = (0);
while(true){
if((i__28496_28582 < count__28495_28581)){
var vec__28519_28583 = cljs.core._nth.call(null,chunk__28494_28580,i__28496_28582);
var actual_type_28584 = cljs.core.nth.call(null,vec__28519_28583,(0),null);
var factory_28585 = cljs.core.nth.call(null,vec__28519_28583,(1),null);
var canonical_f_28586 = (cljs.core.truth_(selector_28530)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28529,selector_28530):cljs.core.identity).call(null,factory_28585.call(null,f_28578));
dommy.core.update_event_listeners_BANG_.call(null,elem_28529,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28530,actual_type_28584,f_28578], null),canonical_f_28586);

if(cljs.core.truth_(elem_28529.addEventListener)){
elem_28529.addEventListener(cljs.core.name.call(null,actual_type_28584),canonical_f_28586);
} else {
elem_28529.attachEvent(cljs.core.name.call(null,actual_type_28584),canonical_f_28586);
}

var G__28587 = seq__28492_28579;
var G__28588 = chunk__28494_28580;
var G__28589 = count__28495_28581;
var G__28590 = (i__28496_28582 + (1));
seq__28492_28579 = G__28587;
chunk__28494_28580 = G__28588;
count__28495_28581 = G__28589;
i__28496_28582 = G__28590;
continue;
} else {
var temp__4657__auto___28591__$1 = cljs.core.seq.call(null,seq__28492_28579);
if(temp__4657__auto___28591__$1){
var seq__28492_28592__$1 = temp__4657__auto___28591__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28492_28592__$1)){
var c__27615__auto___28593 = cljs.core.chunk_first.call(null,seq__28492_28592__$1);
var G__28594 = cljs.core.chunk_rest.call(null,seq__28492_28592__$1);
var G__28595 = c__27615__auto___28593;
var G__28596 = cljs.core.count.call(null,c__27615__auto___28593);
var G__28597 = (0);
seq__28492_28579 = G__28594;
chunk__28494_28580 = G__28595;
count__28495_28581 = G__28596;
i__28496_28582 = G__28597;
continue;
} else {
var vec__28522_28598 = cljs.core.first.call(null,seq__28492_28592__$1);
var actual_type_28599 = cljs.core.nth.call(null,vec__28522_28598,(0),null);
var factory_28600 = cljs.core.nth.call(null,vec__28522_28598,(1),null);
var canonical_f_28601 = (cljs.core.truth_(selector_28530)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28529,selector_28530):cljs.core.identity).call(null,factory_28600.call(null,f_28578));
dommy.core.update_event_listeners_BANG_.call(null,elem_28529,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28530,actual_type_28599,f_28578], null),canonical_f_28601);

if(cljs.core.truth_(elem_28529.addEventListener)){
elem_28529.addEventListener(cljs.core.name.call(null,actual_type_28599),canonical_f_28601);
} else {
elem_28529.attachEvent(cljs.core.name.call(null,actual_type_28599),canonical_f_28601);
}

var G__28602 = cljs.core.next.call(null,seq__28492_28592__$1);
var G__28603 = null;
var G__28604 = (0);
var G__28605 = (0);
seq__28492_28579 = G__28602;
chunk__28494_28580 = G__28603;
count__28495_28581 = G__28604;
i__28496_28582 = G__28605;
continue;
}
} else {
}
}
break;
}

var G__28606 = cljs.core.next.call(null,seq__28491_28570__$1);
var G__28607 = null;
var G__28608 = (0);
var G__28609 = (0);
seq__28491_28531 = G__28606;
chunk__28498_28532 = G__28607;
count__28499_28533 = G__28608;
i__28500_28534 = G__28609;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq28486){
var G__28487 = cljs.core.first.call(null,seq28486);
var seq28486__$1 = cljs.core.next.call(null,seq28486);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28487,seq28486__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__27886__auto__ = [];
var len__27879__auto___28649 = arguments.length;
var i__27880__auto___28650 = (0);
while(true){
if((i__27880__auto___28650 < len__27879__auto___28649)){
args__27886__auto__.push((arguments[i__27880__auto___28650]));

var G__28651 = (i__27880__auto___28650 + (1));
i__27880__auto___28650 = G__28651;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((1) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27887__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__28612_28652 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_28653 = cljs.core.nth.call(null,vec__28612_28652,(0),null);
var selector_28654 = cljs.core.nth.call(null,vec__28612_28652,(1),null);
var seq__28615_28655 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__28622_28656 = null;
var count__28623_28657 = (0);
var i__28624_28658 = (0);
while(true){
if((i__28624_28658 < count__28623_28657)){
var vec__28631_28659 = cljs.core._nth.call(null,chunk__28622_28656,i__28624_28658);
var orig_type_28660 = cljs.core.nth.call(null,vec__28631_28659,(0),null);
var f_28661 = cljs.core.nth.call(null,vec__28631_28659,(1),null);
var seq__28625_28662 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28660,cljs.core.PersistentArrayMap.fromArray([orig_type_28660,cljs.core.identity], true, false)));
var chunk__28627_28663 = null;
var count__28628_28664 = (0);
var i__28629_28665 = (0);
while(true){
if((i__28629_28665 < count__28628_28664)){
var vec__28634_28666 = cljs.core._nth.call(null,chunk__28627_28663,i__28629_28665);
var actual_type_28667 = cljs.core.nth.call(null,vec__28634_28666,(0),null);
var __28668 = cljs.core.nth.call(null,vec__28634_28666,(1),null);
var keys_28669 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28654,actual_type_28667,f_28661], null);
var canonical_f_28670 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28653),keys_28669);
dommy.core.update_event_listeners_BANG_.call(null,elem_28653,dommy.utils.dissoc_in,keys_28669);

if(cljs.core.truth_(elem_28653.removeEventListener)){
elem_28653.removeEventListener(cljs.core.name.call(null,actual_type_28667),canonical_f_28670);
} else {
elem_28653.detachEvent(cljs.core.name.call(null,actual_type_28667),canonical_f_28670);
}

var G__28671 = seq__28625_28662;
var G__28672 = chunk__28627_28663;
var G__28673 = count__28628_28664;
var G__28674 = (i__28629_28665 + (1));
seq__28625_28662 = G__28671;
chunk__28627_28663 = G__28672;
count__28628_28664 = G__28673;
i__28629_28665 = G__28674;
continue;
} else {
var temp__4657__auto___28675 = cljs.core.seq.call(null,seq__28625_28662);
if(temp__4657__auto___28675){
var seq__28625_28676__$1 = temp__4657__auto___28675;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28625_28676__$1)){
var c__27615__auto___28677 = cljs.core.chunk_first.call(null,seq__28625_28676__$1);
var G__28678 = cljs.core.chunk_rest.call(null,seq__28625_28676__$1);
var G__28679 = c__27615__auto___28677;
var G__28680 = cljs.core.count.call(null,c__27615__auto___28677);
var G__28681 = (0);
seq__28625_28662 = G__28678;
chunk__28627_28663 = G__28679;
count__28628_28664 = G__28680;
i__28629_28665 = G__28681;
continue;
} else {
var vec__28637_28682 = cljs.core.first.call(null,seq__28625_28676__$1);
var actual_type_28683 = cljs.core.nth.call(null,vec__28637_28682,(0),null);
var __28684 = cljs.core.nth.call(null,vec__28637_28682,(1),null);
var keys_28685 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28654,actual_type_28683,f_28661], null);
var canonical_f_28686 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28653),keys_28685);
dommy.core.update_event_listeners_BANG_.call(null,elem_28653,dommy.utils.dissoc_in,keys_28685);

if(cljs.core.truth_(elem_28653.removeEventListener)){
elem_28653.removeEventListener(cljs.core.name.call(null,actual_type_28683),canonical_f_28686);
} else {
elem_28653.detachEvent(cljs.core.name.call(null,actual_type_28683),canonical_f_28686);
}

var G__28687 = cljs.core.next.call(null,seq__28625_28676__$1);
var G__28688 = null;
var G__28689 = (0);
var G__28690 = (0);
seq__28625_28662 = G__28687;
chunk__28627_28663 = G__28688;
count__28628_28664 = G__28689;
i__28629_28665 = G__28690;
continue;
}
} else {
}
}
break;
}

var G__28691 = seq__28615_28655;
var G__28692 = chunk__28622_28656;
var G__28693 = count__28623_28657;
var G__28694 = (i__28624_28658 + (1));
seq__28615_28655 = G__28691;
chunk__28622_28656 = G__28692;
count__28623_28657 = G__28693;
i__28624_28658 = G__28694;
continue;
} else {
var temp__4657__auto___28695 = cljs.core.seq.call(null,seq__28615_28655);
if(temp__4657__auto___28695){
var seq__28615_28696__$1 = temp__4657__auto___28695;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28615_28696__$1)){
var c__27615__auto___28697 = cljs.core.chunk_first.call(null,seq__28615_28696__$1);
var G__28698 = cljs.core.chunk_rest.call(null,seq__28615_28696__$1);
var G__28699 = c__27615__auto___28697;
var G__28700 = cljs.core.count.call(null,c__27615__auto___28697);
var G__28701 = (0);
seq__28615_28655 = G__28698;
chunk__28622_28656 = G__28699;
count__28623_28657 = G__28700;
i__28624_28658 = G__28701;
continue;
} else {
var vec__28640_28702 = cljs.core.first.call(null,seq__28615_28696__$1);
var orig_type_28703 = cljs.core.nth.call(null,vec__28640_28702,(0),null);
var f_28704 = cljs.core.nth.call(null,vec__28640_28702,(1),null);
var seq__28616_28705 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28703,cljs.core.PersistentArrayMap.fromArray([orig_type_28703,cljs.core.identity], true, false)));
var chunk__28618_28706 = null;
var count__28619_28707 = (0);
var i__28620_28708 = (0);
while(true){
if((i__28620_28708 < count__28619_28707)){
var vec__28643_28709 = cljs.core._nth.call(null,chunk__28618_28706,i__28620_28708);
var actual_type_28710 = cljs.core.nth.call(null,vec__28643_28709,(0),null);
var __28711 = cljs.core.nth.call(null,vec__28643_28709,(1),null);
var keys_28712 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28654,actual_type_28710,f_28704], null);
var canonical_f_28713 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28653),keys_28712);
dommy.core.update_event_listeners_BANG_.call(null,elem_28653,dommy.utils.dissoc_in,keys_28712);

if(cljs.core.truth_(elem_28653.removeEventListener)){
elem_28653.removeEventListener(cljs.core.name.call(null,actual_type_28710),canonical_f_28713);
} else {
elem_28653.detachEvent(cljs.core.name.call(null,actual_type_28710),canonical_f_28713);
}

var G__28714 = seq__28616_28705;
var G__28715 = chunk__28618_28706;
var G__28716 = count__28619_28707;
var G__28717 = (i__28620_28708 + (1));
seq__28616_28705 = G__28714;
chunk__28618_28706 = G__28715;
count__28619_28707 = G__28716;
i__28620_28708 = G__28717;
continue;
} else {
var temp__4657__auto___28718__$1 = cljs.core.seq.call(null,seq__28616_28705);
if(temp__4657__auto___28718__$1){
var seq__28616_28719__$1 = temp__4657__auto___28718__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28616_28719__$1)){
var c__27615__auto___28720 = cljs.core.chunk_first.call(null,seq__28616_28719__$1);
var G__28721 = cljs.core.chunk_rest.call(null,seq__28616_28719__$1);
var G__28722 = c__27615__auto___28720;
var G__28723 = cljs.core.count.call(null,c__27615__auto___28720);
var G__28724 = (0);
seq__28616_28705 = G__28721;
chunk__28618_28706 = G__28722;
count__28619_28707 = G__28723;
i__28620_28708 = G__28724;
continue;
} else {
var vec__28646_28725 = cljs.core.first.call(null,seq__28616_28719__$1);
var actual_type_28726 = cljs.core.nth.call(null,vec__28646_28725,(0),null);
var __28727 = cljs.core.nth.call(null,vec__28646_28725,(1),null);
var keys_28728 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28654,actual_type_28726,f_28704], null);
var canonical_f_28729 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28653),keys_28728);
dommy.core.update_event_listeners_BANG_.call(null,elem_28653,dommy.utils.dissoc_in,keys_28728);

if(cljs.core.truth_(elem_28653.removeEventListener)){
elem_28653.removeEventListener(cljs.core.name.call(null,actual_type_28726),canonical_f_28729);
} else {
elem_28653.detachEvent(cljs.core.name.call(null,actual_type_28726),canonical_f_28729);
}

var G__28730 = cljs.core.next.call(null,seq__28616_28719__$1);
var G__28731 = null;
var G__28732 = (0);
var G__28733 = (0);
seq__28616_28705 = G__28730;
chunk__28618_28706 = G__28731;
count__28619_28707 = G__28732;
i__28620_28708 = G__28733;
continue;
}
} else {
}
}
break;
}

var G__28734 = cljs.core.next.call(null,seq__28615_28696__$1);
var G__28735 = null;
var G__28736 = (0);
var G__28737 = (0);
seq__28615_28655 = G__28734;
chunk__28622_28656 = G__28735;
count__28623_28657 = G__28736;
i__28624_28658 = G__28737;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq28610){
var G__28611 = cljs.core.first.call(null,seq28610);
var seq28610__$1 = cljs.core.next.call(null,seq28610);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28611,seq28610__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__27886__auto__ = [];
var len__27879__auto___28753 = arguments.length;
var i__27880__auto___28754 = (0);
while(true){
if((i__27880__auto___28754 < len__27879__auto___28753)){
args__27886__auto__.push((arguments[i__27880__auto___28754]));

var G__28755 = (i__27880__auto___28754 + (1));
i__27880__auto___28754 = G__28755;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((1) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27887__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__28740_28756 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_28757 = cljs.core.nth.call(null,vec__28740_28756,(0),null);
var selector_28758 = cljs.core.nth.call(null,vec__28740_28756,(1),null);
var seq__28743_28759 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__28744_28760 = null;
var count__28745_28761 = (0);
var i__28746_28762 = (0);
while(true){
if((i__28746_28762 < count__28745_28761)){
var vec__28747_28763 = cljs.core._nth.call(null,chunk__28744_28760,i__28746_28762);
var type_28764 = cljs.core.nth.call(null,vec__28747_28763,(0),null);
var f_28765 = cljs.core.nth.call(null,vec__28747_28763,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_28764,((function (seq__28743_28759,chunk__28744_28760,count__28745_28761,i__28746_28762,vec__28747_28763,type_28764,f_28765,vec__28740_28756,elem_28757,selector_28758){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_28764,dommy$core$this_fn);

return f_28765.call(null,e);
});})(seq__28743_28759,chunk__28744_28760,count__28745_28761,i__28746_28762,vec__28747_28763,type_28764,f_28765,vec__28740_28756,elem_28757,selector_28758))
);

var G__28766 = seq__28743_28759;
var G__28767 = chunk__28744_28760;
var G__28768 = count__28745_28761;
var G__28769 = (i__28746_28762 + (1));
seq__28743_28759 = G__28766;
chunk__28744_28760 = G__28767;
count__28745_28761 = G__28768;
i__28746_28762 = G__28769;
continue;
} else {
var temp__4657__auto___28770 = cljs.core.seq.call(null,seq__28743_28759);
if(temp__4657__auto___28770){
var seq__28743_28771__$1 = temp__4657__auto___28770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28743_28771__$1)){
var c__27615__auto___28772 = cljs.core.chunk_first.call(null,seq__28743_28771__$1);
var G__28773 = cljs.core.chunk_rest.call(null,seq__28743_28771__$1);
var G__28774 = c__27615__auto___28772;
var G__28775 = cljs.core.count.call(null,c__27615__auto___28772);
var G__28776 = (0);
seq__28743_28759 = G__28773;
chunk__28744_28760 = G__28774;
count__28745_28761 = G__28775;
i__28746_28762 = G__28776;
continue;
} else {
var vec__28750_28777 = cljs.core.first.call(null,seq__28743_28771__$1);
var type_28778 = cljs.core.nth.call(null,vec__28750_28777,(0),null);
var f_28779 = cljs.core.nth.call(null,vec__28750_28777,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_28778,((function (seq__28743_28759,chunk__28744_28760,count__28745_28761,i__28746_28762,vec__28750_28777,type_28778,f_28779,seq__28743_28771__$1,temp__4657__auto___28770,vec__28740_28756,elem_28757,selector_28758){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_28778,dommy$core$this_fn);

return f_28779.call(null,e);
});})(seq__28743_28759,chunk__28744_28760,count__28745_28761,i__28746_28762,vec__28750_28777,type_28778,f_28779,seq__28743_28771__$1,temp__4657__auto___28770,vec__28740_28756,elem_28757,selector_28758))
);

var G__28780 = cljs.core.next.call(null,seq__28743_28771__$1);
var G__28781 = null;
var G__28782 = (0);
var G__28783 = (0);
seq__28743_28759 = G__28780;
chunk__28744_28760 = G__28781;
count__28745_28761 = G__28782;
i__28746_28762 = G__28783;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq28738){
var G__28739 = cljs.core.first.call(null,seq28738);
var seq28738__$1 = cljs.core.next.call(null,seq28738);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28739,seq28738__$1);
});


//# sourceMappingURL=core.js.map?rel=1511838040160