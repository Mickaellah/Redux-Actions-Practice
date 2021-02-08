import {connect} from 'react-redux';
import Users from '../components/Users';
import {updateUsers} from '../reducers/index';

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