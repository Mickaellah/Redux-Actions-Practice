import {connect} from 'react-redux';
import {showModal} from '../actions';
import DisplayModal from '../components/ShowModal';

const mapDispatchToProps = {
    toggleModal: showModal
}

export default connect(null, mapDispatchToProps) (DisplayModal);