import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const output = await replicate.run(
  "pcanterini/bruno-sdxl-fine-tune:6c3e2bcdfd7f9da57f126855f944da287b818f9e35d3efe55059e73b587aa15b",
  {
    input: {
      seed: 1234,
      width: 1024,
      height: 1024,
      prompt: "A TOK dog in a pool chasing a ball",
      refine: "expert_ensemble_refiner",
      scheduler: "K_EULER",
      lora_scale: 0.8,
      num_outputs: 1,
      guidance_scale: 7.5,
      apply_watermark: true,
      high_noise_frac: 0.95,
      negative_prompt: "",
      prompt_strength: 0.8,
      num_inference_steps: 50
    }
  }
);

console.log(output);