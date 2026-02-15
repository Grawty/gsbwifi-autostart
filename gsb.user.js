// ==UserScript==
// @name         GSBWIFI Otomatik Baslatici
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  gsb icin script
// @author       grawty
// @match        https://wifi.gsb.gov.tr/*
// @match        https://wifi.kyk.gov.tr/*
// @match        http://wifi.gsb.gov.tr/*
// @grant        window.close
// @run-at       document-end
// ==/UserScript==

(function () {
  "use strict";

  console.log("GSBWIFI Scripti Yüklendi ve Çalışıyor...");

  function islemYap() {
    const HEDEF_METIN = "Başlat";

    const elementler = document.querySelectorAll(
      'button, input[type="button"], input[type="submit"], a.ui-commandlink, span.ui-button-text',
    );
    let buton = null;

    for (let el of elementler) {
      if (
        (el.innerText && el.innerText.trim() === HEDEF_METIN) ||
        (el.textContent && el.textContent.trim() === HEDEF_METIN) ||
        el.value === HEDEF_METIN
      ) {
        if (el.tagName === "SPAN") {
          buton = el.closest("button") || el.closest("a") || el;
        } else {
          buton = el;
        }
        break;
      }
    }

    if (buton) {
      const pasifMi =
        buton.disabled ||
        buton.classList.contains("disabled") ||
        buton.classList.contains("ui-state-disabled") ||
        buton.closest(".ui-state-disabled") !== null ||
        buton.getAttribute("aria-disabled") === "true";

      if (pasifMi) {
        console.log("Buton pasif durumda. İnternet gelmiş olabilir.");
        window.close();
      } else {
        console.log("Başlat butonuna tıklanıyor...");
        buton.click();
      }
    } else {
      console.log("Buton aranıyor...");
    }
  }
  setTimeout(islemYap, 1000);

  setInterval(islemYap, 3000);
})();
