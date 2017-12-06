// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__27410__auto__,writer__27411__auto__,opt__27412__auto__){
return cljs.core._write.call(null,writer__27411__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__27886__auto__ = [];
var len__27879__auto___34896 = arguments.length;
var i__27880__auto___34897 = (0);
while(true){
if((i__27880__auto___34897 < len__27879__auto___34896)){
args__27886__auto__.push((arguments[i__27880__auto___34897]));

var G__34898 = (i__27880__auto___34897 + (1));
i__27880__auto___34897 = G__34898;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq34895){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34895));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__27886__auto__ = [];
var len__27879__auto___34900 = arguments.length;
var i__27880__auto___34901 = (0);
while(true){
if((i__27880__auto___34901 < len__27879__auto___34900)){
args__27886__auto__.push((arguments[i__27880__auto___34901]));

var G__34902 = (i__27880__auto___34901 + (1));
i__27880__auto___34901 = G__34902;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq34899){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34899));
});

var g_QMARK__34903 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_34904 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__34903){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__34903))
,null));
var mkg_34905 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__34903,g_34904){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__34903,g_34904))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__34903,g_34904,mkg_34905){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__34903).call(null,x);
});})(g_QMARK__34903,g_34904,mkg_34905))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__34903,g_34904,mkg_34905){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_34905).call(null,gfn);
});})(g_QMARK__34903,g_34904,mkg_34905))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__34903,g_34904,mkg_34905){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_34904).call(null,generator);
});})(g_QMARK__34903,g_34904,mkg_34905))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__34867__auto___34924 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__34867__auto___34924){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__27886__auto__ = [];
var len__27879__auto___34925 = arguments.length;
var i__27880__auto___34926 = (0);
while(true){
if((i__27880__auto___34926 < len__27879__auto___34925)){
args__27886__auto__.push((arguments[i__27880__auto___34926]));

var G__34927 = (i__27880__auto___34926 + (1));
i__27880__auto___34926 = G__34927;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34867__auto___34924))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34867__auto___34924){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34867__auto___34924),args);
});})(g__34867__auto___34924))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__34867__auto___34924){
return (function (seq34906){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34906));
});})(g__34867__auto___34924))
;


var g__34867__auto___34928 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__34867__auto___34928){
return (function cljs$spec$impl$gen$list(var_args){
var args__27886__auto__ = [];
var len__27879__auto___34929 = arguments.length;
var i__27880__auto___34930 = (0);
while(true){
if((i__27880__auto___34930 < len__27879__auto___34929)){
args__27886__auto__.push((arguments[i__27880__auto___34930]));

var G__34931 = (i__27880__auto___34930 + (1));
i__27880__auto___34930 = G__34931;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34867__auto___34928))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34867__auto___34928){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34867__auto___34928),args);
});})(g__34867__auto___34928))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__34867__auto___34928){
return (function (seq34907){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34907));
});})(g__34867__auto___34928))
;


var g__34867__auto___34932 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__34867__auto___34932){
return (function cljs$spec$impl$gen$map(var_args){
var args__27886__auto__ = [];
var len__27879__auto___34933 = arguments.length;
var i__27880__auto___34934 = (0);
while(true){
if((i__27880__auto___34934 < len__27879__auto___34933)){
args__27886__auto__.push((arguments[i__27880__auto___34934]));

var G__34935 = (i__27880__auto___34934 + (1));
i__27880__auto___34934 = G__34935;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34867__auto___34932))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34867__auto___34932){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34867__auto___34932),args);
});})(g__34867__auto___34932))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__34867__auto___34932){
return (function (seq34908){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34908));
});})(g__34867__auto___34932))
;


var g__34867__auto___34936 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__34867__auto___34936){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__27886__auto__ = [];
var len__27879__auto___34937 = arguments.length;
var i__27880__auto___34938 = (0);
while(true){
if((i__27880__auto___34938 < len__27879__auto___34937)){
args__27886__auto__.push((arguments[i__27880__auto___34938]));

var G__34939 = (i__27880__auto___34938 + (1));
i__27880__auto___34938 = G__34939;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34867__auto___34936))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34867__auto___34936){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34867__auto___34936),args);
});})(g__34867__auto___34936))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__34867__auto___34936){
return (function (seq34909){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34909));
});})(g__34867__auto___34936))
;


