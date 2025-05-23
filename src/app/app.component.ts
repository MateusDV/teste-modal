import { Component } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalDemoComponent } from './pages/modal-demo/modal-demo.component';
import { ModalPersonalizadoService } from './services/modal-service';
import { ModalDemoProps } from './shared/models/modal-demo';

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

    const model: ModalDemoProps = {
      message: 'teste'
    };

    const modalRef = this.modalService.openModal(
      ModalDemoComponent,
      model);
    
    // Não permite adicionar o compomente pois "OutroComponenteComponent" não implementa "ModalWithProps"
    // const modalRef2 = this.modalService.openModal(
    //   OutroComponenteComponent,
    //   { message: 'teste' });
  }
}