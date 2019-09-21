var hotel = {
    name:'perspolis',
    room:'20',
    manager:'Rnanizad',
    phone:'021-77556644',
    star:3
    };
    
    var answer1 =prompt('type the property between (name, room, manager, phone, star) to see value ... ');
    
    
    
    
    var answer2 = prompt('the'+ ' ' +answer1+ ' is : ' + hotel[answer1]+ ' ( '+ 'do you want to update ? yes or no' + ' )');
    
    (answer2 == 'yes') ? hotel[answer1] =prompt('enter new value') : false;
    
    console.log(hotel);
    
    
    
    