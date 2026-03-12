const MODELS = [
  {
    modelCode: "S-1",
    name: "EKO SARMAL HIZLI PVC KAPI",
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUse: null,
    location: "indoor",
  },
  {
    modelCode: "S-5",
    name: "PRO SARMAL HIZLI PVC KAPI",
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUse: null,
    location: "indoor",
  },
  {
    modelCode: "S-6",
    name: "PRO-HS SARMAL HIZLI PVC KAPI",
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUse: null,
    location: "indoor",
  },
  {
    modelCode: "RB-1",
    name: "ROBOT GİRİŞ-ÇIKIŞ EKO SARMAL HIZLI PVC KAPI",
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUse: "robot",
    location: "indoor",
  },
  {
    modelCode: "RB-5",
    name: "ROBOT GİRİŞ-ÇIKIŞ PRO SARMAL HIZLI PVC KAPI",
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUse: "robot",
    location: "indoor",
  },
  {
    modelCode: "RBG-5",
    name: "GUARD ROBOT SARMAL HIZLI PVC KAPI",
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 1,
    hasSafety: true,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUse: "robot",
    location: "both",
  },
  {
    modelCode: "PF-1",
    name: "İLAÇ-GIDA EKO SARMAL HIZLI PVC KAPI",
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUse: "pharma-food",
    location: "indoor",
  },
  {
    modelCode: "PF-5",
    name: "İLAÇ-GIDA PRO SARMAL HIZLI PVC KAPI",
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUse: "pharma-food",
    location: "indoor",
  },
  {
    modelCode: "CK-1",
    name: "KONVEYÖR GİRİŞ-ÇIKIŞ EKO SARMAL HIZLI PVC KAPI",
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUse: "conveyor",
    location: "indoor",
  },
  {
    modelCode: "CK-5",
    name: "KONVEYÖR GİRİŞ-ÇIKIŞ PRO SARMAL HIZLI PVC KAPI",
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUse: "conveyor",
    location: "indoor",
  },
  {
    modelCode: "I-1",
    name: "EKO İZOLASYONLU SARMAL HIZLI PVC KAPI",
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUse: null,
    location: "indoor",
  },
  {
    modelCode: "I-5",
    name: "PRO İZOLASYONLU SARMAL HIZLI PVC KAPI",
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUse: null,
    location: "indoor",
  },
  {
    modelCode: "K-1",
    name: "EKO KATLANIR HIZLI PVC KAPI",
    maxWidth: 12000,
    maxHeight: 12000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 3,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUse: null,
    location: "both",
  },
  {
    modelCode: "K-5",
    name: "PRO KATLANIR HIZLI PVC KAPI",
    maxWidth: 12000,
    maxHeight: 12000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 3,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUse: null,
    location: "both",
  },
  {
    modelCode: "E-5",
    name: "KENDİNİ TAMİR EDEN SARMAL",
    maxWidth: 5000,
    maxHeight: 5000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 3,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUse: null,
    location: "both",
  },
  {
    modelCode: "ZF-1",
    name: "FERMUARLI SARMAL PVC",
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 1,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUse: null,
    location: "both",
  },
  {
    modelCode: "ZF-5",
    name: "FERMUARLI SARMAL PVC",
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUse: null,
    location: "indoor",
  },
  {
    modelCode: "ZE-1",
    name: "ACİL ÇIKIŞLI SARMAL PVC",
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUse: null,
    location: "indoor",
  },
  {
    modelCode: "ZE-5",
    name: "ACİL ÇIKIŞLI SARMAL PVC",
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUse: null,
    location: "indoor",
  },
  {
    modelCode: "ID-1",
    name: "EKO İZOLASYONLU ÇİFT CİDARLI BRANDALI SARMAL HIZLI PVC KAPI",
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: -15,
    minExteriorTemp: -15,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUse: null,
    location: "indoor",
  },
  {
    modelCode: "ID-5",
    name: "PRO İZOLASYONLU ÇİFT CİDARLI BRANDALI SARMAL HIZLI PVC KAPI",
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: -15,
    minExteriorTemp: -15,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUse: null,
    location: "indoor",
  },
  {
    modelCode: "SI-1",
    name: "EKO İZOLASYONLU SARMAL HIZLI PVC KAPI",
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUse: null,
    location: "indoor",
  },
  {
    modelCode: "SI-5",
    name: "PRO İZOLASYONLU SARMAL HIZLI PVC KAPI",
    maxWidth: 4000,
    maxHeight: 6500,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUse: null,
    location: "indoor",
  },
  {
    modelCode: "SG-1",
    name: "EKO GUARD İÇİ DOLGULU SARMAL HIZLI PVC KAPI",
    maxWidth: 6200,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 2,
    hasSafety: true,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUse: null,
    location: "both",
  },
  {
    modelCode: "POWER XL",
    name: "PAW POWER XL",
    maxWidth: 13000,
    maxHeight: 12000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 3,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUse: null,
    location: "both",
  },
  {
    modelCode: "EZ-8010",
    name: "PAW-TURBO TAM GÖRÜŞLÜ KAPILAR",
    maxWidth: 6000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 3,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUse: null,
    location: "both",
  },
  {
    modelCode: "EZ-8020",
    name: "PAW-TURBO PANEL KAPILAR",
    maxWidth: 6000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 3,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUse: null,
    location: "both",
  },
  {
    modelCode: "EZ-8030",
    name: "PAW-TURBO BRANDA KAPILAR",
    maxWidth: 6000,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 3,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUse: null,
    location: "both",
  },
  {
    modelCode: "MAXI",
    name: "PAW MAXI XL HANGAR KAPISI",
    maxWidth: 20000,
    maxHeight: 15000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 3,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUse: null,
    location: "both",
  },
  {
    modelCode: "K-6",
    name: "ÇİFT HALATLI PRO KATLANIR HIZLI PVC KAPI",
    maxWidth: 12000,
    maxHeight: 12000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 3,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUse: null,
    location: "both",
  },
  {
    modelCode: "SG-5",
    name: "PRO GUARD İÇİ DOLGULU SARMAL HIZLI PVC KAPI",
    maxWidth: 6200,
    maxHeight: 6000,
    minInteriorTemp: 0,
    minExteriorTemp: 0,
    windLoad: 2,
    hasSafety: true,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUse: null,
    location: "both",
  },
  {
    modelCode: "IDR-1",
    name: "REZİSTANSLI EKO İZOLASYONLU ÇİFT CİDARLI BRANDALI SARMAL HIZLI PVC KAPI",
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: -25,
    minExteriorTemp: -25,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: false,
    usageFrequency: "low",
    specialUse: null,
    location: "indoor",
  },
  {
    modelCode: "IDR-5",
    name: "REZİSTANSLI PRO İZOLASYONLU ÇİFT CİDARLI BRANDALI SARMAL HIZLI PVC KAPI",
    maxWidth: 4000,
    maxHeight: 6000,
    minInteriorTemp: -25,
    minExteriorTemp: -25,
    windLoad: 0,
    hasSafety: false,
    hasSpeedControl: true,
    usageFrequency: "high",
    specialUse: null,
    location: "indoor",
  },
];

