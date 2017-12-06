// Compiled by ClojureScript 1.9.229 {}
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.object');
goog.require('goog.events');

/**
 * @interface
 */
domina.events.Event = function(){};

/**
 * Prevents the default action, for example a link redirecting to a URL
 */
domina.events.prevent_default = (function domina$events$prevent_default(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$prevent_default$arity$1 == null)))){
return evt.domina$events$Event$prevent_default$arity$1(evt);
} else {
var x__27467__auto__ = (((evt == null))?null:evt);
var m__27468__auto__ = (domina.events.prevent_default[goog.typeOf(x__27467__auto__)]);
if(!((m__27468__auto__ == null))){
return m__27468__auto__.call(null,evt);
} else {
var m__27468__auto____$1 = (domina.events.prevent_default["_"]);
if(!((m__27468__auto____$1 == null))){
return m__27468__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
}
});

/**
 * Stops event propagation
 */
domina.events.stop_propagation = (function domina$events$stop_propagation(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$stop_propagation$arity$1 == null)))){
return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else {
var x__27467__auto__ = (((evt == null))?null:evt);
var m__27468__auto__ = (domina.events.stop_propagation[goog.typeOf(x__27467__auto__)]);
if(!((m__27468__auto__ == null))){
return m__27468__auto__.call(null,evt);
} else {
var m__27468__auto____$1 = (domina.events.stop_propagation["_"]);
if(!((m__27468__auto____$1 == null))){
return m__27468__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
}
});

/**
 * Returns the target of the event
 */
domina.events.target = (function domina$events$target(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$target$arity$1 == null)))){
return evt.domina$events$Event$target$arity$1(evt);
} else {
var x__27467__auto__ = (((evt == null))?null:evt);
var m__27468__auto__ = (domina.events.target[goog.typeOf(x__27467__auto__)]);
if(!((m__27468__auto__ == null))){
return m__27468__auto__.call(null,evt);
} else {
var m__27468__auto____$1 = (domina.events.target["_"]);
if(!((m__27468__auto____$1 == null))){
return m__27468__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
}
});

/**
 * Returns the object that had the listener attached
 */
domina.events.current_target = (function domina$events$current_target(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$current_target$arity$1 == null)))){
return evt.domina$events$Event$current_target$arity$1(evt);
} else {
var x__27467__auto__ = (((evt == null))?null:evt);
var m__27468__auto__ = (domina.events.current_target[goog.typeOf(x__27467__auto__)]);
if(!((m__27468__auto__ == null))){
return m__27468__auto__.call(null,evt);
} else {
var m__27468__auto____$1 = (domina.events.current_target["_"]);
if(!((m__27468__auto____$1 == null))){
return m__27468__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
}
});

/**
 * Returns the type of the the event
 */
domina.events.event_type = (function domina$events$event_type(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$event_type$arity$1 == null)))){
return evt.domina$events$Event$event_type$arity$1(evt);
} else {
var x__27467__auto__ = (((evt == null))?null:evt);
var m__27468__auto__ = (domina.events.event_type[goog.typeOf(x__27467__auto__)]);
if(!((m__27468__auto__ == null))){
return m__27468__auto__.call(null,evt);
} else {
var m__27468__auto____$1 = (domina.events.event_type["_"]);
if(!((m__27468__auto____$1 == null))){
return m__27468__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
}
});

/**
 * Returns the original GClosure event
 */
domina.events.raw_event = (function domina$events$raw_event(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$raw_event$arity$1 == null)))){
return evt.domina$events$Event$raw_event$arity$1(evt);
} else {
var x__27467__auto__ = (((evt == null))?null:evt);
var m__27468__auto__ = (domina.events.raw_event[goog.typeOf(x__27467__auto__)]);
if(!((m__27468__auto__ == null))){
return m__27468__auto__.call(null,evt);
} else {
var m__27468__auto____$1 = (domina.events.raw_event["_"]);
if(!((m__27468__auto____$1 == null))){
return m__27468__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
}
});

domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function domina$events$create_listener_function(f){
return (function (evt){
f.call(null,(function (){
if(typeof domina.events.t_domina$events28475 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events28475 = (function (create_listener_function,f,evt,meta28476){
this.create_listener_function = create_listener_function;
this.f = f;
this.evt = evt;
this.meta28476 = meta28476;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.events.t_domina$events28475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28477,meta28476__$1){
var self__ = this;
var _28477__$1 = this;
return (new domina.events.t_domina$events28475(self__.create_listener_function,self__.f,self__.evt,meta28476__$1));
});

domina.events.t_domina$events28475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28477){
var self__ = this;
var _28477__$1 = this;
return self__.meta28476;
});

domina.events.t_domina$events28475.prototype.domina$events$Event$ = true;

domina.events.t_domina$events28475.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t_domina$events28475.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t_domina$events28475.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t_domina$events28475.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t_domina$events28475.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t_domina$events28475.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t_domina$events28475.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var o__$1 = this;
var temp__4655__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4655__auto__)){
var val = temp__4655__auto__;
return val;
} else {
return (self__.evt[cljs.core.name.call(null,k)]);
}
});

domina.events.t_domina$events28475.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__26804__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__26804__auto__)){
return or__26804__auto__;
} else {
return not_found;
}
});

domina.events.t_domina$events28475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"create-listener-function","create-listener-function",1582593782,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta28476","meta28476",502750269,null)], null);
});

domina.events.t_domina$events28475.cljs$lang$type = true;

domina.events.t_domina$events28475.cljs$lang$ctorStr = "domina.events/t_domina$events28475";

domina.events.t_domina$events28475.cljs$lang$ctorPrWriter = (function (this__27410__auto__,writer__27411__auto__,opt__27412__auto__){
return cljs.core._write.call(null,writer__27411__auto__,"domina.events/t_domina$events28475");
});

domina.events.__GT_t_domina$events28475 = (function domina$events$create_listener_function_$___GT_t_domina$events28475(create_listener_function__$1,f__$1,evt__$1,meta28476){
return (new domina.events.t_domina$events28475(create_listener_function__$1,f__$1,evt__$1,meta28476));
});

}

return (new domina.events.t_domina$events28475(domina$events$create_listener_function,f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__27584__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__28482(s__28483){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__28483__$1 = s__28483;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28483__$1);
if(temp__4657__auto__){
var s__28483__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28483__$2)){
var c__27582__auto__ = cljs.core.chunk_first.call(null,s__28483__$2);
var size__27583__auto__ = cljs.core.count.call(null,c__27582__auto__);
var b__28485 = cljs.core.chunk_buffer.call(null,size__27583__auto__);
if((function (){var i__28484 = (0);
while(true){
if((i__28484 < size__27583__auto__)){
var node = cljs.core._nth.call(null,c__27582__auto__,i__28484);
cljs.core.chunk_append.call(null,b__28485,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__28486 = (i__28484 + (1));
i__28484 = G__28486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28485),domina$events$listen_internal_BANG__$_iter__28482.call(null,cljs.core.chunk_rest.call(null,s__28483__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28485),null);
}
} else {
var node = cljs.core.first.call(null,s__28483__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__28482.call(null,cljs.core.rest.call(null,s__28483__$2)));
}
} else {
return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;
return iter__27584__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_BANG_ = (function domina$events$listen_BANG_(var_args){
var args28487 = [];
var len__27879__auto___28490 = arguments.length;
var i__27880__auto___28491 = (0);
while(true){
if((i__27880__auto___28491 < len__27879__auto___28490)){
args28487.push((arguments[i__27880__auto___28491]));

var G__28492 = (i__27880__auto___28491 + (1));
i__27880__auto___28491 = G__28492;
continue;
} else {
}
break;
}

var G__28489 = args28487.length;
switch (G__28489) {
case 2:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28487.length)].join('')));

}
});

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});

domina.events.listen_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_BANG_ = (function domina$events$capture_BANG_(var_args){
var args28494 = [];
var len__27879__auto___28497 = arguments.length;
var i__27880__auto___28498 = (0);
while(true){
if((i__27880__auto___28498 < len__27879__auto___28497)){
args28494.push((arguments[i__27880__auto___28498]));

var G__28499 = (i__27880__auto___28498 + (1));
i__27880__auto___28498 = G__28499;
continue;
} else {
}
break;
}

var G__28496 = args28494.length;
switch (G__28496) {
case 2:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28494.length)].join('')));

}
});

domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});

domina.events.capture_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_once_BANG_ = (function domina$events$listen_once_BANG_(var_args){
var args28501 = [];
var len__27879__auto___28504 = arguments.length;
var i__27880__auto___28505 = (0);
while(true){
if((i__27880__auto___28505 < len__27879__auto___28504)){
args28501.push((arguments[i__27880__auto___28505]));

var G__28506 = (i__27880__auto___28505 + (1));
i__27880__auto___28505 = G__28506;
continue;
} else {
}
break;
}

var G__28503 = args28501.length;
switch (G__28503) {
case 2:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28501.length)].join('')));

}
});

domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});

