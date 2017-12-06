// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args29070 = [];
var len__27879__auto___29076 = arguments.length;
var i__27880__auto___29077 = (0);
while(true){
if((i__27880__auto___29077 < len__27879__auto___29076)){
args29070.push((arguments[i__27880__auto___29077]));

var G__29078 = (i__27880__auto___29077 + (1));
i__27880__auto___29077 = G__29078;
continue;
} else {
}
break;
}

var G__29072 = args29070.length;
switch (G__29072) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29070.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29073 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29073 = (function (f,blockable,meta29074){
this.f = f;
this.blockable = blockable;
this.meta29074 = meta29074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29075,meta29074__$1){
var self__ = this;
var _29075__$1 = this;
return (new cljs.core.async.t_cljs$core$async29073(self__.f,self__.blockable,meta29074__$1));
});

cljs.core.async.t_cljs$core$async29073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29075){
var self__ = this;
var _29075__$1 = this;
return self__.meta29074;
});

cljs.core.async.t_cljs$core$async29073.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29073.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29073.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29073.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29074","meta29074",-1169393371,null)], null);
});

cljs.core.async.t_cljs$core$async29073.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29073";

cljs.core.async.t_cljs$core$async29073.cljs$lang$ctorPrWriter = (function (this__27410__auto__,writer__27411__auto__,opt__27412__auto__){
return cljs.core._write.call(null,writer__27411__auto__,"cljs.core.async/t_cljs$core$async29073");
});

cljs.core.async.__GT_t_cljs$core$async29073 = (function cljs$core$async$__GT_t_cljs$core$async29073(f__$1,blockable__$1,meta29074){
return (new cljs.core.async.t_cljs$core$async29073(f__$1,blockable__$1,meta29074));
});

}

return (new cljs.core.async.t_cljs$core$async29073(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args29082 = [];
var len__27879__auto___29085 = arguments.length;
var i__27880__auto___29086 = (0);
while(true){
if((i__27880__auto___29086 < len__27879__auto___29085)){
args29082.push((arguments[i__27880__auto___29086]));

var G__29087 = (i__27880__auto___29086 + (1));
i__27880__auto___29086 = G__29087;
continue;
} else {
}
break;
}

var G__29084 = args29082.length;
switch (G__29084) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29082.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args29089 = [];
var len__27879__auto___29092 = arguments.length;
var i__27880__auto___29093 = (0);
while(true){
if((i__27880__auto___29093 < len__27879__auto___29092)){
args29089.push((arguments[i__27880__auto___29093]));

var G__29094 = (i__27880__auto___29093 + (1));
i__27880__auto___29093 = G__29094;
continue;
} else {
}
break;
}

var G__29091 = args29089.length;
switch (G__29091) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29089.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args29096 = [];
var len__27879__auto___29099 = arguments.length;
var i__27880__auto___29100 = (0);
while(true){
if((i__27880__auto___29100 < len__27879__auto___29099)){
args29096.push((arguments[i__27880__auto___29100]));

var G__29101 = (i__27880__auto___29100 + (1));
i__27880__auto___29100 = G__29101;
continue;
} else {
}
break;
}

var G__29098 = args29096.length;
switch (G__29098) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29096.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29103 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29103);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29103,ret){
return (function (){
return fn1.call(null,val_29103);
});})(val_29103,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args29104 = [];
var len__27879__auto___29107 = arguments.length;
var i__27880__auto___29108 = (0);
while(true){
if((i__27880__auto___29108 < len__27879__auto___29107)){
args29104.push((arguments[i__27880__auto___29108]));

var G__29109 = (i__27880__auto___29108 + (1));
i__27880__auto___29108 = G__29109;
continue;
} else {
}
break;
}

var G__29106 = args29104.length;
switch (G__29106) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29104.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__27719__auto___29111 = n;
var x_29112 = (0);
while(true){
if((x_29112 < n__27719__auto___29111)){
(a[x_29112] = (0));

var G__29113 = (x_29112 + (1));
x_29112 = G__29113;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29114 = (i + (1));
i = G__29114;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29118 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29118 = (function (alt_flag,flag,meta29119){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta29119 = meta29119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29120,meta29119__$1){
var self__ = this;
var _29120__$1 = this;
return (new cljs.core.async.t_cljs$core$async29118(self__.alt_flag,self__.flag,meta29119__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29118.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29120){
var self__ = this;
var _29120__$1 = this;
return self__.meta29119;
});})(flag))
;

cljs.core.async.t_cljs$core$async29118.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29118.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29118.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29118.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29118.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29119","meta29119",1566285429,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29118.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29118";

cljs.core.async.t_cljs$core$async29118.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27410__auto__,writer__27411__auto__,opt__27412__auto__){
return cljs.core._write.call(null,writer__27411__auto__,"cljs.core.async/t_cljs$core$async29118");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29118 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29118(alt_flag__$1,flag__$1,meta29119){
return (new cljs.core.async.t_cljs$core$async29118(alt_flag__$1,flag__$1,meta29119));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29118(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29124 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29124 = (function (alt_handler,flag,cb,meta29125){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta29125 = meta29125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29126,meta29125__$1){
var self__ = this;
var _29126__$1 = this;
return (new cljs.core.async.t_cljs$core$async29124(self__.alt_handler,self__.flag,self__.cb,meta29125__$1));
});

cljs.core.async.t_cljs$core$async29124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29126){
var self__ = this;
var _29126__$1 = this;
return self__.meta29125;
});

cljs.core.async.t_cljs$core$async29124.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29124.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29125","meta29125",2117467746,null)], null);
});

cljs.core.async.t_cljs$core$async29124.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29124";

cljs.core.async.t_cljs$core$async29124.cljs$lang$ctorPrWriter = (function (this__27410__auto__,writer__27411__auto__,opt__27412__auto__){
return cljs.core._write.call(null,writer__27411__auto__,"cljs.core.async/t_cljs$core$async29124");
});

cljs.core.async.__GT_t_cljs$core$async29124 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29124(alt_handler__$1,flag__$1,cb__$1,meta29125){
return (new cljs.core.async.t_cljs$core$async29124(alt_handler__$1,flag__$1,cb__$1,meta29125));
});

}

