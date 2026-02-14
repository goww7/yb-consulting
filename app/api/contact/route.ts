import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { type, ...data } = body

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Service email non configuré' },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    let subject: string
    let htmlContent: string

    if (type === 'devis') {
      subject = `[Devis] ${data.typePrestation} - ${data.entreprise}`
      htmlContent = `
        <h2>Nouvelle demande de devis</h2>
        <h3>Entreprise</h3>
        <ul>
          <li><strong>Nom :</strong> ${data.entreprise}</li>
          <li><strong>SIRET :</strong> ${data.siret || 'Non renseigné'}</li>
          <li><strong>Adresse :</strong> ${data.adresseEntreprise}</li>
          <li><strong>Code postal :</strong> ${data.codePostal}</li>
          <li><strong>Ville :</strong> ${data.ville}</li>
        </ul>
        <h3>Contact</h3>
        <ul>
          <li><strong>Nom :</strong> ${data.nomContact}</li>
          <li><strong>Fonction :</strong> ${data.fonction || 'Non renseigné'}</li>
          <li><strong>Email :</strong> ${data.emailContact}</li>
          <li><strong>Téléphone :</strong> ${data.telephoneContact}</li>
        </ul>
        <h3>Projet</h3>
        <ul>
          <li><strong>Type :</strong> ${data.typePrestation}</li>
          <li><strong>Description :</strong> ${data.descriptionSite}</li>
          <li><strong>Surface :</strong> ${data.surface || 'Non renseigné'}</li>
          <li><strong>Bâtiments :</strong> ${data.nombreBatiments || 'Non renseigné'}</li>
          <li><strong>Délai :</strong> ${data.delaiSouhaite || 'Non renseigné'}</li>
        </ul>
        ${data.messageComplementaire ? `<h3>Message complémentaire</h3><p>${data.messageComplementaire}</p>` : ''}
      `
    } else {
      subject = `[Contact] ${data.sujet} - ${data.nom} ${data.prenom}`
      htmlContent = `
        <h2>Nouveau message de contact</h2>
        <ul>
          <li><strong>Nom :</strong> ${data.nom} ${data.prenom}</li>
          <li><strong>Email :</strong> ${data.email}</li>
          <li><strong>Téléphone :</strong> ${data.telephone || 'Non renseigné'}</li>
          <li><strong>Sujet :</strong> ${data.sujet}</li>
        </ul>
        <h3>Message</h3>
        <p>${data.message}</p>
      `
    }

    await resend.emails.send({
      from: 'Prevarie <noreply@prevarie.fr>',
      to: ['contact@prevarie.fr'],
      subject,
      html: htmlContent,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}
