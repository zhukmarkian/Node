const mailer = require('nodemailer');
const EmailTemplates = require('email-templates');
const path = require('path');
const { ROOT_EMAIl, ROOT_EMAIL_PASSWORD } = require('../configs/config');
const templatesInfo = require('../email-templates');

const templateParser = new EmailTemplates({
    views: {
        root: path.join(process.cwd(), 'email-templates')
    }
});
const transporter = mailer.createTestAccount({
    service: 'gmail',
    auth: {
        user: ROOT_EMAIl,
        pass: ROOT_EMAIL_PASSWORD
    }
});

const sendMail = async (userMail, action, context) => {
    try {
        const templateInfo = templatesInfo[action];

        if (!templateInfo) {
            throw new Error('Wrong mail action');
        }
        const html = await templateParser.render(templateInfo.templateName, context);
        return transporter.sendMail({
            from: 'NO REPLY',
            to: userMail,
            subject: templateInfo.subject,
            html
        });
    } catch (e) {
        console.log(e);
    }
};
module.exports = {
    sendMail
};
