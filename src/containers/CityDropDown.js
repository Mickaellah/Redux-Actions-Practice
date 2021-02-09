import {connect} from 'react-redux';
import {currentCity} from '../actions';
import CityDropDown from '../components/CityDropDown';

const mapDispatchToProps = {
    set: (text) => currentCity(text)
}

export default connect(null, mapDispatchToProps) (CityDropDown);