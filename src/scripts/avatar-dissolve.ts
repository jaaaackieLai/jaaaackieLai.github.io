const canvas = document.querySelector('.avatar-canvas') as HTMLCanvasElement | null;
if (canvas) {
  const ctx = canvas.getContext('2d')!;
  const SIZE    = 180;
  const BLOCK   = 16;
  const COLS    = Math.ceil(SIZE / BLOCK);
  const ROWS    = Math.ceil(SIZE / BLOCK);
  const HOLD_MS = 10000;
  const SPEED   = 4;

  canvas.width  = SIZE;
  canvas.height = SIZE;

  function makeOffscreen(img: HTMLImageElement, pixelated: boolean): HTMLCanvasElement {
    const oc  = document.createElement('canvas');
    oc.width  = SIZE;
    oc.height = SIZE;
    const oc_ctx                 = oc.getContext('2d')!;
    oc_ctx.imageSmoothingEnabled = !pixelated;
    oc_ctx.drawImage(img, 0, 0, SIZE, SIZE);
    return oc;
  }

  function shuffle<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function dissolve(dest: HTMLCanvasElement, onDone: () => void) {
    const blocks: { x: number; y: number }[] = [];
    for (let r = 0; r < ROWS; r++)
      for (let c = 0; c < COLS; c++)
        blocks.push({ x: c * BLOCK, y: r * BLOCK });
    shuffle(blocks);

    let idx = 0;
    function frame() {
      for (let i = 0; i < SPEED && idx < blocks.length; i++, idx++) {
        const { x, y } = blocks[idx];
        ctx.drawImage(dest, x, y, BLOCK, BLOCK, x, y, BLOCK, BLOCK);
      }
      idx < blocks.length ? requestAnimationFrame(frame) : onDone();
    }
    requestAnimationFrame(frame);
  }

  const imgReal  = new Image();
  const imgPixel = new Image();
  imgReal.src    = '/avatar.jpg';
  imgPixel.src   = '/avatar-awkward-pixel.png';

  Promise.all([imgReal, imgPixel].map(
    img => new Promise<void>(r => { img.complete ? r() : (img.onload = () => r()); })
  )).then(() => {
    const offReal    = makeOffscreen(imgReal,  false);
    const offPixel   = makeOffscreen(imgPixel, true);
    let current      = 0;
    const offscreens = [offReal, offPixel];

    ctx.drawImage(offReal, 0, 0);

    function cycle() {
      setTimeout(() => {
        const next = 1 - current;
        dissolve(offscreens[next], () => {
          current = next;
          cycle();
        });
      }, HOLD_MS);
    }

    cycle();
  });
}
