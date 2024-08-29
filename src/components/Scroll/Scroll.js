import './Scroll.css'
import { useEffect, useRef, useState } from 'react';
function Scroll ({index}){
    const parentRef = useRef(null);
    const ScrollBarRef = useRef(null);
    const [height,setheight] = useState('0px');
    const [Text,setText] = useState('');

    useEffect(()=>{
        const handleScroll = () => {
            if (parentRef.current) {
                const parentHeight = parentRef.current.clientHeight;
                const maxScroll = parentHeight - 35;
                setheight(`${Math.min((parentRef.current.scrollTop)/2, maxScroll)}px`)
                const scrollPercentage = ((parentRef.current.scrollTop / maxScroll)/2) * 100;
                console.log(scrollPercentage)

                // Determine text based on scroll percentage
                let newText = 'Scroll Bar';
                if (scrollPercentage <= 10) {
                    newText = 'Age 1';
                }
                else if (scrollPercentage <= 20) {
                    newText = 'Age 3';
                }
                else if (scrollPercentage <= 30) {
                    newText = 'Age 5';
                }
                else if (scrollPercentage <= 40) {
                    newText = 'Age 10';
                }
                else if (scrollPercentage <= 50) {
                    newText = 'Age 13';
                }
                else if (scrollPercentage <= 60) {
                    newText = 'Age 16';
                }
                else if (scrollPercentage <= 70) {
                    newText = 'Age 17';
                }
                else if (scrollPercentage <= 80) {
                    newText = 'Age 22';
                }
                else if (scrollPercentage <= 90) {
                    newText = 'Age 24';
                }else{
                    newText = 'Age 24';
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
                    <div className="child">1</div>
                    <div className="child">2</div>
                    <div className="child">3</div>
                    <div className="child">4</div>
                    <div className="child">5</div>
                    <div className="child">6</div>
                    <div className="child">7</div>
                    <div className="child">8</div>
                    <div className="child">9</div>
                    <div className="child">10</div>
                    <div className="child">11</div>
                    <div className="child">12</div>
                    <div className="child">13</div>
                    <div className="child">14</div>
                    <div className="child">15</div>
                </div>
                <div className="ParentScroller" ref={ScrollBarRef} style={{ transform: `translateY(${height})` }}>
                    {Text}
                </div>
                
             </div>
        </>
    );
}

export default Scroll;