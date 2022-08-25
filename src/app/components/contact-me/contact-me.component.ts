import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  commentForm!: FormGroup;
  comments = new Array();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      comment: [null]
    });
  }

  onAssNewComment(): void {
    this.comments.push(this.commentForm.value);
    console.log(this.comments)
  }


}
