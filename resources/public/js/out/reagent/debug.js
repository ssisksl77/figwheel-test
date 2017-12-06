// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__29502__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29502 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29503__i = 0, G__29503__a = new Array(arguments.length -  0);
while (G__29503__i < G__29503__a.length) {G__29503__a[G__29503__i] = arguments[G__29503__i + 0]; ++G__29503__i;}
  args = new cljs.core.IndexedSeq(G__29503__a,0);
} 
return G__29502__delegate.call(this,args);};
G__29502.cljs$lang$maxFixedArity = 0;
G__29502.cljs$lang$applyTo = (function (arglist__29504){
var args = cljs.core.seq(arglist__29504);
return G__29502__delegate(args);
});
G__29502.cljs$core$IFn$_invoke$arity$variadic = G__29502__delegate;
return G__29502;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__29505__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29505 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29506__i = 0, G__29506__a = new Array(arguments.length -  0);
while (G__29506__i < G__29506__a.length) {G__29506__a[G__29506__i] = arguments[G__29506__i + 0]; ++G__29506__i;}
  args = new cljs.core.IndexedSeq(G__29506__a,0);
} 
return G__29505__delegate.call(this,args);};
G__29505.cljs$lang$maxFixedArity = 0;
G__29505.cljs$lang$applyTo = (function (arglist__29507){
var args = cljs.core.seq(arglist__29507);
return G__29505__delegate(args);
});
G__29505.cljs$core$IFn$_invoke$arity$variadic = G__29505__delegate;
return G__29505;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1511941491215