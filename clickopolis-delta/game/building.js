"use strict";
var Building = (function () {
    function Building() {
    }
    Building.prototype.Building = function (name, prodCost, cashCost, description, effect) {
        this.name = name;
        this.prodCost = prodCost;
        this.cashCost = cashCost;
        this.description = description;
        this.effect = effect;
    };
    return Building;
}());
module.exports = Building;
//# sourceMappingURL=building.js.map