import './ParentSroll.css'
import Scroll from './Scroll.js'
function ParentScroll (){
    return (
        <>
        <div className="GrandParent">
            <Scroll index={0}/>
            <Scroll index={1}/>
            <Scroll index={2}/>
            <Scroll index={3}/>
        </div>
        </>
    );
}

export default ParentScroll;