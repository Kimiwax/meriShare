import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { PantallaCrearGruposPage } from '../pantalla-crear-grupos/pantalla-crear-grupos.page';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
notes:any = [];
  constructor(private modalCtrl:ModalController, private dataService:DataService, private alertCtrl:AlertController) {
    this.dataService.getNotes().subscribe(res => {
      console.log(res);
      this.notes = res;
    })
  }

  openNote(a:any){

  }

  async addNote(){
const alert = await this.alertCtrl.create({
header: 'Add Note',
inputs: [{
  name: 'title',
  placeholder: 'Cool note',
  type: 'text'
},
{
  name: 'text',
  placeholder: 'Learn',
  type: 'textarea'
}],
buttons: [
  {
    text: 'Cancel',
    role: 'cancel'
  },
  {
    text:'Add',
    handler: (res) => {
      this.dataService.addNote({title: res.title, text: res.text})
    }
  }
]
});
await alert.present();
  }
  async openModal(){
    const modal = await this.modalCtrl.create({
      component: PantallaCrearGruposPage
    });
    modal.present();
  }

}
