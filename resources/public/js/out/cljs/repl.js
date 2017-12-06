// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36160){
var map__36185 = p__36160;
var map__36185__$1 = ((((!((map__36185 == null)))?((((map__36185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36185):map__36185);
var m = map__36185__$1;
var n = cljs.core.get.call(null,map__36185__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36185__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36187_36209 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36188_36210 = null;
var count__36189_36211 = (0);
var i__36190_36212 = (0);
while(true){
if((i__36190_36212 < count__36189_36211)){
var f_36213 = cljs.core._nth.call(null,chunk__36188_36210,i__36190_36212);
cljs.core.println.call(null,"  ",f_36213);

var G__36214 = seq__36187_36209;
var G__36215 = chunk__36188_36210;
var G__36216 = count__36189_36211;
var G__36217 = (i__36190_36212 + (1));
seq__36187_36209 = G__36214;
chunk__36188_36210 = G__36215;
count__36189_36211 = G__36216;
i__36190_36212 = G__36217;
continue;
} else {
var temp__4657__auto___36218 = cljs.core.seq.call(null,seq__36187_36209);
if(temp__4657__auto___36218){
var seq__36187_36219__$1 = temp__4657__auto___36218;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36187_36219__$1)){
var c__27615__auto___36220 = cljs.core.chunk_first.call(null,seq__36187_36219__$1);
var G__36221 = cljs.core.chunk_rest.call(null,seq__36187_36219__$1);
var G__36222 = c__27615__auto___36220;
var G__36223 = cljs.core.count.call(null,c__27615__auto___36220);
var G__36224 = (0);
seq__36187_36209 = G__36221;
chunk__36188_36210 = G__36222;
count__36189_36211 = G__36223;
i__36190_36212 = G__36224;
continue;
} else {
var f_36225 = cljs.core.first.call(null,seq__36187_36219__$1);
cljs.core.println.call(null,"  ",f_36225);

var G__36226 = cljs.core.next.call(null,seq__36187_36219__$1);
var G__36227 = null;
var G__36228 = (0);
var G__36229 = (0);
seq__36187_36209 = G__36226;
chunk__36188_36210 = G__36227;
count__36189_36211 = G__36228;
i__36190_36212 = G__36229;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36230 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26804__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26804__auto__)){
return or__26804__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36230);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36230)))?cljs.core.second.call(null,arglists_36230):arglists_36230));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36191_36231 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36192_36232 = null;
var count__36193_36233 = (0);
var i__36194_36234 = (0);
while(true){
if((i__36194_36234 < count__36193_36233)){
var vec__36195_36235 = cljs.core._nth.call(null,chunk__36192_36232,i__36194_36234);
var name_36236 = cljs.core.nth.call(null,vec__36195_36235,(0),null);
var map__36198_36237 = cljs.core.nth.call(null,vec__36195_36235,(1),null);
var map__36198_36238__$1 = ((((!((map__36198_36237 == null)))?((((map__36198_36237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36198_36237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36198_36237):map__36198_36237);
var doc_36239 = cljs.core.get.call(null,map__36198_36238__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36240 = cljs.core.get.call(null,map__36198_36238__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36236);

cljs.core.println.call(null," ",arglists_36240);

if(cljs.core.truth_(doc_36239)){
cljs.core.println.call(null," ",doc_36239);
} else {
}

var G__36241 = seq__36191_36231;
var G__36242 = chunk__36192_36232;
var G__36243 = count__36193_36233;
var G__36244 = (i__36194_36234 + (1));
seq__36191_36231 = G__36241;
chunk__36192_36232 = G__36242;
count__36193_36233 = G__36243;
i__36194_36234 = G__36244;
continue;
} else {
var temp__4657__auto___36245 = cljs.core.seq.call(null,seq__36191_36231);
if(temp__4657__auto___36245){
var seq__36191_36246__$1 = temp__4657__auto___36245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36191_36246__$1)){
var c__27615__auto___36247 = cljs.core.chunk_first.call(null,seq__36191_36246__$1);
var G__36248 = cljs.core.chunk_rest.call(null,seq__36191_36246__$1);
var G__36249 = c__27615__auto___36247;
var G__36250 = cljs.core.count.call(null,c__27615__auto___36247);
var G__36251 = (0);
seq__36191_36231 = G__36248;
chunk__36192_36232 = G__36249;
count__36193_36233 = G__36250;
i__36194_36234 = G__36251;
continue;
} else {
var vec__36200_36252 = cljs.core.first.call(null,seq__36191_36246__$1);
var name_36253 = cljs.core.nth.call(null,vec__36200_36252,(0),null);
var map__36203_36254 = cljs.core.nth.call(null,vec__36200_36252,(1),null);
var map__36203_36255__$1 = ((((!((map__36203_36254 == null)))?((((map__36203_36254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36203_36254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36203_36254):map__36203_36254);
var doc_36256 = cljs.core.get.call(null,map__36203_36255__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36257 = cljs.core.get.call(null,map__36203_36255__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36253);

cljs.core.println.call(null," ",arglists_36257);

if(cljs.core.truth_(doc_36256)){
cljs.core.println.call(null," ",doc_36256);
} else {
}

var G__36258 = cljs.core.next.call(null,seq__36191_36246__$1);
var G__36259 = null;
var G__36260 = (0);
var G__36261 = (0);
seq__36191_36231 = G__36258;
chunk__36192_36232 = G__36259;
count__36193_36233 = G__36260;
i__36194_36234 = G__36261;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36205 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36206 = null;
var count__36207 = (0);
var i__36208 = (0);
while(true){
if((i__36208 < count__36207)){
var role = cljs.core._nth.call(null,chunk__36206,i__36208);
var temp__4657__auto___36262__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36262__$1)){
var spec_36263 = temp__4657__auto___36262__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36263));
} else {
}

var G__36264 = seq__36205;
var G__36265 = chunk__36206;
var G__36266 = count__36207;
var G__36267 = (i__36208 + (1));
seq__36205 = G__36264;
chunk__36206 = G__36265;
count__36207 = G__36266;
i__36208 = G__36267;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36205);
if(temp__4657__auto____$1){
var seq__36205__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36205__$1)){
var c__27615__auto__ = cljs.core.chunk_first.call(null,seq__36205__$1);
var G__36268 = cljs.core.chunk_rest.call(null,seq__36205__$1);
var G__36269 = c__27615__auto__;
var G__36270 = cljs.core.count.call(null,c__27615__auto__);
var G__36271 = (0);
seq__36205 = G__36268;
chunk__36206 = G__36269;
count__36207 = G__36270;
i__36208 = G__36271;
continue;
} else {
var role = cljs.core.first.call(null,seq__36205__$1);
var temp__4657__auto___36272__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36272__$2)){
var spec_36273 = temp__4657__auto___36272__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36273));
} else {
}

var G__36274 = cljs.core.next.call(null,seq__36205__$1);
var G__36275 = null;
var G__36276 = (0);
var G__36277 = (0);
seq__36205 = G__36274;
chunk__36206 = G__36275;
count__36207 = G__36276;
i__36208 = G__36277;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1511752912834