var g__34867__auto___34940 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__34867__auto___34940){
return (function cljs$spec$impl$gen$set(var_args){
var args__27886__auto__ = [];
var len__27879__auto___34941 = arguments.length;
var i__27880__auto___34942 = (0);
while(true){
if((i__27880__auto___34942 < len__27879__auto___34941)){
args__27886__auto__.push((arguments[i__27880__auto___34942]));

var G__34943 = (i__27880__auto___34942 + (1));
i__27880__auto___34942 = G__34943;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34867__auto___34940))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34867__auto___34940){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34867__auto___34940),args);
});})(g__34867__auto___34940))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__34867__auto___34940){
return (function (seq34910){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34910));
});})(g__34867__auto___34940))
;


var g__34867__auto___34944 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__34867__auto___34944){
return (function cljs$spec$impl$gen$vector(var_args){
var args__27886__auto__ = [];
var len__27879__auto___34945 = arguments.length;
var i__27880__auto___34946 = (0);
while(true){
if((i__27880__auto___34946 < len__27879__auto___34945)){
args__27886__auto__.push((arguments[i__27880__auto___34946]));

var G__34947 = (i__27880__auto___34946 + (1));
i__27880__auto___34946 = G__34947;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34867__auto___34944))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34867__auto___34944){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34867__auto___34944),args);
});})(g__34867__auto___34944))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__34867__auto___34944){
return (function (seq34911){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34911));
});})(g__34867__auto___34944))
;


var g__34867__auto___34948 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__34867__auto___34948){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__27886__auto__ = [];
var len__27879__auto___34949 = arguments.length;
var i__27880__auto___34950 = (0);
while(true){
if((i__27880__auto___34950 < len__27879__auto___34949)){
args__27886__auto__.push((arguments[i__27880__auto___34950]));

var G__34951 = (i__27880__auto___34950 + (1));
i__27880__auto___34950 = G__34951;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34867__auto___34948))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34867__auto___34948){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34867__auto___34948),args);
});})(g__34867__auto___34948))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__34867__auto___34948){
return (function (seq34912){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34912));
});})(g__34867__auto___34948))
;


var g__34867__auto___34952 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__34867__auto___34952){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__27886__auto__ = [];
var len__27879__auto___34953 = arguments.length;
var i__27880__auto___34954 = (0);
while(true){
if((i__27880__auto___34954 < len__27879__auto___34953)){
args__27886__auto__.push((arguments[i__27880__auto___34954]));

var G__34955 = (i__27880__auto___34954 + (1));
i__27880__auto___34954 = G__34955;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34867__auto___34952))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34867__auto___34952){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34867__auto___34952),args);
});})(g__34867__auto___34952))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__34867__auto___34952){
return (function (seq34913){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34913));
});})(g__34867__auto___34952))
;


var g__34867__auto___34956 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__34867__auto___34956){
return (function cljs$spec$impl$gen$elements(var_args){
var args__27886__auto__ = [];
var len__27879__auto___34957 = arguments.length;
var i__27880__auto___34958 = (0);
while(true){
if((i__27880__auto___34958 < len__27879__auto___34957)){
args__27886__auto__.push((arguments[i__27880__auto___34958]));

var G__34959 = (i__27880__auto___34958 + (1));
i__27880__auto___34958 = G__34959;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34867__auto___34956))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34867__auto___34956){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34867__auto___34956),args);
});})(g__34867__auto___34956))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__34867__auto___34956){
return (function (seq34914){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34914));
});})(g__34867__auto___34956))
;


var g__34867__auto___34960 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__34867__auto___34960){
return (function cljs$spec$impl$gen$bind(var_args){
var args__27886__auto__ = [];
var len__27879__auto___34961 = arguments.length;
var i__27880__auto___34962 = (0);
while(true){
if((i__27880__auto___34962 < len__27879__auto___34961)){
args__27886__auto__.push((arguments[i__27880__auto___34962]));

var G__34963 = (i__27880__auto___34962 + (1));
i__27880__auto___34962 = G__34963;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34867__auto___34960))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34867__auto___34960){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34867__auto___34960),args);
});})(g__34867__auto___34960))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__34867__auto___34960){
return (function (seq34915){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34915));
});})(g__34867__auto___34960))
;


