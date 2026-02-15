'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ShoppingCart, FileText, BookOpen, Video, Users, Download, CheckCircle, Star,
  Filter, Info, ArrowRight, Shield, Clock, Mail, HelpCircle, Building2, Factory,
  GraduationCap, Briefcase, HeartPulse, School, Warehouse, ChevronDown, ChevronUp,
  BadgeCheck, Award, Zap, AlertTriangle, ClipboardCheck
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/MotionWrapper'
import CTASection from '@/components/CTASection'

type Product = {
  id: string
  name: string
  description: string
  longDescription: string
  price: number
  category: string
  type: 'document' | 'formation' | 'service'
  popular?: boolean
  features: string[]
  format?: string
  pages?: string
  duration?: string
  target: string
}

const products: Product[] = [
  // ============ DOCUMENTS - ERP ============
  {
    id: 'reg-erp-guide',
    name: 'Guide complet réglementation ERP',
    description: 'Guide exhaustif de la réglementation ERP avec tableaux récapitulatifs, exemples concrets et cas pratiques par type et catégorie.',
    longDescription: 'Ce guide couvre l\'intégralité de l\'arrêté du 25 juin 1980 et ses modifications, les dispositions générales et particulières par type d\'ERP (J, L, M, N, O, P, R, S, T, U, V, W, X, Y), les règles de classement, les obligations d\'accessibilité, et les procédures administratives.',
    price: 49,
    category: 'ERP',
    type: 'document',
    popular: true,
    features: ['PDF téléchargeable', '150+ pages', 'Mises à jour incluses 1 an', 'Tableaux récapitulatifs par type', 'Exemples de notices de sécurité', 'Index réglementaire'],
    format: 'PDF',
    pages: '156 pages',
    target: 'Exploitants ERP, responsables sécurité, architectes',
  },
  {
    id: 'registre-securite',
    name: 'Modèle de registre de sécurité',
    description: 'Registre de sécurité complet et conforme à l\'article R123-51 du CCH, prêt à personnaliser pour votre établissement.',
    longDescription: 'Comprend toutes les rubriques obligatoires : renseignements généraux, vérifications techniques, exercices d\'évacuation, formation du personnel, travaux, incidents, passages de la commission de sécurité. Conforme aux exigences de la commission départementale de sécurité.',
    price: 29,
    category: 'ERP',
    type: 'document',
    features: ['Format Word modifiable', 'Conforme article R123-51 CCH', 'Guide de remplissage détaillé', 'Fiches annexes pré-remplies', 'Calendrier des vérifications', 'Modèle PV de commission'],
    format: 'Word (.docx)',
    pages: '48 pages',
    target: 'Exploitants ERP, gestionnaires d\'établissements',
  },
  {
    id: 'check-list-commission',
    name: 'Check-list visite commission de sécurité',
    description: 'Liste de vérification exhaustive pour préparer sereinement la visite de la commission de sécurité et obtenir un avis favorable.',
    longDescription: 'Couvre l\'ensemble des points vérifiés par la commission : moyens de secours, dégagements, installations techniques (électricité, gaz, chauffage, ascenseurs), désenfumage, éclairage de sécurité, alarme, affichage. Organisée par corps de métier et par priorité.',
    price: 19,
    category: 'ERP',
    type: 'document',
    features: ['PDF + Excel interactif', '200+ points de contrôle', 'Organisé par type d\'ERP', 'Conseils pour chaque point', 'Niveaux de priorité', 'Colonne observations/photos'],
    format: 'PDF + Excel',
    pages: '32 pages',
    target: 'Exploitants ERP, responsables techniques',
  },
  {
    id: 'dossier-autorisation',
    name: 'Modèle dossier autorisation ERP',
    description: 'Trame complète pour constituer un dossier d\'autorisation de travaux (AT) ou d\'ouverture (AO) conforme aux exigences de la préfecture.',
    longDescription: 'Inclut la notice de sécurité type, la notice d\'accessibilité, les plans à fournir, les formulaires CERFA pré-remplis, des exemples de notices rédigées pour différents types d\'ERP, et la liste exhaustive des pièces à joindre selon la nature des travaux.',
    price: 79,
    category: 'ERP',
    type: 'document',
    popular: true,
    features: ['Word modifiable', 'Notices de sécurité types', 'Exemples remplis (Type M, N, L)', 'Liste pièces à joindre', 'Formulaires CERFA inclus', 'Notice accessibilité'],
    format: 'Word (.docx) + PDF',
    pages: '85 pages',
    target: 'Architectes, maîtres d\'ouvrage, exploitants ERP',
  },
  {
    id: 'guide-classement-erp',
    name: 'Guide classement ERP : types et catégories',
    description: 'Comprenez le classement de votre établissement : type d\'activité (J à Y), catégorie (1 à 5), seuils d\'effectifs et obligations associées.',
    longDescription: 'Pour chaque type d\'ERP, ce guide détaille : les activités concernées, les seuils de classement en catégories, les règles de calcul d\'effectif, les dispositions constructives applicables, et les obligations de maintenance. Inclut un outil de calcul Excel pour déterminer votre catégorie.',
    price: 29,
    category: 'ERP',
    type: 'document',
    features: ['PDF + outil Excel', 'Les 23 types détaillés (J à Y)', 'Seuils d\'effectifs commentés', 'Outil calcul de catégorie', 'Obligations par catégorie', 'Cas des groupements'],
    format: 'PDF + Excel',
    pages: '64 pages',
    target: 'Exploitants ERP, bureaux de contrôle, architectes',
  },
  {
    id: 'consignes-securite-erp',
    name: 'Kit consignes de sécurité ERP',
    description: 'Modèles de consignes de sécurité incendie conformes à afficher dans votre ERP : consignes générales, consignes personnel, consignes spécifiques.',
    longDescription: 'Ensemble complet de consignes personnalisables : consigne générale d\'évacuation (public), consigne pour le personnel, consigne pour les locaux à risques, consigne pour les cuisines, consigne de nuit (Type O, U, J). Conformes à l\'article MS 47 de l\'arrêté du 25 juin 1980.',
    price: 25,
    category: 'ERP',
    type: 'document',
    features: ['Fichiers sources Illustrator + Word', 'Consignes générales et spécifiques', 'Conformes MS 47', 'Pictogrammes NF inclus', 'Guide d\'affichage réglementaire', 'Versions jour et nuit'],
    format: 'AI + Word + PDF',
    pages: '12 modèles',
    target: 'Exploitants ERP, responsables sécurité',
  },

  // ============ DOCUMENTS - IGH ============
  {
    id: 'guide-igh',
    name: 'Guide réglementation IGH',
    description: 'Guide complet de la réglementation Immeubles de Grande Hauteur : arrêté du 30 décembre 2011, classes d\'IGH, obligations spécifiques.',
    longDescription: 'Couvre la réglementation complète des IGH : définition et classement (GHA à GHZ), dispositions constructives, compartimentage, désenfumage, colonnes sèches et humides, SSI de catégorie A, obligations du propriétaire et du mandataire, rôle du SSIAP. Comparatif des exigences IGH vs ERP.',
    price: 59,
    category: 'IGH',
    type: 'document',
    features: ['PDF téléchargeable', '120+ pages', 'Toutes classes IGH (GHA à GHZ)', 'Tableaux comparatifs IGH/ERP', 'Schémas techniques', 'Cas pratiques'],
    format: 'PDF',
    pages: '124 pages',
    target: 'Propriétaires IGH, mandataires, SSIAP 3',
  },
  {
    id: 'cahier-prescriptions-igh',
    name: 'Modèle cahier de prescriptions IGH',
    description: 'Trame de cahier de prescriptions de sécurité pour IGH conforme à l\'article GH 5, à adapter à votre immeuble.',
    longDescription: 'Le cahier de prescriptions est le document de référence opposable aux occupants d\'un IGH. Ce modèle couvre : les règles d\'occupation, les obligations des locataires, les conditions de travaux, les consignes d\'évacuation, le fonctionnement du PCS, et les dispositions du règlement intérieur liées à la sécurité.',
    price: 49,
    category: 'IGH',
    type: 'document',
    features: ['Word modifiable', 'Conforme article GH 5', 'Adapté par classe d\'IGH', 'Modèle règlement intérieur', 'Consignes occupants', 'Annexes techniques'],
    format: 'Word (.docx)',
    pages: '56 pages',
    target: 'Propriétaires IGH, mandataires de sécurité',
  },

  // ============ DOCUMENTS - ICPE ============
  {
    id: 'guide-icpe',
    name: 'Guide réglementation ICPE',
    description: 'Comprendre la réglementation ICPE : nomenclature des installations classées, régimes (D, E, A, AS), obligations et procédures.',
    longDescription: 'Guide complet de la réglementation ICPE couvrant : la nomenclature commentée (rubriques 1000 à 4000), les quatre régimes (déclaration, enregistrement, autorisation, Seveso), les dossiers à constituer, les études d\'impact et de dangers, le rôle de la DREAL, les arrêtés de prescriptions générales. Mis à jour avec les dernières évolutions réglementaires.',
    price: 59,
    category: 'ICPE',
    type: 'document',
    features: ['PDF téléchargeable', '130+ pages', 'Nomenclature commentée', 'Régimes D, E, A, AS détaillés', 'Procédures administratives', 'Cas pratiques industriels'],
    format: 'PDF',
    pages: '134 pages',
    target: 'Exploitants industriels, responsables environnement, bureaux d\'études',
  },
  {
    id: 'modele-etude-dangers',
    name: 'Trame étude de dangers ICPE',
    description: 'Trame méthodologique pour rédiger une étude de dangers conforme aux exigences de l\'article L512-1 du Code de l\'environnement.',
    longDescription: 'Structure complète pour la rédaction d\'une étude de dangers : description de l\'environnement, identification des potentiels de dangers, analyse des retours d\'expérience (ARIA), évaluation des scénarios d\'accident (méthode nœud papillon), modélisation des effets, mesures de maîtrise des risques, cartographie des zones d\'effets.',
    price: 89,
    category: 'ICPE',
    type: 'document',
    features: ['Word modifiable', 'Méthodologie nœud papillon', 'Grilles d\'évaluation', 'Exemples de scénarios', 'Modèle cartographie', 'Conforme guide INERIS'],
    format: 'Word (.docx) + Excel',
    pages: '78 pages + tableur',
    target: 'Bureaux d\'études, exploitants ICPE autorisation/Seveso',
  },
  {
    id: 'checklist-icpe-declaration',
    name: 'Check-list ICPE régime déclaration',
    description: 'Liste complète des obligations pour les ICPE soumises à déclaration : arrêtés types, contrôles périodiques, registres obligatoires.',
    longDescription: 'Ce document recense l\'ensemble des obligations applicables aux ICPE sous régime de déclaration : prescriptions des arrêtés de prescriptions générales, fréquences des contrôles périodiques par organismes agréés, registres et documents à tenir à jour, obligations d\'information du préfet.',
    price: 25,
    category: 'ICPE',
    type: 'document',
    features: ['PDF + Excel interactif', 'Par rubrique ICPE', 'Échéancier contrôles', 'Registres obligatoires', 'Arrêtés types référencés', 'Mise à jour 2026'],
    format: 'PDF + Excel',
    pages: '28 pages',
    target: 'Exploitants ICPE déclaration, responsables HSE',
  },

  // ============ DOCUMENTS - DUERP ============
  {
    id: 'guide-duerp',
    name: 'Guide méthodologique DUERP',
    description: 'Guide complet pour réaliser votre Document Unique d\'Évaluation des Risques Professionnels conformément aux articles R4121-1 à R4121-4 du Code du travail.',
    longDescription: 'Ce guide détaille la méthodologie complète du DUERP : cadre réglementaire (loi du 31 mars 2022), identification des unités de travail, grille de cotation des risques (gravité × fréquence × maîtrise), rédaction des plans d\'action, obligations de mise à jour et de conservation (40 ans). Inclut des exemples pour différents secteurs d\'activité.',
    price: 39,
    category: 'DUERP',
    type: 'document',
    features: ['PDF téléchargeable', '90+ pages', 'Méthodologie pas à pas', 'Grilles de cotation', 'Exemples multi-secteurs', 'Conforme loi 2022'],
    format: 'PDF',
    pages: '94 pages',
    target: 'Employeurs, responsables RH, préventeurs',
  },
  {
    id: 'modele-plan-action-duerp',
    name: 'Modèle plan d\'action DUERP',
    description: 'Modèle structuré de plan d\'action et de programme annuel de prévention des risques professionnels (PAPRIPACT) pour entreprises 50+ salariés.',
    longDescription: 'Inclut le modèle de programme annuel de prévention (PAPRIPACT) obligatoire pour les entreprises de 50 salariés et plus, et la liste d\'actions de prévention pour les entreprises de moins de 50 salariés. Avec colonnes : risque identifié, mesure prévue, responsable, budget, échéance, indicateur de suivi, statut.',
    price: 35,
    category: 'DUERP',
    type: 'document',
    features: ['Excel + Word', 'PAPRIPACT complet (50+ salariés)', 'Liste actions (-50 salariés)', 'Tableau de suivi intégré', 'Modèle budget prévention', 'Indicateurs de pilotage'],
    format: 'Excel + Word',
    pages: '24 pages + tableur',
    target: 'Employeurs, responsables prévention, CSE',
  },

  // ============ DOCUMENTS - CODE DU TRAVAIL ============
  {
    id: 'guide-securite-incendie-travail',
    name: 'Guide sécurité incendie au travail',
    description: 'Obligations employeur en matière de sécurité incendie : articles R4227-1 à R4227-57 du Code du travail, moyens d\'extinction, évacuation.',
    longDescription: 'Ce guide couvre l\'ensemble des obligations de l\'employeur : dégagements et issues de secours (R4227-4 à R4227-14), chauffage des locaux (R4227-15 à R4227-20), moyens d\'extinction (R4227-28 à R4227-33), alarme et consignes d\'incendie (R4227-34 à R4227-41), exercices et essais périodiques (R4227-39). Avec tableaux de correspondance ERP/Code du travail.',
    price: 45,
    category: 'Code du travail',
    type: 'document',
    features: ['PDF téléchargeable', '110+ pages', 'Articles R4227 commentés', 'Tableau correspondance ERP/CDT', 'Obligations par taille d\'entreprise', 'Modèle consigne incendie'],
    format: 'PDF',
    pages: '112 pages',
    target: 'Employeurs, responsables sécurité, préventeurs',
  },
  {
    id: 'kit-exercice-evacuation',
    name: 'Kit exercice d\'évacuation',
    description: 'Kit complet pour organiser vos exercices d\'évacuation semestriels obligatoires : scénarios, fiches observateurs, grille d\'évaluation, compte-rendu type.',
    longDescription: 'L\'article R4227-39 du Code du travail impose des exercices d\'évacuation au moins semestriels. Ce kit contient : 6 scénarios types (incendie, fuite de gaz, alerte à la bombe), fiches de poste guide-file et serre-file, fiches observateurs avec chronométrage, grille d\'évaluation, modèle de compte-rendu pour le registre de sécurité.',
    price: 35,
    category: 'Code du travail',
    type: 'document',
    features: ['Word + Excel + PDF', '6 scénarios types', 'Fiches guide-file / serre-file', 'Grille évaluation chronométrée', 'Compte-rendu pour registre', 'Fiche retour d\'expérience'],
    format: 'Word + Excel + PDF',
    pages: '36 pages',
    target: 'Responsables sécurité, chargés de prévention',
  },
  {
    id: 'permis-feu',
    name: 'Kit permis de feu',
    description: 'Modèles de permis de feu conformes à l\'arrêté du 19 mars 1993, procédure de délivrance et consignes pour les travaux par points chauds.',
    longDescription: 'Le permis de feu est obligatoire pour tout travail par points chauds (soudure, meulage, découpe) dans un ERP ou un lieu de travail. Ce kit comprend : le modèle de permis de feu (valable 1 journée), la procédure de délivrance, les vérifications avant/pendant/après travaux, les consignes pour les entreprises extérieures, et le registre de suivi.',
    price: 19,
    category: 'Code du travail',
    type: 'document',
    features: ['Word modifiable', 'Conforme arrêté 19/03/1993', 'Procédure complète', 'Check-list avant/après travaux', 'Version entreprises extérieures', 'Registre de suivi'],
    format: 'Word (.docx) + PDF',
    pages: '16 pages',
    target: 'Services maintenance, coordinateurs SPS, exploitants ERP',
  },

  // ============ DOCUMENTS - GÉNÉRAL ============
  {
    id: 'plan-evacuation',
    name: 'Kit plan d\'évacuation',
    description: 'Modèles de plans d\'évacuation et consignes de sécurité conformes à la norme NF X 08-070, personnalisables pour tout type d\'établissement.',
    longDescription: 'Kit complet pour créer vos plans d\'évacuation conformes : gabarits de plans aux formats A3 et A4, bibliothèque de pictogrammes normalisés NF (issues de secours, extincteurs, RIA, alarme, point de rassemblement), consignes types en français et bilingues, guide d\'implantation avec distances et hauteurs réglementaires.',
    price: 39,
    category: 'Général',
    type: 'document',
    features: ['Fichiers sources AI + PDF', 'Pictogrammes NF X 08-070', 'Formats A3 et A4', 'Consignes bilingues FR/EN', 'Guide d\'implantation', 'Point de rassemblement'],
    format: 'AI + PDF',
    pages: '18 modèles',
    target: 'Tous établissements, responsables sécurité',
  },
  {
    id: 'guide-affichage-obligatoire',
    name: 'Guide affichage obligatoire sécurité',
    description: 'Récapitulatif complet de tous les affichages obligatoires en matière de sécurité incendie et évacuation selon le type d\'établissement.',
    longDescription: 'Ce guide recense tous les affichages obligatoires : plans d\'évacuation (NF X 08-070), consignes de sécurité incendie (R4227-37), numéros d\'urgence, interdiction de fumer, signalétique des issues et dégagements, affichage des moyens de secours. Avec les emplacements requis, les dimensions minimales, et les sanctions en cas de manquement.',
    price: 19,
    category: 'Général',
    type: 'document',
    features: ['PDF illustré', 'Par type d\'établissement', 'Emplacements requis', 'Dimensions minimales', 'Textes réglementaires', 'Check-list de vérification'],
    format: 'PDF',
    pages: '42 pages',
    target: 'Tous établissements, responsables sécurité',
  },
  {
    id: 'protocole-securite-ext',
    name: 'Modèle protocole de sécurité',
    description: 'Protocole de sécurité pour les opérations de chargement/déchargement et les interventions d\'entreprises extérieures (articles R4515-1 à R4515-11).',
    longDescription: 'Le protocole de sécurité est obligatoire pour toute opération de chargement/déchargement (R4515-4) et le plan de prévention pour les interventions d\'entreprises extérieures (R4512-6). Ce kit comprend les deux modèles, une inspection commune préalable, et les consignes spécifiques en matière de risque incendie.',
    price: 25,
    category: 'Général',
    type: 'document',
    features: ['Word modifiable', 'Protocole chargement/déchargement', 'Plan de prévention', 'Inspection commune préalable', 'Consignes incendie spécifiques', 'Conforme R4512 et R4515'],
    format: 'Word (.docx)',
    pages: '22 pages',
    target: 'Logisticiens, responsables HSE, donneurs d\'ordre',
  },

  // ============ FORMATIONS ============
  {
    id: 'formation-erp-base',
    name: 'Formation ERP - Les fondamentaux',
    description: 'Formation en ligne complète sur les bases de la réglementation ERP : classement, obligations, moyens de secours, commission de sécurité.',
    longDescription: 'Cette formation couvre : le cadre réglementaire (CCH + arrêté du 25 juin 1980), le classement des ERP (types et catégories), les dispositions constructives, les moyens de secours obligatoires, le registre de sécurité, les vérifications techniques, et la commission de sécurité. Chaque module se termine par un quiz de validation.',
    price: 199,
    category: 'ERP',
    type: 'formation',
    popular: true,
    features: ['4h de vidéo HD', '8 modules + quiz', 'Certificat de réussite', 'Accès 1 an', 'Support de cours PDF', 'Forum de questions'],
    duration: '4 heures',
    target: 'Exploitants ERP, responsables sécurité, nouveaux arrivants',
  },
  {
    id: 'formation-registre',
    name: 'Formation tenue du registre de sécurité',
    description: 'Maîtrisez la tenue du registre de sécurité et planifiez vos vérifications techniques obligatoires sans oubli.',
    longDescription: 'Apprenez à tenir un registre de sécurité conforme : quelles rubriques remplir, à quelle fréquence, quels documents conserver, comment préparer la visite de la commission. Inclut un focus sur les vérifications techniques obligatoires (électricité, gaz, ascenseurs, SSI, désenfumage, extincteurs) et leurs périodicités.',
    price: 149,
    category: 'ERP',
    type: 'formation',
    features: ['2h de vidéo HD', 'Exercices pratiques', 'Modèle registre inclus', 'Accès 1 an', 'Calendrier vérifications', 'Attestation de formation'],
    duration: '2 heures',
    target: 'Gestionnaires d\'établissements, techniciens',
  },
  {
    id: 'formation-evacuation',
    name: 'Formation guide-file / serre-file',
    description: 'Formation complète pour les équipiers d\'évacuation : rôle du guide-file et du serre-file, procédures, gestion du stress et des PMR.',
    longDescription: 'Formez vos équipiers d\'évacuation conformément à l\'article R4227-39 : rôle et responsabilités du guide-file (orienter vers les issues) et du serre-file (vérifier que personne ne reste), procédures d\'évacuation, gestion des personnes à mobilité réduite, point de rassemblement, liaison avec les secours. Inclut une mise en situation filmée.',
    price: 99,
    category: 'Général',
    type: 'formation',
    features: ['1h30 de vidéo HD', 'Mise en situation filmée', 'Fiche mémo guide-file', 'Fiche mémo serre-file', 'Attestation de formation', 'Accès 6 mois'],
    duration: '1h30',
    target: 'Équipiers d\'évacuation, tout salarié désigné',
  },
  {
    id: 'formation-extincteurs',
    name: 'Formation manipulation des extincteurs',
    description: 'Apprenez à choisir et utiliser les extincteurs adaptés à chaque type de feu. Théorie + démonstration sur feu réel.',
    longDescription: 'Formation aux équipiers de première intervention : classification des feux (A, B, C, D, F), types d\'extincteurs (eau, mousse, CO2, poudre), technique d\'utilisation, distances d\'attaque, limites d\'intervention, alerter les secours. Vidéo de démonstration sur feu réel + quiz de validation.',
    price: 79,
    category: 'Général',
    type: 'formation',
    features: ['1h de vidéo HD', 'Démonstration feu réel', 'Classes de feux A à F', 'Fiche mémo plastifiée', 'Attestation de formation', 'Accès 6 mois'],
    duration: '1 heure',
    target: 'Équipiers de première intervention, tout salarié',
  },
  {
    id: 'formation-icpe',
    name: 'Formation réglementation ICPE',
    description: 'Comprendre le cadre ICPE : nomenclature, régimes, études de dangers, rôle de la DREAL, et obligations de l\'exploitant.',
    longDescription: 'Formation couvrant l\'essentiel de la réglementation ICPE pour les exploitants et responsables environnement : le Code de l\'environnement (Livre V Titre I), la nomenclature des installations classées, les quatre régimes, le dossier de demande d\'autorisation, l\'étude d\'impact et l\'étude de dangers, les contrôles DREAL, les sanctions.',
    price: 249,
    category: 'ICPE',
    type: 'formation',
    features: ['5h de vidéo HD', '10 modules + quiz', 'Certificat de réussite', 'Accès 1 an', 'Cas pratiques industriels', 'Support de cours PDF'],
    duration: '5 heures',
    target: 'Exploitants ICPE, responsables environnement/HSE',
  },
  {
    id: 'formation-duerp',
    name: 'Formation DUERP - Évaluer les risques professionnels',
    description: 'Maîtrisez la méthodologie du Document Unique : identification des risques, cotation, plan d\'action, mise à jour annuelle.',
    longDescription: 'Formation complète à la réalisation du DUERP : cadre réglementaire (R4121-1 à R4121-4), définition des unités de travail, identification des dangers par famille de risques, grille de cotation (gravité × fréquence × maîtrise), hiérarchisation, rédaction du plan d\'action, obligations de mise à jour et de conservation (40 ans depuis la loi du 31 mars 2022).',
    price: 179,
    category: 'DUERP',
    type: 'formation',
    popular: true,
    features: ['3h de vidéo HD', '7 modules + quiz', 'Grilles de cotation Excel', 'Exemples multi-secteurs', 'Certificat de réussite', 'Accès 1 an'],
    duration: '3 heures',
    target: 'Employeurs, responsables RH, membres du CSE',
  },

  // ============ SERVICES ============
  {
    id: 'audit-erp',
    name: 'Audit de conformité ERP',
    description: 'Audit complet de votre établissement recevant du public : visite sur site, vérification de toutes les dispositions réglementaires, rapport détaillé et plan d\'action priorisé.',
    longDescription: 'Notre ingénieur certifié INSSI réalise un diagnostic complet de votre ERP : vérification des dégagements et issues de secours, moyens de secours (extincteurs, RIA, colonnes sèches), système de sécurité incendie (SSI), désenfumage, éclairage de sécurité, installations techniques, registre de sécurité, accessibilité. Rapport de 40 à 80 pages avec photos, non-conformités classées par gravité, et plan d\'action chiffré.',
    price: 890,
    category: 'ERP',
    type: 'service',
    popular: true,
    features: ['Visite sur site (1 journée)', 'Rapport 40-80 pages illustré', 'Plan d\'action chiffré et priorisé', 'Suivi 3 mois inclus', 'Par ingénieur certifié INSSI', 'Préparation commission de sécurité'],
    target: 'Exploitants ERP toutes catégories',
  },
  {
    id: 'accompagnement-commission',
    name: 'Accompagnement commission de sécurité',
    description: 'Préparation complète et accompagnement le jour de la visite de la commission de sécurité pour maximiser vos chances d\'avis favorable.',
    longDescription: 'Nous vous accompagnons avant, pendant et après la commission de sécurité : pré-visite pour identifier les points à corriger en priorité, préparation du registre de sécurité et des PV de vérification, briefing de votre équipe, présence le jour J aux côtés de l\'exploitant, et compte-rendu avec plan d\'action post-commission si nécessaire.',
    price: 490,
    category: 'ERP',
    type: 'service',
    features: ['Pré-visite de préparation', 'Check-list 200+ points', 'Briefing de votre équipe', 'Présence jour J', 'Compte-rendu détaillé', 'Plan d\'action post-commission'],
    target: 'Exploitants ERP 1ère à 4ème catégorie',
  },
  {
    id: 'audit-vulnerabilite',
    name: 'Audit de vulnérabilité incendie',
    description: 'Analyse approfondie de la capacité de résistance de vos installations au risque incendie : scénarios d\'accident, effets domino, dimensionnement des protections.',
    longDescription: 'L\'audit de vulnérabilité va au-delà de la conformité réglementaire. Nous évaluons les scénarios d\'incendie possibles, les effets domino entre installations, la suffisance de vos protections actives et passives, et la résilience de votre organisation. Livrable : rapport technique avec matrice de vulnérabilité, cartographie des risques et plan d\'amélioration chiffré.',
    price: 1490,
    category: 'ICPE',
    type: 'service',
    features: ['Visite sur site (2 jours)', 'Analyse des scénarios d\'accident', 'Matrice de vulnérabilité', 'Cartographie des risques', 'Plan d\'amélioration chiffré', 'Validé pour dossier DREAL'],
    target: 'Sites industriels ICPE, entrepôts, Seveso',
  },
  {
    id: 'accompagnement-duerp',
    name: 'Accompagnement DUERP sur mesure',
    description: 'Un consultant dédié réalise votre DUERP complet : visite terrain, entretiens, cotation des risques, rédaction du document et du plan d\'action.',
    longDescription: 'Prestation clé en main pour les entreprises qui souhaitent externaliser leur DUERP. Notre consultant se déplace sur site, identifie les unités de travail avec vos équipes, réalise les entretiens et observations terrain, cote les risques selon notre méthodologie éprouvée, et rédige le document complet avec le plan d\'action. Livraison sous 3 semaines.',
    price: 1900,
    category: 'DUERP',
    type: 'service',
    features: ['Visite sur site', 'Entretiens avec les équipes', 'Document complet rédigé', 'Plan d\'action PAPRIPACT', 'Présentation en CSE', 'Mise à jour 1 an incluse'],
    target: 'Entreprises toutes tailles, multi-sites',
  },
  {
    id: 'veille-reglementaire',
    name: 'Veille réglementaire annuelle',
    description: 'Abonnement annuel à notre veille réglementaire personnalisée en sécurité incendie, ICPE et risques professionnels.',
    longDescription: 'Restez informé de toutes les évolutions réglementaires qui impactent votre activité. Nous surveillons en continu les textes officiels (Journal Officiel, circulaires, arrêtés, jurisprudence) et vous transmettons chaque mois une synthèse commentée avec les impacts concrets pour votre établissement. Inclut 4 consultations téléphoniques par an avec un expert.',
    price: 290,
    category: 'Général',
    type: 'service',
    features: ['Newsletter mensuelle commentée', 'Alertes textes importants', 'Synthèses d\'impact personnalisées', 'Hotline 4 appels/an', 'Base documentaire en ligne', 'Accès archives réglementaires'],
    target: 'Responsables sécurité, HSE, juristes',
  },
  {
    id: 'formation-site',
    name: 'Formation sur site (intra-entreprise)',
    description: 'Session de formation personnalisée dans vos locaux : manipulation extincteurs, évacuation, sensibilisation incendie, exercice grandeur nature.',
    longDescription: 'Nous nous déplaçons dans votre établissement pour former vos équipes en conditions réelles. Programme sur mesure incluant : théorie (réglementation, classes de feux, consignes), pratique (manipulation extincteurs sur générateur de flammes écologique), et exercice d\'évacuation avec chronométrage et débriefing. Attestation individuelle de formation conforme R4141-3-1.',
    price: 890,
    category: 'Général',
    type: 'service',
    features: ['Demi-journée ou journée', 'Jusqu\'à 12 participants', 'Matériel fourni', 'Exercice sur feu réel', 'Attestations individuelles', 'Compte-rendu pour registre'],
    target: 'Entreprises, ERP, collectivités, établissements de santé',
  },
]

