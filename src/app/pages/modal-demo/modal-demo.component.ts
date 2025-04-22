import { Component, Input } from '@angular/core';
import { ModalComponent } from "../../components/modal/modal.component";
import { ModalDemo } from '../../shared/models/modal-demo';
import { IModalWithModel } from '../../shared/ModalWithModel';

@Component({
  selector: 'app-modal-demo',
  imports: [ModalComponent],
  templateUrl: './modal-demo.component.html',
  styleUrl: './modal-demo.component.css'
})
export class ModalDemoComponent implements IModalWithModel<ModalDemo> {
  @Input() model: ModalDemo = new ModalDemo();
}
