import { Routes } from "@angular/router";
import { AuthLayoutComponent } from "./layout/auth-layout/auth-layout.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";

const authRoutes: Routes =[
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            { path: '',
              component: LoginPageComponent,
            },
             { path: '',
              component: RegisterPageComponent,
            },
            {
                path:'**',
                redirectTo: 'login',
            },
       
        ],
    },
    {
        path:'**',
        redirectTo: '',
    }
];

export default authRoutes;
  