import React from 'react'
import { Pie } from 'react-chartjs-2'

const Chart = (props) => {
    return (
        <div className="w-full flex justify-center">
            <div className="md:w-5/6 mr-8 md:mr-20 lg:mr-24">
                <Pie
                    data={props.data}
                    options={{
                        title: {
                            display: true,
                            text: 'User posts counts',
                            fontSize: 16,
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        },
                    }}
                />
            </div>
        </div>
    )
}

export default Chart