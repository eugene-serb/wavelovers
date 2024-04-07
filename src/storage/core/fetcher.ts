import type { CommonStorageModel, Fetcher } from './types';

/**
 * Извлечь данные.
 *
 * @template T - Модель данных.
 * @param store - Модель данных хранилища.
 * @returns Данные.
 */
function get<T>(store: CommonStorageModel<T>): T {
  const dto = localStorage.getItem(store.id);
  return store.deserializer(dto);
}

/**
 * Записать данные.
 *
 * @template T - Модель данных.
 * @param data - Данные.
 * @param store - Модель данных хранилища.
 */
function set<T>(data: T, store: CommonStorageModel<T>): void {
  localStorage.setItem(store.id, store.serializer(data));
}

/**
 * Удалить данные.
 *
 * @template T - Модель данных.
 * @param store - Модель данных хранилища.
 */
function remove<T>(store: CommonStorageModel<T>): void {
  localStorage.removeItem(store.id);
}

/**
 * Очистить всё хранилище.
 */
function clear(): void {
  localStorage.clear();
}

/**
 * Fetcher слоя storage.
 */
const fetcher: Fetcher = {
  get,
  set,
  remove,
  clear,
};

export default fetcher;
