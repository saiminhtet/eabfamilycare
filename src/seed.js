// prettier-ignore
/* eslint-disable no-plusplus */
// NOTE: replace 'NvPY9M9MzFTARQ6M816YAzDJxZ72' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'RqfY2jD5CGRpzKzelFXOwmppmj82',
        username: 'saiminhtet',
        fullName: 'Sai Min Htet',
        emailAddress: 'saiminhtet.developer@gmail.com',
        dateofbirth: '10-04-1993',
        nrcno: '7/YAKANA(N)086545',
        address: '211 Hougang Street, #01-315',
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'raphael',
        fullName: 'Raffaello Sanzio da Urbino',
        emailAddress: 'raphael@sanzio.com',
        dateofbirth: '10-04-1993',
        nrcno: '7/YAKANA(N)086545',
        address: '211 Hougang Street, #01-315',
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'dali',
        fullName: 'Salvador Dalí',
        emailAddress: 'salvador@dali.com',
        dateofbirth: '10-04-1993',
        nrcno: '7/YAKANA(N)086545',
        address: '211 Hougang Street, #01-315',
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'orwell',
        fullName: 'George Orwell',
        emailAddress: 'george@orwell.com',
        dateofbirth: '10-04-1993',
        nrcno: '7/YAKANA(N)086545',
        address: '211 Hougang Street, #01-315',
        dateCreated: Date.now()
      }
    ];
  
    // eslint-disable-next-line prefer-const
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    // eslint-disable-next-line prefer-const
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('healthtrackings')
        .add({
          healttrackingId: i,
          userId: '2',
          temperature: '36.5',
          temperatureflag: 'L',
          illness: 'flase',
          cough: 'false',
          sneezing: 'false',
          runnynose: 'fasle',
          shortnessbreath: 'false',
          oxygensaturation: '98',
          fractioninspiredoxygen: '21',
          heartrate: '90',
          bloodpressure: '109/71',
          pulserate: '64',
          remarks: '',
          dateCreated: Date.now()
        });
    }
  }
