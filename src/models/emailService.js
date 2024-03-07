import nodemailer from "nodemailer";

// Configuración del nodemailer
const transporter = nodemailer.createTransport({
    service:'outlook',
    auth: {
        user: 'labulacit@outlook.com', 
        pass: 'ulacit2024&' 
    }
});


// Función para enviar correo electrónico
const sendVerificationEmail = async (email, userId) => {
    const mailOptions = {
        from: 'Lab Ulacit" <labulacit@outlook.com>', // Coloca tu dirección de correo electrónico de Gmail
        to: email,
        subject: 'Verificación de cuenta',
        text: 'Por favor, haz clic en el siguiente enlace para verificar tu cuenta: http://localhost:4000/api/verificar?id=' + userId
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email enviado:', info.response);
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        throw error;
    }
};

export { sendVerificationEmail };
