function f(n) {
    var day;
        if(typeof n === 'number') {
            if(n >= 1 && n <= 7) {
    
    switch(n) {
        case 1:
        day = 'Воскресенье'
        break;
    
        case 2:
        day = 'Понедельник'
        break;
    
        case 3:
        day = 'Вторник'
        break;
    
        case 4:
        day = 'Среда'
        break;
    
    
        case 5:
        day = 'Четверг'
        break;
    
    
        case 6:
        day = 'Пятница'
        break;
    
    
        case 7:
        day = 'Суббота'
        break;
    
    }
    } else {
        throw new Error ('parameter should be in the range of 1 to 7');
    }
    } else {
        throw new Error ('parameter type is not a Number');
    }
    return day;
    }
    f(1);