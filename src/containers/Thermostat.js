import {connect} from 'react-redux';
import Thermostat from '../components/Thermostat';

function mapStateToProps(state) {
    return {
        set: state.currentTemp
    }
}

export default connect(mapStateToProps, null) (Thermostat);