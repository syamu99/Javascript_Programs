const transformData = (data)=>{
    result = []
    for(let key in data){
        if(data.hasOwnProperty(key)){
            const nestedObj = data[key]
            value=[]
            for(let nestedkey in nestedObj){
                if(nestedObj.hasOwnProperty(nestedkey)){
                    value.push(nestedObj[nestedkey])
                    
                }
            }
            result.push(value)
        }
    }
    return result
}

// Input data
const data = {
  "Period": {
    "Period": 0
  },
  "Previouspublish": {
    "Period": 0.1,
    "Previouspublish": 1.0
  },
  "Revised": {
    "Period": 0.1,
    "Previouspublish": 0.9694554292627579,
    "Revised": 1.0
  },
  "Pregnancies": {
    "Period": 0.1,
    "Previouspublish": 0.024777734602593818,
    "Revised": 0.01956708257861141,
    "Pregnancies": 1.0
  }
};

// Transform the data
const output = transformData(data);

// Log the output
console.log(output);