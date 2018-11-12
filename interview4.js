var arr1= [['One', 'array', 'is', 'completed'],['Now', 'there', 'are', 'two'],['howdy', 'pete']]

function arrayOfArrays(x){
    for(var i =0; i<x.length; i++){

        for(var j = 0; j<x[i].length; j++){
            console.log(x[i][j]);
        }
    }


}

arrayOfArrays(arr1);