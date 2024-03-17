const fetchCategories = async () => {
  const response = await fetch("/admin/getAllCategories");
  const data = await response.json();
  // split categories into two columns
  const half = Math.ceil(data.length / 2);
  const firstHalf = data.splice(0, half);
  const secondHalf = data.splice(-half);
  const firstColumn = document.getElementById("categories-wrapper-left");
  const secondColumn = document.getElementById("categories-wrapper-right");
  const firstColumnFooter = document.getElementById(
    "categories-wrapper-left-footer"
  );
  const secondColumnFooter = document.getElementById(
    "categories-wrapper-right-footer"
  );
  firstHalf.forEach((category) => {
    const li = document.createElement("li");
    li.classList.add("menu-item");
    const a = document.createElement("a");
    a.classList.add("menu-link");
    a.href = `/categories/${category.slug}`;
    a.innerHTML = `<div>${category?.category_name}</div>`;
    li.appendChild(a);
    firstColumn.appendChild(li);
  });
  secondHalf.forEach((category) => {
    const li = document.createElement("li");
    li.classList.add("menu-item");
    const a = document.createElement("a");
    a.classList.add("menu-link");
    a.href = `/categories/${category.slug}`;
    a.innerHTML = `<div>${category.category_name}</div>`;
    li.appendChild(a);
    secondColumn.appendChild(li);
  });

  firstHalf.forEach((category) => {
    //<li><a href="/cameras">Kamera</a></li>
    const li = document.createElement("li");
    li.classList.add("menu-item");
    const a = document.createElement("a");
    a.classList.add("menu-link");
    a.href = `/categories/${category.slug}`;
    a.innerText = category.category_name;
    li.appendChild(a);
    firstColumnFooter.appendChild(li);
  });
  secondHalf.forEach((category) => {
    //<li><a href="/cameras">Kamera</a></li>
    const li = document.createElement("li");
    li.classList.add("menu-item");
    const a = document.createElement("a");
    a.classList.add("menu-link");
    a.href = `/categories/${category.slug}`;
    a.innerText = category.category_name;
    li.appendChild(a);
    secondColumnFooter.appendChild(li);
  });
  return data;
};

const fetchContactInfo = async () => {
  const headerContactAddress = document.getElementById(
    "header-contact-address"
  );
  const headerContactPhone = document.getElementById("header-contact-phone");
  const headerContactEmail = document.getElementById("header-contact-email");

  fetch("/admin/getContactInfo")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      headerContactAddress.innerHTML = data.adress;
      headerContactPhone.innerHTML = data.phone;
      headerContactEmail.innerHTML = data.email;
    })
    .catch((err) => console.log(err));
};

var images = document.querySelectorAll(".lazy");
new LazyLoad(images, {
  root: null,
  rootMargin: "0px",
  threshold: 0,
});

jQuery(document).ready(changeHeaderColor);
jQuery(window).on("resize", changeHeaderColor);
jQuery(document).ready(fetchCategories);
jQuery(document).ready(fetchContactInfo);

function changeHeaderColor() {
  if (jQuery(window).width() > 991.98) {
    jQuery("#header").hover(
      function () {
        if (!jQuery(this).hasClass("sticky-header")) {
          jQuery(this)
            .addClass("hover-light")
            .removeClass("dark")
            .addClass("not-dark");
        }
        jQuery("#wrapper").addClass("header-overlay");
        SEMICOLON.Base.setBSTheme();
      },
      function () {
        if (!jQuery(this).hasClass("sticky-header")) {
          jQuery(this)
            .removeClass("hover-light")
            .addClass("dark")
            .removeClass("not-dark");
        }
        jQuery("#wrapper").removeClass("header-overlay");
        SEMICOLON.Base.setBSTheme();
      }
    );
  }
}

window.addEventListener(
  "scroll",
  function () {
    setTimeout(function () {
      if (!jQuery("#header").hasClass("sticky-header")) {
        jQuery("#header")
          .removeClass("hover-light")
          .addClass("dark")
          .removeClass("not-dark");
      }
    }, 666);

    if (
      jQuery(document).scrollTop() > 2000 &&
      jQuery("#modal-subscribe").attr("displayed") === "false"
    ) {
      if (jQuery("body").hasClass("has-plugin-bootstrap")) {
        jQuery("#modal-subscribe").modal("show");
        jQuery("#modal-subscribe").attr("displayed", "true");
      }
    }
  },
  { passive: true }
);

jQuery("#modal-subscribe-form").on("formSubmitSuccess", function () {
  jQuery("#modal-subscribe").addClass("fadeOutDown");
  setTimeout(function () {
    jQuery("#modal-subscribe").modal("hide");
  }, 400);
  jQuery("#modal-subscribe").attr("displayed", "false");
});

window.onload = function () {
  const searchInput = document.getElementById("product-search-input");
  const searchButton = document.getElementById("product-search-button");
  // set input value to search query
  const urlParams = new URLSearchParams(window.location.search);
  const search = urlParams.get("search");
  if (search) {
    searchInput.value = search;
  }
  searchButton.addEventListener("click", () => {
    const search = searchInput.value;
    // add search query to url
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("search", search);
    window.location.search = urlParams;
  });
};
