import 'zone.js/dist/zone';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

type OptionalValue<T> =
  | { value: T; hasValue: true }
  | { hasValue: false; value: undefined };

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.template.html',
})
export class App {
  protected nullableSignal = signal<string | null>('this');

  get nullableSignalValue() {
    return this.nullableSignal();
  }

  protected moreComplexSignal = signal<OptionalValue<string>>({
    hasValue: true,
    value: 'works',
  });

  get moreComplexSignalValue() {
    return this.moreComplexSignal();
  }
}

bootstrapApplication(App);
