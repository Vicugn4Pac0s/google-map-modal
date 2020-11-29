export default function (key) {
  let api_script = document.createElement("script");
  api_script.src = "https://maps.googleapis.com/maps/api/js?key=" + key;
  document.body.appendChild(api_script);
}
