function inputValue(value){
    document.getElementById('display').value += value
    return value
}

function clean() {
    SyntaxError = false
    display.value = "";

}

function result(){
    let x = document.getElementById('display').value
    let y = eval(x);
    document.getElementById('display').value = y
    return y
}