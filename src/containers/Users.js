import {connect} from 'react-redux';
import Users from '../components/Users';
import {getUser} from '../actions'


function mapStateToProps(state){
    return {
        users: state.users,
        sortOn: state.currentUserSort,
        firstNameFilter: state.searchText
    }
}

const mapDispatchToProps = {
    getUser,
}

export default connect(mapStateToProps, mapDispatchToProps) (Users)