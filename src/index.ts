export interface Disposable {
  dispose(): void;
}

type ResourceBlockCallback<T extends Disposable> = (
  resource: T
) => void | Promise<void>;

export async function using<T extends Disposable>(
  resource: T,
  callback: ResourceBlockCallback<T>
): Promise<void> {
  try {
    await Promise.resolve(callback(resource));
  } finally {
    resource.dispose();
  }
}
