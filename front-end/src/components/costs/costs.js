import React, { Component } from "react";
import MaterialTable from 'material-table';
import { DataTableIcons } from './datatable-icons';
import CostDataService from '../../service/costs.service';

export default class Costs extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            columns: [
                { title: 'Date', field: 'date', type: 'date' },
                { title: 'Category', field: 'category' },
                { title: 'Description', field: 'description' },
                { title: 'Value', field: 'value', type: 'numeric' },
            ],
            costs: [],
        };

    }

    componentDidMount() {
        this._isMounted = true;
        CostDataService.getAll()
            .then(response => {
                if (this._isMounted) {
                    this.setState({
                        costs: response.data
                    });
                }
            })
            .catch(e => {
                console.log(e);
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { costs, columns } = this.state;

        return (
            <MaterialTable
                icons={DataTableIcons}
                title="Costs"
                columns={columns}
                data={costs}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                this.setState((prevState) => {
                                    // Call cost service to ADD data
                                });
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    this.setState((prevState) => {
                                        // Call cost service to UPDATE data
                                    });
                                }
                            }, 600);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                this.setState((prevState) => {
                                    // Call cost service to DELETE data
                                });
                            }, 600);
                        }),
                }}
            />
        );
    }
}