const displayDoors = (compatibleDoors) => {
  const gridDisplay = document.getElementById("door-container");
  gridDisplay.innerHTML = "";

  gridDisplay.innerHTML = compatibleDoors
    .map((door) => {
      return `
  <article class="card">
    
    <a href="https://paw.com.tr" class="card-image">
      <img 
        src="https://paw.com.tr/wp-content/uploads/2024/09/sarmal-kapilar-31.jpg" 
        alt="${door.name}"
        loading="lazy"
      />
    </a>

    <div class="card-body">
      <div class="card-header">
        <h3 class="card-title">${door.name}</h3>
        <span class="card-model">${door.modelCode}</span>
      </div>

      <a href="https://paw.com.tr" class="card-button">
        View Details
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
  specialUsage:
    document.getElementById("specialUsage").value === "none"
      ? null
      : document.getElementById("specialUsage").value || null,
});

const isCompatible = (door, f) => {
  if (f.width < 0 || f.width > door.maxWidth) return false;
  if (f.height < 0 || f.height > door.maxHeight) return false;

  if (f.indoorTemp < door.minInteriorTemp) return false;
  if (f.outdoorTemp < door.minExteriorTemp) return false;

  if (f.hasSafety && !door.hasSafety) return false;

  if (f.hasSpeedControl !== door.hasSpeedControl) return false;

  if (
    f.doorLocation !== "both" &&
    door.location !== "both" &&
    f.doorLocation !== door.location
  ) {
    return false;
  }

  if (f.frequencyUsage !== door.usageFrequency && !f.hasSpeedControl) {
    return false;
  }

  if (door.specialUse && f.specialUsage !== door.specialUse) return false;

  if (f.windLoad > door.windLoad) return false;

  return true;
};

const filterModels = () => {
  const filterValues = getInputValues();

  const compatibleDoors = MODELS.filter((door) =>
    isCompatible(door, filterValues),
  );

  displayDoors(compatibleDoors);

  console.log(compatibleDoors);
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
