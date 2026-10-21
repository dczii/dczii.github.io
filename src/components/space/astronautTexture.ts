import * as THREE from "three";

function knockOutBlackBackground(imageData: ImageData) {
  const { data, width, height } = imageData;
  const count = width * height;
  const background = new Uint8Array(count);
  const queue = new Int32Array(count);
  let head = 0;
  let tail = 0;

  const isBackground = (index: number) => {
    const offset = index * 4;
    return data[offset] < 16 && data[offset + 1] < 16 && data[offset + 2] < 16;
  };

  const push = (index: number) => {
    if (index < 0 || index >= count || background[index] || !isBackground(index)) return;
    background[index] = 1;
    queue[tail] = index;
    tail += 1;
  };

  for (let x = 0; x < width; x += 1) {
    push(x);
    push((height - 1) * width + x);
  }
  for (let y = 0; y < height; y += 1) {
    push(y * width);
    push(y * width + width - 1);
  }

  while (head < tail) {
    const index = queue[head];
    head += 1;
    const x = index % width;
    const y = (index - x) / width;
    if (x > 0) push(index - 1);
    if (x + 1 < width) push(index + 1);
    if (y > 0) push(index - width);
    if (y + 1 < height) push(index + width);
  }

  for (let index = 0; index < count; index += 1) {
    if (background[index]) data[index * 4 + 3] = 0;
  }

  const alpha = new Uint8Array(count);
  for (let index = 0; index < count; index += 1) alpha[index] = data[index * 4 + 3];

  for (let y = 1; y < height - 1; y += 1) {
    for (let x = 1; x < width - 1; x += 1) {
      const index = y * width + x;
      if (alpha[index] === 0) continue;
      const touchesHole =
        alpha[index - 1] === 0 ||
        alpha[index + 1] === 0 ||
        alpha[index - width] === 0 ||
        alpha[index + width] === 0;
      if (!touchesHole) continue;
      const offset = index * 4;
      const max = Math.max(data[offset], data[offset + 1], data[offset + 2]);
      data[offset + 3] = max < 28 ? 0 : 180;
    }
  }
}

export function loadAstronautTexture(size: number) {
  return new Promise<THREE.Texture>((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const context = canvas.getContext("2d", { willReadFrequently: true });
      if (!context) {
        reject(new Error("2d context unavailable"));
        return;
      }
      context.drawImage(image, 0, 0, size, size);
      const imageData = context.getImageData(0, 0, size, size);
      knockOutBlackBackground(imageData);
      context.putImageData(imageData, 0, 0);
      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.needsUpdate = true;
      resolve(texture);
    };
    image.onerror = () => reject(new Error("astronaut image failed"));
    image.src = "/astronaut.webp";
  });
}
