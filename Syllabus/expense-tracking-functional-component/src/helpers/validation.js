
export const alphanumeric=(input)=>{
         return /^[a-zA-Z0-9]{3,50}$/.test(input);
}

export const email=(input)=>{
     return /^.+@[a-z]{3,8}\.(com|in)$/.test(input);
}

export const password=(input)=>{
    return /^[a-zA-Z0-9&-_#@]{3,50}$/.test(input);
}