import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { StoryBoardContainerComponent } from './story-board-container/story-board-container.component';
import { StoryBoardListComponent } from './story-board-list/story-board-list.component';

const routes: Routes = [
  { path: 'story/:idStory', component: StoryBoardContainerComponent },
  { path: 'stories', component: StoryBoardListComponent },
  {path:'login',component:LoginComponent},
  { path: '', component: HomepageComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
