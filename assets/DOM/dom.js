let manu= document.getElementById('manolo');
console.log(manu);

box2= document.getElementsByClassName('card');
console.log(box2);

let series={
    series_1:{name:'Serie 1', description:'Descripcion 1'},
    series_2:{name:'Serie 2', description:'Descripcion 2'}
}
//
let all_cards= document.querySelectorAll('.card');

for (let i = 0; i < all_cards; i++) {
    let card = all_cards[i];
    console.log(card.querySelector('.card-title'))
    
    let card_title=card.querySelector('.card-title')
    let card_text=card.querySelector('.card-text')

    if(series['serie_'+i]){
        //no c
    }
}