(function () {
  var user = "contact";
  var domain = "wazalt.com";
  var addr = user + "@" + domain;
  var el = document.getElementById("contact-mail");
  if (!el) return;
  var a = document.createElement("a");
  a.href = "mailto:" + addr;
  a.textContent = addr;
  el.innerHTML = "";
  el.appendChild(a);
})();
