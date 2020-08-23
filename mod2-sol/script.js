(function(){
    'use strict';

    angular.module('Shopping',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('updatelist',updatelist);
    ToBuyController.$inject = ['updatelist'];
    function ToBuyController (updatelist) {
        var TBC = this ;
        TBC.items = updatelist.getitems();
        TBC.boughtitems = function (index) {
            updatelist.Boughtadd(TBC.items[index]);

            updatelist.Boughtcut(index);
        }
    
    }
    AlreadyBoughtController.$inject = ['updatelist'];
    function AlreadyBoughtController (updatelist) {
        var ABT = this;
        ABT.boughtlist = updatelist.getboughtitems();
    }
    function updatelist () {
        var uplist= this;
        var items = [{
            name : 'Cookies',
            quantity: 10
        },
        {
            name : 'drinks',
            quantity: 3
        },
        {
            name : 'oreo',
            quantity: 5
        }, 
        {
            name : 'icecream',
            quantity: 2
        }
    ];
    var boughtlist = [];
        uplist.getitems = function () {
            return items;
        }
        uplist.Boughtadd = function (item) {
            boughtlist.push(item);
        }
        uplist.Boughtcut = function (index) {
            items.splice(index,1);
        }
        uplist.getboughtitems = function () {
            return boughtlist;
        }
    }
})();