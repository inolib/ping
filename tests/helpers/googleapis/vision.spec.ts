import { expect, it } from "@jest/globals";

import { vision } from "../../../src/helpers/googleapis/vision";

it("should return", async () => {
  const data = await vision.imagesAnnotate(
    "https://tesseract.projectnaptha.com/img/eng_bw.png"
  );

  console.log(data);

  expect("").toBe("");
});
