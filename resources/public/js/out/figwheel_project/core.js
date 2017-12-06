// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel_project.core');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('reagent.core');
figwheel_project.core.set_borders_BANG_ = (function figwheel_project$core$set_borders_BANG_(){
var all_ps = dommy.utils.__GT_Array.call(null,document.querySelectorAll("#a-div p"));
return cljs.core.map.call(null,((function (all_ps){
return (function (p1__29543_SHARP_){
return dommy.core.set_text_BANG_.call(null,p1__29543_SHARP_,"I now have a border!");
});})(all_ps))
,cljs.core.map.call(null,((function (all_ps){
return (function (p1__29542_SHARP_){
return dommy.core.add_class_BANG_.call(null,p1__29542_SHARP_,new cljs.core.Keyword(null,"border","border",1444987323));
});})(all_ps))
,cljs.core.map.call(null,((function (all_ps){
return (function (p1__29541_SHARP_){
return dommy.core.remove_class_BANG_.call(null,p1__29541_SHARP_,new cljs.core.Keyword(null,"changeme","changeme",-1396311697));
});})(all_ps))
,all_ps)));
});
figwheel_project.core.add_btn_BANG_ = (function figwheel_project$core$add_btn_BANG_(){
var the_div = document.getElementById("a-div");
var a_btn = dommy.core.create_element.call(null,"button");
dommy.core.set_text_BANG_.call(null,a_btn,"Click ME!");

dommy.core.listen_BANG_.call(null,a_btn,new cljs.core.Keyword(null,"click","click",1912301393),((function (the_div,a_btn){
return (function (e){
return alert("You clicked me!");
});})(the_div,a_btn))
);

return dommy.core.append_BANG_.call(null,the_div,a_btn);
});
figwheel_project.core.foo = (function figwheel_project$core$foo(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Hello, world!"], null);
})], null));
});
figwheel_project.core.bar = (function figwheel_project$core$bar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Hello, world!"], null);
});
figwheel_project.core.baz = (function figwheel_project$core$baz(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Hello, world!"], null);
});
});
figwheel_project.core.home = (function figwheel_project$core$home(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [figwheel_project.core.foo], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [figwheel_project.core.bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [figwheel_project.core.baz], null)], null);
});
figwheel_project.core.main = (function figwheel_project$core$main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [figwheel_project.core.home], null),document.getElementById("app"));
});
goog.exportSymbol('figwheel_project.core.main', figwheel_project.core.main);
figwheel_project.core.my_alert = (function figwheel_project$core$my_alert(){
return alert("my-alert!!!!");
});
goog.exportSymbol('figwheel_project.core.my_alert', figwheel_project.core.my_alert);

//# sourceMappingURL=core.js.map?rel=1511945996277