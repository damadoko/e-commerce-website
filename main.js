// Global variables
const dataMockup = [
  {
    ID: 0,
    title: "[Adidas] Ultra Boosts 5.0",
    isDiscount: { status: true, percent: 50 },
    URL:
      "https://cdn.nhanh.vn/cdn/store/14522/psCT/20190213/11591016/8da9d008.jpg",
    price: { originalPrice: 4500000, dealtPrice: 2250000 },
    formatedPrice: {
      formatedOriginalPrice: "4,500,000.00",
      formatedDealtPrice: "2,225,000.00"
    },
    unit: 0,
    sizeArr: [36, 37, 38, 40],
    colorArr: ["All White", "All Black", "Silver Medal"],
    description:
      "The adidas Ultra Boost 5.0 aka the Ultra Boost 2019 is a brand new running shoe from adidas set to release in February. It is a complete redesign from the original Ultra Boost models, but features a similar package of Boost cushioning, Primeknit uppers, and a Continental rubber outsole"
  },
  {
    ID: 1,
    title: "[Adidas] Ultra Boosts 5.0",
    isDiscount: { status: true, percent: 50 },
    URL:
      "https://cdn.nhanh.vn/cdn/store/14522/psCT/20190213/11591016/8da9d008.jpg",
    price: { originalPrice: 4500000, dealtPrice: 2250000 },
    formatedPrice: {
      formatedOriginalPrice: "4,500,000.00",
      formatedDealtPrice: "2,225,000.00"
    },
    unit: 0,
    sizeArr: [36, 37, 38, 40],
    colorArr: ["All White", "All Black", "Silver Medal"],
    description:
      "The adidas Ultra Boost 5.0 aka the Ultra Boost 2019 is a brand new running shoe from adidas set to release in February. It is a complete redesign from the original Ultra Boost models, but features a similar package of Boost cushioning, Primeknit uppers, and a Continental rubber outsole"
  },
  {
    ID: 2,
    title: "[Adidas] Ultra Boosts 5.0",
    isDiscount: { status: true, percent: 50 },
    URL:
      "https://cdn.nhanh.vn/cdn/store/14522/psCT/20190213/11591016/8da9d008.jpg",
    price: { originalPrice: 4500000, dealtPrice: 2250000 },
    formatedPrice: {
      formatedOriginalPrice: "4,500,000.00",
      formatedDealtPrice: "2,225,000.00"
    },
    unit: 0,
    sizeArr: [36, 37, 38, 40],
    colorArr: ["All White", "All Black", "Silver Medal"],
    description:
      "The adidas Ultra Boost 5.0 aka the Ultra Boost 2019 is a brand new running shoe from adidas set to release in February. It is a complete redesign from the original Ultra Boost models, but features a similar package of Boost cushioning, Primeknit uppers, and a Continental rubber outsole"
  },
  {
    ID: 3,
    title: "[Adidas] Ultra Boosts 5.0",
    isDiscount: { status: true, percent: 50 },
    URL:
      "https://cdn.nhanh.vn/cdn/store/14522/psCT/20190213/11591016/8da9d008.jpg",
    price: { originalPrice: 4500000, dealtPrice: 2250000 },
    formatedPrice: {
      formatedOriginalPrice: "4,500,000.00",
      formatedDealtPrice: "2,225,000.00"
    },
    unit: 0,
    sizeArr: [36, 37, 38, 40],
    colorArr: ["All White", "All Black", "Silver Medal"],
    description:
      "The adidas Ultra Boost 5.0 aka the Ultra Boost 2019 is a brand new running shoe from adidas set to release in February. It is a complete redesign from the original Ultra Boost models, but features a similar package of Boost cushioning, Primeknit uppers, and a Continental rubber outsole"
  },
  {
    ID: 4,
    title: "[Adidas] Ultra Boosts 5.0",
    isDiscount: { status: true, percent: 50 },
    URL:
      "https://cdn.nhanh.vn/cdn/store/14522/psCT/20190213/11591016/8da9d008.jpg",
    price: { originalPrice: 4500000, dealtPrice: 2250000 },
    formatedPrice: {
      formatedOriginalPrice: "4,500,000.00",
      formatedDealtPrice: "2,225,000.00"
    },
    unit: 0,
    sizeArr: [36, 37, 38, 40],
    colorArr: ["All White", "All Black", "Silver Medal"],
    description:
      "The adidas Ultra Boost 5.0 aka the Ultra Boost 2019 is a brand new running shoe from adidas set to release in February. It is a complete redesign from the original Ultra Boost models, but features a similar package of Boost cushioning, Primeknit uppers, and a Continental rubber outsole"
  },
  {
    ID: 5,
    title: "[Adidas] Ultra Boosts 5.0",
    isDiscount: { status: true, percent: 50 },
    URL:
      "https://cdn.nhanh.vn/cdn/store/14522/psCT/20190213/11591016/8da9d008.jpg",
    price: { originalPrice: 4500000, dealtPrice: 2250000 },
    formatedPrice: {
      formatedOriginalPrice: "4,500,000.00",
      formatedDealtPrice: "2,225,000.00"
    },
    unit: 0,
    sizeArr: [36, 37, 38, 40],
    colorArr: ["All White", "All Black", "Silver Medal"],
    description:
      "The adidas Ultra Boost 5.0 aka the Ultra Boost 2019 is a brand new running shoe from adidas set to release in February. It is a complete redesign from the original Ultra Boost models, but features a similar package of Boost cushioning, Primeknit uppers, and a Continental rubber outsole"
  }
];

