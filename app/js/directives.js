/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

angular.module('myApp.directives',[]).
        directive('appVersion',['version',function(version){
           return function(scope,elm,attrs){
                elm.text(version);
        };
    }]);

