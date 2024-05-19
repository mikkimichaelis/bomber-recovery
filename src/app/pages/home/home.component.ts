import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExternalLinkDirective } from '../../directives/external-link.directive';
import { ArrowBoxIconComponent } from '../../components/icons/arrow-box-icon.component';
import { GithubIconComponent } from '../../components/icons/github-icon.component';
import { TwitterIconComponent } from '../../components/icons/twitter-icon.component';
import { YouTubeIconComponent } from '../../components/icons/youtube-icon.component';
import zoomSdk from "@zoom/appssdk"

const icons = [ArrowBoxIconComponent, GithubIconComponent, TwitterIconComponent, YouTubeIconComponent];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ExternalLinkDirective, ...icons],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: {
    'class': 'content'
  }
})
export class HomeComponent implements OnInit{
  async ngOnInit() {
    const configResponse = await zoomSdk.config({
      popoutSize: {width: 480, height: 360},
      capabilities: ["shareApp"]
    });

    console.log(configResponse);
  }
}
