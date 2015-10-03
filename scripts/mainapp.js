var mainApp = angular.module("mainApp", []);
mainApp.controller("MainCtrl", function($scope) {
    $scope.activeAssassin;
    $scope.assassins = [
        {name: "Joe Biden", src:"../img/portraits/biden.jpg", target:""},
        {name: "Jeb Bush", src:"../img/portraits/jeb.jpg", target:""},
        {name: "Ben Carson", src:"../img/portraits/carson.jpg", target:""},
        {name: "Chris Christie", src:"../img/portraits/christie.jpg", target:""},
        {name: "Hillary Clinton", src:"../img/portraits/hillary.jpg", target:""},
        {name: "Ted Cruz", src:"../img/portraits/cruz.jpg", target:""},
        {name: "Carly Fiorina", src:"../img/portraits/fiorina.jpg", target:""},
        {name: "Mike Huckabee", src:"../img/portraits/huckabee.jpg", target:""},
        {name: "John Kasich", src:"../img/portraits/kasich.JPG"},
        {name: "Martin O'Malley", src:"../img/portraits/omalley.jpg", target:""},
        {name: "Rand Paul", src:"../img/portraits/paul.jpg", target:""},
        {name: "Marco Rubio", src:"../img/portraits/rubio.jpg", target:""},
        {name: "Bernie Sanders", src:"../img/portraits/bernie.jpg", target:""},
        {name: "Rick Santorum", src:"../img/portraits/santorum.jpg", target:""},
        {name: "Donald Trump", src:"../img/portraits/trump.jpg", target:""},
        {name: "Scott Walker", src:"../img/portraits/walker.jpg", target:""}
    ];

    $scope.startGame = function() {
        $scope.assignTargets();
        $scope.setActive();
    }

    // Randomly assigns targets to each of the assassins
    $scope.assignTargets = function() {
        var init = [];
        for (var i = 0; i < $scope.assassins.length; i++) {
            init.push($scope.assassins[i]);
        }
        for (var i = 0; i < init.length-1; i++) {
            var switchWith = Math.floor(Math.random() * (init.length - (i+1)) + (i+1));
            var temp = init[switchWith];
            init[switchWith] = init[i];
            init[i] = temp;
        }
        for (var i = 0; i < init.length; i++) {
            $scope.assassins[i].target = init[i];
            console.log($scope.assassins[i].name + " -> " + init[i].name);
        }
    };

    $scope.setActive = function() {
        var random = Math.floor(Math.random() * $scope.assassins.length);
        $scope.activeAssassin = $scope.assassins[random];
        console.log("ACTIVE: " + $scope.activeAssassin.name);
    }
});
