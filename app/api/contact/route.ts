import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, company, service, message } = body;

        // Validate required fields
        if (!name || !email || !phone || !service || !message) {
            return NextResponse.json(
                { error: 'Todos los campos requeridos deben ser completados' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Formato de email inválido' },
                { status: 400 }
            );
        }

        // Map service values to readable names
        const serviceNames: { [key: string]: string } = {
            'obras-civiles': 'Obras Civiles',
            'obras-electricas': 'Obras Eléctricas',
            'proyectos-fotovoltaicos': 'Proyectos Fotovoltaicos',
            'servicios-especializados': 'Servicios Especializados',
            'energia-eolica': 'Energía Eólica',
            'energia-fotovoltaica': 'Energía Fotovoltaica',
            'almacenamiento': 'Sistemas de Almacenamiento',
            'transmision': 'Transmisión y Distribución',
            'manufactura': 'Manufactura y Suministro',
            'otro': 'Otro'
        };

        const serviceName = serviceNames[service] || service;

        // Send email using Resend
        const data = await resend.emails.send({
            from: 'Grupo Horizonte <onboarding@resend.dev>',
            to: 'corarey2831@gmail.com',
            subject: `Nueva Consulta de ${name} - ${serviceName}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            line-height: 1.6;
                            color: #333;
                        }
                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                        }
                        .header {
                            background-color: #000C47;
                            color: white;
                            padding: 20px;
                            text-align: center;
                            border-radius: 8px 8px 0 0;
                        }
                        .content {
                            background-color: #f9f9f9;
                            padding: 30px;
                            border: 1px solid #ddd;
                        }
                        .field {
                            margin-bottom: 20px;
                        }
                        .label {
                            font-weight: bold;
                            color: #000C47;
                            margin-bottom: 5px;
                        }
                        .value {
                            padding: 10px;
                            background-color: white;
                            border-left: 4px solid #CED300;
                            margin-top: 5px;
                        }
                        .footer {
                            text-align: center;
                            margin-top: 20px;
                            padding: 20px;
                            background-color: #f0f0f0;
                            border-radius: 0 0 8px 8px;
                            font-size: 12px;
                            color: #666;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>Nueva Consulta desde el Sitio Web</h1>
                        </div>
                        <div class="content">
                            <div class="field">
                                <div class="label">Nombre Completo:</div>
                                <div class="value">${name}</div>
                            </div>

                            <div class="field">
                                <div class="label">Email:</div>
                                <div class="value"><a href="mailto:${email}">${email}</a></div>
                            </div>

                            <div class="field">
                                <div class="label">Teléfono:</div>
                                <div class="value"><a href="tel:${phone}">${phone}</a></div>
                            </div>

                            ${company ? `
                            <div class="field">
                                <div class="label">Empresa / Organización:</div>
                                <div class="value">${company}</div>
                            </div>
                            ` : ''}

                            <div class="field">
                                <div class="label">Servicio de Interés:</div>
                                <div class="value">${serviceName}</div>
                            </div>

                            <div class="field">
                                <div class="label">Mensaje:</div>
                                <div class="value">${message.replace(/\n/g, '<br>')}</div>
                            </div>
                        </div>
                        <div class="footer">
                            <p>Este mensaje fue enviado desde el formulario de contacto de grupohorizonte.com</p>
                            <p>Fecha: ${new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })}</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        });

        return NextResponse.json(
            { message: 'Email enviado exitosamente', data },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error al enviar email:', error);
        return NextResponse.json(
            { error: 'Error al enviar el mensaje. Por favor intenta de nuevo.' },
            { status: 500 }
        );
    }
}
