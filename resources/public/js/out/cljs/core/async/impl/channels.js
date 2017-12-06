// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels27955 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels27955 = (function (box,val,meta27956){
this.box = box;
this.val = val;
this.meta27956 = meta27956;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels27955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27957,meta27956__$1){
var self__ = this;
var _27957__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels27955(self__.box,self__.val,meta27956__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels27955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27957){
var self__ = this;
var _27957__$1 = this;
return self__.meta27956;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels27955.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels27955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"box","box",-1123515375,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null)))], null)),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta27956","meta27956",1373726246,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels27955.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels27955.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels27955";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels27955.cljs$lang$ctorPrWriter = (function (this__27410__auto__,writer__27411__auto__,opt__27412__auto__){
return cljs.core._write.call(null,writer__27411__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels27955");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels27955 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels27955(box__$1,val__$1,meta27956){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels27955(box__$1,val__$1,meta27956));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels27955(cljs$core$async$impl$channels$box,val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__27410__auto__,writer__27411__auto__,opt__27412__auto__){
return cljs.core._write.call(null,writer__27411__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__27467__auto__ = (((this$ == null))?null:this$);
var m__27468__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__27467__auto__)]);
if(!((m__27468__auto__ == null))){
return m__27468__auto__.call(null,this$);
} else {
var m__27468__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__27468__auto____$1 == null))){
return m__27468__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_27969 = self__.puts.pop();
if((putter_27969 == null)){
} else {
var put_handler_27970 = putter_27969.handler;
var val_27971 = putter_27969.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_27970)){
var put_cb_27972 = cljs.core.async.impl.protocols.commit.call(null,put_handler_27970);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_27972,put_handler_27970,val_27971,putter_27969,this$__$1){
return (function (){
return put_cb_27972.call(null,true);
});})(put_cb_27972,put_handler_27970,val_27971,putter_27969,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't put nil in on a channel"),cljs.core.str("\n"),cljs.core.str("(not (nil? val))")].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__26792__auto__ = self__.buf;
if(cljs.core.truth_(and__26792__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__26792__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__27973 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__27973;
continue;
} else {
var G__27974 = takers;
takers = G__27974;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__27958_27975 = cljs.core.seq.call(null,take_cbs);
var chunk__27959_27976 = null;
var count__27960_27977 = (0);
var i__27961_27978 = (0);
while(true){
if((i__27961_27978 < count__27960_27977)){
var f_27979 = cljs.core._nth.call(null,chunk__27959_27976,i__27961_27978);
cljs.core.async.impl.dispatch.run.call(null,f_27979);

var G__27980 = seq__27958_27975;
var G__27981 = chunk__27959_27976;
var G__27982 = count__27960_27977;
var G__27983 = (i__27961_27978 + (1));
seq__27958_27975 = G__27980;
chunk__27959_27976 = G__27981;
count__27960_27977 = G__27982;
i__27961_27978 = G__27983;
continue;
} else {
var temp__4657__auto___27984 = cljs.core.seq.call(null,seq__27958_27975);
if(temp__4657__auto___27984){
var seq__27958_27985__$1 = temp__4657__auto___27984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27958_27985__$1)){
var c__27615__auto___27986 = cljs.core.chunk_first.call(null,seq__27958_27985__$1);
var G__27987 = cljs.core.chunk_rest.call(null,seq__27958_27985__$1);
var G__27988 = c__27615__auto___27986;
var G__27989 = cljs.core.count.call(null,c__27615__auto___27986);
var G__27990 = (0);
seq__27958_27975 = G__27987;
chunk__27959_27976 = G__27988;
count__27960_27977 = G__27989;
i__27961_27978 = G__27990;
continue;
} else {
var f_27991 = cljs.core.first.call(null,seq__27958_27985__$1);
cljs.core.async.impl.dispatch.run.call(null,f_27991);

var G__27992 = cljs.core.next.call(null,seq__27958_27985__$1);
var G__27993 = null;
var G__27994 = (0);
var G__27995 = (0);
seq__27958_27975 = G__27992;
chunk__27959_27976 = G__27993;
count__27960_27977 = G__27994;
i__27961_27978 = G__27995;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending puts are allowed on a single channel."),cljs.core.str(" Consider using a windowed buffer.")].join('')),cljs.core.str("\n"),cljs.core.str("(< (.-length puts) impl/MAX-QUEUE-SIZE)")].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var temp__4655__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__4655__auto__)){
var take_cb = temp__4655__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__27962 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__26792__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__26792__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__26792__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))){
var G__27996 = cbs__$1;
cbs = G__27996;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__27962,(0),null);
var cbs = cljs.core.nth.call(null,vec__27962,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__27965_27997 = cljs.core.seq.call(null,cbs);
var chunk__27966_27998 = null;
var count__27967_27999 = (0);
var i__27968_28000 = (0);
while(true){
if((i__27968_28000 < count__27967_27999)){
var cb_28001 = cljs.core._nth.call(null,chunk__27966_27998,i__27968_28000);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__27965_27997,chunk__27966_27998,count__27967_27999,i__27968_28000,cb_28001,val,vec__27962,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1){
return (function (){
return cb_28001.call(null,true);
});})(seq__27965_27997,chunk__27966_27998,count__27967_27999,i__27968_28000,cb_28001,val,vec__27962,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1))
);

var G__28002 = seq__27965_27997;
var G__28003 = chunk__27966_27998;
var G__28004 = count__27967_27999;
var G__28005 = (i__27968_28000 + (1));
seq__27965_27997 = G__28002;
chunk__27966_27998 = G__28003;
count__27967_27999 = G__28004;
i__27968_28000 = G__28005;
continue;
} else {
var temp__4657__auto___28006 = cljs.core.seq.call(null,seq__27965_27997);
if(temp__4657__auto___28006){
var seq__27965_28007__$1 = temp__4657__auto___28006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27965_28007__$1)){
var c__27615__auto___28008 = cljs.core.chunk_first.call(null,seq__27965_28007__$1);
var G__28009 = cljs.core.chunk_rest.call(null,seq__27965_28007__$1);
var G__28010 = c__27615__auto___28008;
var G__28011 = cljs.core.count.call(null,c__27615__auto___28008);
var G__28012 = (0);
seq__27965_27997 = G__28009;
chunk__27966_27998 = G__28010;
count__27967_27999 = G__28011;
i__27968_28000 = G__28012;
continue;
} else {
var cb_28013 = cljs.core.first.call(null,seq__27965_28007__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__27965_27997,chunk__27966_27998,count__27967_27999,i__27968_28000,cb_28013,seq__27965_28007__$1,temp__4657__auto___28006,val,vec__27962,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1){
return (function (){
return cb_28013.call(null,true);
});})(seq__27965_27997,chunk__27966_27998,count__27967_27999,i__27968_28000,cb_28013,seq__27965_28007__$1,temp__4657__auto___28006,val,vec__27962,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1))
);

