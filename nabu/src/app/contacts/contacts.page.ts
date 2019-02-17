import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SendPage } from '../send/send.page';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  showSend() {
  	this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SendPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

}
