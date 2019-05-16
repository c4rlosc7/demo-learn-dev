import {
    MatToolbarModule,
    MatIconModule,
    MatInputModule
} from '@angular/material';

const modules = [
    MatToolbarModule,
    MatIconModule,
    MatInputModule
];

import {  } from '@angular/material/icon';

import { NgModule } from '@angular/core';

@NgModule({
    imports: [modules],
    exports: [modules]
})

export class MaterialModule { }
