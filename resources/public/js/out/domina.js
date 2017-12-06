// Compiled by ClojureScript 1.9.229 {}
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.style');
goog.require('clojure.string');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_27952 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_27953 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_27954 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_27954,opt_wrapper_27952,table_section_wrapper_27953,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_27952,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_27953,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_27953,cell_wrapper_27954,table_section_wrapper_27953,table_section_wrapper_27953]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__26792__auto__ = div.firstChild;
if(cljs.core.truth_(and__26792__auto__)){
return div.firstChild.childNodes;
} else {
return and__26792__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__27959 = cljs.core.seq.call(null,tbody);
var chunk__27960 = null;
var count__27961 = (0);
var i__27962 = (0);
while(true){
if((i__27962 < count__27961)){
var child = cljs.core._nth.call(null,chunk__27960,i__27962);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__27963 = seq__27959;
var G__27964 = chunk__27960;
var G__27965 = count__27961;
var G__27966 = (i__27962 + (1));
seq__27959 = G__27963;
chunk__27960 = G__27964;
count__27961 = G__27965;
i__27962 = G__27966;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27959);
if(temp__4657__auto__){
var seq__27959__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27959__$1)){
var c__27615__auto__ = cljs.core.chunk_first.call(null,seq__27959__$1);
var G__27967 = cljs.core.chunk_rest.call(null,seq__27959__$1);
var G__27968 = c__27615__auto__;
var G__27969 = cljs.core.count.call(null,c__27615__auto__);
var G__27970 = (0);
seq__27959 = G__27967;
chunk__27960 = G__27968;
count__27961 = G__27969;
i__27962 = G__27970;
continue;
} else {
var child = cljs.core.first.call(null,seq__27959__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__27971 = cljs.core.next.call(null,seq__27959__$1);
var G__27972 = null;
var G__27973 = (0);
var G__27974 = (0);
seq__27959 = G__27971;
chunk__27960 = G__27972;
count__27961 = G__27973;
i__27962 = G__27974;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function domina$restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.html_to_dom = (function domina$html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__27978 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__27978,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__27978,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__27978,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__27981 = wrapper.lastChild;
var G__27982 = (level - (1));
wrapper = G__27981;
level = G__27982;
continue;
} else {
return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__26792__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__26792__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__26792__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function domina$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s))){
return domina.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});

/**
 * @interface
 */
domina.DomContent = function(){};

/**
 * Returns the content as a sequence of nodes.
 */
