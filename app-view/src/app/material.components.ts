import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule],
    exports: [MatButtonModule, MatCheckboxModule],
})
export class MaterialModule { }