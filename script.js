const MODELS = [
  {
    modelCode: "S-1",
    name: {
      tr: "EKO SARMAL HIZLI PVC KAPI",
      en: "ECO Roll-Up High-Speed PVC Door",
    },
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUsage: "none",
    location: "indoor",
    imgSrc:
      "https://paw.com.tr/wp-content/uploads/2024/09/sarmal-kapilar-30.jpg",
  },
  {
    modelCode: "S-5",
    name: {
      tr: "PRO SARMAL HIZLI PVC KAPI",
      en: "PRO Roll-Up High-Speed PVC Door",
    },
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUsage: "none",
    location: "indoor",
    imgSrc: "https://paw.com.tr/wp-content/uploads/2024/06/10.jpg",
  },
  {
    modelCode: "S-6",
    name: {
      tr: "PRO-HS SARMAL HIZLI PVC KAPI",
      en: "PRO-HS Roll-Up High-Speed PVC Door",
    },
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUsage: "none",
    location: "indoor",
    imgSrc: "https://placehold.co/600x400",
  },
  {
    modelCode: "RB-1",
    name: {
      tr: "ROBOT GİRİŞ-ÇIKIŞ EKO SARMAL HIZLI PVC KAPI",
      en: "Robot Front ECO Roll-Up High-Speed PVC Door",
    },
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUsage: "robot",
    location: "indoor",
    imgSrc: "https://paw.com.tr/wp-content/uploads/2024/05/12-1.jpg",
  },
  {
    modelCode: "RB-5",
    name: {
      tr: "ROBOT GİRİŞ-ÇIKIŞ PRO SARMAL HIZLI PVC KAPI",
      en: "Robot Front PRO Roll-Up High-Speed PVC Door",
    },
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUsage: "robot",
    location: "indoor",
    imgSrc: "https://paw.com.tr/wp-content/uploads/2024/05/12-1.jpg",
  },
  {
    modelCode: "RBG-5",
    name: {
      tr: "GUARD ROBOT SARMAL HIZLI PVC KAPI",
      en: "GUARD ROBOT Roll-Up High-Speed PVC Door",
    },
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 1,
    hasSafety: true,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUsage: "robot",
    location: "both",
    imgSrc: "https://paw.com.tr/wp-content/uploads/2024/05/12-1.jpg",
  },
  {
    modelCode: "PF-1",
    name: {
      tr: "İLAÇ-GIDA EKO SARMAL HIZLI PVC KAPI",
      en: "Pharma-Food ECO Roll-Up High-Speed PVC Door",
    },
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUsage: "pharma_food",
    location: "indoor",
    imgSrc:
      "https://paw.com.tr/wp-content/uploads/2024/09/paw_izolasyonlu_kapilar_35-scaled.jpg",
  },
  {
    modelCode: "PF-5",
    name: {
      tr: "İLAÇ-GIDA PRO SARMAL HIZLI PVC KAPI",
      en: "Pharma-Food PRO Roll-Up High-Speed PVC Door",
    },
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUsage: "pharma_food",
    location: "indoor",
    imgSrc:
      "https://paw.com.tr/wp-content/uploads/2024/09/paw_izolasyonlu_kapilar_35-scaled.jpg",
  },
  {
    modelCode: "CK-1",
    name: {
      tr: "KONVEYÖR GİRİŞ-ÇIKIŞ EKO SARMAL HIZLI PVC KAPI",
      en: "Conveyor Front ECO Roll-Up High-Speed PVC Door",
    },
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUsage: "conveyor",
    location: "indoor",
    imgSrc: "https://paw.com.tr/wp-content/uploads/2024/05/16-1.jpg",
  },
  {
    modelCode: "CK-5",
    name: {
      tr: "KONVEYÖR GİRİŞ-ÇIKIŞ PRO SARMAL HIZLI PVC KAPI",
      en: "Conveyor Front PRO Roll-Up High-Speed PVC Door",
    },
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUsage: "conveyor",
    location: "indoor",
    imgSrc: "https://paw.com.tr/wp-content/uploads/2024/05/16-1.jpg",
  },
  {
    modelCode: "I-1",
    name: {
      tr: "EKO İZOLASYONLU SARMAL HIZLI PVC KAPI",
      en: "ECO Isolated Roll-Up High-Speed PVC Door",
    },
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUsage: "none",
    location: "indoor",
    imgSrc:
      "https://paw.com.tr/wp-content/uploads/2024/03/Izolasyonlu-Kapilar.jpg",
  },
  {
    modelCode: "I-5",
    name: {
      tr: "PRO İZOLASYONLU SARMAL HIZLI PVC KAPI",
      en: "PRO Isolated Roll-Up High-Speed PVC Door",
    },
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUsage: "none",
    location: "indoor",
    imgSrc:
      "https://paw.com.tr/wp-content/uploads/2024/03/Izolasyonlu-Kapilar.jpg",
  },
  {
    modelCode: "K-1",
    name: {
      tr: "EKO KATLANIR HIZLI PVC KAPI",
      en: "ECO Fold-Up High-Speed PVC Door",
    },
    maxWidth: 12000,
    maxHeight: 12000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 3,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUsage: "none",
    location: "both",
    imgSrc:
      "https://paw.com.tr/wp-content/uploads/2024/03/Katlanir-Kapilar.jpg",
  },
  {
    modelCode: "K-5",
    name: {
      tr: "PRO KATLANIR HIZLI PVC KAPI",
      en: "PRO Fold-Up High-Speed PVC Door",
    },
    maxWidth: 12000,
    maxHeight: 12000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 3,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUsage: "none",
    location: "both",
    imgSrc:
      "https://paw.com.tr/wp-content/uploads/2024/03/Katlanir-Kapilar.jpg",
  },
  {
    modelCode: "E-5",
    name: {
      tr: "KENDİNİ TAMİR EDEN SARMAL",
      en: "Self-Repair Roll-Up",
    },
    maxWidth: 5000,
    maxHeight: 5000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 3,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUsage: "none",
    location: "both",
    imgSrc:
      "https://paw.com.tr/wp-content/uploads/2024/11/paw_fermuarli_kapilar_36.jpg",
  },
  {
    modelCode: "ZF-1",
    name: {
      tr: "FERMUARLI SARMAL PVC ECO",
      en: "Zipper Roll-Up PVC ECO",
    },
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 1,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUsage: "none",
    location: "both",
    imgSrc:
      "https://paw.com.tr/wp-content/uploads/2024/11/paw_fermuarli_kapilar_36.jpg",
  },
  {
    modelCode: "ZF-5",
    name: {
      tr: "FERMUARLI SARMAL PVC PRO",
      en: "Zipper Roll-Up PVC PRO",
    },
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUsage: "none",
    location: "indoor",
    imgSrc:
      "https://paw.com.tr/wp-content/uploads/2024/11/paw_fermuarli_kapilar_36.jpg",
  },
  {
    modelCode: "ZE-1",
    name: {
      tr: "ACİL ÇIKIŞLI SARMAL PVC EKO",
      en: "Emergency Exit Roll-Up PVC Eco",
    },
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUsage: "none",
    location: "indoor",
    imgSrc: "https://paw.com.tr/wp-content/uploads/2024/05/24.jpg",
  },
  {
    modelCode: "ZE-5",
    name: {
      tr: "ACİL ÇIKIŞLI SARMAL PVC PRO",
      en: "Emergency Exit Roll-Up PVC PRO",
    },
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUsage: "none",
    location: "indoor",
    imgSrc: "https://paw.com.tr/wp-content/uploads/2024/05/24.jpg",
  },
  {
    modelCode: "ID-1",
    name: {
      tr: "EKO İZOLASYONLU ÇİFT CİDARLI BRANDALI SARMAL HIZLI PVC KAPI",
      en: "ECO Isolated Double PVC Roll-Up High-Speed Door",
    },
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: -15,
    minExteriorTemp: -15,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUsage: "none",
    location: "indoor",
    imgSrc: "https://placehold.co/600x400",
  },
  {
    modelCode: "ID-5",
    name: {
      tr: "PRO İZOLASYONLU ÇİFT CİDARLI BRANDALI SARMAL HIZLI PVC KAPI",
      en: "PRO Isolated Double PVC Roll-Up High-Speed Door",
    },
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: -15,
    minExteriorTemp: -15,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUsage: "none",
    location: "indoor",
    imgSrc: "https://placehold.co/600x400",
  },
  {
    modelCode: "SI-1",
    name: {
      tr: "EKO İZOLASYONLU SARMAL HIZLI PVC KAPI",
      en: "ECO Isolated Roll-Up High-Speed PVC Door",
    },
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUsage: "none",
    location: "indoor",
    imgSrc: "https://placehold.co/600x400",
  },
  {
    modelCode: "SI-5",
    name: {
      tr: "PRO İZOLASYONLU SARMAL HIZLI PVC KAPI",
      en: "PRO Isolated Roll-Up High-Speed PVC Door",
    },
    maxWidth: 4000,
    maxHeight: 6500,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUsage: "none",
    location: "indoor",
    imgSrc: "https://placehold.co/600x400",
  },
  {
    modelCode: "SG-1",
    name: {
      tr: "EKO GUARD İÇİ DOLGULU SARMAL HIZLI PVC KAPI",
      en: "ECO GUARD Filled Inside Roll-Up High-Speed PVC Door",
    },
    maxWidth: 6200,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 2,
    hasSafety: true,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUsage: "none",
    location: "both",
    imgSrc:
      "https://paw.com.tr/wp-content/uploads/2024/09/sarmal-kapilar-17-scaled.jpg",
  },
  {
    modelCode: "POWER XL",
    name: {
      tr: "PAW POWER XL",
      en: "PAW POWER XL",
    },
    maxWidth: 13000,
    maxHeight: 12000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 3,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUsage: "none",
    location: "both",
    imgSrc:
      "https://paw.com.tr/wp-content/uploads/2024/09/hangar-kapi-power-xl-02.jpg",
  },
  {
    modelCode: "EZ-8010",
    name: {
      tr: "PAW-TURBO TAM GÖRÜŞLÜ KAPILAR",
      en: "PAW-TURBO Full View Doors",
    },
    maxWidth: 6000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 3,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUsage: "none",
    location: "both",
    imgSrc:
      "https://paw.com.tr/wp-content/uploads/2024/03/Paw-Turbo-Sipiral-Kapilar-1.jpg",
  },
  {
    modelCode: "EZ-8020",
    name: { tr: "PAW-TURBO PANEL KAPILAR", en: "PAW-TURBO PANEL Doors" },
    maxWidth: 6000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 3,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUsage: "none",
    location: "both",
    imgSrc: "https://paw.com.tr/wp-content/uploads/2024/05/2.jpg",
  },
  {
    modelCode: "EZ-8030",
    name: { tr: "PAW-TURBO BRANDA KAPILAR", en: "PAW-TURBO Tarpaulin Doors" },
    maxWidth: 6000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 3,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUsage: "none",
    location: "both",
    imgSrc: "https://paw.com.tr/wp-content/uploads/2024/05/3.jpg",
  },
  {
    modelCode: "MAXI",
    name: {
      tr: "PAW MAXI XL HANGAR KAPISI",
      en: "PAW MAXI XL HANGAR Door",
    },
    maxWidth: 20000,
    maxHeight: 15000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 3,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUsage: "none",
    location: "both",
    imgSrc:
      "https://paw.com.tr/wp-content/uploads/2024/09/WhatsApp-Gorsel-2025-11-11-saat-16.19.14_2ee89ab4.jpg",
  },
  {
    modelCode: "K-6",
    name: {
      tr: "ÇİFT HALATLI PRO KATLANIR HIZLI PVC KAPI",
      en: "Double Rope Pro Fold-Up High-Speed PVC Door",
    },
    maxWidth: 12000,
    maxHeight: 12000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 3,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUsage: "none",
    location: "both",
    imgSrc:
      "https://paw.com.tr/wp-content/uploads/2024/03/Katlanir-Kapilar.jpg",
  },
  {
    modelCode: "SG-5",
    name: {
      tr: "PRO GUARD İÇİ DOLGULU SARMAL HIZLI PVC KAPI",
      en: "PRO GUARD Filled Roll-Up High-Speed PVC Door",
    },
    maxWidth: 6200,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 2,
    hasSafety: true,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUsage: "none",
    location: "both",
    imgSrc:
      "https://paw.com.tr/wp-content/uploads/2024/09/sarmal-kapilar-17-scaled.jpg",
  },
  {
    modelCode: "IDR-1",
    name: {
      tr: "REZİSTANSLI EKO İZOLASYONLU ÇİFT CİDARLI BRANDALI SARMAL HIZLI PVC KAPI",
      en: "ECO Isolated Double Tarpaulin Roll-Up High-Speed PVC Door With Resistance",
    },
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: -25,
    minExteriorTemp: -25,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUsage: "none",
    location: "indoor",
    imgSrc: "https://placehold.co/600x400",
  },
  {
    modelCode: "IDR-5",
    name: {
      tr: "REZİSTANSLI PRO İZOLASYONLU ÇİFT CİDARLI BRANDALI SARMAL HIZLI PVC KAPI",
      en: "PRO Isolated Double Tarpaulin Roll-Up High-Speed PVC Door With Resistance",
    },
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: -25,
    minExteriorTemp: -25,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUsage: "none",
    location: "indoor",
    imgSrc: "https://placehold.co/600x400",
  },
];

