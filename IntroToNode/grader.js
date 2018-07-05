function average(scores){
    //add all scores together
    var total = 0;
    scores.forEach(function(score){
        
        total+=score;
    });
    //divide by total number of scores
    var avg = total/scores.length;
    //round
     return Math.round(avg);
}

var scores =[12,32,2,5,6,7];
console.log(average(scores));