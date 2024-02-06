// import React from 'react';

import useTitle from "../../../Custom_Hooks/useTitle";
import Home_2_Banner_Title from "../../Sections/Home_2_Banner_Title";
import Home_2_Ready_Section from "../../Sections/Home_2_Ready_Section";
import "../../../../public/css/masonry_package.css";
import Masonry from "masonry-layout";
import { useEffect, useRef } from "react";
// import "../../../../public/js/masonry_package.min.js";

const Gallery_2 = () => {
    useTitle('Gallery');

    useEffect(() => {
        const grid = document.querySelector('.gallery');
        new Masonry(grid, {
            itemSelector: '.grid-itemm',
            columnWidth: 185,
            gutter: 5
        });

    }, []);
    const openModal = (imageSrc) => {
            const modal = document.createElement('div');
            modal.className = 'modall';
            modal.innerHTML = `<div class="modal-contentt"><img src="${imageSrc}" alt="Modal Image"></div>`;
            document.body.appendChild(modal);

            modal.addEventListener('click', function () {
                document.body.removeChild(modal);
            });
            
        };

    return (
        <div>
            <div className="mt-[50px] md:mt-[86px]">
                <Home_2_Banner_Title
                    max_width="640"
                    title="Gallery"
                    title_min_size="24"
                    title_max_size="36"
                    space="16"
                    description="Everything you need to control spend and optimize finance operations, all on a single platform."
                    des_min_size="14"
                    des_max_size="16"
                    leading="32"></Home_2_Banner_Title>
            </div>
            <main className="max-w-[1142px]  mx-auto px-5 xl:px-0">
                <div className="gallery mt-[100px]">
                    <div className="grid-sizer"></div>
                    <div onClick={()=> openModal('../../../../public/images/gallery3-home2.png')} className="grid-itemm">
                        <img src="../../../../public/images/gallery3-home2.png" alt="Image 1" />
                    </div>
                    <div onClick={()=> openModal('../../../../public/images/gallery2-home2.png')} className="grid-itemm">
                        <img src="../../../../public/images/gallery2-home2.png" alt="Image 2" />
                    </div>
                    <div onClick={()=> openModal('../../../../public/images/gallery1-home2.png')} className="grid-itemm">
                        <img src="../../../../public/images/gallery1-home2.png" alt="Image 3" />
                    </div>
                    <div onClick={()=> openModal('../../../../public/images/gallery5-home2.png')} className="grid-itemm">
                        <img src="../../../../public/images/gallery5-home2.png" alt="Image 4" />
                    </div>
                    <div onClick={()=> openModal('../../../../public/images/gallery4-home2.png')} className="grid-itemm">
                        <img src="../../../../public/images/gallery4-home2.png" alt="Image 5" />
                    </div>
                    <div onClick={()=> openModal('../../../../public/images/gallery3-home2.png')} className="grid-itemm">
                        <img src="../../../../public/images/gallery3-home2.png" alt="Image 6" />
                    </div>
                    <div onClick={()=> openModal('../../../../public/images/gallery2-home2.png')} className="grid-itemm">
                        <img src="../../../../public/images/gallery2-home2.png" alt="Image 7" />
                    </div>
                    <div onClick={()=> openModal('../../../../public/images/gallery1-home2.png')} className="grid-itemm">
                        <img src="../../../../public/images/gallery1-home2.png" alt="Image 8" />
                    </div>
                    <div onClick={()=> openModal('../../../../public/images/gallery5-home2.png')} className="grid-itemm">
                        <img src="../../../../public/images/gallery5-home2.png" alt="Image 9" />
                    </div>
                    <div onClick={()=> openModal('../../../../public/images/gallery4-home2.png')} className="grid-itemm">
                        <img src="../../../../public/images/gallery4-home2.png" alt="Image 10" />
                    </div>
                </div>
                <div className="mt-[80px] md:mt-[120px]">
                    <Home_2_Ready_Section></Home_2_Ready_Section>
                </div>
            </main>
        </div>
    );
};

export default Gallery_2;