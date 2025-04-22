import { Component, Input } from '@angular/core';
import { ModalComponent } from "../../components/modal/modal.component";
import { ModalDemoProps } from '../../shared/models/modal-demo';
import { IModalWithModel as IModalWithProps } from '../../shared/ModalWithModel';

@Component({
  selector: 'app-modal-demo',
  imports: [ModalComponent],
  templateUrl: './modal-demo.component.html',
  styleUrl: './modal-demo.component.css'
})
export class ModalDemoComponent implements IModalWithProps<ModalDemoProps> {
  model: ModalDemoProps = new ModalDemoProps();
}
