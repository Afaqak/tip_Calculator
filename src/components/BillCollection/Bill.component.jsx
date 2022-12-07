/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Button from '../Buttons/Button.component';
import Input from '../input/input.component';
const Bill = ({data}) => {
    const isFinite = (...value) =>value.every((val) => val > 0);
    
    const [bill, setBill] = useState(0);
    const [tip, setTip] = useState(0);
    const [people, setPeopleV] = useState(0);
    const [customToggle, setCustomToggle] = useState(false);

    useEffect(() => {
     
        if(isFinite(bill, tip, people)) {
            data({bill, tip, people});
        }
        else {
            data({bill: 0, tip: 0, people: 0});
        }
    }, [bill, tip, people])

    const handleTip = (e) => {
        e.preventDefault();
        setTip(+e.target.value);
    }

    const handleBill = (e) => {
        setBill(+e.target.value);
    }
    const setPeople = (e) => {

        setPeopleV(+e.target.value);
    }



    return (
    <div className='px-2 py-2'>
        <Input label="Bill" type='-mt-3 mb-3' setValue={handleBill} />
        <div className="mb-4">
            <h2 className='mb-2 text-gray-600 text-[0.7rem] font-medium'>Select Tip %</h2>
            <div className="grid grid-cols-2 mx-auto gap-2 w-[100%] md:w-[100%] items-center md:grid-cols-3">
            <Button value={5}
            label="5%" setVal={handleTip} buttonType="cyan-darkBg text-white font-bold py-1  px-2 rounded-sm" />
            <Button value={10} label="10%" setVal={(e)=>handleTip(e)} buttonType="cyan-darkBg text-white font-bold py-1 px-2 rounded-sm" />
            <Button value={15} label="15%" setVal={(e)=>handleTip(e)} buttonType="cyan-darkBg text-white font-bold py-1 px-2 rounded-sm " />
            <Button value={25} label="25%" setVal={(e)=>handleTip(e)} buttonType="cyan-darkBg text-white font-bold py-1 px-2 rounded-sm " />
            <Button value={50} label="50%" setVal={(e)=>handleTip(e)} buttonType="cyan-darkBg text-white font-bold py-1 px-2 rounded-sm " />
            <Button label="Custom" setVal={(e)=>{
                setCustomToggle(!customToggle);
            }} buttonType="lightgrayishcyan cyan-bg-col font-bold py-1 px-2 rounded-sm" />
        </div>
            {customToggle && <Input label="Custom" type='mt-2' setValue={handleTip} />}
        </div>
        <Input label="Number of People" setValue={setPeople} type='mb-3' />
    </div>
  )
}

export default Bill;


