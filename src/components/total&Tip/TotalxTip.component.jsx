import React from 'react'
import Button from '../Buttons/Button.component';
const Total = ({data,setData}) => {
    const {bill, tip, people} = data;
    const total = (bill + (bill * tip) / 100) / people;
    const tipPerPerson = (bill * tip) / 100 / people;
  return (
    <div className='flex flex-col justify-between self-center cyan-darkBg rounded-md py-5 md:space-y-8'>
        <div className="tipContainer flex px-4 py-3 justify-between cyan-dark-col">
            <div className="tip text-white">
                <h2 className='text-[0.8rem]'>Tip Amount</h2>
                <h2 className='text-[0.6rem] text-gray-400'>/ person</h2>
            </div>
            <div className=" text-3xl font-bold">
                <h2 className=''>{
                    tipPerPerson ? `$${tipPerPerson.toFixed(2)}` : `$0.00`
                }</h2>
                </div>  
        </div>
        <div className="totalContainer flex flex-row px-4 py-3 justify-between justify-self-start cyan-dark-col">
            <div className="text-white md:-mt-10">
                <h2 className='text-[0.8rem]'>Total</h2>
                <h2 className='text-[0.6rem] text-gray-400'>/ person</h2>
                </div>
            <div className="totalAmount0 md:-mt-10">
                <h2 className='text-3xl font-bold'>{
                    total ? `$${total.toFixed(2)}` : `$0.00`
                }</h2>
        </div>
    </div>
    <div className="reset mx-auto px-8">
        <Button label="Reset" setVal={() => {
            setData({bill: 0, tip: 0, people: 0});

        }} buttonType="cyan-dark-grayish block text-white font-bold py-1 px-16 mt-2 rounded-sm" />
        </div>
</div>
  )
}

export default Total;