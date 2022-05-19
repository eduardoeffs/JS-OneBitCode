const descendingOrder = num => 
    parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
  
  
  
  function reverseNum(num) {
      return (
      parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num)
    )
  }
  
  console.log(descendingOrder(-543.21))
  
  console.log(descendingOrder(23000000))
  
  console.log(descendingOrder(543.21))