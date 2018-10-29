import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imageURI:any;
  imageFileName:any;
  imageContent:any;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController) {}

  getImage(evt) {
    //debugger
    console.log(evt.target.files);
    this.imageFileName = '';

    if (evt.target.files && evt.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (e) => {

        this.imageContent=reader.result;
      };

      reader.readAsDataURL(evt.target.files[0]);
    }

    this.presentToast("utaq");
  }

  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();

  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}

