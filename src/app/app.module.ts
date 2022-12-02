import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import {ShareIconsModule} from 'ngx-sharebuttons/icons';
import {HttpClientModule} from '@angular/common/http';
import {OAuthModule} from 'angular-oauth2-oidc';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { StoryBoardListComponent } from './story-board-list/story-board-list.component';
import { MapListUsersComponent } from './map-list-users/map-list-users.component';
import { RulesComponent } from './rules/rules.component';
import { BannerComponent } from './banner/banner.component';
import { PlayTheGameComponent } from './play-the-game/play-the-game.component';
import { ParcelStoryEditComponent } from './parcel-story-edit/parcel-story-edit.component';
import { ParcelStoryComponent } from './parcel-story/parcel-story.component';
import { StoryBoardContainerComponent } from './story-board-container/story-board-container.component';
import { UsersAndMapBtnComponent } from './users-and-map-btn/users-and-map-btn.component';
import { CardStoryComponent } from './card-story/card-story.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ParcelStoryEditModalComponent } from './parcel-story-edit-modal/parcel-story-edit-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialNetworkComponent } from './social-network/social-network.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    StoryBoardListComponent,
    MapListUsersComponent,
    RulesComponent,
    BannerComponent,
    PlayTheGameComponent,
    ParcelStoryEditComponent,
    ParcelStoryComponent,
    StoryBoardContainerComponent,
    UsersAndMapBtnComponent,
    CardStoryComponent,
    ParcelStoryEditModalComponent,
    SocialNetworkComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ShareButtonsModule.withConfig(
      {
        debug:true
      }
    ),
    ShareIconsModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
