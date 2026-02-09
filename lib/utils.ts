import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Ye function Tailwind classes ko merge karta hai aur 
 * conflicts (jaise 'p-4' vs 'p-2') ko smartly handle karta hai.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}