import {connect} from 'react-redux';
import {increase, decrease} from '../actions';
import CounterButton from '../components/CounterButton';

const mapDispatchToProps = {
    increase,
    decrease,
}

export default connect(null, mapDispatchToProps) (CounterButton);