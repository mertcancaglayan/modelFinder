const translations = {
  en: {
    title: "PAW Industrial High-Speed PVC Door Selection Tool",
    subtitle: "Enter your specifications to filter compatible PAW Door models.",
    width: "Width (mm)",
    height: "Height (mm)",
    windLoad: "Wind Load Class",
    indoorTemp: "Min Indoor Temp (°C)",
    outdoorTemp: "Min Outdoor Temp (°C)",
    safety: "Safety Required",
    speedControl: "Speed Control",
    doorLocation: "Door Location",
    doorLocationBoth: "Both",
    doorLocationIn: "Indoor",
    doorLocationOut: "Outdoor",
    frequencyUsage: "Usage Frequency",
    frequencyUsageLow: "Low (0-40 Vehicles)",
    frequencyUsageMid: "Mid (40-80 Vehicles)",
    frequencyUsageHigh: "High (80+ Vehicles)",
    specialUsage: "Special Application",
    no: "No",
    yes: "Yes",
  },

  tr: {
    title: "PAW Endüstriyel Hızlı PVC Kapı Seçim Aracı",
    subtitle: "Uyumlu PAW kapı modellerini filtrelemek için özellikleri girin.",
    width: "Genişlik (mm)",
    height: "Yükseklik (mm)",
    windLoad: "Rüzgar Yükü Sınıfı",
    indoorTemp: "Minimum İç Ortam Sıcaklığı (°C)",
    outdoorTemp: "Minimum Dış Ortam Sıcaklığı (°C)",
    safety: "Güvenlik Gerekli mi?",
    speedControl: "Hız Kontrolü",
    doorLocation: "Kapı Konumu",
    doorLocationBoth: "İç/Dış Mekan",
    doorLocationIn: "İç Mekan",
    doorLocationOut: "Dış Mekan",
    frequencyUsage: "Kullanım Sıklığı",
    frequencyUsageLow: "Düşük (0-40 Araç)",
    frequencyUsageMid: "Orta (40-80 Araç)",
    frequencyUsageHigh: "Yüksek (80+ Araç)",
    specialUsage: "Özel Kullanım",
    no: "Hayır",
    yes: "Evet",
  },
};

const switchLang = (lang) => {
  localStorage.setItem("pawSiteLang", lang);
  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");
    element.textContent = translations[lang][key];
  });
};

const selectedLang = localStorage.getItem("pawSiteLang") || "tr";
switchLang(selectedLang);

const languageSelect = document.getElementById("language-selection");
languageSelect.addEventListener("change", (e) => {
  switchLang(e.target.value);
});
