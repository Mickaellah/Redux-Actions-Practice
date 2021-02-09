import {connect} from 'react-redux';
import ChangeTemperature from '../components/ChangeTemperature';
import {changeTemperature} from '../actions';

function mapStateToProps(state) {
    return {
        set: state.currentTemp,
    }
}

const mapDispatchToProps = {
    set: (temp) => changeTemperature(temp)
}

export default connect(mapStateToProps, mapDispatchToProps) (ChangeTemperature);