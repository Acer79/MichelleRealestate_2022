// Quick contact form function
function sendQuickEmail() {
  var params = {
    first_name: document.getElementById("first_name1").value,
    last_name: document.getElementById("last_name1").value,
    email: document.getElementById("email1").value,
    phone: document.getElementById("phone1").value,
    potential: document.getElementById("select_service1").value,
    price: 0,
    message: document.getElementById("comments1").value,
  };

  emailjs
    .send("service_bk6vw4p", "quick_template_ldkbijm", params)
    .then(function (res) {
      console.log("success", res.status);
    });

  document.getElementById("contact-form").reset();
}

// Buyer contact form function
function sendBuyerEmail() {
  var params = {
    first_name: document.getElementById("first_name").value,
    last_name: document.getElementById("last_name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    potential: "Seller",
    propertyType: document.getElementById("propertyType").value,
    price: document.getElementById("select_price").value,
    message: document.getElementById("comments").value,
  };

  emailjs
    .send("service_bk6vw4p", "quick_template_ldkbijm", params)
    .then(function (res) {
      console.log("success", res.status);
    });

  document.getElementById("buyerForm").reset();
}

// Seller contact form function
function sendSellerEmail() {
  var params = {
    first_name: document.getElementById("first_name2").value,
    last_name: document.getElementById("last_name2").value,
    email: document.getElementById("email2").value,
    phone: document.getElementById("phone2").value,
    property: document.getElementById("property_type").value,
    parking: document.getElementById("parking").value,
    address: document.getElementById("address").value,
    message: document.getElementById("comments2").value,
  };

  emailjs
    .send("service_bk6vw4p", "seller_template_sk8j4k9", params)
    .then(function (res) {
      console.log("success", res.status);
    });

  document.getElementById("sellerform").reset();
}

function getBuyerForm() {
  document.getElementById("buyerFormSection").classList.remove("hide");
  document.getElementById("sellerFormSection").classList.add("hide");
}

function getSellerForm() {
  document.getElementById("sellerFormSection").classList.remove("hide");
  document.getElementById("buyerFormSection").classList.add("hide");
}
