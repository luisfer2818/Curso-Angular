import { Input, Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html'
})

export class FotoComponent {
    @Input() url: String;
    @Input() titulo: String;
}