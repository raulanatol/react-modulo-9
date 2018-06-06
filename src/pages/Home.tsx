import * as React from 'react';
import Modal from '../components/Modal';
import { inject, observer } from 'mobx-react';
import { ModalStore } from '../stores/ModalStore';

export interface HomeProps {
  modalStore?: ModalStore;
}


@inject('modalStore')
@observer
export default class Home extends React.Component<HomeProps, {}> {
  render() {
    return <div>
      {this.props.modalStore.modalVisible && <Modal/>}
      HOME
    </div>;
  }
}
