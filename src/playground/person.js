export const isAdult = (x) => {
    if(x > 18){
        return 'is an adult';
    }else{
        return 'grow up kid';
    }
};

const canDrink = (x) => {
    if(x < 21){
        return 'yeah dude';
    }else{
        return 'grow up you are too old for that $%@t';
    }
};

export default canDrink;