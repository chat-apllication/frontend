import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChatContainerComponent
  }
]

@NgModule({
  declarations: [
    ChatContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ChatModule { }
