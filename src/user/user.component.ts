import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
// export class UserComponent {
//   min = 0;
//   max = DUMMY_USERS.length;
//   number = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

//   /**
//    * As we assigned the user to the selectedUser variable we can use this variable in user.component.html file, if we mark it as private then we can't access in the template file. And default access specifier is public.
//    */
//   selectedUser = signal(DUMMY_USERS[this.number]);

//   /**
//    * This is the format of the getter in angular which is represented with the get keyword which is before to getImagePath.
//    */
//   /**
//    * But when we changed to signals we don't need to explicitly create an new function to compute the value instead we have an compute method in the signal which we can use for computing some value
//    */
//   get getImagePath() {
//     /**
//      * This keyword is to access the instance variables of the class same as java
//      */
//     return 'assets/users/' + this.selectedUser().avatar;
//   }
//   /**
//    * This is same as getImagePath method but this will be computed only on the request basis as it is lazy.
//    */
//   imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

//   onSelectUser() {
//     /**
//      * this will be called on click of the button where we are calling this, so on changing/ re-assigning the selectedUser data in angular zone.js dependency will take care of modifications required in the dom and does the needful.
//      */
//     this.selectedUser.set(
//       DUMMY_USERS[Math.floor(Math.random() * (this.max - this.min) + this.min)]
//     );
//   }
// }
export class UserComponent {
  @Input({ required: true }) id!: String;
  @Input({ required: true }) name!: String;
  @Input({ required: true }) avatar!: String;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {
    this.select.emit(this.id);
  }
}
