import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validasyon
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Lütfen tüm zorunlu alanları doldurun.' },
        { status: 400 }
      )
    }

    // Email gönderme
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: 'gamzeyuceeer@gmail.com',
          replyTo: email,
          subject: `İletişim Formu: ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #9333ea; border-bottom: 2px solid #ec4899; padding-bottom: 10px;">
                Yeni İletişim Formu Mesajı
              </h2>
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
                <p style="margin: 10px 0;"><strong style="color: #6b7280;">Ad Soyad:</strong> <span style="color: #111827;">${name}</span></p>
                <p style="margin: 10px 0;"><strong style="color: #6b7280;">Email:</strong> <span style="color: #111827;">${email}</span></p>
                <p style="margin: 10px 0;"><strong style="color: #6b7280;">Telefon:</strong> <span style="color: #111827;">${phone || 'Belirtilmemiş'}</span></p>
                <p style="margin: 10px 0;"><strong style="color: #6b7280;">Konu:</strong> <span style="color: #111827;">${subject}</span></p>
              </div>
              <div style="margin-top: 20px; padding: 20px; background-color: #ffffff; border-left: 4px solid #9333ea;">
                <p style="margin: 0 0 10px 0;"><strong style="color: #6b7280;">Mesaj:</strong></p>
                <p style="color: #111827; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
              <p style="margin-top: 20px; color: #6b7280; font-size: 12px;">
                Bu mesaj web sitenizdeki iletişim formundan gönderilmiştir.
              </p>
            </div>
          `,
        })
      } catch (emailError) {
        console.error('Resend email error:', emailError)
        // Email gönderme hatası olsa bile form submission'ı başarılı sayıyoruz
        // Çünkü log'da kayıt var
      }
    }

    // Log kaydı
    console.log('Contact Form Submission:', {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    )
  }
}

