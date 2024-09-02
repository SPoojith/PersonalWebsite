import './ParentSroll.css'
import Scroll from './Scroll.js'
import ScrollProject from './ScrollProject.js'
import a from '../../Assests/PassionPics/p1.jpg'
import p1 from '../../Assests/PassionPics/p1.jpg'
import p2 from '../../Assests/PassionPics/p2.jpeg'
import p3 from '../../Assests/PassionPics/p3.jpeg'
import p4 from '../../Assests/PassionPics/p4.jpg'
import p5 from '../../Assests/PassionPics/p5.jpg'
import p6 from '../../Assests/PassionPics/p6.jpg'
import p7 from '../../Assests/PassionPics/p7.jpg'
import p8 from '../../Assests/PassionPics/p8.jpg'
import p9 from '../../Assests/PassionPics/p9.jpeg'
import c1 from '../../Assests/culture/p1.jpg'
import c2 from '../../Assests/culture/p2.jpg'
import c3 from '../../Assests/culture/p3.jpg'
import c4 from '../../Assests/culture/p4.jpg'
import c5 from '../../Assests/culture/p5.jpg'
import c6 from '../../Assests/culture/p6.jpg'
import c7 from '../../Assests/culture/p7.jpg'
import a1 from '../../Assests/Age/p1.jpg'
import a2 from '../../Assests/Age/p2.JPG'
import a3 from '../../Assests/Age/p3.jpg'
import a4 from '../../Assests/Age/p4.jpg'
import a5 from '../../Assests/Age/p5.jpg'
import a6 from '../../Assests/Age/p6.jpg'
import a7 from '../../Assests/Age/p7.jpg'
import a8 from '../../Assests/Age/p8.JPG'
import a9 from '../../Assests/Age/p9.jpg'
import a10 from '../../Assests/Age/p10.JPG'
import a11 from '../../Assests/Age/p11.jpg'
import a12 from '../../Assests/Age/p12.jpg'
function ParentScroll (){
    const Age = [a1,a2,a3,a4,a5,a7,a8,a9,a10,a11,a12];
    const Passion = [p1,p8,p5,p4,p2,p3,p9,p6,p7];
    const Culture = [c5,c2,c7,c3,c4,c6,c1];
    return (
        <>
            <div className="GrandParent">
                <Scroll index={0} images={Age} DefaultText={"Age"}/>
                <Scroll index={1} images={Passion} DefaultText={"Passion/Hobbies"}/>
                <ScrollProject DefaultText={"Projects"}/>
                <Scroll index={2} images={Culture} DefaultText={"Culture"}/>
            </div>
        </>
    );
}

export default ParentScroll;