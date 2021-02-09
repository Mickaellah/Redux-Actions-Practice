import {connect} from 'react-redux';
import Users from '../components/Users';
import {updateUsers} from '../actions';

export function users({users}) {
    return <Users users={users} />
}

function mapStateToProps(state){
    return {
        users: state.users,
    }
}

const mapDispatchToProps = {
    updateUsers,
}

export default connect(mapStateToProps, {mapDispatchToProps})(users)