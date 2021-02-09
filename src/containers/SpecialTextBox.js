import { connect } from 'react-redux';
import {addSpecialText} from '../actions';
import SpecialTextBox from "../components/SpecialTextBox";

//map the "setSpecialText" action function to a prop function called "set"
const mapDispatchToProps = {
    set: (text) => addSpecialText(text),
}

export default connect(null, mapDispatchToProps) (SpecialTextBox);
