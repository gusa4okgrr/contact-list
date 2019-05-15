import React, { Component, Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import Sidebar from './Sidebar';
import './IndexRoute.css';

class IndexRoute extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  
  render() {
    const { loading, data, error } = this.props;

    return (
      <Fragment>
        {loading && <h1>LOADING ...</h1>}
        {error && <h1>ERROR</h1>}
        {!loading && !error && (
          <Fragment>
            <div style={{ display: 'flex', backgroundColor: 'white' }}>
              <div className="list-container">
                {data && data.map(([key, arr]) => (
                  <Fragment key={key}>
                    <h1 id={key}>{key.toUpperCase()}</h1>
                    {arr.map(item => (
                      <ListItem key={item.name} {...item} />
                    ))}
                  </Fragment>
                ))}
              </div>
              <Sidebar />
            </div>
            <button className="strange-button">Create group</button>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ reducer: { data, loading, error } }) => ({
  data,
  loading,
  error
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch({ type: 'DATA_FETCH_REQUEST' })
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(IndexRoute);
