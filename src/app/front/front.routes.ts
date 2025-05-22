import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { FrontLayoutComponent } from "./layout/front-layout/front-layout.component";


const frontRoute: Routes = [
    {path:'',
    component: FrontLayoutComponent,
    children:[
        {path:'',
         component: HomePageComponent,
        }
    ]
    }
];

export default frontRoute;
