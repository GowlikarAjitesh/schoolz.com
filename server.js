import express from "express";
import bcrypt from "bcrypt";
// init server

// const path = require('path');
// const user = require('./config');
// const bodyParser = require('body-parser');
// const knex = require('knex');
const app = express();

//middle wares
app.use(express.static("public"));
app.use(express.json());
// app.use(cors());

app.get('/', (req, res) => {
    res.sendFile("index.html", { root: "public" });
})
// sign up
app.get('/signup', (req, res) => {
    res.sendFile("signup.html", { root: "public" });
})

app.post('/signup', (req, res) => {
    const { name, email, password, phone, tac } = req.body;

    // form validations
    if (name.length < 3) {
        res.json({ 'alert': 'Name must be 3 letters long' });
    }
    else if (!email.length) {
        res.json({ 'alert': 'Enter your Email' });
    }
    else if (password.length < 8) {
        res.json({ 'alert': 'Password should be 8 letters long' });
    }
    else if (!phone.length) {
        res.json({ 'alert': 'Enter your Phone Number' });
    }
    else if (!Number(phone) || (phone.length < 10) || (phone.length > 10)) {
        res.json({ 'alert': 'Invalid number, please enter valid one' });
    }
    else if (!tac) {
        res.json({ 'alert': 'you must agree to our terms and conditions' });
    }
    else {
        //store in database
        const users = collection(dp, "users");
        getDoc(doc(users, email)).then(user => {
            if (user.exists()) {
                return res.json({ 'alert': 'email already exits' })
            }
            else {
                bcrypt.genSalt(10, (msg, salt) => {
                    bcrypt.hash(password, salt, (msg, hash) => {
                        req.body.password = hash;
                        req.body.seller = false;

                        //set the doc
                        setDoc(doc(users, email), req.body).then(data => {
                            res.json({
                                name: req.body.name,
                                email: req.body.email,
                                seller: req.body.seller
                            })
                        })
                    })
                })
            }
        })
    }
})

app.get('/login', (req, res) => {
    res.sendFile('login.html', { root: "public" });
})

app.post('/login', (req, res) => {
    let { email, password } = req.body;
    if (!email.length || !password.length) {
        res.json({ 'alert': 'Fill all the inputs' })
    }
    const users = collection(dp, "users");
    getDoc(doc(users, email))
        .then(user => {
            if (!user.exists()) {
                return res.json({ 'alert': 'Email does not Exists' });
            }
            else {
                bcrypt.compare(password, user.data().password, (msg, result) => {
                    if (result) {
                        let data = user.data();
                        return res.json({
                            name: data.name,
                            email: data.email,
                            seller: data.seller
                        })
                    }
                    else {
                        return res.json({ 'alert': 'Password is Incorrect' })
                    }
                })
            }
        })
})

app.get('/products-narayana-boys-regular-shirt', (req, res) => {
    res.sendFile("sProduct.html", { root: "public" });
})
app.get('/products-narayana-boys-white-shirt', (req, res) => {
    res.sendFile("sProduct2.html", { root: "public" });
})

app.get('/shop', (req, res) => {
    res.sendFile("shop.html", { root: "public" });
})

app.get('/help', (req, res) => {
    res.sendFile("help.html", { root: "public" });
})

app.get('/cart', (req, res) => {
    res.sendFile("cart.html", { root: "public" });
})

app.post('/cart', (req, res) => {
    const { item, name, size, price, image, shortDes, count } = req.body;
    const products = collection(dp, "products");
    getDoc(doc(products, name)).then(products => {
        setDoc(doc(products, name), req.body).then(data => {
            res.json({
                item: req.body.item,
                name: req.body.name,
                size: req.body.size,
                price: req.body.price,
                image: req.body.image,
                shortDes: req.body.shortDes,
                count: req.body.count
            })
        })
    })
})


app.post('/submit-suggestion', (req, res) => {
    let { qname, qsubject, qmessage, qemail } = req.body;

    if (qemail.length == 0 || qname.length == 0 || qmessage.length == 0) {
        res.json({ 'alert': 'Fill all the inputs' });
    }
    else {
        const query = collection(dp, "query");
        getDoc(doc(query, qemail)).then(query => {
            setDoc(doc(query, qemail), req.body).then(data => {
                res.json({
                    qname: req.body.qname,
                    qemail: req.body.qemail,
                    qsubject: req.body.qsubject,
                    qmessage: req.body.qmessage
                })
            })
        })
    }
});


app.get('/checkout', (req, res) => {
    res.sendFile("checkout.html", { root: "public" });
})
//404 route
app.get('/404', (req, res) => {
    res.sendFile("404.html", { root: "public" });
})

app.use((req, res) => {
    res.redirect('/404');
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})

