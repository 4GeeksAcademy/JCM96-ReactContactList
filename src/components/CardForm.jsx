const CardForm = () => (
  <form className="row px-5">
    <h5 className="h5AddContact">Full Name</h5>
    <input className="border-light rounded-pill " type="text" placeholder="Full Name" />
    <h5 className="h5AddContact rounded-pill">Email</h5>
    <input className="border-light rounded-pill" type="email" placeholder="Enter Email" />
    <h5 className="h5AddContact rounded-pill">Phone</h5>
    <input className="border-light rounded-pill" type="number" placeholder="Enter Number" />
    <h5 className="h5AddContact rounded-pill">Address</h5>
    <input className="border-light rounded-pill" type="text" placeholder="Enter Address" />
    <button class="btn btn-primary mt-3 col-auto rounded-pill w-100 my-2" type="button">Save</button>
  </form>
);
export default CardForm;