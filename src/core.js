import Clipboard from "./modules/clipboard";

export default class {
  constructor() {
    this.initialize();
    this.handleEvents();
  }
  initialize() {
    this.Map = new google.maps.Map(document.getElementById("gmm-map"), {
      center: { lat: 35.6803997, lng: 139.7690174 },
      zoom: 4,
    });
    this.Marker = null;
    this.Geocoder = new google.maps.Geocoder();
    this.Clipboard = new Clipboard("gmm-btnCopy", "gmm-addressDisplay");

    this.$_addressDis = document.getElementById("gmm-addressDisplay");
  }
  handleEvents() {
    var self = this,
      $_btnSearch = document.getElementById("gmm-btnSearch"),
      $_address = document.getElementById("gmm-address");

    $_btnSearch.addEventListener("click", function () {
      var inputAddress = $_address.value;
      self.search(inputAddress);
    });
  }
  search(inputAddress) {
    var self = this;
    self.Geocoder.geocode(
      { address: inputAddress },
      function (results, status) {
        if (status != "OK") {
          alert("該当する結果がありませんでした：" + status);
          return false;
        }
        self.render(results);
      }
    );
  }
  render(data) {
    var location = data[0].geometry.location,
      formatted_address = data[0].formatted_address;

    this.createMapMarker(location);
    this.Map.setCenter(location);
    this.Map.setZoom(16);

    this.$_addressDis.innerHTML = formatted_address;

    this.Clipboard.active();
  }
  createMapMarker(location) {
    if (this.Marker) this.Marker.setMap(null);
    this.Marker = new google.maps.Marker({
      position: location,
      map: this.Map,
    });
  }
}
