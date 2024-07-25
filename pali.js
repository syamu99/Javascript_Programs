function pallindrome(str){
        let rev = str.split("").reverse().join("");
    
        if(rev == str){
            return true
        }
        return false
    }
    let str1 ="121";
    let str2 = "nitin";
    let str3 = "git";
    
    console.log(pallindrome(str1))
    console.log(pallindrome(str2))
    console.log(pallindrome(str3))