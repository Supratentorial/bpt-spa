/**
 * Created by blake on 24/03/2017.
 */

import {NgModule} from '@angular/core';
import {SettingsShellComponent} from './settings-shell/settings-shell.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [SharedModule, RouterModule, CommonModule],
  declarations: [SettingsShellComponent]
})

export class SettingsModule {
}
