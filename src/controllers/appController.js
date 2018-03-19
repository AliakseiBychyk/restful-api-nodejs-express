import mongoose from 'mongoose'
import ContactSchema from '../models/appModel'

const Contact = mongoose.model('Contact', ContactSchema)

//    '/' endpoint    
const checkUser = (user, cb) => {
  Contact.find({ email: user.email }, (err, contact) => {
    if (!!contact.length) {
      cb('User already exists', null)
    } else {
      user.save((err, contact) => {
        cb(err, user)
      })
    }  
  })
}

export const addNewContact = (req, res) => {
  const message = 'Add firstName, lastName, company and phone to your contact' 
  let newContact = new Contact({ ...req.body, message })
  checkUser(newContact, (err, user) => {
    if (err || !user) return res.json({status: 500, error: err})
    res.json(user)
  })
}


//   '/:email' endpoint 
export const getContactWithEmail = (req, res) => {
  Contact.find({email: req.params.userEmail}, (err, contact) => {
    if (err) return res.send({ status: res.statusCode, error: err })
    else if (contact.length === 0) return res.send('Contact doesn\'t exist, check email address')
    
    res.json(contact)
  })
}

export const updateContact = (req, res) => {
  Contact.findOneAndUpdate({ email: req.params.userEmail }, req.body, { new: true }, (err, contact) => {
    if (err) res.send(err)
    
    res.json(contact)
  })
}

export const deleteContact = (req, res) => {
  Contact.remove({ email: req.params.userEmail }, (err, contact) => {
    if (err) res.send(err)

    res.json({ message: 'Successfully deleted contact'})
  })
}