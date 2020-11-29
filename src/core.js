import View from "./view/view";
import googleMapModule from "./modules/google-map-module";
import loadAPI from "./utilities/load-api";
export default class {
  constructor(options) {
    this.options = options;
    this.createInitialElements();

    this.is_created_map = 0;
    this.is_modal_open = 0;

    this.handleEvents();
  }
  handleEvents() {
    const self = this,
      el_gmm_close = document.getElementById("gmm_close"),
      el_gmm_layer = document.getElementById("gmm_layer");

    self.el_target.addEventListener("click", function () {
      self.createMap();
      self.open();
    });
    el_gmm_close.addEventListener("click", function () {
      self.close();
    });
    el_gmm_layer.addEventListener("click", function () {
      self.close();
    });
  }
  open() {
    if (this.is_modal_open || !this.is_created_map) return false;
    this.el_gmm_wrap.classList.add("active");
    this.is_modal_open = 1;
  }
  close() {
    if (!this.is_modal_open) return false;
    this.el_gmm_wrap.classList.remove("active");
    this.is_modal_open = 0;
  }
  createInitialElements() {
    loadAPI(this.options.key);
    new View();

    this.el_target = document.getElementById(this.options.target);
    this.el_gmm_wrap = document.getElementById("googleMapModal_wrap");
  }
  createMap() {
    let is_use_googlemapAPI = google && google.maps ? 1 : 0;
    if (!is_use_googlemapAPI || this.is_created_map) return false;

    new googleMapModule();
    this.is_created_map = 1;
  }
}
