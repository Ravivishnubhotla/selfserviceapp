selfserviceapp.controller('LoginController',
    function LoginController($scope) {
        $scope.UserAuthentication = {
            EmailAddress: "",
            Password: ""
        }

        $scope.LoginEvent = function(UserAuthentication,LoginForm){
            if(LoginForm.$valid)
            {
                window.alert("Logged in Successfully");
            }
        }
    }
);