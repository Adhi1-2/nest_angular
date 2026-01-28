import { Routes } from '@angular/router';
import { About } from './Ui/about/about';
import { Service } from './Ui/service/service';
import { Contact } from './Ui/contact/contact';
import { Home } from './Ui/home/home';
import { Product } from './Ui/product/product';
import { Cyber } from './Ui/cyber/cyber';
import { Devops } from './Ui/devops/devops';
import { Gis } from './Ui/gis/gis';
import { Data } from './Ui/data/data';
import { Singleview } from './Ui/singleview/singleview';
import { Cloud } from './Ui/cloud/cloud';

export const routes: Routes = [
  {path: 'about', component:About},
  {path: 'services', component:Service},
  {path: 'contact', component:Contact },
  {path: 'home', component:Home},
  {path: 'product', component:Product},
  {path: 'cyber', component:Cyber},
  {path: 'devops', component:Devops},
  {path: 'gis', component:Gis},
  {path: 'data', component:Data},
  {path: '', component:Home},
  {path: 'singleview-list/:titleid', component:Singleview},
  {path: 'cloud', component:Cloud}
];
