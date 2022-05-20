import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import {Task} from '../../Task';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask : EventEmitter<Task> = new EventEmitter();
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask:boolean = false;
  subscription? : Subscription;
  
  constructor(
    private uiService: UiService
  ) { 
    this.subscription = this.uiService.onToggle()
                              .subscribe(value => this.showAddTask = value );
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.text.length == 0){
      alert("Please add a task!");
      return
    }
    const {text,day,reminder} = this
    const newTask= {text,day,reminder}
    this.onAddTask.emit(newTask);
  }
  


}
