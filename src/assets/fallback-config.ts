const getImageUrl = (primaryPath: string, fallbackPath: string): string => {
  // Create a new Image object for the primary path
  const img = new Image();
  img.src = primaryPath;

  // Return the primary path or fallback based on image load success
  return new Promise((resolve) => {
    img.onload = () => resolve(primaryPath);  // Resolve if the primary image loads
    img.onerror = () => resolve(fallbackPath); // Fallback if loading fails
  });
};

const FALLBACK_URLS = {
  professionalHeadshot: getImageUrl("./headshot.jpg", "/src/assets/headshot.jpg"),
  handWritingIconLogo: getImageUrl("./Pen_Logo.png", "/src/assets/Pen_Logo.png"),
  yadaYadaTextLogo: getImageUrl("./logo.png", "/src/assets/logo.png"),

  familyPhoto: getImageUrl("./family.png", "/src/assets/family.png"),
  skydivingAdventure: getImageUrl("./Skydiving.png", "/src/assets/Skydiving.png"),
  ropesCourseAdventure: getImageUrl("./ropes.jpg", "/src/assets/ropes.jpg"),

  footerBrandLogo: getImageUrl("./footer-logo.png", "/src/assets/footer-logo.png"),
};

// Function to load all images and log their URLs using Promise.all
const loadImages = async () => {
  const urls = await Promise.all(Object.entries(FALLBACK_URLS).map(async ([key, getUrl]) => {
    return { [key]: await getUrl };
  }));

  // Convert the array object back to a single object
  const imageUrls = Object.assign({}, ...urls);

  console.log(imageUrls);
  return imageUrls;
};

// Call the loadImages function to test
loadImages();
