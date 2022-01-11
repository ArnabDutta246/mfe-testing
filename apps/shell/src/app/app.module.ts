import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent,
        },
        {
          path: 'gallery',
          loadChildren: () =>
            import('gallery/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'contact',
          loadChildren: () =>
            import('contact/Module').then((m) => m.RemoteEntryModuleContact),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
