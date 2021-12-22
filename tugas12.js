function panggilBuah() {
    var stock1 = ['Pisang', 'Jeruk', 'Apel', 'Mangga'];
    console.log(stock1);
    stock1.pop();
    console.log(stock1);
    stock1.shift();
    return stock1
}
console.log(panggilBuah())