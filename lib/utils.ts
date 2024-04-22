import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const hslToRgb = (
  h: number,
  s: number,
  l: number,
): [number, number, number] => {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [
    Math.trunc(255 * f(0)),
    Math.trunc(255 * f(8)),
    Math.trunc(255 * f(4)),
  ];
};

const rgbToHex = (r: number, g: number, b: number) =>
  ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

const hslToHex = (h: number, s: number, l: number) =>
  rgbToHex(...hslToRgb(h, s, l));

export const randomHexColor = (seed?: string) => {
  const hash = seed
    ? seed
        .split('')
        .reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0)
    : Math.floor(Math.random() * 10000);
  const h = Math.abs(hash) % 360;
  const s = Math.floor(100);
  const l = Math.floor(50);
  return hslToHex(h, s, l);
};

export const getRandomAvatarUrl = (seed: string) => {
  // dicebear has a bug, just use the web api
  // const avatar = createAvatar(micah, {
  //   seed,
  //   backgroundColor: [randomHexColor(seed)],
  // });
  // return avatar.toDataUriSync();
  const bg = randomHexColor(seed);

  return `https://api.dicebear.com/8.x/micah/svg?seed=${seed}&backgroundColor=${bg}`;
};
