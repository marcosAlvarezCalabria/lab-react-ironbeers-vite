function AddBeerPage() {
    return (
        <form>
  <div class="form-group  mb-2 ">
    <label type="text">Name</label>
    <input className="form-control" type="text"  name="name"  placeholder="Name"/>
  </div>
  <div class="form-group  mb-2">
    <label type="text">Tagline</label>
    <input className="form-control" type="text"  name="tagline"  placeholder="Tagline"/>
  </div>
  <div class="form-group  mb-2">
    <label >Description</label>
    <textarea className="form-control" type="textArea"  name="description"  placeholder="Description"/>
  </div>
  <div class="form-group  mb-2">
    <label type="text">First brewed</label>
    <input className="form-control" type="text"  name="first_brewed"  placeholder="First brewed"/>
  </div>
  <div class="form-group  mb-2">
    <label type="text">Attenuation level</label>
    <input className="form-control" type="number"  name="Attenuation level"  placeholder="Attenuation level"/>
  </div>
  <div class="form-group  mb-2">
    <label type="text">Contributed By</label>
    <input className="form-control" type="text"  name="Contributed_by"  placeholder="Contributed By"/>
  </div>
 
  
  <button type="submit" class="btn btn-primary">Add beer</button>
</form>
    )
}

export default AddBeerPage;
