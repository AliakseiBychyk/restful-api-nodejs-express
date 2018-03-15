import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact,
} from "../controllers/appController";

const routes = (app) => {
  app.route('/contact')    
    .get((req, res, next) => {    
      // here I place a middleware to intercept request data for further
      // use, e.g. collecting results for tasks evaluation 
      console.log(`Request from: ${req.originalUrl}`)
      console.log(`Request type: ${req.method}`)
      next();
    }, getContacts)

    .post(addNewContact);
  
  app.route('/contact/:contactId')
    .get(getContactWithID)
    
    .put(updateContact)
    
    .delete(deleteContact); 
}

export default routes;