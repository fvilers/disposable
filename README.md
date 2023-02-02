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

# ECMAScript module

Starting with version 2.0.0, this library will be published as an ECMAScript module.

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
