import { Comments } from './comments.model';
import { Utenti } from './utenti.model';

export const Commenti: Comments[] = [
  { titolo: 'Vendo una macchina',
    user: new Utenti("Maurizio", "Merluzzo", "Mauroz", "mauri.merluzzo@gmail.com", "xxx124"),
    comments: [],
  },
  { titolo: 'Hello Word',
    user: new Utenti("Paolo", "Bitta", "Paolo", "bitta.paolo@gmail.com", "xxx124"),
    comments: [{
      titolo: 'OK',
    user: new Utenti("Maurizio", "Merluzzo", "Mauroz", "mauri.merluzzo@gmail.com", "xxx124"),
    comments: []

  }],}

];