const model = (() => {
  let data = JSON.parse(localStorage.getItem("DATA_LOCAL")) || {
    itemInWeb: dataMockup,
    itemInCart: []
  };
  localStorage.setItem("DATA_LOCAL", JSON.stringify(data));
  console.log("data", data);

  const addNewItemToModel = item => {
    let newItem, newID, discountObj;
    // New ID = previous ID + 1
    data.itemInWeb.length > 0
      ? (newID = data.itemInWeb[data.itemInWeb.length - 1].ID + 1)
      : (newID = dataMockup.length);
    // Set discount status and percent
    item.discount > 0
      ? (discountObj = { status: true, percent: parseInt(item.discount) })
      : (discountObj = { status: false, percent: 0 });
    // Manipulation dealt price
    const dealtPrice = parseInt(item.price) * (1 - discountObj.percent / 100);
    // Create Item data mockup
    newItem = {
      ID: newID,
      title: item.title,
      isDiscount: discountObj,
      URL: item.encodedURL,
      price: { originalPrice: parseInt(item.price), dealtPrice: dealtPrice },
      formatedPrice: {
        formatedOriginalPrice: formartNumber(parseInt(item.price)),
        formatedDealtPrice: formartNumber(dealtPrice)
      },
      unit: parseInt(item.unit),
      sizeArr: item.sizeArr,
      colorArr: item.colorArr,
      description: item.description
    };
    // Store item in model and localstorage
    data.itemInWeb.push(newItem);
    localStorage.setItem("DATA_LOCAL", JSON.stringify(data));

    return newItem;
  };

  const addNewCartItemToModel = itemInfo => {
    let newCartItem, newID, index;
    // Get local stored info
    data.itemInCart.length > 0
      ? (newID = data.itemInCart[data.itemInCart.length - 1].ID + 1)
      : (newID = 0);

    newCartItem = {
      ID: newID,
      title: itemInfo.title,
      URL: itemInfo.URL,
      formatedDealtPrice: itemInfo.formatedDealtPrice,
      size: itemInfo.size,
      color: itemInfo.color,
      unit: itemInfo.unit,
      quantity: 1,
      webItemID: parseInt(itemInfo.webItemID)
    };
    // Get current webItemID and Compare addItemID with all webItemID
    const compareIDArr = data.itemInCart.map(
      item =>
        item.webItemID === newCartItem.webItemID &&
        item.size === newCartItem.size &&
        item.color === newCartItem.color
    );

    const compareID = compareIDArr.find(res => res === true);
    // find duplicate item index
    index = compareIDArr.indexOf(true); // -1 if no duplicate
    // Insert HTML if item not added to cart before ESLE increase quantity
    compareID > 0
      ? (data.itemInCart[index].quantity += 1)
      : data.itemInCart.push(newCartItem);
    // Store item in localstorage
    localStorage.setItem("DATA_LOCAL", JSON.stringify(data));
  };

  const delCartItemInModel = itemID => {
    const delIndex = data.itemInCart.map(item => item.ID).indexOf(itemID);
    data.itemInCart.splice(delIndex, 1);
    // Store data in localstorage
    localStorage.setItem("DATA_LOCAL", JSON.stringify(data));
  };

  return {
    addNewItemToModel: addNewItemToModel,
    addNewCartItemToModel: addNewCartItemToModel,
    delCartItemInModel: delCartItemInModel,
    data: data
  };
})();

