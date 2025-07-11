// import { Component, ViewChild, ElementRef } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-dashboard',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// // export class DashboardComponent {
// //   task = {
// //     title: '',
// //     date: '',
// //     assignee: '',
// //     details: '',
// //     category: '',
// //     alert: false
// //   };

// //   editSection = '';

// //   categories = ['Design', 'Development', 'Coding', 'Meeting', 'Office Time', 'User Experience'];

// //   @ViewChild('titleInput') titleInput!: ElementRef;
// //   @ViewChild('dateInput') dateInput!: ElementRef;
// //   @ViewChild('assigneeInput') assigneeInput!: ElementRef;
// //   @ViewChild('detailsInput') detailsInput!: ElementRef;
// //   @ViewChild('categorySection') categorySection!: ElementRef;
// //   @ViewChild('alertSection') alertSection!: ElementRef;

// //   selectCategory(cat: string) {
// //     this.task.category = cat;
// //   }

// //   createTask() {
// //     console.log('Creating task:', this.task);
// //     alert('Task Created!');
// //   }

// //   deleteTask() {
// //     console.log('Deleting task');
// //     alert('Task Deleted!');
// //     this.task = {
// //       title: '',
// //       date: '',
// //       assignee: '',
// //       details: '',
// //       category: '',
// //       alert: false
// //     };
// //   }

// //   scrollToSection(section: string) {
// //     let el: ElementRef | undefined;

// //     switch (section) {
// //       case 'title': el = this.titleInput; break;
// //       case 'date': el = this.dateInput; break;
// //       case 'assignee': el = this.assigneeInput; break;
// //       case 'details': el = this.detailsInput; break;
// //       case 'category': el = this.categorySection; break;
// //       case 'alert': el = this.alertSection; break;
// //     }

// //     if (el) {
// //       el.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
// //     }
// //   }
// // }

// export class DashboardComponent {
//   task = {
//     title: '',
//     date: '',
//     assignee: '',
//     details: '',
//     category: '',
//     alert: false
//   };

//   editSection = '';
//   categories = ['Design', 'Development', 'Coding', 'Meeting', 'Office Time', 'User Experience'];
//   taskList: any[] = [];

//   isEditMode: boolean = false;         // ✅ Flag to check if editing
//   editIndex: number | null = null;     // ✅ Store index of task being edited

//   @ViewChild('titleInput') titleInput!: ElementRef;
//   @ViewChild('dateInput') dateInput!: ElementRef;
//   @ViewChild('assigneeInput') assigneeInput!: ElementRef;
//   @ViewChild('detailsInput') detailsInput!: ElementRef;
//   @ViewChild('categorySection') categorySection!: ElementRef;
//   @ViewChild('alertSection') alertSection!: ElementRef;

//   selectCategory(cat: string) {
//     this.task.category = cat;
//   }

//   createTask() {
//     if (!this.task.title || !this.task.date || !this.task.assignee) {
//       alert('Please fill in all required fields.');
//       return;
//     }

//     if (this.isEditMode && this.editIndex !== null) {
      
//       this.taskList[this.editIndex] = { ...this.task };
//       this.isEditMode = false;
//       this.editIndex = null;
//       alert('Task Updated!');
//     } else {
      
//       this.taskList.unshift({ ...this.task });
//       alert('Task Created!');
//     }

   
//     this.task = {
//       title: '',
//       date: '',
//       assignee: '',
//       details: '',
//       category: '',
//       alert: false
//     };
//   }

//   deleteTask() {
//     this.task = {
//       title: '',
//       date: '',
//       assignee: '',
//       details: '',
//       category: '',
//       alert: false
//     };
//     this.isEditMode = false;
//     this.editIndex = null;
//     alert('Task Deleted!');
//   }

//   editTask(index: number) {
//     this.task = { ...this.taskList[index] };  
//     this.isEditMode = true;
//     this.editIndex = index;

   
//     this.titleInput.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
//   }

//   scrollToSection(section: string) {
//     let el: ElementRef | undefined;
//     switch (section) {
//       case 'title': el = this.titleInput; break;
//       case 'date': el = this.dateInput; break;
//       case 'assignee': el = this.assigneeInput; break;
//       case 'details': el = this.detailsInput; break;
//       case 'category': el = this.categorySection; break;
//       case 'alert': el = this.alertSection; break;
//     }
//     if (el) {
//       el.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
//   }
// }

 import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  task = {
    title: '',
    date: '',
    assignee: '',
    details: '',
    category: '',
    alert: false
  };

  categories = ['Design', 'Development', 'Coding', 'Meeting', 'Office Time', 'User Experience'];
  taskList: any[] = [];

  isEditMode: boolean = false;
  editIndex: number | null = null;

  @ViewChild('titleInput') titleInput!: ElementRef;
  @ViewChild('dateInput') dateInput!: ElementRef;
  @ViewChild('assigneeInput') assigneeInput!: ElementRef;
  @ViewChild('detailsInput') detailsInput!: ElementRef;
  @ViewChild('categorySection') categorySection!: ElementRef;
  @ViewChild('alertSection') alertSection!: ElementRef;

  selectCategory(cat: string) {
    this.task.category = cat;
  }

  createTask() {
    if (!this.task.title || !this.task.date || !this.task.assignee) {
      alert('Please fill in all required fields.');
      return;
    }

    if (this.isEditMode && this.editIndex !== null) {
      this.taskList[this.editIndex] = { ...this.task };
      alert('Task Updated!');
    } else {
      this.taskList.unshift({ ...this.task });
      alert('Task Created!');
    }

    this.clearForm();
  }

  editTask(index: number) {
    this.task = { ...this.taskList[index] };
    this.isEditMode = true;
    this.editIndex = index;
    this.titleInput.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  removeTask(index: number) {
    this.taskList.splice(index, 1);
    alert('Task Deleted!');
  }

  clearForm() {
    this.task = {
      title: '',
      date: '',
      assignee: '',
      details: '',
      category: '',
      alert: false
    };
    this.isEditMode = false;
    this.editIndex = null;
  }
}


