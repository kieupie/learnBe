const connection = require('../config/database')
const {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
} = require('../services/CRUD.service.js');


const getHomePage = async (req, res) => {

    // //simple query
    // let users = [];
    // connection.query(
    //     'SELECT * FROM Users',
    //     function (err, results, fields) {
    //         users = results;

    //         console.log('Home - results', results)
    //         console.log('Home - fields', fields)

    //         res.send(JSON.stringify(users))
    //     }
    // )

    //homepage

    let results = await getAllUsers();
    console.log('Create user successfully', results)
    return res.render('home.ejs', { listUsers: results })

};

const getSample = (req, res) => {
    res.render('sample')
};

const getCreateUser = (req, res) => {
    return res.render('create.ejs')
};

const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body

    await createUser(email, name, city)
    return res.send('Created user successfully');
};

const getUpdateUser = async (req, res) => {
    const userId = req.params.id
    const user = await getUserById(userId)

    return res.render('update.ejs', { userUpdate: user })
};

const postUpdateUser = async (req, res) => {
    let { email, name, city, userId } = req.body

    await updateUserById(email, name, city, userId)

    return res.send('Updated user successfully');
};

const postDeleteUser = async (req, res) => {
    const userId = req.params.id
    const user = await getUserById(userId)
    return res.render('delete.ejs', { userDelete: user })
};

const postHandleDeleteUser = async (req, res) => {
    const id = req.body.userId
    await deleteUserById(id)
    return res.redirect('/');
};

module.exports = {
    getHomePage, getSample,
    getCreateUser,
    postCreateUser,
    getUpdateUser,
    postUpdateUser,
    postDeleteUser,
    postHandleDeleteUser,
}