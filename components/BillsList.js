import React from 'react';
import BillsListItems from './BillsListItems'

let data = [
    {
      id: 1,
      image: require('../assets/home/vodafone.png'),
      merchant: 'Vodafone',
      transactionId: '8296334099',
      billAmount: 1790
    },
    {
      id: 2,
      image: require('../assets/home/bharat_gas.jpeg'),
      merchant: 'Bharat Gas',
      transactionId: 'UXA 12872',
      billAmount: 8709
    },
    {
      id: 3,
      image: require('../assets/home/bsnl.jpeg'),
      merchant: 'BSNL',
      transactionId: '9876785676 - Postpaid',
      billAmount: 433
    }
  ]

const BillsList = props => {

    return (
        <BillsListItems data={data}/>
    )

}

export default BillsList;

