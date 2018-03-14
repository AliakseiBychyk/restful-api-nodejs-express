import mongoose from 'mongoose';
import CheckSchema from '../models/checkModel'

const Check = mongoose.model('Check', CheckSchema)

export const getPostCheckData = (req, res) => {
 
}