const languageSelect = document.getElementById("language-selection");

const getLang = () => {
  return languageSelect.value || localStorage.getItem("pawSiteLang");
};

languageSelect.addEventListener("change", (e) => {
  filterModels();
});

const buttonText = {
  en: "View Details",
  tr: "Detayları Gör",
};

const displayDoors = (compatibleDoors) => {
  const lang = getLang();

  const gridDisplay = document.getElementById("door-container");
  gridDisplay.innerHTML = "";

  gridDisplay.innerHTML = compatibleDoors
    .map((door) => {
      return `
          <article class="card">
            <a href="https://paw.com.tr" class="card-image">
              <img src="${door.imgSrc}" alt="${door.name[lang]}" loading="lazy" />
            </a>

            <div class="card-body">
              <div class="card-header">
                <h3 class="card-title">${door.name[lang]}</h3>
                <span class="card-model">${door.modelCode}</span>
              </div>

              <a href="https://paw.com.tr" class="card-button">
                ${buttonText[lang]}
              </a>
            </div>
          </article>
            `;
    })
    .join("");
};

const getInputValues = () => ({
  width: Number(document.getElementById("width-input").value) || 0,
  height: Number(document.getElementById("height-input").value) || 0,
  windLoad: Number(document.getElementById("windLoad").value) || 0,
  indoorTemp: Number(document.getElementById("indoorTemp").value) || 0,
  outdoorTemp: Number(document.getElementById("outdoorTemp").value) || 0,
  hasSafety: document.getElementById("safety").value === "true",
  hasSpeedControl: document.getElementById("speedControl").value === "true",
  doorLocation: document.getElementById("doorLocation").value || "both",
  frequencyUsage: document.getElementById("frequencyUsage").value || "low",
  specialUsage: document.getElementById("specialUsage").value || "none",
});

