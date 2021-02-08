import { connect } from 'react-redux';
import SpecialText from "../components/SpecialText";
import addSpecialText from '../reducers/index';

export function specialText({text}) {
    return <SpecialText text={text} />
}

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    text: state.specialText
  }
}

const mapDispatchToProps = {
  addSpecialText,
}

export default connect(mapStateToProps, {mapDispatchToProps})(specialText);