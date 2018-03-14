import { addNewContact, getContacts } from "../controllers/appController";

const routes = (app) => {
  app.route('/contact')
    // GET endpoint  
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl} `)
      console.log(`Request type: ${req.method} `)
      next();
    }, getContacts)

    // POST endpoint
    .post(addNewContact);
  
  app.route('/contact/:contactId')
    .put((req, res) =>
      res.send('PUT request successfull!!!'))
    
    .delete((req, res) =>
      res.send('DELETE request successfull!!!')); 
}

export default routes;