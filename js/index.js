function onLoad(){
    let board = document.querySelector('.board-grid')
    console.log(board)
    for(let i = 0; i< 16; i++){
        let item = document.createElement('div')
        item.className='board-item'
        item.id='board-item-' + i
        console.log(item)
        board.appendChild(item)
    }
}