var g__34867__auto___34964 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__34867__auto___34964){
return (function cljs$spec$impl$gen$choose(var_args){
var args__27886__auto__ = [];
var len__27879__auto___34965 = arguments.length;
var i__27880__auto___34966 = (0);
while(true){
if((i__27880__auto___34966 < len__27879__auto___34965)){
args__27886__auto__.push((arguments[i__27880__auto___34966]));

var G__34967 = (i__27880__auto___34966 + (1));
i__27880__auto___34966 = G__34967;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34867__auto___34964))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34867__auto___34964){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34867__auto___34964),args);
});})(g__34867__auto___34964))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__34867__auto___34964){
return (function (seq34916){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34916));
});})(g__34867__auto___34964))
;


var g__34867__auto___34968 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__34867__auto___34968){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__27886__auto__ = [];
var len__27879__auto___34969 = arguments.length;
var i__27880__auto___34970 = (0);
while(true){
if((i__27880__auto___34970 < len__27879__auto___34969)){
args__27886__auto__.push((arguments[i__27880__auto___34970]));

var G__34971 = (i__27880__auto___34970 + (1));
i__27880__auto___34970 = G__34971;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34867__auto___34968))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34867__auto___34968){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34867__auto___34968),args);
});})(g__34867__auto___34968))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__34867__auto___34968){
return (function (seq34917){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34917));
});})(g__34867__auto___34968))
;


var g__34867__auto___34972 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__34867__auto___34972){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__27886__auto__ = [];
var len__27879__auto___34973 = arguments.length;
var i__27880__auto___34974 = (0);
while(true){
if((i__27880__auto___34974 < len__27879__auto___34973)){
args__27886__auto__.push((arguments[i__27880__auto___34974]));

var G__34975 = (i__27880__auto___34974 + (1));
i__27880__auto___34974 = G__34975;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34867__auto___34972))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34867__auto___34972){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34867__auto___34972),args);
});})(g__34867__auto___34972))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__34867__auto___34972){
return (function (seq34918){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34918));
});})(g__34867__auto___34972))
;


var g__34867__auto___34976 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__34867__auto___34976){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__27886__auto__ = [];
var len__27879__auto___34977 = arguments.length;
var i__27880__auto___34978 = (0);
while(true){
if((i__27880__auto___34978 < len__27879__auto___34977)){
args__27886__auto__.push((arguments[i__27880__auto___34978]));

var G__34979 = (i__27880__auto___34978 + (1));
i__27880__auto___34978 = G__34979;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34867__auto___34976))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34867__auto___34976){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34867__auto___34976),args);
});})(g__34867__auto___34976))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__34867__auto___34976){
return (function (seq34919){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34919));
});})(g__34867__auto___34976))
;


var g__34867__auto___34980 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__34867__auto___34980){
return (function cljs$spec$impl$gen$sample(var_args){
var args__27886__auto__ = [];
var len__27879__auto___34981 = arguments.length;
var i__27880__auto___34982 = (0);
while(true){
if((i__27880__auto___34982 < len__27879__auto___34981)){
args__27886__auto__.push((arguments[i__27880__auto___34982]));

var G__34983 = (i__27880__auto___34982 + (1));
i__27880__auto___34982 = G__34983;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34867__auto___34980))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34867__auto___34980){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34867__auto___34980),args);
});})(g__34867__auto___34980))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__34867__auto___34980){
return (function (seq34920){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34920));
});})(g__34867__auto___34980))
;


var g__34867__auto___34984 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__34867__auto___34984){
return (function cljs$spec$impl$gen$return(var_args){
var args__27886__auto__ = [];
var len__27879__auto___34985 = arguments.length;
var i__27880__auto___34986 = (0);
while(true){
if((i__27880__auto___34986 < len__27879__auto___34985)){
args__27886__auto__.push((arguments[i__27880__auto___34986]));

var G__34987 = (i__27880__auto___34986 + (1));
i__27880__auto___34986 = G__34987;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34867__auto___34984))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34867__auto___34984){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34867__auto___34984),args);
});})(g__34867__auto___34984))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__34867__auto___34984){
return (function (seq34921){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34921));
});})(g__34867__auto___34984))
;