var G__28014 = cljs.core.next.call(null,seq__27965_28007__$1);
var G__28015 = null;
var G__28016 = (0);
var G__28017 = (0);
seq__27965_27997 = G__28014;
chunk__27966_27998 = G__28015;
count__27967_27999 = G__28016;
i__27968_28000 = G__28017;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__26792__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__26792__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__26792__auto__;
}
})())){
var has_val = (function (){var and__26792__auto__ = self__.buf;
if(cljs.core.truth_(and__26792__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__26792__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending takes are allowed on a single channel.")].join('')),cljs.core.str("\n"),cljs.core.str("(< (.-length takes) impl/MAX-QUEUE-SIZE)")].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__26792__auto__ = self__.buf;
if(cljs.core.truth_(and__26792__auto__)){
return (self__.puts.length === (0));
} else {
return and__26792__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_28018 = self__.takes.pop();
if((taker_28018 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_28018)){
var take_cb_28019 = cljs.core.async.impl.protocols.commit.call(null,taker_28018);
var val_28020 = (cljs.core.truth_((function (){var and__26792__auto__ = self__.buf;
if(cljs.core.truth_(and__26792__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__26792__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_28019,val_28020,taker_28018,this$__$1){
return (function (){
return take_cb_28019.call(null,val_28020);
});})(take_cb_28019,val_28020,taker_28018,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__27410__auto__,writer__27411__auto__,opt__27412__auto__){
return cljs.core._write.call(null,writer__27411__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__26804__auto__ = exh;
if(cljs.core.truth_(or__26804__auto__)){
return or__26804__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var args28021 = [];
var len__27879__auto___28026 = arguments.length;
var i__27880__auto___28027 = (0);
while(true){
if((i__27880__auto___28027 < len__27879__auto___28026)){
args28021.push((arguments[i__27880__auto___28027]));

var G__28028 = (i__27880__auto___28027 + (1));
i__27880__auto___28027 = G__28028;
continue;
} else {
}
break;
}

var G__28023 = args28021.length;
switch (G__28023) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28021.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__28030 = null;
var G__28030__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e28024){var t = e28024;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__28030__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e28025){var t = e28025;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__28030 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__28030__1.call(this,buf__$1);
case 2:
return G__28030__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28030.cljs$core$IFn$_invoke$arity$1 = G__28030__1;
G__28030.cljs$core$IFn$_invoke$arity$2 = G__28030__2;
return G__28030;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=channels.js.map?rel=1511752900576