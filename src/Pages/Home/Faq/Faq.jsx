import { useContext } from 'react';
import { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
// import { ThemeContext } from '../../Root/Root';
import '../../../Components/CSS/dark.css'
import { ThemeContext } from '../../../Root/Root';

const Faq = () => {
    const [items,setItems]= useState([])
    const {isLight}=useContext(ThemeContext)

    useEffect(()=>{
        fetch('/faq.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return (
       <div className={` shadow-2xl w-[90%] ${!isLight && 'darkcss border-t-2 border-b-2 py-5'} mx-auto `}>

        <div className='text-center mb-5'>
            <h1 className='text-2xl font-semibold '>Frequently asked questions</h1>
        </div>

<Accordion  allowZeroExpanded>
{items.map((item) => (
    <AccordionItem key={item.id}>
        <AccordionItemHeading >
            <AccordionItemButton>
                {item.question}
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          {item.answer}
        </AccordionItemPanel>
    </AccordionItem>
))}
</Accordion>

       </div>
        
    );
};

export default Faq;