var g__34867__auto___34988 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__34867__auto___34988){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__27886__auto__ = [];
var len__27879__auto___34989 = arguments.length;
var i__27880__auto___34990 = (0);
while(true){
if((i__27880__auto___34990 < len__27879__auto___34989)){
args__27886__auto__.push((arguments[i__27880__auto___34990]));

var G__34991 = (i__27880__auto___34990 + (1));
i__27880__auto___34990 = G__34991;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34867__auto___34988))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34867__auto___34988){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34867__auto___34988),args);
});})(g__34867__auto___34988))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__34867__auto___34988){
return (function (seq34922){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34922));
});})(g__34867__auto___34988))
;


var g__34867__auto___34992 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__34867__auto___34992){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__27886__auto__ = [];
var len__27879__auto___34993 = arguments.length;
var i__27880__auto___34994 = (0);
while(true){
if((i__27880__auto___34994 < len__27879__auto___34993)){
args__27886__auto__.push((arguments[i__27880__auto___34994]));

var G__34995 = (i__27880__auto___34994 + (1));
i__27880__auto___34994 = G__34995;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34867__auto___34992))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34867__auto___34992){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34867__auto___34992),args);
});})(g__34867__auto___34992))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__34867__auto___34992){
return (function (seq34923){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34923));
});})(g__34867__auto___34992))
;

var g__34880__auto___35017 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__34880__auto___35017){
return (function cljs$spec$impl$gen$any(var_args){
var args__27886__auto__ = [];
var len__27879__auto___35018 = arguments.length;
var i__27880__auto___35019 = (0);
while(true){
if((i__27880__auto___35019 < len__27879__auto___35018)){
args__27886__auto__.push((arguments[i__27880__auto___35019]));

var G__35020 = (i__27880__auto___35019 + (1));
i__27880__auto___35019 = G__35020;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34880__auto___35017))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34880__auto___35017){
return (function (args){
return cljs.core.deref.call(null,g__34880__auto___35017);
});})(g__34880__auto___35017))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__34880__auto___35017){
return (function (seq34996){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34996));
});})(g__34880__auto___35017))
;


var g__34880__auto___35021 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__34880__auto___35021){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__27886__auto__ = [];
var len__27879__auto___35022 = arguments.length;
var i__27880__auto___35023 = (0);
while(true){
if((i__27880__auto___35023 < len__27879__auto___35022)){
args__27886__auto__.push((arguments[i__27880__auto___35023]));

var G__35024 = (i__27880__auto___35023 + (1));
i__27880__auto___35023 = G__35024;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34880__auto___35021))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34880__auto___35021){
return (function (args){
return cljs.core.deref.call(null,g__34880__auto___35021);
});})(g__34880__auto___35021))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__34880__auto___35021){
return (function (seq34997){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34997));
});})(g__34880__auto___35021))
;


var g__34880__auto___35025 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__34880__auto___35025){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__27886__auto__ = [];
var len__27879__auto___35026 = arguments.length;
var i__27880__auto___35027 = (0);
while(true){
if((i__27880__auto___35027 < len__27879__auto___35026)){
args__27886__auto__.push((arguments[i__27880__auto___35027]));

var G__35028 = (i__27880__auto___35027 + (1));
i__27880__auto___35027 = G__35028;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34880__auto___35025))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34880__auto___35025){
return (function (args){
return cljs.core.deref.call(null,g__34880__auto___35025);
});})(g__34880__auto___35025))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__34880__auto___35025){
return (function (seq34998){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34998));
});})(g__34880__auto___35025))
;


var g__34880__auto___35029 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__34880__auto___35029){
return (function cljs$spec$impl$gen$char(var_args){
var args__27886__auto__ = [];
var len__27879__auto___35030 = arguments.length;
var i__27880__auto___35031 = (0);
while(true){
if((i__27880__auto___35031 < len__27879__auto___35030)){
args__27886__auto__.push((arguments[i__27880__auto___35031]));

var G__35032 = (i__27880__auto___35031 + (1));
i__27880__auto___35031 = G__35032;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34880__auto___35029))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34880__auto___35029){
return (function (args){
return cljs.core.deref.call(null,g__34880__auto___35029);
});})(g__34880__auto___35029))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__34880__auto___35029){
return (function (seq34999){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34999));
});})(g__34880__auto___35029))
;


