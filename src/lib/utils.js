import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to conditionally join class names together.
 * It merges Tailwind CSS classes without style conflicts.
 *
 * @param {...(string|Object|Array)} inputs - A list of class names.
 * @returns {string} The merged class names.
 *
 * @example
 * // Returns "bg-red-500 text-white p-4"
 * cn("bg-red-500", "text-white", "p-4");
 *
 * @example
 * // Conditionally applies "font-bold" if isActive is true
 * // Returns "text-lg font-bold" or "text-lg"
 * cn("text-lg", { "font-bold": isActive });
 *
 * @example
 * // Merges conflicting classes, the last one wins
 * // Returns "p-4"
 * cn("p-2", "p-4");
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
