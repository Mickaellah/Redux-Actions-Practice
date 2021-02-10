import {connect} from 'react-redux';
import {scaleImage} from '../actions';
import ScaleImage from '../components/ScaleImage';

const mapDispatchToProps = {
    set: scaleImage,
}

export default connect(null, mapDispatchToProps) (ScaleImage);