const UICtrl = (() => {
  // Get DOM string
  const DOMstring = {
    cartModalIcon: ".shopping-cart",
    cartModal: "#cart-modal",
    cartModalWraper: "#cart-modal-wrapper",
    formItemName: "#form-name",
    formItemFile: "#form-file",
    formItemPrice: "#form-price",
    formItemUnit: "#form-unit-select",
    formItemSize: "#form-size",
    formItemColor: "#form-color-select",
    formItemDiscount: "#form-discount",
    formItemDes: "#form-item-description",
    formSubmit: "#form-submit",
    itemWrapper: "#home-item-wrapper",
    itemCartWrapper: ".cart-page-item-wrapper",
    cartPageTotal: ".cart-page-total",
    cartPageItemTotal: ".cart-page-item-total",
    imgBase64: "#img-view",
    badge: ".badge",
    addCartBtn: ".add-cart-btn",
    delCartBtn: ".cart-page-item-action"
  };

  const getInputItem = () => {
    const size = document.querySelector(DOMstring.formItemSize).value;
    const color = document.querySelector(DOMstring.formItemColor).value;

    const sizeArr = size.split(",").map(Number);
    const colorArr = color.split(",");

    return {
      title: document.querySelector(DOMstring.formItemName).value,
      encodedURL: document.querySelector(DOMstring.imgBase64).src,
      price: document.querySelector(DOMstring.formItemPrice).value,
      unit: document.querySelector(DOMstring.formItemUnit).value,
      sizeArr: sizeArr,
      colorArr: colorArr,
      discount: document.querySelector(DOMstring.formItemDiscount).value,
      description: document.querySelector(DOMstring.formItemDes).value
    };
  };

  const getInputAddedToCart = element => {
    const elementTitle = element.children[3].children[0].innerHTML;
    const formatedDealtPrice = element.children[3].children[1].children[1].innerHTML.slice(
      0,
      -1
    );
    const elementSize = element.children[3].children[2].children[1].value;
    const elementColor = element.children[3].children[3].children[1].value;
    const elementURL = element.children[0].src;
    let elementUnit = element.children[3].children[1].children[1].innerHTML.substr(
      -1
    );
    elementUnit === "$" ? (elementUnit = 1) : (elementUnit = 0);
    const webItemID = element.dataset.id;
    return {
      title: elementTitle,
      formatedDealtPrice: formatedDealtPrice,
      size: elementSize,
      color: elementColor,
      URL: elementURL,
      webItemID: webItemID,
      unit: elementUnit
    };
  };

  const encodeImageToURL = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
    });

  const clearInputField = () => {
    document.querySelector(DOMstring.formItemName).value = "";
    document.querySelector(DOMstring.formItemFile).value = "";
    document.querySelector(DOMstring.imgBase64).src = "";
    document.querySelector(DOMstring.formItemPrice).value = "";
    document.querySelector(DOMstring.formItemUnit).value = "";
    document.querySelector(DOMstring.formItemSize).value = "";
    document.querySelector(DOMstring.formItemColor).value = "";
    document.querySelector(DOMstring.formItemDiscount).value = "";
    document.querySelector(DOMstring.formItemDes).value = "";
  };

  const renderStoredItem = () => {
    // Get our local data
    const local = JSON.parse(localStorage.getItem("DATA_LOCAL"));
    // Bluid HTML block for each page
    let itemHtmlModalBlock = "";
    let itemHtmlCartBlock = "";
    let itemQuantityInCart = 0;

    const itemHtmlBlock = local.itemInWeb
      .map(item => processItemHtml(item))
      .join("");

    local.itemInCart.length > 0
      ? ((itemHtmlModalBlock = local.itemInCart
          .map(item => processItemHtmlModal(item))
          .join("")),
        (itemHtmlCartBlock = local.itemInCart
          .map(item => processItemHtmlCart(item))
          .join("")))
      : null;

    // Insert HTML Blocks to the DOM
    const product = document.querySelector(DOMstring.itemWrapper);
    const modal = document.querySelector(DOMstring.cartModalWraper);
    const cart = document.querySelector(DOMstring.itemCartWrapper);

    product !== null ? (product.innerHTML = itemHtmlBlock) : null;
    modal !== null ? (modal.innerHTML = itemHtmlModalBlock) : null;
    cart !== null ? (cart.innerHTML = itemHtmlCartBlock) : null;
    // Render cart modal quantity

    const itemInCart = local.itemInCart;
    itemInCart.length !== 0
      ? ((itemQuantityInCart = itemInCart
          .map(item => item.quantity)
          .reduce((prev, next) => prev + next)),
        (document.querySelector(
          DOMstring.badge
        ).innerHTML = itemQuantityInCart))
      : null;

    // Render total in cart-page
    const totalCart = document.querySelector(DOMstring.cartPageTotal);
    if (totalCart !== null) {
      let totalPay;
      const totalPayArr = document.querySelectorAll(
        DOMstring.cartPageItemTotal
      );
      itemInCart.length !== 0
        ? (totalPay = Array.prototype.map
            .call(totalPayArr, item =>
              parseInt(
                item.innerHTML
                  .slice(0, -1)
                  .split(",")
                  .join("")
              )
            )
            .reduce((prev, next) => prev + next))
        : (totalPay = 0);

      totalCart.innerHTML = `Total ${itemQuantityInCart} items: ${appCtrl.formartNumber(
        totalPay
      )}đ`;
    }
  };

  const processItemHtml = item => {
    let html, unitHtml, sizeHtml, colorHtml;
    // Define UI unit
    item.unit ? (unitHtml = `$`) : (unitHtml = `đ`);
    // Define UI size
    sizeHtml = item.sizeArr
      .map(size => `<option value="${size}">${size}</option>`)
      .join("");
    // Define UI color
    colorHtml = item.colorArr
      .map(
        color =>
          `<option class="text-uppercase" value="${color}">${color}</option>`
      )
      .join("");
    // Define HTML block
    item.isDiscount.status
      ? (html = `<div class="card col-sm-6 col-md-4 col-lg-3 p-4" data-id=${item.ID}><img class="card-img-top" src=${item.URL}><span class="discount">-${item.isDiscount.percent}%</span><div class="card-description p-4"><p>${item.description}</p></div><div class="card-body m-auto overflow-auto"><h5 class="card-title">${item.title}</h5><div class="card-price mb-2 d-flex justify-content-between"><spand class="card-orginal-price text-muted">${item.formatedPrice.formatedOriginalPrice}đ</spand><spand class="card-deal-price">${item.formatedPrice.formatedDealtPrice}${unitHtml}</spand></div><div class="card-size mb-2 d-flex justify-content-between"><label>Size</label><select class="select-size">${sizeHtml}</select></div><div class="card-color mb-2 d-flex justify-content-between"><label>Color</label><select class="select-size">${colorHtml}</select></div><div class="card-add"><button class="add-cart-btn btn d-block mx-auto btn-dark">Add to cart</button></div></div></div>`)
      : (html = `<div class="card col-sm-6 col-md-4 col-lg-3 p-4" data-id=${item.ID}><img class="card-img-top" src=${item.URL}><div class="card-description p-4"><p>${item.description}</p></div><div class="card-body m-auto overflow-auto"><h5 class="card-title">${item.title}</h5><div class="card-price mb-2 d-flex justify-content-between"><spand class="card-orginal-price text-muted">${item.formatedPrice.formatedOriginalPrice}đ</spand><spand class="card-deal-price">${item.formatedPrice.formatedDealtPrice}${unitHtml}</spand></div><div class="card-size mb-2 d-flex justify-content-between"><label>Size</label><select class="select-size">${sizeHtml}</select></div><div class="card-color mb-2 d-flex justify-content-between"><label>Color</label><select class="select-size">${colorHtml}</select></div><div class="card-add"><button class="add-cart-btn btn d-block mx-auto btn-dark">Add to cart</button></div></div></div>`);
    return html;
  };

  const processItemHtmlModal = item => {
    let html, unitHtml;
    item.unit ? (unitHtml = `$`) : (unitHtml = `đ`);
    html = `<div class="cart-modal-item p-2 d-flex"><img src=${item.URL} /><div class="cart-modal-item-info"><p class="font-weight-bold m-0">${item.title}</p><small>Quantity: ${item.quantity}</small>  <small>Unit price: ${item.formatedDealtPrice}${unitHtml}</small></div></div>`;
    return html;
  };

  const processItemHtmlCart = item => {
    let html, total, unit;
    item.unit ? (unit = "$") : (unit = "đ");
    total = appCtrl.formartNumber(
      parseInt(item.formatedDealtPrice.split(",").join("")) * item.quantity
    );
    html = `<div class="cart-page-item px-4" data-id=${item.ID}><div class="cart-page-item-title">${item.title}, size: ${item.size}, color: ${item.color}</div><div class="cart-page-item-unit-price">${item.formatedDealtPrice}${unit}</div><div class="cart-page-item-quantity">${item.quantity}</div><div class="cart-page-item-total">${total}${unit}</div><div class="d-block m-auto"><i class="fas fa-trash-alt cart-page-item-action"></i></div></div>`;
    return html;
  };
  return {
    DOMstring: DOMstring,
    getInputItem: getInputItem,
    encodeImageToURL: encodeImageToURL,
    renderStoredItem: renderStoredItem,
    clearInputField: clearInputField,
    getInputAddedToCart: getInputAddedToCart
  };
})();