return (new cljs.core.async.t_cljs$core$async29124(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29127_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29127_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29128_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29128_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__26804__auto__ = wport;
if(cljs.core.truth_(or__26804__auto__)){
return or__26804__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29129 = (i + (1));
i = G__29129;
continue;
}
} else {
return null;
}
break;
}
})();
var or__26804__auto__ = ret;
if(cljs.core.truth_(or__26804__auto__)){
return or__26804__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__26792__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__26792__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__26792__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__27886__auto__ = [];
var len__27879__auto___29135 = arguments.length;
var i__27880__auto___29136 = (0);
while(true){
if((i__27880__auto___29136 < len__27879__auto___29135)){
args__27886__auto__.push((arguments[i__27880__auto___29136]));

var G__29137 = (i__27880__auto___29136 + (1));
i__27880__auto___29136 = G__29137;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((1) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27887__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29132){
var map__29133 = p__29132;
var map__29133__$1 = ((((!((map__29133 == null)))?((((map__29133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29133):map__29133);
var opts = map__29133__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29130){
var G__29131 = cljs.core.first.call(null,seq29130);
var seq29130__$1 = cljs.core.next.call(null,seq29130);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29131,seq29130__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args29138 = [];
var len__27879__auto___29188 = arguments.length;
var i__27880__auto___29189 = (0);
while(true){
if((i__27880__auto___29189 < len__27879__auto___29188)){
args29138.push((arguments[i__27880__auto___29189]));

var G__29190 = (i__27880__auto___29189 + (1));
i__27880__auto___29189 = G__29190;
continue;
} else {
}
break;
}

var G__29140 = args29138.length;
switch (G__29140) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29138.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29025__auto___29192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto___29192){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto___29192){
return (function (state_29164){
var state_val_29165 = (state_29164[(1)]);
if((state_val_29165 === (7))){
var inst_29160 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
var statearr_29166_29193 = state_29164__$1;
(statearr_29166_29193[(2)] = inst_29160);

(statearr_29166_29193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (1))){
var state_29164__$1 = state_29164;
var statearr_29167_29194 = state_29164__$1;
(statearr_29167_29194[(2)] = null);

(statearr_29167_29194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (4))){
var inst_29143 = (state_29164[(7)]);
var inst_29143__$1 = (state_29164[(2)]);
var inst_29144 = (inst_29143__$1 == null);
var state_29164__$1 = (function (){var statearr_29168 = state_29164;
(statearr_29168[(7)] = inst_29143__$1);

return statearr_29168;
})();
if(cljs.core.truth_(inst_29144)){
var statearr_29169_29195 = state_29164__$1;
(statearr_29169_29195[(1)] = (5));

} else {
var statearr_29170_29196 = state_29164__$1;
(statearr_29170_29196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (13))){
var state_29164__$1 = state_29164;
var statearr_29171_29197 = state_29164__$1;
(statearr_29171_29197[(2)] = null);

(statearr_29171_29197[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (6))){
var inst_29143 = (state_29164[(7)]);
var state_29164__$1 = state_29164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29164__$1,(11),to,inst_29143);
} else {
if((state_val_29165 === (3))){
var inst_29162 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29164__$1,inst_29162);
} else {
if((state_val_29165 === (12))){
var state_29164__$1 = state_29164;
var statearr_29172_29198 = state_29164__$1;
(statearr_29172_29198[(2)] = null);

(statearr_29172_29198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (2))){
var state_29164__$1 = state_29164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29164__$1,(4),from);
} else {
if((state_val_29165 === (11))){
var inst_29153 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
if(cljs.core.truth_(inst_29153)){
var statearr_29173_29199 = state_29164__$1;
(statearr_29173_29199[(1)] = (12));

} else {
var statearr_29174_29200 = state_29164__$1;
(statearr_29174_29200[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (9))){
var state_29164__$1 = state_29164;
var statearr_29175_29201 = state_29164__$1;
(statearr_29175_29201[(2)] = null);

(statearr_29175_29201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (5))){
var state_29164__$1 = state_29164;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29176_29202 = state_29164__$1;
(statearr_29176_29202[(1)] = (8));

} else {
var statearr_29177_29203 = state_29164__$1;
(statearr_29177_29203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (14))){
var inst_29158 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
var statearr_29178_29204 = state_29164__$1;
(statearr_29178_29204[(2)] = inst_29158);

(statearr_29178_29204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (10))){
var inst_29150 = (state_29164[(2)]);
var state_29164__$1 = state_29164;
var statearr_29179_29205 = state_29164__$1;
(statearr_29179_29205[(2)] = inst_29150);

(statearr_29179_29205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29165 === (8))){
var inst_29147 = cljs.core.async.close_BANG_.call(null,to);
var state_29164__$1 = state_29164;
var statearr_29180_29206 = state_29164__$1;
(statearr_29180_29206[(2)] = inst_29147);

(statearr_29180_29206[(1)] = (10));


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
});})(c__29025__auto___29192))
;
return ((function (switch__28913__auto__,c__29025__auto___29192){
return (function() {
var cljs$core$async$state_machine__28914__auto__ = null;
var cljs$core$async$state_machine__28914__auto____0 = (function (){
var statearr_29184 = [null,null,null,null,null,null,null,null];
(statearr_29184[(0)] = cljs$core$async$state_machine__28914__auto__);

(statearr_29184[(1)] = (1));

return statearr_29184;
});
var cljs$core$async$state_machine__28914__auto____1 = (function (state_29164){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_29164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e29185){if((e29185 instanceof Object)){
var ex__28917__auto__ = e29185;
var statearr_29186_29207 = state_29164;
(statearr_29186_29207[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29208 = state_29164;
state_29164 = G__29208;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
cljs$core$async$state_machine__28914__auto__ = function(state_29164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28914__auto____1.call(this,state_29164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28914__auto____0;
cljs$core$async$state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28914__auto____1;
return cljs$core$async$state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto___29192))
})();
var state__29027__auto__ = (function (){var statearr_29187 = f__29026__auto__.call(null);
(statearr_29187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto___29192);

return statearr_29187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto___29192))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29396){
var vec__29397 = p__29396;
var v = cljs.core.nth.call(null,vec__29397,(0),null);
var p = cljs.core.nth.call(null,vec__29397,(1),null);
var job = vec__29397;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29025__auto___29583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto___29583,res,vec__29397,v,p,job,jobs,results){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto___29583,res,vec__29397,v,p,job,jobs,results){
return (function (state_29404){
var state_val_29405 = (state_29404[(1)]);
if((state_val_29405 === (1))){
var state_29404__$1 = state_29404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29404__$1,(2),res,v);
} else {
if((state_val_29405 === (2))){
var inst_29401 = (state_29404[(2)]);
var inst_29402 = cljs.core.async.close_BANG_.call(null,res);
var state_29404__$1 = (function (){var statearr_29406 = state_29404;
(statearr_29406[(7)] = inst_29401);

return statearr_29406;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29404__$1,inst_29402);
} else {
return null;
}
}
});})(c__29025__auto___29583,res,vec__29397,v,p,job,jobs,results))
;
return ((function (switch__28913__auto__,c__29025__auto___29583,res,vec__29397,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____0 = (function (){
var statearr_29410 = [null,null,null,null,null,null,null,null];
(statearr_29410[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__);

(statearr_29410[(1)] = (1));

return statearr_29410;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____1 = (function (state_29404){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_29404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e29411){if((e29411 instanceof Object)){
var ex__28917__auto__ = e29411;
var statearr_29412_29584 = state_29404;
(statearr_29412_29584[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29585 = state_29404;
state_29404 = G__29585;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__ = function(state_29404){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____1.call(this,state_29404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto___29583,res,vec__29397,v,p,job,jobs,results))
})();
var state__29027__auto__ = (function (){var statearr_29413 = f__29026__auto__.call(null);
(statearr_29413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto___29583);

return statearr_29413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto___29583,res,vec__29397,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29414){
var vec__29415 = p__29414;
var v = cljs.core.nth.call(null,vec__29415,(0),null);
var p = cljs.core.nth.call(null,vec__29415,(1),null);
var job = vec__29415;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__27719__auto___29586 = n;
var __29587 = (0);
while(true){
if((__29587 < n__27719__auto___29586)){
var G__29418_29588 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29418_29588) {
case "compute":
var c__29025__auto___29590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29587,c__29025__auto___29590,G__29418_29588,n__27719__auto___29586,jobs,results,process,async){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (__29587,c__29025__auto___29590,G__29418_29588,n__27719__auto___29586,jobs,results,process,async){
return (function (state_29431){
var state_val_29432 = (state_29431[(1)]);
if((state_val_29432 === (1))){
var state_29431__$1 = state_29431;
var statearr_29433_29591 = state_29431__$1;
(statearr_29433_29591[(2)] = null);

(statearr_29433_29591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (2))){
var state_29431__$1 = state_29431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29431__$1,(4),jobs);
} else {
if((state_val_29432 === (3))){
var inst_29429 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29431__$1,inst_29429);
} else {
if((state_val_29432 === (4))){
var inst_29421 = (state_29431[(2)]);
var inst_29422 = process.call(null,inst_29421);
var state_29431__$1 = state_29431;
if(cljs.core.truth_(inst_29422)){
var statearr_29434_29592 = state_29431__$1;
(statearr_29434_29592[(1)] = (5));

} else {
var statearr_29435_29593 = state_29431__$1;
(statearr_29435_29593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (5))){
var state_29431__$1 = state_29431;
var statearr_29436_29594 = state_29431__$1;
(statearr_29436_29594[(2)] = null);

(statearr_29436_29594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (6))){
var state_29431__$1 = state_29431;
var statearr_29437_29595 = state_29431__$1;
(statearr_29437_29595[(2)] = null);

(statearr_29437_29595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29432 === (7))){
var inst_29427 = (state_29431[(2)]);
var state_29431__$1 = state_29431;
var statearr_29438_29596 = state_29431__$1;
(statearr_29438_29596[(2)] = inst_29427);

(statearr_29438_29596[(1)] = (3));


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
});})(__29587,c__29025__auto___29590,G__29418_29588,n__27719__auto___29586,jobs,results,process,async))
;
return ((function (__29587,switch__28913__auto__,c__29025__auto___29590,G__29418_29588,n__27719__auto___29586,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____0 = (function (){
var statearr_29442 = [null,null,null,null,null,null,null];
(statearr_29442[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__);

(statearr_29442[(1)] = (1));

return statearr_29442;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____1 = (function (state_29431){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_29431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e29443){if((e29443 instanceof Object)){
var ex__28917__auto__ = e29443;
var statearr_29444_29597 = state_29431;
(statearr_29444_29597[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29598 = state_29431;
state_29431 = G__29598;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__ = function(state_29431){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____1.call(this,state_29431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__;
})()
;})(__29587,switch__28913__auto__,c__29025__auto___29590,G__29418_29588,n__27719__auto___29586,jobs,results,process,async))
})();
var state__29027__auto__ = (function (){var statearr_29445 = f__29026__auto__.call(null);
(statearr_29445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto___29590);

return statearr_29445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(__29587,c__29025__auto___29590,G__29418_29588,n__27719__auto___29586,jobs,results,process,async))
);


break;
case "async":
var c__29025__auto___29599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29587,c__29025__auto___29599,G__29418_29588,n__27719__auto___29586,jobs,results,process,async){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (__29587,c__29025__auto___29599,G__29418_29588,n__27719__auto___29586,jobs,results,process,async){
return (function (state_29458){
var state_val_29459 = (state_29458[(1)]);
if((state_val_29459 === (1))){
var state_29458__$1 = state_29458;
var statearr_29460_29600 = state_29458__$1;
(statearr_29460_29600[(2)] = null);

(statearr_29460_29600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (2))){
var state_29458__$1 = state_29458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29458__$1,(4),jobs);
} else {
if((state_val_29459 === (3))){
var inst_29456 = (state_29458[(2)]);
var state_29458__$1 = state_29458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29458__$1,inst_29456);
} else {
if((state_val_29459 === (4))){
var inst_29448 = (state_29458[(2)]);
var inst_29449 = async.call(null,inst_29448);
var state_29458__$1 = state_29458;
if(cljs.core.truth_(inst_29449)){
var statearr_29461_29601 = state_29458__$1;
(statearr_29461_29601[(1)] = (5));

} else {
var statearr_29462_29602 = state_29458__$1;
(statearr_29462_29602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (5))){
var state_29458__$1 = state_29458;
var statearr_29463_29603 = state_29458__$1;
(statearr_29463_29603[(2)] = null);

(statearr_29463_29603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (6))){
var state_29458__$1 = state_29458;
var statearr_29464_29604 = state_29458__$1;
(statearr_29464_29604[(2)] = null);

(statearr_29464_29604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (7))){
var inst_29454 = (state_29458[(2)]);
var state_29458__$1 = state_29458;
var statearr_29465_29605 = state_29458__$1;
(statearr_29465_29605[(2)] = inst_29454);

(statearr_29465_29605[(1)] = (3));


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
});})(__29587,c__29025__auto___29599,G__29418_29588,n__27719__auto___29586,jobs,results,process,async))
;
return ((function (__29587,switch__28913__auto__,c__29025__auto___29599,G__29418_29588,n__27719__auto___29586,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____0 = (function (){
var statearr_29469 = [null,null,null,null,null,null,null];
(statearr_29469[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__);

(statearr_29469[(1)] = (1));

return statearr_29469;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____1 = (function (state_29458){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_29458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e29470){if((e29470 instanceof Object)){
var ex__28917__auto__ = e29470;
var statearr_29471_29606 = state_29458;
(statearr_29471_29606[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29607 = state_29458;
state_29458 = G__29607;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__ = function(state_29458){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____1.call(this,state_29458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__;
})()
;})(__29587,switch__28913__auto__,c__29025__auto___29599,G__29418_29588,n__27719__auto___29586,jobs,results,process,async))
})();
var state__29027__auto__ = (function (){var statearr_29472 = f__29026__auto__.call(null);
(statearr_29472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto___29599);

return statearr_29472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(__29587,c__29025__auto___29599,G__29418_29588,n__27719__auto___29586,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29608 = (__29587 + (1));
__29587 = G__29608;
continue;
} else {
}
break;
}

var c__29025__auto___29609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto___29609,jobs,results,process,async){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto___29609,jobs,results,process,async){
return (function (state_29494){
var state_val_29495 = (state_29494[(1)]);
if((state_val_29495 === (1))){
var state_29494__$1 = state_29494;
var statearr_29496_29610 = state_29494__$1;
(statearr_29496_29610[(2)] = null);

(statearr_29496_29610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29495 === (2))){
var state_29494__$1 = state_29494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29494__$1,(4),from);
} else {
if((state_val_29495 === (3))){
var inst_29492 = (state_29494[(2)]);
var state_29494__$1 = state_29494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29494__$1,inst_29492);
} else {
if((state_val_29495 === (4))){
var inst_29475 = (state_29494[(7)]);
var inst_29475__$1 = (state_29494[(2)]);
var inst_29476 = (inst_29475__$1 == null);
var state_29494__$1 = (function (){var statearr_29497 = state_29494;
(statearr_29497[(7)] = inst_29475__$1);

return statearr_29497;
})();
if(cljs.core.truth_(inst_29476)){
var statearr_29498_29611 = state_29494__$1;
(statearr_29498_29611[(1)] = (5));

} else {
var statearr_29499_29612 = state_29494__$1;
(statearr_29499_29612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29495 === (5))){
var inst_29478 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29494__$1 = state_29494;
var statearr_29500_29613 = state_29494__$1;
(statearr_29500_29613[(2)] = inst_29478);

(statearr_29500_29613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29495 === (6))){
var inst_29475 = (state_29494[(7)]);
var inst_29480 = (state_29494[(8)]);
var inst_29480__$1 = cljs.core.async.chan.call(null,(1));
var inst_29481 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29482 = [inst_29475,inst_29480__$1];
var inst_29483 = (new cljs.core.PersistentVector(null,2,(5),inst_29481,inst_29482,null));
var state_29494__$1 = (function (){var statearr_29501 = state_29494;
(statearr_29501[(8)] = inst_29480__$1);

return statearr_29501;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29494__$1,(8),jobs,inst_29483);
} else {
if((state_val_29495 === (7))){
var inst_29490 = (state_29494[(2)]);
var state_29494__$1 = state_29494;
var statearr_29502_29614 = state_29494__$1;
(statearr_29502_29614[(2)] = inst_29490);

(statearr_29502_29614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29495 === (8))){
var inst_29480 = (state_29494[(8)]);
var inst_29485 = (state_29494[(2)]);
var state_29494__$1 = (function (){var statearr_29503 = state_29494;
(statearr_29503[(9)] = inst_29485);

return statearr_29503;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29494__$1,(9),results,inst_29480);
} else {
if((state_val_29495 === (9))){
var inst_29487 = (state_29494[(2)]);
var state_29494__$1 = (function (){var statearr_29504 = state_29494;
(statearr_29504[(10)] = inst_29487);

return statearr_29504;
})();
var statearr_29505_29615 = state_29494__$1;
(statearr_29505_29615[(2)] = null);

(statearr_29505_29615[(1)] = (2));


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
});})(c__29025__auto___29609,jobs,results,process,async))
;
return ((function (switch__28913__auto__,c__29025__auto___29609,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____0 = (function (){
var statearr_29509 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29509[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__);

(statearr_29509[(1)] = (1));

return statearr_29509;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____1 = (function (state_29494){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_29494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e29510){if((e29510 instanceof Object)){
var ex__28917__auto__ = e29510;
var statearr_29511_29616 = state_29494;
(statearr_29511_29616[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29617 = state_29494;
state_29494 = G__29617;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__ = function(state_29494){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____1.call(this,state_29494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto___29609,jobs,results,process,async))
})();
var state__29027__auto__ = (function (){var statearr_29512 = f__29026__auto__.call(null);
(statearr_29512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto___29609);

return statearr_29512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto___29609,jobs,results,process,async))
);


var c__29025__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto__,jobs,results,process,async){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto__,jobs,results,process,async){
return (function (state_29550){
var state_val_29551 = (state_29550[(1)]);
if((state_val_29551 === (7))){
var inst_29546 = (state_29550[(2)]);
var state_29550__$1 = state_29550;
var statearr_29552_29618 = state_29550__$1;
(statearr_29552_29618[(2)] = inst_29546);

(statearr_29552_29618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29551 === (20))){
var state_29550__$1 = state_29550;
var statearr_29553_29619 = state_29550__$1;
(statearr_29553_29619[(2)] = null);

(statearr_29553_29619[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29551 === (1))){
var state_29550__$1 = state_29550;
var statearr_29554_29620 = state_29550__$1;
(statearr_29554_29620[(2)] = null);

(statearr_29554_29620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29551 === (4))){
var inst_29515 = (state_29550[(7)]);
var inst_29515__$1 = (state_29550[(2)]);
var inst_29516 = (inst_29515__$1 == null);
var state_29550__$1 = (function (){var statearr_29555 = state_29550;
(statearr_29555[(7)] = inst_29515__$1);

return statearr_29555;
})();
if(cljs.core.truth_(inst_29516)){
var statearr_29556_29621 = state_29550__$1;
(statearr_29556_29621[(1)] = (5));

} else {
var statearr_29557_29622 = state_29550__$1;
(statearr_29557_29622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29551 === (15))){
var inst_29528 = (state_29550[(8)]);
var state_29550__$1 = state_29550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29550__$1,(18),to,inst_29528);
} else {
if((state_val_29551 === (21))){
var inst_29541 = (state_29550[(2)]);
var state_29550__$1 = state_29550;
var statearr_29558_29623 = state_29550__$1;
(statearr_29558_29623[(2)] = inst_29541);

(statearr_29558_29623[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29551 === (13))){
var inst_29543 = (state_29550[(2)]);
var state_29550__$1 = (function (){var statearr_29559 = state_29550;
(statearr_29559[(9)] = inst_29543);

return statearr_29559;
})();
var statearr_29560_29624 = state_29550__$1;
(statearr_29560_29624[(2)] = null);

(statearr_29560_29624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29551 === (6))){
var inst_29515 = (state_29550[(7)]);
var state_29550__$1 = state_29550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29550__$1,(11),inst_29515);
} else {
if((state_val_29551 === (17))){
var inst_29536 = (state_29550[(2)]);
var state_29550__$1 = state_29550;
if(cljs.core.truth_(inst_29536)){
var statearr_29561_29625 = state_29550__$1;
(statearr_29561_29625[(1)] = (19));

} else {
var statearr_29562_29626 = state_29550__$1;
(statearr_29562_29626[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29551 === (3))){
var inst_29548 = (state_29550[(2)]);
var state_29550__$1 = state_29550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29550__$1,inst_29548);
} else {
if((state_val_29551 === (12))){
var inst_29525 = (state_29550[(10)]);
var state_29550__$1 = state_29550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29550__$1,(14),inst_29525);
} else {
if((state_val_29551 === (2))){
var state_29550__$1 = state_29550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29550__$1,(4),results);
} else {
if((state_val_29551 === (19))){
var state_29550__$1 = state_29550;
var statearr_29563_29627 = state_29550__$1;
(statearr_29563_29627[(2)] = null);

(statearr_29563_29627[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29551 === (11))){
var inst_29525 = (state_29550[(2)]);
var state_29550__$1 = (function (){var statearr_29564 = state_29550;
(statearr_29564[(10)] = inst_29525);

return statearr_29564;
})();
var statearr_29565_29628 = state_29550__$1;
(statearr_29565_29628[(2)] = null);

(statearr_29565_29628[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29551 === (9))){
var state_29550__$1 = state_29550;
var statearr_29566_29629 = state_29550__$1;
(statearr_29566_29629[(2)] = null);

(statearr_29566_29629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29551 === (5))){
var state_29550__$1 = state_29550;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29567_29630 = state_29550__$1;
(statearr_29567_29630[(1)] = (8));

} else {
var statearr_29568_29631 = state_29550__$1;
(statearr_29568_29631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29551 === (14))){
var inst_29530 = (state_29550[(11)]);
var inst_29528 = (state_29550[(8)]);
var inst_29528__$1 = (state_29550[(2)]);
var inst_29529 = (inst_29528__$1 == null);
var inst_29530__$1 = cljs.core.not.call(null,inst_29529);
var state_29550__$1 = (function (){var statearr_29569 = state_29550;
(statearr_29569[(11)] = inst_29530__$1);

(statearr_29569[(8)] = inst_29528__$1);

return statearr_29569;
})();
if(inst_29530__$1){
var statearr_29570_29632 = state_29550__$1;
(statearr_29570_29632[(1)] = (15));

} else {
var statearr_29571_29633 = state_29550__$1;
(statearr_29571_29633[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29551 === (16))){
var inst_29530 = (state_29550[(11)]);
var state_29550__$1 = state_29550;
var statearr_29572_29634 = state_29550__$1;
(statearr_29572_29634[(2)] = inst_29530);

(statearr_29572_29634[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29551 === (10))){
var inst_29522 = (state_29550[(2)]);
var state_29550__$1 = state_29550;
var statearr_29573_29635 = state_29550__$1;
(statearr_29573_29635[(2)] = inst_29522);

(statearr_29573_29635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29551 === (18))){
var inst_29533 = (state_29550[(2)]);
var state_29550__$1 = state_29550;
var statearr_29574_29636 = state_29550__$1;
(statearr_29574_29636[(2)] = inst_29533);

(statearr_29574_29636[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29551 === (8))){
var inst_29519 = cljs.core.async.close_BANG_.call(null,to);
var state_29550__$1 = state_29550;
var statearr_29575_29637 = state_29550__$1;
(statearr_29575_29637[(2)] = inst_29519);

(statearr_29575_29637[(1)] = (10));


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
});})(c__29025__auto__,jobs,results,process,async))
;
return ((function (switch__28913__auto__,c__29025__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____0 = (function (){
var statearr_29579 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29579[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__);

(statearr_29579[(1)] = (1));

return statearr_29579;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____1 = (function (state_29550){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_29550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e29580){if((e29580 instanceof Object)){
var ex__28917__auto__ = e29580;
var statearr_29581_29638 = state_29550;
(statearr_29581_29638[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29639 = state_29550;
state_29550 = G__29639;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__ = function(state_29550){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____1.call(this,state_29550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto__,jobs,results,process,async))
})();
var state__29027__auto__ = (function (){var statearr_29582 = f__29026__auto__.call(null);
(statearr_29582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto__);

return statearr_29582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto__,jobs,results,process,async))
);

return c__29025__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args29640 = [];
var len__27879__auto___29643 = arguments.length;
var i__27880__auto___29644 = (0);
while(true){
if((i__27880__auto___29644 < len__27879__auto___29643)){
args29640.push((arguments[i__27880__auto___29644]));

var G__29645 = (i__27880__auto___29644 + (1));
i__27880__auto___29644 = G__29645;
continue;
} else {
}
break;
}

var G__29642 = args29640.length;
switch (G__29642) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29640.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args29647 = [];
var len__27879__auto___29650 = arguments.length;
var i__27880__auto___29651 = (0);
while(true){
if((i__27880__auto___29651 < len__27879__auto___29650)){
args29647.push((arguments[i__27880__auto___29651]));

var G__29652 = (i__27880__auto___29651 + (1));
i__27880__auto___29651 = G__29652;
continue;
} else {
}
break;
}

var G__29649 = args29647.length;
switch (G__29649) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29647.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args29654 = [];
var len__27879__auto___29707 = arguments.length;
var i__27880__auto___29708 = (0);
while(true){
if((i__27880__auto___29708 < len__27879__auto___29707)){
args29654.push((arguments[i__27880__auto___29708]));

var G__29709 = (i__27880__auto___29708 + (1));
i__27880__auto___29708 = G__29709;
continue;
} else {
}
break;
}

var G__29656 = args29654.length;
switch (G__29656) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29654.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29025__auto___29711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto___29711,tc,fc){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto___29711,tc,fc){
return (function (state_29682){
var state_val_29683 = (state_29682[(1)]);
if((state_val_29683 === (7))){
var inst_29678 = (state_29682[(2)]);
var state_29682__$1 = state_29682;
var statearr_29684_29712 = state_29682__$1;
(statearr_29684_29712[(2)] = inst_29678);

(statearr_29684_29712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (1))){
var state_29682__$1 = state_29682;
var statearr_29685_29713 = state_29682__$1;
(statearr_29685_29713[(2)] = null);

(statearr_29685_29713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (4))){
var inst_29659 = (state_29682[(7)]);
var inst_29659__$1 = (state_29682[(2)]);
var inst_29660 = (inst_29659__$1 == null);
var state_29682__$1 = (function (){var statearr_29686 = state_29682;
(statearr_29686[(7)] = inst_29659__$1);

return statearr_29686;
})();
if(cljs.core.truth_(inst_29660)){
var statearr_29687_29714 = state_29682__$1;
(statearr_29687_29714[(1)] = (5));

} else {
var statearr_29688_29715 = state_29682__$1;
(statearr_29688_29715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (13))){
var state_29682__$1 = state_29682;
var statearr_29689_29716 = state_29682__$1;
(statearr_29689_29716[(2)] = null);

(statearr_29689_29716[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (6))){
var inst_29659 = (state_29682[(7)]);
var inst_29665 = p.call(null,inst_29659);
var state_29682__$1 = state_29682;
if(cljs.core.truth_(inst_29665)){
var statearr_29690_29717 = state_29682__$1;
(statearr_29690_29717[(1)] = (9));

} else {
var statearr_29691_29718 = state_29682__$1;
(statearr_29691_29718[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (3))){
var inst_29680 = (state_29682[(2)]);
var state_29682__$1 = state_29682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29682__$1,inst_29680);
} else {
if((state_val_29683 === (12))){
var state_29682__$1 = state_29682;
var statearr_29692_29719 = state_29682__$1;
(statearr_29692_29719[(2)] = null);

(statearr_29692_29719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (2))){
var state_29682__$1 = state_29682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29682__$1,(4),ch);
} else {
if((state_val_29683 === (11))){
var inst_29659 = (state_29682[(7)]);
var inst_29669 = (state_29682[(2)]);
var state_29682__$1 = state_29682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29682__$1,(8),inst_29669,inst_29659);
} else {
if((state_val_29683 === (9))){
var state_29682__$1 = state_29682;
var statearr_29693_29720 = state_29682__$1;
(statearr_29693_29720[(2)] = tc);

(statearr_29693_29720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (5))){
var inst_29662 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29663 = cljs.core.async.close_BANG_.call(null,fc);
var state_29682__$1 = (function (){var statearr_29694 = state_29682;
(statearr_29694[(8)] = inst_29662);

return statearr_29694;
})();
var statearr_29695_29721 = state_29682__$1;
(statearr_29695_29721[(2)] = inst_29663);

(statearr_29695_29721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (14))){
var inst_29676 = (state_29682[(2)]);
var state_29682__$1 = state_29682;
var statearr_29696_29722 = state_29682__$1;
(statearr_29696_29722[(2)] = inst_29676);

(statearr_29696_29722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (10))){
var state_29682__$1 = state_29682;
var statearr_29697_29723 = state_29682__$1;
(statearr_29697_29723[(2)] = fc);

(statearr_29697_29723[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29683 === (8))){
var inst_29671 = (state_29682[(2)]);
var state_29682__$1 = state_29682;
if(cljs.core.truth_(inst_29671)){
var statearr_29698_29724 = state_29682__$1;
(statearr_29698_29724[(1)] = (12));

} else {
var statearr_29699_29725 = state_29682__$1;
(statearr_29699_29725[(1)] = (13));

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
});})(c__29025__auto___29711,tc,fc))
;
return ((function (switch__28913__auto__,c__29025__auto___29711,tc,fc){
return (function() {
var cljs$core$async$state_machine__28914__auto__ = null;
var cljs$core$async$state_machine__28914__auto____0 = (function (){
var statearr_29703 = [null,null,null,null,null,null,null,null,null];
(statearr_29703[(0)] = cljs$core$async$state_machine__28914__auto__);

(statearr_29703[(1)] = (1));

return statearr_29703;
});
var cljs$core$async$state_machine__28914__auto____1 = (function (state_29682){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_29682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e29704){if((e29704 instanceof Object)){
var ex__28917__auto__ = e29704;
var statearr_29705_29726 = state_29682;
(statearr_29705_29726[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29727 = state_29682;
state_29682 = G__29727;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
cljs$core$async$state_machine__28914__auto__ = function(state_29682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28914__auto____1.call(this,state_29682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28914__auto____0;
cljs$core$async$state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28914__auto____1;
return cljs$core$async$state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto___29711,tc,fc))
})();
var state__29027__auto__ = (function (){var statearr_29706 = f__29026__auto__.call(null);
(statearr_29706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto___29711);

return statearr_29706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto___29711,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29025__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto__){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto__){
return (function (state_29791){
var state_val_29792 = (state_29791[(1)]);
if((state_val_29792 === (7))){
var inst_29787 = (state_29791[(2)]);
var state_29791__$1 = state_29791;
var statearr_29793_29814 = state_29791__$1;
(statearr_29793_29814[(2)] = inst_29787);

(statearr_29793_29814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (1))){
var inst_29771 = init;
var state_29791__$1 = (function (){var statearr_29794 = state_29791;
(statearr_29794[(7)] = inst_29771);

return statearr_29794;
})();
var statearr_29795_29815 = state_29791__$1;
(statearr_29795_29815[(2)] = null);

(statearr_29795_29815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (4))){
var inst_29774 = (state_29791[(8)]);
var inst_29774__$1 = (state_29791[(2)]);
var inst_29775 = (inst_29774__$1 == null);
var state_29791__$1 = (function (){var statearr_29796 = state_29791;
(statearr_29796[(8)] = inst_29774__$1);

return statearr_29796;
})();
if(cljs.core.truth_(inst_29775)){
var statearr_29797_29816 = state_29791__$1;
(statearr_29797_29816[(1)] = (5));

} else {
var statearr_29798_29817 = state_29791__$1;
(statearr_29798_29817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (6))){
var inst_29771 = (state_29791[(7)]);
var inst_29778 = (state_29791[(9)]);
var inst_29774 = (state_29791[(8)]);
var inst_29778__$1 = f.call(null,inst_29771,inst_29774);
var inst_29779 = cljs.core.reduced_QMARK_.call(null,inst_29778__$1);
var state_29791__$1 = (function (){var statearr_29799 = state_29791;
(statearr_29799[(9)] = inst_29778__$1);

return statearr_29799;
})();
if(inst_29779){
var statearr_29800_29818 = state_29791__$1;
(statearr_29800_29818[(1)] = (8));

} else {
var statearr_29801_29819 = state_29791__$1;
(statearr_29801_29819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (3))){
var inst_29789 = (state_29791[(2)]);
var state_29791__$1 = state_29791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29791__$1,inst_29789);
} else {
if((state_val_29792 === (2))){
var state_29791__$1 = state_29791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29791__$1,(4),ch);
} else {
if((state_val_29792 === (9))){
var inst_29778 = (state_29791[(9)]);
var inst_29771 = inst_29778;
var state_29791__$1 = (function (){var statearr_29802 = state_29791;
(statearr_29802[(7)] = inst_29771);

return statearr_29802;
})();
var statearr_29803_29820 = state_29791__$1;
(statearr_29803_29820[(2)] = null);

(statearr_29803_29820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (5))){
var inst_29771 = (state_29791[(7)]);
var state_29791__$1 = state_29791;
var statearr_29804_29821 = state_29791__$1;
(statearr_29804_29821[(2)] = inst_29771);

(statearr_29804_29821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (10))){
var inst_29785 = (state_29791[(2)]);
var state_29791__$1 = state_29791;
var statearr_29805_29822 = state_29791__$1;
(statearr_29805_29822[(2)] = inst_29785);

(statearr_29805_29822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29792 === (8))){
var inst_29778 = (state_29791[(9)]);
var inst_29781 = cljs.core.deref.call(null,inst_29778);
var state_29791__$1 = state_29791;
var statearr_29806_29823 = state_29791__$1;
(statearr_29806_29823[(2)] = inst_29781);

(statearr_29806_29823[(1)] = (10));


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
});})(c__29025__auto__))
;
return ((function (switch__28913__auto__,c__29025__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28914__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28914__auto____0 = (function (){
var statearr_29810 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29810[(0)] = cljs$core$async$reduce_$_state_machine__28914__auto__);

(statearr_29810[(1)] = (1));

return statearr_29810;
});
var cljs$core$async$reduce_$_state_machine__28914__auto____1 = (function (state_29791){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_29791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e29811){if((e29811 instanceof Object)){
var ex__28917__auto__ = e29811;
var statearr_29812_29824 = state_29791;
(statearr_29812_29824[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29825 = state_29791;
state_29791 = G__29825;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28914__auto__ = function(state_29791){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28914__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28914__auto____1.call(this,state_29791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28914__auto____0;
cljs$core$async$reduce_$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28914__auto____1;
return cljs$core$async$reduce_$_state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto__))
})();
var state__29027__auto__ = (function (){var statearr_29813 = f__29026__auto__.call(null);
(statearr_29813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto__);

return statearr_29813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto__))
);

return c__29025__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29025__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto__,f__$1){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto__,f__$1){
return (function (state_29845){
var state_val_29846 = (state_29845[(1)]);
if((state_val_29846 === (1))){
var inst_29840 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_29845__$1 = state_29845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29845__$1,(2),inst_29840);
} else {
if((state_val_29846 === (2))){
var inst_29842 = (state_29845[(2)]);
var inst_29843 = f__$1.call(null,inst_29842);
var state_29845__$1 = state_29845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29845__$1,inst_29843);
} else {
return null;
}
}
});})(c__29025__auto__,f__$1))
;
return ((function (switch__28913__auto__,c__29025__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28914__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28914__auto____0 = (function (){
var statearr_29850 = [null,null,null,null,null,null,null];
(statearr_29850[(0)] = cljs$core$async$transduce_$_state_machine__28914__auto__);

(statearr_29850[(1)] = (1));

return statearr_29850;
});
var cljs$core$async$transduce_$_state_machine__28914__auto____1 = (function (state_29845){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_29845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e29851){if((e29851 instanceof Object)){
var ex__28917__auto__ = e29851;
var statearr_29852_29854 = state_29845;
(statearr_29852_29854[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29855 = state_29845;
state_29845 = G__29855;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28914__auto__ = function(state_29845){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28914__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28914__auto____1.call(this,state_29845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28914__auto____0;
cljs$core$async$transduce_$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28914__auto____1;
return cljs$core$async$transduce_$_state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto__,f__$1))
})();
var state__29027__auto__ = (function (){var statearr_29853 = f__29026__auto__.call(null);
(statearr_29853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto__);

return statearr_29853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto__,f__$1))
);

return c__29025__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29856 = [];
var len__27879__auto___29908 = arguments.length;
var i__27880__auto___29909 = (0);
while(true){
if((i__27880__auto___29909 < len__27879__auto___29908)){
args29856.push((arguments[i__27880__auto___29909]));

var G__29910 = (i__27880__auto___29909 + (1));
i__27880__auto___29909 = G__29910;
continue;
} else {
}
break;
}

var G__29858 = args29856.length;
switch (G__29858) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29856.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29025__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto__){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto__){
return (function (state_29883){
var state_val_29884 = (state_29883[(1)]);
if((state_val_29884 === (7))){
var inst_29865 = (state_29883[(2)]);
var state_29883__$1 = state_29883;
var statearr_29885_29912 = state_29883__$1;
(statearr_29885_29912[(2)] = inst_29865);

(statearr_29885_29912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29884 === (1))){
var inst_29859 = cljs.core.seq.call(null,coll);
var inst_29860 = inst_29859;
var state_29883__$1 = (function (){var statearr_29886 = state_29883;
(statearr_29886[(7)] = inst_29860);

return statearr_29886;
})();
var statearr_29887_29913 = state_29883__$1;
(statearr_29887_29913[(2)] = null);

(statearr_29887_29913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29884 === (4))){
var inst_29860 = (state_29883[(7)]);
var inst_29863 = cljs.core.first.call(null,inst_29860);
var state_29883__$1 = state_29883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29883__$1,(7),ch,inst_29863);
} else {
if((state_val_29884 === (13))){
var inst_29877 = (state_29883[(2)]);
var state_29883__$1 = state_29883;
var statearr_29888_29914 = state_29883__$1;
(statearr_29888_29914[(2)] = inst_29877);

(statearr_29888_29914[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29884 === (6))){
var inst_29868 = (state_29883[(2)]);
var state_29883__$1 = state_29883;
if(cljs.core.truth_(inst_29868)){
var statearr_29889_29915 = state_29883__$1;
(statearr_29889_29915[(1)] = (8));

} else {
var statearr_29890_29916 = state_29883__$1;
(statearr_29890_29916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29884 === (3))){
var inst_29881 = (state_29883[(2)]);
var state_29883__$1 = state_29883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29883__$1,inst_29881);
} else {
if((state_val_29884 === (12))){
var state_29883__$1 = state_29883;
var statearr_29891_29917 = state_29883__$1;
(statearr_29891_29917[(2)] = null);

(statearr_29891_29917[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29884 === (2))){
var inst_29860 = (state_29883[(7)]);
var state_29883__$1 = state_29883;
if(cljs.core.truth_(inst_29860)){
var statearr_29892_29918 = state_29883__$1;
(statearr_29892_29918[(1)] = (4));

} else {
var statearr_29893_29919 = state_29883__$1;
(statearr_29893_29919[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29884 === (11))){
var inst_29874 = cljs.core.async.close_BANG_.call(null,ch);
var state_29883__$1 = state_29883;
var statearr_29894_29920 = state_29883__$1;
(statearr_29894_29920[(2)] = inst_29874);

(statearr_29894_29920[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29884 === (9))){
var state_29883__$1 = state_29883;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29895_29921 = state_29883__$1;
(statearr_29895_29921[(1)] = (11));

} else {
var statearr_29896_29922 = state_29883__$1;
(statearr_29896_29922[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29884 === (5))){
var inst_29860 = (state_29883[(7)]);
var state_29883__$1 = state_29883;
var statearr_29897_29923 = state_29883__$1;
(statearr_29897_29923[(2)] = inst_29860);

(statearr_29897_29923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29884 === (10))){
var inst_29879 = (state_29883[(2)]);
var state_29883__$1 = state_29883;
var statearr_29898_29924 = state_29883__$1;
(statearr_29898_29924[(2)] = inst_29879);

(statearr_29898_29924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29884 === (8))){
var inst_29860 = (state_29883[(7)]);
var inst_29870 = cljs.core.next.call(null,inst_29860);
var inst_29860__$1 = inst_29870;
var state_29883__$1 = (function (){var statearr_29899 = state_29883;
(statearr_29899[(7)] = inst_29860__$1);

return statearr_29899;
})();
var statearr_29900_29925 = state_29883__$1;
(statearr_29900_29925[(2)] = null);

(statearr_29900_29925[(1)] = (2));


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
});})(c__29025__auto__))
;
return ((function (switch__28913__auto__,c__29025__auto__){
return (function() {
var cljs$core$async$state_machine__28914__auto__ = null;
var cljs$core$async$state_machine__28914__auto____0 = (function (){
var statearr_29904 = [null,null,null,null,null,null,null,null];
(statearr_29904[(0)] = cljs$core$async$state_machine__28914__auto__);

(statearr_29904[(1)] = (1));

return statearr_29904;
});
var cljs$core$async$state_machine__28914__auto____1 = (function (state_29883){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_29883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e29905){if((e29905 instanceof Object)){
var ex__28917__auto__ = e29905;
var statearr_29906_29926 = state_29883;
(statearr_29906_29926[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29927 = state_29883;
state_29883 = G__29927;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
cljs$core$async$state_machine__28914__auto__ = function(state_29883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28914__auto____1.call(this,state_29883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28914__auto____0;
cljs$core$async$state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28914__auto____1;
return cljs$core$async$state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto__))
})();
var state__29027__auto__ = (function (){var statearr_29907 = f__29026__auto__.call(null);
(statearr_29907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto__);

return statearr_29907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto__))
);

return c__29025__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__27467__auto__ = (((_ == null))?null:_);
var m__27468__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27467__auto__)]);
if(!((m__27468__auto__ == null))){
return m__27468__auto__.call(null,_);
} else {
var m__27468__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27468__auto____$1 == null))){
return m__27468__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__27467__auto__ = (((m == null))?null:m);
var m__27468__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27467__auto__)]);
if(!((m__27468__auto__ == null))){
return m__27468__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27468__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27468__auto____$1 == null))){
return m__27468__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__27467__auto__ = (((m == null))?null:m);
var m__27468__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27467__auto__)]);
if(!((m__27468__auto__ == null))){
return m__27468__auto__.call(null,m,ch);
} else {
var m__27468__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27468__auto____$1 == null))){
return m__27468__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__27467__auto__ = (((m == null))?null:m);
var m__27468__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27467__auto__)]);
if(!((m__27468__auto__ == null))){
return m__27468__auto__.call(null,m);
} else {
var m__27468__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27468__auto____$1 == null))){
return m__27468__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30153 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30153 = (function (mult,ch,cs,meta30154){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta30154 = meta30154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30155,meta30154__$1){
var self__ = this;
var _30155__$1 = this;
return (new cljs.core.async.t_cljs$core$async30153(self__.mult,self__.ch,self__.cs,meta30154__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30153.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30155){
var self__ = this;
var _30155__$1 = this;
return self__.meta30154;
});})(cs))
;

cljs.core.async.t_cljs$core$async30153.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30153.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30153.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async30153.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30153.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30153.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30153.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30154","meta30154",-1787706143,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30153.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30153.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30153";

cljs.core.async.t_cljs$core$async30153.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27410__auto__,writer__27411__auto__,opt__27412__auto__){
return cljs.core._write.call(null,writer__27411__auto__,"cljs.core.async/t_cljs$core$async30153");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30153 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30153(mult__$1,ch__$1,cs__$1,meta30154){
return (new cljs.core.async.t_cljs$core$async30153(mult__$1,ch__$1,cs__$1,meta30154));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30153(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29025__auto___30378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto___30378,cs,m,dchan,dctr,done){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto___30378,cs,m,dchan,dctr,done){
return (function (state_30290){
var state_val_30291 = (state_30290[(1)]);
if((state_val_30291 === (7))){
var inst_30286 = (state_30290[(2)]);
var state_30290__$1 = state_30290;
var statearr_30292_30379 = state_30290__$1;
(statearr_30292_30379[(2)] = inst_30286);

(statearr_30292_30379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (20))){
var inst_30189 = (state_30290[(7)]);
var inst_30201 = cljs.core.first.call(null,inst_30189);
var inst_30202 = cljs.core.nth.call(null,inst_30201,(0),null);
var inst_30203 = cljs.core.nth.call(null,inst_30201,(1),null);
var state_30290__$1 = (function (){var statearr_30293 = state_30290;
(statearr_30293[(8)] = inst_30202);

return statearr_30293;
})();
if(cljs.core.truth_(inst_30203)){
var statearr_30294_30380 = state_30290__$1;
(statearr_30294_30380[(1)] = (22));

} else {
var statearr_30295_30381 = state_30290__$1;
(statearr_30295_30381[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (27))){
var inst_30158 = (state_30290[(9)]);
var inst_30238 = (state_30290[(10)]);
var inst_30231 = (state_30290[(11)]);
var inst_30233 = (state_30290[(12)]);
var inst_30238__$1 = cljs.core._nth.call(null,inst_30231,inst_30233);
var inst_30239 = cljs.core.async.put_BANG_.call(null,inst_30238__$1,inst_30158,done);
var state_30290__$1 = (function (){var statearr_30296 = state_30290;
(statearr_30296[(10)] = inst_30238__$1);

return statearr_30296;
})();
if(cljs.core.truth_(inst_30239)){
var statearr_30297_30382 = state_30290__$1;
(statearr_30297_30382[(1)] = (30));

} else {
var statearr_30298_30383 = state_30290__$1;
(statearr_30298_30383[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (1))){
var state_30290__$1 = state_30290;
var statearr_30299_30384 = state_30290__$1;
(statearr_30299_30384[(2)] = null);

(statearr_30299_30384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (24))){
var inst_30189 = (state_30290[(7)]);
var inst_30208 = (state_30290[(2)]);
var inst_30209 = cljs.core.next.call(null,inst_30189);
var inst_30167 = inst_30209;
var inst_30168 = null;
var inst_30169 = (0);
var inst_30170 = (0);
var state_30290__$1 = (function (){var statearr_30300 = state_30290;
(statearr_30300[(13)] = inst_30169);

(statearr_30300[(14)] = inst_30170);

(statearr_30300[(15)] = inst_30208);

(statearr_30300[(16)] = inst_30168);

(statearr_30300[(17)] = inst_30167);

return statearr_30300;
})();
var statearr_30301_30385 = state_30290__$1;
(statearr_30301_30385[(2)] = null);

(statearr_30301_30385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (39))){
var state_30290__$1 = state_30290;
var statearr_30305_30386 = state_30290__$1;
(statearr_30305_30386[(2)] = null);

(statearr_30305_30386[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (4))){
var inst_30158 = (state_30290[(9)]);
var inst_30158__$1 = (state_30290[(2)]);
var inst_30159 = (inst_30158__$1 == null);
var state_30290__$1 = (function (){var statearr_30306 = state_30290;
(statearr_30306[(9)] = inst_30158__$1);

return statearr_30306;
})();
if(cljs.core.truth_(inst_30159)){
var statearr_30307_30387 = state_30290__$1;
(statearr_30307_30387[(1)] = (5));

} else {
var statearr_30308_30388 = state_30290__$1;
(statearr_30308_30388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (15))){
var inst_30169 = (state_30290[(13)]);
var inst_30170 = (state_30290[(14)]);
var inst_30168 = (state_30290[(16)]);
var inst_30167 = (state_30290[(17)]);
var inst_30185 = (state_30290[(2)]);
var inst_30186 = (inst_30170 + (1));
var tmp30302 = inst_30169;
var tmp30303 = inst_30168;
var tmp30304 = inst_30167;
var inst_30167__$1 = tmp30304;
var inst_30168__$1 = tmp30303;
var inst_30169__$1 = tmp30302;
var inst_30170__$1 = inst_30186;
var state_30290__$1 = (function (){var statearr_30309 = state_30290;
(statearr_30309[(13)] = inst_30169__$1);

(statearr_30309[(14)] = inst_30170__$1);

(statearr_30309[(16)] = inst_30168__$1);

(statearr_30309[(17)] = inst_30167__$1);

(statearr_30309[(18)] = inst_30185);

return statearr_30309;
})();
var statearr_30310_30389 = state_30290__$1;
(statearr_30310_30389[(2)] = null);

(statearr_30310_30389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (21))){
var inst_30212 = (state_30290[(2)]);
var state_30290__$1 = state_30290;
var statearr_30314_30390 = state_30290__$1;
(statearr_30314_30390[(2)] = inst_30212);

(statearr_30314_30390[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (31))){
var inst_30238 = (state_30290[(10)]);
var inst_30242 = done.call(null,null);
var inst_30243 = cljs.core.async.untap_STAR_.call(null,m,inst_30238);
var state_30290__$1 = (function (){var statearr_30315 = state_30290;
(statearr_30315[(19)] = inst_30242);

return statearr_30315;
})();
var statearr_30316_30391 = state_30290__$1;
(statearr_30316_30391[(2)] = inst_30243);

(statearr_30316_30391[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (32))){
var inst_30230 = (state_30290[(20)]);
var inst_30231 = (state_30290[(11)]);
var inst_30232 = (state_30290[(21)]);
var inst_30233 = (state_30290[(12)]);
var inst_30245 = (state_30290[(2)]);
var inst_30246 = (inst_30233 + (1));
var tmp30311 = inst_30230;
var tmp30312 = inst_30231;
var tmp30313 = inst_30232;
var inst_30230__$1 = tmp30311;
var inst_30231__$1 = tmp30312;
var inst_30232__$1 = tmp30313;
var inst_30233__$1 = inst_30246;
var state_30290__$1 = (function (){var statearr_30317 = state_30290;
(statearr_30317[(20)] = inst_30230__$1);

(statearr_30317[(22)] = inst_30245);

(statearr_30317[(11)] = inst_30231__$1);

(statearr_30317[(21)] = inst_30232__$1);

(statearr_30317[(12)] = inst_30233__$1);

return statearr_30317;
})();
var statearr_30318_30392 = state_30290__$1;
(statearr_30318_30392[(2)] = null);

(statearr_30318_30392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (40))){
var inst_30258 = (state_30290[(23)]);
var inst_30262 = done.call(null,null);
var inst_30263 = cljs.core.async.untap_STAR_.call(null,m,inst_30258);
var state_30290__$1 = (function (){var statearr_30319 = state_30290;
(statearr_30319[(24)] = inst_30262);

return statearr_30319;
})();
var statearr_30320_30393 = state_30290__$1;
(statearr_30320_30393[(2)] = inst_30263);

(statearr_30320_30393[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (33))){
var inst_30249 = (state_30290[(25)]);
var inst_30251 = cljs.core.chunked_seq_QMARK_.call(null,inst_30249);
var state_30290__$1 = state_30290;
if(inst_30251){
var statearr_30321_30394 = state_30290__$1;
(statearr_30321_30394[(1)] = (36));

} else {
var statearr_30322_30395 = state_30290__$1;
(statearr_30322_30395[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (13))){
var inst_30179 = (state_30290[(26)]);
var inst_30182 = cljs.core.async.close_BANG_.call(null,inst_30179);
var state_30290__$1 = state_30290;
var statearr_30323_30396 = state_30290__$1;
(statearr_30323_30396[(2)] = inst_30182);

(statearr_30323_30396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (22))){
var inst_30202 = (state_30290[(8)]);
var inst_30205 = cljs.core.async.close_BANG_.call(null,inst_30202);
var state_30290__$1 = state_30290;
var statearr_30324_30397 = state_30290__$1;
(statearr_30324_30397[(2)] = inst_30205);

(statearr_30324_30397[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (36))){
var inst_30249 = (state_30290[(25)]);
var inst_30253 = cljs.core.chunk_first.call(null,inst_30249);
var inst_30254 = cljs.core.chunk_rest.call(null,inst_30249);
var inst_30255 = cljs.core.count.call(null,inst_30253);
var inst_30230 = inst_30254;
var inst_30231 = inst_30253;
var inst_30232 = inst_30255;
var inst_30233 = (0);
var state_30290__$1 = (function (){var statearr_30325 = state_30290;
(statearr_30325[(20)] = inst_30230);

(statearr_30325[(11)] = inst_30231);

(statearr_30325[(21)] = inst_30232);

(statearr_30325[(12)] = inst_30233);

return statearr_30325;
})();
var statearr_30326_30398 = state_30290__$1;
(statearr_30326_30398[(2)] = null);

(statearr_30326_30398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (41))){
var inst_30249 = (state_30290[(25)]);
var inst_30265 = (state_30290[(2)]);
var inst_30266 = cljs.core.next.call(null,inst_30249);
var inst_30230 = inst_30266;
var inst_30231 = null;
var inst_30232 = (0);
var inst_30233 = (0);
var state_30290__$1 = (function (){var statearr_30327 = state_30290;
(statearr_30327[(20)] = inst_30230);

(statearr_30327[(11)] = inst_30231);

(statearr_30327[(21)] = inst_30232);

(statearr_30327[(27)] = inst_30265);

(statearr_30327[(12)] = inst_30233);

return statearr_30327;
})();
var statearr_30328_30399 = state_30290__$1;
(statearr_30328_30399[(2)] = null);

(statearr_30328_30399[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (43))){
var state_30290__$1 = state_30290;
var statearr_30329_30400 = state_30290__$1;
(statearr_30329_30400[(2)] = null);

(statearr_30329_30400[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (29))){
var inst_30274 = (state_30290[(2)]);
var state_30290__$1 = state_30290;
var statearr_30330_30401 = state_30290__$1;
(statearr_30330_30401[(2)] = inst_30274);

(statearr_30330_30401[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (44))){
var inst_30283 = (state_30290[(2)]);
var state_30290__$1 = (function (){var statearr_30331 = state_30290;
(statearr_30331[(28)] = inst_30283);

return statearr_30331;
})();
var statearr_30332_30402 = state_30290__$1;
(statearr_30332_30402[(2)] = null);

(statearr_30332_30402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (6))){
var inst_30222 = (state_30290[(29)]);
var inst_30221 = cljs.core.deref.call(null,cs);
var inst_30222__$1 = cljs.core.keys.call(null,inst_30221);
var inst_30223 = cljs.core.count.call(null,inst_30222__$1);
var inst_30224 = cljs.core.reset_BANG_.call(null,dctr,inst_30223);
var inst_30229 = cljs.core.seq.call(null,inst_30222__$1);
var inst_30230 = inst_30229;
var inst_30231 = null;
var inst_30232 = (0);
var inst_30233 = (0);
var state_30290__$1 = (function (){var statearr_30333 = state_30290;
(statearr_30333[(20)] = inst_30230);

(statearr_30333[(11)] = inst_30231);

(statearr_30333[(21)] = inst_30232);

(statearr_30333[(29)] = inst_30222__$1);

(statearr_30333[(30)] = inst_30224);

(statearr_30333[(12)] = inst_30233);

return statearr_30333;
})();
var statearr_30334_30403 = state_30290__$1;
(statearr_30334_30403[(2)] = null);

(statearr_30334_30403[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (28))){
var inst_30230 = (state_30290[(20)]);
var inst_30249 = (state_30290[(25)]);
var inst_30249__$1 = cljs.core.seq.call(null,inst_30230);
var state_30290__$1 = (function (){var statearr_30335 = state_30290;
(statearr_30335[(25)] = inst_30249__$1);

return statearr_30335;
})();
if(inst_30249__$1){
var statearr_30336_30404 = state_30290__$1;
(statearr_30336_30404[(1)] = (33));

} else {
var statearr_30337_30405 = state_30290__$1;
(statearr_30337_30405[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (25))){
var inst_30232 = (state_30290[(21)]);
var inst_30233 = (state_30290[(12)]);
var inst_30235 = (inst_30233 < inst_30232);
var inst_30236 = inst_30235;
var state_30290__$1 = state_30290;
if(cljs.core.truth_(inst_30236)){
var statearr_30338_30406 = state_30290__$1;
(statearr_30338_30406[(1)] = (27));

} else {
var statearr_30339_30407 = state_30290__$1;
(statearr_30339_30407[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (34))){
var state_30290__$1 = state_30290;
var statearr_30340_30408 = state_30290__$1;
(statearr_30340_30408[(2)] = null);

(statearr_30340_30408[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (17))){
var state_30290__$1 = state_30290;
var statearr_30341_30409 = state_30290__$1;
(statearr_30341_30409[(2)] = null);

(statearr_30341_30409[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (3))){
var inst_30288 = (state_30290[(2)]);
var state_30290__$1 = state_30290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30290__$1,inst_30288);
} else {
if((state_val_30291 === (12))){
var inst_30217 = (state_30290[(2)]);
var state_30290__$1 = state_30290;
var statearr_30342_30410 = state_30290__$1;
(statearr_30342_30410[(2)] = inst_30217);

(statearr_30342_30410[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (2))){
var state_30290__$1 = state_30290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30290__$1,(4),ch);
} else {
if((state_val_30291 === (23))){
var state_30290__$1 = state_30290;
var statearr_30343_30411 = state_30290__$1;
(statearr_30343_30411[(2)] = null);

(statearr_30343_30411[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (35))){
var inst_30272 = (state_30290[(2)]);
var state_30290__$1 = state_30290;
var statearr_30344_30412 = state_30290__$1;
(statearr_30344_30412[(2)] = inst_30272);

(statearr_30344_30412[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (19))){
var inst_30189 = (state_30290[(7)]);
var inst_30193 = cljs.core.chunk_first.call(null,inst_30189);
var inst_30194 = cljs.core.chunk_rest.call(null,inst_30189);
var inst_30195 = cljs.core.count.call(null,inst_30193);
var inst_30167 = inst_30194;
var inst_30168 = inst_30193;
var inst_30169 = inst_30195;
var inst_30170 = (0);
var state_30290__$1 = (function (){var statearr_30345 = state_30290;
(statearr_30345[(13)] = inst_30169);

(statearr_30345[(14)] = inst_30170);

(statearr_30345[(16)] = inst_30168);

(statearr_30345[(17)] = inst_30167);

return statearr_30345;
})();
var statearr_30346_30413 = state_30290__$1;
(statearr_30346_30413[(2)] = null);

(statearr_30346_30413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (11))){
var inst_30189 = (state_30290[(7)]);
var inst_30167 = (state_30290[(17)]);
var inst_30189__$1 = cljs.core.seq.call(null,inst_30167);
var state_30290__$1 = (function (){var statearr_30347 = state_30290;
(statearr_30347[(7)] = inst_30189__$1);

return statearr_30347;
})();
if(inst_30189__$1){
var statearr_30348_30414 = state_30290__$1;
(statearr_30348_30414[(1)] = (16));

} else {
var statearr_30349_30415 = state_30290__$1;
(statearr_30349_30415[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (9))){
var inst_30219 = (state_30290[(2)]);
var state_30290__$1 = state_30290;
var statearr_30350_30416 = state_30290__$1;
(statearr_30350_30416[(2)] = inst_30219);

(statearr_30350_30416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (5))){
var inst_30165 = cljs.core.deref.call(null,cs);
var inst_30166 = cljs.core.seq.call(null,inst_30165);
var inst_30167 = inst_30166;
var inst_30168 = null;
var inst_30169 = (0);
var inst_30170 = (0);
var state_30290__$1 = (function (){var statearr_30351 = state_30290;
(statearr_30351[(13)] = inst_30169);

(statearr_30351[(14)] = inst_30170);

(statearr_30351[(16)] = inst_30168);

(statearr_30351[(17)] = inst_30167);

return statearr_30351;
})();
var statearr_30352_30417 = state_30290__$1;
(statearr_30352_30417[(2)] = null);

(statearr_30352_30417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (14))){
var state_30290__$1 = state_30290;
var statearr_30353_30418 = state_30290__$1;
(statearr_30353_30418[(2)] = null);

(statearr_30353_30418[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (45))){
var inst_30280 = (state_30290[(2)]);
var state_30290__$1 = state_30290;
var statearr_30354_30419 = state_30290__$1;
(statearr_30354_30419[(2)] = inst_30280);

(statearr_30354_30419[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (26))){
var inst_30222 = (state_30290[(29)]);
var inst_30276 = (state_30290[(2)]);
var inst_30277 = cljs.core.seq.call(null,inst_30222);
var state_30290__$1 = (function (){var statearr_30355 = state_30290;
(statearr_30355[(31)] = inst_30276);

return statearr_30355;
})();
if(inst_30277){
var statearr_30356_30420 = state_30290__$1;
(statearr_30356_30420[(1)] = (42));

} else {
var statearr_30357_30421 = state_30290__$1;
(statearr_30357_30421[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (16))){
var inst_30189 = (state_30290[(7)]);
var inst_30191 = cljs.core.chunked_seq_QMARK_.call(null,inst_30189);
var state_30290__$1 = state_30290;
if(inst_30191){
var statearr_30358_30422 = state_30290__$1;
(statearr_30358_30422[(1)] = (19));

} else {
var statearr_30359_30423 = state_30290__$1;
(statearr_30359_30423[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (38))){
var inst_30269 = (state_30290[(2)]);
var state_30290__$1 = state_30290;
var statearr_30360_30424 = state_30290__$1;
(statearr_30360_30424[(2)] = inst_30269);

(statearr_30360_30424[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (30))){
var state_30290__$1 = state_30290;
var statearr_30361_30425 = state_30290__$1;
(statearr_30361_30425[(2)] = null);

(statearr_30361_30425[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (10))){
var inst_30170 = (state_30290[(14)]);
var inst_30168 = (state_30290[(16)]);
var inst_30178 = cljs.core._nth.call(null,inst_30168,inst_30170);
var inst_30179 = cljs.core.nth.call(null,inst_30178,(0),null);
var inst_30180 = cljs.core.nth.call(null,inst_30178,(1),null);
var state_30290__$1 = (function (){var statearr_30362 = state_30290;
(statearr_30362[(26)] = inst_30179);

return statearr_30362;
})();
if(cljs.core.truth_(inst_30180)){
var statearr_30363_30426 = state_30290__$1;
(statearr_30363_30426[(1)] = (13));

} else {
var statearr_30364_30427 = state_30290__$1;
(statearr_30364_30427[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (18))){
var inst_30215 = (state_30290[(2)]);
var state_30290__$1 = state_30290;
var statearr_30365_30428 = state_30290__$1;
(statearr_30365_30428[(2)] = inst_30215);

(statearr_30365_30428[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (42))){
var state_30290__$1 = state_30290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30290__$1,(45),dchan);
} else {
if((state_val_30291 === (37))){
var inst_30158 = (state_30290[(9)]);
var inst_30249 = (state_30290[(25)]);
var inst_30258 = (state_30290[(23)]);
var inst_30258__$1 = cljs.core.first.call(null,inst_30249);
var inst_30259 = cljs.core.async.put_BANG_.call(null,inst_30258__$1,inst_30158,done);
var state_30290__$1 = (function (){var statearr_30366 = state_30290;
(statearr_30366[(23)] = inst_30258__$1);

return statearr_30366;
})();
if(cljs.core.truth_(inst_30259)){
var statearr_30367_30429 = state_30290__$1;
(statearr_30367_30429[(1)] = (39));

} else {
var statearr_30368_30430 = state_30290__$1;
(statearr_30368_30430[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30291 === (8))){
var inst_30169 = (state_30290[(13)]);
var inst_30170 = (state_30290[(14)]);
var inst_30172 = (inst_30170 < inst_30169);
var inst_30173 = inst_30172;
var state_30290__$1 = state_30290;
if(cljs.core.truth_(inst_30173)){
var statearr_30369_30431 = state_30290__$1;
(statearr_30369_30431[(1)] = (10));

} else {
var statearr_30370_30432 = state_30290__$1;
(statearr_30370_30432[(1)] = (11));

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
});})(c__29025__auto___30378,cs,m,dchan,dctr,done))
;
return ((function (switch__28913__auto__,c__29025__auto___30378,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28914__auto__ = null;
var cljs$core$async$mult_$_state_machine__28914__auto____0 = (function (){
var statearr_30374 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30374[(0)] = cljs$core$async$mult_$_state_machine__28914__auto__);

(statearr_30374[(1)] = (1));

return statearr_30374;
});
var cljs$core$async$mult_$_state_machine__28914__auto____1 = (function (state_30290){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_30290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e30375){if((e30375 instanceof Object)){
var ex__28917__auto__ = e30375;
var statearr_30376_30433 = state_30290;
(statearr_30376_30433[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30434 = state_30290;
state_30290 = G__30434;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28914__auto__ = function(state_30290){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28914__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28914__auto____1.call(this,state_30290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28914__auto____0;
cljs$core$async$mult_$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28914__auto____1;
return cljs$core$async$mult_$_state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto___30378,cs,m,dchan,dctr,done))
})();
var state__29027__auto__ = (function (){var statearr_30377 = f__29026__auto__.call(null);
(statearr_30377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto___30378);

return statearr_30377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto___30378,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args30435 = [];
var len__27879__auto___30438 = arguments.length;
var i__27880__auto___30439 = (0);
while(true){
if((i__27880__auto___30439 < len__27879__auto___30438)){
args30435.push((arguments[i__27880__auto___30439]));

var G__30440 = (i__27880__auto___30439 + (1));
i__27880__auto___30439 = G__30440;
continue;
} else {
}
break;
}

var G__30437 = args30435.length;
switch (G__30437) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30435.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__27467__auto__ = (((m == null))?null:m);
var m__27468__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27467__auto__)]);
if(!((m__27468__auto__ == null))){
return m__27468__auto__.call(null,m,ch);
} else {
var m__27468__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27468__auto____$1 == null))){
return m__27468__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__27467__auto__ = (((m == null))?null:m);
var m__27468__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27467__auto__)]);
if(!((m__27468__auto__ == null))){
return m__27468__auto__.call(null,m,ch);
} else {
var m__27468__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27468__auto____$1 == null))){
return m__27468__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__27467__auto__ = (((m == null))?null:m);
var m__27468__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27467__auto__)]);
if(!((m__27468__auto__ == null))){
return m__27468__auto__.call(null,m);
} else {
var m__27468__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27468__auto____$1 == null))){
return m__27468__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__27467__auto__ = (((m == null))?null:m);
var m__27468__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27467__auto__)]);
if(!((m__27468__auto__ == null))){
return m__27468__auto__.call(null,m,state_map);
} else {
var m__27468__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27468__auto____$1 == null))){
return m__27468__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__27467__auto__ = (((m == null))?null:m);
var m__27468__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27467__auto__)]);
if(!((m__27468__auto__ == null))){
return m__27468__auto__.call(null,m,mode);
} else {
var m__27468__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27468__auto____$1 == null))){
return m__27468__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27886__auto__ = [];
var len__27879__auto___30452 = arguments.length;
var i__27880__auto___30453 = (0);
while(true){
if((i__27880__auto___30453 < len__27879__auto___30452)){
args__27886__auto__.push((arguments[i__27880__auto___30453]));

var G__30454 = (i__27880__auto___30453 + (1));
i__27880__auto___30453 = G__30454;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((3) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27887__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30446){
var map__30447 = p__30446;
var map__30447__$1 = ((((!((map__30447 == null)))?((((map__30447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30447):map__30447);
var opts = map__30447__$1;
var statearr_30449_30455 = state;
(statearr_30449_30455[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30447,map__30447__$1,opts){
return (function (val){
var statearr_30450_30456 = state;
(statearr_30450_30456[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30447,map__30447__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30451_30457 = state;
(statearr_30451_30457[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30442){
var G__30443 = cljs.core.first.call(null,seq30442);
var seq30442__$1 = cljs.core.next.call(null,seq30442);
var G__30444 = cljs.core.first.call(null,seq30442__$1);
var seq30442__$2 = cljs.core.next.call(null,seq30442__$1);
var G__30445 = cljs.core.first.call(null,seq30442__$2);
var seq30442__$3 = cljs.core.next.call(null,seq30442__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30443,G__30444,G__30445,seq30442__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30623 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30623 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30624){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30624 = meta30624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30625,meta30624__$1){
var self__ = this;
var _30625__$1 = this;
return (new cljs.core.async.t_cljs$core$async30623(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30624__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30623.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30625){
var self__ = this;
var _30625__$1 = this;
return self__.meta30624;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30623.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30623.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30623.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30623.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30623.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30623.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30623.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30623.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30623.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30624","meta30624",1229103832,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30623.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30623.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30623";

cljs.core.async.t_cljs$core$async30623.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27410__auto__,writer__27411__auto__,opt__27412__auto__){
return cljs.core._write.call(null,writer__27411__auto__,"cljs.core.async/t_cljs$core$async30623");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30623 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30623(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30624){
return (new cljs.core.async.t_cljs$core$async30623(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30624));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30623(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29025__auto___30788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto___30788,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto___30788,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30725){
var state_val_30726 = (state_30725[(1)]);
if((state_val_30726 === (7))){
var inst_30641 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
var statearr_30727_30789 = state_30725__$1;
(statearr_30727_30789[(2)] = inst_30641);

(statearr_30727_30789[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (20))){
var inst_30653 = (state_30725[(7)]);
var state_30725__$1 = state_30725;
var statearr_30728_30790 = state_30725__$1;
(statearr_30728_30790[(2)] = inst_30653);

(statearr_30728_30790[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (27))){
var state_30725__$1 = state_30725;
var statearr_30729_30791 = state_30725__$1;
(statearr_30729_30791[(2)] = null);

(statearr_30729_30791[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (1))){
var inst_30629 = (state_30725[(8)]);
var inst_30629__$1 = calc_state.call(null);
var inst_30631 = (inst_30629__$1 == null);
var inst_30632 = cljs.core.not.call(null,inst_30631);
var state_30725__$1 = (function (){var statearr_30730 = state_30725;
(statearr_30730[(8)] = inst_30629__$1);

return statearr_30730;
})();
if(inst_30632){
var statearr_30731_30792 = state_30725__$1;
(statearr_30731_30792[(1)] = (2));

} else {
var statearr_30732_30793 = state_30725__$1;
(statearr_30732_30793[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (24))){
var inst_30699 = (state_30725[(9)]);
var inst_30685 = (state_30725[(10)]);
var inst_30676 = (state_30725[(11)]);
var inst_30699__$1 = inst_30676.call(null,inst_30685);
var state_30725__$1 = (function (){var statearr_30733 = state_30725;
(statearr_30733[(9)] = inst_30699__$1);

return statearr_30733;
})();
if(cljs.core.truth_(inst_30699__$1)){
var statearr_30734_30794 = state_30725__$1;
(statearr_30734_30794[(1)] = (29));

} else {
var statearr_30735_30795 = state_30725__$1;
(statearr_30735_30795[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (4))){
var inst_30644 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
if(cljs.core.truth_(inst_30644)){
var statearr_30736_30796 = state_30725__$1;
(statearr_30736_30796[(1)] = (8));

} else {
var statearr_30737_30797 = state_30725__$1;
(statearr_30737_30797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (15))){
var inst_30670 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
if(cljs.core.truth_(inst_30670)){
var statearr_30738_30798 = state_30725__$1;
(statearr_30738_30798[(1)] = (19));

} else {
var statearr_30739_30799 = state_30725__$1;
(statearr_30739_30799[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (21))){
var inst_30675 = (state_30725[(12)]);
var inst_30675__$1 = (state_30725[(2)]);
var inst_30676 = cljs.core.get.call(null,inst_30675__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30677 = cljs.core.get.call(null,inst_30675__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30678 = cljs.core.get.call(null,inst_30675__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30725__$1 = (function (){var statearr_30740 = state_30725;
(statearr_30740[(13)] = inst_30677);

(statearr_30740[(12)] = inst_30675__$1);

(statearr_30740[(11)] = inst_30676);

return statearr_30740;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30725__$1,(22),inst_30678);
} else {
if((state_val_30726 === (31))){
var inst_30707 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
if(cljs.core.truth_(inst_30707)){
var statearr_30741_30800 = state_30725__$1;
(statearr_30741_30800[(1)] = (32));

} else {
var statearr_30742_30801 = state_30725__$1;
(statearr_30742_30801[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (32))){
var inst_30684 = (state_30725[(14)]);
var state_30725__$1 = state_30725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30725__$1,(35),out,inst_30684);
} else {
if((state_val_30726 === (33))){
var inst_30675 = (state_30725[(12)]);
var inst_30653 = inst_30675;
var state_30725__$1 = (function (){var statearr_30743 = state_30725;
(statearr_30743[(7)] = inst_30653);

return statearr_30743;
})();
var statearr_30744_30802 = state_30725__$1;
(statearr_30744_30802[(2)] = null);

(statearr_30744_30802[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (13))){
var inst_30653 = (state_30725[(7)]);
var inst_30660 = inst_30653.cljs$lang$protocol_mask$partition0$;
var inst_30661 = (inst_30660 & (64));
var inst_30662 = inst_30653.cljs$core$ISeq$;
var inst_30663 = (inst_30661) || (inst_30662);
var state_30725__$1 = state_30725;
if(cljs.core.truth_(inst_30663)){
var statearr_30745_30803 = state_30725__$1;
(statearr_30745_30803[(1)] = (16));

} else {
var statearr_30746_30804 = state_30725__$1;
(statearr_30746_30804[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (22))){
var inst_30684 = (state_30725[(14)]);
var inst_30685 = (state_30725[(10)]);
var inst_30683 = (state_30725[(2)]);
var inst_30684__$1 = cljs.core.nth.call(null,inst_30683,(0),null);
var inst_30685__$1 = cljs.core.nth.call(null,inst_30683,(1),null);
var inst_30686 = (inst_30684__$1 == null);
var inst_30687 = cljs.core._EQ_.call(null,inst_30685__$1,change);
var inst_30688 = (inst_30686) || (inst_30687);
var state_30725__$1 = (function (){var statearr_30747 = state_30725;
(statearr_30747[(14)] = inst_30684__$1);

(statearr_30747[(10)] = inst_30685__$1);

return statearr_30747;
})();
if(cljs.core.truth_(inst_30688)){
var statearr_30748_30805 = state_30725__$1;
(statearr_30748_30805[(1)] = (23));

} else {
var statearr_30749_30806 = state_30725__$1;
(statearr_30749_30806[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (36))){
var inst_30675 = (state_30725[(12)]);
var inst_30653 = inst_30675;
var state_30725__$1 = (function (){var statearr_30750 = state_30725;
(statearr_30750[(7)] = inst_30653);

return statearr_30750;
})();
var statearr_30751_30807 = state_30725__$1;
(statearr_30751_30807[(2)] = null);

(statearr_30751_30807[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (29))){
var inst_30699 = (state_30725[(9)]);
var state_30725__$1 = state_30725;
var statearr_30752_30808 = state_30725__$1;
(statearr_30752_30808[(2)] = inst_30699);

(statearr_30752_30808[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (6))){
var state_30725__$1 = state_30725;
var statearr_30753_30809 = state_30725__$1;
(statearr_30753_30809[(2)] = false);

(statearr_30753_30809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (28))){
var inst_30695 = (state_30725[(2)]);
var inst_30696 = calc_state.call(null);
var inst_30653 = inst_30696;
var state_30725__$1 = (function (){var statearr_30754 = state_30725;
(statearr_30754[(7)] = inst_30653);

(statearr_30754[(15)] = inst_30695);

return statearr_30754;
})();
var statearr_30755_30810 = state_30725__$1;
(statearr_30755_30810[(2)] = null);

(statearr_30755_30810[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (25))){
var inst_30721 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
var statearr_30756_30811 = state_30725__$1;
(statearr_30756_30811[(2)] = inst_30721);

(statearr_30756_30811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (34))){
var inst_30719 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
var statearr_30757_30812 = state_30725__$1;
(statearr_30757_30812[(2)] = inst_30719);

(statearr_30757_30812[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (17))){
var state_30725__$1 = state_30725;
var statearr_30758_30813 = state_30725__$1;
(statearr_30758_30813[(2)] = false);

(statearr_30758_30813[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (3))){
var state_30725__$1 = state_30725;
var statearr_30759_30814 = state_30725__$1;
(statearr_30759_30814[(2)] = false);

(statearr_30759_30814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (12))){
var inst_30723 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30725__$1,inst_30723);
} else {
if((state_val_30726 === (2))){
var inst_30629 = (state_30725[(8)]);
var inst_30634 = inst_30629.cljs$lang$protocol_mask$partition0$;
var inst_30635 = (inst_30634 & (64));
var inst_30636 = inst_30629.cljs$core$ISeq$;
var inst_30637 = (inst_30635) || (inst_30636);
var state_30725__$1 = state_30725;
if(cljs.core.truth_(inst_30637)){
var statearr_30760_30815 = state_30725__$1;
(statearr_30760_30815[(1)] = (5));

} else {
var statearr_30761_30816 = state_30725__$1;
(statearr_30761_30816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (23))){
var inst_30684 = (state_30725[(14)]);
var inst_30690 = (inst_30684 == null);
var state_30725__$1 = state_30725;
if(cljs.core.truth_(inst_30690)){
var statearr_30762_30817 = state_30725__$1;
(statearr_30762_30817[(1)] = (26));

} else {
var statearr_30763_30818 = state_30725__$1;
(statearr_30763_30818[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (35))){
var inst_30710 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
if(cljs.core.truth_(inst_30710)){
var statearr_30764_30819 = state_30725__$1;
(statearr_30764_30819[(1)] = (36));

} else {
var statearr_30765_30820 = state_30725__$1;
(statearr_30765_30820[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (19))){
var inst_30653 = (state_30725[(7)]);
var inst_30672 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30653);
var state_30725__$1 = state_30725;
var statearr_30766_30821 = state_30725__$1;
(statearr_30766_30821[(2)] = inst_30672);

(statearr_30766_30821[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (11))){
var inst_30653 = (state_30725[(7)]);
var inst_30657 = (inst_30653 == null);
var inst_30658 = cljs.core.not.call(null,inst_30657);
var state_30725__$1 = state_30725;
if(inst_30658){
var statearr_30767_30822 = state_30725__$1;
(statearr_30767_30822[(1)] = (13));

} else {
var statearr_30768_30823 = state_30725__$1;
(statearr_30768_30823[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (9))){
var inst_30629 = (state_30725[(8)]);
var state_30725__$1 = state_30725;
var statearr_30769_30824 = state_30725__$1;
(statearr_30769_30824[(2)] = inst_30629);

(statearr_30769_30824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (5))){
var state_30725__$1 = state_30725;
var statearr_30770_30825 = state_30725__$1;
(statearr_30770_30825[(2)] = true);

(statearr_30770_30825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (14))){
var state_30725__$1 = state_30725;
var statearr_30771_30826 = state_30725__$1;
(statearr_30771_30826[(2)] = false);

(statearr_30771_30826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (26))){
var inst_30685 = (state_30725[(10)]);
var inst_30692 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30685);
var state_30725__$1 = state_30725;
var statearr_30772_30827 = state_30725__$1;
(statearr_30772_30827[(2)] = inst_30692);

(statearr_30772_30827[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (16))){
var state_30725__$1 = state_30725;
var statearr_30773_30828 = state_30725__$1;
(statearr_30773_30828[(2)] = true);

(statearr_30773_30828[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (38))){
var inst_30715 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
var statearr_30774_30829 = state_30725__$1;
(statearr_30774_30829[(2)] = inst_30715);

(statearr_30774_30829[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (30))){
var inst_30677 = (state_30725[(13)]);
var inst_30685 = (state_30725[(10)]);
var inst_30676 = (state_30725[(11)]);
var inst_30702 = cljs.core.empty_QMARK_.call(null,inst_30676);
var inst_30703 = inst_30677.call(null,inst_30685);
var inst_30704 = cljs.core.not.call(null,inst_30703);
var inst_30705 = (inst_30702) && (inst_30704);
var state_30725__$1 = state_30725;
var statearr_30775_30830 = state_30725__$1;
(statearr_30775_30830[(2)] = inst_30705);

(statearr_30775_30830[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (10))){
var inst_30629 = (state_30725[(8)]);
var inst_30649 = (state_30725[(2)]);
var inst_30650 = cljs.core.get.call(null,inst_30649,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30651 = cljs.core.get.call(null,inst_30649,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30652 = cljs.core.get.call(null,inst_30649,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30653 = inst_30629;
var state_30725__$1 = (function (){var statearr_30776 = state_30725;
(statearr_30776[(7)] = inst_30653);

(statearr_30776[(16)] = inst_30651);

(statearr_30776[(17)] = inst_30652);

(statearr_30776[(18)] = inst_30650);

return statearr_30776;
})();
var statearr_30777_30831 = state_30725__$1;
(statearr_30777_30831[(2)] = null);

(statearr_30777_30831[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (18))){
var inst_30667 = (state_30725[(2)]);
var state_30725__$1 = state_30725;
var statearr_30778_30832 = state_30725__$1;
(statearr_30778_30832[(2)] = inst_30667);

(statearr_30778_30832[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (37))){
var state_30725__$1 = state_30725;
var statearr_30779_30833 = state_30725__$1;
(statearr_30779_30833[(2)] = null);

(statearr_30779_30833[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30726 === (8))){
var inst_30629 = (state_30725[(8)]);
var inst_30646 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30629);
var state_30725__$1 = state_30725;
var statearr_30780_30834 = state_30725__$1;
(statearr_30780_30834[(2)] = inst_30646);

(statearr_30780_30834[(1)] = (10));


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
});})(c__29025__auto___30788,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28913__auto__,c__29025__auto___30788,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28914__auto__ = null;
var cljs$core$async$mix_$_state_machine__28914__auto____0 = (function (){
var statearr_30784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30784[(0)] = cljs$core$async$mix_$_state_machine__28914__auto__);

(statearr_30784[(1)] = (1));

return statearr_30784;
});
var cljs$core$async$mix_$_state_machine__28914__auto____1 = (function (state_30725){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_30725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e30785){if((e30785 instanceof Object)){
var ex__28917__auto__ = e30785;
var statearr_30786_30835 = state_30725;
(statearr_30786_30835[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30836 = state_30725;
state_30725 = G__30836;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28914__auto__ = function(state_30725){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28914__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28914__auto____1.call(this,state_30725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28914__auto____0;
cljs$core$async$mix_$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28914__auto____1;
return cljs$core$async$mix_$_state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto___30788,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29027__auto__ = (function (){var statearr_30787 = f__29026__auto__.call(null);
(statearr_30787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto___30788);

return statearr_30787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto___30788,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__27467__auto__ = (((p == null))?null:p);
var m__27468__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27467__auto__)]);
if(!((m__27468__auto__ == null))){
return m__27468__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27468__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27468__auto____$1 == null))){
return m__27468__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__27467__auto__ = (((p == null))?null:p);
var m__27468__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27467__auto__)]);
if(!((m__27468__auto__ == null))){
return m__27468__auto__.call(null,p,v,ch);
} else {
var m__27468__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27468__auto____$1 == null))){
return m__27468__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30837 = [];
var len__27879__auto___30840 = arguments.length;
var i__27880__auto___30841 = (0);
while(true){
if((i__27880__auto___30841 < len__27879__auto___30840)){
args30837.push((arguments[i__27880__auto___30841]));

var G__30842 = (i__27880__auto___30841 + (1));
i__27880__auto___30841 = G__30842;
continue;
} else {
}
break;
}

var G__30839 = args30837.length;
switch (G__30839) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30837.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27467__auto__ = (((p == null))?null:p);
var m__27468__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27467__auto__)]);
if(!((m__27468__auto__ == null))){
return m__27468__auto__.call(null,p);
} else {
var m__27468__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27468__auto____$1 == null))){
return m__27468__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__27467__auto__ = (((p == null))?null:p);
var m__27468__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27467__auto__)]);
if(!((m__27468__auto__ == null))){
return m__27468__auto__.call(null,p,v);
} else {
var m__27468__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27468__auto____$1 == null))){
return m__27468__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30845 = [];
var len__27879__auto___30970 = arguments.length;
var i__27880__auto___30971 = (0);
while(true){
if((i__27880__auto___30971 < len__27879__auto___30970)){
args30845.push((arguments[i__27880__auto___30971]));

var G__30972 = (i__27880__auto___30971 + (1));
i__27880__auto___30971 = G__30972;
continue;
} else {
}
break;
}

var G__30847 = args30845.length;
switch (G__30847) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30845.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__26804__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__26804__auto__)){
return or__26804__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__26804__auto__,mults){
return (function (p1__30844_SHARP_){
if(cljs.core.truth_(p1__30844_SHARP_.call(null,topic))){
return p1__30844_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30844_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26804__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30848 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30848 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30849){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30849 = meta30849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30850,meta30849__$1){
var self__ = this;
var _30850__$1 = this;
return (new cljs.core.async.t_cljs$core$async30848(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30849__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30848.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30850){
var self__ = this;
var _30850__$1 = this;
return self__.meta30849;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30848.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30848.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30848.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30848.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30848.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30848.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30848.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30848.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30849","meta30849",1637783519,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30848.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30848";

cljs.core.async.t_cljs$core$async30848.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27410__auto__,writer__27411__auto__,opt__27412__auto__){
return cljs.core._write.call(null,writer__27411__auto__,"cljs.core.async/t_cljs$core$async30848");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30848 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30848(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30849){
return (new cljs.core.async.t_cljs$core$async30848(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30849));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30848(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29025__auto___30974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto___30974,mults,ensure_mult,p){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto___30974,mults,ensure_mult,p){
return (function (state_30922){
var state_val_30923 = (state_30922[(1)]);
if((state_val_30923 === (7))){
var inst_30918 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30924_30975 = state_30922__$1;
(statearr_30924_30975[(2)] = inst_30918);

(statearr_30924_30975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (20))){
var state_30922__$1 = state_30922;
var statearr_30925_30976 = state_30922__$1;
(statearr_30925_30976[(2)] = null);

(statearr_30925_30976[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (1))){
var state_30922__$1 = state_30922;
var statearr_30926_30977 = state_30922__$1;
(statearr_30926_30977[(2)] = null);

(statearr_30926_30977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (24))){
var inst_30901 = (state_30922[(7)]);
var inst_30910 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30901);
var state_30922__$1 = state_30922;
var statearr_30927_30978 = state_30922__$1;
(statearr_30927_30978[(2)] = inst_30910);

(statearr_30927_30978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (4))){
var inst_30853 = (state_30922[(8)]);
var inst_30853__$1 = (state_30922[(2)]);
var inst_30854 = (inst_30853__$1 == null);
var state_30922__$1 = (function (){var statearr_30928 = state_30922;
(statearr_30928[(8)] = inst_30853__$1);

return statearr_30928;
})();
if(cljs.core.truth_(inst_30854)){
var statearr_30929_30979 = state_30922__$1;
(statearr_30929_30979[(1)] = (5));

} else {
var statearr_30930_30980 = state_30922__$1;
(statearr_30930_30980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (15))){
var inst_30895 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30931_30981 = state_30922__$1;
(statearr_30931_30981[(2)] = inst_30895);

(statearr_30931_30981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (21))){
var inst_30915 = (state_30922[(2)]);
var state_30922__$1 = (function (){var statearr_30932 = state_30922;
(statearr_30932[(9)] = inst_30915);

return statearr_30932;
})();
var statearr_30933_30982 = state_30922__$1;
(statearr_30933_30982[(2)] = null);

(statearr_30933_30982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (13))){
var inst_30877 = (state_30922[(10)]);
var inst_30879 = cljs.core.chunked_seq_QMARK_.call(null,inst_30877);
var state_30922__$1 = state_30922;
if(inst_30879){
var statearr_30934_30983 = state_30922__$1;
(statearr_30934_30983[(1)] = (16));

} else {
var statearr_30935_30984 = state_30922__$1;
(statearr_30935_30984[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (22))){
var inst_30907 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
if(cljs.core.truth_(inst_30907)){
var statearr_30936_30985 = state_30922__$1;
(statearr_30936_30985[(1)] = (23));

} else {
var statearr_30937_30986 = state_30922__$1;
(statearr_30937_30986[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (6))){
var inst_30901 = (state_30922[(7)]);
var inst_30853 = (state_30922[(8)]);
var inst_30903 = (state_30922[(11)]);
var inst_30901__$1 = topic_fn.call(null,inst_30853);
var inst_30902 = cljs.core.deref.call(null,mults);
var inst_30903__$1 = cljs.core.get.call(null,inst_30902,inst_30901__$1);
var state_30922__$1 = (function (){var statearr_30938 = state_30922;
(statearr_30938[(7)] = inst_30901__$1);

(statearr_30938[(11)] = inst_30903__$1);

return statearr_30938;
})();
if(cljs.core.truth_(inst_30903__$1)){
var statearr_30939_30987 = state_30922__$1;
(statearr_30939_30987[(1)] = (19));

} else {
var statearr_30940_30988 = state_30922__$1;
(statearr_30940_30988[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (25))){
var inst_30912 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30941_30989 = state_30922__$1;
(statearr_30941_30989[(2)] = inst_30912);

(statearr_30941_30989[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (17))){
var inst_30877 = (state_30922[(10)]);
var inst_30886 = cljs.core.first.call(null,inst_30877);
var inst_30887 = cljs.core.async.muxch_STAR_.call(null,inst_30886);
var inst_30888 = cljs.core.async.close_BANG_.call(null,inst_30887);
var inst_30889 = cljs.core.next.call(null,inst_30877);
var inst_30863 = inst_30889;
var inst_30864 = null;
var inst_30865 = (0);
var inst_30866 = (0);
var state_30922__$1 = (function (){var statearr_30942 = state_30922;
(statearr_30942[(12)] = inst_30864);

(statearr_30942[(13)] = inst_30888);

(statearr_30942[(14)] = inst_30866);

(statearr_30942[(15)] = inst_30865);

(statearr_30942[(16)] = inst_30863);

return statearr_30942;
})();
var statearr_30943_30990 = state_30922__$1;
(statearr_30943_30990[(2)] = null);

(statearr_30943_30990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (3))){
var inst_30920 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30922__$1,inst_30920);
} else {
if((state_val_30923 === (12))){
var inst_30897 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30944_30991 = state_30922__$1;
(statearr_30944_30991[(2)] = inst_30897);

(statearr_30944_30991[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (2))){
var state_30922__$1 = state_30922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30922__$1,(4),ch);
} else {
if((state_val_30923 === (23))){
var state_30922__$1 = state_30922;
var statearr_30945_30992 = state_30922__$1;
(statearr_30945_30992[(2)] = null);

(statearr_30945_30992[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (19))){
var inst_30853 = (state_30922[(8)]);
var inst_30903 = (state_30922[(11)]);
var inst_30905 = cljs.core.async.muxch_STAR_.call(null,inst_30903);
var state_30922__$1 = state_30922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30922__$1,(22),inst_30905,inst_30853);
} else {
if((state_val_30923 === (11))){
var inst_30863 = (state_30922[(16)]);
var inst_30877 = (state_30922[(10)]);
var inst_30877__$1 = cljs.core.seq.call(null,inst_30863);
var state_30922__$1 = (function (){var statearr_30946 = state_30922;
(statearr_30946[(10)] = inst_30877__$1);

return statearr_30946;
})();
if(inst_30877__$1){
var statearr_30947_30993 = state_30922__$1;
(statearr_30947_30993[(1)] = (13));

} else {
var statearr_30948_30994 = state_30922__$1;
(statearr_30948_30994[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (9))){
var inst_30899 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30949_30995 = state_30922__$1;
(statearr_30949_30995[(2)] = inst_30899);

(statearr_30949_30995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (5))){
var inst_30860 = cljs.core.deref.call(null,mults);
var inst_30861 = cljs.core.vals.call(null,inst_30860);
var inst_30862 = cljs.core.seq.call(null,inst_30861);
var inst_30863 = inst_30862;
var inst_30864 = null;
var inst_30865 = (0);
var inst_30866 = (0);
var state_30922__$1 = (function (){var statearr_30950 = state_30922;
(statearr_30950[(12)] = inst_30864);

(statearr_30950[(14)] = inst_30866);

(statearr_30950[(15)] = inst_30865);

(statearr_30950[(16)] = inst_30863);

return statearr_30950;
})();
var statearr_30951_30996 = state_30922__$1;
(statearr_30951_30996[(2)] = null);

(statearr_30951_30996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (14))){
var state_30922__$1 = state_30922;
var statearr_30955_30997 = state_30922__$1;
(statearr_30955_30997[(2)] = null);

(statearr_30955_30997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (16))){
var inst_30877 = (state_30922[(10)]);
var inst_30881 = cljs.core.chunk_first.call(null,inst_30877);
var inst_30882 = cljs.core.chunk_rest.call(null,inst_30877);
var inst_30883 = cljs.core.count.call(null,inst_30881);
var inst_30863 = inst_30882;
var inst_30864 = inst_30881;
var inst_30865 = inst_30883;
var inst_30866 = (0);
var state_30922__$1 = (function (){var statearr_30956 = state_30922;
(statearr_30956[(12)] = inst_30864);

(statearr_30956[(14)] = inst_30866);

(statearr_30956[(15)] = inst_30865);

(statearr_30956[(16)] = inst_30863);

return statearr_30956;
})();
var statearr_30957_30998 = state_30922__$1;
(statearr_30957_30998[(2)] = null);

(statearr_30957_30998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (10))){
var inst_30864 = (state_30922[(12)]);
var inst_30866 = (state_30922[(14)]);
var inst_30865 = (state_30922[(15)]);
var inst_30863 = (state_30922[(16)]);
var inst_30871 = cljs.core._nth.call(null,inst_30864,inst_30866);
var inst_30872 = cljs.core.async.muxch_STAR_.call(null,inst_30871);
var inst_30873 = cljs.core.async.close_BANG_.call(null,inst_30872);
var inst_30874 = (inst_30866 + (1));
var tmp30952 = inst_30864;
var tmp30953 = inst_30865;
var tmp30954 = inst_30863;
var inst_30863__$1 = tmp30954;
var inst_30864__$1 = tmp30952;
var inst_30865__$1 = tmp30953;
var inst_30866__$1 = inst_30874;
var state_30922__$1 = (function (){var statearr_30958 = state_30922;
(statearr_30958[(12)] = inst_30864__$1);

(statearr_30958[(17)] = inst_30873);

(statearr_30958[(14)] = inst_30866__$1);

(statearr_30958[(15)] = inst_30865__$1);

(statearr_30958[(16)] = inst_30863__$1);

return statearr_30958;
})();
var statearr_30959_30999 = state_30922__$1;
(statearr_30959_30999[(2)] = null);

(statearr_30959_30999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (18))){
var inst_30892 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30960_31000 = state_30922__$1;
(statearr_30960_31000[(2)] = inst_30892);

(statearr_30960_31000[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (8))){
var inst_30866 = (state_30922[(14)]);
var inst_30865 = (state_30922[(15)]);
var inst_30868 = (inst_30866 < inst_30865);
var inst_30869 = inst_30868;
var state_30922__$1 = state_30922;
if(cljs.core.truth_(inst_30869)){
var statearr_30961_31001 = state_30922__$1;
(statearr_30961_31001[(1)] = (10));

} else {
var statearr_30962_31002 = state_30922__$1;
(statearr_30962_31002[(1)] = (11));

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
});})(c__29025__auto___30974,mults,ensure_mult,p))
;
return ((function (switch__28913__auto__,c__29025__auto___30974,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28914__auto__ = null;
var cljs$core$async$state_machine__28914__auto____0 = (function (){
var statearr_30966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30966[(0)] = cljs$core$async$state_machine__28914__auto__);

(statearr_30966[(1)] = (1));

return statearr_30966;
});
var cljs$core$async$state_machine__28914__auto____1 = (function (state_30922){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_30922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e30967){if((e30967 instanceof Object)){
var ex__28917__auto__ = e30967;
var statearr_30968_31003 = state_30922;
(statearr_30968_31003[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31004 = state_30922;
state_30922 = G__31004;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
cljs$core$async$state_machine__28914__auto__ = function(state_30922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28914__auto____1.call(this,state_30922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28914__auto____0;
cljs$core$async$state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28914__auto____1;
return cljs$core$async$state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto___30974,mults,ensure_mult,p))
})();
var state__29027__auto__ = (function (){var statearr_30969 = f__29026__auto__.call(null);
(statearr_30969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto___30974);

return statearr_30969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto___30974,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args31005 = [];
var len__27879__auto___31008 = arguments.length;
var i__27880__auto___31009 = (0);
while(true){
if((i__27880__auto___31009 < len__27879__auto___31008)){
args31005.push((arguments[i__27880__auto___31009]));

var G__31010 = (i__27880__auto___31009 + (1));
i__27880__auto___31009 = G__31010;
continue;
} else {
}
break;
}

var G__31007 = args31005.length;
switch (G__31007) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31005.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args31012 = [];
var len__27879__auto___31015 = arguments.length;
var i__27880__auto___31016 = (0);
while(true){
if((i__27880__auto___31016 < len__27879__auto___31015)){
args31012.push((arguments[i__27880__auto___31016]));

var G__31017 = (i__27880__auto___31016 + (1));
i__27880__auto___31016 = G__31017;
continue;
} else {
}
break;
}

var G__31014 = args31012.length;
switch (G__31014) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31012.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args31019 = [];
var len__27879__auto___31090 = arguments.length;
var i__27880__auto___31091 = (0);
while(true){
if((i__27880__auto___31091 < len__27879__auto___31090)){
args31019.push((arguments[i__27880__auto___31091]));

var G__31092 = (i__27880__auto___31091 + (1));
i__27880__auto___31091 = G__31092;
continue;
} else {
}
break;
}

var G__31021 = args31019.length;
switch (G__31021) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31019.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29025__auto___31094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto___31094,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto___31094,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31060){
var state_val_31061 = (state_31060[(1)]);
if((state_val_31061 === (7))){
var state_31060__$1 = state_31060;
var statearr_31062_31095 = state_31060__$1;
(statearr_31062_31095[(2)] = null);

(statearr_31062_31095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (1))){
var state_31060__$1 = state_31060;
var statearr_31063_31096 = state_31060__$1;
(statearr_31063_31096[(2)] = null);

(statearr_31063_31096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (4))){
var inst_31024 = (state_31060[(7)]);
var inst_31026 = (inst_31024 < cnt);
var state_31060__$1 = state_31060;
if(cljs.core.truth_(inst_31026)){
var statearr_31064_31097 = state_31060__$1;
(statearr_31064_31097[(1)] = (6));

} else {
var statearr_31065_31098 = state_31060__$1;
(statearr_31065_31098[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (15))){
var inst_31056 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31066_31099 = state_31060__$1;
(statearr_31066_31099[(2)] = inst_31056);

(statearr_31066_31099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (13))){
var inst_31049 = cljs.core.async.close_BANG_.call(null,out);
var state_31060__$1 = state_31060;
var statearr_31067_31100 = state_31060__$1;
(statearr_31067_31100[(2)] = inst_31049);

(statearr_31067_31100[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (6))){
var state_31060__$1 = state_31060;
var statearr_31068_31101 = state_31060__$1;
(statearr_31068_31101[(2)] = null);

(statearr_31068_31101[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (3))){
var inst_31058 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31060__$1,inst_31058);
} else {
if((state_val_31061 === (12))){
var inst_31046 = (state_31060[(8)]);
var inst_31046__$1 = (state_31060[(2)]);
var inst_31047 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31046__$1);
var state_31060__$1 = (function (){var statearr_31069 = state_31060;
(statearr_31069[(8)] = inst_31046__$1);

return statearr_31069;
})();
if(cljs.core.truth_(inst_31047)){
var statearr_31070_31102 = state_31060__$1;
(statearr_31070_31102[(1)] = (13));

} else {
var statearr_31071_31103 = state_31060__$1;
(statearr_31071_31103[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (2))){
var inst_31023 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31024 = (0);
var state_31060__$1 = (function (){var statearr_31072 = state_31060;
(statearr_31072[(9)] = inst_31023);

(statearr_31072[(7)] = inst_31024);

return statearr_31072;
})();
var statearr_31073_31104 = state_31060__$1;
(statearr_31073_31104[(2)] = null);

(statearr_31073_31104[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (11))){
var inst_31024 = (state_31060[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31060,(10),Object,null,(9));
var inst_31033 = chs__$1.call(null,inst_31024);
var inst_31034 = done.call(null,inst_31024);
var inst_31035 = cljs.core.async.take_BANG_.call(null,inst_31033,inst_31034);
var state_31060__$1 = state_31060;
var statearr_31074_31105 = state_31060__$1;
(statearr_31074_31105[(2)] = inst_31035);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31060__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (9))){
var inst_31024 = (state_31060[(7)]);
var inst_31037 = (state_31060[(2)]);
var inst_31038 = (inst_31024 + (1));
var inst_31024__$1 = inst_31038;
var state_31060__$1 = (function (){var statearr_31075 = state_31060;
(statearr_31075[(7)] = inst_31024__$1);

(statearr_31075[(10)] = inst_31037);

return statearr_31075;
})();
var statearr_31076_31106 = state_31060__$1;
(statearr_31076_31106[(2)] = null);

(statearr_31076_31106[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (5))){
var inst_31044 = (state_31060[(2)]);
var state_31060__$1 = (function (){var statearr_31077 = state_31060;
(statearr_31077[(11)] = inst_31044);

return statearr_31077;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31060__$1,(12),dchan);
} else {
if((state_val_31061 === (14))){
var inst_31046 = (state_31060[(8)]);
var inst_31051 = cljs.core.apply.call(null,f,inst_31046);
var state_31060__$1 = state_31060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31060__$1,(16),out,inst_31051);
} else {
if((state_val_31061 === (16))){
var inst_31053 = (state_31060[(2)]);
var state_31060__$1 = (function (){var statearr_31078 = state_31060;
(statearr_31078[(12)] = inst_31053);

return statearr_31078;
})();
var statearr_31079_31107 = state_31060__$1;
(statearr_31079_31107[(2)] = null);

(statearr_31079_31107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (10))){
var inst_31028 = (state_31060[(2)]);
var inst_31029 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31060__$1 = (function (){var statearr_31080 = state_31060;
(statearr_31080[(13)] = inst_31028);

return statearr_31080;
})();
var statearr_31081_31108 = state_31060__$1;
(statearr_31081_31108[(2)] = inst_31029);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31060__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (8))){
var inst_31042 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31082_31109 = state_31060__$1;
(statearr_31082_31109[(2)] = inst_31042);

(statearr_31082_31109[(1)] = (5));


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
});})(c__29025__auto___31094,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28913__auto__,c__29025__auto___31094,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28914__auto__ = null;
var cljs$core$async$state_machine__28914__auto____0 = (function (){
var statearr_31086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31086[(0)] = cljs$core$async$state_machine__28914__auto__);

(statearr_31086[(1)] = (1));

return statearr_31086;
});
var cljs$core$async$state_machine__28914__auto____1 = (function (state_31060){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_31060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e31087){if((e31087 instanceof Object)){
var ex__28917__auto__ = e31087;
var statearr_31088_31110 = state_31060;
(statearr_31088_31110[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31111 = state_31060;
state_31060 = G__31111;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
cljs$core$async$state_machine__28914__auto__ = function(state_31060){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28914__auto____1.call(this,state_31060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28914__auto____0;
cljs$core$async$state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28914__auto____1;
return cljs$core$async$state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto___31094,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29027__auto__ = (function (){var statearr_31089 = f__29026__auto__.call(null);
(statearr_31089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto___31094);

return statearr_31089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto___31094,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args31113 = [];
var len__27879__auto___31171 = arguments.length;
var i__27880__auto___31172 = (0);
while(true){
if((i__27880__auto___31172 < len__27879__auto___31171)){
args31113.push((arguments[i__27880__auto___31172]));

var G__31173 = (i__27880__auto___31172 + (1));
i__27880__auto___31172 = G__31173;
continue;
} else {
}
break;
}

var G__31115 = args31113.length;
switch (G__31115) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31113.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29025__auto___31175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto___31175,out){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto___31175,out){
return (function (state_31147){
var state_val_31148 = (state_31147[(1)]);
if((state_val_31148 === (7))){
var inst_31127 = (state_31147[(7)]);
var inst_31126 = (state_31147[(8)]);
var inst_31126__$1 = (state_31147[(2)]);
var inst_31127__$1 = cljs.core.nth.call(null,inst_31126__$1,(0),null);
var inst_31128 = cljs.core.nth.call(null,inst_31126__$1,(1),null);
var inst_31129 = (inst_31127__$1 == null);
var state_31147__$1 = (function (){var statearr_31149 = state_31147;
(statearr_31149[(7)] = inst_31127__$1);

(statearr_31149[(9)] = inst_31128);

(statearr_31149[(8)] = inst_31126__$1);

return statearr_31149;
})();
if(cljs.core.truth_(inst_31129)){
var statearr_31150_31176 = state_31147__$1;
(statearr_31150_31176[(1)] = (8));

} else {
var statearr_31151_31177 = state_31147__$1;
(statearr_31151_31177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (1))){
var inst_31116 = cljs.core.vec.call(null,chs);
var inst_31117 = inst_31116;
var state_31147__$1 = (function (){var statearr_31152 = state_31147;
(statearr_31152[(10)] = inst_31117);

return statearr_31152;
})();
var statearr_31153_31178 = state_31147__$1;
(statearr_31153_31178[(2)] = null);

(statearr_31153_31178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (4))){
var inst_31117 = (state_31147[(10)]);
var state_31147__$1 = state_31147;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31147__$1,(7),inst_31117);
} else {
if((state_val_31148 === (6))){
var inst_31143 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
var statearr_31154_31179 = state_31147__$1;
(statearr_31154_31179[(2)] = inst_31143);

(statearr_31154_31179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (3))){
var inst_31145 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31147__$1,inst_31145);
} else {
if((state_val_31148 === (2))){
var inst_31117 = (state_31147[(10)]);
var inst_31119 = cljs.core.count.call(null,inst_31117);
var inst_31120 = (inst_31119 > (0));
var state_31147__$1 = state_31147;
if(cljs.core.truth_(inst_31120)){
var statearr_31156_31180 = state_31147__$1;
(statearr_31156_31180[(1)] = (4));

} else {
var statearr_31157_31181 = state_31147__$1;
(statearr_31157_31181[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (11))){
var inst_31117 = (state_31147[(10)]);
var inst_31136 = (state_31147[(2)]);
var tmp31155 = inst_31117;
var inst_31117__$1 = tmp31155;
var state_31147__$1 = (function (){var statearr_31158 = state_31147;
(statearr_31158[(11)] = inst_31136);

(statearr_31158[(10)] = inst_31117__$1);

return statearr_31158;
})();
var statearr_31159_31182 = state_31147__$1;
(statearr_31159_31182[(2)] = null);

(statearr_31159_31182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (9))){
var inst_31127 = (state_31147[(7)]);
var state_31147__$1 = state_31147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31147__$1,(11),out,inst_31127);
} else {
if((state_val_31148 === (5))){
var inst_31141 = cljs.core.async.close_BANG_.call(null,out);
var state_31147__$1 = state_31147;
var statearr_31160_31183 = state_31147__$1;
(statearr_31160_31183[(2)] = inst_31141);

(statearr_31160_31183[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (10))){
var inst_31139 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
var statearr_31161_31184 = state_31147__$1;
(statearr_31161_31184[(2)] = inst_31139);

(statearr_31161_31184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (8))){
var inst_31127 = (state_31147[(7)]);
var inst_31128 = (state_31147[(9)]);
var inst_31126 = (state_31147[(8)]);
var inst_31117 = (state_31147[(10)]);
var inst_31131 = (function (){var cs = inst_31117;
var vec__31122 = inst_31126;
var v = inst_31127;
var c = inst_31128;
return ((function (cs,vec__31122,v,c,inst_31127,inst_31128,inst_31126,inst_31117,state_val_31148,c__29025__auto___31175,out){
return (function (p1__31112_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31112_SHARP_);
});
;})(cs,vec__31122,v,c,inst_31127,inst_31128,inst_31126,inst_31117,state_val_31148,c__29025__auto___31175,out))
})();
var inst_31132 = cljs.core.filterv.call(null,inst_31131,inst_31117);
var inst_31117__$1 = inst_31132;
var state_31147__$1 = (function (){var statearr_31162 = state_31147;
(statearr_31162[(10)] = inst_31117__$1);

return statearr_31162;
})();
var statearr_31163_31185 = state_31147__$1;
(statearr_31163_31185[(2)] = null);

(statearr_31163_31185[(1)] = (2));


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
});})(c__29025__auto___31175,out))
;
return ((function (switch__28913__auto__,c__29025__auto___31175,out){
return (function() {
var cljs$core$async$state_machine__28914__auto__ = null;
var cljs$core$async$state_machine__28914__auto____0 = (function (){
var statearr_31167 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31167[(0)] = cljs$core$async$state_machine__28914__auto__);

(statearr_31167[(1)] = (1));

return statearr_31167;
});
var cljs$core$async$state_machine__28914__auto____1 = (function (state_31147){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_31147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e31168){if((e31168 instanceof Object)){
var ex__28917__auto__ = e31168;
var statearr_31169_31186 = state_31147;
(statearr_31169_31186[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31187 = state_31147;
state_31147 = G__31187;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
cljs$core$async$state_machine__28914__auto__ = function(state_31147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28914__auto____1.call(this,state_31147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28914__auto____0;
cljs$core$async$state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28914__auto____1;
return cljs$core$async$state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto___31175,out))
})();
var state__29027__auto__ = (function (){var statearr_31170 = f__29026__auto__.call(null);
(statearr_31170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto___31175);

return statearr_31170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto___31175,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args31188 = [];
var len__27879__auto___31237 = arguments.length;
var i__27880__auto___31238 = (0);
while(true){
if((i__27880__auto___31238 < len__27879__auto___31237)){
args31188.push((arguments[i__27880__auto___31238]));

var G__31239 = (i__27880__auto___31238 + (1));
i__27880__auto___31238 = G__31239;
continue;
} else {
}
break;
}

var G__31190 = args31188.length;
switch (G__31190) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31188.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29025__auto___31241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto___31241,out){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto___31241,out){
return (function (state_31214){
var state_val_31215 = (state_31214[(1)]);
if((state_val_31215 === (7))){
var inst_31196 = (state_31214[(7)]);
var inst_31196__$1 = (state_31214[(2)]);
var inst_31197 = (inst_31196__$1 == null);
var inst_31198 = cljs.core.not.call(null,inst_31197);
var state_31214__$1 = (function (){var statearr_31216 = state_31214;
(statearr_31216[(7)] = inst_31196__$1);

return statearr_31216;
})();
if(inst_31198){
var statearr_31217_31242 = state_31214__$1;
(statearr_31217_31242[(1)] = (8));

} else {
var statearr_31218_31243 = state_31214__$1;
(statearr_31218_31243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (1))){
var inst_31191 = (0);
var state_31214__$1 = (function (){var statearr_31219 = state_31214;
(statearr_31219[(8)] = inst_31191);

return statearr_31219;
})();
var statearr_31220_31244 = state_31214__$1;
(statearr_31220_31244[(2)] = null);

(statearr_31220_31244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (4))){
var state_31214__$1 = state_31214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31214__$1,(7),ch);
} else {
if((state_val_31215 === (6))){
var inst_31209 = (state_31214[(2)]);
var state_31214__$1 = state_31214;
var statearr_31221_31245 = state_31214__$1;
(statearr_31221_31245[(2)] = inst_31209);

(statearr_31221_31245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (3))){
var inst_31211 = (state_31214[(2)]);
var inst_31212 = cljs.core.async.close_BANG_.call(null,out);
var state_31214__$1 = (function (){var statearr_31222 = state_31214;
(statearr_31222[(9)] = inst_31211);

return statearr_31222;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31214__$1,inst_31212);
} else {
if((state_val_31215 === (2))){
var inst_31191 = (state_31214[(8)]);
var inst_31193 = (inst_31191 < n);
var state_31214__$1 = state_31214;
if(cljs.core.truth_(inst_31193)){
var statearr_31223_31246 = state_31214__$1;
(statearr_31223_31246[(1)] = (4));

} else {
var statearr_31224_31247 = state_31214__$1;
(statearr_31224_31247[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (11))){
var inst_31191 = (state_31214[(8)]);
var inst_31201 = (state_31214[(2)]);
var inst_31202 = (inst_31191 + (1));
var inst_31191__$1 = inst_31202;
var state_31214__$1 = (function (){var statearr_31225 = state_31214;
(statearr_31225[(10)] = inst_31201);

(statearr_31225[(8)] = inst_31191__$1);

return statearr_31225;
})();
var statearr_31226_31248 = state_31214__$1;
(statearr_31226_31248[(2)] = null);

(statearr_31226_31248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (9))){
var state_31214__$1 = state_31214;
var statearr_31227_31249 = state_31214__$1;
(statearr_31227_31249[(2)] = null);

(statearr_31227_31249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (5))){
var state_31214__$1 = state_31214;
var statearr_31228_31250 = state_31214__$1;
(statearr_31228_31250[(2)] = null);

(statearr_31228_31250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (10))){
var inst_31206 = (state_31214[(2)]);
var state_31214__$1 = state_31214;
var statearr_31229_31251 = state_31214__$1;
(statearr_31229_31251[(2)] = inst_31206);

(statearr_31229_31251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (8))){
var inst_31196 = (state_31214[(7)]);
var state_31214__$1 = state_31214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31214__$1,(11),out,inst_31196);
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
});})(c__29025__auto___31241,out))
;
return ((function (switch__28913__auto__,c__29025__auto___31241,out){
return (function() {
var cljs$core$async$state_machine__28914__auto__ = null;
var cljs$core$async$state_machine__28914__auto____0 = (function (){
var statearr_31233 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31233[(0)] = cljs$core$async$state_machine__28914__auto__);

(statearr_31233[(1)] = (1));

return statearr_31233;
});
var cljs$core$async$state_machine__28914__auto____1 = (function (state_31214){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_31214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e31234){if((e31234 instanceof Object)){
var ex__28917__auto__ = e31234;
var statearr_31235_31252 = state_31214;
(statearr_31235_31252[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31253 = state_31214;
state_31214 = G__31253;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
cljs$core$async$state_machine__28914__auto__ = function(state_31214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28914__auto____1.call(this,state_31214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28914__auto____0;
cljs$core$async$state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28914__auto____1;
return cljs$core$async$state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto___31241,out))
})();
var state__29027__auto__ = (function (){var statearr_31236 = f__29026__auto__.call(null);
(statearr_31236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto___31241);

return statearr_31236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto___31241,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31261 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31261 = (function (map_LT_,f,ch,meta31262){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31262 = meta31262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31263,meta31262__$1){
var self__ = this;
var _31263__$1 = this;
return (new cljs.core.async.t_cljs$core$async31261(self__.map_LT_,self__.f,self__.ch,meta31262__$1));
});

cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31263){
var self__ = this;
var _31263__$1 = this;
return self__.meta31262;
});

cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31264 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31264 = (function (map_LT_,f,ch,meta31262,_,fn1,meta31265){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31262 = meta31262;
this._ = _;
this.fn1 = fn1;
this.meta31265 = meta31265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31266,meta31265__$1){
var self__ = this;
var _31266__$1 = this;
return (new cljs.core.async.t_cljs$core$async31264(self__.map_LT_,self__.f,self__.ch,self__.meta31262,self__._,self__.fn1,meta31265__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31264.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31266){
var self__ = this;
var _31266__$1 = this;
return self__.meta31265;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31264.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31264.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31264.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31264.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31254_SHARP_){
return f1.call(null,(((p1__31254_SHARP_ == null))?null:self__.f.call(null,p1__31254_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31264.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31262","meta31262",2038700718,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31261","cljs.core.async/t_cljs$core$async31261",-1509731070,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31265","meta31265",1763840661,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31264.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31264";

cljs.core.async.t_cljs$core$async31264.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27410__auto__,writer__27411__auto__,opt__27412__auto__){
return cljs.core._write.call(null,writer__27411__auto__,"cljs.core.async/t_cljs$core$async31264");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31264 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31264(map_LT___$1,f__$1,ch__$1,meta31262__$1,___$2,fn1__$1,meta31265){
return (new cljs.core.async.t_cljs$core$async31264(map_LT___$1,f__$1,ch__$1,meta31262__$1,___$2,fn1__$1,meta31265));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31264(self__.map_LT_,self__.f,self__.ch,self__.meta31262,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__26792__auto__ = ret;
if(cljs.core.truth_(and__26792__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__26792__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31262","meta31262",2038700718,null)], null);
});

cljs.core.async.t_cljs$core$async31261.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31261";

cljs.core.async.t_cljs$core$async31261.cljs$lang$ctorPrWriter = (function (this__27410__auto__,writer__27411__auto__,opt__27412__auto__){
return cljs.core._write.call(null,writer__27411__auto__,"cljs.core.async/t_cljs$core$async31261");
});

cljs.core.async.__GT_t_cljs$core$async31261 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31261(map_LT___$1,f__$1,ch__$1,meta31262){
return (new cljs.core.async.t_cljs$core$async31261(map_LT___$1,f__$1,ch__$1,meta31262));
});

}

return (new cljs.core.async.t_cljs$core$async31261(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31270 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31270 = (function (map_GT_,f,ch,meta31271){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31271 = meta31271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31272,meta31271__$1){
var self__ = this;
var _31272__$1 = this;
return (new cljs.core.async.t_cljs$core$async31270(self__.map_GT_,self__.f,self__.ch,meta31271__$1));
});

cljs.core.async.t_cljs$core$async31270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31272){
var self__ = this;
var _31272__$1 = this;
return self__.meta31271;
});

cljs.core.async.t_cljs$core$async31270.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31270.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31270.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31270.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31270.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31270.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31270.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31271","meta31271",552647869,null)], null);
});

cljs.core.async.t_cljs$core$async31270.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31270";

cljs.core.async.t_cljs$core$async31270.cljs$lang$ctorPrWriter = (function (this__27410__auto__,writer__27411__auto__,opt__27412__auto__){
return cljs.core._write.call(null,writer__27411__auto__,"cljs.core.async/t_cljs$core$async31270");
});

cljs.core.async.__GT_t_cljs$core$async31270 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31270(map_GT___$1,f__$1,ch__$1,meta31271){
return (new cljs.core.async.t_cljs$core$async31270(map_GT___$1,f__$1,ch__$1,meta31271));
});

}

return (new cljs.core.async.t_cljs$core$async31270(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31276 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31276 = (function (filter_GT_,p,ch,meta31277){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31277 = meta31277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31278,meta31277__$1){
var self__ = this;
var _31278__$1 = this;
return (new cljs.core.async.t_cljs$core$async31276(self__.filter_GT_,self__.p,self__.ch,meta31277__$1));
});

cljs.core.async.t_cljs$core$async31276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31278){
var self__ = this;
var _31278__$1 = this;
return self__.meta31277;
});

cljs.core.async.t_cljs$core$async31276.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31276.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31276.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31276.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31276.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31276.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31276.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31277","meta31277",236363161,null)], null);
});

cljs.core.async.t_cljs$core$async31276.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31276";

cljs.core.async.t_cljs$core$async31276.cljs$lang$ctorPrWriter = (function (this__27410__auto__,writer__27411__auto__,opt__27412__auto__){
return cljs.core._write.call(null,writer__27411__auto__,"cljs.core.async/t_cljs$core$async31276");
});

cljs.core.async.__GT_t_cljs$core$async31276 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31276(filter_GT___$1,p__$1,ch__$1,meta31277){
return (new cljs.core.async.t_cljs$core$async31276(filter_GT___$1,p__$1,ch__$1,meta31277));
});

}

return (new cljs.core.async.t_cljs$core$async31276(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args31279 = [];
var len__27879__auto___31323 = arguments.length;
var i__27880__auto___31324 = (0);
while(true){
if((i__27880__auto___31324 < len__27879__auto___31323)){
args31279.push((arguments[i__27880__auto___31324]));

var G__31325 = (i__27880__auto___31324 + (1));
i__27880__auto___31324 = G__31325;
continue;
} else {
}
break;
}

var G__31281 = args31279.length;
switch (G__31281) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31279.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29025__auto___31327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto___31327,out){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto___31327,out){
return (function (state_31302){
var state_val_31303 = (state_31302[(1)]);
if((state_val_31303 === (7))){
var inst_31298 = (state_31302[(2)]);
var state_31302__$1 = state_31302;
var statearr_31304_31328 = state_31302__$1;
(statearr_31304_31328[(2)] = inst_31298);

(statearr_31304_31328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (1))){
var state_31302__$1 = state_31302;
var statearr_31305_31329 = state_31302__$1;
(statearr_31305_31329[(2)] = null);

(statearr_31305_31329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (4))){
var inst_31284 = (state_31302[(7)]);
var inst_31284__$1 = (state_31302[(2)]);
var inst_31285 = (inst_31284__$1 == null);
var state_31302__$1 = (function (){var statearr_31306 = state_31302;
(statearr_31306[(7)] = inst_31284__$1);

return statearr_31306;
})();
if(cljs.core.truth_(inst_31285)){
var statearr_31307_31330 = state_31302__$1;
(statearr_31307_31330[(1)] = (5));

} else {
var statearr_31308_31331 = state_31302__$1;
(statearr_31308_31331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (6))){
var inst_31284 = (state_31302[(7)]);
var inst_31289 = p.call(null,inst_31284);
var state_31302__$1 = state_31302;
if(cljs.core.truth_(inst_31289)){
var statearr_31309_31332 = state_31302__$1;
(statearr_31309_31332[(1)] = (8));

} else {
var statearr_31310_31333 = state_31302__$1;
(statearr_31310_31333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (3))){
var inst_31300 = (state_31302[(2)]);
var state_31302__$1 = state_31302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31302__$1,inst_31300);
} else {
if((state_val_31303 === (2))){
var state_31302__$1 = state_31302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31302__$1,(4),ch);
} else {
if((state_val_31303 === (11))){
var inst_31292 = (state_31302[(2)]);
var state_31302__$1 = state_31302;
var statearr_31311_31334 = state_31302__$1;
(statearr_31311_31334[(2)] = inst_31292);

(statearr_31311_31334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (9))){
var state_31302__$1 = state_31302;
var statearr_31312_31335 = state_31302__$1;
(statearr_31312_31335[(2)] = null);

(statearr_31312_31335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (5))){
var inst_31287 = cljs.core.async.close_BANG_.call(null,out);
var state_31302__$1 = state_31302;
var statearr_31313_31336 = state_31302__$1;
(statearr_31313_31336[(2)] = inst_31287);

(statearr_31313_31336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (10))){
var inst_31295 = (state_31302[(2)]);
var state_31302__$1 = (function (){var statearr_31314 = state_31302;
(statearr_31314[(8)] = inst_31295);

return statearr_31314;
})();
var statearr_31315_31337 = state_31302__$1;
(statearr_31315_31337[(2)] = null);

(statearr_31315_31337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (8))){
var inst_31284 = (state_31302[(7)]);
var state_31302__$1 = state_31302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31302__$1,(11),out,inst_31284);
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
});})(c__29025__auto___31327,out))
;
return ((function (switch__28913__auto__,c__29025__auto___31327,out){
return (function() {
var cljs$core$async$state_machine__28914__auto__ = null;
var cljs$core$async$state_machine__28914__auto____0 = (function (){
var statearr_31319 = [null,null,null,null,null,null,null,null,null];
(statearr_31319[(0)] = cljs$core$async$state_machine__28914__auto__);

(statearr_31319[(1)] = (1));

return statearr_31319;
});
var cljs$core$async$state_machine__28914__auto____1 = (function (state_31302){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_31302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e31320){if((e31320 instanceof Object)){
var ex__28917__auto__ = e31320;
var statearr_31321_31338 = state_31302;
(statearr_31321_31338[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31339 = state_31302;
state_31302 = G__31339;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
cljs$core$async$state_machine__28914__auto__ = function(state_31302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28914__auto____1.call(this,state_31302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28914__auto____0;
cljs$core$async$state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28914__auto____1;
return cljs$core$async$state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto___31327,out))
})();
var state__29027__auto__ = (function (){var statearr_31322 = f__29026__auto__.call(null);
(statearr_31322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto___31327);

return statearr_31322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto___31327,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31340 = [];
var len__27879__auto___31343 = arguments.length;
var i__27880__auto___31344 = (0);
while(true){
if((i__27880__auto___31344 < len__27879__auto___31343)){
args31340.push((arguments[i__27880__auto___31344]));

var G__31345 = (i__27880__auto___31344 + (1));
i__27880__auto___31344 = G__31345;
continue;
} else {
}
break;
}

var G__31342 = args31340.length;
switch (G__31342) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31340.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29025__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto__){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto__){
return (function (state_31512){
var state_val_31513 = (state_31512[(1)]);
if((state_val_31513 === (7))){
var inst_31508 = (state_31512[(2)]);
var state_31512__$1 = state_31512;
var statearr_31514_31555 = state_31512__$1;
(statearr_31514_31555[(2)] = inst_31508);

(statearr_31514_31555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (20))){
var inst_31478 = (state_31512[(7)]);
var inst_31489 = (state_31512[(2)]);
var inst_31490 = cljs.core.next.call(null,inst_31478);
var inst_31464 = inst_31490;
var inst_31465 = null;
var inst_31466 = (0);
var inst_31467 = (0);
var state_31512__$1 = (function (){var statearr_31515 = state_31512;
(statearr_31515[(8)] = inst_31464);

(statearr_31515[(9)] = inst_31466);

(statearr_31515[(10)] = inst_31489);

(statearr_31515[(11)] = inst_31467);

(statearr_31515[(12)] = inst_31465);

return statearr_31515;
})();
var statearr_31516_31556 = state_31512__$1;
(statearr_31516_31556[(2)] = null);

(statearr_31516_31556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (1))){
var state_31512__$1 = state_31512;
var statearr_31517_31557 = state_31512__$1;
(statearr_31517_31557[(2)] = null);

(statearr_31517_31557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (4))){
var inst_31453 = (state_31512[(13)]);
var inst_31453__$1 = (state_31512[(2)]);
var inst_31454 = (inst_31453__$1 == null);
var state_31512__$1 = (function (){var statearr_31518 = state_31512;
(statearr_31518[(13)] = inst_31453__$1);

return statearr_31518;
})();
if(cljs.core.truth_(inst_31454)){
var statearr_31519_31558 = state_31512__$1;
(statearr_31519_31558[(1)] = (5));

} else {
var statearr_31520_31559 = state_31512__$1;
(statearr_31520_31559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (15))){
var state_31512__$1 = state_31512;
var statearr_31524_31560 = state_31512__$1;
(statearr_31524_31560[(2)] = null);

(statearr_31524_31560[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (21))){
var state_31512__$1 = state_31512;
var statearr_31525_31561 = state_31512__$1;
(statearr_31525_31561[(2)] = null);

(statearr_31525_31561[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (13))){
var inst_31464 = (state_31512[(8)]);
var inst_31466 = (state_31512[(9)]);
var inst_31467 = (state_31512[(11)]);
var inst_31465 = (state_31512[(12)]);
var inst_31474 = (state_31512[(2)]);
var inst_31475 = (inst_31467 + (1));
var tmp31521 = inst_31464;
var tmp31522 = inst_31466;
var tmp31523 = inst_31465;
var inst_31464__$1 = tmp31521;
var inst_31465__$1 = tmp31523;
var inst_31466__$1 = tmp31522;
var inst_31467__$1 = inst_31475;
var state_31512__$1 = (function (){var statearr_31526 = state_31512;
(statearr_31526[(8)] = inst_31464__$1);

(statearr_31526[(14)] = inst_31474);

(statearr_31526[(9)] = inst_31466__$1);

(statearr_31526[(11)] = inst_31467__$1);

(statearr_31526[(12)] = inst_31465__$1);

return statearr_31526;
})();
var statearr_31527_31562 = state_31512__$1;
(statearr_31527_31562[(2)] = null);

(statearr_31527_31562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (22))){
var state_31512__$1 = state_31512;
var statearr_31528_31563 = state_31512__$1;
(statearr_31528_31563[(2)] = null);

(statearr_31528_31563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (6))){
var inst_31453 = (state_31512[(13)]);
var inst_31462 = f.call(null,inst_31453);
var inst_31463 = cljs.core.seq.call(null,inst_31462);
var inst_31464 = inst_31463;
var inst_31465 = null;
var inst_31466 = (0);
var inst_31467 = (0);
var state_31512__$1 = (function (){var statearr_31529 = state_31512;
(statearr_31529[(8)] = inst_31464);

(statearr_31529[(9)] = inst_31466);

(statearr_31529[(11)] = inst_31467);

(statearr_31529[(12)] = inst_31465);

return statearr_31529;
})();
var statearr_31530_31564 = state_31512__$1;
(statearr_31530_31564[(2)] = null);

(statearr_31530_31564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (17))){
var inst_31478 = (state_31512[(7)]);
var inst_31482 = cljs.core.chunk_first.call(null,inst_31478);
var inst_31483 = cljs.core.chunk_rest.call(null,inst_31478);
var inst_31484 = cljs.core.count.call(null,inst_31482);
var inst_31464 = inst_31483;
var inst_31465 = inst_31482;
var inst_31466 = inst_31484;
var inst_31467 = (0);
var state_31512__$1 = (function (){var statearr_31531 = state_31512;
(statearr_31531[(8)] = inst_31464);

(statearr_31531[(9)] = inst_31466);

(statearr_31531[(11)] = inst_31467);

(statearr_31531[(12)] = inst_31465);

return statearr_31531;
})();
var statearr_31532_31565 = state_31512__$1;
(statearr_31532_31565[(2)] = null);

(statearr_31532_31565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (3))){
var inst_31510 = (state_31512[(2)]);
var state_31512__$1 = state_31512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31512__$1,inst_31510);
} else {
if((state_val_31513 === (12))){
var inst_31498 = (state_31512[(2)]);
var state_31512__$1 = state_31512;
var statearr_31533_31566 = state_31512__$1;
(statearr_31533_31566[(2)] = inst_31498);

(statearr_31533_31566[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (2))){
var state_31512__$1 = state_31512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31512__$1,(4),in$);
} else {
if((state_val_31513 === (23))){
var inst_31506 = (state_31512[(2)]);
var state_31512__$1 = state_31512;
var statearr_31534_31567 = state_31512__$1;
(statearr_31534_31567[(2)] = inst_31506);

(statearr_31534_31567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (19))){
var inst_31493 = (state_31512[(2)]);
var state_31512__$1 = state_31512;
var statearr_31535_31568 = state_31512__$1;
(statearr_31535_31568[(2)] = inst_31493);

(statearr_31535_31568[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (11))){
var inst_31464 = (state_31512[(8)]);
var inst_31478 = (state_31512[(7)]);
var inst_31478__$1 = cljs.core.seq.call(null,inst_31464);
var state_31512__$1 = (function (){var statearr_31536 = state_31512;
(statearr_31536[(7)] = inst_31478__$1);

return statearr_31536;
})();
if(inst_31478__$1){
var statearr_31537_31569 = state_31512__$1;
(statearr_31537_31569[(1)] = (14));

} else {
var statearr_31538_31570 = state_31512__$1;
(statearr_31538_31570[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (9))){
var inst_31500 = (state_31512[(2)]);
var inst_31501 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31512__$1 = (function (){var statearr_31539 = state_31512;
(statearr_31539[(15)] = inst_31500);

return statearr_31539;
})();
if(cljs.core.truth_(inst_31501)){
var statearr_31540_31571 = state_31512__$1;
(statearr_31540_31571[(1)] = (21));

} else {
var statearr_31541_31572 = state_31512__$1;
(statearr_31541_31572[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (5))){
var inst_31456 = cljs.core.async.close_BANG_.call(null,out);
var state_31512__$1 = state_31512;
var statearr_31542_31573 = state_31512__$1;
(statearr_31542_31573[(2)] = inst_31456);

(statearr_31542_31573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (14))){
var inst_31478 = (state_31512[(7)]);
var inst_31480 = cljs.core.chunked_seq_QMARK_.call(null,inst_31478);
var state_31512__$1 = state_31512;
if(inst_31480){
var statearr_31543_31574 = state_31512__$1;
(statearr_31543_31574[(1)] = (17));

} else {
var statearr_31544_31575 = state_31512__$1;
(statearr_31544_31575[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (16))){
var inst_31496 = (state_31512[(2)]);
var state_31512__$1 = state_31512;
var statearr_31545_31576 = state_31512__$1;
(statearr_31545_31576[(2)] = inst_31496);

(statearr_31545_31576[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (10))){
var inst_31467 = (state_31512[(11)]);
var inst_31465 = (state_31512[(12)]);
var inst_31472 = cljs.core._nth.call(null,inst_31465,inst_31467);
var state_31512__$1 = state_31512;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31512__$1,(13),out,inst_31472);
} else {
if((state_val_31513 === (18))){
var inst_31478 = (state_31512[(7)]);
var inst_31487 = cljs.core.first.call(null,inst_31478);
var state_31512__$1 = state_31512;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31512__$1,(20),out,inst_31487);
} else {
if((state_val_31513 === (8))){
var inst_31466 = (state_31512[(9)]);
var inst_31467 = (state_31512[(11)]);
var inst_31469 = (inst_31467 < inst_31466);
var inst_31470 = inst_31469;
var state_31512__$1 = state_31512;
if(cljs.core.truth_(inst_31470)){
var statearr_31546_31577 = state_31512__$1;
(statearr_31546_31577[(1)] = (10));

} else {
var statearr_31547_31578 = state_31512__$1;
(statearr_31547_31578[(1)] = (11));

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
});})(c__29025__auto__))
;
return ((function (switch__28913__auto__,c__29025__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28914__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28914__auto____0 = (function (){
var statearr_31551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31551[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28914__auto__);

(statearr_31551[(1)] = (1));

return statearr_31551;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28914__auto____1 = (function (state_31512){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_31512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e31552){if((e31552 instanceof Object)){
var ex__28917__auto__ = e31552;
var statearr_31553_31579 = state_31512;
(statearr_31553_31579[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31580 = state_31512;
state_31512 = G__31580;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28914__auto__ = function(state_31512){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28914__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28914__auto____1.call(this,state_31512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28914__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28914__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto__))
})();
var state__29027__auto__ = (function (){var statearr_31554 = f__29026__auto__.call(null);
(statearr_31554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto__);

return statearr_31554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto__))
);

return c__29025__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31581 = [];
var len__27879__auto___31584 = arguments.length;
var i__27880__auto___31585 = (0);
while(true){
if((i__27880__auto___31585 < len__27879__auto___31584)){
args31581.push((arguments[i__27880__auto___31585]));

var G__31586 = (i__27880__auto___31585 + (1));
i__27880__auto___31585 = G__31586;
continue;
} else {
}
break;
}

var G__31583 = args31581.length;
switch (G__31583) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31581.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args31588 = [];
var len__27879__auto___31591 = arguments.length;
var i__27880__auto___31592 = (0);
while(true){
if((i__27880__auto___31592 < len__27879__auto___31591)){
args31588.push((arguments[i__27880__auto___31592]));

var G__31593 = (i__27880__auto___31592 + (1));
i__27880__auto___31592 = G__31593;
continue;
} else {
}
break;
}

var G__31590 = args31588.length;
switch (G__31590) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31588.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args31595 = [];
var len__27879__auto___31646 = arguments.length;
var i__27880__auto___31647 = (0);
while(true){
if((i__27880__auto___31647 < len__27879__auto___31646)){
args31595.push((arguments[i__27880__auto___31647]));

var G__31648 = (i__27880__auto___31647 + (1));
i__27880__auto___31647 = G__31648;
continue;
} else {
}
break;
}

var G__31597 = args31595.length;
switch (G__31597) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31595.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29025__auto___31650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto___31650,out){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto___31650,out){
return (function (state_31621){
var state_val_31622 = (state_31621[(1)]);
if((state_val_31622 === (7))){
var inst_31616 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
var statearr_31623_31651 = state_31621__$1;
(statearr_31623_31651[(2)] = inst_31616);

(statearr_31623_31651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (1))){
var inst_31598 = null;
var state_31621__$1 = (function (){var statearr_31624 = state_31621;
(statearr_31624[(7)] = inst_31598);

return statearr_31624;
})();
var statearr_31625_31652 = state_31621__$1;
(statearr_31625_31652[(2)] = null);

(statearr_31625_31652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (4))){
var inst_31601 = (state_31621[(8)]);
var inst_31601__$1 = (state_31621[(2)]);
var inst_31602 = (inst_31601__$1 == null);
var inst_31603 = cljs.core.not.call(null,inst_31602);
var state_31621__$1 = (function (){var statearr_31626 = state_31621;
(statearr_31626[(8)] = inst_31601__$1);

return statearr_31626;
})();
if(inst_31603){
var statearr_31627_31653 = state_31621__$1;
(statearr_31627_31653[(1)] = (5));

} else {
var statearr_31628_31654 = state_31621__$1;
(statearr_31628_31654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (6))){
var state_31621__$1 = state_31621;
var statearr_31629_31655 = state_31621__$1;
(statearr_31629_31655[(2)] = null);

(statearr_31629_31655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (3))){
var inst_31618 = (state_31621[(2)]);
var inst_31619 = cljs.core.async.close_BANG_.call(null,out);
var state_31621__$1 = (function (){var statearr_31630 = state_31621;
(statearr_31630[(9)] = inst_31618);

return statearr_31630;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31621__$1,inst_31619);
} else {
if((state_val_31622 === (2))){
var state_31621__$1 = state_31621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31621__$1,(4),ch);
} else {
if((state_val_31622 === (11))){
var inst_31601 = (state_31621[(8)]);
var inst_31610 = (state_31621[(2)]);
var inst_31598 = inst_31601;
var state_31621__$1 = (function (){var statearr_31631 = state_31621;
(statearr_31631[(10)] = inst_31610);

(statearr_31631[(7)] = inst_31598);

return statearr_31631;
})();
var statearr_31632_31656 = state_31621__$1;
(statearr_31632_31656[(2)] = null);

(statearr_31632_31656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (9))){
var inst_31601 = (state_31621[(8)]);
var state_31621__$1 = state_31621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31621__$1,(11),out,inst_31601);
} else {
if((state_val_31622 === (5))){
var inst_31601 = (state_31621[(8)]);
var inst_31598 = (state_31621[(7)]);
var inst_31605 = cljs.core._EQ_.call(null,inst_31601,inst_31598);
var state_31621__$1 = state_31621;
if(inst_31605){
var statearr_31634_31657 = state_31621__$1;
(statearr_31634_31657[(1)] = (8));

} else {
var statearr_31635_31658 = state_31621__$1;
(statearr_31635_31658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (10))){
var inst_31613 = (state_31621[(2)]);
var state_31621__$1 = state_31621;
var statearr_31636_31659 = state_31621__$1;
(statearr_31636_31659[(2)] = inst_31613);

(statearr_31636_31659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31622 === (8))){
var inst_31598 = (state_31621[(7)]);
var tmp31633 = inst_31598;
var inst_31598__$1 = tmp31633;
var state_31621__$1 = (function (){var statearr_31637 = state_31621;
(statearr_31637[(7)] = inst_31598__$1);

return statearr_31637;
})();
var statearr_31638_31660 = state_31621__$1;
(statearr_31638_31660[(2)] = null);

(statearr_31638_31660[(1)] = (2));


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
});})(c__29025__auto___31650,out))
;
return ((function (switch__28913__auto__,c__29025__auto___31650,out){
return (function() {
var cljs$core$async$state_machine__28914__auto__ = null;
var cljs$core$async$state_machine__28914__auto____0 = (function (){
var statearr_31642 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31642[(0)] = cljs$core$async$state_machine__28914__auto__);

(statearr_31642[(1)] = (1));

return statearr_31642;
});
var cljs$core$async$state_machine__28914__auto____1 = (function (state_31621){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_31621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e31643){if((e31643 instanceof Object)){
var ex__28917__auto__ = e31643;
var statearr_31644_31661 = state_31621;
(statearr_31644_31661[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31662 = state_31621;
state_31621 = G__31662;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
cljs$core$async$state_machine__28914__auto__ = function(state_31621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28914__auto____1.call(this,state_31621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28914__auto____0;
cljs$core$async$state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28914__auto____1;
return cljs$core$async$state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto___31650,out))
})();
var state__29027__auto__ = (function (){var statearr_31645 = f__29026__auto__.call(null);
(statearr_31645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto___31650);

return statearr_31645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto___31650,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31663 = [];
var len__27879__auto___31733 = arguments.length;
var i__27880__auto___31734 = (0);
while(true){
if((i__27880__auto___31734 < len__27879__auto___31733)){
args31663.push((arguments[i__27880__auto___31734]));

var G__31735 = (i__27880__auto___31734 + (1));
i__27880__auto___31734 = G__31735;
continue;
} else {
}
break;
}

var G__31665 = args31663.length;
switch (G__31665) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31663.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29025__auto___31737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto___31737,out){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto___31737,out){
return (function (state_31703){
var state_val_31704 = (state_31703[(1)]);
if((state_val_31704 === (7))){
var inst_31699 = (state_31703[(2)]);
var state_31703__$1 = state_31703;
var statearr_31705_31738 = state_31703__$1;
(statearr_31705_31738[(2)] = inst_31699);

(statearr_31705_31738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31704 === (1))){
var inst_31666 = (new Array(n));
var inst_31667 = inst_31666;
var inst_31668 = (0);
var state_31703__$1 = (function (){var statearr_31706 = state_31703;
(statearr_31706[(7)] = inst_31668);

(statearr_31706[(8)] = inst_31667);

return statearr_31706;
})();
var statearr_31707_31739 = state_31703__$1;
(statearr_31707_31739[(2)] = null);

(statearr_31707_31739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31704 === (4))){
var inst_31671 = (state_31703[(9)]);
var inst_31671__$1 = (state_31703[(2)]);
var inst_31672 = (inst_31671__$1 == null);
var inst_31673 = cljs.core.not.call(null,inst_31672);
var state_31703__$1 = (function (){var statearr_31708 = state_31703;
(statearr_31708[(9)] = inst_31671__$1);

return statearr_31708;
})();
if(inst_31673){
var statearr_31709_31740 = state_31703__$1;
(statearr_31709_31740[(1)] = (5));

} else {
var statearr_31710_31741 = state_31703__$1;
(statearr_31710_31741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31704 === (15))){
var inst_31693 = (state_31703[(2)]);
var state_31703__$1 = state_31703;
var statearr_31711_31742 = state_31703__$1;
(statearr_31711_31742[(2)] = inst_31693);

(statearr_31711_31742[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31704 === (13))){
var state_31703__$1 = state_31703;
var statearr_31712_31743 = state_31703__$1;
(statearr_31712_31743[(2)] = null);

(statearr_31712_31743[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31704 === (6))){
var inst_31668 = (state_31703[(7)]);
var inst_31689 = (inst_31668 > (0));
var state_31703__$1 = state_31703;
if(cljs.core.truth_(inst_31689)){
var statearr_31713_31744 = state_31703__$1;
(statearr_31713_31744[(1)] = (12));

} else {
var statearr_31714_31745 = state_31703__$1;
(statearr_31714_31745[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31704 === (3))){
var inst_31701 = (state_31703[(2)]);
var state_31703__$1 = state_31703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31703__$1,inst_31701);
} else {
if((state_val_31704 === (12))){
var inst_31667 = (state_31703[(8)]);
var inst_31691 = cljs.core.vec.call(null,inst_31667);
var state_31703__$1 = state_31703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31703__$1,(15),out,inst_31691);
} else {
if((state_val_31704 === (2))){
var state_31703__$1 = state_31703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31703__$1,(4),ch);
} else {
if((state_val_31704 === (11))){
var inst_31683 = (state_31703[(2)]);
var inst_31684 = (new Array(n));
var inst_31667 = inst_31684;
var inst_31668 = (0);
var state_31703__$1 = (function (){var statearr_31715 = state_31703;
(statearr_31715[(7)] = inst_31668);

(statearr_31715[(8)] = inst_31667);

(statearr_31715[(10)] = inst_31683);

return statearr_31715;
})();
var statearr_31716_31746 = state_31703__$1;
(statearr_31716_31746[(2)] = null);

(statearr_31716_31746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31704 === (9))){
var inst_31667 = (state_31703[(8)]);
var inst_31681 = cljs.core.vec.call(null,inst_31667);
var state_31703__$1 = state_31703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31703__$1,(11),out,inst_31681);
} else {
if((state_val_31704 === (5))){
var inst_31668 = (state_31703[(7)]);
var inst_31667 = (state_31703[(8)]);
var inst_31671 = (state_31703[(9)]);
var inst_31676 = (state_31703[(11)]);
var inst_31675 = (inst_31667[inst_31668] = inst_31671);
var inst_31676__$1 = (inst_31668 + (1));
var inst_31677 = (inst_31676__$1 < n);
var state_31703__$1 = (function (){var statearr_31717 = state_31703;
(statearr_31717[(11)] = inst_31676__$1);

(statearr_31717[(12)] = inst_31675);

return statearr_31717;
})();
if(cljs.core.truth_(inst_31677)){
var statearr_31718_31747 = state_31703__$1;
(statearr_31718_31747[(1)] = (8));

} else {
var statearr_31719_31748 = state_31703__$1;
(statearr_31719_31748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31704 === (14))){
var inst_31696 = (state_31703[(2)]);
var inst_31697 = cljs.core.async.close_BANG_.call(null,out);
var state_31703__$1 = (function (){var statearr_31721 = state_31703;
(statearr_31721[(13)] = inst_31696);

return statearr_31721;
})();
var statearr_31722_31749 = state_31703__$1;
(statearr_31722_31749[(2)] = inst_31697);

(statearr_31722_31749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31704 === (10))){
var inst_31687 = (state_31703[(2)]);
var state_31703__$1 = state_31703;
var statearr_31723_31750 = state_31703__$1;
(statearr_31723_31750[(2)] = inst_31687);

(statearr_31723_31750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31704 === (8))){
var inst_31667 = (state_31703[(8)]);
var inst_31676 = (state_31703[(11)]);
var tmp31720 = inst_31667;
var inst_31667__$1 = tmp31720;
var inst_31668 = inst_31676;
var state_31703__$1 = (function (){var statearr_31724 = state_31703;
(statearr_31724[(7)] = inst_31668);

(statearr_31724[(8)] = inst_31667__$1);

return statearr_31724;
})();
var statearr_31725_31751 = state_31703__$1;
(statearr_31725_31751[(2)] = null);

(statearr_31725_31751[(1)] = (2));


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
});})(c__29025__auto___31737,out))
;
return ((function (switch__28913__auto__,c__29025__auto___31737,out){
return (function() {
var cljs$core$async$state_machine__28914__auto__ = null;
var cljs$core$async$state_machine__28914__auto____0 = (function (){
var statearr_31729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31729[(0)] = cljs$core$async$state_machine__28914__auto__);

(statearr_31729[(1)] = (1));

return statearr_31729;
});
var cljs$core$async$state_machine__28914__auto____1 = (function (state_31703){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_31703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e31730){if((e31730 instanceof Object)){
var ex__28917__auto__ = e31730;
var statearr_31731_31752 = state_31703;
(statearr_31731_31752[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31753 = state_31703;
state_31703 = G__31753;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
cljs$core$async$state_machine__28914__auto__ = function(state_31703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28914__auto____1.call(this,state_31703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28914__auto____0;
cljs$core$async$state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28914__auto____1;
return cljs$core$async$state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto___31737,out))
})();
var state__29027__auto__ = (function (){var statearr_31732 = f__29026__auto__.call(null);
(statearr_31732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto___31737);

return statearr_31732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto___31737,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31754 = [];
var len__27879__auto___31828 = arguments.length;
var i__27880__auto___31829 = (0);
while(true){
if((i__27880__auto___31829 < len__27879__auto___31828)){
args31754.push((arguments[i__27880__auto___31829]));

var G__31830 = (i__27880__auto___31829 + (1));
i__27880__auto___31829 = G__31830;
continue;
} else {
}
break;
}

var G__31756 = args31754.length;
switch (G__31756) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31754.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29025__auto___31832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto___31832,out){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto___31832,out){
return (function (state_31798){
var state_val_31799 = (state_31798[(1)]);
if((state_val_31799 === (7))){
var inst_31794 = (state_31798[(2)]);
var state_31798__$1 = state_31798;
var statearr_31800_31833 = state_31798__$1;
(statearr_31800_31833[(2)] = inst_31794);

(statearr_31800_31833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (1))){
var inst_31757 = [];
var inst_31758 = inst_31757;
var inst_31759 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31798__$1 = (function (){var statearr_31801 = state_31798;
(statearr_31801[(7)] = inst_31758);

(statearr_31801[(8)] = inst_31759);

return statearr_31801;
})();
var statearr_31802_31834 = state_31798__$1;
(statearr_31802_31834[(2)] = null);

(statearr_31802_31834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (4))){
var inst_31762 = (state_31798[(9)]);
var inst_31762__$1 = (state_31798[(2)]);
var inst_31763 = (inst_31762__$1 == null);
var inst_31764 = cljs.core.not.call(null,inst_31763);
var state_31798__$1 = (function (){var statearr_31803 = state_31798;
(statearr_31803[(9)] = inst_31762__$1);

return statearr_31803;
})();
if(inst_31764){
var statearr_31804_31835 = state_31798__$1;
(statearr_31804_31835[(1)] = (5));

} else {
var statearr_31805_31836 = state_31798__$1;
(statearr_31805_31836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (15))){
var inst_31788 = (state_31798[(2)]);
var state_31798__$1 = state_31798;
var statearr_31806_31837 = state_31798__$1;
(statearr_31806_31837[(2)] = inst_31788);

(statearr_31806_31837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (13))){
var state_31798__$1 = state_31798;
var statearr_31807_31838 = state_31798__$1;
(statearr_31807_31838[(2)] = null);

(statearr_31807_31838[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (6))){
var inst_31758 = (state_31798[(7)]);
var inst_31783 = inst_31758.length;
var inst_31784 = (inst_31783 > (0));
var state_31798__$1 = state_31798;
if(cljs.core.truth_(inst_31784)){
var statearr_31808_31839 = state_31798__$1;
(statearr_31808_31839[(1)] = (12));

} else {
var statearr_31809_31840 = state_31798__$1;
(statearr_31809_31840[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (3))){
var inst_31796 = (state_31798[(2)]);
var state_31798__$1 = state_31798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31798__$1,inst_31796);
} else {
if((state_val_31799 === (12))){
var inst_31758 = (state_31798[(7)]);
var inst_31786 = cljs.core.vec.call(null,inst_31758);
var state_31798__$1 = state_31798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31798__$1,(15),out,inst_31786);
} else {
if((state_val_31799 === (2))){
var state_31798__$1 = state_31798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31798__$1,(4),ch);
} else {
if((state_val_31799 === (11))){
var inst_31766 = (state_31798[(10)]);
var inst_31762 = (state_31798[(9)]);
var inst_31776 = (state_31798[(2)]);
var inst_31777 = [];
var inst_31778 = inst_31777.push(inst_31762);
var inst_31758 = inst_31777;
var inst_31759 = inst_31766;
var state_31798__$1 = (function (){var statearr_31810 = state_31798;
(statearr_31810[(7)] = inst_31758);

(statearr_31810[(8)] = inst_31759);

(statearr_31810[(11)] = inst_31778);

(statearr_31810[(12)] = inst_31776);

return statearr_31810;
})();
var statearr_31811_31841 = state_31798__$1;
(statearr_31811_31841[(2)] = null);

(statearr_31811_31841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (9))){
var inst_31758 = (state_31798[(7)]);
var inst_31774 = cljs.core.vec.call(null,inst_31758);
var state_31798__$1 = state_31798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31798__$1,(11),out,inst_31774);
} else {
if((state_val_31799 === (5))){
var inst_31759 = (state_31798[(8)]);
var inst_31766 = (state_31798[(10)]);
var inst_31762 = (state_31798[(9)]);
var inst_31766__$1 = f.call(null,inst_31762);
var inst_31767 = cljs.core._EQ_.call(null,inst_31766__$1,inst_31759);
var inst_31768 = cljs.core.keyword_identical_QMARK_.call(null,inst_31759,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31769 = (inst_31767) || (inst_31768);
var state_31798__$1 = (function (){var statearr_31812 = state_31798;
(statearr_31812[(10)] = inst_31766__$1);

return statearr_31812;
})();
if(cljs.core.truth_(inst_31769)){
var statearr_31813_31842 = state_31798__$1;
(statearr_31813_31842[(1)] = (8));

} else {
var statearr_31814_31843 = state_31798__$1;
(statearr_31814_31843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (14))){
var inst_31791 = (state_31798[(2)]);
var inst_31792 = cljs.core.async.close_BANG_.call(null,out);
var state_31798__$1 = (function (){var statearr_31816 = state_31798;
(statearr_31816[(13)] = inst_31791);

return statearr_31816;
})();
var statearr_31817_31844 = state_31798__$1;
(statearr_31817_31844[(2)] = inst_31792);

(statearr_31817_31844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (10))){
var inst_31781 = (state_31798[(2)]);
var state_31798__$1 = state_31798;
var statearr_31818_31845 = state_31798__$1;
(statearr_31818_31845[(2)] = inst_31781);

(statearr_31818_31845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31799 === (8))){
var inst_31758 = (state_31798[(7)]);
var inst_31766 = (state_31798[(10)]);
var inst_31762 = (state_31798[(9)]);
var inst_31771 = inst_31758.push(inst_31762);
var tmp31815 = inst_31758;
var inst_31758__$1 = tmp31815;
var inst_31759 = inst_31766;
var state_31798__$1 = (function (){var statearr_31819 = state_31798;
(statearr_31819[(7)] = inst_31758__$1);

(statearr_31819[(8)] = inst_31759);

(statearr_31819[(14)] = inst_31771);

return statearr_31819;
})();
var statearr_31820_31846 = state_31798__$1;
(statearr_31820_31846[(2)] = null);

(statearr_31820_31846[(1)] = (2));


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
});})(c__29025__auto___31832,out))
;
return ((function (switch__28913__auto__,c__29025__auto___31832,out){
return (function() {
var cljs$core$async$state_machine__28914__auto__ = null;
var cljs$core$async$state_machine__28914__auto____0 = (function (){
var statearr_31824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31824[(0)] = cljs$core$async$state_machine__28914__auto__);

(statearr_31824[(1)] = (1));

return statearr_31824;
});
var cljs$core$async$state_machine__28914__auto____1 = (function (state_31798){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_31798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e31825){if((e31825 instanceof Object)){
var ex__28917__auto__ = e31825;
var statearr_31826_31847 = state_31798;
(statearr_31826_31847[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31848 = state_31798;
state_31798 = G__31848;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
cljs$core$async$state_machine__28914__auto__ = function(state_31798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28914__auto____1.call(this,state_31798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28914__auto____0;
cljs$core$async$state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28914__auto____1;
return cljs$core$async$state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto___31832,out))
})();
var state__29027__auto__ = (function (){var statearr_31827 = f__29026__auto__.call(null);
(statearr_31827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto___31832);

return statearr_31827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto___31832,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1511752904355