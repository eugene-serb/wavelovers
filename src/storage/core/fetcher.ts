import type { CommonStorageModel } from './types';

function get<T>(store: CommonStorageModel<T>): T {
  const dto = localStorage.getItem(store.id);
  return store.deserializer(dto);
}

function set<T>(data: T, store: CommonStorageModel<T>): void {
  localStorage.setItem(store.id, store.serializer(data));
}

function remove<T>(store: CommonStorageModel<T>): void {
  localStorage.removeItem(store.id);
}

function clear(): void {
  localStorage.clear();
}

const fetcher = {
  get,
  set,
  remove,
  clear,
};

export default fetcher;