const categories = ['Tous', 'ERP', 'IGH', 'ICPE', 'DUERP', 'Code du travail', 'Général']
const types = [
  { value: 'all', label: 'Tous les types', icon: Filter },
  { value: 'document', label: 'Documents', icon: FileText },
  { value: 'formation', label: 'Formations', icon: Video },
  { value: 'service', label: 'Services', icon: Users },
]

const testimonials = [
  {
    name: 'Marie D.',
    role: 'Directrice d\'EHPAD',
    text: 'Le guide ERP et la check-list commission nous ont permis de préparer sereinement la visite. Avis favorable obtenu sans prescription. Documents clairs et très complets.',
    product: 'Pack ERP Starter',
    rating: 5,
  },
  {
    name: 'Thomas R.',
    role: 'Responsable HSE - Industrie',
    text: 'La trame d\'étude de dangers m\'a fait gagner un temps considérable. La méthodologie nœud papillon est bien expliquée. J\'ai pu la soumettre à la DREAL sans modification majeure.',
    product: 'Trame étude de dangers ICPE',
    rating: 5,
  },
  {
    name: 'Sophie L.',
    role: 'Gérante de restaurant',
    text: 'Je ne connaissais rien à la réglementation ERP. Le guide de classement m\'a permis de comprendre mes obligations et le modèle de registre est très facile à remplir.',
    product: 'Guide classement ERP',
    rating: 5,
  },
  {
    name: 'Philippe M.',
    role: 'DRH - PME 120 salariés',
    text: 'La formation DUERP est excellente. En 3h, j\'ai compris la méthode de cotation et j\'ai pu réaliser notre Document Unique avec les grilles fournies. Le CSE a validé sans réserve.',
    product: 'Formation DUERP',
    rating: 5,
  },
]

