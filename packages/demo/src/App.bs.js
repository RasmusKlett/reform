// Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Apollo = require("./Apollo.bs.js");
var PostAddNext = require("./PostAddNext.bs.js");
var ReactApolloHooks = require("react-apollo-hooks");

function App(Props) {
  var message = Props.message;
  return React.createElement(ReactApolloHooks.ApolloProvider, {
              client: Apollo.client,
              children: React.createElement("div", {
                    className: "App"
                  }, React.createElement("div", {
                        className: "App-header"
                      }, React.createElement("img", {
                            className: "App-logo",
                            alt: "logo",
                            src: "https://astrocoders.com/panel.png"
                          }), React.createElement("h2", undefined, message)), React.createElement("p", {
                        className: "App-intro"
                      }, "Say hello to ReForm"), React.createElement("h1", undefined, "ReFormNext demo"), React.createElement(PostAddNext.make, { }))
            });
}

var make = App;

exports.make = make;
/* react Not a pure module */
