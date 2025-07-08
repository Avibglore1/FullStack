import mongoose from "mongoose";

const orderItemsSchema = new mongoose.Schema({
    prdoductId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    quantity:{
        type:Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        required: true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    orderItems:[orderItemsSchema],
    address:{
        type: String
    },
    status:{
        type: String,
        enum: ['pending','cancelled','delivered'],
        default: pending
    }
},{timestamps:true})

export const Order=mongoose.model('Order',orderSchema)