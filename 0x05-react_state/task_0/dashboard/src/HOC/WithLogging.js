import React, { Component } from 'react';

function withConsoleLogOnMount(WrappedComponent, mwssage) {
    return class extends Component {
        componentDidMount() {
            console.log()
        }
    }
}