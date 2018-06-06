import { action, observable } from 'mobx';


export class ModalStore {
  @observable modalVisible = false;

  @action toggleModal() {
    this.modalVisible = !this.modalVisible;
  }
}