var g__34880__auto___35033 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__34880__auto___35033){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__27886__auto__ = [];
var len__27879__auto___35034 = arguments.length;
var i__27880__auto___35035 = (0);
while(true){
if((i__27880__auto___35035 < len__27879__auto___35034)){
args__27886__auto__.push((arguments[i__27880__auto___35035]));

var G__35036 = (i__27880__auto___35035 + (1));
i__27880__auto___35035 = G__35036;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34880__auto___35033))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34880__auto___35033){
return (function (args){
return cljs.core.deref.call(null,g__34880__auto___35033);
});})(g__34880__auto___35033))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__34880__auto___35033){
return (function (seq35000){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35000));
});})(g__34880__auto___35033))
;


var g__34880__auto___35037 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__34880__auto___35037){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__27886__auto__ = [];
var len__27879__auto___35038 = arguments.length;
var i__27880__auto___35039 = (0);
while(true){
if((i__27880__auto___35039 < len__27879__auto___35038)){
args__27886__auto__.push((arguments[i__27880__auto___35039]));

var G__35040 = (i__27880__auto___35039 + (1));
i__27880__auto___35039 = G__35040;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34880__auto___35037))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34880__auto___35037){
return (function (args){
return cljs.core.deref.call(null,g__34880__auto___35037);
});})(g__34880__auto___35037))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__34880__auto___35037){
return (function (seq35001){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35001));
});})(g__34880__auto___35037))
;


var g__34880__auto___35041 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__34880__auto___35041){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__27886__auto__ = [];
var len__27879__auto___35042 = arguments.length;
var i__27880__auto___35043 = (0);
while(true){
if((i__27880__auto___35043 < len__27879__auto___35042)){
args__27886__auto__.push((arguments[i__27880__auto___35043]));

var G__35044 = (i__27880__auto___35043 + (1));
i__27880__auto___35043 = G__35044;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34880__auto___35041))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34880__auto___35041){
return (function (args){
return cljs.core.deref.call(null,g__34880__auto___35041);
});})(g__34880__auto___35041))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__34880__auto___35041){
return (function (seq35002){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35002));
});})(g__34880__auto___35041))
;


var g__34880__auto___35045 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__34880__auto___35045){
return (function cljs$spec$impl$gen$double(var_args){
var args__27886__auto__ = [];
var len__27879__auto___35046 = arguments.length;
var i__27880__auto___35047 = (0);
while(true){
if((i__27880__auto___35047 < len__27879__auto___35046)){
args__27886__auto__.push((arguments[i__27880__auto___35047]));

var G__35048 = (i__27880__auto___35047 + (1));
i__27880__auto___35047 = G__35048;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34880__auto___35045))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34880__auto___35045){
return (function (args){
return cljs.core.deref.call(null,g__34880__auto___35045);
});})(g__34880__auto___35045))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__34880__auto___35045){
return (function (seq35003){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35003));
});})(g__34880__auto___35045))
;


var g__34880__auto___35049 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__34880__auto___35049){
return (function cljs$spec$impl$gen$int(var_args){
var args__27886__auto__ = [];
var len__27879__auto___35050 = arguments.length;
var i__27880__auto___35051 = (0);
while(true){
if((i__27880__auto___35051 < len__27879__auto___35050)){
args__27886__auto__.push((arguments[i__27880__auto___35051]));

var G__35052 = (i__27880__auto___35051 + (1));
i__27880__auto___35051 = G__35052;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34880__auto___35049))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34880__auto___35049){
return (function (args){
return cljs.core.deref.call(null,g__34880__auto___35049);
});})(g__34880__auto___35049))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__34880__auto___35049){
return (function (seq35004){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35004));
});})(g__34880__auto___35049))
;


var g__34880__auto___35053 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__34880__auto___35053){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__27886__auto__ = [];
var len__27879__auto___35054 = arguments.length;
var i__27880__auto___35055 = (0);
while(true){
if((i__27880__auto___35055 < len__27879__auto___35054)){
args__27886__auto__.push((arguments[i__27880__auto___35055]));

var G__35056 = (i__27880__auto___35055 + (1));
i__27880__auto___35055 = G__35056;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34880__auto___35053))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34880__auto___35053){
return (function (args){
return cljs.core.deref.call(null,g__34880__auto___35053);
});})(g__34880__auto___35053))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__34880__auto___35053){
return (function (seq35005){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35005));
});})(g__34880__auto___35053))
;


