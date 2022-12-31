export interface Disposable {
  dispose(): void;
}

type ResourceBlockCallback<T extends Disposable> = (resource: T) => void;

export function using<T extends Disposable>(
  resource: T,
  callback: ResourceBlockCallback<T>
) {
  try {
    callback(resource);
  } finally {
    resource.dispose();
  }
}
