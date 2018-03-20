import {
  addNewContact,
  getContacts,
  getContactWithEmail,
  updateContact,
  deleteContact,
  findContactByEmail,
  getInitialResponse,
} from "../controllers/appController";

const routes = (app) => {
  app.route('/')
    .get(getInitialResponse)
    
    .post(addNewContact)
 
  app.route('/:userEmail')
    .get(getContactWithEmail)
    
    .put(updateContact)
    
    .delete(deleteContact); 
}

export default routes;