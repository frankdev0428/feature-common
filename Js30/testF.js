

function expect(val) {
    return {
        toBe: function(otherVal) {
            if(val !== otherVal){
                throw new Error("Not Equal");
            }
            return {"value": true};
        },
        notToBe: function(otherVal) {
            if(val === otherVal) {
                throw new Error("Equal");
            }
            return {"value": true};
        }
    }
}

try{
    const result1 = expect(5).toBe(5);
    console.log(result1); //Output: {"value":true}
} catch(error) {
    console.log({"error": error.message})
}

try {
    const result2 = expect(5).toBe(null);
    console.log(result2);
} catch(error) {
    console.log({"error": error.message});
}

try {
    const result3 = expect(5).notToBe(null);
    console.log(result3); //
} catch {
    console.log({"error": error.message});
}