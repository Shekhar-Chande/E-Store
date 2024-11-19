const obj =[
    {
    id: 1,
    fname: 'shekhar',
    lname: 'bhardwaj',
    'Unnamed: 0': '0' 
},

{
    id: 2,
    fname: 'Tarun',
    lname: 'bhardwaj',
    'Unnamed: 0': '1' 
}
]

let numv = 1

obj.map((e)=>{
    // if(e["Unnamed: 0"] != numv)
    
        //console.log("found");

    

        { 
            // obj.map((e)=>  (e["Unnamed: 0"] != numv) ? console.log(e.lname[numv]) : null) 
            // obj.map((e)=>((e.id === numv) ? console.log(e.lname): null))
            if(e["Unnamed: 0"] == numv)
            {
                return(
                    console.log(e.fname)
                )
            }

            else{
                return null
            }

        }
        
    
    
    //console.log(e["Unnamed: 0"])
})