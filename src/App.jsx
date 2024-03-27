import React, { useState } from "react";
const App = ()=>{

    const [fullName,setFullName]=useState({   //in useState,we can pass object also
        fname: "",
        lname: "",
        email: "",
        phone: "",
        qua: "",
    });  

    const inputEvent =(event)=>
    {
        console.log(event.target.value);
        console.log(event.target.name);

       // const value=event.target.value;
       // const name=event.target.name;
       const{value, name} =event.target;

        
        setFullName((preValue) => {
        console.log(preValue);

        return{
            ...preValue,
            [name]: value,
        };


           //  if(name==="fname"){
           //   return{
            //   fname: value,
             //  lname: preValue.lname,
             //  email:preValue.email,
            //  phone:preValue.phone,
            
        //};
       //  } else if (name === "lName"){
         //  return{
        
         //     fname: preValue.fname,
         //     lname: value,
         //     email:preValue.email,
         //     phone:preValue.phone,
           //   };

        // }else if (name === "email"){
         //  return{
        
         //   fname: preValue.fname,
          //    lname:preValue.lname,
          //    email:value,
          //    phone:preValue.phone,
      //  };
   // }else if (name === "phone"){
      //  return{
        
        //    fname: preValue.fname,
         //   lname: preValue.lname,
         //   email:preValue.email,
        //    phone:value,
      //  };
   // }

});
    };

    const onSubmit=(event)=>
    {
    event.preventDefault();
    alert("form submitted")
    
    }
    

   
   
    return (
        <>
        <div className="main_div">
        <form onSubmit={onSubmit}>
            <div>
                <h1>Hello {fullName.fname} {fullName.lname}</h1>
                <p>{fullName.email}</p>
                <p>{fullName.phone}</p>
                <p>{fullName.qua}</p>

                <input type="text" placeholder="Enter your Name"
                    name='fname'
                    onChange={inputEvent}
                     value={fullName.fname}
                />
                <br/>
                
                <input type="text" placeholder="Enter your LastName"
                    name='lname'
                    onChange={inputEvent}
                   value={fullName.lname}
                />
                 <input type="email" placeholder="Enter your email"
                    name='email'
                    onChange={inputEvent}
                    value={fullName.email}
                    autoComplete="off"    //so that actual email id is not shown while filling
                />
                 <input type="number" placeholder="Enter your phone"
                    name='phone'
                    onChange={inputEvent}
                    value={fullName.phone}
                />
                 <input type="text" placeholder="Enter your qualification "
                    name='qua'
                    onChange={inputEvent}
                    value={fullName.qua}
                />
                <button type="submit" >Submit Me 👍</button>
            </div>
            </form>
            </div>
        </>
    )
};
export default App;