import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
listgrid = new Users('','','','','','')
gridlist:Users[]=[]
searchUser:any;

  constructor(private listview: UsersService) { }

  ngOnInit(): void {
    this.listview.allUsers().subscribe((data=>{
      this.gridlist = data;
    }))
  }

  search(){
    if(this.searchUser == ''){
      this.ngOnInit();
    }else{
      this.gridlist = this.gridlist.filter(res=>{
       return res.firstname.toLocaleLowerCase().match(this.searchUser.toLocaleLowerCase())
       
      })
    }
    }
}
