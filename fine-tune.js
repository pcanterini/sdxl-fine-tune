import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const training = await replicate.trainings.create(
  "stability-ai",
  "sdxl",
  "39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
  {
    destination: "pcanterini/bruno-sdxl-fine-tune",
    input: {
      // input_images: "http://hip.dev.sfo2.digitaloceanspaces.com/Archive.zip",
      input_images: "https://utfs.io/f/9ec0afe1-a449-40e8-95c8-89fcfd71926e-f5ovxe.zip",
      mask_target_prompts: "photo of a dog",
    },
  }
);

console.dir(training);