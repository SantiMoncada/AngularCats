import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-popup-details',
  templateUrl: `./modal-component.html`,
  styleUrls: ['./popup-details.component.css']
})
export class PopupDetailsComponent {
  @Input() name: any;
  @Input() catData: any;
  test: number = 20;
  constructor(public activeModal: NgbActiveModal) { }
}

@Component({ selector: 'ngbd-modal-component', templateUrl: './popup-details.component.html' })
export class NgbdModalComponent {

  @Input() content: any;
  @Input() breedName: any;
  @Input() breedDescription: any;
  @Input() breedEnergy: any;

  constructor(private modalService: NgbModal) { }

  open(catData: any) {
    const modalRef = this.modalService.open(PopupDetailsComponent);
    modalRef.componentInstance.catData = catData;
  }
}
