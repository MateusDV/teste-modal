import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbModalModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import { ModalDemoComponent } from './pages/modal-demo/modal-demo.component';
import { ModalPersonalizadoService } from './services/modal-service';
import { OutroComponenteComponent } from './pages/outro-componente/outro-componente.component';
import { ModalDemo } from './shared/models/modal-demo';

@Component({
  selector: 'app-root',
  imports: [NgbModalModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teste-modal';

  constructor(private modalService: ModalPersonalizadoService) { }

  openModal() {

    const model: ModalDemo = {
      message: 'teste'
    };

    const modalRef = this.modalService.openModal(
      ModalDemoComponent,
      model);
    
    // Não permite adicionar o compomente pois "OutroComponenteComponent" não implementa "ModalWithModel"
    // const modalRef2 = this.modalService.openModal(
    //   OutroComponenteComponent,
    //   { message: 'teste' });
  }
}