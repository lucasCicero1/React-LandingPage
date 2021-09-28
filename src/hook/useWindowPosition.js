
import { useLayoutEffect, useState } from "react";


export default function useWindowPosition(id){

    const [animation, setAnimation] = useState(false);

    useLayoutEffect(() => {
        function updatePosition(){
            const heightOffSet = window.document.getElementById(id).offsetHeight;
            console.log("windowpageOffset", window.pageYOffset, heightOffSet)
            if (window.pageYOffset > heightOffSet * 0.7){
                setAnimation(true)
            }
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);

    }, [id]);
    return animation;

}