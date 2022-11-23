import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private auth: AuthService) {}



  ngOnInit(): void {
  }
}
