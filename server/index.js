const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
var options = {
    height: "900px",
    width: "300px",
    border: "0",
    paginationOffset: 0
};
const pdfTemplate = require('./documents');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Function to serve all static files
// inside public directory.
app.use(express.static('public'));

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate({
        name: 'Shreyansh',
        planName: '1BHK',
        ratePerDay: 4,
        totalAplliances: 4,
        total: 100,
        tax: 18,
        discount: 50,
        planDuration: 'Monthly',
        securityDeposite: 100,
        installionCharges: 100,
        planRate: 4,
        paymentLink: ""
    }), options).toFile('result.pdf', (err) => {
        if (err) {
            console.log(err);
            return res.send("Failed");
        }

        return res.send("Success");
    });
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

app.get('/create', (req, res) => {
    pdf.create(pdfTemplate({
        name: 'Shreyansh',
        planName: '1BHK',
        ratePerDay: 4,
        totalAplliances: 4,
        total: 100,
        tax: 18,
        discount: 50,
        planDuration: 'Monthly',
        securityDeposite: 100,
        installionCharges: 100,
        planRate: 4,
        paymentLink: ""
    }), {
        ...options,
        childProcessOptions: {
            env: {
                OPENSSL_CONF: '/dev/null'
            }
        }
    }).toFile('result.pdf', (err) => {
        if (err) {
            console.log(err);
        }
    });
    return res.json({
        success: "dont know"
    });
})

app.listen(port, () => console.log(`Listening on port ${port}`));