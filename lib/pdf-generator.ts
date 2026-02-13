import jsPDF from 'jspdf'
import { RapportAuditFormData } from './validations'

const niveauRisqueLabels: Record<string, { label: string; color: [number, number, number] }> = {
  faible: { label: 'Faible', color: [34, 197, 94] }, // green
  moyen: { label: 'Moyen', color: [234, 179, 8] }, // yellow
  eleve: { label: 'Élevé', color: [249, 115, 22] }, // orange
  critique: { label: 'Critique', color: [220, 38, 38] }, // red
}

export function generateAuditPDF(data: RapportAuditFormData): void {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  let yPos = 20

  // En-tête avec logo/titre
  doc.setFillColor(30, 58, 95) // navy-700
  doc.rect(0, 0, pageWidth, 40, 'F')

  doc.setTextColor(255, 255, 255)
  doc.setFontSize(24)
  doc.setFont('helvetica', 'bold')
  doc.text('Prevarie', 20, 25)

  doc.setFontSize(12)
  doc.setFont('helvetica', 'normal')
  doc.text('Audit et Sécurité Incendie', 20, 33)

  // Titre du rapport
  yPos = 55
  doc.setTextColor(30, 58, 95)
  doc.setFontSize(20)
  doc.setFont('helvetica', 'bold')
  doc.text("RAPPORT D'AUDIT", pageWidth / 2, yPos, { align: 'center' })

  yPos += 10
  doc.setFontSize(14)
  doc.setFont('helvetica', 'normal')
  doc.text('Analyse des Risques d\'Incendie et d\'Explosion', pageWidth / 2, yPos, { align: 'center' })

  // Ligne de séparation
  yPos += 10
  doc.setDrawColor(234, 88, 12) // fire-500
  doc.setLineWidth(1)
  doc.line(20, yPos, pageWidth - 20, yPos)

  // Informations générales
  yPos += 15
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(30, 58, 95)
  doc.text('INFORMATIONS GÉNÉRALES', 20, yPos)

  yPos += 10
  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(55, 65, 81) // gray-700

  const infoLines = [
    ['Client :', data.nomClient],
    ['Adresse :', data.adresseClient],
    ['Date de l\'audit :', data.dateAudit],
    ['Site audité :', data.nomSite],
    ['Type de site :', data.typeSite],
    ['Surface :', data.surface ? `${data.surface} m²` : 'Non spécifiée'],
  ]

  infoLines.forEach(([label, value]) => {
    doc.setFont('helvetica', 'bold')
    doc.text(label, 20, yPos)
    doc.setFont('helvetica', 'normal')
    doc.text(value, 70, yPos)
    yPos += 7
  })

  // Niveau de risque global
  yPos += 10
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(30, 58, 95)
  doc.text('NIVEAU DE RISQUE GLOBAL', 20, yPos)

  yPos += 10
  const risque = niveauRisqueLabels[data.niveauRisqueGlobal]
  doc.setFillColor(...risque.color)
  doc.roundedRect(20, yPos - 5, 60, 12, 3, 3, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text(risque.label.toUpperCase(), 50, yPos + 3, { align: 'center' })

  // Points forts
  yPos += 25
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(30, 58, 95)
  doc.text('POINTS FORTS', 20, yPos)

  yPos += 8
  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(55, 65, 81)
  const pointsFortsLines = doc.splitTextToSize(data.pointsForts, pageWidth - 40)
  pointsFortsLines.forEach((line: string) => {
    if (yPos > 270) {
      doc.addPage()
      yPos = 20
    }
    doc.text(line, 20, yPos)
    yPos += 6
  })

  // Points à améliorer
  yPos += 10
  if (yPos > 250) {
    doc.addPage()
    yPos = 20
  }
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(30, 58, 95)
  doc.text('POINTS À AMÉLIORER', 20, yPos)

  yPos += 8
  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(55, 65, 81)
  const pointsAmeliorerLines = doc.splitTextToSize(data.pointsAmeliorer, pageWidth - 40)
  pointsAmeliorerLines.forEach((line: string) => {
    if (yPos > 270) {
      doc.addPage()
      yPos = 20
    }
    doc.text(line, 20, yPos)
    yPos += 6
  })

  // Recommandations
  yPos += 10
  if (yPos > 250) {
    doc.addPage()
    yPos = 20
  }
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(30, 58, 95)
  doc.text('RECOMMANDATIONS', 20, yPos)

  yPos += 8
  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(55, 65, 81)
  const recommandationsLines = doc.splitTextToSize(data.recommandations, pageWidth - 40)
  recommandationsLines.forEach((line: string) => {
    if (yPos > 270) {
      doc.addPage()
      yPos = 20
    }
    doc.text(line, 20, yPos)
    yPos += 6
  })

  // Conclusion
  yPos += 10
  if (yPos > 250) {
    doc.addPage()
    yPos = 20
  }
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(30, 58, 95)
  doc.text('CONCLUSION', 20, yPos)

  yPos += 8
  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(55, 65, 81)
  const conclusionLines = doc.splitTextToSize(data.conclusion, pageWidth - 40)
  conclusionLines.forEach((line: string) => {
    if (yPos > 270) {
      doc.addPage()
      yPos = 20
    }
    doc.text(line, 20, yPos)
    yPos += 6
  })

  // Pied de page
  const totalPages = doc.getNumberOfPages()
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i)
    doc.setFontSize(9)
    doc.setTextColor(128, 128, 128)
    doc.text(
      `Prevarie - Audit et Sécurité Incendie | contact@prevarie.fr |Page ${i}/${totalPages}`,
      pageWidth / 2,
      290,
      { align: 'center' }
    )
  }

  // Télécharger le PDF
  const fileName = `rapport-audit-${data.nomSite.replace(/\s+/g, '-').toLowerCase()}-${data.dateAudit}.pdf`
  doc.save(fileName)
}
