import React from 'react';
import {connect} from 'react-redux';
import Counter from '../components/Counter';
import {increase} from '../reducers/index';

export function counter({currentCount}) {
    return <Counter currentCount={currentCount} />
}

function mapStateToProps(state) {
    return {
        currentCount: state.currentCount,
    }
}

const mapDispatchToProps = {
    increase,
}

export default connect(mapStateToProps, {mapDispatchToProps}) (counter);

