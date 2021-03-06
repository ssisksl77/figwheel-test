(defproject figwheel-project "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]
                 [prismatic/dommy "1.1.0"]
                 [reagent "0.8.0-alpha2"]]
  :plugins [[lein-figwheel "0.5.14"]]
  :clean-targets [:target-path "out"]
  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :figwheel true
              :compiler {:main "figwheel-project.core"
                         :asset-path "js/out"
                         :output-to "resources/public/main.js"
                         :output-dir "resources/public/js/out"
                         }}]})
