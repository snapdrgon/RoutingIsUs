
import { Component } from '@angular/core';
import { MessagesService } from './messages.service'; 
import {FormComponent} from '../prevent-unsaved-changes.service';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'messages',
    templateUrl:'./messages.component.html'
})
export class MessagesComponent implements FormComponent{
    messages;
    form:FormGroup;
    title = "New Message"

    constructor(service : MessagesService) {
        this.messages = service.getMessages();
    }

    hasUnsavedChanges() {
        return false;
    }
}