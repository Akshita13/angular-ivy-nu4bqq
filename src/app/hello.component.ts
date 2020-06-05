import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<div>{{value}}</div>`,
  styles: [
    `div {height: 30px; width: 30px; background-color: skyblue; float: left; margin: 0 4px 4px 0; color: black;}`
  ]
})
export class HelloComponent  {
  @Input() value: string;

  @Output('userClick') click = new EventEmitter<string>();

  @HostListener('click')
  clickHandler() {
    this.click.emit('');
  }
}
