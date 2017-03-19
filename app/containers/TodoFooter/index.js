import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import TodoFilter from 'components/TodoFilter';
import TodoLeftCount from 'components/TodoLeftCount';
import { setFilter, clearCompleted } from './actions';
import mapStateToProps from './selectors';

const filters = [
  {
    id: 'all',
    label: 'All',
    route: '/',
  },
  {
    id: 'active',
    label: 'Active',
    route: '/active',
  },
  {
    id: 'completed',
    label: 'Completed',
    route: '/completed',
  },
];

class TodoFooter extends Component {
  onSelectFilter = (filter) => {
    // console.log('onSelectFilter', filter);
    this.props.dispatch(setFilter({ route: filter.route }));
  }
  onClearCompleted = () => {
    const { dispatch, completedIds: ids } = this.props;
    dispatch(clearCompleted({ ids }));
  }
  render() {
    const { activeFilter = 'all', leftCount, completedIds } = this.props;
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 30 }}>
        <TodoLeftCount count={leftCount} />
        <TodoFilter
          filters={filters}
          onSelect={this.onSelectFilter}
          activeFilter={activeFilter}
        />
        {
          completedIds.length ? (
            <FlatButton
              label="Clear completed"
              onTouchTap={this.onClearCompleted}
            />
          ) : null
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(TodoFooter);
