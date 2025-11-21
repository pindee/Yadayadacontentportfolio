function getImageUrl(primaryPath: string, fallbackPath: string): string {
  // Create a new promise to check if the image loads
  return new Promise((resolve) => {
    const img = new Image(); // Create a new Image object
    img.src = primaryPath; // Set the source to the primary path
    img.onload = () => resolve(primaryPath); // Resolve with primary if successful
    img.onerror = () => resolve(fallbackPath); // Resolve with fallback if error
  });
}

export const FALLBACK_URLS = {
  // Header images
  professionalHeadshot: getImageUrl("./headshot.jpg", "/src/assets/headshot.jpg"),
  handWritingIconLogo: getImageUrl("./Pen_Logo.png", "/src/assets/Pen_Logo.png"),
  yadaYadaTextLogo: getImageUrl("./logo.png", "/src/assets/logo.png"),

  // About Me personal images
  familyPhoto: getImageUrl("./family.png", "/src/assets/family.png"),
  skydivingAdventure: getImageUrl("./Skydiving.png", "/src/assets/Skydiving.png"),
  ropesCourseAdventure: getImageUrl("./ropes.jpg", "/src/assets/ropes.jpg"),

  // Footer logo
  footerBrandLogo: getImageUrl("./footer-logo.png", "/src/assets/footer-logo.png"),
};

// Note: To use FALLBACK_URLS properly, you may need to handle the promises since getImageUrl returns a Promise
