const  findHashtags = (searchText) =>{
    const  regexp = /\B\#\w\w+\b/g
    let result = searchText.match(regexp);
    if (result) {
        return result;
    } else {
        return false;
    }
}