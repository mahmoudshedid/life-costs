import * as React from 'react';
import { Chart } from "react-google-charts";
import CostDataService from '../../service/costs.service';

class Statistic extends React.PureComponent {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            statistic: [],
        };
    }

    componentDidMount() {
        this._isMounted = true;
        CostDataService.statistics()
            .then(response => {
                if (this._isMounted) {
                    this.setState({
                        statistic: response.data
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

        return (
            <Chart
                width={'700px'}
                height={'400px'}
                chartType="Line"
                loader={<div>Loading Chart</div>}
                data={[
                    [
                        'Month',
                        'Electronic',
                        'Grocery',
                        'Mobiles',
                    ],
                    ['Jan', 37.8, 80.8, 41.8],
                    ['Feb', 30.9, 69.5, 32.4],
                    ['Mar', 25.4, 57, 25.7],
                    ['Apr', 11.7, 18.8, 10.5],
                    ['May', 11.9, 17.6, 10.4],
                    ['Jun', 8.8, 13.6, 7.7],
                    ['Jul', 7.6, 12.3, 9.6],
                    ['Aug', 12.3, 29.2, 10.6],
                    ['Sep', 16.9, 42.9, 14.8],
                    ['Oct', 12.8, 30.9, 11.6],
                    ['Nov', 5.3, 7.9, 4.7],
                    ['Dec', 6.6, 8.4, 5.2],
                ]}
                options={{
                    chart: {
                        title: 'Your costs expensive through 2020.',
                        subtitle: 'in thousand of złoto (PLN)',
                    },
                }}
                rootProps={{ 'data-testid': '3' }}
            />
        );
    }
}

export default (Statistic);
