

const showMessageInfo = (msg) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "info",
    title: msg
  });
};

const showCountProductCart = (products, hidden = false) => {
  sessionStorage.setItem('cart-count', products.map(product => product.quantity).reduce((a,b) => a + b, 0))
      $('show-count').innerHTML = sessionStorage.getItem('cart-count')
      $('show-count').hidden = hidden
}

const showProductInCart = (products, total) => {
  if($("cart-table")){
    $("cart-table").innerHTML = null;
    products.forEach(({ id, image, model, price, quantity, }) => {
      $("cart-table").innerHTML += `
    <tr>
        <th scope="row" class="carrito__items__contain__list__img"><img src="/images/products/${image || 'image-default.webp'}" alt="" width=100/></th>
        <td>${model}</td>
        <td>${price * quantity}</td>
        <td>
            <div class="d-flex gap-2">
                <button class="btn btn-sm btn-danger ${quantity === 1 && 'disabled'}" onclick="removeItemToCart(${id})"><i class="fa-solid fa-minus"></i></button>
                <input type="text" value=" ${quantity}" style="width:30px"/>
                <button class="btn btn-sm btn-success" onclick="addItemToCart(1,${id})"><i class="fa-solid fa-plus"></i></button>
            </div>
        </td>
        <td class="cart--container--trash">
        <h3 class="cart--iconContainer--trash" style="cursor:pointer" onclick="deleteItemToCart(${id})" class="text-danger"><img class="cart--icon--trash" src="/images/delete-icon-removebg-preview.png" alt=""></i></h3>
        </td>
    </tr>
    `;
    });
    $('show-total').innerHTML = total;
  }
 
};

const addItemToCart = async (quantity, product) => {
  try {
    const response = await fetch(`/api/cart`, {
      method: "POST",
      body: JSON.stringify({
        quantity,
        product : +product,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const {ok, data,msg} = await response.json();
    if (!ok) {
      throw new Error(msg);
    } else {
      const {products, total} = data
      showCountProductCart(products)
      showProductInCart(products, total);
      showMessageInfo(msg)
    }
  } catch (error) {
    Swal.fire({
      title: "Upss",
      text: error.message,
      icon: "error",
    });
  }
};


const removeItemToCart = async (id) => {
  try {

    const response = await fetch(`/api/cart?product=${id}`, {
      method : 'DELETE'
    });

    const {ok, data : {products, total},msg} = await response.json();

    if (!ok) {
      throw new Error(msg);
    } else {
      showCountProductCart(products)
      showProductInCart(products, total)
      showMessageInfo(msg)
    }
    
  } catch (error) {
    Swal.fire({
      title: "Upss",
      text: error.message,
      icon: "error",
    });
  }
};

const deleteItemToCart = async (id) => {
  try {

    const response = await fetch(`/api/cart/item?product=${id}`, {
      method : 'DELETE'
    });
    
    const {ok, data : {products, total},msg} = await response.json();

    if (!ok) {
      throw new Error(msg);
    } else {
      if(products.length){
        sessionStorage.setItem('cart-count', products.length)
        $('show-count').innerHTML = sessionStorage.getItem('cart-count')
        showProductInCart(products,total)
        showMessageInfo(msg)
      }else {
        showCountProductCart(products)
        $("cart-body").innerHTML =
        '<div class="carrito__items__contain__list__text" role="alert">El carrito está vacío!</div>';
      $("btn-clearCart").classList.add('disabled')
      }
    }
    
  } catch (error) {
    Swal.fire({
      title: "Upss",
      text: error.message,
      icon: "error",
    });
  }
};


const clearCart = async () => {
  try {

    const response = await fetch(`/api/cart/all`,{
      method : 'DELETE'
    });
    
    const {ok, data : {products, total},msg} = await response.json();

    if (!ok) {
      throw new Error(msg);
    } else {
      $("cart-body").innerHTML =
      '<div class="carrito__items__contain__list__text" role="alert">El carrito está vacío!</div>';
      showCountProductCart(products, true)

    $("btn-clearCart").classList.add('disabled')
    showMessageInfo(msg)
    }
    
  } catch (error) {
    Swal.fire({
      title: "Upss",
      text: error.message,
      icon: "error",
    });
  }
}



window.onload = function () {

  if(!sessionStorage.getItem('cart-count')) {
    sessionStorage.setItem('cart-count',0)
  } 

  if($('show-count')){
    $('show-count').innerHTML = sessionStorage.getItem('cart-count')
    $('show-count').hidden =  sessionStorage.getItem('cart-count') > 0 ? false : true; 
  } 
  


  $("btn-cart") &&
    $("btn-cart").addEventListener("click", async function (e) {
      try {
        const response = await fetch("/api/cart");
        const { ok, data: {products, total} } = await response.json();

        if (ok) {
          if (products.length) {
            $("cart-body").innerHTML = `
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Product</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody id="cart-table">
                  
                </tbody>
                <caption class="carrito__total__price__container">
                    <div class="d-flex justify-content-end carrito__total__price__box">
                        <h5 class="carrito__total__price__text">Total: $<span id="show-total" class="carrito__total__price__span">${total}</span></h5> 
                    </div>
                 </caption>
            </table>`;
            showProductInCart(products, total)
            $("btn-clearCart").classList.remove('disabled')
          } else {
            $("cart-body").innerHTML =
              '<div class="carrito__items__contain__list__text" role="alert">El carrito está vacío!</div>';
            $("btn-clearCart").classList.add('disabled')
          }
        }
      } catch (error) {
        console.error;
        alert(error.message);
      }
    });
};
