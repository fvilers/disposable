# disposable

Provide a mechanism for releasing resources

## Installation

```
npm install @fvilers/disposable
```

or

```
yarn add @fvilers/disposable
```

## Usage

```ts
import { Disposable, using } from "@fvilers/disposable";

class Foo implements Disposable {
  doSomething() {
    console.log("I'm doing something");
  }

  dispose() {
    console.log("I'm now disposed");
  }
}

using(new Foo(), (foo) => {
  foo.doSomething();
});
```

```
Hello, world!
I'm now disposed
```
