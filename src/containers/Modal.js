import {connect} from 'react-redux';
import {showModal} from '../actions';
import Modal from '../components/Modal';

function mapStateToProps(state) {
    return {
        displayModal: state.displayModal
    }
}

export default connect(mapStateToProps, null) (Modal);