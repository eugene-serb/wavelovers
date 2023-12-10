/**
 * Сделать паузу на n-ое количество миллисекунд.
 *
 * @param {number} ms Количество миллисекунд, на которые нужно сделать паузу.
 * @returns {Promise<number>}
 */
export function sleep(ms: number): Promise<number> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
