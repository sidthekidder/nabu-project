import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import QRCode from 'qrcode';
import { DataService } from '../data.service';

import Web3 from 'web3';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  web3: any
  userAccount: any
  QRCode = ''
  inputAddr = ''
  userBalance = ''

  constructor(private cd: ChangeDetectorRef, public dataService: DataService) { 
	this.web3 = new Web3('https://sokol.poa.network')
  }

  displayQrCode() {
	return this.QRCode !== ''
  }

  ngOnInit() {
  }

  fetchBalance() {
  	let that = this

	// Get ERC20 Token contract instance
	let contract = web3.eth.contract(this.dataService.minABI).at(this.dataService.tokenAddress);

    contract.studentMapping.call(this.inputAddr, (error, result) => { 
        console.log(error)
        console.log("Address = ")
        console.log(result)

		// Call balanceOf function
		contract.balanceOf(result, (error, balance) => {

			contract.decimals((error, decimals) => {

				balance = balance.div(decimals/10);
				console.log("Old balance: " + that.userBalance)
				that.userBalance = balance.toString()
				that.dataService.userBalance = that.userBalance
				that.dataService.userAddr = result
				that.cd.detectChanges();
				console.log("New balance: " + that.userBalance)
				console.log("Balance = " + balance.toString());
			});
		});
		this.process()
    });
  }

  process() {
	const qrcode = QRCode
	const that = this

	qrcode.toDataURL(this.inputAddr, { errorCorrectionLevel: 'H' }, function (err, url) {
	  that.QRCode = url
	})
  }
}
