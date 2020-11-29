import View from "./view/view";
import googleMapModule from "./modules/google-map-module";
export default class {
  constructor() {
    new View();

    this.el_gmm_wrap = document.getElementById('googleMapModal_wrap');
    this.gmm_state = 0;

    this.handleEvents();
  }
  handleEvents() {
    const self = this,
      el_gmm_layer = document.getElementById('googleMapModal_layer');

    document.getElementById('js-btn').addEventListener('click', function() {
      self.open();
    });
    el_gmm_layer.addEventListener('click', function() {
      self.close();
    });
  }
  open() {
    if(this.gmm_state === 0) {
      new googleMapModule();
      this.gmm_state = 1;
    }
    this.el_gmm_wrap.classList.add('active');
  }
  close() {
    this.el_gmm_wrap.classList.remove('active');
  }
}
