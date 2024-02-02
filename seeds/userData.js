const { User } = require('../models');

const userData = [
    {
        username: "GargDog55",
        email: "ploopydoop@mail.com",
        password: "password1"
    },
    {
        username: "iamtehQeuen",
        email: "TheQueenOfEngland@buckingham.com",
        password: "papsworf?"
    },
    {
        username: "I_am_rich",
        email: "richardboyle111@yahoo.com",
        password: "moneyMove5!"
    },
    {
        username: "MAGAMod1",
        email: "BilliamGrudd79@hotmail.com",
        password: "America1776$"
    },
    {
        username: "DogDadMoneyBags",
        email: "Woofman@caninesolutions.com",
        password: "barkbarkbark",
    },
    {
        username: "StoneJustice",
        email: "mistermoto@gmail.com",
        password: "rockwings1!"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;