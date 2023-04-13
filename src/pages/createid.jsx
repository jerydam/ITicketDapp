import React from 'react';
export default function MyForm() {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
   
    <div className="flex flex-row text-[#182507]  mx-6">
       
      <div className="bg-[#8f32e6] mt-10 ml-20 text-center mb-5  rounded-md justify-center w-[500px]"><br/><br/><br/><br/><br/>
       <h1>
      CREATE EVENT ID
    </h1>
    <form method="post" onSubmit={handleSubmit}>
     
            <label>
        Registeration Id: <br/>
        <input type="text" placeholder="Id"/>
      </label>
      <br/><br/><br/><br/>
      <label>
        Event Admin:<br/>
         <input type="text" placeholder="wallet address"  />
      </label>
      <br/><br/><br/><br/>

       <button className="bg-[#370368] rounded-md p-2 hover:bg-light-blue hover:text-white border-radius mb-5" type="submit">Submit form</button>
    </form>
 <br/> <br/> <br/> <br/>
 </div>

<div className="bg-[#8f32e6] mt-10 ml-40 text-center rounded-md mb-5 text-[#182507] justify-center w-[500px] h-auto">
      <h1 className="font-bold text-center my-3 justify-center ">
      CREATE EVENT
    </h1>
    <form method="post" onSubmit={handleSubmit}>
     
        <label>
        Registeration Id: <br/>
        <input type="text" placeholder="Id"/>
      </label>
      <br/><br/>
      <label>
        Number of Participant:<br/>
         <input type="number" placeholder="N0 of participant"  />
      </label>
     <br/><br/>
        <label>
      Event Start Time:<br/>
       <input type="number" placeholder="reg. start time"/>
      </label>
      <br/><br/>
      <label>
        Registeration Start time:<br/>
         <input type="number" placeholder="reg. start time"  />
      </label>
     <br/><br/>
        <label>
        Registeration End time::<br/> 
        <input type="number" placeholder="reg. end time"/>

      </label>
      <br/><br/>
      <label>
        Event End Time:<br/>
         <input type="text" placeholder="event end time"  />
      </label>
     <br/><br/>
        <label>
        Event Fee:<br/>
         <input type="number" placeholder="Price"/>
      </label>
      <br/><br/>
      <label>
        Event date:<br/> 
        <input type="number" placeholder="event date"  />
      </label>
     <br/><br/>
        <label>
        Event Uri:<br/>
         <input type="text" placeholder="event uri"/>
      </label>
      <br/><br/>
         

      <button className="bg-[#370368] rounded-md p-2 hover:bg-light-blue hover:text-white border-radius mb-5" type="submit">Submit form</button>
    </form>
    </div>
    </div>
  );
}
