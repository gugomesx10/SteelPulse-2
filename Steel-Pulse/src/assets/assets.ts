import appointment_img from './appointment_img.png';
import header_img from './header_img.png';
import group_profiles from './group_profiles.png';
import profile_pic from './profile_pic.png';
import contact_image from './contact_image.png';
import about_image from './about_image.png';
import logo from './logo.svg';
import dropdown_icon from './dropdown_icon.svg';
import menu_icon from './menu_icon.svg';
import cross_icon from './cross_icon.png';
import chats_icon from './chats_icon.svg';
import verified_icon from './verified_icon.svg';
import arrow_icon from './arrow_icon.svg';
import info_icon from './info_icon.svg';
import upload_icon from './upload_icon.png';
import stripe_logo from './stripe_logo.png';
import razorpay_logo from './razorpay_logo.png';
import doc1 from './doc1.png';
import doc2 from './doc2.png';
import doc3 from './doc3.png';
import doc4 from './doc4.png';
import doc5 from './doc5.png';
import doc6 from './doc6.png';
import doc7 from './doc7.png';
import doc8 from './doc8.png';
import doc9 from './doc9.png';
import doc10 from './doc10.png';
import doc11 from './doc11.png';
import doc12 from './doc12.png';
import doc13 from './doc13.png';
import doc14 from './doc14.png';
import doc15 from './doc15.png';
import Dermatologist from './Dermatologist.svg';
import Gastroenterologist from './Gastroenterologist.svg';
import General_physician from './General_physician.svg';
import Gynecologist from './Gynecologist.svg';
import Neurologist from './Neurologist.svg';
import Pediatricians from './Pediatricians.svg';

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo
};

interface Speciality {
  speciality: string;
  image: string;
}

export const specialityData: Speciality[] = [
  { speciality: 'Clínico Geral', image: General_physician },
  { speciality: 'Ginecologista', image: Gynecologist },
  { speciality: 'Dermatologista', image: Dermatologist },
  { speciality: 'Pediatra', image: Pediatricians },
  { speciality: 'Neurologista', image: Neurologist },
  { speciality: 'Gastroenterologista', image: Gastroenterologist }
];

interface Address {
  line1: string;
  line2: string;
}

interface Doctor {
  _id: string;
  name: string;
  image: string;
  speciality: string;
  degree: string;
  experience: string;
  about: string;
  fees: number;
  address: Address;
}

