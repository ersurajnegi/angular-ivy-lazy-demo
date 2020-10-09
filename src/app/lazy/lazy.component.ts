import { Component, Input } from "@angular/core";

@Component({
  selector: "my-lazy",
  template: "Hi from Lazy Component with value {{test}}"
})
export class LazyComponent {
  @Input()
  test: any = "static Load";
}
