import "./index.scss";
import "bootstrap/js/dist/carousel";
// import "bootstrap/js/dist/offcanvas";
import Collapse from "bootstrap/js/dist/collapse";
import Offcanvas from "bootstrap/js/dist/offcanvas";

function collapseMobileHandler() {
    const collapseMobile = document.getElementById("filter-mobile-collapse");
    const collapseBtnMobile = document.getElementById(
        "filter-mobile-collapse-btn"
    );

    const collapseBtnTextMobile = document.getElementById(
        "filter-mobile-btn-text"
    );
    const filterIconMobile = document.getElementById("filter-mobile-icon");
    // console.log("filterIconMobile :>> ", filterIconMobile);

    const bsCollapseMobile = new Collapse(collapseMobile, {
        toggle: false,
    });

    collapseBtnMobile.addEventListener("click", function () {
        bsCollapseMobile.toggle();
    });
    collapseMobile.addEventListener("show.bs.collapse", function () {
        collapseBtnTextMobile.innerText = "收起";
        filterIconMobile.classList.add("transform-rotate-180");
    });
    collapseMobile.addEventListener("hide.bs.collapse", function () {
        collapseBtnTextMobile.innerText = "顯示更多";
        filterIconMobile.classList.remove("transform-rotate-180");
    });
}

function offcanvasHandler() {
    const myOffcanvas = document.getElementById("offcanvasScrolling");
    const mobileFilterBtn = document.getElementById("mobile-filter-btn");
    const bsOffcanvas = new Offcanvas(myOffcanvas, { backdrop: true });
    mobileFilterBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        bsOffcanvas.toggle();
    });
}

collapseMobileHandler();
offcanvasHandler();