const faqItems = [
  {
    question: 'Comment se déroule la commande ?',
    answer: 'Sélectionnez le produit qui vous intéresse et cliquez sur "Commander". Vous serez redirigé vers notre formulaire de contact. Nous vous envoyons un devis sous 24h, et dès réception de votre règlement, vous recevez vos documents par email ou nous planifions l\'intervention.',
  },
  {
    question: 'Les documents sont-ils à jour de la réglementation ?',
    answer: 'Oui. Tous nos documents sont rédigés par un ingénieur certifié INSSI (CNPP) et mis à jour à chaque évolution réglementaire. La mention "Mises à jour incluses" signifie que vous recevrez gratuitement les versions mises à jour pendant 1 an.',
  },
  {
    question: 'Puis-je personnaliser les modèles ?',
    answer: 'Absolument. Tous nos modèles sont fournis en format Word (.docx) ou Excel (.xlsx) modifiables. Vous pouvez y ajouter votre logo, vos coordonnées, et adapter le contenu à votre établissement. Un guide de personnalisation est inclus.',
  },
  {
    question: 'Les formations donnent-elles un certificat ?',
    answer: 'Oui. Chaque formation en ligne se termine par un quiz de validation. Si vous obtenez 80% ou plus de bonnes réponses, vous recevez un certificat de réussite nominatif au format PDF, valable comme justificatif de formation auprès de votre employeur ou de la commission de sécurité.',
  },
  {
    question: 'Quels sont les moyens de paiement acceptés ?',
    answer: 'Nous acceptons le virement bancaire et le paiement par carte bancaire. Pour les entreprises, nous proposons le paiement sur facture à 30 jours. Les prix sont indiqués HT, la TVA applicable est de 20% (sauf formations exonérées).',
  },
  {
    question: 'Proposez-vous des tarifs pour les commandes groupées ?',
    answer: 'Oui. Nos packs proposent déjà des réductions. Pour des commandes de plus de 5 licences de formation ou des besoins spécifiques, contactez-nous pour un devis personnalisé avec tarif dégressif.',
  },
]

