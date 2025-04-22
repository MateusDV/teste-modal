import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import { ModalDemoComponent } from './pages/modal-demo/modal-demo.component';

@Component({
  selector: 'app-root',
  imports: [NgbModalModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teste-modal';

  constructor(private modalService: NgbModal) { }

  openModal() {
    this.modalService.open(ModalDemoComponent, { centered: true });
  }
}