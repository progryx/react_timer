import React from 'react';
import PropTypes from 'prop-types';

export default (mapStateToProps, mapDispatchToProps) =>
    Component => {
        class WrappedComponent extends React.Component {
            render() {
                return (
                    <Component
                        {...this.props}
                        {...mapStateToProps(this.context.store.getState(), this.props)}
                        {...mapDispatchToProps(this.context.store.dispatch, this.props)}
                    />
                )
            }
            componentDidMount() { // подписываемся на изменение стейта, чтобы не пропустить когда он изменится. Каждый раз, когда компонена будет перерисовываться, этот вызов сработает
                this.unsubscribe =  this.context.store.subscribe(this.handleChange)
            }
            componentWillUnmount() {
                this.unsubscribe()
            }
            handleChange = () => {
                this.forceUpdate()
            }
        }
        WrappedComponent.contextTypes = { // подключаем контекст, для доступа по провайдеру.
            store: PropTypes.object,
        }
        return WrappedComponent
    }