const appCtrl = ((mod, UI) => {
  // Get DOM string
  const DOM = UI.DOMstring;
  const addEventListenerCtrl = () => {
    // Add modal event
    document.querySelector(DOM.cartModalIcon).addEventListener("click", () => {
      document.querySelector(DOM.cartModal).classList.toggle("showModal");
      console.log("click");
    });

    // Encode imgURL event
    const addFileBtn = document.querySelector(DOM.formItemFile);
    addFileBtn !== null
      ? addFileBtn.addEventListener("change", encodeURLCtrl)
      : null;

    // Add submit new item event (sell-page)
    const formSubmitBtn = document.querySelector(DOM.formSubmit);
    formSubmitBtn !== null
      ? formSubmitBtn.addEventListener("click", AddItemCtrl)
      : null;

    // Add AddToCart event (home-page)
    addEventListenerToRenderElement();
  };

  const addEventListenerToRenderElement = () => {
    const DOM = UI.DOMstring;
    // Add AddToCart event (home-page)
    const addToCartBtnNodeList = document.querySelectorAll(DOM.addCartBtn);
    addToCartBtnNodeList !== null
      ? Array.prototype.map.call(addToCartBtnNodeList, item =>
          item.addEventListener("click", addItemToCartCtrl)
        )
      : null;
    // Add delete item (cart-page)
    const deleteItemInCartBtn = document.querySelectorAll(DOM.delCartBtn);
    deleteItemInCartBtn !== null
      ? Array.prototype.map.call(deleteItemInCartBtn, item =>
          item.addEventListener("click", deleteItemInCartCtrl)
        )
      : null;
  };

  const encodeURLCtrl = e => {
    const fileSelected = e.target.files;
    async function Main() {
      const base64 = await UI.encodeImageToURL(fileSelected[0]);
      return base64;
    }
    Main().then(res => {
      const imgShow = document.querySelector(DOM.imgBase64);
      imgShow.src = res;
    });
  };

  const AddItemCtrl = e => {
    // Prevent submit
    e.preventDefault();
    // Store new item infomation to a variable
    const itemInfo = UI.getInputItem();
    // Add & Store item information to model
    mod.addNewItemToModel(itemInfo);
    // console.log(newItemMockup);
    // Render stored Item
    UI.renderStoredItem();
    // Clear input field
    UI.clearInputField();
  };

  const addItemToCartCtrl = e => {
    // Prevent submit
    e.preventDefault();
    // Get added item element
    // const addedElementID = e.target.parentNode.parentNode.parentNode.dataset.id;
    const addedElement = e.target.parentNode.parentNode.parentNode;
    // Store itemAddedToCart infomation to a variable
    const addedItemInfo = UI.getInputAddedToCart(addedElement);
    // console.log(addedItemInfo);
    // Add and store new item in cart to model
    mod.addNewCartItemToModel(addedItemInfo);
    // Render stored Item
    UI.renderStoredItem();
    // Re-addEventListener to all button
    addEventListenerToRenderElement();
  };

  const deleteItemInCartCtrl = e => {
    const elementID = e.target.parentNode.parentNode.dataset.id;
    console.log(elementID);
    // Del item in model
    mod.delCartItemInModel(parseInt(elementID));
    // Re-render item
    UI.renderStoredItem();
    // Re-addEventListener to all button
    addEventListenerToRenderElement();
  };

  const formartNumber = number => {
    // 1234.5678 -> 1,234.56
    // 1234 -> 1,234.00

    let num = number.toFixed(2);
    let [intenger, decimal] = num.split(".");
    if (intenger.length > 3 && intenger.length <= 6) {
      intenger =
        intenger.substr(0, intenger.length - 3) +
        "," +
        intenger.substr(intenger.length - 3, 3);
    } else if (intenger.length > 6) {
      intenger =
        intenger.substr(0, intenger.length - 6) +
        "," +
        intenger.substr(intenger.length - 6, 3) +
        "," +
        intenger.substr(intenger.length - 3, 3);
    } else {
      intenger;
    }

    return `${intenger}.${decimal}`;
  };

  return {
    init: () => {
      console.log("App started!");
      UI.renderStoredItem();
      addEventListenerCtrl();
    },
    formartNumber: formartNumber
  };
})(model, UICtrl);

window.onload = appCtrl.init;
