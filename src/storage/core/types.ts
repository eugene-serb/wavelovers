export interface CommonStorageModel<T> {
  id: string;
  serializer: (object: T) => string;
  deserializer: (raw: string | null) => T;
}

export interface CommonStorageController<T> {
  get: () => T;
  set: (data: T) => void;
  remove: () => void;
};
