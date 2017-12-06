// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__26804__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__26804__auto__){
return or__26804__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__26804__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__26804__auto__)){
return or__26804__auto__;
} else {
var or__26804__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__26804__auto____$1)){
return or__26804__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33760_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33760_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__33765 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33766 = null;
var count__33767 = (0);
var i__33768 = (0);
while(true){
if((i__33768 < count__33767)){
var n = cljs.core._nth.call(null,chunk__33766,i__33768);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33769 = seq__33765;
var G__33770 = chunk__33766;
var G__33771 = count__33767;
var G__33772 = (i__33768 + (1));
seq__33765 = G__33769;
chunk__33766 = G__33770;
count__33767 = G__33771;
i__33768 = G__33772;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33765);
if(temp__4657__auto__){
var seq__33765__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33765__$1)){
var c__27615__auto__ = cljs.core.chunk_first.call(null,seq__33765__$1);
var G__33773 = cljs.core.chunk_rest.call(null,seq__33765__$1);
var G__33774 = c__27615__auto__;
var G__33775 = cljs.core.count.call(null,c__27615__auto__);
var G__33776 = (0);
seq__33765 = G__33773;
chunk__33766 = G__33774;
count__33767 = G__33775;
i__33768 = G__33776;
continue;
} else {
var n = cljs.core.first.call(null,seq__33765__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33777 = cljs.core.next.call(null,seq__33765__$1);
var G__33778 = null;
var G__33779 = (0);
var G__33780 = (0);
seq__33765 = G__33777;
chunk__33766 = G__33778;
count__33767 = G__33779;
i__33768 = G__33780;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__33789){
var vec__33790 = p__33789;
var _ = cljs.core.nth.call(null,vec__33790,(0),null);
var v = cljs.core.nth.call(null,vec__33790,(1),null);
var and__26792__auto__ = v;
if(cljs.core.truth_(and__26792__auto__)){
return v.call(null,dep);
} else {
return and__26792__auto__;
}
}),cljs.core.filter.call(null,(function (p__33793){
var vec__33794 = p__33793;
var k = cljs.core.nth.call(null,vec__33794,(0),null);
var v = cljs.core.nth.call(null,vec__33794,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__33847_33858 = cljs.core.seq.call(null,deps);
var chunk__33848_33859 = null;
var count__33849_33860 = (0);
var i__33850_33861 = (0);
while(true){
if((i__33850_33861 < count__33849_33860)){
var dep_33862 = cljs.core._nth.call(null,chunk__33848_33859,i__33850_33861);
if(cljs.core.truth_((function (){var and__26792__auto__ = dep_33862;
if(cljs.core.truth_(and__26792__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_33862));
} else {
return and__26792__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_33862,(depth + (1)),state);
} else {
}

var G__33863 = seq__33847_33858;
var G__33864 = chunk__33848_33859;
var G__33865 = count__33849_33860;
var G__33866 = (i__33850_33861 + (1));
seq__33847_33858 = G__33863;
chunk__33848_33859 = G__33864;
count__33849_33860 = G__33865;
i__33850_33861 = G__33866;
continue;
} else {
var temp__4657__auto___33867 = cljs.core.seq.call(null,seq__33847_33858);
if(temp__4657__auto___33867){
var seq__33847_33868__$1 = temp__4657__auto___33867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33847_33868__$1)){
var c__27615__auto___33869 = cljs.core.chunk_first.call(null,seq__33847_33868__$1);
var G__33870 = cljs.core.chunk_rest.call(null,seq__33847_33868__$1);
var G__33871 = c__27615__auto___33869;
var G__33872 = cljs.core.count.call(null,c__27615__auto___33869);
var G__33873 = (0);
seq__33847_33858 = G__33870;
chunk__33848_33859 = G__33871;
count__33849_33860 = G__33872;
i__33850_33861 = G__33873;
continue;
} else {
var dep_33874 = cljs.core.first.call(null,seq__33847_33868__$1);
if(cljs.core.truth_((function (){var and__26792__auto__ = dep_33874;
if(cljs.core.truth_(and__26792__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_33874));
} else {
return and__26792__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_33874,(depth + (1)),state);
} else {
}

var G__33875 = cljs.core.next.call(null,seq__33847_33868__$1);
var G__33876 = null;
var G__33877 = (0);
var G__33878 = (0);
seq__33847_33858 = G__33875;
chunk__33848_33859 = G__33876;
count__33849_33860 = G__33877;
i__33850_33861 = G__33878;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33851){
var vec__33855 = p__33851;
var seq__33856 = cljs.core.seq.call(null,vec__33855);
var first__33857 = cljs.core.first.call(null,seq__33856);
var seq__33856__$1 = cljs.core.next.call(null,seq__33856);
var x = first__33857;
var xs = seq__33856__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33855,seq__33856,first__33857,seq__33856__$1,x,xs,get_deps__$1){
return (function (p1__33797_SHARP_){
return clojure.set.difference.call(null,p1__33797_SHARP_,x);
});})(vec__33855,seq__33856,first__33857,seq__33856__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__33891 = cljs.core.seq.call(null,provides);
var chunk__33892 = null;
var count__33893 = (0);
var i__33894 = (0);
while(true){
if((i__33894 < count__33893)){
var prov = cljs.core._nth.call(null,chunk__33892,i__33894);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33895_33903 = cljs.core.seq.call(null,requires);
var chunk__33896_33904 = null;
var count__33897_33905 = (0);
var i__33898_33906 = (0);
while(true){
if((i__33898_33906 < count__33897_33905)){
var req_33907 = cljs.core._nth.call(null,chunk__33896_33904,i__33898_33906);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33907,prov);

var G__33908 = seq__33895_33903;
var G__33909 = chunk__33896_33904;
var G__33910 = count__33897_33905;
var G__33911 = (i__33898_33906 + (1));
seq__33895_33903 = G__33908;
chunk__33896_33904 = G__33909;
count__33897_33905 = G__33910;
i__33898_33906 = G__33911;
continue;
} else {
var temp__4657__auto___33912 = cljs.core.seq.call(null,seq__33895_33903);
if(temp__4657__auto___33912){
var seq__33895_33913__$1 = temp__4657__auto___33912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33895_33913__$1)){
var c__27615__auto___33914 = cljs.core.chunk_first.call(null,seq__33895_33913__$1);
var G__33915 = cljs.core.chunk_rest.call(null,seq__33895_33913__$1);
var G__33916 = c__27615__auto___33914;
var G__33917 = cljs.core.count.call(null,c__27615__auto___33914);
var G__33918 = (0);
seq__33895_33903 = G__33915;
chunk__33896_33904 = G__33916;
count__33897_33905 = G__33917;
i__33898_33906 = G__33918;
continue;
} else {
var req_33919 = cljs.core.first.call(null,seq__33895_33913__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33919,prov);

var G__33920 = cljs.core.next.call(null,seq__33895_33913__$1);
var G__33921 = null;
var G__33922 = (0);
var G__33923 = (0);
seq__33895_33903 = G__33920;
chunk__33896_33904 = G__33921;
count__33897_33905 = G__33922;
i__33898_33906 = G__33923;
continue;
}
} else {
}
}
break;
}

var G__33924 = seq__33891;
var G__33925 = chunk__33892;
var G__33926 = count__33893;
var G__33927 = (i__33894 + (1));
seq__33891 = G__33924;
chunk__33892 = G__33925;
count__33893 = G__33926;
i__33894 = G__33927;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33891);
if(temp__4657__auto__){
var seq__33891__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33891__$1)){
var c__27615__auto__ = cljs.core.chunk_first.call(null,seq__33891__$1);
var G__33928 = cljs.core.chunk_rest.call(null,seq__33891__$1);
var G__33929 = c__27615__auto__;
var G__33930 = cljs.core.count.call(null,c__27615__auto__);
var G__33931 = (0);
seq__33891 = G__33928;
chunk__33892 = G__33929;
count__33893 = G__33930;
i__33894 = G__33931;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33891__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33899_33932 = cljs.core.seq.call(null,requires);
var chunk__33900_33933 = null;
var count__33901_33934 = (0);
var i__33902_33935 = (0);
while(true){
if((i__33902_33935 < count__33901_33934)){
var req_33936 = cljs.core._nth.call(null,chunk__33900_33933,i__33902_33935);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33936,prov);

var G__33937 = seq__33899_33932;
var G__33938 = chunk__33900_33933;
var G__33939 = count__33901_33934;
var G__33940 = (i__33902_33935 + (1));
seq__33899_33932 = G__33937;
chunk__33900_33933 = G__33938;
count__33901_33934 = G__33939;
i__33902_33935 = G__33940;
continue;
} else {
var temp__4657__auto___33941__$1 = cljs.core.seq.call(null,seq__33899_33932);
if(temp__4657__auto___33941__$1){
var seq__33899_33942__$1 = temp__4657__auto___33941__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33899_33942__$1)){
var c__27615__auto___33943 = cljs.core.chunk_first.call(null,seq__33899_33942__$1);
var G__33944 = cljs.core.chunk_rest.call(null,seq__33899_33942__$1);
var G__33945 = c__27615__auto___33943;
var G__33946 = cljs.core.count.call(null,c__27615__auto___33943);
var G__33947 = (0);
seq__33899_33932 = G__33944;
chunk__33900_33933 = G__33945;
count__33901_33934 = G__33946;
i__33902_33935 = G__33947;
continue;
} else {
var req_33948 = cljs.core.first.call(null,seq__33899_33942__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33948,prov);

var G__33949 = cljs.core.next.call(null,seq__33899_33942__$1);
var G__33950 = null;
var G__33951 = (0);
var G__33952 = (0);
seq__33899_33932 = G__33949;
chunk__33900_33933 = G__33950;
count__33901_33934 = G__33951;
i__33902_33935 = G__33952;
continue;
}
} else {
}
}
break;
}

var G__33953 = cljs.core.next.call(null,seq__33891__$1);
var G__33954 = null;
var G__33955 = (0);
var G__33956 = (0);
seq__33891 = G__33953;
chunk__33892 = G__33954;
count__33893 = G__33955;
i__33894 = G__33956;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__33961_33965 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33962_33966 = null;
var count__33963_33967 = (0);
var i__33964_33968 = (0);
while(true){
if((i__33964_33968 < count__33963_33967)){
var ns_33969 = cljs.core._nth.call(null,chunk__33962_33966,i__33964_33968);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33969);

var G__33970 = seq__33961_33965;
var G__33971 = chunk__33962_33966;
var G__33972 = count__33963_33967;
var G__33973 = (i__33964_33968 + (1));
seq__33961_33965 = G__33970;
chunk__33962_33966 = G__33971;
count__33963_33967 = G__33972;
i__33964_33968 = G__33973;
continue;
} else {
var temp__4657__auto___33974 = cljs.core.seq.call(null,seq__33961_33965);
if(temp__4657__auto___33974){
var seq__33961_33975__$1 = temp__4657__auto___33974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33961_33975__$1)){
var c__27615__auto___33976 = cljs.core.chunk_first.call(null,seq__33961_33975__$1);
var G__33977 = cljs.core.chunk_rest.call(null,seq__33961_33975__$1);
var G__33978 = c__27615__auto___33976;
var G__33979 = cljs.core.count.call(null,c__27615__auto___33976);
var G__33980 = (0);
seq__33961_33965 = G__33977;
chunk__33962_33966 = G__33978;
count__33963_33967 = G__33979;
i__33964_33968 = G__33980;
continue;
} else {
var ns_33981 = cljs.core.first.call(null,seq__33961_33975__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33981);

var G__33982 = cljs.core.next.call(null,seq__33961_33975__$1);
var G__33983 = null;
var G__33984 = (0);
var G__33985 = (0);
seq__33961_33965 = G__33982;
chunk__33962_33966 = G__33983;
count__33963_33967 = G__33984;
i__33964_33968 = G__33985;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__26804__auto__ = goog.require__;
if(cljs.core.truth_(or__26804__auto__)){
return or__26804__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__33986__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33986 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33987__i = 0, G__33987__a = new Array(arguments.length -  0);
while (G__33987__i < G__33987__a.length) {G__33987__a[G__33987__i] = arguments[G__33987__i + 0]; ++G__33987__i;}
  args = new cljs.core.IndexedSeq(G__33987__a,0);
} 
return G__33986__delegate.call(this,args);};
G__33986.cljs$lang$maxFixedArity = 0;
G__33986.cljs$lang$applyTo = (function (arglist__33988){
var args = cljs.core.seq(arglist__33988);
return G__33986__delegate(args);
});
G__33986.cljs$core$IFn$_invoke$arity$variadic = G__33986__delegate;
return G__33986;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__33989_SHARP_,p2__33990_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str(p1__33989_SHARP_)].join('')),p2__33990_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__33991_SHARP_,p2__33992_SHARP_){
return goog.net.jsloader.load([cljs.core.str(p1__33991_SHARP_)].join(''),p2__33992_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__33994 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__33994.addCallback(((function (G__33994){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__33994))
);

G__33994.addErrback(((function (G__33994){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__33994))
);

return G__33994;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e33996){if((e33996 instanceof Error)){
var e = e33996;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33996;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33998){if((e33998 instanceof Error)){
var e = e33998;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33998;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33999 = cljs.core._EQ_;
var expr__34000 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33999.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34000))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__33999.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34000))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__33999.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34000))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__33999,expr__34000){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33999,expr__34000))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34002,callback){
var map__34005 = p__34002;
var map__34005__$1 = ((((!((map__34005 == null)))?((((map__34005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34005):map__34005);
var file_msg = map__34005__$1;
var request_url = cljs.core.get.call(null,map__34005__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return (function (){var or__26804__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__26804__auto__)){
return or__26804__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__34005,map__34005__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34005,map__34005__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29025__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto__){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto__){
return (function (state_34045){
var state_val_34046 = (state_34045[(1)]);
if((state_val_34046 === (7))){
var inst_34041 = (state_34045[(2)]);
var state_34045__$1 = state_34045;
var statearr_34047_34077 = state_34045__$1;
(statearr_34047_34077[(2)] = inst_34041);

(statearr_34047_34077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (1))){
var state_34045__$1 = state_34045;
var statearr_34048_34078 = state_34045__$1;
(statearr_34048_34078[(2)] = null);

(statearr_34048_34078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (4))){
var inst_34009 = (state_34045[(7)]);
var inst_34009__$1 = (state_34045[(2)]);
var state_34045__$1 = (function (){var statearr_34049 = state_34045;
(statearr_34049[(7)] = inst_34009__$1);

return statearr_34049;
})();
if(cljs.core.truth_(inst_34009__$1)){
var statearr_34050_34079 = state_34045__$1;
(statearr_34050_34079[(1)] = (5));

} else {
var statearr_34051_34080 = state_34045__$1;
(statearr_34051_34080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (15))){
var inst_34023 = (state_34045[(8)]);
var inst_34026 = (state_34045[(9)]);
var inst_34028 = inst_34026.call(null,inst_34023);
var state_34045__$1 = state_34045;
var statearr_34052_34081 = state_34045__$1;
(statearr_34052_34081[(2)] = inst_34028);

(statearr_34052_34081[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (13))){
var inst_34035 = (state_34045[(2)]);
var state_34045__$1 = state_34045;
var statearr_34053_34082 = state_34045__$1;
(statearr_34053_34082[(2)] = inst_34035);

(statearr_34053_34082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (6))){
var state_34045__$1 = state_34045;
var statearr_34054_34083 = state_34045__$1;
(statearr_34054_34083[(2)] = null);

(statearr_34054_34083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (17))){
var inst_34032 = (state_34045[(2)]);
var state_34045__$1 = state_34045;
var statearr_34055_34084 = state_34045__$1;
(statearr_34055_34084[(2)] = inst_34032);

(statearr_34055_34084[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (3))){
var inst_34043 = (state_34045[(2)]);
var state_34045__$1 = state_34045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34045__$1,inst_34043);
} else {
if((state_val_34046 === (12))){
var state_34045__$1 = state_34045;
var statearr_34056_34085 = state_34045__$1;
(statearr_34056_34085[(2)] = null);

(statearr_34056_34085[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (2))){
var state_34045__$1 = state_34045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34045__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34046 === (11))){
var inst_34014 = (state_34045[(10)]);
var inst_34021 = figwheel.client.file_reloading.blocking_load.call(null,inst_34014);
var state_34045__$1 = state_34045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34045__$1,(14),inst_34021);
} else {
if((state_val_34046 === (9))){
var inst_34014 = (state_34045[(10)]);
var state_34045__$1 = state_34045;
if(cljs.core.truth_(inst_34014)){
var statearr_34057_34086 = state_34045__$1;
(statearr_34057_34086[(1)] = (11));

} else {
var statearr_34058_34087 = state_34045__$1;
(statearr_34058_34087[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (5))){
var inst_34015 = (state_34045[(11)]);
var inst_34009 = (state_34045[(7)]);
var inst_34014 = cljs.core.nth.call(null,inst_34009,(0),null);
var inst_34015__$1 = cljs.core.nth.call(null,inst_34009,(1),null);
var state_34045__$1 = (function (){var statearr_34059 = state_34045;
(statearr_34059[(11)] = inst_34015__$1);

(statearr_34059[(10)] = inst_34014);

return statearr_34059;
})();
if(cljs.core.truth_(inst_34015__$1)){
var statearr_34060_34088 = state_34045__$1;
(statearr_34060_34088[(1)] = (8));

} else {
var statearr_34061_34089 = state_34045__$1;
(statearr_34061_34089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (14))){
var inst_34014 = (state_34045[(10)]);
var inst_34026 = (state_34045[(9)]);
var inst_34023 = (state_34045[(2)]);
var inst_34024 = console.log("Loading!",inst_34014);
var inst_34025 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34026__$1 = cljs.core.get.call(null,inst_34025,inst_34014);
var state_34045__$1 = (function (){var statearr_34062 = state_34045;
(statearr_34062[(12)] = inst_34024);

(statearr_34062[(8)] = inst_34023);

(statearr_34062[(9)] = inst_34026__$1);

return statearr_34062;
})();
if(cljs.core.truth_(inst_34026__$1)){
var statearr_34063_34090 = state_34045__$1;
(statearr_34063_34090[(1)] = (15));

} else {
var statearr_34064_34091 = state_34045__$1;
(statearr_34064_34091[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (16))){
var inst_34023 = (state_34045[(8)]);
var inst_34030 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34023);
var state_34045__$1 = state_34045;
var statearr_34065_34092 = state_34045__$1;
(statearr_34065_34092[(2)] = inst_34030);

(statearr_34065_34092[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (10))){
var inst_34037 = (state_34045[(2)]);
var state_34045__$1 = (function (){var statearr_34066 = state_34045;
(statearr_34066[(13)] = inst_34037);

return statearr_34066;
})();
var statearr_34067_34093 = state_34045__$1;
(statearr_34067_34093[(2)] = null);

(statearr_34067_34093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34046 === (8))){
var inst_34015 = (state_34045[(11)]);
var inst_34017 = console.log("Evaling!",inst_34015);
var inst_34018 = eval(inst_34015);
var state_34045__$1 = (function (){var statearr_34068 = state_34045;
(statearr_34068[(14)] = inst_34017);

return statearr_34068;
})();
var statearr_34069_34094 = state_34045__$1;
(statearr_34069_34094[(2)] = inst_34018);

(statearr_34069_34094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29025__auto__))
;
return ((function (switch__28913__auto__,c__29025__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28914__auto__ = null;
var figwheel$client$file_reloading$state_machine__28914__auto____0 = (function (){
var statearr_34073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34073[(0)] = figwheel$client$file_reloading$state_machine__28914__auto__);

(statearr_34073[(1)] = (1));

return statearr_34073;
});
var figwheel$client$file_reloading$state_machine__28914__auto____1 = (function (state_34045){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_34045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e34074){if((e34074 instanceof Object)){
var ex__28917__auto__ = e34074;
var statearr_34075_34095 = state_34045;
(statearr_34075_34095[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34096 = state_34045;
state_34045 = G__34096;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28914__auto__ = function(state_34045){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28914__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28914__auto____1.call(this,state_34045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28914__auto____0;
figwheel$client$file_reloading$state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28914__auto____1;
return figwheel$client$file_reloading$state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto__))
})();
var state__29027__auto__ = (function (){var statearr_34076 = f__29026__auto__.call(null);
(statearr_34076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto__);

return statearr_34076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto__))
);

return c__29025__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var args34097 = [];
var len__27879__auto___34100 = arguments.length;
var i__27880__auto___34101 = (0);
while(true){
if((i__27880__auto___34101 < len__27879__auto___34100)){
args34097.push((arguments[i__27880__auto___34101]));

var G__34102 = (i__27880__auto___34101 + (1));
i__27880__auto___34101 = G__34102;
continue;
} else {
}
break;
}

var G__34099 = args34097.length;
switch (G__34099) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34097.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34104,callback){
var map__34107 = p__34104;
var map__34107__$1 = ((((!((map__34107 == null)))?((((map__34107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34107):map__34107);
var file_msg = map__34107__$1;
var namespace = cljs.core.get.call(null,map__34107__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34107,map__34107__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34107,map__34107__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34109){
var map__34112 = p__34109;
var map__34112__$1 = ((((!((map__34112 == null)))?((((map__34112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34112):map__34112);
var file_msg = map__34112__$1;
var namespace = cljs.core.get.call(null,map__34112__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34114){
var map__34117 = p__34114;
var map__34117__$1 = ((((!((map__34117 == null)))?((((map__34117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34117):map__34117);
var file_msg = map__34117__$1;
var namespace = cljs.core.get.call(null,map__34117__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__26792__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__26792__auto__){
var or__26804__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26804__auto__)){
return or__26804__auto__;
} else {
var or__26804__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__26804__auto____$1)){
return or__26804__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__26792__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34119,callback){
var map__34122 = p__34119;
var map__34122__$1 = ((((!((map__34122 == null)))?((((map__34122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34122):map__34122);
var file_msg = map__34122__$1;
var request_url = cljs.core.get.call(null,map__34122__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34122__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29025__auto___34226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto___34226,out){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto___34226,out){
return (function (state_34208){
var state_val_34209 = (state_34208[(1)]);
if((state_val_34209 === (1))){
var inst_34182 = cljs.core.seq.call(null,files);
var inst_34183 = cljs.core.first.call(null,inst_34182);
var inst_34184 = cljs.core.next.call(null,inst_34182);
var inst_34185 = files;
var state_34208__$1 = (function (){var statearr_34210 = state_34208;
(statearr_34210[(7)] = inst_34183);

(statearr_34210[(8)] = inst_34184);

(statearr_34210[(9)] = inst_34185);

return statearr_34210;
})();
var statearr_34211_34227 = state_34208__$1;
(statearr_34211_34227[(2)] = null);

(statearr_34211_34227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (2))){
var inst_34185 = (state_34208[(9)]);
var inst_34191 = (state_34208[(10)]);
var inst_34190 = cljs.core.seq.call(null,inst_34185);
var inst_34191__$1 = cljs.core.first.call(null,inst_34190);
var inst_34192 = cljs.core.next.call(null,inst_34190);
var inst_34193 = (inst_34191__$1 == null);
var inst_34194 = cljs.core.not.call(null,inst_34193);
var state_34208__$1 = (function (){var statearr_34212 = state_34208;
(statearr_34212[(11)] = inst_34192);

(statearr_34212[(10)] = inst_34191__$1);

return statearr_34212;
})();
if(inst_34194){
var statearr_34213_34228 = state_34208__$1;
(statearr_34213_34228[(1)] = (4));

} else {
var statearr_34214_34229 = state_34208__$1;
(statearr_34214_34229[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (3))){
var inst_34206 = (state_34208[(2)]);
var state_34208__$1 = state_34208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34208__$1,inst_34206);
} else {
if((state_val_34209 === (4))){
var inst_34191 = (state_34208[(10)]);
var inst_34196 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34191);
var state_34208__$1 = state_34208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34208__$1,(7),inst_34196);
} else {
if((state_val_34209 === (5))){
var inst_34202 = cljs.core.async.close_BANG_.call(null,out);
var state_34208__$1 = state_34208;
var statearr_34215_34230 = state_34208__$1;
(statearr_34215_34230[(2)] = inst_34202);

(statearr_34215_34230[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (6))){
var inst_34204 = (state_34208[(2)]);
var state_34208__$1 = state_34208;
var statearr_34216_34231 = state_34208__$1;
(statearr_34216_34231[(2)] = inst_34204);

(statearr_34216_34231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34209 === (7))){
var inst_34192 = (state_34208[(11)]);
var inst_34198 = (state_34208[(2)]);
var inst_34199 = cljs.core.async.put_BANG_.call(null,out,inst_34198);
var inst_34185 = inst_34192;
var state_34208__$1 = (function (){var statearr_34217 = state_34208;
(statearr_34217[(12)] = inst_34199);

(statearr_34217[(9)] = inst_34185);

return statearr_34217;
})();
var statearr_34218_34232 = state_34208__$1;
(statearr_34218_34232[(2)] = null);

(statearr_34218_34232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__29025__auto___34226,out))
;
return ((function (switch__28913__auto__,c__29025__auto___34226,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28914__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28914__auto____0 = (function (){
var statearr_34222 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34222[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28914__auto__);

(statearr_34222[(1)] = (1));

return statearr_34222;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28914__auto____1 = (function (state_34208){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_34208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e34223){if((e34223 instanceof Object)){
var ex__28917__auto__ = e34223;
var statearr_34224_34233 = state_34208;
(statearr_34224_34233[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34234 = state_34208;
state_34208 = G__34234;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28914__auto__ = function(state_34208){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28914__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28914__auto____1.call(this,state_34208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28914__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28914__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto___34226,out))
})();
var state__29027__auto__ = (function (){var statearr_34225 = f__29026__auto__.call(null);
(statearr_34225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto___34226);

return statearr_34225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto___34226,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34235,opts){
var map__34239 = p__34235;
var map__34239__$1 = ((((!((map__34239 == null)))?((((map__34239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34239):map__34239);
var eval_body__$1 = cljs.core.get.call(null,map__34239__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34239__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__26792__auto__ = eval_body__$1;
if(cljs.core.truth_(and__26792__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__26792__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34241){var e = e34241;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34242_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34242_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34251){
var vec__34252 = p__34251;
var k = cljs.core.nth.call(null,vec__34252,(0),null);
var v = cljs.core.nth.call(null,vec__34252,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34255){
var vec__34256 = p__34255;
var k = cljs.core.nth.call(null,vec__34256,(0),null);
var v = cljs.core.nth.call(null,vec__34256,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34262,p__34263){
var map__34510 = p__34262;
var map__34510__$1 = ((((!((map__34510 == null)))?((((map__34510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34510):map__34510);
var opts = map__34510__$1;
var before_jsload = cljs.core.get.call(null,map__34510__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34510__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34510__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34511 = p__34263;
var map__34511__$1 = ((((!((map__34511 == null)))?((((map__34511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34511):map__34511);
var msg = map__34511__$1;
var files = cljs.core.get.call(null,map__34511__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34511__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34511__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29025__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto__,map__34510,map__34510__$1,opts,before_jsload,on_jsload,reload_dependents,map__34511,map__34511__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto__,map__34510,map__34510__$1,opts,before_jsload,on_jsload,reload_dependents,map__34511,map__34511__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34664){
var state_val_34665 = (state_34664[(1)]);
if((state_val_34665 === (7))){
var inst_34527 = (state_34664[(7)]);
var inst_34525 = (state_34664[(8)]);
var inst_34526 = (state_34664[(9)]);
var inst_34528 = (state_34664[(10)]);
var inst_34533 = cljs.core._nth.call(null,inst_34526,inst_34528);
var inst_34534 = figwheel.client.file_reloading.eval_body.call(null,inst_34533,opts);
var inst_34535 = (inst_34528 + (1));
var tmp34666 = inst_34527;
var tmp34667 = inst_34525;
var tmp34668 = inst_34526;
var inst_34525__$1 = tmp34667;
var inst_34526__$1 = tmp34668;
var inst_34527__$1 = tmp34666;
var inst_34528__$1 = inst_34535;
var state_34664__$1 = (function (){var statearr_34669 = state_34664;
(statearr_34669[(11)] = inst_34534);

(statearr_34669[(7)] = inst_34527__$1);

(statearr_34669[(8)] = inst_34525__$1);

(statearr_34669[(9)] = inst_34526__$1);

(statearr_34669[(10)] = inst_34528__$1);

return statearr_34669;
})();
var statearr_34670_34756 = state_34664__$1;
(statearr_34670_34756[(2)] = null);

(statearr_34670_34756[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (20))){
var inst_34568 = (state_34664[(12)]);
var inst_34576 = figwheel.client.file_reloading.sort_files.call(null,inst_34568);
var state_34664__$1 = state_34664;
var statearr_34671_34757 = state_34664__$1;
(statearr_34671_34757[(2)] = inst_34576);

(statearr_34671_34757[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (27))){
var state_34664__$1 = state_34664;
var statearr_34672_34758 = state_34664__$1;
(statearr_34672_34758[(2)] = null);

(statearr_34672_34758[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (1))){
var inst_34517 = (state_34664[(13)]);
var inst_34514 = before_jsload.call(null,files);
var inst_34515 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34516 = (function (){return ((function (inst_34517,inst_34514,inst_34515,state_val_34665,c__29025__auto__,map__34510,map__34510__$1,opts,before_jsload,on_jsload,reload_dependents,map__34511,map__34511__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34259_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34259_SHARP_);
});
;})(inst_34517,inst_34514,inst_34515,state_val_34665,c__29025__auto__,map__34510,map__34510__$1,opts,before_jsload,on_jsload,reload_dependents,map__34511,map__34511__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34517__$1 = cljs.core.filter.call(null,inst_34516,files);
var inst_34518 = cljs.core.not_empty.call(null,inst_34517__$1);
var state_34664__$1 = (function (){var statearr_34673 = state_34664;
(statearr_34673[(14)] = inst_34515);

(statearr_34673[(15)] = inst_34514);

(statearr_34673[(13)] = inst_34517__$1);

return statearr_34673;
})();
if(cljs.core.truth_(inst_34518)){
var statearr_34674_34759 = state_34664__$1;
(statearr_34674_34759[(1)] = (2));

} else {
var statearr_34675_34760 = state_34664__$1;
(statearr_34675_34760[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (24))){
var state_34664__$1 = state_34664;
var statearr_34676_34761 = state_34664__$1;
(statearr_34676_34761[(2)] = null);

(statearr_34676_34761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (39))){
var inst_34618 = (state_34664[(16)]);
var state_34664__$1 = state_34664;
var statearr_34677_34762 = state_34664__$1;
(statearr_34677_34762[(2)] = inst_34618);

(statearr_34677_34762[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (46))){
var inst_34659 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34678_34763 = state_34664__$1;
(statearr_34678_34763[(2)] = inst_34659);

(statearr_34678_34763[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (4))){
var inst_34562 = (state_34664[(2)]);
var inst_34563 = cljs.core.List.EMPTY;
var inst_34564 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34563);
var inst_34565 = (function (){return ((function (inst_34562,inst_34563,inst_34564,state_val_34665,c__29025__auto__,map__34510,map__34510__$1,opts,before_jsload,on_jsload,reload_dependents,map__34511,map__34511__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34260_SHARP_){
var and__26792__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34260_SHARP_);
if(cljs.core.truth_(and__26792__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34260_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34260_SHARP_)));
} else {
return and__26792__auto__;
}
});
;})(inst_34562,inst_34563,inst_34564,state_val_34665,c__29025__auto__,map__34510,map__34510__$1,opts,before_jsload,on_jsload,reload_dependents,map__34511,map__34511__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34566 = cljs.core.filter.call(null,inst_34565,files);
var inst_34567 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34568 = cljs.core.concat.call(null,inst_34566,inst_34567);
var state_34664__$1 = (function (){var statearr_34679 = state_34664;
(statearr_34679[(17)] = inst_34564);

(statearr_34679[(12)] = inst_34568);

(statearr_34679[(18)] = inst_34562);

return statearr_34679;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34680_34764 = state_34664__$1;
(statearr_34680_34764[(1)] = (16));

} else {
var statearr_34681_34765 = state_34664__$1;
(statearr_34681_34765[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (15))){
var inst_34552 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34682_34766 = state_34664__$1;
(statearr_34682_34766[(2)] = inst_34552);

(statearr_34682_34766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (21))){
var inst_34578 = (state_34664[(19)]);
var inst_34578__$1 = (state_34664[(2)]);
var inst_34579 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34578__$1);
var state_34664__$1 = (function (){var statearr_34683 = state_34664;
(statearr_34683[(19)] = inst_34578__$1);

return statearr_34683;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34664__$1,(22),inst_34579);
} else {
if((state_val_34665 === (31))){
var inst_34662 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34664__$1,inst_34662);
} else {
if((state_val_34665 === (32))){
var inst_34618 = (state_34664[(16)]);
var inst_34623 = inst_34618.cljs$lang$protocol_mask$partition0$;
var inst_34624 = (inst_34623 & (64));
var inst_34625 = inst_34618.cljs$core$ISeq$;
var inst_34626 = (inst_34624) || (inst_34625);
var state_34664__$1 = state_34664;
if(cljs.core.truth_(inst_34626)){
var statearr_34684_34767 = state_34664__$1;
(statearr_34684_34767[(1)] = (35));

} else {
var statearr_34685_34768 = state_34664__$1;
(statearr_34685_34768[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (40))){
var inst_34639 = (state_34664[(20)]);
var inst_34638 = (state_34664[(2)]);
var inst_34639__$1 = cljs.core.get.call(null,inst_34638,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34640 = cljs.core.get.call(null,inst_34638,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34641 = cljs.core.not_empty.call(null,inst_34639__$1);
var state_34664__$1 = (function (){var statearr_34686 = state_34664;
(statearr_34686[(20)] = inst_34639__$1);

(statearr_34686[(21)] = inst_34640);

return statearr_34686;
})();
if(cljs.core.truth_(inst_34641)){
var statearr_34687_34769 = state_34664__$1;
(statearr_34687_34769[(1)] = (41));

} else {
var statearr_34688_34770 = state_34664__$1;
(statearr_34688_34770[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (33))){
var state_34664__$1 = state_34664;
var statearr_34689_34771 = state_34664__$1;
(statearr_34689_34771[(2)] = false);

(statearr_34689_34771[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (13))){
var inst_34538 = (state_34664[(22)]);
var inst_34542 = cljs.core.chunk_first.call(null,inst_34538);
var inst_34543 = cljs.core.chunk_rest.call(null,inst_34538);
var inst_34544 = cljs.core.count.call(null,inst_34542);
var inst_34525 = inst_34543;
var inst_34526 = inst_34542;
var inst_34527 = inst_34544;
var inst_34528 = (0);
var state_34664__$1 = (function (){var statearr_34690 = state_34664;
(statearr_34690[(7)] = inst_34527);

(statearr_34690[(8)] = inst_34525);

(statearr_34690[(9)] = inst_34526);

(statearr_34690[(10)] = inst_34528);

return statearr_34690;
})();
var statearr_34691_34772 = state_34664__$1;
(statearr_34691_34772[(2)] = null);

(statearr_34691_34772[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (22))){
var inst_34581 = (state_34664[(23)]);
var inst_34586 = (state_34664[(24)]);
var inst_34578 = (state_34664[(19)]);
var inst_34582 = (state_34664[(25)]);
var inst_34581__$1 = (state_34664[(2)]);
var inst_34582__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34581__$1);
var inst_34583 = (function (){var all_files = inst_34578;
var res_SINGLEQUOTE_ = inst_34581__$1;
var res = inst_34582__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34581,inst_34586,inst_34578,inst_34582,inst_34581__$1,inst_34582__$1,state_val_34665,c__29025__auto__,map__34510,map__34510__$1,opts,before_jsload,on_jsload,reload_dependents,map__34511,map__34511__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34261_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34261_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34581,inst_34586,inst_34578,inst_34582,inst_34581__$1,inst_34582__$1,state_val_34665,c__29025__auto__,map__34510,map__34510__$1,opts,before_jsload,on_jsload,reload_dependents,map__34511,map__34511__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34584 = cljs.core.filter.call(null,inst_34583,inst_34581__$1);
var inst_34585 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34586__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34585);
var inst_34587 = cljs.core.not_empty.call(null,inst_34586__$1);
var state_34664__$1 = (function (){var statearr_34692 = state_34664;
(statearr_34692[(26)] = inst_34584);

(statearr_34692[(23)] = inst_34581__$1);

(statearr_34692[(24)] = inst_34586__$1);

(statearr_34692[(25)] = inst_34582__$1);

return statearr_34692;
})();
if(cljs.core.truth_(inst_34587)){
var statearr_34693_34773 = state_34664__$1;
(statearr_34693_34773[(1)] = (23));

} else {
var statearr_34694_34774 = state_34664__$1;
(statearr_34694_34774[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (36))){
var state_34664__$1 = state_34664;
var statearr_34695_34775 = state_34664__$1;
(statearr_34695_34775[(2)] = false);

(statearr_34695_34775[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (41))){
var inst_34639 = (state_34664[(20)]);
var inst_34643 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34644 = cljs.core.map.call(null,inst_34643,inst_34639);
var inst_34645 = cljs.core.pr_str.call(null,inst_34644);
var inst_34646 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34645)].join('');
var inst_34647 = figwheel.client.utils.log.call(null,inst_34646);
var state_34664__$1 = state_34664;
var statearr_34696_34776 = state_34664__$1;
(statearr_34696_34776[(2)] = inst_34647);

(statearr_34696_34776[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (43))){
var inst_34640 = (state_34664[(21)]);
var inst_34650 = (state_34664[(2)]);
var inst_34651 = cljs.core.not_empty.call(null,inst_34640);
var state_34664__$1 = (function (){var statearr_34697 = state_34664;
(statearr_34697[(27)] = inst_34650);

return statearr_34697;
})();
if(cljs.core.truth_(inst_34651)){
var statearr_34698_34777 = state_34664__$1;
(statearr_34698_34777[(1)] = (44));

} else {
var statearr_34699_34778 = state_34664__$1;
(statearr_34699_34778[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (29))){
var inst_34584 = (state_34664[(26)]);
var inst_34581 = (state_34664[(23)]);
var inst_34586 = (state_34664[(24)]);
var inst_34578 = (state_34664[(19)]);
var inst_34582 = (state_34664[(25)]);
var inst_34618 = (state_34664[(16)]);
var inst_34614 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34617 = (function (){var all_files = inst_34578;
var res_SINGLEQUOTE_ = inst_34581;
var res = inst_34582;
var files_not_loaded = inst_34584;
var dependencies_that_loaded = inst_34586;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34584,inst_34581,inst_34586,inst_34578,inst_34582,inst_34618,inst_34614,state_val_34665,c__29025__auto__,map__34510,map__34510__$1,opts,before_jsload,on_jsload,reload_dependents,map__34511,map__34511__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34616){
var map__34700 = p__34616;
var map__34700__$1 = ((((!((map__34700 == null)))?((((map__34700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34700):map__34700);
var namespace = cljs.core.get.call(null,map__34700__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34584,inst_34581,inst_34586,inst_34578,inst_34582,inst_34618,inst_34614,state_val_34665,c__29025__auto__,map__34510,map__34510__$1,opts,before_jsload,on_jsload,reload_dependents,map__34511,map__34511__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34618__$1 = cljs.core.group_by.call(null,inst_34617,inst_34584);
var inst_34620 = (inst_34618__$1 == null);
var inst_34621 = cljs.core.not.call(null,inst_34620);
var state_34664__$1 = (function (){var statearr_34702 = state_34664;
(statearr_34702[(28)] = inst_34614);

(statearr_34702[(16)] = inst_34618__$1);

return statearr_34702;
})();
if(inst_34621){
var statearr_34703_34779 = state_34664__$1;
(statearr_34703_34779[(1)] = (32));

} else {
var statearr_34704_34780 = state_34664__$1;
(statearr_34704_34780[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (44))){
var inst_34640 = (state_34664[(21)]);
var inst_34653 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34640);
var inst_34654 = cljs.core.pr_str.call(null,inst_34653);
var inst_34655 = [cljs.core.str("not required: "),cljs.core.str(inst_34654)].join('');
var inst_34656 = figwheel.client.utils.log.call(null,inst_34655);
var state_34664__$1 = state_34664;
var statearr_34705_34781 = state_34664__$1;
(statearr_34705_34781[(2)] = inst_34656);

(statearr_34705_34781[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (6))){
var inst_34559 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34706_34782 = state_34664__$1;
(statearr_34706_34782[(2)] = inst_34559);

(statearr_34706_34782[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (28))){
var inst_34584 = (state_34664[(26)]);
var inst_34611 = (state_34664[(2)]);
var inst_34612 = cljs.core.not_empty.call(null,inst_34584);
var state_34664__$1 = (function (){var statearr_34707 = state_34664;
(statearr_34707[(29)] = inst_34611);

return statearr_34707;
})();
if(cljs.core.truth_(inst_34612)){
var statearr_34708_34783 = state_34664__$1;
(statearr_34708_34783[(1)] = (29));

} else {
var statearr_34709_34784 = state_34664__$1;
(statearr_34709_34784[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (25))){
var inst_34582 = (state_34664[(25)]);
var inst_34598 = (state_34664[(2)]);
var inst_34599 = cljs.core.not_empty.call(null,inst_34582);
var state_34664__$1 = (function (){var statearr_34710 = state_34664;
(statearr_34710[(30)] = inst_34598);

return statearr_34710;
})();
if(cljs.core.truth_(inst_34599)){
var statearr_34711_34785 = state_34664__$1;
(statearr_34711_34785[(1)] = (26));

} else {
var statearr_34712_34786 = state_34664__$1;
(statearr_34712_34786[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (34))){
var inst_34633 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
if(cljs.core.truth_(inst_34633)){
var statearr_34713_34787 = state_34664__$1;
(statearr_34713_34787[(1)] = (38));

} else {
var statearr_34714_34788 = state_34664__$1;
(statearr_34714_34788[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (17))){
var state_34664__$1 = state_34664;
var statearr_34715_34789 = state_34664__$1;
(statearr_34715_34789[(2)] = recompile_dependents);

(statearr_34715_34789[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (3))){
var state_34664__$1 = state_34664;
var statearr_34716_34790 = state_34664__$1;
(statearr_34716_34790[(2)] = null);

(statearr_34716_34790[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (12))){
var inst_34555 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34717_34791 = state_34664__$1;
(statearr_34717_34791[(2)] = inst_34555);

(statearr_34717_34791[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (2))){
var inst_34517 = (state_34664[(13)]);
var inst_34524 = cljs.core.seq.call(null,inst_34517);
var inst_34525 = inst_34524;
var inst_34526 = null;
var inst_34527 = (0);
var inst_34528 = (0);
var state_34664__$1 = (function (){var statearr_34718 = state_34664;
(statearr_34718[(7)] = inst_34527);

(statearr_34718[(8)] = inst_34525);

(statearr_34718[(9)] = inst_34526);

(statearr_34718[(10)] = inst_34528);

return statearr_34718;
})();
var statearr_34719_34792 = state_34664__$1;
(statearr_34719_34792[(2)] = null);

(statearr_34719_34792[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (23))){
var inst_34584 = (state_34664[(26)]);
var inst_34581 = (state_34664[(23)]);
var inst_34586 = (state_34664[(24)]);
var inst_34578 = (state_34664[(19)]);
var inst_34582 = (state_34664[(25)]);
var inst_34589 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34591 = (function (){var all_files = inst_34578;
var res_SINGLEQUOTE_ = inst_34581;
var res = inst_34582;
var files_not_loaded = inst_34584;
var dependencies_that_loaded = inst_34586;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34584,inst_34581,inst_34586,inst_34578,inst_34582,inst_34589,state_val_34665,c__29025__auto__,map__34510,map__34510__$1,opts,before_jsload,on_jsload,reload_dependents,map__34511,map__34511__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34590){
var map__34720 = p__34590;
var map__34720__$1 = ((((!((map__34720 == null)))?((((map__34720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34720):map__34720);
var request_url = cljs.core.get.call(null,map__34720__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34584,inst_34581,inst_34586,inst_34578,inst_34582,inst_34589,state_val_34665,c__29025__auto__,map__34510,map__34510__$1,opts,before_jsload,on_jsload,reload_dependents,map__34511,map__34511__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34592 = cljs.core.reverse.call(null,inst_34586);
var inst_34593 = cljs.core.map.call(null,inst_34591,inst_34592);
var inst_34594 = cljs.core.pr_str.call(null,inst_34593);
var inst_34595 = figwheel.client.utils.log.call(null,inst_34594);
var state_34664__$1 = (function (){var statearr_34722 = state_34664;
(statearr_34722[(31)] = inst_34589);

return statearr_34722;
})();
var statearr_34723_34793 = state_34664__$1;
(statearr_34723_34793[(2)] = inst_34595);

(statearr_34723_34793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (35))){
var state_34664__$1 = state_34664;
var statearr_34724_34794 = state_34664__$1;
(statearr_34724_34794[(2)] = true);

(statearr_34724_34794[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (19))){
var inst_34568 = (state_34664[(12)]);
var inst_34574 = figwheel.client.file_reloading.expand_files.call(null,inst_34568);
var state_34664__$1 = state_34664;
var statearr_34725_34795 = state_34664__$1;
(statearr_34725_34795[(2)] = inst_34574);

(statearr_34725_34795[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (11))){
var state_34664__$1 = state_34664;
var statearr_34726_34796 = state_34664__$1;
(statearr_34726_34796[(2)] = null);

(statearr_34726_34796[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (9))){
var inst_34557 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34727_34797 = state_34664__$1;
(statearr_34727_34797[(2)] = inst_34557);

(statearr_34727_34797[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (5))){
var inst_34527 = (state_34664[(7)]);
var inst_34528 = (state_34664[(10)]);
var inst_34530 = (inst_34528 < inst_34527);
var inst_34531 = inst_34530;
var state_34664__$1 = state_34664;
if(cljs.core.truth_(inst_34531)){
var statearr_34728_34798 = state_34664__$1;
(statearr_34728_34798[(1)] = (7));

} else {
var statearr_34729_34799 = state_34664__$1;
(statearr_34729_34799[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (14))){
var inst_34538 = (state_34664[(22)]);
var inst_34547 = cljs.core.first.call(null,inst_34538);
var inst_34548 = figwheel.client.file_reloading.eval_body.call(null,inst_34547,opts);
var inst_34549 = cljs.core.next.call(null,inst_34538);
var inst_34525 = inst_34549;
var inst_34526 = null;
var inst_34527 = (0);
var inst_34528 = (0);
var state_34664__$1 = (function (){var statearr_34730 = state_34664;
(statearr_34730[(7)] = inst_34527);

(statearr_34730[(8)] = inst_34525);

(statearr_34730[(9)] = inst_34526);

(statearr_34730[(10)] = inst_34528);

(statearr_34730[(32)] = inst_34548);

return statearr_34730;
})();
var statearr_34731_34800 = state_34664__$1;
(statearr_34731_34800[(2)] = null);

(statearr_34731_34800[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (45))){
var state_34664__$1 = state_34664;
var statearr_34732_34801 = state_34664__$1;
(statearr_34732_34801[(2)] = null);

(statearr_34732_34801[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (26))){
var inst_34584 = (state_34664[(26)]);
var inst_34581 = (state_34664[(23)]);
var inst_34586 = (state_34664[(24)]);
var inst_34578 = (state_34664[(19)]);
var inst_34582 = (state_34664[(25)]);
var inst_34601 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34603 = (function (){var all_files = inst_34578;
var res_SINGLEQUOTE_ = inst_34581;
var res = inst_34582;
var files_not_loaded = inst_34584;
var dependencies_that_loaded = inst_34586;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34584,inst_34581,inst_34586,inst_34578,inst_34582,inst_34601,state_val_34665,c__29025__auto__,map__34510,map__34510__$1,opts,before_jsload,on_jsload,reload_dependents,map__34511,map__34511__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34602){
var map__34733 = p__34602;
var map__34733__$1 = ((((!((map__34733 == null)))?((((map__34733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34733):map__34733);
var namespace = cljs.core.get.call(null,map__34733__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34733__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34584,inst_34581,inst_34586,inst_34578,inst_34582,inst_34601,state_val_34665,c__29025__auto__,map__34510,map__34510__$1,opts,before_jsload,on_jsload,reload_dependents,map__34511,map__34511__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34604 = cljs.core.map.call(null,inst_34603,inst_34582);
var inst_34605 = cljs.core.pr_str.call(null,inst_34604);
var inst_34606 = figwheel.client.utils.log.call(null,inst_34605);
var inst_34607 = (function (){var all_files = inst_34578;
var res_SINGLEQUOTE_ = inst_34581;
var res = inst_34582;
var files_not_loaded = inst_34584;
var dependencies_that_loaded = inst_34586;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34584,inst_34581,inst_34586,inst_34578,inst_34582,inst_34601,inst_34603,inst_34604,inst_34605,inst_34606,state_val_34665,c__29025__auto__,map__34510,map__34510__$1,opts,before_jsload,on_jsload,reload_dependents,map__34511,map__34511__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34584,inst_34581,inst_34586,inst_34578,inst_34582,inst_34601,inst_34603,inst_34604,inst_34605,inst_34606,state_val_34665,c__29025__auto__,map__34510,map__34510__$1,opts,before_jsload,on_jsload,reload_dependents,map__34511,map__34511__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34608 = setTimeout(inst_34607,(10));
var state_34664__$1 = (function (){var statearr_34735 = state_34664;
(statearr_34735[(33)] = inst_34601);

(statearr_34735[(34)] = inst_34606);

return statearr_34735;
})();
var statearr_34736_34802 = state_34664__$1;
(statearr_34736_34802[(2)] = inst_34608);

(statearr_34736_34802[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (16))){
var state_34664__$1 = state_34664;
var statearr_34737_34803 = state_34664__$1;
(statearr_34737_34803[(2)] = reload_dependents);

(statearr_34737_34803[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (38))){
var inst_34618 = (state_34664[(16)]);
var inst_34635 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34618);
var state_34664__$1 = state_34664;
var statearr_34738_34804 = state_34664__$1;
(statearr_34738_34804[(2)] = inst_34635);

(statearr_34738_34804[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (30))){
var state_34664__$1 = state_34664;
var statearr_34739_34805 = state_34664__$1;
(statearr_34739_34805[(2)] = null);

(statearr_34739_34805[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (10))){
var inst_34538 = (state_34664[(22)]);
var inst_34540 = cljs.core.chunked_seq_QMARK_.call(null,inst_34538);
var state_34664__$1 = state_34664;
if(inst_34540){
var statearr_34740_34806 = state_34664__$1;
(statearr_34740_34806[(1)] = (13));

} else {
var statearr_34741_34807 = state_34664__$1;
(statearr_34741_34807[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (18))){
var inst_34572 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
if(cljs.core.truth_(inst_34572)){
var statearr_34742_34808 = state_34664__$1;
(statearr_34742_34808[(1)] = (19));

} else {
var statearr_34743_34809 = state_34664__$1;
(statearr_34743_34809[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (42))){
var state_34664__$1 = state_34664;
var statearr_34744_34810 = state_34664__$1;
(statearr_34744_34810[(2)] = null);

(statearr_34744_34810[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (37))){
var inst_34630 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34745_34811 = state_34664__$1;
(statearr_34745_34811[(2)] = inst_34630);

(statearr_34745_34811[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (8))){
var inst_34538 = (state_34664[(22)]);
var inst_34525 = (state_34664[(8)]);
var inst_34538__$1 = cljs.core.seq.call(null,inst_34525);
var state_34664__$1 = (function (){var statearr_34746 = state_34664;
(statearr_34746[(22)] = inst_34538__$1);

return statearr_34746;
})();
if(inst_34538__$1){
var statearr_34747_34812 = state_34664__$1;
(statearr_34747_34812[(1)] = (10));

} else {
var statearr_34748_34813 = state_34664__$1;
(statearr_34748_34813[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29025__auto__,map__34510,map__34510__$1,opts,before_jsload,on_jsload,reload_dependents,map__34511,map__34511__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28913__auto__,c__29025__auto__,map__34510,map__34510__$1,opts,before_jsload,on_jsload,reload_dependents,map__34511,map__34511__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28914__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28914__auto____0 = (function (){
var statearr_34752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34752[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28914__auto__);

(statearr_34752[(1)] = (1));

return statearr_34752;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28914__auto____1 = (function (state_34664){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_34664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e34753){if((e34753 instanceof Object)){
var ex__28917__auto__ = e34753;
var statearr_34754_34814 = state_34664;
(statearr_34754_34814[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34815 = state_34664;
state_34664 = G__34815;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28914__auto__ = function(state_34664){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28914__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28914__auto____1.call(this,state_34664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28914__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28914__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto__,map__34510,map__34510__$1,opts,before_jsload,on_jsload,reload_dependents,map__34511,map__34511__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29027__auto__ = (function (){var statearr_34755 = f__29026__auto__.call(null);
(statearr_34755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto__);

return statearr_34755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto__,map__34510,map__34510__$1,opts,before_jsload,on_jsload,reload_dependents,map__34511,map__34511__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29025__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34818,link){
var map__34821 = p__34818;
var map__34821__$1 = ((((!((map__34821 == null)))?((((map__34821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34821):map__34821);
var file = cljs.core.get.call(null,map__34821__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34821,map__34821__$1,file){
return (function (p1__34816_SHARP_,p2__34817_SHARP_){
if(cljs.core._EQ_.call(null,p1__34816_SHARP_,p2__34817_SHARP_)){
return p1__34816_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34821,map__34821__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34827){
var map__34828 = p__34827;
var map__34828__$1 = ((((!((map__34828 == null)))?((((map__34828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34828):map__34828);
var match_length = cljs.core.get.call(null,map__34828__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34828__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34823_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34823_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34830_SHARP_,p2__34831_SHARP_){
return cljs.core.assoc.call(null,p1__34830_SHARP_,cljs.core.get.call(null,p2__34831_SHARP_,key),p2__34831_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_34832 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34832);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34832);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34833,p__34834){
var map__34839 = p__34833;
var map__34839__$1 = ((((!((map__34839 == null)))?((((map__34839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34839):map__34839);
var on_cssload = cljs.core.get.call(null,map__34839__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34840 = p__34834;
var map__34840__$1 = ((((!((map__34840 == null)))?((((map__34840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34840):map__34840);
var files_msg = map__34840__$1;
var files = cljs.core.get.call(null,map__34840__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1511752910129