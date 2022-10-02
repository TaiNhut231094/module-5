import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PetComponent} from './pet/pet.component';
import {FontSizeEditorComponent} from './font-size-editor/font-size-editor.component';
import {NameCardComponent} from './name-card/name-card.component';
import {TimelinesComponent} from './timelines/timelines.component';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';

const routes: Routes = [
  {path: 'todo', loadChildren: () => import('./todo/todo.module').then(module => module.TodoModule)},
  {
    path: 'pet',
    component: PetComponent
  },
  {
    path: 'font-size-editor',
    component: FontSizeEditorComponent
  },
  {
    path: 'name-card',
    component: NameCardComponent
  },
  {
    path: 'timelines',
    component: TimelinesComponent
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
