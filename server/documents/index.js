module.exports = ({
    name,
    total,
    tax,
    planRate,
    discount,
    planDuration,
    planName,
    ratePerDay,
    totalAplliances,
    securityDeposite,
    installionCharges,
    paymentLink
}) => {
    const today = new Date();
    const fonts = __dirname + '/Manrope-VariableFont_wght.ttf';


    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dis = discount == 0 ? "none" : "";
    console.log(fonts);
    let offer = ""
    switch (planDuration) {
        case "Monthly":
            offer = "";
            break;
        case "Quarterly":
            offer = "+ 10 Days Free";
            break;
        case "Semi Annualy":
            offer = "+ 1 Month Free";
            break;
        case "Annualy":
            offer = "+ 3 Months Free";
            break;
        default:
            break;
    }
    const d = new Date();
    let nameOfMonth = month[d.getMonth()];
    return `
    <!doctype html>
    <html>
    
    <head>
        <meta charset="utf-8">
        <title>PDF Result Template</title>
        <style>
            @font-face {
                font-family: 'Manrope';
                src: url("http://localhost:5000/Manrope-VariableFont_wght.ttf") format('truetype');
            }
            body {
                margin: 0;
                padding: 0;
                font-family: 'Manrope';
            }
    
         
    
            .pdf-container {
                background-color: #E5EAF5;
                height: 100%;
            }
    
            .top-container-pdf {
                position: relative;
                background: #FFFFFF;
            }
    
            .logoPdf {
                margin-top: 15%;
                width: 50.01px;
                height: 44.71px;
            }
    
            .logoHeadding {
                font-family: 'Manrope';
                font-weight: lighter !important;
                font-size: 28px;
                line-height: 40px;
                color: rgba(14, 17, 42, 0.7);
            }
    
            .logoSubHead {
                font-family: 'Manrope';
                font-weight: 800 !important;
                font-size: 28px;
                line-height: 40px;
                color: #0E112A;
            }
    
            .logoSubHeader {
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                color: rgba(14, 17, 42, 0.7);
                padding-bottom: 5%;
            }
    
            .houseImage {
                position: absolute;
                right: 0;
                top: 20%
            }
    
            .name-container {
                padding-left: 5%;
                padding-right: 5%;
                margin-top: 8%;
                margin-bottom: 8%;
            }
    
            .name-pdf {
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 800;
                font-size: 28px;
                line-height: 40px;
                color: #0E112A;
    
            }
    
            .date-of-bill {
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                color: rgba(14, 17, 42, 0.7);
            }
    
            .date-subHeading {
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 400;
                font-size: 13px;
                line-height: 18px;
                color: rgba(14, 17, 42, 0.7);
    
            }
    
            .pdf-Plan-container {
                background: #FFFFFF;
                border-radius: 12px;
                margin-left: 5%;
                margin-right: 5%;
                padding-left: 5%;
                padding-right: 5%;
                padding-top: 4%;
                margin-bottom: 5%;
            }
    
            .pdf-plan-device {
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 16px;
                color: rgba(14, 17, 42, 0.7);
                margin-top: 3%;
                margin-bottom: 5%;
            }
    
            .plan-duration-pdf {
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 700;
                font-size: 12px;
                line-height: 16px;
                color: rgba(14, 17, 42, 0.7);
            }
    
            .plan-duration-offer-pdf {
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 700;
                font-size: 12px;
                line-height: 16px;
                color: #4C9D89
            }
    
            .plan-duration-pdf-container {
                padding: 4% 0;
            }
    
            .pdf-plan-detail {
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 20px;
                color: rgba(14, 17, 42, 0.7);
            }
    
            .pdf-plan-detail-total {
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 800;
                font-size: 16px;
                line-height: 22px;
                color: rgba(14, 17, 42, 0.9);
    
            }
    
            .total-rate {
                padding-bottom: 5%;
            }
    
            .payment-button-container {
                margin-left: 5%;
    
                width: 90%;
                height: 52px;
                line-height: 52px;
                background: #2552B2;
                border-radius: 12px;
                text-align: center;
    
                vertical-align: middle;
                filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.16));
            }
    
            .payment-amount {
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 20px;
                /* identical to box height, or 125% */
    
                text-align: center;
    
                color: #FFFFFF;
            }
    
            #link {
                text-decoration: none;
            }
        </style>
    </head>
    
    <body>
        <div class='pdf-container' ref={ref}>
            <div class='top-container-pdf'>
                <img class="logoPdf" src="http://localhost:5000/logoPdf.png" alt='pdf-logo' />
                <div>
                    <span class='logoHeadding'>Welcome to</span> <br />
                    <span class='logoSubHead'>Aliste</span>
                </div>
                <div class='logoSubHeader'>
                    India’s fastest growing <br /> Community of Smart Home Users.
                </div>
                <img class='houseImage' src="http://localhost:5000/housePdf.png" alt='housePdf' />
            </div>
    
            <div class='name-container'>
                <div class='name-pdf'>${name}</div>
                <div class='date-of-bill'>${`${today.getDate()} ${nameOfMonth} ${today.getFullYear()}`}</div>
                <hr style="border: 1px dashed rgba(0, 0, 0, 0.2)">
                </hr>
                <div class='date-subHeading'>The plan will start from the date of installation</div>
            </div>
            <div class="pdf-Plan-container">
                <div><span>${planName} Plan</span><span style="float:right">₹ ${ratePerDay}/day</span></div>
                <div class='pdf-plan-device'>${totalAplliances} appliances will be automated</div>
                <hr style="border: 1px dashed rgba(0, 0, 0, 0.1);margin:0">
                </hr>
                <div class='plan-duration-pdf-container'>
                    <span class='plan-duration-pdf'>${`${planDuration} plan`} </span>
                    <span class='plan-duration-offer-pdf'>${offer}</span>
                </div>
            </div>
            <div class='pdf-Plan-container'>
                <div><span class='pdf-plan-detail'>${planDuration} subscription fee </span><span style="float:right">₹
                        ${planRate}</span></div>
                <div><span class='pdf-plan-detail'>Security deposit (refundable)</span><span style="float:right">₹
                        ${securityDeposite}</span></div>
                <div><span class='pdf-plan-detail'>Installation fee (one time)</span><span style="float:right">₹
                        ${installionCharges}</span></div>
                <div style='display:block'><span class='pdf-plan-detail'>Discount</span><span
                        style="float:right;color: rgba(33, 154, 81, 0.9)">- ₹ 100</span></div>
                <div><span class='pdf-plan-detail'>Taxes & charges</span><span style="float:right">₹ ${tax}</span></div>
                <hr style="border: 1px dashed rgba(0, 0, 0, 0.1)">
                </hr>
                <div class='total-rate'><span class='pdf-plan-detail-total'>Total Bill</span><span style="float:right">₹
                        ${total}</span></div>
            </div>
            <a id="link" href=${paymentLink}>
                <div class='payment-button-container'>
                    <span class='payment-amount'>Pay ₹ ${total}</span>
                </div>
            </a>
        </div>
    </body>
    
    </html>
    `;
};