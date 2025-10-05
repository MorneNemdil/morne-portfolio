import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isNullOrEmpty(value: string | null | undefined): boolean {
  return value === null || value === undefined || value === "";
}