export const handleDate = (date)=>{
    const d = new Date( date );
    const y = new Date().getFullYear() - d.getFullYear();
    if(y){
        return y+" years ago ";
    } 
    else if(d.getMonth()){
        return d.getMonth()+" month ago ";
    }
    else if(d.getDay()){
        return d.getDay()+" days ago ";
    }
    else if(d.getHours()){
        return d.getHours()+" hours ago ";
    }
    else if(d.getMinutes()){
        return d.getMinutes()+" minutes ago ";
    }                
    else{
        return d.getSeconds()+" seconds ago ";
    }
}
export default handleDate;