export default function Boutique() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [selectedType, setSelectedType] = useState('all')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === 'Tous' || product.category === selectedCategory
    const typeMatch = selectedType === 'all' || product.type === selectedType
    return categoryMatch && typeMatch
  })

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Boutique Prevarie - Documents, formations et services en sécurité incendie',
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': product.type === 'service' ? 'Service' : 'Product',
        name: product.name,
        description: product.description,
        offers: {
          '@type': 'Offer',
          price: product.price,
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        },
      },
    })),
  }

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-navy-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <ShoppingCart className="h-4 w-4" />
                Boutique en ligne
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Documents, Formations & Services
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                Guides réglementaires, modèles de documents, formations en ligne et prestations
                d&apos;accompagnement pour maîtriser la sécurité incendie et les risques professionnels
                de vos établissements.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <FileText className="h-4 w-4 text-blue-400" />
                  {products.filter(p => p.type === 'document').length} documents
                </span>
                <span className="flex items-center gap-1.5">
                  <Video className="h-4 w-4 text-purple-400" />
                  {products.filter(p => p.type === 'formation').length} formations
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-green-400" />
                  {products.filter(p => p.type === 'service').length} services
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Conformes réglementation 2026</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Award className="h-4 w-4 text-fire-500" />
              <span>Rédigés par ingénieur certifié INSSI</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Formats modifiables (Word, Excel)</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Info className="h-4 w-4 text-amber-500" />
              <span>Commande par <Link href="/contact" className="underline font-semibold text-fire-500 hover:text-fire-600">contact direct</Link></span>
            </div>
          </div>
        </div>
      </section>

      {/* Pour qui ? */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Pour qui ?
            </span>
            <h2 className="text-3xl font-bold text-navy-700 mt-3 mb-4">
              Des ressources adaptées à votre profil
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Que vous soyez exploitant, architecte, responsable sécurité ou employeur,
              nous avons les documents et formations adaptés à vos obligations.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Building2,
                title: 'Exploitants ERP',
                desc: 'Guides, registres, check-lists et accompagnement pour la conformité de votre établissement recevant du public.',
                categories: ['ERP'],
              },
              {
                icon: Factory,
                title: 'Industriels & ICPE',
                desc: 'Réglementation ICPE, études de dangers, audits de vulnérabilité pour vos installations classées.',
                categories: ['ICPE'],
              },
              {
                icon: Briefcase,
                title: 'Employeurs & RH',
                desc: 'DUERP, plans d\'action, formations obligatoires et conformité au Code du travail.',
                categories: ['DUERP', 'Code du travail'],
              },
              {
                icon: GraduationCap,
                title: 'Préventeurs & HSE',
                desc: 'Formations approfondies, outils méthodologiques et veille réglementaire pour votre expertise.',
                categories: ['Général'],
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <button
                  onClick={() => {
                    setSelectedCategory(item.categories[0])
                    setSelectedType('all')
                    document.getElementById('catalogue')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all group text-left w-full h-full"
                >
                  <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-fire-500 transition-colors">
                    <item.icon className="h-7 w-7 text-fire-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-navy-700 mb-2 group-hover:text-fire-500 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                  <span className="text-fire-500 text-sm font-semibold mt-3 inline-flex items-center gap-1">
                    Voir les produits <ArrowRight className="h-3 w-3" />
                  </span>
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Bundles */}
      <section className="py-12 bg-gradient-to-b from-fire-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Offres groupées
            </span>
            <h2 className="text-3xl font-bold text-navy-700 mt-3 mb-2">Packs recommandés</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Économisez en combinant les documents essentiels pour votre situation.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Pack ERP Starter',
                desc: 'L\'essentiel pour un exploitant ERP qui veut se mettre en conformité rapidement.',
                products: ['Guide complet ERP', 'Modèle registre de sécurité', 'Check-list commission', 'Kit consignes de sécurité'],
                individualPrice: 122,
                bundlePrice: 95,
                color: 'border-blue-500',
                badge: 'Idéal 5ème catégorie',
              },
              {
                name: 'Pack Conformité Totale',
                desc: 'Pour les établissements soumis à plusieurs réglementations.',
                products: ['Guide ERP', 'Guide ICPE', 'Guide sécurité incendie au travail', 'Kit plan d\'évacuation', 'Check-list commission'],
                individualPrice: 211,
                bundlePrice: 159,
                color: 'border-fire-500',
                badge: 'Le + populaire',
              },
              {
                name: 'Pack Formation + Documents',
                desc: 'Montez en compétence et obtenez tous les outils.',
                products: ['Formation ERP fondamentaux', 'Guide complet ERP', 'Modèle registre sécurité', 'Modèle dossier autorisation'],
                individualPrice: 356,
                bundlePrice: 289,
                color: 'border-purple-500',
                badge: 'Économisez 67€',
              },
            ].map((bundle) => (
              <StaggerItem key={bundle.name}>
                <div className={`bg-white rounded-2xl p-6 shadow-sm border-t-4 ${bundle.color} hover:shadow-lg transition-shadow h-full flex flex-col`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-navy-700">{bundle.name}</h3>
                    <span className="bg-fire-50 text-fire-600 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">{bundle.badge}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{bundle.desc}</p>
                  <ul className="space-y-2 mb-5 flex-1">
                    {bundle.products.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-end gap-3 mb-4">
                    <span className="text-2xl font-bold text-navy-700">{bundle.bundlePrice}€</span>
                    <span className="text-gray-400 line-through text-sm mb-1">{bundle.individualPrice}€</span>
                    <span className="text-sm text-gray-500 mb-1">HT</span>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full bg-fire-500 hover:bg-fire-600 text-white font-semibold py-2.5 px-5 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Commander ce pack
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Simple et rapide
            </span>
            <h2 className="text-3xl font-bold text-navy-700 mt-3 mb-4">
              Comment ça marche ?
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                icon: ShoppingCart,
                title: 'Choisissez',
                desc: 'Sélectionnez les documents, formations ou services qui correspondent à vos besoins.',
              },
              {
                step: '2',
                icon: Mail,
                title: 'Contactez-nous',
                desc: 'Cliquez sur "Commander" pour nous envoyer votre demande. Devis gratuit sous 24h.',
              },
              {
                step: '3',
                icon: BadgeCheck,
                title: 'Confirmez',
                desc: 'Validez le devis et réglez par virement ou carte bancaire. Facturation sur demande.',
              },
              {
                step: '4',
                icon: Download,
                title: 'Recevez',
                desc: 'Documents envoyés par email sous 2h. Formations accessibles immédiatement. Services planifiés sous 48h.',
              },
            ].map((item, i) => (
              <StaggerItem key={item.step}>
                <div className="text-center relative">
                  <div className="relative mx-auto mb-4">
                    <div className="bg-fire-500 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg mx-auto shadow-lg shadow-fire-500/20">
                      {item.step}
                    </div>
                    {i < 3 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-fire-200 -translate-y-1/2" />
                    )}
                  </div>
                  <item.icon className="h-6 w-6 text-fire-500 mx-auto mb-3" />
                  <h3 className="font-bold text-navy-700 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Catalogue filtrable */}
      <section id="catalogue" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Catalogue complet
            </span>
            <h2 className="text-3xl font-bold text-navy-700 mt-3 mb-4">
              Tous nos produits et services
            </h2>
          </FadeIn>

          {/* Filtres */}
          <FadeIn>
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-10 border border-gray-100">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-1">
                  <label className="text-sm font-semibold text-navy-700 mb-3 block">Domaine réglementaire</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          selectedCategory === cat
                            ? 'bg-fire-500 text-white shadow-lg shadow-fire-500/30'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <label className="text-sm font-semibold text-navy-700 mb-3 block">Type de produit</label>
                  <div className="flex flex-wrap gap-2">
                    {types.map((type) => (
                      <button
                        key={type.value}
                        onClick={() => setSelectedType(type.value)}
                        className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                          selectedType === type.value
                            ? 'bg-navy-700 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <type.icon className="h-4 w-4" />
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <p className="text-gray-600 mb-8 font-medium">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
              {selectedCategory !== 'Tous' && ` dans "${selectedCategory}"`}
              {selectedType !== 'all' && ` de type "${types.find(t => t.value === selectedType)?.label}"`}
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <StaggerItem key={product.id}>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all group border border-gray-100 h-full flex flex-col">
                  <div className="relative">
                    <div className={`h-1.5 ${
                      product.type === 'document' ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                      product.type === 'formation' ? 'bg-gradient-to-r from-purple-400 to-purple-600' : 'bg-gradient-to-r from-green-400 to-green-600'
                    }`} />
                    {product.popular && (
                      <div className="absolute top-4 right-4 bg-fire-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg shadow-fire-500/30">
                        <Star className="h-3 w-3" />
                        Populaire
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        product.type === 'document' ? 'bg-blue-50 text-blue-600' :
                        product.type === 'formation' ? 'bg-purple-50 text-purple-600' : 'bg-green-50 text-green-600'
                      }`}>
                        {product.type === 'document' ? 'Document' :
                         product.type === 'formation' ? 'Formation' : 'Service'}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">{product.category}</span>
                      {product.format && (
                        <span className="text-xs text-gray-400 ml-auto">{product.format}</span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-navy-700 mb-2 group-hover:text-fire-500 transition-colors">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                    {(product.pages || product.duration) && (
                      <div className="flex items-center gap-3 mb-4 text-xs text-gray-500">
                        {product.pages && (
                          <span className="flex items-center gap-1">
                            <FileText className="h-3 w-3" />
                            {product.pages}
                          </span>
                        )}
                        {product.duration && (
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {product.duration}
                          </span>
                        )}
                      </div>
                    )}

                    <ul className="space-y-1.5 mb-6 flex-1">
                      {product.features.slice(0, 4).map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-3.5 w-3.5 text-green-500 shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 4 && (
                        <li className="text-xs text-gray-400 pl-5">
                          + {product.features.length - 4} autres inclus
                        </li>
                      )}
                    </ul>

                    <div className="flex items-center justify-between pt-5 border-t border-gray-100 mt-auto">
                      <div>
                        <span className="text-2xl font-bold text-navy-700">{product.price}€</span>
                        <span className="text-sm text-gray-500 ml-1">HT</span>
                      </div>
                      <Link
                        href="/contact"
                        className="bg-gradient-to-r from-fire-500 to-fire-600 hover:from-fire-600 hover:to-fire-700 text-white font-semibold py-2.5 px-5 rounded-xl transition-all text-sm flex items-center gap-2 shadow-lg shadow-fire-500/20"
                      >
                        {product.type === 'document' ? (
                          <><Download className="h-4 w-4" />Commander</>
                        ) : product.type === 'formation' ? (
                          <><BookOpen className="h-4 w-4" />S&apos;inscrire</>
                        ) : (
                          <><Users className="h-4 w-4" />Demander</>
                        )}
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Témoignages
            </span>
            <h2 className="text-3xl font-bold text-navy-700 mt-3 mb-4">
              Ce que disent nos clients
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="bg-gray-50 rounded-2xl p-6 h-full flex flex-col">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm mb-4 flex-1 italic">&quot;{t.text}&quot;</p>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-semibold text-navy-700 text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                    <div className="text-fire-500 text-xs font-medium mt-1">{t.product}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Avantages / Garanties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Nos garanties
            </span>
            <h2 className="text-3xl font-bold text-navy-700 mt-3 mb-4">
              Pourquoi choisir Prevarie ?
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Expertise certifiée',
                desc: 'Documents rédigés par un ingénieur certifié INSSI du CNPP, avec 20 ans d\'expérience terrain.',
              },
              {
                icon: Zap,
                title: 'Livraison rapide',
                desc: 'Documents envoyés par email sous 2 heures après confirmation. Formations accessibles immédiatement.',
              },
              {
                icon: Shield,
                title: 'Conformité garantie',
                desc: 'Tous nos documents sont conformes à la réglementation en vigueur et mis à jour régulièrement.',
              },
              {
                icon: Users,
                title: 'Support inclus',
                desc: 'Une question sur un document ? Notre équipe vous répond sous 24h pour vous guider dans la personnalisation.',
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="text-center group">
                  <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:bg-fire-500 transition-colors">
                    <item.icon className="h-8 w-8 text-fire-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-navy-700 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <span className="text-fire-500 font-semibold text-sm uppercase tracking-wider">
              Questions fréquentes
            </span>
            <h2 className="text-3xl font-bold text-navy-700 mt-3 mb-4">
              Tout savoir sur la boutique
            </h2>
          </FadeIn>

          <FadeIn>
            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-navy-700 pr-4">{item.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-fire-500 shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5">
                      <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Besoin d'un document sur mesure ?"
        description="Nous créons des documents personnalisés pour votre établissement : registres, consignes, protocoles, études de dangers. Devis gratuit sous 24h."
      />
    </>
  )
}
