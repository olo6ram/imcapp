import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "juillet"],
                datasets: [
                    {
                        label:'Henri',
                        data:[95, 80, 75, 62, 68, 70, 72],
                        //backgroundColor:['rgb(255, 99, 132)'],
                        borderColor:['rgba(255, 206, 86, 1'],
                    },
                    {
                        label:'Marie',
                        data:[70, 80, 75, 62, 55, 50, 51],
                        borderColor:['rgba(75, 192, 192, 1'],
                    },
                    {
                        label:'Susan',
                        data:[49, 56, 59, 60, 58, 55, 54],
                        borderColor:['rgba(153, 102, 255, 1'],
                    },
                    {
                        label:'Peter',
                        data:[72, 78, 80, 76, 70, 65, 68],
                        borderColor:['rgba(255, 159, 64, 1'],
                    },
                    
                ]
            }
        }
    }



    render(){
        return (
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    options={{
                        title:{
                        display:this.props.displayTitle,
                        text:'Largest Cities In '+this.props.location,
                        fontSize:25
                        },
                        legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                        }
                    }}
                />
            </div>
        )
    }
}

export default Chart;