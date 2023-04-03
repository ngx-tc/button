# About

@ngx-tc/button is an Angular library that provides developers with the ability to easily create buttons in their applications. The library is designed to be easy to use and customizable, allowing developers to quickly and easily create buttons that fit their specific needs.

The library includes a number of pre-built button templates, which can be easily customized to fit the specific requirements of your application. These templates include standard button types such as primary, accent, success, info, warning, and error, as well as more complex templates such as toggle buttons and icon buttons.

The library is built using Angular. It is designed to be lightweight and easy to use, with minimal setup required to get started. Overall, @ngx-tc/button is a powerful and flexible library that provides developers with the tools they need to create effective and customizable buttons for their Angular applications.

## Usage

Install `@ngx-tc/button` in your project:

```
npm install @ngx-tc/button
```

Import `TcButtonModule` e.g. in your `app.module.ts`:
```typescript
import { TcButtonModule } from '@ngx-tc/button';

@NgModule({
  imports: [
    ...
    TcButtonModule
  ],
})
export class AppModule {}
```

Use the `[tc-button]` directive in you app:
```html
<button tc-button>
  Button
</button>
```

## Demo
To view a working demo of the library in action, please follow the provided link. The demo will allow you to explore the various components and features included in this library and see how they can be used in your Angular applications.
[http://tc-library.type-code.pro/#/components/buttons](http://tc-library.type-code.pro/#/components/buttons)
