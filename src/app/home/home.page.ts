import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProjectsPage } from '../projects/projects.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}
  
  goToProjects() {
    this.navCtrl.navigateForward('/projects')
  }

}
