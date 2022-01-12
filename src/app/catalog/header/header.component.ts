import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userName: string = '';
  constructor(private localStorageService: LocalstorageService) {}

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName() {
    this.userName = this.localStorageService.getLocalData()?.username;
  }
}
