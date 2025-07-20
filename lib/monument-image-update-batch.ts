// Monument Image Update Batch - Replacing specific monument images
// Based on user-provided Unsplash URLs

export interface MonumentImageUpdate {
  id: string
  name: string
  unsplashPageUrl: string
  unsplashImageUrl: string
  photographer: string
  photographerUrl: string
  imageSource: string
}

export const IMAGE_UPDATE_BATCH: MonumentImageUpdate[] = [
  {
    id: "9",
    name: "Christ the Redeemer",
    unsplashPageUrl: "https://unsplash.com/photos/christ-the-redeemer-brazil-OkiDIla7K8Q",
    unsplashImageUrl:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    photographer: "Raphael Nogueira",
    photographerUrl: "https://unsplash.com/@phaelnogueira",
    imageSource: "Unsplash",
  },
  {
    id: "10",
    name: "Sydney Opera House",
    unsplashPageUrl: "https://unsplash.com/photos/a-large-building-with-a-city-in-the-background-iCogON6wlOE",
    unsplashImageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    photographer: "Dan Freeman",
    photographerUrl: "https://unsplash.com/@danfreemanphoto",
    imageSource: "Unsplash",
  },
  {
    id: "12",
    name: "Petra",
    unsplashPageUrl: "https://unsplash.com/photos/a-group-of-people-standing-in-front-of-a-building-6Qv1GlVV85U",
    unsplashImageUrl:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    photographer: "Reiseuhu",
    photographerUrl: "https://unsplash.com/@reiseuhu",
    imageSource: "Unsplash",
  },
  {
    id: "13",
    name: "Mount Rushmore",
    unsplashPageUrl: "https://unsplash.com/photos/mount-ruhsmore-9_onxRgAmRA",
    unsplashImageUrl:
      "https://images.unsplash.com/photo-1620760585200-0bc41d637a84?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    photographer: "Andrew Ling",
    photographerUrl: "https://unsplash.com/@linginit",
    imageSource: "Unsplash",
  },
  {
    id: "14",
    name: "Angkor Wat",
    unsplashPageUrl:
      "https://unsplash.com/photos/people-walking-on-park-near-trees-and-building-during-daytime-gt3gK_Wob2g",
    unsplashImageUrl:
      "https://images.unsplash.com/photo-1599283799013-45494b9d37d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    photographer: "allPhoto Bangkok",
    photographerUrl: "https://unsplash.com/@allphotobangkok",
    imageSource: "Unsplash",
  },
  {
    id: "17",
    name: "Golden Gate Bridge",
    unsplashPageUrl: "https://unsplash.com/photos/golden-gate-bridge-during-daytime-gZXx8lKAb7Y",
    unsplashImageUrl:
      "https://images.unsplash.com/photo-1439396087961-98bc12c21176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    photographer: "Lili Popper",
    photographerUrl: "https://unsplash.com/@lili_popper",
    imageSource: "Unsplash",
  },
  {
    id: "18",
    name: "Tower Bridge",
    unsplashPageUrl:
      "https://plus.unsplash.com/premium_photo-1682799116921-de130f76c1d0?q=80&w=3544&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    unsplashImageUrl:
      "https://images.unsplash.com/photo-1720395866640-92d424664e3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    photographer: "Said Camlica",
    photographerUrl: "https://unsplash.com/@saidyigitcamlica",
    imageSource: "Unsplash",
  },
]

export default IMAGE_UPDATE_BATCH
