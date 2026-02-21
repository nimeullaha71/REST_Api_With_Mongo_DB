const getAllUsers = (req,res)=>{
    res.status(200).json({
        message : "all users"
    });
};

const getOneUser = (req,res)=>{
    res.status(200).json({
        message : "Single user "
    });
};

const createUser = (req,res)=>{
    res.status(201).json({
        message : "User Created successfully"
    });
};

const updateUser = (req,res)=>{
    res.status(201).json({
        message : "Update user successfully"
    });
};

const deleteUser = (req,res)=>{
    res.status(200).json({
        messgae : "Delete user Successfully"
    });
};

module.exports = {getAllUsers,getOneUser,createUser,updateUser,deleteUser};