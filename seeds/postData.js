const { Post } = require('../models');

const postData = [
    {
        title: "My Dog Handles My Finances!",
        content: "Bilbo, my French Bulldog, has brought unprecedented prosperity to my family with his understanding of the stock market and aggressive investment in venture capital. He's also a ruthless landlord.",
        user_id: 5,
    },
    {
        title: "America's forgotten Gargoyles",
        content: "Sure we, all love gargoyles, but did you know??? that in 50 states, they are not even allowed to vote!! I find this Outrageous and will outline my proposal of restorative justice in a 30 thousand word essay at a later date. Not here, some other time.",
        user_id: 6,
    },
    {
        title: "tset",
        content: "thsi is a  tesst psot from ME, teh QWEEEEEEEN of eeenglund. I m here to Find MY DIOG BILDO!!! :(",
        user_id: 2,
    },
    {
        title: "It's time to set the record straight",
        content: "You all know me here. I'm getting real frustrated with where this board has gone. No more dog financial advisors or voting gargoyles!",
        user_id: 4,
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;