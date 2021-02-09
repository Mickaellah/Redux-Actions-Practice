import {connect} from 'react-redux';
import { searchUser } from "../actions";
import SearchTextBox from '../components/SearchTextBox';

const mapDispatchToProps = {
    set: searchUser,
}

export default connect(null, mapDispatchToProps) (SearchTextBox);