import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const FAQ_Medium_Card = (props) => {
    const location = useLocation();
    const [pathSelection, setPathSelection] = useState(false);
    useEffect(() => {
        if (location.pathname == "/Home_2/Pricing_Plans") {
            setPathSelection(true);
        }
        else if (location.pathname == "/Home_4/FAQ") {
            setPathSelection(true);
        }
        else{
            setPathSelection(false);
        }
    }, [])
    const accordionHandler = () => {
        const accordionCard = document.getElementById(`accordion_card_${props.index}`);
        const icon = accordionCard.getElementsByClassName('accordion_icon')[0];
        const answer = accordionCard.getElementsByClassName('accordion_answer')[0];
        if (answer.classList.contains('hidden')) {
            if(!pathSelection){
                icon.style.rotate = '45deg';
            }
            else{
                icon.style.rotate = '180deg';
            }
            answer.classList.remove('hidden');
            answer.classList.remove('h-0');
            answer.classList.add('h-auto');
        }
        else {
            icon.style.rotate = '0deg';
            answer.classList.add('hidden');
            answer.classList.remove('h-auto');
            answer.classList.add('h-0');
        }
    }
    return (
        <div id={`accordion_card_${props.index}`} onClick={accordionHandler} className={`mb-6 cursor-pointer ${location.pathname == "/Home_2/Pricing_Plans" ? 'bg-white px-6 py-8 rounded-md border border-[#E7E9ED]' : ''} ${location.pathname == "/Home_4/FAQ" ? 'accordion-card bg-white px-6 py-8 rounded-md' : ''}`}>
            <div
                className={`flex items-center justify-between 
                ${location.pathname == "/" ? 'bg-[#F5F5F7] rounded-full border border-[#FEF8F7] p-4 text-[#242221]' : ''} 
                ${location.pathname == "/Home_4" ? 'bg-[#F8F5F4] rounded-full border border-[#FEF8F7] p-4 text-[#242221]' : ''} 
                ${location.pathname == "/Home_3/Pricing_Plans" ? 'bg-[#F9F9FF] rounded-md text-[#2E2E52] border border-[#FEF8F7] p-4' : ''}`}>
                <p className="text-base font-semibold">{props.question}</p>
                {
                    location.pathname == "/Home_2/Pricing_Plans" ?
                    <img className={`accordion_icon duration-300`}
                    src="../../../public/images/icons/accordion-arrow.svg" alt="" /> : ''
                }
                {
                    location.pathname =="/Home_4/FAQ" ? 
                    <img className={`accordion_icon duration-300`}
                    src="../../../public/images/icons/accordion-arrow.svg" alt="" /> : ''
                }
                {
                    location.pathname =="/" ? 
                    <img className={`accordion_icon duration-300`}
                    src="../../../public/images/icons/accordion-icon-home3.svg" alt="" /> : ''
                }
                {
                    location.pathname =="/Home_4" ? 
                    <img className={`accordion_icon duration-300`}
                    src="../../../public/images/icons/accordion-icon-home3.svg" alt="" /> : ''
                }
                {
                    location.pathname =="/Home_3/Pricing_Plans" ? 
                    <img className={`accordion_icon duration-300`}
                    src="../../../public/images/icons/accordion-icon-home3.svg" alt="" /> : ''
                }
            </div>
            <div className={`accordion_answer max-w-[789px] leading-[24px]  
            ${location.pathname == "/Home_2/Pricing_Plans" ? 'pt-11 px-0' : ''} 
            ${location.pathname == "/Home_4/FAQ" ? 'pt-11 px-0' : ''}
            ${location.pathname =="/" ? 'px-4 pt-6' : ''} 
            ${location.pathname =="/Home_4" ? 'px-4 pt-6' : ''}
            ${location.pathname =="/Home_3/Pricing_Plans" ? 'px-4 pt-6' : ''}h-0 hidden duration-300`}>
                <p className={`${location.pathname == "/Home_3/Pricing_Plans" ? 'text-[#8787A4]' : 'text-[#676769]'}`}>{
                    props.answer
                }</p>
            </div>
        </div>
    );
};

export default FAQ_Medium_Card;