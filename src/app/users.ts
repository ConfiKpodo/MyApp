export class Users {
    
    id: any;
    firstname: any;
    lastname: any;
    username: any;
    avatar: any;
    project: any;
    constructor(id,firstname,lastname,username,avatar, project){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.avatar = avatar;
        this.project = project;
    }
}