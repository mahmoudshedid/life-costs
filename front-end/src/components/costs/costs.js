import React from 'react';
import MaterialTable from 'material-table';
import { DataTableIcons } from './datatable-icons'

export default function Costs() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Date', field: 'date', type: 'date' },
            { title: 'Category', field: 'category' },
            { title: 'Description', field: 'description' },
            { title: 'Value', field: 'value', type: 'numeric' },
        ],
        data: [
            { date: '5/19/2020', category: 'Electronic', description: 'is simply dummy text of the printing ', value: 63 },
            { date: '5/19/2020', category: 'Grocery', description: 'is simply dummy text of the printing ', value: 34 },
            { date: '5/19/2020', category: 'Mobiles', description: 'is simply dummy text of the printing ', value: 34 },
        ],
    });

    return (
        <MaterialTable
            icons={DataTableIcons}
            title="Costs"
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: (newData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
}
