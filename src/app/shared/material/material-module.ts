import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CdkTreeModule} from '@angular/cdk/tree';
// import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
// import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
// import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
// import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatGridListModule } from '@angular/material/grid-list'
// import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
// import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatStepperModule } from '@angular/material/stepper';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator'
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule
  ]
})
export class MaterialModule { }
