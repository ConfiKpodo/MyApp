import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

projData = new Users('','','','','','');
fetchedPro:any;
searchProject:any;
  constructor(private projservice : UsersService) { }

  ngOnInit(): void {
    this.projservice.allUsers().subscribe((data=>{
      this.fetchedPro = data;
    }))
  }
  deletePerson(id) {
    this.projservice.DelUser(id).subscribe((data=>{
      alert('Project and user info deleted')
      
    }))
    }

    searchProj(){
      if(this.searchProject == ''){
        this.ngOnInit()
      }else{
        this.fetchedPro = this.fetchedPro.filter(res=>{
          return res.firstname.toLocaleLowerCase().match(this.searchProject.toLocaleLowerCase())
         })
      }
    }
}