domina.events.listen_once_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_once_BANG_ = (function domina$events$capture_once_BANG_(var_args){
var args28508 = [];
var len__27879__auto___28511 = arguments.length;
var i__27880__auto___28512 = (0);
while(true){
if((i__27880__auto___28512 < len__27879__auto___28511)){
args28508.push((arguments[i__27880__auto___28512]));

var G__28513 = (i__27880__auto___28512 + (1));
i__27880__auto___28512 = G__28513;
continue;
} else {
}
break;
}

var G__28510 = args28508.length;
switch (G__28510) {
case 2:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28508.length)].join('')));

}
});

domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});

domina.events.capture_once_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
 */
domina.events.unlisten_BANG_ = (function domina$events$unlisten_BANG_(var_args){
var args28515 = [];
var len__27879__auto___28526 = arguments.length;
var i__27880__auto___28527 = (0);
while(true){
if((i__27880__auto___28527 < len__27879__auto___28526)){
args28515.push((arguments[i__27880__auto___28527]));

var G__28528 = (i__27880__auto___28527 + (1));
i__27880__auto___28527 = G__28528;
continue;
} else {
}
break;
}

var G__28517 = args28515.length;
switch (G__28517) {
case 0:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28515.length)].join('')));

}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return domina.events.unlisten_BANG_.call(null,domina.events.root_element);
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (content){
var seq__28518 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__28519 = null;
var count__28520 = (0);
var i__28521 = (0);
while(true){
if((i__28521 < count__28520)){
var node = cljs.core._nth.call(null,chunk__28519,i__28521);
goog.events.removeAll(node);

var G__28530 = seq__28518;
var G__28531 = chunk__28519;
var G__28532 = count__28520;
var G__28533 = (i__28521 + (1));
seq__28518 = G__28530;
chunk__28519 = G__28531;
count__28520 = G__28532;
i__28521 = G__28533;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28518);
if(temp__4657__auto__){
var seq__28518__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28518__$1)){
var c__27615__auto__ = cljs.core.chunk_first.call(null,seq__28518__$1);
var G__28534 = cljs.core.chunk_rest.call(null,seq__28518__$1);
var G__28535 = c__27615__auto__;
var G__28536 = cljs.core.count.call(null,c__27615__auto__);
var G__28537 = (0);
seq__28518 = G__28534;
chunk__28519 = G__28535;
count__28520 = G__28536;
i__28521 = G__28537;
continue;
} else {
var node = cljs.core.first.call(null,seq__28518__$1);
goog.events.removeAll(node);

var G__28538 = cljs.core.next.call(null,seq__28518__$1);
var G__28539 = null;
var G__28540 = (0);
var G__28541 = (0);
seq__28518 = G__28538;
chunk__28519 = G__28539;
count__28520 = G__28540;
i__28521 = G__28541;
continue;
}
} else {
return null;
}
}
break;
}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (content,type){
var type__$1 = cljs.core.name.call(null,type);
var seq__28522 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__28523 = null;
var count__28524 = (0);
var i__28525 = (0);
while(true){
if((i__28525 < count__28524)){
var node = cljs.core._nth.call(null,chunk__28523,i__28525);
goog.events.removeAll(node,type__$1);

var G__28542 = seq__28522;
var G__28543 = chunk__28523;
var G__28544 = count__28524;
var G__28545 = (i__28525 + (1));
seq__28522 = G__28542;
chunk__28523 = G__28543;
count__28524 = G__28544;
i__28525 = G__28545;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28522);
if(temp__4657__auto__){
var seq__28522__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28522__$1)){
var c__27615__auto__ = cljs.core.chunk_first.call(null,seq__28522__$1);
var G__28546 = cljs.core.chunk_rest.call(null,seq__28522__$1);
var G__28547 = c__27615__auto__;
var G__28548 = cljs.core.count.call(null,c__27615__auto__);
var G__28549 = (0);
seq__28522 = G__28546;
chunk__28523 = G__28547;
count__28524 = G__28548;
i__28525 = G__28549;
continue;
} else {
var node = cljs.core.first.call(null,seq__28522__$1);
goog.events.removeAll(node,type__$1);

var G__28550 = cljs.core.next.call(null,seq__28522__$1);
var G__28551 = null;
var G__28552 = (0);
var G__28553 = (0);
seq__28522 = G__28550;
chunk__28523 = G__28551;
count__28524 = G__28552;
i__28525 = G__28553;
continue;
}
} else {
return null;
}
}
break;
}
});

domina.events.unlisten_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Returns a seq of a node and its ancestors, starting with the document root.
 */
