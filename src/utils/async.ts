/**
 * Сделать паузу на n-ое количество миллисекунд.
 *
 * @param ms - Количество миллисекунд, на которые нужно сделать паузу.
 * @returns Промис с таймаутом.
 */
export function sleep(ms: number): Promise<number> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
