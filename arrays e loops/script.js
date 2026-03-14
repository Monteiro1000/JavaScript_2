

// console.log(videoGames.pop()); 
// videoGames.push('3DS');

// var ultimoItem = videoGames.pop();

// //loop

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// //while

// var numero = 0;

// while (numero < 10) {
//     console.log(numero);
//     numero++;
// }

//arrays e loops

var videoGames = ['Switch', 'PS4', 'XBox'];

// for(var item = 0; item < videoGames.length; item++) {
//     console.log(videoGames[item]);
//     //break
//     if(videoGames[item] === 'PS4')
//     break;
// }

//forEach

videoGames.forEach(function(item, index, array) {
    console.log(item, index, array);
}

)

