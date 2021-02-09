import {connect} from 'react-redux';
import CityDropDown from '../components/CityDropDown';
import {setCurrentCity} from '../actions';

const mapDipsatchToState = {
    set: setCurrentCity
}

export default connect(null, mapDipsatchToState) (CityDropDown);