import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {

  @Input() appHighlightColor!: string; // Input property to specify highlight color

  // Bind the 'style.backgroundColor' property of the host element to 'appHighlightColor'


  //lets you setproperties on the element or component that host the directive,
  @HostBinding('style.backgroundColor') backgroundColor!: string;

  constructor() {}

  ngOnChanges() {
    alert('ngonchange')
    // Update the background color based on the 'appHighlightColor' input

    // ngonchange is called when a value bound to an Input has changed 
    // ,so you can run custom code when an input has changed
    this.backgroundColor = this.appHighlightColor;
  }

}
