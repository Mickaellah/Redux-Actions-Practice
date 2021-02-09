import {connect} from 'react-redux';
import CurrentCity from '../components/CurrentCity';

function City({text}) {
    return <CurrentCity text={text} />
}

function mapStateToProps(state) {
    return {
        text: state.currentCity
    }
}

export default connect(mapStateToProps, null) (City);