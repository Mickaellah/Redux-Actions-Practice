import {connect} from 'react-redux';
import SortUsers from '../components/SortUsers';
import {sortUsers} from '../actions';

function mapStateToProps(state) {
    return {
        sortUser: state.currentUserSort,
    }
}

const mapDispatchToProps = {
    set: sortUsers
}

export default connect(mapStateToProps, mapDispatchToProps) (SortUsers);