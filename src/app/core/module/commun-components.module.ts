import { PopOverInfoComponent } from './../../module/popOver/components/pop-over-info/pop-over-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, PopOverInfoComponent],
  imports: [
    CommonModule,
    IonicModule
  ], exports: [HeaderComponent, FooterComponent, PopOverInfoComponent]
})
export class CommunComponentsModule { }
