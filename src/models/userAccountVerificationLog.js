import mongoose from "mongoose";

const userAccountVerificationLogSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users',
            required: true
        },
        emailSentAt: {
            type: Date,
            default: Date.now
        },
        clickedAt: {
            type: Date,
            default: null
        }
    },
    { timestamps: true }
);

const UserAccountVerificationLogModel = mongoose.model("UserAccountVerificationLog", userAccountVerificationLogSchema);

export default UserAccountVerificationLogModel;
