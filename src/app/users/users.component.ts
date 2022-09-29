import { Component, OnInit, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { zipAll } from 'rxjs';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 userDetail:Users[]=[]
 searchUser: any;
 userModel = new Users 
 ('','','','','https://robohash.org/quiquisquammaiores.png?size=50x50&set=set1','Biotechnology Biological Products (No Diagnostic Substances)')

  constructor( private userservice : UsersService) { }
  ngOnInit(): void {

     this.userservice.allUsers().subscribe((data=>{
      this.userDetail = data;
    }))
}
addUser(){
  this.userservice.addPerson(this.userModel)
    .subscribe(data => {
      alert('user added')
      this.userModel.firstname=''
      this.userModel.lastname = ''
      this.userModel.username = ''

    })      
}

deletePerson(id){
  this.userservice.DelUser(id).subscribe((data=>{
    alert('User with deleted')
  }))
}

search(){
if(this.searchUser == ''){
  this.ngOnInit();
}else{
  this.userDetail = this.userDetail.filter(res=>{
   return res.firstname.toLocaleLowerCase().match(this.searchUser.toLocaleLowerCase())
  })
}
}

}
