import {connect} from 'react-redux';
import {uploadImageUrl} from '../actions';
import ImageUrlTextBox from '../components/ImageUrlTextBox';

const mapDispatchToProps = {
    set : uploadImageUrl,
}

export default connect(null, mapDispatchToProps) (ImageUrlTextBox);