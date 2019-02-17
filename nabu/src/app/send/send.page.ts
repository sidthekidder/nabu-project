import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { DataService } from '../data.service';
import Web3 from 'web3';


@Component({
  selector: 'app-send',
  templateUrl: './send.page.html',
  styleUrls: ['./send.page.scss'],
})
export class SendPage implements OnInit {

  // state - 0: show options, 1: sent successfully, 2: send failed
  state: number
  toAddr: any
  web3: any
  amount: any

  constructor(public modalCtrl: ModalController, public dataService: DataService) {
  	this.state = 0
  	this.amount = 0
  	this.web3 = new Web3('https://sokol.poa.network')
  }

  ngOnInit() {
  }

  changeState(state) {
  	this.state = state
  }

  sendTxn() {
  	let that = this
  	console.log("Sending from " + that.dataService.userAddr)
  	this.changeState(1)
	this.web3.eth.sendTransaction({
		// From address will automatically be replaced by the address of current user
		from: that.dataService.userAddr,
		to: '0xE3aDC48955C12262c1aAF2660C9226999857F124',
		value: that.web3.utils.toWei(this.amount.toString(), 'wei')
	});
  }

  exit() {
  	this.modalCtrl.dismiss();
  }

}
