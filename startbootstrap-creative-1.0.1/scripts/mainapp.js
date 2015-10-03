var mainApp = angular.module("mainApp", []);
mainApp.controller("MainCtrl", function($scope) {
    $scope.activeAssassin;
    $scope.assassins = [
        {name: "Joe Biden", src:"../images/portraits/biden.jpg", target:""},
        {name: "Jeb Bush", src:"../images/portraits/jeb.jpg", target:""},
        {name: "Ben Carson", src:"../images/portraits/carson.jpg", target:""},
        {name: "Chris Christie", src:"../images/portraits/christie.jpg", target:""},
        {name: "Hillary Clinton", src:"../images/portraits/hillary.jpg", target:""},
        {name: "Ted Cruz", src:"../images/portraits/cruz.jpg", target:""},
        {name: "Carly Fiorina", src:"../images/portraits/fiorina.jpg", target:""},
        {name: "Mike Huckabee", src:"../images/portraits/huckabee.jpg", target:""},
        {name: "John Kasich", src:"../images/portraits/kasich.JPG"},
        {name: "Martin O'Malley", src:"../images/portraits/omalley.jpg", target:""},
        {name: "Rand Paul", src:"../images/portraits/paul.jpg", target:""},
        {name: "Marco Rubio", src:"../images/portraits/rubio.jpg", target:""},
        {name: "Bernie Sanders", src:"../images/portraits/bernie.jpg", target:""},
        {name: "Rick Santorum", src:"../images/portraits/santorum.jpg", target:""},
        {name: "Donald Trump", src:"../images/portraits/trump.jpg", target:""},
        {name: "Scott Walker", src:"../images/portraits/walker.jpg", target:""}
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
