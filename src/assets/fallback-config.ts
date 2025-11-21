// Primary image paths
const FALLBACK_URLS = {
  professionalHeadshot: "./headshot.jpg",
  handWritingIconLogo: "./Pen_Logo.png",
  yadaYadaTextLogo: "./logo.png",
  familyPhoto: "./family.png",
  skydivingAdventure: "./Skydiving.png",
  ropesCourseAdventure: "./ropes.jpg",
  footerBrandLogo: "./footer-logo.png",
};

// Fallback asset paths
const FALLBACK_ASSETS = {
  professionalHeadshot: "/src/assets/headshot.jpg",
  handWritingIconLogo: "/src/assets/Pen_Logo.png",
  yadaYadaTextLogo: "/src/assets/logo.png",
  familyPhoto: "/src/assets/family.png",
  skydivingAdventure: "/src/assets/Skydiving.png",
  ropesCourseAdventure: "/src/assets/ropes.jpg",
  footerBrandLogo: "/src/assets/footer-logo.png",
};

// Function to resolve URLs
const resolveImageUrl = (key: keyof typeof FALLBACK_URLS): string => {
  const img = new Image();
  img.src = FALLBACK_URLS[key];
  img.onerror = () => {
    return FALLBACK_ASSETS[key]; // Return fallback path if the image fails to load
  };
  return FALLBACK_URLS[key]; // Return primary path by default
};

// Example use
const loadImages = () => {
  const urls = Object.keys(FALLBACK_URLS).reduce((acc, key) => {
    acc[key] = resolveImageUrl(key as keyof typeof FALLBACK_URLS);
    return acc;
  }, {} as Record<string, string>);

  console.log(urls);
  return urls;
};

// Load images when needed
loadImages();
