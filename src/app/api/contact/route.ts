import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Call Web3Forms API
        // Documentation: https://docs.web3forms.com/
        const apiKey = process.env.WEB3FORMS_ACCESS_KEY;

        if (!apiKey) {
            console.warn('Web3Forms Access Key missing in environment variables.');
            // return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
            // For demo purposes, we will rely on client-side or assume it might work if the user adds it later, but strictly we need it.
        }

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                access_key: apiKey,
                name,
                email,
                message,
                subject: `New Portfolio Message from ${name}`
            })
        });

        const result = await response.json();

        if (result.success) {
            return NextResponse.json(
                { message: 'Email sent successfully via Web3Forms' },
                { status: 200 }
            );
        } else {
            console.error('Web3Forms error:', result);
            return NextResponse.json(
                { error: result.message || 'Failed to send message.' },
                { status: 500 }
            );
        }

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to send message properly.' },
            { status: 500 }
        );
    }
}
