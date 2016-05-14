"use strict";
var Templates = (function () {
    function Templates() {
        this.startScreen = "\n    <section class='clickopolis-intro'>\n      <h1>Clickopolis</h1>\n      <div class=\"start-options\">\n        <button class=\"large-btn start-btn load-btn\">Load Game...</button>\n        <button class=\"large-btn start-btn new-btn\">New Game</button>\n        <button class=\"large-btn start-btn current-btn\">\n          <p class=\"current-game-heading\">Current Game -</p>\n          <p>\n            <span>\n              <img src=\"img/achievements.png\"> 5\n            </span>\n            <span>\n              <img src=\"img/strength.png\"> 33\n            </span>\n            <span>\n              <img src=\"img/defense.png\"> 44\n            </span>\n            <span>\n              <img src=\"img/legacy.png\"> 2\n            </span>\n            <span>\n              <img src=\"img/coin.png\"> 1K\n            </span>\n            <span>\n              <img src=\"img/wonder.png\"> 1\n            </span>\n          </p>\n        </button>\n      </div>\n      <!-- <button class='next-btn'>Next &rarr;</button> -->\n    </section>\n  ";
        this.settingsScreen = "\n    <section class='clickopolis-intro'>\n      <img class='clickopolis-logo custom-size-img' src='img/clickopolis-logo.png'>\n      <p>Starting from the flames of the ancient world, you will progress steadily towards modernity&hellip;and beyond. You, the leader of a small faction of hunter-gatherers, have decided to settle\n        <select id=\"location\">\n          <option value=\"none\">select an option!</option>\n          <option value=\"coast\">by the Coast</option>\n          <option value=\"oasis\">in an Oasis</option>\n          <option value=\"forest\">in a Forest</option>\n          <option value=\"tundra\">in a Tundra</option>\n          <option value=\"iceberg\">on an Iceberg</option>\n        </select>\n      </p>\n      <p>Your name is <input type=\"text\" id=\"leaderName\" maxlength=\"10\" size=\"10\" placeholder=\"Jake\"> of <input type=\"text\" id=\"civName\" placeholder=\"Jaketopia\" maxlength=\"20\"></p>\n      <p>You are a(n)\n        <select id=\"trait\">\n          <option value=\"aggressive\">aggressive</option>\n          <option value=\"cosmpolitan\">cosmpolitan</option>\n          <option value=\"daring\">daring</option>\n          <option value=\"expansionist\">expansionist</option>\n          <option value=\"industrious\">industrious</option>\n          <option value=\"isolationist\">isolationist</option>\n          <option value=\"pacifistic\">pacifistic</option>\n          <option value=\"persuasive\">persuasive</option>\n        </select>\n       leader.</p>\n\n       <button class='begin-btn'>Begin Game!</button>\n\n    </section>\n  ";
    }
    Templates.prototype.createStartScreen = function (playerCiv) {
        var startScreen = "\n      <section class='clickopolis-intro'>\n        <h1><img class='clickopolis-logo custom-size-img' alt='Clickopolis' src='img/clickopolis-logo.png'></h1>\n        <div class=\"start-options\">\n          <button class=\"large-btn start-btn load-btn\">Load Game...</button>\n          <button class=\"large-btn start-btn new-btn\">New Game</button>\n          <button class=\"large-btn start-btn current-btn\">\n            <p class=\"current-game-heading\">Current Game: " + playerCiv.leaderName + " of " + playerCiv.civName + "</p>\n            <p>\n              <span>\n                <img src=\"img/achievements.png\"> 5\n              </span>\n              <span>\n                <img src=\"img/strength.png\"> 33\n              </span>\n              <span>\n                <img src=\"img/defense.png\"> 44\n              </span>\n              <span>\n                <img src=\"img/legacy.png\"> 2\n              </span>\n              <span>\n                <img src=\"img/coin.png\"> 1K\n              </span>\n              <span>\n                <img src=\"img/wonder.png\"> 1\n              </span>\n            </p>\n          </button>\n        </div>\n        <!-- <button class='next-btn'>Next &rarr;</button> -->\n      </section>\n    ";
        return startScreen;
    };
    ;
    Templates.prototype.createResourcesScreen = function (playerCiv, resources) {
        var resourcesScreen = "\n      <section class='screen resources-screen'>\n        <h2><img src='img/resources.png'> Resources</h2>\n        <section class='resources-screen-inner'>\n          <div class='panel food-panel'>\n            <button class='food-btn'><img src='img/food-alt.png'> Grow Food</button>\n            <span class='resource-info r-food-pc'>" + resources[0].perClick + " PC</span>\n            <span class='resource-info r-food-ps'>" + resources[0].perSecond + " PS</span>\n            <span class='resource-info r-food-max'>" + resources[0].max + " max</span>\n            <span class='resource-info r-food-total'>" + resources[0].total + " total</span>\n          </div>\n          <div class='panel prod-panel'>\n            <button class='prod-btn'><img src='img/prod.png'> Create Production</button>\n            <span class='resource-info'>" + resources[1].perClick + " PC</span>\n            <span class='resource-info'>" + resources[1].perSecond + " PS</span>\n            <span class='resource-info'>" + resources[1].max + " max</span>\n            <span class='resource-info'>" + resources[1].total + " total</span>\n          </div>\n\n          <div class='panel resources-panel'>\n            <span class='resource' data-resource='stone'>\n              <img src='img/stone.png'> <span>25</span>\n            </span>\n\n            <span class='resource' data-resource='fish'>\n              <img src='img/fish.png'> <span>33</span>\n            </span>\n\n            <span class='resource' data-resource='banana'>\n              <img src='img/banana.png'> <span>22</span>\n            </span>\n\n            <span class='resource' data-resource='gold'>\n              <img src='img/gold.png'> <span>0</span>\n            </span>\n\n            <span class='resource' data-resource='gems'>\n              <img src='img/gems.png'> <span>34</span>\n            </span>\n          </div>\n\n\n\n        </section>\n      </section>\n    ";
        return resourcesScreen;
    };
    Templates.prototype.createScreenHeader = function (playerCiv) {
        var screenHeader = "\n      <header class='screen-header'>\n        <h1>Clickopolis</h1>\n        <h2>" + playerCiv.leaderName + " of " + playerCiv.civName + "</h2>\n      </header>\n    ";
        return screenHeader;
    };
    Templates.prototype.createCitizenScreen = function (playerCiv) {
        var citizensScreen = "\n      <section class='screen citizens-screen'>\n        <h2><img src='img/citizens.png'> Citizens</h2>\n        <section class='citizens-screen-inner'>\n          <div class='row citizen-farmer'>\n            " + playerCiv.civName + "\n            " + playerCiv.leaderName + "\n            " + playerCiv.leaderTraits[0] + "\n          </div>\n        </section>\n      </section>\n    ";
        return citizensScreen;
    };
    Templates.prototype.createCivilizationScreen = function (player) {
        var civilizationScreen = "\n      <section class='screen civilization-screen'>\n        <h2><img src='img/empire.png'> Civilization</h2>\n        <section class='civilization-screen-inner'>\n          <div class='panel population-panel'>\n            <button class='pop-btn'>Grow Population (+1)</button>\n            <span>Growth Cost: <img src='img/food.png'> 10</span>\n            <span>Population: <img src='img/citizen.png'> 33</span>\n          </div>\n        </section>\n      </section>\n    ";
        return civilizationScreen;
    };
    return Templates;
}());
module.exports = Templates;
//# sourceMappingURL=template.js.map