const productIndex = location.href.split("=")[1];
const products = JSON.parse(localStorage.getItem("productIntro"));
const userProducts = JSON.parse(localStorage.getItem("userProducts"));
let allProducts, pIndex,image;

if (userProducts) {
  allProducts = [...userProducts, ...products];
} else {
  allProducts = products;
}
const product = allProducts ? allProducts[productIndex] : ``;
if (userProducts) {
  userProducts.find((el, i) => {
    if (el.id === product.id) {
      pIndex = i;
      return true;
    }
  });
} else {
  pIndex = -1;
}
const userIndex = localStorage.getItem("userIndex");
let values, imageSrc;

const elements = {
  title: document.querySelector("#title"),
  features: document.querySelector("#features"),
  price: document.querySelector("#price"),
  description: document.querySelector("#description"),
  catagory: document.querySelector("#catagory"),
  uploadFile: document.querySelector(".uploadFile"),
  form: document.querySelector("form"),
  id: document.querySelector(".id")
};
if (productIndex) {
  if (product.userIndex === userIndex) {
    elements.id.value = productIndex;
    elements.title.value = product.title;
    elements.features.value = product.feature;
    elements.price.value = product.price;
    elements.catagory.value = product.catagory;
    elements.description.value = product.description;
    const displayCard = () => {
      image = imageSrc ? imageSrc.result : product.image;
      values = {
        title: elements.title.value,
        features: elements.features.value,
        price: elements.price.value,
        catagory: elements.catagory.value.toLowerCase(),
        description: elements.description.value
      };
      htmlMarkup = `
        <div class="col l3 m4 s6 ${values.catagory}">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img style="width: 100%;" src="${image}" alt="${values.title}" id="img1"/>
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">${values.title}<i class="material-icons right">more_vert</i></span>
              <p><a href="../ProductInfo/index.html">View Details</a></p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4"
                >${values.title}<i class="material-icons right">close</i></span
              >
              <p>
                ${values.description}
              </p>
            </div>
          </div>
        </div>`;
      document.querySelector(".abc").innerHTML = htmlMarkup;
    };
    setTimeout(() => {
      displayCard();
    }, 100);

    const input = [
      elements.title,
      elements.catagory,
      elements.description,
      elements.price,
      elements.features
    ];
    input.forEach(el => {
      el.focus();
      el.addEventListener("focus", displayCard);
      el.addEventListener("keyup", displayCard);
    });
    elements.uploadFile.addEventListener("change", displayCard);
    elements.uploadFile.addEventListener("change", () => {
      const imageData = elements.uploadFile.files[0];
      if(imageData){
        imageSrc = new FileReader();
        imageSrc.readAsDataURL(imageData);
        setTimeout(
          () => (document.getElementById("img1").src = imageSrc.result),
          100
        );
      }
    });
    elements.form.addEventListener("submit", () => {
      event.preventDefault()
      product.title = values.title;
      product.feature = values.features;
      product.catagory = values.catagory;
      product.price = `$${values.price}`;
      product.description = values.description;
      imageSrc.readyState > 0 ? product.image = imageSrc.result :``;
      userProducts[pIndex] = product;
      localStorage.setItem("userProducts", JSON.stringify(userProducts));
    });
  } else {
    document.body.innerHTML = `<h1>You Can only edit products that you created</h1>`;
  }
} else {
  document.body.innerHTML = `<h1>No Product Selected</h1>`;
}
