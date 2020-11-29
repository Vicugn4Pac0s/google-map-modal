export default class {
  constructor() {
    this.render();
  }
  render() {
    const html = `
    <div class="googleMapModal">
      <div class="gmm_main">
        <div class="gmm_search">
          <input id="gmm-address" class="gmm_address" type="textbox" value="" />
          <input
            id="gmm-btnSearch"
            class="gmm_btnSearch"
            type="button"
            value="送信"
          />
        </div>

        <div class="gmm_result">
          <div id="gmm-addressDisplay" class="gmm_addressDisplay">
            ここに住所が表示されます。
          </div>
          <div id="gmm-btnCopy" class="gmm_btnCopy disabled">コピーする</div>
        </div>

        <div id="gmm-map" class="gmm_map"></div>

        <div id="gmm_close" class="gmm_close">×</div>
      </div>
      <div id="gmm_layer" class="gmm_layer">
    </div>
    `;
    this.el_gmm = document.createElement("div");

    this.el_gmm.id = "googleMapModal_wrap";
    this.el_gmm.className = "googleMapModal_wrap";
    this.el_gmm.innerHTML = html;
    document.body.appendChild(this.el_gmm);
  }
}
