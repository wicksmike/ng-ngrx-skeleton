import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from './store/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  constructor() {}

  public mockAccounts: Account[] = [
    {
      id: '5d9b75bdcce1d91157ab4610',
      firstName: 'Henderson',
      lastName: 'Foreman',
      email: 'hendersonforeman@limozen.com'
    },
    {
      id: '5d9b75bdea737d03ed0922b9',
      firstName: 'Norris',
      lastName: 'Kaufman',
      email: 'norriskaufman@limozen.com'
    },
    {
      id: '5d9b75bda06a6e88ad36aa3f',
      firstName: 'Hobbs',
      lastName: 'Porter',
      email: 'hobbsporter@limozen.com'
    },
    {
      id: '5d9b75bd6cb78d06600a38e0',
      firstName: 'Erickson',
      lastName: 'Nielsen',
      email: 'ericksonnielsen@limozen.com'
    },
    {
      id: '5d9b75bd932db68680476ab4',
      firstName: 'Dionne',
      lastName: 'Maddox',
      email: 'dionnemaddox@limozen.com'
    },
    {
      id: '5d9b75bd120ef3a661680a88',
      firstName: 'Elnora',
      lastName: 'Castillo',
      email: 'elnoracastillo@limozen.com'
    },
    {
      id: '5d9b75bdce1671b6c71d34bb',
      firstName: 'Grant',
      lastName: 'Bender',
      email: 'grantbender@limozen.com'
    },
    {
      id: '5d9b75bd939b1439a6bfe037',
      firstName: 'Christian',
      lastName: 'Mejia',
      email: 'christianmejia@limozen.com'
    },
    {
      id: '5d9b75bd72f9ee91763ab74c',
      firstName: 'Hurley',
      lastName: 'Rutledge',
      email: 'hurleyrutledge@limozen.com'
    },
    {
      id: '5d9b75bdd379277a031af2c6',
      firstName: 'Joseph',
      lastName: 'Cummings',
      email: 'josephcummings@limozen.com'
    },
    {
      id: '5d9b75bde05d821bd09588b8',
      firstName: 'Brenda',
      lastName: 'Mendez',
      email: 'brendamendez@limozen.com'
    },
    {
      id: '5d9b75bd37675518e6ada6ea',
      firstName: 'Watts',
      lastName: 'Pitts',
      email: 'wattspitts@limozen.com'
    },
    {
      id: '5d9b75bd713d1ac9ccd2794b',
      firstName: 'Ashley',
      lastName: 'Dudley',
      email: 'ashleydudley@limozen.com'
    },
    {
      id: '5d9b75bd93077a0ed10871a9',
      firstName: 'Carolyn',
      lastName: 'Anthony',
      email: 'carolynanthony@limozen.com'
    },
    {
      id: '5d9b75bdf71464258f4ca473',
      firstName: 'Kasey',
      lastName: 'Boone',
      email: 'kaseyboone@limozen.com'
    },
    {
      id: '5d9b75bd57d9505fea3a87cf',
      firstName: 'Barr',
      lastName: 'Forbes',
      email: 'barrforbes@limozen.com'
    },
    {
      id: '5d9b75bd0c8d1f6d649ffac0',
      firstName: 'Margarita',
      lastName: 'Wise',
      email: 'margaritawise@limozen.com'
    },
    {
      id: '5d9b75bd0c1af6df43360327',
      firstName: 'Morris',
      lastName: 'Lucas',
      email: 'morrislucas@limozen.com'
    },
    {
      id: '5d9b75bd713ef7a9e8c57591',
      firstName: 'Shanna',
      lastName: 'Watson',
      email: 'shannawatson@limozen.com'
    },
    {
      id: '5d9b75bd5557197ccbd12289',
      firstName: 'Simone',
      lastName: 'Underwood',
      email: 'simoneunderwood@limozen.com'
    },
    {
      id: '5d9b75bd569defcf9b044973',
      firstName: 'Clara',
      lastName: 'King',
      email: 'claraking@limozen.com'
    },
    {
      id: '5d9b75bdfa909ffe824456b9',
      firstName: 'Kara',
      lastName: 'Nunez',
      email: 'karanunez@limozen.com'
    },
    {
      id: '5d9b75bd11146f9c33d732ea',
      firstName: 'Carrillo',
      lastName: 'Morton',
      email: 'carrillomorton@limozen.com'
    },
    {
      id: '5d9b75bd740a2b65e111ac94',
      firstName: 'Meyers',
      lastName: 'Evans',
      email: 'meyersevans@limozen.com'
    },
    {
      id: '5d9b75bd7eb05d30f05a965f',
      firstName: 'Palmer',
      lastName: 'Kennedy',
      email: 'palmerkennedy@limozen.com'
    },
    {
      id: '5d9b75bd78c70a8887f14f98',
      firstName: 'Kathryn',
      lastName: 'Brady',
      email: 'kathrynbrady@limozen.com'
    },
    {
      id: '5d9b75bdee1e1077296560ce',
      firstName: 'Elva',
      lastName: 'English',
      email: 'elvaenglish@limozen.com'
    },
    {
      id: '5d9b75bd8068c7824bf298a7',
      firstName: 'Guthrie',
      lastName: 'Cooke',
      email: 'guthriecooke@limozen.com'
    },
    {
      id: '5d9b75bd39b15f3345e99950',
      firstName: 'Ortega',
      lastName: 'Jackson',
      email: 'ortegajackson@limozen.com'
    },
    {
      id: '5d9b75bdc29233b0f2f73618',
      firstName: 'Valdez',
      lastName: 'Burch',
      email: 'valdezburch@limozen.com'
    },
    {
      id: '5d9b75bddb4d8787ee0aaff4',
      firstName: 'Mcclain',
      lastName: 'Carson',
      email: 'mcclaincarson@limozen.com'
    },
    {
      id: '5d9b75bd6a6aced4bc277d61',
      firstName: 'Sheila',
      lastName: 'Griffith',
      email: 'sheilagriffith@limozen.com'
    },
    {
      id: '5d9b75bd9b25a8a7a5a46f31',
      firstName: 'Blanchard',
      lastName: 'Kane',
      email: 'blanchardkane@limozen.com'
    },
    {
      id: '5d9b75bd9169b152f07d072f',
      firstName: 'Christian',
      lastName: 'Adams',
      email: 'christianadams@limozen.com'
    },
    {
      id: '5d9b75bd80d3456b9a0f27f5',
      firstName: 'Lou',
      lastName: 'Copeland',
      email: 'loucopeland@limozen.com'
    },
    {
      id: '5d9b75bd27fe3b3e7ae96d09',
      firstName: 'Karyn',
      lastName: 'Pickett',
      email: 'karynpickett@limozen.com'
    },
    {
      id: '5d9b75bd94ed0627fa10b589',
      firstName: 'Nadia',
      lastName: 'Bauer',
      email: 'nadiabauer@limozen.com'
    },
    {
      id: '5d9b75bd913ba994da437f37',
      firstName: 'Christine',
      lastName: 'Monroe',
      email: 'christinemonroe@limozen.com'
    },
    {
      id: '5d9b75bdb7d8c20b903faf8e',
      firstName: 'Alfreda',
      lastName: 'Woodard',
      email: 'alfredawoodard@limozen.com'
    },
    {
      id: '5d9b75bdf77549e3ef702645',
      firstName: 'Calderon',
      lastName: 'Nicholson',
      email: 'calderonnicholson@limozen.com'
    },
    {
      id: '5d9b75bd2a36a63a1e771af1',
      firstName: 'Fletcher',
      lastName: 'Kinney',
      email: 'fletcherkinney@limozen.com'
    },
    {
      id: '5d9b75bd33ad80701883c905',
      firstName: 'Park',
      lastName: 'Whitney',
      email: 'parkwhitney@limozen.com'
    },
    {
      id: '5d9b75bd5bbe442f0d443376',
      firstName: 'Collins',
      lastName: 'Wallace',
      email: 'collinswallace@limozen.com'
    },
    {
      id: '5d9b75bda130c1e77e1f0c66',
      firstName: 'Brewer',
      lastName: 'Edwards',
      email: 'breweredwards@limozen.com'
    },
    {
      id: '5d9b75bd94d54525be4c998a',
      firstName: 'Laverne',
      lastName: 'Black',
      email: 'laverneblack@limozen.com'
    },
    {
      id: '5d9b75bdbe2f61d6ac609a16',
      firstName: 'Brock',
      lastName: 'Bryan',
      email: 'brockbryan@limozen.com'
    },
    {
      id: '5d9b75bd06b027cb92cf4a35',
      firstName: 'Woodward',
      lastName: 'Hanson',
      email: 'woodwardhanson@limozen.com'
    },
    {
      id: '5d9b75bdb93ceb57ccf38037',
      firstName: 'Johanna',
      lastName: 'Oliver',
      email: 'johannaoliver@limozen.com'
    },
    {
      id: '5d9b75bd5c84c0a99b0b26d9',
      firstName: 'Bird',
      lastName: 'Lee',
      email: 'birdlee@limozen.com'
    },
    {
      id: '5d9b75bdbeaf567f9f47aa46',
      firstName: 'Matilda',
      lastName: 'Nolan',
      email: 'matildanolan@limozen.com'
    },
    {
      id: '5d9b75bd10232dc39c179aa8',
      firstName: 'Elise',
      lastName: 'Gaines',
      email: 'elisegaines@limozen.com'
    },
    {
      id: '5d9b75bdfc45a0187b559abf',
      firstName: 'Bates',
      lastName: 'Weaver',
      email: 'batesweaver@limozen.com'
    },
    {
      id: '5d9b75bd932ee0cb124fe51e',
      firstName: 'Lilly',
      lastName: 'Pennington',
      email: 'lillypennington@limozen.com'
    },
    {
      id: '5d9b75bdafbc29b4973ba18c',
      firstName: 'Flynn',
      lastName: 'Cobb',
      email: 'flynncobb@limozen.com'
    },
    {
      id: '5d9b75bd479c8177e495bfb6',
      firstName: 'Holman',
      lastName: 'Wood',
      email: 'holmanwood@limozen.com'
    },
    {
      id: '5d9b75bd1c858b613740a7ca',
      firstName: 'Jacobs',
      lastName: 'Livingston',
      email: 'jacobslivingston@limozen.com'
    },
    {
      id: '5d9b75bd62febf2fda63bd5f',
      firstName: 'Glenn',
      lastName: 'Goodman',
      email: 'glenngoodman@limozen.com'
    },
    {
      id: '5d9b75bdf57b7c94acda634f',
      firstName: 'Johns',
      lastName: 'Lewis',
      email: 'johnslewis@limozen.com'
    },
    {
      id: '5d9b75bd8732d4b840c0ea63',
      firstName: 'Cobb',
      lastName: 'Osborn',
      email: 'cobbosborn@limozen.com'
    },
    {
      id: '5d9b75bdfda4b8630bdefec6',
      firstName: 'Stacy',
      lastName: 'Potts',
      email: 'stacypotts@limozen.com'
    },
    {
      id: '5d9b75bd2ce52c7829063ecf',
      firstName: 'Pollard',
      lastName: 'Ochoa',
      email: 'pollardochoa@limozen.com'
    },
    {
      id: '5d9b75bd7ce5b2fad0f0fc3c',
      firstName: 'Clay',
      lastName: 'Patton',
      email: 'claypatton@limozen.com'
    },
    {
      id: '5d9b75bdcc3a757a07846315',
      firstName: 'Head',
      lastName: 'Stuart',
      email: 'headstuart@limozen.com'
    },
    {
      id: '5d9b75bd78e92362168baa1b',
      firstName: 'Carpenter',
      lastName: 'Harding',
      email: 'carpenterharding@limozen.com'
    },
    {
      id: '5d9b75bdffb1463b2b32d0ed',
      firstName: 'Claudette',
      lastName: 'Dyer',
      email: 'claudettedyer@limozen.com'
    },
    {
      id: '5d9b75bd9645edeb5e0d1efd',
      firstName: 'Desiree',
      lastName: 'Nguyen',
      email: 'desireenguyen@limozen.com'
    },
    {
      id: '5d9b75bdc06d8a3366a8d62d',
      firstName: 'Carrie',
      lastName: 'Marshall',
      email: 'carriemarshall@limozen.com'
    },
    {
      id: '5d9b75bd592135b70652e047',
      firstName: 'Lowe',
      lastName: 'Richard',
      email: 'lowerichard@limozen.com'
    },
    {
      id: '5d9b75bd0e7047cc71565a43',
      firstName: 'Aimee',
      lastName: 'Summers',
      email: 'aimeesummers@limozen.com'
    },
    {
      id: '5d9b75bdb3e510d7443d37fe',
      firstName: 'Gillespie',
      lastName: 'Klein',
      email: 'gillespieklein@limozen.com'
    },
    {
      id: '5d9b75bde3f0cbc50679bf33',
      firstName: 'Vega',
      lastName: 'Farley',
      email: 'vegafarley@limozen.com'
    },
    {
      id: '5d9b75bdaf8c68d1cc65bc8d',
      firstName: 'Franks',
      lastName: 'Landry',
      email: 'frankslandry@limozen.com'
    },
    {
      id: '5d9b75bdc856fd557991949e',
      firstName: 'Fleming',
      lastName: 'Phelps',
      email: 'flemingphelps@limozen.com'
    },
    {
      id: '5d9b75bdea15a51f26b6ac40',
      firstName: 'Meyer',
      lastName: 'Howard',
      email: 'meyerhoward@limozen.com'
    },
    {
      id: '5d9b75bdc3928bfd80dbdc08',
      firstName: 'Rosario',
      lastName: 'Dale',
      email: 'rosariodale@limozen.com'
    },
    {
      id: '5d9b75bd0363405ff031fc21',
      firstName: 'Ruiz',
      lastName: 'Strong',
      email: 'ruizstrong@limozen.com'
    },
    {
      id: '5d9b75bd0cd1fd3cd75227bf',
      firstName: 'Reynolds',
      lastName: 'Roach',
      email: 'reynoldsroach@limozen.com'
    },
    {
      id: '5d9b75bd92a8d9515bbc34aa',
      firstName: 'Christy',
      lastName: 'Mosley',
      email: 'christymosley@limozen.com'
    },
    {
      id: '5d9b75bd7bdb22b750956fac',
      firstName: 'Joyce',
      lastName: 'Bird',
      email: 'joycebird@limozen.com'
    },
    {
      id: '5d9b75bdf20cb74da90cd641',
      firstName: 'Loretta',
      lastName: 'Cotton',
      email: 'lorettacotton@limozen.com'
    },
    {
      id: '5d9b75bd1537e8dbb471552d',
      firstName: 'Perkins',
      lastName: 'Cleveland',
      email: 'perkinscleveland@limozen.com'
    },
    {
      id: '5d9b75bd6023f12dee2ce9d8',
      firstName: 'Greene',
      lastName: 'Knox',
      email: 'greeneknox@limozen.com'
    },
    {
      id: '5d9b75bd2862f5aadcc8dbd0',
      firstName: 'Levy',
      lastName: 'Wilkerson',
      email: 'levywilkerson@limozen.com'
    },
    {
      id: '5d9b75bd2ac63629de1fe503',
      firstName: 'Corina',
      lastName: 'Pierce',
      email: 'corinapierce@limozen.com'
    },
    {
      id: '5d9b75bdaf41ef20132bfbb5',
      firstName: 'Macdonald',
      lastName: 'Sparks',
      email: 'macdonaldsparks@limozen.com'
    },
    {
      id: '5d9b75bdc5e2f681096efd45',
      firstName: 'Kirkland',
      lastName: 'Garrett',
      email: 'kirklandgarrett@limozen.com'
    },
    {
      id: '5d9b75bdd64e16c633327a8d',
      firstName: 'Bowen',
      lastName: 'Shepherd',
      email: 'bowenshepherd@limozen.com'
    },
    {
      id: '5d9b75bd2026e505e7a576a6',
      firstName: 'Amanda',
      lastName: 'Jordan',
      email: 'amandajordan@limozen.com'
    },
    {
      id: '5d9b75bd17820e9b08d09660',
      firstName: 'Sherry',
      lastName: 'Ballard',
      email: 'sherryballard@limozen.com'
    },
    {
      id: '5d9b75bd0b7ea1ddf2189da7',
      firstName: 'Shawna',
      lastName: 'Coffey',
      email: 'shawnacoffey@limozen.com'
    },
    {
      id: '5d9b75bd798ab42b1052a7b1',
      firstName: 'Francisca',
      lastName: 'Bray',
      email: 'franciscabray@limozen.com'
    },
    {
      id: '5d9b75bd5e32ceb3b78347f8',
      firstName: 'Noel',
      lastName: 'Gilmore',
      email: 'noelgilmore@limozen.com'
    },
    {
      id: '5d9b75bd7b06048f034acac7',
      firstName: 'Stephenson',
      lastName: 'Decker',
      email: 'stephensondecker@limozen.com'
    },
    {
      id: '5d9b75bddc529af83f3c8f9a',
      firstName: 'Armstrong',
      lastName: 'Moran',
      email: 'armstrongmoran@limozen.com'
    },
    {
      id: '5d9b75bd23ed271e02970ef0',
      firstName: 'Shelton',
      lastName: 'Roman',
      email: 'sheltonroman@limozen.com'
    },
    {
      id: '5d9b75bd23d16cf8e867469b',
      firstName: 'Johnston',
      lastName: 'Hendricks',
      email: 'johnstonhendricks@limozen.com'
    },
    {
      id: '5d9b75bd9ffae7452cd58e24',
      firstName: 'Patti',
      lastName: 'Sanford',
      email: 'pattisanford@limozen.com'
    },
    {
      id: '5d9b75bd71b58bb04f8e8284',
      firstName: 'Doreen',
      lastName: 'Shields',
      email: 'doreenshields@limozen.com'
    },
    {
      id: '5d9b75bded388bd39cf0d897',
      firstName: 'Brown',
      lastName: 'Navarro',
      email: 'brownnavarro@limozen.com'
    },
    {
      id: '5d9b75bd5ba305b3d0517d50',
      firstName: 'Russell',
      lastName: 'Sloan',
      email: 'russellsloan@limozen.com'
    }
  ];

  getAccounts(): Observable<Account[]> {
    return of(this.mockAccounts);
  }
}
