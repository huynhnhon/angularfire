import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  editState: boolean = false;
  updateUser: User[];

  user: User = {
    name: '',
    create_at: Date.now()
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  onSubmit() {
    if (this.user.name !== '') {
      // alert('submit')
      this.userService.addUser(this.user);
      this.user.name = '';
    }
  }

  delUser(event, user: User) {
    const accept = confirm('Delete Collection?');
    if (accept === true) {
      this.userService.deleteUser(user);
    }
  }

  editUser(event, User) {
    this.editState = true;
    this.updateUser = User;
  }

  collapse() {
    this.editState = false;
    console.log(this.editState);
    this.updateUser = null;
  }

  update(user: User) {
    this.userService.update(user);
    this.collapse();
  }

}
