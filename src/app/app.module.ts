import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MaterialModule,
  MdAutocompleteModule,
  MdButtonModule, MdButtonToggleModule, MdCardModule, MdCheckboxModule, MdChipsModule, MdCoreModule, MdDatepickerModule,
  MdDialogModule, MdExpansionModule, MdGridListModule, MdIconModule,
  MdInputModule,
  MdListModule, MdMenuModule, MdNativeDateModule, MdPaginatorModule, MdProgressBarModule, MdProgressSpinnerModule,
  MdRadioModule, MdRippleModule, MdSelectModule, MdSidenavModule, MdSliderModule, MdSlideToggleModule, MdSnackBarModule,
  MdSortModule, MdTableModule, MdTabsModule, MdToolbarModule, MdTooltipModule
} from '@angular/material';
import 'hammerjs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {EmojiPickerModule} from 'ng-emoji-picker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    EmojiPickerModule,
    MdChipsModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdNativeDateModule,
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
