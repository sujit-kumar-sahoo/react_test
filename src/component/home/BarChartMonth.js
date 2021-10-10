import React, { Component } from 'react'
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

class BarChartMonth extends Component {
    constructor(props){
        super(props)
        console.log("===========inside constructor================")
        this.state={
            pdata:[
                {
                  name: 'Jan',
                  month: 13
                },
                {
                  name: 'Feb',
                  month: 15
                },
                {
                  name: 'Mar',
                  month: 5
                },
                {
                  name: 'Apr',
                  month: 10
                },
                {
                  name: 'May',
                  month: 9
                },
                {
                  name: 'June',
                  month: 10
                },
                {
                    name: 'July',
                    month: 10
                },
                {
                    name: 'Aug',
                    month: 10
                },
                {
                    name: 'Sep',
                    month: 10
                },
                {
                    name: 'Oct',
                    month: 10
                },
                {
                    name: 'Nov',
                    month: 10
                },
                {
                    name: 'Dec',
                    month: 10
                }
              ]
        }
    }
    render() {
        return (
            <>
                <ResponsiveContainer width="100%" aspect={3}>
                    <BarChart
                    width={500}
                    height={300}
                    data={this.state.pdata}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="month" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </>
        )
    }
}

export default BarChartMonth
