import './ParentSroll.css'
import Scroll from './Scroll.js'
import a from '../../Assests/l.png'
function ParentScroll (){
    const Age = [a,a,a,a];
    const Age1 = [a,a,a,a,a,a,a];
    const Age2 = [a,a,a,a,a,a,a,a,a,a];
    const Age3 = [a,a,a];
    return (
        <>
        <div className="GrandParent">
            <Scroll index={0} images={Age}/>
            <Scroll index={1} images={Age1}/>
            <Scroll index={2} images={Age2}/>
            <Scroll index={3} images={Age3}/>
        </div>
        </>
    );
}

export default ParentScroll;