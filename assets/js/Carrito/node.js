let allContainer = document.querySelector('.box-container');
loadEvenListtenrs();
function loadEvenListtenrs(){
  allContainer.addEventListener('click', addProduct);
}

function addProduct(e){
    console.log(e.target);
}