var g__34880__auto___35057 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__34880__auto___35057){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__27886__auto__ = [];
var len__27879__auto___35058 = arguments.length;
var i__27880__auto___35059 = (0);
while(true){
if((i__27880__auto___35059 < len__27879__auto___35058)){
args__27886__auto__.push((arguments[i__27880__auto___35059]));

var G__35060 = (i__27880__auto___35059 + (1));
i__27880__auto___35059 = G__35060;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34880__auto___35057))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34880__auto___35057){
return (function (args){
return cljs.core.deref.call(null,g__34880__auto___35057);
});})(g__34880__auto___35057))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__34880__auto___35057){
return (function (seq35006){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35006));
});})(g__34880__auto___35057))
;


var g__34880__auto___35061 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__34880__auto___35061){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__27886__auto__ = [];
var len__27879__auto___35062 = arguments.length;
var i__27880__auto___35063 = (0);
while(true){
if((i__27880__auto___35063 < len__27879__auto___35062)){
args__27886__auto__.push((arguments[i__27880__auto___35063]));

var G__35064 = (i__27880__auto___35063 + (1));
i__27880__auto___35063 = G__35064;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34880__auto___35061))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34880__auto___35061){
return (function (args){
return cljs.core.deref.call(null,g__34880__auto___35061);
});})(g__34880__auto___35061))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__34880__auto___35061){
return (function (seq35007){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35007));
});})(g__34880__auto___35061))
;


var g__34880__auto___35065 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__34880__auto___35065){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__27886__auto__ = [];
var len__27879__auto___35066 = arguments.length;
var i__27880__auto___35067 = (0);
while(true){
if((i__27880__auto___35067 < len__27879__auto___35066)){
args__27886__auto__.push((arguments[i__27880__auto___35067]));

var G__35068 = (i__27880__auto___35067 + (1));
i__27880__auto___35067 = G__35068;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34880__auto___35065))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34880__auto___35065){
return (function (args){
return cljs.core.deref.call(null,g__34880__auto___35065);
});})(g__34880__auto___35065))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__34880__auto___35065){
return (function (seq35008){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35008));
});})(g__34880__auto___35065))
;


var g__34880__auto___35069 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__34880__auto___35069){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__27886__auto__ = [];
var len__27879__auto___35070 = arguments.length;
var i__27880__auto___35071 = (0);
while(true){
if((i__27880__auto___35071 < len__27879__auto___35070)){
args__27886__auto__.push((arguments[i__27880__auto___35071]));

var G__35072 = (i__27880__auto___35071 + (1));
i__27880__auto___35071 = G__35072;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34880__auto___35069))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34880__auto___35069){
return (function (args){
return cljs.core.deref.call(null,g__34880__auto___35069);
});})(g__34880__auto___35069))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__34880__auto___35069){
return (function (seq35009){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35009));
});})(g__34880__auto___35069))
;


var g__34880__auto___35073 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__34880__auto___35073){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__27886__auto__ = [];
var len__27879__auto___35074 = arguments.length;
var i__27880__auto___35075 = (0);
while(true){
if((i__27880__auto___35075 < len__27879__auto___35074)){
args__27886__auto__.push((arguments[i__27880__auto___35075]));

var G__35076 = (i__27880__auto___35075 + (1));
i__27880__auto___35075 = G__35076;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34880__auto___35073))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34880__auto___35073){
return (function (args){
return cljs.core.deref.call(null,g__34880__auto___35073);
});})(g__34880__auto___35073))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__34880__auto___35073){
return (function (seq35010){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35010));
});})(g__34880__auto___35073))
;


var g__34880__auto___35077 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__34880__auto___35077){
return (function cljs$spec$impl$gen$string(var_args){
var args__27886__auto__ = [];
var len__27879__auto___35078 = arguments.length;
var i__27880__auto___35079 = (0);
while(true){
if((i__27880__auto___35079 < len__27879__auto___35078)){
args__27886__auto__.push((arguments[i__27880__auto___35079]));

var G__35080 = (i__27880__auto___35079 + (1));
i__27880__auto___35079 = G__35080;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34880__auto___35077))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34880__auto___35077){
return (function (args){
return cljs.core.deref.call(null,g__34880__auto___35077);
});})(g__34880__auto___35077))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__34880__auto___35077){
return (function (seq35011){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35011));
});})(g__34880__auto___35077))
;


