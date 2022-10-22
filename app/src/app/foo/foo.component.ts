import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-foo',
    template: '{{bar}}',
})
export class FooComponent {
    @Input() bar: string = '';
}