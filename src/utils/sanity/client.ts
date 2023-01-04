import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";


type SourceType = {
    source: object;
};

export const client = SanityClient({
  projectId: import.meta.env.VITE_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: import.meta.env.VITE_APP_SANITY_TOKEN,
});

const ImageURLBuilder = ImageUrlBuilder(client);

export const urlFor = (source: object) => ImageURLBuilder.image(source)

