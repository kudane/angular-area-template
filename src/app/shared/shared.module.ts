import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingComponent } from './components';
import { HighlightDirective, InnerHtmlDirective } from './directives';
import { ExponentialStrengthPipe } from './pipes';

const pipes = [
  ExponentialStrengthPipe
];

const components = [
  LoadingComponent
];

const directives = [
  HighlightDirective,
  InnerHtmlDirective
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...components, ...pipes, ...directives],
  exports: [...components, ...pipes, ...directives],
})
export class SharedModule { }
