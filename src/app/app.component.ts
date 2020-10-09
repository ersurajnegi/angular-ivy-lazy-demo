import {
  Component,
  ComponentFactoryResolver,
  TemplateRef,
  VERSION,
  ViewChild,
  ViewContainerRef
} from "@angular/core";

import { LazyComponent } from "./lazy/lazy.component";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  @ViewChild(TemplateRef, { read: ViewContainerRef })
  private templateViewContainerRef: ViewContainerRef;

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver
  ) {}

  load() {
    this.templateViewContainerRef.clear();
    import("./lazy/lazy.component").then(({ LazyComponent }) => {
      const component = this.componentFactoryResolver.resolveComponentFactory(
        LazyComponent
      );
      const componentRef = this.templateViewContainerRef.createComponent(
        component
      );
      componentRef.instance.test = "Dynamically loaded"
    });
  }
}
