import type { AnnotateImageRequest, AnnotateImageResponse } from "./types";

const API_KEY = process.env.GOOGLEAPIS_VISION_API_KEY ?? "";

const imagesAnnotate = async (image: string) => {
  const response = await fetch(
    `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        requests: [
          {
            image: image.match(/^(gs:\/\/|https?:\/\/)/)
              ? {
                  source: {
                    imageUri: image,
                  },
                }
              : {
                  content: image,
                },
            features: [
              {
                type: "TEXT_DETECTION",
              },
            ],
            imageContext: {
              textDetectionParams: {
                enableTextDetectionConfidenceScore: true,
              },
            },
          } as AnnotateImageRequest,
        ],
      }),
    }
  );

  return (await response.json()) as AnnotateImageResponse;
};

export const vision = {
  imagesAnnotate,
};
