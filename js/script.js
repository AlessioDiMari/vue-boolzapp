const {createApp} = Vue;

createApp({
    data(){
        return{

            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'GianMarco Tocco',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Giorgio Muratore',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Matteo Pelusi',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Billy Bella',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Dario Moccia',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],

            activeChatIndex: 0,

            // Aggiungo due stringhe per memorizzare i dati del contatto
            activeContactName: '',
            activeContactAvatar: '',
            
            // Creo una stringa vuota che servirà per memodizzare la ricerca
            searchQuery: "",


            // *Bonus pulsante elimina*
            // Mi assicuro che questa variabile sia accessibile per tutto il codice
            // e gli do un valore nullo che cambierò in seguito
            activeContextMenuMessage: null,
        }
    },

    computed: {
        // Creo una funzione di ricerca
        filteredContacts() {
          // Filtra i contatti in base alla query di ricerca
          return this.contacts.filter(contact =>
            // Utilizzo il metodo toLowerCase per far si che la ricerca sia più flessibile
            contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        //   Modifico il codice html per adattarlo alla funzione di ricerca
        },
    },

    methods: {
        
        // Funzione per cambiare chat al click sul contatto
        swapActiveChat(index) {
            // Modifico la funzione
            this.contacts.forEach((contact, i) => {
                contact.open = i ===index;
            });
            this.activeChatIndex = index;

            // Modifico i dati del contatto in maniera tale
            // fa visualizzare quelli della chat aperta
            this.activeContactName = this.contacts[index].name;
            this.activeContactAvatar = this.contacts[index].avatar;
            // dopodichè aggiorno l'html
        },

        // Creo una funzione che faccia vedere in pagina un testo scritto
        // nell'input text-sender alla pressione del tasto enter
        sendMessage(){
            // Prendo il testo inserito nell'input text-sender
            const messageInput = document.getElementById("text-sender");

            // Prendo il valore all'interno dell'input
            // e utilizzo ilò metodo trim per eliminare gli spazi
            // all'inizio e alla fine del valore
            const messageText = messageInput.value.trim();

            // Creo un if per verificare che l'input non sia vuoto
            if (messageText !== '') {
                // Dichiaro la data e l'orario di invio
                const now = new Date();
                const formattedDate = `${now.getHours()}:${now.getMinutes()}`;

                // Aggiungo il nuovo messaggio all'array dei messaggi
                // collegati al contatto
                this.contacts[this.activeChatIndex].messages.push({
                    date: formattedDate,
                    message: messageText,
                    status: 'sent'
                });

                // faccio in modo che dopo l'invio del messaggio
                // l'utente non debba eliminare il messaggio
                // inviato dall'input manualmente
                messageInput.value = '';

                // Faccio in modo che dopo 1.5 secondi dall'invio
                // del messaggio il contatto "risponda"
                setTimeout(() => {
                    // Dichiaro la data e l'orario del messaggio di risposta
                    const now = new Date();
                    const formattedDate = `${now.getHours()}:${now.getMinutes()}`;

                    // Aggiungo il nuovo messaggio all'array dei messaggi
                    // collegati al contatto
                    this.contacts[this.activeChatIndex].messages.push({
                        date: formattedDate,
                        message: 'Deh, PEFFFFOOOOOOOORZA!!!!!',
                        status: 'received'
                    });

                }, 1500);

            }
            
        },

        
        
    }
}).mount("#app")