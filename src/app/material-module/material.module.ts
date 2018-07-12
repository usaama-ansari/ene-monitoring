import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import {
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatListModule
} from '@angular/material';


@NgModule({
    imports: [
        MatSnackBarModule,
        MatSidenavModule,
        MatSelectModule,
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatListModule
    ],
    exports: [
        MatSnackBarModule,
        MatSidenavModule,
        MatSelectModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatListModule
    ]
})


export class MaterialModule {

}