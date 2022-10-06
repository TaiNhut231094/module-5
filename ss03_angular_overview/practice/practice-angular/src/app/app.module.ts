import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontSizeEditorComponent} from './font-size-editor/font-size-editor.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PetComponent} from './pet/pet.component';
import {NameCardComponent} from './name-card/name-card.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {TimelinesComponent} from './timelines/timelines.component';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {DateUtilService} from './service/date-util.service';
import {ProductService} from './product/product.service';
import {SongService} from './service/song.service';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import {TodoModule} from './todo/todo.module';
import {ImageGalleryModule} from './image-gallery/image-gallery.module';
import {ImageGalleryComponent} from './image-gallery/image-gallery.component';
import {GalleryConfig} from './image-gallery/token';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    PetComponent,
    NameCardComponent,
    ProgressBarComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    ImageGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TodoModule,
    HttpClientModule,
    ImageGalleryModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-right',
      progressBar: true,
      tapToDismiss: true
    })
  ],
  providers: [DateUtilService,
    ProductService,
    SongService,
    {provide: GalleryConfig, useValue: 3}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
