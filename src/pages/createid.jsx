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
    <div className="mt-5">
       <h1>
      CREATE EVENT ID
    </h1>
    <form method="post" onSubmit={handleSubmit}>
     
            <label>
        Registeration Id: <input type="text" placeholder="Id"/>
      </label>
      <hr />
      <label>
        Event Admin: <input type="text" placeholder="wallet address"  />
      </label>
      <hr />

      <button type="submit">Submit form</button>
    </form>
 <br/> <br/> <br/> <br/>

      <h1>
      CREATE EVENT
    </h1>
    <form method="post" onSubmit={handleSubmit}>
     
        <label>
        Registeration Id: <input type="text" placeholder="Id"/>
      </label>
      <br/>
      <label>
        Number of Participant: <input type="number" placeholder="Event URI"  />
      </label>
     <br/>
        <label>
      Event Start Time: <input type="number" placeholder="Event Name"/>
      </label>
      <br/>
      <label>
        Registeration Start time: <input type="number" placeholder="wallet address"  />
      </label>
     <br/>
        <label>
        Registeration End time:: <input type="number" placeholder="Id"/>
      </label>
      <br/>
      <label>
        Event End Time: <input type="text" placeholder="wallet address"  />
      </label>
     <br/>
        <label>
        Event Fee: <input type="number" placeholder="Price"/>
      </label>
      <br/>
      <label>
        Event date: <input type="number" placeholder="wallet address"  />
      </label>
     <br/>
        <label>
        Event Uri: <input type="text" placeholder="Id"/>
      </label>
      <br/>
         

      <button type="submit">Submit form</button>
    </form>
    </div>
  );
}
