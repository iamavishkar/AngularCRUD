import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableAddComponent } from './components/table-add/table-add.component';
import { TableEditComponent } from './components/table-edit/table-edit.component';
import { TableListComponent } from './components/table-list/table-list.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: TableListComponent
  },
  {
    path: "edit",
    pathMatch: "full",
    component: TableEditComponent
  },
  {
    path: "add",
    pathMatch: "full",
    component: TableAddComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