const isCompatible = (door, f) => {
  const invalidWidth = f.width < 0 || f.width > door.maxWidth;
  if (invalidWidth) return false;

  const invalidHeight = f.height < 0 || f.height > door.maxHeight;
  if (invalidHeight) return false;

  const interiorTooCold = f.indoorTemp < door.minInteriorTemp;
  if (interiorTooCold) return false;

  const exteriorTooCold = f.outdoorTemp < door.minExteriorTemp;
  if (exteriorTooCold) return false;

  if (f.hasSafety && !door.hasSafety) return false;

  if (f.hasSpeedControl !== door.hasSpeedControl) return false;

  const incompatibleLocation =
    f.doorLocation !== "both" &&
    door.location !== "both" &&
    f.doorLocation !== door.location;

  if (incompatibleLocation) return false;

  const frequencyMismatch =
    f.frequencyUsage !== door.usageFrequency && !f.hasSpeedControl;

  if (frequencyMismatch) return false;

  if (f.specialUsage !== door.specialUsage) return false;

  if (f.windLoad > door.windLoad) return false;

  return true;
};

const filterModels = () => {
  const filterValues = getInputValues();

  const compatibleDoors = MODELS.filter((door) =>
    isCompatible(door, filterValues),
  );

  displayDoors(compatibleDoors);
};

const addEventListeners = () => {
  const formElements = document.querySelectorAll(
    ".input-group input , .input-group select",
  );

  formElements.forEach((e) => {
    e.addEventListener("change", () => {
      filterModels();
    });
  });
};

addEventListeners();
