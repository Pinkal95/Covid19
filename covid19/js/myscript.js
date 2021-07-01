//const URL1="https://api.covidactnow.org/v2/states.json?apiKey=af4949b7a657457f94f81fe5ca591aaa";
const URL="https://covid19.mathdro.id/api";
let app = angular.module("MyApp",[]);
app.controller('MyCtrl',($scope,$http) => {

    $scope.title="Stay Home Stay Home";

    $http.get(URL).then(
        (response)=>{
            console.log(response.data);
            $scope.all_data=response.data;

        },
        (error)=>{
            console.log(error);

        } );

        //get country data 

        $scope.get_c_data=()=>{
         let country=$scope.c;
         console.log($scope.c);
         if(country=="")
         {
             $scope.c_data=undefined;
             return;
         }
         $http.get('${URL}/countries/${country}').then(
             (response)=>{
                console.log(response.data);
                $scope.c_data=response.data;
             },(error)=>{
                console.log(error);
             }
         );
        };

});