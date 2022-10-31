import { Component, Input } from "@angular/core";

@Component({
    selector: 'tb-produto',
    templateUrl: 'produto.component.html'
})
export class ProdutoComponent {
    @Input() descricao: string
}