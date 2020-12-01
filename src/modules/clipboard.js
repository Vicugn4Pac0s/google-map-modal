export default class {
  constructor(btnCopy, txtCopy) {
    let self = this;
    self.$_btnCopy = document.getElementById(btnCopy);
    self.$_txtCopy = document.getElementById(txtCopy);
    self.is_use_clipboard =
      navigator.clipboard && navigator.clipboard.writeText ? 1 : 0;

    self.$_btnCopy.addEventListener("click", function () {
      if (!self.is_use_clipboard) return false;

      self.copy();
    });
  }
  copy() {
    let txt = this.$_txtCopy.innerText;
    navigator.clipboard
      .writeText(txt)
      .then((data) => alert("コピーしました。"))
      .catch((e) => alert("コピーに失敗しました。"));
  }
  active() {
    if (this.state === 1 || !this.is_use_clipboard) return false;

    this.$_btnCopy.classList.remove("disabled");
    this.state = 1;
  }
}
