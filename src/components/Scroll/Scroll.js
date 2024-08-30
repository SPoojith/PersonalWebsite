import './Scroll.css'
import { useEffect, useRef, useState } from 'react';
function Scroll ({index,images}){
    const parentRef = useRef(null);
    const ScrollBarRef = useRef(null);
    const [height,setheight] = useState('0px');
    const [Text,setText] = useState('');

    useEffect(()=>{
        const handleScroll = () => {
            if (parentRef.current) {
                const parentHeight = parentRef.current.clientHeight;
                const maxScroll = parentHeight - 35;
                const scrollPercentage = ((parentRef.current.scrollTop / images.length));
                // setheight(`${Math.min((parentRef.current.scrollTop)/parentHeight, maxScroll)}px`)
                setheight(`${Math.min(scrollPercentage, maxScroll)}px`)
                console.log(scrollPercentage)

                // Determine text based on scroll percentage
                let newText = 'Scroll Bar';
                if (scrollPercentage <= 100) {
                    newText = 'Age 1';
                }
                else if (scrollPercentage <= 200) {
                    newText = 'Age 3';
                }
                else if (scrollPercentage <= 300) {
                    newText = 'Age 5';
                }
                else if (scrollPercentage <= 400) {
                    newText = 'Age 10';
                }
                else if (scrollPercentage <= 500) {
                    newText = 'Age 13';
                }
                else if (scrollPercentage <= 600) {
                    newText = 'Age 16';
                }
                else if (scrollPercentage <= 700) {
                    newText = 'Age 17';
                }
                setText(newText);
            }
          };
      
          // Add the scroll event listener
          const container = parentRef.current;
          container.addEventListener('scroll', handleScroll);
      
          // Clean up the event listener on component unmount
          return () => {
            container.removeEventListener('scroll', handleScroll);
          };  
    },[])

    return (
        <>
            <div className="Foster">
                <div className="Parent" ref={parentRef}>
                    {images.map((image,index) => (    
                        <div className="child" key={index}><img src={image} alt='hi'/>jjj</div>
                    ))
                    }
                </div>
                <div className="ParentScroller" ref={ScrollBarRef} style={{ transform: `translateY(${height})` }}>
                    {Text}
                </div>
                
             </div>
        </>
    );
}

export default Scroll;