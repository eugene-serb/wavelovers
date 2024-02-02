/**
 * Общий интерфейс модели данных хранилища. 
 */
export interface CommonStorageModel<T> {
  /**
   * Идентификатор хранилища. Служит ключом при записи данных.
   */
  id: string;
  /**
   * Сериализатор данных.
   * 
   * @param data Данные.
   * @returns DTO
   */
  serializer: (data: T) => string;
  /**
   * Десериализатор данных.
   * 
   * @param dto Транспортный объект данных.
   * @returns Данные.
   */
  deserializer: (dto: string | null) => T;
}

/**
 * Общий интерфейс контроллера хранилища данных.
 */
export interface CommonStorageController<T> {
  /**
   * Извлечь данные.
   * 
   * @returns Данные.
   */
  get: () => T;
  /**
   * Записать данные.
   * 
   * @param data Данные.
   */
  set: (data: T) => void;
  /**
   * Удалить данные.
   */
  remove: () => void;
}

/**
 * Fetcher слоя storage, с которым работают контроллеры.
 */
export interface Fetcher {
  /**
   * Извлечь данные.
   * 
   * @param store Модель данных хранилища.
   * @returns Данные.
   */
  get: <T>(store: CommonStorageModel<T>) => T,
  /**
   * Записать данные.
   * 
   * @param data Данные.
   * @param store Модель данных хранилища.
   */
  set: <T>(data: T, store: CommonStorageModel<T>) => void,
  /**
   * Удалить данные.
   * 
   * @param store Модель данных хранилища.
   */
  remove: <T>(store: CommonStorageModel<T>) => void,
  /**
   * Очистить всё хранилище.
   */
  clear: () => void,
}
