import mongoose from 'mongoose'
import ContactSchema from '../models/appModel'

const Contact = mongoose.model('Contact', ContactSchema)

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
  let newContact = new Contact(req.body)
  checkUser(newContact, (err, user) => {
    if (err || !user) res.send(err)
    res.json(user)
  })
}


export const getContacts = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) res.send(err)
    
    res.json(contact)
  })
}

export const getContactWithID = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) res.send(err)
    
    res.json(contact)
  })
}

export const updateContact = (req, res) => {
  Contact.findOneAndUpdate({ email: req.params.contactId }, req.body, { new: true }, (err, contact) => {
    if (err) res.send(err)
    
    res.json(contact)
  })
}

export const deleteContact = (req, res) => {
  Contact.remove({ email: req.params.contactId }, (err, contact) => {
    if (err) res.send(err)

    res.json({ message: 'Successfully deleted contact'})
  })
}