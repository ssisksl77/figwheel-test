(ns figwheel-project.core
  (:require
   [dommy.core :as dommy :refer-macros [sel sel1]]
   [reagent.core :as reagent]))

(defn set-borders!
  []
  (let [all-ps (sel [:#a-div :p])] ;;
    (->> all-ps
         (map #(dommy/remove-class! % :changeme))
         (map #(dommy/add-class! % :border))
         (map #(dommy/set-text! % "I now have a border!")))))

(defn add-btn!
  []
  (let [the-div (sel1 :#a-div)
        a-btn (dommy/create-element "button")]
    (dommy/set-text! a-btn "Click ME!")
    (dommy/listen! a-btn :click
                   (fn [e] (js/alert "You clicked me!")))
    (-> the-div
        (dommy/append! a-btn))))

;; ======================= Reagent tutorial
;; https://github.com/reagent-project/reagent-cookbook/tree/master/basics/basic-component

;; Form-3 Component
(defn foo []
  (reagent/create-class {:reagent-render (fn [] [:div "Hello, world!"])}))

;; Form-1 Component
(defn bar []
  [:div "Hello, world!"])

;; Form-2 Component
(defn baz []
  (fn []
    [:div "Hello, world!"]))

(defn home []
  [:div
   [foo]
   [bar]
   [baz]
   ])

(defn ^:export main []
  (reagent/render [home]
                  (.getElementById js/document "app")))


(defn ^:export my-alert []
  (js/alert "my-alert!!!!"))
