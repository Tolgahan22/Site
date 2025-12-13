import { NextRequest, NextResponse } from 'next/server'

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

    // Email gönderme - Resend API kullanılabilir
    // Şimdilik sadece log yapıyoruz, Resend API key eklendikten sonra aktif olacak
    console.log('Contact Form Submission:', {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString()
    })

    // TODO: Resend API ile email gönderme
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'gamzeyuceeer@gmail.com',
    //   subject: `İletişim Formu: ${subject}`,
    //   html: `
    //     <h2>Yeni İletişim Formu Mesajı</h2>
    //     <p><strong>Ad Soyad:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Telefon:</strong> ${phone || 'Belirtilmemiş'}</p>
    //     <p><strong>Konu:</strong> ${subject}</p>
    //     <p><strong>Mesaj:</strong></p>
    //     <p>${message}</p>
    //   `
    // })

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

