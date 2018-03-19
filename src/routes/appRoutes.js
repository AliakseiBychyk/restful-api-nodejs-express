import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact,
  findContactByEmail,
} from "../controllers/appController";

const routes = (app) => {
  app.route('/')
    .get((req, res) => {
      if (!req.query.email) {
        res.send('Please execute request with your email in query')
      } else if (!!req.query.email) {
        res.send(`
          Create a user with mandatory email field \n
          if your user exists -> navigate to your user endpoit '/:yourEmail'
        `)
      }
    })
    .post(addNewContact)
 
  // app.route('/contact/:email')
  //   .get(getContactWithID)
    
  //   .put(updateContact)
    
  //   .delete(deleteContact); 
}

export default routes;