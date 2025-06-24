const product = {
  name: 'crisps',
  quantity: 5,
  price: 40
};


const getTotal = ( product ) => {
  return product.quantity * product.price;
}

// delay the code for 2secs
// setTimeout()  is a non-blocking function (does not block the execution of a program)
setTimeout( () => {
  const total = getTotal( product );
  console.log( total )
}, 2000);

// run without and see the difference
delete product.quantity