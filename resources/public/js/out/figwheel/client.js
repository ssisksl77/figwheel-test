// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (cljs.core.some_QMARK_.call(null,JSON.stringify)))?(function (x){
return [cljs.core.str("#js "),cljs.core.str(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str(x)].join('');
}catch (e36599){if((e36599 instanceof Error)){
var e = e36599;
return "Error: Unable to stringify";
} else {
throw e36599;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args36601 = [];
var len__27879__auto___36604 = arguments.length;
var i__27880__auto___36605 = (0);
while(true){
if((i__27880__auto___36605 < len__27879__auto___36604)){
args36601.push((arguments[i__27880__auto___36605]));

var G__36606 = (i__27880__auto___36605 + (1));
i__27880__auto___36605 = G__36606;
continue;
} else {
}
break;
}

var G__36603 = args36601.length;
switch (G__36603) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36601.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__36600_SHARP_){
if(typeof p1__36600_SHARP_ === 'string'){
return p1__36600_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__36600_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27886__auto__ = [];
var len__27879__auto___36609 = arguments.length;
var i__27880__auto___36610 = (0);
while(true){
if((i__27880__auto___36610 < len__27879__auto___36609)){
args__27886__auto__.push((arguments[i__27880__auto___36610]));

var G__36611 = (i__27880__auto___36610 + (1));
i__27880__auto___36610 = G__36611;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36608){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36608));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27886__auto__ = [];
var len__27879__auto___36613 = arguments.length;
var i__27880__auto___36614 = (0);
while(true){
if((i__27880__auto___36614 < len__27879__auto___36613)){
args__27886__auto__.push((arguments[i__27880__auto___36614]));

var G__36615 = (i__27880__auto___36614 + (1));
i__27880__auto___36614 = G__36615;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36612){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36612));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36616){
var map__36619 = p__36616;
var map__36619__$1 = ((((!((map__36619 == null)))?((((map__36619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36619):map__36619);
var message = cljs.core.get.call(null,map__36619__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36619__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__26804__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__26804__auto__)){
return or__26804__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__26792__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__26792__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__26792__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29025__auto___36781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto___36781,ch){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto___36781,ch){
return (function (state_36750){
var state_val_36751 = (state_36750[(1)]);
if((state_val_36751 === (7))){
var inst_36746 = (state_36750[(2)]);
var state_36750__$1 = state_36750;
var statearr_36752_36782 = state_36750__$1;
(statearr_36752_36782[(2)] = inst_36746);

(statearr_36752_36782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36751 === (1))){
var state_36750__$1 = state_36750;
var statearr_36753_36783 = state_36750__$1;
(statearr_36753_36783[(2)] = null);

(statearr_36753_36783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36751 === (4))){
var inst_36703 = (state_36750[(7)]);
var inst_36703__$1 = (state_36750[(2)]);
var state_36750__$1 = (function (){var statearr_36754 = state_36750;
(statearr_36754[(7)] = inst_36703__$1);

return statearr_36754;
})();
if(cljs.core.truth_(inst_36703__$1)){
var statearr_36755_36784 = state_36750__$1;
(statearr_36755_36784[(1)] = (5));

} else {
var statearr_36756_36785 = state_36750__$1;
(statearr_36756_36785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36751 === (15))){
var inst_36710 = (state_36750[(8)]);
var inst_36725 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36710);
var inst_36726 = cljs.core.first.call(null,inst_36725);
var inst_36727 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36726);
var inst_36728 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36727)].join('');
var inst_36729 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36728);
var state_36750__$1 = state_36750;
var statearr_36757_36786 = state_36750__$1;
(statearr_36757_36786[(2)] = inst_36729);

(statearr_36757_36786[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36751 === (13))){
var inst_36734 = (state_36750[(2)]);
var state_36750__$1 = state_36750;
var statearr_36758_36787 = state_36750__$1;
(statearr_36758_36787[(2)] = inst_36734);

(statearr_36758_36787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36751 === (6))){
var state_36750__$1 = state_36750;
var statearr_36759_36788 = state_36750__$1;
(statearr_36759_36788[(2)] = null);

(statearr_36759_36788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36751 === (17))){
var inst_36732 = (state_36750[(2)]);
var state_36750__$1 = state_36750;
var statearr_36760_36789 = state_36750__$1;
(statearr_36760_36789[(2)] = inst_36732);

(statearr_36760_36789[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36751 === (3))){
var inst_36748 = (state_36750[(2)]);
var state_36750__$1 = state_36750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36750__$1,inst_36748);
} else {
if((state_val_36751 === (12))){
var inst_36709 = (state_36750[(9)]);
var inst_36723 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36709,opts);
var state_36750__$1 = state_36750;
if(cljs.core.truth_(inst_36723)){
var statearr_36761_36790 = state_36750__$1;
(statearr_36761_36790[(1)] = (15));

} else {
var statearr_36762_36791 = state_36750__$1;
(statearr_36762_36791[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36751 === (2))){
var state_36750__$1 = state_36750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36750__$1,(4),ch);
} else {
if((state_val_36751 === (11))){
var inst_36710 = (state_36750[(8)]);
var inst_36715 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36716 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36710);
var inst_36717 = cljs.core.async.timeout.call(null,(1000));
var inst_36718 = [inst_36716,inst_36717];
var inst_36719 = (new cljs.core.PersistentVector(null,2,(5),inst_36715,inst_36718,null));
var state_36750__$1 = state_36750;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36750__$1,(14),inst_36719);
} else {
if((state_val_36751 === (9))){
var inst_36710 = (state_36750[(8)]);
var inst_36736 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36737 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36710);
var inst_36738 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36737);
var inst_36739 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36738)].join('');
var inst_36740 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36739);
var state_36750__$1 = (function (){var statearr_36763 = state_36750;
(statearr_36763[(10)] = inst_36736);

return statearr_36763;
})();
var statearr_36764_36792 = state_36750__$1;
(statearr_36764_36792[(2)] = inst_36740);

(statearr_36764_36792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36751 === (5))){
var inst_36703 = (state_36750[(7)]);
var inst_36705 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36706 = (new cljs.core.PersistentArrayMap(null,2,inst_36705,null));
var inst_36707 = (new cljs.core.PersistentHashSet(null,inst_36706,null));
var inst_36708 = figwheel.client.focus_msgs.call(null,inst_36707,inst_36703);
var inst_36709 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36708);
var inst_36710 = cljs.core.first.call(null,inst_36708);
var inst_36711 = figwheel.client.autoload_QMARK_.call(null);
var state_36750__$1 = (function (){var statearr_36765 = state_36750;
(statearr_36765[(9)] = inst_36709);

(statearr_36765[(8)] = inst_36710);

return statearr_36765;
})();
if(cljs.core.truth_(inst_36711)){
var statearr_36766_36793 = state_36750__$1;
(statearr_36766_36793[(1)] = (8));

} else {
var statearr_36767_36794 = state_36750__$1;
(statearr_36767_36794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36751 === (14))){
var inst_36721 = (state_36750[(2)]);
var state_36750__$1 = state_36750;
var statearr_36768_36795 = state_36750__$1;
(statearr_36768_36795[(2)] = inst_36721);

(statearr_36768_36795[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36751 === (16))){
var state_36750__$1 = state_36750;
var statearr_36769_36796 = state_36750__$1;
(statearr_36769_36796[(2)] = null);

(statearr_36769_36796[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36751 === (10))){
var inst_36742 = (state_36750[(2)]);
var state_36750__$1 = (function (){var statearr_36770 = state_36750;
(statearr_36770[(11)] = inst_36742);

return statearr_36770;
})();
var statearr_36771_36797 = state_36750__$1;
(statearr_36771_36797[(2)] = null);

(statearr_36771_36797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36751 === (8))){
var inst_36709 = (state_36750[(9)]);
var inst_36713 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36709,opts);
var state_36750__$1 = state_36750;
if(cljs.core.truth_(inst_36713)){
var statearr_36772_36798 = state_36750__$1;
(statearr_36772_36798[(1)] = (11));

} else {
var statearr_36773_36799 = state_36750__$1;
(statearr_36773_36799[(1)] = (12));

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
});})(c__29025__auto___36781,ch))
;
return ((function (switch__28913__auto__,c__29025__auto___36781,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28914__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28914__auto____0 = (function (){
var statearr_36777 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36777[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28914__auto__);

(statearr_36777[(1)] = (1));

return statearr_36777;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28914__auto____1 = (function (state_36750){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_36750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e36778){if((e36778 instanceof Object)){
var ex__28917__auto__ = e36778;
var statearr_36779_36800 = state_36750;
(statearr_36779_36800[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36801 = state_36750;
state_36750 = G__36801;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28914__auto__ = function(state_36750){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28914__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28914__auto____1.call(this,state_36750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28914__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28914__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto___36781,ch))
})();
var state__29027__auto__ = (function (){var statearr_36780 = f__29026__auto__.call(null);
(statearr_36780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto___36781);

return statearr_36780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto___36781,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36802_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36802_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36805 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36805){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36804){if((e36804 instanceof Error)){
var e = e36804;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36805], null));
} else {
var e = e36804;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36805))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36806){
var map__36815 = p__36806;
var map__36815__$1 = ((((!((map__36815 == null)))?((((map__36815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36815):map__36815);
var opts = map__36815__$1;
var build_id = cljs.core.get.call(null,map__36815__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36815,map__36815__$1,opts,build_id){
return (function (p__36817){
var vec__36818 = p__36817;
var seq__36819 = cljs.core.seq.call(null,vec__36818);
var first__36820 = cljs.core.first.call(null,seq__36819);
var seq__36819__$1 = cljs.core.next.call(null,seq__36819);
var map__36821 = first__36820;
var map__36821__$1 = ((((!((map__36821 == null)))?((((map__36821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36821):map__36821);
var msg = map__36821__$1;
var msg_name = cljs.core.get.call(null,map__36821__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36819__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36818,seq__36819,first__36820,seq__36819__$1,map__36821,map__36821__$1,msg,msg_name,_,map__36815,map__36815__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36818,seq__36819,first__36820,seq__36819__$1,map__36821,map__36821__$1,msg,msg_name,_,map__36815,map__36815__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36815,map__36815__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36829){
var vec__36830 = p__36829;
var seq__36831 = cljs.core.seq.call(null,vec__36830);
var first__36832 = cljs.core.first.call(null,seq__36831);
var seq__36831__$1 = cljs.core.next.call(null,seq__36831);
var map__36833 = first__36832;
var map__36833__$1 = ((((!((map__36833 == null)))?((((map__36833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36833):map__36833);
var msg = map__36833__$1;
var msg_name = cljs.core.get.call(null,map__36833__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36831__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36835){
var map__36847 = p__36835;
var map__36847__$1 = ((((!((map__36847 == null)))?((((map__36847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36847):map__36847);
var on_compile_warning = cljs.core.get.call(null,map__36847__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36847__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36847,map__36847__$1,on_compile_warning,on_compile_fail){
return (function (p__36849){
var vec__36850 = p__36849;
var seq__36851 = cljs.core.seq.call(null,vec__36850);
var first__36852 = cljs.core.first.call(null,seq__36851);
var seq__36851__$1 = cljs.core.next.call(null,seq__36851);
var map__36853 = first__36852;
var map__36853__$1 = ((((!((map__36853 == null)))?((((map__36853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36853):map__36853);
var msg = map__36853__$1;
var msg_name = cljs.core.get.call(null,map__36853__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36851__$1;
var pred__36855 = cljs.core._EQ_;
var expr__36856 = msg_name;
if(cljs.core.truth_(pred__36855.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36856))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36855.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36856))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36847,map__36847__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29025__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto__,msg_hist,msg_names,msg){
return (function (state_37084){
var state_val_37085 = (state_37084[(1)]);
if((state_val_37085 === (7))){
var inst_37004 = (state_37084[(2)]);
var state_37084__$1 = state_37084;
if(cljs.core.truth_(inst_37004)){
var statearr_37086_37136 = state_37084__$1;
(statearr_37086_37136[(1)] = (8));

} else {
var statearr_37087_37137 = state_37084__$1;
(statearr_37087_37137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (20))){
var inst_37078 = (state_37084[(2)]);
var state_37084__$1 = state_37084;
var statearr_37088_37138 = state_37084__$1;
(statearr_37088_37138[(2)] = inst_37078);

(statearr_37088_37138[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (27))){
var inst_37074 = (state_37084[(2)]);
var state_37084__$1 = state_37084;
var statearr_37089_37139 = state_37084__$1;
(statearr_37089_37139[(2)] = inst_37074);

(statearr_37089_37139[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (1))){
var inst_36997 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37084__$1 = state_37084;
if(cljs.core.truth_(inst_36997)){
var statearr_37090_37140 = state_37084__$1;
(statearr_37090_37140[(1)] = (2));

} else {
var statearr_37091_37141 = state_37084__$1;
(statearr_37091_37141[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (24))){
var inst_37076 = (state_37084[(2)]);
var state_37084__$1 = state_37084;
var statearr_37092_37142 = state_37084__$1;
(statearr_37092_37142[(2)] = inst_37076);

(statearr_37092_37142[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (4))){
var inst_37082 = (state_37084[(2)]);
var state_37084__$1 = state_37084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37084__$1,inst_37082);
} else {
if((state_val_37085 === (15))){
var inst_37080 = (state_37084[(2)]);
var state_37084__$1 = state_37084;
var statearr_37093_37143 = state_37084__$1;
(statearr_37093_37143[(2)] = inst_37080);

(statearr_37093_37143[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (21))){
var inst_37033 = (state_37084[(2)]);
var inst_37034 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37035 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37034);
var state_37084__$1 = (function (){var statearr_37094 = state_37084;
(statearr_37094[(7)] = inst_37033);

return statearr_37094;
})();
var statearr_37095_37144 = state_37084__$1;
(statearr_37095_37144[(2)] = inst_37035);

(statearr_37095_37144[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (31))){
var inst_37063 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37084__$1 = state_37084;
if(cljs.core.truth_(inst_37063)){
var statearr_37096_37145 = state_37084__$1;
(statearr_37096_37145[(1)] = (34));

} else {
var statearr_37097_37146 = state_37084__$1;
(statearr_37097_37146[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (32))){
var inst_37072 = (state_37084[(2)]);
var state_37084__$1 = state_37084;
var statearr_37098_37147 = state_37084__$1;
(statearr_37098_37147[(2)] = inst_37072);

(statearr_37098_37147[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (33))){
var inst_37059 = (state_37084[(2)]);
var inst_37060 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37061 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37060);
var state_37084__$1 = (function (){var statearr_37099 = state_37084;
(statearr_37099[(8)] = inst_37059);

return statearr_37099;
})();
var statearr_37100_37148 = state_37084__$1;
(statearr_37100_37148[(2)] = inst_37061);

(statearr_37100_37148[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (13))){
var inst_37018 = figwheel.client.heads_up.clear.call(null);
var state_37084__$1 = state_37084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37084__$1,(16),inst_37018);
} else {
if((state_val_37085 === (22))){
var inst_37039 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37040 = figwheel.client.heads_up.append_warning_message.call(null,inst_37039);
var state_37084__$1 = state_37084;
var statearr_37101_37149 = state_37084__$1;
(statearr_37101_37149[(2)] = inst_37040);

(statearr_37101_37149[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (36))){
var inst_37070 = (state_37084[(2)]);
var state_37084__$1 = state_37084;
var statearr_37102_37150 = state_37084__$1;
(statearr_37102_37150[(2)] = inst_37070);

(statearr_37102_37150[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (29))){
var inst_37050 = (state_37084[(2)]);
var inst_37051 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37052 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37051);
var state_37084__$1 = (function (){var statearr_37103 = state_37084;
(statearr_37103[(9)] = inst_37050);

return statearr_37103;
})();
var statearr_37104_37151 = state_37084__$1;
(statearr_37104_37151[(2)] = inst_37052);

(statearr_37104_37151[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (6))){
var inst_36999 = (state_37084[(10)]);
var state_37084__$1 = state_37084;
var statearr_37105_37152 = state_37084__$1;
(statearr_37105_37152[(2)] = inst_36999);

(statearr_37105_37152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (28))){
var inst_37046 = (state_37084[(2)]);
var inst_37047 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37048 = figwheel.client.heads_up.display_warning.call(null,inst_37047);
var state_37084__$1 = (function (){var statearr_37106 = state_37084;
(statearr_37106[(11)] = inst_37046);

return statearr_37106;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37084__$1,(29),inst_37048);
} else {
if((state_val_37085 === (25))){
var inst_37044 = figwheel.client.heads_up.clear.call(null);
var state_37084__$1 = state_37084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37084__$1,(28),inst_37044);
} else {
if((state_val_37085 === (34))){
var inst_37065 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37084__$1 = state_37084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37084__$1,(37),inst_37065);
} else {
if((state_val_37085 === (17))){
var inst_37024 = (state_37084[(2)]);
var inst_37025 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37026 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37025);
var state_37084__$1 = (function (){var statearr_37107 = state_37084;
(statearr_37107[(12)] = inst_37024);

return statearr_37107;
})();
var statearr_37108_37153 = state_37084__$1;
(statearr_37108_37153[(2)] = inst_37026);

(statearr_37108_37153[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (3))){
var inst_37016 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37084__$1 = state_37084;
if(cljs.core.truth_(inst_37016)){
var statearr_37109_37154 = state_37084__$1;
(statearr_37109_37154[(1)] = (13));

} else {
var statearr_37110_37155 = state_37084__$1;
(statearr_37110_37155[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (12))){
var inst_37012 = (state_37084[(2)]);
var state_37084__$1 = state_37084;
var statearr_37111_37156 = state_37084__$1;
(statearr_37111_37156[(2)] = inst_37012);

(statearr_37111_37156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (2))){
var inst_36999 = (state_37084[(10)]);
var inst_36999__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37084__$1 = (function (){var statearr_37112 = state_37084;
(statearr_37112[(10)] = inst_36999__$1);

return statearr_37112;
})();
if(cljs.core.truth_(inst_36999__$1)){
var statearr_37113_37157 = state_37084__$1;
(statearr_37113_37157[(1)] = (5));

} else {
var statearr_37114_37158 = state_37084__$1;
(statearr_37114_37158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (23))){
var inst_37042 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37084__$1 = state_37084;
if(cljs.core.truth_(inst_37042)){
var statearr_37115_37159 = state_37084__$1;
(statearr_37115_37159[(1)] = (25));

} else {
var statearr_37116_37160 = state_37084__$1;
(statearr_37116_37160[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (35))){
var state_37084__$1 = state_37084;
var statearr_37117_37161 = state_37084__$1;
(statearr_37117_37161[(2)] = null);

(statearr_37117_37161[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (19))){
var inst_37037 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37084__$1 = state_37084;
if(cljs.core.truth_(inst_37037)){
var statearr_37118_37162 = state_37084__$1;
(statearr_37118_37162[(1)] = (22));

} else {
var statearr_37119_37163 = state_37084__$1;
(statearr_37119_37163[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (11))){
var inst_37008 = (state_37084[(2)]);
var state_37084__$1 = state_37084;
var statearr_37120_37164 = state_37084__$1;
(statearr_37120_37164[(2)] = inst_37008);

(statearr_37120_37164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (9))){
var inst_37010 = figwheel.client.heads_up.clear.call(null);
var state_37084__$1 = state_37084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37084__$1,(12),inst_37010);
} else {
if((state_val_37085 === (5))){
var inst_37001 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37084__$1 = state_37084;
var statearr_37121_37165 = state_37084__$1;
(statearr_37121_37165[(2)] = inst_37001);

(statearr_37121_37165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (14))){
var inst_37028 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37084__$1 = state_37084;
if(cljs.core.truth_(inst_37028)){
var statearr_37122_37166 = state_37084__$1;
(statearr_37122_37166[(1)] = (18));

} else {
var statearr_37123_37167 = state_37084__$1;
(statearr_37123_37167[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (26))){
var inst_37054 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37084__$1 = state_37084;
if(cljs.core.truth_(inst_37054)){
var statearr_37124_37168 = state_37084__$1;
(statearr_37124_37168[(1)] = (30));

} else {
var statearr_37125_37169 = state_37084__$1;
(statearr_37125_37169[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (16))){
var inst_37020 = (state_37084[(2)]);
var inst_37021 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37022 = figwheel.client.heads_up.display_exception.call(null,inst_37021);
var state_37084__$1 = (function (){var statearr_37126 = state_37084;
(statearr_37126[(13)] = inst_37020);

return statearr_37126;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37084__$1,(17),inst_37022);
} else {
if((state_val_37085 === (30))){
var inst_37056 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37057 = figwheel.client.heads_up.display_warning.call(null,inst_37056);
var state_37084__$1 = state_37084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37084__$1,(33),inst_37057);
} else {
if((state_val_37085 === (10))){
var inst_37014 = (state_37084[(2)]);
var state_37084__$1 = state_37084;
var statearr_37127_37170 = state_37084__$1;
(statearr_37127_37170[(2)] = inst_37014);

(statearr_37127_37170[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (18))){
var inst_37030 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37031 = figwheel.client.heads_up.display_exception.call(null,inst_37030);
var state_37084__$1 = state_37084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37084__$1,(21),inst_37031);
} else {
if((state_val_37085 === (37))){
var inst_37067 = (state_37084[(2)]);
var state_37084__$1 = state_37084;
var statearr_37128_37171 = state_37084__$1;
(statearr_37128_37171[(2)] = inst_37067);

(statearr_37128_37171[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37085 === (8))){
var inst_37006 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37084__$1 = state_37084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37084__$1,(11),inst_37006);
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
});})(c__29025__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28913__auto__,c__29025__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28914__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28914__auto____0 = (function (){
var statearr_37132 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37132[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28914__auto__);

(statearr_37132[(1)] = (1));

return statearr_37132;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28914__auto____1 = (function (state_37084){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_37084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e37133){if((e37133 instanceof Object)){
var ex__28917__auto__ = e37133;
var statearr_37134_37172 = state_37084;
(statearr_37134_37172[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37173 = state_37084;
state_37084 = G__37173;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28914__auto__ = function(state_37084){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28914__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28914__auto____1.call(this,state_37084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28914__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28914__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto__,msg_hist,msg_names,msg))
})();
var state__29027__auto__ = (function (){var statearr_37135 = f__29026__auto__.call(null);
(statearr_37135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto__);

return statearr_37135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto__,msg_hist,msg_names,msg))
);

return c__29025__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29025__auto___37236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto___37236,ch){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto___37236,ch){
return (function (state_37219){
var state_val_37220 = (state_37219[(1)]);
if((state_val_37220 === (1))){
var state_37219__$1 = state_37219;
var statearr_37221_37237 = state_37219__$1;
(statearr_37221_37237[(2)] = null);

(statearr_37221_37237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37220 === (2))){
var state_37219__$1 = state_37219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37219__$1,(4),ch);
} else {
if((state_val_37220 === (3))){
var inst_37217 = (state_37219[(2)]);
var state_37219__$1 = state_37219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37219__$1,inst_37217);
} else {
if((state_val_37220 === (4))){
var inst_37207 = (state_37219[(7)]);
var inst_37207__$1 = (state_37219[(2)]);
var state_37219__$1 = (function (){var statearr_37222 = state_37219;
(statearr_37222[(7)] = inst_37207__$1);

return statearr_37222;
})();
if(cljs.core.truth_(inst_37207__$1)){
var statearr_37223_37238 = state_37219__$1;
(statearr_37223_37238[(1)] = (5));

} else {
var statearr_37224_37239 = state_37219__$1;
(statearr_37224_37239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37220 === (5))){
var inst_37207 = (state_37219[(7)]);
var inst_37209 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37207);
var state_37219__$1 = state_37219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37219__$1,(8),inst_37209);
} else {
if((state_val_37220 === (6))){
var state_37219__$1 = state_37219;
var statearr_37225_37240 = state_37219__$1;
(statearr_37225_37240[(2)] = null);

(statearr_37225_37240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37220 === (7))){
var inst_37215 = (state_37219[(2)]);
var state_37219__$1 = state_37219;
var statearr_37226_37241 = state_37219__$1;
(statearr_37226_37241[(2)] = inst_37215);

(statearr_37226_37241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37220 === (8))){
var inst_37211 = (state_37219[(2)]);
var state_37219__$1 = (function (){var statearr_37227 = state_37219;
(statearr_37227[(8)] = inst_37211);

return statearr_37227;
})();
var statearr_37228_37242 = state_37219__$1;
(statearr_37228_37242[(2)] = null);

(statearr_37228_37242[(1)] = (2));


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
});})(c__29025__auto___37236,ch))
;
return ((function (switch__28913__auto__,c__29025__auto___37236,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28914__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28914__auto____0 = (function (){
var statearr_37232 = [null,null,null,null,null,null,null,null,null];
(statearr_37232[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28914__auto__);

(statearr_37232[(1)] = (1));

return statearr_37232;
});
var figwheel$client$heads_up_plugin_$_state_machine__28914__auto____1 = (function (state_37219){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_37219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e37233){if((e37233 instanceof Object)){
var ex__28917__auto__ = e37233;
var statearr_37234_37243 = state_37219;
(statearr_37234_37243[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37244 = state_37219;
state_37219 = G__37244;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28914__auto__ = function(state_37219){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28914__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28914__auto____1.call(this,state_37219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28914__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28914__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto___37236,ch))
})();
var state__29027__auto__ = (function (){var statearr_37235 = f__29026__auto__.call(null);
(statearr_37235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto___37236);

return statearr_37235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto___37236,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29025__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto__){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto__){
return (function (state_37265){
var state_val_37266 = (state_37265[(1)]);
if((state_val_37266 === (1))){
var inst_37260 = cljs.core.async.timeout.call(null,(3000));
var state_37265__$1 = state_37265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37265__$1,(2),inst_37260);
} else {
if((state_val_37266 === (2))){
var inst_37262 = (state_37265[(2)]);
var inst_37263 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37265__$1 = (function (){var statearr_37267 = state_37265;
(statearr_37267[(7)] = inst_37262);

return statearr_37267;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37265__$1,inst_37263);
} else {
return null;
}
}
});})(c__29025__auto__))
;
return ((function (switch__28913__auto__,c__29025__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28914__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28914__auto____0 = (function (){
var statearr_37271 = [null,null,null,null,null,null,null,null];
(statearr_37271[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28914__auto__);

(statearr_37271[(1)] = (1));

return statearr_37271;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28914__auto____1 = (function (state_37265){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_37265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e37272){if((e37272 instanceof Object)){
var ex__28917__auto__ = e37272;
var statearr_37273_37275 = state_37265;
(statearr_37273_37275[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37276 = state_37265;
state_37265 = G__37276;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28914__auto__ = function(state_37265){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28914__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28914__auto____1.call(this,state_37265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28914__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28914__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto__))
})();
var state__29027__auto__ = (function (){var statearr_37274 = f__29026__auto__.call(null);
(statearr_37274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto__);

return statearr_37274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto__))
);

return c__29025__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29025__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29025__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__29026__auto__ = (function (){var switch__28913__auto__ = ((function (c__29025__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37299){
var state_val_37300 = (state_37299[(1)]);
if((state_val_37300 === (1))){
var inst_37293 = cljs.core.async.timeout.call(null,(2000));
var state_37299__$1 = state_37299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37299__$1,(2),inst_37293);
} else {
if((state_val_37300 === (2))){
var inst_37295 = (state_37299[(2)]);
var inst_37296 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37297 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37296);
var state_37299__$1 = (function (){var statearr_37301 = state_37299;
(statearr_37301[(7)] = inst_37295);

return statearr_37301;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37299__$1,inst_37297);
} else {
return null;
}
}
});})(c__29025__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28913__auto__,c__29025__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28914__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28914__auto____0 = (function (){
var statearr_37305 = [null,null,null,null,null,null,null,null];
(statearr_37305[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28914__auto__);

(statearr_37305[(1)] = (1));

return statearr_37305;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28914__auto____1 = (function (state_37299){
while(true){
var ret_value__28915__auto__ = (function (){try{while(true){
var result__28916__auto__ = switch__28913__auto__.call(null,state_37299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28916__auto__;
}
break;
}
}catch (e37306){if((e37306 instanceof Object)){
var ex__28917__auto__ = e37306;
var statearr_37307_37309 = state_37299;
(statearr_37307_37309[(5)] = ex__28917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37310 = state_37299;
state_37299 = G__37310;
continue;
} else {
return ret_value__28915__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28914__auto__ = function(state_37299){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28914__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28914__auto____1.call(this,state_37299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28914__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28914__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28914__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28914__auto__;
})()
;})(switch__28913__auto__,c__29025__auto__,figwheel_version,temp__4657__auto__))
})();
var state__29027__auto__ = (function (){var statearr_37308 = f__29026__auto__.call(null);
(statearr_37308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29025__auto__);

return statearr_37308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29027__auto__);
});})(c__29025__auto__,figwheel_version,temp__4657__auto__))
);

return c__29025__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37311){
var map__37315 = p__37311;
var map__37315__$1 = ((((!((map__37315 == null)))?((((map__37315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37315):map__37315);
var file = cljs.core.get.call(null,map__37315__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37315__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37315__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37317 = "";
var G__37317__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37317),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37317);
var G__37317__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37317__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37317__$1);
if(cljs.core.truth_((function (){var and__26792__auto__ = line;
if(cljs.core.truth_(and__26792__auto__)){
return column;
} else {
return and__26792__auto__;
}
})())){
return [cljs.core.str(G__37317__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37317__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37318){
var map__37325 = p__37318;
var map__37325__$1 = ((((!((map__37325 == null)))?((((map__37325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37325):map__37325);
var ed = map__37325__$1;
var formatted_exception = cljs.core.get.call(null,map__37325__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37325__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37325__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37327_37331 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37328_37332 = null;
var count__37329_37333 = (0);
var i__37330_37334 = (0);
while(true){
if((i__37330_37334 < count__37329_37333)){
var msg_37335 = cljs.core._nth.call(null,chunk__37328_37332,i__37330_37334);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37335);

var G__37336 = seq__37327_37331;
var G__37337 = chunk__37328_37332;
var G__37338 = count__37329_37333;
var G__37339 = (i__37330_37334 + (1));
seq__37327_37331 = G__37336;
chunk__37328_37332 = G__37337;
count__37329_37333 = G__37338;
i__37330_37334 = G__37339;
continue;
} else {
var temp__4657__auto___37340 = cljs.core.seq.call(null,seq__37327_37331);
if(temp__4657__auto___37340){
var seq__37327_37341__$1 = temp__4657__auto___37340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37327_37341__$1)){
var c__27615__auto___37342 = cljs.core.chunk_first.call(null,seq__37327_37341__$1);
var G__37343 = cljs.core.chunk_rest.call(null,seq__37327_37341__$1);
var G__37344 = c__27615__auto___37342;
var G__37345 = cljs.core.count.call(null,c__27615__auto___37342);
var G__37346 = (0);
seq__37327_37331 = G__37343;
chunk__37328_37332 = G__37344;
count__37329_37333 = G__37345;
i__37330_37334 = G__37346;
continue;
} else {
var msg_37347 = cljs.core.first.call(null,seq__37327_37341__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37347);

var G__37348 = cljs.core.next.call(null,seq__37327_37341__$1);
var G__37349 = null;
var G__37350 = (0);
var G__37351 = (0);
seq__37327_37331 = G__37348;
chunk__37328_37332 = G__37349;
count__37329_37333 = G__37350;
i__37330_37334 = G__37351;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37352){
var map__37355 = p__37352;
var map__37355__$1 = ((((!((map__37355 == null)))?((((map__37355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37355):map__37355);
var w = map__37355__$1;
var message = cljs.core.get.call(null,map__37355__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\out\\figwheel\\client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\out\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__26792__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__26792__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__26792__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37367 = cljs.core.seq.call(null,plugins);
var chunk__37368 = null;
var count__37369 = (0);
var i__37370 = (0);
while(true){
if((i__37370 < count__37369)){
var vec__37371 = cljs.core._nth.call(null,chunk__37368,i__37370);
var k = cljs.core.nth.call(null,vec__37371,(0),null);
var plugin = cljs.core.nth.call(null,vec__37371,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37377 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37367,chunk__37368,count__37369,i__37370,pl_37377,vec__37371,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37377.call(null,msg_hist);
});})(seq__37367,chunk__37368,count__37369,i__37370,pl_37377,vec__37371,k,plugin))
);
} else {
}

var G__37378 = seq__37367;
var G__37379 = chunk__37368;
var G__37380 = count__37369;
var G__37381 = (i__37370 + (1));
seq__37367 = G__37378;
chunk__37368 = G__37379;
count__37369 = G__37380;
i__37370 = G__37381;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37367);
if(temp__4657__auto__){
var seq__37367__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37367__$1)){
var c__27615__auto__ = cljs.core.chunk_first.call(null,seq__37367__$1);
var G__37382 = cljs.core.chunk_rest.call(null,seq__37367__$1);
var G__37383 = c__27615__auto__;
var G__37384 = cljs.core.count.call(null,c__27615__auto__);
var G__37385 = (0);
seq__37367 = G__37382;
chunk__37368 = G__37383;
count__37369 = G__37384;
i__37370 = G__37385;
continue;
} else {
var vec__37374 = cljs.core.first.call(null,seq__37367__$1);
var k = cljs.core.nth.call(null,vec__37374,(0),null);
var plugin = cljs.core.nth.call(null,vec__37374,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37386 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37367,chunk__37368,count__37369,i__37370,pl_37386,vec__37374,k,plugin,seq__37367__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37386.call(null,msg_hist);
});})(seq__37367,chunk__37368,count__37369,i__37370,pl_37386,vec__37374,k,plugin,seq__37367__$1,temp__4657__auto__))
);
} else {
}

var G__37387 = cljs.core.next.call(null,seq__37367__$1);
var G__37388 = null;
var G__37389 = (0);
var G__37390 = (0);
seq__37367 = G__37387;
chunk__37368 = G__37388;
count__37369 = G__37389;
i__37370 = G__37390;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37391 = [];
var len__27879__auto___37398 = arguments.length;
var i__27880__auto___37399 = (0);
while(true){
if((i__27880__auto___37399 < len__27879__auto___37398)){
args37391.push((arguments[i__27880__auto___37399]));

var G__37400 = (i__27880__auto___37399 + (1));
i__27880__auto___37399 = G__37400;
continue;
} else {
}
break;
}

var G__37393 = args37391.length;
switch (G__37393) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37391.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37394_37402 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37395_37403 = null;
var count__37396_37404 = (0);
var i__37397_37405 = (0);
while(true){
if((i__37397_37405 < count__37396_37404)){
var msg_37406 = cljs.core._nth.call(null,chunk__37395_37403,i__37397_37405);
figwheel.client.socket.handle_incoming_message.call(null,msg_37406);

var G__37407 = seq__37394_37402;
var G__37408 = chunk__37395_37403;
var G__37409 = count__37396_37404;
var G__37410 = (i__37397_37405 + (1));
seq__37394_37402 = G__37407;
chunk__37395_37403 = G__37408;
count__37396_37404 = G__37409;
i__37397_37405 = G__37410;
continue;
} else {
var temp__4657__auto___37411 = cljs.core.seq.call(null,seq__37394_37402);
if(temp__4657__auto___37411){
var seq__37394_37412__$1 = temp__4657__auto___37411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37394_37412__$1)){
var c__27615__auto___37413 = cljs.core.chunk_first.call(null,seq__37394_37412__$1);
var G__37414 = cljs.core.chunk_rest.call(null,seq__37394_37412__$1);
var G__37415 = c__27615__auto___37413;
var G__37416 = cljs.core.count.call(null,c__27615__auto___37413);
var G__37417 = (0);
seq__37394_37402 = G__37414;
chunk__37395_37403 = G__37415;
count__37396_37404 = G__37416;
i__37397_37405 = G__37417;
continue;
} else {
var msg_37418 = cljs.core.first.call(null,seq__37394_37412__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37418);

var G__37419 = cljs.core.next.call(null,seq__37394_37412__$1);
var G__37420 = null;
var G__37421 = (0);
var G__37422 = (0);
seq__37394_37402 = G__37419;
chunk__37395_37403 = G__37420;
count__37396_37404 = G__37421;
i__37397_37405 = G__37422;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27886__auto__ = [];
var len__27879__auto___37427 = arguments.length;
var i__27880__auto___37428 = (0);
while(true){
if((i__27880__auto___37428 < len__27879__auto___37427)){
args__27886__auto__.push((arguments[i__27880__auto___37428]));

var G__37429 = (i__27880__auto___37428 + (1));
i__27880__auto___37428 = G__37429;
continue;
} else {
}
break;
}

var argseq__27887__auto__ = ((((0) < args__27886__auto__.length))?(new cljs.core.IndexedSeq(args__27886__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27887__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37424){
var map__37425 = p__37424;
var map__37425__$1 = ((((!((map__37425 == null)))?((((map__37425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37425):map__37425);
var opts = map__37425__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37423){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37423));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37431){if((e37431 instanceof Error)){
var e = e37431;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37431;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37435){
var map__37436 = p__37435;
var map__37436__$1 = ((((!((map__37436 == null)))?((((map__37436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37436):map__37436);
var msg_name = cljs.core.get.call(null,map__37436__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1511752914053