export const arrayRemove = (arr, value) => { 
    let x = arr.filter(function(ele){ 
        return ele.id != value.id; 
    });
    return x;
}

export default arrayRemove;