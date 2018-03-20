import {
  addNewContact,
  getContacts,
  getContactWithEmail,
  updateContact,
  deleteContact,
  findContactByEmail,
  getInitialResponse,
  postEmptyBody,
} from "../controllers/appController";

const routes = (app) => {
  app.route('/')
    .get(getInitialResponse)
    
    .post(addNewContact);
 
  app.route('/:userEmail')
    .get(getContactWithEmail)

    .post(postEmptyBody)
    
    .put(updateContact)
    
    .delete(deleteContact); 
}

export default routes;