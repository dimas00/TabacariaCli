import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProdutoModule } from "./components/produtos/produto.module";

const routes: Routes = [
    {path: '', component: HomeComponent},
];

@NgModule({
    declarations:[],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}