domina.nodes = (function domina$nodes(content){
if((!((content == null))) && (!((content.domina$DomContent$nodes$arity$1 == null)))){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__27467__auto__ = (((content == null))?null:content);
var m__27468__auto__ = (domina.nodes[goog.typeOf(x__27467__auto__)]);
if(!((m__27468__auto__ == null))){
return m__27468__auto__.call(null,content);
} else {
var m__27468__auto____$1 = (domina.nodes["_"]);
if(!((m__27468__auto____$1 == null))){
return m__27468__auto____$1.call(null,content);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
}
});

/**
 * Returns the content as a single node (the first node, if the content contains more than one
 */
domina.single_node = (function domina$single_node(nodeseq){
if((!((nodeseq == null))) && (!((nodeseq.domina$DomContent$single_node$arity$1 == null)))){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__27467__auto__ = (((nodeseq == null))?null:nodeseq);
var m__27468__auto__ = (domina.single_node[goog.typeOf(x__27467__auto__)]);
if(!((m__27468__auto__ == null))){
return m__27468__auto__.call(null,nodeseq);
} else {
var m__27468__auto____$1 = (domina.single_node["_"]);
if(!((m__27468__auto____$1 == null))){
return m__27468__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__27886__auto__ = [];
var len__27879__auto___27984 = arguments.length;
var i__27880__auto___27985 = (0);
while(true){
if((i__27880__auto___27985 < len__27879__auto___27984)){
args__27886__auto__.push((arguments[i__27880__auto___27985]));

var G__27986 = (i__27880__auto___27985 + (1));
i__27880__auto___27985 = G__27986;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});

domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_((function (){var and__26792__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__26792__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__26792__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log_debug.cljs$lang$maxFixedArity = (0);

domina.log_debug.cljs$lang$applyTo = (function (seq27983){
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27983));
});

domina.log = (function domina$log(var_args){
var args__27886__auto__ = [];
var len__27879__auto___27988 = arguments.length;
var i__27880__auto___27989 = (0);
while(true){
if((i__27880__auto___27989 < len__27879__auto___27988)){
args__27886__auto__.push((arguments[i__27880__auto___27989]));

var G__27990 = (i__27880__auto___27989 + (1));
i__27880__auto___27989 = G__27990;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});

domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log.cljs$lang$maxFixedArity = (0);

domina.log.cljs$lang$applyTo = (function (seq27987){
return domina.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27987));
});

/**
 * Returns content containing a single node by looking up the given ID
 */
domina.by_id = (function domina$by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.by_class = (function domina$by_class(class_name){
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.children = (function domina$children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 */
domina.common_ancestor = (function domina$common_ancestor(var_args){
var args__27886__auto__ = [];
var len__27879__auto___27992 = arguments.length;
var i__27880__auto___27993 = (0);
while(true){
if((i__27880__auto___27993 < len__27879__auto___27992)){
args__27886__auto__.push((arguments[i__27880__auto___27993]));

var G__27994 = (i__27880__auto___27993 + (1));
i__27880__auto___27993 = G__27994;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});

domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
});

domina.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.common_ancestor.cljs$lang$applyTo = (function (seq27991){
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27991));
});

/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.ancestor_QMARK_ = (function domina$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.clone = (function domina$clone(content){
return cljs.core.map.call(null,(function (p1__27995_SHARP_){
return p1__27995_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.append_BANG_ = (function domina$append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.insert_BANG_ = (function domina$insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__27996_SHARP_,p2__27997_SHARP_){
return goog.dom.insertChildAt(p1__27996_SHARP_,p2__27997_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.prepend_BANG_ = (function domina$prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_before_BANG_ = (function domina$insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__27999_SHARP_,p2__27998_SHARP_){
return goog.dom.insertSiblingBefore(p2__27998_SHARP_,p1__27999_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__28001_SHARP_,p2__28000_SHARP_){
return goog.dom.insertSiblingAfter(p2__28000_SHARP_,p1__28001_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__28003_SHARP_,p2__28002_SHARP_){
return goog.dom.replaceNode(p2__28002_SHARP_,p1__28003_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.detach_BANG_ = (function domina$detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.destroy_BANG_ = (function domina$destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.destroy_children_BANG_ = (function domina$destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.style = (function domina$style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.attr = (function domina$attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_style_BANG_ = (function domina$set_style_BANG_(var_args){
var args__27886__auto__ = [];
var len__27879__auto___28011 = arguments.length;
var i__27880__auto___28012 = (0);
while(true){
if((i__27880__auto___28012 < len__27879__auto___28011)){
args__27886__auto__.push((arguments[i__27880__auto___28012]));

var G__28013 = (i__27880__auto___28012 + (1));
i__27880__auto___28012 = G__28013;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((2) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27887__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__28007_28014 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__28008_28015 = null;
var count__28009_28016 = (0);
var i__28010_28017 = (0);
while(true){
if((i__28010_28017 < count__28009_28016)){
var n_28018 = cljs.core._nth.call(null,chunk__28008_28015,i__28010_28017);
goog.style.setStyle(n_28018,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__28019 = seq__28007_28014;
var G__28020 = chunk__28008_28015;
var G__28021 = count__28009_28016;
var G__28022 = (i__28010_28017 + (1));
seq__28007_28014 = G__28019;
chunk__28008_28015 = G__28020;
count__28009_28016 = G__28021;
i__28010_28017 = G__28022;
continue;
} else {
var temp__4657__auto___28023 = cljs.core.seq.call(null,seq__28007_28014);
if(temp__4657__auto___28023){
var seq__28007_28024__$1 = temp__4657__auto___28023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28007_28024__$1)){
var c__27615__auto___28025 = cljs.core.chunk_first.call(null,seq__28007_28024__$1);
var G__28026 = cljs.core.chunk_rest.call(null,seq__28007_28024__$1);
var G__28027 = c__27615__auto___28025;
var G__28028 = cljs.core.count.call(null,c__27615__auto___28025);
var G__28029 = (0);
seq__28007_28014 = G__28026;
chunk__28008_28015 = G__28027;
count__28009_28016 = G__28028;
i__28010_28017 = G__28029;
continue;
} else {
var n_28030 = cljs.core.first.call(null,seq__28007_28024__$1);
goog.style.setStyle(n_28030,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__28031 = cljs.core.next.call(null,seq__28007_28024__$1);
var G__28032 = null;
var G__28033 = (0);
var G__28034 = (0);
seq__28007_28014 = G__28031;
chunk__28008_28015 = G__28032;
count__28009_28016 = G__28033;
i__28010_28017 = G__28034;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_style_BANG_.cljs$lang$maxFixedArity = (2);

domina.set_style_BANG_.cljs$lang$applyTo = (function (seq28004){
var G__28005 = cljs.core.first.call(null,seq28004);
var seq28004__$1 = cljs.core.next.call(null,seq28004);
var G__28006 = cljs.core.first.call(null,seq28004__$1);
var seq28004__$2 = cljs.core.next.call(null,seq28004__$1);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28005,G__28006,seq28004__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__27886__auto__ = [];
var len__27879__auto___28042 = arguments.length;
var i__27880__auto___28043 = (0);
while(true){
if((i__27880__auto___28043 < len__27879__auto___28042)){
args__27886__auto__.push((arguments[i__27880__auto___28043]));

var G__28044 = (i__27880__auto___28043 + (1));
i__27880__auto___28043 = G__28044;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((2) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27887__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__28038_28045 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__28039_28046 = null;
var count__28040_28047 = (0);
var i__28041_28048 = (0);
while(true){
if((i__28041_28048 < count__28040_28047)){
var n_28049 = cljs.core._nth.call(null,chunk__28039_28046,i__28041_28048);
n_28049.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__28050 = seq__28038_28045;
var G__28051 = chunk__28039_28046;
var G__28052 = count__28040_28047;
var G__28053 = (i__28041_28048 + (1));
seq__28038_28045 = G__28050;
chunk__28039_28046 = G__28051;
count__28040_28047 = G__28052;
i__28041_28048 = G__28053;
continue;
} else {
var temp__4657__auto___28054 = cljs.core.seq.call(null,seq__28038_28045);
if(temp__4657__auto___28054){
var seq__28038_28055__$1 = temp__4657__auto___28054;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28038_28055__$1)){
var c__27615__auto___28056 = cljs.core.chunk_first.call(null,seq__28038_28055__$1);
var G__28057 = cljs.core.chunk_rest.call(null,seq__28038_28055__$1);
var G__28058 = c__27615__auto___28056;
var G__28059 = cljs.core.count.call(null,c__27615__auto___28056);
var G__28060 = (0);
seq__28038_28045 = G__28057;
chunk__28039_28046 = G__28058;
count__28040_28047 = G__28059;
i__28041_28048 = G__28060;
continue;
} else {
var n_28061 = cljs.core.first.call(null,seq__28038_28055__$1);
n_28061.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__28062 = cljs.core.next.call(null,seq__28038_28055__$1);
var G__28063 = null;
var G__28064 = (0);
var G__28065 = (0);
seq__28038_28045 = G__28062;
chunk__28039_28046 = G__28063;
count__28040_28047 = G__28064;
i__28041_28048 = G__28065;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_attr_BANG_.cljs$lang$maxFixedArity = (2);

domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq28035){
var G__28036 = cljs.core.first.call(null,seq28035);
var seq28035__$1 = cljs.core.next.call(null,seq28035);
var G__28037 = cljs.core.first.call(null,seq28035__$1);
var seq28035__$2 = cljs.core.next.call(null,seq28035__$1);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28036,G__28037,seq28035__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__28070_28074 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__28071_28075 = null;
var count__28072_28076 = (0);
var i__28073_28077 = (0);
while(true){
if((i__28073_28077 < count__28072_28076)){
var n_28078 = cljs.core._nth.call(null,chunk__28071_28075,i__28073_28077);
n_28078.removeAttribute(cljs.core.name.call(null,name));

var G__28079 = seq__28070_28074;
var G__28080 = chunk__28071_28075;
var G__28081 = count__28072_28076;
var G__28082 = (i__28073_28077 + (1));
seq__28070_28074 = G__28079;
chunk__28071_28075 = G__28080;
count__28072_28076 = G__28081;
i__28073_28077 = G__28082;
continue;
} else {
var temp__4657__auto___28083 = cljs.core.seq.call(null,seq__28070_28074);
if(temp__4657__auto___28083){
var seq__28070_28084__$1 = temp__4657__auto___28083;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28070_28084__$1)){
var c__27615__auto___28085 = cljs.core.chunk_first.call(null,seq__28070_28084__$1);
var G__28086 = cljs.core.chunk_rest.call(null,seq__28070_28084__$1);
var G__28087 = c__27615__auto___28085;
var G__28088 = cljs.core.count.call(null,c__27615__auto___28085);
var G__28089 = (0);
seq__28070_28074 = G__28086;
chunk__28071_28075 = G__28087;
count__28072_28076 = G__28088;
i__28073_28077 = G__28089;
continue;
} else {
var n_28090 = cljs.core.first.call(null,seq__28070_28084__$1);
n_28090.removeAttribute(cljs.core.name.call(null,name));

var G__28091 = cljs.core.next.call(null,seq__28070_28084__$1);
var G__28092 = null;
var G__28093 = (0);
var G__28094 = (0);
seq__28070_28074 = G__28091;
chunk__28071_28075 = G__28092;
count__28072_28076 = G__28093;
i__28073_28077 = G__28094;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Parses a CSS style string and returns the properties as a map.
 */
domina.parse_style_attributes = (function domina$parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__28098 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__28098,(0),null);
var v = cljs.core.nth.call(null,vec__28098,(1),null);
if(cljs.core.truth_((function (){var and__26792__auto__ = k;
if(cljs.core.truth_(and__26792__auto__)){
return v;
} else {
return and__26792__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.styles = (function domina$styles(content){
var style = domina.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
 * Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
 */
domina.attrs = (function domina$attrs(content){
var node = domina.single_node.call(null,content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__28101_SHARP_){
var attr = attrs__$1.item(p1__28101_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else {
return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.set_styles_BANG_ = (function domina$set_styles_BANG_(content,styles){
var seq__28112_28122 = cljs.core.seq.call(null,styles);
var chunk__28113_28123 = null;
var count__28114_28124 = (0);
var i__28115_28125 = (0);
while(true){
if((i__28115_28125 < count__28114_28124)){
var vec__28116_28126 = cljs.core._nth.call(null,chunk__28113_28123,i__28115_28125);
var name_28127 = cljs.core.nth.call(null,vec__28116_28126,(0),null);
var value_28128 = cljs.core.nth.call(null,vec__28116_28126,(1),null);
domina.set_style_BANG_.call(null,content,name_28127,value_28128);

var G__28129 = seq__28112_28122;
var G__28130 = chunk__28113_28123;
var G__28131 = count__28114_28124;
var G__28132 = (i__28115_28125 + (1));
seq__28112_28122 = G__28129;
chunk__28113_28123 = G__28130;
count__28114_28124 = G__28131;
i__28115_28125 = G__28132;
continue;
} else {
var temp__4657__auto___28133 = cljs.core.seq.call(null,seq__28112_28122);
if(temp__4657__auto___28133){
var seq__28112_28134__$1 = temp__4657__auto___28133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28112_28134__$1)){
var c__27615__auto___28135 = cljs.core.chunk_first.call(null,seq__28112_28134__$1);
var G__28136 = cljs.core.chunk_rest.call(null,seq__28112_28134__$1);
var G__28137 = c__27615__auto___28135;
var G__28138 = cljs.core.count.call(null,c__27615__auto___28135);
var G__28139 = (0);
seq__28112_28122 = G__28136;
chunk__28113_28123 = G__28137;
count__28114_28124 = G__28138;
i__28115_28125 = G__28139;
continue;
} else {
var vec__28119_28140 = cljs.core.first.call(null,seq__28112_28134__$1);
var name_28141 = cljs.core.nth.call(null,vec__28119_28140,(0),null);
var value_28142 = cljs.core.nth.call(null,vec__28119_28140,(1),null);
domina.set_style_BANG_.call(null,content,name_28141,value_28142);

var G__28143 = cljs.core.next.call(null,seq__28112_28134__$1);
var G__28144 = null;
var G__28145 = (0);
var G__28146 = (0);
seq__28112_28122 = G__28143;
chunk__28113_28123 = G__28144;
count__28114_28124 = G__28145;
i__28115_28125 = G__28146;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attrs_BANG_ = (function domina$set_attrs_BANG_(content,attrs){
var seq__28157_28167 = cljs.core.seq.call(null,attrs);
var chunk__28158_28168 = null;
var count__28159_28169 = (0);
var i__28160_28170 = (0);
while(true){
if((i__28160_28170 < count__28159_28169)){
var vec__28161_28171 = cljs.core._nth.call(null,chunk__28158_28168,i__28160_28170);
var name_28172 = cljs.core.nth.call(null,vec__28161_28171,(0),null);
var value_28173 = cljs.core.nth.call(null,vec__28161_28171,(1),null);
domina.set_attr_BANG_.call(null,content,name_28172,value_28173);

var G__28174 = seq__28157_28167;
var G__28175 = chunk__28158_28168;
var G__28176 = count__28159_28169;
var G__28177 = (i__28160_28170 + (1));
seq__28157_28167 = G__28174;
chunk__28158_28168 = G__28175;
count__28159_28169 = G__28176;
i__28160_28170 = G__28177;
continue;
} else {
var temp__4657__auto___28178 = cljs.core.seq.call(null,seq__28157_28167);
if(temp__4657__auto___28178){
var seq__28157_28179__$1 = temp__4657__auto___28178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28157_28179__$1)){
var c__27615__auto___28180 = cljs.core.chunk_first.call(null,seq__28157_28179__$1);
var G__28181 = cljs.core.chunk_rest.call(null,seq__28157_28179__$1);
var G__28182 = c__27615__auto___28180;
var G__28183 = cljs.core.count.call(null,c__27615__auto___28180);
var G__28184 = (0);
seq__28157_28167 = G__28181;
chunk__28158_28168 = G__28182;
count__28159_28169 = G__28183;
i__28160_28170 = G__28184;
continue;
} else {
var vec__28164_28185 = cljs.core.first.call(null,seq__28157_28179__$1);
var name_28186 = cljs.core.nth.call(null,vec__28164_28185,(0),null);
var value_28187 = cljs.core.nth.call(null,vec__28164_28185,(1),null);
domina.set_attr_BANG_.call(null,content,name_28186,value_28187);

var G__28188 = cljs.core.next.call(null,seq__28157_28179__$1);
var G__28189 = null;
var G__28190 = (0);
var G__28191 = (0);
seq__28157_28167 = G__28188;
chunk__28158_28168 = G__28189;
count__28159_28169 = G__28190;
i__28160_28170 = G__28191;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns true if the node has the specified CSS class. Assumes content is a single node.
 */
domina.has_class_QMARK_ = (function domina$has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.add_class_BANG_ = (function domina$add_class_BANG_(content,class$){
var seq__28196_28200 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__28197_28201 = null;
var count__28198_28202 = (0);
var i__28199_28203 = (0);
while(true){
if((i__28199_28203 < count__28198_28202)){
var node_28204 = cljs.core._nth.call(null,chunk__28197_28201,i__28199_28203);
goog.dom.classes.add(node_28204,class$);

var G__28205 = seq__28196_28200;
var G__28206 = chunk__28197_28201;
var G__28207 = count__28198_28202;
var G__28208 = (i__28199_28203 + (1));
seq__28196_28200 = G__28205;
chunk__28197_28201 = G__28206;
count__28198_28202 = G__28207;
i__28199_28203 = G__28208;
continue;
} else {
var temp__4657__auto___28209 = cljs.core.seq.call(null,seq__28196_28200);
if(temp__4657__auto___28209){
var seq__28196_28210__$1 = temp__4657__auto___28209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28196_28210__$1)){
var c__27615__auto___28211 = cljs.core.chunk_first.call(null,seq__28196_28210__$1);
var G__28212 = cljs.core.chunk_rest.call(null,seq__28196_28210__$1);
var G__28213 = c__27615__auto___28211;
var G__28214 = cljs.core.count.call(null,c__27615__auto___28211);
var G__28215 = (0);
seq__28196_28200 = G__28212;
chunk__28197_28201 = G__28213;
count__28198_28202 = G__28214;
i__28199_28203 = G__28215;
continue;
} else {
var node_28216 = cljs.core.first.call(null,seq__28196_28210__$1);
goog.dom.classes.add(node_28216,class$);

var G__28217 = cljs.core.next.call(null,seq__28196_28210__$1);
var G__28218 = null;
var G__28219 = (0);
var G__28220 = (0);
seq__28196_28200 = G__28217;
chunk__28197_28201 = G__28218;
count__28198_28202 = G__28219;
i__28199_28203 = G__28220;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
domina.remove_class_BANG_ = (function domina$remove_class_BANG_(content,class$){
var seq__28225_28229 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__28226_28230 = null;
var count__28227_28231 = (0);
var i__28228_28232 = (0);
while(true){
if((i__28228_28232 < count__28227_28231)){
var node_28233 = cljs.core._nth.call(null,chunk__28226_28230,i__28228_28232);
goog.dom.classes.remove(node_28233,class$);

var G__28234 = seq__28225_28229;
var G__28235 = chunk__28226_28230;
var G__28236 = count__28227_28231;
var G__28237 = (i__28228_28232 + (1));
seq__28225_28229 = G__28234;
chunk__28226_28230 = G__28235;
count__28227_28231 = G__28236;
i__28228_28232 = G__28237;
continue;
} else {
var temp__4657__auto___28238 = cljs.core.seq.call(null,seq__28225_28229);
if(temp__4657__auto___28238){
var seq__28225_28239__$1 = temp__4657__auto___28238;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28225_28239__$1)){
var c__27615__auto___28240 = cljs.core.chunk_first.call(null,seq__28225_28239__$1);
var G__28241 = cljs.core.chunk_rest.call(null,seq__28225_28239__$1);
var G__28242 = c__27615__auto___28240;
var G__28243 = cljs.core.count.call(null,c__27615__auto___28240);
var G__28244 = (0);
seq__28225_28229 = G__28241;
chunk__28226_28230 = G__28242;
count__28227_28231 = G__28243;
i__28228_28232 = G__28244;
continue;
} else {
var node_28245 = cljs.core.first.call(null,seq__28225_28239__$1);
goog.dom.classes.remove(node_28245,class$);

var G__28246 = cljs.core.next.call(null,seq__28225_28239__$1);
var G__28247 = null;
var G__28248 = (0);
var G__28249 = (0);
seq__28225_28229 = G__28246;
chunk__28226_28230 = G__28247;
count__28227_28231 = G__28248;
i__28228_28232 = G__28249;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
domina.toggle_class_BANG_ = (function domina$toggle_class_BANG_(content,class$){
var seq__28254_28258 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__28255_28259 = null;
var count__28256_28260 = (0);
var i__28257_28261 = (0);
while(true){
if((i__28257_28261 < count__28256_28260)){
var node_28262 = cljs.core._nth.call(null,chunk__28255_28259,i__28257_28261);
goog.dom.classes.toggle(node_28262,class$);

var G__28263 = seq__28254_28258;
var G__28264 = chunk__28255_28259;
var G__28265 = count__28256_28260;
var G__28266 = (i__28257_28261 + (1));
seq__28254_28258 = G__28263;
chunk__28255_28259 = G__28264;
count__28256_28260 = G__28265;
i__28257_28261 = G__28266;
continue;
} else {
var temp__4657__auto___28267 = cljs.core.seq.call(null,seq__28254_28258);
if(temp__4657__auto___28267){
var seq__28254_28268__$1 = temp__4657__auto___28267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28254_28268__$1)){
var c__27615__auto___28269 = cljs.core.chunk_first.call(null,seq__28254_28268__$1);
var G__28270 = cljs.core.chunk_rest.call(null,seq__28254_28268__$1);
var G__28271 = c__27615__auto___28269;
var G__28272 = cljs.core.count.call(null,c__27615__auto___28269);
var G__28273 = (0);
seq__28254_28258 = G__28270;
chunk__28255_28259 = G__28271;
count__28256_28260 = G__28272;
i__28257_28261 = G__28273;
continue;
} else {
var node_28274 = cljs.core.first.call(null,seq__28254_28268__$1);
goog.dom.classes.toggle(node_28274,class$);

var G__28275 = cljs.core.next.call(null,seq__28254_28268__$1);
var G__28276 = null;
var G__28277 = (0);
var G__28278 = (0);
seq__28254_28258 = G__28275;
chunk__28255_28259 = G__28276;
count__28256_28260 = G__28277;
i__28257_28261 = G__28278;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
 */
domina.classes = (function domina$classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.set_classes_BANG_ = (function domina$set_classes_BANG_(content,classes){
var classes_28287__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__28283_28288 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__28284_28289 = null;
var count__28285_28290 = (0);
var i__28286_28291 = (0);
while(true){
if((i__28286_28291 < count__28285_28290)){
var node_28292 = cljs.core._nth.call(null,chunk__28284_28289,i__28286_28291);
goog.dom.classes.set(node_28292,classes_28287__$1);

var G__28293 = seq__28283_28288;
var G__28294 = chunk__28284_28289;
var G__28295 = count__28285_28290;
var G__28296 = (i__28286_28291 + (1));
seq__28283_28288 = G__28293;
chunk__28284_28289 = G__28294;
count__28285_28290 = G__28295;
i__28286_28291 = G__28296;
continue;
} else {
var temp__4657__auto___28297 = cljs.core.seq.call(null,seq__28283_28288);
if(temp__4657__auto___28297){
var seq__28283_28298__$1 = temp__4657__auto___28297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28283_28298__$1)){
var c__27615__auto___28299 = cljs.core.chunk_first.call(null,seq__28283_28298__$1);
var G__28300 = cljs.core.chunk_rest.call(null,seq__28283_28298__$1);
var G__28301 = c__27615__auto___28299;
var G__28302 = cljs.core.count.call(null,c__27615__auto___28299);
var G__28303 = (0);
seq__28283_28288 = G__28300;
chunk__28284_28289 = G__28301;
count__28285_28290 = G__28302;
i__28286_28291 = G__28303;
continue;
} else {
var node_28304 = cljs.core.first.call(null,seq__28283_28298__$1);
goog.dom.classes.set(node_28304,classes_28287__$1);

var G__28305 = cljs.core.next.call(null,seq__28283_28298__$1);
var G__28306 = null;
var G__28307 = (0);
var G__28308 = (0);
seq__28283_28288 = G__28305;
chunk__28284_28289 = G__28306;
count__28285_28290 = G__28307;
i__28286_28291 = G__28308;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
 */
domina.text = (function domina$text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.set_text_BANG_ = (function domina$set_text_BANG_(content,value){
var seq__28313_28317 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__28314_28318 = null;
var count__28315_28319 = (0);
var i__28316_28320 = (0);
while(true){
if((i__28316_28320 < count__28315_28319)){
var node_28321 = cljs.core._nth.call(null,chunk__28314_28318,i__28316_28320);
goog.dom.setTextContent(node_28321,value);

var G__28322 = seq__28313_28317;
var G__28323 = chunk__28314_28318;
var G__28324 = count__28315_28319;
var G__28325 = (i__28316_28320 + (1));
seq__28313_28317 = G__28322;
chunk__28314_28318 = G__28323;
count__28315_28319 = G__28324;
i__28316_28320 = G__28325;
continue;
} else {
var temp__4657__auto___28326 = cljs.core.seq.call(null,seq__28313_28317);
if(temp__4657__auto___28326){
var seq__28313_28327__$1 = temp__4657__auto___28326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28313_28327__$1)){
var c__27615__auto___28328 = cljs.core.chunk_first.call(null,seq__28313_28327__$1);
var G__28329 = cljs.core.chunk_rest.call(null,seq__28313_28327__$1);
var G__28330 = c__27615__auto___28328;
var G__28331 = cljs.core.count.call(null,c__27615__auto___28328);
var G__28332 = (0);
seq__28313_28317 = G__28329;
chunk__28314_28318 = G__28330;
count__28315_28319 = G__28331;
i__28316_28320 = G__28332;
continue;
} else {
var node_28333 = cljs.core.first.call(null,seq__28313_28327__$1);
goog.dom.setTextContent(node_28333,value);

var G__28334 = cljs.core.next.call(null,seq__28313_28327__$1);
var G__28335 = null;
var G__28336 = (0);
var G__28337 = (0);
seq__28313_28317 = G__28334;
chunk__28314_28318 = G__28335;
count__28315_28319 = G__28336;
i__28316_28320 = G__28337;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the value of a node (presumably a form field). Assumes content is a single node.
 */
domina.value = (function domina$value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.set_value_BANG_ = (function domina$set_value_BANG_(content,value){
var seq__28342_28346 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__28343_28347 = null;
var count__28344_28348 = (0);
var i__28345_28349 = (0);
while(true){
if((i__28345_28349 < count__28344_28348)){
var node_28350 = cljs.core._nth.call(null,chunk__28343_28347,i__28345_28349);
goog.dom.forms.setValue(node_28350,value);

var G__28351 = seq__28342_28346;
var G__28352 = chunk__28343_28347;
var G__28353 = count__28344_28348;
var G__28354 = (i__28345_28349 + (1));
seq__28342_28346 = G__28351;
chunk__28343_28347 = G__28352;
count__28344_28348 = G__28353;
i__28345_28349 = G__28354;
continue;
} else {
var temp__4657__auto___28355 = cljs.core.seq.call(null,seq__28342_28346);
if(temp__4657__auto___28355){
var seq__28342_28356__$1 = temp__4657__auto___28355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28342_28356__$1)){
var c__27615__auto___28357 = cljs.core.chunk_first.call(null,seq__28342_28356__$1);
var G__28358 = cljs.core.chunk_rest.call(null,seq__28342_28356__$1);
var G__28359 = c__27615__auto___28357;
var G__28360 = cljs.core.count.call(null,c__27615__auto___28357);
var G__28361 = (0);
seq__28342_28346 = G__28358;
chunk__28343_28347 = G__28359;
count__28344_28348 = G__28360;
i__28345_28349 = G__28361;
continue;
} else {
var node_28362 = cljs.core.first.call(null,seq__28342_28356__$1);
goog.dom.forms.setValue(node_28362,value);

var G__28363 = cljs.core.next.call(null,seq__28342_28356__$1);
var G__28364 = null;
var G__28365 = (0);
var G__28366 = (0);
seq__28342_28346 = G__28363;
chunk__28343_28347 = G__28364;
count__28344_28348 = G__28365;
i__28345_28349 = G__28366;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the innerHTML of a node. Assumes content is a single node.
 */
domina.html = (function domina$html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function domina$replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function domina$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__26792__auto__ = allows_inner_html_QMARK_;
if(and__26792__auto__){
var and__26792__auto____$1 = (function (){var or__26804__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__26804__auto__)){
return or__26804__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__26792__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__26792__auto____$1;
}
} else {
return and__26792__auto__;
}
})())){
var value_28377 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__28373_28378 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__28374_28379 = null;
var count__28375_28380 = (0);
var i__28376_28381 = (0);
while(true){
if((i__28376_28381 < count__28375_28380)){
var node_28382 = cljs.core._nth.call(null,chunk__28374_28379,i__28376_28381);
node_28382.innerHTML = value_28377;

var G__28383 = seq__28373_28378;
var G__28384 = chunk__28374_28379;
var G__28385 = count__28375_28380;
var G__28386 = (i__28376_28381 + (1));
seq__28373_28378 = G__28383;
chunk__28374_28379 = G__28384;
count__28375_28380 = G__28385;
i__28376_28381 = G__28386;
continue;
} else {
var temp__4657__auto___28387 = cljs.core.seq.call(null,seq__28373_28378);
if(temp__4657__auto___28387){
var seq__28373_28388__$1 = temp__4657__auto___28387;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28373_28388__$1)){
var c__27615__auto___28389 = cljs.core.chunk_first.call(null,seq__28373_28388__$1);
var G__28390 = cljs.core.chunk_rest.call(null,seq__28373_28388__$1);
var G__28391 = c__27615__auto___28389;
var G__28392 = cljs.core.count.call(null,c__27615__auto___28389);
var G__28393 = (0);
seq__28373_28378 = G__28390;
chunk__28374_28379 = G__28391;
count__28375_28380 = G__28392;
i__28376_28381 = G__28393;
continue;
} else {
var node_28394 = cljs.core.first.call(null,seq__28373_28388__$1);
node_28394.innerHTML = value_28377;

var G__28395 = cljs.core.next.call(null,seq__28373_28388__$1);
var G__28396 = null;
var G__28397 = (0);
var G__28398 = (0);
seq__28373_28378 = G__28395;
chunk__28374_28379 = G__28396;
count__28375_28380 = G__28397;
i__28376_28381 = G__28398;
continue;
}
} else {
}
}
break;
}
}catch (e28372){if((e28372 instanceof Error)){
var e_28399 = e28372;
domina.replace_children_BANG_.call(null,content,value_28377);
} else {
throw e28372;

}
}} else {
domina.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.set_html_BANG_ = (function domina$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 *   content is a single node. If the bubble parameter is set to true,
 *   will search parent nodes if the key is not found.
 */
domina.get_data = (function domina$get_data(var_args){
var args28400 = [];
var len__27879__auto___28403 = arguments.length;
var i__27880__auto___28404 = (0);
while(true){
if((i__27880__auto___28404 < len__27879__auto___28403)){
args28400.push((arguments[i__27880__auto___28404]));

var G__28405 = (i__27880__auto___28404 + (1));
i__27880__auto___28404 = G__28405;
continue;
} else {
}
break;
}

var G__28402 = args28400.length;
switch (G__28402) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28400.length)].join('')));

}
});

domina.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.get_data.call(null,node,key,false);
});

domina.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__26792__auto__ = bubble;
if(cljs.core.truth_(and__26792__auto__)){
return (value == null);
} else {
return and__26792__auto__;
}
})())){
var temp__4657__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
return domina.get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});

domina.get_data.cljs$lang$maxFixedArity = 3;

/**
 * Sets a data on the node for a given key. Assumes content is a
 *   single node. Data should be ClojureScript values and data structures
 *   only; using other objects as data may result in memory leaks on some
 *   browsers.
 */
domina.set_data_BANG_ = (function domina$set_data_BANG_(node,key,value){
var m = (function (){var or__26804__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__26804__auto__)){
return or__26804__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
 * Takes a two-arg function, a reference DomContent and new
 *   DomContent. Applies the function for each reference / content
 *   combination. Uses clones of the new content for each additional
 *   parent after the first.
 */
domina.apply_with_cloning = (function domina$apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__28413_28417 = cljs.core.seq.call(null,children);
var chunk__28414_28418 = null;
var count__28415_28419 = (0);
var i__28416_28420 = (0);
while(true){
if((i__28416_28420 < count__28415_28419)){
var child_28421 = cljs.core._nth.call(null,chunk__28414_28418,i__28416_28420);
frag.appendChild(child_28421);

var G__28422 = seq__28413_28417;
var G__28423 = chunk__28414_28418;
var G__28424 = count__28415_28419;
var G__28425 = (i__28416_28420 + (1));
seq__28413_28417 = G__28422;
chunk__28414_28418 = G__28423;
count__28415_28419 = G__28424;
i__28416_28420 = G__28425;
continue;
} else {
var temp__4657__auto___28426 = cljs.core.seq.call(null,seq__28413_28417);
if(temp__4657__auto___28426){
var seq__28413_28427__$1 = temp__4657__auto___28426;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28413_28427__$1)){
var c__27615__auto___28428 = cljs.core.chunk_first.call(null,seq__28413_28427__$1);
var G__28429 = cljs.core.chunk_rest.call(null,seq__28413_28427__$1);
var G__28430 = c__27615__auto___28428;
var G__28431 = cljs.core.count.call(null,c__27615__auto___28428);
var G__28432 = (0);
seq__28413_28417 = G__28429;
chunk__28414_28418 = G__28430;
count__28415_28419 = G__28431;
i__28416_28420 = G__28432;
continue;
} else {
var child_28433 = cljs.core.first.call(null,seq__28413_28427__$1);
frag.appendChild(child_28433);

var G__28434 = cljs.core.next.call(null,seq__28413_28427__$1);
var G__28435 = null;
var G__28436 = (0);
var G__28437 = (0);
seq__28413_28417 = G__28434;
chunk__28414_28418 = G__28435;
count__28415_28419 = G__28436;
i__28416_28420 = G__28437;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__28407_SHARP_,p2__28408_SHARP_){
return f.call(null,p1__28407_SHARP_,p2__28408_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var args28438 = [];
var len__27879__auto___28441 = arguments.length;
var i__27880__auto___28442 = (0);
while(true){
if((i__27880__auto___28442 < len__27879__auto___28441)){
args28438.push((arguments[i__27880__auto___28442]));

var G__28443 = (i__27880__auto___28442 + (1));
i__27880__auto___28442 = G__28443;
continue;
} else {
}
break;
}

var G__28440 = args28438.length;
switch (G__28440) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28438.length)].join('')));

}
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_item.call(null,nl,(0));
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),domina.lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_item.cljs$lang$maxFixedArity = 2;

domina.lazy_nl_via_array_ref = (function domina$lazy_nl_via_array_ref(var_args){
var args28445 = [];
var len__27879__auto___28448 = arguments.length;
var i__27880__auto___28449 = (0);
while(true){
if((i__27880__auto___28449 < len__27879__auto___28448)){
args28445.push((arguments[i__27880__auto___28449]));

var G__28450 = (i__27880__auto___28449 + (1));
i__27880__auto___28449 = G__28450;
continue;
} else {
}
break;
}

var G__28447 = args28445.length;
switch (G__28447) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28445.length)].join('')));

}
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_array_ref.call(null,nl,(0));
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),domina.lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_array_ref.cljs$lang$maxFixedArity = 2;

/**
 * A lazy seq view of a js/NodeList, or other array-like javascript things
 */
domina.lazy_nodelist = (function domina$lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.call(null,nl);
} else {
return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function domina$array_like_QMARK_(obj){
var and__26792__auto__ = obj;
if(cljs.core.truth_(and__26792__auto__)){
var and__26792__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__26792__auto____$1){
return obj.length;
} else {
return and__26792__auto____$1;
}
} else {
return and__26792__auto__;
}
});
/**
 * Some versions of IE have things that are like arrays in that they
 *   respond to .length, but are not arrays nor NodeSets. This returns a
 *   real sequence view of such objects. If passed an object that is not
 *   a logical sequence at all, returns a single-item seq containing the
 *   object.
 */
domina.normalize_seq = (function domina$normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((list_thing == null)))?((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || (list_thing.cljs$core$ISeqable$))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing))){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing))){
return domina.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["string"] = true);

(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));

(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));

(domina.DomContent["_"] = true);

(domina.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || (content.cljs$core$ISeqable$))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return domina.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || (content.cljs$core$ISeqable$))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ICounted$ = true;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

NodeList.prototype.cljs$core$IIndexed$ = true;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ICounted$ = true;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

StaticNodeList.prototype.cljs$core$IIndexed$ = true;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ISeqable$ = true;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ICounted$ = true;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});

HTMLCollection.prototype.cljs$core$IIndexed$ = true;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ISeqable$ = true;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
});
} else {
}

//# sourceMappingURL=domina.js.map?rel=1511837125744