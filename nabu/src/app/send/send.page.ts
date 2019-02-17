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
  pk = ''
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
  	console.log(that.dataService.tokenAddress)
  	
	// Get ERC20 Token contract instance
	let contract = web3.eth.contract(that.dataService.minABI).at(that.dataService.tokenAddress);

	this.changeState(1)
	contract.transfer('0x8E64EB49743BCf728058a7bb9FE1FceD9803f0d4', this.amount).send({
	    from: that.dataService.userAddr,
	    gas: 29152,
	    gasPrice: 1000000000
	}, (err, res) => { console.log(err); console.log(res) });
  }

  exit() {
  	this.modalCtrl.dismiss();
  }

}
