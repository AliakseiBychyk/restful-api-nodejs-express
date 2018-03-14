import { addNewContact, getContacts, getContactWithID } from "../controllers/appController";

const routes = (app) => {
  app.route('/contact')
    // GET endpoint  
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`)
      console.log(`Request type: ${req.method}`)
      next();
    }, getContacts)

    // POST endpoint
    .post(addNewContact);
  
  app.route('/contact/:contactId')
    // GET specific contact by ID
    .get(getContactWithID)
    
    // PUT request
    .put((req, res) =>
      res.send('PUT request successfull!!!'))
    
    // DLETE request
    .delete((req, res) =>
      res.send('DELETE request successfull!!!')); 
}

export default routes;