export const doctors: Doctor[] = [
  {
    _id: 'doc1',
    name: 'Dr. Richard James',
    image: doc1,
    speciality: 'Clínico Geral',
    degree: 'MBBS',
    experience: '4 Anos',
    about: 'O Dr. James tem um forte compromisso em oferecer cuidados médicos abrangentes, focando na medicina preventiva, diagnóstico precoce e estratégias de tratamento eficazes.',
    fees: 50,
    address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, Londres' }
  },
  {
    _id: 'doc2',
    name: 'Dr. Emily Larson',
    image: doc2,
    speciality: 'Ginecologista',
    degree: 'MBBS',
    experience: '3 Anos',
    about: 'A Dra. Larson se dedica à medicina preventiva e ao cuidado das mulheres em todas as fases da vida.',
    fees: 60,
    address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, Londres' }
  },
  {
    _id: 'doc3',
    name: 'Dr. Sarah Patel',
    image: doc3,
    speciality: 'Dermatologista',
    degree: 'MBBS',
    experience: '1 Ano',
    about: 'A Dra. Patel foca na saúde da pele, tratando desde acne até condições mais complexas.',
    fees: 30,
    address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, Londres' }
  },
  {
    _id: 'doc4',
    name: 'Dr. Christopher Lee',
    image: doc4,
    speciality: 'Pediatra',
    degree: 'MBBS',
    experience: '2 Anos',
    about: 'O Dr. Lee tem experiência em cuidados pediátricos, garantindo o bem-estar das crianças.',
    fees: 40,
    address: { line1: '47th Cross, Richmond', line2: 'Circle, Ring Road, Londres' }
  },
  {
    _id: 'doc5',
    name: 'Dr. Jennifer Garcia',
    image: doc5,
    speciality: 'Neurologista',
    degree: 'MBBS',
    experience: '4 Anos',
    about: 'A Dra. Garcia é especializada em doenças neurológicas, com um foco em tratamentos inovadores.',
    fees: 50,
    address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, Londres' }
  },
  {
    _id: 'doc6',
    name: 'Dr. Andrew Williams',
    image: doc6,
    speciality: 'Neurologista',
    degree: 'MBBS',
    experience: '4 Anos',
    about: 'O Dr. Williams é especializado no tratamento de distúrbios neurológicos com métodos baseados em evidências.',
    fees: 50,
    address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, Londres' }
  },
  {
    _id: 'doc7',
    name: 'Dr. Christopher Davis',
    image: doc7,
    speciality: 'Clínico Geral',
    degree: 'MBBS',
    experience: '4 Anos',
    about: 'O Dr. Davis oferece cuidados médicos gerais, com foco na medicina preventiva e acompanhamento contínuo.',
    fees: 50,
    address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, Londres' }
  },
  {
    _id: 'doc8',
    name: 'Dr. Timothy White',
    image: doc8,
    speciality: 'Ginecologista',
    degree: 'MBBS',
    experience: '3 Anos',
    about: 'O Dr. White é especializado em ginecologia e saúde feminina, com um atendimento de alta qualidade.',
    fees: 60,
    address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, Londres' }
  },
  {
    _id: 'doc9',
    name: 'Dr. Ava Mitchell',
    image: doc9,
    speciality: 'Dermatologista',
    degree: 'MBBS',
    experience: '1 Ano',
    about: 'A Dra. Mitchell é focada em cuidados dermatológicos de alta qualidade, desde problemas comuns até doenças graves.',
    fees: 30,
    address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, Londres' }
  },
  {
    _id: 'doc10',
    name: 'Dr. Jeffrey King',
    image: doc10,
    speciality: 'Pediatra',
    degree: 'MBBS',
    experience: '2 Anos',
    about: 'O Dr. King é pediatra especializado no cuidado de crianças em diferentes fases de desenvolvimento.',
    fees: 40,
    address: { line1: '47th Cross, Richmond', line2: 'Circle, Ring Road, Londres' }
  },
  {
    _id: 'doc11',
    name: 'Dr. Zoe Kelly',
    image: doc11,
    speciality: 'Neurologista',
    degree: 'MBBS',
    experience: '4 Anos',
    about: 'A Dra. Kelly oferece tratamentos inovadores para distúrbios neurológicos com um foco em qualidade de vida.',
    fees: 50,
    address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, Londres' }
  },
  {
    _id: 'doc12',
    name: 'Dr. Patrick Harris',
    image: doc12,
    speciality: 'Neurologista',
    degree: 'MBBS',
    experience: '4 Anos',
    about: 'O Dr. Harris é especializado no diagnóstico e tratamento de condições neurológicas.',
    fees: 50,
    address: { line1: '57th Cross, Richmond', line2: 'Circle, Ring Road, Londres' }
  },
  {
    _id: 'doc13',
    name: 'Dr. Chloe Evans',
    image: doc13,
    speciality: 'Clínico Geral',
    degree: 'MBBS',
    experience: '4 Anos',
    about: 'A Dra. Evans oferece cuidados gerais com um foco na medicina preventiva.',
    fees: 50,
    address: { line1: '17th Cross, Richmond', line2: 'Circle, Ring Road, Londres' }
  },
  {
    _id: 'doc14',
    name: 'Dr. Ryan Martinez',
    image: doc14,
    speciality: 'Ginecologista',
    degree: 'MBBS',
    experience: '3 Anos',
    about: 'O Dr. Martinez é especialista em ginecologia e bem-estar feminino.',
    fees: 60,
    address: { line1: '27th Cross, Richmond', line2: 'Circle, Ring Road, Londres' }
  },
  {
    _id: 'doc15',
    name: 'Dr. Amelia Hill',
    image: doc15,
    speciality: 'Dermatologista',
    degree: 'MBBS',
    experience: '1 Ano',
    about: 'A Dra. Hill oferece cuidados dermatológicos, com foco na saúde da pele e tratamentos eficazes.',
    fees: 30,
    address: { line1: '37th Cross, Richmond', line2: 'Circle, Ring Road, Londres' }
  }
];
