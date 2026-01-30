import express from "express";

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (res, req) => {
    req.render('index', { title: 'Home'});
});

app.get('/about', (res, req) =>{
    req.render('about', {title: 'About'})
});

app.get('/service', (res, req) =>{
    req.render('services', {title: 'Services'})
});

app.get('/blog', (res, req) =>{
    req.render('blog',{title: "Blog"})
});

app.get('/contact', (res, req) =>{
    req.render('contact', {title: 'Contact'})
});

app.listen(PORT, () => {
    console.log(`Server runing on http://localhost:${PORT}/`)
});