var g__34880__auto___35081 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__34880__auto___35081){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__27886__auto__ = [];
var len__27879__auto___35082 = arguments.length;
var i__27880__auto___35083 = (0);
while(true){
if((i__27880__auto___35083 < len__27879__auto___35082)){
args__27886__auto__.push((arguments[i__27880__auto___35083]));

var G__35084 = (i__27880__auto___35083 + (1));
i__27880__auto___35083 = G__35084;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34880__auto___35081))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34880__auto___35081){
return (function (args){
return cljs.core.deref.call(null,g__34880__auto___35081);
});})(g__34880__auto___35081))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__34880__auto___35081){
return (function (seq35012){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35012));
});})(g__34880__auto___35081))
;


var g__34880__auto___35085 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__34880__auto___35085){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__27886__auto__ = [];
var len__27879__auto___35086 = arguments.length;
var i__27880__auto___35087 = (0);
while(true){
if((i__27880__auto___35087 < len__27879__auto___35086)){
args__27886__auto__.push((arguments[i__27880__auto___35087]));

var G__35088 = (i__27880__auto___35087 + (1));
i__27880__auto___35087 = G__35088;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34880__auto___35085))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34880__auto___35085){
return (function (args){
return cljs.core.deref.call(null,g__34880__auto___35085);
});})(g__34880__auto___35085))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__34880__auto___35085){
return (function (seq35013){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35013));
});})(g__34880__auto___35085))
;


var g__34880__auto___35089 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__34880__auto___35089){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__27886__auto__ = [];
var len__27879__auto___35090 = arguments.length;
var i__27880__auto___35091 = (0);
while(true){
if((i__27880__auto___35091 < len__27879__auto___35090)){
args__27886__auto__.push((arguments[i__27880__auto___35091]));

var G__35092 = (i__27880__auto___35091 + (1));
i__27880__auto___35091 = G__35092;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34880__auto___35089))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34880__auto___35089){
return (function (args){
return cljs.core.deref.call(null,g__34880__auto___35089);
});})(g__34880__auto___35089))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__34880__auto___35089){
return (function (seq35014){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35014));
});})(g__34880__auto___35089))
;


var g__34880__auto___35093 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__34880__auto___35093){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__27886__auto__ = [];
var len__27879__auto___35094 = arguments.length;
var i__27880__auto___35095 = (0);
while(true){
if((i__27880__auto___35095 < len__27879__auto___35094)){
args__27886__auto__.push((arguments[i__27880__auto___35095]));

var G__35096 = (i__27880__auto___35095 + (1));
i__27880__auto___35095 = G__35096;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34880__auto___35093))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34880__auto___35093){
return (function (args){
return cljs.core.deref.call(null,g__34880__auto___35093);
});})(g__34880__auto___35093))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__34880__auto___35093){
return (function (seq35015){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35015));
});})(g__34880__auto___35093))
;


var g__34880__auto___35097 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__34880__auto___35097){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__27886__auto__ = [];
var len__27879__auto___35098 = arguments.length;
var i__27880__auto___35099 = (0);
while(true){
if((i__27880__auto___35099 < len__27879__auto___35098)){
args__27886__auto__.push((arguments[i__27880__auto___35099]));

var G__35100 = (i__27880__auto___35099 + (1));
i__27880__auto___35099 = G__35100;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});})(g__34880__auto___35097))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34880__auto___35097){
return (function (args){
return cljs.core.deref.call(null,g__34880__auto___35097);
});})(g__34880__auto___35097))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__34880__auto___35097){
return (function (seq35016){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35016));
});})(g__34880__auto___35097))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__27886__auto__ = [];
var len__27879__auto___35103 = arguments.length;
var i__27880__auto___35104 = (0);
while(true){
if((i__27880__auto___35104 < len__27879__auto___35103)){
args__27886__auto__.push((arguments[i__27880__auto___35104]));

var G__35105 = (i__27880__auto___35104 + (1));
i__27880__auto___35104 = G__35105;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__35101_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35101_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq35102){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35102));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__35106_SHARP_){
return (new Date(p1__35106_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1511752910693