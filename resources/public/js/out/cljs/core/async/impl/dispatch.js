// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async.impl.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('goog.async.nextTick');
cljs.core.async.impl.dispatch.tasks = cljs.core.async.impl.buffers.ring_buffer.call(null,(32));
cljs.core.async.impl.dispatch.running_QMARK_ = false;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
cljs.core.async.impl.dispatch.TASK_BATCH_SIZE = (1024);
cljs.core.async.impl.dispatch.process_messages = (function cljs$core$async$impl$dispatch$process_messages(){
cljs.core.async.impl.dispatch.running_QMARK_ = true;

cljs.core.async.impl.dispatch.queued_QMARK_ = false;

var count_27947 = (0);
while(true){
var m_27948 = cljs.core.async.impl.dispatch.tasks.pop();
if((m_27948 == null)){
} else {
m_27948.call(null);

if((count_27947 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE)){
var G__27949 = (count_27947 + (1));
count_27947 = G__27949;
continue;
} else {
}
}
break;
}

cljs.core.async.impl.dispatch.running_QMARK_ = false;

if((cljs.core.async.impl.dispatch.tasks.length > (0))){
return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
} else {
return null;
}
});
cljs.core.async.impl.dispatch.queue_dispatcher = (function cljs$core$async$impl$dispatch$queue_dispatcher(){
if(cljs.core.truth_((function (){var and__26792__auto__ = cljs.core.async.impl.dispatch.queued_QMARK_;
if(cljs.core.truth_(and__26792__auto__)){
return cljs.core.async.impl.dispatch.running_QMARK_;
} else {
return and__26792__auto__;
}
})())){
return null;
} else {
cljs.core.async.impl.dispatch.queued_QMARK_ = true;

return goog.async.nextTick(cljs.core.async.impl.dispatch.process_messages);
}
});
cljs.core.async.impl.dispatch.run = (function cljs$core$async$impl$dispatch$run(f){
cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);

return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
});
cljs.core.async.impl.dispatch.queue_delay = (function cljs$core$async$impl$dispatch$queue_delay(f,delay){
return setTimeout(f,delay);
});

//# sourceMappingURL=dispatch.js.map?rel=1511752900291