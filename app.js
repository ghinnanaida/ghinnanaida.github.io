var item = Array.from(document.querySelectorAll('.item'));
const next = document.querySelector('.fa-angle-right');
const prev = document.querySelector('.fa-angle-left');
let index = 0;

prev.addEventListener('click',function(){
    prevItem()
})

next.addEventListener('click',function(){
    nextItem()
})


function nextItem(){
    if(index==item.length-1){
        index=0;
    }else {
        index++;
    }
    changeItem()
}

function prevItem(){
    if(index==0){
        index=item.length-1;
    }else {
        index--;
    }
    changeItem()
}
function changeItem(){
    for (var i=0;i < item.length;i++){
        item[i].style.display='none';

    }
    console.log(item[index]);
    item[index].style.display='flex';

}

