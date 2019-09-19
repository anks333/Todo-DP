import express, { Request, Response } from 'express';
import { connect } from 'mongoose';
import { DBError } from './errors/DBError';
import { Todo } from './models/Todo';
import { User } from './models/User';

const app = express();

connect('mongodb://localhost:27017/test')
    .then((r) => {
        // console.log(r);
    })
    .catch((e) => {
        console.log(e);
    });

// Add Plugins
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res, next) => {
    const u = await User.findUser({ uid: 'USER-3' });

    if (!u) {
        console.log('No such user find');
        next(new DBError('yeah', 'yeah'));
    } else {
        const todos: Todo[] = await u.getTodos();
        res.json({ todos });
    }

});

app.use(function ErrorHandler(err: Error, req: Request, res: Response, next: () => void) {
    if (err instanceof DBError) {
        console.log(err.stack);
        return res.status(500).send({ error: { message: err.message}});
    }

});

app.listen(3000, function SreverListener() {
    console.log('Listening in 3000');
});
