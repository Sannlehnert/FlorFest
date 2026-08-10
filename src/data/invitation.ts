export interface InvitationData {
  name: string;
  lastName: string;
  fullName: string;
  eventName: string;
  day: number;
  month: string;
  year: number;
  dayOfWeek: string;
  time: string;
  location: string;
  address: string;
  mapsUrl: string;
  dressCode: string;
  giftAlias: string;
  giftMessage: string;
  whatsappNumber: string;
  whatsappMessage: string;
  rsvpMessage: string;
  emotionalMessage: string;
  music: {
    title: string;
    artist: string;
    src: string;
  };
  photos: string[];
}

export const invitation: InvitationData = {
  // ─── IDENTIDAD ───
  name: "Flor",
  lastName: "Lehnert",
  fullName: "Flor Lehnert",
  eventName: "FLOR FEST",

  // ─── FECHA Y HORA ───
  day: 3,
  month: "Octubre",
  year: 2026,
  dayOfWeek: "Sábado",
  time: "20:30 HS",

  // ─── UBICACIÓN ───
  location: "Centenario",
  address: "Calle Rural 7, Centenario, Neuquén",
  mapsUrl: "https://maps.app.goo.gl/8BxkiVo6VdzNuzdn8?g_st=aw",

  // ─── DRESS CODE ───
  dressCode: "Elegante Sport",

  // ─── REGALO ───
  giftAlias: "florenciaa.mp3",
  giftMessage: "El mejor regalo es tu presencia… pero si deseas dejarme un obsequio, dejo mis datos",

  // ─── WHATSAPP ───
  whatsappNumber: "5492995354680",
  whatsappMessage: "Hola Flor! Quiero confirmar mi asistencia a tus 15 años. ¡Voy! ❤️",

  // ─── TEXTOS DE LA INVITACIÓN ───
  rsvpMessage: "Quiero festejar mis xv bailando hasta el amanecer con la gente que más quiero. ¿venís?",
  emotionalMessage: "Gracias por ser parte de mi vida y acompañarme en este camino lleno de ilusión",

  // ─── MÚSICA ───
  music: {
    title: "A Sky Full of Stars",
    artist: "Coldplay",
    src: "/audio/music.mp3",
  },

  // ─── FOTOS (12 placeholders) ───
  photos: [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpeg",
    "/images/photo5.jpeg",
    "/images/photo6.jpg",
    "/images/photo7.jpeg",
    "/images/photo8.jpg",
    "/images/photo9.jpg",
    "/images/photo10.jpeg",
    "/images/photo11.jpeg",
    "/images/photo12.jpg",
  ],
};