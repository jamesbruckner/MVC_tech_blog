const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Nice article!",
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text: "Return Bilbo to me!",
        user_id_: 2,
        post_id: 1,
    },
    {
        comment_text: "Interesting. Can I hire Bilbo plz??",
        user_id: 3,
        post_id: 1,
    },
    {
        comment_text: "Nice, real nice. Is this what AMERICA HAS COME TO? :(",
        user_id: 4,
        post_id: 1,
    },
    {
        comment_text: "This is so funny!",
        user_id: 2,
        post_id: 2,
    },
    {
        comment_text: "How could you say something so controversial yet so brave?",
        user_id: 3,
        post_id: 2,
    },
    {
        comment_text: "Bilbo is very happy here in Westchester NY and has repeated voiced his negative opinions of England and its antiquated system of Monarchy. Please stup pursuing custody of Bilbo.",
        user_id: 5,
        post_id: 3,
    },
    {
        comment_text: "Your time has passed, old man. We're all Money Dogs and Gargoyle Activists here!",
        user_id: 1,
        post_id: 4,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;