domina.events.ancestor_nodes = (function domina$events$ancestor_nodes(var_args){
var args28554 = [];
var len__27879__auto___28557 = arguments.length;
var i__27880__auto___28558 = (0);
while(true){
if((i__27880__auto___28558 < len__27879__auto___28557)){
args28554.push((arguments[i__27880__auto___28558]));

var G__28559 = (i__27880__auto___28558 + (1));
i__27880__auto___28558 = G__28559;
continue;
} else {
}
break;
}

var G__28556 = args28554.length;
switch (G__28556) {
case 1:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28554.length)].join('')));

}
});

domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return domina.events.ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});

domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = (function (n,so_far){
while(true){
var temp__4655__auto__ = n.parentNode;
if(cljs.core.truth_(temp__4655__auto__)){
var parent = temp__4655__auto__;
var G__28561 = parent;
var G__28562 = cljs.core.cons.call(null,parent,so_far);
n = G__28561;
so_far = G__28562;
continue;
} else {
return so_far;
}
break;
}
});

domina.events.ancestor_nodes.cljs$lang$maxFixedArity = 2;

/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_browser_BANG_ = (function domina$events$dispatch_browser_BANG_(source,evt){
evt.target = domina.single_node.call(null,source);

var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));
var seq__28571_28579 = cljs.core.seq.call(null,ancestors);
var chunk__28572_28580 = null;
var count__28573_28581 = (0);
var i__28574_28582 = (0);
while(true){
if((i__28574_28582 < count__28573_28581)){
var n_28583 = cljs.core._nth.call(null,chunk__28572_28580,i__28574_28582);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_28583;

goog.events.fireListeners(n_28583,evt.type,true,evt);
}

var G__28584 = seq__28571_28579;
var G__28585 = chunk__28572_28580;
var G__28586 = count__28573_28581;
var G__28587 = (i__28574_28582 + (1));
seq__28571_28579 = G__28584;
chunk__28572_28580 = G__28585;
count__28573_28581 = G__28586;
i__28574_28582 = G__28587;
continue;
} else {
var temp__4657__auto___28588 = cljs.core.seq.call(null,seq__28571_28579);
if(temp__4657__auto___28588){
var seq__28571_28589__$1 = temp__4657__auto___28588;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28571_28589__$1)){
var c__27615__auto___28590 = cljs.core.chunk_first.call(null,seq__28571_28589__$1);
var G__28591 = cljs.core.chunk_rest.call(null,seq__28571_28589__$1);
var G__28592 = c__27615__auto___28590;
var G__28593 = cljs.core.count.call(null,c__27615__auto___28590);
var G__28594 = (0);
seq__28571_28579 = G__28591;
chunk__28572_28580 = G__28592;
count__28573_28581 = G__28593;
i__28574_28582 = G__28594;
continue;
} else {
var n_28595 = cljs.core.first.call(null,seq__28571_28589__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_28595;

goog.events.fireListeners(n_28595,evt.type,true,evt);
}

var G__28596 = cljs.core.next.call(null,seq__28571_28589__$1);
var G__28597 = null;
var G__28598 = (0);
var G__28599 = (0);
seq__28571_28579 = G__28596;
chunk__28572_28580 = G__28597;
count__28573_28581 = G__28598;
i__28574_28582 = G__28599;
continue;
}
} else {
}
}
break;
}

var seq__28575_28600 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__28576_28601 = null;
var count__28577_28602 = (0);
var i__28578_28603 = (0);
while(true){
if((i__28578_28603 < count__28577_28602)){
var n_28604 = cljs.core._nth.call(null,chunk__28576_28601,i__28578_28603);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_28604;

goog.events.fireListeners(n_28604,evt.type,false,evt);
}

var G__28605 = seq__28575_28600;
var G__28606 = chunk__28576_28601;
var G__28607 = count__28577_28602;
var G__28608 = (i__28578_28603 + (1));
seq__28575_28600 = G__28605;
chunk__28576_28601 = G__28606;
count__28577_28602 = G__28607;
i__28578_28603 = G__28608;
continue;
} else {
var temp__4657__auto___28609 = cljs.core.seq.call(null,seq__28575_28600);
if(temp__4657__auto___28609){
var seq__28575_28610__$1 = temp__4657__auto___28609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28575_28610__$1)){
var c__27615__auto___28611 = cljs.core.chunk_first.call(null,seq__28575_28610__$1);
var G__28612 = cljs.core.chunk_rest.call(null,seq__28575_28610__$1);
var G__28613 = c__27615__auto___28611;
var G__28614 = cljs.core.count.call(null,c__27615__auto___28611);
var G__28615 = (0);
seq__28575_28600 = G__28612;
chunk__28576_28601 = G__28613;
count__28577_28602 = G__28614;
i__28578_28603 = G__28615;
continue;
} else {
var n_28616 = cljs.core.first.call(null,seq__28575_28610__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_28616;

goog.events.fireListeners(n_28616,evt.type,false,evt);
}

var G__28617 = cljs.core.next.call(null,seq__28575_28610__$1);
var G__28618 = null;
var G__28619 = (0);
var G__28620 = (0);
seq__28575_28600 = G__28617;
chunk__28576_28601 = G__28618;
count__28577_28602 = G__28619;
i__28578_28603 = G__28620;
continue;
}
} else {
}
}
break;
}

