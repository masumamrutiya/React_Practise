import React from 'react'
import Drive from './component/Drive';

function Grade() {
    const marks=90;
    if(marks<=100 && marks>=90){
        return <Drive grade="A"/>
    }else if(marks>=80 && marks<90){
        return <Drive grade="B"/>
    }else if(marks>=70 && marks<80){
        return <Drive grade="C"/>
    }else if(marks<70 && marks>35){
        return <Drive grade="D"/>
    }else if(marks>100 || marks<0){
        return <Drive grade="invalid marks"/>
    }else{
        return <Drive grade="FAIL"/>
    }
//   return (
//     <> </>
//   )
}

export default Grade