import {connect} from 'react-redux';
import ChangeTemperature from '../components/ChangeTemperature';
import {setCurrentTemp} from '../actions';

const mapDispatchToProps = {
    set: (temp) => setCurrentTemp(temp)
}

export default connect(null, mapDispatchToProps) (ChangeTemperature);