return evt.returnValue_;
});
/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
 */
domina.events.dispatch_event_target_BANG_ = (function domina$events$dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
 * Tests whether the object is a goog.event.EventTarget
 */
domina.events.is_event_target_QMARK_ = (function domina$events$is_event_target_QMARK_(o){
var and__26792__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__26792__auto__)){
return o.dispatchEvent;
} else {
return and__26792__auto__;
}
});
/**
 * Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_BANG_ = (function domina$events$dispatch_BANG_(var_args){
var args28621 = [];
var len__27879__auto___28634 = arguments.length;
var i__27880__auto___28635 = (0);
while(true){
if((i__27880__auto___28635 < len__27879__auto___28634)){
args28621.push((arguments[i__27880__auto___28635]));

var G__28636 = (i__27880__auto___28635 + (1));
i__27880__auto___28635 = G__28636;
continue;
} else {
}
break;
}

var G__28623 = args28621.length;
switch (G__28623) {
case 2:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28621.length)].join('')));

}
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,evt_map){
return domina.events.dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__28624_28638 = cljs.core.seq.call(null,evt_map);
var chunk__28625_28639 = null;
var count__28626_28640 = (0);
var i__28627_28641 = (0);
while(true){
if((i__28627_28641 < count__28626_28640)){
var vec__28628_28642 = cljs.core._nth.call(null,chunk__28625_28639,i__28627_28641);
var k_28643 = cljs.core.nth.call(null,vec__28628_28642,(0),null);
var v_28644 = cljs.core.nth.call(null,vec__28628_28642,(1),null);
(evt[k_28643] = v_28644);

var G__28645 = seq__28624_28638;
var G__28646 = chunk__28625_28639;
var G__28647 = count__28626_28640;
var G__28648 = (i__28627_28641 + (1));
seq__28624_28638 = G__28645;
chunk__28625_28639 = G__28646;
count__28626_28640 = G__28647;
i__28627_28641 = G__28648;
continue;
} else {
var temp__4657__auto___28649 = cljs.core.seq.call(null,seq__28624_28638);
if(temp__4657__auto___28649){
var seq__28624_28650__$1 = temp__4657__auto___28649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28624_28650__$1)){
var c__27615__auto___28651 = cljs.core.chunk_first.call(null,seq__28624_28650__$1);
var G__28652 = cljs.core.chunk_rest.call(null,seq__28624_28650__$1);
var G__28653 = c__27615__auto___28651;
var G__28654 = cljs.core.count.call(null,c__27615__auto___28651);
var G__28655 = (0);
seq__28624_28638 = G__28652;
chunk__28625_28639 = G__28653;
count__28626_28640 = G__28654;
i__28627_28641 = G__28655;
continue;
} else {
var vec__28631_28656 = cljs.core.first.call(null,seq__28624_28650__$1);
var k_28657 = cljs.core.nth.call(null,vec__28631_28656,(0),null);
var v_28658 = cljs.core.nth.call(null,vec__28631_28656,(1),null);
(evt[k_28657] = v_28658);

var G__28659 = cljs.core.next.call(null,seq__28624_28650__$1);
var G__28660 = null;
var G__28661 = (0);
var G__28662 = (0);
seq__28624_28638 = G__28659;
chunk__28625_28639 = G__28660;
count__28626_28640 = G__28661;
i__28627_28641 = G__28662;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source))){
return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else {
return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});

domina.events.dispatch_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Given a listener key, removes the listener.
 */
domina.events.unlisten_by_key_BANG_ = (function domina$events$unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
 * Returns a sequence of event listeners for all the nodes in the
 * content of a given type.
 */
domina.events.get_listeners = (function domina$events$get_listeners(content,type){
var type__$1 = cljs.core.name.call(null,type);
return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__28663_SHARP_){
return goog.events.getListeners(p1__28663_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map?rel=1511837126661