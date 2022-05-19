class Product {
    constructor(name, price) {
      this.name = name
      this.price = price
    }
}
  
  var banana = new Product("banana", 4)
  var uva = new Product("uva", 2)
  var ameixa = new Product("ameixa", 3)
  




  function sortByPriceAscending() {
    if(banana.price > uva.price && banana.price > ameixa.price && ameixa.price > uva.price) {
        console.log("name: " + uva.name  + " ; " + "preço: " +  uva.price  + "//" + "name: " + ameixa.name  + " ; " + "preço: " +  ameixa.price  + "//" + "name: " + banana.name  + " ; " + "preço: " +  banana.price)
    }
  }

  sortByPriceAscending()

